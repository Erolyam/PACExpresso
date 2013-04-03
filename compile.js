#!/usr/bin/env node

//npm install uglify-js
//npm install css-condense --very good
//npm install clean-css --more support, but compress less
//npm instal sqwish -- NON
//npm install css-compressor -- NON

var fs = require("fs");
var UglifyJS = require("uglify-js");
var cssc = require('css-condense');    /* total size : 142110  consolidateViaSelectors:false */
//var cleanCSS = require('clean-css'); /* total size:  146597 */

var js = {
    "public/compiled/layout_all.js": [
        "public/extlib/es5-shim/es5-shim.js",
        "public/extlib/es5-shim/es5-sham.js",
        "public/extlib/es6-shim/es6-shim.js",
        "public/extlib/jquery/jquery-1.9.1.js",
        "public/extlib/twitter-bootstrap/js/bootstrap.js",
        "public/extlib/lodash/lodash.js",
        "public/extlib/backbone.js/backbone.js",
    ],
};

var css = {
    "public/compiled/layout_all.css": [
        "public/extlib/twitter-bootstrap/css/bootstrap.css",
        "public/css/default.css",
    ]
};


function stripComments(str) {
    return str.replace(/\/\*[\s\S]*?\*\//g, '');
}


//
// PROCESS JAVASCRIPTS
//

Object.keys(js).forEach(function(fname){
    var aFiles = js[fname];
    var result = UglifyJS.minify(aFiles, {warnings:false,mangle:true, output:{max_line_len:80}});
    fs.writeFileSync(fname, result.code);
})


//
// PROCESS STYLESHEETS
//
Object.keys(css).forEach(function(fname){
    var aFiles = css[fname];
    var str    = "";
    var useMin = false;
    aFiles.forEach(function(fn){
        if (useMin) {
            var fn2 = fn.replace(/\.css$/, ".min.css");
            if (fs.existsSync(fn2)) {
                fn = fn2;
            }
        }
        str += fs.readFileSync(fn) + "\n";
    });
    str = cssc.compress(str,{lineBreaks:true, consolidateViaSelectors:false, consolidateViaDeclarations:false, oconsolidateMediaQueries:true});
//    str = cleanCSS.process(str, {removeEmpty:true, keepBreaks:false});
    str = stripComments(str);
    var aRpl = [
        ["url(Neuton-Italic-webfont.woff)" , "url(../css/Neuton-Italic-webfont.woff)"],
        ["url(../img/glyphicons-halflings.png)", "url(../twitter-bootstrap/img/glyphicons-halflings.png)"],
        ["url(../img/glyphicons-halflings-white.png)", "url(../twitter-bootstrap/img/glyphicons-halflings-white.png)"],
    ];
    aRpl.forEach(function(aRpls){
        str = str.replace(aRpls[0], aRpls[1]);
    });
    fs.writeFileSync(fname, str);
})
