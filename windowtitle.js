// ==UserScript==
// @name         keepassytitle
// @namespace    https://github.com/zeteref/keepasywindowtitle/
// @version      0.3
// @description  add domain to window title to work with keepass
// @author       zeteref
// @match      *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     document.title = document.title + " - [keepass:" + document.location + "]";
})();
