
class AdminStats
  constructor: () ->

  go: () ->
    $("div.bilan table").dataTable
      bPaginate:false, bFilter:false, bInfo:false, iDisplayLength:5,

    $("div.bilan table").addClass("table table-striped table-bordered")


    $("div.bilan table").on "click", "tr td:nth-child(1)", (e) =>
      id = $(e.target).text()
      url = window.jsp.urlAlinea
      url = url.replace("[:id]", id)
      url = url.replace("[:format]", "html")

      target = $(e.target)

      unless target.data("poloaded")?
        target.data("poloaded", "waiting")
        # charge le popover et l'affiche
        $.ajax(url, {}).done (body)->
          target.data("poloaded", "1")
          target.popover({html:true, content:body, trigger:"manual", container:".bilan"}).popover("show");
          target.data("poshown", "1")
      else if target.data("poloaded") is "1"
        # popover chargé
        if target.data("poshown") is "1"
          target.popover("hide")
          target.data("poshown", "0")
        else
          target.popover("show")
          target.data("poshown", "1")

    $("div.bilan table").on "click", "tr td:nth-child(2)", (e) =>
      id = $(e.target).prev().text()
      url = window.jsp.urlAlinea
      url = url.replace("[:id]", id)
      url = url.replace("[:format]", "html")

      win1 = window.open("", "_blank")
      e.preventDefault()
      if win1 is null
        alert "Autorisez cette page à ouvrir des popups."

      win1.location.href = url;




