!function e(t,n,o){function r(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return r(n?n:e)},f,f.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){function o(e,t,n){function o(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(Array.isArray(n))o(n);else{if(("number"==typeof n||"boolean"==typeof n||n instanceof Date||n instanceof RegExp)&&(n=n.toString()),"string"==typeof n){if(i.lastChild&&"#text"===i.lastChild.nodeName){i.lastChild.nodeValue+=n;continue}n=r.createTextNode(n)}n&&n.nodeType&&i.appendChild(n)}}}var i;-1!==f.indexOf(e)&&(t.namespace=u);var d=!1;if(t.namespace&&(d=t.namespace,delete t.namespace),i=d?r.createElementNS(d,e):r.createElement(e),t.onload||t.onunload){var s=t.onload||function(){},c=t.onunload||function(){};a(i,function(){s(i)},function(){c(i)}),delete t.onload,delete t.onunload}for(var p in t)if(t.hasOwnProperty(p)){var h=p.toLowerCase(),m=t[p];if("classname"===h&&(h="class",p="class"),"htmlFor"===p&&(p="for"),l[h])if("true"===m)m=h;else if("false"===m)continue;"on"===h.slice(0,2)?i[p]=m:d?i.setAttributeNS(null,p,m):i.setAttribute(p,m)}return o(n),i}var r=e("global/document"),i=e("hyperx"),a=e("on-load"),u="http://www.w3.org/2000/svg",l={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,willvalidate:1},f=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];t.exports=i(o),t.exports.createElement=o},{"global/document":2,hyperx:6,"on-load":8}],2:[function(e,t,n){(function(n){var o="undefined"!=typeof n?n:"undefined"!=typeof window?window:{},r=e("min-document");if("undefined"!=typeof document)t.exports=document;else{var i=o["__GLOBAL_DOCUMENT_CACHE@4"];i||(i=o["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":4}],3:[function(e,t,n){(function(e){"undefined"!=typeof window?t.exports=window:"undefined"!=typeof e?t.exports=e:"undefined"!=typeof self?t.exports=self:t.exports={}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){},{}],5:[function(e,t,n){function o(e){return function(t,n,o){for(var i in n)i in r&&(n[r[i]]=n[i],delete n[i]);return e(t,n,o)}}t.exports=o;var r={"class":"className","for":"htmlFor","http-equiv":"httpEquiv"}},{}],6:[function(e,t,n){function o(e){return e===m||e===v}function r(e){return g.test(e)}var i=e("hyperscript-attribute-to-property"),a=0,u=1,l=2,f=3,d=4,s=5,c=6,p=7,h=8,m=9,v=10,y=11,b=12;t.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"==typeof e?e:g("",e)}e=i(e),t||(t={});var g=t.concat||function(e,t){return String(e)+String(t)};return function(t){function i(e){var t=[];A===p&&(A=d);for(var n=0;n<e.length;n++){var r=e.charAt(n);A===u&&"<"===r?(w.length&&t.push([u,w]),w="",A=l):">"!==r||o(A)?A===u?w+=r:A===l&&/\s/.test(r)?(t.push([l,w]),w="",A=d):A===l?w+=r:A===d&&/[\w-]/.test(r)?(A=s,w=r):A===d&&/\s/.test(r)?(w.length&&t.push([s,w]),t.push([b])):A===s&&/\s/.test(r)?(t.push([s,w]),w="",A=c):A===s&&"="===r?(t.push([s,w],[y]),w="",A=p):A===s?w+=r:A!==c&&A!==d||"="!==r?A!==c&&A!==d||/\s/.test(r)?A===p&&'"'===r?A=v:A===p&&"'"===r?A=m:A===v&&'"'===r?(t.push([h,w],[b]),w="",A=d):A===m&&"'"===r?(t.push([h,w],[b]),w="",A=d):A!==p||/\s/.test(r)?A===h&&/\s/.test(r)?(t.push([b],[h,w]),w="",A=d):A!==h&&A!==m&&A!==v||(w+=r):(A=h,n--):(t.push([b]),/[\w-]/.test(r)?(w+=r,A=s):A=d):(t.push([y]),A=p):(A===l?t.push([l,w]):A===s?t.push([s,w]):A===h&&w.length&&t.push([h,w]),t.push([f]),w="",A=u)}return A===u&&w.length?(t.push([u,w]),w=""):A===h&&w.length?(t.push([h,w]),w=""):A===v&&w.length?(t.push([h,w]),w=""):A===m&&w.length?(t.push([h,w]),w=""):A===s&&(t.push([s,w]),w=""),t}for(var A=u,w="",C=arguments.length,N=[],x=0;x<t.length;x++)if(C-1>x){var E=arguments[x+1],T=i(t[x]),j=A;j===v&&(j=h),j===m&&(j=h),j===p&&(j=h),j===d&&(j=s),T.push([a,j,E]),N.push.apply(N,T)}else N.push.apply(N,i(t[x]));for(var k=[null,{},[]],S=[[k,-1]],x=0;x<N.length;x++){var M=S[S.length-1][0],T=N[x],L=T[0];if(L===l&&/^\//.test(T[1])){var O=S[S.length-1][1];S.length>1&&(S.pop(),S[S.length-1][0][2][O]=e(M[0],M[1],M[2].length?M[2]:void 0))}else if(L===l){var R=[T[1],{},[]];M[2].push(R),S.push([R,M[2].length-1])}else if(L===s||L===a&&T[1]===s){for(var _,B="";x<N.length;x++)if(N[x][0]===s)B=g(B,N[x][1]);else{if(N[x][0]!==a||N[x][1]!==s)break;if("object"!=typeof N[x][2]||B)B=g(B,N[x][2]);else for(_ in N[x][2])N[x][2].hasOwnProperty(_)&&!M[1][_]&&(M[1][_]=N[x][2][_])}N[x][0]===y&&x++;for(var D=x;x<N.length;x++)if(N[x][0]===h||N[x][0]===s)M[1][B]?M[1][B]=g(M[1][B],N[x][1]):M[1][B]=n(N[x][1]);else{if(N[x][0]!==a||N[x][1]!==h&&N[x][1]!==s){!B.length||M[1][B]||x!==D||N[x][0]!==f&&N[x][0]!==b||(M[1][B]=B.toLowerCase());break}M[1][B]?M[1][B]=g(M[1][B],N[x][2]):M[1][B]=n(N[x][2])}}else if(L===s)M[1][T[1]]=!0;else if(L===a&&T[1]===s)M[1][T[2]]=!0;else if(L===f){if(r(M[0])&&S.length){var O=S[S.length-1][1];S.pop(),S[S.length-1][0][2][O]=e(M[0],M[1],M[2].length?M[2]:void 0)}}else if(L===a&&T[1]===u)void 0===T[2]||null===T[2]?T[2]="":T[2]||(T[2]=g("",T[2])),Array.isArray(T[2][0])?M[2].push.apply(M[2],T[2]):M[2].push(T[2]);else if(L===u)M[2].push(T[1]);else if(L!==y&&L!==b)throw new Error("unhandled: "+L)}if(k[2].length>1&&/^\s*$/.test(k[2][0])&&k[2].shift(),k[2].length>2||2===k[2].length&&/\S/.test(k[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(k[2][0])&&"string"==typeof k[2][0][0]&&Array.isArray(k[2][0][2])&&(k[2][0]=e(k[2][0][0],k[2][0][1],k[2][0][2])),k[2][0]}};var g=(Object.prototype.hasOwnProperty,RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"))},{"hyperscript-attribute-to-property":5}],7:[function(e,t,n){function o(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function r(e){!s&&document.createRange&&(s=document.createRange(),s.selectNode(document.body));var t;return s&&s.createContextualFragment?t=s.createContextualFragment(e):(t=document.createElement("body"),t.innerHTML=e),t.childNodes[0]}function i(){}function a(e,t){return t&&t!==h?document.createElementNS(t,e):document.createElement(e)}function u(e,t){var n,o,r,i,a,u,l=t.attributes;for(n=l.length-1;n>=0;n--)o=l[n],r=o.name,a=o.value,i=o.namespaceURI,i?(r=o.localName||r,u=e.getAttributeNS(i,r)):u=e.getAttribute(r),u!==a&&(i?e.setAttributeNS(i,r,a):e.setAttribute(r,a));for(l=e.attributes,n=l.length-1;n>=0;n--)o=l[n],o.specified!==!1&&(r=o.name,i=o.namespaceURI,c(t,i,i?r=o.localName||r:r)||e.removeAttributeNode(o))}function l(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}function f(e){return e.id}function d(e,t,n){function d(e,t){var n=C(e);if(n?A[n]=e:t||k(e),e.nodeType===m)for(var o=e.firstChild;o;)d(o,t||n),o=o.nextSibling}function s(e){if(e.nodeType===m)for(var t=e.firstChild;t;)C(t)||(k(t),s(t)),t=t.nextSibling}function c(e,t,n){j(e)!==!1&&(t.removeChild(e),n?C(e)||(k(e),s(e)):d(e))}function p(e,t,n,o){var r=C(t);if(r&&delete A[r],!o){if(E(e,t)===!1)return;if(u(e,t),T(e),S(e,t)===!1)return}if("TEXTAREA"!==e.nodeName){var i,a,l,f,d,s=t.firstChild,h=e.firstChild;e:for(;s;){for(l=s.nextSibling,i=C(s);h;){var j=C(h);if(a=h.nextSibling,!n&&j&&(d=w[j]))d.parentNode.replaceChild(h,d),p(h,d,n),h=a;else{var k=h.nodeType;if(k===s.nodeType){var M=!1;if(k===m?(g(h,s)&&(j||i?i===j&&(M=!0):M=!0),M&&p(h,s,n)):k!==v&&k!=y||(M=!0,h.nodeValue=s.nodeValue),M){s=l,h=a;continue e}}c(h,e,n),h=a}}i&&((f=A[i])?(p(f,s,!0),s=f):w[i]=s),N(s)!==!1&&(e.appendChild(s),x(s)),s.nodeType===m&&(i||s.firstChild)&&L.push(s),s=l,h=a}for(;h;)a=h.nextSibling,c(h,e,n),h=a}var O=b[e.nodeName];O&&O(e,t)}if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName){var h=t;t=document.createElement("html"),t.innerHTML=h}else t=r(t);var A={},w={},C=n.getNodeKey||f,N=n.onBeforeNodeAdded||i,x=n.onNodeAdded||i,E=n.onBeforeElUpdated||n.onBeforeMorphEl||i,T=n.onElUpdated||i,j=n.onBeforeNodeDiscarded||i,k=n.onNodeDiscarded||i,S=n.onBeforeElChildrenUpdated||n.onBeforeMorphElChildren||i,M=n.childrenOnly===!0,L=[],O=e,R=O.nodeType,_=t.nodeType;if(!M)if(R===m)_===m?g(e,t)||(k(e),O=l(e,a(t.nodeName,t.namespaceURI))):O=t;else if(R===v||R===y){if(_===R)return O.nodeValue=t.nodeValue,O;O=t}if(O===t)k(e);else{p(O,t,!1,M);var B=function(e){for(var t=e.firstChild;t;){var n=t.nextSibling,r=C(t);if(r){var i=A[r];if(i&&g(t,i)){if(t.parentNode.replaceChild(i,t),p(i,t,!0),t=n,o(A))return!1;continue}}t.nodeType===m&&B(t),t=n}};if(!o(A))e:for(;L.length;){var D=L;L=[];for(var F=0;F<D.length;F++)if(B(D[F])===!1)break e}for(var P in A)if(A.hasOwnProperty(P)){var U=A[P];k(U),s(U)}}return!M&&O!==e&&e.parentNode&&e.parentNode.replaceChild(O,e),O}var s,c,p="undefined"!=typeof document?document.body||document.createElement("div"):{},h="http://www.w3.org/1999/xhtml",m=1,v=3,y=8;c=p.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:p.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return!!e.getAttributeNode(n)};var b={OPTION:function(e,t){e.selected=t.selected,e.selected?e.setAttribute("selected",""):e.removeAttribute("selected","")},INPUT:function(e,t){e.checked=t.checked,e.checked?e.setAttribute("checked",""):e.removeAttribute("checked"),e.value!==t.value&&(e.value=t.value),c(t,null,"value")||e.removeAttribute("value"),e.disabled=t.disabled,e.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n),e.firstChild&&(e.firstChild.nodeValue=n)}},g=function(e,t){return e.nodeName===t.nodeName&&e.namespaceURI===t.namespaceURI};t.exports=d},{}],8:[function(e,t,n){function o(e){d[e][0]&&0===d[e][2]&&(d[e][0](),d[e][2]=1)}function r(e){d[e][1]&&1===d[e][2]&&(d[e][1](),d[e][2]=0)}function i(e,t,n){if(d[e.oldValue]){var o=e.target.getAttribute(c);return a(e.oldValue,o)?void(d[o]=d[e.oldValue]):void Object.keys(d).forEach(function(r){e.oldValue===r&&n(r),o===r&&t(r)})}}function a(e,t){return d[e][3]===d[t][3]}function u(e,t){for(var n=Object.keys(d),o=0;o<e.length;o++){if(e[o]&&e[o].getAttribute&&e[o].getAttribute(c)){var r=e[o].getAttribute(c);n.forEach(function(e){r===e&&t(e)})}e[o].childNodes.length>0&&u(e[o].childNodes,t)}}var l=e("global/document"),f=e("global/window"),d=Object.create(null),s="onloadid"+(new Date%9e6).toString(36),c="data-"+s,p=0;if(f&&f.MutationObserver){var h=new MutationObserver(function(e){if(!(d.length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==c?(u(e[t].removedNodes,r),u(e[t].addedNodes,o)):i(e[t],o,r)});h.observe(l.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[c]})}t.exports=function m(e,t,n){return t=t||function(){},n=n||function(){},e.setAttribute(c,"o"+p),d["o"+p]=[t,n,0,m.caller],p+=1,e}},{"global/document":2,"global/window":3}],9:[function(e,t,n){var o=e("bel"),r=e("morphdom"),i=e("./update-events.js");t.exports=o,t.exports.update=function(e,t,n){function o(e,t){for(var o=n.events||i,r=0;r<o.length;r++){var a=o[r];t[a]?e[a]=t[a]:e[a]&&(e[a]=void 0)}("INPUT"===e.nodeName&&"file"!==e.type||"TEXTAREA"===e.nodeName||"SELECT"===e.nodeName)&&null===t.getAttribute("value")&&(t.value=e.value)}return n||(n={}),n.events!==!1&&(n.onBeforeMorphEl||(n.onBeforeMorphEl=o)),r(e,t,n)}},{"./update-events.js":10,bel:1,morphdom:7}],10:[function(e,t,n){t.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},{}],11:[function(e,t,n){t.exports=function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(Array.isArray(r))o(e,r);else{if(("number"==typeof r||"boolean"==typeof r||r instanceof Date||r instanceof RegExp)&&(r=r.toString()),"string"==typeof r){if(e.lastChild&&"#text"===e.lastChild.nodeName){e.lastChild.nodeValue+=r;continue}r=document.createTextNode(r)}r&&r.nodeType&&e.appendChild(r)}}}},{}],12:[function(e,t,n){function o(t){function n(e){console.log("Clicked"+t),e.stopPropagation()}return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("td");return n.onclick=arguments[0],n.setAttribute("class","TableCell"),t(n,[arguments[1]]),n}(n,t)}function r(t){for(var n=t.active?"TableRow active":"TableRow",r=t.props,i=[o("#"+t.id)],a=0;a<r.length;a++)i.push(o(r[a]));return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("tr");return n.setAttribute("class",arguments[0]),n.setAttribute("data-id",arguments[1]),t(n,[arguments[2]]),n}(n,t.id,i)}function i(t){for(var n=t.items,o=[],i=0;i<n.length;i++)o.push(r(n[i]));return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("table");n.setAttribute("class","Table");var o=document.createElement("tbody");return t(o,[arguments[0]]),t(n,[o]),n}(o)}function a(t){var n=t.time,o="border-radius:"+(n%10).toString()+"px;background:rgba(0,0,0,"+(.5+n%10/10).toString()+")";return function(){var t=(e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),document.createElement("div"));return t.setAttribute("data-id",arguments[0]),t.setAttribute("style",arguments[1]),t.setAttribute("class","AnimBox"),t}(t.id,o)}function u(t){for(var n=t.items,o=[],r=0;r<n.length;r++)o.push(a(n[r]));return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("div");return n.setAttribute("class","Anim"),t(n,[arguments[0]]),n}(o)}function l(t){return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("li");return n.setAttribute("class","TreeLeaf"),t(n,[arguments[0]]),n}(t.id)}function f(t){for(var n=[],o=0;o<t.children.length;o++){var r=t.children[o];r.container?n.push(f(r)):n.push(l(r))}return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("ul");return n.setAttribute("class","TreeNode"),t(n,[arguments[0]]),n}(n)}function d(t){return function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("div");return n.setAttribute("class","Tree"),t(n,[arguments[0]]),n}(f(t.root))}function s(t){var n,o=t.location;return"table"===o?n=i(t.table):"anim"===o?n=u(t.anim):"tree"===o&&(n=d(t.tree)),function(){var t=e("/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js"),n=document.createElement("div");return n.setAttribute("class","Main"),t(n,[arguments[0]]),n}(n)}var c=e("yo-yo");uibench.init("yo-yo [nokeys]","1.2.2"),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App"),n=null,o=null;uibench.run(function(e){null===n?(n=s(e),t.appendChild(n)):(o=s(e),c.update(n,o))},function(e){t.removeChild(n),t.innerHTML="<pre>"+JSON.stringify(e,null,2)+"</pre>"})})},{"/home/void/w/js/uibench/uibench-yo-yo/node_modules/yo-yoify/lib/appendChild.js":11,"yo-yo":9}]},{},[12]);