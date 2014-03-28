###
# La liste des examens
# clic sur une ligne -> affiche l'éditeur d'examen
###
class AdminExamens
  #@static = "static variable"
  examens = null
  exPoolCount = null
  urlAdexa1 = null

  constructor: () ->
    @examens = _.map(window.jsp.examens)
    @exPoolCount = window.jsp.exPoolCount
    @urlAdexa1 = window.jsp.urlAdexa1

  go: () ->
    dt = @renderTable()

    dt.on "click", "tbody tr td", (e) =>
      # aPos: [rowIndex, colVisibleIndex, colAllIndex]
      aPos = dt.fnGetPosition(e.target)
      row = dt.fnGetData(aPos[0])
      url = gb.urlHelper @urlAdexa1,{id:row.id}
      #window.open url, "adexa1"
      window.location.href = url

      #dt.fnUpdate("bla", aPos[0], aPos[2])


  renderTable: () ->
    dt = $("div.examens table.dteditor")

    aoColumns = _.map _.keys(@examens[0]), (key) ->
        {sTitle:key, mData:key}

    # ajoute une colonne avec le nombre de questions dans le pool
    aoColumns.push {
      sTitle:"pool count",
      mData:(row, type, data) =>
        @exPoolCount[row.id]
    }

    dt.dataTable
      bPaginate:false, bFilter:false, bInfo:false, iDisplayLength:5,
      aaData: @examens,
      aoColumns: aoColumns

    dt.addClass("table table-striped table-bordered")

    return dt

