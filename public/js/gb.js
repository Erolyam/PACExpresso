// Generated by CoffeeScript 1.9.1

/* gb.js version 1.08 */
if (window.gb == null) {
  window.gb = {};
}

window.gb.dateIso = function(date) {
  return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2) + ' ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2) + ':' + ("0" + date.getSeconds()).slice(-2) + '.' + ("000" + date.getMilliseconds()).slice(-3);
};


/*
 * Return a url with all parameters replaced
 * example: urlHelper("/tea/que/[:id]", {id:95}) -> /tea/que/95
 * example: urlHelper("/tea/que/[:id]")          -> /tea/que
 * @dependency underscore/lodash
 */

window.gb.urlHelper = function(url, params) {
  if (params == null) {
    params = {};
  }
  _.each(params, function(val, key) {
    return url = url.replace(new RegExp("\\[:" + key + "\\]"), val);
  });
  url = url.replace(/\[:.*\]/, "");
  url = url.replace(/\/+/g, '/');
  url = url.replace(/\/+$/, '');
  return url;
};

window.gb.startsWith = function(s, needle) {
  var ref;
  return (s != null ? (ref = s.toString()) != null ? ref.slice(0, needle.length) : void 0 : void 0) === needle;
};


/*
 * Return right part of a string
 * example: removePrefix("harp12345678", "harp") -> "12345678"
 * example: removePrefix("harp12345678", "nothere") -> false
 */

window.gb.removePrefix = function(s, needle) {
  var p;
  p = window.gb.startsWith(s, needle);
  if (p) {
    p = s.slice(needle.length);
  }
  return p;
};

window.gb.endsWith = function(s, needle) {
  var ref;
  return (s != null ? (ref = s.toString()) != null ? ref.slice(-needle.length) : void 0 : void 0) === needle;
};

window.gb.trim = function(s) {
  var ref;
  return s != null ? (ref = s.toString()) != null ? ref.replace(/^\s+/, '').replace(/\s+$/, '') : void 0 : void 0;
};

window.gb.log = function() {
  if (window.console != null) {
    return window.console.log.apply(0, arguments);
  }
};

window.gb.addSlashes = function(arg) {
  return arg.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
};


/*
 * éclate une valeur "slashed"
 * ex "/4/5/" => ["4","5"]
 * _.map(["4","5"], function(a){return parseInt(a,10);}); -> [4,5]
 * _.map ["4","5"], (a) -> parseInt a,10 -> [4,5]
 */

window.gb.slashToArray = function(vals) {
  var ret;
  ret = vals === null || vals.length <= 2 ? [] : vals.substr(1, vals.length - 2).split("/");
  return ret;
};


/*
 * join une valeur en "slashed"
 * ex ["4","5"] => "/4/5/"
 */

window.gb.arrayToSlash = function(vals) {
  var ret;
  ret = vals == null ? "//" : "/" + (vals.join("/")) + "/";
  return ret;
};

window.gb.getCookie = function(cookieName, defaultValue) {
  var oRegex;
  oRegex = new RegExp("(?:; )?" + cookieName + "=([^;]*);?");
  if (oRegex.test(document.cookie)) {
    return decodeURIComponent(RegExp.$1);
  } else {
    return defaultValue;
  }
};


/*
 * set a cookie
 * if minutes in undefined, set a session cookie
 */

window.gb.setCookie = function(cookieName, cookieValue, minutes) {
  var cook, expires;
  cook = cookieName + "=" + encodeURIComponent(cookieValue);
  if (void 0 !== minutes) {
    expires = new Date();
    expires.setTime(expires.getTime() + (minutes * 60 * 1000));
    cook += ";expires=" + expires.toGMTString();
  }
  return document.cookie = cook;
};


/*
 * Delete a cookie by setting the date of expiry to yesterday
 */

window.gb.deleteCookie = function(cookieName) {
  var date;
  date = new Date();
  date.setDate(date.getDate() - 1);
  return document.cookie = escape(key) + '=;expires=' + date;
};


/*
 * Mimic Jquery $.ajax, but only call success callback if the response really is
 * JSON. Otherwise, call error callback
 * Provides a default error callback, displaying an alert on error
 * complete callback is left untouched
 */

window.gb.jqAjaxJSON = (function(_this) {
  return function(url, settings) {
    if ((settings != null) && (url != null)) {
      settings = jQuery.extend({}, settings);
      settings.url = url;
    } else {
      settings = jQuery.extend({}, url);
    }
    if (settings.data != null) {
      settings.data = JSON.parse(JSON.stringify(settings.data));
    }
    if (settings.method == null) {
      settings.method = "POST";
    }
    if (settings.success != null) {
      settings.originalSuccess = settings.success;
    }
    if (settings.error == null) {
      settings.error = function(jqxhr, textstatus, errorThrown) {
        return alert("erreur: " + errorThrown);
      };
    }
    settings.success = function(data, textStatus, jqxhr) {
      var contenttype;
      contenttype = jqxhr.getResponseHeader("Content-Type");
      if (window.gb.startsWith(contenttype, "application/json")) {
        if (typeof data === "object" && (data.gb_footer != null) && (window.jQuery != null)) {
          jQuery("footer.gb_footer").text(data.gb_footer);
          delete data.gb_footer;
          jqxhr.responseJSON = data;
        }
        if (settings.originalSuccess != null) {
          return settings.originalSuccess.apply(_this, [data, textStatus, jqxhr]);
        }
      } else {
        return settings.error(jqxhr, "error", "Réponse du serveur non json");
      }
    };
    return $.ajax(settings);
  };
})(this);

window.gb.ucwords = function(str) {
  return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
    return $1.toUpperCase();
  });
};

window.gb.removeAccents = function(s) {
  var l;
  l = {
    "Á": "A",
    "Ă": "A",
    "Ắ": "A",
    "Ặ": "A",
    "Ằ": "A",
    "Ẳ": "A",
    "Ẵ": "A",
    "Ǎ": "A",
    "Â": "A",
    "Ấ": "A",
    "Ậ": "A",
    "Ầ": "A",
    "Ẩ": "A",
    "Ẫ": "A",
    "Ä": "A",
    "Ǟ": "A",
    "Ȧ": "A",
    "Ǡ": "A",
    "Ạ": "A",
    "Ȁ": "A",
    "À": "A",
    "Ả": "A",
    "Ȃ": "A",
    "Ā": "A",
    "Ą": "A",
    "Å": "A",
    "Ǻ": "A",
    "Ḁ": "A",
    "Ⱥ": "A",
    "Ã": "A",
    "Ꜳ": "AA",
    "Æ": "AE",
    "Ǽ": "AE",
    "Ǣ": "AE",
    "Ꜵ": "AO",
    "Ꜷ": "AU",
    "Ꜹ": "AV",
    "Ꜻ": "AV",
    "Ꜽ": "AY",
    "Ḃ": "B",
    "Ḅ": "B",
    "Ɓ": "B",
    "Ḇ": "B",
    "Ƀ": "B",
    "Ƃ": "B",
    "Ć": "C",
    "Č": "C",
    "Ç": "C",
    "Ḉ": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Ƈ": "C",
    "Ȼ": "C",
    "Ď": "D",
    "Ḑ": "D",
    "Ḓ": "D",
    "Ḋ": "D",
    "Ḍ": "D",
    "Ɗ": "D",
    "Ḏ": "D",
    "ǲ": "D",
    "ǅ": "D",
    "Đ": "D",
    "Ƌ": "D",
    "Ǳ": "DZ",
    "Ǆ": "DZ",
    "É": "E",
    "Ĕ": "E",
    "Ě": "E",
    "Ȩ": "E",
    "Ḝ": "E",
    "Ê": "E",
    "Ế": "E",
    "Ệ": "E",
    "Ề": "E",
    "Ể": "E",
    "Ễ": "E",
    "Ḙ": "E",
    "Ë": "E",
    "Ė": "E",
    "Ẹ": "E",
    "Ȅ": "E",
    "È": "E",
    "Ẻ": "E",
    "Ȇ": "E",
    "Ē": "E",
    "Ḗ": "E",
    "Ḕ": "E",
    "Ę": "E",
    "Ɇ": "E",
    "Ẽ": "E",
    "Ḛ": "E",
    "Ꝫ": "ET",
    "Ḟ": "F",
    "Ƒ": "F",
    "Ǵ": "G",
    "Ğ": "G",
    "Ǧ": "G",
    "Ģ": "G",
    "Ĝ": "G",
    "Ġ": "G",
    "Ɠ": "G",
    "Ḡ": "G",
    "Ǥ": "G",
    "Ḫ": "H",
    "Ȟ": "H",
    "Ḩ": "H",
    "Ĥ": "H",
    "Ⱨ": "H",
    "Ḧ": "H",
    "Ḣ": "H",
    "Ḥ": "H",
    "Ħ": "H",
    "Í": "I",
    "Ĭ": "I",
    "Ǐ": "I",
    "Î": "I",
    "Ï": "I",
    "Ḯ": "I",
    "İ": "I",
    "Ị": "I",
    "Ȉ": "I",
    "Ì": "I",
    "Ỉ": "I",
    "Ȋ": "I",
    "Ī": "I",
    "Į": "I",
    "Ɨ": "I",
    "Ĩ": "I",
    "Ḭ": "I",
    "Ꝺ": "D",
    "Ꝼ": "F",
    "Ᵹ": "G",
    "Ꞃ": "R",
    "Ꞅ": "S",
    "Ꞇ": "T",
    "Ꝭ": "IS",
    "Ĵ": "J",
    "Ɉ": "J",
    "Ḱ": "K",
    "Ǩ": "K",
    "Ķ": "K",
    "Ⱪ": "K",
    "Ꝃ": "K",
    "Ḳ": "K",
    "Ƙ": "K",
    "Ḵ": "K",
    "Ꝁ": "K",
    "Ꝅ": "K",
    "Ĺ": "L",
    "Ƚ": "L",
    "Ľ": "L",
    "Ļ": "L",
    "Ḽ": "L",
    "Ḷ": "L",
    "Ḹ": "L",
    "Ⱡ": "L",
    "Ꝉ": "L",
    "Ḻ": "L",
    "Ŀ": "L",
    "Ɫ": "L",
    "ǈ": "L",
    "Ł": "L",
    "Ǉ": "LJ",
    "Ḿ": "M",
    "Ṁ": "M",
    "Ṃ": "M",
    "Ɱ": "M",
    "Ń": "N",
    "Ň": "N",
    "Ņ": "N",
    "Ṋ": "N",
    "Ṅ": "N",
    "Ṇ": "N",
    "Ǹ": "N",
    "Ɲ": "N",
    "Ṉ": "N",
    "Ƞ": "N",
    "ǋ": "N",
    "Ñ": "N",
    "Ǌ": "NJ",
    "Ó": "O",
    "Ŏ": "O",
    "Ǒ": "O",
    "Ô": "O",
    "Ố": "O",
    "Ộ": "O",
    "Ồ": "O",
    "Ổ": "O",
    "Ỗ": "O",
    "Ö": "O",
    "Ȫ": "O",
    "Ȯ": "O",
    "Ȱ": "O",
    "Ọ": "O",
    "Ő": "O",
    "Ȍ": "O",
    "Ò": "O",
    "Ỏ": "O",
    "Ơ": "O",
    "Ớ": "O",
    "Ợ": "O",
    "Ờ": "O",
    "Ở": "O",
    "Ỡ": "O",
    "Ȏ": "O",
    "Ꝋ": "O",
    "Ꝍ": "O",
    "Ō": "O",
    "Ṓ": "O",
    "Ṑ": "O",
    "Ɵ": "O",
    "Ǫ": "O",
    "Ǭ": "O",
    "Ø": "O",
    "Ǿ": "O",
    "Õ": "O",
    "Ṍ": "O",
    "Ṏ": "O",
    "Ȭ": "O",
    "Ƣ": "OI",
    "Ꝏ": "OO",
    "Ɛ": "E",
    "Ɔ": "O",
    "Ȣ": "OU",
    "Ṕ": "P",
    "Ṗ": "P",
    "Ꝓ": "P",
    "Ƥ": "P",
    "Ꝕ": "P",
    "Ᵽ": "P",
    "Ꝑ": "P",
    "Ꝙ": "Q",
    "Ꝗ": "Q",
    "Ŕ": "R",
    "Ř": "R",
    "Ŗ": "R",
    "Ṙ": "R",
    "Ṛ": "R",
    "Ṝ": "R",
    "Ȑ": "R",
    "Ȓ": "R",
    "Ṟ": "R",
    "Ɍ": "R",
    "Ɽ": "R",
    "Ꜿ": "C",
    "Ǝ": "E",
    "Ś": "S",
    "Ṥ": "S",
    "Š": "S",
    "Ṧ": "S",
    "Ş": "S",
    "Ŝ": "S",
    "Ș": "S",
    "Ṡ": "S",
    "Ṣ": "S",
    "Ṩ": "S",
    "ẞ": "SS",
    "Ť": "T",
    "Ţ": "T",
    "Ṱ": "T",
    "Ț": "T",
    "Ⱦ": "T",
    "Ṫ": "T",
    "Ṭ": "T",
    "Ƭ": "T",
    "Ṯ": "T",
    "Ʈ": "T",
    "Ŧ": "T",
    "Ɐ": "A",
    "Ꞁ": "L",
    "Ɯ": "M",
    "Ʌ": "V",
    "Ꜩ": "TZ",
    "Ú": "U",
    "Ŭ": "U",
    "Ǔ": "U",
    "Û": "U",
    "Ṷ": "U",
    "Ü": "U",
    "Ǘ": "U",
    "Ǚ": "U",
    "Ǜ": "U",
    "Ǖ": "U",
    "Ṳ": "U",
    "Ụ": "U",
    "Ű": "U",
    "Ȕ": "U",
    "Ù": "U",
    "Ủ": "U",
    "Ư": "U",
    "Ứ": "U",
    "Ự": "U",
    "Ừ": "U",
    "Ử": "U",
    "Ữ": "U",
    "Ȗ": "U",
    "Ū": "U",
    "Ṻ": "U",
    "Ų": "U",
    "Ů": "U",
    "Ũ": "U",
    "Ṹ": "U",
    "Ṵ": "U",
    "Ꝟ": "V",
    "Ṿ": "V",
    "Ʋ": "V",
    "Ṽ": "V",
    "Ꝡ": "VY",
    "Ẃ": "W",
    "Ŵ": "W",
    "Ẅ": "W",
    "Ẇ": "W",
    "Ẉ": "W",
    "Ẁ": "W",
    "Ⱳ": "W",
    "Ẍ": "X",
    "Ẋ": "X",
    "Ý": "Y",
    "Ŷ": "Y",
    "Ÿ": "Y",
    "Ẏ": "Y",
    "Ỵ": "Y",
    "Ỳ": "Y",
    "Ƴ": "Y",
    "Ỷ": "Y",
    "Ỿ": "Y",
    "Ȳ": "Y",
    "Ɏ": "Y",
    "Ỹ": "Y",
    "Ź": "Z",
    "Ž": "Z",
    "Ẑ": "Z",
    "Ⱬ": "Z",
    "Ż": "Z",
    "Ẓ": "Z",
    "Ȥ": "Z",
    "Ẕ": "Z",
    "Ƶ": "Z",
    "Ĳ": "IJ",
    "Œ": "OE",
    "ᴀ": "A",
    "ᴁ": "AE",
    "ʙ": "B",
    "ᴃ": "B",
    "ᴄ": "C",
    "ᴅ": "D",
    "ᴇ": "E",
    "ꜰ": "F",
    "ɢ": "G",
    "ʛ": "G",
    "ʜ": "H",
    "ɪ": "I",
    "ʁ": "R",
    "ᴊ": "J",
    "ᴋ": "K",
    "ʟ": "L",
    "ᴌ": "L",
    "ᴍ": "M",
    "ɴ": "N",
    "ᴏ": "O",
    "ɶ": "OE",
    "ᴐ": "O",
    "ᴕ": "OU",
    "ᴘ": "P",
    "ʀ": "R",
    "ᴎ": "N",
    "ᴙ": "R",
    "ꜱ": "S",
    "ᴛ": "T",
    "ⱻ": "E",
    "ᴚ": "R",
    "ᴜ": "U",
    "ᴠ": "V",
    "ᴡ": "W",
    "ʏ": "Y",
    "ᴢ": "Z",
    "á": "a",
    "ă": "a",
    "ắ": "a",
    "ặ": "a",
    "ằ": "a",
    "ẳ": "a",
    "ẵ": "a",
    "ǎ": "a",
    "â": "a",
    "ấ": "a",
    "ậ": "a",
    "ầ": "a",
    "ẩ": "a",
    "ẫ": "a",
    "ä": "a",
    "ǟ": "a",
    "ȧ": "a",
    "ǡ": "a",
    "ạ": "a",
    "ȁ": "a",
    "à": "a",
    "ả": "a",
    "ȃ": "a",
    "ā": "a",
    "ą": "a",
    "ᶏ": "a",
    "ẚ": "a",
    "å": "a",
    "ǻ": "a",
    "ḁ": "a",
    "ⱥ": "a",
    "ã": "a",
    "ꜳ": "aa",
    "æ": "ae",
    "ǽ": "ae",
    "ǣ": "ae",
    "ꜵ": "ao",
    "ꜷ": "au",
    "ꜹ": "av",
    "ꜻ": "av",
    "ꜽ": "ay",
    "ḃ": "b",
    "ḅ": "b",
    "ɓ": "b",
    "ḇ": "b",
    "ᵬ": "b",
    "ᶀ": "b",
    "ƀ": "b",
    "ƃ": "b",
    "ɵ": "o",
    "ć": "c",
    "č": "c",
    "ç": "c",
    "ḉ": "c",
    "ĉ": "c",
    "ɕ": "c",
    "ċ": "c",
    "ƈ": "c",
    "ȼ": "c",
    "ď": "d",
    "ḑ": "d",
    "ḓ": "d",
    "ȡ": "d",
    "ḋ": "d",
    "ḍ": "d",
    "ɗ": "d",
    "ᶑ": "d",
    "ḏ": "d",
    "ᵭ": "d",
    "ᶁ": "d",
    "đ": "d",
    "ɖ": "d",
    "ƌ": "d",
    "ı": "i",
    "ȷ": "j",
    "ɟ": "j",
    "ʄ": "j",
    "ǳ": "dz",
    "ǆ": "dz",
    "é": "e",
    "ĕ": "e",
    "ě": "e",
    "ȩ": "e",
    "ḝ": "e",
    "ê": "e",
    "ế": "e",
    "ệ": "e",
    "ề": "e",
    "ể": "e",
    "ễ": "e",
    "ḙ": "e",
    "ë": "e",
    "ė": "e",
    "ẹ": "e",
    "ȅ": "e",
    "è": "e",
    "ẻ": "e",
    "ȇ": "e",
    "ē": "e",
    "ḗ": "e",
    "ḕ": "e",
    "ⱸ": "e",
    "ę": "e",
    "ᶒ": "e",
    "ɇ": "e",
    "ẽ": "e",
    "ḛ": "e",
    "ꝫ": "et",
    "ḟ": "f",
    "ƒ": "f",
    "ᵮ": "f",
    "ᶂ": "f",
    "ǵ": "g",
    "ğ": "g",
    "ǧ": "g",
    "ģ": "g",
    "ĝ": "g",
    "ġ": "g",
    "ɠ": "g",
    "ḡ": "g",
    "ᶃ": "g",
    "ǥ": "g",
    "ḫ": "h",
    "ȟ": "h",
    "ḩ": "h",
    "ĥ": "h",
    "ⱨ": "h",
    "ḧ": "h",
    "ḣ": "h",
    "ḥ": "h",
    "ɦ": "h",
    "ẖ": "h",
    "ħ": "h",
    "ƕ": "hv",
    "í": "i",
    "ĭ": "i",
    "ǐ": "i",
    "î": "i",
    "ï": "i",
    "ḯ": "i",
    "ị": "i",
    "ȉ": "i",
    "ì": "i",
    "ỉ": "i",
    "ȋ": "i",
    "ī": "i",
    "į": "i",
    "ᶖ": "i",
    "ɨ": "i",
    "ĩ": "i",
    "ḭ": "i",
    "ꝺ": "d",
    "ꝼ": "f",
    "ᵹ": "g",
    "ꞃ": "r",
    "ꞅ": "s",
    "ꞇ": "t",
    "ꝭ": "is",
    "ǰ": "j",
    "ĵ": "j",
    "ʝ": "j",
    "ɉ": "j",
    "ḱ": "k",
    "ǩ": "k",
    "ķ": "k",
    "ⱪ": "k",
    "ꝃ": "k",
    "ḳ": "k",
    "ƙ": "k",
    "ḵ": "k",
    "ᶄ": "k",
    "ꝁ": "k",
    "ꝅ": "k",
    "ĺ": "l",
    "ƚ": "l",
    "ɬ": "l",
    "ľ": "l",
    "ļ": "l",
    "ḽ": "l",
    "ȴ": "l",
    "ḷ": "l",
    "ḹ": "l",
    "ⱡ": "l",
    "ꝉ": "l",
    "ḻ": "l",
    "ŀ": "l",
    "ɫ": "l",
    "ᶅ": "l",
    "ɭ": "l",
    "ł": "l",
    "ǉ": "lj",
    "ſ": "s",
    "ẜ": "s",
    "ẛ": "s",
    "ẝ": "s",
    "ḿ": "m",
    "ṁ": "m",
    "ṃ": "m",
    "ɱ": "m",
    "ᵯ": "m",
    "ᶆ": "m",
    "ń": "n",
    "ň": "n",
    "ņ": "n",
    "ṋ": "n",
    "ȵ": "n",
    "ṅ": "n",
    "ṇ": "n",
    "ǹ": "n",
    "ɲ": "n",
    "ṉ": "n",
    "ƞ": "n",
    "ᵰ": "n",
    "ᶇ": "n",
    "ɳ": "n",
    "ñ": "n",
    "ǌ": "nj",
    "ó": "o",
    "ŏ": "o",
    "ǒ": "o",
    "ô": "o",
    "ố": "o",
    "ộ": "o",
    "ồ": "o",
    "ổ": "o",
    "ỗ": "o",
    "ö": "o",
    "ȫ": "o",
    "ȯ": "o",
    "ȱ": "o",
    "ọ": "o",
    "ő": "o",
    "ȍ": "o",
    "ò": "o",
    "ỏ": "o",
    "ơ": "o",
    "ớ": "o",
    "ợ": "o",
    "ờ": "o",
    "ở": "o",
    "ỡ": "o",
    "ȏ": "o",
    "ꝋ": "o",
    "ꝍ": "o",
    "ⱺ": "o",
    "ō": "o",
    "ṓ": "o",
    "ṑ": "o",
    "ǫ": "o",
    "ǭ": "o",
    "ø": "o",
    "ǿ": "o",
    "õ": "o",
    "ṍ": "o",
    "ṏ": "o",
    "ȭ": "o",
    "ƣ": "oi",
    "ꝏ": "oo",
    "ɛ": "e",
    "ᶓ": "e",
    "ɔ": "o",
    "ᶗ": "o",
    "ȣ": "ou",
    "ṕ": "p",
    "ṗ": "p",
    "ꝓ": "p",
    "ƥ": "p",
    "ᵱ": "p",
    "ᶈ": "p",
    "ꝕ": "p",
    "ᵽ": "p",
    "ꝑ": "p",
    "ꝙ": "q",
    "ʠ": "q",
    "ɋ": "q",
    "ꝗ": "q",
    "ŕ": "r",
    "ř": "r",
    "ŗ": "r",
    "ṙ": "r",
    "ṛ": "r",
    "ṝ": "r",
    "ȑ": "r",
    "ɾ": "r",
    "ᵳ": "r",
    "ȓ": "r",
    "ṟ": "r",
    "ɼ": "r",
    "ᵲ": "r",
    "ᶉ": "r",
    "ɍ": "r",
    "ɽ": "r",
    "ↄ": "c",
    "ꜿ": "c",
    "ɘ": "e",
    "ɿ": "r",
    "ś": "s",
    "ṥ": "s",
    "š": "s",
    "ṧ": "s",
    "ş": "s",
    "ŝ": "s",
    "ș": "s",
    "ṡ": "s",
    "ṣ": "s",
    "ṩ": "s",
    "ʂ": "s",
    "ᵴ": "s",
    "ᶊ": "s",
    "ȿ": "s",
    "ɡ": "g",
    "ß": "ss",
    "ᴑ": "o",
    "ᴓ": "o",
    "ᴝ": "u",
    "ť": "t",
    "ţ": "t",
    "ṱ": "t",
    "ț": "t",
    "ȶ": "t",
    "ẗ": "t",
    "ⱦ": "t",
    "ṫ": "t",
    "ṭ": "t",
    "ƭ": "t",
    "ṯ": "t",
    "ᵵ": "t",
    "ƫ": "t",
    "ʈ": "t",
    "ŧ": "t",
    "ᵺ": "th",
    "ɐ": "a",
    "ᴂ": "ae",
    "ǝ": "e",
    "ᵷ": "g",
    "ɥ": "h",
    "ʮ": "h",
    "ʯ": "h",
    "ᴉ": "i",
    "ʞ": "k",
    "ꞁ": "l",
    "ɯ": "m",
    "ɰ": "m",
    "ᴔ": "oe",
    "ɹ": "r",
    "ɻ": "r",
    "ɺ": "r",
    "ⱹ": "r",
    "ʇ": "t",
    "ʌ": "v",
    "ʍ": "w",
    "ʎ": "y",
    "ꜩ": "tz",
    "ú": "u",
    "ŭ": "u",
    "ǔ": "u",
    "û": "u",
    "ṷ": "u",
    "ü": "u",
    "ǘ": "u",
    "ǚ": "u",
    "ǜ": "u",
    "ǖ": "u",
    "ṳ": "u",
    "ụ": "u",
    "ű": "u",
    "ȕ": "u",
    "ù": "u",
    "ủ": "u",
    "ư": "u",
    "ứ": "u",
    "ự": "u",
    "ừ": "u",
    "ử": "u",
    "ữ": "u",
    "ȗ": "u",
    "ū": "u",
    "ṻ": "u",
    "ų": "u",
    "ᶙ": "u",
    "ů": "u",
    "ũ": "u",
    "ṹ": "u",
    "ṵ": "u",
    "ᵫ": "ue",
    "ꝸ": "um",
    "ⱴ": "v",
    "ꝟ": "v",
    "ṿ": "v",
    "ʋ": "v",
    "ᶌ": "v",
    "ⱱ": "v",
    "ṽ": "v",
    "ꝡ": "vy",
    "ẃ": "w",
    "ŵ": "w",
    "ẅ": "w",
    "ẇ": "w",
    "ẉ": "w",
    "ẁ": "w",
    "ⱳ": "w",
    "ẘ": "w",
    "ẍ": "x",
    "ẋ": "x",
    "ᶍ": "x",
    "ý": "y",
    "ŷ": "y",
    "ÿ": "y",
    "ẏ": "y",
    "ỵ": "y",
    "ỳ": "y",
    "ƴ": "y",
    "ỷ": "y",
    "ỿ": "y",
    "ȳ": "y",
    "ẙ": "y",
    "ɏ": "y",
    "ỹ": "y",
    "ź": "z",
    "ž": "z",
    "ẑ": "z",
    "ʑ": "z",
    "ⱬ": "z",
    "ż": "z",
    "ẓ": "z",
    "ȥ": "z",
    "ẕ": "z",
    "ᵶ": "z",
    "ᶎ": "z",
    "ʐ": "z",
    "ƶ": "z",
    "ɀ": "z",
    "ﬀ": "ff",
    "ﬃ": "ffi",
    "ﬄ": "ffl",
    "ﬁ": "fi",
    "ﬂ": "fl",
    "ĳ": "ij",
    "œ": "oe",
    "ﬆ": "st",
    "ₐ": "a",
    "ₑ": "e",
    "ᵢ": "i",
    "ⱼ": "j",
    "ₒ": "o",
    "ᵣ": "r",
    "ᵤ": "u",
    "ᵥ": "v",
    "ₓ": "x"
  };
  return s.replace(/[^A-Za-z0-9\[\] ]/g, function(a) {
    return l[a] || a;
  });
};

//# sourceMappingURL=gb.js.map
