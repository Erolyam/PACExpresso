// Generated by CoffeeScript 1.9.1
var MestestsPasser,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

MestestsPasser = (function() {
  MestestsPasser.Qaire = null;

  function MestestsPasser() {
    this.retrieveUserAnswer = bind(this.retrieveUserAnswer, this);
    this.solutionsReceived = bind(this.solutionsReceived, this);
    this.handlerSubmitQuestionnaire = bind(this.handlerSubmitQuestionnaire, this);
    this.handleUserAnswer = bind(this.handleUserAnswer, this);
    this.handlerClickOnNavButton = bind(this.handlerClickOnNavButton, this);
    this.handlerClickOnLi = bind(this.handlerClickOnLi, this);
    this.Qaire = window.jsp.qaire;
    this.aAlineas = window.jsp.aAlineas;
    this.aContexts = window.jsp.aContexts;
    this.aQaireAlineas = window.jsp.aQaireAlineas;
    this.showSolution = window.jsp.showSolution;
    _.forEach(this.aQaireAlineas, (function(_this) {
      return function(qaireAlinea, index) {
        return qaireAlinea.answer != null ? qaireAlinea.answer : qaireAlinea.answer = 0;
      };
    })(this));
  }


  /*
    Prépare le questionnaire, installe les handlers
   */

  MestestsPasser.prototype.go = function() {
    this.renderLis();
    $(".passer .qtabctn").on("click", "li", this.handlerClickOnLi);
    $(".passer .navbuttons").on("click", "button", this.handlerClickOnNavButton);
    $(".passer .qbodyctn").on("click", "button.actionsubmit", this.handlerSubmitQuestionnaire);
    return $(".passer .qtabctn li").first().trigger('click');
  };


  /*
    Affiche la liste des alinéas, à gauche.
    Appelé une seule fois et à la réception des solutions
   */

  MestestsPasser.prototype.renderLis = function() {
    var html, target;
    target = $(".passer .qtabctn ul");
    target.empty();
    _.forEach(this.aQaireAlineas, (function(_this) {
      return function(qaireAlinea) {
        var correct, etu_ans, html, img, index, qaireAlineaId, resultClass, solutio;
        qaireAlineaId = qaireAlinea.id;
        index = parseInt(qaireAlinea.order, 10);
        resultClass = 'result';
        img = "";
        if (_this.Qaire.score != null) {
          etu_ans = parseInt(qaireAlinea.answer, 10);
          solutio = parseInt(qaireAlinea.solution, 10);
          correct = qaireAlinea.correction;
          if ((etu_ans === solutio) || (correct === 'right')) {
            resultClass = 'result-right';
            img = "<img src='public/img/green_64black.png' />";
          } else {
            resultClass = 'result-wrong';
            img = "<img src='public/img/red_64black.png' />";
          }
        }
        html = "<li class='" + resultClass + "' data-qairealineaid='" + qaireAlineaId + "' data-num='" + index + "'>" + (index + 1) + img + "</li>";
        return target.append($(html));
      };
    })(this));
    html = "<li data-num='#'>#</li>";
    return target.append($(html));
  };


  /*
    Handler quand on click sur un <li>
    Appelle l'envoi des checkbox au serveur
   */

  MestestsPasser.prototype.handlerClickOnLi = function(e) {
    var alinea, context, curWeight, html, li, num, qaireAlinea, qaireAlineaId, solution, target, targetAnswers, total, tpl;
    this.handleUserAnswer();
    li = $(e.currentTarget);
    qaireAlineaId = li.data('qairealineaid');
    target = $('.passer .qbodyctn');
    target.empty();
    li.siblings().removeClass("selected");
    li.addClass("selected");
    $(".passer .navbuttons button").removeClass("disabled");
    if (li.prev().length === 0) {
      $(".passer .navbuttons button.actionprev").addClass("disabled");
    }
    if (li.next().length === 0) {
      $(".passer .navbuttons button.actionnext").addClass("disabled");
    }
    if ((qaireAlineaId != null)) {
      qaireAlinea = this.aQaireAlineas[qaireAlineaId];
      alinea = this.aAlineas[qaireAlinea.questionalinea_id];
      context = this.aContexts[alinea.questioncontext_id];
      num = li.data("num");
      tpl = _.template($('#tplqContext').html().trim());
      html = tpl({
        title: context.title,
        body: context.body
      });
      target.append(html);
      tpl = _.template($('#tplqAlinea').html().trim());
      html = tpl({
        body: alinea.body
      });
      target.append(html);
      targetAnswers = target.find(".alineaanswers");
      tpl = _.template($('#tplqAlineaAnswer').html().trim());
      total = parseInt(qaireAlinea.answer, 10);
      solution = null;
      if (this.showSolution) {
        solution = qaireAlinea.solution;
      }
      if (solution != null) {
        solution = parseInt(solution, 10);
      }
      curWeight = 1;
      return _.forEach(JSON.parse(alinea.answers_json), (function(_this) {
        return function(answer, index) {
          var checked, checkedSol, disabled;
          checked = "";
          if (total & curWeight) {
            checked = "checked";
          }
          checkedSol = "";
          if (solution != null) {
            if (solution & curWeight) {
              checkedSol = "checked";
            }
          }
          curWeight <<= 1;
          disabled = _this.Qaire.score !== null ? true : false;
          html = tpl({
            body: answer,
            letter: String.fromCharCode(65 + index),
            disabled: disabled,
            checked: checked,
            solution: solution,
            checkedSol: checkedSol
          });
          return targetAnswers.append(html);
        };
      })(this));
    } else {
      if (this.Qaire.score === null) {
        tpl = _.template($('#tplqRecapConfirm').html().trim());
        html = tpl({
          qaire: this.Qaire,
          showSolution: this.showSolution
        });
        return target.append(html);
      } else {
        tpl = _.template($('#tplqResult').html().trim());
        html = tpl({
          qaire: this.Qaire,
          showSolution: this.showSolution
        });
        return target.append(html);
      }
    }
  };


  /*
    Handler quand on click sur les boutons previous/next
    Simule l'appui sur le <li> correspondant
   */

  MestestsPasser.prototype.handlerClickOnNavButton = function(e) {
    var button, li;
    button = $(e.currentTarget);
    li = $(".passer .qtabctn li.selected");
    if (button.hasClass('actionnext')) {
      return li.next().trigger('click');
    } else if (button.hasClass('actionprev')) {
      return li.prev().trigger('click');
    }
  };


  /*
    Récupère les croix de l'étudiant et met à jour @Qaire
    A appeler à chaque fois qu'on change de page
    Envoie au serveur
   */

  MestestsPasser.prototype.handleUserAnswer = function() {
    var after, before, qaireAlinea, qaireAlineaId, res, url;
    res = this.retrieveUserAnswer();
    if (res === null) {
      return;
    }
    qaireAlineaId = res.qaireAlineaId;
    qaireAlinea = this.aQaireAlineas[qaireAlineaId];
    before = parseInt(qaireAlinea.answer, 10);
    after = res.val;
    if (before === after) {
      return;
    }
    url = window.jsp.aUrls.thistst;
    return $.ajax({
      url: url,
      method: 'POST',
      data: {
        _method: 'PUT',
        qaireAlineaId: qaireAlineaId,
        answer: after
      },
      timeout: 20000
    }).fail((function(_this) {
      return function(jqXHR, textStatus, errorThrown) {
        return alert("Erreur lors de l'enregistrement");
      };
    })(this)).done((function(_this) {
      return function(data, textStatus, jqXHR) {
        return qaireAlinea.answer = after;
      };
    })(this));
  };


  /*
   */

  MestestsPasser.prototype.handlerSubmitQuestionnaire = function() {
    var url;
    url = window.jsp.aUrls.thistst;
    return $.ajax({
      url: url,
      method: 'POST',
      data: {
        _method: 'POST',
        submit: 'true'
      },
      timeout: 20000
    }).fail((function(_this) {
      return function(jqXHR, textStatus, errorThrown) {
        return alert("Erreur lors de l'enregistrement");
      };
    })(this)).done((function(_this) {
      return function(data, textStatus, jqXHR) {
        var resp, ret, status, type;
        status = jqXHR.status;
        type = jqXHR.getResponseHeader('content-type');
        resp = jqXHR.responseText;
        if (status !== 200 || !(type.substr(0, 16) === "application/json")) {
          alert("Le serveur n'a pas pu enregistrer le questionnaire status=" + status + " type=" + type + " response=" + resp);
          return;
        }
        ret = JSON.parse(resp);
        _this.Qaire = ret.qaire;
        _this.aQaireAlineas = ret.aQaireAlineas;
        return _this.solutionsReceived();
      };
    })(this));
  };


  /*
    Met en couleur les alinéas (juste ou faux)
   */

  MestestsPasser.prototype.solutionsReceived = function() {
    this.renderLis();
    return $(".qtabctn li[data-num=#]").trigger('click');
  };


  /*
    Renvoie le résultat coché, en un nombre bitwise
    @returns null ou {num:, val:, qaireAlineasId}
   */

  MestestsPasser.prototype.retrieveUserAnswer = function() {
    var aChks, curIndex, curWeight, li, qaireAlineaId, total;
    li = $(".passer .qtabctn li.selected");
    curIndex = li.data("num");
    qaireAlineaId = li.data("qairealineaid");
    if (qaireAlineaId == null) {
      return null;
    }
    aChks = $(".passer .alineaanswers").find(".letter input.etu[type=checkbox]");
    curWeight = 1;
    total = 0;
    _.each(aChks, function(elem) {
      if ($(elem).prop("checked")) {
        total += curWeight;
      }
      return curWeight <<= 1;
    });
    return {
      num: curIndex,
      val: total,
      qaireAlineaId: qaireAlineaId
    };
  };

  return MestestsPasser;

})();

//# sourceMappingURL=passer.js.map
