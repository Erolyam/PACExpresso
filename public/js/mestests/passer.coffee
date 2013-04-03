#router = new Backbone.Router( { routes:{}  })
#
#router.routes['help'] = 'help'
#
#Backbone.history.start({pushState: true})
#router.navigate("help/troubleshooting", {trigger: true, replace: true})

class MestestsPasser
  @Qaire = null

  constructor: () ->
    @Qaire = window.jsp.qaire
    @Qaire.submited_data_json = JSON.parse @Qaire.submited_data_json

    # initialise submited_data_json
    if @Qaire.submited_data_json is null
      @Qaire.submited_data_json = _.times JSON.parse(@Qaire.questionAlineas_json).length, ()->
        return 0;

  go: () ->
    #console.log(@Qaire)
    @renderLis();

    # handler quand on clique sur un <li>
    $(".passer .qtabctn").on "click", "li", @handlerClickOnLi

    # handler quand on clique sur un <li>
    $(".passer footer").on "click", "button", @handlerClickOnFooterButton

    # Simule l'appui sur le premier <li>
    $(".passer .qtabctn li").first().trigger('click')

  # affiche la liste des alinéas, à gauche. Appelé une seule fois
  renderLis: () ->
    target = $(".passer .qtabctn ul")
    target.empty()

    # ajoute un <li> pour chaque alinéa
    _.forEach JSON.parse(@Qaire.questionAlineas_json), (alineaId, index) ->
      html = "<li data-alineaid='#{alineaId}'' data-num='#{index}'>#{index+1}</li>"
      target.append $(html)

    # un dernier <li> pour récapitulatif
    html = "<li>#</li>"
    target.append $(html)


  # handler quand on click sur un <li>
  handlerClickOnLi: (e) =>
    #target/currentTarget: <li>
    #delegateTarget:div.span1 qtabctn
    @handleUserAnswer()

    li = $(e.currentTarget)
    alineaId = li.data('alineaid')
    target  = $('.passer .qbodyctn')
    target.empty()

    # sélectionne le <li>
    li.siblings().removeClass "selected"
    li.addClass "selected"

    # sélectionne les boutons
    $("footer button").removeClass("disabled")
    $("footer button.actionprev").addClass("disabled") if (li.prev().length is 0)
    $("footer button.actionnext").addClass("disabled") if (li.next().length is 0)

    if (alineaId?)
      # clic sur un alinéa
      alinea  = @Qaire.aAlineas[alineaId]
      context = @Qaire.aContexts[alinea.question_id]
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
      total = @Qaire.submited_data_json[num]
      curWeight = 1
      _.forEach JSON.parse(alinea.answers), (answer, index) ->
        checked = ""
        checked = "checked" if (total & curWeight)
        curWeight <<= 1
        html = tpl({body:answer, letter:String.fromCharCode(65+index), checked:checked})
        targetAnswers.append(html)
    else
      # clic sur récapitulatif


  # handler quand on click sur un bouton du footer
  handlerClickOnFooterButton: (e) =>
    #target:<i> ou <button>
    #currentTarget: <button>
    #delegateTarget: <footer>
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

    newsub = _.clone @Qaire.submited_data_json
    newsub[res.num] = res.val
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
      data:{_method:'PUT', values:JSON.stringify(newsub)}
    }).fail (jqXHR, textStatus, errorThrown) ->
      alert "Erreur lors de l'enregistrement"

  ###
    Renvoie le résultat coché, en un nombre bitwise
    @returns null ou {num:, val:}
  ###
  retrieveUserAnswer: () =>
    li = $(".passer .qtabctn li.selected")
    curIndex = li.data("num")
    return null if (!curIndex?) # le li selected n'a pas de data-alineaid

    # curIndex : numéro (entre 0 et 6)
    aChks = $(".passer .alineaanswers").find(".letter input[type=checkbox]")
    curWeight = 1
    total = 0
    _.each aChks, (elem) ->
      total += curWeight if $(elem).prop("checked")
      curWeight <<= 1
    return {num:curIndex, val:total}
