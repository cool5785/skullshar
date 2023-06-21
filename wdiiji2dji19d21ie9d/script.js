// ==UserScript==
// @name         SkullSher
// @namespace    http://tampermonkey.net/
// @version      1
// @description  CHeck
// @match        https://www.skillshare.com/*
// @grant        none
// ==/UserScript==
var headerMobileRight = document.querySelector(
  '#site-content > div.site-header-mobile > div.header-mobile-right'
)
headerMobileRight && headerMobileRight.remove()
var siteHeaderNavRight = document.querySelector(
  '#site-content > div.site-header.js-site-header-container > div.site-header-nav.site-header-nav-right'
)
siteHeaderNavRight && siteHeaderNavRight.remove()
function clearCookies() {
  var _0xa6861a = document.cookie.split(';')
  for (var _0x40ea22 = 0; _0x40ea22 < _0xa6861a.length; _0x40ea22++) {
    var _0x180176 = _0xa6861a[_0x40ea22],
      _0x4365a8 = _0x180176.indexOf('='),
      _0x4cd8ac = _0x4365a8 > -1 ? _0x180176.substr(0, _0x4365a8) : _0x180176
    document.cookie =
      _0x4cd8ac + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
  }
}
function addCookie(_0x1f85e2, _0x17954a) {
  var _0x359d20 = _0x1f85e2 + '=' + _0x17954a + ';path=/'
  document.cookie = _0x359d20
}
clearCookies()
addCookie('', '')
window.location.href.indexOf('/login') != -1 && window.location.reload()
window.addEventListener('load', function () {
  closeBtn()
})
addCookie(
  'skillshare_user_',
  'd675a03e65e7dcd99f845b5b86f14ca0cbe6e3aea%3A4%3A%7Bi%3A0%3Bs%3A8%3A%2226362283%22%3Bi%3A1%3Bs%3A27%3A%22is.that.you.karen%40gmail.com%22%3Bi%3A2%3Bi%3A2592000%3Bi%3A3%3Ba%3A5%3A%7Bs%3A8%3A%22username%22%3Bs%3A9%3A%22760207188%22%3Bs%3A10%3A%22login_time%22%3Bs%3A19%3A%222023-06-21%2018%3A12%3A29%22%3Bs%3A10%3A%22touch_time%22%3Bs%3A19%3A%222023-06-21%2018%3A13%3A47%22%3Bs%3A5%3A%22roles%22%3Bs%3A0%3A%22%22%3Bs%3A6%3A%22locale%22%3Bs%3A5%3A%22en-US%22%3B%7D%7D'
)
