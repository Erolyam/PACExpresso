!function(e,t){function n(e){var t=e.length,n=ut.type(e);return ut.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}function r(e){var t=kt[e]={};return ut.each(e.match(ct)||[],function(e,n){t[n]=!0
}),t}function i(e,n,r,i){if(ut.acceptData(e)){var o,a,s=ut.expando,u="string"==typeof n,l=e.nodeType,c=l?ut.cache:e,f=l?e[s]:e[s]&&s;
if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=Z.pop()||ut.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=ut.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=ut.extend(c[f],n):c[f].data=ut.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[ut.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[ut.camelCase(n)])):a=o,a
}}function o(e,t,n){if(ut.acceptData(e)){var r,i,o,a=e.nodeType,u=a?ut.cache:e,l=a?e[ut.expando]:ut.expando;
if(u[l]){if(t&&(o=n?u[l]:u[l].data)){ut.isArray(t)?t=t.concat(ut.map(t,ut.camelCase)):t in o?t=[t]:(t=ut.camelCase(t),t=t in o?[t]:t.split(" "));
for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?s:ut.isEmptyObject)(o))return}(n||(delete u[l].data,s(u[l])))&&(a?ut.cleanData([e],!0):ut.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)
}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:Tt.test(r)?ut.parseJSON(r):r
}catch(o){}ut.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!ut.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;
return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);
return e}function f(e,t,n){if(t=t||0,ut.isFunction(t))return ut.grep(e,function(e,r){var i=!!t.call(e,r,e);
return i===n});if(t.nodeType)return ut.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=ut.grep(e,function(e){return 1===e.nodeType
});if(It.test(t))return ut.filter(t,r,!n);t=ut.filter(t,r)}return ut.grep(e,function(e){return ut.inArray(e,t)>=0===n
})}function p(e){var t=Xt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());
return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))
}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e
}function m(e){var t=on.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e
}function g(e,t){for(var n,r=0;null!=(n=e[r]);r++)ut._data(n,"globalEval",!t||ut._data(t[r],"globalEval"))
}function v(e,t){if(1===t.nodeType&&ut.hasData(e)){var n,r,i,o=ut._data(e),a=ut._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)ut.event.add(t,n,s[n][r])
}a.data&&(a.data=ut.extend({},a.data))}}function y(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!ut.support.noCloneEvent&&t[ut.expando]){i=ut._data(t);
for(r in i.events)ut.removeEvent(t,r,i.handle);t.removeAttribute(ut.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,m(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),ut.support.html5Clone&&e.innerHTML&&!ut.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&tn.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}function b(e,n){var r,i,o=0,a=typeof e.getElementsByTagName!==U?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==U?e.querySelectorAll(n||"*"):t;
if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||ut.nodeName(i,n)?a.push(i):ut.merge(a,b(i,n));
return n===t||n&&ut.nodeName(e,n)?ut.merge([e],a):a}function x(e){tn.test(e.type)&&(e.defaultChecked=e.checked)
}function w(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;
return r}function C(e,t){return e=t||e,"none"===ut.css(e,"display")||!ut.contains(e.ownerDocument,e)
}function k(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=ut._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&C(r)&&(o[a]=ut._data(r,"olddisplay",_(r.nodeName)))):o[a]||(i=C(r),(n&&"none"!==n||!i)&&ut._data(r,"olddisplay",i?n:ut.css(r,"display"))));
for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));
return e}function T(e,t,n){var r=yn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function N(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=ut.css(e,n+Tn[o],!0,i)),r?("content"===n&&(a-=ut.css(e,"padding"+Tn[o],!0,i)),"margin"!==n&&(a-=ut.css(e,"border"+Tn[o]+"Width",!0,i))):(a+=ut.css(e,"padding"+Tn[o],!0,i),"padding"!==n&&(a+=ut.css(e,"border"+Tn[o]+"Width",!0,i)));
return a}function $(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=fn(e),a=ut.support.boxSizing&&"border-box"===ut.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=pn(e,t,o),(0>i||null==i)&&(i=e.style[t]),bn.test(i))return i;
r=a&&(ut.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+N(e,t,n||(a?"border":"content"),r,o)+"px"
}function _(e){var t=J,n=wn[e];return n||(n=j(e,t),"none"!==n&&n||(cn=(cn||ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=j(e,t),cn.detach()),wn[e]=n),n
}function j(e,t){var n=ut(t.createElement(e)).appendTo(t.body),r=ut.css(n[0],"display");
return n.remove(),r}function E(e,t,n,r){var i;if(ut.isArray(t))ut.each(t,function(t,i){n||_n.test(e)?r(e,i):E(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
});else if(n||"object"!==ut.type(t))r(e,t);else for(i in t)E(e+"["+i+"]",t[i],n,r)
}function S(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ct)||[];
if(ut.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}function A(e,t,n,r){function i(s){var u;return o[s]=!0,ut.each(e[s]||[],function(e,s){var l=s(t,n,r);
return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)
}),u}var o={},a=e===zn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function D(e,n){var r,i,o=ut.ajaxSettings.flatOptions||{};
for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&ut.extend(!0,e,r),e}function L(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;
for(s in c)s in r&&(n[c[s]]=r[s]);for(;"*"===l[0];)l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));
if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;
break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):void 0}function H(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];
if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];
for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));
break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}
}}l=r}return{state:"success",data:t}}function O(){try{return new e.XMLHttpRequest
}catch(t){}}function q(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function P(){return setTimeout(function(){Zn=t
}),Zn=ut.now()}function M(e,t){ut.each(t,function(t,n){for(var r=(or[t]||[]).concat(or["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return
})}function B(e,t,n){var r,i,o=0,a=ir.length,s=ut.Deferred().always(function(){delete u.elem
}),u=function(){if(i)return!1;for(var t=Zn||P(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);
return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ut.extend({},t),opts:ut.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Zn||P(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ut.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;
for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this
}}),c=l.props;for(F(c,l.opts.specialEasing);a>o;o++)if(r=ir[o].call(l,e,c,l.opts))return r;
return M(l,c),ut.isFunction(l.opts.start)&&l.opts.start.call(e,l),ut.fx.timer(ut.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
}function F(e,t){var n,r,i,o,a;for(i in e)if(r=ut.camelCase(i),o=t[r],n=e[i],ut.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=ut.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];
for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}function R(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},m=[],g=e.nodeType&&C(e);
n.queue||(c=ut._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()
}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,ut.queue(e,"fx").length||c.empty.fire()
})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===ut.css(e,"display")&&"none"===ut.css(e,"float")&&(ut.support.inlineBlockNeedsLayout&&"inline"!==_(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",ut.support.shrinkWrapBlocks||p.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]
}));for(i in t)if(a=t[i],tr.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(g?"hide":"show"))continue;
m.push(i)}if(o=m.length){s=ut._data(e,"fxshow")||ut._data(e,"fxshow",{}),"hidden"in s&&(g=s.hidden),u&&(s.hidden=!g),g?ut(e).show():p.done(function(){ut(e).hide()
}),p.done(function(){var t;ut._removeData(e,"fxshow");for(t in h)ut.style(e,t,h[t])
});for(i=0;o>i;i++)r=m[i],l=p.createTween(r,g?s[r]:0),h[r]=s[r]||ut.style(e,r),r in s||(s[r]=l.start,g&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))
}}function W(e,t,n,r,i){return new W.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;
for(t=t?1:0;4>i;i+=2-t)n=Tn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r
}function z(e){return ut.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}var Q,X,U=typeof t,J=e.document,V=e.location,K=e.jQuery,Y=e.$,G={},Z=[],et="1.9.1",tt=Z.concat,nt=Z.push,rt=Z.slice,it=Z.indexOf,ot=G.toString,at=G.hasOwnProperty,st=et.trim,ut=function(e,t){return new ut.fn.init(e,t,X)
},lt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ct=/\S+/g,ft=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,pt=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,dt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ht=/^[\],:{}\s]*$/,mt=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,vt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,bt=/-([\da-z])/gi,xt=function(e,t){return t.toUpperCase()
},wt=function(e){(J.addEventListener||"load"===e.type||"complete"===J.readyState)&&(Ct(),ut.ready())
},Ct=function(){J.addEventListener?(J.removeEventListener("DOMContentLoaded",wt,!1),e.removeEventListener("load",wt,!1)):(J.detachEvent("onreadystatechange",wt),e.detachEvent("onload",wt))
};ut.fn=ut.prototype={jquery:et,constructor:ut,init:function(e,n,r){var i,o;if(!e)return this;
if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:pt.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
if(i[1]){if(n=n instanceof ut?n[0]:n,ut.merge(this,ut.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:J,!0)),dt.test(i[1])&&ut.isPlainObject(n))for(i in n)ut.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);
return this}if(o=J.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);
this.length=1,this[0]=o}return this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ut.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),ut.makeArray(e,this))
},selector:"",length:0,size:function(){return this.length},toArray:function(){return rt.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=ut.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ut.each(this,e,t)
},ready:function(e){return ut.ready.promise().done(e),this},slice:function(){return this.pushStack(rt.apply(this,arguments))
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(ut.map(this,function(t,n){return e.call(t,n,t)
}))},end:function(){return this.prevObject||this.constructor(null)},push:nt,sort:[].sort,splice:[].splice},ut.fn.init.prototype=ut.fn,ut.extend=ut.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||ut.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(ut.isPlainObject(r)||(n=ut.isArray(r)))?(n?(n=!1,a=e&&ut.isArray(e)?e:[]):a=e&&ut.isPlainObject(e)?e:{},s[i]=ut.extend(c,a,r)):r!==t&&(s[i]=r));
return s},ut.extend({noConflict:function(t){return e.$===ut&&(e.$=Y),t&&e.jQuery===ut&&(e.jQuery=K),ut
},isReady:!1,readyWait:1,holdReady:function(e){e?ut.readyWait++:ut.ready(!0)},ready:function(e){if(e===!0?!--ut.readyWait:!ut.isReady){if(!J.body)return setTimeout(ut.ready);
ut.isReady=!0,e!==!0&&--ut.readyWait>0||(Q.resolveWith(J,[ut]),ut.fn.trigger&&ut(J).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===ut.type(e)},isArray:Array.isArray||function(e){return"array"===ut.type(e)
},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?G[ot.call(e)]||"object":typeof e
},isPlainObject:function(e){if(!e||"object"!==ut.type(e)||e.nodeType||ut.isWindow(e))return!1;
try{if(e.constructor&&!at.call(e,"constructor")&&!at.call(e.constructor.prototype,"isPrototypeOf"))return!1
}catch(n){return!1}var r;for(r in e);return r===t||at.call(e,r)},isEmptyObject:function(e){var t;
for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;
"boolean"==typeof t&&(n=t,t=!1),t=t||J;var r=dt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ut.buildFragment([e],t,i),i&&ut(i).remove(),ut.merge([],r.childNodes))
},parseJSON:function(t){return e.JSON&&e.JSON.parse?e.JSON.parse(t):null===t?t:"string"==typeof t&&(t=ut.trim(t),t&&ht.test(t.replace(gt,"@").replace(vt,"]").replace(mt,"")))?new Function("return "+t)():(ut.error("Invalid JSON: "+t),void 0)
},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||ut.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&ut.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(bt,xt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break
}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;
return e},trim:st&&!st.call("﻿ ")?function(e){return null==e?"":st.call(e)}:function(e){return null==e?"":(e+"").replace(ft,"")
},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ut.merge(r,"string"==typeof e?[e]:e):nt.call(r,e)),r
},inArray:function(e,t,n){var r;if(t){if(it)return it.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n
}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];
else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];
if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);
return tt.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),ut.isFunction(e)?(r=rt.call(arguments,2),i=function(){return e.apply(n||this,r.concat(rt.call(arguments)))
},i.guid=e.guid=e.guid||ut.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;
if("object"===ut.type(r)){o=!0;for(u in r)ut.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,ut.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(ut(e),n)
})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a
},now:function(){return(new Date).getTime()}}),ut.ready.promise=function(t){if(!Q)if(Q=ut.Deferred(),"complete"===J.readyState)setTimeout(ut.ready);
else if(J.addEventListener)J.addEventListener("DOMContentLoaded",wt,!1),e.addEventListener("load",wt,!1);
else{J.attachEvent("onreadystatechange",wt),e.attachEvent("onload",wt);var n=!1;try{n=null==e.frameElement&&J.documentElement
}catch(r){}n&&n.doScroll&&!function i(){if(!ut.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)
}Ct(),ut.ready()}}()}return Q.promise(t)},ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()
}),X=ut(J);var kt={};ut.Callbacks=function(e){e="string"==typeof e?kt[e]||r(e):ut.extend({},e);
var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(i=e.memory&&t,o=!0,s=u||0,u=0,a=l.length,n=!0;l&&a>s;s++)if(l[s].apply(t[0],t[1])===!1&&e.stopOnFalse){i=!1;
break}n=!1,l&&(c?c.length&&f(c.shift()):i?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;
!function r(t){ut.each(t,function(t,n){var i=ut.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)
})}(arguments),n?a=l.length:i&&(u=t,f(i))}return this},remove:function(){return l&&ut.each(arguments,function(e,t){for(var r;(r=ut.inArray(t,l,r))>-1;)l.splice(r,1),n&&(a>=r&&a--,s>=r&&s--)
}),this},has:function(e){return e?ut.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],this
},disable:function(){return l=c=i=t,this},disabled:function(){return!l},lock:function(){return c=t,i||p.disable(),this
},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||o&&!c||(n?c.push(t):f(t)),this
},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o
}};return p},ut.extend({Deferred:function(e){var t=[["resolve","done",ut.Callbacks("once memory"),"resolved"],["reject","fail",ut.Callbacks("once memory"),"rejected"],["notify","progress",ut.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;
return ut.Deferred(function(n){ut.each(t,function(t,o){var a=o[0],s=ut.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&ut.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})}),e=null}).promise()},promise:function(e){return null!=e?ut.extend(e,r):r}},i={};
return r.pipe=r.then,ut.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=rt.call(arguments),a=o.length,s=1!==a||e&&ut.isFunction(e.promise)?a:0,u=1===s?e:ut.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?rt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)
}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&ut.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;
return s||u.resolveWith(r,o),u.promise()}}),ut.support=function(){var t,n,r,i,o,a,s,u,l,c,f=J.createElement("div");
if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],!n||!r||!n.length)return{};
o=J.createElement("select"),s=o.appendChild(J.createElement("option")),i=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==f.className,leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!i.value,optSelected:s.selected,enctype:!!J.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==J.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===J.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},i.checked=!0,t.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!s.disabled;
try{delete f.test}catch(p){t.deleteExpando=!1}i=J.createElement("input"),i.setAttribute("value",""),t.input=""===i.getAttribute("value"),i.value="t",i.setAttribute("type","radio"),t.radioValue="t"===i.value,i.setAttribute("checked","t"),i.setAttribute("name","t"),a=J.createDocumentFragment(),a.appendChild(i),t.appendChecked=i.checked,t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){t.noCloneEvent=!1
}),f.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})f.setAttribute(u="on"+c,"t"),t[c+"Bubbles"]=u in e||f.attributes[u].expando===!1;
return f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===f.style.backgroundClip,ut(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=J.getElementsByTagName("body")[0];
a&&(n=J.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=f.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=l&&0===i[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===f.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(J.createElement("div")),r.style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==U&&(f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,t.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=f=i=r=null)
}),n=o=a=s=r=i=null,t}();var Tt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;ut.extend({cache:{},expando:"jQuery"+(et+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?ut.cache[e[ut.expando]]:e[ut.expando],!!e&&!s(e)
},data:function(e,t,n){return i(e,t,n)},removeData:function(e,t){return o(e,t)},_data:function(e,t,n){return i(e,t,n,!0)
},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;
var t=e.nodeName&&ut.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t
}}),ut.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=ut.data(o),1===o.nodeType&&!ut._data(o,"parsedAttrs"))){for(r=o.attributes;s<r.length;s++)i=r[s].name,i.indexOf("data-")||(i=ut.camelCase(i.slice(5)),a(o,i,u[i]));
ut._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){ut.data(this,e)
}):ut.access(this,function(n){return n===t?o?a(o,e,ut.data(o,e)):null:(this.each(function(){ut.data(this,e,n)
}),void 0)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ut.removeData(this,e)
})}}),ut.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=ut._data(e,t),n&&(!r||ut.isArray(n)?r=ut._data(e,t,ut.makeArray(n)):r.push(n)),r||[]):void 0
},dequeue:function(e,t){t=t||"fx";var n=ut.queue(e,t),r=n.length,i=n.shift(),o=ut._queueHooks(e,t),a=function(){ut.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return ut._data(e,n)||ut._data(e,n,{empty:ut.Callbacks("once memory").add(function(){ut._removeData(e,t+"queue"),ut._removeData(e,n)
})})}}),ut.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?ut.queue(this[0],e):n===t?this:this.each(function(){var t=ut.queue(this,e,n);
ut._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&ut.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ut.dequeue(this,e)
})},delay:function(e,t){return e=ut.fx?ut.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=ut.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])
};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=ut._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));
return u(),o.promise(n)}});var $t,_t,jt=/[\t\r\n]/g,Et=/\r/g,St=/^(?:input|select|textarea|button|object)$/i,At=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=ut.support.getSetAttribute,Ot=ut.support.input;
ut.fn.extend({attr:function(e,t){return ut.access(this,ut.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){ut.removeAttr(this,e)})},prop:function(e,t){return ut.access(this,ut.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=ut.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;
if(ut.isFunction(e))return this.each(function(t){ut(this).addClass(e.call(this,t,this.className))
});if(u)for(t=(e||"").match(ct)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(jt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");
n.className=ut.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;
if(ut.isFunction(e))return this.each(function(t){ut(this).removeClass(e.call(this,t,this.className))
});if(u)for(t=(e||"").match(ct)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(jt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");
n.className=e?ut.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;
return ut.isFunction(e)?this.each(function(n){ut(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n)for(var i,o=0,a=ut(this),s=t,u=e.match(ct)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);
else(n===U||"boolean"===n)&&(this.className&&ut._data(this,"__className__",this.className),this.className=this.className||e===!1?"":ut._data(this,"__className__")||"")
})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(jt," ").indexOf(t)>=0)return!0;
return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=ut.isFunction(e),this.each(function(n){var o,a=ut(this);
1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":ut.isArray(o)&&(o=ut.map(o,function(e){return null==e?"":e+""
})),r=ut.valHooks[this.type]||ut.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))
});if(o)return r=ut.valHooks[o.type]||ut.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(Et,""):null==n?"":n)
}}}),ut.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text
}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(ut.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ut.nodeName(n.parentNode,"optgroup"))){if(t=ut(n).val(),o)return t;
a.push(t)}return a},set:function(e,t){var n=ut.makeArray(t);return ut(e).find("option").each(function(){this.selected=ut.inArray(ut(this).val(),n)>=0
}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===U?ut.prop(e,n,r):(o=1!==s||!ut.isXMLDoc(e),o&&(n=n.toLowerCase(),i=ut.attrHooks[n]||(Dt.test(n)?_t:$t)),r===t?i&&o&&"get"in i&&null!==(a=i.get(e,n))?a:(typeof e.getAttribute!==U&&(a=e.getAttribute(n)),null==a?t:a):null!==r?i&&o&&"set"in i&&(a=i.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(ut.removeAttr(e,n),void 0))
},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ct);if(o&&1===e.nodeType)for(;n=o[i++];)r=ut.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[ut.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:ut.attr(e,n,""),e.removeAttribute(Ht?n:r)
},attrHooks:{type:{set:function(e,t){if(!ut.support.radioValue&&"radio"===t&&ut.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!ut.isXMLDoc(e),a&&(n=ut.propFix[n]||n,o=ut.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]
},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):St.test(e.nodeName)||At.test(e.nodeName)&&e.href?0:t
}}}}),_t={get:function(e,n){var r=ut.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Ot&&Ht?null!=i:Lt.test(n)?e[ut.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);
return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?ut.removeAttr(e,n):Ot&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&ut.propFix[n]||n,n):e[ut.camelCase("default-"+n)]=e[n]=!0,n
}},Ot&&Ht||(ut.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return ut.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,t,n){return ut.nodeName(e,"input")?(e.defaultValue=t,void 0):$t&&$t.set(e,t,n)
}}),Ht||($t=ut.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t
},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},ut.attrHooks.contenteditable={get:$t.get,set:function(e,t,n){$t.set(e,""===t?!1:t,n)
}},ut.each(["width","height"],function(e,t){ut.attrHooks[t]=ut.extend(ut.attrHooks[t],{set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0
}})})),ut.support.hrefNormalized||(ut.each(["href","src","width","height"],function(e,n){ut.attrHooks[n]=ut.extend(ut.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);
return null==r?t:r}})}),ut.each(["href","src"],function(e,t){ut.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}})),ut.support.style||(ut.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""}}),ut.support.optSelected||(ut.propHooks.selected=ut.extend(ut.propHooks.selected,{get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),ut.support.enctype||(ut.propFix.enctype="encoding"),ut.support.checkOn||ut.each(["radio","checkbox"],function(){ut.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value
}}}),ut.each(["radio","checkbox"],function(){ut.valHooks[this]=ut.extend(ut.valHooks[this],{set:function(e,t){return ut.isArray(t)?e.checked=ut.inArray(ut(e).val(),t)>=0:void 0
}})});var qt=/^(?:input|select|textarea)$/i,Pt=/^key/,Mt=/^(?:mouse|contextmenu)|click/,Bt=/^(?:focusinfocus|focusoutblur)$/,Ft=/^([^.]*)(?:\.(.+)|)$/;
ut.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,m,g,v=ut._data(e);
if(v){for(r.handler&&(l=r,r=l.handler,o=l.selector),r.guid||(r.guid=ut.guid++),(s=v.events)||(s=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof ut===U||e&&ut.event.triggered===e.type?t:ut.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(ct)||[""],u=n.length;u--;)a=Ft.exec(n[u])||[],h=g=a[1],m=(a[2]||"").split(".").sort(),c=ut.event.special[h]||{},h=(o?c.delegateType:c.bindType)||h,c=ut.event.special[h]||{},p=ut.extend({type:h,origType:g,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ut.expr.match.needsContext.test(o),namespace:m.join(".")},l),(d=s[h])||(d=s[h]=[],d.delegateCount=0,c.setup&&c.setup.call(e,i,m,f)!==!1||(e.addEventListener?e.addEventListener(h,f,!1):e.attachEvent&&e.attachEvent("on"+h,f))),c.add&&(c.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),ut.event.global[h]=!0;
e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g=ut.hasData(e)&&ut._data(e);
if(g&&(c=g.events)){for(t=(t||"").match(ct)||[""],l=t.length;l--;)if(s=Ft.exec(t[l])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ut.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));
u&&!p.length&&(f.teardown&&f.teardown.call(e,h,g.handle)!==!1||ut.removeEvent(e,d,g.handle),delete c[d])
}else for(d in c)ut.event.remove(e,d+t[l],n,r,!0);ut.isEmptyObject(c)&&(delete g.handle,ut._removeData(e,"events"))
}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||J],h=at.call(n,"type")?n.type:n,m=at.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!Bt.test(h+ut.event.triggered)&&(h.indexOf(".")>=0&&(m=h.split("."),h=m.shift(),m.sort()),s=h.indexOf(":")<0&&"on"+h,n=n[ut.expando]?n:new ut.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:ut.makeArray(r,[n]),c=ut.event.special[h]||{},o||!c.trigger||c.trigger.apply(i,r)!==!1)){if(!o&&!c.noBubble&&!ut.isWindow(i)){for(l=c.delegateType||h,Bt.test(l+h)||(u=u.parentNode);u;u=u.parentNode)d.push(u),f=u;
f===(i.ownerDocument||J)&&d.push(f.defaultView||f.parentWindow||e)}for(p=0;(u=d[p++])&&!n.isPropagationStopped();)n.type=p>1?l:c.bindType||h,a=(ut._data(u,"events")||{})[n.type]&&ut._data(u,"handle"),a&&a.apply(u,r),a=s&&u[s],a&&ut.acceptData(u)&&a.apply&&a.apply(u,r)===!1&&n.preventDefault();
if(n.type=h,!(o||n.isDefaultPrevented()||c._default&&c._default.apply(i.ownerDocument,r)!==!1||"click"===h&&ut.nodeName(i,"a")||!ut.acceptData(i)||!s||!i[h]||ut.isWindow(i))){f=i[s],f&&(i[s]=null),ut.event.triggered=h;
try{i[h]()}catch(g){}ut.event.triggered=t,f&&(i[s]=f)}return n.result}},dispatch:function(e){e=ut.event.fix(e);
var n,r,i,o,a,s=[],u=rt.call(arguments),l=(ut._data(this,"events")||{})[e.type]||[],c=ut.event.special[e.type]||{};
if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=ut.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((ut.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;
if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?ut(r,this).index(l)>=0:ut.find(r,this,null,[l]).length),o[r]&&o.push(i);
o.length&&s.push({elem:l,handlers:o})}return u<n.length&&s.push({elem:this,handlers:n.slice(u)}),s
},fix:function(e){if(e[ut.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];
for(a||(this.fixHooks[i]=a=Mt.test(i)?this.mouseHooks:Pt.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ut.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];
return e.target||(e.target=o.srcElement||J),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||J,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e
}},special:{load:{noBubble:!0},click:{trigger:function(){return ut.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
}},focus:{trigger:function(){if(this!==J.activeElement&&this.focus)try{return this.focus(),!1
}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===J.activeElement&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=ut.extend(new ut.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?ut.event.trigger(i,null,t):ut.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},ut.removeEvent=J.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===U&&(e[r]=null),e.detachEvent(r,n))
},ut.Event=function(e,t){return this instanceof ut.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,t&&ut.extend(this,t),this.timeStamp=e&&e.timeStamp||ut.now(),this[ut.expando]=!0,void 0):new ut.Event(e,t)
},ut.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()
}},ut.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){ut.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!ut.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}}),ut.support.submitBubbles||(ut.event.special.submit={setup:function(){return ut.nodeName(this,"form")?!1:(ut.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=ut.nodeName(n,"input")||ut.nodeName(n,"button")?n.form:t;
r&&!ut._data(r,"submitBubbles")&&(ut.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),ut._data(r,"submitBubbles",!0))}),void 0)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&ut.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return ut.nodeName(this,"form")?!1:(ut.event.remove(this,"._submit"),void 0)
}}),ut.support.changeBubbles||(ut.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ut.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),ut.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),ut.event.simulate("change",this,e,!0)
})),!1):(ut.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!ut._data(t,"changeBubbles")&&(ut.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||ut.event.simulate("change",this.parentNode,e,!0)
}),ut._data(t,"changeBubbles",!0))}),void 0)},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return ut.event.remove(this,"._change"),!qt.test(this.nodeName)
}}),ut.support.focusinBubbles||ut.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){ut.event.simulate(t,e.target,ut.event.fix(e),!0)
};ut.event.special[t]={setup:function(){0===n++&&J.addEventListener(e,r,!0)},teardown:function(){0===--n&&J.removeEventListener(e,r,!0)
}}}),ut.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;
else if(!i)return this;return 1===o&&(s=i,i=function(e){return ut().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=ut.guid++)),this.each(function(){ut.event.add(this,e,i,r,n)
})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ut(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){ut.event.remove(this,e,r,n)
})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
},trigger:function(e,t){return this.each(function(){ut.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];
return n?ut.event.trigger(e,t,n,!0):void 0}}),function(e,t){function n(e){return ht.test(e+"")
}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>T.cacheLength&&delete e[t.shift()],e[n]=r
}}function i(e){return e[B]=!0,e}function o(e){var t=A.createElement("div");try{return e(t)
}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,m;if((t?t.ownerDocument||t:F)!==A&&S(t),t=t||A,n=n||[],!e||"string"!=typeof e)return n;
if(1!==(s=t.nodeType)&&9!==s)return[];if(!L&&!r){if(i=mt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;
if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&P(t,o)&&o.id===a)return n.push(o),n
}else{if(i[2])return Y.apply(n,G.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&R.getByClassName&&t.getElementsByClassName)return Y.apply(n,G.call(t.getElementsByClassName(a),0)),n
}if(R.qsa&&!H.test(e)){if(c=!0,d=B,h=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(yt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);
h=dt.test(e)&&t.parentNode||t,m=l.join(",")}if(m)try{return Y.apply(n,G.call(h.querySelectorAll(m),0)),n
}catch(g){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)
}function s(e,t){var n=t&&e,r=n&&(~t.sourceIndex||J)-(~e.sourceIndex||J);if(r)return r;
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
})})}function f(e,t){var n,r,i,o,s,u,l,c=Q[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){(!n||(r=st.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));
for(o in T.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));
if(!n)break}return t?s.length:s?a.error(e):Q(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;
return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)
}:function(t,n,a){var s,u,l,c=W+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0
}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[B]||(t[B]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===k)return s===!0
}else if(u=l[r]=[c],u[1]=e(t,n,a)||k,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;
return!0}:e[0]}function m(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));
return a}function g(e,t,n,r,o,a){return r&&!r[B]&&(r=g(r)),o&&!o[B]&&(o=g(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=i||b(t||"*",s.nodeType?[s]:s,[]),v=!e||!i&&t?g:m(g,p,e,s,u),y=n?o||(i?e:h||r)?[]:a:v;
if(n&&n(v,y,s,u),r)for(l=m(y,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!(v[d[c]]=f));
if(i){if(o||e){if(o){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f);o(null,y=[],l,u)
}for(c=y.length;c--;)(f=y[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else y=m(y===a?y.splice(h,y.length):y),o?o(null,a,y,u):Y.apply(a,y)
})}function v(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=d(function(e){return e===t
},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==E)||((t=n).nodeType?u(e,n,r):l(e,n,r))
}];i>s;s++)if(n=T.relative[e[s].type])c=[d(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[B]){for(r=++s;i>r&&!T.relative[e[r].type];r++);return g(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&v(e.slice(s,r)),i>r&&v(e=e.slice(r)),i>r&&p(e))
}c.push(n)}return h(c)}function y(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],g=0,v="0",y=i&&[],b=null!=c,x=E,w=i||o&&T.find.TAG("*",c&&s.parentNode||s),C=W+=null==x?1:Math.random()||.1;
for(b&&(E=s!==A&&s,k=n);null!=(f=w[v]);v++){if(o&&f){for(p=0;d=e[p++];)if(d(f,s,u)){l.push(f);
break}b&&(W=C,k=++n)}r&&((f=!d&&f)&&g--,i&&y.push(f))}if(g+=v,r&&v!==g){for(p=0;d=t[p++];)d(y,h,s,u);
if(i){if(g>0)for(;v--;)y[v]||h[v]||(h[v]=K.call(l));h=m(h)}Y.apply(l,h),b&&!i&&h.length>0&&g+t.length>1&&a.uniqueSort(l)
}return b&&(W=C,E=x),y};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);
return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!L&&T.relative[o[1].type]){if(t=T.find.ID(a.matches[0].replace(xt,wt),t)[0],!t)return n;
e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(xt,wt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Y.apply(n,G.call(r,0)),n;
break}}return _(e,l)(r,t,L,n,dt.test(e)),n}function w(){}var C,k,T,N,$,_,j,E,S,A,D,L,H,O,q,P,M,B="sizzle"+-new Date,F=e.document,R={},W=0,I=0,z=r(),Q=r(),X=r(),U=typeof t,J=1<<31,V=[],K=V.pop,Y=V.push,G=V.slice,Z=V.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;
return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=new RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),st=new RegExp("^"+et+"*,"+et+"*"),lt=new RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=new RegExp(ot),ft=new RegExp("^"+nt+"$"),pt={ID:new RegExp("^#("+tt+")"),CLASS:new RegExp("^\\.("+tt+")"),NAME:new RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:new RegExp("^("+tt.replace("w","w*")+")"),ATTR:new RegExp("^"+it),PSEUDO:new RegExp("^"+ot),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:new RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/^[^{]+\{\s*\[native code/,mt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gt=/^(?:input|select|textarea|button)$/i,vt=/^h\d$/i,yt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,wt=function(e,t){var n="0x"+t-65536;
return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)
};try{G.call(F.documentElement.childNodes,0)[0].nodeType}catch(Ct){G=function(e){for(var t,n=[];t=this[e++];)n.push(t);
return n}}$=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1
},S=a.setDocument=function(e){var r=e?e.ownerDocument||e:F;return r!==A&&9===r.nodeType&&r.documentElement?(A=r,D=r.documentElement,L=$(r),R.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length
}),R.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");
return"boolean"!==t&&"string"!==t}),R.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1
}),R.getByName=o(function(e){e.id=B+0,e.innerHTML="<a name='"+B+"'></a><div name='"+B+"'></div>",D.insertBefore(e,D.firstChild);
var t=r.getElementsByName&&r.getElementsByName(B).length===2+r.getElementsByName(B+0).length;
return R.getIdNotName=!r.getElementById(B),D.removeChild(e),t}),T.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==U&&"#"===e.firstChild.getAttribute("href")
})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")
}},R.getIdNotName?(T.find.ID=function(e,t){if(typeof t.getElementById!==U&&!L){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(xt,wt);return function(e){return e.getAttribute("id")===t
}}):(T.find.ID=function(e,n){if(typeof n.getElementById!==U&&!L){var r=n.getElementById(e);
return r?r.id===e||typeof r.getAttributeNode!==U&&r.getAttributeNode("id").value===e?[r]:t:[]
}},T.filter.ID=function(e){var t=e.replace(xt,wt);return function(e){var n=typeof e.getAttributeNode!==U&&e.getAttributeNode("id");
return n&&n.value===t}}),T.find.TAG=R.tagNameNoComments?function(e,t){return typeof t.getElementsByTagName!==U?t.getElementsByTagName(e):void 0
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);
return r}return o},T.find.NAME=R.getByName&&function(e,t){return typeof t.getElementsByName!==U?t.getElementsByName(name):void 0
},T.find.CLASS=R.getByClassName&&function(e,t){return typeof t.getElementsByClassName===U||L?void 0:t.getElementsByClassName(e)
},O=[],H=[":focus"],(R.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||H.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||H.push(":checked")
}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&H.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")
})),(R.matchesSelector=n(q=D.matchesSelector||D.mozMatchesSelector||D.webkitMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(e){R.disconnectedMatch=q.call(e,"div"),q.call(e,"[s!='']:x"),O.push("!=",ot)
}),H=new RegExp(H.join("|")),O=new RegExp(O.join("|")),P=n(D.contains)||D.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},M=D.compareDocumentPosition?function(e,t){var n;
return e===t?(j=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||P(F,e)?-1:t===r||P(F,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return j=!0,0;
if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);
for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===F?-1:l[i]===F?1:0
},j=!1,[0,0].sort(M),R.detectDuplicates=j,A):A},a.matches=function(e,t){return a(e,null,null,t)
},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==A&&S(e),t=t.replace(bt,"='$1']"),!(!R.matchesSelector||L||O&&O.test(t)||H.test(t)))try{var n=q.call(e,t);
if(n||R.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,A,null,[e]).length>0
},a.contains=function(e,t){return(e.ownerDocument||e)!==A&&S(e),P(e,t)},a.attr=function(e,t){var n;
return(e.ownerDocument||e)!==A&&S(e),L||(t=t.toLowerCase()),(n=T.attrHandle[t])?n(e):L||R.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null
},a.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(j=!R.detectDuplicates,e.sort(M),j){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));
for(;i--;)e.splice(n[i],1)}return e},N=a.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;
for(e=e.firstChild;e;e=e.nextSibling)n+=N(e)}else if(3===i||4===i)return e.nodeValue
}else for(;t=e[r];r++)n+=N(t);return n},T=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,wt),e[3]=(e[4]||e[5]||"").replace(xt,wt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e
},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))
}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,wt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e
})},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==U&&e.getAttribute("class")||"")
})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s;
if(g){if(o){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(c=g[B]||(g[B]={}),l=c[e]||[],d=l[0]===W&&l[1],p=l[0]===W&&l[2],f=d&&g.childNodes[d];f=++d&&f&&f[m]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[W,d,p];
break}}else if(y&&(l=(t[B]||(t[B]={}))[e])&&l[0]===W)p=l[1];else for(;(f=++d&&f&&f[m]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[B]||(f[B]={}))[e]=[W,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0
}}},PSEUDO:function(e,t){var n,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);
return r[B]?r(t):r.length>1?(n=[e,e,"",t],T.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])
}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=_(e.replace(at,"$1"));
return r[B]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))
}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0
}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||N(t)).indexOf(e)>-1
}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,wt).toLowerCase(),function(t){var n;
do if(n=L?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");
while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;
return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return vt.test(e.nodeName)
},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]
}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);
return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);
return e})}};for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[C]=u(C);
for(C in{submit:!0,reset:!0})T.pseudos[C]=l(C);_=a.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];
if(!o){for(t||(t=f(e)),n=t.length;n--;)o=v(t[n]),o[B]?r.push(o):i.push(o);o=X(e,y(i,r))
}return o},T.pseudos.nth=T.pseudos.eq,T.filters=w.prototype=T.pseudos,T.setFilters=new w,S(),a.attr=ut.attr,ut.find=a,ut.expr=a.selectors,ut.expr[":"]=ut.expr.pseudos,ut.unique=a.uniqueSort,ut.text=a.getText,ut.isXMLDoc=a.isXML,ut.contains=a.contains
}(e);var Rt=/Until$/,Wt=/^(?:parents|prev(?:Until|All))/,It=/^.[^:#\[\.,]*$/,zt=ut.expr.match.needsContext,Qt={children:!0,contents:!0,next:!0,prev:!0};
ut.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(ut(e).filter(function(){for(t=0;i>t;t++)if(ut.contains(r[t],this))return!0
}));for(n=[],t=0;i>t;t++)ut.find(e,this[t],n);return n=this.pushStack(i>1?ut.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n
},has:function(e){var t,n=ut(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(ut.contains(this,n[t]))return!0
})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))
},is:function(e){return!!e&&("string"==typeof e?zt.test(e)?ut(e,this.context).index(this[0])>=0:ut.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=zt.test(e)||"string"!=typeof e?ut(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:ut.find.matchesSelector(n,e)){o.push(n);
break}n=n.parentNode}return this.pushStack(o.length>1?ut.unique(o):o)},index:function(e){return e?"string"==typeof e?ut.inArray(this[0],ut(e)):ut.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?ut(e,t):ut.makeArray(e&&e.nodeType?[e]:e),r=ut.merge(this.get(),n);
return this.pushStack(ut.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}}),ut.fn.andSelf=ut.fn.addBack,ut.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null
},parents:function(e){return ut.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ut.dir(e,"parentNode",n)
},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return ut.dir(e,"nextSibling")},prevAll:function(e){return ut.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return ut.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ut.dir(e,"previousSibling",n)
},siblings:function(e){return ut.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ut.sibling(e.firstChild)
},contents:function(e){return ut.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ut.merge([],e.childNodes)
}},function(e,t){ut.fn[e]=function(n,r){var i=ut.map(this,t,n);return Rt.test(e)||(r=n),r&&"string"==typeof r&&(i=ut.filter(r,i)),i=this.length>1&&!Qt[e]?ut.unique(i):i,this.length>1&&Wt.test(e)&&(i=i.reverse()),this.pushStack(i)
}}),ut.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?ut.find.matchesSelector(t[0],e)?[t[0]]:[]:ut.find.matches(e,t)
},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!ut(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];
return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);
return n}});var Xt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ut=/ jQuery\d+="(?:null|\d+)"/g,Jt=new RegExp("<(?:"+Xt+")[\\s/>]","i"),Vt=/^\s+/,Kt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Yt=/<([\w:]+)/,Gt=/<tbody/i,Zt=/<|&#?\w+;/,en=/<(?:script|style|link)/i,tn=/^(?:checkbox|radio)$/i,nn=/checked\s*(?:[^=]|=\s*.checked.)/i,rn=/^$|\/(?:java|ecma)script/i,on=/^true\/(.*)/,an=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sn={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ut.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},un=p(J),ln=un.appendChild(J.createElement("div"));
sn.optgroup=sn.option,sn.tbody=sn.tfoot=sn.colgroup=sn.caption=sn.thead,sn.th=sn.td,ut.fn.extend({text:function(e){return ut.access(this,function(e){return e===t?ut.text(this):this.empty().append((this[0]&&this[0].ownerDocument||J).createTextNode(e))
},null,e,arguments.length)},wrapAll:function(e){if(ut.isFunction(e))return this.each(function(t){ut(this).wrapAll(e.call(this,t))
});if(this[0]){var t=ut(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;
return e}).append(this)}return this},wrapInner:function(e){return ut.isFunction(e)?this.each(function(t){ut(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=ut(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)
})},wrap:function(e){var t=ut.isFunction(e);return this.each(function(n){ut(this).wrapAll(t?e.call(this,n):e)
})},unwrap:function(){return this.parent().each(function(){ut.nodeName(this,"body")||ut(this).replaceWith(this.childNodes)
}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)
})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)
})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||ut.filter(e,[n]).length>0)&&(t||1!==n.nodeType||ut.cleanData(b(n)),n.parentNode&&(t&&ut.contains(n.ownerDocument,n)&&g(b(n,"script")),n.parentNode.removeChild(n)));
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&ut.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);
e.options&&ut.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return ut.clone(this,e,t)
})},html:function(e){return ut.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t)return 1===n.nodeType?n.innerHTML.replace(Ut,""):t;if(!("string"!=typeof e||en.test(e)||!ut.support.htmlSerialize&&Jt.test(e)||!ut.support.leadingWhitespace&&Vt.test(e)||sn[(Yt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Kt,"<$1></$2>");
try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(ut.cleanData(b(n,!1)),n.innerHTML=e);
n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=ut.isFunction(e);
return t||"string"==typeof e||(e=ut(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;
n&&(ut(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)
},domManip:function(e,n,r){e=tt.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,g=f-1,v=e[0],y=ut.isFunction(v);
if(y||!(1>=f||"string"!=typeof v||ut.support.checkClone)&&nn.test(v))return this.each(function(i){var o=p.eq(i);
y&&(e[0]=v.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(l=ut.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&ut.nodeName(i,"tr"),s=ut.map(b(l,"script"),h),a=s.length;f>c;c++)o=l,c!==g&&(o=ut.clone(o,!0,!0),a&&ut.merge(s,b(o,"script"))),r.call(n&&ut.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],o,c);
if(a)for(u=s[s.length-1].ownerDocument,ut.map(s,m),c=0;a>c;c++)o=s[c],rn.test(o.type||"")&&!ut._data(o,"globalEval")&&ut.contains(u,o)&&(o.src?ut.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):ut.globalEval((o.text||o.textContent||o.innerHTML||"").replace(an,"")));
l=i=null}return this}}),ut.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ut.fn[e]=function(e){for(var n,r=0,i=[],o=ut(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),ut(o[r])[t](n),nt.apply(i,n.get());
return this.pushStack(i)}}),ut.extend({clone:function(e,t,n){var r,i,o,a,s,u=ut.contains(e.ownerDocument,e);
if(ut.support.html5Clone||ut.isXMLDoc(e)||!Jt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(ln.innerHTML=e.outerHTML,ln.removeChild(o=ln.firstChild)),!(ut.support.noCloneEvent&&ut.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ut.isXMLDoc(e)))for(r=b(o),s=b(e),a=0;null!=(i=s[a]);++a)r[a]&&y(i,r[a]);
if(t)if(n)for(s=s||b(e),r=r||b(o),a=0;null!=(i=s[a]);a++)v(i,r[a]);else v(e,o);return r=b(o,"script"),r.length>0&&g(r,!u&&b(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],m=0;f>m;m++)if(o=e[m],o||0===o)if("object"===ut.type(o))ut.merge(h,o.nodeType?[o]:o);
else if(Zt.test(o)){for(s=s||d.appendChild(t.createElement("div")),u=(Yt.exec(o)||["",""])[1].toLowerCase(),c=sn[u]||sn._default,s.innerHTML=c[1]+o.replace(Kt,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;
if(!ut.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!ut.support.tbody)for(o="table"!==u||Gt.test(o)?"<table>"!==c[1]||Gt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)ut.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l);
for(ut.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);
s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),ut.support.appendChecked||ut.grep(b(h,"input"),x),m=0;o=h[m++];)if((!r||-1===ut.inArray(o,r))&&(a=ut.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),a&&g(s),n))for(i=0;o=s[i++];)rn.test(o.type||"")&&n.push(o);
return s=null,d},cleanData:function(e,t){for(var n,r,i,o,a=0,s=ut.expando,u=ut.cache,l=ut.support.deleteExpando,c=ut.event.special;null!=(n=e[a]);a++)if((t||ut.acceptData(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?ut.event.remove(n,r):ut.removeEvent(n,r,o.handle);
u[i]&&(delete u[i],l?delete n[s]:typeof n.removeAttribute!==U?n.removeAttribute(s):n[s]=null,Z.push(i))
}}});var cn,fn,pn,dn=/alpha\([^)]*\)/i,hn=/opacity\s*=\s*([^)]*)/,mn=/^(top|right|bottom|left)$/,gn=/^(none|table(?!-c[ea]).+)/,vn=/^margin/,yn=new RegExp("^("+lt+")(.*)$","i"),bn=new RegExp("^("+lt+")(?!px)[a-z%]+$","i"),xn=new RegExp("^([+-])=("+lt+")","i"),wn={BODY:"block"},Cn={position:"absolute",visibility:"hidden",display:"block"},kn={letterSpacing:0,fontWeight:400},Tn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];
ut.fn.extend({css:function(e,n){return ut.access(this,function(e,n,r){var i,o,a={},s=0;
if(ut.isArray(n)){for(o=fn(e),i=n.length;i>s;s++)a[n[s]]=ut.css(e,n[s],!1,o);return a
}return r!==t?ut.style(e,n,r):ut.css(e,n)},e,n,arguments.length>1)},show:function(){return k(this,!0)
},hide:function(){return k(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:C(this))?ut(this).show():ut(this).hide()
})}}),ut.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=pn(e,"opacity");
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ut.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=ut.camelCase(n),l=e.style;
if(n=ut.cssProps[u]||(ut.cssProps[u]=w(l,u)),s=ut.cssHooks[n]||ut.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];
if(a=typeof r,"string"===a&&(o=xn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ut.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||ut.cssNumber[u]||(r+="px"),ut.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r
}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=ut.camelCase(n);return n=ut.cssProps[u]||(ut.cssProps[u]=w(e.style,u)),s=ut.cssHooks[n]||ut.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=pn(e,n,i)),"normal"===a&&n in kn&&(a=kn[n]),""===r||r?(o=parseFloat(a),r===!0||ut.isNumeric(o)?o||0:a):a
},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];
i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(fn=function(t){return e.getComputedStyle(t,null)
},pn=function(e,n,r){var i,o,a,s=r||fn(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;
return s&&(""!==u||ut.contains(e.ownerDocument,e)||(u=ut.style(e,n)),bn.test(u)&&vn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u
}):J.documentElement.currentStyle&&(fn=function(e){return e.currentStyle},pn=function(e,n,r){var i,o,a,s=r||fn(e),u=s?s[n]:t,l=e.style;
return null==u&&l&&l[n]&&(u=l[n]),bn.test(u)&&!mn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u
}),ut.each(["height","width"],function(e,t){ut.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&gn.test(ut.css(e,"display"))?ut.swap(e,Cn,function(){return $(e,t,r)
}):$(e,t,r):void 0},set:function(e,n,r){var i=r&&fn(e);return T(e,n,r?N(e,t,r,ut.support.boxSizing&&"border-box"===ut.css(e,"boxSizing",!1,i),i):0)
}}}),ut.support.opacity||(ut.cssHooks.opacity={get:function(e,t){return hn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=ut.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===ut.trim(o.replace(dn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=dn.test(o)?o.replace(dn,i):o+" "+i)
}}),ut(function(){ut.support.reliableMarginRight||(ut.cssHooks.marginRight={get:function(e,t){return t?ut.swap(e,{display:"inline-block"},pn,[e,"marginRight"]):void 0
}}),!ut.support.pixelPosition&&ut.fn.position&&ut.each(["top","left"],function(e,t){ut.cssHooks[t]={get:function(e,n){return n?(n=pn(e,t),bn.test(n)?ut(e).position()[t]+"px":n):void 0
}}})}),ut.expr&&ut.expr.filters&&(ut.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!ut.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||ut.css(e,"display"))
},ut.expr.filters.visible=function(e){return!ut.expr.filters.hidden(e)}),ut.each({margin:"",padding:"",border:"Width"},function(e,t){ut.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Tn[r]+t]=o[r]||o[r-2]||o[0];
return i}},vn.test(e)||(ut.cssHooks[e+t].set=T)});var $n=/%20/g,_n=/\[\]$/,jn=/\r?\n/g,En=/^(?:submit|button|image|reset|file)$/i,Sn=/^(?:input|select|textarea|keygen)/i;
ut.fn.extend({serialize:function(){return ut.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ut.prop(this,"elements");
return e?ut.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ut(this).is(":disabled")&&Sn.test(this.nodeName)&&!En.test(e)&&(this.checked||!tn.test(e))
}).map(function(e,t){var n=ut(this).val();return null==n?null:ut.isArray(n)?ut.map(n,function(e){return{name:t.name,value:e.replace(jn,"\r\n")}
}):{name:t.name,value:n.replace(jn,"\r\n")}}).get()}}),ut.param=function(e,n){var r,i=[],o=function(e,t){t=ut.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};if(n===t&&(n=ut.ajaxSettings&&ut.ajaxSettings.traditional),ut.isArray(e)||e.jquery&&!ut.isPlainObject(e))ut.each(e,function(){o(this.name,this.value)
});else for(r in e)E(r,e[r],n,o);return i.join("&").replace($n,"+")},ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ut.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}}),ut.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var An,Dn,Ln=ut.now(),Hn=/\?/,On=/#.*$/,qn=/([?&])_=[^&]*/,Pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Bn=/^(?:GET|HEAD)$/,Fn=/^\/\//,Rn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Wn=ut.fn.load,In={},zn={},Qn="*/".concat("*");
try{Dn=V.href}catch(Xn){Dn=J.createElement("a"),Dn.href="",Dn=Dn.href}An=Rn.exec(Dn.toLowerCase())||[],ut.fn.load=function(e,n,r){if("string"!=typeof e&&Wn)return Wn.apply(this,arguments);
var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),ut.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&ut.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?ut("<div>").append(ut.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},ut.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ut.fn[t]=function(e){return this.on(t,e)
}}),ut.each(["get","post"],function(e,n){ut[n]=function(e,r,i,o){return ut.isFunction(r)&&(o=o||i,i=r,r=t),ut.ajax({url:e,type:n,dataType:o,data:r,success:i})
}}),ut.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Mn.test(An[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":ut.parseJSON,"text xml":ut.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?D(D(e,ut.ajaxSettings),t):D(ut.ajaxSettings,e)
},ajaxPrefilter:S(In),ajaxTransport:S(zn),ajax:function(e,n){function r(e,n,r,i){var o,f,y,b,w,k=n;
2!==x&&(x=2,u&&clearTimeout(u),c=t,s=i||"",C.readyState=e>0?4:0,r&&(b=L(p,C,r)),e>=200&&300>e||304===e?(p.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(ut.lastModified[a]=w),w=C.getResponseHeader("etag"),w&&(ut.etag[a]=w)),204===e?(o=!0,k="nocontent"):304===e?(o=!0,k="notmodified"):(o=H(p,b),k=o.state,f=o.data,y=o.error,o=!y)):(y=k,(e||!k)&&(k="error",0>e&&(e=0))),C.status=e,C.statusText=(n||k)+"",o?m.resolveWith(d,[f,k,C]):m.rejectWith(d,[C,k,y]),C.statusCode(v),v=t,l&&h.trigger(o?"ajaxSuccess":"ajaxError",[C,p,o?f:y]),g.fireWith(d,[C,k]),l&&(h.trigger("ajaxComplete",[C,p]),--ut.active||ut.event.trigger("ajaxStop")))
}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=ut.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?ut(d):ut.event,m=ut.Deferred(),g=ut.Callbacks("once memory"),v=p.statusCode||{},y={},b={},x=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===x){if(!f)for(f={};t=Pn.exec(s);)f[t[1].toLowerCase()]=t[2];t=f[e.toLowerCase()]
}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();
return x||(e=b[n]=b[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this
},statusCode:function(e){var t;if(e)if(2>x)for(t in e)v[t]=[v[t],e[t]];else C.always(e[C.status]);
return this},abort:function(e){var t=e||w;return c&&c.abort(t),r(0,t),this}};if(m.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||Dn)+"").replace(On,"").replace(Fn,An[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=ut.trim(p.dataType||"*").toLowerCase().match(ct)||[""],null==p.crossDomain&&(i=Rn.exec(p.url.toLowerCase()),p.crossDomain=!(!i||i[1]===An[1]&&i[2]===An[2]&&(i[3]||("http:"===i[1]?80:443))==(An[3]||("http:"===An[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ut.param(p.data,p.traditional)),A(In,p,n,C),2===x)return C;
l=p.global,l&&0===ut.active++&&ut.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Bn.test(p.type),a=p.url,p.hasContent||(p.data&&(a=p.url+=(Hn.test(a)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(a)?a.replace(qn,"$1_="+Ln++):a+(Hn.test(a)?"&":"?")+"_="+Ln++)),p.ifModified&&(ut.lastModified[a]&&C.setRequestHeader("If-Modified-Since",ut.lastModified[a]),ut.etag[a]&&C.setRequestHeader("If-None-Match",ut.etag[a])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Qn+"; q=0.01":""):p.accepts["*"]);
for(o in p.headers)C.setRequestHeader(o,p.headers[o]);if(p.beforeSend&&(p.beforeSend.call(d,C,p)===!1||2===x))return C.abort();
w="abort";for(o in{success:1,error:1,complete:1})C[o](p[o]);if(c=A(zn,p,n,C)){C.readyState=1,l&&h.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){C.abort("timeout")
},p.timeout));try{x=1,c.send(y,r)}catch(k){if(!(2>x))throw k;r(-1,k)}}else r(-1,"No Transport");
return C},getScript:function(e,n){return ut.get(e,t,n,"script")},getJSON:function(e,t,n){return ut.get(e,t,n,"json")
}}),ut.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ut.globalEval(e),e
}}}),ut.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),ut.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=J.head||ut("head")[0]||J.documentElement;
return{send:function(t,i){n=J.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Un=[],Jn=/(=)\?(?=&|$)|\?\?/;
ut.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Un.pop()||ut.expando+"_"+Ln++;
return this[e]=!0,e}}),ut.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Jn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jn.test(n.data)&&"data");
return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=ut.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Jn,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||ut.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Un.push(o)),s&&ut.isFunction(a)&&a(s[0]),s=a=t
}),"script"):void 0});var Vn,Kn,Yn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)
};ut.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&O()||q()}:O,Kn=ut.ajaxSettings.xhr(),ut.support.cors=!!Kn&&"withCredentials"in Kn,Kn=ut.support.ajax=!!Kn,Kn&&ut.ajaxTransport(function(n){if(!n.crossDomain||ut.support.cors){var r;
return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];
n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f;
try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=ut.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();
else{f={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(f.text=u.responseText);
try{c=u.statusText}catch(p){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404
}}catch(d){i||o(-1,d)}f&&o(s,c,f,l)},n.async?4===u.readyState?setTimeout(r):(a=++Yn,Gn&&(Vn||(Vn={},ut(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)}}}});var Zn,er,tr=/^(?:toggle|show|hide)$/,nr=new RegExp("^(?:([+-])=|)("+lt+")([a-z%]*)$","i"),rr=/queueHooks$/,ir=[R],or={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=nr.exec(t),a=i.cur(),s=+a||0,u=1,l=20;
if(o){if(n=+o[2],r=o[3]||(ut.cssNumber[e]?"":"px"),"px"!==r&&s){s=ut.css(i.elem,e,!0)||n||1;
do u=u||".5",s/=u,ut.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n
}return i}]};ut.Animation=ut.extend(B,{tweener:function(e,t){ut.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
for(var n,r=0,i=e.length;i>r;r++)n=e[r],or[n]=or[n]||[],or[n].unshift(t)},prefilter:function(e,t){t?ir.unshift(e):ir.push(e)
}}),ut.Tween=W,W.prototype={constructor:W,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ut.cssNumber[n]?"":"px")
},cur:function(){var e=W.propHooks[this.prop];return e&&e.get?e.get(this):W.propHooks._default.get(this)
},run:function(e){var t,n=W.propHooks[this.prop];return this.pos=t=this.options.duration?ut.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):W.propHooks._default.set(this),this
}},W.prototype.init.prototype=W.prototype,W.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ut.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){ut.fx.step[e.prop]?ut.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ut.cssProps[e.prop]]||ut.cssHooks[e.prop])?ut.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},W.propHooks.scrollTop=W.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},ut.each(["toggle","show","hide"],function(e,t){var n=ut.fn[t];ut.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)
}}),ut.fn.extend({fadeTo:function(e,t,n,r){return this.filter(C).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=ut.isEmptyObject(e),o=ut.speed(t,n,r),a=function(){var t=B(this,ut.extend({},e),o);
a.finish=function(){t.stop(!0)},(i||ut._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=ut.timers,a=ut._data(this);
if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&rr.test(n)&&i(a[n]);
for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));
(t||!r)&&ut.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ut._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ut.timers,a=r?r.length:0;
for(n.finish=!0,ut.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ut.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ut.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}}),ut.speed=function(e,t,n){var r=e&&"object"==typeof e?ut.extend({},e):{complete:n||!n&&t||ut.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ut.isFunction(t)&&t};
return r.duration=ut.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ut.fx.speeds?ut.fx.speeds[r.duration]:ut.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ut.isFunction(r.old)&&r.old.call(this),r.queue&&ut.dequeue(this,r.queue)
},r},ut.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2
}},ut.timers=[],ut.fx=W.prototype.init,ut.fx.tick=function(){var e,n=ut.timers,r=0;
for(Zn=ut.now();r<n.length;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||ut.fx.stop(),Zn=t
},ut.fx.timer=function(e){e()&&ut.timers.push(e)&&ut.fx.start()},ut.fx.interval=13,ut.fx.start=function(){er||(er=setInterval(ut.fx.tick,ut.fx.interval))
},ut.fx.stop=function(){clearInterval(er),er=null},ut.fx.speeds={slow:600,fast:200,_default:400},ut.fx.step={},ut.expr&&ut.expr.filters&&(ut.expr.filters.animated=function(e){return ut.grep(ut.timers,function(t){return e===t.elem
}).length}),ut.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){ut.offset.setOffset(this,e,t)
});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,ut.contains(n,o)?(typeof o.getBoundingClientRect!==U&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i
},ut.offset={setOffset:function(e,t,n){var r=ut.css(e,"position");"static"===r&&(e.style.position="relative");
var i,o,a=ut(e),s=a.offset(),u=ut.css(e,"top"),l=ut.css(e,"left"),c=("absolute"===r||"fixed"===r)&&ut.inArray("auto",[u,l])>-1,f={},p={};
c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),ut.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)
}},ut.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===ut.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ut.nodeName(e[0],"html")||(n=e.offset()),n.top+=ut.css(e[0],"borderTopWidth",!0),n.left+=ut.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ut.css(r,"marginTop",!0),left:t.left-n.left-ut.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||J.documentElement;e&&!ut.nodeName(e,"html")&&"static"===ut.css(e,"position");)e=e.offsetParent;
return e||J.documentElement})}}),ut.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
ut.fn[e]=function(i){return ut.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?ut(a).scrollLeft():o,r?o:ut(a).scrollTop()):e[i]=o,void 0)
},e,i,arguments.length,null)}}),ut.each({Height:"height",Width:"width"},function(e,n){ut.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){ut.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return ut.access(this,function(n,r,i){var o;return ut.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?ut.css(n,r,s):ut.style(n,r,i,s)
},n,a?i:t,a,null)}})}),e.jQuery=e.$=ut,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return ut
})}(window),!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e,t=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(e in n)if(void 0!==t.style[e])return n[e]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";
var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function n(){r.trigger("closed").remove()
}var r,i=e(this),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),r=e(o),t&&t.preventDefault(),r.length||(r=i.hasClass("alert")?i:i.parent()),r.trigger(t=e.Event("close")),t.isDefaultPrevented()||(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.on(e.support.transition.end,n):n())
};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");
i||r.data("alert",i=new n(this)),"string"==typeof t&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this
},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";
var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)
};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";
e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){"loadingText"==e?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)
},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');
e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;
e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),o="object"==typeof n&&n;
i||r.data("button",i=new t(this,o)),"toggle"==n?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this
},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);
n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";
var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))
};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this
},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)
},to:function(t){var n=this.getActiveIndex(),r=this;if(!(t>this.$items.length-1||0>t))return this.sliding?this.$element.one("slid",function(){r.to(t)
}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this
},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")
},slide:function(t,n){var r,i=this.$element.find(".item.active"),o=n||i[t](),a=this.interval,s="next"==t?"left":"right",u="next"==t?"first":"last",l=this;
if(this.sliding=!0,a&&this.pause(),o=o.length?o:this.$element.find(".item")[u](),r=e.Event("slide",{relatedTarget:o[0],direction:s}),!o.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(l.$indicators.children()[l.getActiveIndex()]);
t&&t.addClass("active")})),e.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(r),r.isDefaultPrevented())return;
o.addClass(t),o[0].offsetWidth,i.addClass(s),o.addClass(s),this.$element.one(e.support.transition.end,function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")
},0)})}else{if(this.$element.trigger(r),r.isDefaultPrevented())return;i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")
}return a&&this.cycle(),this}}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),o=e.extend({},e.fn.carousel.defaults,"object"==typeof n&&n),a="string"==typeof n?n:o.slide;
i||r.data("carousel",i=new t(this,o)),"number"==typeof n?i.to(n):a?i[a]():o.interval&&i.pause().cycle()
})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this
},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n,r,i=e(this),o=e(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),a=e.extend({},o.data(),i.data());
o.carousel(a),(r=i.attr("data-slide-to"))&&o.data("carousel").pause().to(r).cycle(),t.preventDefault()
})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()
};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");
return e?"width":"height"},show:function(){var t,n,r,i;if(!this.transitioning&&!this.$element.hasClass("in")){if(t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in"),r&&r.length){if(i=r.data("collapse"),i&&i.transitioning)return;
r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])
}},hide:function(){var t;!this.transitioning&&this.$element.hasClass("in")&&(t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0))
},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[null!==e?"addClass":"removeClass"]("collapse"),this
},transition:function(t,n,r){var i=this,o=function(){"show"==n.type&&i.reset(),i.transitioning=0,i.$element.trigger(r)
};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,o):o())
},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;
e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),o=e.extend({},e.fn.collapse.defaults,r.data(),"object"==typeof n&&n);
i||r.data("collapse",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this
},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n,r=e(this),i=r.attr("data-target")||t.preventDefault()||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=e(i).data("collapse")?"toggle":r.data();
r[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(o)})}(window.jQuery),!function(e){"use strict";
function t(){e(".dropdown-backdrop").remove(),e(r).each(function(){n(e(this)).removeClass("open")
})}function n(t){var n,r=t.attr("data-target");return r||(r=t.attr("href"),r=r&&/#/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,"")),n=r&&e(r),n&&n.length||(n=t.parent()),n
}var r="[data-toggle=dropdown]",i=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);
e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})
};i.prototype={constructor:i,toggle:function(){var r,i,o=e(this);if(!o.is(".disabled, :disabled"))return r=n(o),i=r.hasClass("open"),t(),i||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",t),r.toggleClass("open")),o.focus(),!1
},keydown:function(t){var i,o,a,s,u;if(/(38|40|27)/.test(t.keyCode)&&(i=e(this),t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled"))){if(a=n(i),s=a.hasClass("open"),!s||s&&27==t.keyCode)return 27==t.which&&a.find(r).focus(),i.click();
o=e("[role=menu] li:not(.divider):visible a",a),o.length&&(u=o.index(o.filter(":focus")),38==t.keyCode&&u>0&&u--,40==t.keyCode&&u<o.length-1&&u++,~u||(u=0),o.eq(u).focus())
}}};var o=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),r=n.data("dropdown");
r||n.data("dropdown",r=new i(this)),"string"==typeof t&&r[t].call(n)})},e.fn.dropdown.Constructor=i,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=o,this
},e(document).on("click.dropdown.data-api",t).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()
}).on("click.dropdown.data-api",r,i.prototype.toggle).on("keydown.dropdown.data-api",r+", [role=menu]",i.prototype.keydown)
}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()
},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");
t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")
}):t.$element.focus().trigger("shown")}))},hide:function(t){t&&t.preventDefault(),t=e.Event("hide"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())
},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]===e.target||t.$element.has(e.target).length||t.$element.focus()
})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()
}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()
},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()
})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")
})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},backdrop:function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=e.support.transition&&n;
if(this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;
r?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()
}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),o=e.extend({},e.fn.modal.defaults,r.data(),"object"==typeof n&&n);
i||r.data("modal",i=new t(this,o)),"string"==typeof n?i[n]():o.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this
},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());
t.preventDefault(),i.modal(o).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";
var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,o,a,s,u;
for(this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,a=this.options.trigger.split(" "),u=a.length;u--;)s=a[u],"click"==s?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=s&&(i="hover"==s?"mouseenter":"focus",o="hover"==s?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.leave,this)));
this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t
},enter:function(t){var n,r=e.fn[this.type].defaults,i={};return this._options&&e.each(this._options,function(e,t){r[e]!=t&&(i[e]=t)
},this),n=e(t.currentTarget)[this.type](i).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()
},n.options.delay.show),void 0):n.show()},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);
return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()
},n.options.delay.hide),void 0):n.hide()},show:function(){var t,n,r,i,o,a,s=e.Event("show");
if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;
switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight,o){case"bottom":a={top:n.top+n.height,left:n.left+n.width/2-r/2};
break;case"top":a={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":a={top:n.top+n.height/2-i/2,left:n.left-r};
break;case"right":a={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(a,o),this.$element.trigger("shown")
}},applyPlacement:function(e,t){var n,r,i,o,a=this.tip(),s=a[0].offsetWidth,u=a[0].offsetHeight;
a.offset(e).addClass(t).addClass("in"),n=a[0].offsetWidth,r=a[0].offsetHeight,"top"==t&&r!=u&&(e.top=e.top+u-r,o=!0),"bottom"==t||"top"==t?(i=0,e.left<0&&(i=-2*e.left,e.left=0,a.offset(e),n=a[0].offsetWidth,r=a[0].offsetHeight),this.replaceArrow(i-s+n,n,"left")):this.replaceArrow(r-u,r,"top"),o&&a.offset(e)
},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();
e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")
},hide:function(){function t(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()
},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var n=this.tip(),r=e.Event("hide");
return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?t():n.detach(),this.$element.trigger("hidden"),this)
},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")
},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];
return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())
},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)
},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)
},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled
},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;
n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),o="object"==typeof n&&n;
i||r.data("tooltip",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this
}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)
};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();
e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")
},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;
return e=("function"==typeof n.content?n.content.call(t[0]):n.content)||t.attr("data-content")
},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),o="object"==typeof n&&n;
i||r.data("popover",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this
}}(window.jQuery),!function(e){"use strict";function t(t,n){var r,i=e.proxy(this.process,this),o=e(t).is("body")?e(window):e(t);
this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=o.on("scroll.scroll-spy.data-api",i),this.selector=(this.options.target||(r=e(t).attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()
}t.prototype={constructor:t,refresh:function(){var t,n=this;this.offsets=e([]),this.targets=e([]),t=this.$body.find(this.selector).map(function(){var t=e(this),r=t.data("target")||t.attr("href"),i=/^#\w/.test(r)&&e(r);
return i&&i.length&&[[i.position().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),r]]||null
}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])
})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,r=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,a=this.activeTarget;
if(t>=r)return a!=(e=o.last()[0])&&this.activate(e);for(e=i.length;e--;)a!=o[e]&&t>=i[e]&&(!i[e+1]||t<=i[e+1])&&this.activate(o[e])
},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")
}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),o="object"==typeof n&&n;
i||r.data("scrollspy",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this
},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);
t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)
};t.prototype={constructor:t,show:function(){var t,n,r,i=this.element,o=i.closest("ul:not(.dropdown-menu)"),a=i.attr("data-target");
a||(a=i.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(t=o.find(".active:last a")[0],r=e.Event("show",{relatedTarget:t}),i.trigger(r),r.isDefaultPrevented()||(n=e(a),this.activate(i.parent("li"),o),this.activate(n,n.parent(),function(){i.trigger({type:"shown",relatedTarget:t})
})))},activate:function(t,n,r){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()
}var o=n.find("> .active"),a=r&&e.support.transition&&o.hasClass("fade");a?o.one(e.support.transition.end,i):i(),o.removeClass("in")
}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");
i||r.data("tab",i=new t(this)),"string"==typeof n&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this
},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")
})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()
};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");
return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e
},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});
return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this
},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var t;
return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(t=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,t?this.process(t):this)
},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)
}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this
},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){for(var t,n=[],r=[],i=[];t=e.shift();)t.toLowerCase().indexOf(this.query.toLowerCase())?~t.indexOf(this.query)?r.push(t):i.push(t):n.push(t);
return n.concat(r,i)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"
})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]
}),t.first().addClass("active"),this.$menu.html(t),this},next:function(){var t=this.$menu.find(".active").removeClass("active"),n=t.next();
n.length||(n=e(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var e=this.$menu.find(".active").removeClass("active"),t=e.prev();
t.length||(t=this.$menu.find("li").last()),t.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))
},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t="function"==typeof this.$element[e]),t
},move:function(e){if(this.shown){switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();
break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()
}e.stopPropagation()}},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)
},keypress:function(e){this.suppressKeyPressRepeat||this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;
this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(){this.focused=!0
},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()
},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")
},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()
}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),o="object"==typeof n&&n;
i||r.data("typeahead",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this
},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var t=e(this);
t.data("typeahead")||t.typeahead(t.data())})}(window.jQuery),!function(e){"use strict";
var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)
},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t,n=e(document).height(),r=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,a=o.bottom,s=o.top,u="affix affix-top affix-bottom";
"object"!=typeof o&&(a=s=o),"function"==typeof s&&(s=o.top()),"function"==typeof a&&(a=o.bottom()),t=null!=this.unpin&&r+this.unpin<=i.top?!1:null!=a&&i.top+this.$element.height()>=n-a?"bottom":null!=s&&s>=r?"top":!1,this.affixed!==t&&(this.affixed=t,this.unpin="bottom"==t?i.top-r:null,this.$element.removeClass(u).addClass("affix"+(t?"-"+t:"")))
}};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),o="object"==typeof n&&n;
i||r.data("affix",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this
},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();
n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)
})})}(window.jQuery),function(e){function t(r){function o(e){return e&&"object"==typeof e&&!yr(e)&&Kn.call(e,"__wrapped__")?e:new F(e)
}function N(e,t,n){var r=e.length,i=r-t>=n;if(i)for(var o={},a=t-1;++a<r;){var s=Bn(e[a]);
(Kn.call(o,s)?o[s]:o[s]=[]).push(e[a])}return function(n){if(i){var r=Bn(n);return Kn.call(o,r)&&It(o[r],n)>-1
}return It(e,n,t)>-1}}function H(e){return e.charCodeAt(0)}function O(e,t){var n=e.index,r=t.index;
if(e=e.criteria,t=t.criteria,e!==t){if(e>t||"undefined"==typeof e)return 1;if(t>e||"undefined"==typeof t)return-1
}return r>n?-1:1}function q(e,t,n,r){function i(){var r=arguments,l=a?this:t;if(o||(e=t[s]),n.length&&(r=r.length?(r=I(r),u?r.concat(n):n.concat(r)):n),this instanceof i){R.prototype=e.prototype,l=new R,R.prototype=null;
var c=e.apply(l,r);return ot(c)?c:l}return e.apply(l,r)}var o=it(e),a=!n,s=t;if(a){var u=r;
n=t}else if(!o){if(!r)throw new Fn;t=e}return i}function P(){for(var e,t={arrays:"isArray(iterable)",bottom:"",init:"iterable",loop:"",top:"",useHas:!0,useKeys:!!xr},n=0;e=arguments[n];n++)for(var r in e)t[r]=e[r];
var i=t.args;t.firstArg=/^[^,]+/.exec(i)[0];var a=Hn("hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectTypes","return function("+i+") {\n"+hr(t)+"\n}");
return a(Kn,Q,yr,ct,xr,o,A)}function M(e){return"\\"+D[e]}function B(e){return wr[e]
}function F(e){this.__wrapped__=e}function R(){}function W(e){var t=!1;if(!e||er.call(e)!=_)return t;
var n=e.constructor;return(it(n)?n instanceof n:dr.nodeClass||!isNode(e))?(Nr(e,function(e,n){t=n
}),t===!1||Kn.call(e,t)):t}function I(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);
for(var r=-1,i=n-t||0,o=An(0>i?0:i);++r<i;)o[r]=e[t+r];return o}function z(e){return Cr[e]
}function Q(e){return er.call(e)==w}function X(e,t,r,i,a,s){var u=e;if("function"==typeof t&&(i=r,r=t,t=!1),"function"==typeof r){if(r="undefined"==typeof i?r:o.createCallback(r,i,1),u=r(u),"undefined"!=typeof u)return u;
u=e}var l=ot(u);if(l){var c=er.call(u);if(!S[c])return u;var f=yr(u)}if(!l||!t)return l?f?I(u):kr({},u):u;
var p=pr[c];switch(c){case k:case T:return new p(+u);case $:case E:return new p(u);
case j:return p(u.source,d.exec(u))}a||(a=[]),s||(s=[]);for(var h=a.length;h--;)if(a[h]==e)return s[h];
return u=f?p(u.length):{},f&&(Kn.call(e,"index")&&(u.index=e.index),Kn.call(e,"input")&&(u.input=e.input)),a.push(e),s.push(u),(f?kt:$r)(e,function(e,i){u[i]=X(e,t,r,n,a,s)
}),u}function U(e,t,n){return X(e,!0,t,n)}function J(e,t,n){var r;return t=o.createCallback(t,n),$r(e,function(e,n,i){return t(e,n,i)?(r=n,!1):void 0
}),r}function V(e){var t=[];return Nr(e,function(e,n){it(e)&&t.push(n)}),t.sort()
}function K(e,t){return e?Kn.call(e,t):!1}function Y(e){for(var t=-1,n=xr(e),r=n.length,i={};++t<r;){var o=n[t];
i[e[o]]=o}return i}function G(e){return e===!0||e===!1||er.call(e)==k}function Z(e){return e instanceof Ln||er.call(e)==T
}function et(e){return e?1===e.nodeType:!1}function tt(e){var t=!0;if(!e)return t;
var n=er.call(e),r=e.length;return n==C||n==E||n==w||n==_&&"number"==typeof r&&it(e.splice)?!r:($r(e,function(){return t=!1
}),t)}function nt(e,t,n,r,i,a){var u=n===s;if(n&&!u){n="undefined"==typeof r?n:o.createCallback(n,r,2);
var l=n(e,t);if("undefined"!=typeof l)return!!l}if(e===t)return 0!==e||1/e==1/t;var c=typeof e,f=typeof t;
if(e===e&&(!e||"function"!=c&&"object"!=c)&&(!t||"function"!=f&&"object"!=f))return!1;
if(null==e||null==t)return e===t;var p=er.call(e),d=er.call(t);if(p==w&&(p=_),d==w&&(d=_),p!=d)return!1;
switch(p){case k:case T:return+e==+t;case $:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;
case j:case E:return e==Bn(t)}var h=p==C;if(!h){if(Kn.call(e,"__wrapped__ ")||Kn.call(t,"__wrapped__"))return nt(e.__wrapped__||e,t.__wrapped__||t,n,r,i,a);
if(p!=_)return!1;var m=e.constructor,g=t.constructor;if(m!=g&&!(it(m)&&m instanceof m&&it(g)&&g instanceof g))return!1
}i||(i=[]),a||(a=[]);for(var v=i.length;v--;)if(i[v]==e)return a[v]==t;var y=0;if(l=!0,i.push(e),a.push(t),h){if(v=e.length,y=t.length,l=y==e.length,!l&&!u)return l;
for(;y--;){var b=v,x=t[y];if(u)for(;b--&&!(l=nt(e[b],x,n,r,i,a)););else if(!(l=nt(e[y],x,n,r,i,a)))break
}return l}return Nr(t,function(t,o,s){return Kn.call(s,o)?(y++,l=Kn.call(e,o)&&nt(e[o],t,n,r,i,a)):void 0
}),l&&!u&&Nr(e,function(e,t,n){return Kn.call(n,t)?l=--y>-1:void 0}),l}function rt(e){return rr(e)&&!ir(parseFloat(e))
}function it(e){return"function"==typeof e}function ot(e){return e?A[typeof e]:!1
}function at(e){return ut(e)&&e!=+e}function st(e){return null===e}function ut(e){return"number"==typeof e||er.call(e)==$
}function lt(e){return e instanceof Mn||er.call(e)==j}function ct(e){return"string"==typeof e||er.call(e)==E
}function ft(e){return"undefined"==typeof e}function pt(e,t,n){var r=arguments,i=0,a=2;
if(!ot(e))return e;if(n===s)var u=r[3],l=r[4],c=r[5];else l=[],c=[],"number"!=typeof n&&(a=r.length),a>3&&"function"==typeof r[a-2]?u=o.createCallback(r[--a-1],r[a--],2):a>2&&"function"==typeof r[a-1]&&(u=r[--a]);
for(;++i<a;)(yr(r[i])?kt:$r)(r[i],function(t,n){var r,i,o=t,a=e[n];if(t&&((i=yr(t))||_r(t))){for(var f=l.length;f--;)if(r=l[f]==t){a=c[f];
break}r||(a=i?yr(a)?a:[]:_r(a)?a:{},u&&(o=u(a,t),"undefined"!=typeof o&&(a=o)),l.push(t),c.push(a),u||(a=pt(a,t,s,u,l,c)))
}else u&&(o=u(a,t),"undefined"==typeof o&&(o=t)),"undefined"!=typeof o&&(a=o);e[n]=a
});return e}function dt(e,t,n){var r="function"==typeof t,i={};if(r)t=o.createCallback(t,n);
else var a=Un.apply(Rn,arguments);return Nr(e,function(e,n,o){(r?!t(e,n,o):It(a,n,1)<0)&&(i[n]=e)
}),i}function ht(e){for(var t=-1,n=xr(e),r=n.length,i=An(r);++t<r;){var o=n[t];i[t]=[o,e[o]]
}return i}function mt(e,t,n){var r={};if("function"!=typeof t)for(var i=0,a=Un.apply(Rn,arguments),s=ot(e)?a.length:0;++i<s;){var u=a[i];
u in e&&(r[u]=e[u])}else t=o.createCallback(t,n),Nr(e,function(e,n,i){t(e,n,i)&&(r[n]=e)
});return r}function gt(e){for(var t=-1,n=xr(e),r=n.length,i=An(r);++t<r;)i[t]=e[n[t]];
return i}function vt(e){for(var t=-1,n=Un.apply(Rn,I(arguments,1)),r=n.length,i=An(r);++t<r;)i[t]=e[n[t]];
return i}function yt(e,t,n){var r=-1,i=e?e.length:0,o=!1;return n=(0>n?ar(0,i+n):n)||0,"number"==typeof i?o=(ct(e)?e.indexOf(t,n):It(e,t,n))>-1:$r(e,function(e){return++r>=n?!(o=e===t):void 0
}),o}function bt(e,t,n){var r={};return t=o.createCallback(t,n),kt(e,function(e,n,i){n=Bn(t(e,n,i)),Kn.call(r,n)?r[n]++:r[n]=1
}),r}function xt(e,t,n){var r=!0;t=o.createCallback(t,n);var i=-1,a=e?e.length:0;
if("number"==typeof a)for(;++i<a&&(r=!!t(e[i],i,e)););else $r(e,function(e,n,i){return r=!!t(e,n,i)
});return r}function wt(e,t,n){var r=[];t=o.createCallback(t,n);var i=-1,a=e?e.length:0;
if("number"==typeof a)for(;++i<a;){var s=e[i];t(s,i,e)&&r.push(s)}else $r(e,function(e,n,i){t(e,n,i)&&r.push(e)
});return r}function Ct(e,t,n){t=o.createCallback(t,n);var r=-1,i=e?e.length:0;if("number"!=typeof i){var a;
return $r(e,function(e,n,r){return t(e,n,r)?(a=e,!1):void 0}),a}for(;++r<i;){var s=e[r];
if(t(s,r,e))return s}}function kt(e,t,n){var r=-1,i=e?e.length:0;if(t=t&&"undefined"==typeof n?t:o.createCallback(t,n),"number"==typeof i)for(;++r<i&&t(e[r],r,e)!==!1;);else $r(e,t);
return e}function Tt(e,t,n){var r={};return t=o.createCallback(t,n),kt(e,function(e,n,i){n=Bn(t(e,n,i)),(Kn.call(r,n)?r[n]:r[n]=[]).push(e)
}),r}function Nt(e,t){var n=I(arguments,2),r=-1,i="function"==typeof t,o=e?e.length:0,a=An("number"==typeof o?o:0);
return kt(e,function(e){a[++r]=(i?t:e[t]).apply(e,n)}),a}function $t(e,t,n){var r=-1,i=e?e.length:0;
if(t=o.createCallback(t,n),"number"==typeof i)for(var a=An(i);++r<i;)a[r]=t(e[r],r,e);
else a=[],$r(e,function(e,n,i){a[++r]=t(e,n,i)});return a}function _t(e,t,n){var r=-1/0,i=r;
if(!t&&yr(e))for(var a=-1,s=e.length;++a<s;){var u=e[a];u>i&&(i=u)}else t=!t&&ct(e)?H:o.createCallback(t,n),kt(e,function(e,n,o){var a=t(e,n,o);
a>r&&(r=a,i=e)});return i}function jt(e,t,n){var r=1/0,i=r;if(!t&&yr(e))for(var a=-1,s=e.length;++a<s;){var u=e[a];
i>u&&(i=u)}else t=!t&&ct(e)?H:o.createCallback(t,n),kt(e,function(e,n,o){var a=t(e,n,o);
r>a&&(r=a,i=e)});return i}function Et(e,t){var n=-1,r=e?e.length:0;if("number"==typeof r)for(var i=An(r);++n<r;)i[n]=e[n][t];
return i||$t(e,t)}function St(e,t,n,r){if(!e)return n;var i=arguments.length<3;t=o.createCallback(t,r,4);
var a=-1,s=e.length;if("number"==typeof s)for(i&&(n=e[++a]);++a<s;)n=t(n,e[a],a,e);
else $r(e,function(e,r,o){n=i?(i=!1,e):t(n,e,r,o)});return n}function At(e,t,n,r){var i=e,a=e?e.length:0,s=arguments.length<3;
if("number"!=typeof a){var u=xr(e);a=u.length}return t=o.createCallback(t,r,4),kt(e,function(e,r,o){r=u?u[--a]:--a,n=s?(s=!1,i[r]):t(n,i[r],r,o)
}),n}function Dt(e,t,n){return t=o.createCallback(t,n),wt(e,function(e,n,r){return!t(e,n,r)
})}function Lt(e){var t=-1,n=e?e.length:0,r=An("number"==typeof n?n:0);return kt(e,function(e){var n=Jn(lr()*(++t+1));
r[t]=r[n],r[n]=e}),r}function Ht(e){var t=e?e.length:0;return"number"==typeof t?t:xr(e).length
}function Ot(e,t,n){var r;t=o.createCallback(t,n);var i=-1,a=e?e.length:0;if("number"==typeof a)for(;++i<a&&!(r=t(e[i],i,e)););else $r(e,function(e,n,i){return!(r=t(e,n,i))
});return!!r}function qt(e,t,n){var r=-1,i=e?e.length:0,a=An("number"==typeof i?i:0);
for(t=o.createCallback(t,n),kt(e,function(e,n,i){a[++r]={criteria:t(e,n,i),index:r,value:e}
}),i=a.length,a.sort(O);i--;)a[i]=a[i].value;return a}function Pt(e){return e&&"number"==typeof e.length?I(e):gt(e)
}function Mt(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r
}function Bt(e){for(var t=-1,n=e?e.length:0,r=Un.apply(Rn,arguments),i=N(r,n,100),o=[];++t<n;){var a=e[t];
i(a)||o.push(a)}return o}function Ft(e,t,n){var r=-1,i=e?e.length:0;for(t=o.createCallback(t,n);++r<i;)if(t(e[r],r,e))return r;
return-1}function Rt(e,t,n){if(e){var r=0,i=e.length;if("number"!=typeof t&&null!=t){var a=-1;
for(t=o.createCallback(t,n);++a<i&&t(e[a],a,e);)r++}else if(r=t,null==r||n)return e[0];
return I(e,0,sr(ar(0,r),i))}}function Wt(e,t,n,r){var i=-1,a=e?e.length:0,s=[];for("boolean"!=typeof t&&null!=t&&(r=n,n=t,t=!1),null!=n&&(n=o.createCallback(n,r));++i<a;){var u=e[i];
n&&(u=n(u,i,e)),yr(u)?Yn.apply(s,t?u:Wt(u)):s.push(u)}return s}function It(e,t,n){var r=-1,i=e?e.length:0;
if("number"==typeof n)r=(0>n?ar(0,i+n):n||0)-1;else if(n)return r=Kt(e,t),e[r]===t?r:-1;
for(;++r<i;)if(e[r]===t)return r;return-1}function zt(e,t,n){if(!e)return[];var r=0,i=e.length;
if("number"!=typeof t&&null!=t){var a=i;for(t=o.createCallback(t,n);a--&&t(e[a],a,e);)r++
}else r=null==t||n?1:t||r;return I(e,0,sr(ar(0,i-r),i))}function Qt(e){var t=arguments,n=t.length,r={0:{}},i=-1,o=e?e.length:0,a=o>=100,s=[],u=s;
e:for(;++i<o;){var l=e[i];if(a)var c=Bn(l),f=Kn.call(r[0],c)?!(u=r[0][c]):u=r[0][c]=[];
if(f||It(u,l)<0){a&&u.push(l);for(var p=n;--p;)if(!(r[p]||(r[p]=N(t[p],0,100)))(l))continue e;
s.push(l)}}return s}function Xt(e,t,n){if(e){var r=0,i=e.length;if("number"!=typeof t&&null!=t){var a=i;
for(t=o.createCallback(t,n);a--&&t(e[a],a,e);)r++}else if(r=t,null==r||n)return e[i-1];
return I(e,ar(0,i-r))}}function Ut(e,t,n){var r=e?e.length:0;for("number"==typeof n&&(r=(0>n?ar(0,r+n):sr(n,r-1))+1);r--;)if(e[r]===t)return r;
return-1}function Jt(e,t,n){e=+e||0,n=+n||1,null==t&&(t=e,e=0);for(var r=-1,i=ar(0,Qn((t-e)/n)),o=An(i);++r<i;)o[r]=e,e+=n;
return o}function Vt(e,t,n){if("number"!=typeof t&&null!=t){var r=0,i=-1,a=e?e.length:0;
for(t=o.createCallback(t,n);++i<a&&t(e[i],i,e);)r++}else r=null==t||n?1:ar(0,t);return I(e,r)
}function Kt(e,t,n,r){var i=0,a=e?e.length:i;for(n=n?o.createCallback(n,r,1):bn,t=n(t);a>i;){var s=i+a>>>1;
n(e[s])<t?i=s+1:a=s}return i}function Yt(){return Gt(Un.apply(Rn,arguments))}function Gt(e,t,n,r){var i=-1,a=e?e.length:0,s=[],u=s;
"boolean"!=typeof t&&null!=t&&(r=n,n=t,t=!1);var l=!t&&a>=75;if(l)var c={};for(null!=n&&(u=[],n=o.createCallback(n,r));++i<a;){var f=e[i],p=n?n(f,i,e):f;
if(l)var d=Bn(p),h=Kn.call(c,d)?!(u=c[d]):u=c[d]=[];(t?!i||u[u.length-1]!==p:h||It(u,p)<0)&&((n||l)&&u.push(p),s.push(f))
}return s}function Zt(e){for(var t=-1,n=e?e.length:0,r=N(arguments,1,30),i=[];++t<n;){var o=e[t];
r(o)||i.push(o)}return i}function en(e){for(var t=-1,n=e?_t(Et(arguments,"length")):0,r=An(n);++t<n;)r[t]=Et(arguments,t);
return r}function tn(e,t){for(var n=-1,r=e?e.length:0,i={};++n<r;){var o=e[n];t?i[o]=t[n]:i[o[0]]=o[1]
}return i}function nn(e,t){return 1>e?t():function(){return--e<1?t.apply(this,arguments):void 0
}}function rn(e,t){return dr.fastBind||tr&&arguments.length>2?tr.call.apply(tr,arguments):q(e,t,I(arguments,2))
}function on(e){for(var t=Un.apply(Rn,arguments),n=t.length>1?0:(t=V(e),-1),r=t.length;++n<r;){var i=t[n];
e[i]=rn(e[i],e)}return e}function an(e,t){return q(e,t,I(arguments,2),s)}function sn(){var e=arguments;
return function(){for(var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]
}}function un(e,t,n){if(null==e)return bn;var r=typeof e;if("function"!=r){if("object"!=r)return function(t){return t[e]
};var i=xr(e);return function(t){for(var n=i.length,r=!1;n--&&(r=nt(t[i[n]],e[i[n]],s)););return r
}}return"undefined"!=typeof t?1===n?function(n){return e.call(t,n)}:2===n?function(n,r){return e.call(t,n,r)
}:4===n?function(n,r,i,o){return e.call(t,n,r,i,o)}:function(n,r,i){return e.call(t,n,r,i)
}:e}function ln(e,t,n){function r(){s=null,n||(o=e.apply(a,i))}var i,o,a,s;return function(){var u=n&&!s;
return i=arguments,a=this,Xn(s),s=Zn(r,t),u&&(o=e.apply(a,i)),o}}function cn(e){var t=I(arguments,1);
return Zn(function(){e.apply(n,t)},1)}function fn(e,t){var r=I(arguments,2);return Zn(function(){e.apply(n,r)
},t)}function pn(e,t){var n={};return function(){var r=Bn(t?t.apply(this,arguments):arguments[0]);
return Kn.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}}function dn(e){var t,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)
}}function hn(e){return q(e,I(arguments,1))}function mn(e){return q(e,I(arguments,1),null,s)
}function gn(e,t){function n(){s=new Ln,a=null,i=e.apply(o,r)}var r,i,o,a,s=0;return function(){var u=new Ln,l=t-(u-s);
return r=arguments,o=this,0>=l?(Xn(a),a=null,s=u,i=e.apply(o,r)):a||(a=Zn(n,l)),i
}}function vn(e,t){return function(){var n=[e];return Yn.apply(n,arguments),t.apply(this,n)
}}function yn(e){return null==e?"":Bn(e).replace(v,B)}function bn(e){return e}function xn(e){kt(V(e),function(t){var n=o[t]=e[t];
o.prototype[t]=function(){var e=this.__wrapped__,t=[e];Yn.apply(t,arguments);var r=n.apply(o,t);
return e&&"object"==typeof e&&e==r?this:new F(r)}})}function wn(){return r._=In,this
}function Cn(e,t){return null==e&&null==t&&(t=1),e=+e||0,null==t&&(t=e,e=0),e+Jn(lr()*((+t||0)-e+1))
}function kn(e,t){var r=e?e[t]:n;return it(r)?e[t]():r}function Tn(e,t,r){var i=o.templateSettings;
e||(e=""),r=Tr({},r,i);var a,s=Tr({},r.imports,i.imports),f=xr(s),d=gt(s),m=0,v=r.interpolate||g,b="__p += '",w=Mn((r.escape||g).source+"|"+v.source+"|"+(v===h?p:g).source+"|"+(r.evaluate||g).source+"|$","g");
e.replace(w,function(t,n,r,i,o,s){return r||(r=i),b+=e.slice(m,s).replace(y,M),n&&(b+="' +\n__e("+n+") +\n'"),o&&(a=!0,b+="';\n"+o+";\n__p += '"),r&&(b+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),m=s+t.length,t
}),b+="';\n";var C=r.variable,k=C;k||(C="obj",b="with ("+C+") {\n"+b+"\n}\n"),b=(a?b.replace(u,""):b).replace(l,"$1").replace(c,"$1;"),b="function("+C+") {\n"+(k?"":C+" || ("+C+" = {});\n")+"var __t, __p = '', __e = _.escape"+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+b+"return __p\n}";
var T="\n/*\n//@ sourceURL="+(r.sourceURL||"/lodash/template/source["+x++ +"]")+"\n*/";
try{var N=Hn(f,"return "+b+T).apply(n,d)}catch($){throw $.source=b,$}return t?N(t):(N.source=b,N)
}function Nn(e,t,n){e=(e=+e)>-1?e:0;var r=-1,i=An(e);for(t=o.createCallback(t,n,1);++r<e;)i[r]=t(r);
return i}function $n(e){return null==e?"":Bn(e).replace(f,z)}function _n(e){var t=++a;
return Bn(null==e?"":e)+t}function jn(e,t){return t(e),e}function En(){return Bn(this.__wrapped__)
}function Sn(){return this.__wrapped__}r=r?L.defaults(e.Object(),r,L.pick(e,b)):e;
var An=r.Array,Dn=r.Boolean,Ln=r.Date,Hn=r.Function,On=r.Math,qn=r.Number,Pn=r.Object,Mn=r.RegExp,Bn=r.String,Fn=r.TypeError,Rn=An(),Wn=Pn(),In=r._,zn=Mn("^"+Bn(Wn.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Qn=On.ceil,Xn=r.clearTimeout,Un=Rn.concat,Jn=On.floor,Vn=zn.test(Vn=Pn.getPrototypeOf)&&Vn,Kn=Wn.hasOwnProperty,Yn=Rn.push,Gn=r.setImmediate,Zn=r.setTimeout,er=Wn.toString,tr=zn.test(tr=I.bind)&&tr,nr=zn.test(nr=An.isArray)&&nr,rr=r.isFinite,ir=r.isNaN,or=zn.test(or=Pn.keys)&&or,ar=On.max,sr=On.min,ur=r.parseInt,lr=On.random,cr=zn.test(r.attachEvent),fr=tr&&!/\n|true/.test(tr+cr),pr={};
pr[C]=An,pr[k]=Dn,pr[T]=Ln,pr[_]=Pn,pr[$]=qn,pr[j]=Mn,pr[E]=Bn;var dr=o.support={};
dr.fastBind=tr&&!fr,o.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:h,variable:"",imports:{_:o}};
var hr=function(e){var t="var index, iterable = "+e.firstArg+", result = "+e.init+";\nif (!iterable) return result;\n"+e.top+";\n";
return e.arrays&&(t+="var length = iterable.length; index = -1;\nif ("+e.arrays+") {\n  while (++index < length) {\n    "+e.loop+"\n  }\n}\nelse {  "),e.useHas&&e.useKeys?t+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? keys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    "+e.loop+"\n  }  ":(t+="\n  for (index in iterable) {",e.useHas&&(t+="\n    if (",e.useHas&&(t+="hasOwnProperty.call(iterable, index)"),t+=") {    "),t+=e.loop+";    ",e.useHas&&(t+="\n    }"),t+="\n  }  "),e.arrays&&(t+="\n}"),t+=e.bottom+";\nreturn result"
},mr={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},gr={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",arrays:!1,loop:"if (callback(iterable[index], index, collection) === false) return result"},vr={top:"if (!objectTypes[typeof iterable]) return result;\n"+gr.top,arrays:!1};
F.prototype=o.prototype;var yr=nr||function(e){return e instanceof An||er.call(e)==C
},br=P({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)",arrays:!1}),xr=or?function(e){return ot(e)?or(e):[]
}:br,wr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cr=Y(wr),kr=P(mr,{top:mr.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),Tr=P(mr),Nr=P(gr,vr,{useHas:!1}),$r=P(gr,vr),_r=function(e){if(!e||er.call(e)!=_)return!1;
var t=e.valueOf,n="function"==typeof t&&(n=Vn(t))&&Vn(n);return n?e==n||Vn(e)==n:W(e)
},jr=wt;fr&&i&&"function"==typeof Gn&&(cn=rn(Gn,r));var Er=8==ur("08")?ur:function(e,t){return ur(ct(e)?e.replace(m,""):e,t||0)
};return o.after=nn,o.assign=kr,o.at=vt,o.bind=rn,o.bindAll=on,o.bindKey=an,o.compact=Mt,o.compose=sn,o.countBy=bt,o.createCallback=un,o.debounce=ln,o.defaults=Tr,o.defer=cn,o.delay=fn,o.difference=Bt,o.filter=wt,o.flatten=Wt,o.forEach=kt,o.forIn=Nr,o.forOwn=$r,o.functions=V,o.groupBy=Tt,o.initial=zt,o.intersection=Qt,o.invert=Y,o.invoke=Nt,o.keys=xr,o.map=$t,o.max=_t,o.memoize=pn,o.merge=pt,o.min=jt,o.omit=dt,o.once=dn,o.pairs=ht,o.partial=hn,o.partialRight=mn,o.pick=mt,o.pluck=Et,o.range=Jt,o.reject=Dt,o.rest=Vt,o.shuffle=Lt,o.sortBy=qt,o.tap=jn,o.throttle=gn,o.times=Nn,o.toArray=Pt,o.union=Yt,o.uniq=Gt,o.values=gt,o.where=jr,o.without=Zt,o.wrap=vn,o.zip=en,o.zipObject=tn,o.collect=$t,o.drop=Vt,o.each=kt,o.extend=kr,o.methods=V,o.object=tn,o.select=wt,o.tail=Vt,o.unique=Gt,xn(o),o.clone=X,o.cloneDeep=U,o.contains=yt,o.escape=yn,o.every=xt,o.find=Ct,o.findIndex=Ft,o.findKey=J,o.has=K,o.identity=bn,o.indexOf=It,o.isArguments=Q,o.isArray=yr,o.isBoolean=G,o.isDate=Z,o.isElement=et,o.isEmpty=tt,o.isEqual=nt,o.isFinite=rt,o.isFunction=it,o.isNaN=at,o.isNull=st,o.isNumber=ut,o.isObject=ot,o.isPlainObject=_r,o.isRegExp=lt,o.isString=ct,o.isUndefined=ft,o.lastIndexOf=Ut,o.mixin=xn,o.noConflict=wn,o.parseInt=Er,o.random=Cn,o.reduce=St,o.reduceRight=At,o.result=kn,o.runInContext=t,o.size=Ht,o.some=Ot,o.sortedIndex=Kt,o.template=Tn,o.unescape=$n,o.uniqueId=_n,o.all=xt,o.any=Ot,o.detect=Ct,o.foldl=St,o.foldr=At,o.include=yt,o.inject=St,$r(o,function(e,t){o.prototype[t]||(o.prototype[t]=function(){var t=[this.__wrapped__];
return Yn.apply(t,arguments),e.apply(o,t)})}),o.first=Rt,o.last=Xt,o.take=Rt,o.head=Rt,$r(o,function(e,t){o.prototype[t]||(o.prototype[t]=function(t,n){var r=e(this.__wrapped__,t,n);
return null==t||n&&"function"!=typeof t?r:new F(r)})}),o.VERSION="1.1.1",o.prototype.toString=En,o.prototype.value=Sn,o.prototype.valueOf=Sn,kt(["join","pop","shift"],function(e){var t=Rn[e];
o.prototype[e]=function(){return t.apply(this.__wrapped__,arguments)}}),kt(["push","reverse","sort","unshift"],function(e){var t=Rn[e];
o.prototype[e]=function(){return t.apply(this.__wrapped__,arguments),this}}),kt(["concat","slice","splice"],function(e){var t=Rn[e];
o.prototype[e]=function(){return new F(t.apply(this.__wrapped__,arguments))}}),o}var n,r="object"==typeof exports&&exports,i="object"==typeof module&&module&&module.exports==r&&module,o="object"==typeof global&&global;
o.global===o&&(e=o);var a=0,s={},u=/\b__p \+= '';/g,l=/\b(__p \+=) '' \+/g,c=/(__e\(.*?\)|\b__t\)) \+\n'';/g,f=/&(?:amp|lt|gt|quot|#39);/g,p=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,d=/\w*$/,h=/<%=([\s\S]+?)%>/g,m=/^0+(?=.$)/,g=/($^)/,v=/[&<>"']/g,y=/['\n\r\t\u2028\u2029\\]/g,b=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"],x=0,w="[object Arguments]",C="[object Array]",k="[object Boolean]",T="[object Date]",N="[object Function]",$="[object Number]",_="[object Object]",j="[object RegExp]",E="[object String]",S={};
S[N]=!1,S[w]=S[C]=S[k]=S[T]=S[$]=S[_]=S[j]=S[E]=!0;var A={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},D={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},L=t();
"function"==typeof define&&"object"==typeof define.amd&&define.amd?(e._=L,define(function(){return L
})):r&&!r.nodeType?i?(i.exports=L)._=L:r._=L:e._=L}(this);var MestestsPasser,__bind=function(e,t){return function(){return e.apply(t,arguments)
}};MestestsPasser=function(){function e(){this.retrieveUserAnswer=__bind(this.retrieveUserAnswer,this),this.solutionsReceived=__bind(this.solutionsReceived,this),this.handlerSubmitQuestionnaire=__bind(this.handlerSubmitQuestionnaire,this),this.handleUserAnswer=__bind(this.handleUserAnswer,this),this.handlerClickOnNavButton=__bind(this.handlerClickOnNavButton,this),this.handlerClickOnLi=__bind(this.handlerClickOnLi,this);
var e;this.Qaire=window.jsp.qaire,this.aAlineas=window.jsp.aAlineas,this.aContexts=window.jsp.aContexts,null===this.Qaire.submited_data_json&&(e=_.times(JSON.parse(this.Qaire.questionAlineas_json).length,function(){return 0
}),this.Qaire.submited_data_json=JSON.stringify(e))}return e.Qaire=null,e.prototype.go=function(){return this.renderLis(),$(".passer .qtabctn").on("click","li",this.handlerClickOnLi),$(".passer .navbuttons").on("click","button",this.handlerClickOnNavButton),$(".passer .qbodyctn").on("click","button.actionsubmit",this.handlerSubmitQuestionnaire),$(".passer .qtabctn li").first().trigger("click")
},e.prototype.renderLis=function(){var e,t,n=this;return t=$(".passer .qtabctn ul"),t.empty(),_.forEach(JSON.parse(this.Qaire.questionAlineas_json),function(e,r){var i,o,a,s;
return a="result",null!=n.Qaire.solution_json&&(a="result-wrong",i=JSON.parse(n.Qaire.submited_data_json)[r],s=JSON.parse(n.Qaire.solution_json)[r],i===s&&(a="result-right")),o="<li class='"+a+"' data-alineaid='"+e+"' data-num='"+r+"'>"+(r+1)+"</li>",t.append($(o))
}),e="<li data-num='#'>#</li>",t.append($(e))},e.prototype.handlerClickOnLi=function(e){var t,n,r,i,o,a,s,u,l,c,f,p;
return this.handleUserAnswer(),a=$(e.currentTarget),n=a.data("alineaid"),l=$(".passer .qbodyctn"),l.empty(),a.siblings().removeClass("selected"),a.addClass("selected"),$(".passer .navbuttons button").removeClass("disabled"),0===a.prev().length&&$(".passer .navbuttons button.actionprev").addClass("disabled"),0===a.next().length&&$(".passer .navbuttons button.actionnext").addClass("disabled"),null!=n?(t=this.aAlineas[n],r=this.aContexts[t.question_id],s=a.data("num"),p=_.template($("#tplqContext").html().trim()),o=p({title:r.title,body:r.context}),l.append(o),p=_.template($("#tplqAlinea").html().trim()),o=p({body:t.body}),l.append(o),c=l.find(".alineaanswers"),p=_.template($("#tplqAlineaAnswer").html().trim()),f=JSON.parse(this.Qaire.submited_data_json)[s],u=this.Qaire.solution_json,null!==u&&(u=JSON.parse(u)[s]),i=1,_.forEach(JSON.parse(t.answers),function(e,t){var n,r;
return n="",f&i&&(n="checked"),r="",null!==u&&u&i&&(r="checked"),i<<=1,o=p({body:e,letter:String.fromCharCode(65+t),checked:n,solution:u,checkedSol:r}),c.append(o)
})):null===this.Qaire.score?(p=_.template($("#tplqRecapConfirm").html().trim()),o=p(this.Qaire),l.append(o)):(p=_.template($("#tplqResult").html().trim()),o=p(this.Qaire),l.append(o))
},e.prototype.handlerClickOnNavButton=function(e){var t,n;return t=$(e.currentTarget),n=$(".passer .qtabctn li.selected"),t.hasClass("actionnext")?n.next().trigger("click"):t.hasClass("actionprev")?n.prev().trigger("click"):void 0
},e.prototype.handleUserAnswer=function(){var e,t,n;return t=this.retrieveUserAnswer(),null===t||(e=JSON.parse(this.Qaire.submited_data_json),e[t.num]=t.val,e=JSON.stringify(e),_.isEqual(e,this.Qaire.submited_data_json))?void 0:(this.Qaire.submited_data_json=e,n=window.jsp.aUrls.thistst,$.ajax({url:n,method:"POST",data:{_method:"PUT",values:e}}).fail(function(){return alert("Erreur lors de l'enregistrement")
}))},e.prototype.handlerSubmitQuestionnaire=function(){var e,t,n=this;return e=this.Qaire.submited_data_json,t=window.jsp.aUrls.thistst,$.ajax({url:t,method:"POST",data:{_method:"POST",values:e}}).fail(function(){return alert("Erreur lors de l'enregistrement")
}).done(function(e,t,r){return 200!==r.status||"application/json"!==r.getResponseHeader("content-type").substr(0,16)?(alert("Le serveur n'a pas pu enregistrer le questionnaire"),void 0):(n.Qaire=JSON.parse(r.responseText),n.solutionsReceived())
})},e.prototype.solutionsReceived=function(){return this.renderLis(),$(".qtabctn li[data-num=#]").trigger("click")
},e.prototype.retrieveUserAnswer=function(){var e,t,n,r,i;return r=$(".passer .qtabctn li.selected"),t=r.data("num"),null==t?null:(e=$(".passer .alineaanswers").find(".letter input.etu[type=checkbox]"),n=1,i=0,_.each(e,function(e){return $(e).prop("checked")&&(i+=n),n<<=1
}),{num:t,val:i})},e}();