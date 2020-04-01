var Shared=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isMobileDevice=window.navigator.userAgent.toLowerCase().includes("mobi")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LUMOS_API_URL="https://zy6kcqa01a.execute-api.us-east-2.amazonaws.com/prod/",t.LUMOS_APP_URL="https://localhost:3000/messenger/",t.QUERY_PARAM_STRING="q",t.MESSAGES={BROWSERBG_BROWSERFG_URL_UPDATED:"BROWSERBG_BROWSERFG_URL_UPDATED"},t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR="lumos_sidebar",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_OVERLAY="lumos_sidebar_overlay",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_TABS="lumos_sidebar_tabs",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_CONTENT="lumos_sidebar_content",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_SHOW="lumos_sidebar_show",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_HIDE="lumos_sidebar_hide",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_DRAWER="lumos_drawer",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_HIDDEN="lumos_hidden",t.STYLE_COLOR_BORDER="#efefef",t.STYLE_COLOR_LINK="#609",t.STYLE_COLOR_TEXT="#333",t.STYLE_COLOR_LUMOS_GOLD="rgb(249, 236, 255, 0.3)",t.STYLE_COLOR_LUMOS_GOLD_SOLID="rgb(249, 236, 255, 1)",t.STYLE_PADDING_PILL="2px 5px",t.STYLE_PADDING_SMALL="5px",t.STYLE_PADDING_MEDIUM="10px",t.STYLE_PADDING_LARGE="15px",t.STYLE_BORDER_RADIUS_PILL="25px",t.STYLE_WIDTH_SIDEBAR="300px",t.STYLE_WIDTH_SIDEBAR_TAB="100px",t.STYLE_WIDTH_SIDEBAR_TAB_LEFT="30px",t.STYLE_WIDTH_SIDEBAR_TAB_RIGHT="65px",t.STYLE_SIDEBAR_HIDER_X_OFFSET="-20px",t.STYLE_SIDEBAR_HIDER_Y_OFFSET="20px",t.STYLE_SIDEBAR_SHOWER_X_OFFSET="30px",t.STYLE_SIDEBAR_SHOWER_Y_OFFSET="30px",t.STYLE_GOOGLE_SERP_EDIT_OFFSET="-25px",t.STYLE_SIDEBAR_TOGGLER_WIDTH="100px",t.STYLE_HEIGHT_DRAWER="50px",t.STYLE_FONT_SIZE_SMALL="10px",t.STYLE_FONT_SIZE_MEDIUM="14px",t.STYLE_FONT_SIZE_LARGE="18px",t.STYLE_ZINDEX_MAX="2147483648",t.INTERCEPTIBLE_SEARCH_HOST_PARAMS={"www.google.com":"q","google.com":"q","www.bing.com":"q"},t.SERP_LINK_CHECK_INTERVAL=500,t.SENTENCE_SELECTION_REGEX=/(\.\s|\r)\b/,t.SELF_SELECT_ELEMENTS="p, li, h1, h2, h3, h4, h5, h6",t.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_MOBILE="SELECTOR_GOOGLE_SERP_RESULT_MOBILE",t.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_IPAD="SELECTOR_GOOGLE_SERP_RESULT_IPAD",t.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_DESKTOP="SELECTOR_GOOGLE_SERP_RESULT_DESKTOP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debug=function(...e){console.log("LUMOS SHARED DEBUG: ",...e)}},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(4)),o(n(1)),o(n(0)),o(n(2))},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function _(e){try{a(o.next(e))}catch(e){r(e)}}function E(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(_,E)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),r=n(0),_=n(5),E=n(1);function a(e,t){let n=document.createElement("img");return n.src=e.href,n.setAttribute("title","Network: "+t),n.setAttribute("style","\n        width: 15px;\n        height: 15px;\n        position: relative;\n        top: 2px;\n        left: -1px;\n    "),n}function c(e,t,n,o,i){let r=document.createElement("div");r.setAttribute("style",`\n        border: 3px solid ${E.STYLE_COLOR_LUMOS_GOLD};\n        border-radius: ${E.STYLE_BORDER_RADIUS_PILL};\n        padding: ${E.STYLE_PADDING_PILL};\n        display: inline-block;\n    `);let _=document.createElement("span");return _.setAttribute("style","font-weight: bold"),_.appendChild(document.createTextNode(o)),r.appendChild(a(e,t)),r.appendChild(document.createTextNode(n)),r.appendChild(_),r.appendChild(document.createTextNode(" • ")),r.appendChild(document.createTextNode(i)),r}function l(e,t,n,o){let i=document.createElement("span");return i.setAttribute("style",`\n        border-bottom: 3px solid ${E.STYLE_COLOR_LUMOS_GOLD};\n        padding: ${E.STYLE_PADDING_PILL} 0;\n        line-height: 1.5;\n    `),i.appendChild(a(e,t)),i.appendChild(document.createTextNode(n)),i.appendChild(document.createTextNode(" • ")),i.appendChild(document.createTextNode(o)),i}function u(e,t,n){let o=document.createElement("div"),i=document.createElement("div");if(i.appendChild(document.createTextNode("✏️")),o.setAttribute("style",`\n        position: absolute;\n        left: ${E.STYLE_GOOGLE_SERP_EDIT_OFFSET};\n        cursor: pointer;\n    `),o.appendChild(i),r.isMobileDevice){const o="reactions",r=t.map((e,t)=>({text:e.text,optionIndex:t}));document[o]=t,i.addEventListener("click",()=>{n({command:"showNativeActionSheet",actionSheetId:"reactions",text:e.host,options:JSON.stringify(r)})})}else{let e=document.createElement("div");function _(e){e.style.visibility="hidden"}e.setAttribute("style",`\n            position: absolute;\n            right: 0;\n            background: white;\n            top: ${E.STYLE_FONT_SIZE_LARGE};\n            border: 1px solid ${E.STYLE_COLOR_BORDER};\n            padding: ${E.STYLE_PADDING_MEDIUM} 0;\n            color: ${E.STYLE_COLOR_LINK};\n            z-index: ${E.STYLE_ZINDEX_MAX}\n        `),_(e),function(e,t){t.forEach((function(t){let n=document.createElement("div");n.setAttribute("style",`\n                    padding: ${E.STYLE_PADDING_SMALL} ${E.STYLE_PADDING_LARGE};\n                `),n.appendChild(document.createTextNode(t.text)),n.addEventListener("click",()=>{_(e),t.callback()},!1),e.appendChild(n)}))}(e,t),o.appendChild(e),i.addEventListener("click",()=>{!function(e){return"visible"===e.style.visibility}(e)?function(e){e.style.visibility="visible"}(e):_(e)}),o.appendChild(e)}return o}function s(e){i.debug("function call - serpDocumentToLinks",e);const t=new URL(e.location.href);return _.isGoogleSerpUrl(t)?_.googleSerpDocumentToLinks(e):Promise.resolve([])}function d(e,t,n){return o(this,void 0,void 0,(function*(){(yield _.getGoogleSearchContainers(e)).forEach((function(e){e.querySelector("a").href===t.href&&(e.parentNode.insertBefore(n,e),r.isMobileDevice?(n.style.marginLeft="10px",n.style.marginTop="5px"):n.style.marginRight="5px",n.style.marginBottom="5px")}))}))}t.modifyPage=function(e,t,n,r,_){return o(this,void 0,void 0,(function*(){if(function(e){i.debug("function call - isInterceptibleSearchPage",e);const t=E.INTERCEPTIBLE_SEARCH_HOST_PARAMS[e.hostname];return t?e.searchParams.get(t):null}(e)){(yield s(n)).forEach((function(e){r({command:"getPublicationInformation",data:{link:e}}),r({command:"createWebUrlAndPublisher",data:{link:e}})})),r({command:"graphQLQuery",data:{queryName:"listNetworkPublicationReactions"}}),_({window:t,message:"newPublicationInformation",callback:e=>{let t=e.data;!function(e,t){t.publicationData.forEach(n=>{if(n.reaction){let o=c(new URL(n.networkIcon),n.networkName,n.reactionIcon,n.reaction,n.opinionatorName);d(e,new URL(t.link),o)}if(n.bio){let o=l(new URL(n.networkIcon),n.networkName,n.opinionatorName,n.bio);d(e,new URL(t.link),o)}})}(n,t)}}),_({window:t,message:"nativeActionSheetOption",callback:e=>{const t=e.data.optionIndex,o=e.data.actionSheetId,i=n[o][t];i&&i.callback()}}),_({window:t,message:"nativeAlertAnswer",callback:e=>{console.log(e.data.text)}}),_({window:t,message:"graphQLQuery",callback:({data:e})=>{if("listNetworkPublicationReactions"===e.queryName){let t=e.result;!function(e,t,n){o(this,void 0,void 0,(function*(){(yield s(e)).forEach((function(o){var r;let _=[];null===(r=t.listNetworkPublicationReactions.items)||void 0===r||r.forEach(e=>{_.push({text:(e.emoji||"")+e.reaction,callback:()=>{i.debug("REACTION",e.reaction,"on",o),n({command:"createPublisherOpinion",data:{publisherReactionId:e.id,networkId:e.network.id,link:o}})}})});let E=u(new URL(o),_,n);d(e,new URL(o),E)}))}))}(n,t,r)}}})}}))}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function _(e){try{a(o.next(e))}catch(e){r(e)}}function E(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(_,E)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(0);function _(e){const t=r.isMobileDevice?i.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_MOBILE:i.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_DESKTOP,n=JSON.stringify([i.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_MOBILE,i.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_DESKTOP]);let o=JSON.parse(localStorage.getItem("config"));return o&&(o=o[t]),o?(fetch(`${i.LUMOS_API_URL}get-configuration?keys=${n}`).then(e=>e.json()).then(e=>localStorage.setItem("config",JSON.stringify(e))).catch(e=>console.error(e)),Promise.resolve(e.querySelectorAll(o))):fetch(`${i.LUMOS_API_URL}get-configuration?keys=${n}`).then(e=>e.json()).then(n=>(localStorage.setItem("config",JSON.stringify(n)),o=n[t],e.querySelectorAll(o))).catch(e=>(console.error(e),new NodeList))}t.getGoogleSearchContainers=_,t.isGoogleSerpUrl=function(e){return"www.google.com"===e.hostname&&"/search"===e.pathname&&null!==e.searchParams.get("q")&&void 0!==e.searchParams.get("q")},t.googleSerpDocumentToLinks=function(e){return o(this,void 0,void 0,(function*(){let t=[];return(yield _(e)).forEach((function(e){t.push(e.querySelector("a").href)})),t}))}}]);