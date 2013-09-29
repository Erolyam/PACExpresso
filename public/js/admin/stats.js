// Generated by CoffeeScript 1.6.3
var AdminStats;

AdminStats = (function() {
  function AdminStats() {
    this.poActive = false;
  }

  AdminStats.prototype.go = function() {
    var _this = this;
    $("div.bilan table").dataTable({
      bPaginate: false,
      bFilter: false,
      bInfo: false,
      iDisplayLength: 5
    });
    $("div.bilan table").addClass("table table-striped table-bordered");
    $("div.bilan table").on("click", "tr td:nth-child(1)", function(e) {
      var id, same, target, url;
      id = $(e.target).text();
      url = window.jsp.urlAlinea;
      url = url.replace("[:id]", id);
      url = url.replace("[:format]", "html");
      target = $(e.target);
      if (target.data("poloaded") === void 0) {
        if (_this.poActive !== false) {
          _this.poActive.popover("hide");
        }
        target.data("poloaded", "waiting");
        _this.poActive = target;
        return $.ajax(url, {}).done(function(body) {
          target.data("poloaded", "1");
          return target.popover({
            html: true,
            content: body,
            trigger: "manual",
            container: ".bilan"
          }).popover("show");
        });
      } else if (target.data("poloaded") === "1") {
        same = target.is(_this.poActive);
        if (_this.poActive !== false) {
          _this.poActive.popover("hide");
          _this.poActive = false;
        }
        if (!same) {
          target.popover("show");
          return _this.poActive = target;
        }
      }
    });
    return $("div.bilan table").on("click", "tr td:nth-child(2)", function(e) {
      var id, url, win1;
      id = $(e.target).prev().text();
      url = window.jsp.urlAlinea;
      url = url.replace("[:id]", id);
      url = url.replace("[:format]", "html");
      win1 = window.open("", "_blank");
      e.preventDefault();
      if (win1 === null) {
        alert("Autorisez cette page à ouvrir des popups.");
      }
      return win1.location.href = url;
    });
  };

  return AdminStats;

})();
