
class AdminExamens
  #@static = "static variable"
  examens = null
  poActive = null
  exPoolCount = null

  constructor: () ->
    @poActive = false   # limite à un seul popover
    @examens = _.map(window.jsp.examens)
    @exPoolCount = window.jsp.exPoolCount

  go: () ->
    dt = $("div.examens table.dteditor")

    aoColumns = _.map _.keys(@examens[0]), (key) ->
        {sTitle:key, mData:key}

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

    dt.on "click", "tbody tr td", (e) =>
      # aPos: [rowIndex, colVisibleIndex, colAllIndex]
      aPos = dt.fnGetPosition(e.target)
      content = dt.fnGetData(aPos[0], aPos[2])
      console.log content

      #dt.fnUpdate("bla", aPos[0], aPos[2])

