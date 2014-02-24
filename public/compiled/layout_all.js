!function(t){"function"==typeof define?define(t):"function"==typeof YUI?YUI.add("es5",t):t()
}(function(){function t(){}function e(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t
}function n(t){var e=typeof t;return null===t||"undefined"===e||"boolean"===e||"number"===e||"string"===e
}function r(t){var e,r,i;if(n(t))return t;if(r=t.valueOf,"function"==typeof r&&(e=r.call(t),n(e)))return e;
if(i=t.toString,"function"==typeof i&&(e=i.call(t),n(e)))return e;throw new TypeError
}8!==parseInt("08")&&(parseInt=function(t){var e=/^0[xX]/;return function(n,r){return n=String(n).trim(),+r||(r=e.test(n)?16:10),t(n,r)
}}(parseInt)),Function.prototype.bind||(Function.prototype.bind=function(e){var n=this;
if("function"!=typeof n)throw new TypeError("Function.prototype.bind called on incompatible "+n);
for(var r=p.call(arguments,1),i=function(){if(this instanceof l){var t=n.apply(this,r.concat(p.call(arguments)));
return Object(t)===t?t:this}return n.apply(e,r.concat(p.call(arguments)))},o=Math.max(0,n.length-r.length),a=[],s=0;o>s;s++)a.push("$"+s);
var l=Function("binder","return function("+a.join(",")+"){return binder.apply(this,arguments)}")(i);
return n.prototype&&(t.prototype=n.prototype,l.prototype=new t,t.prototype=null),l
});var i,o,a,s,l,u=Function.prototype.call,c=Array.prototype,f=Object.prototype,p=c.slice,d=u.bind(f.toString),h=u.bind(f.hasOwnProperty);
if((l=h(f,"__defineGetter__"))&&(i=u.bind(f.__defineGetter__),o=u.bind(f.__defineSetter__),a=u.bind(f.__lookupGetter__),s=u.bind(f.__lookupSetter__)),2!=[1,2].splice(0).length){var g=Array.prototype.splice,v=Array.prototype.push,m=Array.prototype.unshift;
Array.prototype.splice=function(){function t(t){for(var e=[];t--;)e.unshift(t);return e
}var e,n=[];return n.splice.bind(n,0,0).apply(null,t(20)),n.splice.bind(n,0,0).apply(null,t(26)),e=n.length,n.splice(5,0,"XXX"),e+1==n.length?!0:void 0
}()?function(t,e){return arguments.length?g.apply(this,[void 0===t?0:t,void 0===e?this.length-t:e].concat(p.call(arguments,2))):[]
}:function(t,e){var n,r=p.call(arguments,2),i=r.length;if(!arguments.length)return[];
if(void 0===t&&(t=0),void 0===e&&(e=this.length-t),i>0){if(0>=e){if(t==this.length)return v.apply(this,r),[];
if(0==t)return m.apply(this,r),[]}return n=p.call(this,t,t+e),r.push.apply(r,p.call(this,t+e,this.length)),r.unshift.apply(r,p.call(this,0,t)),r.unshift(0,this.length),g.apply(this,r),n
}return g.call(this,t,e)}}if(1!=[].unshift(0)){var m=Array.prototype.unshift;Array.prototype.unshift=function(){return m.apply(this,arguments),this.length
}}Array.isArray||(Array.isArray=function(t){return"[object Array]"==d(t)});var y=Object("a"),b="a"!=y[0]||!(0 in y),x=!0;
if(Array.prototype.forEach&&Array.prototype.forEach.call("foo",function(t,e,n){"object"!=typeof n&&(x=!1)
}),Array.prototype.forEach&&x||(Array.prototype.forEach=function(t){var e=P(this),n=b&&"[object String]"==d(this)?this.split(""):e,r=arguments[1],i=-1,o=n.length>>>0;
if("[object Function]"!=d(t))throw new TypeError;for(;++i<o;)i in n&&t.call(r,n[i],i,e)
}),Array.prototype.map||(Array.prototype.map=function(t){var e=P(this),n=b&&"[object String]"==d(this)?this.split(""):e,r=n.length>>>0,i=Array(r),o=arguments[1];
if("[object Function]"!=d(t))throw new TypeError(t+" is not a function");for(var a=0;r>a;a++)a in n&&(i[a]=t.call(o,n[a],a,e));
return i}),Array.prototype.filter||(Array.prototype.filter=function(t){var e,n=P(this),r=b&&"[object String]"==d(this)?this.split(""):n,i=r.length>>>0,o=[],a=arguments[1];
if("[object Function]"!=d(t))throw new TypeError(t+" is not a function");for(var s=0;i>s;s++)s in r&&(e=r[s],t.call(a,e,s,n)&&o.push(e));
return o}),Array.prototype.every||(Array.prototype.every=function(t){var e=P(this),n=b&&"[object String]"==d(this)?this.split(""):e,r=n.length>>>0,i=arguments[1];
if("[object Function]"!=d(t))throw new TypeError(t+" is not a function");for(var o=0;r>o;o++)if(o in n&&!t.call(i,n[o],o,e))return!1;
return!0}),Array.prototype.some||(Array.prototype.some=function(t){var e=P(this),n=b&&"[object String]"==d(this)?this.split(""):e,r=n.length>>>0,i=arguments[1];
if("[object Function]"!=d(t))throw new TypeError(t+" is not a function");for(var o=0;r>o;o++)if(o in n&&t.call(i,n[o],o,e))return!0;
return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=P(this),n=b&&"[object String]"==d(this)?this.split(""):e,r=n.length>>>0;
if("[object Function]"!=d(t))throw new TypeError(t+" is not a function");if(!r&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");
var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o++];
break}if(++o>=r)throw new TypeError("reduce of empty array with no initial value")
}for(;r>o;o++)o in n&&(i=t.call(void 0,i,n[o],o,e));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=P(this),n=b&&"[object String]"==d(this)?this.split(""):e,r=n.length>>>0;
if("[object Function]"!=d(t))throw new TypeError(t+" is not a function");if(!r&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");
var i,o=r-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o--];
break}if(--o<0)throw new TypeError("reduceRight of empty array with no initial value")
}if(0>o)return i;do o in this&&(i=t.call(void 0,i,n[o],o,e));while(o--);return i}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(t){var n=b&&"[object String]"==d(this)?this.split(""):P(this),r=n.length>>>0;
if(!r)return-1;var i=0;for(arguments.length>1&&(i=e(arguments[1])),i=i>=0?i:Math.max(0,r+i);r>i;i++)if(i in n&&n[i]===t)return i;
return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(t){var n=b&&"[object String]"==d(this)?this.split(""):P(this),r=n.length>>>0;
if(!r)return-1;var i=r-1;for(arguments.length>1&&(i=Math.min(i,e(arguments[1]))),i=i>=0?i:r-Math.abs(i);i>=0;i--)if(i in n&&t===n[i])return i;
return-1}),!Object.keys){var w=!0,C=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],T=C.length;
for(var k in{toString:null})w=!1;Object.keys=function L(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");
var L=[];for(var e in t)h(t,e)&&L.push(e);if(w)for(var n=0,r=T;r>n;n++){var i=C[n];
h(t,i)&&L.push(i)}return L}}var j=-621987552e5,E="-000001";Date.prototype.toISOString&&-1!==new Date(j).toISOString().indexOf(E)||(Date.prototype.toISOString=function(){var t,e,n,r,i;
if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");
for(r=this.getUTCFullYear(),i=this.getUTCMonth(),r+=Math.floor(i/12),i=(i%12+12)%12,t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(0>r?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(r>=0&&9999>=r?-4:-6),e=t.length;e--;)n=t[e],10>n&&(t[e]="0"+n);
return r+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"
});var _=!1;try{_=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(j).toJSON().indexOf(E)&&Date.prototype.toJSON.call({toISOString:function(){return!0
}})}catch(S){}_||(Date.prototype.toJSON=function(){var t,e=Object(this),n=r(e);if("number"==typeof n&&!isFinite(n))return null;
if(t=e.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");
return t.call(e)}),Date=function(t){function e(n,r,i,o,a,s,l){var u=arguments.length;
if(this instanceof t){var c=1==u&&String(n)===n?new t(e.parse(n)):u>=7?new t(n,r,i,o,a,s,l):u>=6?new t(n,r,i,o,a,s):u>=5?new t(n,r,i,o,a):u>=4?new t(n,r,i,o):u>=3?new t(n,r,i):u>=2?new t(n,r):u>=1?new t(n):new t;
return c.constructor=e,c}return t.apply(this,arguments)}function n(t,e){var n=e>1?1:0;
return o[e]+Math.floor((t-1969+n)/4)-Math.floor((t-1901+n)/100)+Math.floor((t-1601+n)/400)+365*(t-1970)
}function r(e){return Number(new t(1970,0,1,0,0,0,e))}var i=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),o=[0,31,59,90,120,151,181,212,243,273,304,334,365];
for(var a in t)e[a]=t[a];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var o=i.exec(e);
if(o){var a,s=Number(o[1]),l=Number(o[2]||1)-1,u=Number(o[3]||1)-1,c=Number(o[4]||0),f=Number(o[5]||0),p=Number(o[6]||0),d=Math.floor(1e3*Number(o[7]||0)),h=Boolean(o[4]&&!o[8]),g="-"===o[9]?1:-1,v=Number(o[10]||0),m=Number(o[11]||0);
return(f>0||p>0||d>0?24:25)>c&&60>f&&60>p&&1e3>d&&l>-1&&12>l&&24>v&&60>m&&u>-1&&u<n(s,l+1)-n(s,l)&&(a=60*(24*(n(s,l)+u)+c+v*g),a=1e3*(60*(a+f+m*g)+p)+d,h&&(a=r(a)),a>=-864e13&&864e13>=a)?a:0/0
}return t.parse.apply(this,arguments)},e}(Date),Date.now||(Date.now=function(){return(new Date).getTime()
}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function t(t,e){for(var n=-1;++n<a;)e+=t*s[n],s[n]=e%o,e=Math.floor(e/o)
}function e(t){for(var e=a,n=0;--e>=0;)n+=s[e],s[e]=Math.floor(n/t),n=n%t*o}function n(){for(var t=a,e="";--t>=0;)if(""!==e||0===t||0!==s[t]){var n=String(s[t]);
""===e?e=n:e+="0000000".slice(0,7-n.length)+n}return e}function r(t,e,n){return 0===e?n:e%2===1?r(t,e-1,n*t):r(t*t,e/2,n)
}function i(t){for(var e=0;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}var o,a,s;
o=1e7,a=6,s=[0,0,0,0,0,0],Number.prototype.toFixed=function(o){var a,s,l,u,c,f,p,d;
if(a=Number(o),a=a!==a?0:Math.floor(a),0>a||a>20)throw new RangeError("Number.toFixed called with invalid number of decimals");
if(s=Number(this),s!==s)return"NaN";if(-1e21>=s||s>=1e21)return String(s);if(l="",0>s&&(l="-",s=-s),u="0",s>1e-21)if(c=i(s*r(2,69,1))-69,f=0>c?s*r(2,-c,1):s/r(2,c,1),f*=4503599627370496,c=52-c,c>0){for(t(0,f),p=a;p>=7;)t(1e7,0),p-=7;
for(t(r(10,p,1),0),p=c-1;p>=23;)e(1<<23),p-=23;e(1<<p),t(1,1),e(2),u=n()}else t(0,f),t(1<<-c,0),u=n()+"0.00000000000000000000".slice(2,2+a);
return a>0?(d=u.length,u=a>=d?l+"0.0000000000000000000".slice(0,a-d+2)+u:l+u.slice(0,d-a)+"."+u.slice(d-a)):u=l+u,u
}}();var N=String.prototype.split;if(2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t=void 0===/()??/.exec("")[1];
String.prototype.split=function(e,n){var r=this;if(void 0===e&&0===n)return[];if("[object RegExp]"!==Object.prototype.toString.call(e))return N.apply(this,arguments);
var i,o,a,s,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),c=0,e=new RegExp(e.source,u+"g");
for(r+="",t||(i=new RegExp("^"+e.source+"$(?!\\s)",u)),n=void 0===n?-1>>>0:n>>>0;(o=e.exec(r))&&(a=o.index+o[0].length,!(a>c&&(l.push(r.slice(c,o.index)),!t&&o.length>1&&o[0].replace(i,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(o[t]=void 0)
}),o.length>1&&o.index<r.length&&Array.prototype.push.apply(l,o.slice(1)),s=o[0].length,c=a,l.length>=n)));)e.lastIndex===o.index&&e.lastIndex++;
return c===r.length?(s||!e.test(""))&&l.push(""):l.push(r.slice(c)),l.length>n?l.slice(0,n):l
}}():"0".split(void 0,0).length&&(String.prototype.split=function(t,e){return void 0===t&&0===e?[]:N.apply(this,arguments)
}),"".substr&&"b"!=="0b".substr(-1)){var O=String.prototype.substr;String.prototype.substr=function(t,e){return O.call(this,0>t?(t=this.length+t)<0?0:t:t,e)
}}var A="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||A.trim()){A="["+A+"]";
var $=new RegExp("^"+A+A+"*"),D=new RegExp(A+A+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");
return String(this).replace($,"").replace(D,"")}}var P=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");
return Object(t)}}),function(t){"function"==typeof define?define(t):"function"==typeof YUI?YUI.add("es5-sham",t):t()
}(function(){function t(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value
}catch(e){}}function e(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t
}catch(e){}}var n,r,i,o,a,s=Function.prototype.call,l=Object.prototype,u=s.bind(l.hasOwnProperty);
if((a=u(l,"__defineGetter__"))&&(n=s.bind(l.__defineGetter__),r=s.bind(l.__defineSetter__),i=s.bind(l.__lookupGetter__),o=s.bind(l.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:l)
}),Object.defineProperty){var c=t({}),f="undefined"==typeof document||t(document.createElement("div"));
if(!f||!c)var p=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||p){var d="Object.getOwnPropertyDescriptor called on a non-object: ";
Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(d+t);
if(p)try{return p.call(Object,t,e)}catch(n){}if(u(t,e)){var r={enumerable:!0,configurable:!0};
if(a){var s=t.__proto__;t.__proto__=l;var c=i(t,e),f=o(t,e);if(t.__proto__=s,c||f)return c&&(r.get=c),f&&(r.set=f),r
}return r.value=t[e],r.writable=!0,r}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)
}),!Object.create){var h,g=null===Object.prototype.__proto__;h=g||"undefined"==typeof document?function(){return{__proto__:null}
}:function(){function t(){}var e=document.createElement("iframe"),n=document.body||document.documentElement;
e.style.display="none",n.appendChild(e),e.src="javascript:";var r=e.contentWindow.Object.prototype;
return n.removeChild(e),e=null,delete r.constructor,delete r.hasOwnProperty,delete r.propertyIsEnumerable,delete r.isPrototypeOf,delete r.toLocaleString,delete r.toString,delete r.valueOf,r.__proto__=null,t.prototype=r,h=function(){return new t
},new t},Object.create=function(t,e){function n(){}var r;if(null===t)r=h();else{if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object prototype may only be an Object or null");
n.prototype=t,r=new n,r.__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r
}}if(Object.defineProperty){var v=e({}),m="undefined"==typeof document||e(document.createElement("div"));
if(!v||!m)var y=Object.defineProperty,b=Object.defineProperties}if(!Object.defineProperty||y){var x="Property description must be an object: ",w="Object.defineProperty called on non-object: ",C="getters & setters can not be defined on this javascript engine";
Object.defineProperty=function(t,e,s){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(w+t);
if("object"!=typeof s&&"function"!=typeof s||null===s)throw new TypeError(x+s);if(y)try{return y.call(Object,t,e,s)
}catch(c){}if(u(s,"value"))if(a&&(i(t,e)||o(t,e))){var f=t.__proto__;t.__proto__=l,delete t[e],t[e]=s.value,t.__proto__=f
}else t[e]=s.value;else{if(!a)throw new TypeError(C);u(s,"get")&&n(t,e,s.get),u(s,"set")&&r(t,e,s.set)
}return t}}(!Object.defineProperties||b)&&(Object.defineProperties=function(t,e){if(b)try{return b.call(Object,t,e)
}catch(n){}for(var r in e)u(e,r)&&"__proto__"!=r&&Object.defineProperty(t,r,e[r]);
return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t
});try{Object.freeze(function(){})}catch(T){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)
}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){return t
}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1
}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError;
for(var e="";u(t,e);)e+="?";t[e]=!0;var n=u(t,e);return delete t[e],n})});var arePropertyDescriptorsSupported=function(){var t=function(){return Object.defineProperty({},"x",{}),!0
},e=!1;try{e=t()}catch(n){}return e},main=function(){"use strict";var t="undefined"==typeof global?window:global,e=t.isFinite,n=!!Object.defineProperty&&arePropertyDescriptorsSupported(),r=function(t,e){Object.keys(e).forEach(function(r){var i=e[r];
r in t||(n?Object.defineProperty(t,r,{configurable:!0,enumerable:!1,writable:!0,value:i}):t[r]=i)
})},i={ToInt32:function(t){return t>>0},ToUint32:function(t){return t>>>0}};if(r(String,{fromCodePoint:function(){for(var t,e=arguments,n=[],r=0,i=e.length;i>r;r++){if(t=Number(e[r]),!Object.is(t,Number.toInteger(t))||0>t||t>1114111)throw new RangeError("Invalid code point "+t);
65536>t?n.push(String.fromCharCode(t)):(t-=65536,n.push(String.fromCharCode((t>>10)+55296)),n.push(String.fromCharCode(t%1024+56320)))
}return n.join("")},raw:function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1),n=Object(t),r=n.raw,o=Object(r),a=Object.keys(o).length,s=i.ToUint32(a);
if(0===s)return"";for(var l,u,c,f,p=[],d=0;s>d&&(l=String(d),u=o[l],c=String(u),p.push(c),!(d+1>=s))&&(u=e[l],"undefined"!=typeof u);)f=String(u),p.push(f),d++;
return p.join("")}}),r(String.prototype,{repeat:function(t){if(t=Number.toInteger(t),0>t||1/0===t)throw new RangeError;
var e=String(this);if(1>t)return"";if(t%2)return e.repeat(t-1)+e;var n=e.repeat(t/2);
return n+n},startsWith:function(t){var e=arguments[1],n=(t.toString(),String(this)),r=void 0===e?0:Number.toInteger(e),i=n.length,o=Math.min(Math.max(r,0),i),a=t.length;
if(a+o>i)return!1;var s="".indexOf.call(n,t,o);return s===o},endsWith:function(t){var e=arguments[1],n=String(this),r=(t.toString(),n.length),i=void 0===e?r:Number.toInteger(e),o=Math.min(Math.max(i,0),r),a=t.length,s=o-a;
if(0>s)return!1;var l="".indexOf.call(n,t,s);return l===s},contains:function(t){var e=arguments[1];
return-1!=="".indexOf.call(this,t,e)},codePointAt:function(t){var e=String(this),n=Number.toInteger(t),r=e.length;
if(0>n||n>=r)return void 0;var i=e.charCodeAt(n),o=n+1===r;if(55296>i||i>56319||o)return i;
var a=e.charCodeAt(n+1);return 56320>a||a>57343?i:1024*(i-55296)+(a-56320)+65536}}),r(Array,{from:function(t){for(var e=arguments[1],n=arguments[2],r=Object(t),o=i.ToUint32(r.length),a="function"==typeof this?Object(new this(o)):new Array(o),s=0;o>s;s++){var l=r[s];
a[s]=e?e.call(n,l):l}return a.length=o,a},of:function(){return Array.from(arguments)
}}),r(Array.prototype,{find:function(t){var e=Object(this),n=i.ToUint32(e.length);
if(0===n)return void 0;if("function"!=typeof t)throw new TypeError("Array#find: predicate must be a function");
for(var r,o=arguments[1],a=0;n>a&&a in e;a++)if(r=e[a],t.call(o,r,a,e))return r;return void 0
},findIndex:function(t){var e=Object(this),n=i.ToUint32(e.length);if(0===n)return-1;
if("function"!=typeof t)throw new TypeError("Array#findIndex: predicate must be a function");
for(var r,o=arguments[1],a=0;n>a&&a in e;a++)if(r=e[a],t.call(o,r,a,e))return a;return-1
}}),r(Number,{MAX_INTEGER:9007199254740991,EPSILON:2.220446049250313e-16,parseInt:t.parseInt,parseFloat:t.parseFloat,isFinite:function(t){return"number"==typeof t&&e(t)
},isInteger:function(t){return Number.isFinite(t)&&t>=-9007199254740992&&t<=Number.MAX_INTEGER&&Math.floor(t)===t
},isNaN:function(t){return Object.is(t,0/0)},toInteger:function(t){var e=+t;return Object.is(e,0/0)?0:0!==e&&Number.isFinite(e)?Math.sign(e)*Math.floor(Math.abs(e)):e
}}),r(Number.prototype,{clz:function(){var t=+this;return t&&Number.isFinite(t)?(t=0>t?Math.ceil(t):Math.floor(t),t-=4294967296*Math.floor(t/4294967296),32-t.toString(2).length):32
}}),n&&(r(Object,{getOwnPropertyDescriptors:function(t){var e={};return Object.getOwnPropertyNames(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)
}),e},getPropertyDescriptor:function(t,e){for(var n=Object.getOwnPropertyDescriptor(t,e),r=Object.getPrototypeOf(t);void 0===n&&null!==r;)n=Object.getOwnPropertyDescriptor(r,e),r=Object.getPrototypeOf(r);
return n},getPropertyNames:function(t){for(var e=Object.getOwnPropertyNames(t),n=Object.getPrototypeOf(t),r=function(t){-1===e.indexOf(t)&&e.push(t)
};null!==n;)Object.getOwnPropertyNames(n).forEach(r),n=Object.getPrototypeOf(n);return e
},assign:function(t,e){return Object.keys(e).reduce(function(t,n){return t[n]=e[n],t
},t)},mixin:function(t,e){var n=Object.getOwnPropertyNames(e);return n.reduce(function(t,n){var r=Object.getOwnPropertyDescriptor(e,n);
return Object.defineProperty(t,n,r)},t)}}),r(Object,{setPrototypeOf:function(t,e){var n,r=function(t,e){if("object"!=typeof t||null===t)throw new TypeError("can not set prototype on a non-object");
if("object"!=typeof e&&null!==e)throw new TypeError("can only set prototype to an object or null")
},i=function(t,e){return r(t,e),n.call(t,e),t};try{n=t.getOwnPropertyDescriptor(t.prototype,e).set,n.call({},null)
}catch(o){if(t.prototype!=={}[e])return;n=function(t){this[e]=t},i.polyfill=i(i({},null),t.prototype)instanceof t
}return i}(Object,"__proto__")})),r(Object,{getOwnPropertyKeys:function(t){return Object.keys(t)
},is:function(t,e){return t===e?0===t?1/t===1/e:!0:t!==t&&e!==e}}),r(Math,{acosh:function(t){return Number.isNaN(t)||1>t?0/0:1===t?0:1/0===t?1/0:Math.log(t+Math.sqrt(t*t-1))
},asinh:function(t){return Number.isNaN(t)?0/0:0===t?t:1/0===t||t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))
},atanh:function(t){return Number.isNaN(t)||-1>t||t>1?0/0:-1===t?-1/0:1===t?1/0:0===t?t:.5*Math.log((1+t)/(1-t))
},cbrt:function(t){if(0===t)return t;var e,n=0>t;return n&&(t=-t),e=Math.pow(t,1/3),n?-e:e
},cosh:function(t){return 0===t?1:1/0===t||t===-1/0?t:Number.isNaN(t)?0/0:(0>t&&(t=-t),t>21?Math.exp(t)/2:(Math.exp(t)+Math.exp(-t))/2)
},expm1:function(t){if(Number.isNaN(t))return 0/0;if(0===t)return t;if(1/0===t)return 1/0;
if(t===-1/0)return-1;for(var e=0,n=50,r=1;n>r;r++){for(var i=2,o=1;r>=i;i++)o*=i;
e+=Math.pow(t,r)/o}return e},hypot:function(t,e,n){var r=!1,i=!1,o=!0;return[t,e,n].some(function(t){return Number.isNaN(t)?r=!0:1/0===t||t===-1/0?i=!0:0!==t&&(o=!1),i||r
}),i?1/0:r?0/0:o?0:(null==t&&(t=0),null==e&&(e=0),null==n&&(n=0),Math.sqrt(t*t+e*e+n*n))
},log2:function(t){return Number.isNaN(t)||0>t?0/0:0===t?-1/0:1===t?0:1/0===t?1/0:Math.log(t)*(1/Math.LN2)
},log10:function(t){return Number.isNaN(t)||0>t?0/0:0===t?-1/0:1===t?0:1/0===t?1/0:Math.log(t)*(1/Math.LN10)
},log1p:function(t){if(Number.isNaN(t)||-1>t)return 0/0;if(-1===t)return-1/0;if(0===t)return t;
if(1/0===t)return 1/0;var e=0,n=50;if(0>t||t>1)return Math.log(1+t);for(var r=1;n>r;r++)r%2===0?e-=Math.pow(t,r)/r:e+=Math.pow(t,r)/r;
return e},sign:function(t){var e=+t;return 0===e?e:Object.is(e,0/0)?e:0>e?-1:1},sinh:function(t){return Number.isNaN(t)?0/0:0===t?t:1/0===t||t===-1/0?t:(Math.exp(t)-Math.exp(-t))/2
},tanh:function(t){return Number.isNaN(t)?0/0:0===t?t:1/0===t?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))
},trunc:function(t){return Number.isNaN(t)?0/0:1/0===t||t===-1/0?t:0===t?t:~~t}}),n){var o={Map:function(){function t(t,e){this.key=t,this.value=e,this.next=null
}function e(t,e){this.i=t._head,this.kind=e}function n(){if(!(this instanceof n))return new n;
var e=new t(null,null);r(this,{_head:e,_size:0}),Object.defineProperty(this,"size",{configurable:!0,enumerable:!1,get:function(){return this._size
}.bind(this)})}var i={};return t.prototype.isRemoved=function(){return this.key===i
},e.prototype={next:function(){var t=this.i;if(null!==t){for(;t.isRemoved();)t=t.next;
t=t.next,this.i=t}if(null===t)throw new Error;var e=this.kind;return"key"===e?t.key:"value"===e?t.value:[t.key,t.value]
}},r(n.prototype,{get:function(t){for(var e=this._head;null!==(e=e.next);)if(Object.is(e.key,t))return e.value;
return void 0},has:function(t){for(var e=this._head;null!==(e=e.next);)if(Object.is(e.key,t))return!0;
return!1},set:function(e,n){for(var r=this._head,i=r;null!==(r=r.next);){if(Object.is(r.key,e))return void(r.value=n);
i=r}var o=new t(e,n);i.next=o,this._size+=1},"delete":function(t){for(var e=this._head,n=e;null!==(e=e.next);){if(Object.is(e.key,t))return n.next=e.next,e.key=i,e.value=i,e.next=n,this._size-=1,!0;
n=e}return!1},clear:function(){var t=this._head,e=t.next;for(this._size=0,t.next=null;null!==e;){var n=e.next;
e.key=i,e.value=i,e.next=t,e=n}},keys:function(){return new e(this,"key")},values:function(){return new e(this,"value")
},entries:function(){return new e(this,"key+value")},forEach:function(t){for(var e=arguments.length>1?arguments[1]:null,n=this,r=this._head;null!==(r=r.next);)for(t.call(e,r.value,r.key,n);r.isRemoved();)r=r.next
}}),n}(),Set:function(){var t=function(){return this instanceof t?(r(this,{"[[SetData]]":new Map}),void Object.defineProperty(this,"size",{configurable:!0,enumerable:!1,get:function(){return this["[[SetData]]"].size
}.bind(this)})):new t};return r(t.prototype,{has:function(t){return this["[[SetData]]"].has(t)
},add:function(t){return this["[[SetData]]"].set(t,t)},"delete":function(t){return this["[[SetData]]"]["delete"](t)
},clear:function(){return this["[[SetData]]"].clear()},keys:function(){return this["[[SetData]]"].keys()
},values:function(){return this["[[SetData]]"].values()},entries:function(){return this["[[SetData]]"].entries()
},forEach:function(t){var e=arguments.length>1?arguments[1]:null,n=this;this["[[SetData]]"].forEach(function(r,i){t.call(e,i,i,n)
})}}),t}()};if(r(t,o),t.Map||t.Set){var a="function"!=typeof t.Map.prototype.clear,s=0!==typeof(new t.Set).size,l=0!==typeof(new t.Map).size,u="function"!=typeof Set.prototype.keys;
(a||s||l||u)&&(t.Map=o.Map,t.Set=o.Set)}}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd?define(main):main(),function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");
return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=t.length,n=oe.type(t);
return"function"===n||oe.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t
}function r(t,e,n){if(oe.isFunction(e))return oe.grep(t,function(t,r){return!!e.call(t,r,t)!==n
});if(e.nodeType)return oe.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(de.test(e))return oe.filter(e,t,n);
e=oe.filter(e,t)}return oe.grep(t,function(t){return oe.inArray(t,e)>=0!==n})}function i(t,e){do t=t[e];
while(t&&1!==t.nodeType);return t}function o(t){var e=we[t]={};return oe.each(t.match(xe)||[],function(t,n){e[n]=!0
}),e}function a(){ge.addEventListener?(ge.removeEventListener("DOMContentLoaded",s,!1),t.removeEventListener("load",s,!1)):(ge.detachEvent("onreadystatechange",s),t.detachEvent("onload",s))
}function s(){(ge.addEventListener||"load"===event.type||"complete"===ge.readyState)&&(a(),oe.ready())
}function l(t,e,n){if(void 0===n&&1===t.nodeType){var r="data-"+e.replace(Ee,"-$1").toLowerCase();
if(n=t.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:je.test(n)?oe.parseJSON(n):n
}catch(i){}oe.data(t,e,n)}else n=void 0}return n}function u(t){var e;for(e in t)if(("data"!==e||!oe.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;
return!0}function c(t,e,n,r){if(oe.acceptData(t)){var i,o,a=oe.expando,s=t.nodeType,l=s?oe.cache:t,u=s?t[a]:t[a]&&a;
if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof e)return u||(u=s?t[a]=J.pop()||oe.guid++:a),l[u]||(l[u]=s?{}:{toJSON:oe.noop}),("object"==typeof e||"function"==typeof e)&&(r?l[u]=oe.extend(l[u],e):l[u].data=oe.extend(l[u].data,e)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[oe.camelCase(e)]=n),"string"==typeof e?(i=o[e],null==i&&(i=o[oe.camelCase(e)])):i=o,i
}}function f(t,e,n){if(oe.acceptData(t)){var r,i,o=t.nodeType,a=o?oe.cache:t,s=o?t[oe.expando]:oe.expando;
if(a[s]){if(e&&(r=n?a[s]:a[s].data)){oe.isArray(e)?e=e.concat(oe.map(e,oe.camelCase)):e in r?e=[e]:(e=oe.camelCase(e),e=e in r?[e]:e.split(" ")),i=e.length;
for(;i--;)delete r[e[i]];if(n?!u(r):!oe.isEmptyObject(r))return}(n||(delete a[s].data,u(a[s])))&&(o?oe.cleanData([t],!0):re.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}function p(){return!0}function d(){return!1}function h(){try{return ge.activeElement
}catch(t){}}function g(t){var e=Fe.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());
return n}function v(t,e){var n,r,i=0,o=typeof t.getElementsByTagName!==ke?t.getElementsByTagName(e||"*"):typeof t.querySelectorAll!==ke?t.querySelectorAll(e||"*"):void 0;
if(!o)for(o=[],n=t.childNodes||t;null!=(r=n[i]);i++)!e||oe.nodeName(r,e)?o.push(r):oe.merge(o,v(r,e));
return void 0===e||e&&oe.nodeName(t,e)?oe.merge([t],o):o}function m(t){Ae.test(t.type)&&(t.defaultChecked=t.checked)
}function y(t,e){return oe.nodeName(t,"table")&&oe.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t
}function b(t){return t.type=(null!==oe.find.attr(t,"type"))+"/"+t.type,t}function x(t){var e=Je.exec(t.type);
return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){for(var n,r=0;null!=(n=t[r]);r++)oe._data(n,"globalEval",!e||oe._data(e[r],"globalEval"))
}function C(t,e){if(1===e.nodeType&&oe.hasData(t)){var n,r,i,o=oe._data(t),a=oe._data(e,o),s=o.events;
if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)oe.event.add(e,n,s[n][r])
}a.data&&(a.data=oe.extend({},a.data))}}function T(t,e){var n,r,i;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!re.noCloneEvent&&e[oe.expando]){i=oe._data(e);
for(r in i.events)oe.removeEvent(e,r,i.handle);e.removeAttribute(oe.expando)}"script"===n&&e.text!==t.text?(b(e).text=t.text,x(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),re.html5Clone&&t.innerHTML&&!oe.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&Ae.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)
}}function k(e,n){var r=oe(n.createElement(e)).appendTo(n.body),i=t.getDefaultComputedStyle?t.getDefaultComputedStyle(r[0]).display:oe.css(r[0],"display");
return r.detach(),i}function j(t){var e=ge,n=tn[t];return n||(n=k(t,e),"none"!==n&&n||(Ze=(Ze||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=(Ze[0].contentWindow||Ze[0].contentDocument).document,e.write(),e.close(),n=k(t,e),Ze.detach()),tn[t]=n),n
}function E(t,e){return{get:function(){var n=t();if(null!=n)return n?void delete this.get:(this.get=e).apply(this,arguments)
}}}function _(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),r=e,i=hn.length;i--;)if(e=hn[i]+n,e in t)return e;
return r}function S(t,e){for(var n,r,i,o=[],a=0,s=t.length;s>a;a++)r=t[a],r.style&&(o[a]=oe._data(r,"olddisplay"),n=r.style.display,e?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Ne(r)&&(o[a]=oe._data(r,"olddisplay",j(r.nodeName)))):o[a]||(i=Ne(r),(n&&"none"!==n||!i)&&oe._data(r,"olddisplay",i?n:oe.css(r,"display"))));
for(a=0;s>a;a++)r=t[a],r.style&&(e&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=e?o[a]||"":"none"));
return t}function N(t,e,n){var r=cn.exec(e);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):e
}function O(t,e,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===e?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=oe.css(t,n+Se[o],!0,i)),r?("content"===n&&(a-=oe.css(t,"padding"+Se[o],!0,i)),"margin"!==n&&(a-=oe.css(t,"border"+Se[o]+"Width",!0,i))):(a+=oe.css(t,"padding"+Se[o],!0,i),"padding"!==n&&(a+=oe.css(t,"border"+Se[o]+"Width",!0,i)));
return a}function A(t,e,n){var r=!0,i="width"===e?t.offsetWidth:t.offsetHeight,o=en(t),a=re.boxSizing()&&"border-box"===oe.css(t,"boxSizing",!1,o);
if(0>=i||null==i){if(i=nn(t,e,o),(0>i||null==i)&&(i=t.style[e]),on.test(i))return i;
r=a&&(re.boxSizingReliable()||i===t.style[e]),i=parseFloat(i)||0}return i+O(t,e,n||(a?"border":"content"),r,o)+"px"
}function $(t,e,n,r,i){return new $.prototype.init(t,e,n,r,i)}function D(){return setTimeout(function(){gn=void 0
}),gn=oe.now()}function P(t,e){var n,r={height:t},i=0;for(e=e?1:0;4>i;i+=2-e)n=Se[i],r["margin"+n]=r["padding"+n]=t;
return e&&(r.opacity=r.width=t),r}function L(t,e,n){for(var r,i=(wn[e]||[]).concat(wn["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,e,t))return r
}function M(t,e,n){var r,i,o,a,s,l,u,c,f=this,p={},d=t.style,h=t.nodeType&&Ne(t),g=oe._data(t,"fxshow");
n.queue||(s=oe._queueHooks(t,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,oe.queue(t,"fx").length||s.empty.fire()
})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],u=oe.css(t,"display"),c=j(t.nodeName),"none"===u&&(u=c),"inline"===u&&"none"===oe.css(t,"float")&&(re.inlineBlockNeedsLayout&&"inline"!==c?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",re.shrinkWrapBlocks()||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]
}));for(r in e)if(i=e[r],mn.exec(i)){if(delete e[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;
h=!0}p[r]=g&&g[r]||oe.style(t,r)}if(!oe.isEmptyObject(p)){g?"hidden"in g&&(h=g.hidden):g=oe._data(t,"fxshow",{}),o&&(g.hidden=!h),h?oe(t).show():f.done(function(){oe(t).hide()
}),f.done(function(){var e;oe._removeData(t,"fxshow");for(e in p)oe.style(t,e,p[e])
});for(r in p)a=L(h?g[r]:0,r,f),r in g||(g[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}function F(t,e){var n,r,i,o,a;for(n in t)if(r=oe.camelCase(n),i=e[r],o=t[n],oe.isArray(o)&&(i=o[1],o=t[n]=o[0]),n!==r&&(t[r]=o,delete t[n]),a=oe.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete t[r];
for(n in o)n in t||(t[n]=o[n],e[n]=i)}else e[r]=i}function H(t,e,n){var r,i,o=0,a=xn.length,s=oe.Deferred().always(function(){delete l.elem
}),l=function(){if(i)return!1;for(var e=gn||D(),n=Math.max(0,u.startTime+u.duration-e),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);
return s.notifyWith(t,[u,o,n]),1>o&&l?n:(s.resolveWith(t,[u]),!1)},u=s.promise({elem:t,props:oe.extend({},e),opts:oe.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:gn||D(),duration:n.duration,tweens:[],createTween:function(e,n){var r=oe.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);
return u.tweens.push(r),r},stop:function(e){var n=0,r=e?u.tweens.length:0;if(i)return this;
for(i=!0;r>n;n++)u.tweens[n].run(1);return e?s.resolveWith(t,[u,e]):s.rejectWith(t,[u,e]),this
}}),c=u.props;for(F(c,u.opts.specialEasing);a>o;o++)if(r=xn[o].call(u,t,c,u.opts))return r;
return oe.map(c,L,u),oe.isFunction(u.opts.start)&&u.opts.start.call(t,u),oe.fx.timer(oe.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function q(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(xe)||[];
if(oe.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)
}}function I(t,e,n,r){function i(s){var l;return o[s]=!0,oe.each(t[s]||[],function(t,s){var u=s(e,n,r);
return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(e.dataTypes.unshift(u),i(u),!1)
}),l}var o={},a=t===Un;return i(e.dataTypes[0])||!o["*"]&&i("*")}function R(t,e){var n,r,i=oe.ajaxSettings.flatOptions||{};
for(r in e)void 0!==e[r]&&((i[r]?t:n||(n={}))[r]=e[r]);return n&&oe.extend(!0,t,n),t
}function B(t,e,n){for(var r,i,o,a,s=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));
if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||t.converters[a+" "+l[0]]){o=a;
break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function W(t,e,n,r){var i,o,a,s,l,u={},c=t.dataTypes.slice();
if(c[1])for(a in t.converters)u[a.toLowerCase()]=t.converters[a];for(o=c.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!l&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=c.shift())if("*"===o)o=l;
else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break}if(a!==!0)if(a&&t["throws"])e=a(e);else try{e=a(e)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+l+" to "+o}
}}return{state:"success",data:e}}function z(t,e,n,r){var i;if(oe.isArray(e))oe.each(e,function(e,i){n||Vn.test(t)?r(t,i):z(t+"["+("object"==typeof i?e:"")+"]",i,n,r)
});else if(n||"object"!==oe.type(e))r(t,e);else for(i in e)z(t+"["+i+"]",e[i],n,r)
}function U(){try{return new t.XMLHttpRequest}catch(e){}}function X(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")
}catch(e){}}function Q(t){return oe.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1
}var J=[],V=J.slice,G=J.concat,Y=J.push,K=J.indexOf,Z={},te=Z.toString,ee=Z.hasOwnProperty,ne="".trim,re={},ie="1.11.0",oe=function(t,e){return new oe.fn.init(t,e)
},ae=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,se=/^-ms-/,le=/-([\da-z])/gi,ue=function(t,e){return e.toUpperCase()
};oe.fn=oe.prototype={jquery:ie,constructor:oe,selector:"",length:0,toArray:function(){return V.call(this)
},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:V.call(this)},pushStack:function(t){var e=oe.merge(this.constructor(),t);
return e.prevObject=this,e.context=this.context,e},each:function(t,e){return oe.each(this,t,e)
},map:function(t){return this.pushStack(oe.map(this,function(e,n){return t.call(e,n,e)
}))},slice:function(){return this.pushStack(V.apply(this,arguments))},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);
return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)
},push:Y,sort:J.sort,splice:J.splice},oe.extend=oe.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;
for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||oe.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)t=a[r],n=i[r],a!==n&&(u&&n&&(oe.isPlainObject(n)||(e=oe.isArray(n)))?(e?(e=!1,o=t&&oe.isArray(t)?t:[]):o=t&&oe.isPlainObject(t)?t:{},a[r]=oe.extend(u,o,n)):void 0!==n&&(a[r]=n));
return a},oe.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)
},noop:function(){},isFunction:function(t){return"function"===oe.type(t)},isArray:Array.isArray||function(t){return"array"===oe.type(t)
},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return t-parseFloat(t)>=0
},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},isPlainObject:function(t){var e;
if(!t||"object"!==oe.type(t)||t.nodeType||oe.isWindow(t))return!1;try{if(t.constructor&&!ee.call(t,"constructor")&&!ee.call(t.constructor.prototype,"isPrototypeOf"))return!1
}catch(n){return!1}if(re.ownLast)for(e in t)return ee.call(t,e);for(e in t);return void 0===e||ee.call(t,e)
},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?Z[te.call(t)]||"object":typeof t
},globalEval:function(e){e&&oe.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)
})(e)},camelCase:function(t){return t.replace(se,"ms-").replace(le,ue)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()
},each:function(t,e,r){var i,o=0,a=t.length,s=n(t);if(r){if(s)for(;a>o&&(i=e.apply(t[o],r),i!==!1);o++);else for(o in t)if(i=e.apply(t[o],r),i===!1)break
}else if(s)for(;a>o&&(i=e.call(t[o],o,t[o]),i!==!1);o++);else for(o in t)if(i=e.call(t[o],o,t[o]),i===!1)break;
return t},trim:ne&&!ne.call("﻿ ")?function(t){return null==t?"":ne.call(t)}:function(t){return null==t?"":(t+"").replace(ae,"")
},makeArray:function(t,e){var r=e||[];return null!=t&&(n(Object(t))?oe.merge(r,"string"==typeof t?[t]:t):Y.call(r,t)),r
},inArray:function(t,e,n){var r;if(e){if(K)return K.call(e,t,n);for(r=e.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in e&&e[n]===t)return n
}return-1},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;n>r;)t[i++]=e[r++];
if(n!==n)for(;void 0!==e[r];)t[i++]=e[r++];return t.length=i,t},grep:function(t,e,n){for(var r,i=[],o=0,a=t.length,s=!n;a>o;o++)r=!e(t[o],o),r!==s&&i.push(t[o]);
return i},map:function(t,e,r){var i,o=0,a=t.length,s=n(t),l=[];if(s)for(;a>o;o++)i=e(t[o],o,r),null!=i&&l.push(i);
else for(o in t)i=e(t[o],o,r),null!=i&&l.push(i);return G.apply([],l)},guid:1,proxy:function(t,e){var n,r,i;
return"string"==typeof e&&(i=t[e],e=t,t=i),oe.isFunction(t)?(n=V.call(arguments,2),r=function(){return t.apply(e||this,n.concat(V.call(arguments)))
},r.guid=t.guid=t.guid||oe.guid++,r):void 0},now:function(){return+new Date},support:re}),oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()
});var ce=function(t){function e(t,e,n,r){var i,o,a,s,l,u,f,h,g,v;if((e?e.ownerDocument||e:I)!==$&&A(e),e=e||$,n=n||[],!t||"string"!=typeof t)return n;
if(1!==(s=e.nodeType)&&9!==s)return[];if(P&&!r){if(i=ye.exec(t))if(a=i[1]){if(9===s){if(o=e.getElementById(a),!o||!o.parentNode)return n;
if(o.id===a)return n.push(o),n}else if(e.ownerDocument&&(o=e.ownerDocument.getElementById(a))&&H(e,o)&&o.id===a)return n.push(o),n
}else{if(i[2])return Z.apply(n,e.getElementsByTagName(t)),n;if((a=i[3])&&T.getElementsByClassName&&e.getElementsByClassName)return Z.apply(n,e.getElementsByClassName(a)),n
}if(T.qsa&&(!L||!L.test(t))){if(h=f=q,g=e,v=9===s&&t,1===s&&"object"!==e.nodeName.toLowerCase()){for(u=p(t),(f=e.getAttribute("id"))?h=f.replace(xe,"\\$&"):e.setAttribute("id",h),h="[id='"+h+"'] ",l=u.length;l--;)u[l]=h+d(u[l]);
g=be.test(t)&&c(e.parentNode)||e,v=u.join(",")}if(v)try{return Z.apply(n,g.querySelectorAll(v)),n
}catch(m){}finally{f||e.removeAttribute("id")}}}return w(t.replace(le,"$1"),e,n,r)
}function n(){function t(n,r){return e.push(n+" ")>k.cacheLength&&delete t[e.shift()],t[n+" "]=r
}var e=[];return t}function r(t){return t[q]=!0,t}function i(t){var e=$.createElement("div");
try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null
}}function o(t,e){for(var n=t.split("|"),r=t.length;r--;)k.attrHandle[n[r]]=e}function a(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||J)-(~t.sourceIndex||J);
if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function s(t){return function(e){var n=e.nodeName.toLowerCase();
return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();
return("input"===n||"button"===n)&&e.type===t}}function u(t){return r(function(e){return e=+e,r(function(n,r){for(var i,o=t([],n.length,e),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
})})}function c(t){return t&&typeof t.getElementsByTagName!==Q&&t}function f(){}function p(t,n){var r,i,o,a,s,l,u,c=z[t+" "];
if(c)return n?0:c.slice(0);for(s=t,l=[],u=k.preFilter;s;){(!r||(i=ue.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(le," ")}),s=s.slice(r.length));
for(a in k.filter)!(i=he[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));
if(!r)break}return n?s.length:s?e.error(t):z(t,l).slice(0)}function d(t){for(var e=0,n=t.length,r="";n>e;e++)r+=t[e].value;
return r}function h(t,e,n){var r=e.dir,i=n&&"parentNode"===r,o=B++;return e.first?function(e,n,o){for(;e=e[r];)if(1===e.nodeType||i)return t(e,n,o)
}:function(e,n,a){var s,l,u=[R,o];if(a){for(;e=e[r];)if((1===e.nodeType||i)&&t(e,n,a))return!0
}else for(;e=e[r];)if(1===e.nodeType||i){if(l=e[q]||(e[q]={}),(s=l[r])&&s[0]===R&&s[1]===o)return u[2]=s[2];
if(l[r]=u,u[2]=t(e,n,a))return!0}}}function g(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;
return!0}:t[0]}function v(t,e,n,r,i){for(var o,a=[],s=0,l=t.length,u=null!=e;l>s;s++)(o=t[s])&&(!n||n(o,r,i))&&(a.push(o),u&&e.push(s));
return a}function m(t,e,n,i,o,a){return i&&!i[q]&&(i=m(i)),o&&!o[q]&&(o=m(o,a)),r(function(r,a,s,l){var u,c,f,p=[],d=[],h=a.length,g=r||x(e||"*",s.nodeType?[s]:s,[]),m=!t||!r&&e?g:v(g,p,t,s,l),y=n?o||(r?t:h||i)?[]:a:m;
if(n&&n(m,y,s,l),i)for(u=v(y,d),i(u,[],s,l),c=u.length;c--;)(f=u[c])&&(y[d[c]]=!(m[d[c]]=f));
if(r){if(o||t){if(o){for(u=[],c=y.length;c--;)(f=y[c])&&u.push(m[c]=f);o(null,y=[],u,l)
}for(c=y.length;c--;)(f=y[c])&&(u=o?ee.call(r,f):p[c])>-1&&(r[u]=!(a[u]=f))}}else y=v(y===a?y.splice(h,y.length):y),o?o(null,a,y,l):Z.apply(a,y)
})}function y(t){for(var e,n,r,i=t.length,o=k.relative[t[0].type],a=o||k.relative[" "],s=o?1:0,l=h(function(t){return t===e
},a,!0),u=h(function(t){return ee.call(e,t)>-1},a,!0),c=[function(t,n,r){return!o&&(r||n!==S)||((e=n).nodeType?l(t,n,r):u(t,n,r))
}];i>s;s++)if(n=k.relative[t[s].type])c=[h(g(c),n)];else{if(n=k.filter[t[s].type].apply(null,t[s].matches),n[q]){for(r=++s;i>r&&!k.relative[t[r].type];r++);return m(s>1&&g(c),s>1&&d(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(le,"$1"),n,r>s&&y(t.slice(s,r)),i>r&&y(t=t.slice(r)),i>r&&d(t))
}c.push(n)}return g(c)}function b(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,l,u){var c,f,p,d=0,h="0",g=r&&[],m=[],y=S,b=r||o&&k.find.TAG("*",u),x=R+=null==y?1:Math.random()||.1,w=b.length;
for(u&&(S=a!==$&&a);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(f=0;p=t[f++];)if(p(c,a,s)){l.push(c);
break}u&&(R=x)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,a,s);
if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=Y.call(l));m=v(m)}Z.apply(l,m),u&&!r&&m.length>0&&d+n.length>1&&e.uniqueSort(l)
}return u&&(R=x,S=y),g};return i?r(a):a}function x(t,n,r){for(var i=0,o=n.length;o>i;i++)e(t,n[i],r);
return r}function w(t,e,n,r){var i,o,a,s,l,u=p(t);if(!r&&1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&T.getById&&9===e.nodeType&&P&&k.relative[o[1].type]){if(e=(k.find.ID(a.matches[0].replace(we,Ce),e)||[])[0],!e)return n;
t=t.slice(o.shift().value.length)}for(i=he.needsContext.test(t)?0:o.length;i--&&(a=o[i],!k.relative[s=a.type]);)if((l=k.find[s])&&(r=l(a.matches[0].replace(we,Ce),be.test(o[0].type)&&c(e.parentNode)||e))){if(o.splice(i,1),t=r.length&&d(o),!t)return Z.apply(n,r),n;
break}}return _(t,u)(r,e,!P,n,be.test(t)&&c(e.parentNode)||e),n}var C,T,k,j,E,_,S,N,O,A,$,D,P,L,M,F,H,q="sizzle"+-new Date,I=t.document,R=0,B=0,W=n(),z=n(),U=n(),X=function(t,e){return t===e&&(O=!0),0
},Q="undefined",J=1<<31,V={}.hasOwnProperty,G=[],Y=G.pop,K=G.push,Z=G.push,te=G.slice,ee=G.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;
return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),ae="\\["+re+"*("+ie+")"+re+"*(?:([*^$|!~]?=)"+re+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+oe+")|)|)"+re+"*\\]",se=":("+ie+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ae.replace(3,8)+")*)|.*)\\)|)",le=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),ue=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),fe=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),pe=new RegExp(se),de=new RegExp("^"+oe+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,xe=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),Ce=function(t,e,n){var r="0x"+e-65536;
return r!==r||n?e:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)
};try{Z.apply(G=te.call(I.childNodes),I.childNodes),G[I.childNodes.length].nodeType
}catch(Te){Z={apply:G.length?function(t,e){K.apply(t,te.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1
}}}T=e.support={},E=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;
return e?"HTML"!==e.nodeName:!1},A=e.setDocument=function(t){var e,n=t?t.ownerDocument||t:I,r=n.defaultView;
return n!==$&&9===n.nodeType&&n.documentElement?($=n,D=n.documentElement,P=!E(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){A()
},!1):r.attachEvent&&r.attachEvent("onunload",function(){A()})),T.attributes=i(function(t){return t.className="i",!t.getAttribute("className")
}),T.getElementsByTagName=i(function(t){return t.appendChild(n.createComment("")),!t.getElementsByTagName("*").length
}),T.getElementsByClassName=me.test(n.getElementsByClassName)&&i(function(t){return t.innerHTML="<div class='a'></div><div class='a i'></div>",t.firstChild.className="i",2===t.getElementsByClassName("i").length
}),T.getById=i(function(t){return D.appendChild(t).id=q,!n.getElementsByName||!n.getElementsByName(q).length
}),T.getById?(k.find.ID=function(t,e){if(typeof e.getElementById!==Q&&P){var n=e.getElementById(t);
return n&&n.parentNode?[n]:[]}},k.filter.ID=function(t){var e=t.replace(we,Ce);return function(t){return t.getAttribute("id")===e
}}):(delete k.find.ID,k.filter.ID=function(t){var e=t.replace(we,Ce);return function(t){var n=typeof t.getAttributeNode!==Q&&t.getAttributeNode("id");
return n&&n.value===e}}),k.find.TAG=T.getElementsByTagName?function(t,e){return typeof e.getElementsByTagName!==Q?e.getElementsByTagName(t):void 0
}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);
return r}return o},k.find.CLASS=T.getElementsByClassName&&function(t,e){return typeof e.getElementsByClassName!==Q&&P?e.getElementsByClassName(t):void 0
},M=[],L=[],(T.qsa=me.test(n.querySelectorAll))&&(i(function(t){t.innerHTML="<select t=''><option selected=''></option></select>",t.querySelectorAll("[t^='']").length&&L.push("[*^$]="+re+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||L.push("\\["+re+"*(?:value|"+ne+")"),t.querySelectorAll(":checked").length||L.push(":checked")
}),i(function(t){var e=n.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&L.push("name"+re+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),L.push(",.*:")
})),(T.matchesSelector=me.test(F=D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&i(function(t){T.disconnectedMatch=F.call(t,"div"),F.call(t,"[s!='']:x"),M.push("!=",se)
}),L=L.length&&new RegExp(L.join("|")),M=M.length&&new RegExp(M.join("|")),e=me.test(D.compareDocumentPosition),H=e||me.test(D.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;
return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))
}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},X=e?function(t,e){if(t===e)return O=!0,0;
var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r?r:(r=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&r||!T.sortDetached&&e.compareDocumentPosition(t)===r?t===n||t.ownerDocument===I&&H(I,t)?-1:e===n||e.ownerDocument===I&&H(I,e)?1:N?ee.call(N,t)-ee.call(N,e):0:4&r?-1:1)
}:function(t,e){if(t===e)return O=!0,0;var r,i=0,o=t.parentNode,s=e.parentNode,l=[t],u=[e];
if(!o||!s)return t===n?-1:e===n?1:o?-1:s?1:N?ee.call(N,t)-ee.call(N,e):0;if(o===s)return a(t,e);
for(r=t;r=r.parentNode;)l.unshift(r);for(r=e;r=r.parentNode;)u.unshift(r);for(;l[i]===u[i];)i++;
return i?a(l[i],u[i]):l[i]===I?-1:u[i]===I?1:0},n):$},e.matches=function(t,n){return e(t,null,null,n)
},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==$&&A(t),n=n.replace(fe,"='$1']"),!(!T.matchesSelector||!P||M&&M.test(n)||L&&L.test(n)))try{var r=F.call(t,n);
if(r||T.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,$,null,[t]).length>0
},e.contains=function(t,e){return(t.ownerDocument||t)!==$&&A(t),H(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==$&&A(t);
var n=k.attrHandle[e.toLowerCase()],r=n&&V.call(k.attrHandle,e.toLowerCase())?n(t,e,!P):void 0;
return void 0!==r?r:T.attributes||!P?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null
},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)
},e.uniqueSort=function(t){var e,n=[],r=0,i=0;if(O=!T.detectDuplicates,N=!T.sortStable&&t.slice(0),t.sort(X),O){for(;e=t[i++];)e===t[i]&&(r=n.push(i));
for(;r--;)t.splice(n[r],1)}return N=null,t},j=e.getText=function(t){var e,n="",r=0,i=t.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;
for(t=t.firstChild;t;t=t.nextSibling)n+=j(t)}else if(3===i||4===i)return t.nodeValue
}else for(;e=t[r++];)n+=j(e);return n},k=e.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(we,Ce),t[3]=(t[4]||t[5]||"").replace(we,Ce),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)
},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t
},PSEUDO:function(t){var e,n=!t[5]&&t[2];return he.CHILD.test(t[0])?null:(t[3]&&void 0!==t[4]?t[2]=t[4]:n&&pe.test(n)&&(e=p(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))
}},filter:{TAG:function(t){var e=t.replace(we,Ce).toLowerCase();return"*"===t?function(){return!0
}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];
return e||(e=new RegExp("(^|"+re+")"+t+"("+re+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||typeof t.getAttribute!==Q&&t.getAttribute("class")||"")
})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0
}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;
return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,l){var u,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=e.parentNode,m=s&&e.nodeName.toLowerCase(),y=!l&&!s;
if(v){if(o){for(;g;){for(f=e;f=f[g];)if(s?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;
h=g="only"===t&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&y){for(c=v[q]||(v[q]={}),u=c[t]||[],d=u[0]===R&&u[1],p=u[0]===R&&u[2],f=d&&v.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===e){c[t]=[R,d,p];
break}}else if(y&&(u=(e[q]||(e[q]={}))[t])&&u[0]===R)p=u[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++p||(y&&((f[q]||(f[q]={}))[t]=[R,p]),f!==e)););return p-=i,p===r||p%r===0&&p/r>=0
}}},PSEUDO:function(t,n){var i,o=k.pseudos[t]||k.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);
return o[q]?o(n):o.length>1?(i=[t,t,"",n],k.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,e){for(var r,i=o(t,n),a=i.length;a--;)r=ee.call(t,i[a]),t[r]=!(e[r]=i[a])
}):function(t){return o(t,0,i)}):o}},pseudos:{not:r(function(t){var e=[],n=[],i=_(t.replace(le,"$1"));
return i[q]?r(function(t,e,n,r){for(var o,a=i(t,null,r,[]),s=t.length;s--;)(o=a[s])&&(t[s]=!(e[s]=o))
}):function(t,r,o){return e[0]=t,i(e,null,o,n),!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0
}}),contains:r(function(t){return function(e){return(e.textContent||e.innerText||j(e)).indexOf(t)>-1
}}),lang:r(function(t){return de.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(we,Ce).toLowerCase(),function(e){var n;
do if(n=P?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");
while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;
return n&&n.slice(1)===e.id},root:function(t){return t===D},focus:function(t){return t===$.activeElement&&(!$.hasFocus||$.hasFocus())&&!!(t.type||t.href||~t.tabIndex)
},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0
},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected
},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0
},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;
return!0},parent:function(t){return!k.pseudos.empty(t)},header:function(t){return ve.test(t.nodeName)
},input:function(t){return ge.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())
},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[0>n?n+e:n]
}),even:u(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;e>n;n+=2)t.push(n);
return t}),lt:u(function(t,e,n){for(var r=0>n?n+e:n;--r>=0;)t.push(r);return t}),gt:u(function(t,e,n){for(var r=0>n?n+e:n;++r<e;)t.push(r);
return t})}},k.pseudos.nth=k.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[C]=s(C);
for(C in{submit:!0,reset:!0})k.pseudos[C]=l(C);return f.prototype=k.filters=k.pseudos,k.setFilters=new f,_=e.compile=function(t,e){var n,r=[],i=[],o=U[t+" "];
if(!o){for(e||(e=p(t)),n=e.length;n--;)o=y(e[n]),o[q]?r.push(o):i.push(o);o=U(t,b(i,r))
}return o},T.sortStable=q.split("").sort(X).join("")===q,T.detectDuplicates=!!O,A(),T.sortDetached=i(function(t){return 1&t.compareDocumentPosition($.createElement("div"))
}),i(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")
})||o("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)
}),T.attributes&&i(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")
})||o("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue
}),i(function(t){return null==t.getAttribute("disabled")})||o(ne,function(t,e,n){var r;
return n?void 0:t[e]===!0?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null
}),e}(t);oe.find=ce,oe.expr=ce.selectors,oe.expr[":"]=oe.expr.pseudos,oe.unique=ce.uniqueSort,oe.text=ce.getText,oe.isXMLDoc=ce.isXML,oe.contains=ce.contains;
var fe=oe.expr.match.needsContext,pe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,de=/^.[^:#\[\.,]*$/;
oe.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?oe.find.matchesSelector(r,t)?[r]:[]:oe.find.matches(t,oe.grep(e,function(t){return 1===t.nodeType
}))},oe.fn.extend({find:function(t){var e,n=[],r=this,i=r.length;if("string"!=typeof t)return this.pushStack(oe(t).filter(function(){for(e=0;i>e;e++)if(oe.contains(r[e],this))return!0
}));for(e=0;i>e;e++)oe.find(t,r[e],n);return n=this.pushStack(i>1?oe.unique(n):n),n.selector=this.selector?this.selector+" "+t:t,n
},filter:function(t){return this.pushStack(r(this,t||[],!1))},not:function(t){return this.pushStack(r(this,t||[],!0))
},is:function(t){return!!r(this,"string"==typeof t&&fe.test(t)?oe(t):t||[],!1).length
}});var he,ge=t.document,ve=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,me=oe.fn.init=function(t,e){var n,r;
if(!t)return this;if("string"==typeof t){if(n="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:ve.exec(t),!n||!n[1]&&e)return!e||e.jquery?(e||he).find(t):this.constructor(e).find(t);
if(n[1]){if(e=e instanceof oe?e[0]:e,oe.merge(this,oe.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:ge,!0)),pe.test(n[1])&&oe.isPlainObject(e))for(n in e)oe.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);
return this}if(r=ge.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return he.find(t);
this.length=1,this[0]=r}return this.context=ge,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):oe.isFunction(t)?"undefined"!=typeof he.ready?he.ready(t):t(oe):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),oe.makeArray(t,this))
};me.prototype=oe.fn,he=oe(ge);var ye=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};
oe.extend({dir:function(t,e,n){for(var r=[],i=t[e];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!oe(i).is(n));)1===i.nodeType&&r.push(i),i=i[e];
return r},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);
return n}}),oe.fn.extend({has:function(t){var e,n=oe(t,this),r=n.length;return this.filter(function(){for(e=0;r>e;e++)if(oe.contains(this,n[e]))return!0
})},closest:function(t,e){for(var n,r=0,i=this.length,o=[],a=fe.test(t)||"string"!=typeof t?oe(t,e||this.context):0;i>r;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,t))){o.push(n);
break}return this.pushStack(o.length>1?oe.unique(o):o)},index:function(t){return t?"string"==typeof t?oe.inArray(this[0],oe(t)):oe.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(t,e){return this.pushStack(oe.unique(oe.merge(this.get(),oe(t,e))))
},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))
}}),oe.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null
},parents:function(t){return oe.dir(t,"parentNode")},parentsUntil:function(t,e,n){return oe.dir(t,"parentNode",n)
},next:function(t){return i(t,"nextSibling")},prev:function(t){return i(t,"previousSibling")
},nextAll:function(t){return oe.dir(t,"nextSibling")},prevAll:function(t){return oe.dir(t,"previousSibling")
},nextUntil:function(t,e,n){return oe.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return oe.dir(t,"previousSibling",n)
},siblings:function(t){return oe.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return oe.sibling(t.firstChild)
},contents:function(t){return oe.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:oe.merge([],t.childNodes)
}},function(t,e){oe.fn[t]=function(n,r){var i=oe.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),this.length>1&&(be[t]||(i=oe.unique(i)),ye.test(t)&&(i=i.reverse())),this.pushStack(i)
}});var xe=/\S+/g,we={};oe.Callbacks=function(t){t="string"==typeof t?we[t]||o(t):oe.extend({},t);
var e,n,r,i,a,s,l=[],u=!t.once&&[],c=function(o){for(n=t.memory&&o,r=!0,a=s||0,s=0,i=l.length,e=!0;l&&i>a;a++)if(l[a].apply(o[0],o[1])===!1&&t.stopOnFalse){n=!1;
break}e=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:f.disable())},f={add:function(){if(l){var r=l.length;
!function o(e){oe.each(e,function(e,n){var r=oe.type(n);"function"===r?t.unique&&f.has(n)||l.push(n):n&&n.length&&"string"!==r&&o(n)
})}(arguments),e?i=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&oe.each(arguments,function(t,n){for(var r;(r=oe.inArray(n,l,r))>-1;)l.splice(r,1),e&&(i>=r&&i--,a>=r&&a--)
}),this},has:function(t){return t?oe.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this
},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||f.disable(),this
},locked:function(){return!u},fireWith:function(t,n){return!l||r&&!u||(n=n||[],n=[t,n.slice?n.slice():n],e?u.push(n):c(n)),this
},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!r
}};return f},oe.extend({Deferred:function(t){var e=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var t=arguments;
return oe.Deferred(function(n){oe.each(e,function(e,o){var a=oe.isFunction(t[e])&&t[e];
i[o[1]](function(){var t=a&&a.apply(this,arguments);t&&oe.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[t]:arguments)
})}),t=null}).promise()},promise:function(t){return null!=t?oe.extend(t,r):r}},i={};
return r.pipe=r.then,oe.each(e,function(t,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s
},e[1^t][2].disable,e[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith}),r.promise(i),t&&t.call(i,i),i},when:function(t){var e,n,r,i=0,o=V.call(arguments),a=o.length,s=1!==a||t&&oe.isFunction(t.promise)?a:0,l=1===s?t:oe.Deferred(),u=function(t,n,r){return function(i){n[t]=this,r[t]=arguments.length>1?V.call(arguments):i,r===e?l.notifyWith(n,r):--s||l.resolveWith(n,r)
}};if(a>1)for(e=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&oe.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,e)):--s;
return s||l.resolveWith(r,o),l.promise()}});var Ce;oe.fn.ready=function(t){return oe.ready.promise().done(t),this
},oe.extend({isReady:!1,readyWait:1,holdReady:function(t){t?oe.readyWait++:oe.ready(!0)
},ready:function(t){if(t===!0?!--oe.readyWait:!oe.isReady){if(!ge.body)return setTimeout(oe.ready);
oe.isReady=!0,t!==!0&&--oe.readyWait>0||(Ce.resolveWith(ge,[oe]),oe.fn.trigger&&oe(ge).trigger("ready").off("ready"))
}}}),oe.ready.promise=function(e){if(!Ce)if(Ce=oe.Deferred(),"complete"===ge.readyState)setTimeout(oe.ready);
else if(ge.addEventListener)ge.addEventListener("DOMContentLoaded",s,!1),t.addEventListener("load",s,!1);
else{ge.attachEvent("onreadystatechange",s),t.attachEvent("onload",s);var n=!1;try{n=null==t.frameElement&&ge.documentElement
}catch(r){}n&&n.doScroll&&!function i(){if(!oe.isReady){try{n.doScroll("left")}catch(t){return setTimeout(i,50)
}a(),oe.ready()}}()}return Ce.promise(e)};var Te,ke="undefined";for(Te in oe(re))break;
re.ownLast="0"!==Te,re.inlineBlockNeedsLayout=!1,oe(function(){var t,e,n=ge.getElementsByTagName("body")[0];
n&&(t=ge.createElement("div"),t.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",e=ge.createElement("div"),n.appendChild(t).appendChild(e),typeof e.style.zoom!==ke&&(e.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(re.inlineBlockNeedsLayout=3===e.offsetWidth)&&(n.style.zoom=1)),n.removeChild(t),t=e=null)
}),function(){var t=ge.createElement("div");if(null==re.deleteExpando){re.deleteExpando=!0;
try{delete t.test}catch(e){re.deleteExpando=!1}}t=null}(),oe.acceptData=function(t){var e=oe.noData[(t.nodeName+" ").toLowerCase()],n=+t.nodeType||1;
return 1!==n&&9!==n?!1:!e||e!==!0&&t.getAttribute("classid")===e};var je=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ee=/([A-Z])/g;
oe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return t=t.nodeType?oe.cache[t[oe.expando]]:t[oe.expando],!!t&&!u(t)
},data:function(t,e,n){return c(t,e,n)},removeData:function(t,e){return f(t,e)},_data:function(t,e,n){return c(t,e,n,!0)
},_removeData:function(t,e){return f(t,e,!0)}}),oe.fn.extend({data:function(t,e){var n,r,i,o=this[0],a=o&&o.attributes;
if(void 0===t){if(this.length&&(i=oe.data(o),1===o.nodeType&&!oe._data(o,"parsedAttrs"))){for(n=a.length;n--;)r=a[n].name,0===r.indexOf("data-")&&(r=oe.camelCase(r.slice(5)),l(o,r,i[r]));
oe._data(o,"parsedAttrs",!0)}return i}return"object"==typeof t?this.each(function(){oe.data(this,t)
}):arguments.length>1?this.each(function(){oe.data(this,t,e)}):o?l(o,t,oe.data(o,t)):void 0
},removeData:function(t){return this.each(function(){oe.removeData(this,t)})}}),oe.extend({queue:function(t,e,n){var r;
return t?(e=(e||"fx")+"queue",r=oe._data(t,e),n&&(!r||oe.isArray(n)?r=oe._data(t,e,oe.makeArray(n)):r.push(n)),r||[]):void 0
},dequeue:function(t,e){e=e||"fx";var n=oe.queue(t,e),r=n.length,i=n.shift(),o=oe._queueHooks(t,e),a=function(){oe.dequeue(t,e)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(t,e){var n=e+"queueHooks";return oe._data(t,n)||oe._data(t,n,{empty:oe.Callbacks("once memory").add(function(){oe._removeData(t,e+"queue"),oe._removeData(t,n)
})})}}),oe.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?oe.queue(this[0],t):void 0===e?this:this.each(function(){var n=oe.queue(this,t,e);
oe._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&oe.dequeue(this,t)})},dequeue:function(t){return this.each(function(){oe.dequeue(this,t)
})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=oe.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])
};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)n=oe._data(o[a],t+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));
return s(),i.promise(e)}});var _e=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Se=["Top","Right","Bottom","Left"],Ne=function(t,e){return t=e||t,"none"===oe.css(t,"display")||!oe.contains(t.ownerDocument,t)
},Oe=oe.access=function(t,e,n,r,i,o,a){var s=0,l=t.length,u=null==n;if("object"===oe.type(n)){i=!0;
for(s in n)oe.access(t,e,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,oe.isFunction(r)||(a=!0),u&&(a?(e.call(t,r),e=null):(u=e,e=function(t,e,n){return u.call(oe(t),n)
})),e))for(;l>s;s++)e(t[s],n,a?r:r.call(t[s],s,e(t[s],n)));return i?t:u?e.call(t):l?e(t[0],n):o
},Ae=/^(?:checkbox|radio)$/i;!function(){var t=ge.createDocumentFragment(),e=ge.createElement("div"),n=ge.createElement("input");
if(e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a>",re.leadingWhitespace=3===e.firstChild.nodeType,re.tbody=!e.getElementsByTagName("tbody").length,re.htmlSerialize=!!e.getElementsByTagName("link").length,re.html5Clone="<:nav></:nav>"!==ge.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,t.appendChild(n),re.appendChecked=n.checked,e.innerHTML="<textarea>x</textarea>",re.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,t.appendChild(e),e.innerHTML="<input type='radio' checked='checked' name='t'/>",re.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,re.noCloneEvent=!0,e.attachEvent&&(e.attachEvent("onclick",function(){re.noCloneEvent=!1
}),e.cloneNode(!0).click()),null==re.deleteExpando){re.deleteExpando=!0;try{delete e.test
}catch(r){re.deleteExpando=!1}}t=e=n=null}(),function(){var e,n,r=ge.createElement("div");
for(e in{submit:!0,change:!0,focusin:!0})n="on"+e,(re[e+"Bubbles"]=n in t)||(r.setAttribute(n,"t"),re[e+"Bubbles"]=r.attributes[n].expando===!1);
r=null}();var $e=/^(?:input|select|textarea)$/i,De=/^key/,Pe=/^(?:mouse|contextmenu)|click/,Le=/^(?:focusinfocus|focusoutblur)$/,Me=/^([^.]*)(?:\.(.+)|)$/;
oe.event={global:{},add:function(t,e,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,v=oe._data(t);
if(v){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=oe.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||(c=v.handle=function(t){return typeof oe===ke||t&&oe.event.triggered===t.type?void 0:oe.event.dispatch.apply(c.elem,arguments)
},c.elem=t),e=(e||"").match(xe)||[""],s=e.length;s--;)o=Me.exec(e[s])||[],d=g=o[1],h=(o[2]||"").split(".").sort(),d&&(u=oe.event.special[d]||{},d=(i?u.delegateType:u.bindType)||d,u=oe.event.special[d]||{},f=oe.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:h.join(".")},l),(p=a[d])||(p=a[d]=[],p.delegateCount=0,u.setup&&u.setup.call(t,r,h,c)!==!1||(t.addEventListener?t.addEventListener(d,c,!1):t.attachEvent&&t.attachEvent("on"+d,c))),u.add&&(u.add.call(t,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),oe.event.global[d]=!0);
t=null}},remove:function(t,e,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,v=oe.hasData(t)&&oe._data(t);
if(v&&(c=v.events)){for(e=(e||"").match(xe)||[""],u=e.length;u--;)if(s=Me.exec(e[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=oe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(t,a));
l&&!p.length&&(f.teardown&&f.teardown.call(t,h,v.handle)!==!1||oe.removeEvent(t,d,v.handle),delete c[d])
}else for(d in c)oe.event.remove(t,d+e[u],n,r,!0);oe.isEmptyObject(c)&&(delete v.handle,oe._removeData(t,"events"))
}},trigger:function(e,n,r,i){var o,a,s,l,u,c,f,p=[r||ge],d=ee.call(e,"type")?e.type:e,h=ee.call(e,"namespace")?e.namespace.split("."):[];
if(s=c=r=r||ge,3!==r.nodeType&&8!==r.nodeType&&!Le.test(d+oe.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),a=d.indexOf(":")<0&&"on"+d,e=e[oe.expando]?e:new oe.Event(d,"object"==typeof e&&e),e.isTrigger=i?2:3,e.namespace=h.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),n=null==n?[e]:oe.makeArray(n,[e]),u=oe.event.special[d]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!oe.isWindow(r)){for(l=u.delegateType||d,Le.test(l+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),c=s;
c===(r.ownerDocument||ge)&&p.push(c.defaultView||c.parentWindow||t)}for(f=0;(s=p[f++])&&!e.isPropagationStopped();)e.type=f>1?l:u.bindType||d,o=(oe._data(s,"events")||{})[e.type]&&oe._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&oe.acceptData(s)&&(e.result=o.apply(s,n),e.result===!1&&e.preventDefault());
if(e.type=d,!i&&!e.isDefaultPrevented()&&(!u._default||u._default.apply(p.pop(),n)===!1)&&oe.acceptData(r)&&a&&r[d]&&!oe.isWindow(r)){c=r[a],c&&(r[a]=null),oe.event.triggered=d;
try{r[d]()}catch(g){}oe.event.triggered=void 0,c&&(r[a]=c)}return e.result}},dispatch:function(t){t=oe.event.fix(t);
var e,n,r,i,o,a=[],s=V.call(arguments),l=(oe._data(this,"events")||{})[t.type]||[],u=oe.event.special[t.type]||{};
if(s[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(a=oe.event.handlers.call(this,t,l),e=0;(i=a[e++])&&!t.isPropagationStopped();)for(t.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(r.namespace))&&(t.handleObj=r,t.data=r.data,n=((oe.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s),void 0!==n&&(t.result=n)===!1&&(t.preventDefault(),t.stopPropagation()));
return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,r,i,o,a=[],s=e.delegateCount,l=t.target;
if(s&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==t.type)){for(i=[],o=0;s>o;o++)r=e[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?oe(n,this).index(l)>=0:oe.find(n,this,null,[l]).length),i[n]&&i.push(r);
i.length&&a.push({elem:l,handlers:i})}return s<e.length&&a.push({elem:this,handlers:e.slice(s)}),a
},fix:function(t){if(t[oe.expando])return t;var e,n,r,i=t.type,o=t,a=this.fixHooks[i];
for(a||(this.fixHooks[i]=a=Pe.test(i)?this.mouseHooks:De.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,t=new oe.Event(o),e=r.length;e--;)n=r[e],t[n]=o[n];
return t.target||(t.target=o.srcElement||ge),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,a.filter?a.filter(t,o):t
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,r,i,o=e.button,a=e.fromElement;
return null==t.pageX&&null!=e.clientX&&(r=t.target.ownerDocument||ge,i=r.documentElement,n=r.body,t.pageX=e.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!t.relatedTarget&&a&&(t.relatedTarget=a===t.target?e.toElement:a),t.which||void 0===o||(t.which=1&o?1:2&o?3:4&o?2:0),t
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1
}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return oe.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(t){return oe.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&(t.originalEvent.returnValue=t.result)
}}},simulate:function(t,e,n,r){var i=oe.extend(new oe.Event,n,{type:t,isSimulated:!0,originalEvent:{}});
r?oe.event.trigger(i,null,e):oe.event.dispatch.call(e,i),i.isDefaultPrevented()&&n.preventDefault()
}},oe.removeEvent=ge.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)
}:function(t,e,n){var r="on"+e;t.detachEvent&&(typeof t[r]===ke&&(t[r]=null),t.detachEvent(r,n))
},oe.Event=function(t,e){return this instanceof oe.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&(t.returnValue===!1||t.getPreventDefault&&t.getPreventDefault())?p:d):this.type=t,e&&oe.extend(this,e),this.timeStamp=t&&t.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(t,e)
},oe.Event.prototype={isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,preventDefault:function(){var t=this.originalEvent;
this.isDefaultPrevented=p,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=p,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=p,this.stopPropagation()
}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,e){oe.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,o=t.handleObj;
return(!i||i!==r&&!oe.contains(r,i))&&(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n
}}}),re.submitBubbles||(oe.event.special.submit={setup:function(){return oe.nodeName(this,"form")?!1:void oe.event.add(this,"click._submit keypress._submit",function(t){var e=t.target,n=oe.nodeName(e,"input")||oe.nodeName(e,"button")?e.form:void 0;
n&&!oe._data(n,"submitBubbles")&&(oe.event.add(n,"submit._submit",function(t){t._submit_bubble=!0
}),oe._data(n,"submitBubbles",!0))})},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&oe.event.simulate("submit",this.parentNode,t,!0))
},teardown:function(){return oe.nodeName(this,"form")?!1:void oe.event.remove(this,"._submit")
}}),re.changeBubbles||(oe.event.special.change={setup:function(){return $e.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(oe.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)
}),oe.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),oe.event.simulate("change",this,t,!0)
})),!1):void oe.event.add(this,"beforeactivate._change",function(t){var e=t.target;
$e.test(e.nodeName)&&!oe._data(e,"changeBubbles")&&(oe.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||oe.event.simulate("change",this.parentNode,t,!0)
}),oe._data(e,"changeBubbles",!0))})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return oe.event.remove(this,"._change"),!$e.test(this.nodeName)
}}),re.focusinBubbles||oe.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){oe.event.simulate(e,t.target,oe.event.fix(t),!0)
};oe.event.special[e]={setup:function(){var r=this.ownerDocument||this,i=oe._data(r,e);
i||r.addEventListener(t,n,!0),oe._data(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=oe._data(r,e)-1;
i?oe._data(r,e,i):(r.removeEventListener(t,n,!0),oe._removeData(r,e))}}}),oe.fn.extend({on:function(t,e,n,r,i){var o,a;
if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0);for(o in t)this.on(o,e,n,t[o],i);
return this}if(null==n&&null==r?(r=e,n=e=void 0):null==r&&("string"==typeof e?(r=n,n=void 0):(r=n,n=e,e=void 0)),r===!1)r=d;
else if(!r)return this;return 1===i&&(a=r,r=function(t){return oe().off(t),a.apply(this,arguments)
},r.guid=a.guid||(a.guid=oe.guid++)),this.each(function(){oe.event.add(this,t,r,n,e)
})},one:function(t,e,n,r){return this.on(t,e,n,r,1)},off:function(t,e,n){var r,i;
if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,oe(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;
if("object"==typeof t){for(i in t)this.off(i,e,t[i]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=d),this.each(function(){oe.event.remove(this,t,n,e)
})},trigger:function(t,e){return this.each(function(){oe.event.trigger(t,e,this)})
},triggerHandler:function(t,e){var n=this[0];return n?oe.event.trigger(t,e,n,!0):void 0
}});var Fe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",He=/ jQuery\d+="(?:null|\d+)"/g,qe=new RegExp("<(?:"+Fe+")[\\s/>]","i"),Ie=/^\s+/,Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Be=/<([\w:]+)/,We=/<tbody/i,ze=/<|&#?\w+;/,Ue=/<(?:script|style|link)/i,Xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Qe=/^$|\/(?:java|ecma)script/i,Je=/^true\/(.*)/,Ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ge={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:re.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ye=g(ge),Ke=Ye.appendChild(ge.createElement("div"));
Ge.optgroup=Ge.option,Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead,Ge.th=Ge.td,oe.extend({clone:function(t,e,n){var r,i,o,a,s,l=oe.contains(t.ownerDocument,t);
if(re.html5Clone||oe.isXMLDoc(t)||!qe.test("<"+t.nodeName+">")?o=t.cloneNode(!0):(Ke.innerHTML=t.outerHTML,Ke.removeChild(o=Ke.firstChild)),!(re.noCloneEvent&&re.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||oe.isXMLDoc(t)))for(r=v(o),s=v(t),a=0;null!=(i=s[a]);++a)r[a]&&T(i,r[a]);
if(e)if(n)for(s=s||v(t),r=r||v(o),a=0;null!=(i=s[a]);a++)C(i,r[a]);else C(t,o);return r=v(o,"script"),r.length>0&&w(r,!l&&v(t,"script")),r=s=i=null,o
},buildFragment:function(t,e,n,r){for(var i,o,a,s,l,u,c,f=t.length,p=g(e),d=[],h=0;f>h;h++)if(o=t[h],o||0===o)if("object"===oe.type(o))oe.merge(d,o.nodeType?[o]:o);
else if(ze.test(o)){for(s=s||p.appendChild(e.createElement("div")),l=(Be.exec(o)||["",""])[1].toLowerCase(),c=Ge[l]||Ge._default,s.innerHTML=c[1]+o.replace(Re,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;
if(!re.leadingWhitespace&&Ie.test(o)&&d.push(e.createTextNode(Ie.exec(o)[0])),!re.tbody)for(o="table"!==l||We.test(o)?"<table>"!==c[1]||We.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)oe.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);
for(oe.merge(d,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);
s=p.lastChild}else d.push(e.createTextNode(o));for(s&&p.removeChild(s),re.appendChecked||oe.grep(v(d,"input"),m),h=0;o=d[h++];)if((!r||-1===oe.inArray(o,r))&&(a=oe.contains(o.ownerDocument,o),s=v(p.appendChild(o),"script"),a&&w(s),n))for(i=0;o=s[i++];)Qe.test(o.type||"")&&n.push(o);
return s=null,p},cleanData:function(t,e){for(var n,r,i,o,a=0,s=oe.expando,l=oe.cache,u=re.deleteExpando,c=oe.event.special;null!=(n=t[a]);a++)if((e||oe.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?oe.event.remove(n,r):oe.removeEvent(n,r,o.handle);
l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==ke?n.removeAttribute(s):n[s]=null,J.push(i))
}}}),oe.fn.extend({text:function(t){return Oe(this,function(t){return void 0===t?oe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ge).createTextNode(t))
},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=y(this,t);
e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=y(this,t);
e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)
})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)
})},remove:function(t,e){for(var n,r=t?oe.filter(t,this):this,i=0;null!=(n=r[i]);i++)e||1!==n.nodeType||oe.cleanData(v(n)),n.parentNode&&(e&&oe.contains(n.ownerDocument,n)&&w(v(n,"script")),n.parentNode.removeChild(n));
return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&oe.cleanData(v(t,!1));t.firstChild;)t.removeChild(t.firstChild);
t.options&&oe.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return oe.clone(this,t,e)
})},html:function(t){return Oe(this,function(t){var e=this[0]||{},n=0,r=this.length;
if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(He,""):void 0;if(!("string"!=typeof t||Ue.test(t)||!re.htmlSerialize&&qe.test(t)||!re.leadingWhitespace&&Ie.test(t)||Ge[(Be.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Re,"<$1></$2>");
try{for(;r>n;n++)e=this[n]||{},1===e.nodeType&&(oe.cleanData(v(e,!1)),e.innerHTML=t);
e=0}catch(i){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];
return this.domManip(arguments,function(e){t=this.parentNode,oe.cleanData(v(this)),t&&t.replaceChild(e,this)
}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)
},domManip:function(t,e){t=G.apply([],t);var n,r,i,o,a,s,l=0,u=this.length,c=this,f=u-1,p=t[0],d=oe.isFunction(p);
if(d||u>1&&"string"==typeof p&&!re.checkClone&&Xe.test(p))return this.each(function(n){var r=c.eq(n);
d&&(t[0]=p.call(this,n,r.html())),r.domManip(t,e)});if(u&&(s=oe.buildFragment(t,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=oe.map(v(s,"script"),b),i=o.length;u>l;l++)r=s,l!==f&&(r=oe.clone(r,!0,!0),i&&oe.merge(o,v(r,"script"))),e.call(this[l],r,l);
if(i)for(a=o[o.length-1].ownerDocument,oe.map(o,x),l=0;i>l;l++)r=o[l],Qe.test(r.type||"")&&!oe._data(r,"globalEval")&&oe.contains(a,r)&&(r.src?oe._evalUrl&&oe._evalUrl(r.src):oe.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Ve,"")));
s=n=null}return this}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){oe.fn[t]=function(t){for(var n,r=0,i=[],o=oe(t),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),oe(o[r])[e](n),Y.apply(i,n.get());
return this.pushStack(i)}});var Ze,tn={};!function(){var t,e,n=ge.createElement("div"),r="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=n.getElementsByTagName("a")[0],t.style.cssText="float:left;opacity:.5",re.opacity=/^0.5/.test(t.style.opacity),re.cssFloat=!!t.style.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===n.style.backgroundClip,t=n=null,re.shrinkWrapBlocks=function(){var t,n,i,o;
if(null==e){if(t=ge.getElementsByTagName("body")[0],!t)return;o="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",n=ge.createElement("div"),i=ge.createElement("div"),t.appendChild(n).appendChild(i),e=!1,typeof i.style.zoom!==ke&&(i.style.cssText=r+";width:1px;padding:1px;zoom:1",i.innerHTML="<div></div>",i.firstChild.style.width="5px",e=3!==i.offsetWidth),t.removeChild(n),t=n=i=null
}return e}}();var en,nn,rn=/^margin/,on=new RegExp("^("+_e+")(?!px)[a-z%]+$","i"),an=/^(top|right|bottom|left)$/;
t.getComputedStyle?(en=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)
},nn=function(t,e,n){var r,i,o,a,s=t.style;return n=n||en(t),a=n?n.getPropertyValue(e)||n[e]:void 0,n&&(""!==a||oe.contains(t.ownerDocument,t)||(a=oe.style(t,e)),on.test(a)&&rn.test(e)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""
}):ge.documentElement.currentStyle&&(en=function(t){return t.currentStyle},nn=function(t,e,n){var r,i,o,a,s=t.style;
return n=n||en(t),a=n?n[e]:void 0,null==a&&s&&s[e]&&(a=s[e]),on.test(a)&&!an.test(e)&&(r=s.left,i=t.runtimeStyle,o=i&&i.left,o&&(i.left=t.currentStyle.left),s.left="fontSize"===e?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"
}),function(){function e(){var e,n,r=ge.getElementsByTagName("body")[0];r&&(e=ge.createElement("div"),n=ge.createElement("div"),e.style.cssText=u,r.appendChild(e).appendChild(n),n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",oe.swap(r,null!=r.style.zoom?{zoom:1}:{},function(){i=4===n.offsetWidth
}),o=!0,a=!1,s=!0,t.getComputedStyle&&(a="1%"!==(t.getComputedStyle(n,null)||{}).top,o="4px"===(t.getComputedStyle(n,null)||{width:"4px"}).width),r.removeChild(e),n=r=null)
}var n,r,i,o,a,s,l=ge.createElement("div"),u="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
l.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=l.getElementsByTagName("a")[0],n.style.cssText="float:left;opacity:.5",re.opacity=/^0.5/.test(n.style.opacity),re.cssFloat=!!n.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===l.style.backgroundClip,n=l=null,oe.extend(re,{reliableHiddenOffsets:function(){if(null!=r)return r;
var t,e,n,i=ge.createElement("div"),o=ge.getElementsByTagName("body")[0];if(o)return i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=ge.createElement("div"),t.style.cssText=u,o.appendChild(t).appendChild(i),i.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=i.getElementsByTagName("td"),e[0].style.cssText="padding:0;margin:0;border:0;display:none",n=0===e[0].offsetHeight,e[0].style.display="",e[1].style.display="none",r=n&&0===e[0].offsetHeight,o.removeChild(t),i=o=null,r
},boxSizing:function(){return null==i&&e(),i},boxSizingReliable:function(){return null==o&&e(),o
},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){var e,n,r,i;
if(null==s&&t.getComputedStyle){if(e=ge.getElementsByTagName("body")[0],!e)return;
n=ge.createElement("div"),r=ge.createElement("div"),n.style.cssText=u,e.appendChild(n).appendChild(r),i=r.appendChild(ge.createElement("div")),i.style.cssText=r.style.cssText=c,i.style.marginRight=i.style.width="0",r.style.width="1px",s=!parseFloat((t.getComputedStyle(i,null)||{}).marginRight),e.removeChild(n)
}return s}})}(),oe.swap=function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];
i=n.apply(t,r||[]);for(o in e)t.style[o]=a[o];return i};var sn=/alpha\([^)]*\)/i,ln=/opacity\s*=\s*([^)]*)/,un=/^(none|table(?!-c[ea]).+)/,cn=new RegExp("^("+_e+")(.*)$","i"),fn=new RegExp("^([+-])=("+_e+")","i"),pn={position:"absolute",visibility:"hidden",display:"block"},dn={letterSpacing:0,fontWeight:400},hn=["Webkit","O","Moz","ms"];
oe.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=nn(t,"opacity");return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":re.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,o,a,s=oe.camelCase(e),l=t.style;
if(e=oe.cssProps[s]||(oe.cssProps[s]=_(l,s)),a=oe.cssHooks[e]||oe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(t,!1,r))?i:l[e];
if(o=typeof n,"string"===o&&(i=fn.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(oe.css(t,e)),o="number"),null!=n&&n===n&&("number"!==o||oe.cssNumber[s]||(n+="px"),re.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(t,n,r)))))try{l[e]="",l[e]=n
}catch(u){}}},css:function(t,e,n,r){var i,o,a,s=oe.camelCase(e);return e=oe.cssProps[s]||(oe.cssProps[s]=_(t.style,s)),a=oe.cssHooks[e]||oe.cssHooks[s],a&&"get"in a&&(o=a.get(t,!0,n)),void 0===o&&(o=nn(t,e,r)),"normal"===o&&e in dn&&(o=dn[e]),""===n||n?(i=parseFloat(o),n===!0||oe.isNumeric(i)?i||0:o):o
}}),oe.each(["height","width"],function(t,e){oe.cssHooks[e]={get:function(t,n,r){return n?0===t.offsetWidth&&un.test(oe.css(t,"display"))?oe.swap(t,pn,function(){return A(t,e,r)
}):A(t,e,r):void 0},set:function(t,n,r){var i=r&&en(t);return N(t,n,r?O(t,e,r,re.boxSizing()&&"border-box"===oe.css(t,"boxSizing",!1,i),i):0)
}}}),re.opacity||(oe.cssHooks.opacity={get:function(t,e){return ln.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""
},set:function(t,e){var n=t.style,r=t.currentStyle,i=oe.isNumeric(e)?"alpha(opacity="+100*e+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(e>=1||""===e)&&""===oe.trim(o.replace(sn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||r&&!r.filter)||(n.filter=sn.test(o)?o.replace(sn,i):o+" "+i)
}}),oe.cssHooks.marginRight=E(re.reliableMarginRight,function(t,e){return e?oe.swap(t,{display:"inline-block"},nn,[t,"marginRight"]):void 0
}),oe.each({margin:"",padding:"",border:"Width"},function(t,e){oe.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[t+Se[r]+e]=o[r]||o[r-2]||o[0];
return i}},rn.test(t)||(oe.cssHooks[t+e].set=N)}),oe.fn.extend({css:function(t,e){return Oe(this,function(t,e,n){var r,i,o={},a=0;
if(oe.isArray(e)){for(r=en(t),i=e.length;i>a;a++)o[e[a]]=oe.css(t,e[a],!1,r);return o
}return void 0!==n?oe.style(t,e,n):oe.css(t,e)},t,e,arguments.length>1)},show:function(){return S(this,!0)
},hide:function(){return S(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Ne(this)?oe(this).show():oe(this).hide()
})}}),oe.Tween=$,$.prototype={constructor:$,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||"swing",this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")
},cur:function(){var t=$.propHooks[this.prop];return t&&t.get?t.get(this):$.propHooks._default.get(this)
},run:function(t){var e,n=$.propHooks[this.prop];return this.pos=e=this.options.duration?oe.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this
}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(t){var e;
return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=oe.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]
},set:function(t){oe.fx.step[t.prop]?oe.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[oe.cssProps[t.prop]]||oe.cssHooks[t.prop])?oe.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now
}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)
}},oe.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2
}},oe.fx=$.prototype.init,oe.fx.step={};var gn,vn,mn=/^(?:toggle|show|hide)$/,yn=new RegExp("^(?:([+-])=|)("+_e+")([a-z%]*)$","i"),bn=/queueHooks$/,xn=[M],wn={"*":[function(t,e){var n=this.createTween(t,e),r=n.cur(),i=yn.exec(e),o=i&&i[3]||(oe.cssNumber[t]?"":"px"),a=(oe.cssNumber[t]||"px"!==o&&+r)&&yn.exec(oe.css(n.elem,t)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,oe.style(n.elem,t,a+o);
while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};oe.Animation=oe.extend(H,{tweener:function(t,e){oe.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");
for(var n,r=0,i=t.length;i>r;r++)n=t[r],wn[n]=wn[n]||[],wn[n].unshift(e)},prefilter:function(t,e){e?xn.unshift(t):xn.push(t)
}}),oe.speed=function(t,e,n){var r=t&&"object"==typeof t?oe.extend({},t):{complete:n||!n&&e||oe.isFunction(t)&&t,duration:t,easing:n&&e||e&&!oe.isFunction(e)&&e};
return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)
},r},oe.fn.extend({fadeTo:function(t,e,n,r){return this.filter(Ne).css("opacity",0).show().end().animate({opacity:e},t,n,r)
},animate:function(t,e,n,r){var i=oe.isEmptyObject(t),o=oe.speed(e,n,r),a=function(){var e=H(this,oe.extend({},t),o);
(i||oe._data(this,"finish"))&&e.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,i=null!=t&&t+"queueHooks",o=oe.timers,a=oe._data(this);
if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&bn.test(i)&&r(a[i]);
for(i=o.length;i--;)o[i].elem!==this||null!=t&&o[i].queue!==t||(o[i].anim.stop(n),e=!1,o.splice(i,1));
(e||!n)&&oe.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=oe._data(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=oe.timers,a=r?r.length:0;
for(n.finish=!0,oe.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));
for(e=0;a>e;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(t,e){var n=oe.fn[e];
oe.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(P(e,!0),t,r,i)
}}),oe.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){oe.fn[t]=function(t,n,r){return this.animate(e,t,n,r)
}}),oe.timers=[],oe.fx.tick=function(){var t,e=oe.timers,n=0;for(gn=oe.now();n<e.length;n++)t=e[n],t()||e[n]!==t||e.splice(n--,1);
e.length||oe.fx.stop(),gn=void 0},oe.fx.timer=function(t){oe.timers.push(t),t()?oe.fx.start():oe.timers.pop()
},oe.fx.interval=13,oe.fx.start=function(){vn||(vn=setInterval(oe.fx.tick,oe.fx.interval))
},oe.fx.stop=function(){clearInterval(vn),vn=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(t,e){return t=oe.fx?oe.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var r=setTimeout(e,t);
n.stop=function(){clearTimeout(r)}})},function(){var t,e,n,r,i=ge.createElement("div");
i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=i.getElementsByTagName("a")[0],n=ge.createElement("select"),r=n.appendChild(ge.createElement("option")),e=i.getElementsByTagName("input")[0],t.style.cssText="top:1px",re.getSetAttribute="t"!==i.className,re.style=/top/.test(t.getAttribute("style")),re.hrefNormalized="/a"===t.getAttribute("href"),re.checkOn=!!e.value,re.optSelected=r.selected,re.enctype=!!ge.createElement("form").enctype,n.disabled=!0,re.optDisabled=!r.disabled,e=ge.createElement("input"),e.setAttribute("value",""),re.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),re.radioValue="t"===e.value,t=e=n=r=i=null
}();var Cn=/\r/g;oe.fn.extend({val:function(t){var e,n,r,i=this[0];{if(arguments.length)return r=oe.isFunction(t),this.each(function(n){var i;
1===this.nodeType&&(i=r?t.call(this,n,oe(this).val()):t,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(t){return null==t?"":t+""
})),e=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))
});if(i)return e=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Cn,""):null==n?"":n)
}}}),oe.extend({valHooks:{option:{get:function(t){var e=oe.find.attr(t,"value");return null!=e?e:oe.text(t)
}},select:{get:function(t){for(var e,n,r=t.options,i=t.selectedIndex,o="select-one"===t.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(re.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&oe.nodeName(n.parentNode,"optgroup"))){if(e=oe(n).val(),o)return e;
a.push(e)}return a},set:function(t,e){for(var n,r,i=t.options,o=oe.makeArray(e),a=i.length;a--;)if(r=i[a],oe.inArray(oe.valHooks.option.get(r),o)>=0)try{r.selected=n=!0
}catch(s){r.scrollHeight}else r.selected=!1;return n||(t.selectedIndex=-1),i}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(t,e){return oe.isArray(e)?t.checked=oe.inArray(oe(t).val(),e)>=0:void 0
}},re.checkOn||(oe.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value
})});var Tn,kn,jn=oe.expr.attrHandle,En=/^(?:checked|selected)$/i,_n=re.getSetAttribute,Sn=re.input;
oe.fn.extend({attr:function(t,e){return Oe(this,oe.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){oe.removeAttr(this,t)
})}}),oe.extend({attr:function(t,e,n){var r,i,o=t.nodeType;if(t&&3!==o&&8!==o&&2!==o)return typeof t.getAttribute===ke?oe.prop(t,e,n):(1===o&&oe.isXMLDoc(t)||(e=e.toLowerCase(),r=oe.attrHooks[e]||(oe.expr.match.bool.test(e)?kn:Tn)),void 0===n?r&&"get"in r&&null!==(i=r.get(t,e))?i:(i=oe.find.attr(t,e),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:(t.setAttribute(e,n+""),n):void oe.removeAttr(t,e))
},removeAttr:function(t,e){var n,r,i=0,o=e&&e.match(xe);if(o&&1===t.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,oe.expr.match.bool.test(n)?Sn&&_n||!En.test(n)?t[r]=!1:t[oe.camelCase("default-"+n)]=t[r]=!1:oe.attr(t,n,""),t.removeAttribute(_n?n:r)
},attrHooks:{type:{set:function(t,e){if(!re.radioValue&&"radio"===e&&oe.nodeName(t,"input")){var n=t.value;
return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),kn={set:function(t,e,n){return e===!1?oe.removeAttr(t,n):Sn&&_n||!En.test(n)?t.setAttribute(!_n&&oe.propFix[n]||n,n):t[oe.camelCase("default-"+n)]=t[n]=!0,n
}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(t,e){var n=jn[e]||oe.find.attr;
jn[e]=Sn&&_n||!En.test(e)?function(t,e,r){var i,o;return r||(o=jn[e],jn[e]=i,i=null!=n(t,e,r)?e.toLowerCase():null,jn[e]=o),i
}:function(t,e,n){return n?void 0:t[oe.camelCase("default-"+e)]?e.toLowerCase():null
}}),Sn&&_n||(oe.attrHooks.value={set:function(t,e,n){return oe.nodeName(t,"input")?void(t.defaultValue=e):Tn&&Tn.set(t,e,n)
}}),_n||(Tn={set:function(t,e,n){var r=t.getAttributeNode(n);return r||t.setAttributeNode(r=t.ownerDocument.createAttribute(n)),r.value=e+="","value"===n||e===t.getAttribute(n)?e:void 0
}},jn.id=jn.name=jn.coords=function(t,e,n){var r;return n?void 0:(r=t.getAttributeNode(e))&&""!==r.value?r.value:null
},oe.valHooks.button={get:function(t,e){var n=t.getAttributeNode(e);return n&&n.specified?n.value:void 0
},set:Tn.set},oe.attrHooks.contenteditable={set:function(t,e,n){Tn.set(t,""===e?!1:e,n)
}},oe.each(["width","height"],function(t,e){oe.attrHooks[e]={set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0
}}})),re.style||(oe.attrHooks.style={get:function(t){return t.style.cssText||void 0
},set:function(t,e){return t.style.cssText=e+""}});var Nn=/^(?:input|select|textarea|button|object)$/i,On=/^(?:a|area)$/i;
oe.fn.extend({prop:function(t,e){return Oe(this,oe.prop,t,e,arguments.length>1)},removeProp:function(t){return t=oe.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]
}catch(e){}})}}),oe.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,n){var r,i,o,a=t.nodeType;
if(t&&3!==a&&8!==a&&2!==a)return o=1!==a||!oe.isXMLDoc(t),o&&(e=oe.propFix[e]||e,i=oe.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]
},propHooks:{tabIndex:{get:function(t){var e=oe.find.attr(t,"tabindex");return e?parseInt(e,10):Nn.test(t.nodeName)||On.test(t.nodeName)&&t.href?0:-1
}}}}),re.hrefNormalized||oe.each(["href","src"],function(t,e){oe.propHooks[e]={get:function(t){return t.getAttribute(e,4)
}}}),re.optSelected||(oe.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null
}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this
}),re.enctype||(oe.propFix.enctype="encoding");var An=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(t){var e,n,r,i,o,a,s=0,l=this.length,u="string"==typeof t&&t;
if(oe.isFunction(t))return this.each(function(e){oe(this).addClass(t.call(this,e,this.className))
});if(u)for(e=(t||"").match(xe)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(An," "):" ")){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");
a=oe.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(t){var e,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof t&&t;
if(oe.isFunction(t))return this.each(function(e){oe(this).removeClass(t.call(this,e,this.className))
});if(u)for(e=(t||"").match(xe)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(An," "):"")){for(o=0;i=e[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");
a=t?oe.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(t,e){var n=typeof t;
return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(oe.isFunction(t)?function(n){oe(this).toggleClass(t.call(this,n,this.className,e),e)
}:function(){if("string"===n)for(var e,r=0,i=oe(this),o=t.match(xe)||[];e=o[r++];)i.hasClass(e)?i.removeClass(e):i.addClass(e);
else(n===ke||"boolean"===n)&&(this.className&&oe._data(this,"__className__",this.className),this.className=this.className||t===!1?"":oe._data(this,"__className__")||"")
})},hasClass:function(t){for(var e=" "+t+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(An," ").indexOf(e)>=0)return!0;
return!1}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){oe.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)
}}),oe.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)
},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)
},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)
}});var $n=oe.now(),Dn=/\?/,Pn=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
oe.parseJSON=function(e){if(t.JSON&&t.JSON.parse)return t.JSON.parse(e+"");var n,r=null,i=oe.trim(e+"");
return i&&!oe.trim(i.replace(Pn,function(t,e,i,o){return n&&e&&(r=0),0===r?t:(n=i||e,r+=!o-!i,"")
}))?Function("return "+i)():oe.error("Invalid JSON: "+e)},oe.parseXML=function(e){var n,r;
if(!e||"string"!=typeof e)return null;try{t.DOMParser?(r=new DOMParser,n=r.parseFromString(e,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(e))
}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+e),n
};var Ln,Mn,Fn=/#.*$/,Hn=/([?&])_=[^&]*/,qn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,In=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Rn=/^(?:GET|HEAD)$/,Bn=/^\/\//,Wn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,zn={},Un={},Xn="*/".concat("*");
try{Mn=location.href}catch(Qn){Mn=ge.createElement("a"),Mn.href="",Mn=Mn.href}Ln=Wn.exec(Mn.toLowerCase())||[],oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Mn,type:"GET",isLocal:In.test(Ln[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?R(R(t,oe.ajaxSettings),e):R(oe.ajaxSettings,t)
},ajaxPrefilter:q(zn),ajaxTransport:q(Un),ajax:function(t,e){function n(t,e,n,r){var i,c,m,y,x,C=e;
2!==b&&(b=2,s&&clearTimeout(s),u=void 0,a=r||"",w.readyState=t>0?4:0,i=t>=200&&300>t||304===t,n&&(y=B(f,w,n)),y=W(f,y,w,i),i?(f.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(oe.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(oe.etag[o]=x)),204===t||"HEAD"===f.type?C="nocontent":304===t?C="notmodified":(C=y.state,c=y.data,m=y.error,i=!m)):(m=C,(t||!C)&&(C="error",0>t&&(t=0))),w.status=t,w.statusText=(e||C)+"",i?h.resolveWith(p,[c,C,w]):h.rejectWith(p,[w,C,m]),w.statusCode(v),v=void 0,l&&d.trigger(i?"ajaxSuccess":"ajaxError",[w,f,i?c:m]),g.fireWith(p,[w,C]),l&&(d.trigger("ajaxComplete",[w,f]),--oe.active||oe.event.trigger("ajaxStop")))
}"object"==typeof t&&(e=t,t=void 0),e=e||{};var r,i,o,a,s,l,u,c,f=oe.ajaxSetup({},e),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?oe(p):oe.event,h=oe.Deferred(),g=oe.Callbacks("once memory"),v=f.statusCode||{},m={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(t){var e;
if(2===b){if(!c)for(c={};e=qn.exec(a);)c[e[1].toLowerCase()]=e[2];e=c[t.toLowerCase()]
}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(t,e){var n=t.toLowerCase();
return b||(t=y[n]=y[n]||t,m[t]=e),this},overrideMimeType:function(t){return b||(f.mimeType=t),this
},statusCode:function(t){var e;if(t)if(2>b)for(e in t)v[e]=[v[e],t[e]];else w.always(t[w.status]);
return this},abort:function(t){var e=t||x;return u&&u.abort(e),n(0,e),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((t||f.url||Mn)+"").replace(Fn,"").replace(Bn,Ln[1]+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=oe.trim(f.dataType||"*").toLowerCase().match(xe)||[""],null==f.crossDomain&&(r=Wn.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Ln[1]&&r[2]===Ln[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Ln[3]||("http:"===Ln[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=oe.param(f.data,f.traditional)),I(zn,f,e,w),2===b)return w;
l=f.global,l&&0===oe.active++&&oe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Rn.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Dn.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Hn.test(o)?o.replace(Hn,"$1_="+$n++):o+(Dn.test(o)?"&":"?")+"_="+$n++)),f.ifModified&&(oe.lastModified[o]&&w.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&w.setRequestHeader("If-None-Match",oe.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Xn+"; q=0.01":""):f.accepts["*"]);
for(i in f.headers)w.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===b))return w.abort();
x="abort";for(i in{success:1,error:1,complete:1})w[i](f[i]);if(u=I(Un,f,e,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){w.abort("timeout")
},f.timeout));try{b=1,u.send(m,n)}catch(C){if(!(2>b))throw C;n(-1,C)}}else n(-1,"No Transport");
return w},getJSON:function(t,e,n){return oe.get(t,e,n,"json")},getScript:function(t,e){return oe.get(t,void 0,e,"script")
}}),oe.each(["get","post"],function(t,e){oe[e]=function(t,n,r,i){return oe.isFunction(n)&&(i=i||r,r=n,n=void 0),oe.ajax({url:t,type:e,dataType:i,data:n,success:r})
}}),oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){oe.fn[e]=function(t){return this.on(e,t)
}}),oe._evalUrl=function(t){return oe.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},oe.fn.extend({wrapAll:function(t){if(oe.isFunction(t))return this.each(function(e){oe(this).wrapAll(t.call(this,e))
});if(this[0]){var e=oe(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;
return t}).append(this)}return this},wrapInner:function(t){return this.each(oe.isFunction(t)?function(e){oe(this).wrapInner(t.call(this,e))
}:function(){var e=oe(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=oe.isFunction(t);
return this.each(function(n){oe(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)
}).end()}}),oe.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!re.reliableHiddenOffsets()&&"none"===(t.style&&t.style.display||oe.css(t,"display"))
},oe.expr.filters.visible=function(t){return!oe.expr.filters.hidden(t)};var Jn=/%20/g,Vn=/\[\]$/,Gn=/\r?\n/g,Yn=/^(?:submit|button|image|reset|file)$/i,Kn=/^(?:input|select|textarea|keygen)/i;
oe.param=function(t,e){var n,r=[],i=function(t,e){e=oe.isFunction(e)?e():null==e?"":e,r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)
};if(void 0===e&&(e=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(t)||t.jquery&&!oe.isPlainObject(t))oe.each(t,function(){i(this.name,this.value)
});else for(n in t)z(n,t[n],e,i);return r.join("&").replace(Jn,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var t=oe.prop(this,"elements");
return t?oe.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!oe(this).is(":disabled")&&Kn.test(this.nodeName)&&!Yn.test(t)&&(this.checked||!Ae.test(t))
}).map(function(t,e){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(t){return{name:e.name,value:t.replace(Gn,"\r\n")}
}):{name:e.name,value:n.replace(Gn,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=void 0!==t.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&U()||X()
}:U;var Zn=0,tr={},er=oe.ajaxSettings.xhr();t.ActiveXObject&&oe(t).on("unload",function(){for(var t in tr)tr[t](void 0,!0)
}),re.cors=!!er&&"withCredentials"in er,er=re.ajax=!!er,er&&oe.ajaxTransport(function(t){if(!t.crossDomain||re.cors){var e;
return{send:function(n,r){var i,o=t.xhr(),a=++Zn;if(o.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(i in t.xhrFields)o[i]=t.xhrFields[i];
t.mimeType&&o.overrideMimeType&&o.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");
for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(t.hasContent&&t.data||null),e=function(n,i){var s,l,u;
if(e&&(i||4===o.readyState))if(delete tr[a],e=void 0,o.onreadystatechange=oe.noop,i)4!==o.readyState&&o.abort();
else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText
}catch(c){l=""}s||!t.isLocal||t.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())
},t.async?4===o.readyState?setTimeout(e):o.onreadystatechange=tr[a]=e:e()},abort:function(){e&&e(void 0,!0)
}}}}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return oe.globalEval(t),t
}}}),oe.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)
}),oe.ajaxTransport("script",function(t){if(t.crossDomain){var e,n=ge.head||oe("head")[0]||ge.documentElement;
return{send:function(r,i){e=ge.createElement("script"),e.async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,n){(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,n||i(200,"success"))
},n.insertBefore(e,n.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}});var nr=[],rr=/(=)\?(?=&|$)|\?\?/;
oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=nr.pop()||oe.expando+"_"+$n++;
return this[t]=!0,t}}),oe.ajaxPrefilter("json jsonp",function(e,n,r){var i,o,a,s=e.jsonp!==!1&&(rr.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&rr.test(e.data)&&"data");
return s||"jsonp"===e.dataTypes[0]?(i=e.jsonpCallback=oe.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(rr,"$1"+i):e.jsonp!==!1&&(e.url+=(Dn.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||oe.error(i+" was not called"),a[0]
},e.dataTypes[0]="json",o=t[i],t[i]=function(){a=arguments},r.always(function(){t[i]=o,e[i]&&(e.jsonpCallback=n.jsonpCallback,nr.push(i)),a&&oe.isFunction(o)&&o(a[0]),a=o=void 0
}),"script"):void 0}),oe.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;
"boolean"==typeof e&&(n=e,e=!1),e=e||ge;var r=pe.exec(t),i=!n&&[];return r?[e.createElement(r[1])]:(r=oe.buildFragment([t],e,i),i&&i.length&&oe(i).remove(),oe.merge([],r.childNodes))
};var ir=oe.fn.load;oe.fn.load=function(t,e,n){if("string"!=typeof t&&ir)return ir.apply(this,arguments);
var r,i,o,a=this,s=t.indexOf(" ");return s>=0&&(r=t.slice(s,t.length),t=t.slice(0,s)),oe.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),a.length>0&&oe.ajax({url:t,type:o,dataType:"html",data:e}).done(function(t){i=arguments,a.html(r?oe("<div>").append(oe.parseHTML(t)).find(r):t)
}).complete(n&&function(t,e){a.each(n,i||[t.responseText,e,t])}),this},oe.expr.filters.animated=function(t){return oe.grep(oe.timers,function(e){return t===e.elem
}).length};var or=t.document.documentElement;oe.offset={setOffset:function(t,e,n){var r,i,o,a,s,l,u,c=oe.css(t,"position"),f=oe(t),p={};
"static"===c&&(t.style.position="relative"),s=f.offset(),o=oe.css(t,"top"),l=oe.css(t,"left"),u=("absolute"===c||"fixed"===c)&&oe.inArray("auto",[o,l])>-1,u?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),oe.isFunction(e)&&(e=e.call(t,n,s)),null!=e.top&&(p.top=e.top-s.top+a),null!=e.left&&(p.left=e.left-s.left+i),"using"in e?e.using.call(t,p):f.css(p)
}},oe.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){oe.offset.setOffset(this,t,e)
});var e,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;if(o)return e=o.documentElement,oe.contains(e,i)?(typeof i.getBoundingClientRect!==ke&&(r=i.getBoundingClientRect()),n=Q(o),{top:r.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:r.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):r
},position:function(){if(this[0]){var t,e,n={top:0,left:0},r=this[0];return"fixed"===oe.css(r,"position")?e=r.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),oe.nodeName(t[0],"html")||(n=t.offset()),n.top+=oe.css(t[0],"borderTopWidth",!0),n.left+=oe.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-oe.css(r,"marginTop",!0),left:e.left-n.left-oe.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||or;t&&!oe.nodeName(t,"html")&&"static"===oe.css(t,"position");)t=t.offsetParent;
return t||or})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n=/Y/.test(e);
oe.fn[t]=function(r){return Oe(this,function(t,r,i){var o=Q(t);return void 0===i?o?e in o?o[e]:o.document.documentElement[r]:t[r]:void(o?o.scrollTo(n?oe(o).scrollLeft():i,n?i:oe(o).scrollTop()):t[r]=i)
},t,r,arguments.length,null)}}),oe.each(["top","left"],function(t,e){oe.cssHooks[e]=E(re.pixelPosition,function(t,n){return n?(n=nn(t,e),on.test(n)?oe(t).position()[e]+"px":n):void 0
})}),oe.each({Height:"height",Width:"width"},function(t,e){oe.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,r){oe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");
return Oe(this,function(e,n,r){var i;return oe.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+t],i["scroll"+t],e.body["offset"+t],i["offset"+t],i["client"+t])):void 0===r?oe.css(e,n,a):oe.style(e,n,r,a)
},e,o?r:void 0,o,null)}})}),oe.fn.size=function(){return this.length},oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe
});var ar=t.jQuery,sr=t.$;return oe.noConflict=function(e){return t.$===oe&&(t.$=sr),e&&t.jQuery===oe&&(t.jQuery=ar),oe
},typeof e===ke&&(t.jQuery=t.$=oe),oe}),"undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");
+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,r=this;
t(this).one(t.support.transition.end,function(){n=!0});var i=function(){n||t(r).trigger(t.support.transition.end)
};return setTimeout(i,e),this},t(function(){t.support.transition=e()})}(jQuery),+function(t){"use strict";
var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){o.trigger("closed.bs.alert").remove()
}var r=t(this),i=r.attr("data-target");i||(i=r.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));
var o=t(i);e&&e.preventDefault(),o.length||(o=r.hasClass("alert")?r:r.parent()),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one(t.support.transition.end,n).emulateTransitionEnd(150):n())
};var r=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var r=t(this),i=r.data("bs.alert");
i||r.data("bs.alert",i=new n(this)),"string"==typeof e&&i[e].call(r)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=r,this
},t(document).on("click.bs.alert.data-api",e,n.prototype.close)}(jQuery),+function(t){"use strict";
var e=function(n,r){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,r),this.isLoading=!1
};e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(e){var n="disabled",r=this.$element,i=r.is("input")?"val":"html",o=r.data();
e+="Text",o.resetText||r.data("resetText",r[i]()),r[i](o[e]||this.options[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,r.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,r.removeClass(n).removeAttr(n))
},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');
if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")
}t&&this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var r=t(this),i=r.data("bs.button"),o="object"==typeof n&&n;
i||r.data("bs.button",i=new e(this,o)),"toggle"==n?i.toggle():n&&i.setState(n)})},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this
},t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);
n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle"),e.preventDefault()})}(jQuery),+function(t){"use strict";
var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))
};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this
},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)
},e.prototype.to=function(e){var n=this,r=this.getActiveIndex();return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)
}):r==e?this.pause().cycle():this.slide(e>r?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},e.prototype.slide=function(e,n){var r=this.$element.find(".item.active"),i=n||r[e](),o=this.interval,a="next"==e?"left":"right",s="next"==e?"first":"last",l=this;
if(!i.length){if(!this.options.wrap)return;i=this.$element.find(".item")[s]()}if(i.hasClass("active"))return this.sliding=!1;
var u=t.Event("slide.bs.carousel",{relatedTarget:i[0],direction:a});return this.$element.trigger(u),u.isDefaultPrevented()?void 0:(this.sliding=!0,o&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);
e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")?(i.addClass(e),i[0].offsetWidth,r.addClass(a),i.addClass(a),r.one(t.support.transition.end,function(){i.removeClass([e,a].join(" ")).addClass("active"),r.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid.bs.carousel")
},0)}).emulateTransitionEnd(1e3*r.css("transition-duration").slice(0,-1))):(r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),o&&this.cycle(),this)
};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var r=t(this),i=r.data("bs.carousel"),o=t.extend({},e.DEFAULTS,r.data(),"object"==typeof n&&n),a="string"==typeof n?n:o.slide;
i||r.data("bs.carousel",i=new e(this,o)),"number"==typeof n?i.to(n):a?i[a]():o.interval&&i.pause().cycle()
})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this
},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,r=t(this),i=t(r.attr("data-target")||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),o=t.extend({},i.data(),r.data()),a=r.attr("data-slide-to");
a&&(o.interval=!1),i.carousel(o),(a=r.attr("data-slide-to"))&&i.data("bs.carousel").to(a),e.preventDefault()
}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);
e.carousel(e.data())})})}(jQuery),+function(t){"use strict";var e=function(n,r){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,r),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()
};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");
return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");
if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");
if(n&&n.length){var r=n.data("bs.collapse");if(r&&r.transitioning)return;n.collapse("hide"),r||n.data("bs.collapse",null)
}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;
var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};if(!t.support.transition)return o.call(this);var a=t.camelCase(["scroll",i].join("-"));
this.$element.one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350)[i](this.$element[0][a])
}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");
if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;
var r=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};return t.support.transition?void this.$element[n](0).one(t.support.transition.end,t.proxy(r,this)).emulateTransitionEnd(350):r.call(this)
}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var r=t(this),i=r.data("bs.collapse"),o=t.extend({},e.DEFAULTS,r.data(),"object"==typeof n&&n);
!i&&o.toggle&&"show"==n&&(n=!n),i||r.data("bs.collapse",i=new e(this,o)),"string"==typeof n&&i[n]()
})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this
},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var n,r=t(this),i=r.attr("data-target")||e.preventDefault()||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=t(i),a=o.data("bs.collapse"),s=a?"toggle":r.data(),l=r.attr("data-parent"),u=l&&t(l);
a&&a.transitioning||(u&&u.find('[data-toggle=collapse][data-parent="'+l+'"]').not(r).addClass("collapsed"),r[o.hasClass("in")?"addClass":"removeClass"]("collapsed")),o.collapse(s)
})}(jQuery),+function(t){"use strict";function e(e){t(r).remove(),t(i).each(function(){var r=n(t(this)),i={relatedTarget:this};
r.hasClass("open")&&(r.trigger(e=t.Event("hide.bs.dropdown",i)),e.isDefaultPrevented()||r.removeClass("open").trigger("hidden.bs.dropdown",i))
})}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));
var r=n&&t(n);return r&&r.length?r:e.parent()}var r=".dropdown-backdrop",i="[data-toggle=dropdown]",o=function(e){t(e).on("click.bs.dropdown",this.toggle)
};o.prototype.toggle=function(r){var i=t(this);if(!i.is(".disabled, :disabled")){var o=n(i),a=o.hasClass("open");
if(e(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);
var s={relatedTarget:this};if(o.trigger(r=t.Event("show.bs.dropdown",s)),r.isDefaultPrevented())return;
o.toggleClass("open").trigger("shown.bs.dropdown",s),i.focus()}return!1}},o.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var r=t(this);
if(e.preventDefault(),e.stopPropagation(),!r.is(".disabled, :disabled")){var o=n(r),a=o.hasClass("open");
if(!a||a&&27==e.keyCode)return 27==e.which&&o.find(i).focus(),r.click();var s=" li:not(.divider):visible a",l=o.find("[role=menu]"+s+", [role=listbox]"+s);
if(l.length){var u=l.index(l.filter(":focus"));38==e.keyCode&&u>0&&u--,40==e.keyCode&&u<l.length-1&&u++,~u||(u=0),l.eq(u).focus()
}}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),r=n.data("bs.dropdown");
r||n.data("bs.dropdown",r=new o(this)),"string"==typeof e&&r[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this
},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()
}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i+", [role=menu], [role=listbox]",o.prototype.keydown)
}(jQuery),+function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)
},e.prototype.show=function(e){var n=this,r=t.Event("show.bs.modal",{relatedTarget:e});
this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var r=t.support.transition&&n.$element.hasClass("fade");
n.$element.parent().length||n.$element.appendTo(document.body),n.$element.show().scrollTop(0),r&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();
var i=t.Event("shown.bs.modal",{relatedTarget:e});r?n.$element.find(".modal-dialog").one(t.support.transition.end,function(){n.$element.focus().trigger(i)
}).emulateTransitionEnd(300):n.$element.focus().trigger(i)}))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())
},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()
},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()
},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;
this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")
})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},e.prototype.backdrop=function(e){var n=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var r=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))
},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;
r?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()
};var n=t.fn.modal;t.fn.modal=function(n,r){return this.each(function(){var i=t(this),o=i.data("bs.modal"),a=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n);
o||i.data("bs.modal",o=new e(this,a)),"string"==typeof n?o[n](r):a.show&&o.show(r)
})},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this
},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),r=n.attr("href"),i=t(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=i.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(r)&&r},i.data(),n.data());
n.is("a")&&e.preventDefault(),i.modal(o,this).one("hide",function(){n.is(":visible")&&n.focus()
})}),t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")
}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")
})}(jQuery),+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)
};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,n,r){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(r);
for(var i=this.options.trigger.split(" "),o=i.length;o--;){var a=i[o];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));
else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";
this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))
}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e
},e.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,r){n[t]!=r&&(e[t]=r)
}),e},e.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
return clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()
},n.options.delay.show)):n.show()},e.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
return clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()
},n.options.delay.hide)):n.hide()},e.prototype.show=function(){var e=t.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;
var n=this,r=this.tip();this.setContent(),this.options.animation&&r.addClass("fade");
var i="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,o=/\s?auto?\s?/i,a=o.test(i);
a&&(i=i.replace(o,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(i),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);
var s=this.getPosition(),l=r[0].offsetWidth,u=r[0].offsetHeight;if(a){var c=this.$element.parent(),f=i,p=document.documentElement.scrollTop||document.body.scrollTop,d="body"==this.options.container?window.innerWidth:c.outerWidth(),h="body"==this.options.container?window.innerHeight:c.outerHeight(),g="body"==this.options.container?0:c.offset().left;
i="bottom"==i&&s.top+s.height+u-p>h?"top":"top"==i&&s.top-p-u<0?"bottom":"right"==i&&s.right+l>d?"left":"left"==i&&s.left-l<g?"right":i,r.removeClass(f).addClass(i)
}var v=this.getCalculatedOffset(i,s,l,u);this.applyPlacement(v,i),this.hoverState=null;
var m=function(){n.$element.trigger("shown.bs."+n.type)};t.support.transition&&this.$tip.hasClass("fade")?r.one(t.support.transition.end,m).emulateTransitionEnd(150):m()
}},e.prototype.applyPlacement=function(e,n){var r,i=this.tip(),o=i[0].offsetWidth,a=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),l=parseInt(i.css("margin-left"),10);
isNaN(s)&&(s=0),isNaN(l)&&(l=0),e.top=e.top+s,e.left=e.left+l,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})
}},e),0),i.addClass("in");var u=i[0].offsetWidth,c=i[0].offsetHeight;if("top"==n&&c!=a&&(r=!0,e.top=e.top+a-c),/bottom|top/.test(n)){var f=0;
e.left<0&&(f=-2*e.left,e.left=0,i.offset(e),u=i[0].offsetWidth,c=i[0].offsetHeight),this.replaceArrow(f-o+u,u,"left")
}else this.replaceArrow(c-a,c,"top");r&&i.offset(e)},e.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")
},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")
},e.prototype.hide=function(){function e(){"in"!=n.hoverState&&r.detach(),n.$element.trigger("hidden.bs."+n.type)
}var n=this,r=this.tip(),i=t.Event("hide.bs."+this.type);return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(r.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?r.one(t.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this)
},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")
},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0];
return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())
},e.prototype.getCalculatedOffset=function(t,e,n,r){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-r,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-r/2,left:e.left-n}:{top:e.top+e.height/2-r/2,left:e.left+e.width}
},e.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)
},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)
},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)
},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1
},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var n=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
n.tip().hasClass("in")?n.leave(n):n.enter(n)},e.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var r=t(this),i=r.data("bs.tooltip"),o="object"==typeof n&&n;
(i||"destroy"!=n)&&(i||r.data("bs.tooltip",i=new e(this,o)),"string"==typeof n&&i[n]())
})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this
}}(jQuery),+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)
};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS
},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()
},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;
return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)
},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip
};var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var r=t(this),i=r.data("bs.popover"),o="object"==typeof n&&n;
(i||"destroy"!=n)&&(i||r.data("bs.popover",i=new e(this,o)),"string"==typeof n&&i[n]())
})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=n,this
}}(jQuery),+function(t){"use strict";function e(n,r){var i,o=t.proxy(this.process,this);
this.$element=t(t(n).is("body")?window:n),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",o),this.options=t.extend({},e.DEFAULTS,r),this.selector=(this.options.target||(i=t(n).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()
}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";
this.offsets=t([]),this.targets=t([]);{var n=this;this.$body.find(this.selector).map(function(){var r=t(this),i=r.data("target")||r.attr("href"),o=/^#./.test(i)&&t(i);
return o&&o.length&&o.is(":visible")&&[[o[e]().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null
}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])
})}},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,r=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,a=this.activeTarget;
if(e>=r)return a!=(t=o.last()[0])&&this.activate(t);if(a&&e<=i[0])return a!=(t=o[0])&&this.activate(t);
for(t=i.length;t--;)a!=o[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");
var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',r=t(n).parents("li").addClass("active");
r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active")),r.trigger("activate.bs.scrollspy")
};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var r=t(this),i=r.data("bs.scrollspy"),o="object"==typeof n&&n;
i||r.data("bs.scrollspy",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this
},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);
e.scrollspy(e.data())})})}(jQuery),+function(t){"use strict";var e=function(e){this.element=t(e)
};e.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),r=e.data("target");
if(r||(r=e.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var i=n.find(".active:last a")[0],o=t.Event("show.bs.tab",{relatedTarget:i});
if(e.trigger(o),!o.isDefaultPrevented()){var a=t(r);this.activate(e.parent("li"),n),this.activate(a,a.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:i})
})}}},e.prototype.activate=function(e,n,r){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),r&&r()
}var o=n.find("> .active"),a=r&&t.support.transition&&o.hasClass("fade");a?o.one(t.support.transition.end,i).emulateTransitionEnd(150):i(),o.removeClass("in")
};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var r=t(this),i=r.data("bs.tab");
i||r.data("bs.tab",i=new e(this)),"string"==typeof n&&i[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this
},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")
})}(jQuery),+function(t){"use strict";var e=function(n,r){this.options=t.extend({},e.DEFAULTS,r),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(n),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;
this.$element.removeClass(e.RESET).addClass("affix");var t=this.$window.scrollTop(),n=this.$element.offset();
return this.pinnedOffset=n.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)
},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=t(document).height(),r=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,a=o.top,s=o.bottom;
"top"==this.affixed&&(i.top+=r),"object"!=typeof o&&(s=a=o),"function"==typeof a&&(a=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));
var l=null!=this.unpin&&r+this.unpin<=i.top?!1:null!=s&&i.top+this.$element.height()>=n-s?"bottom":null!=a&&a>=r?"top":!1;
if(this.affixed!==l){this.unpin&&this.$element.css("top","");var u="affix"+(l?"-"+l:""),c=t.Event(u+".bs.affix");
this.$element.trigger(c),c.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:n-s-this.$element.height()}))
}}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var r=t(this),i=r.data("bs.affix"),o="object"==typeof n&&n;
i||r.data("bs.affix",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=n,this
},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();
n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)
})})}(jQuery),function(){function t(t,e,n){for(var r=(n||0)-1,i=t?t.length:0;++r<i;)if(t[r]===e)return r;
return-1}function e(e,n){var r=typeof n;if(e=e.cache,"boolean"==r||null==n)return e[n]?0:-1;
"number"!=r&&"string"!=r&&(r="object");var i="number"==r?n:b+n;return e=(e=e[r])&&e[i],"object"==r?e&&t(e,n)>-1?0:-1:e?0:-1
}function n(t){var e=this.cache,n=typeof t;if("boolean"==n||null==t)e[t]=!0;else{"number"!=n&&"string"!=n&&(n="object");
var r="number"==n?t:b+t,i=e[n]||(e[n]={});"object"==n?(i[r]||(i[r]=[])).push(t):i[r]=!0
}}function r(t){return t.charCodeAt(0)}function i(t,e){for(var n=t.criteria,r=e.criteria,i=-1,o=n.length;++i<o;){var a=n[i],s=r[i];
if(a!==s){if(a>s||"undefined"==typeof a)return 1;if(s>a||"undefined"==typeof s)return-1
}}return t.index-e.index}function o(t){var e=-1,r=t.length,i=t[0],o=t[r/2|0],a=t[r-1];
if(i&&"object"==typeof i&&o&&"object"==typeof o&&a&&"object"==typeof a)return!1;var s=l();
s["false"]=s["null"]=s["true"]=s.undefined=!1;var u=l();for(u.array=t,u.cache=s,u.push=n;++e<r;)u.push(t[e]);
return u}function a(t){return"\\"+Z[t]}function s(){return g.pop()||[]}function l(){return v.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}
}function u(t){return"function"!=typeof t.toString&&"string"==typeof(t+"")}function c(t){t.length=0,g.length<w&&g.push(t)
}function f(t){var e=t.cache;e&&f(e),t.array=t.cache=t.criteria=t.object=t.number=t.string=t.value=null,v.length<w&&v.push(t)
}function p(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(0>i?0:i);++r<i;)o[r]=t[e+r];
return o}function d(n){function g(t){return t&&"object"==typeof t&&!fi(t)&&zr.call(t,"__wrapped__")?t:new v(t)
}function v(t,e){this.__chain__=!!e,this.__wrapped__=t}function w(t){function e(){if(r){var t=p(r);
Ur.apply(t,arguments)}if(this instanceof e){var o=ee(n.prototype),a=n.apply(o,t||arguments);
return Fe(a)?a:o}return n.apply(i,t||arguments)}var n=t[0],r=t[2],i=t[4];return ci(e,t),e
}function Z(t,e,n,r,i){if(n){var o=n(t);if("undefined"!=typeof o)return o}var a=Fe(t);
if(!a)return t;var l=Fr.call(t);if(!J[l]||!li.nodeClass&&u(t))return t;var f=ai[l];
switch(l){case I:case R:return new f(+t);case z:case Q:return new f(t);case X:return o=f(t.source,S.exec(t)),o.lastIndex=t.lastIndex,o
}var d=fi(t);if(e){var h=!r;r||(r=s()),i||(i=s());for(var g=r.length;g--;)if(r[g]==t)return i[g];
o=d?f(t.length):{}}else o=d?p(t):Ci({},t);return d&&(zr.call(t,"index")&&(o.index=t.index),zr.call(t,"input")&&(o.input=t.input)),e?(r.push(t),i.push(o),(d?wi:ji)(t,function(t,a){o[a]=Z(t,e,n,r,i)
}),h&&(c(r),c(i)),o):o}function ee(t){return Fe(t)?Yr(t):{}}function ne(t,e,n){if("function"!=typeof t)return or;
if("undefined"==typeof e||!("prototype"in t))return t;var r=t.__bindData__;if("undefined"==typeof r&&(li.funcNames&&(r=!t.name),r=r||!li.funcDecomp,!r)){var i=Br.call(t);
li.funcNames||(r=!N.test(i)),r||(r=D.test(i),ci(t,r))}if(r===!1||r!==!0&&1&r[1])return t;
switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)
};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)
}}return Bn(t,e)}function re(t){function e(){var t=l?a:this;if(i){var h=p(i);Ur.apply(h,arguments)
}if((o||c)&&(h||(h=p(arguments)),o&&Ur.apply(h,o),c&&h.length<s))return r|=16,re([n,f?r:-4&r,h,null,a,s]);
if(h||(h=arguments),u&&(n=t[d]),this instanceof e){t=ee(n.prototype);var g=n.apply(t,h);
return Fe(g)?g:t}return n.apply(t,h)}var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],l=1&r,u=2&r,c=4&r,f=8&r,d=n;
return ci(e,t),e}function ie(n,r){var i=-1,a=ge(),s=n?n.length:0,l=s>=x&&a===t,u=[];
if(l){var c=o(r);c?(a=e,r=c):l=!1}for(;++i<s;){var p=n[i];a(r,p)<0&&u.push(p)}return l&&f(r),u
}function ae(t,e,n,r){for(var i=(r||0)-1,o=t?t.length:0,a=[];++i<o;){var s=t[i];if(s&&"object"==typeof s&&"number"==typeof s.length&&(fi(s)||be(s))){e||(s=ae(s,e,n));
var l=-1,u=s.length,c=a.length;for(a.length+=u;++l<u;)a[c++]=s[l]}else n||a.push(s)
}return a}function se(t,e,n,r,i,o){if(n){var a=n(t,e);if("undefined"!=typeof a)return!!a
}if(t===e)return 0!==t||1/t==1/e;var l=typeof t,f=typeof e;if(!(t!==t||t&&K[l]||e&&K[f]))return!1;
if(null==t||null==e)return t===e;var p=Fr.call(t),d=Fr.call(e);if(p==H&&(p=U),d==H&&(d=U),p!=d)return!1;
switch(p){case I:case R:return+t==+e;case z:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;
case X:case Q:return t==Or(e)}var h=p==q;if(!h){var g=zr.call(t,"__wrapped__"),v=zr.call(e,"__wrapped__");
if(g||v)return se(g?t.__wrapped__:t,v?e.__wrapped__:e,n,r,i,o);if(p!=U||!li.nodeClass&&(u(t)||u(e)))return!1;
var m=!li.argsObject&&be(t)?Sr:t.constructor,y=!li.argsObject&&be(e)?Sr:e.constructor;
if(m!=y&&!(Me(m)&&m instanceof m&&Me(y)&&y instanceof y)&&"constructor"in t&&"constructor"in e)return!1
}var b=!i;i||(i=s()),o||(o=s());for(var x=i.length;x--;)if(i[x]==t)return o[x]==e;
var w=0;if(a=!0,i.push(t),o.push(e),h){if(x=t.length,w=e.length,a=w==x,a||r)for(;w--;){var C=x,T=e[w];
if(r)for(;C--&&!(a=se(t[C],T,n,r,i,o)););else if(!(a=se(t[w],T,n,r,i,o)))break}}else ki(e,function(e,s,l){return zr.call(l,s)?(w++,a=zr.call(t,s)&&se(t[s],e,n,r,i,o)):void 0
}),a&&!r&&ki(t,function(t,e,n){return zr.call(n,e)?a=--w>-1:void 0});return i.pop(),o.pop(),b&&(c(i),c(o)),a
}function le(t,e,n,r,i){(fi(e)?rn:ji)(e,function(e,o){var a,s,l=e,u=t[o];if(e&&((s=fi(e))||Ei(e))){for(var c=r.length;c--;)if(a=r[c]==e){u=i[c];
break}if(!a){var f;n&&(l=n(u,e),(f="undefined"!=typeof l)&&(u=l)),f||(u=s?fi(u)?u:[]:Ei(u)?u:{}),r.push(e),i.push(u),f||le(u,e,n,r,i)
}}else n&&(l=n(u,e),"undefined"==typeof l&&(l=e)),"undefined"!=typeof l&&(u=l);t[o]=u
})}function ue(t,e){return t+Rr(oi()*(e-t+1))}function ce(n,r,i){var a=-1,l=ge(),u=n?n.length:0,p=[],d=!r&&u>=x&&l===t,h=i||d?s():p;
if(d){var g=o(h);l=e,h=g}for(;++a<u;){var v=n[a],m=i?i(v,a,n):v;(r?!a||h[h.length-1]!==m:l(h,m)<0)&&((i||d)&&h.push(m),p.push(v))
}return d?(c(h.array),f(h)):i&&c(h),p}function fe(t){return function(e,n,r){var i={};
if(n=g.createCallback(n,r,3),fi(e))for(var o=-1,a=e.length;++o<a;){var s=e[o];t(i,s,n(s,o,e),e)
}else wi(e,function(e,r,o){t(i,e,n(e,r,o),o)});return i}}function pe(t,e,n,r,i,o){var a=1&e,s=2&e,l=4&e,u=16&e,c=32&e;
if(!s&&!Me(t))throw new Ar;u&&!n.length&&(e&=-17,u=n=!1),c&&!r.length&&(e&=-33,c=r=!1);
var f=t&&t.__bindData__;if(f&&f!==!0)return f=p(f),f[2]&&(f[2]=p(f[2])),f[3]&&(f[3]=p(f[3])),!a||1&f[1]||(f[4]=i),!a&&1&f[1]&&(e|=8),!l||4&f[1]||(f[5]=o),u&&Ur.apply(f[2]||(f[2]=[]),n),c&&Vr.apply(f[3]||(f[3]=[]),r),f[1]|=e,pe.apply(null,f);
var d=1==e||17===e?w:re;return d([t,e,n,r,i,o])}function de(){Y.shadowedProps=M,Y.array=Y.bottom=Y.loop=Y.top="",Y.init="iterable",Y.useHas=!0;
for(var t,e=0;t=arguments[e];e++)for(var n in t)Y[n]=t[n];var r=Y.args;Y.firstArg=/^[^,]+/.exec(r)[0];
var i=jr("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+r+") {\n"+ui(Y)+"\n}");
return i(ne,B,Dr,zr,y,be,fi,Be,Y.keys,Pr,K,si,Q,Lr,Fr)}function he(t){return mi[t]
}function ge(){var e=(e=g.indexOf)===jn?t:e;return e}function ve(t){return"function"==typeof t&&Hr.test(t)
}function me(t){var e,n;return!t||Fr.call(t)!=U||(e=t.constructor,Me(e)&&!(e instanceof e))||!li.argsClass&&be(t)||!li.nodeClass&&u(t)?!1:li.ownLast?(ki(t,function(t,e,r){return n=zr.call(r,e),!1
}),n!==!1):(ki(t,function(t,e){n=e}),"undefined"==typeof n||zr.call(t,n))}function ye(t){return yi[t]
}function be(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Fr.call(t)==H||!1
}function xe(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n=e,e=!1),Z(t,e,"function"==typeof n&&ne(n,r,1))
}function we(t,e,n){return Z(t,!0,"function"==typeof e&&ne(e,n,1))}function Ce(t,e){var n=ee(t);
return e?Ci(n,e):n}function Te(t,e,n){var r;return e=g.createCallback(e,n,3),ji(t,function(t,n,i){return e(t,n,i)?(r=n,!1):void 0
}),r}function ke(t,e,n){var r;return e=g.createCallback(e,n,3),Ee(t,function(t,n,i){return e(t,n,i)?(r=n,!1):void 0
}),r}function je(t,e,n){var r=[];ki(t,function(t,e){r.push(e,t)});var i=r.length;
for(e=ne(e,n,3);i--&&e(r[i--],r[i],t)!==!1;);return t}function Ee(t,e,n){var r=di(t),i=r.length;
for(e=ne(e,n,3);i--;){var o=r[i];if(e(t[o],o,t)===!1)break}return t}function _e(t){var e=[];
return ki(t,function(t,n){Me(t)&&e.push(n)}),e.sort()}function Se(t,e){return t?zr.call(t,e):!1
}function Ne(t){for(var e=-1,n=di(t),r=n.length,i={};++e<r;){var o=n[e];i[t[o]]=o
}return i}function Oe(t){return t===!0||t===!1||t&&"object"==typeof t&&Fr.call(t)==I||!1
}function Ae(t){return t&&"object"==typeof t&&Fr.call(t)==R||!1}function $e(t){return t&&1===t.nodeType||!1
}function De(t){var e=!0;if(!t)return e;var n=Fr.call(t),r=t.length;return n==q||n==Q||(li.argsClass?n==H:be(t))||n==U&&"number"==typeof r&&Me(t.splice)?!r:(ji(t,function(){return e=!1
}),e)}function Pe(t,e,n,r){return se(t,e,"function"==typeof n&&ne(n,r,2))}function Le(t){return Zr(t)&&!ti(parseFloat(t))
}function Me(t){return"function"==typeof t}function Fe(t){return!(!t||!K[typeof t])
}function He(t){return Ie(t)&&t!=+t}function qe(t){return null===t}function Ie(t){return"number"==typeof t||t&&"object"==typeof t&&Fr.call(t)==z||!1
}function Re(t){return t&&K[typeof t]&&Fr.call(t)==X||!1}function Be(t){return"string"==typeof t||t&&"object"==typeof t&&Fr.call(t)==Q||!1
}function We(t){return"undefined"==typeof t}function ze(t,e,n){var r={};return e=g.createCallback(e,n,3),ji(t,function(t,n,i){r[n]=e(t,n,i)
}),r}function Ue(t){var e=arguments,n=2;if(!Fe(t))return t;if("number"!=typeof e[2]&&(n=e.length),n>3&&"function"==typeof e[n-2])var r=ne(e[--n-1],e[n--],2);
else n>2&&"function"==typeof e[n-1]&&(r=e[--n]);for(var i=p(arguments,1,n),o=-1,a=s(),l=s();++o<n;)le(t,i[o],r,a,l);
return c(a),c(l),t}function Xe(t,e,n){var r={};if("function"!=typeof e){var i=[];
ki(t,function(t,e){i.push(e)}),i=ie(i,ae(arguments,!0,!1,1));for(var o=-1,a=i.length;++o<a;){var s=i[o];
r[s]=t[s]}}else e=g.createCallback(e,n,3),ki(t,function(t,n,i){e(t,n,i)||(r[n]=t)
});return r}function Qe(t){for(var e=-1,n=di(t),r=n.length,i=wr(r);++e<r;){var o=n[e];
i[e]=[o,t[o]]}return i}function Je(t,e,n){var r={};if("function"!=typeof e)for(var i=-1,o=ae(arguments,!0,!1,1),a=Fe(t)?o.length:0;++i<a;){var s=o[i];
s in t&&(r[s]=t[s])}else e=g.createCallback(e,n,3),ki(t,function(t,n,i){e(t,n,i)&&(r[n]=t)
});return r}function Ve(t,e,n,r){var i=fi(t);if(null==n)if(i)n=[];else{var o=t&&t.constructor,a=o&&o.prototype;
n=ee(a)}return e&&(e=g.createCallback(e,r,4),(i?wi:ji)(t,function(t,r,i){return e(n,t,r,i)
})),n}function Ge(t){for(var e=-1,n=di(t),r=n.length,i=wr(r);++e<r;)i[e]=t[n[e]];
return i}function Ye(t){var e=arguments,n=-1,r=ae(e,!0,!1,1),i=e[2]&&e[2][e[1]]===t?1:r.length,o=wr(i);
for(li.unindexedChars&&Be(t)&&(t=t.split(""));++n<i;)o[n]=t[r[n]];return o}function Ke(t,e,n){var r=-1,i=ge(),o=t?t.length:0,a=!1;
return n=(0>n?ni(0,o+n):n)||0,fi(t)?a=i(t,e,n)>-1:"number"==typeof o?a=(Be(t)?t.indexOf(e,n):i(t,e,n))>-1:wi(t,function(t){return++r>=n?!(a=t===e):void 0
}),a}function Ze(t,e,n){var r=!0;if(e=g.createCallback(e,n,3),fi(t))for(var i=-1,o=t.length;++i<o&&(r=!!e(t[i],i,t)););else wi(t,function(t,n,i){return r=!!e(t,n,i)
});return r}function tn(t,e,n){var r=[];if(e=g.createCallback(e,n,3),fi(t))for(var i=-1,o=t.length;++i<o;){var a=t[i];
e(a,i,t)&&r.push(a)}else wi(t,function(t,n,i){e(t,n,i)&&r.push(t)});return r}function en(t,e,n){if(e=g.createCallback(e,n,3),!fi(t)){var r;
return wi(t,function(t,n,i){return e(t,n,i)?(r=t,!1):void 0}),r}for(var i=-1,o=t.length;++i<o;){var a=t[i];
if(e(a,i,t))return a}}function nn(t,e,n){var r;return e=g.createCallback(e,n,3),on(t,function(t,n,i){return e(t,n,i)?(r=t,!1):void 0
}),r}function rn(t,e,n){if(e&&"undefined"==typeof n&&fi(t))for(var r=-1,i=t.length;++r<i&&e(t[r],r,t)!==!1;);else wi(t,e,n);
return t}function on(t,e,n){var r=t,i=t?t.length:0;if(e=e&&"undefined"==typeof n?e:ne(e,n,3),fi(t))for(;i--&&e(t[i],i,t)!==!1;);else{if("number"!=typeof i){var o=di(t);
i=o.length}else li.unindexedChars&&Be(t)&&(r=t.split(""));wi(t,function(t,n,a){return n=o?o[--i]:--i,e(r[n],n,a)
})}return t}function an(t,e){var n=p(arguments,2),r=-1,i="function"==typeof e,o=t?t.length:0,a=wr("number"==typeof o?o:0);
return rn(t,function(t){a[++r]=(i?e:t[e]).apply(t,n)}),a}function sn(t,e,n){var r=-1,i=t?t.length:0,o=wr("number"==typeof i?i:0);
if(e=g.createCallback(e,n,3),fi(t))for(;++r<i;)o[r]=e(t[r],r,t);else wi(t,function(t,n,i){o[++r]=e(t,n,i)
});return o}function ln(t,e,n){var i=-1/0,o=i;if("function"!=typeof e&&n&&n[e]===t&&(e=null),null==e&&fi(t))for(var a=-1,s=t.length;++a<s;){var l=t[a];
l>o&&(o=l)}else e=null==e&&Be(t)?r:g.createCallback(e,n,3),wi(t,function(t,n,r){var a=e(t,n,r);
a>i&&(i=a,o=t)});return o}function un(t,e,n){var i=1/0,o=i;if("function"!=typeof e&&n&&n[e]===t&&(e=null),null==e&&fi(t))for(var a=-1,s=t.length;++a<s;){var l=t[a];
o>l&&(o=l)}else e=null==e&&Be(t)?r:g.createCallback(e,n,3),wi(t,function(t,n,r){var a=e(t,n,r);
i>a&&(i=a,o=t)});return o}function cn(t,e,n,r){var i=arguments.length<3;if(e=g.createCallback(e,r,4),fi(t)){var o=-1,a=t.length;
for(i&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t)}else wi(t,function(t,r,o){n=i?(i=!1,t):e(n,t,r,o)
});return n}function fn(t,e,n,r){var i=arguments.length<3;return e=g.createCallback(e,r,4),on(t,function(t,r,o){n=i?(i=!1,t):e(n,t,r,o)
}),n}function pn(t,e,n){return e=g.createCallback(e,n,3),tn(t,function(t,n,r){return!e(t,n,r)
})}function dn(t,e,n){if(t&&"number"!=typeof t.length?t=Ge(t):li.unindexedChars&&Be(t)&&(t=t.split("")),null==e||n)return t?t[ue(0,t.length-1)]:h;
var r=hn(t);return r.length=ri(ni(0,e),r.length),r}function hn(t){var e=-1,n=t?t.length:0,r=wr("number"==typeof n?n:0);
return rn(t,function(t){var n=ue(0,++e);r[e]=r[n],r[n]=t}),r}function gn(t){var e=t?t.length:0;
return"number"==typeof e?e:di(t).length}function vn(t,e,n){var r;if(e=g.createCallback(e,n,3),fi(t))for(var i=-1,o=t.length;++i<o&&!(r=e(t[i],i,t)););else wi(t,function(t,n,i){return!(r=e(t,n,i))
});return!!r}function mn(t,e,n){var r=-1,o=fi(e),a=t?t.length:0,u=wr("number"==typeof a?a:0);
for(o||(e=g.createCallback(e,n,3)),rn(t,function(t,n,i){var a=u[++r]=l();o?a.criteria=sn(e,function(e){return t[e]
}):(a.criteria=s())[0]=e(t,n,i),a.index=r,a.value=t}),a=u.length,u.sort(i);a--;){var p=u[a];
u[a]=p.value,o||c(p.criteria),f(p)}return u}function yn(t){return t&&"number"==typeof t.length?li.unindexedChars&&Be(t)?t.split(""):p(t):Ge(t)
}function bn(t){for(var e=-1,n=t?t.length:0,r=[];++e<n;){var i=t[e];i&&r.push(i)}return r
}function xn(t){return ie(t,ae(arguments,!0,!0,1))}function wn(t,e,n){var r=-1,i=t?t.length:0;
for(e=g.createCallback(e,n,3);++r<i;)if(e(t[r],r,t))return r;return-1}function Cn(t,e,n){var r=t?t.length:0;
for(e=g.createCallback(e,n,3);r--;)if(e(t[r],r,t))return r;return-1}function Tn(t,e,n){var r=0,i=t?t.length:0;
if("number"!=typeof e&&null!=e){var o=-1;for(e=g.createCallback(e,n,3);++o<i&&e(t[o],o,t);)r++
}else if(r=e,null==r||n)return t?t[0]:h;return p(t,0,ri(ni(0,r),i))}function kn(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n="function"!=typeof e&&r&&r[e]===t?null:e,e=!1),null!=n&&(t=sn(t,n,r)),ae(t,e)
}function jn(e,n,r){if("number"==typeof r){var i=e?e.length:0;r=0>r?ni(0,i+r):r||0
}else if(r){var o=Pn(e,n);return e[o]===n?o:-1}return t(e,n,r)}function En(t,e,n){var r=0,i=t?t.length:0;
if("number"!=typeof e&&null!=e){var o=i;for(e=g.createCallback(e,n,3);o--&&e(t[o],o,t);)r++
}else r=null==e||n?1:e||r;return p(t,0,ri(ni(0,i-r),i))}function _n(){for(var n=[],r=-1,i=arguments.length,a=s(),l=ge(),u=l===t,p=s();++r<i;){var d=arguments[r];
(fi(d)||be(d))&&(n.push(d),a.push(u&&d.length>=x&&o(r?n[r]:p)))}var h=n[0],g=-1,v=h?h.length:0,m=[];
t:for(;++g<v;){var y=a[0];if(d=h[g],(y?e(y,d):l(p,d))<0){for(r=i,(y||p).push(d);--r;)if(y=a[r],(y?e(y,d):l(n[r],d))<0)continue t;
m.push(d)}}for(;i--;)y=a[i],y&&f(y);return c(a),c(p),m}function Sn(t,e,n){var r=0,i=t?t.length:0;
if("number"!=typeof e&&null!=e){var o=i;for(e=g.createCallback(e,n,3);o--&&e(t[o],o,t);)r++
}else if(r=e,null==r||n)return t?t[i-1]:h;return p(t,ni(0,i-r))}function Nn(t,e,n){var r=t?t.length:0;
for("number"==typeof n&&(r=(0>n?ni(0,r+n):ri(n,r-1))+1);r--;)if(t[r]===e)return r;
return-1}function On(t){for(var e=arguments,n=0,r=e.length,i=t?t.length:0;++n<r;)for(var o=-1,a=e[n];++o<i;)t[o]===a&&(Jr.call(t,o--,1),i--);
return t}function An(t,e,n){t=+t||0,n="number"==typeof n?n:+n||1,null==e&&(e=t,t=0);
for(var r=-1,i=ni(0,qr((e-t)/(n||1))),o=wr(i);++r<i;)o[r]=t,t+=n;return o}function $n(t,e,n){var r=-1,i=t?t.length:0,o=[];
for(e=g.createCallback(e,n,3);++r<i;){var a=t[r];e(a,r,t)&&(o.push(a),Jr.call(t,r--,1),i--)
}return o}function Dn(t,e,n){if("number"!=typeof e&&null!=e){var r=0,i=-1,o=t?t.length:0;
for(e=g.createCallback(e,n,3);++i<o&&e(t[i],i,t);)r++}else r=null==e||n?1:ni(0,e);
return p(t,r)}function Pn(t,e,n,r){var i=0,o=t?t.length:i;for(n=n?g.createCallback(n,r,1):or,e=n(e);o>i;){var a=i+o>>>1;
n(t[a])<e?i=a+1:o=a}return i}function Ln(){return ce(ae(arguments,!0,!0))}function Mn(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n="function"!=typeof e&&r&&r[e]===t?null:e,e=!1),null!=n&&(n=g.createCallback(n,r,3)),ce(t,e,n)
}function Fn(t){return ie(t,p(arguments,1))}function Hn(){for(var t=-1,e=arguments.length;++t<e;){var n=arguments[t];
if(fi(n)||be(n))var r=r?ce(ie(r,n).concat(ie(n,r))):n}return r||[]}function qn(){for(var t=arguments.length>1?arguments:arguments[0],e=-1,n=t?ln(Oi(t,"length")):0,r=wr(0>n?0:n);++e<n;)r[e]=Oi(t,e);
return r}function In(t,e){var n=-1,r=t?t.length:0,i={};for(e||!r||fi(t[0])||(e=[]);++n<r;){var o=t[n];
e?i[o]=e[n]:o&&(i[o[0]]=o[1])}return i}function Rn(t,e){if(!Me(e))throw new Ar;return function(){return--t<1?e.apply(this,arguments):void 0
}}function Bn(t,e){return arguments.length>2?pe(t,17,p(arguments,2),null,e):pe(t,1,null,null,e)
}function Wn(t){for(var e=arguments.length>1?ae(arguments,!0,!1,1):_e(t),n=-1,r=e.length;++n<r;){var i=e[n];
t[i]=pe(t[i],1,null,null,t)}return t}function zn(t,e){return arguments.length>2?pe(e,19,p(arguments,2),null,t):pe(e,3,null,null,t)
}function Un(){for(var t=arguments,e=t.length;e--;)if(!Me(t[e]))throw new Ar;return function(){for(var e=arguments,n=t.length;n--;)e=[t[n].apply(this,e)];
return e[0]}}function Xn(t,e){return e="number"==typeof e?e:+e||t.length,pe(t,4,null,null,null,e)
}function Qn(t,e,n){var r,i,o,a,s,l,u,c=0,f=!1,p=!0;if(!Me(t))throw new Ar;if(e=ni(0,e)||0,n===!0){var d=!0;
p=!1}else Fe(n)&&(d=n.leading,f="maxWait"in n&&(ni(e,n.maxWait)||0),p="trailing"in n?n.trailing:p);
var g=function(){var n=e-($i()-a);if(0>=n){i&&Ir(i);var f=u;i=l=u=h,f&&(c=$i(),o=t.apply(s,r),l||i||(r=s=null))
}else l=Qr(g,n)},v=function(){l&&Ir(l),i=l=u=h,(p||f!==e)&&(c=$i(),o=t.apply(s,r),l||i||(r=s=null))
};return function(){if(r=arguments,a=$i(),s=this,u=p&&(l||!d),f===!1)var n=d&&!l;
else{i||d||(c=a);var h=f-(a-c),m=0>=h;m?(i&&(i=Ir(i)),c=a,o=t.apply(s,r)):i||(i=Qr(v,h))
}return m&&l?l=Ir(l):l||e===f||(l=Qr(g,e)),n&&(m=!0,o=t.apply(s,r)),!m||l||i||(r=s=null),o
}}function Jn(t){if(!Me(t))throw new Ar;var e=p(arguments,1);return Qr(function(){t.apply(h,e)
},1)}function Vn(t,e){if(!Me(t))throw new Ar;var n=p(arguments,2);return Qr(function(){t.apply(h,n)
},e)}function Gn(t,e){if(!Me(t))throw new Ar;var n=function(){var r=n.cache,i=e?e.apply(this,arguments):b+arguments[0];
return zr.call(r,i)?r[i]:r[i]=t.apply(this,arguments)};return n.cache={},n}function Yn(t){var e,n;
if(!Me(t))throw new Ar;return function(){return e?n:(e=!0,n=t.apply(this,arguments),t=null,n)
}}function Kn(t){return pe(t,16,p(arguments,1))}function Zn(t){return pe(t,32,null,p(arguments,1))
}function tr(t,e,n){var r=!0,i=!0;if(!Me(t))throw new Ar;return n===!1?r=!1:Fe(n)&&(r="leading"in n?n.leading:r,i="trailing"in n?n.trailing:i),V.leading=r,V.maxWait=e,V.trailing=i,Qn(t,e,V)
}function er(t,e){return pe(e,16,[t])}function nr(t){return function(){return t}}function rr(t,e,n){var r=typeof t;
if(null==t||"function"==r)return ne(t,e,n);if("object"!=r)return ur(t);var i=di(t),o=i[0],a=t[o];
return 1!=i.length||a!==a||Fe(a)?function(e){for(var n=i.length,r=!1;n--&&(r=se(e[i[n]],t[i[n]],null,!0)););return r
}:function(t){var e=t[o];return a===e&&(0!==a||1/a==1/e)}}function ir(t){return null==t?"":Or(t).replace(xi,he)
}function or(t){return t}function ar(t,e,n){var r=!0,i=e&&_e(e);e&&(n||i.length)||(null==n&&(n=e),o=v,e=t,t=g,i=_e(e)),n===!1?r=!1:Fe(n)&&"chain"in n&&(r=n.chain);
var o=t,a=Me(o);rn(i,function(n){var i=t[n]=e[n];a&&(o.prototype[n]=function(){var e=this.__chain__,n=this.__wrapped__,a=[n];
Ur.apply(a,arguments);var s=i.apply(t,a);if(r||e){if(n===s&&Fe(s))return this;s=new o(s),s.__chain__=e
}return s})})}function sr(){return n._=Mr,this}function lr(){}function ur(t){return function(e){return e[t]
}}function cr(t,e,n){var r=null==t,i=null==e;if(null==n&&("boolean"==typeof t&&i?(n=t,t=1):i||"boolean"!=typeof e||(n=e,i=!0)),r&&i&&(e=1),t=+t||0,i?(e=t,t=0):e=+e||0,n||t%1||e%1){var o=oi();
return ri(t+o*(e-t+parseFloat("1e-"+((o+"").length-1))),e)}return ue(t,e)}function fr(t,e){if(t){var n=t[e];
return Me(n)?t[e]():n}}function pr(t,e,n){var r=g.templateSettings;t=Or(t||""),n=Ti({},n,r);
var i,o=Ti({},n.imports,r.imports),s=di(o),l=Ge(o),u=0,c=n.interpolate||$,f="__p += '",p=Nr((n.escape||$).source+"|"+c.source+"|"+(c===O?_:$).source+"|"+(n.evaluate||$).source+"|$","g");
t.replace(p,function(e,n,r,o,s,l){return r||(r=o),f+=t.slice(u,l).replace(P,a),n&&(f+="' +\n__e("+n+") +\n'"),s&&(i=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),u=l+e.length,e
}),f+="';\n";var d=n.variable,v=d;v||(d="obj",f="with ("+d+") {\n"+f+"\n}\n"),f=(i?f.replace(T,""):f).replace(j,"$1").replace(E,"$1;"),f="function("+d+") {\n"+(v?"":d+" || ("+d+" = {});\n")+"var __t, __p = '', __e = _.escape"+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";
var m="\n/*\n//# sourceURL="+(n.sourceURL||"/lodash/template/source["+F++ +"]")+"\n*/";
try{var y=jr(s,"return "+f+m).apply(h,l)}catch(b){throw b.source=f,b}return e?y(e):(y.source=f,y)
}function dr(t,e,n){t=(t=+t)>-1?t:0;var r=-1,i=wr(t);for(e=ne(e,n,1);++r<t;)i[r]=e(r);
return i}function hr(t){return null==t?"":Or(t).replace(bi,ye)}function gr(t){var e=++m;
return Or(null==t?"":t)+e}function vr(t){return t=new v(t),t.__chain__=!0,t}function mr(t,e){return e(t),t
}function yr(){return this.__chain__=!0,this}function br(){return Or(this.__wrapped__)
}function xr(){return this.__wrapped__}n=n?oe.defaults(te.Object(),n,oe.pick(te,L)):te;
var wr=n.Array,Cr=n.Boolean,Tr=n.Date,kr=n.Error,jr=n.Function,Er=n.Math,_r=n.Number,Sr=n.Object,Nr=n.RegExp,Or=n.String,Ar=n.TypeError,$r=[],Dr=kr.prototype,Pr=Sr.prototype,Lr=Or.prototype,Mr=n._,Fr=Pr.toString,Hr=Nr("^"+Or(Fr).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),qr=Er.ceil,Ir=n.clearTimeout,Rr=Er.floor,Br=jr.prototype.toString,Wr=ve(Wr=Sr.getPrototypeOf)&&Wr,zr=Pr.hasOwnProperty,Ur=$r.push,Xr=Pr.propertyIsEnumerable,Qr=n.setTimeout,Jr=$r.splice,Vr=$r.unshift,Gr=function(){try{var t={},e=ve(e=Sr.defineProperty)&&e,n=e(t,t,t)&&e
}catch(r){}return n}(),Yr=ve(Yr=Sr.create)&&Yr,Kr=ve(Kr=wr.isArray)&&Kr,Zr=n.isFinite,ti=n.isNaN,ei=ve(ei=Sr.keys)&&ei,ni=Er.max,ri=Er.min,ii=n.parseInt,oi=Er.random,ai={};
ai[q]=wr,ai[I]=Cr,ai[R]=Tr,ai[W]=jr,ai[U]=Sr,ai[z]=_r,ai[X]=Nr,ai[Q]=Or;var si={};
si[q]=si[R]=si[z]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},si[I]=si[Q]={constructor:!0,toString:!0,valueOf:!0},si[B]=si[W]=si[X]={constructor:!0,toString:!0},si[U]={constructor:!0},function(){for(var t=M.length;t--;){var e=M[t];
for(var n in si)zr.call(si,n)&&!zr.call(si[n],e)&&(si[n][e]=!1)}}(),v.prototype=g.prototype;
var li=g.support={};!function(){var t=function(){this.x=1},e={0:1,length:1},r=[];
t.prototype={valueOf:1,y:1};for(var i in new t)r.push(i);for(i in arguments);li.argsClass=Fr.call(arguments)==H,li.argsObject=arguments.constructor==Sr&&!(arguments instanceof wr),li.enumErrorProps=Xr.call(Dr,"message")||Xr.call(Dr,"name"),li.enumPrototypes=Xr.call(t,"prototype"),li.funcDecomp=!ve(n.WinRTError)&&D.test(d),li.funcNames="string"==typeof jr.name,li.nonEnumArgs=0!=i,li.nonEnumShadows=!/valueOf/.test(r),li.ownLast="x"!=r[0],li.spliceObjects=($r.splice.call(e,0,1),!e[0]),li.unindexedChars="x"[0]+Sr("x")[0]!="xx";
try{li.nodeClass=!(Fr.call(document)==U&&!({toString:0}+""))}catch(o){li.nodeClass=!0
}}(1),g.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:O,variable:"",imports:{_:g}};
var ui=function(t){var e="var index, iterable = "+t.firstArg+", result = "+t.init+";\nif (!iterable) return result;\n"+t.top+";";
t.array?(e+="\nvar length = iterable.length; index = -1;\nif ("+t.array+") {  ",li.unindexedChars&&(e+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),e+="\n  while (++index < length) {\n    "+t.loop+";\n  }\n}\nelse {  "):li.nonEnumArgs&&(e+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+t.loop+";\n    }\n  } else {  "),li.enumPrototypes&&(e+="\n  var skipProto = typeof iterable == 'function';\n  "),li.enumErrorProps&&(e+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
var n=[];if(li.enumPrototypes&&n.push('!(skipProto && index == "prototype")'),li.enumErrorProps&&n.push('!(skipErrorProps && (index == "message" || index == "name"))'),t.useHas&&t.keys)e+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",n.length&&(e+="    if ("+n.join(" && ")+") {\n  "),e+=t.loop+";    ",n.length&&(e+="\n    }"),e+="\n  }  ";
else if(e+="\n  for (index in iterable) {\n",t.useHas&&n.push("hasOwnProperty.call(iterable, index)"),n.length&&(e+="    if ("+n.join(" && ")+") {\n  "),e+=t.loop+";    ",n.length&&(e+="\n    }"),e+="\n  }    ",li.nonEnumShadows){for(e+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ",k=0;7>k;k++)e+="\n    index = '"+t.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",t.useHas||(e+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),e+=") {\n      "+t.loop+";\n    }      ";
e+="\n  }    "}return(t.array||li.nonEnumArgs)&&(e+="\n}"),e+=t.bottom+";\nreturn result"
};Yr||(ee=function(){function t(){}return function(e){if(Fe(e)){t.prototype=e;var r=new t;
t.prototype=null}return r||n.Object()}}());var ci=Gr?function(t,e){G.value=e,Gr(t,"__bindData__",G)
}:lr;li.argsClass||(be=function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&zr.call(t,"callee")&&!Xr.call(t,"callee")||!1
});var fi=Kr||function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Fr.call(t)==q||!1
},pi=de({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),di=ei?function(t){return Fe(t)?li.enumPrototypes&&"function"==typeof t||li.nonEnumArgs&&t.length&&be(t)?pi(t):ei(t):[]
}:pi,hi={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:di,loop:"if (callback(iterable[index], index, collection) === false) return result"},gi={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys:di,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},vi={top:"if (!objectTypes[typeof iterable]) return result;\n"+hi.top,array:!1},mi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yi=Ne(mi),bi=Nr("("+di(yi).join("|")+")","g"),xi=Nr("["+di(mi).join("")+"]","g"),wi=de(hi),Ci=de(gi,{top:gi.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),Ti=de(gi),ki=de(hi,vi,{useHas:!1}),ji=de(hi,vi);
Me(/x/)&&(Me=function(t){return"function"==typeof t&&Fr.call(t)==W});var Ei=Wr?function(t){if(!t||Fr.call(t)!=U||!li.argsClass&&be(t))return!1;
var e=t.valueOf,n=ve(e)&&(n=Wr(e))&&Wr(n);return n?t==n||Wr(t)==n:me(t)}:me,_i=fe(function(t,e,n){zr.call(t,n)?t[n]++:t[n]=1
}),Si=fe(function(t,e,n){(zr.call(t,n)?t[n]:t[n]=[]).push(e)}),Ni=fe(function(t,e,n){t[n]=e
}),Oi=sn,Ai=tn,$i=ve($i=Tr.now)&&$i||function(){return(new Tr).getTime()},Di=8==ii(C+"08")?ii:function(t,e){return ii(Be(t)?t.replace(A,""):t,e||0)
};return g.after=Rn,g.assign=Ci,g.at=Ye,g.bind=Bn,g.bindAll=Wn,g.bindKey=zn,g.chain=vr,g.compact=bn,g.compose=Un,g.constant=nr,g.countBy=_i,g.create=Ce,g.createCallback=rr,g.curry=Xn,g.debounce=Qn,g.defaults=Ti,g.defer=Jn,g.delay=Vn,g.difference=xn,g.filter=tn,g.flatten=kn,g.forEach=rn,g.forEachRight=on,g.forIn=ki,g.forInRight=je,g.forOwn=ji,g.forOwnRight=Ee,g.functions=_e,g.groupBy=Si,g.indexBy=Ni,g.initial=En,g.intersection=_n,g.invert=Ne,g.invoke=an,g.keys=di,g.map=sn,g.mapValues=ze,g.max=ln,g.memoize=Gn,g.merge=Ue,g.min=un,g.omit=Xe,g.once=Yn,g.pairs=Qe,g.partial=Kn,g.partialRight=Zn,g.pick=Je,g.pluck=Oi,g.property=ur,g.pull=On,g.range=An,g.reject=pn,g.remove=$n,g.rest=Dn,g.shuffle=hn,g.sortBy=mn,g.tap=mr,g.throttle=tr,g.times=dr,g.toArray=yn,g.transform=Ve,g.union=Ln,g.uniq=Mn,g.values=Ge,g.where=Ai,g.without=Fn,g.wrap=er,g.xor=Hn,g.zip=qn,g.zipObject=In,g.collect=sn,g.drop=Dn,g.each=rn,g.eachRight=on,g.extend=Ci,g.methods=_e,g.object=In,g.select=tn,g.tail=Dn,g.unique=Mn,g.unzip=qn,ar(g),g.clone=xe,g.cloneDeep=we,g.contains=Ke,g.escape=ir,g.every=Ze,g.find=en,g.findIndex=wn,g.findKey=Te,g.findLast=nn,g.findLastIndex=Cn,g.findLastKey=ke,g.has=Se,g.identity=or,g.indexOf=jn,g.isArguments=be,g.isArray=fi,g.isBoolean=Oe,g.isDate=Ae,g.isElement=$e,g.isEmpty=De,g.isEqual=Pe,g.isFinite=Le,g.isFunction=Me,g.isNaN=He,g.isNull=qe,g.isNumber=Ie,g.isObject=Fe,g.isPlainObject=Ei,g.isRegExp=Re,g.isString=Be,g.isUndefined=We,g.lastIndexOf=Nn,g.mixin=ar,g.noConflict=sr,g.noop=lr,g.now=$i,g.parseInt=Di,g.random=cr,g.reduce=cn,g.reduceRight=fn,g.result=fr,g.runInContext=d,g.size=gn,g.some=vn,g.sortedIndex=Pn,g.template=pr,g.unescape=hr,g.uniqueId=gr,g.all=Ze,g.any=vn,g.detect=en,g.findWhere=en,g.foldl=cn,g.foldr=fn,g.include=Ke,g.inject=cn,ar(function(){var t={};
return ji(g,function(e,n){g.prototype[n]||(t[n]=e)}),t}(),!1),g.first=Tn,g.last=Sn,g.sample=dn,g.take=Tn,g.head=Tn,ji(g,function(t,e){var n="sample"!==e;
g.prototype[e]||(g.prototype[e]=function(e,r){var i=this.__chain__,o=t(this.__wrapped__,e,r);
return i||null!=e&&(!r||n&&"function"==typeof e)?new v(o,i):o})}),g.VERSION="2.4.1",g.prototype.chain=yr,g.prototype.toString=br,g.prototype.value=xr,g.prototype.valueOf=xr,wi(["join","pop","shift"],function(t){var e=$r[t];
g.prototype[t]=function(){var t=this.__chain__,n=e.apply(this.__wrapped__,arguments);
return t?new v(n,t):n}}),wi(["push","reverse","sort","unshift"],function(t){var e=$r[t];
g.prototype[t]=function(){return e.apply(this.__wrapped__,arguments),this}}),wi(["concat","slice","splice"],function(t){var e=$r[t];
g.prototype[t]=function(){return new v(e.apply(this.__wrapped__,arguments),this.__chain__)
}}),li.spliceObjects||wi(["pop","shift","splice"],function(t){var e=$r[t],n="splice"==t;
g.prototype[t]=function(){var t=this.__chain__,r=this.__wrapped__,i=e.apply(r,arguments);
return 0===r.length&&delete r[0],t||n?new v(i,t):i}}),g}var h,g=[],v=[],m=0,y={},b=+new Date+"",x=75,w=40,C=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",T=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,E=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,S=/\w*$/,N=/^\s*function[ \n\r\t]+\w/,O=/<%=([\s\S]+?)%>/g,A=RegExp("^["+C+"]*0+(?=.$)"),$=/($^)/,D=/\bthis\b/,P=/['\n\r\t\u2028\u2029\\]/g,L=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],M=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],F=0,H="[object Arguments]",q="[object Array]",I="[object Boolean]",R="[object Date]",B="[object Error]",W="[object Function]",z="[object Number]",U="[object Object]",X="[object RegExp]",Q="[object String]",J={};
J[W]=!1,J[H]=J[q]=J[I]=J[R]=J[z]=J[U]=J[X]=J[Q]=!0;var V={leading:!1,maxWait:0,trailing:!1},G={configurable:!1,enumerable:!1,value:null,writable:!1},Y={args:"",array:null,bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},K={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},Z={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},te=K[typeof window]&&window||this,ee=K[typeof exports]&&exports&&!exports.nodeType&&exports,ne=K[typeof module]&&module&&!module.nodeType&&module,re=ne&&ne.exports===ee&&ee,ie=K[typeof global]&&global;
!ie||ie.global!==ie&&ie.window!==ie||(te=ie);var oe=d();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(te._=oe,define(function(){return oe
})):ee&&ne?re?(ne.exports=oe)._=oe:ee._=oe:te._=oe}.call(this);var MestestsPasser,__bind=function(t,e){return function(){return t.apply(e,arguments)
}};MestestsPasser=function(){function t(){this.retrieveUserAnswer=__bind(this.retrieveUserAnswer,this),this.solutionsReceived=__bind(this.solutionsReceived,this),this.handlerSubmitQuestionnaire=__bind(this.handlerSubmitQuestionnaire,this),this.handleUserAnswer=__bind(this.handleUserAnswer,this),this.handlerClickOnNavButton=__bind(this.handlerClickOnNavButton,this),this.handlerClickOnLi=__bind(this.handlerClickOnLi,this),this.Qaire=window.jsp.qaire,this.aAlineas=window.jsp.aAlineas,this.aContexts=window.jsp.aContexts,this.aQaireAlineas=window.jsp.aQaireAlineas,_.forEach(this.aQaireAlineas,function(){return function(t){return null!=t.answer?t.answer:t.answer=0
}}(this))}return t.Qaire=null,t.prototype.go=function(){return this.renderLis(),$(".passer .qtabctn").on("click","li",this.handlerClickOnLi),$(".passer .navbuttons").on("click","button",this.handlerClickOnNavButton),$(".passer .qbodyctn").on("click","button.actionsubmit",this.handlerSubmitQuestionnaire),$(".passer .qtabctn li").first().trigger("click")
},t.prototype.renderLis=function(){var t,e;return e=$(".passer .qtabctn ul"),e.empty(),_.forEach(this.aQaireAlineas,function(){return function(t){var n,r,i,o,a,s,l;
return a=t.id,o=parseInt(t.order,10),s="result",i="",null!=t.solution&&(n=parseInt(t.answer,10),l=parseInt(t.solution,10),n===l?(s="result-right",i="<img src='public/img/green_64black.png' />"):(s="result-wrong",i="<img src='public/img/red_64black.png' />")),r="<li class='"+s+"' data-qairealineaid='"+a+"' data-num='"+o+"'>"+(o+1)+i+"</li>",e.append($(r))
}}(this)),t="<li data-num='#'>#</li>",e.append($(t))},t.prototype.handlerClickOnLi=function(t){var e,n,r,i,o,a,s,l,u,c,f,p,d;
return this.handleUserAnswer(),o=$(t.currentTarget),l=o.data("qairealineaid"),c=$(".passer .qbodyctn"),c.empty(),o.siblings().removeClass("selected"),o.addClass("selected"),$(".passer .navbuttons button").removeClass("disabled"),0===o.prev().length&&$(".passer .navbuttons button.actionprev").addClass("disabled"),0===o.next().length&&$(".passer .navbuttons button.actionnext").addClass("disabled"),null!=l?(s=this.aQaireAlineas[l],e=this.aAlineas[s.questionalinea_id],n=this.aContexts[e.questioncontext_id],a=o.data("num"),d=_.template($("#tplqContext").html().trim()),i=d({title:n.title,body:n.body}),c.append(i),d=_.template($("#tplqAlinea").html().trim()),i=d({body:e.body}),c.append(i),f=c.find(".alineaanswers"),d=_.template($("#tplqAlineaAnswer").html().trim()),p=parseInt(s.answer,10),u=s.solution,null!=u&&(u=parseInt(u,10)),r=1,_.forEach(JSON.parse(e.answers_json),function(t,e){var n,o;
return n="",p&r&&(n="checked"),o="",null!=u&&u&r&&(o="checked"),r<<=1,i=d({body:t,letter:String.fromCharCode(65+e),checked:n,solution:u,checkedSol:o}),f.append(i)
})):null===this.Qaire.score?(d=_.template($("#tplqRecapConfirm").html().trim()),i=d(this.Qaire),c.append(i)):(d=_.template($("#tplqResult").html().trim()),i=d(this.Qaire),c.append(i))
},t.prototype.handlerClickOnNavButton=function(t){var e,n;return e=$(t.currentTarget),n=$(".passer .qtabctn li.selected"),e.hasClass("actionnext")?n.next().trigger("click"):e.hasClass("actionprev")?n.prev().trigger("click"):void 0
},t.prototype.handleUserAnswer=function(){var t,e,n,r,i,o;return i=this.retrieveUserAnswer(),null!==i&&(r=i.qaireAlineaId,n=this.aQaireAlineas[r],e=parseInt(n.answer,10),t=i.val,e!==t)?(o=window.jsp.aUrls.thistst,$.ajax({url:o,method:"POST",data:{_method:"PUT",qaireAlineaId:r,answer:t}}).fail(function(){return function(){return alert("Erreur lors de l'enregistrement")
}}(this)).done(function(){return function(){return n.answer=t}}(this))):void 0},t.prototype.handlerSubmitQuestionnaire=function(){var t;
return t=window.jsp.aUrls.thistst,$.ajax({url:t,method:"POST",data:{_method:"POST",submit:"true"}}).fail(function(){return function(){return alert("Erreur lors de l'enregistrement")
}}(this)).done(function(t){return function(e,n,r){var i;return 200!==r.status||"application/json"!==r.getResponseHeader("content-type").substr(0,16)?void alert("Le serveur n'a pas pu enregistrer le questionnaire"):(i=JSON.parse(r.responseText),t.Qaire=i.qaire,t.aQaireAlineas=i.aQaireAlineas,t.solutionsReceived())
}}(this))},t.prototype.solutionsReceived=function(){return this.renderLis(),$(".qtabctn li[data-num=#]").trigger("click")
},t.prototype.retrieveUserAnswer=function(){var t,e,n,r,i,o;return r=$(".passer .qtabctn li.selected"),e=r.data("num"),i=r.data("qairealineaid"),null==i?null:(t=$(".passer .alineaanswers").find(".letter input.etu[type=checkbox]"),n=1,o=0,_.each(t,function(t){return $(t).prop("checked")&&(o+=n),n<<=1
}),{num:e,val:o,qaireAlineaId:i})},t}();var AdminStats;AdminStats=function(){function t(){this.poActive=!1
}return t.prototype.go=function(){var t=this;return $("div.bilan table").dataTable({bPaginate:!1,bFilter:!1,bInfo:!1,iDisplayLength:5}),$("div.bilan table").addClass("table table-striped table-bordered"),$("div.bilan table").on("click","tr",function(e){var n,r,i,o;
return i=$(e.currentTarget).find("td:nth-child(1)"),n=i.text(),o=window.jsp.urlAlinea,o=o.replace("[:id]",n),o=o.replace("[:type]","popover"),void 0===i.data("poloaded")?(t.poActive!==!1&&t.poActive.popover("hide"),i.data("poloaded","waiting"),t.poActive=i,$.ajax(o,{}).done(function(t){return i.data("poloaded","1"),i.popover({html:!0,content:t,trigger:"manual",container:".bilan"}).popover("show")
})):"1"!==i.data("poloaded")||(r=i.is(t.poActive),t.poActive!==!1&&(t.poActive.popover("hide"),t.poActive=!1),r)?void 0:(i.popover("show"),t.poActive=i)
})},t}();