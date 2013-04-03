(function(t){"function"==typeof define?define(t):"function"==typeof YUI?YUI.add("es5",t):t()
})(function(){function t(){}function e(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t
}function n(t){var e=typeof t;return null===t||"undefined"===e||"boolean"===e||"number"===e||"string"===e
}function r(t){var e,r,i;if(n(t))return t;if(r=t.valueOf,"function"==typeof r&&(e=r.call(t),n(e)))return e;
if(i=t.toString,"function"==typeof i&&(e=i.call(t),n(e)))return e;throw new TypeError
}Function.prototype.bind||(Function.prototype.bind=function(e){var n=this;if("function"!=typeof n)throw new TypeError("Function.prototype.bind called on incompatible "+n);
var r=h.call(arguments,1),i=function(){if(this instanceof i){var t=n.apply(this,r.concat(h.call(arguments)));
return Object(t)===t?t:this}return n.apply(e,r.concat(h.call(arguments)))};return n.prototype&&(t.prototype=n.prototype,i.prototype=new t,t.prototype=null),i
});var i,o,s,a,u,l=Function.prototype.call,c=Array.prototype,f=Object.prototype,h=c.slice,p=l.bind(f.toString),d=l.bind(f.hasOwnProperty);
if((u=d(f,"__defineGetter__"))&&(i=l.bind(f.__defineGetter__),o=l.bind(f.__defineSetter__),s=l.bind(f.__lookupGetter__),a=l.bind(f.__lookupSetter__)),2!=[1,2].splice(0).length){var g=Array.prototype.splice;
Array.prototype.splice=function(t,e){return arguments.length?g.apply(this,[void 0===t?0:t,void 0===e?this.length-t:e].concat(h.call(arguments,2))):[]
}}if(1!=[].unshift(0)){var m=Array.prototype.unshift;Array.prototype.unshift=function(){return m.apply(this,arguments),this.length
}}Array.isArray||(Array.isArray=function(t){return"[object Array]"==p(t)});var v=Object("a"),y="a"!=v[0]||!(0 in v);
if(Array.prototype.forEach||(Array.prototype.forEach=function(t){var e=A(this),n=y&&"[object String]"==p(this)?this.split(""):e,r=arguments[1],i=-1,o=n.length>>>0;
if("[object Function]"!=p(t))throw new TypeError;for(;o>++i;)i in n&&t.call(r,n[i],i,e)
}),Array.prototype.map||(Array.prototype.map=function(t){var e=A(this),n=y&&"[object String]"==p(this)?this.split(""):e,r=n.length>>>0,i=Array(r),o=arguments[1];
if("[object Function]"!=p(t))throw new TypeError(t+" is not a function");for(var s=0;r>s;s++)s in n&&(i[s]=t.call(o,n[s],s,e));
return i}),Array.prototype.filter||(Array.prototype.filter=function(t){var e,n=A(this),r=y&&"[object String]"==p(this)?this.split(""):n,i=r.length>>>0,o=[],s=arguments[1];
if("[object Function]"!=p(t))throw new TypeError(t+" is not a function");for(var a=0;i>a;a++)a in r&&(e=r[a],t.call(s,e,a,n)&&o.push(e));
return o}),Array.prototype.every||(Array.prototype.every=function(t){var e=A(this),n=y&&"[object String]"==p(this)?this.split(""):e,r=n.length>>>0,i=arguments[1];
if("[object Function]"!=p(t))throw new TypeError(t+" is not a function");for(var o=0;r>o;o++)if(o in n&&!t.call(i,n[o],o,e))return!1;
return!0}),Array.prototype.some||(Array.prototype.some=function(t){var e=A(this),n=y&&"[object String]"==p(this)?this.split(""):e,r=n.length>>>0,i=arguments[1];
if("[object Function]"!=p(t))throw new TypeError(t+" is not a function");for(var o=0;r>o;o++)if(o in n&&t.call(i,n[o],o,e))return!0;
return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=A(this),n=y&&"[object String]"==p(this)?this.split(""):e,r=n.length>>>0;
if("[object Function]"!=p(t))throw new TypeError(t+" is not a function");if(!r&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");
var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o++];
break}if(++o>=r)throw new TypeError("reduce of empty array with no initial value")
}for(;r>o;o++)o in n&&(i=t.call(void 0,i,n[o],o,e));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=A(this),n=y&&"[object String]"==p(this)?this.split(""):e,r=n.length>>>0;
if("[object Function]"!=p(t))throw new TypeError(t+" is not a function");if(!r&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");
var i,o=r-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o--];
break}if(0>--o)throw new TypeError("reduceRight of empty array with no initial value")
}do o in this&&(i=t.call(void 0,i,n[o],o,e));while(o--);return i}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(t){var n=y&&"[object String]"==p(this)?this.split(""):A(this),r=n.length>>>0;
if(!r)return-1;var i=0;for(arguments.length>1&&(i=e(arguments[1])),i=i>=0?i:Math.max(0,r+i);r>i;i++)if(i in n&&n[i]===t)return i;
return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(t){var n=y&&"[object String]"==p(this)?this.split(""):A(this),r=n.length>>>0;
if(!r)return-1;var i=r-1;for(arguments.length>1&&(i=Math.min(i,e(arguments[1]))),i=i>=0?i:r-Math.abs(i);i>=0;i--)if(i in n&&t===n[i])return i;
return-1}),!Object.keys){var b=!0,x=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],w=x.length;
for(var C in{toString:null})b=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");
var e=[];for(var n in t)d(t,n)&&e.push(n);if(b)for(var r=0,i=w;i>r;r++){var o=x[r];
d(t,o)&&e.push(o)}return e}}var _=-621987552e5,k="-000001";Date.prototype.toISOString&&-1!==new Date(_).toISOString().indexOf(k)||(Date.prototype.toISOString=function(){var t,e,n,r,i;
if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");
for(r=this.getUTCFullYear(),i=this.getUTCMonth(),r+=Math.floor(i/12),i=(i%12+12)%12,t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(0>r?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(r>=0&&9999>=r?-4:-6),e=t.length;e--;)n=t[e],10>n&&(t[e]="0"+n);
return r+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"
});var T=!1;try{T=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(_).toJSON().indexOf(k)&&Date.prototype.toJSON.call({toISOString:function(){return!0
}})}catch(j){}if(T||(Date.prototype.toJSON=function(){var t,e=Object(this),n=r(e);
if("number"==typeof n&&!isFinite(n))return null;if(t=e.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");
return t.call(e)}),Date=function(t){function e(n,r,i,o,s,a,u){var l=arguments.length;
if(this instanceof t){var c=1==l&&n+""===n?new t(e.parse(n)):l>=7?new t(n,r,i,o,s,a,u):l>=6?new t(n,r,i,o,s,a):l>=5?new t(n,r,i,o,s):l>=4?new t(n,r,i,o):l>=3?new t(n,r,i):l>=2?new t(n,r):l>=1?new t(n):new t;
return c.constructor=e,c}return t.apply(this,arguments)}function n(t,e){var n=e>1?1:0;
return i[e]+Math.floor((t-1969+n)/4)-Math.floor((t-1901+n)/100)+Math.floor((t-1601+n)/400)+365*(t-1970)
}var r=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),i=[0,31,59,90,120,151,181,212,243,273,304,334,365];
for(var o in t)e[o]=t[o];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var i=r.exec(e);
if(i){var o,s=Number(i[1]),a=Number(i[2]||1)-1,u=Number(i[3]||1)-1,l=Number(i[4]||0),c=Number(i[5]||0),f=Number(i[6]||0),h=Number(i[7]||0),p=!i[4]||i[8]?0:Number(new t(1970,0)),d="-"===i[9]?1:-1,g=Number(i[10]||0),m=Number(i[11]||0);
return(c>0||f>0||h>0?24:25)>l&&60>c&&60>f&&1e3>h&&a>-1&&12>a&&24>g&&60>m&&u>-1&&n(s,a+1)-n(s,a)>u&&(o=60*(24*(n(s,a)+u)+l+g*d),o=1e3*(60*(o+c+m*d)+f)+h+p,o>=-864e13&&864e13>=o)?o:0/0
}return t.parse.apply(this,arguments)},e}(Date),Date.now||(Date.now=function(){return(new Date).getTime()
}),"0".split(void 0,0).length){var E=String.prototype.split;String.prototype.split=function(t,e){return void 0===t&&0===e?[]:E.apply(this,arguments)
}}if("".substr&&"b"!=="0b".substr(-1)){var N=String.prototype.substr;String.prototype.substr=function(t,e){return N.call(this,0>t?0>(t=this.length+t)?0:t:t,e)
}}var S="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||S.trim()){S="["+S+"]";
var $=RegExp("^"+S+S+"*"),O=RegExp(S+S+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");
return(this+"").replace($,"").replace(O,"")}}var A=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");
return Object(t)}}),function(t){"function"==typeof define?define(t):"function"==typeof YUI?YUI.add("es5-sham",t):t()
}(function(){function t(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t
}catch(e){}}var e,n,r,i,o,s=Function.prototype.call,a=Object.prototype,u=s.bind(a.hasOwnProperty);
if((o=u(a,"__defineGetter__"))&&(e=s.bind(a.__defineGetter__),n=s.bind(a.__defineSetter__),r=s.bind(a.__lookupGetter__),i=s.bind(a.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:a)
}),!Object.getOwnPropertyDescriptor){var l="Object.getOwnPropertyDescriptor called on a non-object: ";
Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(l+t);
if(u(t,e)){var n={enumerable:!0,configurable:!0};if(o){var s=t.__proto__;t.__proto__=a;
var c=r(t,e),f=i(t,e);if(t.__proto__=s,c||f)return c&&(n.get=c),f&&(n.set=f),n}return n.value=t[e],n
}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)
}),!Object.create){var c,f=null===Object.prototype.__proto__;c=f||"undefined"==typeof document?function(){return{__proto__:null}
}:function(){function t(){}var e=document.createElement("iframe"),n=document.body||document.documentElement;
e.style.display="none",n.appendChild(e),e.src="javascript:";var r=e.contentWindow.Object.prototype;
return n.removeChild(e),e=null,delete r.constructor,delete r.hasOwnProperty,delete r.propertyIsEnumerable,delete r.isPrototypeOf,delete r.toLocaleString,delete r.toString,delete r.valueOf,r.__proto__=null,t.prototype=r,function(){return new t
}}(),Object.create=function(t,e){function n(){}var r;if(null===t)r=c();else{if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object prototype may only be an Object or null");
n.prototype=t,r=new n,r.__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r
}}if(Object.defineProperty){var h=t({}),p="undefined"==typeof document||t(document.createElement("div"));
if(!h||!p)var d=Object.defineProperty,g=Object.defineProperties}if(!Object.defineProperty||d){var m="Property description must be an object: ",v="Object.defineProperty called on non-object: ",y="getters & setters can not be defined on this javascript engine";
Object.defineProperty=function(t,s,l){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(v+t);
if("object"!=typeof l&&"function"!=typeof l||null===l)throw new TypeError(m+l);if(d)try{return d.call(Object,t,s,l)
}catch(c){}if(u(l,"value"))if(o&&(r(t,s)||i(t,s))){var f=t.__proto__;t.__proto__=a,delete t[s],t[s]=l.value,t.__proto__=f
}else t[s]=l.value;else{if(!o)throw new TypeError(y);u(l,"get")&&e(t,s,l.get),u(l,"set")&&n(t,s,l.set)
}return t}}(!Object.defineProperties||g)&&(Object.defineProperties=function(t,e){if(g)try{return g.call(Object,t,e)
}catch(n){}for(var r in e)u(e,r)&&"__proto__"!=r&&Object.defineProperty(t,r,e[r]);
return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t
});try{Object.freeze(function(){})}catch(b){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)
}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){return t
}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1
}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError;
for(var e="";u(t,e);)e+="?";t[e]=!0;var n=u(t,e);return delete t[e],n})});var main=function(){"use strict";
var t="undefined"==typeof global?window:global,e=t.isFinite,n=function(t){for(var e=1,n=2;t>=n;n++)e*=n;
return e},r=function(t,e){Object.keys(e).forEach(function(n){var r=e[n];t[n]||Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:!0,value:r})
})};r(String.prototype,{repeat:function(t){if(1>t)return"";if(t%2)return this.repeat(t-1)+this;
var e=this.repeat(t/2);return e+e},startsWith:function(t){var e=arguments[1],n=""+this,r=void 0===e?0:Number.toInteger(e),i=n.length,o=Math.min(Math.max(r,0),i),s=t.length;
if(s+o>i)return!1;var a="".indexOf.call(n,t,o);return a===o},endsWith:function(t){var e=arguments[1],n=""+this,r=n.length,i=void 0===e?r:Number.toInteger(e),o=Math.min(Math.max(i,0),r),s=t.length,a=o-s;
if(0>a)return!1;var u="".indexOf.call(n,t,a);return u===a},contains:function(t){var e=arguments[1];
return-1!=="".indexOf.call(this,t,e)}}),r(Array,{from:function(t){for(var e=Object(t),n=[],r=0,i=e.length>>>0;i>r;r++)r in e&&(n[r]=e[r]);
return n},of:function(){return Array.prototype.slice.call(arguments)}}),r(Number,{MAX_INTEGER:9007199254740992,EPSILON:2.220446049250313e-16,parseInt:t.parseInt,parseFloat:t.parseFloat,isFinite:function(t){return"number"==typeof t&&e(t)
},isInteger:function(t){return Number.isFinite(t)&&t>=-9007199254740992&&Number.MAX_INTEGER>=t&&Math.floor(t)===t
},isNaN:function(t){return Object.is(t,0/0)},toInteger:function(t){var e=+t;return Object.is(e,0/0)?0:0!==e&&Number.isFinite(e)?Math.sign(e)*Math.floor(Math.abs(e)):e
}}),r(Number.prototype,{clz:function(){var t=+this;return t&&Number.isFinite(t)?(t=0>t?Math.ceil(t):Math.floor(t),t-=4294967296*Math.floor(t/4294967296),32-t.toString(2).length):32
}}),r(Object,{getOwnPropertyDescriptors:function(t){var e={};return Object.getOwnPropertyNames(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)
}),e},getPropertyDescriptor:function(t,e){for(var n=Object.getOwnPropertyDescriptor(t,e),r=Object.getPrototypeOf(t);void 0===n&&null!==r;)n=Object.getOwnPropertyDescriptor(r,e),r=Object.getPrototypeOf(r);
return n},getPropertyNames:function(t){for(var e=Object.getOwnPropertyNames(t),n=Object.getPrototypeOf(t),r=function(t){-1===e.indexOf(t)&&e.push(t)
};null!==n;)Object.getOwnPropertyNames(n).forEach(r),n=Object.getPrototypeOf(n);return e
},is:function(t,e){return t===e?0===t?1/t===1/e:!0:t!==t&&e!==e},isnt:function(t,e){return!Object.is(t,e)
}}),r(Math,{acosh:function(t){return Math.log(t+Math.sqrt(t*t-1))},asinh:function(t){return Math.log(t+Math.sqrt(t*t+1))
},atanh:function(t){return.5*Math.log((1+t)/(1-t))},cosh:function(t){return 0>t&&(t=-t),t>21?Math.exp(t)/2:(Math.exp(t)+Math.exp(-t))/2
},expm1:function(t){for(var e=0,r=50,i=1;r>i;i++)e+=Math.pow(t,i)/n(i);return e},hypot:function(t,e){return Math.sqrt(t*t+e*e)||0
},log2:function(t){return Math.log(t)*(1/Math.LN2)},log10:function(t){return Math.log(t)*(1/Math.LN10)
},log1p:function(t){var e=0,n=50;if(-1>=t)return-1/0;if(0>t||t>1)return Math.log(1+t);
for(var r=1;n>r;r++)0===r%2?e-=Math.pow(t,r)/r:e+=Math.pow(t,r)/r;return e},sign:function(t){var e=+t;
return 0===e?e:Object.is(e,0/0)?e:0>e?-1:1},sinh:function(t){return(Math.exp(t)-Math.exp(-t))/2
},tanh:function(t){return(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))},trunc:function(t){return~~t
}}),r(t,{Map:function(){function t(){return this instanceof t?(r(this,{_keys:[],_values:[],_size:0}),Object.defineProperty(this,"size",{configurable:!0,enumerable:!1,get:function(){return this._size
}.bind(this)}),void 0):new t}var e=function(t,e){for(var n=0,r=t.length;r>n;n++)if(Object.is(t[n],e))return n;
return-1};return r(t.prototype,{get:function(t){var n=e(this._keys,t);return 0>n?void 0:this._values[n]
},has:function(t){return e(this._keys,t)>=0},set:function(t,n){var r=this._keys,i=this._values,o=e(r,t);
0>o&&(o=r.length),r[o]=t,i[o]=n,this._size+=1},"delete":function(t){var n=this._keys,r=this._values,i=e(n,t);
return 0>i?!1:(n.splice(i,1),r.splice(i,1),this._size-=1,!0)},keys:function(){return this._keys
},values:function(){return this._values}}),t}(),Set:function(){function t(){return this instanceof t?(r(this,{"[[SetData]]":new Map}),Object.defineProperty(this,"size",{configurable:!0,enumerable:!1,get:function(){return this["[[SetData]]"].size
}.bind(this)}),void 0):new t}return r(t.prototype,{has:function(t){return this["[[SetData]]"].has(t)
},add:function(t){this["[[SetData]]"].set(t,!0)},"delete":function(t){return this["[[SetData]]"]["delete"](t)
},clear:function(){Object.defineProperty(this,"[[SetData]]",{configurable:!0,enumerable:!1,writable:!0,value:new Map})
}}),t}()})};"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(main):main(),function(t,e){function n(t){var e=t.length,n=ue.type(t);
return ue.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||"function"!==n&&(0===e||"number"==typeof e&&e>0&&e-1 in t)
}function r(t){var e=_e[t]={};return ue.each(t.match(ce)||[],function(t,n){e[n]=!0
}),e}function i(t,n,r,i){if(ue.acceptData(t)){var o,s,a=ue.expando,u="string"==typeof n,l=t.nodeType,c=l?ue.cache:t,f=l?t[a]:t[a]&&a;
if(f&&c[f]&&(i||c[f].data)||!u||r!==e)return f||(l?t[a]=f=Z.pop()||ue.guid++:f=a),c[f]||(c[f]={},l||(c[f].toJSON=ue.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=ue.extend(c[f],n):c[f].data=ue.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==e&&(o[ue.camelCase(n)]=r),u?(s=o[n],null==s&&(s=o[ue.camelCase(n)])):s=o,s
}}function o(t,e,n){if(ue.acceptData(t)){var r,i,o,s=t.nodeType,u=s?ue.cache:t,l=s?t[ue.expando]:ue.expando;
if(u[l]){if(e&&(o=n?u[l]:u[l].data)){ue.isArray(e)?e=e.concat(ue.map(e,ue.camelCase)):e in o?e=[e]:(e=ue.camelCase(e),e=e in o?[e]:e.split(" "));
for(r=0,i=e.length;i>r;r++)delete o[e[r]];if(!(n?a:ue.isEmptyObject)(o))return}(n||(delete u[l].data,a(u[l])))&&(s?ue.cleanData([t],!0):ue.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)
}}}function s(t,n,r){if(r===e&&1===t.nodeType){var i="data-"+n.replace(Te,"-$1").toLowerCase();
if(r=t.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:ke.test(r)?ue.parseJSON(r):r
}catch(o){}ue.data(t,n,r)}else r=e}return r}function a(t){var e;for(e in t)if(("data"!==e||!ue.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;
return!0}function u(){return!0}function l(){return!1}function c(t,e){do t=t[e];while(t&&1!==t.nodeType);
return t}function f(t,e,n){if(e=e||0,ue.isFunction(e))return ue.grep(t,function(t,r){var i=!!e.call(t,r,t);
return i===n});if(e.nodeType)return ue.grep(t,function(t){return t===e===n});if("string"==typeof e){var r=ue.grep(t,function(t){return 1===t.nodeType
});if(We.test(e))return ue.filter(e,r,!n);e=ue.filter(e,r)}return ue.grep(t,function(t){return ue.inArray(t,e)>=0===n
})}function h(t){var e=Xe.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());
return n}function p(t,e){return t.getElementsByTagName(e)[0]||t.appendChild(t.ownerDocument.createElement(e))
}function d(t){var e=t.getAttributeNode("type");return t.type=(e&&e.specified)+"/"+t.type,t
}function g(t){var e=on.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t
}function m(t,e){for(var n,r=0;null!=(n=t[r]);r++)ue._data(n,"globalEval",!e||ue._data(e[r],"globalEval"))
}function v(t,e){if(1===e.nodeType&&ue.hasData(t)){var n,r,i,o=ue._data(t),s=ue._data(e,o),a=o.events;
if(a){delete s.handle,s.events={};for(n in a)for(r=0,i=a[n].length;i>r;r++)ue.event.add(e,n,a[n][r])
}s.data&&(s.data=ue.extend({},s.data))}}function y(t,e){var n,r,i;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!ue.support.noCloneEvent&&e[ue.expando]){i=ue._data(e);
for(r in i.events)ue.removeEvent(e,r,i.handle);e.removeAttribute(ue.expando)}"script"===n&&e.text!==t.text?(d(e).text=t.text,g(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),ue.support.html5Clone&&t.innerHTML&&!ue.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&en.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)
}}function b(t,n){var r,i,o=0,s=typeof t.getElementsByTagName!==J?t.getElementsByTagName(n||"*"):typeof t.querySelectorAll!==J?t.querySelectorAll(n||"*"):e;
if(!s)for(s=[],r=t.childNodes||t;null!=(i=r[o]);o++)!n||ue.nodeName(i,n)?s.push(i):ue.merge(s,b(i,n));
return n===e||n&&ue.nodeName(t,n)?ue.merge([t],s):s}function x(t){en.test(t.type)&&(t.defaultChecked=t.checked)
}function w(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),r=e,i=Tn.length;i--;)if(e=Tn[i]+n,e in t)return e;
return r}function C(t,e){return t=e||t,"none"===ue.css(t,"display")||!ue.contains(t.ownerDocument,t)
}function _(t,e){for(var n,r,i,o=[],s=0,a=t.length;a>s;s++)r=t[s],r.style&&(o[s]=ue._data(r,"olddisplay"),n=r.style.display,e?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&C(r)&&(o[s]=ue._data(r,"olddisplay",E(r.nodeName)))):o[s]||(i=C(r),(n&&"none"!==n||!i)&&ue._data(r,"olddisplay",i?n:ue.css(r,"display"))));
for(s=0;a>s;s++)r=t[s],r.style&&(e&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=e?o[s]||"":"none"));
return t}function k(t,e,n){var r=yn.exec(e);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):e
}function T(t,e,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===e?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=ue.css(t,n+kn[o],!0,i)),r?("content"===n&&(s-=ue.css(t,"padding"+kn[o],!0,i)),"margin"!==n&&(s-=ue.css(t,"border"+kn[o]+"Width",!0,i))):(s+=ue.css(t,"padding"+kn[o],!0,i),"padding"!==n&&(s+=ue.css(t,"border"+kn[o]+"Width",!0,i)));
return s}function j(t,e,n){var r=!0,i="width"===e?t.offsetWidth:t.offsetHeight,o=fn(t),s=ue.support.boxSizing&&"border-box"===ue.css(t,"boxSizing",!1,o);
if(0>=i||null==i){if(i=hn(t,e,o),(0>i||null==i)&&(i=t.style[e]),bn.test(i))return i;
r=s&&(ue.support.boxSizingReliable||i===t.style[e]),i=parseFloat(i)||0}return i+T(t,e,n||(s?"border":"content"),r,o)+"px"
}function E(t){var e=Q,n=wn[t];return n||(n=N(t,e),"none"!==n&&n||(cn=(cn||ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(e.documentElement),e=(cn[0].contentWindow||cn[0].contentDocument).document,e.write("<!doctype html><html><body>"),e.close(),n=N(t,e),cn.detach()),wn[t]=n),n
}function N(t,e){var n=ue(e.createElement(t)).appendTo(e.body),r=ue.css(n[0],"display");
return n.remove(),r}function S(t,e,n,r){var i;if(ue.isArray(e))ue.each(e,function(e,i){n||En.test(t)?r(t,i):S(t+"["+("object"==typeof i?e:"")+"]",i,n,r)
});else if(n||"object"!==ue.type(e))r(t,e);else for(i in e)S(t+"["+i+"]",e[i],n,r)
}function $(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(ce)||[];
if(ue.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)
}}function O(t,n,r,i){function o(u){var l;return s[u]=!0,ue.each(t[u]||[],function(t,u){var c=u(n,r,i);
return"string"!=typeof c||a||s[c]?a?!(l=c):e:(n.dataTypes.unshift(c),o(c),!1)}),l
}var s={},a=t===zn;return o(n.dataTypes[0])||!s["*"]&&o("*")}function A(t,n){var r,i,o=ue.ajaxSettings.flatOptions||{};
for(i in n)n[i]!==e&&((o[i]?t:r||(r={}))[i]=n[i]);return r&&ue.extend(!0,t,r),t}function D(t,n,r){var i,o,s,a,u=t.contents,l=t.dataTypes,c=t.responseFields;
for(a in c)a in r&&(n[c[a]]=r[a]);for(;"*"===l[0];)l.shift(),o===e&&(o=t.mimeType||n.getResponseHeader("Content-Type"));
if(o)for(a in u)if(u[a]&&u[a].test(o)){l.unshift(a);break}if(l[0]in r)s=l[0];else{for(a in r){if(!l[0]||t.converters[a+" "+l[0]]){s=a;
break}i||(i=a)}s=s||i}return s?(s!==l[0]&&l.unshift(s),r[s]):e}function M(t,e){var n,r,i,o,s={},a=0,u=t.dataTypes.slice(),l=u[0];
if(t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u[1])for(i in t.converters)s[i.toLowerCase()]=t.converters[i];
for(;r=u[++a];)if("*"!==r){if("*"!==l&&l!==r){if(i=s[l+" "+r]||s["* "+r],!i)for(n in s)if(o=n.split(" "),o[1]===r&&(i=s[l+" "+o[0]]||s["* "+o[0]])){i===!0?i=s[n]:s[n]!==!0&&(r=o[0],u.splice(a--,0,r));
break}if(i!==!0)if(i&&t["throws"])e=i(e);else try{e=i(e)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}
}}l=r}return{state:"success",data:e}}function P(){try{return new t.XMLHttpRequest
}catch(e){}}function H(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function L(){return setTimeout(function(){Zn=e
}),Zn=ue.now()}function F(t,e){ue.each(e,function(e,n){for(var r=(or[e]||[]).concat(or["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(t,e,n))return
})}function I(t,e,n){var r,i,o=0,s=ir.length,a=ue.Deferred().always(function(){delete u.elem
}),u=function(){if(i)return!1;for(var e=Zn||L(),n=Math.max(0,l.startTime+l.duration-e),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);
return a.notifyWith(t,[l,o,n]),1>o&&u?n:(a.resolveWith(t,[l]),!1)},l=a.promise({elem:t,props:ue.extend({},e),opts:ue.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Zn||L(),duration:n.duration,tweens:[],createTween:function(e,n){var r=ue.Tween(t,l.opts,e,n,l.opts.specialEasing[e]||l.opts.easing);
return l.tweens.push(r),r},stop:function(e){var n=0,r=e?l.tweens.length:0;if(i)return this;
for(i=!0;r>n;n++)l.tweens[n].run(1);return e?a.resolveWith(t,[l,e]):a.rejectWith(t,[l,e]),this
}}),c=l.props;for(q(c,l.opts.specialEasing);s>o;o++)if(r=ir[o].call(l,t,c,l.opts))return r;
return F(l,c),ue.isFunction(l.opts.start)&&l.opts.start.call(t,l),ue.fx.timer(ue.extend(u,{elem:t,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
}function q(t,e){var n,r,i,o,s;for(i in t)if(r=ue.camelCase(i),o=e[r],n=t[i],ue.isArray(n)&&(o=n[1],n=t[i]=n[0]),i!==r&&(t[r]=n,delete t[i]),s=ue.cssHooks[r],s&&"expand"in s){n=s.expand(n),delete t[r];
for(i in n)i in t||(t[i]=n[i],e[i]=o)}else e[r]=o}function R(t,e,n){var r,i,o,s,a,u,l,c,f,h=this,p=t.style,d={},g=[],m=t.nodeType&&C(t);
n.queue||(c=ue._queueHooks(t,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()
}),c.unqueued++,h.always(function(){h.always(function(){c.unqueued--,ue.queue(t,"fx").length||c.empty.fire()
})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===ue.css(t,"display")&&"none"===ue.css(t,"float")&&(ue.support.inlineBlockNeedsLayout&&"inline"!==E(t.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",ue.support.shrinkWrapBlocks||h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));for(i in e)if(s=e[i],er.exec(s)){if(delete e[i],u=u||"toggle"===s,s===(m?"hide":"show"))continue;
g.push(i)}if(o=g.length){a=ue._data(t,"fxshow")||ue._data(t,"fxshow",{}),"hidden"in a&&(m=a.hidden),u&&(a.hidden=!m),m?ue(t).show():h.done(function(){ue(t).hide()
}),h.done(function(){var e;ue._removeData(t,"fxshow");for(e in d)ue.style(t,e,d[e])
});for(i=0;o>i;i++)r=g[i],l=h.createTween(r,m?a[r]:0),d[r]=a[r]||ue.style(t,r),r in a||(a[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))
}}function B(t,e,n,r,i){return new B.prototype.init(t,e,n,r,i)}function W(t,e){var n,r={height:t},i=0;
for(e=e?1:0;4>i;i+=2-e)n=kn[i],r["margin"+n]=r["padding"+n]=t;return e&&(r.opacity=r.width=t),r
}function z(t){return ue.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1
}var U,X,J=typeof e,Q=t.document,G=t.location,V=t.jQuery,Y=t.$,K={},Z=[],te="1.9.1",ee=Z.concat,ne=Z.push,re=Z.slice,ie=Z.indexOf,oe=K.toString,se=K.hasOwnProperty,ae=te.trim,ue=function(t,e){return new ue.fn.init(t,e,X)
},le=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ce=/\S+/g,fe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,he=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,de=/^[\],:{}\s]*$/,ge=/(?:^|:|,)(?:\s*\[)+/g,me=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,ve=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,ye=/^-ms-/,be=/-([\da-z])/gi,xe=function(t,e){return e.toUpperCase()
},we=function(t){(Q.addEventListener||"load"===t.type||"complete"===Q.readyState)&&(Ce(),ue.ready())
},Ce=function(){Q.addEventListener?(Q.removeEventListener("DOMContentLoaded",we,!1),t.removeEventListener("load",we,!1)):(Q.detachEvent("onreadystatechange",we),t.detachEvent("onload",we))
};ue.fn=ue.prototype={jquery:te,constructor:ue,init:function(t,n,r){var i,o;if(!t)return this;
if("string"==typeof t){if(i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:he.exec(t),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(t):this.constructor(n).find(t);
if(i[1]){if(n=n instanceof ue?n[0]:n,ue.merge(this,ue.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:Q,!0)),pe.test(i[1])&&ue.isPlainObject(n))for(i in n)ue.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);
return this}if(o=Q.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(t);
this.length=1,this[0]=o}return this.context=Q,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):ue.isFunction(t)?r.ready(t):(t.selector!==e&&(this.selector=t.selector,this.context=t.context),ue.makeArray(t,this))
},selector:"",length:0,size:function(){return this.length},toArray:function(){return re.call(this)
},get:function(t){return null==t?this.toArray():0>t?this[this.length+t]:this[t]},pushStack:function(t){var e=ue.merge(this.constructor(),t);
return e.prevObject=this,e.context=this.context,e},each:function(t,e){return ue.each(this,t,e)
},ready:function(t){return ue.ready.promise().done(t),this},slice:function(){return this.pushStack(re.apply(this,arguments))
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);
return this.pushStack(n>=0&&e>n?[this[n]]:[])},map:function(t){return this.pushStack(ue.map(this,function(e,n){return t.call(e,n,e)
}))},end:function(){return this.prevObject||this.constructor(null)},push:ne,sort:[].sort,splice:[].splice},ue.fn.init.prototype=ue.fn,ue.extend=ue.fn.extend=function(){var t,n,r,i,o,s,a=arguments[0]||{},u=1,l=arguments.length,c=!1;
for("boolean"==typeof a&&(c=a,a=arguments[1]||{},u=2),"object"==typeof a||ue.isFunction(a)||(a={}),l===u&&(a=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)t=a[i],r=o[i],a!==r&&(c&&r&&(ue.isPlainObject(r)||(n=ue.isArray(r)))?(n?(n=!1,s=t&&ue.isArray(t)?t:[]):s=t&&ue.isPlainObject(t)?t:{},a[i]=ue.extend(c,s,r)):r!==e&&(a[i]=r));
return a},ue.extend({noConflict:function(e){return t.$===ue&&(t.$=Y),e&&t.jQuery===ue&&(t.jQuery=V),ue
},isReady:!1,readyWait:1,holdReady:function(t){t?ue.readyWait++:ue.ready(!0)},ready:function(t){if(t===!0?!--ue.readyWait:!ue.isReady){if(!Q.body)return setTimeout(ue.ready);
ue.isReady=!0,t!==!0&&--ue.readyWait>0||(U.resolveWith(Q,[ue]),ue.fn.trigger&&ue(Q).trigger("ready").off("ready"))
}},isFunction:function(t){return"function"===ue.type(t)},isArray:Array.isArray||function(t){return"array"===ue.type(t)
},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)
},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?K[oe.call(t)]||"object":typeof t
},isPlainObject:function(t){if(!t||"object"!==ue.type(t)||t.nodeType||ue.isWindow(t))return!1;
try{if(t.constructor&&!se.call(t,"constructor")&&!se.call(t.constructor.prototype,"isPrototypeOf"))return!1
}catch(n){return!1}var r;for(r in t);return r===e||se.call(t,r)},isEmptyObject:function(t){var e;
for(e in t)return!1;return!0},error:function(t){throw Error(t)},parseHTML:function(t,e,n){if(!t||"string"!=typeof t)return null;
"boolean"==typeof e&&(n=e,e=!1),e=e||Q;var r=pe.exec(t),i=!n&&[];return r?[e.createElement(r[1])]:(r=ue.buildFragment([t],e,i),i&&ue(i).remove(),ue.merge([],r.childNodes))
},parseJSON:function(n){return t.JSON&&t.JSON.parse?t.JSON.parse(n):null===n?n:"string"==typeof n&&(n=ue.trim(n),n&&de.test(n.replace(me,"@").replace(ve,"]").replace(ge,"")))?Function("return "+n)():(ue.error("Invalid JSON: "+n),e)
},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{t.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=e}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||ue.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(e){e&&ue.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)
})(e)},camelCase:function(t){return t.replace(ye,"ms-").replace(be,xe)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()
},each:function(t,e,r){var i,o=0,s=t.length,a=n(t);if(r){if(a)for(;s>o&&(i=e.apply(t[o],r),i!==!1);o++);else for(o in t)if(i=e.apply(t[o],r),i===!1)break
}else if(a)for(;s>o&&(i=e.call(t[o],o,t[o]),i!==!1);o++);else for(o in t)if(i=e.call(t[o],o,t[o]),i===!1)break;
return t},trim:ae&&!ae.call("﻿ ")?function(t){return null==t?"":ae.call(t)}:function(t){return null==t?"":(t+"").replace(fe,"")
},makeArray:function(t,e){var r=e||[];return null!=t&&(n(Object(t))?ue.merge(r,"string"==typeof t?[t]:t):ne.call(r,t)),r
},inArray:function(t,e,n){var r;if(e){if(ie)return ie.call(e,t,n);for(r=e.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in e&&e[n]===t)return n
}return-1},merge:function(t,n){var r=n.length,i=t.length,o=0;if("number"==typeof r)for(;r>o;o++)t[i++]=n[o];
else for(;n[o]!==e;)t[i++]=n[o++];return t.length=i,t},grep:function(t,e,n){var r,i=[],o=0,s=t.length;
for(n=!!n;s>o;o++)r=!!e(t[o],o),n!==r&&i.push(t[o]);return i},map:function(t,e,r){var i,o=0,s=t.length,a=n(t),u=[];
if(a)for(;s>o;o++)i=e(t[o],o,r),null!=i&&(u[u.length]=i);else for(o in t)i=e(t[o],o,r),null!=i&&(u[u.length]=i);
return ee.apply([],u)},guid:1,proxy:function(t,n){var r,i,o;return"string"==typeof n&&(o=t[n],n=t,t=o),ue.isFunction(t)?(r=re.call(arguments,2),i=function(){return t.apply(n||this,r.concat(re.call(arguments)))
},i.guid=t.guid=t.guid||ue.guid++,i):e},access:function(t,n,r,i,o,s,a){var u=0,l=t.length,c=null==r;
if("object"===ue.type(r)){o=!0;for(u in r)ue.access(t,n,u,r[u],!0,s,a)}else if(i!==e&&(o=!0,ue.isFunction(i)||(a=!0),c&&(a?(n.call(t,i),n=null):(c=n,n=function(t,e,n){return c.call(ue(t),n)
})),n))for(;l>u;u++)n(t[u],r,a?i:i.call(t[u],u,n(t[u],r)));return o?t:c?n.call(t):l?n(t[0],r):s
},now:function(){return(new Date).getTime()}}),ue.ready.promise=function(e){if(!U)if(U=ue.Deferred(),"complete"===Q.readyState)setTimeout(ue.ready);
else if(Q.addEventListener)Q.addEventListener("DOMContentLoaded",we,!1),t.addEventListener("load",we,!1);
else{Q.attachEvent("onreadystatechange",we),t.attachEvent("onload",we);var n=!1;try{n=null==t.frameElement&&Q.documentElement
}catch(r){}n&&n.doScroll&&function i(){if(!ue.isReady){try{n.doScroll("left")}catch(t){return setTimeout(i,50)
}Ce(),ue.ready()}}()}return U.promise(e)},ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){K["[object "+e+"]"]=e.toLowerCase()
}),X=ue(Q);var _e={};ue.Callbacks=function(t){t="string"==typeof t?_e[t]||r(t):ue.extend({},t);
var n,i,o,s,a,u,l=[],c=!t.once&&[],f=function(e){for(i=t.memory&&e,o=!0,a=u||0,u=0,s=l.length,n=!0;l&&s>a;a++)if(l[a].apply(e[0],e[1])===!1&&t.stopOnFalse){i=!1;
break}n=!1,l&&(c?c.length&&f(c.shift()):i?l=[]:h.disable())},h={add:function(){if(l){var e=l.length;
(function r(e){ue.each(e,function(e,n){var i=ue.type(n);"function"===i?t.unique&&h.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)
})})(arguments),n?s=l.length:i&&(u=e,f(i))}return this},remove:function(){return l&&ue.each(arguments,function(t,e){for(var r;(r=ue.inArray(e,l,r))>-1;)l.splice(r,1),n&&(s>=r&&s--,a>=r&&a--)
}),this},has:function(t){return t?ue.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],this
},disable:function(){return l=c=i=e,this},disabled:function(){return!l},lock:function(){return c=e,i||h.disable(),this
},locked:function(){return!c},fireWith:function(t,e){return e=e||[],e=[t,e.slice?e.slice():e],!l||o&&!c||(n?c.push(e):f(e)),this
},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!o
}};return h},ue.extend({Deferred:function(t){var e=[["resolve","done",ue.Callbacks("once memory"),"resolved"],["reject","fail",ue.Callbacks("once memory"),"rejected"],["notify","progress",ue.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var t=arguments;
return ue.Deferred(function(n){ue.each(e,function(e,o){var s=o[0],a=ue.isFunction(t[e])&&t[e];
i[o[1]](function(){var t=a&&a.apply(this,arguments);t&&ue.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[t]:arguments)
})}),t=null}).promise()},promise:function(t){return null!=t?ue.extend(t,r):r}},i={};
return r.pipe=r.then,ue.each(e,function(t,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a
},e[1^t][2].disable,e[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=s.fireWith}),r.promise(i),t&&t.call(i,i),i},when:function(t){var e,n,r,i=0,o=re.call(arguments),s=o.length,a=1!==s||t&&ue.isFunction(t.promise)?s:0,u=1===a?t:ue.Deferred(),l=function(t,n,r){return function(i){n[t]=this,r[t]=arguments.length>1?re.call(arguments):i,r===e?u.notifyWith(n,r):--a||u.resolveWith(n,r)
}};if(s>1)for(e=Array(s),n=Array(s),r=Array(s);s>i;i++)o[i]&&ue.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,e)):--a;
return a||u.resolveWith(r,o),u.promise()}}),ue.support=function(){var e,n,r,i,o,s,a,u,l,c,f=Q.createElement("div");
if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],!n||!r||!n.length)return{};
o=Q.createElement("select"),a=o.appendChild(Q.createElement("option")),i=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",e={getSetAttribute:"t"!==f.className,leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!i.value,optSelected:a.selected,enctype:!!Q.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==Q.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===Q.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},i.checked=!0,e.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!a.disabled;
try{delete f.test}catch(h){e.deleteExpando=!1}i=Q.createElement("input"),i.setAttribute("value",""),e.input=""===i.getAttribute("value"),i.value="t",i.setAttribute("type","radio"),e.radioValue="t"===i.value,i.setAttribute("checked","t"),i.setAttribute("name","t"),s=Q.createDocumentFragment(),s.appendChild(i),e.appendChecked=i.checked,e.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){e.noCloneEvent=!1
}),f.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})f.setAttribute(u="on"+c,"t"),e[c+"Bubbles"]=u in t||f.attributes[u].expando===!1;
return f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===f.style.backgroundClip,ue(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=Q.getElementsByTagName("body")[0];
s&&(n=Q.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=f.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",e.reliableHiddenOffsets=l&&0===i[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.boxSizing=4===f.offsetWidth,e.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,t.getComputedStyle&&(e.pixelPosition="1%"!==(t.getComputedStyle(f,null)||{}).top,e.boxSizingReliable="4px"===(t.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(Q.createElement("div")),r.style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",e.reliableMarginRight=!parseFloat((t.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==J&&(f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==f.offsetWidth,e.inlineBlockNeedsLayout&&(s.style.zoom=1)),s.removeChild(n),n=f=i=r=null)
}),n=o=s=a=r=i=null,e}();var ke=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Te=/([A-Z])/g;ue.extend({cache:{},expando:"jQuery"+(te+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(t){return t=t.nodeType?ue.cache[t[ue.expando]]:t[ue.expando],!!t&&!a(t)
},data:function(t,e,n){return i(t,e,n)},removeData:function(t,e){return o(t,e)},_data:function(t,e,n){return i(t,e,n,!0)
},_removeData:function(t,e){return o(t,e,!0)},acceptData:function(t){if(t.nodeType&&1!==t.nodeType&&9!==t.nodeType)return!1;
var e=t.nodeName&&ue.noData[t.nodeName.toLowerCase()];return!e||e!==!0&&t.getAttribute("classid")===e
}}),ue.fn.extend({data:function(t,n){var r,i,o=this[0],a=0,u=null;if(t===e){if(this.length&&(u=ue.data(o),1===o.nodeType&&!ue._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=ue.camelCase(i.slice(5)),s(o,i,u[i]));
ue._data(o,"parsedAttrs",!0)}return u}return"object"==typeof t?this.each(function(){ue.data(this,t)
}):ue.access(this,function(n){return n===e?o?s(o,t,ue.data(o,t)):null:(this.each(function(){ue.data(this,t,n)
}),e)},null,n,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){ue.removeData(this,t)
})}}),ue.extend({queue:function(t,n,r){var i;return t?(n=(n||"fx")+"queue",i=ue._data(t,n),r&&(!i||ue.isArray(r)?i=ue._data(t,n,ue.makeArray(r)):i.push(r)),i||[]):e
},dequeue:function(t,e){e=e||"fx";var n=ue.queue(t,e),r=n.length,i=n.shift(),o=ue._queueHooks(t,e),s=function(){ue.dequeue(t,e)
};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(t,e){var n=e+"queueHooks";return ue._data(t,n)||ue._data(t,n,{empty:ue.Callbacks("once memory").add(function(){ue._removeData(t,e+"queue"),ue._removeData(t,n)
})})}}),ue.fn.extend({queue:function(t,n){var r=2;return"string"!=typeof t&&(n=t,t="fx",r--),r>arguments.length?ue.queue(this[0],t):n===e?this:this.each(function(){var e=ue.queue(this,t,n);
ue._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ue.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ue.dequeue(this,t)
})},delay:function(t,e){return t=ue.fx?ue.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var r=setTimeout(e,t);
n.stop=function(){clearTimeout(r)}})},clearQueue:function(t){return this.queue(t||"fx",[])
},promise:function(t,n){var r,i=1,o=ue.Deferred(),s=this,a=this.length,u=function(){--i||o.resolveWith(s,[s])
};for("string"!=typeof t&&(n=t,t=e),t=t||"fx";a--;)r=ue._data(s[a],t+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));
return u(),o.promise(n)}});var je,Ee,Ne=/[\t\r\n]/g,Se=/\r/g,$e=/^(?:input|select|textarea|button|object)$/i,Oe=/^(?:a|area)$/i,Ae=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,De=/^(?:checked|selected)$/i,Me=ue.support.getSetAttribute,Pe=ue.support.input;
ue.fn.extend({attr:function(t,e){return ue.access(this,ue.attr,t,e,arguments.length>1)
},removeAttr:function(t){return this.each(function(){ue.removeAttr(this,t)})},prop:function(t,e){return ue.access(this,ue.prop,t,e,arguments.length>1)
},removeProp:function(t){return t=ue.propFix[t]||t,this.each(function(){try{this[t]=e,delete this[t]
}catch(n){}})},addClass:function(t){var e,n,r,i,o,s=0,a=this.length,u="string"==typeof t&&t;
if(ue.isFunction(t))return this.each(function(e){ue(this).addClass(t.call(this,e,this.className))
});if(u)for(e=(t||"").match(ce)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ne," "):" ")){for(o=0;i=e[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");
n.className=ue.trim(r)}return this},removeClass:function(t){var e,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof t&&t;
if(ue.isFunction(t))return this.each(function(e){ue(this).removeClass(t.call(this,e,this.className))
});if(u)for(e=(t||"").match(ce)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ne," "):"")){for(o=0;i=e[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");
n.className=t?ue.trim(r):""}return this},toggleClass:function(t,e){var n=typeof t,r="boolean"==typeof e;
return ue.isFunction(t)?this.each(function(n){ue(this).toggleClass(t.call(this,n,this.className,e),e)
}):this.each(function(){if("string"===n)for(var i,o=0,s=ue(this),a=e,u=t.match(ce)||[];i=u[o++];)a=r?a:!s.hasClass(i),s[a?"addClass":"removeClass"](i);
else(n===J||"boolean"===n)&&(this.className&&ue._data(this,"__className__",this.className),this.className=this.className||t===!1?"":ue._data(this,"__className__")||"")
})},hasClass:function(t){for(var e=" "+t+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ne," ").indexOf(e)>=0)return!0;
return!1},val:function(t){var n,r,i,o=this[0];{if(arguments.length)return i=ue.isFunction(t),this.each(function(n){var o,s=ue(this);
1===this.nodeType&&(o=i?t.call(this,n,s.val()):t,null==o?o="":"number"==typeof o?o+="":ue.isArray(o)&&(o=ue.map(o,function(t){return null==t?"":t+""
})),r=ue.valHooks[this.type]||ue.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==e||(this.value=o))
});if(o)return r=ue.valHooks[o.type]||ue.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==e?n:(n=o.value,"string"==typeof n?n.replace(Se,""):null==n?"":n)
}}}),ue.extend({valHooks:{option:{get:function(t){var e=t.attributes.value;return!e||e.specified?t.value:t.text
}},select:{get:function(t){for(var e,n,r=t.options,i=t.selectedIndex,o="select-one"===t.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(ue.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ue.nodeName(n.parentNode,"optgroup"))){if(e=ue(n).val(),o)return e;
s.push(e)}return s},set:function(t,e){var n=ue.makeArray(e);return ue(t).find("option").each(function(){this.selected=ue.inArray(ue(this).val(),n)>=0
}),n.length||(t.selectedIndex=-1),n}}},attr:function(t,n,r){var i,o,s,a=t.nodeType;
if(t&&3!==a&&8!==a&&2!==a)return typeof t.getAttribute===J?ue.prop(t,n,r):(o=1!==a||!ue.isXMLDoc(t),o&&(n=n.toLowerCase(),i=ue.attrHooks[n]||(Ae.test(n)?Ee:je)),r===e?i&&o&&"get"in i&&null!==(s=i.get(t,n))?s:(typeof t.getAttribute!==J&&(s=t.getAttribute(n)),null==s?e:s):null!==r?i&&o&&"set"in i&&(s=i.set(t,r,n))!==e?s:(t.setAttribute(n,r+""),r):(ue.removeAttr(t,n),e))
},removeAttr:function(t,e){var n,r,i=0,o=e&&e.match(ce);if(o&&1===t.nodeType)for(;n=o[i++];)r=ue.propFix[n]||n,Ae.test(n)?!Me&&De.test(n)?t[ue.camelCase("default-"+n)]=t[r]=!1:t[r]=!1:ue.attr(t,n,""),t.removeAttribute(Me?n:r)
},attrHooks:{type:{set:function(t,e){if(!ue.support.radioValue&&"radio"===e&&ue.nodeName(t,"input")){var n=t.value;
return t.setAttribute("type",e),n&&(t.value=n),e}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(t,n,r){var i,o,s,a=t.nodeType;
if(t&&3!==a&&8!==a&&2!==a)return s=1!==a||!ue.isXMLDoc(t),s&&(n=ue.propFix[n]||n,o=ue.propHooks[n]),r!==e?o&&"set"in o&&(i=o.set(t,r,n))!==e?i:t[n]=r:o&&"get"in o&&null!==(i=o.get(t,n))?i:t[n]
},propHooks:{tabIndex:{get:function(t){var n=t.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):$e.test(t.nodeName)||Oe.test(t.nodeName)&&t.href?0:e
}}}}),Ee={get:function(t,n){var r=ue.prop(t,n),i="boolean"==typeof r&&t.getAttribute(n),o="boolean"==typeof r?Pe&&Me?null!=i:De.test(n)?t[ue.camelCase("default-"+n)]:!!i:t.getAttributeNode(n);
return o&&o.value!==!1?n.toLowerCase():e},set:function(t,e,n){return e===!1?ue.removeAttr(t,n):Pe&&Me||!De.test(n)?t.setAttribute(!Me&&ue.propFix[n]||n,n):t[ue.camelCase("default-"+n)]=t[n]=!0,n
}},Pe&&Me||(ue.attrHooks.value={get:function(t,n){var r=t.getAttributeNode(n);return ue.nodeName(t,"input")?t.defaultValue:r&&r.specified?r.value:e
},set:function(t,n,r){return ue.nodeName(t,"input")?(t.defaultValue=n,e):je&&je.set(t,n,r)
}}),Me||(je=ue.valHooks.button={get:function(t,n){var r=t.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:e
},set:function(t,n,r){var i=t.getAttributeNode(r);return i||t.setAttributeNode(i=t.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===t.getAttribute(r)?n:e
}},ue.attrHooks.contenteditable={get:je.get,set:function(t,e,n){je.set(t,""===e?!1:e,n)
}},ue.each(["width","height"],function(t,n){ue.attrHooks[n]=ue.extend(ue.attrHooks[n],{set:function(t,r){return""===r?(t.setAttribute(n,"auto"),r):e
}})})),ue.support.hrefNormalized||(ue.each(["href","src","width","height"],function(t,n){ue.attrHooks[n]=ue.extend(ue.attrHooks[n],{get:function(t){var r=t.getAttribute(n,2);
return null==r?e:r}})}),ue.each(["href","src"],function(t,e){ue.propHooks[e]={get:function(t){return t.getAttribute(e,4)
}}})),ue.support.style||(ue.attrHooks.style={get:function(t){return t.style.cssText||e
},set:function(t,e){return t.style.cssText=e+""}}),ue.support.optSelected||(ue.propHooks.selected=ue.extend(ue.propHooks.selected,{get:function(t){var e=t.parentNode;
return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}})),ue.support.enctype||(ue.propFix.enctype="encoding"),ue.support.checkOn||ue.each(["radio","checkbox"],function(){ue.valHooks[this]={get:function(t){return null===t.getAttribute("value")?"on":t.value
}}}),ue.each(["radio","checkbox"],function(){ue.valHooks[this]=ue.extend(ue.valHooks[this],{set:function(t,n){return ue.isArray(n)?t.checked=ue.inArray(ue(t).val(),n)>=0:e
}})});var He=/^(?:input|select|textarea)$/i,Le=/^key/,Fe=/^(?:mouse|contextmenu)|click/,Ie=/^(?:focusinfocus|focusoutblur)$/,qe=/^([^.]*)(?:\.(.+)|)$/;
ue.event={global:{},add:function(t,n,r,i,o){var s,a,u,l,c,f,h,p,d,g,m,v=ue._data(t);
if(v){for(r.handler&&(l=r,r=l.handler,o=l.selector),r.guid||(r.guid=ue.guid++),(a=v.events)||(a=v.events={}),(f=v.handle)||(f=v.handle=function(t){return typeof ue===J||t&&ue.event.triggered===t.type?e:ue.event.dispatch.apply(f.elem,arguments)
},f.elem=t),n=(n||"").match(ce)||[""],u=n.length;u--;)s=qe.exec(n[u])||[],d=m=s[1],g=(s[2]||"").split(".").sort(),c=ue.event.special[d]||{},d=(o?c.delegateType:c.bindType)||d,c=ue.event.special[d]||{},h=ue.extend({type:d,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ue.expr.match.needsContext.test(o),namespace:g.join(".")},l),(p=a[d])||(p=a[d]=[],p.delegateCount=0,c.setup&&c.setup.call(t,i,g,f)!==!1||(t.addEventListener?t.addEventListener(d,f,!1):t.attachEvent&&t.attachEvent("on"+d,f))),c.add&&(c.add.call(t,h),h.handler.guid||(h.handler.guid=r.guid)),o?p.splice(p.delegateCount++,0,h):p.push(h),ue.event.global[d]=!0;
t=null}},remove:function(t,e,n,r,i){var o,s,a,u,l,c,f,h,p,d,g,m=ue.hasData(t)&&ue._data(t);
if(m&&(c=m.events)){for(e=(e||"").match(ce)||[""],l=e.length;l--;)if(a=qe.exec(e[l])||[],p=g=a[1],d=(a[2]||"").split(".").sort(),p){for(f=ue.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,h=c[p]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=h.length;o--;)s=h[o],!i&&g!==s.origType||n&&n.guid!==s.guid||a&&!a.test(s.namespace)||r&&r!==s.selector&&("**"!==r||!s.selector)||(h.splice(o,1),s.selector&&h.delegateCount--,f.remove&&f.remove.call(t,s));
u&&!h.length&&(f.teardown&&f.teardown.call(t,d,m.handle)!==!1||ue.removeEvent(t,p,m.handle),delete c[p])
}else for(p in c)ue.event.remove(t,p+e[l],n,r,!0);ue.isEmptyObject(c)&&(delete m.handle,ue._removeData(t,"events"))
}},trigger:function(n,r,i,o){var s,a,u,l,c,f,h,p=[i||Q],d=se.call(n,"type")?n.type:n,g=se.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||Q,3!==i.nodeType&&8!==i.nodeType&&!Ie.test(d+ue.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),a=0>d.indexOf(":")&&"on"+d,n=n[ue.expando]?n:new ue.Event(d,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=e,n.target||(n.target=i),r=null==r?[n]:ue.makeArray(r,[n]),c=ue.event.special[d]||{},o||!c.trigger||c.trigger.apply(i,r)!==!1)){if(!o&&!c.noBubble&&!ue.isWindow(i)){for(l=c.delegateType||d,Ie.test(l+d)||(u=u.parentNode);u;u=u.parentNode)p.push(u),f=u;
f===(i.ownerDocument||Q)&&p.push(f.defaultView||f.parentWindow||t)}for(h=0;(u=p[h++])&&!n.isPropagationStopped();)n.type=h>1?l:c.bindType||d,s=(ue._data(u,"events")||{})[n.type]&&ue._data(u,"handle"),s&&s.apply(u,r),s=a&&u[a],s&&ue.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();
if(n.type=d,!(o||n.isDefaultPrevented()||c._default&&c._default.apply(i.ownerDocument,r)!==!1||"click"===d&&ue.nodeName(i,"a")||!ue.acceptData(i)||!a||!i[d]||ue.isWindow(i))){f=i[a],f&&(i[a]=null),ue.event.triggered=d;
try{i[d]()}catch(m){}ue.event.triggered=e,f&&(i[a]=f)}return n.result}},dispatch:function(t){t=ue.event.fix(t);
var n,r,i,o,s,a=[],u=re.call(arguments),l=(ue._data(this,"events")||{})[t.type]||[],c=ue.event.special[t.type]||{};
if(u[0]=t,t.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,t)!==!1){for(a=ue.event.handlers.call(this,t,l),n=0;(o=a[n++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,s=0;(i=o.handlers[s++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(i.namespace))&&(t.handleObj=i,t.data=i.data,r=((ue.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==e&&(t.result=r)===!1&&(t.preventDefault(),t.stopPropagation()));
return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,n){var r,i,o,s,a=[],u=n.delegateCount,l=t.target;
if(u&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==t.type)){for(o=[],s=0;u>s;s++)i=n[s],r=i.selector+" ",o[r]===e&&(o[r]=i.needsContext?ue(r,this).index(l)>=0:ue.find(r,this,null,[l]).length),o[r]&&o.push(i);
o.length&&a.push({elem:l,handlers:o})}return n.length>u&&a.push({elem:this,handlers:n.slice(u)}),a
},fix:function(t){if(t[ue.expando])return t;var e,n,r,i=t.type,o=t,s=this.fixHooks[i];
for(s||(this.fixHooks[i]=s=Fe.test(i)?this.mouseHooks:Le.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,t=new ue.Event(o),e=r.length;e--;)n=r[e],t[n]=o[n];
return t.target||(t.target=o.srcElement||Q),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,s.filter?s.filter(t,o):t
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var r,i,o,s=n.button,a=n.fromElement;
return null==t.pageX&&null!=n.clientX&&(i=t.target.ownerDocument||Q,o=i.documentElement,r=i.body,t.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),t.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!t.relatedTarget&&a&&(t.relatedTarget=a===t.target?n.toElement:a),t.which||s===e||(t.which=1&s?1:2&s?3:4&s?2:0),t
}},special:{load:{noBubble:!0},click:{trigger:function(){return ue.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):e
}},focus:{trigger:function(){if(this!==Q.activeElement&&this.focus)try{return this.focus(),!1
}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===Q.activeElement&&this.blur?(this.blur(),!1):e
},delegateType:"focusout"},beforeunload:{postDispatch:function(t){t.result!==e&&(t.originalEvent.returnValue=t.result)
}}},simulate:function(t,e,n,r){var i=ue.extend(new ue.Event,n,{type:t,isSimulated:!0,originalEvent:{}});
r?ue.event.trigger(i,null,e):ue.event.dispatch.call(e,i),i.isDefaultPrevented()&&n.preventDefault()
}},ue.removeEvent=Q.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)
}:function(t,e,n){var r="on"+e;t.detachEvent&&(typeof t[r]===J&&(t[r]=null),t.detachEvent(r,n))
},ue.Event=function(t,n){return this instanceof ue.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.returnValue===!1||t.getPreventDefault&&t.getPreventDefault()?u:l):this.type=t,n&&ue.extend(this,n),this.timeStamp=t&&t.timeStamp||ue.now(),this[ue.expando]=!0,e):new ue.Event(t,n)
},ue.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var t=this.originalEvent;
this.isDefaultPrevented=u,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=u,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()
}},ue.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,e){ue.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,o=t.handleObj;
return(!i||i!==r&&!ue.contains(r,i))&&(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n
}}}),ue.support.submitBubbles||(ue.event.special.submit={setup:function(){return ue.nodeName(this,"form")?!1:(ue.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,r=ue.nodeName(n,"input")||ue.nodeName(n,"button")?n.form:e;
r&&!ue._data(r,"submitBubbles")&&(ue.event.add(r,"submit._submit",function(t){t._submit_bubble=!0
}),ue._data(r,"submitBubbles",!0))}),e)},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&ue.event.simulate("submit",this.parentNode,t,!0))
},teardown:function(){return ue.nodeName(this,"form")?!1:(ue.event.remove(this,"._submit"),e)
}}),ue.support.changeBubbles||(ue.event.special.change={setup:function(){return He.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ue.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)
}),ue.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),ue.event.simulate("change",this,t,!0)
})),!1):(ue.event.add(this,"beforeactivate._change",function(t){var e=t.target;He.test(e.nodeName)&&!ue._data(e,"changeBubbles")&&(ue.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||ue.event.simulate("change",this.parentNode,t,!0)
}),ue._data(e,"changeBubbles",!0))}),e)},handle:function(t){var n=t.target;return this!==n||t.isSimulated||t.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?t.handleObj.handler.apply(this,arguments):e
},teardown:function(){return ue.event.remove(this,"._change"),!He.test(this.nodeName)
}}),ue.support.focusinBubbles||ue.each({focus:"focusin",blur:"focusout"},function(t,e){var n=0,r=function(t){ue.event.simulate(e,t.target,ue.event.fix(t),!0)
};ue.event.special[e]={setup:function(){0===n++&&Q.addEventListener(t,r,!0)},teardown:function(){0===--n&&Q.removeEventListener(t,r,!0)
}}}),ue.fn.extend({on:function(t,n,r,i,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=e);
for(s in t)this.on(s,n,r,t[s],o);return this}if(null==r&&null==i?(i=n,r=n=e):null==i&&("string"==typeof n?(i=r,r=e):(i=r,r=n,n=e)),i===!1)i=l;
else if(!i)return this;return 1===o&&(a=i,i=function(t){return ue().off(t),a.apply(this,arguments)
},i.guid=a.guid||(a.guid=ue.guid++)),this.each(function(){ue.event.add(this,t,i,r,n)
})},one:function(t,e,n,r){return this.on(t,e,n,r,1)},off:function(t,n,r){var i,o;
if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,ue(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
if("object"==typeof t){for(o in t)this.off(o,n,t[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=e),r===!1&&(r=l),this.each(function(){ue.event.remove(this,t,r,n)
})},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)
},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)
},trigger:function(t,e){return this.each(function(){ue.event.trigger(t,e,this)})},triggerHandler:function(t,n){var r=this[0];
return r?ue.event.trigger(t,n,r,!0):e}}),function(t,e){function n(t){return de.test(t+"")
}function r(){var t,e=[];return t=function(n,r){return e.push(n+=" ")>k.cacheLength&&delete t[e.shift()],t[n]=r
}}function i(t){return t[I]=!0,t}function o(t){var e=O.createElement("div");try{return t(e)
}catch(n){return!1}finally{e=null}}function s(t,e,n,r){var i,o,s,a,u,l,c,p,d,g;if((e?e.ownerDocument||e:q)!==O&&$(e),e=e||O,n=n||[],!t||"string"!=typeof t)return n;
if(1!==(a=e.nodeType)&&9!==a)return[];if(!D&&!r){if(i=ge.exec(t))if(s=i[1]){if(9===a){if(o=e.getElementById(s),!o||!o.parentNode)return n;
if(o.id===s)return n.push(o),n}else if(e.ownerDocument&&(o=e.ownerDocument.getElementById(s))&&L(e,o)&&o.id===s)return n.push(o),n
}else{if(i[2])return Y.apply(n,K.call(e.getElementsByTagName(t),0)),n;if((s=i[3])&&R.getByClassName&&e.getElementsByClassName)return Y.apply(n,K.call(e.getElementsByClassName(s),0)),n
}if(R.qsa&&!M.test(t)){if(c=!0,p=I,d=e,g=9===a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(l=f(t),(c=e.getAttribute("id"))?p=c.replace(ye,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",u=l.length;u--;)l[u]=p+h(l[u]);
d=pe.test(t)&&e.parentNode||e,g=l.join(",")}if(g)try{return Y.apply(n,K.call(d.querySelectorAll(g),0)),n
}catch(m){}finally{c||e.removeAttribute("id")}}}return x(t.replace(se,"$1"),e,n,r)
}function a(t,e){var n=e&&t,r=n&&(~e.sourceIndex||Q)-(~t.sourceIndex||Q);if(r)return r;
if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function u(t){return function(e){var n=e.nodeName.toLowerCase();
return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();
return("input"===n||"button"===n)&&e.type===t}}function c(t){return i(function(e){return e=+e,i(function(n,r){for(var i,o=t([],n.length,e),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))
})})}function f(t,e){var n,r,i,o,a,u,l,c=U[t+" "];if(c)return e?0:c.slice(0);for(a=t,u=[],l=k.preFilter;a;){(!n||(r=ae.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(i=[])),n=!1,(r=le.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(se," ")}),a=a.slice(n.length));
for(o in k.filter)!(r=he[o].exec(a))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));
if(!n)break}return e?a.length:a?s.error(t):U(t,u).slice(0)}function h(t){for(var e=0,n=t.length,r="";n>e;e++)r+=t[e].value;
return r}function p(t,e,n){var r=e.dir,i=n&&"parentNode"===r,o=W++;return e.first?function(e,n,o){for(;e=e[r];)if(1===e.nodeType||i)return t(e,n,o)
}:function(e,n,s){var a,u,l,c=B+" "+o;if(s){for(;e=e[r];)if((1===e.nodeType||i)&&t(e,n,s))return!0
}else for(;e=e[r];)if(1===e.nodeType||i)if(l=e[I]||(e[I]={}),(u=l[r])&&u[0]===c){if((a=u[1])===!0||a===_)return a===!0
}else if(u=l[r]=[c],u[1]=t(e,n,s)||_,u[1]===!0)return!0}}function d(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;
return!0}:t[0]}function g(t,e,n,r,i){for(var o,s=[],a=0,u=t.length,l=null!=e;u>a;a++)(o=t[a])&&(!n||n(o,r,i))&&(s.push(o),l&&e.push(a));
return s}function m(t,e,n,r,o,s){return r&&!r[I]&&(r=m(r)),o&&!o[I]&&(o=m(o,s)),i(function(i,s,a,u){var l,c,f,h=[],p=[],d=s.length,m=i||b(e||"*",a.nodeType?[a]:a,[]),v=!t||!i&&e?m:g(m,h,t,a,u),y=n?o||(i?t:d||r)?[]:s:v;
if(n&&n(v,y,a,u),r)for(l=g(y,p),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(y[p[c]]=!(v[p[c]]=f));
if(i){if(o||t){if(o){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f);o(null,y=[],l,u)
}for(c=y.length;c--;)(f=y[c])&&(l=o?Z.call(i,f):h[c])>-1&&(i[l]=!(s[l]=f))}}else y=g(y===s?y.splice(d,y.length):y),o?o(null,s,y,u):Y.apply(s,y)
})}function v(t){for(var e,n,r,i=t.length,o=k.relative[t[0].type],s=o||k.relative[" "],a=o?1:0,u=p(function(t){return t===e
},s,!0),l=p(function(t){return Z.call(e,t)>-1},s,!0),c=[function(t,n,r){return!o&&(r||n!==S)||((e=n).nodeType?u(t,n,r):l(t,n,r))
}];i>a;a++)if(n=k.relative[t[a].type])c=[p(d(c),n)];else{if(n=k.filter[t[a].type].apply(null,t[a].matches),n[I]){for(r=++a;i>r&&!k.relative[t[r].type];r++);return m(a>1&&d(c),a>1&&h(t.slice(0,a-1)).replace(se,"$1"),n,r>a&&v(t.slice(a,r)),i>r&&v(t=t.slice(r)),i>r&&h(t))
}c.push(n)}return d(c)}function y(t,e){var n=0,r=e.length>0,o=t.length>0,a=function(i,a,u,l,c){var f,h,p,d=[],m=0,v="0",y=i&&[],b=null!=c,x=S,w=i||o&&k.find.TAG("*",c&&a.parentNode||a),C=B+=null==x?1:Math.random()||.1;
for(b&&(S=a!==O&&a,_=n);null!=(f=w[v]);v++){if(o&&f){for(h=0;p=t[h++];)if(p(f,a,u)){l.push(f);
break}b&&(B=C,_=++n)}r&&((f=!p&&f)&&m--,i&&y.push(f))}if(m+=v,r&&v!==m){for(h=0;p=e[h++];)p(y,d,a,u);
if(i){if(m>0)for(;v--;)y[v]||d[v]||(d[v]=V.call(l));d=g(d)}Y.apply(l,d),b&&!i&&d.length>0&&m+e.length>1&&s.uniqueSort(l)
}return b&&(B=C,S=x),y};return r?i(a):a}function b(t,e,n){for(var r=0,i=e.length;i>r;r++)s(t,e[r],n);
return n}function x(t,e,n,r){var i,o,s,a,u,l=f(t);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&9===e.nodeType&&!D&&k.relative[o[1].type]){if(e=k.find.ID(s.matches[0].replace(xe,we),e)[0],!e)return n;
t=t.slice(o.shift().value.length)}for(i=he.needsContext.test(t)?0:o.length;i--&&(s=o[i],!k.relative[a=s.type]);)if((u=k.find[a])&&(r=u(s.matches[0].replace(xe,we),pe.test(o[0].type)&&e.parentNode||e))){if(o.splice(i,1),t=r.length&&h(o),!t)return Y.apply(n,K.call(r,0)),n;
break}}return E(t,l)(r,e,D,n,pe.test(t)),n}function w(){}var C,_,k,T,j,E,N,S,$,O,A,D,M,P,H,L,F,I="sizzle"+-new Date,q=t.document,R={},B=0,W=0,z=r(),U=r(),X=r(),J=typeof e,Q=1<<31,G=[],V=G.pop,Y=G.push,K=G.slice,Z=G.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;
return-1},te="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne=ee.replace("w","w#"),re="([*^$|!~]?=)",ie="\\["+te+"*("+ee+")"+te+"*(?:"+re+te+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ne+")|)|)"+te+"*\\]",oe=":("+ee+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ie.replace(3,8)+")*)|.*)\\)|)",se=RegExp("^"+te+"+|((?:^|[^\\\\])(?:\\\\.)*)"+te+"+$","g"),ae=RegExp("^"+te+"*,"+te+"*"),le=RegExp("^"+te+"*([\\x20\\t\\r\\n\\f>+~])"+te+"*"),ce=RegExp(oe),fe=RegExp("^"+ne+"$"),he={ID:RegExp("^#("+ee+")"),CLASS:RegExp("^\\.("+ee+")"),NAME:RegExp("^\\[name=['\"]?("+ee+")['\"]?\\]"),TAG:RegExp("^("+ee.replace("w","w*")+")"),ATTR:RegExp("^"+ie),PSEUDO:RegExp("^"+oe),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+te+"*(even|odd|(([+-]|)(\\d*)n|)"+te+"*(?:([+-]|)"+te+"*(\\d+)|))"+te+"*\\)|)","i"),needsContext:RegExp("^"+te+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+te+"*((?:-\\d)?\\d*)"+te+"*\\)|)(?=[^-]|$)","i")},pe=/[\x20\t\r\n\f]*[+~]/,de=/^[^{]+\{\s*\[native code/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,ye=/'|\\/g,be=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xe=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,we=function(t,e){var n="0x"+e-65536;
return n!==n?e:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)
};try{K.call(q.documentElement.childNodes,0)[0].nodeType}catch(Ce){K=function(t){for(var e,n=[];e=this[t++];)n.push(e);
return n}}j=s.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1
},$=s.setDocument=function(t){var r=t?t.ownerDocument||t:q;return r!==O&&9===r.nodeType&&r.documentElement?(O=r,A=r.documentElement,D=j(r),R.tagNameNoComments=o(function(t){return t.appendChild(r.createComment("")),!t.getElementsByTagName("*").length
}),R.attributes=o(function(t){t.innerHTML="<select></select>";var e=typeof t.lastChild.getAttribute("multiple");
return"boolean"!==e&&"string"!==e}),R.getByClassName=o(function(t){return t.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",t.getElementsByClassName&&t.getElementsByClassName("e").length?(t.lastChild.className="e",2===t.getElementsByClassName("e").length):!1
}),R.getByName=o(function(t){t.id=I+0,t.innerHTML="<a name='"+I+"'></a><div name='"+I+"'></div>",A.insertBefore(t,A.firstChild);
var e=r.getElementsByName&&r.getElementsByName(I).length===2+r.getElementsByName(I+0).length;
return R.getIdNotName=!r.getElementById(I),A.removeChild(t),e}),k.attrHandle=o(function(t){return t.innerHTML="<a href='#'></a>",t.firstChild&&typeof t.firstChild.getAttribute!==J&&"#"===t.firstChild.getAttribute("href")
})?{}:{href:function(t){return t.getAttribute("href",2)},type:function(t){return t.getAttribute("type")
}},R.getIdNotName?(k.find.ID=function(t,e){if(typeof e.getElementById!==J&&!D){var n=e.getElementById(t);
return n&&n.parentNode?[n]:[]}},k.filter.ID=function(t){var e=t.replace(xe,we);return function(t){return t.getAttribute("id")===e
}}):(k.find.ID=function(t,n){if(typeof n.getElementById!==J&&!D){var r=n.getElementById(t);
return r?r.id===t||typeof r.getAttributeNode!==J&&r.getAttributeNode("id").value===t?[r]:e:[]
}},k.filter.ID=function(t){var e=t.replace(xe,we);return function(t){var n=typeof t.getAttributeNode!==J&&t.getAttributeNode("id");
return n&&n.value===e}}),k.find.TAG=R.tagNameNoComments?function(t,n){return typeof n.getElementsByTagName!==J?n.getElementsByTagName(t):e
}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);
return r}return o},k.find.NAME=R.getByName&&function(t,n){return typeof n.getElementsByName!==J?n.getElementsByName(name):e
},k.find.CLASS=R.getByClassName&&function(t,n){return typeof n.getElementsByClassName===J||D?e:n.getElementsByClassName(t)
},P=[],M=[":focus"],(R.qsa=n(r.querySelectorAll))&&(o(function(t){t.innerHTML="<select><option selected=''></option></select>",t.querySelectorAll("[selected]").length||M.push("\\["+te+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),t.querySelectorAll(":checked").length||M.push(":checked")
}),o(function(t){t.innerHTML="<input type='hidden' i=''/>",t.querySelectorAll("[i^='']").length&&M.push("[*^$]="+te+"*(?:\"\"|'')"),t.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),M.push(",.*:")
})),(R.matchesSelector=n(H=A.matchesSelector||A.mozMatchesSelector||A.webkitMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&o(function(t){R.disconnectedMatch=H.call(t,"div"),H.call(t,"[s!='']:x"),P.push("!=",oe)
}),M=RegExp(M.join("|")),P=RegExp(P.join("|")),L=n(A.contains)||A.compareDocumentPosition?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;
return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))
}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},F=A.compareDocumentPosition?function(t,e){var n;
return t===e?(N=!0,0):(n=e.compareDocumentPosition&&t.compareDocumentPosition&&t.compareDocumentPosition(e))?1&n||t.parentNode&&11===t.parentNode.nodeType?t===r||L(q,t)?-1:e===r||L(q,e)?1:0:4&n?-1:1:t.compareDocumentPosition?-1:1
}:function(t,e){var n,i=0,o=t.parentNode,s=e.parentNode,u=[t],l=[e];if(t===e)return N=!0,0;
if(!o||!s)return t===r?-1:e===r?1:o?-1:s?1:0;if(o===s)return a(t,e);for(n=t;n=n.parentNode;)u.unshift(n);
for(n=e;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===q?-1:l[i]===q?1:0
},N=!1,[0,0].sort(F),R.detectDuplicates=N,O):O},s.matches=function(t,e){return s(t,null,null,e)
},s.matchesSelector=function(t,e){if((t.ownerDocument||t)!==O&&$(t),e=e.replace(be,"='$1']"),!(!R.matchesSelector||D||P&&P.test(e)||M.test(e)))try{var n=H.call(t,e);
if(n||R.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(r){}return s(e,O,null,[t]).length>0
},s.contains=function(t,e){return(t.ownerDocument||t)!==O&&$(t),L(t,e)},s.attr=function(t,e){var n;
return(t.ownerDocument||t)!==O&&$(t),D||(e=e.toLowerCase()),(n=k.attrHandle[e])?n(t):D||R.attributes?t.getAttribute(e):((n=t.getAttributeNode(e))||t.getAttribute(e))&&t[e]===!0?e:n&&n.specified?n.value:null
},s.error=function(t){throw Error("Syntax error, unrecognized expression: "+t)},s.uniqueSort=function(t){var e,n=[],r=1,i=0;
if(N=!R.detectDuplicates,t.sort(F),N){for(;e=t[r];r++)e===t[r-1]&&(i=n.push(r));for(;i--;)t.splice(n[i],1)
}return t},T=s.getText=function(t){var e,n="",r=0,i=t.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;
for(t=t.firstChild;t;t=t.nextSibling)n+=T(t)}else if(3===i||4===i)return t.nodeValue
}else for(;e=t[r];r++)n+=T(e);return n},k=s.selectors={cacheLength:50,createPseudo:i,match:he,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(xe,we),t[3]=(t[4]||t[5]||"").replace(xe,we),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)
},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||s.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&s.error(t[0]),t
},PSEUDO:function(t){var e,n=!t[5]&&t[2];return he.CHILD.test(t[0])?null:(t[4]?t[2]=t[4]:n&&ce.test(n)&&(e=f(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))
}},filter:{TAG:function(t){return"*"===t?function(){return!0}:(t=t.replace(xe,we).toLowerCase(),function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
})},CLASS:function(t){var e=z[t+" "];return e||(e=RegExp("(^|"+te+")"+t+"("+te+"|$)"))&&z(t,function(t){return e.test(t.className||typeof t.getAttribute!==J&&t.getAttribute("class")||"")
})},ATTR:function(t,e,n){return function(r){var i=s.attr(r,t);return null==i?"!="===e:e?(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i+" ").indexOf(n)>-1:"|="===e?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;
return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,u){var l,c,f,h,p,d,g=o!==s?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!u&&!a;
if(m){if(o){for(;g;){for(f=e;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;
d=g="only"===t&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&y){for(c=m[I]||(m[I]={}),l=c[t]||[],p=l[0]===B&&l[1],h=l[0]===B&&l[2],f=p&&m.childNodes[p];f=++p&&f&&f[g]||(h=p=0)||d.pop();)if(1===f.nodeType&&++h&&f===e){c[t]=[B,p,h];
break}}else if(y&&(l=(e[I]||(e[I]={}))[t])&&l[0]===B)h=l[1];else for(;(f=++p&&f&&f[g]||(h=p=0)||d.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++h||(y&&((f[I]||(f[I]={}))[t]=[B,h]),f!==e)););return h-=i,h===r||0===h%r&&h/r>=0
}}},PSEUDO:function(t,e){var n,r=k.pseudos[t]||k.setFilters[t.toLowerCase()]||s.error("unsupported pseudo: "+t);
return r[I]?r(e):r.length>1?(n=[t,t,"",e],k.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,n){for(var i,o=r(t,e),s=o.length;s--;)i=Z.call(t,o[s]),t[i]=!(n[i]=o[s])
}):function(t){return r(t,0,n)}):r}},pseudos:{not:i(function(t){var e=[],n=[],r=E(t.replace(se,"$1"));
return r[I]?i(function(t,e,n,i){for(var o,s=r(t,null,i,[]),a=t.length;a--;)(o=s[a])&&(t[a]=!(e[a]=o))
}):function(t,i,o){return e[0]=t,r(e,null,o,n),!n.pop()}}),has:i(function(t){return function(e){return s(t,e).length>0
}}),contains:i(function(t){return function(e){return(e.textContent||e.innerText||T(e)).indexOf(t)>-1
}}),lang:i(function(t){return fe.test(t||"")||s.error("unsupported lang: "+t),t=t.replace(xe,we).toLowerCase(),function(e){var n;
do if(n=D?e.getAttribute("xml:lang")||e.getAttribute("lang"):e.lang)return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");
while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;
return n&&n.slice(1)===e.id},root:function(t){return t===A},focus:function(t){return t===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(t.type||t.href||~t.tabIndex)
},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0
},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected
},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0
},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeName>"@"||3===t.nodeType||4===t.nodeType)return!1;
return!0},parent:function(t){return!k.pseudos.empty(t)},header:function(t){return ve.test(t.nodeName)
},input:function(t){return me.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||e.toLowerCase()===t.type)
},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]
}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);
return t}),lt:c(function(t,e,n){for(var r=0>n?n+e:n;--r>=0;)t.push(r);return t}),gt:c(function(t,e,n){for(var r=0>n?n+e:n;e>++r;)t.push(r);
return t})}};for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[C]=u(C);
for(C in{submit:!0,reset:!0})k.pseudos[C]=l(C);E=s.compile=function(t,e){var n,r=[],i=[],o=X[t+" "];
if(!o){for(e||(e=f(t)),n=e.length;n--;)o=v(e[n]),o[I]?r.push(o):i.push(o);o=X(t,y(i,r))
}return o},k.pseudos.nth=k.pseudos.eq,k.filters=w.prototype=k.pseudos,k.setFilters=new w,$(),s.attr=ue.attr,ue.find=s,ue.expr=s.selectors,ue.expr[":"]=ue.expr.pseudos,ue.unique=s.uniqueSort,ue.text=s.getText,ue.isXMLDoc=s.isXML,ue.contains=s.contains
}(t);var Re=/Until$/,Be=/^(?:parents|prev(?:Until|All))/,We=/^.[^:#\[\.,]*$/,ze=ue.expr.match.needsContext,Ue={children:!0,contents:!0,next:!0,prev:!0};
ue.fn.extend({find:function(t){var e,n,r,i=this.length;if("string"!=typeof t)return r=this,this.pushStack(ue(t).filter(function(){for(e=0;i>e;e++)if(ue.contains(r[e],this))return!0
}));for(n=[],e=0;i>e;e++)ue.find(t,this[e],n);return n=this.pushStack(i>1?ue.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+t,n
},has:function(t){var e,n=ue(t,this),r=n.length;return this.filter(function(){for(e=0;r>e;e++)if(ue.contains(this,n[e]))return!0
})},not:function(t){return this.pushStack(f(this,t,!1))},filter:function(t){return this.pushStack(f(this,t,!0))
},is:function(t){return!!t&&("string"==typeof t?ze.test(t)?ue(t,this.context).index(this[0])>=0:ue.filter(t,this).length>0:this.filter(t).length>0)
},closest:function(t,e){for(var n,r=0,i=this.length,o=[],s=ze.test(t)||"string"!=typeof t?ue(t,e||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==e&&11!==n.nodeType;){if(s?s.index(n)>-1:ue.find.matchesSelector(n,t)){o.push(n);
break}n=n.parentNode}return this.pushStack(o.length>1?ue.unique(o):o)},index:function(t){return t?"string"==typeof t?ue.inArray(this[0],ue(t)):ue.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(t,e){var n="string"==typeof t?ue(t,e):ue.makeArray(t&&t.nodeType?[t]:t),r=ue.merge(this.get(),n);
return this.pushStack(ue.unique(r))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))
}}),ue.fn.andSelf=ue.fn.addBack,ue.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null
},parents:function(t){return ue.dir(t,"parentNode")},parentsUntil:function(t,e,n){return ue.dir(t,"parentNode",n)
},next:function(t){return c(t,"nextSibling")},prev:function(t){return c(t,"previousSibling")
},nextAll:function(t){return ue.dir(t,"nextSibling")},prevAll:function(t){return ue.dir(t,"previousSibling")
},nextUntil:function(t,e,n){return ue.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return ue.dir(t,"previousSibling",n)
},siblings:function(t){return ue.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return ue.sibling(t.firstChild)
},contents:function(t){return ue.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:ue.merge([],t.childNodes)
}},function(t,e){ue.fn[t]=function(n,r){var i=ue.map(this,e,n);return Re.test(t)||(r=n),r&&"string"==typeof r&&(i=ue.filter(r,i)),i=this.length>1&&!Ue[t]?ue.unique(i):i,this.length>1&&Be.test(t)&&(i=i.reverse()),this.pushStack(i)
}}),ue.extend({filter:function(t,e,n){return n&&(t=":not("+t+")"),1===e.length?ue.find.matchesSelector(e[0],t)?[e[0]]:[]:ue.find.matches(t,e)
},dir:function(t,n,r){for(var i=[],o=t[n];o&&9!==o.nodeType&&(r===e||1!==o.nodeType||!ue(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];
return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);
return n}});var Xe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Je=/ jQuery\d+="(?:null|\d+)"/g,Qe=RegExp("<(?:"+Xe+")[\\s/>]","i"),Ge=/^\s+/,Ve=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ye=/<([\w:]+)/,Ke=/<tbody/i,Ze=/<|&#?\w+;/,tn=/<(?:script|style|link)/i,en=/^(?:checkbox|radio)$/i,nn=/checked\s*(?:[^=]|=\s*.checked.)/i,rn=/^$|\/(?:java|ecma)script/i,on=/^true\/(.*)/,sn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,an={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ue.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},un=h(Q),ln=un.appendChild(Q.createElement("div"));
an.optgroup=an.option,an.tbody=an.tfoot=an.colgroup=an.caption=an.thead,an.th=an.td,ue.fn.extend({text:function(t){return ue.access(this,function(t){return t===e?ue.text(this):this.empty().append((this[0]&&this[0].ownerDocument||Q).createTextNode(t))
},null,t,arguments.length)},wrapAll:function(t){if(ue.isFunction(t))return this.each(function(e){ue(this).wrapAll(t.call(this,e))
});if(this[0]){var e=ue(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;
return t}).append(this)}return this},wrapInner:function(t){return ue.isFunction(t)?this.each(function(e){ue(this).wrapInner(t.call(this,e))
}):this.each(function(){var e=ue(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)
})},wrap:function(t){var e=ue.isFunction(t);return this.each(function(n){ue(this).wrapAll(e?t.call(this,n):t)
})},unwrap:function(){return this.parent().each(function(){ue.nodeName(this,"body")||ue(this).replaceWith(this.childNodes)
}).end()},append:function(){return this.domManip(arguments,!0,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(t)
})},prepend:function(){return this.domManip(arguments,!0,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(t,this.firstChild)
})},before:function(){return this.domManip(arguments,!1,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)
})},after:function(){return this.domManip(arguments,!1,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)
})},remove:function(t,e){for(var n,r=0;null!=(n=this[r]);r++)(!t||ue.filter(t,[n]).length>0)&&(e||1!==n.nodeType||ue.cleanData(b(n)),n.parentNode&&(e&&ue.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));
return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&ue.cleanData(b(t,!1));t.firstChild;)t.removeChild(t.firstChild);
t.options&&ue.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return ue.clone(this,t,e)
})},html:function(t){return ue.access(this,function(t){var n=this[0]||{},r=0,i=this.length;
if(t===e)return 1===n.nodeType?n.innerHTML.replace(Je,""):e;if(!("string"!=typeof t||tn.test(t)||!ue.support.htmlSerialize&&Qe.test(t)||!ue.support.leadingWhitespace&&Ge.test(t)||an[(Ye.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Ve,"<$1></$2>");
try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(ue.cleanData(b(n,!1)),n.innerHTML=t);
n=0}catch(o){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(t){var e=ue.isFunction(t);
return e||"string"==typeof t||(t=ue(t).not(this).detach()),this.domManip([t],!0,function(t){var e=this.nextSibling,n=this.parentNode;
n&&(ue(this).remove(),n.insertBefore(t,e))})},detach:function(t){return this.remove(t,!0)
},domManip:function(t,n,r){t=ee.apply([],t);var i,o,s,a,u,l,c=0,f=this.length,h=this,m=f-1,v=t[0],y=ue.isFunction(v);
if(y||!(1>=f||"string"!=typeof v||ue.support.checkClone)&&nn.test(v))return this.each(function(i){var o=h.eq(i);
y&&(t[0]=v.call(this,i,n?o.html():e)),o.domManip(t,n,r)});if(f&&(l=ue.buildFragment(t,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&ue.nodeName(i,"tr"),a=ue.map(b(l,"script"),d),s=a.length;f>c;c++)o=l,c!==m&&(o=ue.clone(o,!0,!0),s&&ue.merge(a,b(o,"script"))),r.call(n&&ue.nodeName(this[c],"table")?p(this[c],"tbody"):this[c],o,c);
if(s)for(u=a[a.length-1].ownerDocument,ue.map(a,g),c=0;s>c;c++)o=a[c],rn.test(o.type||"")&&!ue._data(o,"globalEval")&&ue.contains(u,o)&&(o.src?ue.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):ue.globalEval((o.text||o.textContent||o.innerHTML||"").replace(sn,"")));
l=i=null}return this}}),ue.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ue.fn[t]=function(t){for(var n,r=0,i=[],o=ue(t),s=o.length-1;s>=r;r++)n=r===s?this:this.clone(!0),ue(o[r])[e](n),ne.apply(i,n.get());
return this.pushStack(i)}}),ue.extend({clone:function(t,e,n){var r,i,o,s,a,u=ue.contains(t.ownerDocument,t);
if(ue.support.html5Clone||ue.isXMLDoc(t)||!Qe.test("<"+t.nodeName+">")?o=t.cloneNode(!0):(ln.innerHTML=t.outerHTML,ln.removeChild(o=ln.firstChild)),!(ue.support.noCloneEvent&&ue.support.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ue.isXMLDoc(t)))for(r=b(o),a=b(t),s=0;null!=(i=a[s]);++s)r[s]&&y(i,r[s]);
if(e)if(n)for(a=a||b(t),r=r||b(o),s=0;null!=(i=a[s]);s++)v(i,r[s]);else v(t,o);return r=b(o,"script"),r.length>0&&m(r,!u&&b(t,"script")),r=a=i=null,o
},buildFragment:function(t,e,n,r){for(var i,o,s,a,u,l,c,f=t.length,p=h(e),d=[],g=0;f>g;g++)if(o=t[g],o||0===o)if("object"===ue.type(o))ue.merge(d,o.nodeType?[o]:o);
else if(Ze.test(o)){for(a=a||p.appendChild(e.createElement("div")),u=(Ye.exec(o)||["",""])[1].toLowerCase(),c=an[u]||an._default,a.innerHTML=c[1]+o.replace(Ve,"<$1></$2>")+c[2],i=c[0];i--;)a=a.lastChild;
if(!ue.support.leadingWhitespace&&Ge.test(o)&&d.push(e.createTextNode(Ge.exec(o)[0])),!ue.support.tbody)for(o="table"!==u||Ke.test(o)?"<table>"!==c[1]||Ke.test(o)?0:a:a.firstChild,i=o&&o.childNodes.length;i--;)ue.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l);
for(ue.merge(d,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);
a=p.lastChild}else d.push(e.createTextNode(o));for(a&&p.removeChild(a),ue.support.appendChecked||ue.grep(b(d,"input"),x),g=0;o=d[g++];)if((!r||-1===ue.inArray(o,r))&&(s=ue.contains(o.ownerDocument,o),a=b(p.appendChild(o),"script"),s&&m(a),n))for(i=0;o=a[i++];)rn.test(o.type||"")&&n.push(o);
return a=null,p},cleanData:function(t,e){for(var n,r,i,o,s=0,a=ue.expando,u=ue.cache,l=ue.support.deleteExpando,c=ue.event.special;null!=(n=t[s]);s++)if((e||ue.acceptData(n))&&(i=n[a],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?ue.event.remove(n,r):ue.removeEvent(n,r,o.handle);
u[i]&&(delete u[i],l?delete n[a]:typeof n.removeAttribute!==J?n.removeAttribute(a):n[a]=null,Z.push(i))
}}});var cn,fn,hn,pn=/alpha\([^)]*\)/i,dn=/opacity\s*=\s*([^)]*)/,gn=/^(top|right|bottom|left)$/,mn=/^(none|table(?!-c[ea]).+)/,vn=/^margin/,yn=RegExp("^("+le+")(.*)$","i"),bn=RegExp("^("+le+")(?!px)[a-z%]+$","i"),xn=RegExp("^([+-])=("+le+")","i"),wn={BODY:"block"},Cn={position:"absolute",visibility:"hidden",display:"block"},_n={letterSpacing:0,fontWeight:400},kn=["Top","Right","Bottom","Left"],Tn=["Webkit","O","Moz","ms"];
ue.fn.extend({css:function(t,n){return ue.access(this,function(t,n,r){var i,o,s={},a=0;
if(ue.isArray(n)){for(o=fn(t),i=n.length;i>a;a++)s[n[a]]=ue.css(t,n[a],!1,o);return s
}return r!==e?ue.style(t,n,r):ue.css(t,n)},t,n,arguments.length>1)},show:function(){return _(this,!0)
},hide:function(){return _(this)},toggle:function(t){var e="boolean"==typeof t;return this.each(function(){(e?t:C(this))?ue(this).show():ue(this).hide()
})}}),ue.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=hn(t,"opacity");
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ue.support.cssFloat?"cssFloat":"styleFloat"},style:function(t,n,r,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,s,a,u=ue.camelCase(n),l=t.style;
if(n=ue.cssProps[u]||(ue.cssProps[u]=w(l,u)),a=ue.cssHooks[n]||ue.cssHooks[u],r===e)return a&&"get"in a&&(o=a.get(t,!1,i))!==e?o:l[n];
if(s=typeof r,"string"===s&&(o=xn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ue.css(t,n)),s="number"),!(null==r||"number"===s&&isNaN(r)||("number"!==s||ue.cssNumber[u]||(r+="px"),ue.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),a&&"set"in a&&(r=a.set(t,r,i))===e)))try{l[n]=r
}catch(c){}}},css:function(t,n,r,i){var o,s,a,u=ue.camelCase(n);return n=ue.cssProps[u]||(ue.cssProps[u]=w(t.style,u)),a=ue.cssHooks[n]||ue.cssHooks[u],a&&"get"in a&&(s=a.get(t,!0,r)),s===e&&(s=hn(t,n,i)),"normal"===s&&n in _n&&(s=_n[n]),""===r||r?(o=parseFloat(s),r===!0||ue.isNumeric(o)?o||0:s):s
},swap:function(t,e,n,r){var i,o,s={};for(o in e)s[o]=t.style[o],t.style[o]=e[o];
i=n.apply(t,r||[]);for(o in e)t.style[o]=s[o];return i}}),t.getComputedStyle?(fn=function(e){return t.getComputedStyle(e,null)
},hn=function(t,n,r){var i,o,s,a=r||fn(t),u=a?a.getPropertyValue(n)||a[n]:e,l=t.style;
return a&&(""!==u||ue.contains(t.ownerDocument,t)||(u=ue.style(t,n)),bn.test(u)&&vn.test(n)&&(i=l.width,o=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=a.width,l.width=i,l.minWidth=o,l.maxWidth=s)),u
}):Q.documentElement.currentStyle&&(fn=function(t){return t.currentStyle},hn=function(t,n,r){var i,o,s,a=r||fn(t),u=a?a[n]:e,l=t.style;
return null==u&&l&&l[n]&&(u=l[n]),bn.test(u)&&!gn.test(n)&&(i=l.left,o=t.runtimeStyle,s=o&&o.left,s&&(o.left=t.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,s&&(o.left=s)),""===u?"auto":u
}),ue.each(["height","width"],function(t,n){ue.cssHooks[n]={get:function(t,r,i){return r?0===t.offsetWidth&&mn.test(ue.css(t,"display"))?ue.swap(t,Cn,function(){return j(t,n,i)
}):j(t,n,i):e},set:function(t,e,r){var i=r&&fn(t);return k(t,e,r?T(t,n,r,ue.support.boxSizing&&"border-box"===ue.css(t,"boxSizing",!1,i),i):0)
}}}),ue.support.opacity||(ue.cssHooks.opacity={get:function(t,e){return dn.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""
},set:function(t,e){var n=t.style,r=t.currentStyle,i=ue.isNumeric(e)?"alpha(opacity="+100*e+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(e>=1||""===e)&&""===ue.trim(o.replace(pn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||r&&!r.filter)||(n.filter=pn.test(o)?o.replace(pn,i):o+" "+i)
}}),ue(function(){ue.support.reliableMarginRight||(ue.cssHooks.marginRight={get:function(t,n){return n?ue.swap(t,{display:"inline-block"},hn,[t,"marginRight"]):e
}}),!ue.support.pixelPosition&&ue.fn.position&&ue.each(["top","left"],function(t,n){ue.cssHooks[n]={get:function(t,r){return r?(r=hn(t,n),bn.test(r)?ue(t).position()[n]+"px":r):e
}}})}),ue.expr&&ue.expr.filters&&(ue.expr.filters.hidden=function(t){return 0>=t.offsetWidth&&0>=t.offsetHeight||!ue.support.reliableHiddenOffsets&&"none"===(t.style&&t.style.display||ue.css(t,"display"))
},ue.expr.filters.visible=function(t){return!ue.expr.filters.hidden(t)}),ue.each({margin:"",padding:"",border:"Width"},function(t,e){ue.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[t+kn[r]+e]=o[r]||o[r-2]||o[0];
return i}},vn.test(t)||(ue.cssHooks[t+e].set=k)});var jn=/%20/g,En=/\[\]$/,Nn=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,$n=/^(?:input|select|textarea|keygen)/i;
ue.fn.extend({serialize:function(){return ue.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ue.prop(this,"elements");
return t?ue.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!ue(this).is(":disabled")&&$n.test(this.nodeName)&&!Sn.test(t)&&(this.checked||!en.test(t))
}).map(function(t,e){var n=ue(this).val();return null==n?null:ue.isArray(n)?ue.map(n,function(t){return{name:e.name,value:t.replace(Nn,"\r\n")}
}):{name:e.name,value:n.replace(Nn,"\r\n")}}).get()}}),ue.param=function(t,n){var r,i=[],o=function(t,e){e=ue.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)
};if(n===e&&(n=ue.ajaxSettings&&ue.ajaxSettings.traditional),ue.isArray(t)||t.jquery&&!ue.isPlainObject(t))ue.each(t,function(){o(this.name,this.value)
});else for(r in t)S(r,t[r],n,o);return i.join("&").replace(jn,"+")},ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){ue.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)
}}),ue.fn.hover=function(t,e){return this.mouseenter(t).mouseleave(e||t)};var On,An,Dn=ue.now(),Mn=/\?/,Pn=/#.*$/,Hn=/([?&])_=[^&]*/,Ln=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,In=/^(?:GET|HEAD)$/,qn=/^\/\//,Rn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Bn=ue.fn.load,Wn={},zn={},Un="*/".concat("*");
try{An=G.href}catch(Xn){An=Q.createElement("a"),An.href="",An=An.href}On=Rn.exec(An.toLowerCase())||[],ue.fn.load=function(t,n,r){if("string"!=typeof t&&Bn)return Bn.apply(this,arguments);
var i,o,s,a=this,u=t.indexOf(" ");return u>=0&&(i=t.slice(u,t.length),t=t.slice(0,u)),ue.isFunction(n)?(r=n,n=e):n&&"object"==typeof n&&(s="POST"),a.length>0&&ue.ajax({url:t,type:s,dataType:"html",data:n}).done(function(t){o=arguments,a.html(i?ue("<div>").append(ue.parseHTML(t)).find(i):t)
}).complete(r&&function(t,e){a.each(r,o||[t.responseText,e,t])}),this},ue.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ue.fn[e]=function(t){return this.on(e,t)
}}),ue.each(["get","post"],function(t,n){ue[n]=function(t,r,i,o){return ue.isFunction(r)&&(o=o||i,i=r,r=e),ue.ajax({url:t,type:n,dataType:o,data:r,success:i})
}}),ue.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:An,type:"GET",isLocal:Fn.test(On[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Un,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":t.String,"text html":!0,"text json":ue.parseJSON,"text xml":ue.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?A(A(t,ue.ajaxSettings),e):A(ue.ajaxSettings,t)
},ajaxPrefilter:$(Wn),ajaxTransport:$(zn),ajax:function(t,n){function r(t,n,r,i){var o,f,y,b,w,_=n;
2!==x&&(x=2,u&&clearTimeout(u),c=e,a=i||"",C.readyState=t>0?4:0,r&&(b=D(h,C,r)),t>=200&&300>t||304===t?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(ue.lastModified[s]=w),w=C.getResponseHeader("etag"),w&&(ue.etag[s]=w)),204===t?(o=!0,_="nocontent"):304===t?(o=!0,_="notmodified"):(o=M(h,b),_=o.state,f=o.data,y=o.error,o=!y)):(y=_,(t||!_)&&(_="error",0>t&&(t=0))),C.status=t,C.statusText=(n||_)+"",o?g.resolveWith(p,[f,_,C]):g.rejectWith(p,[C,_,y]),C.statusCode(v),v=e,l&&d.trigger(o?"ajaxSuccess":"ajaxError",[C,h,o?f:y]),m.fireWith(p,[C,_]),l&&(d.trigger("ajaxComplete",[C,h]),--ue.active||ue.event.trigger("ajaxStop")))
}"object"==typeof t&&(n=t,t=e),n=n||{};var i,o,s,a,u,l,c,f,h=ue.ajaxSetup({},n),p=h.context||h,d=h.context&&(p.nodeType||p.jquery)?ue(p):ue.event,g=ue.Deferred(),m=ue.Callbacks("once memory"),v=h.statusCode||{},y={},b={},x=0,w="canceled",C={readyState:0,getResponseHeader:function(t){var e;
if(2===x){if(!f)for(f={};e=Ln.exec(a);)f[e[1].toLowerCase()]=e[2];e=f[t.toLowerCase()]
}return null==e?null:e},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(t,e){var n=t.toLowerCase();
return x||(t=b[n]=b[n]||t,y[t]=e),this},overrideMimeType:function(t){return x||(h.mimeType=t),this
},statusCode:function(t){var e;if(t)if(2>x)for(e in t)v[e]=[v[e],t[e]];else C.always(t[C.status]);
return this},abort:function(t){var e=t||w;return c&&c.abort(e),r(0,e),this}};if(g.promise(C).complete=m.add,C.success=C.done,C.error=C.fail,h.url=((t||h.url||An)+"").replace(Pn,"").replace(qn,On[1]+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=ue.trim(h.dataType||"*").toLowerCase().match(ce)||[""],null==h.crossDomain&&(i=Rn.exec(h.url.toLowerCase()),h.crossDomain=!(!i||i[1]===On[1]&&i[2]===On[2]&&(i[3]||("http:"===i[1]?80:443))==(On[3]||("http:"===On[1]?80:443)))),h.data&&h.processData&&"string"!=typeof h.data&&(h.data=ue.param(h.data,h.traditional)),O(Wn,h,n,C),2===x)return C;
l=h.global,l&&0===ue.active++&&ue.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!In.test(h.type),s=h.url,h.hasContent||(h.data&&(s=h.url+=(Mn.test(s)?"&":"?")+h.data,delete h.data),h.cache===!1&&(h.url=Hn.test(s)?s.replace(Hn,"$1_="+Dn++):s+(Mn.test(s)?"&":"?")+"_="+Dn++)),h.ifModified&&(ue.lastModified[s]&&C.setRequestHeader("If-Modified-Since",ue.lastModified[s]),ue.etag[s]&&C.setRequestHeader("If-None-Match",ue.etag[s])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Un+"; q=0.01":""):h.accepts["*"]);
for(o in h.headers)C.setRequestHeader(o,h.headers[o]);if(h.beforeSend&&(h.beforeSend.call(p,C,h)===!1||2===x))return C.abort();
w="abort";for(o in{success:1,error:1,complete:1})C[o](h[o]);if(c=O(zn,h,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,h]),h.async&&h.timeout>0&&(u=setTimeout(function(){C.abort("timeout")
},h.timeout));try{x=1,c.send(y,r)}catch(_){if(!(2>x))throw _;r(-1,_)}}else r(-1,"No Transport");
return C},getScript:function(t,n){return ue.get(t,e,n,"script")},getJSON:function(t,e,n){return ue.get(t,e,n,"json")
}}),ue.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return ue.globalEval(t),t
}}}),ue.ajaxPrefilter("script",function(t){t.cache===e&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)
}),ue.ajaxTransport("script",function(t){if(t.crossDomain){var n,r=Q.head||ue("head")[0]||Q.documentElement;
return{send:function(e,i){n=Q.createElement("script"),n.async=!0,t.scriptCharset&&(n.charset=t.scriptCharset),n.src=t.url,n.onload=n.onreadystatechange=function(t,e){(e||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,e||i(200,"success"))
},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(e,!0)}}}});var Jn=[],Qn=/(=)\?(?=&|$)|\?\?/;
ue.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Jn.pop()||ue.expando+"_"+Dn++;
return this[t]=!0,t}}),ue.ajaxPrefilter("json jsonp",function(n,r,i){var o,s,a,u=n.jsonp!==!1&&(Qn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qn.test(n.data)&&"data");
return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=ue.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Qn,"$1"+o):n.jsonp!==!1&&(n.url+=(Mn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return a||ue.error(o+" was not called"),a[0]
},n.dataTypes[0]="json",s=t[o],t[o]=function(){a=arguments},i.always(function(){t[o]=s,n[o]&&(n.jsonpCallback=r.jsonpCallback,Jn.push(o)),a&&ue.isFunction(s)&&s(a[0]),a=s=e
}),"script"):e});var Gn,Vn,Yn=0,Kn=t.ActiveXObject&&function(){var t;for(t in Gn)Gn[t](e,!0)
};ue.ajaxSettings.xhr=t.ActiveXObject?function(){return!this.isLocal&&P()||H()}:P,Vn=ue.ajaxSettings.xhr(),ue.support.cors=!!Vn&&"withCredentials"in Vn,Vn=ue.support.ajax=!!Vn,Vn&&ue.ajaxTransport(function(n){if(!n.crossDomain||ue.support.cors){var r;
return{send:function(i,o){var s,a,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(a in n.xhrFields)u[a]=n.xhrFields[a];
n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(a in i)u.setRequestHeader(a,i[a])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(t,i){var a,l,c,f;
try{if(r&&(i||4===u.readyState))if(r=e,s&&(u.onreadystatechange=ue.noop,Kn&&delete Gn[s]),i)4!==u.readyState&&u.abort();
else{f={},a=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(f.text=u.responseText);
try{c=u.statusText}catch(h){c=""}a||!n.isLocal||n.crossDomain?1223===a&&(a=204):a=f.text?200:404
}}catch(p){i||o(-1,p)}f&&o(a,c,f,l)},n.async?4===u.readyState?setTimeout(r):(s=++Yn,Kn&&(Gn||(Gn={},ue(t).unload(Kn)),Gn[s]=r),u.onreadystatechange=r):r()
},abort:function(){r&&r(e,!0)}}}});var Zn,tr,er=/^(?:toggle|show|hide)$/,nr=RegExp("^(?:([+-])=|)("+le+")([a-z%]*)$","i"),rr=/queueHooks$/,ir=[R],or={"*":[function(t,e){var n,r,i=this.createTween(t,e),o=nr.exec(e),s=i.cur(),a=+s||0,u=1,l=20;
if(o){if(n=+o[2],r=o[3]||(ue.cssNumber[t]?"":"px"),"px"!==r&&a){a=ue.css(i.elem,t,!0)||n||1;
do u=u||".5",a/=u,ue.style(i.elem,t,a+r);while(u!==(u=i.cur()/s)&&1!==u&&--l)}i.unit=r,i.start=a,i.end=o[1]?a+(o[1]+1)*n:n
}return i}]};ue.Animation=ue.extend(I,{tweener:function(t,e){ue.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");
for(var n,r=0,i=t.length;i>r;r++)n=t[r],or[n]=or[n]||[],or[n].unshift(e)},prefilter:function(t,e){e?ir.unshift(t):ir.push(t)
}}),ue.Tween=B,B.prototype={constructor:B,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||"swing",this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ue.cssNumber[n]?"":"px")
},cur:function(){var t=B.propHooks[this.prop];return t&&t.get?t.get(this):B.propHooks._default.get(this)
},run:function(t){var e,n=B.propHooks[this.prop];return this.pos=e=this.options.duration?ue.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):B.propHooks._default.set(this),this
}},B.prototype.init.prototype=B.prototype,B.propHooks={_default:{get:function(t){var e;
return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=ue.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]
},set:function(t){ue.fx.step[t.prop]?ue.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[ue.cssProps[t.prop]]||ue.cssHooks[t.prop])?ue.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now
}}},B.propHooks.scrollTop=B.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)
}},ue.each(["toggle","show","hide"],function(t,e){var n=ue.fn[e];ue.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(W(e,!0),t,r,i)
}}),ue.fn.extend({fadeTo:function(t,e,n,r){return this.filter(C).css("opacity",0).show().end().animate({opacity:e},t,n,r)
},animate:function(t,e,n,r){var i=ue.isEmptyObject(t),o=ue.speed(e,n,r),s=function(){var e=I(this,ue.extend({},t),o);
s.finish=function(){e.stop(!0)},(i||ue._data(this,"finish"))&&e.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)
},stop:function(t,n,r){var i=function(t){var e=t.stop;delete t.stop,e(r)};return"string"!=typeof t&&(r=n,n=t,t=e),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,n=null!=t&&t+"queueHooks",o=ue.timers,s=ue._data(this);
if(n)s[n]&&s[n].stop&&i(s[n]);else for(n in s)s[n]&&s[n].stop&&rr.test(n)&&i(s[n]);
for(n=o.length;n--;)o[n].elem!==this||null!=t&&o[n].queue!==t||(o[n].anim.stop(r),e=!1,o.splice(n,1));
(e||!r)&&ue.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=ue._data(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=ue.timers,s=r?r.length:0;
for(n.finish=!0,ue.queue(this,t,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));
for(e=0;s>e;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),ue.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ue.fn[t]=function(t,n,r){return this.animate(e,t,n,r)
}}),ue.speed=function(t,e,n){var r=t&&"object"==typeof t?ue.extend({},t):{complete:n||!n&&e||ue.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ue.isFunction(e)&&e};
return r.duration=ue.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ue.fx.speeds?ue.fx.speeds[r.duration]:ue.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ue.isFunction(r.old)&&r.old.call(this),r.queue&&ue.dequeue(this,r.queue)
},r},ue.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2
}},ue.timers=[],ue.fx=B.prototype.init,ue.fx.tick=function(){var t,n=ue.timers,r=0;
for(Zn=ue.now();n.length>r;r++)t=n[r],t()||n[r]!==t||n.splice(r--,1);n.length||ue.fx.stop(),Zn=e
},ue.fx.timer=function(t){t()&&ue.timers.push(t)&&ue.fx.start()},ue.fx.interval=13,ue.fx.start=function(){tr||(tr=setInterval(ue.fx.tick,ue.fx.interval))
},ue.fx.stop=function(){clearInterval(tr),tr=null},ue.fx.speeds={slow:600,fast:200,_default:400},ue.fx.step={},ue.expr&&ue.expr.filters&&(ue.expr.filters.animated=function(t){return ue.grep(ue.timers,function(e){return t===e.elem
}).length}),ue.fn.offset=function(t){if(arguments.length)return t===e?this:this.each(function(e){ue.offset.setOffset(this,t,e)
});var n,r,i={top:0,left:0},o=this[0],s=o&&o.ownerDocument;if(s)return n=s.documentElement,ue.contains(n,o)?(typeof o.getBoundingClientRect!==J&&(i=o.getBoundingClientRect()),r=z(s),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i
},ue.offset={setOffset:function(t,e,n){var r=ue.css(t,"position");"static"===r&&(t.style.position="relative");
var i,o,s=ue(t),a=s.offset(),u=ue.css(t,"top"),l=ue.css(t,"left"),c=("absolute"===r||"fixed"===r)&&ue.inArray("auto",[u,l])>-1,f={},h={};
c?(h=s.position(),i=h.top,o=h.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),ue.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(f.top=e.top-a.top+i),null!=e.left&&(f.left=e.left-a.left+o),"using"in e?e.using.call(t,f):s.css(f)
}},ue.fn.extend({position:function(){if(this[0]){var t,e,n={top:0,left:0},r=this[0];
return"fixed"===ue.css(r,"position")?e=r.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),ue.nodeName(t[0],"html")||(n=t.offset()),n.top+=ue.css(t[0],"borderTopWidth",!0),n.left+=ue.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-ue.css(r,"marginTop",!0),left:e.left-n.left-ue.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||Q.documentElement;t&&!ue.nodeName(t,"html")&&"static"===ue.css(t,"position");)t=t.offsetParent;
return t||Q.documentElement})}}),ue.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r=/Y/.test(n);
ue.fn[t]=function(i){return ue.access(this,function(t,i,o){var s=z(t);return o===e?s?n in s?s[n]:s.document.documentElement[i]:t[i]:(s?s.scrollTo(r?ue(s).scrollLeft():o,r?o:ue(s).scrollTop()):t[i]=o,e)
},t,i,arguments.length,null)}}),ue.each({Height:"height",Width:"width"},function(t,n){ue.each({padding:"inner"+t,content:n,"":"outer"+t},function(r,i){ue.fn[i]=function(i,o){var s=arguments.length&&(r||"boolean"!=typeof i),a=r||(i===!0||o===!0?"margin":"border");
return ue.access(this,function(n,r,i){var o;return ue.isWindow(n)?n.document.documentElement["client"+t]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+t],o["scroll"+t],n.body["offset"+t],o["offset"+t],o["client"+t])):i===e?ue.css(n,r,a):ue.style(n,r,i,a)
},n,s?i:e,s,null)}})}),t.jQuery=t.$=ue,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return ue
})}(window),!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
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
},slide:function(e,n){var r,i=this.$element.find(".item.active"),o=n||i[e](),s=this.interval,a="next"==e?"left":"right",u="next"==e?"first":"last",l=this;
if(this.sliding=!0,s&&this.pause(),o=o.length?o:this.$element.find(".item")[u](),r=t.Event("slide",{relatedTarget:o[0],direction:a}),!o.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);
e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(r),r.isDefaultPrevented())return;
o.addClass(e),o[0].offsetWidth,i.addClass(a),o.addClass(a),this.$element.one(t.support.transition.end,function(){o.removeClass([e,a].join(" ")).addClass("active"),i.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")
},0)})}else{if(this.$element.trigger(r),r.isDefaultPrevented())return;i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")
}return s&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var r=t(this),i=r.data("carousel"),o=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),s="string"==typeof n?n:o.slide;
i||r.data("carousel",i=new e(this,o)),"number"==typeof n?i.to(n):s?i[s]():o.interval&&i.pause().cycle()
})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this
},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,r,i=t(this),o=t(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},o.data(),i.data());
o.carousel(s),(r=i.attr("data-slide-to"))&&o.data("carousel").pause().to(r).cycle(),e.preventDefault()
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
},keydown:function(e){var i,o,s,a,u;if(/(38|40|27)/.test(e.keyCode)&&(i=t(this),e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled"))){if(s=n(i),a=s.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&s.find(r).focus(),i.click();
o=t("[role=menu] li:not(.divider):visible a",s),o.length&&(u=o.index(o.filter(":focus")),38==e.keyCode&&u>0&&u--,40==e.keyCode&&o.length-1>u&&u++,~u||(u=0),o.eq(u).focus())
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
var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,r){var i,o,s,a,u;
for(this.type=e,this.$element=t(n),this.options=this.getOptions(r),this.enabled=!0,s=this.options.trigger.split(" "),u=s.length;u--;)a=s[u],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(i="hover"==a?"mouseenter":"focus",o="hover"==a?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.leave,this)));
this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e
},enter:function(e){var n,r=t.fn[this.type].defaults,i={};return this._options&&t.each(this._options,function(t,e){r[t]!=e&&(i[t]=e)
},this),n=t(e.currentTarget)[this.type](i).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()
},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);
return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()
},n.options.delay.hide),void 0):n.hide()},show:function(){var e,n,r,i,o,s,a=t.Event("show");
if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;
switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),r=e[0].offsetWidth,i=e[0].offsetHeight,o){case"bottom":s={top:n.top+n.height,left:n.left+n.width/2-r/2};
break;case"top":s={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":s={top:n.top+n.height/2-i/2,left:n.left-r};
break;case"right":s={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(s,o),this.$element.trigger("shown")
}},applyPlacement:function(t,e){var n,r,i,o,s=this.tip(),a=s[0].offsetWidth,u=s[0].offsetHeight;
s.offset(t).addClass(e).addClass("in"),n=s[0].offsetWidth,r=s[0].offsetHeight,"top"==e&&r!=u&&(t.top=t.top+u-r,o=!0),"bottom"==e||"top"==e?(i=0,0>t.left&&(i=-2*t.left,t.left=0,s.offset(t),n=s[0].offsetWidth,r=s[0].offsetHeight),this.replaceArrow(i-a+n,n,"left")):this.replaceArrow(r-u,r,"top"),o&&s.offset(t)
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
})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,r=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,s=this.activeTarget;
if(e>=r)return s!=(t=o.last()[0])&&this.activate(t);for(t=i.length;t--;)s!=o[t]&&e>=i[t]&&(!i[t+1]||i[t+1]>=e)&&this.activate(o[t])
},activate:function(e){var n,r;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")
}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var r=t(this),i=r.data("scrollspy"),o="object"==typeof n&&n;
i||r.data("scrollspy",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this
},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);
e.scrollspy(e.data())})})}(window.jQuery),!function(t){"use strict";var e=function(e){this.element=t(e)
};e.prototype={constructor:e,show:function(){var e,n,r,i=this.element,o=i.closest("ul:not(.dropdown-menu)"),s=i.attr("data-target");
s||(s=i.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(e=o.find(".active:last a")[0],r=t.Event("show",{relatedTarget:e}),i.trigger(r),r.isDefaultPrevented()||(n=t(s),this.activate(i.parent("li"),o),this.activate(n,n.parent(),function(){i.trigger({type:"shown",relatedTarget:e})
})))},activate:function(e,n,r){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),r&&r()
}var o=n.find("> .active"),s=r&&t.support.transition&&o.hasClass("fade");s?o.one(t.support.transition.end,i):i(),o.removeClass("in")
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
},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),r=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,s=o.bottom,a=o.top,u="affix affix-top affix-bottom";
"object"!=typeof o&&(s=a=o),"function"==typeof a&&(a=o.top()),"function"==typeof s&&(s=o.bottom()),e=null!=this.unpin&&r+this.unpin<=i.top?!1:null!=s&&i.top+this.$element.height()>=n-s?"bottom":null!=a&&a>=r?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?i.top-r:null,this.$element.removeClass(u).addClass("affix"+(e?"-"+e:"")))
}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var r=t(this),i=r.data("affix"),o="object"==typeof n&&n;
i||r.data("affix",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this
},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();
n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)
})})}(window.jQuery),function(t){function e(r){function o(t){return t&&"object"==typeof t&&!yr(t)&&Vn.call(t,"__wrapped__")?t:new q(t)
}function T(t,e,n){var r=t.length,i=r-e>=n;if(i)for(var o={},s=e-1;r>++s;){var a=In(t[s]);
(Vn.call(o,a)?o[a]:o[a]=[]).push(t[s])}return function(n){if(i){var r=In(n);return Vn.call(o,r)&&We(o[r],n)>-1
}return We(t,n,e)>-1}}function M(t){return t.charCodeAt(0)}function P(t,e){var r=t.index,i=e.index;
if(t=t.criteria,e=e.criteria,t!==e){if(t>e||t===n)return 1;if(e>t||e===n)return-1
}return i>r?-1:1}function H(t,e,n,r){function i(){var r=arguments,l=s?this:e;if(o||(t=e[a]),n.length&&(r=r.length?(r=W(r),u?r.concat(n):n.concat(r)):n),this instanceof i){R.prototype=t.prototype,l=new R,R.prototype=null;
var c=t.apply(l,r);return oe(c)?c:l}return t.apply(l,r)}var o=ie(t),s=!n,a=e;if(s){var u=r;
n=e}else if(!o){if(!r)throw new qn;e=t}return i}function L(){for(var t,e={arrays:"isArray(iterable)",bottom:"",init:"iterable",loop:"",top:"",useHas:!0,useKeys:!!xr},n=0;t=arguments[n];n++)for(var r in t)e[r]=t[r];
var i=e.args;e.firstArg=/^[^,]+/.exec(i)[0];var s=Mn("hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectTypes","return function("+i+") {\n"+dr(e)+"\n}");
return s(Vn,U,yr,ce,xr,o,O)}function F(t){return"\\"+A[t]}function I(t){return wr[t]
}function q(t){this.__wrapped__=t}function R(){}function B(t){var e=!1;if(!t||tr.call(t)!=E)return e;
var n=t.constructor;return(ie(n)?n instanceof n:pr.nodeClass||!isNode(t))?(Tr(t,function(t,n){e=n
}),e===!1||Vn.call(t,e)):e}function W(t,e,r){e||(e=0),r===n&&(r=t?t.length:0);for(var i=-1,o=r-e||0,s=On(0>o?0:o);o>++i;)s[i]=t[e+i];
return s}function z(t){return Cr[t]}function U(t){return tr.call(t)==w}function X(t,e,r,i,s,a){var u=t;
if("function"==typeof e&&(i=r,r=e,e=!1),"function"==typeof r){if(r=i===n?r:o.createCallback(r,i,1),u=r(u),u!==n)return u;
u=t}var l=oe(u);if(l){var c=tr.call(u);if(!$[c])return u;var f=yr(u)}if(!l||!e)return l?f?W(u):_r({},u):u;
var h=hr[c];switch(c){case _:case k:return new h(+u);case j:case S:return new h(u);
case N:return h(u.source,p.exec(u))}s||(s=[]),a||(a=[]);for(var d=s.length;d--;)if(s[d]==t)return a[d];
return u=f?h(u.length):{},f&&(Vn.call(t,"index")&&(u.index=t.index),Vn.call(t,"input")&&(u.input=t.input)),s.push(t),a.push(u),(f?_e:jr)(t,function(t,i){u[i]=X(t,e,r,n,s,a)
}),u}function J(t,e,n){return X(t,!0,e,n)}function Q(t,e,r){var i;return e=o.createCallback(e,r),jr(t,function(t,r,o){return e(t,r,o)?(i=r,!1):n
}),i}function G(t){var e=[];return Tr(t,function(t,n){ie(t)&&e.push(n)}),e.sort()
}function V(t,e){return t?Vn.call(t,e):!1}function Y(t){for(var e=-1,n=xr(t),r=n.length,i={};r>++e;){var o=n[e];
i[t[o]]=o}return i}function K(t){return t===!0||t===!1||tr.call(t)==_}function Z(t){return t instanceof Dn||tr.call(t)==k
}function te(t){return t?1===t.nodeType:!1}function ee(t){var e=!0;if(!t)return e;
var n=tr.call(t),r=t.length;return n==C||n==S||n==w||n==E&&"number"==typeof r&&ie(t.splice)?!r:(jr(t,function(){return e=!1
}),e)}function ne(t,e,r,i,s,u){var l=r===a;if(r&&!l){r=i===n?r:o.createCallback(r,i,2);
var c=r(t,e);if(c!==n)return!!c}if(t===e)return 0!==t||1/t==1/e;var f=typeof t,h=typeof e;
if(t===t&&(!t||"function"!=f&&"object"!=f)&&(!e||"function"!=h&&"object"!=h))return!1;
if(null==t||null==e)return t===e;var p=tr.call(t),d=tr.call(e);if(p==w&&(p=E),d==w&&(d=E),p!=d)return!1;
switch(p){case _:case k:return+t==+e;case j:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;
case N:case S:return t==In(e)}var g=p==C;if(!g){if(Vn.call(t,"__wrapped__ ")||Vn.call(e,"__wrapped__"))return ne(t.__wrapped__||t,e.__wrapped__||e,r,i,s,u);
if(p!=E)return!1;var m=t.constructor,v=e.constructor;if(m!=v&&!(ie(m)&&m instanceof m&&ie(v)&&v instanceof v))return!1
}s||(s=[]),u||(u=[]);for(var y=s.length;y--;)if(s[y]==t)return u[y]==e;var b=0;if(c=!0,s.push(t),u.push(e),g){if(y=t.length,b=e.length,c=b==t.length,!c&&!l)return c;
for(;b--;){var x=y,T=e[b];if(l)for(;x--&&!(c=ne(t[x],T,r,i,s,u)););else if(!(c=ne(t[b],T,r,i,s,u)))break
}return c}return Tr(e,function(e,o,a){return Vn.call(a,o)?(b++,c=Vn.call(t,o)&&ne(t[o],e,r,i,s,u)):n
}),c&&!l&&Tr(t,function(t,e,r){return Vn.call(r,e)?c=--b>-1:n}),c}function re(t){return rr(t)&&!ir(parseFloat(t))
}function ie(t){return"function"==typeof t}function oe(t){return t?O[typeof t]:!1
}function se(t){return ue(t)&&t!=+t}function ae(t){return null===t}function ue(t){return"number"==typeof t||tr.call(t)==j
}function le(t){return t instanceof Fn||tr.call(t)==N}function ce(t){return"string"==typeof t||tr.call(t)==S
}function fe(t){return t===n}function he(t,e,r){var i=arguments,s=0,u=2;if(!oe(t))return t;
if(r===a)var l=i[3],c=i[4],f=i[5];else c=[],f=[],"number"!=typeof r&&(u=i.length),u>3&&"function"==typeof i[u-2]?l=o.createCallback(i[--u-1],i[u--],2):u>2&&"function"==typeof i[u-1]&&(l=i[--u]);
for(;u>++s;)(yr(i[s])?_e:jr)(i[s],function(e,r){var i,o,s=e,u=t[r];if(e&&((o=yr(e))||Er(e))){for(var h=c.length;h--;)if(i=c[h]==e){u=f[h];
break}i||(u=o?yr(u)?u:[]:Er(u)?u:{},l&&(s=l(u,e),s!==n&&(u=s)),c.push(e),f.push(u),l||(u=he(u,e,a,l,c,f)))
}else l&&(s=l(u,e),s===n&&(s=e)),s!==n&&(u=s);t[r]=u});return t}function pe(t,e,n){var r="function"==typeof e,i={};
if(r)e=o.createCallback(e,n);else var s=Jn.apply(Rn,arguments);return Tr(t,function(t,n,o){(r?!e(t,n,o):0>We(s,n,1))&&(i[n]=t)
}),i}function de(t){for(var e=-1,n=xr(t),r=n.length,i=On(r);r>++e;){var o=n[e];i[e]=[o,t[o]]
}return i}function ge(t,e,n){var r={};if("function"!=typeof e)for(var i=0,s=Jn.apply(Rn,arguments),a=oe(t)?s.length:0;a>++i;){var u=s[i];
u in t&&(r[u]=t[u])}else e=o.createCallback(e,n),Tr(t,function(t,n,i){e(t,n,i)&&(r[n]=t)
});return r}function me(t){for(var e=-1,n=xr(t),r=n.length,i=On(r);r>++e;)i[e]=t[n[e]];
return i}function ve(t){for(var e=-1,n=Jn.apply(Rn,W(arguments,1)),r=n.length,i=On(r);r>++e;)i[e]=t[n[e]];
return i}function ye(t,e,r){var i=-1,o=t?t.length:0,s=!1;return r=(0>r?sr(0,o+r):r)||0,"number"==typeof o?s=(ce(t)?t.indexOf(e,r):We(t,e,r))>-1:jr(t,function(t){return++i>=r?!(s=t===e):n
}),s}function be(t,e,n){var r={};return e=o.createCallback(e,n),_e(t,function(t,n,i){n=In(e(t,n,i)),Vn.call(r,n)?r[n]++:r[n]=1
}),r}function xe(t,e,n){var r=!0;e=o.createCallback(e,n);var i=-1,s=t?t.length:0;
if("number"==typeof s)for(;s>++i&&(r=!!e(t[i],i,t)););else jr(t,function(t,n,i){return r=!!e(t,n,i)
});return r}function we(t,e,n){var r=[];e=o.createCallback(e,n);var i=-1,s=t?t.length:0;
if("number"==typeof s)for(;s>++i;){var a=t[i];e(a,i,t)&&r.push(a)}else jr(t,function(t,n,i){e(t,n,i)&&r.push(t)
});return r}function Ce(t,e,r){e=o.createCallback(e,r);var i=-1,s=t?t.length:0;if("number"!=typeof s){var a;
return jr(t,function(t,r,i){return e(t,r,i)?(a=t,!1):n}),a}for(;s>++i;){var u=t[i];
if(e(u,i,t))return u}}function _e(t,e,r){var i=-1,s=t?t.length:0;if(e=e&&r===n?e:o.createCallback(e,r),"number"==typeof s)for(;s>++i&&e(t[i],i,t)!==!1;);else jr(t,e);
return t}function ke(t,e,n){var r={};return e=o.createCallback(e,n),_e(t,function(t,n,i){n=In(e(t,n,i)),(Vn.call(r,n)?r[n]:r[n]=[]).push(t)
}),r}function Te(t,e){var n=W(arguments,2),r=-1,i="function"==typeof e,o=t?t.length:0,s=On("number"==typeof o?o:0);
return _e(t,function(t){s[++r]=(i?e:t[e]).apply(t,n)}),s}function je(t,e,n){var r=-1,i=t?t.length:0;
if(e=o.createCallback(e,n),"number"==typeof i)for(var s=On(i);i>++r;)s[r]=e(t[r],r,t);
else s=[],jr(t,function(t,n,i){s[++r]=e(t,n,i)});return s}function Ee(t,e,n){var r=-1/0,i=r;
if(!e&&yr(t))for(var s=-1,a=t.length;a>++s;){var u=t[s];u>i&&(i=u)}else e=!e&&ce(t)?M:o.createCallback(e,n),_e(t,function(t,n,o){var s=e(t,n,o);
s>r&&(r=s,i=t)});return i}function Ne(t,e,n){var r=1/0,i=r;if(!e&&yr(t))for(var s=-1,a=t.length;a>++s;){var u=t[s];
i>u&&(i=u)}else e=!e&&ce(t)?M:o.createCallback(e,n),_e(t,function(t,n,o){var s=e(t,n,o);
r>s&&(r=s,i=t)});return i}function Se(t,e){var n=-1,r=t?t.length:0;if("number"==typeof r)for(var i=On(r);r>++n;)i[n]=t[n][e];
return i||je(t,e)}function $e(t,e,n,r){if(!t)return n;var i=3>arguments.length;e=o.createCallback(e,r,4);
var s=-1,a=t.length;if("number"==typeof a)for(i&&(n=t[++s]);a>++s;)n=e(n,t[s],s,t);
else jr(t,function(t,r,o){n=i?(i=!1,t):e(n,t,r,o)});return n}function Oe(t,e,n,r){var i=t,s=t?t.length:0,a=3>arguments.length;
if("number"!=typeof s){var u=xr(t);s=u.length}return e=o.createCallback(e,r,4),_e(t,function(t,r,o){r=u?u[--s]:--s,n=a?(a=!1,i[r]):e(n,i[r],r,o)
}),n}function Ae(t,e,n){return e=o.createCallback(e,n),we(t,function(t,n,r){return!e(t,n,r)
})}function De(t){var e=-1,n=t?t.length:0,r=On("number"==typeof n?n:0);return _e(t,function(t){var n=Qn(lr()*(++e+1));
r[e]=r[n],r[n]=t}),r}function Me(t){var e=t?t.length:0;return"number"==typeof e?e:xr(t).length
}function Pe(t,e,n){var r;e=o.createCallback(e,n);var i=-1,s=t?t.length:0;if("number"==typeof s)for(;s>++i&&!(r=e(t[i],i,t)););else jr(t,function(t,n,i){return!(r=e(t,n,i))
});return!!r}function He(t,e,n){var r=-1,i=t?t.length:0,s=On("number"==typeof i?i:0);
for(e=o.createCallback(e,n),_e(t,function(t,n,i){s[++r]={criteria:e(t,n,i),index:r,value:t}
}),i=s.length,s.sort(P);i--;)s[i]=s[i].value;return s}function Le(t){return t&&"number"==typeof t.length?W(t):me(t)
}function Fe(t){for(var e=-1,n=t?t.length:0,r=[];n>++e;){var i=t[e];i&&r.push(i)}return r
}function Ie(t){for(var e=-1,n=t?t.length:0,r=Jn.apply(Rn,arguments),i=T(r,n,100),o=[];n>++e;){var s=t[e];
i(s)||o.push(s)}return o}function qe(t,e,n){var r=-1,i=t?t.length:0;for(e=o.createCallback(e,n);i>++r;)if(e(t[r],r,t))return r;
return-1}function Re(t,e,n){if(t){var r=0,i=t.length;if("number"!=typeof e&&null!=e){var s=-1;
for(e=o.createCallback(e,n);i>++s&&e(t[s],s,t);)r++}else if(r=e,null==r||n)return t[0];
return W(t,0,ar(sr(0,r),i))}}function Be(t,e,n,r){var i=-1,s=t?t.length:0,a=[];for("boolean"!=typeof e&&null!=e&&(r=n,n=e,e=!1),null!=n&&(n=o.createCallback(n,r));s>++i;){var u=t[i];
n&&(u=n(u,i,t)),yr(u)?Yn.apply(a,e?u:Be(u)):a.push(u)}return a}function We(t,e,n){var r=-1,i=t?t.length:0;
if("number"==typeof n)r=(0>n?sr(0,i+n):n||0)-1;else if(n)return r=Ve(t,e),t[r]===e?r:-1;
for(;i>++r;)if(t[r]===e)return r;return-1}function ze(t,e,n){if(!t)return[];var r=0,i=t.length;
if("number"!=typeof e&&null!=e){var s=i;for(e=o.createCallback(e,n);s--&&e(t[s],s,t);)r++
}else r=null==e||n?1:e||r;return W(t,0,ar(sr(0,i-r),i))}function Ue(t){var e=arguments,n=e.length,r={0:{}},i=-1,o=t?t.length:0,s=o>=100,a=[],u=a;
t:for(;o>++i;){var l=t[i];if(s)var c=In(l),f=Vn.call(r[0],c)?!(u=r[0][c]):u=r[0][c]=[];
if(f||0>We(u,l)){s&&u.push(l);for(var h=n;--h;)if(!(r[h]||(r[h]=T(e[h],0,100)))(l))continue t;
a.push(l)}}return a}function Xe(t,e,n){if(t){var r=0,i=t.length;if("number"!=typeof e&&null!=e){var s=i;
for(e=o.createCallback(e,n);s--&&e(t[s],s,t);)r++}else if(r=e,null==r||n)return t[i-1];
return W(t,sr(0,i-r))}}function Je(t,e,n){var r=t?t.length:0;for("number"==typeof n&&(r=(0>n?sr(0,r+n):ar(n,r-1))+1);r--;)if(t[r]===e)return r;
return-1}function Qe(t,e,n){t=+t||0,n=+n||1,null==e&&(e=t,t=0);for(var r=-1,i=sr(0,Un((e-t)/n)),o=On(i);i>++r;)o[r]=t,t+=n;
return o}function Ge(t,e,n){if("number"!=typeof e&&null!=e){var r=0,i=-1,s=t?t.length:0;
for(e=o.createCallback(e,n);s>++i&&e(t[i],i,t);)r++}else r=null==e||n?1:sr(0,e);return W(t,r)
}function Ve(t,e,n,r){var i=0,s=t?t.length:i;for(n=n?o.createCallback(n,r,1):bn,e=n(e);s>i;){var a=i+s>>>1;
e>n(t[a])?i=a+1:s=a}return i}function Ye(){return Ke(Jn.apply(Rn,arguments))}function Ke(t,e,n,r){var i=-1,s=t?t.length:0,a=[],u=a;
"boolean"!=typeof e&&null!=e&&(r=n,n=e,e=!1);var l=!e&&s>=75;if(l)var c={};for(null!=n&&(u=[],n=o.createCallback(n,r));s>++i;){var f=t[i],h=n?n(f,i,t):f;
if(l)var p=In(h),d=Vn.call(c,p)?!(u=c[p]):u=c[p]=[];(e?!i||u[u.length-1]!==h:d||0>We(u,h))&&((n||l)&&u.push(h),a.push(f))
}return a}function Ze(t){for(var e=-1,n=t?t.length:0,r=T(arguments,1,30),i=[];n>++e;){var o=t[e];
r(o)||i.push(o)}return i}function tn(t){for(var e=-1,n=t?Ee(Se(arguments,"length")):0,r=On(n);n>++e;)r[e]=Se(arguments,e);
return r}function en(t,e){for(var n=-1,r=t?t.length:0,i={};r>++n;){var o=t[n];e?i[o]=e[n]:i[o[0]]=o[1]
}return i}function nn(t,e){return 1>t?e():function(){return 1>--t?e.apply(this,arguments):n
}}function rn(t,e){return pr.fastBind||er&&arguments.length>2?er.call.apply(er,arguments):H(t,e,W(arguments,2))
}function on(t){for(var e=Jn.apply(Rn,arguments),n=e.length>1?0:(e=G(t),-1),r=e.length;r>++n;){var i=e[n];
t[i]=rn(t[i],t)}return t}function sn(t,e){return H(t,e,W(arguments,2),a)}function an(){var t=arguments;
return function(){for(var e=arguments,n=t.length;n--;)e=[t[n].apply(this,e)];return e[0]
}}function un(t,e,r){if(null==t)return bn;var i=typeof t;if("function"!=i){if("object"!=i)return function(e){return e[t]
};var o=xr(t);return function(e){for(var n=o.length,r=!1;n--&&(r=ne(e[o[n]],t[o[n]],a)););return r
}}return e!==n?1===r?function(n){return t.call(e,n)}:2===r?function(n,r){return t.call(e,n,r)
}:4===r?function(n,r,i,o){return t.call(e,n,r,i,o)}:function(n,r,i){return t.call(e,n,r,i)
}:t}function ln(t,e,n){function r(){a=null,n||(o=t.apply(s,i))}var i,o,s,a;return function(){var u=n&&!a;
return i=arguments,s=this,Xn(a),a=Zn(r,e),u&&(o=t.apply(s,i)),o}}function cn(t){var e=W(arguments,1);
return Zn(function(){t.apply(n,e)},1)}function fn(t,e){var r=W(arguments,2);return Zn(function(){t.apply(n,r)
},e)}function hn(t,e){var n={};return function(){var r=In(e?e.apply(this,arguments):arguments[0]);
return Vn.call(n,r)?n[r]:n[r]=t.apply(this,arguments)}}function pn(t){var e,n;return function(){return e?n:(e=!0,n=t.apply(this,arguments),t=null,n)
}}function dn(t){return H(t,W(arguments,1))}function gn(t){return H(t,W(arguments,1),null,a)
}function mn(t,e){function n(){a=new Dn,s=null,i=t.apply(o,r)}var r,i,o,s,a=0;return function(){var u=new Dn,l=e-(u-a);
return r=arguments,o=this,0>=l?(Xn(s),s=null,a=u,i=t.apply(o,r)):s||(s=Zn(n,l)),i
}}function vn(t,e){return function(){var n=[t];return Yn.apply(n,arguments),e.apply(this,n)
}}function yn(t){return null==t?"":In(t).replace(v,I)}function bn(t){return t}function xn(t){_e(G(t),function(e){var n=o[e]=t[e];
o.prototype[e]=function(){var t=this.__wrapped__,e=[t];Yn.apply(e,arguments);var r=n.apply(o,e);
return t&&"object"==typeof t&&t==r?this:new q(r)}})}function wn(){return r._=Wn,this
}function Cn(t,e){return null==t&&null==e&&(e=1),t=+t||0,null==e&&(e=t,t=0),t+Qn(lr()*((+e||0)-t+1))
}function _n(t,e){var r=t?t[e]:n;return ie(r)?t[e]():r}function kn(t,e,r){var i=o.templateSettings;
t||(t=""),r=kr({},r,i);var s,a=kr({},r.imports,i.imports),f=xr(a),p=me(a),g=0,v=r.interpolate||m,b="__p += '",w=Fn((r.escape||m).source+"|"+v.source+"|"+(v===d?h:m).source+"|"+(r.evaluate||m).source+"|$","g");
t.replace(w,function(e,n,r,i,o,a){return r||(r=i),b+=t.slice(g,a).replace(y,F),n&&(b+="' +\n__e("+n+") +\n'"),o&&(s=!0,b+="';\n"+o+";\n__p += '"),r&&(b+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),g=a+e.length,e
}),b+="';\n";var C=r.variable,_=C;_||(C="obj",b="with ("+C+") {\n"+b+"\n}\n"),b=(s?b.replace(u,""):b).replace(l,"$1").replace(c,"$1;"),b="function("+C+") {\n"+(_?"":C+" || ("+C+" = {});\n")+"var __t, __p = '', __e = _.escape"+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+b+"return __p\n}";
var k="\n/*\n//@ sourceURL="+(r.sourceURL||"/lodash/template/source["+x++ +"]")+"\n*/";
try{var T=Mn(f,"return "+b+k).apply(n,p)}catch(j){throw j.source=b,j}return e?T(e):(T.source=b,T)
}function Tn(t,e,n){t=(t=+t)>-1?t:0;var r=-1,i=On(t);for(e=o.createCallback(e,n,1);t>++r;)i[r]=e(r);
return i}function jn(t){return null==t?"":In(t).replace(f,z)}function En(t){var e=++s;
return In(null==t?"":t)+e}function Nn(t,e){return e(t),t}function Sn(){return In(this.__wrapped__)
}function $n(){return this.__wrapped__}r=r?D.defaults(t.Object(),r,D.pick(t,b)):t;
var On=r.Array,An=r.Boolean,Dn=r.Date,Mn=r.Function,Pn=r.Math,Hn=r.Number,Ln=r.Object,Fn=r.RegExp,In=r.String,qn=r.TypeError,Rn=On(),Bn=Ln(),Wn=r._,zn=Fn("^"+In(Bn.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Un=Pn.ceil,Xn=r.clearTimeout,Jn=Rn.concat,Qn=Pn.floor,Gn=zn.test(Gn=Ln.getPrototypeOf)&&Gn,Vn=Bn.hasOwnProperty,Yn=Rn.push,Kn=r.setImmediate,Zn=r.setTimeout,tr=Bn.toString,er=zn.test(er=W.bind)&&er,nr=zn.test(nr=On.isArray)&&nr,rr=r.isFinite,ir=r.isNaN,or=zn.test(or=Ln.keys)&&or,sr=Pn.max,ar=Pn.min,ur=r.parseInt,lr=Pn.random,cr=zn.test(r.attachEvent),fr=er&&!/\n|true/.test(er+cr),hr={};
hr[C]=On,hr[_]=An,hr[k]=Dn,hr[E]=Ln,hr[j]=Hn,hr[N]=Fn,hr[S]=In;var pr=o.support={};
pr.fastBind=er&&!fr,o.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:d,variable:"",imports:{_:o}};
var dr=function(t){var e="var index, iterable = "+t.firstArg+", result = "+t.init+";\nif (!iterable) return result;\n"+t.top+";\n";
return t.arrays&&(e+="var length = iterable.length; index = -1;\nif ("+t.arrays+") {\n  while (++index < length) {\n    "+t.loop+"\n  }\n}\nelse {  "),t.useHas&&t.useKeys?e+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? keys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    "+t.loop+"\n  }  ":(e+="\n  for (index in iterable) {",t.useHas&&(e+="\n    if (",t.useHas&&(e+="hasOwnProperty.call(iterable, index)"),e+=") {    "),e+=t.loop+";    ",t.useHas&&(e+="\n    }"),e+="\n  }  "),t.arrays&&(e+="\n}"),e+=t.bottom+";\nreturn result"
},gr={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},mr={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",arrays:!1,loop:"if (callback(iterable[index], index, collection) === false) return result"},vr={top:"if (!objectTypes[typeof iterable]) return result;\n"+mr.top,arrays:!1};
q.prototype=o.prototype;var yr=nr||function(t){return t instanceof On||tr.call(t)==C
},br=L({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)",arrays:!1}),xr=or?function(t){return oe(t)?or(t):[]
}:br,wr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cr=Y(wr),_r=L(gr,{top:gr.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),kr=L(gr),Tr=L(mr,vr,{useHas:!1}),jr=L(mr,vr),Er=function(t){if(!t||tr.call(t)!=E)return!1;
var e=t.valueOf,n="function"==typeof e&&(n=Gn(e))&&Gn(n);return n?t==n||Gn(t)==n:B(t)
},Nr=we;fr&&i&&"function"==typeof Kn&&(cn=rn(Kn,r));var Sr=8==ur("08")?ur:function(t,e){return ur(ce(t)?t.replace(g,""):t,e||0)
};return o.after=nn,o.assign=_r,o.at=ve,o.bind=rn,o.bindAll=on,o.bindKey=sn,o.compact=Fe,o.compose=an,o.countBy=be,o.createCallback=un,o.debounce=ln,o.defaults=kr,o.defer=cn,o.delay=fn,o.difference=Ie,o.filter=we,o.flatten=Be,o.forEach=_e,o.forIn=Tr,o.forOwn=jr,o.functions=G,o.groupBy=ke,o.initial=ze,o.intersection=Ue,o.invert=Y,o.invoke=Te,o.keys=xr,o.map=je,o.max=Ee,o.memoize=hn,o.merge=he,o.min=Ne,o.omit=pe,o.once=pn,o.pairs=de,o.partial=dn,o.partialRight=gn,o.pick=ge,o.pluck=Se,o.range=Qe,o.reject=Ae,o.rest=Ge,o.shuffle=De,o.sortBy=He,o.tap=Nn,o.throttle=mn,o.times=Tn,o.toArray=Le,o.union=Ye,o.uniq=Ke,o.values=me,o.where=Nr,o.without=Ze,o.wrap=vn,o.zip=tn,o.zipObject=en,o.collect=je,o.drop=Ge,o.each=_e,o.extend=_r,o.methods=G,o.object=en,o.select=we,o.tail=Ge,o.unique=Ke,xn(o),o.clone=X,o.cloneDeep=J,o.contains=ye,o.escape=yn,o.every=xe,o.find=Ce,o.findIndex=qe,o.findKey=Q,o.has=V,o.identity=bn,o.indexOf=We,o.isArguments=U,o.isArray=yr,o.isBoolean=K,o.isDate=Z,o.isElement=te,o.isEmpty=ee,o.isEqual=ne,o.isFinite=re,o.isFunction=ie,o.isNaN=se,o.isNull=ae,o.isNumber=ue,o.isObject=oe,o.isPlainObject=Er,o.isRegExp=le,o.isString=ce,o.isUndefined=fe,o.lastIndexOf=Je,o.mixin=xn,o.noConflict=wn,o.parseInt=Sr,o.random=Cn,o.reduce=$e,o.reduceRight=Oe,o.result=_n,o.runInContext=e,o.size=Me,o.some=Pe,o.sortedIndex=Ve,o.template=kn,o.unescape=jn,o.uniqueId=En,o.all=xe,o.any=Pe,o.detect=Ce,o.foldl=$e,o.foldr=Oe,o.include=ye,o.inject=$e,jr(o,function(t,e){o.prototype[e]||(o.prototype[e]=function(){var e=[this.__wrapped__];
return Yn.apply(e,arguments),t.apply(o,e)})}),o.first=Re,o.last=Xe,o.take=Re,o.head=Re,jr(o,function(t,e){o.prototype[e]||(o.prototype[e]=function(e,n){var r=t(this.__wrapped__,e,n);
return null==e||n&&"function"!=typeof e?r:new q(r)})}),o.VERSION="1.1.1",o.prototype.toString=Sn,o.prototype.value=$n,o.prototype.valueOf=$n,_e(["join","pop","shift"],function(t){var e=Rn[t];
o.prototype[t]=function(){return e.apply(this.__wrapped__,arguments)}}),_e(["push","reverse","sort","unshift"],function(t){var e=Rn[t];
o.prototype[t]=function(){return e.apply(this.__wrapped__,arguments),this}}),_e(["concat","slice","splice"],function(t){var e=Rn[t];
o.prototype[t]=function(){return new q(e.apply(this.__wrapped__,arguments))}}),o}var n,r="object"==typeof exports&&exports,i="object"==typeof module&&module&&module.exports==r&&module,o="object"==typeof global&&global;
o.global===o&&(t=o);var s=0,a={},u=/\b__p \+= '';/g,l=/\b(__p \+=) '' \+/g,c=/(__e\(.*?\)|\b__t\)) \+\n'';/g,f=/&(?:amp|lt|gt|quot|#39);/g,h=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,p=/\w*$/,d=/<%=([\s\S]+?)%>/g,g=/^0+(?=.$)/,m=/($^)/,v=/[&<>"']/g,y=/['\n\r\t\u2028\u2029\\]/g,b=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"],x=0,w="[object Arguments]",C="[object Array]",_="[object Boolean]",k="[object Date]",T="[object Function]",j="[object Number]",E="[object Object]",N="[object RegExp]",S="[object String]",$={};
$[T]=!1,$[w]=$[C]=$[_]=$[k]=$[j]=$[E]=$[N]=$[S]=!0;var O={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},A={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},D=e();
"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t._=D,define(function(){return D
})):r&&!r.nodeType?i?(i.exports=D)._=D:r._=D:t._=D}(this),function(){var t,e=this,n=e.Backbone,r=[],i=r.push,o=r.slice,s=r.splice;
t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="1.0.0";var a=e._;a||"undefined"==typeof require||(a=require("underscore")),t.$=e.jQuery||e.Zepto||e.ender||e.$,t.noConflict=function(){return e.Backbone=n,this
},t.emulateHTTP=!1,t.emulateJSON=!1;var u=t.Events={on:function(t,e,n){if(!c(this,"on",t,[e,n])||!e)return this;
this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);return r.push({callback:e,context:n,ctx:n||this}),this
},once:function(t,e,n){if(!c(this,"once",t,[e,n])||!e)return this;var r=this,i=a.once(function(){r.off(t,i),e.apply(this,arguments)
});return i._callback=e,this.on(t,i,n)},off:function(t,e,n){var r,i,o,s,u,l,f,h;if(!this._events||!c(this,"off",t,[e,n]))return this;
if(!t&&!e&&!n)return this._events={},this;for(s=t?[t]:a.keys(this._events),u=0,l=s.length;l>u;u++)if(t=s[u],o=this._events[t]){if(this._events[t]=r=[],e||n)for(f=0,h=o.length;h>f;f++)i=o[f],(e&&e!==i.callback&&e!==i.callback._callback||n&&n!==i.context)&&r.push(i);
r.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;
var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var n=this._events[t],r=this._events.all;
return n&&f(n,e),r&&f(r,arguments),this},stopListening:function(t,e,n){var r=this._listeners;
if(!r)return this;var i=!e&&!n;"object"==typeof e&&(n=this),t&&((r={})[t._listenerId]=t);
for(var o in r)r[o].off(e,n,this),i&&delete this._listeners[o];return this}},l=/\s+/,c=function(t,e,n,r){if(!n)return!0;
if("object"==typeof n){for(var i in n)t[e].apply(t,[i,n[i]].concat(r));return!1}if(l.test(n)){for(var o=n.split(l),s=0,a=o.length;a>s;s++)t[e].apply(t,[o[s]].concat(r));
return!1}return!0},f=function(t,e){var n,r=-1,i=t.length,o=e[0],s=e[1],a=e[2];switch(e.length){case 0:for(;i>++r;)(n=t[r]).callback.call(n.ctx);
return;case 1:for(;i>++r;)(n=t[r]).callback.call(n.ctx,o);return;case 2:for(;i>++r;)(n=t[r]).callback.call(n.ctx,o,s);
return;case 3:for(;i>++r;)(n=t[r]).callback.call(n.ctx,o,s,a);return;default:for(;i>++r;)(n=t[r]).callback.apply(n.ctx,e)
}},h={listenTo:"on",listenToOnce:"once"};a.each(h,function(t,e){u[e]=function(e,n,r){var i=this._listeners||(this._listeners={}),o=e._listenerId||(e._listenerId=a.uniqueId("l"));
return i[o]=e,"object"==typeof n&&(r=this),e[t](n,r,this),this}}),u.bind=u.on,u.unbind=u.off,a.extend(t,u);
var p=t.Model=function(t,e){var n,r=t||{};e||(e={}),this.cid=a.uniqueId("c"),this.attributes={},a.extend(this,a.pick(e,d)),e.parse&&(r=this.parse(r,e)||{}),(n=a.result(this,"defaults"))&&(r=a.defaults({},r,n)),this.set(r,e),this.changed={},this.initialize.apply(this,arguments)
},d=["url","urlRoot","collection"];a.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return a.clone(this.attributes)
},sync:function(){return t.sync.apply(this,arguments)},get:function(t){return this.attributes[t]
},escape:function(t){return a.escape(this.get(t))},has:function(t){return null!=this.get(t)
},set:function(t,e,n){var r,i,o,s,u,l,c,f;if(null==t)return this;if("object"==typeof t?(i=t,n=e):(i={})[t]=e,n||(n={}),!this._validate(i,n))return!1;
o=n.unset,u=n.silent,s=[],l=this._changing,this._changing=!0,l||(this._previousAttributes=a.clone(this.attributes),this.changed={}),f=this.attributes,c=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);
for(r in i)e=i[r],a.isEqual(f[r],e)||s.push(r),a.isEqual(c[r],e)?delete this.changed[r]:this.changed[r]=e,o?delete f[r]:f[r]=e;
if(!u){s.length&&(this._pending=!0);for(var h=0,p=s.length;p>h;h++)this.trigger("change:"+s[h],this,f[s[h]],n)
}if(l)return this;if(!u)for(;this._pending;)this._pending=!1,this.trigger("change",this,n);
return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,a.extend({},e,{unset:!0}))
},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,a.extend({},t,{unset:!0}))
},hasChanged:function(t){return null==t?!a.isEmpty(this.changed):a.has(this.changed,t)
},changedAttributes:function(t){if(!t)return this.hasChanged()?a.clone(this.changed):!1;
var e,n=!1,r=this._changing?this._previousAttributes:this.attributes;for(var i in t)a.isEqual(r[i],e=t[i])||((n||(n={}))[i]=e);
return n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null
},previousAttributes:function(){return a.clone(this._previousAttributes)},fetch:function(t){t=t?a.clone(t):{},void 0===t.parse&&(t.parse=!0);
var e=this,n=t.success;return t.success=function(r){return e.set(e.parse(r,t),t)?(n&&n(e,r,t),e.trigger("sync",e,r,t),void 0):!1
},L(this,t),this.sync("read",this,t)},save:function(t,e,n){var r,i,o,s=this.attributes;
if(null==t||"object"==typeof t?(r=t,n=e):(r={})[t]=e,!(!r||n&&n.wait||this.set(r,n)))return!1;
if(n=a.extend({validate:!0},n),!this._validate(r,n))return!1;r&&n.wait&&(this.attributes=a.extend({},s,r)),void 0===n.parse&&(n.parse=!0);
var u=this,l=n.success;return n.success=function(t){u.attributes=s;var e=u.parse(t,n);
return n.wait&&(e=a.extend(r||{},e)),a.isObject(e)&&!u.set(e,n)?!1:(l&&l(u,t,n),u.trigger("sync",u,t,n),void 0)
},L(this,n),i=this.isNew()?"create":n.patch?"patch":"update","patch"===i&&(n.attrs=r),o=this.sync(i,this,n),r&&n.wait&&(this.attributes=s),o
},destroy:function(t){t=t?a.clone(t):{};var e=this,n=t.success,r=function(){e.trigger("destroy",e,e.collection,t)
};if(t.success=function(i){(t.wait||e.isNew())&&r(),n&&n(e,i,t),e.isNew()||e.trigger("sync",e,i,t)
},this.isNew())return t.success(),!1;L(this,t);var i=this.sync("delete",this,t);return t.wait||r(),i
},url:function(){var t=a.result(this,"urlRoot")||a.result(this.collection,"url")||H();
return this.isNew()?t:t+("/"===t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)
},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return null==this.id},isValid:function(t){return this._validate({},a.extend(t||{},{validate:!0}))
},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=a.extend({},this.attributes,t);
var n=this.validationError=this.validate(t,e)||null;return n?(this.trigger("invalid",this,n,a.extend(e||{},{validationError:n})),!1):!0
}});var g=["keys","values","pairs","invert","pick","omit"];a.each(g,function(t){p.prototype[t]=function(){var e=o.call(arguments);
return e.unshift(this.attributes),a[t].apply(a,e)}});var m=t.Collection=function(t,e){e||(e={}),e.url&&(this.url=e.url),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,a.extend({silent:!0},e))
},v={add:!0,remove:!0,merge:!0},y={add:!0,merge:!1,remove:!1};a.extend(m.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)
})},sync:function(){return t.sync.apply(this,arguments)},add:function(t,e){return this.set(t,a.defaults(e||{},y))
},remove:function(t,e){t=a.isArray(t)?t.slice():[t],e||(e={});var n,r,i,o;for(n=0,r=t.length;r>n;n++)o=this.get(t[n]),o&&(delete this._byId[o.id],delete this._byId[o.cid],i=this.indexOf(o),this.models.splice(i,1),this.length--,e.silent||(e.index=i,o.trigger("remove",o,this,e)),this._removeReference(o));
return this},set:function(t,e){e=a.defaults(e||{},v),e.parse&&(t=this.parse(t,e)),a.isArray(t)||(t=t?[t]:[]);
var n,r,o,u,l,c=e.at,f=this.comparator&&null==c&&e.sort!==!1,h=a.isString(this.comparator)?this.comparator:null,p=[],d=[],g={};
for(n=0,r=t.length;r>n;n++)(o=this._prepareModel(t[n],e))&&((u=this.get(o))?(e.remove&&(g[u.cid]=!0),e.merge&&(u.set(o.attributes,e),f&&!l&&u.hasChanged(h)&&(l=!0))):e.add&&(p.push(o),o.on("all",this._onModelEvent,this),this._byId[o.cid]=o,null!=o.id&&(this._byId[o.id]=o)));
if(e.remove){for(n=0,r=this.length;r>n;++n)g[(o=this.models[n]).cid]||d.push(o);d.length&&this.remove(d,e)
}if(p.length&&(f&&(l=!0),this.length+=p.length,null!=c?s.apply(this.models,[c,0].concat(p)):i.apply(this.models,p)),l&&this.sort({silent:!0}),e.silent)return this;
for(n=0,r=p.length;r>n;n++)(o=p[n]).trigger("add",o,this,e);return l&&this.trigger("sort",this,e),this
},reset:function(t,e){e||(e={});for(var n=0,r=this.models.length;r>n;n++)this._removeReference(this.models[n]);
return e.previousModels=this.models,this._reset(),this.add(t,a.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this
},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,a.extend({at:this.length},e)),t
},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,a.extend({at:0},e)),t
},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(t,e){return this.models.slice(t,e)
},get:function(t){return null==t?void 0:this._byId[null!=t.id?t.id:t.cid||t]},at:function(t){return this.models[t]
},where:function(t,e){return a.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var n in t)if(t[n]!==e.get(n))return!1;
return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw Error("Cannot sort a set without a comparator");
return t||(t={}),a.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(a.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this
},sortedIndex:function(t,e,n){e||(e=this.comparator);var r=a.isFunction(e)?e:function(t){return t.get(e)
};return a.sortedIndex(this.models,t,r,n)},pluck:function(t){return a.invoke(this.models,"get",t)
},fetch:function(t){t=t?a.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,n=this;
return t.success=function(r){var i=t.reset?"reset":"set";n[i](r,t),e&&e(n,r,t),n.trigger("sync",n,r,t)
},L(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?a.clone(e):{},!(t=this._prepareModel(t,e)))return!1;
e.wait||this.add(t,e);var n=this,r=e.success;return e.success=function(i){e.wait&&n.add(t,e),r&&r(t,i,e)
},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t.collection||(t.collection=this),t;
e||(e={}),e.collection=this;var n=new this.model(t,e);return n._validate(t,e)?n:(this.trigger("invalid",this,t,e),!1)
},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)
},_onModelEvent:function(t,e,n,r){("add"!==t&&"remove"!==t||n===this)&&("destroy"===t&&this.remove(e,r),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))
}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
a.each(b,function(t){m.prototype[t]=function(){var e=o.call(arguments);return e.unshift(this.models),a[t].apply(a,e)
}});var x=["groupBy","countBy","sortBy"];a.each(x,function(t){m.prototype[t]=function(e,n){var r=a.isFunction(e)?e:function(t){return t.get(e)
};return a[t](this.models,r,n)}});var w=t.View=function(t){this.cid=a.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()
},C=/^(\S+)\s*(.*)$/,_=["model","collection","el","id","attributes","className","tagName","events"];
a.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this
},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,n){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this
},delegateEvents:function(t){if(!t&&!(t=a.result(this,"events")))return this;this.undelegateEvents();
for(var e in t){var n=t[e];if(a.isFunction(n)||(n=this[t[e]]),n){var r=e.match(C),i=r[1],o=r[2];
n=a.bind(n,this),i+=".delegateEvents"+this.cid,""===o?this.$el.on(i,n):this.$el.on(i,o,n)
}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this
},_configure:function(t){this.options&&(t=a.extend({},a.result(this,"options"),t)),a.extend(this,a.pick(t,_)),this.options=t
},_ensureElement:function(){if(this.el)this.setElement(a.result(this,"el"),!1);else{var e=a.extend({},a.result(this,"attributes"));
this.id&&(e.id=a.result(this,"id")),this.className&&(e["class"]=a.result(this,"className"));
var n=t.$("<"+a.result(this,"tagName")+">").attr(e);this.setElement(n,!1)}}}),t.sync=function(e,n,r){var i=k[e];
a.defaults(r||(r={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var o={type:i,dataType:"json"};
if(r.url||(o.url=a.result(n,"url")||H()),null!=r.data||!n||"create"!==e&&"update"!==e&&"patch"!==e||(o.contentType="application/json",o.data=JSON.stringify(r.attrs||n.toJSON(r))),r.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),r.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){o.type="POST",r.emulateJSON&&(o.data._method=i);
var s=r.beforeSend;r.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",i),s?s.apply(this,arguments):void 0
}}"GET"===o.type||r.emulateJSON||(o.processData=!1),"PATCH"!==o.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
});var u=r.xhr=t.ajax(a.extend(o,r));return n.trigger("request",n,u,r),u};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var T=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)
},j=/\((.*?)\)/g,E=/(\(\?)?:\w+/g,N=/\*\w+/g,S=/[\-{}\[\]+?.,\\\^$|#\s]/g;a.extend(T.prototype,u,{initialize:function(){},route:function(e,n,r){a.isRegExp(e)||(e=this._routeToRegExp(e)),a.isFunction(n)&&(r=n,n=""),r||(r=this[n]);
var i=this;return t.history.route(e,function(o){var s=i._extractParameters(e,o);r&&r.apply(i,s),i.trigger.apply(i,["route:"+n].concat(s)),i.trigger("route",n,s),t.history.trigger("route",i,n,s)
}),this},navigate:function(e,n){return t.history.navigate(e,n),this},_bindRoutes:function(){if(this.routes){this.routes=a.result(this,"routes");
for(var t,e=a.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(S,"\\$&").replace(j,"(?:$1)?").replace(E,function(t,e){return e?t:"([^/]+)"
}).replace(N,"(.*?)"),RegExp("^"+t+"$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);
return a.map(n,function(t){return t?decodeURIComponent(t):null})}});var $=t.History=function(){this.handlers=[],a.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)
},O=/^[#\/]|\s+$/g,A=/^\/+|\/+$/g,D=/msie [\w.]+/,M=/\/$/;$.started=!1,a.extend($.prototype,u,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);
return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;
var n=this.root.replace(M,"");t.indexOf(n)||(t=t.substr(n.length))}else t=this.getHash();
return t.replace(O,"")},start:function(e){if($.started)throw Error("Backbone.history has already been started");
$.started=!0,this.options=a.extend({},{root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var n=this.getFragment(),r=document.documentMode,i=D.exec(navigator.userAgent.toLowerCase())&&(!r||7>=r);
this.root=("/"+this.root+"/").replace(A,"/"),i&&this._wantsHashChange&&(this.iframe=t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(n)),this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=n;
var o=this.location,s=o.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!s?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&s&&o.hash&&(this.fragment=this.getHash().replace(O,""),this.history.replaceState({},document.title,this.root+this.fragment+o.search)),this.options.silent?void 0:this.loadUrl())
},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),$.started=!1
},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();
return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash()),void 0)
},loadUrl:function(t){var e=this.fragment=this.getFragment(t),n=a.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0
});return n},navigate:function(t,e){if(!$.started)return!1;if(e&&e!==!0||(e={trigger:e}),t=this.getFragment(t||""),this.fragment!==t){this.fragment=t;
var n=this.root+t;if(this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);
else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))
}e.trigger&&this.loadUrl(t)}},_updateHash:function(t,e,n){if(n){var r=t.href.replace(/(javascript:|#).*$/,"");
t.replace(r+"#"+e)}else t.hash="#"+e}}),t.history=new $;var P=function(t,e){var n,r=this;
n=t&&a.has(t,"constructor")?t.constructor:function(){return r.apply(this,arguments)
},a.extend(n,r,e);var i=function(){this.constructor=n};return i.prototype=r.prototype,n.prototype=new i,t&&a.extend(n.prototype,t),n.__super__=r.prototype,n
};p.extend=m.extend=T.extend=w.extend=$.extend=P;var H=function(){throw Error('A "url" property or function must be specified')
},L=function(t,e){var n=e.error;e.error=function(r){n&&n(t,r,e),t.trigger("error",t,r,e)
}}}.call(this);