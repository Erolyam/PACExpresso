// Generated by CoffeeScript 1.6.3
var MestestsPasser,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

MestestsPasser = (function() {
  MestestsPasser.Qaire = null;

  function MestestsPasser() {
    this.retrieveUserAnswer = __bind(this.retrieveUserAnswer, this);
    this.solutionsReceived = __bind(this.solutionsReceived, this);
    this.handlerSubmitQuestionnaire = __bind(this.handlerSubmitQuestionnaire, this);
    this.handleUserAnswer = __bind(this.handleUserAnswer, this);
    this.handlerClickOnNavButton = __bind(this.handlerClickOnNavButton, this);
    this.handlerClickOnLi = __bind(this.handlerClickOnLi, this);
    var submited_data;
    this.Qaire = window.jsp.qaire;
    this.aAlineas = window.jsp.aAlineas;
    this.aContexts = window.jsp.aContexts;
    if (this.Qaire.submited_data_json === null) {
      submited_data = _.times(JSON.parse(this.Qaire.questionAlineas_json).length, function() {
        return 0;
      });
      this.Qaire.submited_data_json = JSON.stringify(submited_data);
    }
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
    var html, target,
      _this = this;
    target = $(".passer .qtabctn ul");
    target.empty();
    _.forEach(JSON.parse(this.Qaire.questionAlineas_json), function(alineaId, index) {
      var etu_ans, html, resultClass, solutio;
      resultClass = 'result';
      if ((_this.Qaire.solution_json != null)) {
        resultClass = 'result-wrong';
        etu_ans = JSON.parse(_this.Qaire.submited_data_json)[index];
        solutio = JSON.parse(_this.Qaire.solution_json)[index];
        if (etu_ans === solutio) {
          resultClass = 'result-right';
        }
      }
      html = "<li class='" + resultClass + "' data-alineaid='" + alineaId + "' data-num='" + index + "'>" + (index + 1) + "</li>";
      return target.append($(html));
    });
    html = "<li data-num='#'>#</li>";
    return target.append($(html));
  };

  /*
    Handler quand on click sur un <li>
    Appelle l'envoi des checkbox au serveur
  */


  MestestsPasser.prototype.handlerClickOnLi = function(e) {
    var alinea, alineaId, context, curWeight, html, li, num, solution, target, targetAnswers, total, tpl;
    this.handleUserAnswer();
    li = $(e.currentTarget);
    alineaId = li.data('alineaid');
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
    if ((alineaId != null)) {
      alinea = this.aAlineas[alineaId];
      context = this.aContexts[alinea.question_id];
      num = li.data("num");
      tpl = _.template($('#tplqContext').html().trim());
      html = tpl({
        title: context.title,
        body: context.context
      });
      target.append(html);
      tpl = _.template($('#tplqAlinea').html().trim());
      html = tpl({
        body: alinea.body
      });
      target.append(html);
      targetAnswers = target.find(".alineaanswers");
      tpl = _.template($('#tplqAlineaAnswer').html().trim());
      total = JSON.parse(this.Qaire.submited_data_json)[num];
      solution = this.Qaire.solution_json;
      if (solution !== null) {
        solution = JSON.parse(solution)[num];
      }
      curWeight = 1;
      return _.forEach(JSON.parse(alinea.answers), function(answer, index) {
        var checked, checkedSol;
        checked = "";
        if (total & curWeight) {
          checked = "checked";
        }
        checkedSol = "";
        if (solution !== null) {
          if (solution & curWeight) {
            checkedSol = "checked";
          }
        }
        curWeight <<= 1;
        html = tpl({
          body: answer,
          letter: String.fromCharCode(65 + index),
          checked: checked,
          solution: solution,
          checkedSol: checkedSol
        });
        return targetAnswers.append(html);
      });
    } else {
      if (this.Qaire.score === null) {
        tpl = _.template($('#tplqRecapConfirm').html().trim());
        html = tpl(this.Qaire);
        return target.append(html);
      } else {
        tpl = _.template($('#tplqResult').html().trim());
        html = tpl(this.Qaire);
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
    var newsub, res, url,
      _this = this;
    res = this.retrieveUserAnswer();
    if (res === null) {
      return;
    }
    newsub = JSON.parse(this.Qaire.submited_data_json);
    newsub[res.num] = res.val;
    newsub = JSON.stringify(newsub);
    if (_.isEqual(newsub, this.Qaire.submited_data_json)) {
      return;
    }
    this.Qaire.submited_data_json = newsub;
    url = window.jsp.aUrls.thistst;
    return $.ajax({
      url: url,
      method: 'POST',
      data: {
        _method: 'PUT',
        values: newsub
      }
    }).fail(function(jqXHR, textStatus, errorThrown) {
      return alert("Erreur lors de l'enregistrement");
    });
  };

  /*
  */


  MestestsPasser.prototype.handlerSubmitQuestionnaire = function() {
    var newsub, url,
      _this = this;
    newsub = this.Qaire.submited_data_json;
    url = window.jsp.aUrls.thistst;
    return $.ajax({
      url: url,
      method: 'POST',
      data: {
        _method: 'POST',
        values: newsub
      }
    }).fail(function(jqXHR, textStatus, errorThrown) {
      return alert("Erreur lors de l'enregistrement");
    }).done(function(data, textStatus, jqXHR) {
      if (jqXHR.status !== 200 || !(jqXHR.getResponseHeader('content-type').substr(0, 16) === "application/json")) {
        alert("Le serveur n'a pas pu enregistrer le questionnaire");
        return;
      }
      _this.Qaire = JSON.parse(jqXHR.responseText);
      return _this.solutionsReceived();
    });
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
    @returns null ou {num:, val:}
  */


  MestestsPasser.prototype.retrieveUserAnswer = function() {
    var aChks, curIndex, curWeight, li, total;
    li = $(".passer .qtabctn li.selected");
    curIndex = li.data("num");
    if (curIndex == null) {
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
      val: total
    };
  };

  return MestestsPasser;

})();
