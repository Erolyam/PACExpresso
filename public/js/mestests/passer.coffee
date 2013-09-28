#router = new Backbone.Router( { routes:{}  })
#
#router.routes['help'] = 'help'
#
#Backbone.history.start({pushState: true})
#router.navigate("help/troubleshooting", {trigger: true, replace: true})

class MestestsPasser
  @Qaire = null

  constructor: () ->
    @Qaire     = window.jsp.qaire
    @aAlineas  = window.jsp.aAlineas
    @aContexts = window.jsp.aContexts

    # initialise submited_data_json
    if @Qaire.submited_data_json is null
      submited_data = _.times JSON.parse(@Qaire.questionAlineas_json).length, ()->
        return 0;
      @Qaire.submited_data_json = JSON.stringify(submited_data)

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
    _.forEach JSON.parse(@Qaire.questionAlineas_json), (alineaId, index) =>
      resultClass = 'result'
      if (@Qaire.solution_json?)
        #console.log(@Qaire.solution_json)
        resultClass = 'result-wrong'
        etu_ans = JSON.parse(@Qaire.submited_data_json)[index]
        solutio = JSON.parse(@Qaire.solution_json)[index]
        resultClass = 'result-right' if etu_ans is solutio
      html = "<li class='#{resultClass}' data-alineaid='#{alineaId}' data-num='#{index}'>#{index+1}</li>"
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
    alineaId = li.data('alineaid')
    target  = $('.passer .qbodyctn')
    target.empty()

    # sélectionne le <li>
    li.siblings().removeClass "selected"
    li.addClass "selected"

    # sélectionne les boutons
    $(".passer .navbuttons button").removeClass("disabled")
    $(".passer .navbuttons button.actionprev").addClass("disabled") if (li.prev().length is 0)
    $(".passer .navbuttons button.actionnext").addClass("disabled") if (li.next().length is 0)

    if (alineaId?)
      # clic sur un alinéa
      alinea  = @aAlineas[alineaId]
      context = @aContexts[alinea.question_id]
      num     = li.data("num") # numéro (de 0 à 6)
      #console.log context, alinea

      # contexte : titre et éventuel body
      tpl = _.template $('#tplqContext').html().trim()
      html = tpl({title:context.title, body:context.context})
      target.append(html)

      # contexte : titre et éventuel body
      tpl = _.template $('#tplqAlinea').html().trim()
      html = tpl({body:alinea.body})
      target.append(html)

      # ajoute les différentes réponses
      targetAnswers = target.find(".alineaanswers")
      tpl = _.template $('#tplqAlineaAnswer').html().trim()
      total = JSON.parse(@Qaire.submited_data_json)[num]
      solution = @Qaire.solution_json
      if (solution isnt null)
        solution = JSON.parse(solution)[num]
      curWeight = 1
      _.forEach JSON.parse(alinea.answers), (answer, index) ->
        checked    = ""
        checked    = "checked" if (total & curWeight)
        checkedSol = ""
        if solution isnt null
          checkedSol = "checked" if (solution & curWeight)
        curWeight <<= 1
        html = tpl({body:answer, letter:String.fromCharCode(65+index), checked:checked, solution:solution, checkedSol:checkedSol})
        targetAnswers.append(html)
    else
      # clic sur récapitulatif
      if @Qaire.score is null
        # affiche le bouton de validation du formulaire
        tpl = _.template $('#tplqRecapConfirm').html().trim()
        html = tpl(@Qaire)
        target.append(html)
      else
        # Affiche le score
        tpl = _.template $('#tplqResult').html().trim()
        html = tpl(@Qaire)
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
    return if (res is null)

    newsub = JSON.parse(@Qaire.submited_data_json)
    newsub[res.num] = res.val
    newsub = JSON.stringify(newsub)

    if _.isEqual(newsub, @Qaire.submited_data_json)
      # pas de différence: retour
      return

    # enregistre nouvelle version
    @Qaire.submited_data_json = newsub

    # enregistre les réponses sur le serveur
    url = window.jsp.aUrls.thistst
    $.ajax({
      url:url
      method:'POST'
      data:{_method:'PUT', values:newsub}
    }).fail (jqXHR, textStatus, errorThrown) =>
      alert "Erreur lors de l'enregistrement"



  ###
  ###
  handlerSubmitQuestionnaire: () =>
    # récupère les réponses de l'atudiant
    newsub = @Qaire.submited_data_json

    # envoi au serveur
    url = window.jsp.aUrls.thistst
    $.ajax({
      url:url
      method:'POST'
      data:{_method:'POST', values:newsub}
    })
      .fail (jqXHR, textStatus, errorThrown) =>
        alert "Erreur lors de l'enregistrement"
      .done (data, textStatus, jqXHR) =>
        if jqXHR.status isnt 200 or !(jqXHR.getResponseHeader('content-type').substr(0, 16) is "application/json")
          alert "Le serveur n'a pas pu enregistrer le questionnaire"
          return
        @Qaire = JSON.parse(jqXHR.responseText)
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
    @returns null ou {num:, val:}
  ###
  retrieveUserAnswer: () =>
    li = $(".passer .qtabctn li.selected")
    curIndex = li.data("num")
    return null if (!curIndex?) # le li selected n'a pas de data-alineaid

    # curIndex : numéro (entre 0 et 6)
    aChks = $(".passer .alineaanswers").find(".letter input.etu[type=checkbox]")
    curWeight = 1
    total = 0
    _.each aChks, (elem) ->
      total += curWeight if $(elem).prop("checked")
      curWeight <<= 1
    return {num:curIndex, val:total}
