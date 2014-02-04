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
        "public/extlib/jquery1/jquery.js",
        "public/extlib/twitter-bootstrap/js/bootstrap.js",
        "public/extlib/lodash-compat/lodash.js",
        "public/js/mestests/passer.js",
        "public/js/admin/stats.js",
    ],
    "public/compiled/layout_admin.js": [
        "public/extlib/datatables/jquery.dataTables.js",
        "public/extlib/datatables/DT_bootstrap.js",
        "public/js/admin/examens.js",
    ],
};

var css = {
    "public/compiled/layout_all.css": [
        "public/extlib/twitter-bootstrap/css/bootstrap.css",
        "public/extlib/twitter-bootstrap/css/bootstrap-theme.css",
        "public/extlib/datatables/DT_bootstrap.css",
        "public/css/custom.css", // doit être après DT_bootstrap.css
        "public/css/fonts/GillSans/webfont.css",
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
        ["url(Neuton-Italic-webfont.woff)" ,                                           "url(../css/Neuton-Italic-webfont.woff)"],
        ["url(GillSans-Regular-webfont.woff)",                                         "url(../css/fonts/GillSans/GillSans-Regular-webfont.woff)"],
        ["url(GillSans-Light-webfont.woff)",                                           "url(../css/fonts/GillSans/GillSans-Light-webfont.woff)"],
        ["url(GillSans-Bold-webfont.woff)",                                            "url(../css/fonts/GillSans/GillSans-Bold-webfont.woff)"],
        ["url(GillSans-BoldItalic-webfont.woff)",                                      "url(../css/fonts/GillSans/GillSans-BoldItalic-webfont.woff)"],
        ["url(../fonts/glyphicons-halflings-regular.eot)",                             "url(../extlib/twitter-bootstrap/fonts/glyphicons-halflings-regular.eot)"],
        ["url(../fonts/glyphicons-halflings-regular.eot?#iefix)",                      "url(../extlib/twitter-bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix)"],
        ["url(../fonts/glyphicons-halflings-regular.woff)",                            "url(../extlib/twitter-bootstrap/fonts/glyphicons-halflings-regular.woff)"],
        ["url(../fonts/glyphicons-halflings-regular.ttf)",                             "url(../extlib/twitter-bootstrap/fonts/glyphicons-halflings-regular.ttf)"],
        ["url(../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular)", "url(../extlib/twitter-bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular)"],
        ["url(../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular)", "url(../extlib/twitter-bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular)"],
        ["url(../img/glyphicons-halflings.png)",                                       "url(../extlib/twitter-bootstrap/img/glyphicons-halflings.png)"],
        ["url(../img/glyphicons-halflings-white.png)",                                 "url(../extlib/twitter-bootstrap/img/glyphicons-halflings-white.png)"],
    ];
    aRpl.forEach(function(aRpls){
        str = str.replace(aRpls[0], aRpls[1]);
    });
    fs.writeFileSync(fname, str);
})
