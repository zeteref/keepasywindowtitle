// ==UserScript==
// @name         keepassytitle
// @namespace    https://github.com/zeteref/keepasywindowtitle/
// @version      0.3.1
// @description  add domain to window title to work with keepass
// @author       zeteref
// @match      *://*/*
// @grant        none
// ==/UserScript==

(function() {
      'use strict';
      
      function add_id(title) {
              return title + ' |keepass:' + document.location + '|';
            }
      
      document.title = add_id(document.title);
      
      new MutationObserver(function(mutations) {
              
              var new_title = mutations[0].addedNodes[0].textContent;
              console.log(new_title);
              if (new_title.search('keepass:') != -1) {
                        console.log('returning');
                        return
                      }
              
              new_title = add_id(new_title);
              document.title = new_title; 
              
            }).observe(
                    document.querySelector('title'),
                    { subtree: true, characterData: true, childList: true }
                  );
         
})();

