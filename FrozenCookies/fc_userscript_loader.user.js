// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies
// @author         Valkyriaivan
// @homepage       https://github.com/valkyriaivan/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @include        https://orteil.dashnet.org/cookieclicker/
// @updateURL      https://valkyriaivan.github.io/FrozenCookies/fc_userscript_loader.user.js
// @downloadURL    https://valkyriaivan.github.io/FrozenCookies/fc_userscript_loader.user.js
// ==/UserScript==

// Source:    https://github.com/valkyriaivan/FrozenCookies/main/
// Github.io: http://valkyriaivan.github.io/FrozenCookies/

var loadInterval = setInterval(function () {
  const Game = unsafeWindow.Game;
  if (Game && Game.ready) {
    clearInterval(loadInterval);
    Game.LoadMod("https://valkyriaivan.github.io/FrozenCookies/frozen_cookies.js");
  }
}, 1000);
