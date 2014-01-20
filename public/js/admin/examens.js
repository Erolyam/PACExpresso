// Generated by CoffeeScript 1.6.3
var AdminExamens;

AdminExamens = (function() {
  var examens, poActive;

  examens = null;

  poActive = null;

  function AdminExamens() {
    this.poActive = false;
    this.examens = _.map(window.jsp.examens);
  }

  AdminExamens.prototype.go = function() {
    $("div.examens table.dteditor").dataTable({
      bPaginate: false,
      bFilter: false,
      bInfo: false,
      iDisplayLength: 5,
      aaData: this.examens,
      aoColumns: _.map(_.keys(this.examens[0]), function(key) {
        console.log(key);
        return {
          sTitle: key,
          mData: key
        };
      })
    });
    return $("div.examens table.dteditor").addClass("table table-striped table-bordered");
  };

  return AdminExamens;

})();
