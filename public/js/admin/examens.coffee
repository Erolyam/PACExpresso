
class AdminExamens
  #@static = "static variable"
  examens = null
  poActive = null

  constructor: () ->
    @poActive = false   # limite à un seul popover
    @examens = _.map(window.jsp.examens)

  go: () ->
    dt = $("div.examens table.dteditor")
    dt.dataTable
      bPaginate:false, bFilter:false, bInfo:false, iDisplayLength:5,
      aaData: @examens,
      aoColumns: _.map _.keys(@examens[0]), (key) ->
        console.log key
        {sTitle:key, mData:key}

    dt.addClass("table table-striped table-bordered")

    dt.on "click", "tbody tr td", (e) =>
      # aPos: [rowIndex, colVisibleIndex, colAllIndex]
      aPos = dt.fnGetPosition(e.target)
      content = dt.fnGetData(aPos[0], aPos[2])
      console.log content

      dt.fnUpdate("bla", aPos[0], aPos[2])

