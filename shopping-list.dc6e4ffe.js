!function(){function n(n,e,t,r){Object.defineProperty(n,e,{get:t,set:r,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(n){if(n in r)return r[n].exports;if(n in o){var e=o[n];delete o[n];var t={id:n,exports:{}};return r[n]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},t.parcelRequired7c6=a),a.register("iE7OH",(function(e,t){var r,o;n(e.exports,"register",(function(){return r}),(function(n){return r=n})),n(e.exports,"resolve",(function(){return o}),(function(n){return o=n}));var a={};r=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},o=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("aNJCr",(function(e,t){var r;n(e.exports,"getBundleURL",(function(){return r}),(function(n){return r=n}));var o={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(n){var e=o[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),o[n]=e),e}})),a("iE7OH").register(JSON.parse('{"heHZr":"shopping-list.dc6e4ffe.js","10xaD":"amazon.c9513f1c.png","1uZue":"applebook.99f5b86b.png","7EFjI":"bookshop.579c7059.png","7NV6P":"amazondark.4d7f1b4a.png","5XUJe":"shopping-list.8429a3c1.js"}'));var i,s=a("bpxeT"),c=a("2TvXO");i=a("aNJCr").getBundleURL("heHZr")+a("iE7OH").resolve("10xaD");var l;l=a("aNJCr").getBundleURL("heHZr")+a("iE7OH").resolve("1uZue");var u;u=a("aNJCr").getBundleURL("heHZr")+a("iE7OH").resolve("7EFjI");var d;d=a("aNJCr").getBundleURL("heHZr")+a("iE7OH").resolve("7NV6P");var p=document.querySelector(".empty");p.classList.add("not-is-hidden");var f=document.querySelector(".book-list"),h="book-to-buy";function g(){return(g=e(s)(e(c).mark((function n(){var t,r;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,JSON.parse(localStorage.getItem(h));case 2:(t=n.sent)&&(t.length>0?(p.classList.replace("not-is-hidden","is-hidden"),r=v(t),f.innerHTML=r):p.classList.replace("is-hidden","not-is-hidden"));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){g.apply(this,arguments)}();function v(n){var t=document.body.classList.contains("dark-theme");return n.map((function(n){var r=n._id,o=n.list_name,a=n.book_image,s=n.author,c=n.title,p=n.description,f=n.buy_links,h=e(t?d:i);return'<li class="book-item" id="'.concat(r,'">\n              <div class="book-data">\n                <div class="book-img"">\n                <img src="').concat(a,'" alt="book1"></div>\n                <div class="book-info">\n                  <h2 class="book-name">').concat(c,'</h2>\n                  <p class="book-category">').concat(o,'</p>\n                  <p class="book-desc">\n                    ').concat(p||"no content",'\n                  </p>\n                  <div class="author-shoplinks">\n                    <p class="book-author">').concat(s,'</p>\n                    <ul class="shop-links">\n                      <li class="item-book">\n                        <a href="').concat(f[0].url,'" target="_blank" class="">\n                          <img class = "img-amazzon-dark"\n                            src="').concat(h,'"\n                            alt="').concat(f[0].name,'"\n                          />\n                        </a>\n                      </li>\n                      <li class="item-book">\n                        <a href="').concat(f[1].url,'" target="_blank" class="">\n                          <img\n                            src="').concat(e(l),'"\n                            alt="').concat(f[1].name,'"\n                            width="16px"\n                            height="16px"\n                          />\n                        </a>\n                      </li>\n                      <li class="item-book">\n                        <a href="').concat(f[4].url,'" target="_blank" class="">\n                          <img\n                            src="').concat(e(u),'"\n                            alt="').concat(f[4].name,'"\n                            width="16px"\n                            height="16px"\n                          />\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <button type="button" class="btn-delete" data-id="').concat(r,'">\n                <svg class="icon-delete" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n                     <path d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                </svg>\n              </button>\n            </li>')})).join("")}f.addEventListener("click",(function(n){if("BUTTON"!==n.target.nodeName)return;var e=function(){try{var n=localStorage.getItem(h);return n?JSON.parse(n):[]}catch(n){console.log(n.message)}}(),t=e.findIndex((function(e){return e._id===n.target.dataset.id}));if(e.splice(t,1),function(n){localStorage.setItem(h,JSON.stringify(n))}(e),0===e.length){p.classList.replace("is-hidden","not-is-hidden");var r=v(e);f.innerHTML=r}else{p.classList.replace("not-is-hidden","is-hidden");var o=v(e);f.innerHTML=o}})),a("xpKCW"),a("32ZrB"),a("cs7FV")}();
//# sourceMappingURL=shopping-list.dc6e4ffe.js.map