(function(t,e){function n(t){var e=t.length,n=le.type(t);return le.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||"function"!==n&&(0===e||"number"==typeof e&&e>0&&e-1 in t)
}function r(t){var e=ke[t]={};return le.each(t.match(ce)||[],function(t,n){e[n]=!0
}),e}function i(t,n,r,i){if(le.acceptData(t)){var o,a,s=le.expando,l="string"==typeof n,u=t.nodeType,c=u?le.cache:t,f=u?t[s]:t[s]&&s;
if(f&&c[f]&&(i||c[f].data)||!l||r!==e)return f||(u?t[s]=f=Z.pop()||le.guid++:f=s),c[f]||(c[f]={},u||(c[f].toJSON=le.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=le.extend(c[f],n):c[f].data=le.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==e&&(o[le.camelCase(n)]=r),l?(a=o[n],null==a&&(a=o[le.camelCase(n)])):a=o,a
}}function o(t,e,n){if(le.acceptData(t)){var r,i,o,a=t.nodeType,l=a?le.cache:t,u=a?t[le.expando]:le.expando;
if(l[u]){if(e&&(o=n?l[u]:l[u].data)){le.isArray(e)?e=e.concat(le.map(e,le.camelCase)):e in o?e=[e]:(e=le.camelCase(e),e=e in o?[e]:e.split(" "));
for(r=0,i=e.length;i>r;r++)delete o[e[r]];if(!(n?s:le.isEmptyObject)(o))return}(n||(delete l[u].data,s(l[u])))&&(a?le.cleanData([t],!0):le.support.deleteExpando||l!=l.window?delete l[u]:l[u]=null)
}}}function a(t,n,r){if(r===e&&1===t.nodeType){var i="data-"+n.replace(Ne,"-$1").toLowerCase();
if(r=t.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:Te.test(r)?le.parseJSON(r):r
}catch(o){}le.data(t,n,r)}else r=e}return r}function s(t){var e;for(e in t)if(("data"!==e||!le.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;
return!0}function l(){return!0}function u(){return!1}function c(t,e){do t=t[e];while(t&&1!==t.nodeType);
return t}function f(t,e,n){if(e=e||0,le.isFunction(e))return le.grep(t,function(t,r){var i=!!e.call(t,r,t);
return i===n});if(e.nodeType)return le.grep(t,function(t){return t===e===n});if("string"==typeof e){var r=le.grep(t,function(t){return 1===t.nodeType
});if(Ie.test(e))return le.filter(e,r,!n);e=le.filter(e,r)}return le.grep(t,function(t){return le.inArray(t,e)>=0===n
})}function p(t){var e=Xe.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());
return n}function d(t,e){return t.getElementsByTagName(e)[0]||t.appendChild(t.ownerDocument.createElement(e))
}function h(t){var e=t.getAttributeNode("type");return t.type=(e&&e.specified)+"/"+t.type,t
}function m(t){var e=on.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t
}function g(t,e){for(var n,r=0;null!=(n=t[r]);r++)le._data(n,"globalEval",!e||le._data(e[r],"globalEval"))
}function v(t,e){if(1===e.nodeType&&le.hasData(t)){var n,r,i,o=le._data(t),a=le._data(e,o),s=o.events;
if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)le.event.add(e,n,s[n][r])
}a.data&&(a.data=le.extend({},a.data))}}function y(t,e){var n,r,i;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!le.support.noCloneEvent&&e[le.expando]){i=le._data(e);
for(r in i.events)le.removeEvent(e,r,i.handle);e.removeAttribute(le.expando)}"script"===n&&e.text!==t.text?(h(e).text=t.text,m(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),le.support.html5Clone&&t.innerHTML&&!le.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&en.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)
}}function b(t,n){var r,i,o=0,a=typeof t.getElementsByTagName!==U?t.getElementsByTagName(n||"*"):typeof t.querySelectorAll!==U?t.querySelectorAll(n||"*"):e;
if(!a)for(a=[],r=t.childNodes||t;null!=(i=r[o]);o++)!n||le.nodeName(i,n)?a.push(i):le.merge(a,b(i,n));
return n===e||n&&le.nodeName(t,n)?le.merge([t],a):a}function x(t){en.test(t.type)&&(t.defaultChecked=t.checked)
}function w(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),r=e,i=Nn.length;i--;)if(e=Nn[i]+n,e in t)return e;
return r}function C(t,e){return t=e||t,"none"===le.css(t,"display")||!le.contains(t.ownerDocument,t)
}function k(t,e){for(var n,r,i,o=[],a=0,s=t.length;s>a;a++)r=t[a],r.style&&(o[a]=le._data(r,"olddisplay"),n=r.style.display,e?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&C(r)&&(o[a]=le._data(r,"olddisplay",_(r.nodeName)))):o[a]||(i=C(r),(n&&"none"!==n||!i)&&le._data(r,"olddisplay",i?n:le.css(r,"display"))));
for(a=0;s>a;a++)r=t[a],r.style&&(e&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=e?o[a]||"":"none"));
return t}function T(t,e,n){var r=yn.exec(e);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):e
}function N(t,e,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===e?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=le.css(t,n+Tn[o],!0,i)),r?("content"===n&&(a-=le.css(t,"padding"+Tn[o],!0,i)),"margin"!==n&&(a-=le.css(t,"border"+Tn[o]+"Width",!0,i))):(a+=le.css(t,"padding"+Tn[o],!0,i),"padding"!==n&&(a+=le.css(t,"border"+Tn[o]+"Width",!0,i)));
return a}function $(t,e,n){var r=!0,i="width"===e?t.offsetWidth:t.offsetHeight,o=fn(t),a=le.support.boxSizing&&"border-box"===le.css(t,"boxSizing",!1,o);
if(0>=i||null==i){if(i=pn(t,e,o),(0>i||null==i)&&(i=t.style[e]),bn.test(i))return i;
r=a&&(le.support.boxSizingReliable||i===t.style[e]),i=parseFloat(i)||0}return i+N(t,e,n||(a?"border":"content"),r,o)+"px"
}function _(t){var e=J,n=wn[t];return n||(n=j(t,e),"none"!==n&&n||(cn=(cn||le("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(e.documentElement),e=(cn[0].contentWindow||cn[0].contentDocument).document,e.write("<!doctype html><html><body>"),e.close(),n=j(t,e),cn.detach()),wn[t]=n),n
}function j(t,e){var n=le(e.createElement(t)).appendTo(e.body),r=le.css(n[0],"display");
return n.remove(),r}function E(t,e,n,r){var i;if(le.isArray(e))le.each(e,function(e,i){n||_n.test(t)?r(t,i):E(t+"["+("object"==typeof i?e:"")+"]",i,n,r)
});else if(n||"object"!==le.type(e))r(t,e);else for(i in e)E(t+"["+i+"]",e[i],n,r)
}function S(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(ce)||[];
if(le.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)
}}function A(t,n,r,i){function o(l){var u;return a[l]=!0,le.each(t[l]||[],function(t,l){var c=l(n,r,i);
return"string"!=typeof c||s||a[c]?s?!(u=c):e:(n.dataTypes.unshift(c),o(c),!1)}),u
}var a={},s=t===zn;return o(n.dataTypes[0])||!a["*"]&&o("*")}function D(t,n){var r,i,o=le.ajaxSettings.flatOptions||{};
for(i in n)n[i]!==e&&((o[i]?t:r||(r={}))[i]=n[i]);return r&&le.extend(!0,t,r),t}function L(t,n,r){var i,o,a,s,l=t.contents,u=t.dataTypes,c=t.responseFields;
for(s in c)s in r&&(n[c[s]]=r[s]);for(;"*"===u[0];)u.shift(),o===e&&(o=t.mimeType||n.getResponseHeader("Content-Type"));
if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||t.converters[s+" "+u[0]]){a=s;
break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):e}function H(t,e){var n,r,i,o,a={},s=0,l=t.dataTypes.slice(),u=l[0];
if(t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l[1])for(i in t.converters)a[i.toLowerCase()]=t.converters[i];
for(;r=l[++s];)if("*"!==r){if("*"!==u&&u!==r){if(i=a[u+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[u+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],l.splice(s--,0,r));
break}if(i!==!0)if(i&&t["throws"])e=i(e);else try{e=i(e)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+u+" to "+r}
}}u=r}return{state:"success",data:e}}function O(){try{return new t.XMLHttpRequest
}catch(e){}}function q(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function P(){return setTimeout(function(){Zn=e
}),Zn=le.now()}function M(t,e){le.each(e,function(e,n){for(var r=(or[e]||[]).concat(or["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(t,e,n))return
})}function B(t,e,n){var r,i,o=0,a=ir.length,s=le.Deferred().always(function(){delete l.elem
}),l=function(){if(i)return!1;for(var e=Zn||P(),n=Math.max(0,u.startTime+u.duration-e),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);
return s.notifyWith(t,[u,o,n]),1>o&&l?n:(s.resolveWith(t,[u]),!1)},u=s.promise({elem:t,props:le.extend({},e),opts:le.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Zn||P(),duration:n.duration,tweens:[],createTween:function(e,n){var r=le.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);
return u.tweens.push(r),r},stop:function(e){var n=0,r=e?u.tweens.length:0;if(i)return this;
for(i=!0;r>n;n++)u.tweens[n].run(1);return e?s.resolveWith(t,[u,e]):s.rejectWith(t,[u,e]),this
}}),c=u.props;for(F(c,u.opts.specialEasing);a>o;o++)if(r=ir[o].call(u,t,c,u.opts))return r;
return M(u,c),le.isFunction(u.opts.start)&&u.opts.start.call(t,u),le.fx.timer(le.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function F(t,e){var n,r,i,o,a;for(i in t)if(r=le.camelCase(i),o=e[r],n=t[i],le.isArray(n)&&(o=n[1],n=t[i]=n[0]),i!==r&&(t[r]=n,delete t[i]),a=le.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete t[r];
for(i in n)i in t||(t[i]=n[i],e[i]=o)}else e[r]=o}function R(t,e,n){var r,i,o,a,s,l,u,c,f,p=this,d=t.style,h={},m=[],g=t.nodeType&&C(t);
n.queue||(c=le._queueHooks(t,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()
}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,le.queue(t,"fx").length||c.empty.fire()
})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===le.css(t,"display")&&"none"===le.css(t,"float")&&(le.support.inlineBlockNeedsLayout&&"inline"!==_(t.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",le.support.shrinkWrapBlocks||p.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]
}));for(i in e)if(a=e[i],er.exec(a)){if(delete e[i],l=l||"toggle"===a,a===(g?"hide":"show"))continue;
m.push(i)}if(o=m.length){s=le._data(t,"fxshow")||le._data(t,"fxshow",{}),"hidden"in s&&(g=s.hidden),l&&(s.hidden=!g),g?le(t).show():p.done(function(){le(t).hide()
}),p.done(function(){var e;le._removeData(t,"fxshow");for(e in h)le.style(t,e,h[e])
});for(i=0;o>i;i++)r=m[i],u=p.createTween(r,g?s[r]:0),h[r]=s[r]||le.style(t,r),r in s||(s[r]=u.start,g&&(u.end=u.start,u.start="width"===r||"height"===r?1:0))
}}function W(t,e,n,r,i){return new W.prototype.init(t,e,n,r,i)}function I(t,e){var n,r={height:t},i=0;
for(e=e?1:0;4>i;i+=2-e)n=Tn[i],r["margin"+n]=r["padding"+n]=t;return e&&(r.opacity=r.width=t),r
}function z(t){return le.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1
}var Q,X,U=typeof e,J=t.document,V=t.location,K=t.jQuery,Y=t.$,G={},Z=[],te="1.9.1",ee=Z.concat,ne=Z.push,re=Z.slice,ie=Z.indexOf,oe=G.toString,ae=G.hasOwnProperty,se=te.trim,le=function(t,e){return new le.fn.init(t,e,X)
},ue=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ce=/\S+/g,fe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,pe=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,de=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,he=/^[\],:{}\s]*$/,me=/(?:^|:|,)(?:\s*\[)+/g,ge=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,ve=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,ye=/^-ms-/,be=/-([\da-z])/gi,xe=function(t,e){return e.toUpperCase()
},we=function(t){(J.addEventListener||"load"===t.type||"complete"===J.readyState)&&(Ce(),le.ready())
},Ce=function(){J.addEventListener?(J.removeEventListener("DOMContentLoaded",we,!1),t.removeEventListener("load",we,!1)):(J.detachEvent("onreadystatechange",we),t.detachEvent("onload",we))
};le.fn=le.prototype={jquery:te,constructor:le,init:function(t,n,r){var i,o;if(!t)return this;
if("string"==typeof t){if(i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:pe.exec(t),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(t):this.constructor(n).find(t);
if(i[1]){if(n=n instanceof le?n[0]:n,le.merge(this,le.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:J,!0)),de.test(i[1])&&le.isPlainObject(n))for(i in n)le.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);
return this}if(o=J.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(t);
this.length=1,this[0]=o}return this.context=J,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):le.isFunction(t)?r.ready(t):(t.selector!==e&&(this.selector=t.selector,this.context=t.context),le.makeArray(t,this))
},selector:"",length:0,size:function(){return this.length},toArray:function(){return re.call(this)
},get:function(t){return null==t?this.toArray():0>t?this[this.length+t]:this[t]},pushStack:function(t){var e=le.merge(this.constructor(),t);
return e.prevObject=this,e.context=this.context,e},each:function(t,e){return le.each(this,t,e)
},ready:function(t){return le.ready.promise().done(t),this},slice:function(){return this.pushStack(re.apply(this,arguments))
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);
return this.pushStack(n>=0&&e>n?[this[n]]:[])},map:function(t){return this.pushStack(le.map(this,function(e,n){return t.call(e,n,e)
}))},end:function(){return this.prevObject||this.constructor(null)},push:ne,sort:[].sort,splice:[].splice},le.fn.init.prototype=le.fn,le.extend=le.fn.extend=function(){var t,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||le.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)t=s[i],r=o[i],s!==r&&(c&&r&&(le.isPlainObject(r)||(n=le.isArray(r)))?(n?(n=!1,a=t&&le.isArray(t)?t:[]):a=t&&le.isPlainObject(t)?t:{},s[i]=le.extend(c,a,r)):r!==e&&(s[i]=r));
return s},le.extend({noConflict:function(e){return t.$===le&&(t.$=Y),e&&t.jQuery===le&&(t.jQuery=K),le
},isReady:!1,readyWait:1,holdReady:function(t){t?le.readyWait++:le.ready(!0)},ready:function(t){if(t===!0?!--le.readyWait:!le.isReady){if(!J.body)return setTimeout(le.ready);
le.isReady=!0,t!==!0&&--le.readyWait>0||(Q.resolveWith(J,[le]),le.fn.trigger&&le(J).trigger("ready").off("ready"))
}},isFunction:function(t){return"function"===le.type(t)},isArray:Array.isArray||function(t){return"array"===le.type(t)
},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)
},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?G[oe.call(t)]||"object":typeof t
},isPlainObject:function(t){if(!t||"object"!==le.type(t)||t.nodeType||le.isWindow(t))return!1;
try{if(t.constructor&&!ae.call(t,"constructor")&&!ae.call(t.constructor.prototype,"isPrototypeOf"))return!1
}catch(n){return!1}var r;for(r in t);return r===e||ae.call(t,r)},isEmptyObject:function(t){var e;
for(e in t)return!1;return!0},error:function(t){throw Error(t)},parseHTML:function(t,e,n){if(!t||"string"!=typeof t)return null;
"boolean"==typeof e&&(n=e,e=!1),e=e||J;var r=de.exec(t),i=!n&&[];return r?[e.createElement(r[1])]:(r=le.buildFragment([t],e,i),i&&le(i).remove(),le.merge([],r.childNodes))
},parseJSON:function(n){return t.JSON&&t.JSON.parse?t.JSON.parse(n):null===n?n:"string"==typeof n&&(n=le.trim(n),n&&he.test(n.replace(ge,"@").replace(ve,"]").replace(me,"")))?Function("return "+n)():(le.error("Invalid JSON: "+n),e)
},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{t.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=e}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||le.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(e){e&&le.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)
})(e)},camelCase:function(t){return t.replace(ye,"ms-").replace(be,xe)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()
},each:function(t,e,r){var i,o=0,a=t.length,s=n(t);if(r){if(s)for(;a>o&&(i=e.apply(t[o],r),i!==!1);o++);else for(o in t)if(i=e.apply(t[o],r),i===!1)break
}else if(s)for(;a>o&&(i=e.call(t[o],o,t[o]),i!==!1);o++);else for(o in t)if(i=e.call(t[o],o,t[o]),i===!1)break;
return t},trim:se&&!se.call("﻿ ")?function(t){return null==t?"":se.call(t)}:function(t){return null==t?"":(t+"").replace(fe,"")
},makeArray:function(t,e){var r=e||[];return null!=t&&(n(Object(t))?le.merge(r,"string"==typeof t?[t]:t):ne.call(r,t)),r
},inArray:function(t,e,n){var r;if(e){if(ie)return ie.call(e,t,n);for(r=e.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in e&&e[n]===t)return n
}return-1},merge:function(t,n){var r=n.length,i=t.length,o=0;if("number"==typeof r)for(;r>o;o++)t[i++]=n[o];
else for(;n[o]!==e;)t[i++]=n[o++];return t.length=i,t},grep:function(t,e,n){var r,i=[],o=0,a=t.length;
for(n=!!n;a>o;o++)r=!!e(t[o],o),n!==r&&i.push(t[o]);return i},map:function(t,e,r){var i,o=0,a=t.length,s=n(t),l=[];
if(s)for(;a>o;o++)i=e(t[o],o,r),null!=i&&(l[l.length]=i);else for(o in t)i=e(t[o],o,r),null!=i&&(l[l.length]=i);
return ee.apply([],l)},guid:1,proxy:function(t,n){var r,i,o;return"string"==typeof n&&(o=t[n],n=t,t=o),le.isFunction(t)?(r=re.call(arguments,2),i=function(){return t.apply(n||this,r.concat(re.call(arguments)))
},i.guid=t.guid=t.guid||le.guid++,i):e},access:function(t,n,r,i,o,a,s){var l=0,u=t.length,c=null==r;
if("object"===le.type(r)){o=!0;for(l in r)le.access(t,n,l,r[l],!0,a,s)}else if(i!==e&&(o=!0,le.isFunction(i)||(s=!0),c&&(s?(n.call(t,i),n=null):(c=n,n=function(t,e,n){return c.call(le(t),n)
})),n))for(;u>l;l++)n(t[l],r,s?i:i.call(t[l],l,n(t[l],r)));return o?t:c?n.call(t):u?n(t[0],r):a
},now:function(){return(new Date).getTime()}}),le.ready.promise=function(e){if(!Q)if(Q=le.Deferred(),"complete"===J.readyState)setTimeout(le.ready);
else if(J.addEventListener)J.addEventListener("DOMContentLoaded",we,!1),t.addEventListener("load",we,!1);
else{J.attachEvent("onreadystatechange",we),t.attachEvent("onload",we);var n=!1;try{n=null==t.frameElement&&J.documentElement
}catch(r){}n&&n.doScroll&&function i(){if(!le.isReady){try{n.doScroll("left")}catch(t){return setTimeout(i,50)
}Ce(),le.ready()}}()}return Q.promise(e)},le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){G["[object "+e+"]"]=e.toLowerCase()
}),X=le(J);var ke={};le.Callbacks=function(t){t="string"==typeof t?ke[t]||r(t):le.extend({},t);
var n,i,o,a,s,l,u=[],c=!t.once&&[],f=function(e){for(i=t.memory&&e,o=!0,s=l||0,l=0,a=u.length,n=!0;u&&a>s;s++)if(u[s].apply(e[0],e[1])===!1&&t.stopOnFalse){i=!1;
break}n=!1,u&&(c?c.length&&f(c.shift()):i?u=[]:p.disable())},p={add:function(){if(u){var e=u.length;
(function r(e){le.each(e,function(e,n){var i=le.type(n);"function"===i?t.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==i&&r(n)
})})(arguments),n?a=u.length:i&&(l=e,f(i))}return this},remove:function(){return u&&le.each(arguments,function(t,e){for(var r;(r=le.inArray(e,u,r))>-1;)u.splice(r,1),n&&(a>=r&&a--,s>=r&&s--)
}),this},has:function(t){return t?le.inArray(t,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this
},disable:function(){return u=c=i=e,this},disabled:function(){return!u},lock:function(){return c=e,i||p.disable(),this
},locked:function(){return!c},fireWith:function(t,e){return e=e||[],e=[t,e.slice?e.slice():e],!u||o&&!c||(n?c.push(e):f(e)),this
},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o
}};return p},le.extend({Deferred:function(t){var e=[["resolve","done",le.Callbacks("once memory"),"resolved"],["reject","fail",le.Callbacks("once memory"),"rejected"],["notify","progress",le.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var t=arguments;
return le.Deferred(function(n){le.each(e,function(e,o){var a=o[0],s=le.isFunction(t[e])&&t[e];
i[o[1]](function(){var t=s&&s.apply(this,arguments);t&&le.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[t]:arguments)
})}),t=null}).promise()},promise:function(t){return null!=t?le.extend(t,r):r}},i={};
return r.pipe=r.then,le.each(e,function(t,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s
},e[1^t][2].disable,e[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith}),r.promise(i),t&&t.call(i,i),i},when:function(t){var e,n,r,i=0,o=re.call(arguments),a=o.length,s=1!==a||t&&le.isFunction(t.promise)?a:0,l=1===s?t:le.Deferred(),u=function(t,n,r){return function(i){n[t]=this,r[t]=arguments.length>1?re.call(arguments):i,r===e?l.notifyWith(n,r):--s||l.resolveWith(n,r)
}};if(a>1)for(e=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&le.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,e)):--s;
return s||l.resolveWith(r,o),l.promise()}}),le.support=function(){var e,n,r,i,o,a,s,l,u,c,f=J.createElement("div");
if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],!n||!r||!n.length)return{};
o=J.createElement("select"),s=o.appendChild(J.createElement("option")),i=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",e={getSetAttribute:"t"!==f.className,leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!i.value,optSelected:s.selected,enctype:!!J.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==J.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===J.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},i.checked=!0,e.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!s.disabled;
try{delete f.test}catch(p){e.deleteExpando=!1}i=J.createElement("input"),i.setAttribute("value",""),e.input=""===i.getAttribute("value"),i.value="t",i.setAttribute("type","radio"),e.radioValue="t"===i.value,i.setAttribute("checked","t"),i.setAttribute("name","t"),a=J.createDocumentFragment(),a.appendChild(i),e.appendChecked=i.checked,e.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){e.noCloneEvent=!1
}),f.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})f.setAttribute(l="on"+c,"t"),e[c+"Bubbles"]=l in t||f.attributes[l].expando===!1;
return f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===f.style.backgroundClip,le(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=J.getElementsByTagName("body")[0];
a&&(n=J.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=f.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",u=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",e.reliableHiddenOffsets=u&&0===i[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.boxSizing=4===f.offsetWidth,e.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,t.getComputedStyle&&(e.pixelPosition="1%"!==(t.getComputedStyle(f,null)||{}).top,e.boxSizingReliable="4px"===(t.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(J.createElement("div")),r.style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",e.reliableMarginRight=!parseFloat((t.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==U&&(f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==f.offsetWidth,e.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=f=i=r=null)
}),n=o=a=s=r=i=null,e}();var Te=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Ne=/([A-Z])/g;le.extend({cache:{},expando:"jQuery"+(te+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(t){return t=t.nodeType?le.cache[t[le.expando]]:t[le.expando],!!t&&!s(t)
},data:function(t,e,n){return i(t,e,n)},removeData:function(t,e){return o(t,e)},_data:function(t,e,n){return i(t,e,n,!0)
},_removeData:function(t,e){return o(t,e,!0)},acceptData:function(t){if(t.nodeType&&1!==t.nodeType&&9!==t.nodeType)return!1;
var e=t.nodeName&&le.noData[t.nodeName.toLowerCase()];return!e||e!==!0&&t.getAttribute("classid")===e
}}),le.fn.extend({data:function(t,n){var r,i,o=this[0],s=0,l=null;if(t===e){if(this.length&&(l=le.data(o),1===o.nodeType&&!le._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=le.camelCase(i.slice(5)),a(o,i,l[i]));
le._data(o,"parsedAttrs",!0)}return l}return"object"==typeof t?this.each(function(){le.data(this,t)
}):le.access(this,function(n){return n===e?o?a(o,t,le.data(o,t)):null:(this.each(function(){le.data(this,t,n)
}),e)},null,n,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){le.removeData(this,t)
})}}),le.extend({queue:function(t,n,r){var i;return t?(n=(n||"fx")+"queue",i=le._data(t,n),r&&(!i||le.isArray(r)?i=le._data(t,n,le.makeArray(r)):i.push(r)),i||[]):e
},dequeue:function(t,e){e=e||"fx";var n=le.queue(t,e),r=n.length,i=n.shift(),o=le._queueHooks(t,e),a=function(){le.dequeue(t,e)
};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(t,e){var n=e+"queueHooks";return le._data(t,n)||le._data(t,n,{empty:le.Callbacks("once memory").add(function(){le._removeData(t,e+"queue"),le._removeData(t,n)
})})}}),le.fn.extend({queue:function(t,n){var r=2;return"string"!=typeof t&&(n=t,t="fx",r--),r>arguments.length?le.queue(this[0],t):n===e?this:this.each(function(){var e=le.queue(this,t,n);
le._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&le.dequeue(this,t)})},dequeue:function(t){return this.each(function(){le.dequeue(this,t)
})},delay:function(t,e){return t=le.fx?le.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var r=setTimeout(e,t);
n.stop=function(){clearTimeout(r)}})},clearQueue:function(t){return this.queue(t||"fx",[])
},promise:function(t,n){var r,i=1,o=le.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};for("string"!=typeof t&&(n=t,t=e),t=t||"fx";s--;)r=le._data(a[s],t+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));
return l(),o.promise(n)}});var $e,_e,je=/[\t\r\n]/g,Ee=/\r/g,Se=/^(?:input|select|textarea|button|object)$/i,Ae=/^(?:a|area)$/i,De=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Le=/^(?:checked|selected)$/i,He=le.support.getSetAttribute,Oe=le.support.input;
le.fn.extend({attr:function(t,e){return le.access(this,le.attr,t,e,arguments.length>1)
},removeAttr:function(t){return this.each(function(){le.removeAttr(this,t)})},prop:function(t,e){return le.access(this,le.prop,t,e,arguments.length>1)
},removeProp:function(t){return t=le.propFix[t]||t,this.each(function(){try{this[t]=e,delete this[t]
}catch(n){}})},addClass:function(t){var e,n,r,i,o,a=0,s=this.length,l="string"==typeof t&&t;
if(le.isFunction(t))return this.each(function(e){le(this).addClass(t.call(this,e,this.className))
});if(l)for(e=(t||"").match(ce)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(je," "):" ")){for(o=0;i=e[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");
n.className=le.trim(r)}return this},removeClass:function(t){var e,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof t&&t;
if(le.isFunction(t))return this.each(function(e){le(this).removeClass(t.call(this,e,this.className))
});if(l)for(e=(t||"").match(ce)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(je," "):"")){for(o=0;i=e[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");
n.className=t?le.trim(r):""}return this},toggleClass:function(t,e){var n=typeof t,r="boolean"==typeof e;
return le.isFunction(t)?this.each(function(n){le(this).toggleClass(t.call(this,n,this.className,e),e)
}):this.each(function(){if("string"===n)for(var i,o=0,a=le(this),s=e,l=t.match(ce)||[];i=l[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);
else(n===U||"boolean"===n)&&(this.className&&le._data(this,"__className__",this.className),this.className=this.className||t===!1?"":le._data(this,"__className__")||"")
})},hasClass:function(t){for(var e=" "+t+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(je," ").indexOf(e)>=0)return!0;
return!1},val:function(t){var n,r,i,o=this[0];{if(arguments.length)return i=le.isFunction(t),this.each(function(n){var o,a=le(this);
1===this.nodeType&&(o=i?t.call(this,n,a.val()):t,null==o?o="":"number"==typeof o?o+="":le.isArray(o)&&(o=le.map(o,function(t){return null==t?"":t+""
})),r=le.valHooks[this.type]||le.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==e||(this.value=o))
});if(o)return r=le.valHooks[o.type]||le.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==e?n:(n=o.value,"string"==typeof n?n.replace(Ee,""):null==n?"":n)
}}}),le.extend({valHooks:{option:{get:function(t){var e=t.attributes.value;return!e||e.specified?t.value:t.text
}},select:{get:function(t){for(var e,n,r=t.options,i=t.selectedIndex,o="select-one"===t.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(le.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&le.nodeName(n.parentNode,"optgroup"))){if(e=le(n).val(),o)return e;
a.push(e)}return a},set:function(t,e){var n=le.makeArray(e);return le(t).find("option").each(function(){this.selected=le.inArray(le(this).val(),n)>=0
}),n.length||(t.selectedIndex=-1),n}}},attr:function(t,n,r){var i,o,a,s=t.nodeType;
if(t&&3!==s&&8!==s&&2!==s)return typeof t.getAttribute===U?le.prop(t,n,r):(o=1!==s||!le.isXMLDoc(t),o&&(n=n.toLowerCase(),i=le.attrHooks[n]||(De.test(n)?_e:$e)),r===e?i&&o&&"get"in i&&null!==(a=i.get(t,n))?a:(typeof t.getAttribute!==U&&(a=t.getAttribute(n)),null==a?e:a):null!==r?i&&o&&"set"in i&&(a=i.set(t,r,n))!==e?a:(t.setAttribute(n,r+""),r):(le.removeAttr(t,n),e))
},removeAttr:function(t,e){var n,r,i=0,o=e&&e.match(ce);if(o&&1===t.nodeType)for(;n=o[i++];)r=le.propFix[n]||n,De.test(n)?!He&&Le.test(n)?t[le.camelCase("default-"+n)]=t[r]=!1:t[r]=!1:le.attr(t,n,""),t.removeAttribute(He?n:r)
},attrHooks:{type:{set:function(t,e){if(!le.support.radioValue&&"radio"===e&&le.nodeName(t,"input")){var n=t.value;
return t.setAttribute("type",e),n&&(t.value=n),e}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(t,n,r){var i,o,a,s=t.nodeType;
if(t&&3!==s&&8!==s&&2!==s)return a=1!==s||!le.isXMLDoc(t),a&&(n=le.propFix[n]||n,o=le.propHooks[n]),r!==e?o&&"set"in o&&(i=o.set(t,r,n))!==e?i:t[n]=r:o&&"get"in o&&null!==(i=o.get(t,n))?i:t[n]
},propHooks:{tabIndex:{get:function(t){var n=t.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):Se.test(t.nodeName)||Ae.test(t.nodeName)&&t.href?0:e
}}}}),_e={get:function(t,n){var r=le.prop(t,n),i="boolean"==typeof r&&t.getAttribute(n),o="boolean"==typeof r?Oe&&He?null!=i:Le.test(n)?t[le.camelCase("default-"+n)]:!!i:t.getAttributeNode(n);
return o&&o.value!==!1?n.toLowerCase():e},set:function(t,e,n){return e===!1?le.removeAttr(t,n):Oe&&He||!Le.test(n)?t.setAttribute(!He&&le.propFix[n]||n,n):t[le.camelCase("default-"+n)]=t[n]=!0,n
}},Oe&&He||(le.attrHooks.value={get:function(t,n){var r=t.getAttributeNode(n);return le.nodeName(t,"input")?t.defaultValue:r&&r.specified?r.value:e
},set:function(t,n,r){return le.nodeName(t,"input")?(t.defaultValue=n,e):$e&&$e.set(t,n,r)
}}),He||($e=le.valHooks.button={get:function(t,n){var r=t.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:e
},set:function(t,n,r){var i=t.getAttributeNode(r);return i||t.setAttributeNode(i=t.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===t.getAttribute(r)?n:e
}},le.attrHooks.contenteditable={get:$e.get,set:function(t,e,n){$e.set(t,""===e?!1:e,n)
}},le.each(["width","height"],function(t,n){le.attrHooks[n]=le.extend(le.attrHooks[n],{set:function(t,r){return""===r?(t.setAttribute(n,"auto"),r):e
}})})),le.support.hrefNormalized||(le.each(["href","src","width","height"],function(t,n){le.attrHooks[n]=le.extend(le.attrHooks[n],{get:function(t){var r=t.getAttribute(n,2);
return null==r?e:r}})}),le.each(["href","src"],function(t,e){le.propHooks[e]={get:function(t){return t.getAttribute(e,4)
}}})),le.support.style||(le.attrHooks.style={get:function(t){return t.style.cssText||e
},set:function(t,e){return t.style.cssText=e+""}}),le.support.optSelected||(le.propHooks.selected=le.extend(le.propHooks.selected,{get:function(t){var e=t.parentNode;
return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}})),le.support.enctype||(le.propFix.enctype="encoding"),le.support.checkOn||le.each(["radio","checkbox"],function(){le.valHooks[this]={get:function(t){return null===t.getAttribute("value")?"on":t.value
}}}),le.each(["radio","checkbox"],function(){le.valHooks[this]=le.extend(le.valHooks[this],{set:function(t,n){return le.isArray(n)?t.checked=le.inArray(le(t).val(),n)>=0:e
}})});var qe=/^(?:input|select|textarea)$/i,Pe=/^key/,Me=/^(?:mouse|contextmenu)|click/,Be=/^(?:focusinfocus|focusoutblur)$/,Fe=/^([^.]*)(?:\.(.+)|)$/;
le.event={global:{},add:function(t,n,r,i,o){var a,s,l,u,c,f,p,d,h,m,g,v=le._data(t);
if(v){for(r.handler&&(u=r,r=u.handler,o=u.selector),r.guid||(r.guid=le.guid++),(s=v.events)||(s=v.events={}),(f=v.handle)||(f=v.handle=function(t){return typeof le===U||t&&le.event.triggered===t.type?e:le.event.dispatch.apply(f.elem,arguments)
},f.elem=t),n=(n||"").match(ce)||[""],l=n.length;l--;)a=Fe.exec(n[l])||[],h=g=a[1],m=(a[2]||"").split(".").sort(),c=le.event.special[h]||{},h=(o?c.delegateType:c.bindType)||h,c=le.event.special[h]||{},p=le.extend({type:h,origType:g,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&le.expr.match.needsContext.test(o),namespace:m.join(".")},u),(d=s[h])||(d=s[h]=[],d.delegateCount=0,c.setup&&c.setup.call(t,i,m,f)!==!1||(t.addEventListener?t.addEventListener(h,f,!1):t.attachEvent&&t.attachEvent("on"+h,f))),c.add&&(c.add.call(t,p),p.handler.guid||(p.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),le.event.global[h]=!0;
t=null}},remove:function(t,e,n,r,i){var o,a,s,l,u,c,f,p,d,h,m,g=le.hasData(t)&&le._data(t);
if(g&&(c=g.events)){for(e=(e||"").match(ce)||[""],u=e.length;u--;)if(s=Fe.exec(e[u])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(f=le.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(t,a));
l&&!p.length&&(f.teardown&&f.teardown.call(t,h,g.handle)!==!1||le.removeEvent(t,d,g.handle),delete c[d])
}else for(d in c)le.event.remove(t,d+e[u],n,r,!0);le.isEmptyObject(c)&&(delete g.handle,le._removeData(t,"events"))
}},trigger:function(n,r,i,o){var a,s,l,u,c,f,p,d=[i||J],h=ae.call(n,"type")?n.type:n,m=ae.call(n,"namespace")?n.namespace.split("."):[];
if(l=f=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!Be.test(h+le.event.triggered)&&(h.indexOf(".")>=0&&(m=h.split("."),h=m.shift(),m.sort()),s=0>h.indexOf(":")&&"on"+h,n=n[le.expando]?n:new le.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=e,n.target||(n.target=i),r=null==r?[n]:le.makeArray(r,[n]),c=le.event.special[h]||{},o||!c.trigger||c.trigger.apply(i,r)!==!1)){if(!o&&!c.noBubble&&!le.isWindow(i)){for(u=c.delegateType||h,Be.test(u+h)||(l=l.parentNode);l;l=l.parentNode)d.push(l),f=l;
f===(i.ownerDocument||J)&&d.push(f.defaultView||f.parentWindow||t)}for(p=0;(l=d[p++])&&!n.isPropagationStopped();)n.type=p>1?u:c.bindType||h,a=(le._data(l,"events")||{})[n.type]&&le._data(l,"handle"),a&&a.apply(l,r),a=s&&l[s],a&&le.acceptData(l)&&a.apply&&a.apply(l,r)===!1&&n.preventDefault();
if(n.type=h,!(o||n.isDefaultPrevented()||c._default&&c._default.apply(i.ownerDocument,r)!==!1||"click"===h&&le.nodeName(i,"a")||!le.acceptData(i)||!s||!i[h]||le.isWindow(i))){f=i[s],f&&(i[s]=null),le.event.triggered=h;
try{i[h]()}catch(g){}le.event.triggered=e,f&&(i[s]=f)}return n.result}},dispatch:function(t){t=le.event.fix(t);
var n,r,i,o,a,s=[],l=re.call(arguments),u=(le._data(this,"events")||{})[t.type]||[],c=le.event.special[t.type]||{};
if(l[0]=t,t.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,t)!==!1){for(s=le.event.handlers.call(this,t,u),n=0;(o=s[n++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(i.namespace))&&(t.handleObj=i,t.data=i.data,r=((le.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==e&&(t.result=r)===!1&&(t.preventDefault(),t.stopPropagation()));
return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,n){var r,i,o,a,s=[],l=n.delegateCount,u=t.target;
if(l&&u.nodeType&&(!t.button||"click"!==t.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==t.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===e&&(o[r]=i.needsContext?le(r,this).index(u)>=0:le.find(r,this,null,[u]).length),o[r]&&o.push(i);
o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(t){if(t[le.expando])return t;var e,n,r,i=t.type,o=t,a=this.fixHooks[i];
for(a||(this.fixHooks[i]=a=Me.test(i)?this.mouseHooks:Pe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,t=new le.Event(o),e=r.length;e--;)n=r[e],t[n]=o[n];
return t.target||(t.target=o.srcElement||J),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,a.filter?a.filter(t,o):t
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var r,i,o,a=n.button,s=n.fromElement;
return null==t.pageX&&null!=n.clientX&&(i=t.target.ownerDocument||J,o=i.documentElement,r=i.body,t.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),t.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!t.relatedTarget&&s&&(t.relatedTarget=s===t.target?n.toElement:s),t.which||a===e||(t.which=1&a?1:2&a?3:4&a?2:0),t
}},special:{load:{noBubble:!0},click:{trigger:function(){return le.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):e
}},focus:{trigger:function(){if(this!==J.activeElement&&this.focus)try{return this.focus(),!1
}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===J.activeElement&&this.blur?(this.blur(),!1):e
},delegateType:"focusout"},beforeunload:{postDispatch:function(t){t.result!==e&&(t.originalEvent.returnValue=t.result)
}}},simulate:function(t,e,n,r){var i=le.extend(new le.Event,n,{type:t,isSimulated:!0,originalEvent:{}});
r?le.event.trigger(i,null,e):le.event.dispatch.call(e,i),i.isDefaultPrevented()&&n.preventDefault()
}},le.removeEvent=J.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)
}:function(t,e,n){var r="on"+e;t.detachEvent&&(typeof t[r]===U&&(t[r]=null),t.detachEvent(r,n))
},le.Event=function(t,n){return this instanceof le.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.returnValue===!1||t.getPreventDefault&&t.getPreventDefault()?l:u):this.type=t,n&&le.extend(this,n),this.timeStamp=t&&t.timeStamp||le.now(),this[le.expando]=!0,e):new le.Event(t,n)
},le.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var t=this.originalEvent;
this.isDefaultPrevented=l,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=l,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=l,this.stopPropagation()
}},le.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,e){le.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,o=t.handleObj;
return(!i||i!==r&&!le.contains(r,i))&&(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n
}}}),le.support.submitBubbles||(le.event.special.submit={setup:function(){return le.nodeName(this,"form")?!1:(le.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,r=le.nodeName(n,"input")||le.nodeName(n,"button")?n.form:e;
r&&!le._data(r,"submitBubbles")&&(le.event.add(r,"submit._submit",function(t){t._submit_bubble=!0
}),le._data(r,"submitBubbles",!0))}),e)},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&le.event.simulate("submit",this.parentNode,t,!0))
},teardown:function(){return le.nodeName(this,"form")?!1:(le.event.remove(this,"._submit"),e)
}}),le.support.changeBubbles||(le.event.special.change={setup:function(){return qe.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(le.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)
}),le.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),le.event.simulate("change",this,t,!0)
})),!1):(le.event.add(this,"beforeactivate._change",function(t){var e=t.target;qe.test(e.nodeName)&&!le._data(e,"changeBubbles")&&(le.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||le.event.simulate("change",this.parentNode,t,!0)
}),le._data(e,"changeBubbles",!0))}),e)},handle:function(t){var n=t.target;return this!==n||t.isSimulated||t.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?t.handleObj.handler.apply(this,arguments):e
},teardown:function(){return le.event.remove(this,"._change"),!qe.test(this.nodeName)
}}),le.support.focusinBubbles||le.each({focus:"focusin",blur:"focusout"},function(t,e){var n=0,r=function(t){le.event.simulate(e,t.target,le.event.fix(t),!0)
};le.event.special[e]={setup:function(){0===n++&&J.addEventListener(t,r,!0)},teardown:function(){0===--n&&J.removeEventListener(t,r,!0)
}}}),le.fn.extend({on:function(t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=e);
for(a in t)this.on(a,n,r,t[a],o);return this}if(null==r&&null==i?(i=n,r=n=e):null==i&&("string"==typeof n?(i=r,r=e):(i=r,r=n,n=e)),i===!1)i=u;
else if(!i)return this;return 1===o&&(s=i,i=function(t){return le().off(t),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=le.guid++)),this.each(function(){le.event.add(this,t,i,r,n)
})},one:function(t,e,n,r){return this.on(t,e,n,r,1)},off:function(t,n,r){var i,o;
if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,le(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
if("object"==typeof t){for(o in t)this.off(o,n,t[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=e),r===!1&&(r=u),this.each(function(){le.event.remove(this,t,r,n)
})},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)
},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)
},trigger:function(t,e){return this.each(function(){le.event.trigger(t,e,this)})},triggerHandler:function(t,n){var r=this[0];
return r?le.event.trigger(t,n,r,!0):e}}),function(t,e){function n(t){return he.test(t+"")
}function r(){var t,e=[];return t=function(n,r){return e.push(n+=" ")>T.cacheLength&&delete t[e.shift()],t[n]=r
}}function i(t){return t[B]=!0,t}function o(t){var e=A.createElement("div");try{return t(e)
}catch(n){return!1}finally{e=null}}function a(t,e,n,r){var i,o,a,s,l,u,c,d,h,m;if((e?e.ownerDocument||e:F)!==A&&S(e),e=e||A,n=n||[],!t||"string"!=typeof t)return n;
if(1!==(s=e.nodeType)&&9!==s)return[];if(!L&&!r){if(i=me.exec(t))if(a=i[1]){if(9===s){if(o=e.getElementById(a),!o||!o.parentNode)return n;
if(o.id===a)return n.push(o),n}else if(e.ownerDocument&&(o=e.ownerDocument.getElementById(a))&&P(e,o)&&o.id===a)return n.push(o),n
}else{if(i[2])return Y.apply(n,G.call(e.getElementsByTagName(t),0)),n;if((a=i[3])&&R.getByClassName&&e.getElementsByClassName)return Y.apply(n,G.call(e.getElementsByClassName(a),0)),n
}if(R.qsa&&!H.test(t)){if(c=!0,d=B,h=e,m=9===s&&t,1===s&&"object"!==e.nodeName.toLowerCase()){for(u=f(t),(c=e.getAttribute("id"))?d=c.replace(ye,"\\$&"):e.setAttribute("id",d),d="[id='"+d+"'] ",l=u.length;l--;)u[l]=d+p(u[l]);
h=de.test(t)&&e.parentNode||e,m=u.join(",")}if(m)try{return Y.apply(n,G.call(h.querySelectorAll(m),0)),n
}catch(g){}finally{c||e.removeAttribute("id")}}}return x(t.replace(ae,"$1"),e,n,r)
}function s(t,e){var n=e&&t,r=n&&(~e.sourceIndex||J)-(~t.sourceIndex||J);if(r)return r;
if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function l(t){return function(e){var n=e.nodeName.toLowerCase();
return"input"===n&&e.type===t}}function u(t){return function(e){var n=e.nodeName.toLowerCase();
return("input"===n||"button"===n)&&e.type===t}}function c(t){return i(function(e){return e=+e,i(function(n,r){for(var i,o=t([],n.length,e),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
})})}function f(t,e){var n,r,i,o,s,l,u,c=Q[t+" "];if(c)return e?0:c.slice(0);for(s=t,l=[],u=T.preFilter;s;){(!n||(r=se.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=ue.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ae," ")}),s=s.slice(n.length));
for(o in T.filter)!(r=pe[o].exec(s))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));
if(!n)break}return e?s.length:s?a.error(t):Q(t,l).slice(0)}function p(t){for(var e=0,n=t.length,r="";n>e;e++)r+=t[e].value;
return r}function d(t,e,n){var r=e.dir,i=n&&"parentNode"===r,o=I++;return e.first?function(e,n,o){for(;e=e[r];)if(1===e.nodeType||i)return t(e,n,o)
}:function(e,n,a){var s,l,u,c=W+" "+o;if(a){for(;e=e[r];)if((1===e.nodeType||i)&&t(e,n,a))return!0
}else for(;e=e[r];)if(1===e.nodeType||i)if(u=e[B]||(e[B]={}),(l=u[r])&&l[0]===c){if((s=l[1])===!0||s===k)return s===!0
}else if(l=u[r]=[c],l[1]=t(e,n,a)||k,l[1]===!0)return!0}}function h(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;
return!0}:t[0]}function m(t,e,n,r,i){for(var o,a=[],s=0,l=t.length,u=null!=e;l>s;s++)(o=t[s])&&(!n||n(o,r,i))&&(a.push(o),u&&e.push(s));
return a}function g(t,e,n,r,o,a){return r&&!r[B]&&(r=g(r)),o&&!o[B]&&(o=g(o,a)),i(function(i,a,s,l){var u,c,f,p=[],d=[],h=a.length,g=i||b(e||"*",s.nodeType?[s]:s,[]),v=!t||!i&&e?g:m(g,p,t,s,l),y=n?o||(i?t:h||r)?[]:a:v;
if(n&&n(v,y,s,l),r)for(u=m(y,d),r(u,[],s,l),c=u.length;c--;)(f=u[c])&&(y[d[c]]=!(v[d[c]]=f));
if(i){if(o||t){if(o){for(u=[],c=y.length;c--;)(f=y[c])&&u.push(v[c]=f);o(null,y=[],u,l)
}for(c=y.length;c--;)(f=y[c])&&(u=o?Z.call(i,f):p[c])>-1&&(i[u]=!(a[u]=f))}}else y=m(y===a?y.splice(h,y.length):y),o?o(null,a,y,l):Y.apply(a,y)
})}function v(t){for(var e,n,r,i=t.length,o=T.relative[t[0].type],a=o||T.relative[" "],s=o?1:0,l=d(function(t){return t===e
},a,!0),u=d(function(t){return Z.call(e,t)>-1},a,!0),c=[function(t,n,r){return!o&&(r||n!==E)||((e=n).nodeType?l(t,n,r):u(t,n,r))
}];i>s;s++)if(n=T.relative[t[s].type])c=[d(h(c),n)];else{if(n=T.filter[t[s].type].apply(null,t[s].matches),n[B]){for(r=++s;i>r&&!T.relative[t[r].type];r++);return g(s>1&&h(c),s>1&&p(t.slice(0,s-1)).replace(ae,"$1"),n,r>s&&v(t.slice(s,r)),i>r&&v(t=t.slice(r)),i>r&&p(t))
}c.push(n)}return h(c)}function y(t,e){var n=0,r=e.length>0,o=t.length>0,s=function(i,s,l,u,c){var f,p,d,h=[],g=0,v="0",y=i&&[],b=null!=c,x=E,w=i||o&&T.find.TAG("*",c&&s.parentNode||s),C=W+=null==x?1:Math.random()||.1;
for(b&&(E=s!==A&&s,k=n);null!=(f=w[v]);v++){if(o&&f){for(p=0;d=t[p++];)if(d(f,s,l)){u.push(f);
break}b&&(W=C,k=++n)}r&&((f=!d&&f)&&g--,i&&y.push(f))}if(g+=v,r&&v!==g){for(p=0;d=e[p++];)d(y,h,s,l);
if(i){if(g>0)for(;v--;)y[v]||h[v]||(h[v]=K.call(u));h=m(h)}Y.apply(u,h),b&&!i&&h.length>0&&g+e.length>1&&a.uniqueSort(u)
}return b&&(W=C,E=x),y};return r?i(s):s}function b(t,e,n){for(var r=0,i=e.length;i>r;r++)a(t,e[r],n);
return n}function x(t,e,n,r){var i,o,a,s,l,u=f(t);if(!r&&1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===e.nodeType&&!L&&T.relative[o[1].type]){if(e=T.find.ID(a.matches[0].replace(xe,we),e)[0],!e)return n;
t=t.slice(o.shift().value.length)}for(i=pe.needsContext.test(t)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((l=T.find[s])&&(r=l(a.matches[0].replace(xe,we),de.test(o[0].type)&&e.parentNode||e))){if(o.splice(i,1),t=r.length&&p(o),!t)return Y.apply(n,G.call(r,0)),n;
break}}return _(t,u)(r,e,L,n,de.test(t)),n}function w(){}var C,k,T,N,$,_,j,E,S,A,D,L,H,O,q,P,M,B="sizzle"+-new Date,F=t.document,R={},W=0,I=0,z=r(),Q=r(),X=r(),U=typeof e,J=1<<31,V=[],K=V.pop,Y=V.push,G=V.slice,Z=V.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;
return-1},te="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne=ee.replace("w","w#"),re="([*^$|!~]?=)",ie="\\["+te+"*("+ee+")"+te+"*(?:"+re+te+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ne+")|)|)"+te+"*\\]",oe=":("+ee+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ie.replace(3,8)+")*)|.*)\\)|)",ae=RegExp("^"+te+"+|((?:^|[^\\\\])(?:\\\\.)*)"+te+"+$","g"),se=RegExp("^"+te+"*,"+te+"*"),ue=RegExp("^"+te+"*([\\x20\\t\\r\\n\\f>+~])"+te+"*"),ce=RegExp(oe),fe=RegExp("^"+ne+"$"),pe={ID:RegExp("^#("+ee+")"),CLASS:RegExp("^\\.("+ee+")"),NAME:RegExp("^\\[name=['\"]?("+ee+")['\"]?\\]"),TAG:RegExp("^("+ee.replace("w","w*")+")"),ATTR:RegExp("^"+ie),PSEUDO:RegExp("^"+oe),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+te+"*(even|odd|(([+-]|)(\\d*)n|)"+te+"*(?:([+-]|)"+te+"*(\\d+)|))"+te+"*\\)|)","i"),needsContext:RegExp("^"+te+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+te+"*((?:-\\d)?\\d*)"+te+"*\\)|)(?=[^-]|$)","i")},de=/[\x20\t\r\n\f]*[+~]/,he=/^[^{]+\{\s*\[native code/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,ye=/'|\\/g,be=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xe=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,we=function(t,e){var n="0x"+e-65536;
return n!==n?e:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)
};try{G.call(F.documentElement.childNodes,0)[0].nodeType}catch(Ce){G=function(t){for(var e,n=[];e=this[t++];)n.push(e);
return n}}$=a.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1
},S=a.setDocument=function(t){var r=t?t.ownerDocument||t:F;return r!==A&&9===r.nodeType&&r.documentElement?(A=r,D=r.documentElement,L=$(r),R.tagNameNoComments=o(function(t){return t.appendChild(r.createComment("")),!t.getElementsByTagName("*").length
}),R.attributes=o(function(t){t.innerHTML="<select></select>";var e=typeof t.lastChild.getAttribute("multiple");
return"boolean"!==e&&"string"!==e}),R.getByClassName=o(function(t){return t.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",t.getElementsByClassName&&t.getElementsByClassName("e").length?(t.lastChild.className="e",2===t.getElementsByClassName("e").length):!1
}),R.getByName=o(function(t){t.id=B+0,t.innerHTML="<a name='"+B+"'></a><div name='"+B+"'></div>",D.insertBefore(t,D.firstChild);
var e=r.getElementsByName&&r.getElementsByName(B).length===2+r.getElementsByName(B+0).length;
return R.getIdNotName=!r.getElementById(B),D.removeChild(t),e}),T.attrHandle=o(function(t){return t.innerHTML="<a href='#'></a>",t.firstChild&&typeof t.firstChild.getAttribute!==U&&"#"===t.firstChild.getAttribute("href")
})?{}:{href:function(t){return t.getAttribute("href",2)},type:function(t){return t.getAttribute("type")
}},R.getIdNotName?(T.find.ID=function(t,e){if(typeof e.getElementById!==U&&!L){var n=e.getElementById(t);
return n&&n.parentNode?[n]:[]}},T.filter.ID=function(t){var e=t.replace(xe,we);return function(t){return t.getAttribute("id")===e
}}):(T.find.ID=function(t,n){if(typeof n.getElementById!==U&&!L){var r=n.getElementById(t);
return r?r.id===t||typeof r.getAttributeNode!==U&&r.getAttributeNode("id").value===t?[r]:e:[]
}},T.filter.ID=function(t){var e=t.replace(xe,we);return function(t){var n=typeof t.getAttributeNode!==U&&t.getAttributeNode("id");
return n&&n.value===e}}),T.find.TAG=R.tagNameNoComments?function(t,n){return typeof n.getElementsByTagName!==U?n.getElementsByTagName(t):e
}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);
return r}return o},T.find.NAME=R.getByName&&function(t,n){return typeof n.getElementsByName!==U?n.getElementsByName(name):e
},T.find.CLASS=R.getByClassName&&function(t,n){return typeof n.getElementsByClassName===U||L?e:n.getElementsByClassName(t)
},O=[],H=[":focus"],(R.qsa=n(r.querySelectorAll))&&(o(function(t){t.innerHTML="<select><option selected=''></option></select>",t.querySelectorAll("[selected]").length||H.push("\\["+te+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),t.querySelectorAll(":checked").length||H.push(":checked")
}),o(function(t){t.innerHTML="<input type='hidden' i=''/>",t.querySelectorAll("[i^='']").length&&H.push("[*^$]="+te+"*(?:\"\"|'')"),t.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),H.push(",.*:")
})),(R.matchesSelector=n(q=D.matchesSelector||D.mozMatchesSelector||D.webkitMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(t){R.disconnectedMatch=q.call(t,"div"),q.call(t,"[s!='']:x"),O.push("!=",oe)
}),H=RegExp(H.join("|")),O=RegExp(O.join("|")),P=n(D.contains)||D.compareDocumentPosition?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;
return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))
}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},M=D.compareDocumentPosition?function(t,e){var n;
return t===e?(j=!0,0):(n=e.compareDocumentPosition&&t.compareDocumentPosition&&t.compareDocumentPosition(e))?1&n||t.parentNode&&11===t.parentNode.nodeType?t===r||P(F,t)?-1:e===r||P(F,e)?1:0:4&n?-1:1:t.compareDocumentPosition?-1:1
}:function(t,e){var n,i=0,o=t.parentNode,a=e.parentNode,l=[t],u=[e];if(t===e)return j=!0,0;
if(!o||!a)return t===r?-1:e===r?1:o?-1:a?1:0;if(o===a)return s(t,e);for(n=t;n=n.parentNode;)l.unshift(n);
for(n=e;n=n.parentNode;)u.unshift(n);for(;l[i]===u[i];)i++;return i?s(l[i],u[i]):l[i]===F?-1:u[i]===F?1:0
},j=!1,[0,0].sort(M),R.detectDuplicates=j,A):A},a.matches=function(t,e){return a(t,null,null,e)
},a.matchesSelector=function(t,e){if((t.ownerDocument||t)!==A&&S(t),e=e.replace(be,"='$1']"),!(!R.matchesSelector||L||O&&O.test(e)||H.test(e)))try{var n=q.call(t,e);
if(n||R.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(r){}return a(e,A,null,[t]).length>0
},a.contains=function(t,e){return(t.ownerDocument||t)!==A&&S(t),P(t,e)},a.attr=function(t,e){var n;
return(t.ownerDocument||t)!==A&&S(t),L||(e=e.toLowerCase()),(n=T.attrHandle[e])?n(t):L||R.attributes?t.getAttribute(e):((n=t.getAttributeNode(e))||t.getAttribute(e))&&t[e]===!0?e:n&&n.specified?n.value:null
},a.error=function(t){throw Error("Syntax error, unrecognized expression: "+t)},a.uniqueSort=function(t){var e,n=[],r=1,i=0;
if(j=!R.detectDuplicates,t.sort(M),j){for(;e=t[r];r++)e===t[r-1]&&(i=n.push(r));for(;i--;)t.splice(n[i],1)
}return t},N=a.getText=function(t){var e,n="",r=0,i=t.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;
for(t=t.firstChild;t;t=t.nextSibling)n+=N(t)}else if(3===i||4===i)return t.nodeValue
}else for(;e=t[r];r++)n+=N(e);return n},T=a.selectors={cacheLength:50,createPseudo:i,match:pe,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(xe,we),t[3]=(t[4]||t[5]||"").replace(xe,we),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)
},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||a.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&a.error(t[0]),t
},PSEUDO:function(t){var e,n=!t[5]&&t[2];return pe.CHILD.test(t[0])?null:(t[4]?t[2]=t[4]:n&&ce.test(n)&&(e=f(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))
}},filter:{TAG:function(t){return"*"===t?function(){return!0}:(t=t.replace(xe,we).toLowerCase(),function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
})},CLASS:function(t){var e=z[t+" "];return e||(e=RegExp("(^|"+te+")"+t+"("+te+"|$)"))&&z(t,function(t){return e.test(t.className||typeof t.getAttribute!==U&&t.getAttribute("class")||"")
})},ATTR:function(t,e,n){return function(r){var i=a.attr(r,t);return null==i?"!="===e:e?(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i+" ").indexOf(n)>-1:"|="===e?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;
return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,l){var u,c,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",g=e.parentNode,v=s&&e.nodeName.toLowerCase(),y=!l&&!s;
if(g){if(o){for(;m;){for(f=e;f=f[m];)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;
h=m="only"===t&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(c=g[B]||(g[B]={}),u=c[t]||[],d=u[0]===W&&u[1],p=u[0]===W&&u[2],f=d&&g.childNodes[d];f=++d&&f&&f[m]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===e){c[t]=[W,d,p];
break}}else if(y&&(u=(e[B]||(e[B]={}))[t])&&u[0]===W)p=u[1];else for(;(f=++d&&f&&f[m]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[B]||(f[B]={}))[t]=[W,p]),f!==e)););return p-=i,p===r||0===p%r&&p/r>=0
}}},PSEUDO:function(t,e){var n,r=T.pseudos[t]||T.setFilters[t.toLowerCase()]||a.error("unsupported pseudo: "+t);
return r[B]?r(e):r.length>1?(n=[t,t,"",e],T.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,n){for(var i,o=r(t,e),a=o.length;a--;)i=Z.call(t,o[a]),t[i]=!(n[i]=o[a])
}):function(t){return r(t,0,n)}):r}},pseudos:{not:i(function(t){var e=[],n=[],r=_(t.replace(ae,"$1"));
return r[B]?i(function(t,e,n,i){for(var o,a=r(t,null,i,[]),s=t.length;s--;)(o=a[s])&&(t[s]=!(e[s]=o))
}):function(t,i,o){return e[0]=t,r(e,null,o,n),!n.pop()}}),has:i(function(t){return function(e){return a(t,e).length>0
}}),contains:i(function(t){return function(e){return(e.textContent||e.innerText||N(e)).indexOf(t)>-1
}}),lang:i(function(t){return fe.test(t||"")||a.error("unsupported lang: "+t),t=t.replace(xe,we).toLowerCase(),function(e){var n;
do if(n=L?e.getAttribute("xml:lang")||e.getAttribute("lang"):e.lang)return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");
while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;
return n&&n.slice(1)===e.id},root:function(t){return t===D},focus:function(t){return t===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(t.type||t.href||~t.tabIndex)
},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0
},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected
},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0
},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeName>"@"||3===t.nodeType||4===t.nodeType)return!1;
return!0},parent:function(t){return!T.pseudos.empty(t)},header:function(t){return ve.test(t.nodeName)
},input:function(t){return ge.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||e.toLowerCase()===t.type)
},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]
}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);
return t}),lt:c(function(t,e,n){for(var r=0>n?n+e:n;--r>=0;)t.push(r);return t}),gt:c(function(t,e,n){for(var r=0>n?n+e:n;e>++r;)t.push(r);
return t})}};for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[C]=l(C);
for(C in{submit:!0,reset:!0})T.pseudos[C]=u(C);_=a.compile=function(t,e){var n,r=[],i=[],o=X[t+" "];
if(!o){for(e||(e=f(t)),n=e.length;n--;)o=v(e[n]),o[B]?r.push(o):i.push(o);o=X(t,y(i,r))
}return o},T.pseudos.nth=T.pseudos.eq,T.filters=w.prototype=T.pseudos,T.setFilters=new w,S(),a.attr=le.attr,le.find=a,le.expr=a.selectors,le.expr[":"]=le.expr.pseudos,le.unique=a.uniqueSort,le.text=a.getText,le.isXMLDoc=a.isXML,le.contains=a.contains
}(t);var Re=/Until$/,We=/^(?:parents|prev(?:Until|All))/,Ie=/^.[^:#\[\.,]*$/,ze=le.expr.match.needsContext,Qe={children:!0,contents:!0,next:!0,prev:!0};
le.fn.extend({find:function(t){var e,n,r,i=this.length;if("string"!=typeof t)return r=this,this.pushStack(le(t).filter(function(){for(e=0;i>e;e++)if(le.contains(r[e],this))return!0
}));for(n=[],e=0;i>e;e++)le.find(t,this[e],n);return n=this.pushStack(i>1?le.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+t,n
},has:function(t){var e,n=le(t,this),r=n.length;return this.filter(function(){for(e=0;r>e;e++)if(le.contains(this,n[e]))return!0
})},not:function(t){return this.pushStack(f(this,t,!1))},filter:function(t){return this.pushStack(f(this,t,!0))
},is:function(t){return!!t&&("string"==typeof t?ze.test(t)?le(t,this.context).index(this[0])>=0:le.filter(t,this).length>0:this.filter(t).length>0)
},closest:function(t,e){for(var n,r=0,i=this.length,o=[],a=ze.test(t)||"string"!=typeof t?le(t,e||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==e&&11!==n.nodeType;){if(a?a.index(n)>-1:le.find.matchesSelector(n,t)){o.push(n);
break}n=n.parentNode}return this.pushStack(o.length>1?le.unique(o):o)},index:function(t){return t?"string"==typeof t?le.inArray(this[0],le(t)):le.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(t,e){var n="string"==typeof t?le(t,e):le.makeArray(t&&t.nodeType?[t]:t),r=le.merge(this.get(),n);
return this.pushStack(le.unique(r))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))
}}),le.fn.andSelf=le.fn.addBack,le.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null
},parents:function(t){return le.dir(t,"parentNode")},parentsUntil:function(t,e,n){return le.dir(t,"parentNode",n)
},next:function(t){return c(t,"nextSibling")},prev:function(t){return c(t,"previousSibling")
},nextAll:function(t){return le.dir(t,"nextSibling")},prevAll:function(t){return le.dir(t,"previousSibling")
},nextUntil:function(t,e,n){return le.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return le.dir(t,"previousSibling",n)
},siblings:function(t){return le.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return le.sibling(t.firstChild)
},contents:function(t){return le.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:le.merge([],t.childNodes)
}},function(t,e){le.fn[t]=function(n,r){var i=le.map(this,e,n);return Re.test(t)||(r=n),r&&"string"==typeof r&&(i=le.filter(r,i)),i=this.length>1&&!Qe[t]?le.unique(i):i,this.length>1&&We.test(t)&&(i=i.reverse()),this.pushStack(i)
}}),le.extend({filter:function(t,e,n){return n&&(t=":not("+t+")"),1===e.length?le.find.matchesSelector(e[0],t)?[e[0]]:[]:le.find.matches(t,e)
},dir:function(t,n,r){for(var i=[],o=t[n];o&&9!==o.nodeType&&(r===e||1!==o.nodeType||!le(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];
return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);
return n}});var Xe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ue=/ jQuery\d+="(?:null|\d+)"/g,Je=RegExp("<(?:"+Xe+")[\\s/>]","i"),Ve=/^\s+/,Ke=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ye=/<([\w:]+)/,Ge=/<tbody/i,Ze=/<|&#?\w+;/,tn=/<(?:script|style|link)/i,en=/^(?:checkbox|radio)$/i,nn=/checked\s*(?:[^=]|=\s*.checked.)/i,rn=/^$|\/(?:java|ecma)script/i,on=/^true\/(.*)/,an=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sn={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:le.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},ln=p(J),un=ln.appendChild(J.createElement("div"));
sn.optgroup=sn.option,sn.tbody=sn.tfoot=sn.colgroup=sn.caption=sn.thead,sn.th=sn.td,le.fn.extend({text:function(t){return le.access(this,function(t){return t===e?le.text(this):this.empty().append((this[0]&&this[0].ownerDocument||J).createTextNode(t))
},null,t,arguments.length)},wrapAll:function(t){if(le.isFunction(t))return this.each(function(e){le(this).wrapAll(t.call(this,e))
});if(this[0]){var e=le(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;
return t}).append(this)}return this},wrapInner:function(t){return le.isFunction(t)?this.each(function(e){le(this).wrapInner(t.call(this,e))
}):this.each(function(){var e=le(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)
})},wrap:function(t){var e=le.isFunction(t);return this.each(function(n){le(this).wrapAll(e?t.call(this,n):t)
})},unwrap:function(){return this.parent().each(function(){le.nodeName(this,"body")||le(this).replaceWith(this.childNodes)
}).end()},append:function(){return this.domManip(arguments,!0,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(t)
})},prepend:function(){return this.domManip(arguments,!0,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(t,this.firstChild)
})},before:function(){return this.domManip(arguments,!1,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)
})},after:function(){return this.domManip(arguments,!1,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)
})},remove:function(t,e){for(var n,r=0;null!=(n=this[r]);r++)(!t||le.filter(t,[n]).length>0)&&(e||1!==n.nodeType||le.cleanData(b(n)),n.parentNode&&(e&&le.contains(n.ownerDocument,n)&&g(b(n,"script")),n.parentNode.removeChild(n)));
return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&le.cleanData(b(t,!1));t.firstChild;)t.removeChild(t.firstChild);
t.options&&le.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return le.clone(this,t,e)
})},html:function(t){return le.access(this,function(t){var n=this[0]||{},r=0,i=this.length;
if(t===e)return 1===n.nodeType?n.innerHTML.replace(Ue,""):e;if(!("string"!=typeof t||tn.test(t)||!le.support.htmlSerialize&&Je.test(t)||!le.support.leadingWhitespace&&Ve.test(t)||sn[(Ye.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Ke,"<$1></$2>");
try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(le.cleanData(b(n,!1)),n.innerHTML=t);
n=0}catch(o){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(t){var e=le.isFunction(t);
return e||"string"==typeof t||(t=le(t).not(this).detach()),this.domManip([t],!0,function(t){var e=this.nextSibling,n=this.parentNode;
n&&(le(this).remove(),n.insertBefore(t,e))})},detach:function(t){return this.remove(t,!0)
},domManip:function(t,n,r){t=ee.apply([],t);var i,o,a,s,l,u,c=0,f=this.length,p=this,g=f-1,v=t[0],y=le.isFunction(v);
if(y||!(1>=f||"string"!=typeof v||le.support.checkClone)&&nn.test(v))return this.each(function(i){var o=p.eq(i);
y&&(t[0]=v.call(this,i,n?o.html():e)),o.domManip(t,n,r)});if(f&&(u=le.buildFragment(t,this[0].ownerDocument,!1,this),i=u.firstChild,1===u.childNodes.length&&(u=i),i)){for(n=n&&le.nodeName(i,"tr"),s=le.map(b(u,"script"),h),a=s.length;f>c;c++)o=u,c!==g&&(o=le.clone(o,!0,!0),a&&le.merge(s,b(o,"script"))),r.call(n&&le.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],o,c);
if(a)for(l=s[s.length-1].ownerDocument,le.map(s,m),c=0;a>c;c++)o=s[c],rn.test(o.type||"")&&!le._data(o,"globalEval")&&le.contains(l,o)&&(o.src?le.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):le.globalEval((o.text||o.textContent||o.innerHTML||"").replace(an,"")));
u=i=null}return this}}),le.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){le.fn[t]=function(t){for(var n,r=0,i=[],o=le(t),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),le(o[r])[e](n),ne.apply(i,n.get());
return this.pushStack(i)}}),le.extend({clone:function(t,e,n){var r,i,o,a,s,l=le.contains(t.ownerDocument,t);
if(le.support.html5Clone||le.isXMLDoc(t)||!Je.test("<"+t.nodeName+">")?o=t.cloneNode(!0):(un.innerHTML=t.outerHTML,un.removeChild(o=un.firstChild)),!(le.support.noCloneEvent&&le.support.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||le.isXMLDoc(t)))for(r=b(o),s=b(t),a=0;null!=(i=s[a]);++a)r[a]&&y(i,r[a]);
if(e)if(n)for(s=s||b(t),r=r||b(o),a=0;null!=(i=s[a]);a++)v(i,r[a]);else v(t,o);return r=b(o,"script"),r.length>0&&g(r,!l&&b(t,"script")),r=s=i=null,o
},buildFragment:function(t,e,n,r){for(var i,o,a,s,l,u,c,f=t.length,d=p(e),h=[],m=0;f>m;m++)if(o=t[m],o||0===o)if("object"===le.type(o))le.merge(h,o.nodeType?[o]:o);
else if(Ze.test(o)){for(s=s||d.appendChild(e.createElement("div")),l=(Ye.exec(o)||["",""])[1].toLowerCase(),c=sn[l]||sn._default,s.innerHTML=c[1]+o.replace(Ke,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;
if(!le.support.leadingWhitespace&&Ve.test(o)&&h.push(e.createTextNode(Ve.exec(o)[0])),!le.support.tbody)for(o="table"!==l||Ge.test(o)?"<table>"!==c[1]||Ge.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)le.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);
for(le.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);
s=d.lastChild}else h.push(e.createTextNode(o));for(s&&d.removeChild(s),le.support.appendChecked||le.grep(b(h,"input"),x),m=0;o=h[m++];)if((!r||-1===le.inArray(o,r))&&(a=le.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),a&&g(s),n))for(i=0;o=s[i++];)rn.test(o.type||"")&&n.push(o);
return s=null,d},cleanData:function(t,e){for(var n,r,i,o,a=0,s=le.expando,l=le.cache,u=le.support.deleteExpando,c=le.event.special;null!=(n=t[a]);a++)if((e||le.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?le.event.remove(n,r):le.removeEvent(n,r,o.handle);
l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==U?n.removeAttribute(s):n[s]=null,Z.push(i))
}}});var cn,fn,pn,dn=/alpha\([^)]*\)/i,hn=/opacity\s*=\s*([^)]*)/,mn=/^(top|right|bottom|left)$/,gn=/^(none|table(?!-c[ea]).+)/,vn=/^margin/,yn=RegExp("^("+ue+")(.*)$","i"),bn=RegExp("^("+ue+")(?!px)[a-z%]+$","i"),xn=RegExp("^([+-])=("+ue+")","i"),wn={BODY:"block"},Cn={position:"absolute",visibility:"hidden",display:"block"},kn={letterSpacing:0,fontWeight:400},Tn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];
le.fn.extend({css:function(t,n){return le.access(this,function(t,n,r){var i,o,a={},s=0;
if(le.isArray(n)){for(o=fn(t),i=n.length;i>s;s++)a[n[s]]=le.css(t,n[s],!1,o);return a
}return r!==e?le.style(t,n,r):le.css(t,n)},t,n,arguments.length>1)},show:function(){return k(this,!0)
},hide:function(){return k(this)},toggle:function(t){var e="boolean"==typeof t;return this.each(function(){(e?t:C(this))?le(this).show():le(this).hide()
})}}),le.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=pn(t,"opacity");
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":le.support.cssFloat?"cssFloat":"styleFloat"},style:function(t,n,r,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,a,s,l=le.camelCase(n),u=t.style;
if(n=le.cssProps[l]||(le.cssProps[l]=w(u,l)),s=le.cssHooks[n]||le.cssHooks[l],r===e)return s&&"get"in s&&(o=s.get(t,!1,i))!==e?o:u[n];
if(a=typeof r,"string"===a&&(o=xn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(le.css(t,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||le.cssNumber[l]||(r+="px"),le.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(t,r,i))===e)))try{u[n]=r
}catch(c){}}},css:function(t,n,r,i){var o,a,s,l=le.camelCase(n);return n=le.cssProps[l]||(le.cssProps[l]=w(t.style,l)),s=le.cssHooks[n]||le.cssHooks[l],s&&"get"in s&&(a=s.get(t,!0,r)),a===e&&(a=pn(t,n,i)),"normal"===a&&n in kn&&(a=kn[n]),""===r||r?(o=parseFloat(a),r===!0||le.isNumeric(o)?o||0:a):a
},swap:function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];
i=n.apply(t,r||[]);for(o in e)t.style[o]=a[o];return i}}),t.getComputedStyle?(fn=function(e){return t.getComputedStyle(e,null)
},pn=function(t,n,r){var i,o,a,s=r||fn(t),l=s?s.getPropertyValue(n)||s[n]:e,u=t.style;
return s&&(""!==l||le.contains(t.ownerDocument,t)||(l=le.style(t,n)),bn.test(l)&&vn.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):J.documentElement.currentStyle&&(fn=function(t){return t.currentStyle},pn=function(t,n,r){var i,o,a,s=r||fn(t),l=s?s[n]:e,u=t.style;
return null==l&&u&&u[n]&&(l=u[n]),bn.test(l)&&!mn.test(n)&&(i=u.left,o=t.runtimeStyle,a=o&&o.left,a&&(o.left=t.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
}),le.each(["height","width"],function(t,n){le.cssHooks[n]={get:function(t,r,i){return r?0===t.offsetWidth&&gn.test(le.css(t,"display"))?le.swap(t,Cn,function(){return $(t,n,i)
}):$(t,n,i):e},set:function(t,e,r){var i=r&&fn(t);return T(t,e,r?N(t,n,r,le.support.boxSizing&&"border-box"===le.css(t,"boxSizing",!1,i),i):0)
}}}),le.support.opacity||(le.cssHooks.opacity={get:function(t,e){return hn.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""
},set:function(t,e){var n=t.style,r=t.currentStyle,i=le.isNumeric(e)?"alpha(opacity="+100*e+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(e>=1||""===e)&&""===le.trim(o.replace(dn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||r&&!r.filter)||(n.filter=dn.test(o)?o.replace(dn,i):o+" "+i)
}}),le(function(){le.support.reliableMarginRight||(le.cssHooks.marginRight={get:function(t,n){return n?le.swap(t,{display:"inline-block"},pn,[t,"marginRight"]):e
}}),!le.support.pixelPosition&&le.fn.position&&le.each(["top","left"],function(t,n){le.cssHooks[n]={get:function(t,r){return r?(r=pn(t,n),bn.test(r)?le(t).position()[n]+"px":r):e
}}})}),le.expr&&le.expr.filters&&(le.expr.filters.hidden=function(t){return 0>=t.offsetWidth&&0>=t.offsetHeight||!le.support.reliableHiddenOffsets&&"none"===(t.style&&t.style.display||le.css(t,"display"))
},le.expr.filters.visible=function(t){return!le.expr.filters.hidden(t)}),le.each({margin:"",padding:"",border:"Width"},function(t,e){le.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[t+Tn[r]+e]=o[r]||o[r-2]||o[0];
return i}},vn.test(t)||(le.cssHooks[t+e].set=T)});var $n=/%20/g,_n=/\[\]$/,jn=/\r?\n/g,En=/^(?:submit|button|image|reset|file)$/i,Sn=/^(?:input|select|textarea|keygen)/i;
le.fn.extend({serialize:function(){return le.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=le.prop(this,"elements");
return t?le.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!le(this).is(":disabled")&&Sn.test(this.nodeName)&&!En.test(t)&&(this.checked||!en.test(t))
}).map(function(t,e){var n=le(this).val();return null==n?null:le.isArray(n)?le.map(n,function(t){return{name:e.name,value:t.replace(jn,"\r\n")}
}):{name:e.name,value:n.replace(jn,"\r\n")}}).get()}}),le.param=function(t,n){var r,i=[],o=function(t,e){e=le.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)
};if(n===e&&(n=le.ajaxSettings&&le.ajaxSettings.traditional),le.isArray(t)||t.jquery&&!le.isPlainObject(t))le.each(t,function(){o(this.name,this.value)
});else for(r in t)E(r,t[r],n,o);return i.join("&").replace($n,"+")},le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){le.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)
}}),le.fn.hover=function(t,e){return this.mouseenter(t).mouseleave(e||t)};var An,Dn,Ln=le.now(),Hn=/\?/,On=/#.*$/,qn=/([?&])_=[^&]*/,Pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Bn=/^(?:GET|HEAD)$/,Fn=/^\/\//,Rn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Wn=le.fn.load,In={},zn={},Qn="*/".concat("*");
try{Dn=V.href}catch(Xn){Dn=J.createElement("a"),Dn.href="",Dn=Dn.href}An=Rn.exec(Dn.toLowerCase())||[],le.fn.load=function(t,n,r){if("string"!=typeof t&&Wn)return Wn.apply(this,arguments);
var i,o,a,s=this,l=t.indexOf(" ");return l>=0&&(i=t.slice(l,t.length),t=t.slice(0,l)),le.isFunction(n)?(r=n,n=e):n&&"object"==typeof n&&(a="POST"),s.length>0&&le.ajax({url:t,type:a,dataType:"html",data:n}).done(function(t){o=arguments,s.html(i?le("<div>").append(le.parseHTML(t)).find(i):t)
}).complete(r&&function(t,e){s.each(r,o||[t.responseText,e,t])}),this},le.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){le.fn[e]=function(t){return this.on(e,t)
}}),le.each(["get","post"],function(t,n){le[n]=function(t,r,i,o){return le.isFunction(r)&&(o=o||i,i=r,r=e),le.ajax({url:t,type:n,dataType:o,data:r,success:i})
}}),le.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Mn.test(An[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":t.String,"text html":!0,"text json":le.parseJSON,"text xml":le.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?D(D(t,le.ajaxSettings),e):D(le.ajaxSettings,t)
},ajaxPrefilter:S(In),ajaxTransport:S(zn),ajax:function(t,n){function r(t,n,r,i){var o,f,y,b,w,k=n;
2!==x&&(x=2,l&&clearTimeout(l),c=e,s=i||"",C.readyState=t>0?4:0,r&&(b=L(p,C,r)),t>=200&&300>t||304===t?(p.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(le.lastModified[a]=w),w=C.getResponseHeader("etag"),w&&(le.etag[a]=w)),204===t?(o=!0,k="nocontent"):304===t?(o=!0,k="notmodified"):(o=H(p,b),k=o.state,f=o.data,y=o.error,o=!y)):(y=k,(t||!k)&&(k="error",0>t&&(t=0))),C.status=t,C.statusText=(n||k)+"",o?m.resolveWith(d,[f,k,C]):m.rejectWith(d,[C,k,y]),C.statusCode(v),v=e,u&&h.trigger(o?"ajaxSuccess":"ajaxError",[C,p,o?f:y]),g.fireWith(d,[C,k]),u&&(h.trigger("ajaxComplete",[C,p]),--le.active||le.event.trigger("ajaxStop")))
}"object"==typeof t&&(n=t,t=e),n=n||{};var i,o,a,s,l,u,c,f,p=le.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?le(d):le.event,m=le.Deferred(),g=le.Callbacks("once memory"),v=p.statusCode||{},y={},b={},x=0,w="canceled",C={readyState:0,getResponseHeader:function(t){var e;
if(2===x){if(!f)for(f={};e=Pn.exec(s);)f[e[1].toLowerCase()]=e[2];e=f[t.toLowerCase()]
}return null==e?null:e},getAllResponseHeaders:function(){return 2===x?s:null},setRequestHeader:function(t,e){var n=t.toLowerCase();
return x||(t=b[n]=b[n]||t,y[t]=e),this},overrideMimeType:function(t){return x||(p.mimeType=t),this
},statusCode:function(t){var e;if(t)if(2>x)for(e in t)v[e]=[v[e],t[e]];else C.always(t[C.status]);
return this},abort:function(t){var e=t||w;return c&&c.abort(e),r(0,e),this}};if(m.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((t||p.url||Dn)+"").replace(On,"").replace(Fn,An[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=le.trim(p.dataType||"*").toLowerCase().match(ce)||[""],null==p.crossDomain&&(i=Rn.exec(p.url.toLowerCase()),p.crossDomain=!(!i||i[1]===An[1]&&i[2]===An[2]&&(i[3]||("http:"===i[1]?80:443))==(An[3]||("http:"===An[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=le.param(p.data,p.traditional)),A(In,p,n,C),2===x)return C;
u=p.global,u&&0===le.active++&&le.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Bn.test(p.type),a=p.url,p.hasContent||(p.data&&(a=p.url+=(Hn.test(a)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(a)?a.replace(qn,"$1_="+Ln++):a+(Hn.test(a)?"&":"?")+"_="+Ln++)),p.ifModified&&(le.lastModified[a]&&C.setRequestHeader("If-Modified-Since",le.lastModified[a]),le.etag[a]&&C.setRequestHeader("If-None-Match",le.etag[a])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Qn+"; q=0.01":""):p.accepts["*"]);
for(o in p.headers)C.setRequestHeader(o,p.headers[o]);if(p.beforeSend&&(p.beforeSend.call(d,C,p)===!1||2===x))return C.abort();
w="abort";for(o in{success:1,error:1,complete:1})C[o](p[o]);if(c=A(zn,p,n,C)){C.readyState=1,u&&h.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(l=setTimeout(function(){C.abort("timeout")
},p.timeout));try{x=1,c.send(y,r)}catch(k){if(!(2>x))throw k;r(-1,k)}}else r(-1,"No Transport");
return C},getScript:function(t,n){return le.get(t,e,n,"script")},getJSON:function(t,e,n){return le.get(t,e,n,"json")
}}),le.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return le.globalEval(t),t
}}}),le.ajaxPrefilter("script",function(t){t.cache===e&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)
}),le.ajaxTransport("script",function(t){if(t.crossDomain){var n,r=J.head||le("head")[0]||J.documentElement;
return{send:function(e,i){n=J.createElement("script"),n.async=!0,t.scriptCharset&&(n.charset=t.scriptCharset),n.src=t.url,n.onload=n.onreadystatechange=function(t,e){(e||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,e||i(200,"success"))
},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(e,!0)}}}});var Un=[],Jn=/(=)\?(?=&|$)|\?\?/;
le.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Un.pop()||le.expando+"_"+Ln++;
return this[t]=!0,t}}),le.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Jn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=le.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Jn,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||le.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=t[o],t[o]=function(){s=arguments},i.always(function(){t[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Un.push(o)),s&&le.isFunction(a)&&a(s[0]),s=a=e
}),"script"):e});var Vn,Kn,Yn=0,Gn=t.ActiveXObject&&function(){var t;for(t in Vn)Vn[t](e,!0)
};le.ajaxSettings.xhr=t.ActiveXObject?function(){return!this.isLocal&&O()||q()}:O,Kn=le.ajaxSettings.xhr(),le.support.cors=!!Kn&&"withCredentials"in Kn,Kn=le.support.ajax=!!Kn,Kn&&le.ajaxTransport(function(n){if(!n.crossDomain||le.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];
n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(t,i){var s,u,c,f;
try{if(r&&(i||4===l.readyState))if(r=e,a&&(l.onreadystatechange=le.noop,Gn&&delete Vn[a]),i)4!==l.readyState&&l.abort();
else{f={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(f.text=l.responseText);
try{c=l.statusText}catch(p){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404
}}catch(d){i||o(-1,d)}f&&o(s,c,f,u)},n.async?4===l.readyState?setTimeout(r):(a=++Yn,Gn&&(Vn||(Vn={},le(t).unload(Gn)),Vn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(e,!0)}}}});var Zn,tr,er=/^(?:toggle|show|hide)$/,nr=RegExp("^(?:([+-])=|)("+ue+")([a-z%]*)$","i"),rr=/queueHooks$/,ir=[R],or={"*":[function(t,e){var n,r,i=this.createTween(t,e),o=nr.exec(e),a=i.cur(),s=+a||0,l=1,u=20;
if(o){if(n=+o[2],r=o[3]||(le.cssNumber[t]?"":"px"),"px"!==r&&s){s=le.css(i.elem,t,!0)||n||1;
do l=l||".5",s/=l,le.style(i.elem,t,s+r);while(l!==(l=i.cur()/a)&&1!==l&&--u)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n
}return i}]};le.Animation=le.extend(B,{tweener:function(t,e){le.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");
for(var n,r=0,i=t.length;i>r;r++)n=t[r],or[n]=or[n]||[],or[n].unshift(e)},prefilter:function(t,e){e?ir.unshift(t):ir.push(t)
}}),le.Tween=W,W.prototype={constructor:W,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||"swing",this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(le.cssNumber[n]?"":"px")
},cur:function(){var t=W.propHooks[this.prop];return t&&t.get?t.get(this):W.propHooks._default.get(this)
},run:function(t){var e,n=W.propHooks[this.prop];return this.pos=e=this.options.duration?le.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):W.propHooks._default.set(this),this
}},W.prototype.init.prototype=W.prototype,W.propHooks={_default:{get:function(t){var e;
return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=le.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]
},set:function(t){le.fx.step[t.prop]?le.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[le.cssProps[t.prop]]||le.cssHooks[t.prop])?le.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now
}}},W.propHooks.scrollTop=W.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)
}},le.each(["toggle","show","hide"],function(t,e){var n=le.fn[e];le.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(I(e,!0),t,r,i)
}}),le.fn.extend({fadeTo:function(t,e,n,r){return this.filter(C).css("opacity",0).show().end().animate({opacity:e},t,n,r)
},animate:function(t,e,n,r){var i=le.isEmptyObject(t),o=le.speed(e,n,r),a=function(){var e=B(this,le.extend({},t),o);
a.finish=function(){e.stop(!0)},(i||le._data(this,"finish"))&&e.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(t,n,r){var i=function(t){var e=t.stop;delete t.stop,e(r)};return"string"!=typeof t&&(r=n,n=t,t=e),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,n=null!=t&&t+"queueHooks",o=le.timers,a=le._data(this);
if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&rr.test(n)&&i(a[n]);
for(n=o.length;n--;)o[n].elem!==this||null!=t&&o[n].queue!==t||(o[n].anim.stop(r),e=!1,o.splice(n,1));
(e||!r)&&le.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=le._data(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=le.timers,a=r?r.length:0;
for(n.finish=!0,le.queue(this,t,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));
for(e=0;a>e;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),le.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){le.fn[t]=function(t,n,r){return this.animate(e,t,n,r)
}}),le.speed=function(t,e,n){var r=t&&"object"==typeof t?le.extend({},t):{complete:n||!n&&e||le.isFunction(t)&&t,duration:t,easing:n&&e||e&&!le.isFunction(e)&&e};
return r.duration=le.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in le.fx.speeds?le.fx.speeds[r.duration]:le.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){le.isFunction(r.old)&&r.old.call(this),r.queue&&le.dequeue(this,r.queue)
},r},le.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2
}},le.timers=[],le.fx=W.prototype.init,le.fx.tick=function(){var t,n=le.timers,r=0;
for(Zn=le.now();n.length>r;r++)t=n[r],t()||n[r]!==t||n.splice(r--,1);n.length||le.fx.stop(),Zn=e
},le.fx.timer=function(t){t()&&le.timers.push(t)&&le.fx.start()},le.fx.interval=13,le.fx.start=function(){tr||(tr=setInterval(le.fx.tick,le.fx.interval))
},le.fx.stop=function(){clearInterval(tr),tr=null},le.fx.speeds={slow:600,fast:200,_default:400},le.fx.step={},le.expr&&le.expr.filters&&(le.expr.filters.animated=function(t){return le.grep(le.timers,function(e){return t===e.elem
}).length}),le.fn.offset=function(t){if(arguments.length)return t===e?this:this.each(function(e){le.offset.setOffset(this,t,e)
});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,le.contains(n,o)?(typeof o.getBoundingClientRect!==U&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i
},le.offset={setOffset:function(t,e,n){var r=le.css(t,"position");"static"===r&&(t.style.position="relative");
var i,o,a=le(t),s=a.offset(),l=le.css(t,"top"),u=le.css(t,"left"),c=("absolute"===r||"fixed"===r)&&le.inArray("auto",[l,u])>-1,f={},p={};
c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),le.isFunction(e)&&(e=e.call(t,n,s)),null!=e.top&&(f.top=e.top-s.top+i),null!=e.left&&(f.left=e.left-s.left+o),"using"in e?e.using.call(t,f):a.css(f)
}},le.fn.extend({position:function(){if(this[0]){var t,e,n={top:0,left:0},r=this[0];
return"fixed"===le.css(r,"position")?e=r.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),le.nodeName(t[0],"html")||(n=t.offset()),n.top+=le.css(t[0],"borderTopWidth",!0),n.left+=le.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-le.css(r,"marginTop",!0),left:e.left-n.left-le.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||J.documentElement;t&&!le.nodeName(t,"html")&&"static"===le.css(t,"position");)t=t.offsetParent;
return t||J.documentElement})}}),le.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r=/Y/.test(n);
le.fn[t]=function(i){return le.access(this,function(t,i,o){var a=z(t);return o===e?a?n in a?a[n]:a.document.documentElement[i]:t[i]:(a?a.scrollTo(r?le(a).scrollLeft():o,r?o:le(a).scrollTop()):t[i]=o,e)
},t,i,arguments.length,null)}}),le.each({Height:"height",Width:"width"},function(t,n){le.each({padding:"inner"+t,content:n,"":"outer"+t},function(r,i){le.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return le.access(this,function(n,r,i){var o;return le.isWindow(n)?n.document.documentElement["client"+t]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+t],o["scroll"+t],n.body["offset"+t],o["offset"+t],o["client"+t])):i===e?le.css(n,r,s):le.style(n,r,i,s)
},n,a?i:e,a,null)}})}),t.jQuery=t.$=le,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return le
})})(window),!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),!function(t){"use strict";
var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){r.trigger("closed").remove()
}var r,i=t(this),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),r=t(o),e&&e.preventDefault(),r.length||(r=i.hasClass("alert")?i:i.parent()),r.trigger(e=t.Event("close")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.on(t.support.transition.end,n):n())
};var r=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var r=t(this),i=r.data("alert");
i||r.data("alert",i=new n(this)),"string"==typeof e&&i[e].call(r)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=r,this
},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),!function(t){"use strict";
var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)
};e.prototype.setState=function(t){var e="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";
t+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)
},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');
t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;
t.fn.button=function(n){return this.each(function(){var r=t(this),i=r.data("button"),o="object"==typeof n&&n;
i||r.data("button",i=new e(this,o)),"toggle"==n?i.toggle():n&&i.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this
},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);
n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(t){"use strict";
var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))
};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this
},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)
},to:function(e){var n=this.getActiveIndex(),r=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){r.to(e)
}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this
},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")
},slide:function(e,n){var r,i=this.$element.find(".item.active"),o=n||i[e](),a=this.interval,s="next"==e?"left":"right",l="next"==e?"first":"last",u=this;
if(this.sliding=!0,a&&this.pause(),o=o.length?o:this.$element.find(".item")[l](),r=t.Event("slide",{relatedTarget:o[0],direction:s}),!o.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(u.$indicators.children()[u.getActiveIndex()]);
e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(r),r.isDefaultPrevented())return;
o.addClass(e),o[0].offsetWidth,i.addClass(s),o.addClass(s),this.$element.one(t.support.transition.end,function(){o.removeClass([e,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger("slid")
},0)})}else{if(this.$element.trigger(r),r.isDefaultPrevented())return;i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")
}return a&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var r=t(this),i=r.data("carousel"),o=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),a="string"==typeof n?n:o.slide;
i||r.data("carousel",i=new e(this,o)),"number"==typeof n?i.to(n):a?i[a]():o.interval&&i.pause().cycle()
})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this
},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,r,i=t(this),o=t(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),a=t.extend({},o.data(),i.data());
o.carousel(a),(r=i.attr("data-slide-to"))&&o.data("carousel").pause().to(r).cycle(),e.preventDefault()
})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()
};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");
return t?"width":"height"},show:function(){var e,n,r,i;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in"),r&&r.length){if(i=r.data("collapse"),i&&i.transitioning)return;
r.collapse("hide"),i||r.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])
}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))
},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this
},transition:function(e,n,r){var i=this,o=function(){"show"==n.type&&i.reset(),i.transitioning=0,i.$element.trigger(r)
};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,o):o())
},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;
t.fn.collapse=function(n){return this.each(function(){var r=t(this),i=r.data("collapse"),o=t.extend({},t.fn.collapse.defaults,r.data(),"object"==typeof n&&n);
i||r.data("collapse",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this
},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,r=t(this),i=r.attr("data-target")||e.preventDefault()||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=t(i).data("collapse")?"toggle":r.data();
r[t(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(i).collapse(o)})}(window.jQuery),!function(t){"use strict";
function e(){t(r).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,r=e.attr("data-target");
return r||(r=e.attr("href"),r=r&&/#/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,"")),n=r&&t(r),n&&n.length||(n=e.parent()),n
}var r="[data-toggle=dropdown]",i=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);
t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})
};i.prototype={constructor:i,toggle:function(){var r,i,o=t(this);if(!o.is(".disabled, :disabled"))return r=n(o),i=r.hasClass("open"),e(),i||r.toggleClass("open"),o.focus(),!1
},keydown:function(e){var i,o,a,s,l;if(/(38|40|27)/.test(e.keyCode)&&(i=t(this),e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled"))){if(a=n(i),s=a.hasClass("open"),!s||s&&27==e.keyCode)return 27==e.which&&a.find(r).focus(),i.click();
o=t("[role=menu] li:not(.divider):visible a",a),o.length&&(l=o.index(o.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&o.length-1>l&&l++,~l||(l=0),o.eq(l).focus())
}}};var o=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),r=n.data("dropdown");
r||n.data("dropdown",r=new i(this)),"string"==typeof e&&r[e].call(n)})},t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=o,this
},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()
}).on("click.dropdown-menu",function(t){t.stopPropagation()}).on("click.dropdown.data-api",r,i.prototype.toggle).on("keydown.dropdown.data-api",r+", [role=menu]",i.prototype.keydown)
}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()
},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");
e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")
}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())
},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()
})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()
}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()
},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()
})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")
})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=t.support.transition&&n;
if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;
r?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()
}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var r=t(this),i=r.data("modal"),o=t.extend({},t.fn.modal.defaults,r.data(),"object"==typeof n&&n);
i||r.data("modal",i=new e(this,o)),"string"==typeof n?i[n]():o.show&&i.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this
},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),r=n.attr("href"),i=t(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=i.data("modal")?"toggle":t.extend({remote:!/#/.test(r)&&r},i.data(),n.data());
e.preventDefault(),i.modal(o).one("hide",function(){n.focus()})})}(window.jQuery),!function(t){"use strict";
var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,r){var i,o,a,s,l;
for(this.type=e,this.$element=t(n),this.options=this.getOptions(r),this.enabled=!0,a=this.options.trigger.split(" "),l=a.length;l--;)s=a[l],"click"==s?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=s&&(i="hover"==s?"mouseenter":"focus",o="hover"==s?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.leave,this)));
this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e
},enter:function(e){var n,r=t.fn[this.type].defaults,i={};return this._options&&t.each(this._options,function(t,e){r[t]!=e&&(i[t]=e)
},this),n=t(e.currentTarget)[this.type](i).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()
},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);
return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()
},n.options.delay.hide),void 0):n.hide()},show:function(){var e,n,r,i,o,a,s=t.Event("show");
if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;
switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),r=e[0].offsetWidth,i=e[0].offsetHeight,o){case"bottom":a={top:n.top+n.height,left:n.left+n.width/2-r/2};
break;case"top":a={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":a={top:n.top+n.height/2-i/2,left:n.left-r};
break;case"right":a={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(a,o),this.$element.trigger("shown")
}},applyPlacement:function(t,e){var n,r,i,o,a=this.tip(),s=a[0].offsetWidth,l=a[0].offsetHeight;
a.offset(t).addClass(e).addClass("in"),n=a[0].offsetWidth,r=a[0].offsetHeight,"top"==e&&r!=l&&(t.top=t.top+l-r,o=!0),"bottom"==e||"top"==e?(i=0,0>t.left&&(i=-2*t.left,t.left=0,a.offset(t),n=a[0].offsetWidth,r=a[0].offsetHeight),this.replaceArrow(i-s+n,n,"left")):this.replaceArrow(r-l,r,"top"),o&&a.offset(t)
},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();
t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")
},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).detach()
},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.detach()})}var n=this.tip(),r=t.Event("hide");
return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.detach(),this.$element.trigger("hidden"),this)
},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")
},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];
return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())
},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)
},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)
},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled
},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;
n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var r=t(this),i=r.data("tooltip"),o="object"==typeof n&&n;
i||r.data("tooltip",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this
}}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)
};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")
},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;
return t=("function"==typeof n.content?n.content.call(e[0]):n.content)||e.attr("data-content")
},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var r=t(this),i=r.data("popover"),o="object"==typeof n&&n;
i||r.data("popover",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this
}}(window.jQuery),!function(t){"use strict";function e(e,n){var r,i=t.proxy(this.process,this),o=t(e).is("body")?t(window):t(e);
this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=o.on("scroll.scroll-spy.data-api",i),this.selector=(this.options.target||(r=t(e).attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()
}e.prototype={constructor:e,refresh:function(){var e,n=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),r=e.data("target")||e.attr("href"),i=/^#\w/.test(r)&&t(r);
return i&&i.length&&[[i.position().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),r]]||null
}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])
})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,r=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,a=this.activeTarget;
if(e>=r)return a!=(t=o.last()[0])&&this.activate(t);for(t=i.length;t--;)a!=o[t]&&e>=i[t]&&(!i[t+1]||i[t+1]>=e)&&this.activate(o[t])
},activate:function(e){var n,r;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")
}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var r=t(this),i=r.data("scrollspy"),o="object"==typeof n&&n;
i||r.data("scrollspy",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this
},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);
e.scrollspy(e.data())})})}(window.jQuery),!function(t){"use strict";var e=function(e){this.element=t(e)
};e.prototype={constructor:e,show:function(){var e,n,r,i=this.element,o=i.closest("ul:not(.dropdown-menu)"),a=i.attr("data-target");
a||(a=i.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(e=o.find(".active:last a")[0],r=t.Event("show",{relatedTarget:e}),i.trigger(r),r.isDefaultPrevented()||(n=t(a),this.activate(i.parent("li"),o),this.activate(n,n.parent(),function(){i.trigger({type:"shown",relatedTarget:e})
})))},activate:function(e,n,r){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),r&&r()
}var o=n.find("> .active"),a=r&&t.support.transition&&o.hasClass("fade");a?o.one(t.support.transition.end,i):i(),o.removeClass("in")
}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var r=t(this),i=r.data("tab");
i||r.data("tab",i=new e(this)),"string"==typeof n&&i[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this
},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")
})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()
};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");
return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t
},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});
return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this
},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;
return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)
},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)
}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this
},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],r=[],i=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?r.push(e):i.push(e):n.push(e);
return n.concat(r,i)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return t.replace(RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"
})},render:function(e){var n=this;return e=t(e).map(function(e,r){return e=t(n.options.item).attr("data-value",r),e.find("a").html(n.highlighter(r)),e[0]
}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),n=e.next();
n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();
e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))
},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e
},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();
break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()
}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)
},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;
this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0
},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()
},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")
},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()
}};var n=t.fn.typeahead;t.fn.typeahead=function(n){return this.each(function(){var r=t(this),i=r.data("typeahead"),o="object"==typeof n&&n;
i||r.data("typeahead",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this
},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var e=t(this);
e.data("typeahead")||e.typeahead(e.data())})}(window.jQuery),!function(t){"use strict";
var e=function(e,n){this.options=t.extend({},t.fn.affix.defaults,n),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)
},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),r=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,a=o.bottom,s=o.top,l="affix affix-top affix-bottom";
"object"!=typeof o&&(a=s=o),"function"==typeof s&&(s=o.top()),"function"==typeof a&&(a=o.bottom()),e=null!=this.unpin&&r+this.unpin<=i.top?!1:null!=a&&i.top+this.$element.height()>=n-a?"bottom":null!=s&&s>=r?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?i.top-r:null,this.$element.removeClass(l).addClass("affix"+(e?"-"+e:"")))
}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var r=t(this),i=r.data("affix"),o="object"==typeof n&&n;
i||r.data("affix",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this
},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();
n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)
})})}(window.jQuery),function(t){function e(r){function o(t){return t&&"object"==typeof t&&!yr(t)&&Kn.call(t,"__wrapped__")?t:new F(t)
}function N(t,e,n){var r=t.length,i=r-e>=n;if(i)for(var o={},a=e-1;r>++a;){var s=Bn(t[a]);
(Kn.call(o,s)?o[s]:o[s]=[]).push(t[a])}return function(n){if(i){var r=Bn(n);return Kn.call(o,r)&&Ie(o[r],n)>-1
}return Ie(t,n,e)>-1}}function H(t){return t.charCodeAt(0)}function O(t,e){var r=t.index,i=e.index;
if(t=t.criteria,e=e.criteria,t!==e){if(t>e||t===n)return 1;if(e>t||e===n)return-1
}return i>r?-1:1}function q(t,e,n,r){function i(){var r=arguments,u=a?this:e;if(o||(t=e[s]),n.length&&(r=r.length?(r=I(r),l?r.concat(n):n.concat(r)):n),this instanceof i){R.prototype=t.prototype,u=new R,R.prototype=null;
var c=t.apply(u,r);return oe(c)?c:u}return t.apply(u,r)}var o=ie(t),a=!n,s=e;if(a){var l=r;
n=e}else if(!o){if(!r)throw new Fn;e=t}return i}function P(){for(var t,e={arrays:"isArray(iterable)",bottom:"",init:"iterable",loop:"",top:"",useHas:!0,useKeys:!!xr},n=0;t=arguments[n];n++)for(var r in t)e[r]=t[r];
var i=e.args;e.firstArg=/^[^,]+/.exec(i)[0];var a=Hn("hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectTypes","return function("+i+") {\n"+hr(e)+"\n}");
return a(Kn,Q,yr,ce,xr,o,A)}function M(t){return"\\"+D[t]}function B(t){return wr[t]
}function F(t){this.__wrapped__=t}function R(){}function W(t){var e=!1;if(!t||tr.call(t)!=_)return e;
var n=t.constructor;return(ie(n)?n instanceof n:dr.nodeClass||!isNode(t))?(Nr(t,function(t,n){e=n
}),e===!1||Kn.call(t,e)):e}function I(t,e,r){e||(e=0),r===n&&(r=t?t.length:0);for(var i=-1,o=r-e||0,a=An(0>o?0:o);o>++i;)a[i]=t[e+i];
return a}function z(t){return Cr[t]}function Q(t){return tr.call(t)==w}function X(t,e,r,i,a,s){var l=t;
if("function"==typeof e&&(i=r,r=e,e=!1),"function"==typeof r){if(r=i===n?r:o.createCallback(r,i,1),l=r(l),l!==n)return l;
l=t}var u=oe(l);if(u){var c=tr.call(l);if(!S[c])return l;var f=yr(l)}if(!u||!e)return u?f?I(l):kr({},l):l;
var p=pr[c];switch(c){case k:case T:return new p(+l);case $:case E:return new p(l);
case j:return p(l.source,d.exec(l))}a||(a=[]),s||(s=[]);for(var h=a.length;h--;)if(a[h]==t)return s[h];
return l=f?p(l.length):{},f&&(Kn.call(t,"index")&&(l.index=t.index),Kn.call(t,"input")&&(l.input=t.input)),a.push(t),s.push(l),(f?ke:$r)(t,function(t,i){l[i]=X(t,e,r,n,a,s)
}),l}function U(t,e,n){return X(t,!0,e,n)}function J(t,e,r){var i;return e=o.createCallback(e,r),$r(t,function(t,r,o){return e(t,r,o)?(i=r,!1):n
}),i}function V(t){var e=[];return Nr(t,function(t,n){ie(t)&&e.push(n)}),e.sort()
}function K(t,e){return t?Kn.call(t,e):!1}function Y(t){for(var e=-1,n=xr(t),r=n.length,i={};r>++e;){var o=n[e];
i[t[o]]=o}return i}function G(t){return t===!0||t===!1||tr.call(t)==k}function Z(t){return t instanceof Ln||tr.call(t)==T
}function te(t){return t?1===t.nodeType:!1}function ee(t){var e=!0;if(!t)return e;
var n=tr.call(t),r=t.length;return n==C||n==E||n==w||n==_&&"number"==typeof r&&ie(t.splice)?!r:($r(t,function(){return e=!1
}),e)}function ne(t,e,r,i,a,l){var u=r===s;if(r&&!u){r=i===n?r:o.createCallback(r,i,2);
var c=r(t,e);if(c!==n)return!!c}if(t===e)return 0!==t||1/t==1/e;var f=typeof t,p=typeof e;
if(t===t&&(!t||"function"!=f&&"object"!=f)&&(!e||"function"!=p&&"object"!=p))return!1;
if(null==t||null==e)return t===e;var d=tr.call(t),h=tr.call(e);if(d==w&&(d=_),h==w&&(h=_),d!=h)return!1;
switch(d){case k:case T:return+t==+e;case $:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;
case j:case E:return t==Bn(e)}var m=d==C;if(!m){if(Kn.call(t,"__wrapped__ ")||Kn.call(e,"__wrapped__"))return ne(t.__wrapped__||t,e.__wrapped__||e,r,i,a,l);
if(d!=_)return!1;var g=t.constructor,v=e.constructor;if(g!=v&&!(ie(g)&&g instanceof g&&ie(v)&&v instanceof v))return!1
}a||(a=[]),l||(l=[]);for(var y=a.length;y--;)if(a[y]==t)return l[y]==e;var b=0;if(c=!0,a.push(t),l.push(e),m){if(y=t.length,b=e.length,c=b==t.length,!c&&!u)return c;
for(;b--;){var x=y,N=e[b];if(u)for(;x--&&!(c=ne(t[x],N,r,i,a,l)););else if(!(c=ne(t[b],N,r,i,a,l)))break
}return c}return Nr(e,function(e,o,s){return Kn.call(s,o)?(b++,c=Kn.call(t,o)&&ne(t[o],e,r,i,a,l)):n
}),c&&!u&&Nr(t,function(t,e,r){return Kn.call(r,e)?c=--b>-1:n}),c}function re(t){return rr(t)&&!ir(parseFloat(t))
}function ie(t){return"function"==typeof t}function oe(t){return t?A[typeof t]:!1
}function ae(t){return le(t)&&t!=+t}function se(t){return null===t}function le(t){return"number"==typeof t||tr.call(t)==$
}function ue(t){return t instanceof Mn||tr.call(t)==j}function ce(t){return"string"==typeof t||tr.call(t)==E
}function fe(t){return t===n}function pe(t,e,r){var i=arguments,a=0,l=2;if(!oe(t))return t;
if(r===s)var u=i[3],c=i[4],f=i[5];else c=[],f=[],"number"!=typeof r&&(l=i.length),l>3&&"function"==typeof i[l-2]?u=o.createCallback(i[--l-1],i[l--],2):l>2&&"function"==typeof i[l-1]&&(u=i[--l]);
for(;l>++a;)(yr(i[a])?ke:$r)(i[a],function(e,r){var i,o,a=e,l=t[r];if(e&&((o=yr(e))||_r(e))){for(var p=c.length;p--;)if(i=c[p]==e){l=f[p];
break}i||(l=o?yr(l)?l:[]:_r(l)?l:{},u&&(a=u(l,e),a!==n&&(l=a)),c.push(e),f.push(l),u||(l=pe(l,e,s,u,c,f)))
}else u&&(a=u(l,e),a===n&&(a=e)),a!==n&&(l=a);t[r]=l});return t}function de(t,e,n){var r="function"==typeof e,i={};
if(r)e=o.createCallback(e,n);else var a=Un.apply(Rn,arguments);return Nr(t,function(t,n,o){(r?!e(t,n,o):0>Ie(a,n,1))&&(i[n]=t)
}),i}function he(t){for(var e=-1,n=xr(t),r=n.length,i=An(r);r>++e;){var o=n[e];i[e]=[o,t[o]]
}return i}function me(t,e,n){var r={};if("function"!=typeof e)for(var i=0,a=Un.apply(Rn,arguments),s=oe(t)?a.length:0;s>++i;){var l=a[i];
l in t&&(r[l]=t[l])}else e=o.createCallback(e,n),Nr(t,function(t,n,i){e(t,n,i)&&(r[n]=t)
});return r}function ge(t){for(var e=-1,n=xr(t),r=n.length,i=An(r);r>++e;)i[e]=t[n[e]];
return i}function ve(t){for(var e=-1,n=Un.apply(Rn,I(arguments,1)),r=n.length,i=An(r);r>++e;)i[e]=t[n[e]];
return i}function ye(t,e,r){var i=-1,o=t?t.length:0,a=!1;return r=(0>r?ar(0,o+r):r)||0,"number"==typeof o?a=(ce(t)?t.indexOf(e,r):Ie(t,e,r))>-1:$r(t,function(t){return++i>=r?!(a=t===e):n
}),a}function be(t,e,n){var r={};return e=o.createCallback(e,n),ke(t,function(t,n,i){n=Bn(e(t,n,i)),Kn.call(r,n)?r[n]++:r[n]=1
}),r}function xe(t,e,n){var r=!0;e=o.createCallback(e,n);var i=-1,a=t?t.length:0;
if("number"==typeof a)for(;a>++i&&(r=!!e(t[i],i,t)););else $r(t,function(t,n,i){return r=!!e(t,n,i)
});return r}function we(t,e,n){var r=[];e=o.createCallback(e,n);var i=-1,a=t?t.length:0;
if("number"==typeof a)for(;a>++i;){var s=t[i];e(s,i,t)&&r.push(s)}else $r(t,function(t,n,i){e(t,n,i)&&r.push(t)
});return r}function Ce(t,e,r){e=o.createCallback(e,r);var i=-1,a=t?t.length:0;if("number"!=typeof a){var s;
return $r(t,function(t,r,i){return e(t,r,i)?(s=t,!1):n}),s}for(;a>++i;){var l=t[i];
if(e(l,i,t))return l}}function ke(t,e,r){var i=-1,a=t?t.length:0;if(e=e&&r===n?e:o.createCallback(e,r),"number"==typeof a)for(;a>++i&&e(t[i],i,t)!==!1;);else $r(t,e);
return t}function Te(t,e,n){var r={};return e=o.createCallback(e,n),ke(t,function(t,n,i){n=Bn(e(t,n,i)),(Kn.call(r,n)?r[n]:r[n]=[]).push(t)
}),r}function Ne(t,e){var n=I(arguments,2),r=-1,i="function"==typeof e,o=t?t.length:0,a=An("number"==typeof o?o:0);
return ke(t,function(t){a[++r]=(i?e:t[e]).apply(t,n)}),a}function $e(t,e,n){var r=-1,i=t?t.length:0;
if(e=o.createCallback(e,n),"number"==typeof i)for(var a=An(i);i>++r;)a[r]=e(t[r],r,t);
else a=[],$r(t,function(t,n,i){a[++r]=e(t,n,i)});return a}function _e(t,e,n){var r=-1/0,i=r;
if(!e&&yr(t))for(var a=-1,s=t.length;s>++a;){var l=t[a];l>i&&(i=l)}else e=!e&&ce(t)?H:o.createCallback(e,n),ke(t,function(t,n,o){var a=e(t,n,o);
a>r&&(r=a,i=t)});return i}function je(t,e,n){var r=1/0,i=r;if(!e&&yr(t))for(var a=-1,s=t.length;s>++a;){var l=t[a];
i>l&&(i=l)}else e=!e&&ce(t)?H:o.createCallback(e,n),ke(t,function(t,n,o){var a=e(t,n,o);
r>a&&(r=a,i=t)});return i}function Ee(t,e){var n=-1,r=t?t.length:0;if("number"==typeof r)for(var i=An(r);r>++n;)i[n]=t[n][e];
return i||$e(t,e)}function Se(t,e,n,r){if(!t)return n;var i=3>arguments.length;e=o.createCallback(e,r,4);
var a=-1,s=t.length;if("number"==typeof s)for(i&&(n=t[++a]);s>++a;)n=e(n,t[a],a,t);
else $r(t,function(t,r,o){n=i?(i=!1,t):e(n,t,r,o)});return n}function Ae(t,e,n,r){var i=t,a=t?t.length:0,s=3>arguments.length;
if("number"!=typeof a){var l=xr(t);a=l.length}return e=o.createCallback(e,r,4),ke(t,function(t,r,o){r=l?l[--a]:--a,n=s?(s=!1,i[r]):e(n,i[r],r,o)
}),n}function De(t,e,n){return e=o.createCallback(e,n),we(t,function(t,n,r){return!e(t,n,r)
})}function Le(t){var e=-1,n=t?t.length:0,r=An("number"==typeof n?n:0);return ke(t,function(t){var n=Jn(ur()*(++e+1));
r[e]=r[n],r[n]=t}),r}function He(t){var e=t?t.length:0;return"number"==typeof e?e:xr(t).length
}function Oe(t,e,n){var r;e=o.createCallback(e,n);var i=-1,a=t?t.length:0;if("number"==typeof a)for(;a>++i&&!(r=e(t[i],i,t)););else $r(t,function(t,n,i){return!(r=e(t,n,i))
});return!!r}function qe(t,e,n){var r=-1,i=t?t.length:0,a=An("number"==typeof i?i:0);
for(e=o.createCallback(e,n),ke(t,function(t,n,i){a[++r]={criteria:e(t,n,i),index:r,value:t}
}),i=a.length,a.sort(O);i--;)a[i]=a[i].value;return a}function Pe(t){return t&&"number"==typeof t.length?I(t):ge(t)
}function Me(t){for(var e=-1,n=t?t.length:0,r=[];n>++e;){var i=t[e];i&&r.push(i)}return r
}function Be(t){for(var e=-1,n=t?t.length:0,r=Un.apply(Rn,arguments),i=N(r,n,100),o=[];n>++e;){var a=t[e];
i(a)||o.push(a)}return o}function Fe(t,e,n){var r=-1,i=t?t.length:0;for(e=o.createCallback(e,n);i>++r;)if(e(t[r],r,t))return r;
return-1}function Re(t,e,n){if(t){var r=0,i=t.length;if("number"!=typeof e&&null!=e){var a=-1;
for(e=o.createCallback(e,n);i>++a&&e(t[a],a,t);)r++}else if(r=e,null==r||n)return t[0];
return I(t,0,sr(ar(0,r),i))}}function We(t,e,n,r){var i=-1,a=t?t.length:0,s=[];for("boolean"!=typeof e&&null!=e&&(r=n,n=e,e=!1),null!=n&&(n=o.createCallback(n,r));a>++i;){var l=t[i];
n&&(l=n(l,i,t)),yr(l)?Yn.apply(s,e?l:We(l)):s.push(l)}return s}function Ie(t,e,n){var r=-1,i=t?t.length:0;
if("number"==typeof n)r=(0>n?ar(0,i+n):n||0)-1;else if(n)return r=Ke(t,e),t[r]===e?r:-1;
for(;i>++r;)if(t[r]===e)return r;return-1}function ze(t,e,n){if(!t)return[];var r=0,i=t.length;
if("number"!=typeof e&&null!=e){var a=i;for(e=o.createCallback(e,n);a--&&e(t[a],a,t);)r++
}else r=null==e||n?1:e||r;return I(t,0,sr(ar(0,i-r),i))}function Qe(t){var e=arguments,n=e.length,r={0:{}},i=-1,o=t?t.length:0,a=o>=100,s=[],l=s;
t:for(;o>++i;){var u=t[i];if(a)var c=Bn(u),f=Kn.call(r[0],c)?!(l=r[0][c]):l=r[0][c]=[];
if(f||0>Ie(l,u)){a&&l.push(u);for(var p=n;--p;)if(!(r[p]||(r[p]=N(e[p],0,100)))(u))continue t;
s.push(u)}}return s}function Xe(t,e,n){if(t){var r=0,i=t.length;if("number"!=typeof e&&null!=e){var a=i;
for(e=o.createCallback(e,n);a--&&e(t[a],a,t);)r++}else if(r=e,null==r||n)return t[i-1];
return I(t,ar(0,i-r))}}function Ue(t,e,n){var r=t?t.length:0;for("number"==typeof n&&(r=(0>n?ar(0,r+n):sr(n,r-1))+1);r--;)if(t[r]===e)return r;
return-1}function Je(t,e,n){t=+t||0,n=+n||1,null==e&&(e=t,t=0);for(var r=-1,i=ar(0,Qn((e-t)/n)),o=An(i);i>++r;)o[r]=t,t+=n;
return o}function Ve(t,e,n){if("number"!=typeof e&&null!=e){var r=0,i=-1,a=t?t.length:0;
for(e=o.createCallback(e,n);a>++i&&e(t[i],i,t);)r++}else r=null==e||n?1:ar(0,e);return I(t,r)
}function Ke(t,e,n,r){var i=0,a=t?t.length:i;for(n=n?o.createCallback(n,r,1):bn,e=n(e);a>i;){var s=i+a>>>1;
e>n(t[s])?i=s+1:a=s}return i}function Ye(){return Ge(Un.apply(Rn,arguments))}function Ge(t,e,n,r){var i=-1,a=t?t.length:0,s=[],l=s;
"boolean"!=typeof e&&null!=e&&(r=n,n=e,e=!1);var u=!e&&a>=75;if(u)var c={};for(null!=n&&(l=[],n=o.createCallback(n,r));a>++i;){var f=t[i],p=n?n(f,i,t):f;
if(u)var d=Bn(p),h=Kn.call(c,d)?!(l=c[d]):l=c[d]=[];(e?!i||l[l.length-1]!==p:h||0>Ie(l,p))&&((n||u)&&l.push(p),s.push(f))
}return s}function Ze(t){for(var e=-1,n=t?t.length:0,r=N(arguments,1,30),i=[];n>++e;){var o=t[e];
r(o)||i.push(o)}return i}function tn(t){for(var e=-1,n=t?_e(Ee(arguments,"length")):0,r=An(n);n>++e;)r[e]=Ee(arguments,e);
return r}function en(t,e){for(var n=-1,r=t?t.length:0,i={};r>++n;){var o=t[n];e?i[o]=e[n]:i[o[0]]=o[1]
}return i}function nn(t,e){return 1>t?e():function(){return 1>--t?e.apply(this,arguments):n
}}function rn(t,e){return dr.fastBind||er&&arguments.length>2?er.call.apply(er,arguments):q(t,e,I(arguments,2))
}function on(t){for(var e=Un.apply(Rn,arguments),n=e.length>1?0:(e=V(t),-1),r=e.length;r>++n;){var i=e[n];
t[i]=rn(t[i],t)}return t}function an(t,e){return q(t,e,I(arguments,2),s)}function sn(){var t=arguments;
return function(){for(var e=arguments,n=t.length;n--;)e=[t[n].apply(this,e)];return e[0]
}}function ln(t,e,r){if(null==t)return bn;var i=typeof t;if("function"!=i){if("object"!=i)return function(e){return e[t]
};var o=xr(t);return function(e){for(var n=o.length,r=!1;n--&&(r=ne(e[o[n]],t[o[n]],s)););return r
}}return e!==n?1===r?function(n){return t.call(e,n)}:2===r?function(n,r){return t.call(e,n,r)
}:4===r?function(n,r,i,o){return t.call(e,n,r,i,o)}:function(n,r,i){return t.call(e,n,r,i)
}:t}function un(t,e,n){function r(){s=null,n||(o=t.apply(a,i))}var i,o,a,s;return function(){var l=n&&!s;
return i=arguments,a=this,Xn(s),s=Zn(r,e),l&&(o=t.apply(a,i)),o}}function cn(t){var e=I(arguments,1);
return Zn(function(){t.apply(n,e)},1)}function fn(t,e){var r=I(arguments,2);return Zn(function(){t.apply(n,r)
},e)}function pn(t,e){var n={};return function(){var r=Bn(e?e.apply(this,arguments):arguments[0]);
return Kn.call(n,r)?n[r]:n[r]=t.apply(this,arguments)}}function dn(t){var e,n;return function(){return e?n:(e=!0,n=t.apply(this,arguments),t=null,n)
}}function hn(t){return q(t,I(arguments,1))}function mn(t){return q(t,I(arguments,1),null,s)
}function gn(t,e){function n(){s=new Ln,a=null,i=t.apply(o,r)}var r,i,o,a,s=0;return function(){var l=new Ln,u=e-(l-s);
return r=arguments,o=this,0>=u?(Xn(a),a=null,s=l,i=t.apply(o,r)):a||(a=Zn(n,u)),i
}}function vn(t,e){return function(){var n=[t];return Yn.apply(n,arguments),e.apply(this,n)
}}function yn(t){return null==t?"":Bn(t).replace(v,B)}function bn(t){return t}function xn(t){ke(V(t),function(e){var n=o[e]=t[e];
o.prototype[e]=function(){var t=this.__wrapped__,e=[t];Yn.apply(e,arguments);var r=n.apply(o,e);
return t&&"object"==typeof t&&t==r?this:new F(r)}})}function wn(){return r._=In,this
}function Cn(t,e){return null==t&&null==e&&(e=1),t=+t||0,null==e&&(e=t,t=0),t+Jn(ur()*((+e||0)-t+1))
}function kn(t,e){var r=t?t[e]:n;return ie(r)?t[e]():r}function Tn(t,e,r){var i=o.templateSettings;
t||(t=""),r=Tr({},r,i);var a,s=Tr({},r.imports,i.imports),f=xr(s),d=ge(s),m=0,v=r.interpolate||g,b="__p += '",w=Mn((r.escape||g).source+"|"+v.source+"|"+(v===h?p:g).source+"|"+(r.evaluate||g).source+"|$","g");
t.replace(w,function(e,n,r,i,o,s){return r||(r=i),b+=t.slice(m,s).replace(y,M),n&&(b+="' +\n__e("+n+") +\n'"),o&&(a=!0,b+="';\n"+o+";\n__p += '"),r&&(b+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),m=s+e.length,e
}),b+="';\n";var C=r.variable,k=C;k||(C="obj",b="with ("+C+") {\n"+b+"\n}\n"),b=(a?b.replace(l,""):b).replace(u,"$1").replace(c,"$1;"),b="function("+C+") {\n"+(k?"":C+" || ("+C+" = {});\n")+"var __t, __p = '', __e = _.escape"+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+b+"return __p\n}";
var T="\n/*\n//@ sourceURL="+(r.sourceURL||"/lodash/template/source["+x++ +"]")+"\n*/";
try{var N=Hn(f,"return "+b+T).apply(n,d)}catch($){throw $.source=b,$}return e?N(e):(N.source=b,N)
}function Nn(t,e,n){t=(t=+t)>-1?t:0;var r=-1,i=An(t);for(e=o.createCallback(e,n,1);t>++r;)i[r]=e(r);
return i}function $n(t){return null==t?"":Bn(t).replace(f,z)}function _n(t){var e=++a;
return Bn(null==t?"":t)+e}function jn(t,e){return e(t),t}function En(){return Bn(this.__wrapped__)
}function Sn(){return this.__wrapped__}r=r?L.defaults(t.Object(),r,L.pick(t,b)):t;
var An=r.Array,Dn=r.Boolean,Ln=r.Date,Hn=r.Function,On=r.Math,qn=r.Number,Pn=r.Object,Mn=r.RegExp,Bn=r.String,Fn=r.TypeError,Rn=An(),Wn=Pn(),In=r._,zn=Mn("^"+Bn(Wn.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Qn=On.ceil,Xn=r.clearTimeout,Un=Rn.concat,Jn=On.floor,Vn=zn.test(Vn=Pn.getPrototypeOf)&&Vn,Kn=Wn.hasOwnProperty,Yn=Rn.push,Gn=r.setImmediate,Zn=r.setTimeout,tr=Wn.toString,er=zn.test(er=I.bind)&&er,nr=zn.test(nr=An.isArray)&&nr,rr=r.isFinite,ir=r.isNaN,or=zn.test(or=Pn.keys)&&or,ar=On.max,sr=On.min,lr=r.parseInt,ur=On.random,cr=zn.test(r.attachEvent),fr=er&&!/\n|true/.test(er+cr),pr={};
pr[C]=An,pr[k]=Dn,pr[T]=Ln,pr[_]=Pn,pr[$]=qn,pr[j]=Mn,pr[E]=Bn;var dr=o.support={};
dr.fastBind=er&&!fr,o.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:h,variable:"",imports:{_:o}};
var hr=function(t){var e="var index, iterable = "+t.firstArg+", result = "+t.init+";\nif (!iterable) return result;\n"+t.top+";\n";
return t.arrays&&(e+="var length = iterable.length; index = -1;\nif ("+t.arrays+") {\n  while (++index < length) {\n    "+t.loop+"\n  }\n}\nelse {  "),t.useHas&&t.useKeys?e+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? keys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    "+t.loop+"\n  }  ":(e+="\n  for (index in iterable) {",t.useHas&&(e+="\n    if (",t.useHas&&(e+="hasOwnProperty.call(iterable, index)"),e+=") {    "),e+=t.loop+";    ",t.useHas&&(e+="\n    }"),e+="\n  }  "),t.arrays&&(e+="\n}"),e+=t.bottom+";\nreturn result"
},mr={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},gr={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",arrays:!1,loop:"if (callback(iterable[index], index, collection) === false) return result"},vr={top:"if (!objectTypes[typeof iterable]) return result;\n"+gr.top,arrays:!1};
F.prototype=o.prototype;var yr=nr||function(t){return t instanceof An||tr.call(t)==C
},br=P({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)",arrays:!1}),xr=or?function(t){return oe(t)?or(t):[]
}:br,wr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cr=Y(wr),kr=P(mr,{top:mr.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),Tr=P(mr),Nr=P(gr,vr,{useHas:!1}),$r=P(gr,vr),_r=function(t){if(!t||tr.call(t)!=_)return!1;
var e=t.valueOf,n="function"==typeof e&&(n=Vn(e))&&Vn(n);return n?t==n||Vn(t)==n:W(t)
},jr=we;fr&&i&&"function"==typeof Gn&&(cn=rn(Gn,r));var Er=8==lr("08")?lr:function(t,e){return lr(ce(t)?t.replace(m,""):t,e||0)
};return o.after=nn,o.assign=kr,o.at=ve,o.bind=rn,o.bindAll=on,o.bindKey=an,o.compact=Me,o.compose=sn,o.countBy=be,o.createCallback=ln,o.debounce=un,o.defaults=Tr,o.defer=cn,o.delay=fn,o.difference=Be,o.filter=we,o.flatten=We,o.forEach=ke,o.forIn=Nr,o.forOwn=$r,o.functions=V,o.groupBy=Te,o.initial=ze,o.intersection=Qe,o.invert=Y,o.invoke=Ne,o.keys=xr,o.map=$e,o.max=_e,o.memoize=pn,o.merge=pe,o.min=je,o.omit=de,o.once=dn,o.pairs=he,o.partial=hn,o.partialRight=mn,o.pick=me,o.pluck=Ee,o.range=Je,o.reject=De,o.rest=Ve,o.shuffle=Le,o.sortBy=qe,o.tap=jn,o.throttle=gn,o.times=Nn,o.toArray=Pe,o.union=Ye,o.uniq=Ge,o.values=ge,o.where=jr,o.without=Ze,o.wrap=vn,o.zip=tn,o.zipObject=en,o.collect=$e,o.drop=Ve,o.each=ke,o.extend=kr,o.methods=V,o.object=en,o.select=we,o.tail=Ve,o.unique=Ge,xn(o),o.clone=X,o.cloneDeep=U,o.contains=ye,o.escape=yn,o.every=xe,o.find=Ce,o.findIndex=Fe,o.findKey=J,o.has=K,o.identity=bn,o.indexOf=Ie,o.isArguments=Q,o.isArray=yr,o.isBoolean=G,o.isDate=Z,o.isElement=te,o.isEmpty=ee,o.isEqual=ne,o.isFinite=re,o.isFunction=ie,o.isNaN=ae,o.isNull=se,o.isNumber=le,o.isObject=oe,o.isPlainObject=_r,o.isRegExp=ue,o.isString=ce,o.isUndefined=fe,o.lastIndexOf=Ue,o.mixin=xn,o.noConflict=wn,o.parseInt=Er,o.random=Cn,o.reduce=Se,o.reduceRight=Ae,o.result=kn,o.runInContext=e,o.size=He,o.some=Oe,o.sortedIndex=Ke,o.template=Tn,o.unescape=$n,o.uniqueId=_n,o.all=xe,o.any=Oe,o.detect=Ce,o.foldl=Se,o.foldr=Ae,o.include=ye,o.inject=Se,$r(o,function(t,e){o.prototype[e]||(o.prototype[e]=function(){var e=[this.__wrapped__];
return Yn.apply(e,arguments),t.apply(o,e)})}),o.first=Re,o.last=Xe,o.take=Re,o.head=Re,$r(o,function(t,e){o.prototype[e]||(o.prototype[e]=function(e,n){var r=t(this.__wrapped__,e,n);
return null==e||n&&"function"!=typeof e?r:new F(r)})}),o.VERSION="1.1.1",o.prototype.toString=En,o.prototype.value=Sn,o.prototype.valueOf=Sn,ke(["join","pop","shift"],function(t){var e=Rn[t];
o.prototype[t]=function(){return e.apply(this.__wrapped__,arguments)}}),ke(["push","reverse","sort","unshift"],function(t){var e=Rn[t];
o.prototype[t]=function(){return e.apply(this.__wrapped__,arguments),this}}),ke(["concat","slice","splice"],function(t){var e=Rn[t];
o.prototype[t]=function(){return new F(e.apply(this.__wrapped__,arguments))}}),o}var n,r="object"==typeof exports&&exports,i="object"==typeof module&&module&&module.exports==r&&module,o="object"==typeof global&&global;
o.global===o&&(t=o);var a=0,s={},l=/\b__p \+= '';/g,u=/\b(__p \+=) '' \+/g,c=/(__e\(.*?\)|\b__t\)) \+\n'';/g,f=/&(?:amp|lt|gt|quot|#39);/g,p=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,d=/\w*$/,h=/<%=([\s\S]+?)%>/g,m=/^0+(?=.$)/,g=/($^)/,v=/[&<>"']/g,y=/['\n\r\t\u2028\u2029\\]/g,b=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"],x=0,w="[object Arguments]",C="[object Array]",k="[object Boolean]",T="[object Date]",N="[object Function]",$="[object Number]",_="[object Object]",j="[object RegExp]",E="[object String]",S={};
S[N]=!1,S[w]=S[C]=S[k]=S[T]=S[$]=S[_]=S[j]=S[E]=!0;var A={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},D={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},L=e();
"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t._=L,define(function(){return L
})):r&&!r.nodeType?i?(i.exports=L)._=L:r._=L:t._=L}(this);var MestestsPasser,__bind=function(t,e){return function(){return t.apply(e,arguments)
}};MestestsPasser=function(){function t(){this.retrieveUserAnswer=__bind(this.retrieveUserAnswer,this),this.solutionsReceived=__bind(this.solutionsReceived,this),this.handlerSubmitQuestionnaire=__bind(this.handlerSubmitQuestionnaire,this),this.handleUserAnswer=__bind(this.handleUserAnswer,this),this.handlerClickOnNavButton=__bind(this.handlerClickOnNavButton,this),this.handlerClickOnLi=__bind(this.handlerClickOnLi,this);
var t;this.Qaire=window.jsp.qaire,this.aAlineas=window.jsp.aAlineas,this.aContexts=window.jsp.aContexts,null===this.Qaire.submited_data_json&&(t=_.times(JSON.parse(this.Qaire.questionAlineas_json).length,function(){return 0
}),this.Qaire.submited_data_json=JSON.stringify(t))}return t.Qaire=null,t.prototype.go=function(){return this.renderLis(),$(".passer .qtabctn").on("click","li",this.handlerClickOnLi),$(".passer .navbuttons").on("click","button",this.handlerClickOnNavButton),$(".passer .qbodyctn").on("click","button.actionsubmit",this.handlerSubmitQuestionnaire),$(".passer .qtabctn li").first().trigger("click")
},t.prototype.renderLis=function(){var t,e,n=this;return e=$(".passer .qtabctn ul"),e.empty(),_.forEach(JSON.parse(this.Qaire.questionAlineas_json),function(t,r){var i,o,a,s;
return a="result",null!=n.Qaire.solution_json&&(a="result-wrong",i=JSON.parse(n.Qaire.submited_data_json)[r],s=JSON.parse(n.Qaire.solution_json)[r],i===s&&(a="result-right")),o="<li class='"+a+"' data-alineaid='"+t+"' data-num='"+r+"'>"+(r+1)+"</li>",e.append($(o))
}),t="<li data-num='#'>#</li>",e.append($(t))},t.prototype.handlerClickOnLi=function(t){var e,n,r,i,o,a,s,l,u,c,f,p;
return this.handleUserAnswer(),a=$(t.currentTarget),n=a.data("alineaid"),u=$(".passer .qbodyctn"),u.empty(),a.siblings().removeClass("selected"),a.addClass("selected"),$(".passer .navbuttons button").removeClass("disabled"),0===a.prev().length&&$(".passer .navbuttons button.actionprev").addClass("disabled"),0===a.next().length&&$(".passer .navbuttons button.actionnext").addClass("disabled"),null!=n?(e=this.aAlineas[n],r=this.aContexts[e.question_id],s=a.data("num"),p=_.template($("#tplqContext").html().trim()),o=p({title:r.title,body:r.context}),u.append(o),p=_.template($("#tplqAlinea").html().trim()),o=p({body:e.body}),u.append(o),c=u.find(".alineaanswers"),p=_.template($("#tplqAlineaAnswer").html().trim()),f=JSON.parse(this.Qaire.submited_data_json)[s],l=this.Qaire.solution_json,null!==l&&(l=JSON.parse(l)[s]),i=1,_.forEach(JSON.parse(e.answers),function(t,e){var n,r;
return n="",f&i&&(n="checked"),r="",null!==l&&l&i&&(r="checked"),i<<=1,o=p({body:t,letter:String.fromCharCode(65+e),checked:n,solution:l,checkedSol:r}),c.append(o)
})):null===this.Qaire.score?(p=_.template($("#tplqRecapConfirm").html().trim()),o=p(this.Qaire),u.append(o)):(p=_.template($("#tplqResult").html().trim()),o=p(this.Qaire),u.append(o))
},t.prototype.handlerClickOnNavButton=function(t){var e,n;return e=$(t.currentTarget),n=$(".passer .qtabctn li.selected"),e.hasClass("actionnext")?n.next().trigger("click"):e.hasClass("actionprev")?n.prev().trigger("click"):void 0
},t.prototype.handleUserAnswer=function(){var t,e,n;return e=this.retrieveUserAnswer(),null===e||(t=JSON.parse(this.Qaire.submited_data_json),t[e.num]=e.val,t=JSON.stringify(t),_.isEqual(t,this.Qaire.submited_data_json))?void 0:(this.Qaire.submited_data_json=t,n=window.jsp.aUrls.thistst,$.ajax({url:n,method:"POST",data:{_method:"PUT",values:t}}).fail(function(){return alert("Erreur lors de l'enregistrement")
}))},t.prototype.handlerSubmitQuestionnaire=function(){var t,e,n=this;return t=this.Qaire.submited_data_json,e=window.jsp.aUrls.thistst,$.ajax({url:e,method:"POST",data:{_method:"POST",values:t}}).fail(function(){return alert("Erreur lors de l'enregistrement")
}).done(function(t,e,r){return 200!==r.status||"application/json"!==r.getResponseHeader("content-type").substr(0,16)?(alert("Le serveur n'a pas pu enregistrer le questionnaire"),void 0):(n.Qaire=JSON.parse(r.responseText),n.solutionsReceived())
})},t.prototype.solutionsReceived=function(){return this.renderLis(),$(".qtabctn li[data-num=#]").trigger("click")
},t.prototype.retrieveUserAnswer=function(){var t,e,n,r,i;return r=$(".passer .qtabctn li.selected"),e=r.data("num"),null==e?null:(t=$(".passer .alineaanswers").find(".letter input.etu[type=checkbox]"),n=1,i=0,_.each(t,function(t){return $(t).prop("checked")&&(i+=n),n<<=1
}),{num:e,val:i})},t}();