// ==UserScript==
// @name         keepassytitle
// @namespace    http://discworld
// @version      0.2
// @description  add domain to window title to work with keepass
// @author       zeteref
// @match      *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     document.title = document.title + " - [keepass:" + document.location + "]";
})();
