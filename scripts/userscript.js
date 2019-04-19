// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @match https://krunker.io/*
// @grant none
// ==/UserScript==

setTimeout(() => {
  var scriptElement = document.createElement( "script" );

  scriptElement.type = "text/javascript";

  scriptElement.src = "http://localhost:1333/script";

  document.body.appendChild( scriptElement );
}, 5000)
