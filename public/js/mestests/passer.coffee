#router = new Backbone.Router( { routes:{}  })
#
#router.routes['help'] = 'help'
#
#Backbone.history.start({pushState: true})
#router.navigate("help/troubleshooting", {trigger: true, replace: true})

class MestestsPasser
  @Qaire = null

  constructor: () ->
    @Qaire         = window.jsp.qaire
    @aAlineas      = window.jsp.aAlineas
    @aContexts     = window.jsp.aContexts
    @aQaireAlineas = window.jsp.aQaireAlineas
    @showSolution  = window.jsp.showSolution

    # initialise les réponses à zéro
    _.forEach @aQaireAlineas, (qaireAlinea, index) =>
      qaireAlinea.answer ?= 0


  ###
    Prépare le questionnaire, installe les handlers
  ###
  go: () ->
    #console.log(@Qaire)
    @renderLis();

    # handler quand on clique sur un <li>
    $(".passer .qtabctn").on "click", "li", @handlerClickOnLi

    # handler quand on clique sur les bouttons << et >>
    $(".passer .navbuttons").on "click", "button", @handlerClickOnNavButton

    # handler bouton valider le questionnaire
    $(".passer .qbodyctn").on "click", "button.actionsubmit", @handlerSubmitQuestionnaire

    # Simule l'appui sur le premier <li>
    $(".passer .qtabctn li").first().trigger('click')


  ###
    Affiche la liste des alinéas, à gauche.
    Appelé une seule fois et à la réception des solutions
  ###
  renderLis: () ->
    target = $(".passer .qtabctn ul")
    target.empty()

    # ajoute un <li> pour chaque alinéa
    _.forEach @aQaireAlineas, (qaireAlinea) =>
      qaireAlineaId = qaireAlinea.id
      index    = parseInt(qaireAlinea.order, 10)
      resultClass = 'result'
      img = ""
      if qaireAlinea.solution?
        #console.log(@Qaire.solution_json)
        #img = "<img src='public/img/red_64.png' />"
        etu_ans = parseInt(qaireAlinea.answer, 10)
        solutio = parseInt(qaireAlinea.solution,10)
        if etu_ans is solutio
          resultClass = 'result-right'
          img = "<img src='public/img/green_64black.png' />"
        else
          resultClass = 'result-wrong'
          img = "<img src='public/img/red_64black.png' />"
      html = "<li class='#{resultClass}' data-qairealineaid='#{qaireAlineaId}' data-num='#{index}'>#{index+1}#{img}</li>"
      target.append $(html)

    # un dernier <li> pour récapitulatif
    html = "<li data-num='#'>#</li>"
    target.append $(html)


  ###
    Handler quand on click sur un <li>
    Appelle l'envoi des checkbox au serveur
  ###
  handlerClickOnLi: (e) =>
    #target/currentTarget: <li>
    #delegateTarget:div.col-md-1 qtabctn
    @handleUserAnswer()

    li = $(e.currentTarget)
    qaireAlineaId = li.data('qairealineaid') # un nombre, ou '#''

    target  = $('.passer .qbodyctn')
    target.empty()

    # sélectionne le <li>
    li.siblings().removeClass "selected"
    li.addClass "selected"

    # sélectionne les boutons
    $(".passer .navbuttons button").removeClass("disabled")
    $(".passer .navbuttons button.actionprev").addClass("disabled") if (li.prev().length is 0)
    $(".passer .navbuttons button.actionnext").addClass("disabled") if (li.next().length is 0)

    if (qaireAlineaId?)
      # clic sur un alinéa
      qaireAlinea = @aQaireAlineas[qaireAlineaId]
      alinea  = @aAlineas[qaireAlinea.questionalinea_id]
      context = @aContexts[alinea.questioncontext_id]
      num     = li.data("num") # numéro (de 0 à 6)
      #console.log context, alinea

      # contexte : titre et éventuel body
      tpl = _.template $('#tplqContext').html().trim()
      html = tpl({title:context.title, body:context.body})
      target.append(html)

      # contexte : titre et éventuel body
      tpl = _.template $('#tplqAlinea').html().trim()
      html = tpl({body:alinea.body})
      target.append(html)

      # ajoute les différentes réponses
      targetAnswers = target.find(".alineaanswers")
      tpl = _.template $('#tplqAlineaAnswer').html().trim()
      total = parseInt(qaireAlinea.answer, 10)  # la réponse de l'étudiant
      solution = null
      if @showSolution
        solution = qaireAlinea.solution           # la solution cachée (si indiquée)
      # on utilise la solution fournie. Si on veut la solution réelle: solution = alinea.solution
      if solution?
        solution = parseInt(solution, 10)
      curWeight = 1
      _.forEach JSON.parse(alinea.answers_json), (answer, index) ->
        checked    = ""
        checked    = "checked" if (total & curWeight)
        checkedSol = ""
        if solution?
          checkedSol = "checked" if (solution & curWeight)
        curWeight <<= 1
        html = tpl({body:answer, letter:String.fromCharCode(65+index), checked:checked, solution:solution, checkedSol:checkedSol})
        targetAnswers.append(html)
    else
      # clic sur récapitulatif
      if @Qaire.score is null
        # affiche le bouton de validation du formulaire
        tpl = _.template $('#tplqRecapConfirm').html().trim()
        html = tpl({qaire:@Qaire, showSolution:@showSolution})
        target.append(html)
      else
        # Affiche le score
        tpl = _.template $('#tplqResult').html().trim()
        html = tpl({qaire:@Qaire, showSolution:@showSolution})
        target.append(html)


  ###
    Handler quand on click sur les boutons previous/next
    Simule l'appui sur le <li> correspondant
  ###
  handlerClickOnNavButton: (e) =>
    #target:<i> ou <button>
    #currentTarget: <button>
    #delegateTarget: .navbuttons
    button = $(e.currentTarget)
    li     = $(".passer .qtabctn li.selected") # le <li> sélectionné
    if button.hasClass('actionnext')
      li.next().trigger('click')
    else if button.hasClass('actionprev')
      li.prev().trigger('click')


  ###
    Récupère les croix de l'étudiant et met à jour @Qaire
    A appeler à chaque fois qu'on change de page
    Envoie au serveur
  ###
  handleUserAnswer: () =>
    res = @retrieveUserAnswer();
    if res is null
      # aucune page sélectionnée. (c'est le cas avant renderLis)
      return

    qaireAlineaId = res.qaireAlineaId
    qaireAlinea = @aQaireAlineas[qaireAlineaId]

    before = parseInt(qaireAlinea.answer, 10)
    after  = res.val

    # pas de différence: retour
    return if before == after

    # enregistre les réponses sur le serveur
    url = window.jsp.aUrls.thistst
    $.ajax({
      url:url
      method:'POST'
      data:{_method:'PUT', qaireAlineaId:qaireAlineaId, answer:after}
      timeout:20000
    }).fail (jqXHR, textStatus, errorThrown) =>
      alert "Erreur lors de l'enregistrement"
    .done (data, textStatus, jqXHR) =>
      # save the result once the request is done
      qaireAlinea.answer = after


  ###
  ###
  handlerSubmitQuestionnaire: () =>
    # envoi au serveur
    url = window.jsp.aUrls.thistst
    $.ajax({
      url:url
      method:'POST'
      data:{_method:'POST', submit:'true'}
      timeout:20000
    })
      .fail (jqXHR, textStatus, errorThrown) =>
        alert "Erreur lors de l'enregistrement"
      .done (data, textStatus, jqXHR) =>
        status = jqXHR.status
        type = jqXHR.getResponseHeader('content-type')
        resp = jqXHR.responseText
        if status isnt 200 or !(type.substr(0, 16) is "application/json")
          alert "Le serveur n'a pas pu enregistrer le questionnaire status=#{status} type=#{type} response=#{resp}"
          return
        ret = JSON.parse(resp)
        @Qaire = ret.qaire
        @aQaireAlineas = ret.aQaireAlineas

        @solutionsReceived()

  ###
    Met en couleur les alinéas (juste ou faux)
  ###
  solutionsReceived: () =>
    # redraw les <li> avec la classe result-right ou result-wrong
    @renderLis();
    # simule l'appui sur le li pour afficher le bilan et sélection le li
    $(".qtabctn li[data-num=#]").trigger('click')






  ###
    Renvoie le résultat coché, en un nombre bitwise
    @returns null ou {num:, val:, qaireAlineasId}
  ###
  retrieveUserAnswer: () =>
    li = $(".passer .qtabctn li.selected")
    curIndex = li.data("num")
    qaireAlineaId = li.data("qairealineaid")
    return null if (!qaireAlineaId?) # aucun le li selected ou page en cours: récapitulatif

    # curIndex : numéro (entre 0 et 6)
    aChks = $(".passer .alineaanswers").find(".letter input.etu[type=checkbox]")
    curWeight = 1
    total = 0
    _.each aChks, (elem) ->
      total += curWeight if $(elem).prop("checked")
      curWeight <<= 1
    return {num:curIndex, val:total, qaireAlineaId: qaireAlineaId}
