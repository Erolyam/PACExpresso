
class AdminStats
  #@static = "static variable"
  constructor: () ->
    @poActive = false   # limite à un seul popover

  go: () ->
    $("div.bilan table").dataTable
      bPaginate:false, bFilter:false, bInfo:false, iDisplayLength:5,

    $("div.bilan table").addClass("table table-striped table-bordered")


    $("div.bilan table").on "click", "tr", (e) =>
      # deltarget:table   target:td   curTar:tr
      target = $(e.currentTarget).find "td:nth-child(1)"  # la première colonne
      id = target.text() # récupération de l'id
      url = window.jsp.urlAlinea
      url = url.replace("[:id]", id)
      url = url.replace("[:type]", "popover")


      if target.data("poloaded") is undefined
        # popover pas encore chargé
        if @poActive isnt false
          @poActive.popover("hide")
        target.data("poloaded", "waiting")
        @poActive = target # en cours de chargement. Ne pas autoriser autre popover
        # charge le popover et l'affiche
        $.ajax(url, {}).done (body)->
          target.data("poloaded", "1")
          target.popover({html:true, content:body, trigger:"manual", container:".bilan"}).popover("show");
      else if target.data("poloaded") is "1"
        # popover chargé
        same = target.is(@poActive) # clic sur le même ?
        if @poActive isnt false
          @poActive.popover("hide")
          @poActive = false
        unless same
          # si on a pas cliqué sur le même, affiche le popover
          target.popover("show")
          @poActive = target

    ###
    $("div.bilan table").on "click", "tr td:nth-child(2)", (e) =>
      id = $(e.target).prev().text()
      url = window.jsp.urlAlinea
      url = url.replace("[:id]", id)
      url = url.replace("[:type]", "show")

      win1 = window.open("", "_blank")
      e.preventDefault()
      if win1 is null
        alert "Autorisez cette page à ouvrir des popups."

      win1.location.href = url;
    ###




