!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}var c=function(t){return{get:function(e){return t.get(e)},set:function(e,n){return t.set(e,n),n}}},l=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,f=/<[a-z][^>]+$/i,p=/>[^<>]*$/,h=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,d=/\s+$/,v=function t(e,n){return 0<n--&&(f.test(e[n])||!p.test(e[n])&&t(e,n))},g=function(t,e,n){return s.test(e)?t:"<".concat(e).concat(n.replace(d,""),"></").concat(e,">")},m=function(t,e,n){for(var r=[],o=t.length,i=function(n){var o=t[n-1];r.push(l.test(o)&&v(t,n)?o.replace(l,(function(t,r,o){return"".concat(e).concat(n-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(e).concat(n-1,"--\x3e"))},u=1;u<o;u++)i(u);r.push(t[o-1]);var a=r.join("").trim();return n?a:a.replace(h,g)},y=Array.isArray,b=[],w=b.indexOf,x=b.slice,C=function(t,e){return 111===t.nodeType?1/e<0?e?function(t){var e=t.firstChild,n=t.lastChild,r=document.createRange();return r.setStartAfter(e),r.setEndAfter(n),r.deleteContents(),e}(t):t.lastChild:e?t.valueOf():t.firstChild:t},O=function(t){var e="fragment",n="template",r="content"in i(n)?function(t){var e=i(n);return e.innerHTML=t,e.content}:function(t){var r=i(e),u=i(n),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var c=RegExp.$1;u.innerHTML="<table>"+t+"</table>",a=u.querySelectorAll(c)}else u.innerHTML=t,a=u.childNodes;return o(r,a),r};return function(t,e){return("svg"===e?u:r)(t)};function o(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function i(n){return n===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}function u(t){var n=i(e),r=i("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",o(n,r.firstChild.childNodes),n}}(document),k=function(t,e){return t.childNodes[e]},A=function(t){for(var e=[],n=t.parentNode;n;)e.push(w.call(n.childNodes,t)),n=(t=n).parentNode;return e},E=document,S=E.createTreeWalker,N=E.importNode,j=1!=N.length,T=j?function(t,e){return N.call(document,O(t,e),!0)}:O,M=j?function(t){return S.call(document,t,129,null,!1)}:function(t){return S.call(document,t,129)},L=function(t,e,n){return function(t,e,n,r,o){for(var i=n.length,u=e.length,a=i,c=0,l=0,s=null;c<u||l<a;)if(u===c)for(var f=a<i?l?r(n[l-1],-0).nextSibling:r(n[a-l],0):o;l<a;)t.insertBefore(r(n[l++],1),f);else if(a===l)for(;c<u;)s&&s.has(e[c])||t.removeChild(r(e[c],-1)),c++;else if(e[c]===n[l])c++,l++;else if(e[u-1]===n[a-1])u--,a--;else if(e[c]===n[a-1]&&n[l]===e[u-1]){var p=r(e[--u],-1).nextSibling;t.insertBefore(r(n[l++],1),r(e[c++],-1).nextSibling),t.insertBefore(r(n[--a],1),p),e[u]=n[a]}else{if(!s){s=new Map;for(var h=l;h<a;)s.set(n[h],h++)}if(s.has(e[c])){var d=s.get(e[c]);if(l<d&&d<a){for(var v=c,g=1;++v<u&&v<a&&s.get(e[v])===d+g;)g++;if(g>d-l)for(var m=r(e[c],0);l<d;)t.insertBefore(r(n[l++],1),m);else t.replaceChild(r(n[l++],1),r(e[c++],-1))}else c++}else t.removeChild(r(e[c++],-1))}return n}(t.parentNode,e,n,C,t)},$=function(t,e){return"ref"===e?function(t){return function(e){"function"==typeof e?e(t):e.current=t}}(t):"aria"===e?function(t){return function(e){for(var n in e){var r="role"===n?n:"aria-".concat(n),o=e[n];null==o?t.removeAttribute(r):t.setAttribute(r,o)}}}(t):".dataset"===e?function(t){var e=t.dataset;return function(t){for(var n in t){var r=t[n];null==r?delete e[n]:e[n]=r}}}(t):"."===e.slice(0,1)?function(t,e){return function(n){t[e]=n}}(t,e.slice(1)):"on"===e.slice(0,2)?function(t,e){var n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),function(e){var o=y(e)?e:[e,!1];n!==o[0]&&(n&&t.removeEventListener(r,n,o[1]),(n=o[0])&&t.addEventListener(r,n,o[1]))}}(t,e):function(t,e){var n,r=!0,o=document.createAttributeNS(null,e);return function(e){n!==e&&(null==(n=e)?r||(t.removeAttributeNode(o),r=!0):(o.value=e,r&&(t.setAttributeNodeNS(o),r=!1)))}}(t,e)};function P(e){var n=e.type,r=e.path.reduceRight(k,this);return"node"===n?function(e){var n,r,o=[];return function i(u){switch(t(u)){case"string":case"number":case"boolean":n!==u&&(n=u,r?r.textContent=u:r=document.createTextNode(u),o=L(e,o,[r]));break;case"object":case"undefined":if(null==u){n!=u&&(n=u,o=L(e,o,[]));break}if(y(u)){n=u,0===u.length?o=L(e,o,[]):"object"===t(u[0])?o=L(e,o,u):i(String(u));break}"ELEMENT_NODE"in u&&n!==u&&(n=u,o=L(e,o,11===u.nodeType?x.call(u.childNodes):[u]))}}}(r):"attr"===n?$(r,e.name):function(t){var e;return function(n){e!=n&&(e=n,t.textContent=null==n?"":n)}}(r)}var _="isµ",R=c(new WeakMap),q=function(t,e){var n=R.get(e)||R.set(e,function(t,e){for(var n=m(e,_,"svg"===t),r=T(n,t),o=M(r),i=[],u=e.length-1,a=0,c="".concat(_).concat(a);a<u;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===c&&(i.push({type:"node",path:A(l)}),c="".concat(_).concat(++a));else{for(;l.hasAttribute(c);)i.push({type:"attr",path:A(l),name:l.getAttribute(c)}),l.removeAttribute(c),c="".concat(_).concat(++a);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(c,"--\x3e")&&(i.push({type:"text",path:A(l)}),c="".concat(_).concat(++a))}}return{content:r,nodes:i}}(t,e)),r=n.content,o=n.nodes,i=N.call(document,r,!0);return{content:i,updates:o.map(P,i)}},D=function(t,e){var n=e.type,r=e.template,o=e.values,i=o.length;H(t,o,i);var u=t.entry;u&&u.template===r&&u.type===n||(t.entry=u=function(t,e){var n=q(t,e);return{type:t,template:e,content:n.content,updates:n.updates,wire:null}}(n,r));for(var a=u,c=a.content,l=a.updates,s=a.wire,f=0;f<i;f++)l[f](o[f]);return s||(u.wire=function(t){var e=t.childNodes,n=e.length;if(n<2)return n?e[0]:t;var r=x.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(e.length!==n)for(var o=0;o<n;)t.appendChild(r[o++]);return t}}}(c))},H=function t(e,n,r){for(var o=e.stack,i=0;i<r;i++){var u=n[i];u instanceof W?n[i]=D(o[i]||(o[i]={stack:[],entry:null,wire:null}),u):y(u)?t(o[i]||(o[i]={stack:[],entry:null,wire:null}),u,u.length):o[i]=null}r<o.length&&o.splice(r)};function W(t,e,n){this.type=t,this.template=e,this.values=n}var F=Object.create,B=Object.defineProperties,z=function(t){var e=c(new WeakMap);return B((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new W(t,e,r)}),{for:{value:function(n,r){var o=e.get(n)||e.set(n,F(null));return o[r]||(o[r]=function(e){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return D(e,{type:t,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return D({stack:[],entry:null,wire:null},{type:t,template:e,values:r}).valueOf()}}})},J=c(new WeakMap),X=function(t,e){var n="function"==typeof e?e():e,r=J.get(t)||J.set(t,{stack:[],entry:null,wire:null}),o=n instanceof W?D(r,n):n;return o!==r.wire&&(r.wire=o,t.textContent="",t.appendChild(o.valueOf())),t},G=z("html"),I=z("svg");function K(t){for(var e=t[0],n=1,r=arguments.length;n<r;n++)e+=arguments[n]+t[n];return e}var Q=customElements,U=Q.define,V=Object.create,Y=Object.defineProperties,Z=Object.getOwnPropertyDescriptor,tt=Object.keys,et="element",nt=c(new Map([[et,{c:HTMLElement,e:et}]])),rt=function(t){return document.createElement(t)},ot=function(t){return nt.get(t)||nt.set(t,{c:rt(t).constructor,e:t})},it=function(t,n){for(var o=n.attachShadow,i=n.attributeChanged,u=n.bound,c=n.connected,l=n.disconnected,s=n.handleEvent,f=n.init,p=n.observedAttributes,h=n.props,d=n.render,v=n.style,g=new WeakMap,m=new Map,y={},b={},w=[],x=V(null),C=function(t){if(!g.has(t)){g.set(t,0),Y(t,{html:{value:at.bind(o?t.attachShadow(o):t)}});for(var e=0;e<T;e++){var n=w[e],r=n.type,i=n.options;t.addEventListener(r,t,i)}m.forEach((function(e,n){var r=h[e];t.hasOwnProperty(e)?(r=t[e],delete t[e]):t.hasAttribute(e)&&(r=t.getAttribute(e),t.removeAttribute(e)),n.set(t,r)})),u&&u.forEach(ut,t),(f||d)&&(f||d).call(t)}},O=tt(n),k=0,A=O.length;k<A;k++){var E=O[k];if(/^on./.test(E)&&!/Options$/.test(E)){var S=n[E+"Options"]||!1,N=E.toLowerCase(),j=N.slice(2);w.push({type:j,options:S}),x[j]=E,N!==E&&(j=N.slice(2,3)+E.slice(3),x[j]=E,w.push({type:j,options:S}))}switch(E){case"attachShadow":case"observedAttributes":case"style":break;default:b[E]=Z(n,E)}}var T=w.length;if(T&&!s&&(b.handleEvent={value:function(t){this[x[t.type]](t)}}),null!==h)if(h)for(var M=function(t,e){var n=new WeakMap,r=t[e];m.set(n,r),b[r]={get:function(){return C(this),n.get(this)},set:function(t){C(this),n.set(this,t),d&&d.call(this)}}},L=tt(h),$=0;$<L.length;$++)M(L,$);else b.props={get:function(){for(var t={},e=this.attributes,n=e.length,r=0;r<n;r++){var o=e[r],i=o.name,u=o.value;t[i]=u}return t}};p&&(y.observedAttributes={value:p}),b.attributeChangedCallback={value:function(){C(this),i&&i.apply(this,arguments)}},b.connectedCallback={value:function(){C(this),c&&c.apply(this,arguments)}},l&&(b.disconnectedCallback={value:l});var P=ot(n.extends||et),_=P.c,R=P.e,q=function(t){r(o,t);var n=a(o);function o(){return e(this,o),n.apply(this,arguments)}return o}(_);Y(q,y),Y(q.prototype,b);var D=[t,q];R!==et&&D.push({extends:R}),U.apply(Q,D),nt.set(t,{c:q,e:R}),v&&(document.head.appendChild(rt("style")).textContent=v(R===et?t:R+'[is="'+t+'"]'))};function ut(t){this[t]=this[t].bind(this)}function at(){return X(this,G.apply(null,arguments))}Q.get("uce-lib")||Q.define("uce-lib",function(t){r(l,t);var o,i,u,c=a(l);function l(){return e(this,l),c.apply(this,arguments)}return o=l,u=[{key:"define",get:function(){return it}},{key:"render",get:function(){return X}},{key:"html",get:function(){return G}},{key:"svg",get:function(){return I}},{key:"css",get:function(){return K}}],(i=null)&&n(o.prototype,i),u&&n(o,u),l}(ot(et).c));var ct="function"==typeof Promise?Promise:function(t){var e,n=[],r=0;return t((function(t){e=t,r=1,n.splice(0).forEach(o)})),{then:o};function o(t){return r?setTimeout(t,0,e):n.push(t),this}};ct.all||(ct.all=function(t){return new ct((function(e){for(var n=t.length,r=0;r<n;)t[r++].then(o);function o(){++r===n&&e()}r=0}))}),customElements.whenDefined("uce-lib").then((function(t){var e=(t||customElements.get("uce-lib")).define,n=JSON.parse,r=Object.create,o=Object.keys,i=r(null),u=[],a=function(t){return i[t]};customElements.get("uce-require")||e("uce-require",{extends:"script",init:function(){var t=n(this.textContent.trim());o(t).forEach((function(e){var n,r;e in i||u.push((n=e,r=t[e],new ct((function(t){var e=new XMLHttpRequest;e.open("get",r,!0),e.send(null),e.onload=function(){var r={},u=e.responseText.replace(/^\s*var\s+/gm,"self.");Function("self","window","global","globalThis",u)(r,r,r,r);var a=o(r);1===a.length?t(i[n]=r[a[0]].default||r[a[0]]):t(i[n]=r)}}))))})),this.constructor.load=new ct((function(t){ct.all(u).then((function(){return t(a)}))}))}})}));var lt=Object.defineProperties,st=Object.keys,ft=function(e,n,r,o,i){return{configurable:!0,get:function(){return o},set:function(u){(e||u!==o||n&&"object"===t(u)&&u)&&(o=u,r?i(o):i())}}},pt=function(t,e,n,r,o,i){for(var u={},a=o!==ht,c=[n,r,a],l=st(t),s=0;s<l.length;s++){var f=e(t,l[s]),p=a?o(f):[f,o];i&&(p[1]=i),u[l[s]]=ft.apply(null,c.concat(p))}return u},ht=function(){},dt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.all,n=void 0!==e&&e,r=t.shallow,o=void 0===r||r,i=t.useState,u=void 0===i?ht:i,a=t.getAttribute,c=void 0===a?function(t,e){return t.getAttribute(e)}:a;return function(t,e,r){var i=pt(e,(function(e,n){var r=e[n];return t.hasOwnProperty(n)?(r=t[n],delete t[n]):t.hasAttribute(n)&&(r=c(t,n)),r}),n,o,u,r);return lt(t,i)}},vt=function(t,e){return t[e]},gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.all,n=void 0!==e&&e,r=t.shallow,o=void 0===r||r,i=t.useState,u=void 0===i?ht:i;return function(t,e){return lt({},pt(t,vt,n,o,u,e))}},mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t.dom?dt:gt)(t)},yt=function(t){return t},bt=Object.create(null),wt=function(t,e){var n=function(t,e){for(var n=e||yt,r=[],o=[],i=t.length,u=0;u<=i;){var a=t.indexOf("${",u);if(-1<a){r.push(t.slice(u,a)),a=u=a+2;for(var c=1;0<c&&u<i;){var l=t[u++];c+="{"===l?1:"}"===l?-1:0}o.push(n(t.slice(a,u-1)))}else r.push(t.slice(u)),u=i+1}return{template:r,values:o}}(t,e),r=n.template,o=n.values,i=[r],u=Function("return function(){with(arguments[0])return["+o+"]}")();return function(t){return i.concat(u(t||bt))}},xt="function"==typeof cancelAnimationFrame,Ct=xt?cancelAnimationFrame:clearTimeout,Ot=xt?requestAnimationFrame:setTimeout;
/*! (c) Andrea Giammarchi - ISC */
var kt=null,At=c(new WeakMap),Et=function(t,e,n){t.apply(e,n)},St={async:!1,always:!1},Nt=function(t,e){return"function"==typeof e?e(t):e},jt=function(t,e,n,r){var o=kt.i++,i=kt,u=i.hook,a=i.args,c=i.stack,l=i.length;o===l&&(kt.length=c.push({}));var s=c[o];if(s.args=a,o===l){var f="function"==typeof n,p=(f?r:n)||r||St,h=p.async,d=p.always;s.$=f?n(e):Nt(void 0,e),s._=h?At.get(u)||At.set(u,function(t){var e,n,r,o,i;return a(),function(t,a,l){return r=t,o=a,i=l,n||(n=Ot(u)),--e<0&&c(!0),c};function u(){a(),r.apply(o,i||[])}function a(){e=t||1/0,n=xt?0:null}function c(t){var e=!!n;return e&&(Ct(n),t&&u()),e}}()):Et,s.f=function(e){var n=t(s.$,e);(d||s.$!==n)&&(s.$=n,s._(u,null,s.args))}}return[s.$,s.f]},Tt=function(t,e){return jt(Nt,t,void 0,e)},Mt=new WeakMap;Mt.has.bind(Mt);customElements.whenDefined("uce-lib").then((function(t){var e=t||customElements.get("uce-lib"),n=e.define,r=e.render,o=e.html,i=e.svg;customElements.whenDefined("uce-require").then((function(t){var e=t||customElements.get("uce-require"),u=mt({useState:Tt}),a=mt({dom:!0,useState:Tt});n("uce-template",{extends:"template",init:function(){var t=(this.content||O(this.innerHTML)).childNodes,c=[],l=null,s="",f="",p="",h="",d="";e.load.then((function(e){for(var v=0;v<t.length;v++){var g=t[v];if(1===g.nodeType){var m=g.tagName,y=g.hasAttribute("is");if(/^style$/i.test(m))c.push(g);else if(y||/-/i.test(m)){if(f)throw new Error("too many components");f=m.toLowerCase(),d=g.innerHTML.replace(/\{\{([^\2]+?)(\}\})/g,(function(t,e){return"${"+e+"}"})),y&&(s=g.getAttribute("is").toLowerCase()),g.hasAttribute("shadow")&&(p=g.getAttribute("shadow")||"open")}else if(/^script$/i.test(m)){if(l)throw new Error("a component should have one script");var b={},w={exports:b};Function("require","module","exports","reactive","render","html","svg",'"use strict";\n'+g.textContent.replace(/^\s*export\s+default(\s+)/gm,"module.exports$1=").replace(/(^|[\r\n])\s*import\s+([^\3]+?)(\s+from\s*)([^;\n]+)/g,(function(t,e,n,r,o){return e+"const "+n.replace(/\s+as\s+/g,": ")+" = require("+o+")"})))(e,w,b,u,r,o,i),l=w.exports}}}for(var x=s?f+'[is="'+s+'"]':f,C=c.length;C--;){var O=c[C],k=O.textContent;O.hasAttribute("shadow")?d="<style>"+k+"</style>"+d:O.hasAttribute("scoped")?function(){var t=[];h+=k.replace(/\{([^}]+?)\}/g,(function(e,n){return""+t.push(n)+","})).split(",").map((function(t){return t.trim()?x+" "+t.trim():""})).join(",\n").replace(/\x01(\d+),/g,(function(e,n){return"{"+t[--n]+"}"})).replace(/(,\n)+/g,",\n")}():h+=k}var A=wt(d),E=l,S=E.observedAttributes,N=E.props;n(s||f,{observedAttributes:S,style:h?function(){return h}:null,extends:s?f:"element",attachShadow:p?{mode:p}:null,attributeChanged:S&&function(){this.hasOwnProperty("attributeChanged")&&this.attributeChanged()},connected:function(){this.hasOwnProperty("connected")&&this.connected()},disconnected:function(){this.hasOwnProperty("disconnected")&&this.connected()},init:function(){var t,e,n=this,r=n.html,o=!0,i=null;(this.render=(t=function(){o&&(o=!1,N&&a(n,N),i=l.setup(n)),r.apply(null,A(i))},e=[],function n(){var r=kt,o=[];kt={hook:n,args:arguments,stack:e,i:0,length:e.length,after:o};try{return t.apply(null,arguments)}finally{kt=r;for(var i=0,u=o.length;i<u;i++)o[i]()}}))()}})}))}})}))}))}();