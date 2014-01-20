
class AdminExamens
  #@static = "static variable"
  examens = null
  poActive = null

  constructor: () ->
    @poActive = false   # limite à un seul popover
    @examens = _.map(window.jsp.examens)

  go: () ->
    $("div.examens table.dteditor").dataTable
      bPaginate:false, bFilter:false, bInfo:false, iDisplayLength:5,
      aaData: @examens,
      aoColumns: _.map _.keys(@examens[0]), (key) ->
        console.log key
        {sTitle:key, mData:key}


    $("div.examens table.dteditor").addClass("table table-striped table-bordered")

