var Shared=function(e){function t(t){for(var o,a,l=t[0],c=t[1],_=t[2],d=0,u=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(s&&s(t);u.length;)u.shift()();return r.push.apply(r,_||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={0:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonpShared=window.webpackJsonpShared||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var _=0;_<l.length;_++)t(l[_]);var s=c;return r.push([6,1]),n()}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IN_DEBUG_MODE=!0,t.NETWORK_IMAGE_BASE_URL="https://lumos2a72105a8e92d4d7888e81371d961ba33135845-prod.s3.us-east-2.amazonaws.com/public/networkImage.",t.LUMOS_API_URL="https://zy6kcqa01a.execute-api.us-east-2.amazonaws.com/prod/",t.LUMOS_APP_BASE_URL_DEBUG="https://localhost:3000",t.LUMOS_APP_BASE_URL_PROD="https://app.lumosbrowser.com",t.LUMOS_APP_BASE_URL=t.IN_DEBUG_MODE?t.LUMOS_APP_BASE_URL_DEBUG:t.LUMOS_APP_BASE_URL_PROD,t.LUMOS_APP_URL=t.LUMOS_APP_BASE_URL+"/messenger/",t.QUERY_PARAM_STRING="q",t.MESSAGES={BROWSERBG_BROWSERFG_URL_UPDATED:"BROWSERBG_BROWSERFG_URL_UPDATED"},t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR="lumos_sidebar",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_OVERLAY="lumos_sidebar_overlay",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_TABS="lumos_sidebar_tabs",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_CONTENT="lumos_sidebar_content",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_SHOW="lumos_sidebar_show",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_SIDEBAR_HIDE="lumos_sidebar_hide",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_DRAWER="lumos_drawer",t.CONTENT_PAGE_ELEMENT_ID_LUMOS_HIDDEN="lumos_hidden",t.STYLE_COLOR_BORDER="#efefef",t.STYLE_COLOR_LINK="#609",t.STYLE_COLOR_TEXT="#333",t.STYLE_COLOR_TEXT_LIGHT="#777",t.STYLE_COLOR_LUMOS_GOLD="rgb(249, 236, 105, 0.3)",t.STYLE_COLOR_LUMOS_GOLD_SOLID="rgb(249, 236, 105, 1)",t.STYLE_COLOR_LUMOS_DARK_GOLD="#FFB302",t.STYLE_PADDING_PILL="2px 5px",t.STYLE_PADDING_SMALL="5px",t.STYLE_PADDING_MEDIUM="10px",t.STYLE_PADDING_LARGE="15px",t.STYLE_BORDER_RADIUS_PILL="25px",t.STYLE_WIDTH_SIDEBAR="300px",t.STYLE_WIDTH_SIDEBAR_TAB="100px",t.STYLE_WIDTH_SIDEBAR_TAB_LEFT="30px",t.STYLE_WIDTH_SIDEBAR_TAB_RIGHT="65px",t.STYLE_SIDEBAR_HIDER_X_OFFSET="-20px",t.STYLE_SIDEBAR_HIDER_Y_OFFSET="20px",t.STYLE_SIDEBAR_SHOWER_X_OFFSET="30px",t.STYLE_SIDEBAR_SHOWER_Y_OFFSET="30px",t.STYLE_GOOGLE_SERP_EDIT_OFFSET="-20px",t.STYLE_SIDEBAR_TOGGLER_WIDTH="100px",t.STYLE_HEIGHT_DRAWER="50px",t.STYLE_FONT_SIZE_SMALL="10px",t.STYLE_FONT_SIZE_MEDIUM="14px",t.STYLE_FONT_SIZE_LARGE="18px",t.STYLE_ZINDEX_MAX="2147483648",t.INTERCEPTIBLE_SEARCH_HOST_PARAMS={"www.google.com":"q","google.com":"q","www.bing.com":"q"},t.SERP_LINK_CHECK_INTERVAL=500,t.SENTENCE_SELECTION_REGEX=/(\.\s|\r)\b/,t.HIGHLIGHTS_VALID_ELEMENTS_TO_SEARCH="div, p, li, h1, h2, h3, h4, h5, h6",t.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_MOBILE="SELECTOR_GOOGLE_SERP_RESULT_MOBILE",t.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_IPAD="SELECTOR_GOOGLE_SERP_RESULT_IPAD",t.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_DESKTOP="SELECTOR_GOOGLE_SERP_RESULT_DESKTOP",t.DEFAULT_CONFIGS={SELECTOR_GOOGLE_SERP_RESULT_MOBILE:".xpd",SELECTOR_GOOGLE_SERP_RESULT_IPAD:"#main.xpd",SELECTOR_GOOGLE_SERP_RESULT_DESKTOP:".g .rc"},t.REACTION_EMOJI_AND_TEXT={STAR:"❤️ Great resource!",GOOD_AUTHOR:"👨‍⚕️ Great author",GOOD_PUBLISHER:"💯 I trust this publication",GOOD_CITATIONS:"🎓 Well cited ",NOT_USEFUL:"🤷 Not useful for this topic",FLAG:"💩 Bad Science",BAD_CITATIONS:"🧐 Needs citations"},t.LUMOS_NETWORK_CHECKBOX_CLASS="lumos-network-checkbox",t.HIGHLIGHT_BAR_HIGHLIGHTED_TEXT_ID="highlight-bar-highlighted-text",t.HIGHLIGHT_BAR_ID="highlight-bar",t.NETWORK_SELECTION_BAR_ID="network-selection-bar",t.AUTOMATIC_HIGHLIGHTS_CLASS="automatic-highlights",t.USER_HIGHLIGHTS_CLASS="user-highlights",t.STYLE_HIGHLIGHT_BAR_HEIGHT="60px",t.STYLE_HIGHLIGHT_BAR_WIDTH="100%",t.STYLE_HIGHLIGHT_BAR_BACKGROUND_COLOUR="yellow",t.STYLE_HIGHLIGHT_BAR_POSITION="fixed",t.STYLE_HIGHLIGHT_BAR_BOTTOM="0",t.STYLE_HIGHLIGHT_BAR_LEFT="0",t.STYLE_MARK_DEFAULT_BACKGROUND_COLOUR="transparent",t.STYLE_AUTOMATIC_HIGHLIGHT_BACKGROUND_COLOUR="yellow",t.STYLE_USER_HIGHLIGHT_BACKGROUND_COLOUR="greenyellow",t.STYLE_MARK_1_HIGHLIGHT_BACKGROUND_COLOUR="plum",t.STYLE_MARK_2_HIGHLIGHT_BACKGROUND_COLOUR="blueviolet"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isMobileDevice=window.navigator.userAgent.toLowerCase().includes("mobi")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.debug=function(...e){o.IN_DEBUG_MODE&&console.log("LUMOS SHARED DEBUG: ",...e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HOST_BLACKLIST=["localhost","localhost:3000","www.facebook.com","mail.google.com","app.asana.com","calendar.google.com","www.messenger.com","www.google.com"];t.DEFAULT_MEMBERSHIPS=["8fd59480-8ea1-4e8d-98c1-fb83ccf56855","a816ec16-1e25-4aac-b212-61cdf0c0dd1c","e7e1597e-ab88-4f1f-9541-1fd097552ff9"],t.NETWORK_IMAGE_BASE_URL="https://lumos2a72105a8e92d4d7888e81371d961ba33135845-prod.s3.us-east-2.amazonaws.com/public/networkImage.",t.MESSAGES={WEB_CONTENT_HIGHLIGHT_CREATE_NEW_HIGHLIGHT:"createNewHighlight",WEB_CONTENT_HIGHLIGHT_SHOW_AUTOMATIC_HIGHLIGHT:"showAutomaticHighlight",WEB_CONTENT_HIGHLIGHT_SHOW_NETWORK_HIGHLIGHT:"showNetworkHighlight",WEB_CONTENT_HIGHLIGHT_SHOW_USER_HIGHLIGHT:"showUserHighlight",CONTENT_WEB_HIGHLIGHT_SAVE_SELECTED_TEXT:"saveSelectedText",CONTENT_WEB_HIGHLIGHT_GET_ALL_HIGHLIGHT:"getAllHighlight"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(0);function r(e){let t=document.createElement("span");if("string"!=typeof e){let n=e,o=document.createElement("img");return o.src=n.href,o.setAttribute("style","\n            width: 15px;\n            height: 15px;\n            position: relative;\n            top: 2px;\n            left: -1px;\n        "),t.appendChild(o)}return(t.appendChild(document.createTextNode(e)),t)}function a({firstIcon:e,secondIcon:t,preText:n,reactionImage:a,reactionText:l,postText:c,expanded:_=!1,removeCallback:s}){let d=document.createElement("div");if(d.setAttribute("style",`\n        border-bottom: 1px solid ${i.STYLE_COLOR_LUMOS_GOLD_SOLID};\n        // border-radius: ${i.STYLE_BORDER_RADIUS_PILL};\n        padding: ${i.STYLE_PADDING_PILL} 0;\n        margin-right: ${i.STYLE_PADDING_SMALL};\n        line-height: 1.5;\n        display: inline-block;\n    `),d.appendChild(r(e)),d.appendChild(r(t)),n&&d.appendChild(document.createTextNode(" • "+n+" • ")),a&&l){d.appendChild(r(a));const e=document.createTextNode(l);d.appendChild(e),_||o.isMobileDevice||(e.textContent="",d.addEventListener("mouseenter",()=>{e.textContent=l+" • "}),d.addEventListener("mouseleave",()=>{e.textContent=""}))}if(c){let e=document.createElement("span");e.appendChild(document.createTextNode(c)),d.appendChild(e)}if(s){let e=document.createElement("span");e.appendChild(document.createTextNode(" ✕")),e.setAttribute("style","cursor: pointer;"),e.addEventListener("click",()=>{s()}),d.appendChild(e)}return d}function l(e,t,n,o){let r=document.createElement("span");r.setAttribute("style",`\n        border-bottom: 1px solid ${i.STYLE_COLOR_LUMOS_GOLD_SOLID};\n        padding: ${i.STYLE_PADDING_PILL} 0;\n        line-height: 1.5;\n    `);let a=document.createElement("span");return a.setAttribute("style","\n        font-style: italic;\n    "),a.appendChild(document.createTextNode(o)),r.appendChild(document.createTextNode(n)),r.appendChild(document.createTextNode(": ")),r.appendChild(a),r}function c(e,t,n){let o=document.createElement(n||"span");return o.setAttribute("style",`\n        color: ${i.STYLE_COLOR_TEXT};\n        text-decoration: none;\n        font-family: sans-serif;\n    `),o.id=e,o.setAttribute("data-id",e),o.setAttribute("data-type",t),o}function _(e,t,n){"before"===n?e.parentNode.insertBefore(t,e):"after"===n?e.nextSibling?e.parentNode.insertBefore(t,e):e.parentNode.appendChild(t):"inside"===n&&e.appendChild(t)}function s(e,t,n,o){let i=c(o,"listComponentCreate");return i.id="lumos_list_"+o,_(t,i,n),{id:i.id,element:i}}function d(e,t){return!!e.getElementById("lumos_list_"+t)}function u(e,t,n){let o=e.getElementById("lumos_list_"+t),i=n;Array.from(o.children).forEach(e=>{o.removeChild(e)}),i.forEach(e=>{o.appendChild(e)})}t.createOrGetElementById=function(e,t,n){let o=e.getElementById(t);return o||(o=c(t,"",n),e.body.appendChild(o)),o},t.stylePill=function(e){o.isMobileDevice?(e.style.marginLeft="10px",e.style.marginTop="5px"):e.style.marginRight="5px",e.style.marginBottom="5px"},t.componentNetworkImage=function(e,t){let n=document.createElement("img");return n.src=e.href,n.setAttribute("title","Network: "+t),n.setAttribute("style","\n        width: 15px;\n        height: 15px;\n        position: relative;\n        top: 2px;\n        left: -1px;\n    "),n},t.componentReactionPill=a,t.componentBio=l,t.componentPublicationReactions=function(e,t,n){let r=document.createElement("span"),a=document.createElement("span");if(a.appendChild(document.createTextNode("▼")),a.setAttribute("style",`\n        cursor: pointer;\n        color: ${i.STYLE_COLOR_LUMOS_GOLD_SOLID}\n    `),o.isMobileDevice?r.setAttribute("style",`\n            position: absolute;\n            right: ${i.STYLE_PADDING_MEDIUM};\n            top: ${i.STYLE_PADDING_LARGE};\n        `):r.setAttribute("style",`\n            position: absolute;\n            left: ${i.STYLE_GOOGLE_SERP_EDIT_OFFSET};\n            top: 2px;\n        `),r.appendChild(a),o.isMobileDevice){const o="reactions",i=t.map((e,t)=>Object.assign(Object.assign({},e),{optionIndex:t}));a.addEventListener("click",()=>{document[o]=t,n({command:"showNativeActionSheet",data:{actionSheetId:o,text:e.host,options:JSON.stringify(i)}})})}else{let e=document.createElement("div");function l(e){e.style.visibility="hidden"}e.setAttribute("style",`\n            position: absolute;\n            right: 0;\n            background: white;\n            top: ${i.STYLE_FONT_SIZE_LARGE};\n            border: 1px solid ${i.STYLE_COLOR_BORDER};\n            color: ${i.STYLE_COLOR_LINK};\n            z-index: ${i.STYLE_ZINDEX_MAX}\n        `),l(e),function(e,t){t.forEach((function(t){let n=document.createElement("div");t.isSeparator?(n.appendChild(document.createTextNode(t.text)),n.setAttribute("style",`\n                        padding: ${i.STYLE_PADDING_SMALL} ${i.STYLE_PADDING_LARGE};\n                        border-bottom: 1px solid ${i.STYLE_COLOR_BORDER};\n                        border-top: 1px solid ${i.STYLE_COLOR_BORDER};\n                        color: ${i.STYLE_COLOR_TEXT_LIGHT};\n                    `)):(n.setAttribute("style",`\n                        padding: ${i.STYLE_PADDING_SMALL} ${i.STYLE_PADDING_LARGE};\n                        cursor: pointer;\n                    `),n.appendChild(document.createTextNode(t.text)),n.addEventListener("click",()=>{l(e),t.callback()},!1)),e.appendChild(n)}))}(e,t),r.appendChild(e),a.addEventListener("click",()=>{!function(e){return"visible"===e.style.visibility}(e)?function(e){e.style.visibility="visible"}(e):l(e)}),r.appendChild(e)}return r},t.createUIWrapper=c,t.insertElement=_,t.listComponentCreate=s,t.listComponentExists=d,t.listComponentGetByName=function(e,t){return e.getElementById("lumos_list_"+t)},t.listComponentUpdate=u,t.listComponentCreateOrUpdate=function(e,t,n,o,i){d(e,o)||s(0,t,n,o),u(e,o,i)},t.uiPublicationOpinionatorNetworkInfo_ReactionPill=function(e,t=null,n=!1){let o=c(e.id,"uiPublicationOpinionatorNetworkInfo_ReactionPill");return o.appendChild(a({firstIcon:"",secondIcon:"",reactionImage:e.reaction.emoji,reactionText:e.reaction.reaction,postText:e.opinionator.name,removeCallback:t,expanded:n})),o},t.uiPublicationOpinionatorNetworkInfo_Bio=function(e){let t=c(e.id,"uiPublicationOpinionatorNetworkInfo_Bio");return t.appendChild(l(0,e.network.name,e.opinionator.name,e.bio)),t},t.uiWebUrlOpinionatorNetworkInfo_ReactionPill=function(e,t=!1){let n=c(e.id,"uiWebUrlOpinionatorNetworkInfo_ReactionPill");return n.appendChild(a({firstIcon:"",secondIcon:"",reactionImage:e.reaction.emoji,reactionText:e.reaction.reaction,postText:e.opinionator.name,expanded:t})),n},t.uiWebUrlOpinionatorNetworkInfo_Bio=function(e){let t=c(e.id,"uiWebUrlOpinionatorNetworkInfo_Bio");return t.appendChild(l(0,e.network.name,e.opinionator.name,e.comment)),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),i=n(3),r=n(11),a=new Map,l=new Map;function c(e,t,n,i,c,_){const s=new r(e.querySelectorAll("body"));i?s.mark(t,{className:o.AUTOMATIC_HIGHLIGHTS_CLASS,separateWordSearch:!1,acrossElements:!0,each:e=>{e.setAttribute("data-opinionator",n)}}):c?(l.has(c)||l.set(c,_),s.mark(t,{className:a.has(c)?a.get(c):(a.set(c,`mark-${a.size+1}`),`mark-${a.size}`),separateWordSearch:!1,acrossElements:!0,each:e=>{e.setAttribute("data-opinionator",n)}})):s.mark(t,{className:o.USER_HIGHLIGHTS_CLASS,separateWordSearch:!1,acrossElements:!0,each:e=>{e.setAttribute("data-opinionator",n)}})}function _(e,t){let n=e.getSelection().toString();n&&(c(e,n,t,!1,null,null),e.getSelection().removeAllRanges())}function s(e){let t=document.createElement("div");return t.setAttribute("id",e),t.setAttribute("style",`\n        height: ${o.STYLE_HIGHLIGHT_BAR_HEIGHT};\n        width: ${o.STYLE_HIGHLIGHT_BAR_WIDTH};\n        background-color: ${o.STYLE_HIGHLIGHT_BAR_BACKGROUND_COLOUR};\n        position: ${o.STYLE_HIGHLIGHT_BAR_POSITION};\n        left: ${o.STYLE_HIGHLIGHT_BAR_BOTTOM};\n        bottom: ${o.STYLE_HIGHLIGHT_BAR_LEFT};\n        z-index: ${o.STYLE_ZINDEX_MAX};\n    `),t}function d(e,t,n,r){let a=s(o.NETWORK_SELECTION_BAR_ID);a.appendChild(e.createTextNode("Select Network(s)")),t.forEach(t=>{const n=e.createElement("input");n.type="checkbox",n.name=t.name,n.value=t.id,n.id=t.id,n.classList.add(o.LUMOS_NETWORK_CHECKBOX_CLASS);const i=e.createElement("label");i.htmlFor=t.id,i.appendChild(e.createTextNode(t.name)),a.appendChild(n),a.appendChild(i)});let l=e.createElement("button");return l.innerHTML="Submit",l.onclick=()=>function(e,t,n){const r=Array.from(e.querySelectorAll(`.${o.LUMOS_NETWORK_CHECKBOX_CLASS}`)).filter(e=>!0===e.checked);if(r.length){const a=r.map(e=>e.value);let l=e.getElementById(o.NETWORK_SELECTION_BAR_ID);e.body.removeChild(l),_(e,null),n({command:i.MESSAGES.CONTENT_WEB_HIGHLIGHT_SAVE_SELECTED_TEXT,data:{link:e.location.href,selectedNetworks:a,highlightSelection:t}})}}(e,n,r),a.appendChild(l),a}t.addHighlightStylesheet=function(e){const t=e.createElement("style");t.type="text/css",t.innerHTML=`\n    mark {\n\t\tbackground-color: ${o.STYLE_MARK_DEFAULT_BACKGROUND_COLOUR};\n\t\tcolor: initial;\n    }\n    .${o.AUTOMATIC_HIGHLIGHTS_CLASS} {\n        background-color: ${o.STYLE_AUTOMATIC_HIGHLIGHT_BACKGROUND_COLOUR};\n    }\n    .${o.USER_HIGHLIGHTS_CLASS} {\n        background-color: ${o.STYLE_USER_HIGHLIGHT_BACKGROUND_COLOUR};\n    }\n    .mark-1 {\n        background-color: ${o.STYLE_MARK_1_HIGHLIGHT_BACKGROUND_COLOUR};\n    }\n    .mark-2 {\n        background-color: ${o.STYLE_MARK_2_HIGHLIGHT_BACKGROUND_COLOUR};\n    }`,e.getElementsByTagName("head")[0].appendChild(t)},t.addExistingHighlightToPage=c,t.modifyPageWithHighlightCreation=_,t.createHighlightSelectionText=function(e){const t={selectedText:"",selectedTextParentTag:"",selectedTextParentText:""};if(e.getSelection&&(t.selectedText=e.getSelection().toString()),e.getSelection()&&e.getSelection().rangeCount){var n=e.getSelection().getRangeAt(0).commonAncestorContainer;let{selectedTextParentTag:i,selectedTextParentText:r}=function(e){for(var t=e;e;)if(t){if(t.tagName&&o.HIGHLIGHTS_VALID_ELEMENTS_TO_SEARCH.includes(t.tagName.toLowerCase())){return{selectedTextParentTag:t.tagName.toLowerCase(),selectedTextParentText:t.textContent}}t=t.previousElementSibling}else t=e=e.parentElement}(n);t.selectedTextParentTag=i,t.selectedTextParentText=r}return t},t.createHighlightInfoBar=function(e){let t=s(o.HIGHLIGHT_BAR_ID);t.appendChild(document.createTextNode("Press 'H' to save highlight"));const n=document.createElement("div");return n.id=o.HIGHLIGHT_BAR_HIGHLIGHTED_TEXT_ID,n.appendChild(document.createTextNode(e)),t.appendChild(n),t},t.modifyPageWithHighlightNetworkSelection=function(e,t,n,i){let r=e.getElementById(o.NETWORK_SELECTION_BAR_ID);if(!r){function a(t){!function(t){"Escape"===t.key&&(e.body.removeChild(r),e.removeEventListener("keyup",a,!1))}(t)}r=d(e,t,n,i),e.body.appendChild(r),e.addEventListener("keyup",a,!1)}}},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(7)),o(n(0)),o(n(1)),o(n(2))},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(3),r=n(8),a=n(10),l=n(5),c=n(2);t.modifyPage=function(e,t,n,_,s,d){return o(this,void 0,void 0,(function*(){if(r.serpUrlToSearchText(e)){const e=yield r.serpDocumentToLinks(n);_({command:"getBatchUrlandPublicationInformation",data:{links:e}}),s({window:t,message:"newUrlandPublicationInformation",callback:e=>{let t=e.data;r.modifySerpWithURLAndPublicationInfo(n,t.publicationData,t.linkData,new URL(t.link),t.user,_)}});const o=(e,n,o)=>{s({window:t,message:"graphQLQuery",callback:({data:t})=>{c.debug("graphQLQuery",t,n,JSON.stringify(n)==JSON.stringify(t.queryVariables)),t.queryName===e&&JSON.stringify(n)==JSON.stringify(t.queryVariables)&&o(t.result)}})};let i={filter:{or:d.map(e=>({networkPublicationReactionNetworkId:{eq:e.id}}))},limit:100};const a="listNetworkPublicationReactions";o(a,i,e=>{let t=e;r.modifySerpWithReactionEditor(n,t,_)}),_({command:"graphQLQuery",data:{queryName:a,queryVariables:i}}),s({window:t,message:"nativeActionSheetOption",callback:e=>{const t=e.data.optionIndex,o=e.data.actionSheetId,i=n[o][t];i&&i.callback()}}),s({window:t,message:"nativeAlertAnswer",callback:e=>{c.debug(e.data.text)}})}else{const e=n.location.href;n.addEventListener("mouseup",e=>a.highlightText(n,d,_)),l.addHighlightStylesheet(n),s({window:t,message:"newUrlandPublicationInformation",callback:e=>{let t=e.data;a.modifyNonSerpWithURLAndPublicationInfo(n,t)}}),s({window:t,message:i.MESSAGES.WEB_CONTENT_HIGHLIGHT_CREATE_NEW_HIGHLIGHT,callback:e=>{const{opinionator:t}=e.data;l.modifyPageWithHighlightCreation(n,t)}}),s({window:t,message:i.MESSAGES.WEB_CONTENT_HIGHLIGHT_SHOW_AUTOMATIC_HIGHLIGHT,callback:e=>{const{highlight:t,opinionator:o}=e.data;l.addExistingHighlightToPage(n,t,o,!0,null,null)}}),s({window:t,message:i.MESSAGES.WEB_CONTENT_HIGHLIGHT_SHOW_NETWORK_HIGHLIGHT,callback:e=>{const{highlight:t,opinionator:o,networkID:i,networkName:r}=e.data;l.addExistingHighlightToPage(n,t,o,!1,i,r)}}),s({window:t,message:i.MESSAGES.WEB_CONTENT_HIGHLIGHT_SHOW_USER_HIGHLIGHT,callback:e=>{const{highlight:t,opinionator:o}=e.data;l.addExistingHighlightToPage(n,t,o,!1,null,null)}}),_({command:"getUrlandPublicationInformation",data:{link:e}}),_({command:i.MESSAGES.CONTENT_WEB_HIGHLIGHT_GET_ALL_HIGHLIGHT,data:{link:e}})}}))}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(4),r=n(0),a=n(2),l=n(9),c=n(1);function _(e){a.debug("function call - serpDocumentToLinks",e);const t=new URL(e.location.href);return l.isGoogleSerpUrl(t)?l.googleSerpDocumentToLinks(e):Promise.resolve([])}function s(e,t){return o(this,void 0,void 0,(function*(){let n=null;return(yield l.getGoogleSearchContainers(e)).forEach((function(e){e.querySelector("a").href===t.href&&(n=e)})),n}))}t.serpUrlToSearchText=function(e){a.debug("function call - isInterceptibleSearchPage",e);const t=r.INTERCEPTIBLE_SEARCH_HOST_PARAMS[e.hostname];return t?e.searchParams.get(t):null},t.serpDocumentToLinks=_,t.getLinkContainerInSerp=s,t.modifySerpWithURLAndPublicationInfo=function(e,t,n,_,d,u){return o(this,void 0,void 0,(function*(){let o=yield s(e,_);if(!o)return;let E=l.getContainerForElementInGoogleResult(o,"domain_info"),p=l.getContainerForElementInGoogleResult(o,"anchor"),T=l.getContainerForElementInGoogleResult(o,"cached"),L=l.getContainerForElementInGoogleResult(o,"title");if(!c.isMobileDevice)try{o.style.marginTop="40px";let e=E.parentElement;e.style.position="relative",e.style.display="block";let t=p.querySelector("br");t&&t.remove(),p.insertBefore(e,L)}catch(e){a.debug("error in repositioning google serp",e)}if(t){let n=t.filter(e=>!!e.reaction).map(e=>d&&e.opinionator.id==d.opinionator.id?i.uiPublicationOpinionatorNetworkInfo_ReactionPill(e,()=>{u({command:"removePublicationOpinion",data:{opinion:e,link:_}})}):i.uiPublicationOpinionatorNetworkInfo_ReactionPill(e));i.listComponentCreateOrUpdate(e,p,"before","pub_reaction_"+_.href,n);let a=i.listComponentGetByName(e,"pub_reaction_"+_.href);c.isMobileDevice?a.setAttribute("style",`\n                padding: ${r.STYLE_PADDING_SMALL} ${r.STYLE_PADDING_LARGE} 0 ${r.STYLE_PADDING_LARGE};\n                display: block;\n            `):a.setAttribute("style","\n                position: absolute;\n                top: -23px;\n                white-space: nowrap;\n                overflow: hidden;\n            "),t.filter(e=>e.reaction&&"Blacklisted"===e.reaction.reaction&&e.opinionator.id==d.opinionator.id).length>0&&l.modifyBlacklistedGoogleSearchResult(o),t.filter(e=>e.reaction&&"Trusted"===e.reaction.reaction&&e.opinionator.id==d.opinionator.id).length>0&&l.modifyTrustedGoogleSearchResult(o);let s=t.filter(e=>!!e.bio).map(e=>i.uiPublicationOpinionatorNetworkInfo_Bio(e));i.listComponentCreateOrUpdate(e,E,"after","pub_bio_"+_.href,s);let L=i.listComponentGetByName(e,"pub_bio_"+_.href);c.isMobileDevice||L.setAttribute("style","\n                // margin-left: 20px;\n            ");let S=E.innerText.split("›").slice(0,2).join("›");E.innerHTML=S,T&&(T.style.display="none")}if(n){let t=l.getContainerForElementInGoogleResult(o,"preview_snippet"),r=n.filter(e=>!!e.reaction).map(e=>i.uiWebUrlOpinionatorNetworkInfo_ReactionPill(e));i.listComponentCreateOrUpdate(e,t,"after","url_reaction_"+_.href,r)}}))},t.modifySerpWithReactionEditor=function(e,t,n){return o(this,void 0,void 0,(function*(){if(a.debug("modifySerpWithReactionEditor"),!(e&&t&&n))return;const r=yield _(e);let c={};const d=new Set(t.listNetworkPublicationReactions.items.map(e=>(c[e.network.id]=e.network.name,e.network.id)));r.forEach((function(r){return o(this,void 0,void 0,(function*(){let _=new URL(r),u=[];u.push({text:_.host,isSeparator:!0}),d.forEach(e=>o(this,void 0,void 0,(function*(){var o;u.push({text:"Network: "+c[e],isSeparator:!0}),null===(o=t.listNetworkPublicationReactions.items)||void 0===o||o.filter(t=>Boolean(t.network.id===e&&!t.autogenerated)).forEach(e=>{u.push({text:(e.emoji||"")+e.reaction,callback:()=>{a.debug("REACTION",e.reaction,"on",r),n({command:"createPublisherOpinion",data:{publisherReactionId:e.id,networkId:e.network.id,link:r}})}})}),u.push({text:"💬 Edit bio",callback:()=>{const t=window.prompt("Add or edit a description for "+_.hostname,"");n({command:"editPublisherBio",data:{text:t,networkId:e,link:r}})}})})));let E=new URL(r),p=i.componentPublicationReactions(E,u,n),T=yield s(e,E);if(!T)return;let L=l.getContainerForElementInGoogleResult(T,"anchor");i.insertElement(L,p,"before")}))}))}))}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(0),r=n(1);function a(e){const t=r.isMobileDevice?i.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_MOBILE:i.CONFIG_SELECTOR_GOOGLE_SERP_RESULT_DESKTOP;return Promise.resolve(e.querySelectorAll(i.DEFAULT_CONFIGS[t]))}function l(e,t){let n=r.isMobileDevice?".qzEoUe":"cite",o=r.isMobileDevice?".PpBGzd":"h3",i=r.isMobileDevice?".MUxGbd":".st";switch(t){case"domain_info":return e.querySelector(n);case"title":return e.querySelector(o);case"preview_snippet":return e.querySelector(i);case"anchor":return e.querySelector("a");case"section_links":return e.querySelector(".osl");case"cached":return e.querySelector(".eFM0qc");default:return null}}t.getGoogleSearchContainers=a,t.getContainerForElementInGoogleResult=l,t.isGoogleSerpUrl=function(e){return"www.google.com"===e.hostname&&"/search"===e.pathname&&null!==e.searchParams.get("q")&&void 0!==e.searchParams.get("q")},t.googleSerpDocumentToLinks=function(e){return o(this,void 0,void 0,(function*(){let t=[];return(yield a(e)).forEach((function(e){t.push(e.querySelector("a").href)})),t}))},t.modifyBlacklistedGoogleSearchResult=function(e){let t=l(e,"title"),n=l(e,"domain_info");n&&t&&(n.setAttribute("style","text-decoration: line-through;"),t.setAttribute("style",`color: ${i.STYLE_COLOR_TEXT_LIGHT}`))},t.modifyTrustedGoogleSearchResult=function(e){let t=l(e,"domain_info");t&&(t.style.fontWeight="bold")}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(4),r=n(0),a=n(5),l="\n    display: inline-block;\n    max-width: 150px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: bottom;\n";t.modifyNonSerpWithURLAndPublicationInfo=function(e,t){return o(this,void 0,void 0,(function*(){let n=i.createOrGetElementById(e,"lumos_nonserp_info","div");n.setAttribute("style",`\n        visibility: hidden;\n        position: fixed;\n        box-sizing: border-box;\n        bottom: 0;\n        width: 100%;\n        z-index: ${r.STYLE_ZINDEX_MAX};\n        font-size: ${r.STYLE_FONT_SIZE_MEDIUM};\n        padding: 5px;\n        max-height: 5px;\n        transition: max-height 0.25s ease-out;\n        overflow: hidden;\n        border-top: 5px solid ${r.STYLE_COLOR_LUMOS_GOLD_SOLID};\n        background: white;\n        left: 0;\n        right: 0;\n    `);let o=!1;function a(){o||(n.style.maxHeight="5px",n.style.backgroundColor=r.STYLE_COLOR_LUMOS_GOLD_SOLID)}function c(){n.style.maxHeight="200px",n.style.backgroundColor="white",setTimeout(()=>{a()},3e3)}n.addEventListener("mouseenter",e=>{c(),o=!0}),n.addEventListener("mouseleave",e=>{o=!1,setTimeout(()=>{a()},3e3)}),window.addEventListener("touchend",(function(){e.body.scrollTop<0&&c()}));let _=t.linkData;if(_){let t=null,o=_.filter(e=>(t=new URL(e.webUrl.url).pathname,!!e.reaction)).map(e=>i.uiWebUrlOpinionatorNetworkInfo_ReactionPill(e,!0));if(t&&o.length>0){let r=i.createUIWrapper("lumos_nonserp_info_url","","div"),a=e.createElement("span");a.setAttribute("style",l),a.appendChild(e.createTextNode(`${t} • `)),r.appendChild(a),n.appendChild(r),i.listComponentCreateOrUpdate(e,r,"inside","url_info_nonserp",o)}}let s=t.publicationData;if(s){let t=null,o=s.filter(e=>!!e.reaction).map(e=>(t=e.publication.name,i.uiPublicationOpinionatorNetworkInfo_ReactionPill(e,null,!0))),r=s.filter(e=>!!e.bio).map(e=>(t=e.publication.name,i.uiPublicationOpinionatorNetworkInfo_Bio(e)));if(t&&(r.length>0||o.length>0)){let a=i.createUIWrapper("lumos_nonserp_info_pub","","div"),c=e.createElement("span");c.appendChild(e.createTextNode(`${t} • `)),c.setAttribute("style",l),a.appendChild(c),n.appendChild(a),i.listComponentCreateOrUpdate(e,a,"inside","publication_reaction_nonserp",o),i.listComponentCreateOrUpdate(e,a,"inside","publication_bio_nonserp",r)}}n.style.visibility="visible",(s&&s.length>0||_&&_.length>0)&&c()}))},t.highlightText=function(e,t,n){const o=a.createHighlightSelectionText(e);let i=e.getElementById(r.HIGHLIGHT_BAR_ID),l=e.getElementById(r.NETWORK_SELECTION_BAR_ID);if(o.selectedText&&!l){if(i){e.getElementById(r.HIGHLIGHT_BAR_HIGHLIGHTED_TEXT_ID).textContent=o.selectedText}else i=a.createHighlightInfoBar(o.selectedText),e.body.appendChild(i);function c(r){!function(r){!o.selectedText||"h"!==r.key&&"H"!==r.key||(e.body.removeChild(i),a.modifyPageWithHighlightNetworkSelection(e,t,o,n),e.removeEventListener("keyup",c,!1))}(r)}function _(t){!function(t){"Escape"===t.key&&(e.body.removeChild(i),e.removeEventListener("keyup",_,!1))}(t)}e.addEventListener("keyup",c,!1),e.addEventListener("keyup",_,!1)}else i&&e.body.removeChild(i)}}]);