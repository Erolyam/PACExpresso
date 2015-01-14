!function(a){"function"==typeof define?define(a):"function"==typeof YUI?YUI.add("es5",a):a()
}(function(){function a(){}function b(a){return a=+a,a!==a?a=0:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a))),a
}function c(a){var b=typeof a;return null===a||"undefined"===b||"boolean"===b||"number"===b||"string"===b
}function d(a){var b,d,e;if(c(a))return a;if(d=a.valueOf,"function"==typeof d&&(b=d.call(a),c(b)))return b;
if(e=a.toString,"function"==typeof e&&(b=e.call(a),c(b)))return b;throw new TypeError
}8!==parseInt("08")&&(parseInt=function(a){var b=/^0[xX]/;return function(c,d){return c=String(c).trim(),+d||(d=b.test(c)?16:10),a(c,d)
}}(parseInt)),Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;
if("function"!=typeof c)throw new TypeError("Function.prototype.bind called on incompatible "+c);
for(var d=m.call(arguments,1),e=function(){if(this instanceof i){var a=c.apply(this,d.concat(m.call(arguments)));
return Object(a)===a?a:this}return c.apply(b,d.concat(m.call(arguments)))},f=Math.max(0,c.length-d.length),g=[],h=0;f>h;h++)g.push("$"+h);
var i=Function("binder","return function("+g.join(",")+"){return binder.apply(this,arguments)}")(e);
return c.prototype&&(a.prototype=c.prototype,i.prototype=new a,a.prototype=null),i
});var e,f,g,h,i,j=Function.prototype.call,k=Array.prototype,l=Object.prototype,m=k.slice,n=j.bind(l.toString),o=j.bind(l.hasOwnProperty);
if((i=o(l,"__defineGetter__"))&&(e=j.bind(l.__defineGetter__),f=j.bind(l.__defineSetter__),g=j.bind(l.__lookupGetter__),h=j.bind(l.__lookupSetter__)),2!=[1,2].splice(0).length){var p=Array.prototype.splice,q=Array.prototype.push,r=Array.prototype.unshift;
Array.prototype.splice=function(){function a(a){for(var b=[];a--;)b.unshift(a);return b
}var b,c=[];return c.splice.bind(c,0,0).apply(null,a(20)),c.splice.bind(c,0,0).apply(null,a(26)),b=c.length,c.splice(5,0,"XXX"),b+1==c.length?!0:void 0
}()?function(a,b){return arguments.length?p.apply(this,[void 0===a?0:a,void 0===b?this.length-a:b].concat(m.call(arguments,2))):[]
}:function(a,b){var c,d=m.call(arguments,2),e=d.length;if(!arguments.length)return[];
if(void 0===a&&(a=0),void 0===b&&(b=this.length-a),e>0){if(0>=b){if(a==this.length)return q.apply(this,d),[];
if(0==a)return r.apply(this,d),[]}return c=m.call(this,a,a+b),d.push.apply(d,m.call(this,a+b,this.length)),d.unshift.apply(d,m.call(this,0,a)),d.unshift(0,this.length),p.apply(this,d),c
}return p.call(this,a,b)}}if(1!=[].unshift(0)){var r=Array.prototype.unshift;Array.prototype.unshift=function(){return r.apply(this,arguments),this.length
}}Array.isArray||(Array.isArray=function(a){return"[object Array]"==n(a)});var s=Object("a"),t="a"!=s[0]||!(0 in s),u=!0;
if(Array.prototype.forEach&&Array.prototype.forEach.call("foo",function(a,b,c){"object"!=typeof c&&(u=!1)
}),Array.prototype.forEach&&u||(Array.prototype.forEach=function(a){var b=I(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=arguments[1],e=-1,f=c.length>>>0;
if("[object Function]"!=n(a))throw new TypeError;for(;++e<f;)e in c&&a.call(d,c[e],e,b)
}),Array.prototype.map||(Array.prototype.map=function(a){var b=I(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0,e=Array(d),f=arguments[1];
if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var g=0;d>g;g++)g in c&&(e[g]=a.call(f,c[g],g,b));
return e}),Array.prototype.filter||(Array.prototype.filter=function(a){var b,c=I(this),d=t&&"[object String]"==n(this)?this.split(""):c,e=d.length>>>0,f=[],g=arguments[1];
if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var h=0;e>h;h++)h in d&&(b=d[h],a.call(g,b,h,c)&&f.push(b));
return f}),Array.prototype.every||(Array.prototype.every=function(a){var b=I(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];
if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&!a.call(e,c[f],f,b))return!1;
return!0}),Array.prototype.some||(Array.prototype.some=function(a){var b=I(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];
if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&a.call(e,c[f],f,b))return!0;
return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(a){var b=I(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0;
if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");if(!d&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");
var e,f=0;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f++];
break}if(++f>=d)throw new TypeError("reduce of empty array with no initial value")
}for(;d>f;f++)f in c&&(e=a.call(void 0,e,c[f],f,b));return e}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(a){var b=I(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0;
if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");if(!d&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");
var e,f=d-1;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f--];
break}if(--f<0)throw new TypeError("reduceRight of empty array with no initial value")
}if(0>f)return e;do f in this&&(e=a.call(void 0,e,c[f],f,b));while(f--);return e}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(a){var c=t&&"[object String]"==n(this)?this.split(""):I(this),d=c.length>>>0;
if(!d)return-1;var e=0;for(arguments.length>1&&(e=b(arguments[1])),e=e>=0?e:Math.max(0,d+e);d>e;e++)if(e in c&&c[e]===a)return e;
return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(a){var c=t&&"[object String]"==n(this)?this.split(""):I(this),d=c.length>>>0;
if(!d)return-1;var e=d-1;for(arguments.length>1&&(e=Math.min(e,b(arguments[1]))),e=e>=0?e:d-Math.abs(e);e>=0;e--)if(e in c&&a===c[e])return e;
return-1}),!Object.keys){var v=!0,w=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],x=w.length;
for(var y in{toString:null})v=!1;Object.keys=function J(a){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Object.keys called on a non-object");
var J=[];for(var b in a)o(a,b)&&J.push(b);if(v)for(var c=0,d=x;d>c;c++){var e=w[c];
o(a,e)&&J.push(e)}return J}}var z=-621987552e5,A="-000001";Date.prototype.toISOString&&-1!==new Date(z).toISOString().indexOf(A)||(Date.prototype.toISOString=function(){var a,b,c,d,e;
if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");
for(d=this.getUTCFullYear(),e=this.getUTCMonth(),d+=Math.floor(e/12),e=(e%12+12)%12,a=[e+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],d=(0>d?"-":d>9999?"+":"")+("00000"+Math.abs(d)).slice(d>=0&&9999>=d?-4:-6),b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);
return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"
});var B=!1;try{B=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(z).toJSON().indexOf(A)&&Date.prototype.toJSON.call({toISOString:function(){return!0
}})}catch(C){}B||(Date.prototype.toJSON=function(){var a,b=Object(this),c=d(b);if("number"==typeof c&&!isFinite(c))return null;
if(a=b.toISOString,"function"!=typeof a)throw new TypeError("toISOString property is not callable");
return a.call(b)}),Date=function(a){function b(c,d,e,f,g,h,i){var j=arguments.length;
if(this instanceof a){var k=1==j&&String(c)===c?new a(b.parse(c)):j>=7?new a(c,d,e,f,g,h,i):j>=6?new a(c,d,e,f,g,h):j>=5?new a(c,d,e,f,g):j>=4?new a(c,d,e,f):j>=3?new a(c,d,e):j>=2?new a(c,d):j>=1?new a(c):new a;
return k.constructor=b,k}return a.apply(this,arguments)}function c(a,b){var c=b>1?1:0;
return f[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)
}function d(b){return Number(new a(1970,0,1,0,0,0,b))}var e=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),f=[0,31,59,90,120,151,181,212,243,273,304,334,365];
for(var g in a)b[g]=a[g];return b.now=a.now,b.UTC=a.UTC,b.prototype=a.prototype,b.prototype.constructor=b,b.parse=function(b){var f=e.exec(b);
if(f){var g,h=Number(f[1]),i=Number(f[2]||1)-1,j=Number(f[3]||1)-1,k=Number(f[4]||0),l=Number(f[5]||0),m=Number(f[6]||0),n=Math.floor(1e3*Number(f[7]||0)),o=Boolean(f[4]&&!f[8]),p="-"===f[9]?1:-1,q=Number(f[10]||0),r=Number(f[11]||0);
return(l>0||m>0||n>0?24:25)>k&&60>l&&60>m&&1e3>n&&i>-1&&12>i&&24>q&&60>r&&j>-1&&j<c(h,i+1)-c(h,i)&&(g=60*(24*(c(h,i)+j)+k+q*p),g=1e3*(60*(g+l+r*p)+m)+n,o&&(g=d(g)),g>=-864e13&&864e13>=g)?g:0/0
}return a.parse.apply(this,arguments)},b}(Date),Date.now||(Date.now=function(){return(new Date).getTime()
}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function a(a,b){for(var c=-1;++c<g;)b+=a*h[c],h[c]=b%f,b=Math.floor(b/f)
}function b(a){for(var b=g,c=0;--b>=0;)c+=h[b],h[b]=Math.floor(c/a),c=c%a*f}function c(){for(var a=g,b="";--a>=0;)if(""!==b||0===a||0!==h[a]){var c=String(h[a]);
""===b?b=c:b+="0000000".slice(0,7-c.length)+c}return b}function d(a,b,c){return 0===b?c:b%2===1?d(a,b-1,c*a):d(a*a,b/2,c)
}function e(a){for(var b=0;a>=4096;)b+=12,a/=4096;for(;a>=2;)b+=1,a/=2;return b}var f,g,h;
f=1e7,g=6,h=[0,0,0,0,0,0],Number.prototype.toFixed=function(f){var g,h,i,j,k,l,m,n;
if(g=Number(f),g=g!==g?0:Math.floor(g),0>g||g>20)throw new RangeError("Number.toFixed called with invalid number of decimals");
if(h=Number(this),h!==h)return"NaN";if(-1e21>=h||h>=1e21)return String(h);if(i="",0>h&&(i="-",h=-h),j="0",h>1e-21)if(k=e(h*d(2,69,1))-69,l=0>k?h*d(2,-k,1):h/d(2,k,1),l*=4503599627370496,k=52-k,k>0){for(a(0,l),m=g;m>=7;)a(1e7,0),m-=7;
for(a(d(10,m,1),0),m=k-1;m>=23;)b(1<<23),m-=23;b(1<<m),a(1,1),b(2),j=c()}else a(0,l),a(1<<-k,0),j=c()+"0.00000000000000000000".slice(2,2+g);
return g>0?(n=j.length,j=g>=n?i+"0.0000000000000000000".slice(0,g-n+2)+j:i+j.slice(0,n-g)+"."+j.slice(n-g)):j=i+j,j
}}();var D=String.prototype.split;if(2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var a=void 0===/()??/.exec("")[1];
String.prototype.split=function(b,c){var d=this;if(void 0===b&&0===c)return[];if("[object RegExp]"!==Object.prototype.toString.call(b))return D.apply(this,arguments);
var e,f,g,h,i=[],j=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.extended?"x":"")+(b.sticky?"y":""),k=0,b=new RegExp(b.source,j+"g");
for(d+="",a||(e=new RegExp("^"+b.source+"$(?!\\s)",j)),c=void 0===c?-1>>>0:c>>>0;(f=b.exec(d))&&(g=f.index+f[0].length,!(g>k&&(i.push(d.slice(k,f.index)),!a&&f.length>1&&f[0].replace(e,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(f[a]=void 0)
}),f.length>1&&f.index<d.length&&Array.prototype.push.apply(i,f.slice(1)),h=f[0].length,k=g,i.length>=c)));)b.lastIndex===f.index&&b.lastIndex++;
return k===d.length?(h||!b.test(""))&&i.push(""):i.push(d.slice(k)),i.length>c?i.slice(0,c):i
}}():"0".split(void 0,0).length&&(String.prototype.split=function(a,b){return void 0===a&&0===b?[]:D.apply(this,arguments)
}),"".substr&&"b"!=="0b".substr(-1)){var E=String.prototype.substr;String.prototype.substr=function(a,b){return E.call(this,0>a?(a=this.length+a)<0?0:a:a,b)
}}var F="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||F.trim()){F="["+F+"]";
var G=new RegExp("^"+F+F+"*"),H=new RegExp(F+F+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");
return String(this).replace(G,"").replace(H,"")}}var I=function(a){if(null==a)throw new TypeError("can't convert "+a+" to object");
return Object(a)}}),function(a){"function"==typeof define?define(a):"function"==typeof YUI?YUI.add("es5-sham",a):a()
}(function(){function a(a){try{return a.sentinel=0,0===Object.getOwnPropertyDescriptor(a,"sentinel").value
}catch(b){}}function b(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a
}catch(b){}}var c,d,e,f,g,h=Function.prototype.call,i=Object.prototype,j=h.bind(i.hasOwnProperty);
if((g=j(i,"__defineGetter__"))&&(c=h.bind(i.__defineGetter__),d=h.bind(i.__defineSetter__),e=h.bind(i.__lookupGetter__),f=h.bind(i.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(a){return a.__proto__||(a.constructor?a.constructor.prototype:i)
}),Object.defineProperty){var k=a({}),l="undefined"==typeof document||a(document.createElement("div"));
if(!l||!k)var m=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||m){var n="Object.getOwnPropertyDescriptor called on a non-object: ";
Object.getOwnPropertyDescriptor=function(a,b){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError(n+a);
if(m)try{return m.call(Object,a,b)}catch(c){}if(j(a,b)){var d={enumerable:!0,configurable:!0};
if(g){var h=a.__proto__;a.__proto__=i;var k=e(a,b),l=f(a,b);if(a.__proto__=h,k||l)return k&&(d.get=k),l&&(d.set=l),d
}return d.value=a[b],d.writable=!0,d}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(a){return Object.keys(a)
}),!Object.create){var o,p=null===Object.prototype.__proto__;o=p||"undefined"==typeof document?function(){return{__proto__:null}
}:function(){function a(){}var b=document.createElement("iframe"),c=document.body||document.documentElement;
b.style.display="none",c.appendChild(b),b.src="javascript:";var d=b.contentWindow.Object.prototype;
return c.removeChild(b),b=null,delete d.constructor,delete d.hasOwnProperty,delete d.propertyIsEnumerable,delete d.isPrototypeOf,delete d.toLocaleString,delete d.toString,delete d.valueOf,d.__proto__=null,a.prototype=d,o=function(){return new a
},new a},Object.create=function(a,b){function c(){}var d;if(null===a)d=o();else{if("object"!=typeof a&&"function"!=typeof a)throw new TypeError("Object prototype may only be an Object or null");
c.prototype=a,d=new c,d.__proto__=a}return void 0!==b&&Object.defineProperties(d,b),d
}}if(Object.defineProperty){var q=b({}),r="undefined"==typeof document||b(document.createElement("div"));
if(!q||!r)var s=Object.defineProperty,t=Object.defineProperties}if(!Object.defineProperty||s){var u="Property description must be an object: ",v="Object.defineProperty called on non-object: ",w="getters & setters can not be defined on this javascript engine";
Object.defineProperty=function(a,b,h){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError(v+a);
if("object"!=typeof h&&"function"!=typeof h||null===h)throw new TypeError(u+h);if(s)try{return s.call(Object,a,b,h)
}catch(k){}if(j(h,"value"))if(g&&(e(a,b)||f(a,b))){var l=a.__proto__;a.__proto__=i,delete a[b],a[b]=h.value,a.__proto__=l
}else a[b]=h.value;else{if(!g)throw new TypeError(w);j(h,"get")&&c(a,b,h.get),j(h,"set")&&d(a,b,h.set)
}return a}}(!Object.defineProperties||t)&&(Object.defineProperties=function(a,b){if(t)try{return t.call(Object,a,b)
}catch(c){}for(var d in b)j(b,d)&&"__proto__"!=d&&Object.defineProperty(a,d,b[d]);
return a}),Object.seal||(Object.seal=function(a){return a}),Object.freeze||(Object.freeze=function(a){return a
});try{Object.freeze(function(){})}catch(x){Object.freeze=function(a){return function(b){return"function"==typeof b?b:a(b)
}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(a){return a
}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1
}),Object.isExtensible||(Object.isExtensible=function(a){if(Object(a)!==a)throw new TypeError;
for(var b="";j(a,b);)b+="?";a[b]=!0;var c=j(a,b);return delete a[b],c})});var arePropertyDescriptorsSupported=function(){var a=function(){return Object.defineProperty({},"x",{}),!0
},b=!1;try{b=a()}catch(c){}return b},main=function(){"use strict";var a="undefined"==typeof global?window:global,b=a.isFinite,c=!!Object.defineProperty&&arePropertyDescriptorsSupported(),d=function(a,b){Object.keys(b).forEach(function(d){var e=b[d];
d in a||(c?Object.defineProperty(a,d,{configurable:!0,enumerable:!1,writable:!0,value:e}):a[d]=e)
})},e={ToInt32:function(a){return a>>0},ToUint32:function(a){return a>>>0}};if(d(String,{fromCodePoint:function(){for(var a,b=arguments,c=[],d=0,e=b.length;e>d;d++){if(a=Number(b[d]),!Object.is(a,Number.toInteger(a))||0>a||a>1114111)throw new RangeError("Invalid code point "+a);
65536>a?c.push(String.fromCharCode(a)):(a-=65536,c.push(String.fromCharCode((a>>10)+55296)),c.push(String.fromCharCode(a%1024+56320)))
}return c.join("")},raw:function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1),c=Object(a),d=c.raw,f=Object(d),g=Object.keys(f).length,h=e.ToUint32(g);
if(0===h)return"";for(var i,j,k,l,m=[],n=0;h>n&&(i=String(n),j=f[i],k=String(j),m.push(k),!(n+1>=h))&&(j=b[i],"undefined"!=typeof j);)l=String(j),m.push(l),n++;
return m.join("")}}),d(String.prototype,{repeat:function(a){if(a=Number.toInteger(a),0>a||1/0===a)throw new RangeError;
var b=String(this);if(1>a)return"";if(a%2)return b.repeat(a-1)+b;var c=b.repeat(a/2);
return c+c},startsWith:function(a){var b=arguments[1],c=(a.toString(),String(this)),d=void 0===b?0:Number.toInteger(b),e=c.length,f=Math.min(Math.max(d,0),e),g=a.length;
if(g+f>e)return!1;var h="".indexOf.call(c,a,f);return h===f},endsWith:function(a){var b=arguments[1],c=String(this),d=(a.toString(),c.length),e=void 0===b?d:Number.toInteger(b),f=Math.min(Math.max(e,0),d),g=a.length,h=f-g;
if(0>h)return!1;var i="".indexOf.call(c,a,h);return i===h},contains:function(a){var b=arguments[1];
return-1!=="".indexOf.call(this,a,b)},codePointAt:function(a){var b=String(this),c=Number.toInteger(a),d=b.length;
if(0>c||c>=d)return void 0;var e=b.charCodeAt(c),f=c+1===d;if(55296>e||e>56319||f)return e;
var g=b.charCodeAt(c+1);return 56320>g||g>57343?e:1024*(e-55296)+(g-56320)+65536}}),d(Array,{from:function(a){for(var b=arguments[1],c=arguments[2],d=Object(a),f=e.ToUint32(d.length),g="function"==typeof this?Object(new this(f)):new Array(f),h=0;f>h;h++){var i=d[h];
g[h]=b?b.call(c,i):i}return g.length=f,g},of:function(){return Array.from(arguments)
}}),d(Array.prototype,{find:function(a){var b=Object(this),c=e.ToUint32(b.length);
if(0===c)return void 0;if("function"!=typeof a)throw new TypeError("Array#find: predicate must be a function");
for(var d,f=arguments[1],g=0;c>g&&g in b;g++)if(d=b[g],a.call(f,d,g,b))return d;return void 0
},findIndex:function(a){var b=Object(this),c=e.ToUint32(b.length);if(0===c)return-1;
if("function"!=typeof a)throw new TypeError("Array#findIndex: predicate must be a function");
for(var d,f=arguments[1],g=0;c>g&&g in b;g++)if(d=b[g],a.call(f,d,g,b))return g;return-1
}}),d(Number,{MAX_INTEGER:9007199254740991,EPSILON:2.220446049250313e-16,parseInt:a.parseInt,parseFloat:a.parseFloat,isFinite:function(a){return"number"==typeof a&&b(a)
},isInteger:function(a){return Number.isFinite(a)&&a>=-9007199254740992&&a<=Number.MAX_INTEGER&&Math.floor(a)===a
},isNaN:function(a){return Object.is(a,0/0)},toInteger:function(a){var b=+a;return Object.is(b,0/0)?0:0!==b&&Number.isFinite(b)?Math.sign(b)*Math.floor(Math.abs(b)):b
}}),d(Number.prototype,{clz:function(){var a=+this;return a&&Number.isFinite(a)?(a=0>a?Math.ceil(a):Math.floor(a),a-=4294967296*Math.floor(a/4294967296),32-a.toString(2).length):32
}}),c&&(d(Object,{getOwnPropertyDescriptors:function(a){var b={};return Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)
}),b},getPropertyDescriptor:function(a,b){for(var c=Object.getOwnPropertyDescriptor(a,b),d=Object.getPrototypeOf(a);void 0===c&&null!==d;)c=Object.getOwnPropertyDescriptor(d,b),d=Object.getPrototypeOf(d);
return c},getPropertyNames:function(a){for(var b=Object.getOwnPropertyNames(a),c=Object.getPrototypeOf(a),d=function(a){-1===b.indexOf(a)&&b.push(a)
};null!==c;)Object.getOwnPropertyNames(c).forEach(d),c=Object.getPrototypeOf(c);return b
},assign:function(a,b){return Object.keys(b).reduce(function(a,c){return a[c]=b[c],a
},a)},mixin:function(a,b){var c=Object.getOwnPropertyNames(b);return c.reduce(function(a,c){var d=Object.getOwnPropertyDescriptor(b,c);
return Object.defineProperty(a,c,d)},a)}}),d(Object,{setPrototypeOf:function(a,b){var c,d=function(a,b){if("object"!=typeof a||null===a)throw new TypeError("can not set prototype on a non-object");
if("object"!=typeof b&&null!==b)throw new TypeError("can only set prototype to an object or null")
},e=function(a,b){return d(a,b),c.call(a,b),a};try{c=a.getOwnPropertyDescriptor(a.prototype,b).set,c.call({},null)
}catch(f){if(a.prototype!=={}[b])return;c=function(a){this[b]=a},e.polyfill=e(e({},null),a.prototype)instanceof a
}return e}(Object,"__proto__")})),d(Object,{getOwnPropertyKeys:function(a){return Object.keys(a)
},is:function(a,b){return a===b?0===a?1/a===1/b:!0:a!==a&&b!==b}}),d(Math,{acosh:function(a){return Number.isNaN(a)||1>a?0/0:1===a?0:1/0===a?1/0:Math.log(a+Math.sqrt(a*a-1))
},asinh:function(a){return Number.isNaN(a)?0/0:0===a?a:1/0===a||a===-1/0?a:Math.log(a+Math.sqrt(a*a+1))
},atanh:function(a){return Number.isNaN(a)||-1>a||a>1?0/0:-1===a?-1/0:1===a?1/0:0===a?a:.5*Math.log((1+a)/(1-a))
},cbrt:function(a){if(0===a)return a;var b,c=0>a;return c&&(a=-a),b=Math.pow(a,1/3),c?-b:b
},cosh:function(a){return 0===a?1:1/0===a||a===-1/0?a:Number.isNaN(a)?0/0:(0>a&&(a=-a),a>21?Math.exp(a)/2:(Math.exp(a)+Math.exp(-a))/2)
},expm1:function(a){if(Number.isNaN(a))return 0/0;if(0===a)return a;if(1/0===a)return 1/0;
if(a===-1/0)return-1;for(var b=0,c=50,d=1;c>d;d++){for(var e=2,f=1;d>=e;e++)f*=e;
b+=Math.pow(a,d)/f}return b},hypot:function(a,b,c){var d=!1,e=!1,f=!0;return[a,b,c].some(function(a){return Number.isNaN(a)?d=!0:1/0===a||a===-1/0?e=!0:0!==a&&(f=!1),e||d
}),e?1/0:d?0/0:f?0:(null==a&&(a=0),null==b&&(b=0),null==c&&(c=0),Math.sqrt(a*a+b*b+c*c))
},log2:function(a){return Number.isNaN(a)||0>a?0/0:0===a?-1/0:1===a?0:1/0===a?1/0:Math.log(a)*(1/Math.LN2)
},log10:function(a){return Number.isNaN(a)||0>a?0/0:0===a?-1/0:1===a?0:1/0===a?1/0:Math.log(a)*(1/Math.LN10)
},log1p:function(a){if(Number.isNaN(a)||-1>a)return 0/0;if(-1===a)return-1/0;if(0===a)return a;
if(1/0===a)return 1/0;var b=0,c=50;if(0>a||a>1)return Math.log(1+a);for(var d=1;c>d;d++)d%2===0?b-=Math.pow(a,d)/d:b+=Math.pow(a,d)/d;
return b},sign:function(a){var b=+a;return 0===b?b:Object.is(b,0/0)?b:0>b?-1:1},sinh:function(a){return Number.isNaN(a)?0/0:0===a?a:1/0===a||a===-1/0?a:(Math.exp(a)-Math.exp(-a))/2
},tanh:function(a){return Number.isNaN(a)?0/0:0===a?a:1/0===a?1:a===-1/0?-1:(Math.exp(a)-Math.exp(-a))/(Math.exp(a)+Math.exp(-a))
},trunc:function(a){return Number.isNaN(a)?0/0:1/0===a||a===-1/0?a:0===a?a:~~a}}),c){var f={Map:function(){function a(a,b){this.key=a,this.value=b,this.next=null
}function b(a,b){this.i=a._head,this.kind=b}function c(){if(!(this instanceof c))return new c;
var b=new a(null,null);d(this,{_head:b,_size:0}),Object.defineProperty(this,"size",{configurable:!0,enumerable:!1,get:function(){return this._size
}.bind(this)})}var e={};return a.prototype.isRemoved=function(){return this.key===e
},b.prototype={next:function(){var a=this.i;if(null!==a){for(;a.isRemoved();)a=a.next;
a=a.next,this.i=a}if(null===a)throw new Error;var b=this.kind;return"key"===b?a.key:"value"===b?a.value:[a.key,a.value]
}},d(c.prototype,{get:function(a){for(var b=this._head;null!==(b=b.next);)if(Object.is(b.key,a))return b.value;
return void 0},has:function(a){for(var b=this._head;null!==(b=b.next);)if(Object.is(b.key,a))return!0;
return!1},set:function(b,c){for(var d=this._head,e=d;null!==(d=d.next);){if(Object.is(d.key,b))return void(d.value=c);
e=d}var f=new a(b,c);e.next=f,this._size+=1},"delete":function(a){for(var b=this._head,c=b;null!==(b=b.next);){if(Object.is(b.key,a))return c.next=b.next,b.key=e,b.value=e,b.next=c,this._size-=1,!0;
c=b}return!1},clear:function(){var a=this._head,b=a.next;for(this._size=0,a.next=null;null!==b;){var c=b.next;
b.key=e,b.value=e,b.next=a,b=c}},keys:function(){return new b(this,"key")},values:function(){return new b(this,"value")
},entries:function(){return new b(this,"key+value")},forEach:function(a){for(var b=arguments.length>1?arguments[1]:null,c=this,d=this._head;null!==(d=d.next);)for(a.call(b,d.value,d.key,c);d.isRemoved();)d=d.next
}}),c}(),Set:function(){var a=function(){return this instanceof a?(d(this,{"[[SetData]]":new Map}),void Object.defineProperty(this,"size",{configurable:!0,enumerable:!1,get:function(){return this["[[SetData]]"].size
}.bind(this)})):new a};return d(a.prototype,{has:function(a){return this["[[SetData]]"].has(a)
},add:function(a){return this["[[SetData]]"].set(a,a)},"delete":function(a){return this["[[SetData]]"]["delete"](a)
},clear:function(){return this["[[SetData]]"].clear()},keys:function(){return this["[[SetData]]"].keys()
},values:function(){return this["[[SetData]]"].values()},entries:function(){return this["[[SetData]]"].entries()
},forEach:function(a){var b=arguments.length>1?arguments[1]:null,c=this;this["[[SetData]]"].forEach(function(d,e){a.call(b,e,e,c)
})}}),a}()};if(d(a,f),a.Map||a.Set){var g="function"!=typeof a.Map.prototype.clear,h=0!==typeof(new a.Set).size,i=0!==typeof(new a.Map).size,j="function"!=typeof Set.prototype.keys;
(g||h||i||j)&&(a.Map=f.Map,a.Set=f.Set)}}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd?define(main):main(),function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");
return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=fb.type(a);
return"function"===c||fb.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}function d(a,b,c){if(fb.isFunction(b))return fb.grep(a,function(a,d){return!!b.call(a,d,a)!==c
});if(b.nodeType)return fb.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(nb.test(b))return fb.filter(b,a,c);
b=fb.filter(b,a)}return fb.grep(a,function(a){return fb.inArray(a,b)>=0!==c})}function e(a,b){do a=a[b];
while(a&&1!==a.nodeType);return a}function f(a){var b=vb[a]={};return fb.each(a.match(ub)||[],function(a,c){b[c]=!0
}),b}function g(){pb.addEventListener?(pb.removeEventListener("DOMContentLoaded",h,!1),a.removeEventListener("load",h,!1)):(pb.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))
}function h(){(pb.addEventListener||"load"===event.type||"complete"===pb.readyState)&&(g(),fb.ready())
}function i(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(Ab,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:zb.test(c)?fb.parseJSON(c):c
}catch(e){}fb.data(a,b,c)}else c=void 0}return c}function j(a){var b;for(b in a)if(("data"!==b||!fb.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function k(a,b,c,d){if(fb.acceptData(a)){var e,f,g=fb.expando,h=a.nodeType,i=h?fb.cache:a,j=h?a[g]:a[g]&&g;
if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)return j||(j=h?a[g]=W.pop()||fb.guid++:g),i[j]||(i[j]=h?{}:{toJSON:fb.noop}),("object"==typeof b||"function"==typeof b)&&(d?i[j]=fb.extend(i[j],b):i[j].data=fb.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[fb.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[fb.camelCase(b)])):e=f,e
}}function l(a,b,c){if(fb.acceptData(a)){var d,e,f=a.nodeType,g=f?fb.cache:a,h=f?a[fb.expando]:fb.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){fb.isArray(b)?b=b.concat(fb.map(b,fb.camelCase)):b in d?b=[b]:(b=fb.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
for(;e--;)delete d[b[e]];if(c?!j(d):!fb.isEmptyObject(d))return}(c||(delete g[h].data,j(g[h])))&&(f?fb.cleanData([a],!0):db.deleteExpando||g!=g.window?delete g[h]:g[h]=null)
}}}function m(){return!0}function n(){return!1}function o(){try{return pb.activeElement
}catch(a){}}function p(a){var b=Lb.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());
return c}function q(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==yb?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==yb?a.querySelectorAll(b||"*"):void 0;
if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||fb.nodeName(d,b)?f.push(d):fb.merge(f,q(d,b));
return void 0===b||b&&fb.nodeName(a,b)?fb.merge([a],f):f}function r(a){Fb.test(a.type)&&(a.defaultChecked=a.checked)
}function s(a,b){return fb.nodeName(a,"table")&&fb.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function t(a){return a.type=(null!==fb.find.attr(a,"type"))+"/"+a.type,a}function u(a){var b=Wb.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a}function v(a,b){for(var c,d=0;null!=(c=a[d]);d++)fb._data(c,"globalEval",!b||fb._data(b[d],"globalEval"))
}function w(a,b){if(1===b.nodeType&&fb.hasData(a)){var c,d,e,f=fb._data(a),g=fb._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)fb.event.add(b,c,h[c][d])
}g.data&&(g.data=fb.extend({},g.data))}}function x(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!db.noCloneEvent&&b[fb.expando]){e=fb._data(b);
for(d in e.events)fb.removeEvent(b,d,e.handle);b.removeAttribute(fb.expando)}"script"===c&&b.text!==a.text?(t(b).text=a.text,u(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),db.html5Clone&&a.innerHTML&&!fb.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Fb.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}}function y(b,c){var d=fb(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:fb.css(d[0],"display");
return d.detach(),e}function z(a){var b=pb,c=ac[a];return c||(c=y(a,b),"none"!==c&&c||(_b=(_b||fb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(_b[0].contentWindow||_b[0].contentDocument).document,b.write(),b.close(),c=y(a,b),_b.detach()),ac[a]=c),c
}function A(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)
}}}function B(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=nc.length;e--;)if(b=nc[e]+c,b in a)return b;
return d}function C(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=fb._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Db(d)&&(f[g]=fb._data(d,"olddisplay",z(d.nodeName)))):f[g]||(e=Db(d),(c&&"none"!==c||!e)&&fb._data(d,"olddisplay",e?c:fb.css(d,"display"))));
for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));
return a}function D(a,b,c){var d=jc.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function E(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=fb.css(a,c+Cb[f],!0,e)),d?("content"===c&&(g-=fb.css(a,"padding"+Cb[f],!0,e)),"margin"!==c&&(g-=fb.css(a,"border"+Cb[f]+"Width",!0,e))):(g+=fb.css(a,"padding"+Cb[f],!0,e),"padding"!==c&&(g+=fb.css(a,"border"+Cb[f]+"Width",!0,e)));
return g}function F(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=bc(a),g=db.boxSizing()&&"border-box"===fb.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=cc(a,b,f),(0>e||null==e)&&(e=a.style[b]),ec.test(e))return e;
d=g&&(db.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+E(a,b,c||(g?"border":"content"),d,f)+"px"
}function G(a,b,c,d,e){return new G.prototype.init(a,b,c,d,e)}function H(){return setTimeout(function(){oc=void 0
}),oc=fb.now()}function I(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=Cb[e],d["margin"+c]=d["padding"+c]=a;
return b&&(d.opacity=d.width=a),d}function J(a,b,c){for(var d,e=(uc[b]||[]).concat(uc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d
}function K(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Db(a),p=fb._data(a,"fxshow");
c.queue||(h=fb._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,fb.queue(a,"fx").length||h.empty.fire()
})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=fb.css(a,"display"),k=z(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===fb.css(a,"float")&&(db.inlineBlockNeedsLayout&&"inline"!==k?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",db.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]
}));for(d in b)if(e=b[d],qc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;
o=!0}m[d]=p&&p[d]||fb.style(a,d)}if(!fb.isEmptyObject(m)){p?"hidden"in p&&(o=p.hidden):p=fb._data(a,"fxshow",{}),f&&(p.hidden=!o),o?fb(a).show():l.done(function(){fb(a).hide()
}),l.done(function(){var b;fb._removeData(a,"fxshow");for(b in m)fb.style(a,b,m[b])
});for(d in m)g=J(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}function L(a,b){var c,d,e,f,g;for(c in a)if(d=fb.camelCase(c),e=b[d],f=a[c],fb.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=fb.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function M(a,b,c){var d,e,f=0,g=tc.length,h=fb.Deferred().always(function(){delete i.elem
}),i=function(){if(e)return!1;for(var b=oc||H(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);
return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:fb.extend({},b),opts:fb.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:oc||H(),duration:c.duration,tweens:[],createTween:function(b,c){var d=fb.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;
for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;for(L(k,j.opts.specialEasing);g>f;f++)if(d=tc[f].call(j,a,k,j.opts))return d;
return fb.map(k,J,j),fb.isFunction(j.opts.start)&&j.opts.start.call(a,j),fb.fx.timer(fb.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}function N(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(ub)||[];
if(fb.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}function O(a,b,c,d){function e(h){var i;return f[h]=!0,fb.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)
}),i}var f={},g=a===Sc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function P(a,b){var c,d,e=fb.ajaxSettings.flatOptions||{};
for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&fb.extend(!0,a,c),a
}function Q(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));
if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function R(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;
else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}return{state:"success",data:b}}function S(a,b,c,d){var e;if(fb.isArray(b))fb.each(b,function(b,e){c||Wc.test(a)?d(a,e):S(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
});else if(c||"object"!==fb.type(b))d(a,b);else for(e in b)S(a+"["+e+"]",b[e],c,d)
}function T(){try{return new a.XMLHttpRequest}catch(b){}}function U(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}function V(a){return fb.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}var W=[],X=W.slice,Y=W.concat,Z=W.push,$=W.indexOf,_={},ab=_.toString,bb=_.hasOwnProperty,cb="".trim,db={},eb="1.11.0",fb=function(a,b){return new fb.fn.init(a,b)
},gb=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,hb=/^-ms-/,ib=/-([\da-z])/gi,jb=function(a,b){return b.toUpperCase()
};fb.fn=fb.prototype={jquery:eb,constructor:fb,selector:"",length:0,toArray:function(){return X.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:X.call(this)},pushStack:function(a){var b=fb.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b},each:function(a,b){return fb.each(this,a,b)
},map:function(a){return this.pushStack(fb.map(this,function(b,c){return a.call(b,c,b)
}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)
},push:Z,sort:W.sort,splice:W.splice},fb.extend=fb.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||fb.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(fb.isPlainObject(c)||(b=fb.isArray(c)))?(b?(b=!1,f=a&&fb.isArray(a)?a:[]):f=a&&fb.isPlainObject(a)?a:{},g[d]=fb.extend(j,f,c)):void 0!==c&&(g[d]=c));
return g},fb.extend({expando:"jQuery"+(eb+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===fb.type(a)},isArray:Array.isArray||function(a){return"array"===fb.type(a)
},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0
},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;
if(!a||"object"!==fb.type(a)||a.nodeType||fb.isWindow(a))return!1;try{if(a.constructor&&!bb.call(a,"constructor")&&!bb.call(a.constructor.prototype,"isPrototypeOf"))return!1
}catch(c){return!1}if(db.ownLast)for(b in a)return bb.call(a,b);for(b in a);return void 0===b||bb.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?_[ab.call(a)]||"object":typeof a
},globalEval:function(b){b&&fb.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)},camelCase:function(a){return a.replace(hb,"ms-").replace(ib,jb)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break
}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;
return a},trim:cb&&!cb.call("﻿ ")?function(a){return null==a?"":cb.call(a)}:function(a){return null==a?"":(a+"").replace(gb,"")
},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?fb.merge(d,"string"==typeof a?[a]:a):Z.call(d,a)),d
},inArray:function(a,b,c){var d;if(b){if($)return $.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c
}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];
if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);
return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);
else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return Y.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;
return"string"==typeof b&&(e=a[b],b=a,a=e),fb.isFunction(a)?(c=X.call(arguments,2),d=function(){return a.apply(b||this,c.concat(X.call(arguments)))
},d.guid=a.guid=a.guid||fb.guid++,d):void 0},now:function(){return+new Date},support:db}),fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){_["[object "+b+"]"]=b.toLowerCase()
});var kb=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,o,p,q;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;
if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;
if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c
}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c
}if(x.qsa&&(!J||!J.test(a))){if(o=l=N,p=b,q=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=m(a),(l=b.getAttribute("id"))?o=l.replace(ub,"\\$&"):b.setAttribute("id",o),o="[id='"+o+"'] ",i=j.length;i--;)j[i]=o+n(j[i]);
p=tb.test(a)&&k(b.parentNode)||b,q=j.join(",")}if(q)try{return _.apply(c,p.querySelectorAll(q)),c
}catch(r){}finally{l||b.removeAttribute("id")}}}return v(a.replace(ib,"$1"),b,c,d)
}function c(){function a(c,d){return b.push(c+" ")>y.cacheLength&&delete a[b.shift()],a[c+" "]=d
}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");
try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)y.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);
if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a,c){var d,e,f,g,h,i,j,k=S[a+" "];
if(k)return c?0:k.slice(0);for(h=a,i=[],j=y.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));
for(g in y.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));
if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)}function n(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;
return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)
}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0
}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];
if(i[d]=j,j[2]=a(b,c,g))return!0}}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;
return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));
return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=d||u(b||"*",h.nodeType?[h]:h,[]),r=!a||!d&&b?p:q(p,m,a,h,i),s=c?f||(d?a:o||e)?[]:g:r;
if(c&&c(r,s,h,i),e)for(j=q(s,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));
if(d){if(f||a){if(f){for(j=[],k=s.length;k--;)(l=s[k])&&j.push(r[k]=l);f(null,s=[],j,i)
}for(k=s.length;k--;)(l=s[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):_.apply(g,s)
})}function s(a){for(var b,c,d,e=a.length,f=y.relative[a[0].type],g=f||y.relative[" "],h=f?1:0,i=o(function(a){return a===b
},g,!0),j=o(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))
}];e>h;h++)if(c=y.relative[a[h].type])k=[o(p(k),c)];else{if(c=y.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!y.relative[a[d].type];d++);return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&n(a))
}k.push(c)}return p(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&y.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;
for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);
break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);
if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)
}return j&&(P=u,C=s),p};return e?d(g):g}function u(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);
return d}function v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&I&&y.relative[f[1].type]){if(b=(y.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;
a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!y.relative[h=g.type]);)if((i=y.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&n(f),!a)return _.apply(c,d),c;
break}}return B(a,j)(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0
},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;
return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")"+db+"*(?:([*^$|!~]?=)"+db+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+fb+")|)|)"+db+"*\\]",hb=":("+eb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+gb.replace(3,8)+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType
}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1
}}}x=b.support={},A=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;
return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!A(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()
},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),x.attributes=e(function(a){return a.className="i",!a.getAttribute("className")
}),x.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length
}),x.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length
}),x.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length
}),x.getById?(y.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]}},y.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b
}}):(delete y.find.ID,y.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");
return c&&c.value===b}}),y.find.TAG=x.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);
return d}return f},y.find.CLASS=x.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0
},K=[],J=[],(x.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")
}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")
})),(x.matchesSelector=rb.test(L=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){x.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)
}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;
var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!x.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)
}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];
if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);
for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;
return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)
},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!x.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);
if(d||x.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0
},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);
var c=y.attrHandle[b.toLowerCase()],d=c&&X.call(y.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;
return void 0!==d?d:x.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null
},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!x.detectDuplicates,D=!x.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));
for(;d--;)a.splice(c[d],1)}return D=null,a},z=b.getText=function(a){var b,c="",d=0,e=a.nodeType;
if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;
for(a=a.firstChild;a;a=a.nextSibling)c+=z(a)}else if(3===e||4===e)return a.nodeValue
}else for(;b=a[d++];)c+=z(b);return c},y=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[5]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&mb.test(c)&&(b=m(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];
return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")
})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0
}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;
o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];
break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0
}}},PSEUDO:function(a,c){var e,f=y.pseudos[a]||y.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
return f[N]?f(c):f.length>1?(e=[a,a,"",c],y.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])
}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=B(a.replace(ib,"$1"));
return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))
}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0
}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||z(b)).indexOf(a)>-1
}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;
do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");
while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;
return!0},parent:function(a){return!y.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)
},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]
}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);
return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);
return a})}},y.pseudos.nth=y.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})y.pseudos[w]=h(w);
for(w in{submit:!0,reset:!0})y.pseudos[w]=i(w);return l.prototype=y.filters=y.pseudos,y.setFilters=new l,B=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];
if(!f){for(b||(b=m(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d))
}return f},x.sortStable=N.split("").sort(U).join("")===N,x.detectDuplicates=!!E,F(),x.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))
}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),x.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),b}(a);fb.find=kb,fb.expr=kb.selectors,fb.expr[":"]=fb.expr.pseudos,fb.unique=kb.uniqueSort,fb.text=kb.getText,fb.isXMLDoc=kb.isXML,fb.contains=kb.contains;
var lb=fb.expr.match.needsContext,mb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,nb=/^.[^:#\[\.,]*$/;
fb.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?fb.find.matchesSelector(d,a)?[d]:[]:fb.find.matches(a,fb.grep(b,function(a){return 1===a.nodeType
}))},fb.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(fb(a).filter(function(){for(b=0;e>b;b++)if(fb.contains(d[b],this))return!0
}));for(b=0;e>b;b++)fb.find(a,d[b],c);return c=this.pushStack(e>1?fb.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))
},is:function(a){return!!d(this,"string"==typeof a&&lb.test(a)?fb(a):a||[],!1).length
}});var ob,pb=a.document,qb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rb=fb.fn.init=function(a,b){var c,d;
if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:qb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ob).find(a):this.constructor(b).find(a);
if(c[1]){if(b=b instanceof fb?b[0]:b,fb.merge(this,fb.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:pb,!0)),mb.test(c[1])&&fb.isPlainObject(b))for(c in b)fb.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);
return this}if(d=pb.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return ob.find(a);
this.length=1,this[0]=d}return this.context=pb,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):fb.isFunction(a)?"undefined"!=typeof ob.ready?ob.ready(a):a(fb):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),fb.makeArray(a,this))
};rb.prototype=fb.fn,ob=fb(pb);var sb=/^(?:parents|prev(?:Until|All))/,tb={children:!0,contents:!0,next:!0,prev:!0};
fb.extend({dir:function(a,b,c){for(var d=[],e=a[b];e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!fb(e).is(c));)1===e.nodeType&&d.push(e),e=e[b];
return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);
return c}}),fb.fn.extend({has:function(a){var b,c=fb(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(fb.contains(this,c[b]))return!0
})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=lb.test(a)||"string"!=typeof a?fb(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&fb.find.matchesSelector(c,a))){f.push(c);
break}return this.pushStack(f.length>1?fb.unique(f):f)},index:function(a){return a?"string"==typeof a?fb.inArray(this[0],fb(a)):fb.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(fb.unique(fb.merge(this.get(),fb(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}}),fb.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null
},parents:function(a){return fb.dir(a,"parentNode")},parentsUntil:function(a,b,c){return fb.dir(a,"parentNode",c)
},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")
},nextAll:function(a){return fb.dir(a,"nextSibling")},prevAll:function(a){return fb.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return fb.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return fb.dir(a,"previousSibling",c)
},siblings:function(a){return fb.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return fb.sibling(a.firstChild)
},contents:function(a){return fb.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:fb.merge([],a.childNodes)
}},function(a,b){fb.fn[a]=function(c,d){var e=fb.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=fb.filter(d,e)),this.length>1&&(tb[a]||(e=fb.unique(e)),sb.test(a)&&(e=e.reverse())),this.pushStack(e)
}});var ub=/\S+/g,vb={};fb.Callbacks=function(a){a="string"==typeof a?vb[a]||f(a):fb.extend({},a);
var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(c=a.memory&&f,d=!0,g=h||0,h=0,e=i.length,b=!0;i&&e>g;g++)if(i[g].apply(f[0],f[1])===!1&&a.stopOnFalse){c=!1;
break}b=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var d=i.length;
!function f(b){fb.each(b,function(b,c){var d=fb.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)
})}(arguments),b?e=i.length:c&&(h=d,k(c))}return this},remove:function(){return i&&fb.each(arguments,function(a,c){for(var d;(d=fb.inArray(c,i,d))>-1;)i.splice(d,1),b&&(e>=d&&e--,g>=d&&g--)
}),this},has:function(a){return a?fb.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],e=0,this
},disable:function(){return i=j=c=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,c||l.disable(),this
},locked:function(){return!j},fireWith:function(a,c){return!i||d&&!j||(c=c||[],c=[a,c.slice?c.slice():c],b?j.push(c):k(c)),this
},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d
}};return l},fb.extend({Deferred:function(a){var b=[["resolve","done",fb.Callbacks("once memory"),"resolved"],["reject","fail",fb.Callbacks("once memory"),"rejected"],["notify","progress",fb.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;
return fb.Deferred(function(c){fb.each(b,function(b,f){var g=fb.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&fb.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})}),a=null}).promise()},promise:function(a){return null!=a?fb.extend(a,d):d}},e={};
return d.pipe=d.then,fb.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=X.call(arguments),g=f.length,h=1!==g||a&&fb.isFunction(a.promise)?g:0,i=1===h?a:fb.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?X.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)
}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&fb.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;
return h||i.resolveWith(d,f),i.promise()}});var wb;fb.fn.ready=function(a){return fb.ready.promise().done(a),this
},fb.extend({isReady:!1,readyWait:1,holdReady:function(a){a?fb.readyWait++:fb.ready(!0)
},ready:function(a){if(a===!0?!--fb.readyWait:!fb.isReady){if(!pb.body)return setTimeout(fb.ready);
fb.isReady=!0,a!==!0&&--fb.readyWait>0||(wb.resolveWith(pb,[fb]),fb.fn.trigger&&fb(pb).trigger("ready").off("ready"))
}}}),fb.ready.promise=function(b){if(!wb)if(wb=fb.Deferred(),"complete"===pb.readyState)setTimeout(fb.ready);
else if(pb.addEventListener)pb.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1);
else{pb.attachEvent("onreadystatechange",h),a.attachEvent("onload",h);var c=!1;try{c=null==a.frameElement&&pb.documentElement
}catch(d){}c&&c.doScroll&&!function e(){if(!fb.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)
}g(),fb.ready()}}()}return wb.promise(b)};var xb,yb="undefined";for(xb in fb(db))break;
db.ownLast="0"!==xb,db.inlineBlockNeedsLayout=!1,fb(function(){var a,b,c=pb.getElementsByTagName("body")[0];
c&&(a=pb.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=pb.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==yb&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(db.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)
}),function(){var a=pb.createElement("div");if(null==db.deleteExpando){db.deleteExpando=!0;
try{delete a.test}catch(b){db.deleteExpando=!1}}a=null}(),fb.acceptData=function(a){var b=fb.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var zb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ab=/([A-Z])/g;
fb.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?fb.cache[a[fb.expando]]:a[fb.expando],!!a&&!j(a)
},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},_data:function(a,b,c){return k(a,b,c,!0)
},_removeData:function(a,b){return l(a,b,!0)}}),fb.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=fb.data(f),1===f.nodeType&&!fb._data(f,"parsedAttrs"))){for(c=g.length;c--;)d=g[c].name,0===d.indexOf("data-")&&(d=fb.camelCase(d.slice(5)),i(f,d,e[d]));
fb._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){fb.data(this,a)
}):arguments.length>1?this.each(function(){fb.data(this,a,b)}):f?i(f,a,fb.data(f,a)):void 0
},removeData:function(a){return this.each(function(){fb.removeData(this,a)})}}),fb.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=fb._data(a,b),c&&(!d||fb.isArray(c)?d=fb._data(a,b,fb.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";var c=fb.queue(a,b),d=c.length,e=c.shift(),f=fb._queueHooks(a,b),g=function(){fb.dequeue(a,b)
};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";return fb._data(a,c)||fb._data(a,c,{empty:fb.Callbacks("once memory").add(function(){fb._removeData(a,b+"queue"),fb._removeData(a,c)
})})}}),fb.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?fb.queue(this[0],a):void 0===b?this:this.each(function(){var c=fb.queue(this,a,b);
fb._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&fb.dequeue(this,a)})},dequeue:function(a){return this.each(function(){fb.dequeue(this,a)
})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=fb.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=fb._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));
return h(),e.promise(b)}});var Bb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Cb=["Top","Right","Bottom","Left"],Db=function(a,b){return a=b||a,"none"===fb.css(a,"display")||!fb.contains(a.ownerDocument,a)
},Eb=fb.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===fb.type(c)){e=!0;
for(h in c)fb.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,fb.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(fb(a),c)
})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f
},Fb=/^(?:checkbox|radio)$/i;!function(){var a=pb.createDocumentFragment(),b=pb.createElement("div"),c=pb.createElement("input");
if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",db.leadingWhitespace=3===b.firstChild.nodeType,db.tbody=!b.getElementsByTagName("tbody").length,db.htmlSerialize=!!b.getElementsByTagName("link").length,db.html5Clone="<:nav></:nav>"!==pb.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),db.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",db.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",db.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,db.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){db.noCloneEvent=!1
}),b.cloneNode(!0).click()),null==db.deleteExpando){db.deleteExpando=!0;try{delete b.test
}catch(d){db.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=pb.createElement("div");
for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(db[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),db[b+"Bubbles"]=d.attributes[c].expando===!1);
d=null}();var Gb=/^(?:input|select|textarea)$/i,Hb=/^key/,Ib=/^(?:mouse|contextmenu)|click/,Jb=/^(?:focusinfocus|focusoutblur)$/,Kb=/^([^.]*)(?:\.(.+)|)$/;
fb.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=fb._data(a);
if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=fb.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return typeof fb===yb||a&&fb.event.triggered===a.type?void 0:fb.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(ub)||[""],h=b.length;h--;)f=Kb.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=fb.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=fb.event.special[n]||{},l=fb.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&fb.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),fb.event.global[n]=!0);
a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=fb.hasData(a)&&fb._data(a);
if(q&&(k=q.events)){for(b=(b||"").match(ub)||[""],j=b.length;j--;)if(h=Kb.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=fb.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));
i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||fb.removeEvent(a,n,q.handle),delete k[n])
}else for(n in k)fb.event.remove(a,n+b[j],c,d,!0);fb.isEmptyObject(k)&&(delete q.handle,fb._removeData(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||pb],n=bb.call(b,"type")?b.type:b,o=bb.call(b,"namespace")?b.namespace.split("."):[];
if(h=k=d=d||pb,3!==d.nodeType&&8!==d.nodeType&&!Jb.test(n+fb.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[fb.expando]?b:new fb.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:fb.makeArray(c,[b]),j=fb.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!fb.isWindow(d)){for(i=j.delegateType||n,Jb.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;
k===(d.ownerDocument||pb)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(fb._data(h,"events")||{})[b.type]&&fb._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&fb.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());
if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&fb.acceptData(d)&&g&&d[n]&&!fb.isWindow(d)){k=d[g],k&&(d[g]=null),fb.event.triggered=n;
try{d[n]()}catch(p){}fb.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=fb.event.fix(a);
var b,c,d,e,f,g=[],h=X.call(arguments),i=(fb._data(this,"events")||{})[a.type]||[],j=fb.event.special[a.type]||{};
if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=fb.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,f=0;(d=e.handlers[f++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(d.namespace))&&(a.handleObj=d,a.data=d.data,c=((fb.event.special[d.origType]||{}).handle||d.handler).apply(e.elem,h),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()));
return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?fb(c,this).index(i)>=0:fb.find(c,this,null,[i]).length),e[c]&&e.push(d);
e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[fb.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
for(g||(this.fixHooks[e]=g=Ib.test(e)?this.mouseHooks:Hb.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new fb.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];
return a.target||(a.target=f.srcElement||pb),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||pb,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==o()&&this.focus)try{return this.focus(),!1
}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===o()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return fb.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return fb.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=fb.extend(new fb.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?fb.event.trigger(e,null,b):fb.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},fb.removeEvent=pb.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===yb&&(a[d]=null),a.detachEvent(d,c))
},fb.Event=function(a,b){return this instanceof fb.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?m:n):this.type=a,b&&fb.extend(this,b),this.timeStamp=a&&a.timeStamp||fb.now(),void(this[fb.expando]=!0)):new fb.Event(a,b)
},fb.Event.prototype={isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=m,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=m,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=m,this.stopPropagation()
}},fb.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){fb.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!fb.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}}),db.submitBubbles||(fb.event.special.submit={setup:function(){return fb.nodeName(this,"form")?!1:void fb.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=fb.nodeName(b,"input")||fb.nodeName(b,"button")?b.form:void 0;
c&&!fb._data(c,"submitBubbles")&&(fb.event.add(c,"submit._submit",function(a){a._submit_bubble=!0
}),fb._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&fb.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){return fb.nodeName(this,"form")?!1:void fb.event.remove(this,"._submit")
}}),db.changeBubbles||(fb.event.special.change={setup:function(){return Gb.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(fb.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)
}),fb.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),fb.event.simulate("change",this,a,!0)
})),!1):void fb.event.add(this,"beforeactivate._change",function(a){var b=a.target;
Gb.test(b.nodeName)&&!fb._data(b,"changeBubbles")&&(fb.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||fb.event.simulate("change",this.parentNode,a,!0)
}),fb._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return fb.event.remove(this,"._change"),!Gb.test(this.nodeName)
}}),db.focusinBubbles||fb.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){fb.event.simulate(b,a.target,fb.event.fix(a),!0)
};fb.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=fb._data(d,b);
e||d.addEventListener(a,c,!0),fb._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=fb._data(d,b)-1;
e?fb._data(d,b,e):(d.removeEventListener(a,c,!0),fb._removeData(d,b))}}}),fb.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);
return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=n;
else if(!d)return this;return 1===e&&(g=d,d=function(a){return fb().off(a),g.apply(this,arguments)
},d.guid=g.guid||(g.guid=fb.guid++)),this.each(function(){fb.event.add(this,a,d,c,b)
})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,fb(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;
if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=n),this.each(function(){fb.event.remove(this,a,c,b)
})},trigger:function(a,b){return this.each(function(){fb.event.trigger(a,b,this)})
},triggerHandler:function(a,b){var c=this[0];return c?fb.event.trigger(a,b,c,!0):void 0
}});var Lb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Mb=/ jQuery\d+="(?:null|\d+)"/g,Nb=new RegExp("<(?:"+Lb+")[\\s/>]","i"),Ob=/^\s+/,Pb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Qb=/<([\w:]+)/,Rb=/<tbody/i,Sb=/<|&#?\w+;/,Tb=/<(?:script|style|link)/i,Ub=/checked\s*(?:[^=]|=\s*.checked.)/i,Vb=/^$|\/(?:java|ecma)script/i,Wb=/^true\/(.*)/,Xb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Yb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:db.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Zb=p(pb),$b=Zb.appendChild(pb.createElement("div"));
Yb.optgroup=Yb.option,Yb.tbody=Yb.tfoot=Yb.colgroup=Yb.caption=Yb.thead,Yb.th=Yb.td,fb.extend({clone:function(a,b,c){var d,e,f,g,h,i=fb.contains(a.ownerDocument,a);
if(db.html5Clone||fb.isXMLDoc(a)||!Nb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):($b.innerHTML=a.outerHTML,$b.removeChild(f=$b.firstChild)),!(db.noCloneEvent&&db.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||fb.isXMLDoc(a)))for(d=q(f),h=q(a),g=0;null!=(e=h[g]);++g)d[g]&&x(e,d[g]);
if(b)if(c)for(h=h||q(a),d=d||q(f),g=0;null!=(e=h[g]);g++)w(e,d[g]);else w(a,f);return d=q(f,"script"),d.length>0&&v(d,!i&&q(a,"script")),d=h=e=null,f
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,m=p(b),n=[],o=0;l>o;o++)if(f=a[o],f||0===f)if("object"===fb.type(f))fb.merge(n,f.nodeType?[f]:f);
else if(Sb.test(f)){for(h=h||m.appendChild(b.createElement("div")),i=(Qb.exec(f)||["",""])[1].toLowerCase(),k=Yb[i]||Yb._default,h.innerHTML=k[1]+f.replace(Pb,"<$1></$2>")+k[2],e=k[0];e--;)h=h.lastChild;
if(!db.leadingWhitespace&&Ob.test(f)&&n.push(b.createTextNode(Ob.exec(f)[0])),!db.tbody)for(f="table"!==i||Rb.test(f)?"<table>"!==k[1]||Rb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)fb.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);
for(fb.merge(n,h.childNodes),h.textContent="";h.firstChild;)h.removeChild(h.firstChild);
h=m.lastChild}else n.push(b.createTextNode(f));for(h&&m.removeChild(h),db.appendChecked||fb.grep(q(n,"input"),r),o=0;f=n[o++];)if((!d||-1===fb.inArray(f,d))&&(g=fb.contains(f.ownerDocument,f),h=q(m.appendChild(f),"script"),g&&v(h),c))for(e=0;f=h[e++];)Vb.test(f.type||"")&&c.push(f);
return h=null,m},cleanData:function(a,b){for(var c,d,e,f,g=0,h=fb.expando,i=fb.cache,j=db.deleteExpando,k=fb.event.special;null!=(c=a[g]);g++)if((b||fb.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?fb.event.remove(c,d):fb.removeEvent(c,d,f.handle);
i[e]&&(delete i[e],j?delete c[h]:typeof c.removeAttribute!==yb?c.removeAttribute(h):c[h]=null,W.push(e))
}}}),fb.fn.extend({text:function(a){return Eb(this,function(a){return void 0===a?fb.text(this):this.empty().append((this[0]&&this[0].ownerDocument||pb).createTextNode(a))
},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);
b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);
b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})},remove:function(a,b){for(var c,d=a?fb.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||fb.cleanData(q(c)),c.parentNode&&(b&&fb.contains(c.ownerDocument,c)&&v(q(c,"script")),c.parentNode.removeChild(c));
return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&fb.cleanData(q(a,!1));a.firstChild;)a.removeChild(a.firstChild);
a.options&&fb.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return fb.clone(this,a,b)
})},html:function(a){return Eb(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(Mb,""):void 0;if(!("string"!=typeof a||Tb.test(a)||!db.htmlSerialize&&Nb.test(a)||!db.leadingWhitespace&&Ob.test(a)||Yb[(Qb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(Pb,"<$1></$2>");
try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(fb.cleanData(q(b,!1)),b.innerHTML=a);
b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,fb.cleanData(q(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=Y.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],n=fb.isFunction(m);
if(n||j>1&&"string"==typeof m&&!db.checkClone&&Ub.test(m))return this.each(function(c){var d=k.eq(c);
n&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(h=fb.buildFragment(a,this[0].ownerDocument,!1,this),c=h.firstChild,1===h.childNodes.length&&(h=c),c)){for(f=fb.map(q(h,"script"),t),e=f.length;j>i;i++)d=h,i!==l&&(d=fb.clone(d,!0,!0),e&&fb.merge(f,q(d,"script"))),b.call(this[i],d,i);
if(e)for(g=f[f.length-1].ownerDocument,fb.map(f,u),i=0;e>i;i++)d=f[i],Vb.test(d.type||"")&&!fb._data(d,"globalEval")&&fb.contains(g,d)&&(d.src?fb._evalUrl&&fb._evalUrl(d.src):fb.globalEval((d.text||d.textContent||d.innerHTML||"").replace(Xb,"")));
h=c=null}return this}}),fb.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){fb.fn[a]=function(a){for(var c,d=0,e=[],f=fb(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),fb(f[d])[b](c),Z.apply(e,c.get());
return this.pushStack(e)}});var _b,ac={};!function(){var a,b,c=pb.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",db.opacity=/^0.5/.test(a.style.opacity),db.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",db.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,db.shrinkWrapBlocks=function(){var a,c,e,f;
if(null==b){if(a=pb.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=pb.createElement("div"),e=pb.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==yb&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null
}return b}}();var bc,cc,dc=/^margin/,ec=new RegExp("^("+Bb+")(?!px)[a-z%]+$","i"),fc=/^(top|right|bottom|left)$/;
a.getComputedStyle?(bc=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)
},cc=function(a,b,c){var d,e,f,g,h=a.style;return c=c||bc(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||fb.contains(a.ownerDocument,a)||(g=fb.style(a,b)),ec.test(g)&&dc.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
}):pb.documentElement.currentStyle&&(bc=function(a){return a.currentStyle},cc=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||bc(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),ec.test(g)&&!fc.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
}),function(){function b(){var b,c,d=pb.getElementsByTagName("body")[0];d&&(b=pb.createElement("div"),c=pb.createElement("div"),b.style.cssText=j,d.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",fb.swap(d,null!=d.style.zoom?{zoom:1}:{},function(){e=4===c.offsetWidth
}),f=!0,g=!1,h=!0,a.getComputedStyle&&(g="1%"!==(a.getComputedStyle(c,null)||{}).top,f="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),d.removeChild(b),c=d=null)
}var c,d,e,f,g,h,i=pb.createElement("div"),j="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",k="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=i.getElementsByTagName("a")[0],c.style.cssText="float:left;opacity:.5",db.opacity=/^0.5/.test(c.style.opacity),db.cssFloat=!!c.style.cssFloat,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",db.clearCloneStyle="content-box"===i.style.backgroundClip,c=i=null,fb.extend(db,{reliableHiddenOffsets:function(){if(null!=d)return d;
var a,b,c,e=pb.createElement("div"),f=pb.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=pb.createElement("div"),a.style.cssText=j,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",d=c&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,d
},boxSizing:function(){return null==e&&b(),e},boxSizingReliable:function(){return null==f&&b(),f
},pixelPosition:function(){return null==g&&b(),g},reliableMarginRight:function(){var b,c,d,e;
if(null==h&&a.getComputedStyle){if(b=pb.getElementsByTagName("body")[0],!b)return;
c=pb.createElement("div"),d=pb.createElement("div"),c.style.cssText=j,b.appendChild(c).appendChild(d),e=d.appendChild(pb.createElement("div")),e.style.cssText=d.style.cssText=k,e.style.marginRight=e.style.width="0",d.style.width="1px",h=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)
}return h}})}(),fb.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];
e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var gc=/alpha\([^)]*\)/i,hc=/opacity\s*=\s*([^)]*)/,ic=/^(none|table(?!-c[ea]).+)/,jc=new RegExp("^("+Bb+")(.*)$","i"),kc=new RegExp("^([+-])=("+Bb+")","i"),lc={position:"absolute",visibility:"hidden",display:"block"},mc={letterSpacing:0,fontWeight:400},nc=["Webkit","O","Moz","ms"];
fb.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=cc(a,"opacity");return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":db.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=fb.camelCase(b),i=a.style;
if(b=fb.cssProps[h]||(fb.cssProps[h]=B(i,h)),g=fb.cssHooks[b]||fb.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];
if(f=typeof c,"string"===f&&(e=kc.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(fb.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||fb.cssNumber[h]||(c+="px"),db.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c
}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=fb.camelCase(b);return b=fb.cssProps[h]||(fb.cssProps[h]=B(a.style,h)),g=fb.cssHooks[b]||fb.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=cc(a,b,d)),"normal"===f&&b in mc&&(f=mc[b]),""===c||c?(e=parseFloat(f),c===!0||fb.isNumeric(e)?e||0:f):f
}}),fb.each(["height","width"],function(a,b){fb.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&ic.test(fb.css(a,"display"))?fb.swap(a,lc,function(){return F(a,b,d)
}):F(a,b,d):void 0},set:function(a,c,d){var e=d&&bc(a);return D(a,c,d?E(a,b,d,db.boxSizing()&&"border-box"===fb.css(a,"boxSizing",!1,e),e):0)
}}}),db.opacity||(fb.cssHooks.opacity={get:function(a,b){return hc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=fb.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===fb.trim(f.replace(gc,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=gc.test(f)?f.replace(gc,e):f+" "+e)
}}),fb.cssHooks.marginRight=A(db.reliableMarginRight,function(a,b){return b?fb.swap(a,{display:"inline-block"},cc,[a,"marginRight"]):void 0
}),fb.each({margin:"",padding:"",border:"Width"},function(a,b){fb.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+Cb[d]+b]=f[d]||f[d-2]||f[0];
return e}},dc.test(a)||(fb.cssHooks[a+b].set=D)}),fb.fn.extend({css:function(a,b){return Eb(this,function(a,b,c){var d,e,f={},g=0;
if(fb.isArray(b)){for(d=bc(a),e=b.length;e>g;g++)f[b[g]]=fb.css(a,b[g],!1,d);return f
}return void 0!==c?fb.style(a,b,c):fb.css(a,b)},a,b,arguments.length>1)},show:function(){return C(this,!0)
},hide:function(){return C(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Db(this)?fb(this).show():fb(this).hide()
})}}),fb.Tween=G,G.prototype={constructor:G,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(fb.cssNumber[c]?"":"px")
},cur:function(){var a=G.propHooks[this.prop];return a&&a.get?a.get(this):G.propHooks._default.get(this)
},run:function(a){var b,c=G.propHooks[this.prop];return this.pos=b=this.options.duration?fb.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):G.propHooks._default.set(this),this
}},G.prototype.init.prototype=G.prototype,G.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=fb.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){fb.fx.step[a.prop]?fb.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[fb.cssProps[a.prop]]||fb.cssHooks[a.prop])?fb.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},fb.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2
}},fb.fx=G.prototype.init,fb.fx.step={};var oc,pc,qc=/^(?:toggle|show|hide)$/,rc=new RegExp("^(?:([+-])=|)("+Bb+")([a-z%]*)$","i"),sc=/queueHooks$/,tc=[K],uc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=rc.exec(b),f=e&&e[3]||(fb.cssNumber[a]?"":"px"),g=(fb.cssNumber[a]||"px"!==f&&+d)&&rc.exec(fb.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,fb.style(c.elem,a,g+f);
while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};fb.Animation=fb.extend(M,{tweener:function(a,b){fb.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;e>d;d++)c=a[d],uc[c]=uc[c]||[],uc[c].unshift(b)},prefilter:function(a,b){b?tc.unshift(a):tc.push(a)
}}),fb.speed=function(a,b,c){var d=a&&"object"==typeof a?fb.extend({},a):{complete:c||!c&&b||fb.isFunction(a)&&a,duration:a,easing:c&&b||b&&!fb.isFunction(b)&&b};
return d.duration=fb.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in fb.fx.speeds?fb.fx.speeds[d.duration]:fb.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){fb.isFunction(d.old)&&d.old.call(this),d.queue&&fb.dequeue(this,d.queue)
},d},fb.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Db).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=fb.isEmptyObject(a),f=fb.speed(b,c,d),g=function(){var b=M(this,fb.extend({},a),f);
(e||fb._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=fb.timers,g=fb._data(this);
if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&sc.test(e)&&d(g[e]);
for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
(b||!c)&&fb.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=fb._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=fb.timers,g=d?d.length:0;
for(c.finish=!0,fb.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),fb.each(["toggle","show","hide"],function(a,b){var c=fb.fn[b];
fb.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(I(b,!0),a,d,e)
}}),fb.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){fb.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}}),fb.timers=[],fb.fx.tick=function(){var a,b=fb.timers,c=0;for(oc=fb.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);
b.length||fb.fx.stop(),oc=void 0},fb.fx.timer=function(a){fb.timers.push(a),a()?fb.fx.start():fb.timers.pop()
},fb.fx.interval=13,fb.fx.start=function(){pc||(pc=setInterval(fb.fx.tick,fb.fx.interval))
},fb.fx.stop=function(){clearInterval(pc),pc=null},fb.fx.speeds={slow:600,fast:200,_default:400},fb.fn.delay=function(a,b){return a=fb.fx?fb.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=pb.createElement("div");
e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=pb.createElement("select"),d=c.appendChild(pb.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",db.getSetAttribute="t"!==e.className,db.style=/top/.test(a.getAttribute("style")),db.hrefNormalized="/a"===a.getAttribute("href"),db.checkOn=!!b.value,db.optSelected=d.selected,db.enctype=!!pb.createElement("form").enctype,c.disabled=!0,db.optDisabled=!d.disabled,b=pb.createElement("input"),b.setAttribute("value",""),db.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),db.radioValue="t"===b.value,a=b=c=d=e=null
}();var vc=/\r/g;fb.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=fb.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,fb(this).val()):a,null==e?e="":"number"==typeof e?e+="":fb.isArray(e)&&(e=fb.map(e,function(a){return null==a?"":a+""
})),b=fb.valHooks[this.type]||fb.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))
});if(e)return b=fb.valHooks[e.type]||fb.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(vc,""):null==c?"":c)
}}}),fb.extend({valHooks:{option:{get:function(a){var b=fb.find.attr(a,"value");return null!=b?b:fb.text(a)
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(db.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&fb.nodeName(c.parentNode,"optgroup"))){if(b=fb(c).val(),f)return b;
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=fb.makeArray(b),g=e.length;g--;)if(d=e[g],fb.inArray(fb.valHooks.option.get(d),f)>=0)try{d.selected=c=!0
}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),fb.each(["radio","checkbox"],function(){fb.valHooks[this]={set:function(a,b){return fb.isArray(b)?a.checked=fb.inArray(fb(a).val(),b)>=0:void 0
}},db.checkOn||(fb.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})});var wc,xc,yc=fb.expr.attrHandle,zc=/^(?:checked|selected)$/i,Ac=db.getSetAttribute,Bc=db.input;
fb.fn.extend({attr:function(a,b){return Eb(this,fb.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){fb.removeAttr(this,a)
})}}),fb.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===yb?fb.prop(a,b,c):(1===f&&fb.isXMLDoc(a)||(b=b.toLowerCase(),d=fb.attrHooks[b]||(fb.expr.match.bool.test(b)?xc:wc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=fb.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void fb.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(ub);if(f&&1===a.nodeType)for(;c=f[e++];)d=fb.propFix[c]||c,fb.expr.match.bool.test(c)?Bc&&Ac||!zc.test(c)?a[d]=!1:a[fb.camelCase("default-"+c)]=a[d]=!1:fb.attr(a,c,""),a.removeAttribute(Ac?c:d)
},attrHooks:{type:{set:function(a,b){if(!db.radioValue&&"radio"===b&&fb.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),xc={set:function(a,b,c){return b===!1?fb.removeAttr(a,c):Bc&&Ac||!zc.test(c)?a.setAttribute(!Ac&&fb.propFix[c]||c,c):a[fb.camelCase("default-"+c)]=a[c]=!0,c
}},fb.each(fb.expr.match.bool.source.match(/\w+/g),function(a,b){var c=yc[b]||fb.find.attr;
yc[b]=Bc&&Ac||!zc.test(b)?function(a,b,d){var e,f;return d||(f=yc[b],yc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,yc[b]=f),e
}:function(a,b,c){return c?void 0:a[fb.camelCase("default-"+b)]?b.toLowerCase():null
}}),Bc&&Ac||(fb.attrHooks.value={set:function(a,b,c){return fb.nodeName(a,"input")?void(a.defaultValue=b):wc&&wc.set(a,b,c)
}}),Ac||(wc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},yc.id=yc.name=yc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},fb.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0
},set:wc.set},fb.attrHooks.contenteditable={set:function(a,b,c){wc.set(a,""===b?!1:b,c)
}},fb.each(["width","height"],function(a,b){fb.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}})),db.style||(fb.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""}});var Cc=/^(?:input|select|textarea|button|object)$/i,Dc=/^(?:a|area)$/i;
fb.fn.extend({prop:function(a,b){return Eb(this,fb.prop,a,b,arguments.length>1)},removeProp:function(a){return a=fb.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})}}),fb.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!fb.isXMLDoc(a),f&&(b=fb.propFix[b]||b,e=fb.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]
},propHooks:{tabIndex:{get:function(a){var b=fb.find.attr(a,"tabindex");return b?parseInt(b,10):Cc.test(a.nodeName)||Dc.test(a.nodeName)&&a.href?0:-1
}}}}),db.hrefNormalized||fb.each(["href","src"],function(a,b){fb.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}}),db.optSelected||(fb.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}}),fb.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){fb.propFix[this.toLowerCase()]=this
}),db.enctype||(fb.propFix.enctype="encoding");var Ec=/[\t\r\n\f]/g;fb.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;
if(fb.isFunction(a))return this.each(function(b){fb(this).addClass(a.call(this,b,this.className))
});if(j)for(b=(a||"").match(ub)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Ec," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");
g=fb.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;
if(fb.isFunction(a))return this.each(function(b){fb(this).removeClass(a.call(this,b,this.className))
});if(j)for(b=(a||"").match(ub)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Ec," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");
g=a?fb.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(fb.isFunction(a)?function(c){fb(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c)for(var b,d=0,e=fb(this),f=a.match(ub)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);
else(c===yb||"boolean"===c)&&(this.className&&fb._data(this,"__className__",this.className),this.className=this.className||a===!1?"":fb._data(this,"__className__")||"")
})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Ec," ").indexOf(b)>=0)return!0;
return!1}}),fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){fb.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}}),fb.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});var Fc=fb.now(),Gc=/\?/,Hc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
fb.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=fb.trim(b+"");
return e&&!fb.trim(e.replace(Hc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():fb.error("Invalid JSON: "+b)},fb.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||fb.error("Invalid XML: "+b),c
};var Ic,Jc,Kc=/#.*$/,Lc=/([?&])_=[^&]*/,Mc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Oc=/^(?:GET|HEAD)$/,Pc=/^\/\//,Qc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Rc={},Sc={},Tc="*/".concat("*");
try{Jc=location.href}catch(Uc){Jc=pb.createElement("a"),Jc.href="",Jc=Jc.href}Ic=Qc.exec(Jc.toLowerCase())||[],fb.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Jc,type:"GET",isLocal:Nc.test(Ic[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Tc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":fb.parseJSON,"text xml":fb.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?P(P(a,fb.ajaxSettings),b):P(fb.ajaxSettings,a)
},ajaxPrefilter:N(Rc),ajaxTransport:N(Sc),ajax:function(a,b){function c(a,b,c,d){var e,k,r,s,u,w=b;
2!==t&&(t=2,h&&clearTimeout(h),j=void 0,g=d||"",v.readyState=a>0?4:0,e=a>=200&&300>a||304===a,c&&(s=Q(l,v,c)),s=R(l,s,v,e),e?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(fb.lastModified[f]=u),u=v.getResponseHeader("etag"),u&&(fb.etag[f]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,e=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",e?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,i&&n.trigger(e?"ajaxSuccess":"ajaxError",[v,l,e?k:r]),p.fireWith(m,[v,w]),i&&(n.trigger("ajaxComplete",[v,l]),--fb.active||fb.event.trigger("ajaxStop")))
}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=fb.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?fb(m):fb.event,o=fb.Deferred(),p=fb.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!k)for(k={};b=Mc.exec(g);)k[b[1].toLowerCase()]=b[2];b=k[a.toLowerCase()]
}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this
},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);
return this},abort:function(a){var b=a||u;return j&&j.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||Jc)+"").replace(Kc,"").replace(Pc,Ic[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=fb.trim(l.dataType||"*").toLowerCase().match(ub)||[""],null==l.crossDomain&&(d=Qc.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Ic[1]&&d[2]===Ic[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Ic[3]||("http:"===Ic[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=fb.param(l.data,l.traditional)),O(Rc,l,b,v),2===t)return v;
i=l.global,i&&0===fb.active++&&fb.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Oc.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Gc.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Lc.test(f)?f.replace(Lc,"$1_="+Fc++):f+(Gc.test(f)?"&":"?")+"_="+Fc++)),l.ifModified&&(fb.lastModified[f]&&v.setRequestHeader("If-Modified-Since",fb.lastModified[f]),fb.etag[f]&&v.setRequestHeader("If-None-Match",fb.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Tc+"; q=0.01":""):l.accepts["*"]);
for(e in l.headers)v.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();
u="abort";for(e in{success:1,error:1,complete:1})v[e](l[e]);if(j=O(Sc,l,b,v)){v.readyState=1,i&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")
},l.timeout));try{t=1,j.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");
return v},getJSON:function(a,b,c){return fb.get(a,b,c,"json")},getScript:function(a,b){return fb.get(a,void 0,b,"script")
}}),fb.each(["get","post"],function(a,b){fb[b]=function(a,c,d,e){return fb.isFunction(c)&&(e=e||d,d=c,c=void 0),fb.ajax({url:a,type:b,dataType:e,data:c,success:d})
}}),fb.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){fb.fn[b]=function(a){return this.on(b,a)
}}),fb._evalUrl=function(a){return fb.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},fb.fn.extend({wrapAll:function(a){if(fb.isFunction(a))return this.each(function(b){fb(this).wrapAll(a.call(this,b))
});if(this[0]){var b=fb(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;
return a}).append(this)}return this},wrapInner:function(a){return this.each(fb.isFunction(a)?function(b){fb(this).wrapInner(a.call(this,b))
}:function(){var b=fb(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=fb.isFunction(a);
return this.each(function(c){fb(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){fb.nodeName(this,"body")||fb(this).replaceWith(this.childNodes)
}).end()}}),fb.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!db.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||fb.css(a,"display"))
},fb.expr.filters.visible=function(a){return!fb.expr.filters.hidden(a)};var Vc=/%20/g,Wc=/\[\]$/,Xc=/\r?\n/g,Yc=/^(?:submit|button|image|reset|file)$/i,Zc=/^(?:input|select|textarea|keygen)/i;
fb.param=function(a,b){var c,d=[],e=function(a,b){b=fb.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};if(void 0===b&&(b=fb.ajaxSettings&&fb.ajaxSettings.traditional),fb.isArray(a)||a.jquery&&!fb.isPlainObject(a))fb.each(a,function(){e(this.name,this.value)
});else for(c in a)S(c,a[c],b,e);return d.join("&").replace(Vc,"+")},fb.fn.extend({serialize:function(){return fb.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=fb.prop(this,"elements");
return a?fb.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!fb(this).is(":disabled")&&Zc.test(this.nodeName)&&!Yc.test(a)&&(this.checked||!Fb.test(a))
}).map(function(a,b){var c=fb(this).val();return null==c?null:fb.isArray(c)?fb.map(c,function(a){return{name:b.name,value:a.replace(Xc,"\r\n")}
}):{name:b.name,value:c.replace(Xc,"\r\n")}}).get()}}),fb.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&T()||U()
}:T;var $c=0,_c={},ad=fb.ajaxSettings.xhr();a.ActiveXObject&&fb(a).on("unload",function(){for(var a in _c)_c[a](void 0,!0)
}),db.cors=!!ad&&"withCredentials"in ad,ad=db.ajax=!!ad,ad&&fb.ajaxTransport(function(a){if(!a.crossDomain||db.cors){var b;
return{send:function(c,d){var e,f=a.xhr(),g=++$c;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];
a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;
if(b&&(e||4===f.readyState))if(delete _c[g],b=void 0,f.onreadystatechange=fb.noop,e)4!==f.readyState&&f.abort();
else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText
}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())
},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=_c[g]=b:b()},abort:function(){b&&b(void 0,!0)
}}}}),fb.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return fb.globalEval(a),a
}}}),fb.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),fb.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=pb.head||fb("head")[0]||pb.documentElement;
return{send:function(d,e){b=pb.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))
},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var bd=[],cd=/(=)\?(?=&|$)|\?\?/;
fb.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=bd.pop()||fb.expando+"_"+Fc++;
return this[a]=!0,a}}),fb.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(cd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&cd.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=fb.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(cd,"$1"+e):b.jsonp!==!1&&(b.url+=(Gc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||fb.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,bd.push(e)),g&&fb.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0}),fb.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;
"boolean"==typeof b&&(c=b,b=!1),b=b||pb;var d=mb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=fb.buildFragment([a],b,e),e&&e.length&&fb(e).remove(),fb.merge([],d.childNodes))
};var dd=fb.fn.load;fb.fn.load=function(a,b,c){if("string"!=typeof a&&dd)return dd.apply(this,arguments);
var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),fb.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&fb.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?fb("<div>").append(fb.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},fb.expr.filters.animated=function(a){return fb.grep(fb.timers,function(b){return a===b.elem
}).length};var ed=a.document.documentElement;fb.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=fb.css(a,"position"),l=fb(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=fb.css(a,"top"),i=fb.css(a,"left"),j=("absolute"===k||"fixed"===k)&&fb.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),fb.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)
}},fb.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){fb.offset.setOffset(this,a,b)
});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,fb.contains(b,e)?(typeof e.getBoundingClientRect!==yb&&(d=e.getBoundingClientRect()),c=V(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===fb.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),fb.nodeName(a[0],"html")||(c=a.offset()),c.top+=fb.css(a[0],"borderTopWidth",!0),c.left+=fb.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-fb.css(d,"marginTop",!0),left:b.left-c.left-fb.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||ed;a&&!fb.nodeName(a,"html")&&"static"===fb.css(a,"position");)a=a.offsetParent;
return a||ed})}}),fb.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
fb.fn[a]=function(d){return Eb(this,function(a,d,e){var f=V(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?fb(f).scrollLeft():e,c?e:fb(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)}}),fb.each(["top","left"],function(a,b){fb.cssHooks[b]=A(db.pixelPosition,function(a,c){return c?(c=cc(a,b),ec.test(c)?fb(a).position()[b]+"px":c):void 0
})}),fb.each({Height:"height",Width:"width"},function(a,b){fb.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){fb.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return Eb(this,function(b,c,d){var e;return fb.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?fb.css(b,c,g):fb.style(b,c,d,g)
},b,f?d:void 0,f,null)}})}),fb.fn.size=function(){return this.length},fb.fn.andSelf=fb.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return fb
});var fd=a.jQuery,gd=a.$;return fb.noConflict=function(b){return a.$===fb&&(a.$=gd),b&&a.jQuery===fb&&(a.jQuery=fd),fb
},typeof b===yb&&(a.jQuery=a.$=fb),fb}),"undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");
+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;
a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)
};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";
var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()
}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));
var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())
};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");
e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this
},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";
var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1
};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();
b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))
},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');
if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")
}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;
e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this
},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);
c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";
var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))
};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this
},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)
},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)
}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;
if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;
var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);
b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")
},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)
};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;
e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()
})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this
},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");
g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()
}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);
b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()
};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");
return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");
if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");
if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)
}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;
var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));
this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])
}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");
if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)
}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);
!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()
})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this
},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);
g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)
})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};
d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))
})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));
var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)
};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");
if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);
var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;
f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);
if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");
if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);
if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()
}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");
d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this
},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()
}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)
}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)
},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});
this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");
c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();
var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)
}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())
},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()
},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()
},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;
this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")
})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))
},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;
d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()
};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);
f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)
})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this
},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());
c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()
})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")
}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")
})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)
};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);
for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));
else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";
this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))
}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b
},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)
}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()
},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()
},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;
var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");
var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);
g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);
var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;
e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)
}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;
var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()
}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);
isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})
}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;
b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")
}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")
},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")
},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)
}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)
},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")
},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];
return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())
},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}
},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)
},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)
},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)
},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1
},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;
(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())
})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this
}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)
};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS
},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();
a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()
},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;
return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)
},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip
};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;
(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())
})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this
}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);
this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()
}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";
this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);
return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null
}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])
})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;
if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);
for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");
var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")
};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;
e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this
},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);
b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)
};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");
if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});
if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})
})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()
}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")
};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");
e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this
},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")
})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;
this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)
},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;
"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));
var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;
if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");
this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))
}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;
e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this
},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();
c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)
})})}(jQuery),function(){function a(a,b,c){for(var d=(c||0)-1,e=a?a.length:0;++d<e;)if(a[d]===b)return d;
return-1}function b(b,c){var d=typeof c;if(b=b.cache,"boolean"==d||null==c)return b[c]?0:-1;
"number"!=d&&"string"!=d&&(d="object");var e="number"==d?c:u+c;return b=(b=b[d])&&b[e],"object"==d?b&&a(b,c)>-1?0:-1:b?0:-1
}function c(a){var b=this.cache,c=typeof a;if("boolean"==c||null==a)b[a]=!0;else{"number"!=c&&"string"!=c&&(c="object");
var d="number"==c?a:u+a,e=b[c]||(b[c]={});"object"==c?(e[d]||(e[d]=[])).push(a):e[d]=!0
}}function d(a){return a.charCodeAt(0)}function e(a,b){for(var c=a.criteria,d=b.criteria,e=-1,f=c.length;++e<f;){var g=c[e],h=d[e];
if(g!==h){if(g>h||"undefined"==typeof g)return 1;if(h>g||"undefined"==typeof h)return-1
}}return a.index-b.index}function f(a){var b=-1,d=a.length,e=a[0],f=a[d/2|0],g=a[d-1];
if(e&&"object"==typeof e&&f&&"object"==typeof f&&g&&"object"==typeof g)return!1;var h=i();
h["false"]=h["null"]=h["true"]=h.undefined=!1;var j=i();for(j.array=a,j.cache=h,j.push=c;++b<d;)j.push(a[b]);
return j}function g(a){return"\\"+_[a]}function h(){return q.pop()||[]}function i(){return r.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}
}function j(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function l(a){a.length=0,q.length<w&&q.push(a)
}function m(a){var b=a.cache;b&&m(b),a.array=a.cache=a.criteria=a.object=a.number=a.string=a.value=null,r.length<w&&r.push(a)
}function n(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);for(var d=-1,e=c-b||0,f=Array(0>e?0:e);++d<e;)f[d]=a[b+d];
return f}function o(c){function q(a){return a&&"object"==typeof a&&!ke(a)&&Rd.call(a,"__wrapped__")?a:new r(a)
}function r(a,b){this.__chain__=!!b,this.__wrapped__=a}function w(a){function b(){if(d){var a=n(d);
Sd.apply(a,arguments)}if(this instanceof b){var f=bb(c.prototype),g=c.apply(f,a||arguments);
return Lb(g)?g:f}return c.apply(e,a||arguments)}var c=a[0],d=a[2],e=a[4];return je(b,a),b
}function _(a,b,c,d,e){if(c){var f=c(a);if("undefined"!=typeof f)return f}var g=Lb(a);
if(!g)return a;var i=Kd.call(a);if(!W[i]||!he.nodeClass&&j(a))return a;var k=fe[i];
switch(i){case O:case P:return new k(+a);case S:case V:return new k(a);case U:return f=k(a.source,C.exec(a)),f.lastIndex=a.lastIndex,f
}var m=ke(a);if(b){var o=!d;d||(d=h()),e||(e=h());for(var p=d.length;p--;)if(d[p]==a)return e[p];
f=m?k(a.length):{}}else f=m?n(a):ve({},a);return m&&(Rd.call(a,"index")&&(f.index=a.index),Rd.call(a,"input")&&(f.input=a.input)),b?(d.push(a),e.push(f),(m?ue:ye)(a,function(a,g){f[g]=_(a,b,c,d,e)
}),o&&(l(d),l(e)),f):f}function bb(a){return Lb(a)?Yd(a):{}}function cb(a,b,c){if("function"!=typeof a)return ed;
if("undefined"==typeof b||!("prototype"in a))return a;var d=a.__bindData__;if("undefined"==typeof d&&(he.funcNames&&(d=!a.name),d=d||!he.funcDecomp,!d)){var e=Pd.call(a);
he.funcNames||(d=!D.test(e)),d||(d=H.test(e),je(a,d))}if(d===!1||d!==!0&&1&d[1])return a;
switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)
};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)
}}return Pc(a,b)}function db(a){function b(){var a=i?g:this;if(e){var o=n(e);Sd.apply(o,arguments)
}if((f||k)&&(o||(o=n(arguments)),f&&Sd.apply(o,f),k&&o.length<h))return d|=16,db([c,l?d:-4&d,o,null,g,h]);
if(o||(o=arguments),j&&(c=a[m]),this instanceof b){a=bb(c.prototype);var p=c.apply(a,o);
return Lb(p)?p:a}return c.apply(a,o)}var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=1&d,j=2&d,k=4&d,l=8&d,m=c;
return je(b,a),b}function eb(c,d){var e=-1,g=pb(),h=c?c.length:0,i=h>=v&&g===a,j=[];
if(i){var k=f(d);k?(g=b,d=k):i=!1}for(;++e<h;){var l=c[e];g(d,l)<0&&j.push(l)}return i&&m(d),j
}function gb(a,b,c,d){for(var e=(d||0)-1,f=a?a.length:0,g=[];++e<f;){var h=a[e];if(h&&"object"==typeof h&&"number"==typeof h.length&&(ke(h)||tb(h))){b||(h=gb(h,b,c));
var i=-1,j=h.length,k=g.length;for(g.length+=j;++i<j;)g[k++]=h[i]}else c||g.push(h)
}return g}function hb(a,b,c,d,e,f){if(c){var g=c(a,b);if("undefined"!=typeof g)return!!g
}if(a===b)return 0!==a||1/a==1/b;var i=typeof a,k=typeof b;if(!(a!==a||a&&$[i]||b&&$[k]))return!1;
if(null==a||null==b)return a===b;var m=Kd.call(a),n=Kd.call(b);if(m==M&&(m=T),n==M&&(n=T),m!=n)return!1;
switch(m){case O:case P:return+a==+b;case S:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;
case U:case V:return a==Dd(b)}var o=m==N;if(!o){var p=Rd.call(a,"__wrapped__"),q=Rd.call(b,"__wrapped__");
if(p||q)return hb(p?a.__wrapped__:a,q?b.__wrapped__:b,c,d,e,f);if(m!=T||!he.nodeClass&&(j(a)||j(b)))return!1;
var r=!he.argsObject&&tb(a)?Bd:a.constructor,s=!he.argsObject&&tb(b)?Bd:b.constructor;
if(r!=s&&!(Kb(r)&&r instanceof r&&Kb(s)&&s instanceof s)&&"constructor"in a&&"constructor"in b)return!1
}var t=!e;e||(e=h()),f||(f=h());for(var u=e.length;u--;)if(e[u]==a)return f[u]==b;
var v=0;if(g=!0,e.push(a),f.push(b),o){if(u=a.length,v=b.length,g=v==u,g||d)for(;v--;){var w=u,x=b[v];
if(d)for(;w--&&!(g=hb(a[w],x,c,d,e,f)););else if(!(g=hb(a[v],x,c,d,e,f)))break}}else xe(b,function(b,h,i){return Rd.call(i,h)?(v++,g=Rd.call(a,h)&&hb(a[h],b,c,d,e,f)):void 0
}),g&&!d&&xe(a,function(a,b,c){return Rd.call(c,b)?g=--v>-1:void 0});return e.pop(),f.pop(),t&&(l(e),l(f)),g
}function ib(a,b,c,d,e){(ke(b)?dc:ye)(b,function(b,f){var g,h,i=b,j=a[f];if(b&&((h=ke(b))||ze(b))){for(var k=d.length;k--;)if(g=d[k]==b){j=e[k];
break}if(!g){var l;c&&(i=c(j,b),(l="undefined"!=typeof i)&&(j=i)),l||(j=h?ke(j)?j:[]:ze(j)?j:{}),d.push(b),e.push(j),l||ib(j,b,c,d,e)
}}else c&&(i=c(j,b),"undefined"==typeof i&&(i=b)),"undefined"!=typeof i&&(j=i);a[f]=j
})}function jb(a,b){return a+Od(ee()*(b-a+1))}function kb(c,d,e){var g=-1,i=pb(),j=c?c.length:0,k=[],n=!d&&j>=v&&i===a,o=e||n?h():k;
if(n){var p=f(o);i=b,o=p}for(;++g<j;){var q=c[g],r=e?e(q,g,c):q;(d?!g||o[o.length-1]!==r:i(o,r)<0)&&((e||n)&&o.push(r),k.push(q))
}return n?(l(o.array),m(o)):e&&l(o),k}function lb(a){return function(b,c,d){var e={};
if(c=q.createCallback(c,d,3),ke(b))for(var f=-1,g=b.length;++f<g;){var h=b[f];a(e,h,c(h,f,b),b)
}else ue(b,function(b,d,f){a(e,b,c(b,d,f),f)});return e}}function mb(a,b,c,d,e,f){var g=1&b,h=2&b,i=4&b,j=16&b,k=32&b;
if(!h&&!Kb(a))throw new Ed;j&&!c.length&&(b&=-17,j=c=!1),k&&!d.length&&(b&=-33,k=d=!1);
var l=a&&a.__bindData__;if(l&&l!==!0)return l=n(l),l[2]&&(l[2]=n(l[2])),l[3]&&(l[3]=n(l[3])),!g||1&l[1]||(l[4]=e),!g&&1&l[1]&&(b|=8),!i||4&l[1]||(l[5]=f),j&&Sd.apply(l[2]||(l[2]=[]),c),k&&Wd.apply(l[3]||(l[3]=[]),d),l[1]|=b,mb.apply(null,l);
var m=1==b||17===b?w:db;return m([a,b,c,d,e,f])}function nb(){Z.shadowedProps=K,Z.array=Z.bottom=Z.loop=Z.top="",Z.init="iterable",Z.useHas=!0;
for(var a,b=0;a=arguments[b];b++)for(var c in a)Z[c]=a[c];var d=Z.args;Z.firstArg=/^[^,]+/.exec(d)[0];
var e=yd("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+d+") {\n"+ie(Z)+"\n}");
return e(cb,Q,Gd,Rd,t,tb,ke,Qb,Z.keys,Hd,$,ge,V,Id,Kd)}function ob(a){return qe[a]
}function pb(){var b=(b=q.indexOf)===yc?a:b;return b}function qb(a){return"function"==typeof a&&Ld.test(a)
}function rb(a){var b,c;return!a||Kd.call(a)!=T||(b=a.constructor,Kb(b)&&!(b instanceof b))||!he.argsClass&&tb(a)||!he.nodeClass&&j(a)?!1:he.ownLast?(xe(a,function(a,b,d){return c=Rd.call(d,b),!1
}),c!==!1):(xe(a,function(a,b){c=b}),"undefined"==typeof c||Rd.call(a,c))}function sb(a){return re[a]
}function tb(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Kd.call(a)==M||!1
}function ub(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c=b,b=!1),_(a,b,"function"==typeof c&&cb(c,d,1))
}function vb(a,b,c){return _(a,!0,"function"==typeof b&&cb(b,c,1))}function wb(a,b){var c=bb(a);
return b?ve(c,b):c}function xb(a,b,c){var d;return b=q.createCallback(b,c,3),ye(a,function(a,c,e){return b(a,c,e)?(d=c,!1):void 0
}),d}function yb(a,b,c){var d;return b=q.createCallback(b,c,3),Ab(a,function(a,c,e){return b(a,c,e)?(d=c,!1):void 0
}),d}function zb(a,b,c){var d=[];xe(a,function(a,b){d.push(b,a)});var e=d.length;
for(b=cb(b,c,3);e--&&b(d[e--],d[e],a)!==!1;);return a}function Ab(a,b,c){var d=me(a),e=d.length;
for(b=cb(b,c,3);e--;){var f=d[e];if(b(a[f],f,a)===!1)break}return a}function Bb(a){var b=[];
return xe(a,function(a,c){Kb(a)&&b.push(c)}),b.sort()}function Cb(a,b){return a?Rd.call(a,b):!1
}function Db(a){for(var b=-1,c=me(a),d=c.length,e={};++b<d;){var f=c[b];e[a[f]]=f
}return e}function Eb(a){return a===!0||a===!1||a&&"object"==typeof a&&Kd.call(a)==O||!1
}function Fb(a){return a&&"object"==typeof a&&Kd.call(a)==P||!1}function Gb(a){return a&&1===a.nodeType||!1
}function Hb(a){var b=!0;if(!a)return b;var c=Kd.call(a),d=a.length;return c==N||c==V||(he.argsClass?c==M:tb(a))||c==T&&"number"==typeof d&&Kb(a.splice)?!d:(ye(a,function(){return b=!1
}),b)}function Ib(a,b,c,d){return hb(a,b,"function"==typeof c&&cb(c,d,2))}function Jb(a){return $d(a)&&!_d(parseFloat(a))
}function Kb(a){return"function"==typeof a}function Lb(a){return!(!a||!$[typeof a])
}function Mb(a){return Ob(a)&&a!=+a}function Nb(a){return null===a}function Ob(a){return"number"==typeof a||a&&"object"==typeof a&&Kd.call(a)==S||!1
}function Pb(a){return a&&$[typeof a]&&Kd.call(a)==U||!1}function Qb(a){return"string"==typeof a||a&&"object"==typeof a&&Kd.call(a)==V||!1
}function Rb(a){return"undefined"==typeof a}function Sb(a,b,c){var d={};return b=q.createCallback(b,c,3),ye(a,function(a,c,e){d[c]=b(a,c,e)
}),d}function Tb(a){var b=arguments,c=2;if(!Lb(a))return a;if("number"!=typeof b[2]&&(c=b.length),c>3&&"function"==typeof b[c-2])var d=cb(b[--c-1],b[c--],2);
else c>2&&"function"==typeof b[c-1]&&(d=b[--c]);for(var e=n(arguments,1,c),f=-1,g=h(),i=h();++f<c;)ib(a,e[f],d,g,i);
return l(g),l(i),a}function Ub(a,b,c){var d={};if("function"!=typeof b){var e=[];
xe(a,function(a,b){e.push(b)}),e=eb(e,gb(arguments,!0,!1,1));for(var f=-1,g=e.length;++f<g;){var h=e[f];
d[h]=a[h]}}else b=q.createCallback(b,c,3),xe(a,function(a,c,e){b(a,c,e)||(d[c]=a)
});return d}function Vb(a){for(var b=-1,c=me(a),d=c.length,e=ud(d);++b<d;){var f=c[b];
e[b]=[f,a[f]]}return e}function Wb(a,b,c){var d={};if("function"!=typeof b)for(var e=-1,f=gb(arguments,!0,!1,1),g=Lb(a)?f.length:0;++e<g;){var h=f[e];
h in a&&(d[h]=a[h])}else b=q.createCallback(b,c,3),xe(a,function(a,c,e){b(a,c,e)&&(d[c]=a)
});return d}function Xb(a,b,c,d){var e=ke(a);if(null==c)if(e)c=[];else{var f=a&&a.constructor,g=f&&f.prototype;
c=bb(g)}return b&&(b=q.createCallback(b,d,4),(e?ue:ye)(a,function(a,d,e){return b(c,a,d,e)
})),c}function Yb(a){for(var b=-1,c=me(a),d=c.length,e=ud(d);++b<d;)e[b]=a[c[b]];
return e}function Zb(a){var b=arguments,c=-1,d=gb(b,!0,!1,1),e=b[2]&&b[2][b[1]]===a?1:d.length,f=ud(e);
for(he.unindexedChars&&Qb(a)&&(a=a.split(""));++c<e;)f[c]=a[d[c]];return f}function $b(a,b,c){var d=-1,e=pb(),f=a?a.length:0,g=!1;
return c=(0>c?be(0,f+c):c)||0,ke(a)?g=e(a,b,c)>-1:"number"==typeof f?g=(Qb(a)?a.indexOf(b,c):e(a,b,c))>-1:ue(a,function(a){return++d>=c?!(g=a===b):void 0
}),g}function _b(a,b,c){var d=!0;if(b=q.createCallback(b,c,3),ke(a))for(var e=-1,f=a.length;++e<f&&(d=!!b(a[e],e,a)););else ue(a,function(a,c,e){return d=!!b(a,c,e)
});return d}function ac(a,b,c){var d=[];if(b=q.createCallback(b,c,3),ke(a))for(var e=-1,f=a.length;++e<f;){var g=a[e];
b(g,e,a)&&d.push(g)}else ue(a,function(a,c,e){b(a,c,e)&&d.push(a)});return d}function bc(a,b,c){if(b=q.createCallback(b,c,3),!ke(a)){var d;
return ue(a,function(a,c,e){return b(a,c,e)?(d=a,!1):void 0}),d}for(var e=-1,f=a.length;++e<f;){var g=a[e];
if(b(g,e,a))return g}}function cc(a,b,c){var d;return b=q.createCallback(b,c,3),ec(a,function(a,c,e){return b(a,c,e)?(d=a,!1):void 0
}),d}function dc(a,b,c){if(b&&"undefined"==typeof c&&ke(a))for(var d=-1,e=a.length;++d<e&&b(a[d],d,a)!==!1;);else ue(a,b,c);
return a}function ec(a,b,c){var d=a,e=a?a.length:0;if(b=b&&"undefined"==typeof c?b:cb(b,c,3),ke(a))for(;e--&&b(a[e],e,a)!==!1;);else{if("number"!=typeof e){var f=me(a);
e=f.length}else he.unindexedChars&&Qb(a)&&(d=a.split(""));ue(a,function(a,c,g){return c=f?f[--e]:--e,b(d[c],c,g)
})}return a}function fc(a,b){var c=n(arguments,2),d=-1,e="function"==typeof b,f=a?a.length:0,g=ud("number"==typeof f?f:0);
return dc(a,function(a){g[++d]=(e?b:a[b]).apply(a,c)}),g}function gc(a,b,c){var d=-1,e=a?a.length:0,f=ud("number"==typeof e?e:0);
if(b=q.createCallback(b,c,3),ke(a))for(;++d<e;)f[d]=b(a[d],d,a);else ue(a,function(a,c,e){f[++d]=b(a,c,e)
});return f}function hc(a,b,c){var e=-1/0,f=e;if("function"!=typeof b&&c&&c[b]===a&&(b=null),null==b&&ke(a))for(var g=-1,h=a.length;++g<h;){var i=a[g];
i>f&&(f=i)}else b=null==b&&Qb(a)?d:q.createCallback(b,c,3),ue(a,function(a,c,d){var g=b(a,c,d);
g>e&&(e=g,f=a)});return f}function ic(a,b,c){var e=1/0,f=e;if("function"!=typeof b&&c&&c[b]===a&&(b=null),null==b&&ke(a))for(var g=-1,h=a.length;++g<h;){var i=a[g];
f>i&&(f=i)}else b=null==b&&Qb(a)?d:q.createCallback(b,c,3),ue(a,function(a,c,d){var g=b(a,c,d);
e>g&&(e=g,f=a)});return f}function jc(a,b,c,d){var e=arguments.length<3;if(b=q.createCallback(b,d,4),ke(a)){var f=-1,g=a.length;
for(e&&(c=a[++f]);++f<g;)c=b(c,a[f],f,a)}else ue(a,function(a,d,f){c=e?(e=!1,a):b(c,a,d,f)
});return c}function kc(a,b,c,d){var e=arguments.length<3;return b=q.createCallback(b,d,4),ec(a,function(a,d,f){c=e?(e=!1,a):b(c,a,d,f)
}),c}function lc(a,b,c){return b=q.createCallback(b,c,3),ac(a,function(a,c,d){return!b(a,c,d)
})}function mc(a,b,c){if(a&&"number"!=typeof a.length?a=Yb(a):he.unindexedChars&&Qb(a)&&(a=a.split("")),null==b||c)return a?a[jb(0,a.length-1)]:p;
var d=nc(a);return d.length=ce(be(0,b),d.length),d}function nc(a){var b=-1,c=a?a.length:0,d=ud("number"==typeof c?c:0);
return dc(a,function(a){var c=jb(0,++b);d[b]=d[c],d[c]=a}),d}function oc(a){var b=a?a.length:0;
return"number"==typeof b?b:me(a).length}function pc(a,b,c){var d;if(b=q.createCallback(b,c,3),ke(a))for(var e=-1,f=a.length;++e<f&&!(d=b(a[e],e,a)););else ue(a,function(a,c,e){return!(d=b(a,c,e))
});return!!d}function qc(a,b,c){var d=-1,f=ke(b),g=a?a.length:0,j=ud("number"==typeof g?g:0);
for(f||(b=q.createCallback(b,c,3)),dc(a,function(a,c,e){var g=j[++d]=i();f?g.criteria=gc(b,function(b){return a[b]
}):(g.criteria=h())[0]=b(a,c,e),g.index=d,g.value=a}),g=j.length,j.sort(e);g--;){var k=j[g];
j[g]=k.value,f||l(k.criteria),m(k)}return j}function rc(a){return a&&"number"==typeof a.length?he.unindexedChars&&Qb(a)?a.split(""):n(a):Yb(a)
}function sc(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d
}function tc(a){return eb(a,gb(arguments,!0,!0,1))}function uc(a,b,c){var d=-1,e=a?a.length:0;
for(b=q.createCallback(b,c,3);++d<e;)if(b(a[d],d,a))return d;return-1}function vc(a,b,c){var d=a?a.length:0;
for(b=q.createCallback(b,c,3);d--;)if(b(a[d],d,a))return d;return-1}function wc(a,b,c){var d=0,e=a?a.length:0;
if("number"!=typeof b&&null!=b){var f=-1;for(b=q.createCallback(b,c,3);++f<e&&b(a[f],f,a);)d++
}else if(d=b,null==d||c)return a?a[0]:p;return n(a,0,ce(be(0,d),e))}function xc(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c="function"!=typeof b&&d&&d[b]===a?null:b,b=!1),null!=c&&(a=gc(a,c,d)),gb(a,b)
}function yc(b,c,d){if("number"==typeof d){var e=b?b.length:0;d=0>d?be(0,e+d):d||0
}else if(d){var f=Hc(b,c);return b[f]===c?f:-1}return a(b,c,d)}function zc(a,b,c){var d=0,e=a?a.length:0;
if("number"!=typeof b&&null!=b){var f=e;for(b=q.createCallback(b,c,3);f--&&b(a[f],f,a);)d++
}else d=null==b||c?1:b||d;return n(a,0,ce(be(0,e-d),e))}function Ac(){for(var c=[],d=-1,e=arguments.length,g=h(),i=pb(),j=i===a,k=h();++d<e;){var n=arguments[d];
(ke(n)||tb(n))&&(c.push(n),g.push(j&&n.length>=v&&f(d?c[d]:k)))}var o=c[0],p=-1,q=o?o.length:0,r=[];
a:for(;++p<q;){var s=g[0];if(n=o[p],(s?b(s,n):i(k,n))<0){for(d=e,(s||k).push(n);--d;)if(s=g[d],(s?b(s,n):i(c[d],n))<0)continue a;
r.push(n)}}for(;e--;)s=g[e],s&&m(s);return l(g),l(k),r}function Bc(a,b,c){var d=0,e=a?a.length:0;
if("number"!=typeof b&&null!=b){var f=e;for(b=q.createCallback(b,c,3);f--&&b(a[f],f,a);)d++
}else if(d=b,null==d||c)return a?a[e-1]:p;return n(a,be(0,e-d))}function Cc(a,b,c){var d=a?a.length:0;
for("number"==typeof c&&(d=(0>c?be(0,d+c):ce(c,d-1))+1);d--;)if(a[d]===b)return d;
return-1}function Dc(a){for(var b=arguments,c=0,d=b.length,e=a?a.length:0;++c<d;)for(var f=-1,g=b[c];++f<e;)a[f]===g&&(Vd.call(a,f--,1),e--);
return a}function Ec(a,b,c){a=+a||0,c="number"==typeof c?c:+c||1,null==b&&(b=a,a=0);
for(var d=-1,e=be(0,Md((b-a)/(c||1))),f=ud(e);++d<e;)f[d]=a,a+=c;return f}function Fc(a,b,c){var d=-1,e=a?a.length:0,f=[];
for(b=q.createCallback(b,c,3);++d<e;){var g=a[d];b(g,d,a)&&(f.push(g),Vd.call(a,d--,1),e--)
}return f}function Gc(a,b,c){if("number"!=typeof b&&null!=b){var d=0,e=-1,f=a?a.length:0;
for(b=q.createCallback(b,c,3);++e<f&&b(a[e],e,a);)d++}else d=null==b||c?1:be(0,b);
return n(a,d)}function Hc(a,b,c,d){var e=0,f=a?a.length:e;for(c=c?q.createCallback(c,d,1):ed,b=c(b);f>e;){var g=e+f>>>1;
c(a[g])<b?e=g+1:f=g}return e}function Ic(){return kb(gb(arguments,!0,!0))}function Jc(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c="function"!=typeof b&&d&&d[b]===a?null:b,b=!1),null!=c&&(c=q.createCallback(c,d,3)),kb(a,b,c)
}function Kc(a){return eb(a,n(arguments,1))}function Lc(){for(var a=-1,b=arguments.length;++a<b;){var c=arguments[a];
if(ke(c)||tb(c))var d=d?kb(eb(d,c).concat(eb(c,d))):c}return d||[]}function Mc(){for(var a=arguments.length>1?arguments:arguments[0],b=-1,c=a?hc(De(a,"length")):0,d=ud(0>c?0:c);++b<c;)d[b]=De(a,b);
return d}function Nc(a,b){var c=-1,d=a?a.length:0,e={};for(b||!d||ke(a[0])||(b=[]);++c<d;){var f=a[c];
b?e[f]=b[c]:f&&(e[f[0]]=f[1])}return e}function Oc(a,b){if(!Kb(b))throw new Ed;return function(){return--a<1?b.apply(this,arguments):void 0
}}function Pc(a,b){return arguments.length>2?mb(a,17,n(arguments,2),null,b):mb(a,1,null,null,b)
}function Qc(a){for(var b=arguments.length>1?gb(arguments,!0,!1,1):Bb(a),c=-1,d=b.length;++c<d;){var e=b[c];
a[e]=mb(a[e],1,null,null,a)}return a}function Rc(a,b){return arguments.length>2?mb(b,19,n(arguments,2),null,a):mb(b,3,null,null,a)
}function Sc(){for(var a=arguments,b=a.length;b--;)if(!Kb(a[b]))throw new Ed;return function(){for(var b=arguments,c=a.length;c--;)b=[a[c].apply(this,b)];
return b[0]}}function Tc(a,b){return b="number"==typeof b?b:+b||a.length,mb(a,4,null,null,null,b)
}function Uc(a,b,c){var d,e,f,g,h,i,j,k=0,l=!1,m=!0;if(!Kb(a))throw new Ed;if(b=be(0,b)||0,c===!0){var n=!0;
m=!1}else Lb(c)&&(n=c.leading,l="maxWait"in c&&(be(b,c.maxWait)||0),m="trailing"in c?c.trailing:m);
var o=function(){var c=b-(Fe()-g);if(0>=c){e&&Nd(e);var l=j;e=i=j=p,l&&(k=Fe(),f=a.apply(h,d),i||e||(d=h=null))
}else i=Ud(o,c)},q=function(){i&&Nd(i),e=i=j=p,(m||l!==b)&&(k=Fe(),f=a.apply(h,d),i||e||(d=h=null))
};return function(){if(d=arguments,g=Fe(),h=this,j=m&&(i||!n),l===!1)var c=n&&!i;
else{e||n||(k=g);var p=l-(g-k),r=0>=p;r?(e&&(e=Nd(e)),k=g,f=a.apply(h,d)):e||(e=Ud(q,p))
}return r&&i?i=Nd(i):i||b===l||(i=Ud(o,b)),c&&(r=!0,f=a.apply(h,d)),!r||i||e||(d=h=null),f
}}function Vc(a){if(!Kb(a))throw new Ed;var b=n(arguments,1);return Ud(function(){a.apply(p,b)
},1)}function Wc(a,b){if(!Kb(a))throw new Ed;var c=n(arguments,2);return Ud(function(){a.apply(p,c)
},b)}function Xc(a,b){if(!Kb(a))throw new Ed;var c=function(){var d=c.cache,e=b?b.apply(this,arguments):u+arguments[0];
return Rd.call(d,e)?d[e]:d[e]=a.apply(this,arguments)};return c.cache={},c}function Yc(a){var b,c;
if(!Kb(a))throw new Ed;return function(){return b?c:(b=!0,c=a.apply(this,arguments),a=null,c)
}}function Zc(a){return mb(a,16,n(arguments,1))}function $c(a){return mb(a,32,null,n(arguments,1))
}function _c(a,b,c){var d=!0,e=!0;if(!Kb(a))throw new Ed;return c===!1?d=!1:Lb(c)&&(d="leading"in c?c.leading:d,e="trailing"in c?c.trailing:e),X.leading=d,X.maxWait=b,X.trailing=e,Uc(a,b,X)
}function ad(a,b){return mb(b,16,[a])}function bd(a){return function(){return a}}function cd(a,b,c){var d=typeof a;
if(null==a||"function"==d)return cb(a,b,c);if("object"!=d)return id(a);var e=me(a),f=e[0],g=a[f];
return 1!=e.length||g!==g||Lb(g)?function(b){for(var c=e.length,d=!1;c--&&(d=hb(b[e[c]],a[e[c]],null,!0)););return d
}:function(a){var b=a[f];return g===b&&(0!==g||1/g==1/b)}}function dd(a){return null==a?"":Dd(a).replace(te,ob)
}function ed(a){return a}function fd(a,b,c){var d=!0,e=b&&Bb(b);b&&(c||e.length)||(null==c&&(c=b),f=r,b=a,a=q,e=Bb(b)),c===!1?d=!1:Lb(c)&&"chain"in c&&(d=c.chain);
var f=a,g=Kb(f);dc(e,function(c){var e=a[c]=b[c];g&&(f.prototype[c]=function(){var b=this.__chain__,c=this.__wrapped__,g=[c];
Sd.apply(g,arguments);var h=e.apply(a,g);if(d||b){if(c===h&&Lb(h))return this;h=new f(h),h.__chain__=b
}return h})})}function gd(){return c._=Jd,this}function hd(){}function id(a){return function(b){return b[a]
}}function jd(a,b,c){var d=null==a,e=null==b;if(null==c&&("boolean"==typeof a&&e?(c=a,a=1):e||"boolean"!=typeof b||(c=b,e=!0)),d&&e&&(b=1),a=+a||0,e?(b=a,a=0):b=+b||0,c||a%1||b%1){var f=ee();
return ce(a+f*(b-a+parseFloat("1e-"+((f+"").length-1))),b)}return jb(a,b)}function kd(a,b){if(a){var c=a[b];
return Kb(c)?a[b]():c}}function ld(a,b,c){var d=q.templateSettings;a=Dd(a||""),c=we({},c,d);
var e,f=we({},c.imports,d.imports),h=me(f),i=Yb(f),j=0,k=c.interpolate||G,l="__p += '",m=Cd((c.escape||G).source+"|"+k.source+"|"+(k===E?B:G).source+"|"+(c.evaluate||G).source+"|$","g");
a.replace(m,function(b,c,d,f,h,i){return d||(d=f),l+=a.slice(j,i).replace(I,g),c&&(l+="' +\n__e("+c+") +\n'"),h&&(e=!0,l+="';\n"+h+";\n__p += '"),d&&(l+="' +\n((__t = ("+d+")) == null ? '' : __t) +\n'"),j=i+b.length,b
}),l+="';\n";var n=c.variable,o=n;o||(n="obj",l="with ("+n+") {\n"+l+"\n}\n"),l=(e?l.replace(y,""):l).replace(z,"$1").replace(A,"$1;"),l="function("+n+") {\n"+(o?"":n+" || ("+n+" = {});\n")+"var __t, __p = '', __e = _.escape"+(e?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+l+"return __p\n}";
var r="\n/*\n//# sourceURL="+(c.sourceURL||"/lodash/template/source["+L++ +"]")+"\n*/";
try{var s=yd(h,"return "+l+r).apply(p,i)}catch(t){throw t.source=l,t}return b?s(b):(s.source=l,s)
}function md(a,b,c){a=(a=+a)>-1?a:0;var d=-1,e=ud(a);for(b=cb(b,c,1);++d<a;)e[d]=b(d);
return e}function nd(a){return null==a?"":Dd(a).replace(se,sb)}function od(a){var b=++s;
return Dd(null==a?"":a)+b}function pd(a){return a=new r(a),a.__chain__=!0,a}function qd(a,b){return b(a),a
}function rd(){return this.__chain__=!0,this}function sd(){return Dd(this.__wrapped__)
}function td(){return this.__wrapped__}c=c?fb.defaults(ab.Object(),c,fb.pick(ab,J)):ab;
var ud=c.Array,vd=c.Boolean,wd=c.Date,xd=c.Error,yd=c.Function,zd=c.Math,Ad=c.Number,Bd=c.Object,Cd=c.RegExp,Dd=c.String,Ed=c.TypeError,Fd=[],Gd=xd.prototype,Hd=Bd.prototype,Id=Dd.prototype,Jd=c._,Kd=Hd.toString,Ld=Cd("^"+Dd(Kd).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Md=zd.ceil,Nd=c.clearTimeout,Od=zd.floor,Pd=yd.prototype.toString,Qd=qb(Qd=Bd.getPrototypeOf)&&Qd,Rd=Hd.hasOwnProperty,Sd=Fd.push,Td=Hd.propertyIsEnumerable,Ud=c.setTimeout,Vd=Fd.splice,Wd=Fd.unshift,Xd=function(){try{var a={},b=qb(b=Bd.defineProperty)&&b,c=b(a,a,a)&&b
}catch(d){}return c}(),Yd=qb(Yd=Bd.create)&&Yd,Zd=qb(Zd=ud.isArray)&&Zd,$d=c.isFinite,_d=c.isNaN,ae=qb(ae=Bd.keys)&&ae,be=zd.max,ce=zd.min,de=c.parseInt,ee=zd.random,fe={};
fe[N]=ud,fe[O]=vd,fe[P]=wd,fe[R]=yd,fe[T]=Bd,fe[S]=Ad,fe[U]=Cd,fe[V]=Dd;var ge={};
ge[N]=ge[P]=ge[S]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},ge[O]=ge[V]={constructor:!0,toString:!0,valueOf:!0},ge[Q]=ge[R]=ge[U]={constructor:!0,toString:!0},ge[T]={constructor:!0},function(){for(var a=K.length;a--;){var b=K[a];
for(var c in ge)Rd.call(ge,c)&&!Rd.call(ge[c],b)&&(ge[c][b]=!1)}}(),r.prototype=q.prototype;
var he=q.support={};!function(){var a=function(){this.x=1},b={0:1,length:1},d=[];
a.prototype={valueOf:1,y:1};for(var e in new a)d.push(e);for(e in arguments);he.argsClass=Kd.call(arguments)==M,he.argsObject=arguments.constructor==Bd&&!(arguments instanceof ud),he.enumErrorProps=Td.call(Gd,"message")||Td.call(Gd,"name"),he.enumPrototypes=Td.call(a,"prototype"),he.funcDecomp=!qb(c.WinRTError)&&H.test(o),he.funcNames="string"==typeof yd.name,he.nonEnumArgs=0!=e,he.nonEnumShadows=!/valueOf/.test(d),he.ownLast="x"!=d[0],he.spliceObjects=(Fd.splice.call(b,0,1),!b[0]),he.unindexedChars="x"[0]+Bd("x")[0]!="xx";
try{he.nodeClass=!(Kd.call(document)==T&&!({toString:0}+""))}catch(f){he.nodeClass=!0
}}(1),q.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:E,variable:"",imports:{_:q}};
var ie=function(a){var b="var index, iterable = "+a.firstArg+", result = "+a.init+";\nif (!iterable) return result;\n"+a.top+";";
a.array?(b+="\nvar length = iterable.length; index = -1;\nif ("+a.array+") {  ",he.unindexedChars&&(b+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),b+="\n  while (++index < length) {\n    "+a.loop+";\n  }\n}\nelse {  "):he.nonEnumArgs&&(b+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+a.loop+";\n    }\n  } else {  "),he.enumPrototypes&&(b+="\n  var skipProto = typeof iterable == 'function';\n  "),he.enumErrorProps&&(b+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
var c=[];if(he.enumPrototypes&&c.push('!(skipProto && index == "prototype")'),he.enumErrorProps&&c.push('!(skipErrorProps && (index == "message" || index == "name"))'),a.useHas&&a.keys)b+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",c.length&&(b+="    if ("+c.join(" && ")+") {\n  "),b+=a.loop+";    ",c.length&&(b+="\n    }"),b+="\n  }  ";
else if(b+="\n  for (index in iterable) {\n",a.useHas&&c.push("hasOwnProperty.call(iterable, index)"),c.length&&(b+="    if ("+c.join(" && ")+") {\n  "),b+=a.loop+";    ",c.length&&(b+="\n    }"),b+="\n  }    ",he.nonEnumShadows){for(b+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ",k=0;7>k;k++)b+="\n    index = '"+a.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",a.useHas||(b+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),b+=") {\n      "+a.loop+";\n    }      ";
b+="\n  }    "}return(a.array||he.nonEnumArgs)&&(b+="\n}"),b+=a.bottom+";\nreturn result"
};Yd||(bb=function(){function a(){}return function(b){if(Lb(b)){a.prototype=b;var d=new a;
a.prototype=null}return d||c.Object()}}());var je=Xd?function(a,b){Y.value=b,Xd(a,"__bindData__",Y)
}:hd;he.argsClass||(tb=function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Rd.call(a,"callee")&&!Td.call(a,"callee")||!1
});var ke=Zd||function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Kd.call(a)==N||!1
},le=nb({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),me=ae?function(a){return Lb(a)?he.enumPrototypes&&"function"==typeof a||he.nonEnumArgs&&a.length&&tb(a)?le(a):ae(a):[]
}:le,ne={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:me,loop:"if (callback(iterable[index], index, collection) === false) return result"},oe={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys:me,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},pe={top:"if (!objectTypes[typeof iterable]) return result;\n"+ne.top,array:!1},qe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},re=Db(qe),se=Cd("("+me(re).join("|")+")","g"),te=Cd("["+me(qe).join("")+"]","g"),ue=nb(ne),ve=nb(oe,{top:oe.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),we=nb(oe),xe=nb(ne,pe,{useHas:!1}),ye=nb(ne,pe);
Kb(/x/)&&(Kb=function(a){return"function"==typeof a&&Kd.call(a)==R});var ze=Qd?function(a){if(!a||Kd.call(a)!=T||!he.argsClass&&tb(a))return!1;
var b=a.valueOf,c=qb(b)&&(c=Qd(b))&&Qd(c);return c?a==c||Qd(a)==c:rb(a)}:rb,Ae=lb(function(a,b,c){Rd.call(a,c)?a[c]++:a[c]=1
}),Be=lb(function(a,b,c){(Rd.call(a,c)?a[c]:a[c]=[]).push(b)}),Ce=lb(function(a,b,c){a[c]=b
}),De=gc,Ee=ac,Fe=qb(Fe=wd.now)&&Fe||function(){return(new wd).getTime()},Ge=8==de(x+"08")?de:function(a,b){return de(Qb(a)?a.replace(F,""):a,b||0)
};return q.after=Oc,q.assign=ve,q.at=Zb,q.bind=Pc,q.bindAll=Qc,q.bindKey=Rc,q.chain=pd,q.compact=sc,q.compose=Sc,q.constant=bd,q.countBy=Ae,q.create=wb,q.createCallback=cd,q.curry=Tc,q.debounce=Uc,q.defaults=we,q.defer=Vc,q.delay=Wc,q.difference=tc,q.filter=ac,q.flatten=xc,q.forEach=dc,q.forEachRight=ec,q.forIn=xe,q.forInRight=zb,q.forOwn=ye,q.forOwnRight=Ab,q.functions=Bb,q.groupBy=Be,q.indexBy=Ce,q.initial=zc,q.intersection=Ac,q.invert=Db,q.invoke=fc,q.keys=me,q.map=gc,q.mapValues=Sb,q.max=hc,q.memoize=Xc,q.merge=Tb,q.min=ic,q.omit=Ub,q.once=Yc,q.pairs=Vb,q.partial=Zc,q.partialRight=$c,q.pick=Wb,q.pluck=De,q.property=id,q.pull=Dc,q.range=Ec,q.reject=lc,q.remove=Fc,q.rest=Gc,q.shuffle=nc,q.sortBy=qc,q.tap=qd,q.throttle=_c,q.times=md,q.toArray=rc,q.transform=Xb,q.union=Ic,q.uniq=Jc,q.values=Yb,q.where=Ee,q.without=Kc,q.wrap=ad,q.xor=Lc,q.zip=Mc,q.zipObject=Nc,q.collect=gc,q.drop=Gc,q.each=dc,q.eachRight=ec,q.extend=ve,q.methods=Bb,q.object=Nc,q.select=ac,q.tail=Gc,q.unique=Jc,q.unzip=Mc,fd(q),q.clone=ub,q.cloneDeep=vb,q.contains=$b,q.escape=dd,q.every=_b,q.find=bc,q.findIndex=uc,q.findKey=xb,q.findLast=cc,q.findLastIndex=vc,q.findLastKey=yb,q.has=Cb,q.identity=ed,q.indexOf=yc,q.isArguments=tb,q.isArray=ke,q.isBoolean=Eb,q.isDate=Fb,q.isElement=Gb,q.isEmpty=Hb,q.isEqual=Ib,q.isFinite=Jb,q.isFunction=Kb,q.isNaN=Mb,q.isNull=Nb,q.isNumber=Ob,q.isObject=Lb,q.isPlainObject=ze,q.isRegExp=Pb,q.isString=Qb,q.isUndefined=Rb,q.lastIndexOf=Cc,q.mixin=fd,q.noConflict=gd,q.noop=hd,q.now=Fe,q.parseInt=Ge,q.random=jd,q.reduce=jc,q.reduceRight=kc,q.result=kd,q.runInContext=o,q.size=oc,q.some=pc,q.sortedIndex=Hc,q.template=ld,q.unescape=nd,q.uniqueId=od,q.all=_b,q.any=pc,q.detect=bc,q.findWhere=bc,q.foldl=jc,q.foldr=kc,q.include=$b,q.inject=jc,fd(function(){var a={};
return ye(q,function(b,c){q.prototype[c]||(a[c]=b)}),a}(),!1),q.first=wc,q.last=Bc,q.sample=mc,q.take=wc,q.head=wc,ye(q,function(a,b){var c="sample"!==b;
q.prototype[b]||(q.prototype[b]=function(b,d){var e=this.__chain__,f=a(this.__wrapped__,b,d);
return e||null!=b&&(!d||c&&"function"==typeof b)?new r(f,e):f})}),q.VERSION="2.4.1",q.prototype.chain=rd,q.prototype.toString=sd,q.prototype.value=td,q.prototype.valueOf=td,ue(["join","pop","shift"],function(a){var b=Fd[a];
q.prototype[a]=function(){var a=this.__chain__,c=b.apply(this.__wrapped__,arguments);
return a?new r(c,a):c}}),ue(["push","reverse","sort","unshift"],function(a){var b=Fd[a];
q.prototype[a]=function(){return b.apply(this.__wrapped__,arguments),this}}),ue(["concat","slice","splice"],function(a){var b=Fd[a];
q.prototype[a]=function(){return new r(b.apply(this.__wrapped__,arguments),this.__chain__)
}}),he.spliceObjects||ue(["pop","shift","splice"],function(a){var b=Fd[a],c="splice"==a;
q.prototype[a]=function(){var a=this.__chain__,d=this.__wrapped__,e=b.apply(d,arguments);
return 0===d.length&&delete d[0],a||c?new r(e,a):e}}),q}var p,q=[],r=[],s=0,t={},u=+new Date+"",v=75,w=40,x=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",y=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,A=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,D=/^\s*function[ \n\r\t]+\w/,E=/<%=([\s\S]+?)%>/g,F=RegExp("^["+x+"]*0+(?=.$)"),G=/($^)/,H=/\bthis\b/,I=/['\n\r\t\u2028\u2029\\]/g,J=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],K=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],L=0,M="[object Arguments]",N="[object Array]",O="[object Boolean]",P="[object Date]",Q="[object Error]",R="[object Function]",S="[object Number]",T="[object Object]",U="[object RegExp]",V="[object String]",W={};
W[R]=!1,W[M]=W[N]=W[O]=W[P]=W[S]=W[T]=W[U]=W[V]=!0;var X={leading:!1,maxWait:0,trailing:!1},Y={configurable:!1,enumerable:!1,value:null,writable:!1},Z={args:"",array:null,bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},$={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},_={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},ab=$[typeof window]&&window||this,bb=$[typeof exports]&&exports&&!exports.nodeType&&exports,cb=$[typeof module]&&module&&!module.nodeType&&module,db=cb&&cb.exports===bb&&bb,eb=$[typeof global]&&global;
!eb||eb.global!==eb&&eb.window!==eb||(ab=eb);var fb=o();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ab._=fb,define(function(){return fb
})):bb&&cb?db?(cb.exports=fb)._=fb:bb._=fb:ab._=fb}.call(this),null==window.gb&&(window.gb={}),window.gb.urlHelper=function(a,b){return null==b&&(b={}),_.each(b,function(b,c){return a=a.replace(new RegExp("\\[:"+c+"\\]"),b)
}),a=a.replace(/\[:.*\]/,""),a=a.replace(/\/+/g,"/"),a=a.replace(/\/+$/,"")},window.gb.startsWith=function(a,b){var c;
return(null!=a?null!=(c=a.toString())?c.slice(0,b.length):void 0:void 0)===b},window.gb.endsWith=function(a,b){var c;
return(null!=a?null!=(c=a.toString())?c.slice(-b.length):void 0:void 0)===b},window.gb.trim=function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")
},window.gb.log=function(){return null!=window.console?window.console.log.apply(0,arguments):void 0
},window.gb.addSlashes=function(a){return a.replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")
},window.gb.getCookie=function(a,b){var c;return c=new RegExp("(?:; )?"+a+"=([^;]*);?"),c.test(document.cookie)?decodeURIComponent(RegExp.$1):b
},window.gb.setCookie=function(a,b,c){var d,e;return d=a+"="+encodeURIComponent(b),void 0!==c&&(e=new Date,e.setTime(e.getTime()+60*c*1e3),d+=";expires="+e.toGMTString()),document.cookie=d
},window.gb.deleteCookie=function(){var a;return a=new Date,a.setDate(a.getDate()-1),document.cookie=escape(key)+"=;expires="+a
},window.gb.jqAjaxJSON=function(a){return function(b,c){return null!=c&&null!=b?(c=jQuery.extend({},c),c.url=b):c=jQuery.extend({},b),null!=c.data&&(c.data=JSON.parse(JSON.stringify(c.data))),null==c.method&&(c.method="POST"),null!=c.complete&&(c.originalComplete=c.complete),c.complete=function(b){var d,e;
return d=b.getResponseHeader("Content-Type"),window.gb.startsWith(d,"application/json")?(e=JSON.parse(b.responseText),"object"==typeof e&&null!=e.gb_footer&&null!=window.jQuery&&(jQuery("footer.gb_footer").text(e.gb_footer),delete e.gb_footer,b.responseJSON=e),null!=c.originalComplete?c.originalComplete.apply(a,[b.responseJSON,b]):void 0):alert("erreur: Réponse du serveur non json")
},$.ajax(c)}}(this),window.gb.ucwords=function(a){return(a+"").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,function(a){return a.toUpperCase()
})},window.gb.removeAccents=function(a){var b;return b={"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","ẞ":"SS","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ß":"ss","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"},a.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return b[a]||a
})};var MestestsPasser,__bind=function(a,b){return function(){return a.apply(b,arguments)
}};MestestsPasser=function(){function a(){this.retrieveUserAnswer=__bind(this.retrieveUserAnswer,this),this.solutionsReceived=__bind(this.solutionsReceived,this),this.handlerSubmitQuestionnaire=__bind(this.handlerSubmitQuestionnaire,this),this.handleUserAnswer=__bind(this.handleUserAnswer,this),this.handlerClickOnNavButton=__bind(this.handlerClickOnNavButton,this),this.handlerClickOnLi=__bind(this.handlerClickOnLi,this),this.Qaire=window.jsp.qaire,this.aAlineas=window.jsp.aAlineas,this.aContexts=window.jsp.aContexts,this.aQaireAlineas=window.jsp.aQaireAlineas,this.showSolution=window.jsp.showSolution,_.forEach(this.aQaireAlineas,function(){return function(a){return null!=a.answer?a.answer:a.answer=0
}}(this))}return a.Qaire=null,a.prototype.go=function(){return this.renderLis(),$(".passer .qtabctn").on("click","li",this.handlerClickOnLi),$(".passer .navbuttons").on("click","button",this.handlerClickOnNavButton),$(".passer .qbodyctn").on("click","button.actionsubmit",this.handlerSubmitQuestionnaire),$(".passer .qtabctn li").first().trigger("click")
},a.prototype.renderLis=function(){var a,b;return b=$(".passer .qtabctn ul"),b.empty(),_.forEach(this.aQaireAlineas,function(){return function(a){var c,d,e,f,g,h,i;
return g=a.id,f=parseInt(a.order,10),h="result",e="",null!=a.solution&&(c=parseInt(a.answer,10),i=parseInt(a.solution,10),c===i?(h="result-right",e="<img src='public/img/green_64black.png' />"):(h="result-wrong",e="<img src='public/img/red_64black.png' />")),d="<li class='"+h+"' data-qairealineaid='"+g+"' data-num='"+f+"'>"+(f+1)+e+"</li>",b.append($(d))
}}(this)),a="<li data-num='#'>#</li>",b.append($(a))},a.prototype.handlerClickOnLi=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;
return this.handleUserAnswer(),f=$(a.currentTarget),i=f.data("qairealineaid"),k=$(".passer .qbodyctn"),k.empty(),f.siblings().removeClass("selected"),f.addClass("selected"),$(".passer .navbuttons button").removeClass("disabled"),0===f.prev().length&&$(".passer .navbuttons button.actionprev").addClass("disabled"),0===f.next().length&&$(".passer .navbuttons button.actionnext").addClass("disabled"),null!=i?(h=this.aQaireAlineas[i],b=this.aAlineas[h.questionalinea_id],c=this.aContexts[b.questioncontext_id],g=f.data("num"),n=_.template($("#tplqContext").html().trim()),e=n({title:c.title,body:c.body}),k.append(e),n=_.template($("#tplqAlinea").html().trim()),e=n({body:b.body}),k.append(e),l=k.find(".alineaanswers"),n=_.template($("#tplqAlineaAnswer").html().trim()),m=parseInt(h.answer,10),j=null,this.showSolution&&(j=h.solution),null!=j&&(j=parseInt(j,10)),d=1,_.forEach(JSON.parse(b.answers_json),function(a,b){var c,f;
return c="",m&d&&(c="checked"),f="",null!=j&&j&d&&(f="checked"),d<<=1,e=n({body:a,letter:String.fromCharCode(65+b),checked:c,solution:j,checkedSol:f}),l.append(e)
})):null===this.Qaire.score?(n=_.template($("#tplqRecapConfirm").html().trim()),e=n({qaire:this.Qaire,showSolution:this.showSolution}),k.append(e)):(n=_.template($("#tplqResult").html().trim()),e=n({qaire:this.Qaire,showSolution:this.showSolution}),k.append(e))
},a.prototype.handlerClickOnNavButton=function(a){var b,c;return b=$(a.currentTarget),c=$(".passer .qtabctn li.selected"),b.hasClass("actionnext")?c.next().trigger("click"):b.hasClass("actionprev")?c.prev().trigger("click"):void 0
},a.prototype.handleUserAnswer=function(){var a,b,c,d,e,f;return e=this.retrieveUserAnswer(),null!==e&&(d=e.qaireAlineaId,c=this.aQaireAlineas[d],b=parseInt(c.answer,10),a=e.val,b!==a)?(f=window.jsp.aUrls.thistst,$.ajax({url:f,method:"POST",data:{_method:"PUT",qaireAlineaId:d,answer:a},timeout:2e4}).fail(function(){return function(){return alert("Erreur lors de l'enregistrement")
}}(this)).done(function(){return function(){return c.answer=a}}(this))):void 0},a.prototype.handlerSubmitQuestionnaire=function(){var a;
return a=window.jsp.aUrls.thistst,$.ajax({url:a,method:"POST",data:{_method:"POST",submit:"true"},timeout:2e4}).fail(function(){return function(){return alert("Erreur lors de l'enregistrement")
}}(this)).done(function(a){return function(b,c,d){var e;return 200!==d.status||"application/json"!==d.getResponseHeader("content-type").substr(0,16)?void alert("Le serveur n'a pas pu enregistrer le questionnaire status="+d.status+" response="+d.responseText):(e=JSON.parse(d.responseText),a.Qaire=e.qaire,a.aQaireAlineas=e.aQaireAlineas,a.solutionsReceived())
}}(this))},a.prototype.solutionsReceived=function(){return this.renderLis(),$(".qtabctn li[data-num=#]").trigger("click")
},a.prototype.retrieveUserAnswer=function(){var a,b,c,d,e,f;return d=$(".passer .qtabctn li.selected"),b=d.data("num"),e=d.data("qairealineaid"),null==e?null:(a=$(".passer .alineaanswers").find(".letter input.etu[type=checkbox]"),c=1,f=0,_.each(a,function(a){return $(a).prop("checked")&&(f+=c),c<<=1
}),{num:b,val:f,qaireAlineaId:e})},a}();var AdminStats;AdminStats=function(){function a(){this.poActive=!1
}return a.prototype.go=function(){return $("div.bilan table").dataTable({bPaginate:!1,bFilter:!1,bInfo:!1,iDisplayLength:5}),$("div.bilan table").addClass("table table-striped table-bordered"),$("div.bilan table").on("click","tr",function(a){return function(b){var c,d,e,f;
return e=$(b.currentTarget).find("td:nth-child(1)"),c=e.text(),f=window.jsp.urlAdshal,f=f.replace("[:alineaid]",c),f=f.replace("[:type]","popover"),void 0===e.data("poloaded")?(a.poActive!==!1&&a.poActive.popover("hide"),e.data("poloaded","waiting"),a.poActive=e,$.ajax(f,{}).done(function(a){return e.data("poloaded","1"),e.popover({html:!0,content:a,trigger:"manual",container:".bilan"}).popover("show")
})):"1"!==e.data("poloaded")||(d=e.is(a.poActive),a.poActive!==!1&&(a.poActive.popover("hide"),a.poActive=!1),d)?void 0:(e.popover("show"),a.poActive=e)
}}(this))},a}();