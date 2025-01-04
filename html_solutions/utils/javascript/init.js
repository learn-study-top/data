"use strict";


var zoomScript = "pinch-zoom.umd.js";
var jQueryScript = "jquery.min.js";
var oldVersionHelper = "old_version_helper.js";
var scrollScript = "scroll.js";
var jQueryMobile = "jquery.mobile.touch.min.js";

loadScriptInHead(zoomScript);






/**
 * loads scripts
 * 
 * @param {string} url 
 */
function loadScriptInHead(url) {
  let head = document.getElementsByTagName('head')[0];
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

function loadScriptInBody(url) {
  let body = document.getElementsByTagName('body')[0];
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  body.appendChild(script);
}





