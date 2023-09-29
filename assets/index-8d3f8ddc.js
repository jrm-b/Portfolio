(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var v_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}};/*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/(function(r,e){(function(t,n){r.exports=n()})(v_,function(){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(h){if(this==null)throw new TypeError('"this" is null or not defined');var x=Object(this),R=x.length>>>0;if(typeof h!="function")throw new TypeError("predicate must be a function");for(var H=arguments[1],ae=0;ae<R;){var ue=x[ae];if(h.call(H,ue,ae,x))return ue;ae++}}}),Array.from||(Array.from=function(){var u=Object.prototype.toString,h=function(ue){return typeof ue=="function"||u.call(ue)==="[object Function]"},x=function(ue){var ge=Number(ue);return isNaN(ge)?0:ge===0||!isFinite(ge)?ge:(ge>0?1:-1)*Math.floor(Math.abs(ge))},R=Math.pow(2,53)-1,H=function(ue){var ge=x(ue);return Math.min(Math.max(ge,0),R)};return function(ue){var ge=this,Ge=Object(ue);if(ue==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");var at=arguments.length>1?arguments[1]:void 0,ot;if(typeof at<"u"){if(!h(at))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(ot=arguments[2])}for(var St=H(Ge.length),Kt=h(ge)?Object(new ge(St)):new Array(St),bn=0,_n;bn<St;)_n=Ge[bn],at?Kt[bn]=typeof ot>"u"?at(_n,bn):at.call(ot,_n,bn):Kt[bn]=_n,bn+=1;return Kt.length=St,Kt}}());var t=window,n=document,i=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),s=/(Mac|iPhone|iPod|iPad)/i.test(t.navigator.userAgent),o="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,a=!!window.MSInputMethodContext&&!!document.documentMode,l='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',c={test:{},shared:{}},f=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards","dropEffect","waterEffect"];t.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(u,h){h=h||window;for(var x=0;x<this.length;x++)u.call(h,this[x],x,this)}),typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(h,x){if(h==null)throw new TypeError("Cannot convert undefined or null to object");for(var R=Object(h),H=1;H<arguments.length;H++){var ae=arguments[H];if(ae!=null)for(var ue in ae)Object.prototype.hasOwnProperty.call(ae,ue)&&(R[ue]=ae[ue])}return R},writable:!0,configurable:!0}),String.prototype.padStart||(String.prototype.padStart=function(h,x){return h=h>>0,x=String(typeof x<"u"?x:" "),this.length>h?String(this):(h=h-this.length,h>x.length&&(x+=Array.apply(null,Array(h)).map(function(){return x}).join("")),x.slice(0,h)+String(this))});function d(u,h){t.console&&t.console[u]&&t.console[u]("fullPage: "+h)}function p(u){var h=t.getComputedStyle(u);return h.display!=="none"}function g(u){return Array.from(u).filter(function(h){return p(h)})}function v(u,h){return h=arguments.length>1?h:document,h?h.querySelectorAll(u):null}function S(u){u=u||{};for(var h=1,x=arguments.length;h<x;++h){var R=arguments[h];if(R){for(var H in R)if(!(!R.hasOwnProperty(H)||H=="__proto__"||H=="constructor")){if(Object.prototype.toString.call(R[H])==="[object Object]"){u[H]=S(u[H],R[H]);continue}u[H]=R[H]}}}return u}function _(u,h){return u==null?!1:u.classList.contains(h)}function m(){return"innerHeight"in t?t.innerHeight:n.documentElement.offsetHeight}function T(){return t.innerWidth}function M(u,h){u=F(u);var x;for(x in h)if(h.hasOwnProperty(x)&&x!==null)for(var R=0;R<u.length;R++){var H=u[R];H.style[x]=h[x]}return u}function y(u){return u.previousElementSibling}function A(u){return u.nextElementSibling}function D(u){return u[u.length-1]}function w(u,h){u=ie(u)?u[0]:u;for(var x=h!=null?v(h,u.parentNode):u.parentNode.childNodes,R=0,H=0;H<x.length;H++){if(x[H]==u)return R;x[H].nodeType==1&&R++}return-1}function F(u){return ie(u)?u:[u]}function E(u){u=F(u);for(var h=0;h<u.length;h++)u[h].style.display="none";return u}function L(u){u=F(u);for(var h=0;h<u.length;h++)u[h].style.display="block";return u}function ie(u){return Object.prototype.toString.call(u)==="[object Array]"||Object.prototype.toString.call(u)==="[object NodeList]"}function q(u,h){u=F(u);for(var x=0;x<u.length;x++){var R=u[x];R.classList.add(h)}return u}function B(u,h){u=F(u);for(var x=h.split(" "),R=0;R<x.length;R++){h=x[R];for(var H=0;H<u.length;H++){var ae=u[H];ae.classList.remove(h)}}return u}function K(u,h){h.appendChild(u)}function X(u,h,x){var R;h=h||n.createElement("div");for(var H=0;H<u.length;H++){var ae=u[H];(x&&!H||!x)&&(R=h.cloneNode(!0),ae.parentNode.insertBefore(R,ae)),R.appendChild(ae)}return u}function le(u,h){X(u,h,!0)}function Q(u,h){for(u.appendChild(h);u.firstChild!==h;)h.appendChild(u.firstChild)}function re(u){for(var h=n.createDocumentFragment();u.firstChild;)h.appendChild(u.firstChild);u.parentNode.replaceChild(h,u)}function oe(u,h){return u&&u.nodeType===1?Ze(u,h)?u:oe(u.parentNode,h):null}function ce(u,h){ee(u,u.nextSibling,h)}function $(u,h){ee(u,u,h)}function ee(u,h,x){ie(x)||(typeof x=="string"&&(x=Ie(x)),x=[x]);for(var R=0;R<x.length;R++)u.parentNode.insertBefore(x[R],h)}function ve(){var u=n.documentElement;return(t.pageYOffset||u.scrollTop)-(u.clientTop||0)}function me(u){return Array.prototype.filter.call(u.parentNode.children,function(h){return h!==u})}function de(u){u.preventDefault()}function Te(u,h){return u.getAttribute(h)}function Le(u,h,x){n.addEventListener(u,h,x==="undefined"?null:x)}function Ae(u,h,x){t.addEventListener(u,h,x==="undefined"?null:x)}function He(u,h,x){n.removeEventListener(u,h,x==="undefined"?null:x)}function mt(u,h,x){t.removeEventListener(u,h,x==="undefined"?null:x)}function we(u){if(typeof u=="function")return!0;var h=Object.prototype.toString.call(u);return h==="[object Function]"||h==="[object GeneratorFunction]"}function W(u,h,x){var R;x=typeof x>"u"?{}:x,typeof t.CustomEvent=="function"?R=new CustomEvent(h,{detail:x}):(R=n.createEvent("CustomEvent"),R.initCustomEvent(h,!0,!0,x)),u.dispatchEvent(R)}function Ze(u,h){return(u.matches||u.matchesSelector||u.msMatchesSelector||u.mozMatchesSelector||u.webkitMatchesSelector||u.oMatchesSelector).call(u,h)}function Re(u,h){if(typeof h=="boolean")for(var x=0;x<u.length;x++)u[x].style.display=h?"block":"none";return u}function Ie(u){var h=n.createElement("div");return h.innerHTML=u.trim(),h.firstChild}function Ce(u){u=F(u);for(var h=0;h<u.length;h++){var x=u[h];x&&x.parentElement&&x.parentNode.removeChild(x)}}function it(u,h,x){for(var R=u[x],H=[];R;)(Ze(R,h)||h==null)&&H.push(R),R=R[x];return H}function Ve(u,h){return it(u,h,"nextElementSibling")}function Be(u,h){return it(u,h,"previousElementSibling")}function Qe(u){return Object.keys(u).map(function(h){return u[h]})}function rt(u){return u[u.length-1]}function _t(u,h){for(var x=0,R=u.slice(Math.max(u.length-h,1)),H=0;H<R.length;H++)x=x+R[H];return Math.ceil(x/h)}function P(u,h){u.setAttribute(h,Te(u,"data-"+h)),u.removeAttribute("data-"+h)}function b(u,h){var x=[u];do u=u.parentNode,x.push(u);while(!Ze(u,h));return x}function J(){var u=n.activeElement;return Ze(u,"textarea")||Ze(u,"input")||Ze(u,"select")||Te(u,"contentEditable")=="true"||Te(u,"contentEditable")==""}window.fp_utils={$:v,deepExtend:S,hasClass:_,getWindowHeight:m,css:M,prev:y,next:A,last:D,index:w,getList:F,hide:E,show:L,isArrayOrList:ie,addClass:q,removeClass:B,appendTo:K,wrap:X,wrapAll:le,unwrap:re,closest:oe,after:ce,before:$,insertBefore:ee,getScrollTop:ve,siblings:me,preventDefault:de,isFunction:we,trigger:W,matches:Ze,toggle:Re,createElementFromHTML:Ie,remove:Ce,untilAll:it,nextAll:Ve,prevAll:Be,showError:d};var pe=Object.freeze({__proto__:null,showError:d,isVisible:p,getVisible:g,$:v,deepExtend:S,hasClass:_,getWindowHeight:m,getWindowWidth:T,css:M,prev:y,next:A,last:D,index:w,getList:F,hide:E,show:L,isArrayOrList:ie,addClass:q,removeClass:B,appendTo:K,wrap:X,wrapAll:le,wrapInner:Q,unwrap:re,closest:oe,after:ce,before:$,insertBefore:ee,getScrollTop:ve,siblings:me,preventDefault:de,getAttr:Te,docAddEvent:Le,windowAddEvent:Ae,docRemoveEvent:He,windowRemoveEvent:mt,isFunction:we,trigger:W,matches:Ze,toggle:Re,createElementFromHTML:Ie,remove:Ce,untilAll:it,nextAll:Ve,prevAll:Be,toArray:Qe,getLast:rt,getAverage:_t,setSrc:P,getParentsUntil:b,isInsideInput:J});function fe(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fe=function(h){return typeof h}:fe=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},fe(u)}var V={events:{},on:function(h,x){var R=this;return fe(this.events[h])!=="object"&&(this.events[h]=[]),this.events[h].push(x),function(){return R.removeListener(h,x)}},removeListener:function(h,x){if(fe(this.events[h])==="object"){var R=this.events[h].indexOf(x);R>-1&&this.events[h].splice(R,1)}},emit:function(h){for(var x=this,R=arguments.length,H=new Array(R>1?R-1:0),ae=1;ae<R;ae++)H[ae-1]=arguments[ae];fe(this.events[h])==="object"&&this.events[h].forEach(function(ue){return ue.apply(x,H)})},once:function(h,x){var R=this,H=this.on(h,function(){H();for(var ae=arguments.length,ue=new Array(ae),ge=0;ge<ae;ge++)ue[ge]=arguments[ge];x.apply(R,ue)})}},G={numSections:0,numSlides:0,slides:[],sections:[],activeSection:null,scrollTrigger:null,isBeyondFullpage:!1,aboutToScrollToFullPage:!1,slideMoving:!1,isResizing:!1,isScrolling:!1,lastScrolledDestiny:void 0,lastScrolledSlide:void 0,activeAnimation:!1,canScroll:!0,touchDirection:"none",wheelDirection:"none",isGrabbing:!1,isUsingWheel:!1,isWindowFocused:!0,previousDestTop:0,windowsHeight:m(),isDoingContinousVertical:!1,timeouts:{},scrollY:0,scrollX:0};t.state=G;function j(u){Object.assign(G,u)}function U(){return G}function O(){return G.activeSection&&G.activeSection.activeSlide?G.activeSection.activeSlide:G.activeSection}var z={onAfterRenderNoAnchor:"onAfterRenderNoAnchor",onClickOrTouch:"onClickOrTouch",moveSlideLeft:"moveSlideLeft",moveSlideRight:"moveSlideRight",onInitialise:"onInitialise",beforeInit:"beforeInit",bindEvents:"bindEvents",onDestroy:"onDestroy",contentChanged:"contentChanged",onScrollOverflowScrolled:"onScrollOverflowScrolled",onScrollPageAndSlide:"onScrollPageAndSlide",onKeyDown:"onKeyDown",onMenuClick:"onMenuClick",scrollPage:"scrollPage",landscapeScroll:"landscapeScroll",scrollBeyondFullpage:"scrollBeyondFullpage",onPerformMovement:"onPerformMovement",onSlideLeave:"onSlideLeave",onLeave:"onLeave",afterSectionLoads:"afterSectionLoads",afterSlideLoads:"afterSlideLoads"};V.on(z.bindEvents,ye);function ye(){["click","touchstart"].forEach(function(u){Le(u,Me)}),Ae("focus",Je),xe()}function xe(){V.on(z.onDestroy,ze)}function Me(u){V.emit(z.onClickOrTouch,{e:u,target:u.target})}function ze(){["click","touchstart"].forEach(function(u){He(u,Me)})}function Je(){j({isWindowFocused:!0})}var N="fullpage-wrapper",Se="."+N,te="fp-scrollable",he="fp-responsive",_e="fp-notransition",qe="fp-destroyed",tt="fp-enabled",st="fp-viewing",je="active",nt="."+je,Ct="fp-completely",Nt="."+Ct,ra=".section",Ii="fp-section",jt="."+Ii,Ui=jt+nt,sa="fp-tableCell",fr="."+sa,us="fp-auto-height",xo="."+us,aa="fp-auto-height-responsive",Mo="."+aa,C="fp-normal-scroll",Y="fp-nav",ne="#"+Y,Z="fp-tooltip",se="."+Z,be="fp-show-active",Pe=".slide",Ne="fp-slide",Ue="."+Ne,ke=Ue+nt,De="fp-slides",Oe="."+De,ft="fp-slidesContainer",ht="."+ft,zt="fp-table",Ht="fp-overflow",dt="."+Ht,We="fp-is-overflow",hr="fp-slidesNav",pt="."+hr,On=pt+" a",fs="fp-arrow",fi="fp-controlArrow",Nn="."+fi,Lt="fp-prev",Kn="."+Lt,Oi=Nn+Kn,kt="fp-next",hs="."+kt,oa=Nn+hs,Ni={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="'+fs+'"></div>','<div class="'+fs+'"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:ra,slideSelector:Pe,afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0,scrollBeyondFullpage:!0},ds=null,Xc=!1,Eo=S({},Ni),la=null;function gp(){return Xc}function vp(u){ds=u}function Xe(u){return ds}function I(){return la||Ni}function Sp(u){la=S({},Ni,u),Eo=Object.assign({},la)}function dr(){return Eo}function xp(u,h){Ni[u]=h}function ca(u,h,x){la[u]=h,x!=="internal"&&(Eo[u]=h)}function Yc(){if(!I().anchors.length){var u="[data-anchor]",h=v(I().sectionSelector.split(",").join(u+",")+u,ds);h.length&&h.length===v(I().sectionSelector,ds).length&&(Xc=!0,h.forEach(function(H){I().anchors.push(Te(H,"data-anchor").toString())}))}if(!I().navigationTooltips.length){var x="[data-tooltip]",R=v(I().sectionSelector.split(",").join(x+",")+x,ds);R.length&&R.forEach(function(H){I().navigationTooltips.push(Te(H,"data-tooltip").toString())})}}var qc=function(h){this.anchor=h.anchor,this.item=h.item,this.index=h.index(),this.isLast=this.index===h.item.parentElement.querySelectorAll(h.selector).length-1,this.isFirst=!this.index,this.isActive=h.isActive},Fn=function(h,x){this.parent=this.parent||null,this.selector=x,this.anchor=Te(h,"data-anchor")||I().anchors[w(h,I().sectionSelector)],this.item=h,this.isVisible=p(h),this.isActive=_(h,je),this.hasScroll=_(h,Ht)||v(dt,h)[0]!=null,this.isSection=x===I().sectionSelector,this.container=oe(h,ht)||oe(h,Se),this.index=function(){return this.siblings().indexOf(this)}};Fn.prototype.siblings=function(){return this.isSection?this.isVisible?G.sections:G.sectionsIncludingHidden:this.parent?this.parent.slides:0},Fn.prototype.prev=function(){var u=this.siblings(),h=this.isSection?u.indexOf(this):this.parent.slides.indexOf(this),x=h-1;return x>=0?u[x]:null},Fn.prototype.next=function(){var u=this.siblings(),h=this.isSection?u.indexOf(this):this.parent.slides.indexOf(this),x=h+1;return x<u.length?u[x]:null},Fn.prototype.prevPanel=function(){return this.prev()||(this.parent?this.parent.prev():null)},Fn.prototype.nextPanel=function(){return this.next()||(this.parent?this.parent.next():null)},Fn.prototype.getSiblings=function(){return this.isSection?G.sections:G.panels};function yo(u){return u.map(function(h){return h.item})}function To(u,h){return u.find(function(x){return x.item===h})}var jc=function(h){qc.call(this,h)},Mp=function(h){qc.call(this,h)};function Fi(u){var h=v(ke,u);return h.length&&(u=h[0]),u}function Kc(u){return u?u.activeSlide?u.activeSlide:u:null}function Ep(){return Xe().getBoundingClientRect().bottom>=0}function pr(u){var h=I(),x,R;return h.autoScrolling&&!h.scrollBar?(x=-u,R=v(Se)[0]):(x=u,R=window),{options:x,element:R}}function Zc(u,h){!I().autoScrolling||I().scrollBar||u.self!=window&&_(u,De)?u.self!=window&&_(u,De)?u.scrollLeft=h:u.scrollTo(0,h):u.style.top=h+"px"}function $c(u){var h="transform "+I().scrollingSpeed+"ms "+I().easingcss3;return B(u,_e),M(u,{"-webkit-transition":h,transition:h})}function bo(u,h){var x=u.index(),R=w(h,jt);return x==R?"none":x>R?"up":"down"}function Jc(u){return q(u,_e)}function Qc(u){return{"-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,transform:u}}var eu;function tu(u,h){h?$c(Xe()):Jc(Xe()),clearTimeout(eu),M(Xe(),Qc(u)),c.test.translate3d=u,eu=setTimeout(function(){B(Xe(),_e)},10)}function mr(u){var h=Math.round(u);if(I().css3&&I().autoScrolling&&!I().scrollBar){var x="translate3d(0px, -"+h+"px, 0px)";tu(x,!1)}else if(I().autoScrolling&&!I().scrollBar)M(Xe(),{top:-h+"px"}),c.test.top=-h+"px";else{var R=pr(h);Zc(R.element,R.options)}}c.setScrollingSpeed=ps;function ps(u,h){ca("scrollingSpeed",u,h)}var Et=null,ms=null,ua=null;function yp(){Et=v("body")[0],ms=v("html")[0],ua=v("html, body")}var _s;function fa(u,h,x,R){var H=Tp(u),ae=h-H,ue=!1,ge,Ge=G.activeAnimation;j({activeAnimation:!0}),_s&&window.cancelAnimationFrame(_s),_s=function(ot){ge||(ge=ot);var St=Math.floor(ot-ge);if(G.activeAnimation){var Kt=h;x&&(Kt=t.fp_easings[I().easing](St,H,ae,x)),St<=x&&Zc(u,Kt),St<x?window.requestAnimationFrame(_s):typeof R<"u"&&!ue&&(R(),j({activeAnimation:!1}),ue=!0)}else!ue&&!Ge&&(R(),j({activeAnimation:!1}),ue=!0)},window.requestAnimationFrame(_s)}function Tp(u){var h;return u.self!=t&&_(u,De)?h=u.scrollLeft:!I().autoScrolling||I().scrollBar?h=ve():h=u.offsetTop,h}function Bi(u){return u&&!u.item?new jc(new Sr(u)):u?new jc(u):null}function Ao(u){return u?new Mp(u):null}function Bn(u,h){var x=bp(u,h);return W(Xe(),u,x),I()[u].apply(x[Object.keys(x)[0]],Qe(x))!==!1}function bp(u,h){var x={afterRender:function(){return{section:Bi(U().activeSection),slide:Ao(U().activeSection.activeSlide)}},onLeave:function(){return{origin:Bi(h.items.origin),destination:Bi(h.items.destination),direction:h.direction,trigger:U().scrollTrigger}},afterLoad:function(){return x.onLeave()},afterSlideLoad:function(){return{section:Bi(h.items.section),origin:Bi(h.items.origin),destination:Bi(h.items.destination),direction:h.direction,trigger:U().scrollTrigger}},onSlideLeave:function(){return x.afterSlideLoad()},beforeLeave:function(){return x.onLeave()},onScrollOverflow:function(){return{section:Bi(U().activeSection),slide:Ao(U().activeSection.activeSlide),position:h.position,direction:h.direction}}};return x[u]()}function ha(u){var h=Fi(u);v("video, audio",h).forEach(function(x){x.hasAttribute("data-autoplay")&&typeof x.play=="function"&&x.play()}),v('iframe[src*="youtube.com/embed/"]',h).forEach(function(x){x.hasAttribute("data-autoplay")&&nu(x),x.onload=function(){x.hasAttribute("data-autoplay")&&nu(x)}})}function nu(u){u.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function wo(u){var h=Fi(u);v("video, audio",h).forEach(function(x){!x.hasAttribute("data-keepplaying")&&typeof x.pause=="function"&&x.pause()}),v('iframe[src*="youtube.com/embed/"]',h).forEach(function(x){/youtube\.com\/embed\//.test(Te(x,"src"))&&!x.hasAttribute("data-keepplaying")&&x.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ap(){v('iframe[src*="youtube.com/embed/"]',Xe()).forEach(function(u){wp(u,"enablejsapi=1")})}function wp(u,h){var x=Te(u,"src");u.setAttribute("src",x+Rp(x)+h)}function Rp(u){return/\?/.test(u)?"&":"?"}function gs(u){if(I().lazyLoading){var h=Fi(u);v("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",h).forEach(function(x){if(["src","srcset"].forEach(function(H){var ae=Te(x,"data-"+H);ae!=null&&ae&&(P(x,H),x.addEventListener("load",function(){}))}),Ze(x,"source")){var R=oe(x,"video, audio");R&&(R.load(),R.onloadeddata=function(){})}})}}function iu(){var u=U().activeSection.item,h=U().activeSection.activeSlide,x=ru(u),R=String(x);if(h){var H=ru(h.item);R=R+"-"+H}R=R.replace("/","-").replace("#","");var ae=new RegExp("\\b\\s?"+st+"-[^\\s]+\\b","g");Et.className=Et.className.replace(ae,""),q(Et,st+"-"+R)}function ru(u){if(!u)return null;var h=Te(u,"data-anchor"),x=w(u);return h==null&&(h=x),h}function Ro(u,h,x){var R="";I().anchors.length&&!I().lockAnchors&&(u?(x!=null&&(R=x),h==null&&(h=u),j({lastScrolledSlide:h}),Co(R+"/"+h)):(u!=null&&j({lastScrolledSlide:h}),Co(x))),iu()}function Co(u){if(I().recordHistory)location.hash=u;else if(i||o)t.history.replaceState(void 0,void 0,"#"+u);else{var h=t.location.href.split("#")[0];t.location.replace(h+"#"+u)}}function su(u,h,x){var R=h==="Section"?I().anchors[u]:Te(x,"data-anchor");return encodeURI(I().navigationTooltips[u]||R||h+" "+(u+1))}function Cp(u){u.cancelable&&de(u),j({scrollTrigger:"horizontalNav"});var h=oe(this,jt),x=v(Oe,oe(this,jt))[0],R=To(U().sections,h),H=R.slides[w(oe(this,"li"))];V.emit(z.landscapeScroll,{slides:x,destination:H.item})}function Lp(u,h){I().slidesNavigation&&u!=null&&(B(v(nt,u),je),q(v("a",v("li",u)[h]),je))}function Pp(u){var h=u.item,x=u.slides.length;K(Ie('<div class="'+hr+'"><ul></ul></div>'),h);var R=v(pt,h)[0];q(R,"fp-"+I().slidesNavPosition);for(var H=0;H<x;H++){var ae=v(Ue,h)[H];K(Ie('<li><a href="#"><span class="fp-sr-only">'+su(H,"Slide",ae)+"</span><span></span></a></li>"),v("ul",R)[0])}M(R,{"margin-left":"-"+R.innerWidth/2+"px"});var ue=u.activeSlide?u.activeSlide.index():0;q(v("a",v("li",R)[ue]),je)}var zi={};zi.m={up:!0,down:!0,left:!0,right:!0},zi.k=S({},zi.m);function da(u,h,x){h!=="all"?zi[x][h]=u:Object.keys(zi[x]).forEach(function(R){zi[x][R]=u})}function Ft(){return zi}V.on(z.onClickOrTouch,Dp);function Dp(u){var h=u.target;(Ze(h,Nn)||oe(h,Nn))&&Ip.call(h,u)}function Ip(){var u=oe(this,jt);_(this,Lt)?Ft().m.left&&(j({scrollTrigger:"slideArrow"}),V.emit(z.moveSlideLeft,{section:u})):Ft().m.right&&(j({scrollTrigger:"slideArrow"}),V.emit(z.moveSlideRight,{section:u}))}function Up(u){var h=u.item,x=[Ie(I().controlArrowsHTML[0]),Ie(I().controlArrowsHTML[1])];ce(v(Oe,h)[0],x),q(x,fi),q(x[0],Lt),q(x[1],kt),I().controlArrowColor!=="#fff"&&(M(v(oa,h),{"border-color":"transparent transparent transparent "+I().controlArrowColor}),M(v(Oi,h),{"border-color":"transparent "+I().controlArrowColor+" transparent transparent"})),I().loopHorizontal||E(v(Oi,h))}function Op(u){!I().loopHorizontal&&I().controlArrows&&(Re(v(Oi,u.section),u.slideIndex!==0),Re(v(oa,u.section),A(u.destiny)!=null))}c.setRecordHistory=Lo;function Lo(u,h){ca("recordHistory",u,h)}c.setAutoScrolling=_r,c.test.setAutoScrolling=_r;function _r(u,h){u||mr(0),ca("autoScrolling",u,h);var x=U().activeSection.item;if(I().autoScrolling&&!I().scrollBar)M(ua,{overflow:"hidden",height:"100%"}),B(Et,"fp-scrollable"),Lo(dr().recordHistory,"internal"),M(Xe(),{"-ms-touch-action":"none","touch-action":"none"}),x!=null&&mr(x.offsetTop);else{M(ua,{overflow:"visible",height:"initial"}),q(Et,"fp-scrollable");var R=I().autoScrolling?dr().recordHistory:!1;if(Lo(R,"internal"),M(Xe(),{"-ms-touch-action":"","touch-action":""}),x!=null){var H=pr(x.offsetTop);H.element.scrollTo(0,H.options)}}}function Np(u){j({isDoingContinousVertical:!0});var h=U().activeSection.item;return u.isMovementUp?$(h,Ve(h,jt)):ce(h,Be(h,jt).reverse()),mr(U().activeSection.item.offsetTop),Fp(),u.wrapAroundElements=h,u.dtop=u.element.offsetTop,u.yMovement=bo(U().activeSection,u.element),u}function Fp(){for(var u=v(ke),h=0;h<u.length;h++)ga(u[h],"internal")}function Bp(){for(var u=v(ke),h=0;h<u.length;h++)ga(u[h],"internal")}function zp(u){u.wrapAroundElements!=null&&(u.isMovementUp?$(v(jt)[0],u.wrapAroundElements):ce(v(jt)[U().sections.length-1],u.wrapAroundElements),mr(U().activeSection.item.offsetTop),Bp(),j({isDoingContinousVertical:!1}))}function au(){var u=v(xo)[0]||Uo()&&v(Mo)[0];!I().lazyLoading||!u||v(jt+":not("+nt+")").forEach(function(h){Hp(h)&&gs(h)})}function Hp(u){var h=u.getBoundingClientRect(),x=h.top,R=h.bottom,H=2,ae=x+H<G.windowsHeight&&x>0,ue=R>H&&R<G.windowsHeight;return ae||ue}function kp(){W(y(this),"click")}function Gp(u,h){var x=v(ne)[0];I().navigation&&x!=null&&x.style.display!=="none"&&(B(v(nt,x),je),q(u?v('a[href="#'+u+'"]',x):v("a",v("li",x)[h]),je))}function ou(){Ce(v(ne));var u=n.createElement("div");u.setAttribute("id",Y);var h=n.createElement("ul");u.appendChild(h),K(u,Et);var x=v(ne)[0];q(x,"fp-"+I().navigationPosition),I().showActiveTooltip&&q(x,be);for(var R="",H=0;H<U().sections.length;H++){var ae=U().sections[H],ue="";I().anchors.length&&(ue=ae.anchor),R+='<li><a href="#'+encodeURI(ue)+'"><span class="fp-sr-only">'+su(ae.index(),"Section")+"</span><span></span></a>";var ge=I().navigationTooltips[ae.index()];typeof ge<"u"&&ge!==""&&(R+='<div class="'+Z+" fp-"+I().navigationPosition+'">'+ge+"</div>"),R+="</li>"}v("ul",x)[0].innerHTML=R;var Ge=v("li",v(ne)[0])[U().activeSection.index()];q(v("a",Ge),je)}function Vp(u){u.preventDefault&&de(u),j({scrollTrigger:"verticalNav"});var h=w(oe(this,ne+" li"));V.emit(z.scrollPage,{destination:U().sections[h]})}function Po(u,h){Wp(u),Gp(u,h)}function Wp(u){I().menu&&I().menu.length&&v(I().menu).forEach(function(h){h!=null&&(B(v(nt,h),je),q(v('[data-menuanchor="'+u+'"]',h),je))})}new Date().getTime();var Xp=function(){var u=!0,h=new Date().getTime(),x,R=!t.fullpage_api;return function(H,ae){var ue=new Date().getTime(),ge=H==="wheel"?I().scrollingSpeed:100;return u=R||ue-h>=ge,R=!t.fullpage_api,u&&(x=ae(),h=ue),typeof x<"u"?x:!0}}();function lu(u,h){if(we(I().beforeLeave)){var x=Xp(U().scrollTrigger,function(){return Bn(u,h)});return x}}c.moveTo=moveTo,c.getScrollY=function(){return G.scrollY};var vs,Do;V.on(z.onDestroy,Yp);function gr(u,h,x){var R=u.item;if(R!=null){var H=qp(R),ae,ue,ge={element:R,callback:h,isMovementUp:x,dtop:H,yMovement:bo(U().activeSection,R),anchorLink:u.anchor,sectionIndex:u.index(),activeSlide:u.activeSlide?u.activeSlide.item:null,leavingSection:U().activeSection.index()+1,localIsResizing:G.isResizing,items:{origin:U().activeSection,destination:u},direction:null};if(!(U().activeSection.item==R&&!G.isResizing||I().scrollBar&&ve()===ge.dtop&&!_(R,us))){if(ge.activeSlide!=null&&(ae=Te(ge.activeSlide,"data-anchor"),ue=w(ge.activeSlide,null)),!ge.localIsResizing){var Ge=ge.yMovement;if(typeof x<"u"&&(Ge=x?"up":"down"),ge.direction=Ge,we(I().beforeLeave)&&lu("beforeLeave",ge)===!1||we(I().onLeave)&&!Bn("onLeave",ge))return}I().autoScrolling&&I().continuousVertical&&typeof ge.isMovementUp<"u"&&(!ge.isMovementUp&&ge.yMovement=="up"||ge.isMovementUp&&ge.yMovement=="down")&&(ge=Np(ge)),ge.localIsResizing||wo(U().activeSection.item),q(R,je),B(me(R),je),Zn(),gs(R),j({canScroll:c.test.isTesting}),Ro(ue,ae,ge.anchorLink),V.emit(z.onLeave,ge),jp(ge),j({lastScrolledDestiny:ge.anchorLink}),Po(ge.anchorLink,ge.sectionIndex)}}}function Yp(){clearTimeout(vs),clearTimeout(Do)}function qp(u){var h=u.offsetHeight,x=u.offsetTop,R=x,H=x>G.previousDestTop,ae=R-m()+h,ue=I().bigSectionsDestination;return h>m()?(!H&&!ue||ue==="bottom")&&(R=ae):(H||G.isResizing&&A(u)==null)&&(R=ae),j({previousDestTop:R}),R}function jp(u){var h=I().scrollingSpeed<700,x=h?700:I().scrollingSpeed;if(j({touchDirection:"none",scrollY:Math.round(u.dtop)}),V.emit(z.onPerformMovement),I().css3&&I().autoScrolling&&!I().scrollBar){var R="translate3d(0px, -"+Math.round(u.dtop)+"px, 0px)";tu(R,!0),I().scrollingSpeed?(clearTimeout(vs),vs=setTimeout(function(){pa(u),j({canScroll:!h||c.test.isTesting})},I().scrollingSpeed)):pa(u)}else{var H=pr(u.dtop);c.test.top=-u.dtop+"px",clearTimeout(vs),fa(H.element,H.options,I().scrollingSpeed,function(){I().scrollBar?vs=setTimeout(function(){pa(u)},30):(pa(u),j({canScroll:!h||c.test.isTesting}))})}h&&(clearTimeout(Do),Do=setTimeout(function(){j({canScroll:!0})},x))}function pa(u){j({isBeyondFullpage:!1}),zp(u),we(I().afterLoad)&&!u.localIsResizing&&Bn("afterLoad",u),Zn(),u.localIsResizing||ha(u.element),q(u.element,Ct),B(me(u.element),Ct),au(),j({canScroll:!0}),V.emit(z.afterSectionLoads,u),we(u.callback)&&u.callback()}c.setFitToSection=Io,c.fitToSection=cu;function Io(u,h){ca("fitToSection",u,h)}function cu(){G.canScroll&&(j({isResizing:!0}),gr(G.activeSection),j({isResizing:!1}))}c.setResponsive=ma;function uu(){var u=I().responsive||I().responsiveWidth,h=I().responsiveHeight,x=u&&t.innerWidth<u,R=h&&t.innerHeight<h;u&&h?ma(x||R):u?ma(x):h&&ma(R)}function ma(u){var h=Uo();u?h||(_r(!1,"internal"),Io(!1,"internal"),E(v(ne)),q(Et,he),we(I().afterResponsive)&&I().afterResponsive.call(Xe(),u)):h&&(_r(dr().autoScrolling,"internal"),Io(dr().autoScrolling,"internal"),L(v(ne)),B(Et,he),we(I().afterResponsive)&&I().afterResponsive.call(Xe(),u))}function Uo(){return _(Et,he)}function fu(u){I().verticalCentered&&(!I().scrollOverflow&&Fe.shouldBeScrollable(u.item)||Fe.isScrollable(u)||_(u.item,zt)||q(u.item,zt))}var hu=null;c.getActiveSection=Zp;function Kp(){return hu}function du(u){var h=u.item,x=u.allSlidesItems.length,R=u.index();!U().activeSection&&u.isVisible&&(q(h,je),Zn(),hu=U().activeSection.item),I().paddingTop&&M(h,{"padding-top":I().paddingTop}),I().paddingBottom&&M(h,{"padding-bottom":I().paddingBottom}),typeof I().sectionsColor[R]<"u"&&M(h,{"background-color":I().sectionsColor[R]}),typeof I().anchors[R]<"u"&&h.setAttribute("data-anchor",u.anchor),x||fu(u)}function Zp(){return U().activeSection}function $p(u){return u.isSection?u:u.parent}var Oo;V.on(z.bindEvents,Jp);function Jp(){V.on(z.onAfterRenderNoAnchor,pu),V.on(z.onLeave,Fe.onLeave),V.on(z.onSlideLeave,Fe.onLeave),V.on(z.afterSlideLoads,Fe.afterLoad),V.on(z.afterSectionLoads,Fe.afterLoad),V.on(z.onDestroy,Qp),Le("keyup",Fe.keyUpHandler)}function pu(){I().scrollOverflow&&!I().scrollBar&&(Fe.makeScrollable(),Fe.focusScrollable())}function Qp(){V.removeListener(z.onAfterRenderNoAnchor,pu),He("keyup",Fe.keyUpHandler)}var Fe={focusedElem:null,shouldFocusScrollable:!0,isInnerScrollAllowed:!0,timeBeforeReachingLimit:null,timeLastScroll:null,preventScrollWithMouseWheel:function(h){if(!G.canScroll)return de(h),!1},preventScrollWithKeyboard:function(h){if(!J()&&I().keyboardScrolling){var x=[38,33,32,40,34,36,35];if(x.indexOf(h.keyCode)>-1&&!Fe.isInnerScrollAllowed)return de(h),!1}},keyUpHandler:function(){Fe.shouldFocusScrollable=G.canScroll},onLeave:function(){clearTimeout(Oo),Fe.isInnerScrollAllowed=!1},afterLoad:function(){Fe.isInnerScrollAllowed=!1,clearTimeout(Oo),Oo=setTimeout(function(){Fe.shouldFocusScrollable=G.canScroll},200)},unfocusScrollable:function(){n.activeElement===this.focusedElem&&(this.focusedElem.blur(),Fe.isInnerScrollAllowed=!1)},focusScrollable:function(){if(!(!I().scrollOverflow||!Fe.shouldFocusScrollable)){Fe.unfocusScrollable();var h=Fe.getScrollableItem(U().activeSection.item);h&&!i&&!o&&(this.focusedElem=h,requestAnimationFrame(function(){h.focus(),Fe.isInnerScrollAllowed=!0})),Fe.shouldFocusScrollable=!1}},makeScrollable:function(){I().scrollOverflowMacStyle&&!s&&q(Et,"fp-scroll-mac"),U().panels.forEach(function(h){if(!(h.slides&&h.slides.length)&&!(_(h.item,aa)&&Uo())){var x=Fi(h.item),R=Fe.shouldBeScrollable(h.item),H=$p(h);if(a){var ae=R?"addClass":"removeClass";pe[ae](H.item,We),pe[ae](h.item,We)}else q(H.item,We),q(h.item,We);h.hasScroll||(Fe.createWrapper(x),Fe.bindEvents(x)),h.hasScroll=!0}})},bindEvents:function(h){Fe.getScrollableItem(h).addEventListener("scroll",Fe.onPanelScroll),h.addEventListener("wheel",Fe.preventScrollWithMouseWheel,{passive:!1}),h.addEventListener("keydown",Fe.preventScrollWithKeyboard,{passive:!1})},createWrapper:function(h){var x=document.createElement("div");x.className=Ht,Q(h,x),x.setAttribute("tabindex","-1")},destroyWrapper:function(h){var x=v(dt,h)[0];x&&(re(x),h.removeAttribute("tabindex"))},getScrollableItem:function(h){var x=Fi(h);return v(dt,x)[0]||x},hasScroll:function(h){return _(h,Ht)||v(dt,h)[0]!=null},isScrollable:function(h){return h.isSection&&h.activeSlide?h.activeSlide.hasScroll:h.hasScroll},shouldBeScrollable:function(h){var x=Fe.getScrollableItem(h);return x.scrollHeight>t.innerHeight},isScrolled:function(h,x){if(!G.canScroll)return!1;if(I().scrollBar)return!0;var R=Fe.getScrollableItem(x);if(!I().scrollOverflow||!_(R,Ht)||_(x,"fp-noscroll")||_(Fi(x),"fp-noscroll"))return!0;var H=a?1:0,ae=R.scrollTop,ue=h==="up"&&ae<=0,ge=h==="down"&&R.scrollHeight<=Math.ceil(R.offsetHeight+ae)+H,Ge=ue||ge;return Ge||(this.timeBeforeReachingLimit=new Date().getTime()),Ge},shouldMovePage:function(){this.timeLastScroll=new Date().getTime();var h=this.timeLastScroll-Fe.timeBeforeReachingLimit,x=i||o,R=x&&G.isGrabbing,H=G.isUsingWheel&&h>600;return R&&h>400||H},onPanelScroll:function(){var u=0;return function(h){var x=h.target.scrollTop,R=G.touchDirection!=="none"?G.touchDirection:u<x?"down":"up";u=x,we(I().onScrollOverflow)&&Bn("onScrollOverflow",{position:x,direction:R}),_(h.target,Ht)&&G.canScroll&&Fe.isScrolled(R,h.target)&&Fe.shouldMovePage()&&Fe.shouldBeScrollable(U().activeSection.item)&&V.emit(z.onScrollOverflowScrolled,{direction:R})}}()},_a;c.landscapeScroll=vr,V.on(z.bindEvents,em);function em(){V.on(z.onPerformMovement,tm)}function tm(){clearTimeout(_a),j({slideMoving:!1})}function vr(u,h,x){var R=oe(u,jt),H=U().sections.filter(function(ge){return ge.item==R})[0],ae=H.slides.filter(function(ge){return ge.item==h})[0],ue={slides:u,destiny:h,direction:x,destinyPos:{left:h.offsetLeft},slideIndex:ae.index(),section:R,sectionIndex:H.index(),anchorLink:H.anchor,slidesNav:v(pt,R)[0],slideAnchor:ae.anchor,prevSlide:H.activeSlide.item,prevSlideIndex:H.activeSlide.index(),items:{section:H,origin:H.activeSlide,destination:ae},localIsResizing:G.isResizing};if(ue.xMovement=im(ue.prevSlideIndex,ue.slideIndex),ue.direction=ue.direction?ue.direction:ue.xMovement,ue.localIsResizing||j({canScroll:!1}),I().onSlideLeave&&!ue.localIsResizing&&ue.xMovement!=="none"&&we(I().onSlideLeave)&&Bn("onSlideLeave",ue)===!1){j({slideMoving:!1});return}q(h,je),B(me(h),je),Zn(),ue.localIsResizing||(wo(ue.prevSlide),gs(h)),Op(ue),H.isActive&&!ue.localIsResizing&&Ro(ue.slideIndex,ue.slideAnchor,ue.anchorLink),V.emit(z.onSlideLeave,ue),nm(u,ue,!0)}function nm(u,h,x){var R=h.destinyPos;if(Lp(h.slidesNav,h.slideIndex),j({scrollX:Math.round(R.left)}),I().css3){var H="translate3d(-"+Math.round(R.left)+"px, 0px, 0px)";c.test.translate3dH[h.sectionIndex]=H,M($c(v(ht,u)),Qc(H)),clearTimeout(_a),_a=setTimeout(function(){x&&mu(h)},I().scrollingSpeed)}else c.test.left[h.sectionIndex]=Math.round(R.left),fa(u,Math.round(R.left),I().scrollingSpeed,function(){x&&mu(h)})}function im(u,h){return u==h?"none":u>h?"left":"right"}function rm(){clearTimeout(_a)}function mu(u){u.localIsResizing||(we(I().afterSlideLoad)&&Bn("afterSlideLoad",u),j({canScroll:!0}),ha(u.destiny),V.emit(z.afterSlideLoads,u)),j({slideMoving:!1})}function ga(u,h){ps(0,"internal"),typeof h<"u"&&j({isResizing:!0}),vr(oe(u,Oe),u),typeof h<"u"&&j({isResizing:!1}),ps(dr().scrollingSpeed,"internal")}var No=null,Fo=null;function Zn(){G.activeSection=null,G.sections.map(function(u){var h=_(u.item,je);u.isActive=h,u.hasScroll=Fe.hasScroll(u.item),h&&(G.activeSection=u),u.slides.length&&(u.activeSlide=null,u.slides.map(function(x){var R=_(x.item,je);x.hasScroll=Fe.hasScroll(u.item),x.isActive=R,R&&(u.activeSlide=x)}))}),sm()}function Bo(){var u=v(I().sectionSelector,Xe()),h=g(u),x=Array.from(u).map(function(ae){return new Sr(ae)}),R=x.filter(function(ae){return ae.isVisible}),H=R.reduce(function(ae,ue){return ae.concat(ue.slides)},[]);No=_u(G.activeSection),Fo=_u(G.activeSection?G.activeSection.activeSlide:null),G.numSections=h.length,G.numSlides=R.reduce(function(ae,ue){return ae+ue.slides.length},0),G.sections=R,G.sectionsIncludingHidden=x,G.slides=H,G.panels=G.sections.concat(G.slides)}function _u(u){if(!u)return null;var h=u?u.item:null,x=u.isSection?G.sectionsIncludingHidden:G.activeSection.slidesIncludingHidden;if(h){var R=To(x,h);return R?R.index():null}return null}function sm(){var u=G.activeSection,h=G.activeSection?G.activeSection.slides.length:!1,x=G.activeSection?G.activeSection.activeSlide:null;if(!u&&G.sections.length&&!U().isBeyondFullpage&&No){var R=gu(No,G.sections);R&&(G.activeSection=R,G.activeSection.isActive=!0,q(G.activeSection.item,je)),G.activeSection&&mr(G.activeSection.item.offsetTop)}if(h&&!x&&Fo){var H=gu(Fo,G.activeSection.slides);H&&(G.activeSection.activeSlide=H,G.activeSection.activeSlide.isActive=!0,q(G.activeSection.activeSlide.item,je)),G.activeSection.activeSlide&&ga(G.activeSection.activeSlide.item,"internal")}}function gu(u,h){var x,R=u-1,H=u;do{if(x=h[R]||h[H],x)break;R=R-1,H=H+1}while(R>=0||H<h.length);return x}var Sr=function(h){var x=this;[].push.call(arguments,I().sectionSelector),Fn.apply(this,arguments),this.allSlidesItems=v(I().slideSelector,h),this.slidesIncludingHidden=Array.from(this.allSlidesItems).map(function(R){return new zo(R,x)}),this.slides=this.slidesIncludingHidden.filter(function(R){return R.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(R){return R.isActive})[0]||this.slides[0]:null};Sr.prototype=Fn.prototype,Sr.prototype.constructor=Sr;var zo=function(h,x){this.parent=x,Fn.call(this,h,I().slideSelector)};zo.prototype=Fn.prototype,zo.prototype.constructor=Sr;function vu(){q(v(I().sectionSelector,Xe()),Ii),q(v(I().slideSelector,Xe()),Ne)}function Su(u){var h=u.slides.length,x=u.allSlidesItems,R=u.slides,H=h*100,ae=100/h;if(!v(Oe,u.item)[0]){var ue=n.createElement("div");ue.className=De,le(x,ue);var ge=n.createElement("div");ge.className=ft,le(x,ge)}M(v(ht,u.item),{width:H+"%"}),h>1&&(I().controlArrows&&Up(u),I().slidesNavigation&&Pp(u)),R.forEach(function(at){M(at.item,{width:ae+"%"}),I().verticalCentered&&fu(at)});var Ge=u.activeSlide||null;Ge!=null&&G.activeSection&&(G.activeSection.index()!==0||G.activeSection.index()===0&&Ge.index()!==0)?ga(Ge.item,"internal"):q(x[0],je)}var Ss,xu={attributes:!1,subtree:!0,childList:!0,characterData:!0};V.on(z.bindEvents,am),c.render=Ho;function am(){I().observer&&"MutationObserver"in window&&v(Se)[0]&&(Ss=om(v(Se)[0],Ho,xu)),V.on(z.contentChanged,Ho)}function om(u,h,x){var R=new MutationObserver(h);return R.observe(u,x),R}function Mu(){return g(v(I().slideSelector,Xe())).length!==U().numSlides}function lm(){return g(v(I().sectionSelector,Xe())).length!==U().numSections}function cm(){return Mu()||lm()}function Ho(u){var h=Mu();cm()&&!G.isDoingContinousVertical&&(I().observer&&Ss&&Ss.disconnect(),Bo(),Zn(),I().anchors=[],Ce(v(ne)),vu(),Yc(),I().navigation&&ou(),h&&(Ce(v(pt)),Ce(v(Nn))),U().sections.forEach(function(x){x.slides.length?h&&Su(x):du(x)})),I().observer&&Ss&&v(Se)[0]&&Ss.observe(v(Se)[0],xu)}var um=function(){var u=!1;try{var h=Object.defineProperty({},"passive",{get:function(){u=!0}});Ae("testPassive",null,h),mt("testPassive",null,h)}catch{}return function(){return u}}();function Eu(){return um()?{passive:!1}:!1}var va=function(){var u=new Date().getTime(),h=[],x,R;return{registerEvent:function(ae){ae=ae||t.event;var ue=ae.wheelDelta||-ae.deltaY||-ae.detail,ge=Math.max(-1,Math.min(1,ue)),Ge=typeof ae.wheelDeltaX<"u"||typeof ae.deltaX<"u";x=Math.abs(ae.wheelDeltaX)<Math.abs(ae.wheelDelta)||Math.abs(ae.deltaX)<Math.abs(ae.deltaY)||!Ge;var at=new Date().getTime();R=ge<0?"down":"up",h.length>149&&h.shift(),h.push(Math.abs(ue));var ot=at-u;u=at,ot>200&&(h=[])},isAccelerating:function(){var ae=_t(h,10),ue=_t(h,70),ge=ae>=ue;return h.length?ge&&x:!1},getDirection:function(){return R}}}();function fm(){var u=dm(),h=pr(u);c.test.top=-u+"px",j({canScroll:!1}),fa(h.element,h.options,I().scrollingSpeed,function(){setTimeout(function(){j({isBeyondFullpage:!0}),j({canScroll:!0})},30)})}function hm(){if(Ep())yu();else return}function yu(){var u=pr(rt(U().sections).item.offsetTop);j({canScroll:!1}),fa(u.element,u.options,I().scrollingSpeed,function(){j({canScroll:!0}),j({isBeyondFullpage:!1}),j({isAboutToScrollToFullPage:!1})})}function dm(){return I().css3?ve()+m():rt(U().sections).item.offsetTop+rt(U().sections).item.offsetHeight}function pm(u,h){new Date().getTime();var x=U().isBeyondFullpage&&u.getBoundingClientRect().bottom>=0&&va.getDirection()==="up",R=U().isAboutToScrollToFullPage;if(R)return de(h),!1;if(U().isBeyondFullpage){if(!x)Tu("set","beyondFullpage",1e3);else{var H=!R&&(!Tu("isNewKeyframe","beyondFullpage")||!va.isAccelerating()),ae;if(H)return ae=pr(rt(U().sections).item.offsetTop+rt(U().sections).item.offsetHeight),ae.element.scrollTo(0,ae.options),j({isAboutToScrollToFullPage:!1}),de(h),!1;if(va.isAccelerating())return x=!1,j({isAboutToScrollToFullPage:!0}),j({scrollTrigger:"wheel"}),yu(),de(h),!1}if(!R&&!x)return!0}}var Tu=function(){var u=!1,h={},x={};return function(R,H,ae){switch(R){case"set":h[H]=new Date().getTime(),x[H]=ae;break;case"isNewKeyframe":var ue=new Date().getTime();u=ue-h[H]>x[H];break}return u}}();c.moveSectionDown=xs;function xs(){var u=U().activeSection.next();!u&&(I().loopBottom||I().continuousVertical)&&(u=U().sections[0]),u!=null?gr(u,null,!1):mm()&&V.emit(z.scrollBeyondFullpage)}function mm(){return Xe().scrollHeight<Et.scrollHeight&&I().scrollBar&&I().scrollBeyondFullpage}c.moveSectionUp=xr;function xr(){var u=U().activeSection.prev();!u&&(I().loopTop||I().continuousVertical)&&(u=rt(U().sections)),u!=null&&gr(u,null,!0)}var Sa=0;function bu(u){I().autoScrolling&&(G.canScroll&&(u.pageY<Sa&&Ft().m.up?xr():u.pageY>Sa&&Ft().m.down&&xs()),Sa=u.pageY)}function _m(u){Sa=u}function ko(u){if(Ft().m[u]){var h=u==="down"?xs:xr;I().scrollOverflow&&Fe.isScrollable(U().activeSection)?Fe.isScrolled(u,U().activeSection.item)&&Fe.shouldMovePage()&&h():h()}}var xa=0,Ms=0,Ma=0,Es=0,Ea=Sm(),mn={touchmove:"ontouchmove"in window?"touchmove":Ea?Ea.move:null,touchstart:"ontouchstart"in window?"touchstart":Ea?Ea.down:null};function gm(){if(mn.touchmove&&(i||o)){I().autoScrolling&&(Et.removeEventListener(mn.touchmove,Vo,{passive:!1}),Et.addEventListener(mn.touchmove,Vo,{passive:!1}));var u=I().touchWrapper;u.removeEventListener(mn.touchstart,Go),u.removeEventListener(mn.touchmove,ya,{passive:!1}),u.addEventListener(mn.touchstart,Go),u.addEventListener(mn.touchmove,ya,{passive:!1})}}function vm(){if(mn.touchmove&&(i||o)){I().autoScrolling&&(Et.removeEventListener(mn.touchmove,ya,{passive:!1}),Et.removeEventListener(mn.touchmove,Vo,{passive:!1}));var u=I().touchWrapper;u.removeEventListener(mn.touchstart,Go),u.removeEventListener(mn.touchmove,ya,{passive:!1})}}function ya(u){var h=oe(u.target,jt)||U().activeSection.item,x=Fe.isScrollable(U().activeSection);if(Ta(u)){j({isGrabbing:!0,isUsingWheel:!1}),I().autoScrolling&&(x&&!G.canScroll||I().scrollBar)&&de(u);var R=wu(u);Ma=R.y,Es=R.x;var H=Math.abs(xa-Ma)>t.innerHeight/100*I().touchSensitivity,ae=Math.abs(Ms-Es)>T()/100*I().touchSensitivity,ue=v(Oe,h).length&&Math.abs(Ms-Es)>Math.abs(xa-Ma),ge=Ms>Es?"right":"left",Ge=xa>Ma?"down":"up",at=ue?ge:Ge;j({touchDirection:at}),ue?!G.slideMoving&&ae&&(Ms>Es?Ft().m.right&&V.emit(z.moveSlideRight,{section:h}):Ft().m.left&&V.emit(z.moveSlideLeft,{section:h})):I().autoScrolling&&G.canScroll&&H&&ko(Ge)}}function Ta(u){return typeof u.pointerType>"u"||u.pointerType!="mouse"}function Go(u){if(I().fitToSection&&j({activeAnimation:!1}),Ta(u)){var h=wu(u);xa=h.y,Ms=h.x}Ae("touchend",Au)}function Au(){mt("touchend",Au),j({isGrabbing:!1})}function wu(u){var h={};return h.y=typeof u.pageY<"u"&&(u.pageY||u.pageX)?u.pageY:u.touches[0].pageY,h.x=typeof u.pageX<"u"&&(u.pageY||u.pageX)?u.pageX:u.touches[0].pageX,o&&Ta(u)&&I().scrollBar&&typeof u.touches<"u"&&(h.y=u.touches[0].pageY,h.x=u.touches[0].pageX),h}function Sm(){var u;return t.PointerEvent&&(u={down:"pointerdown",move:"pointermove"}),u}function Vo(u){I().autoScrolling&&Ta(u)&&Ft().m.up&&(G.canScroll||de(u))}c.moveSlideLeft=Wo,c.moveSlideRight=Xo;function Ru(u,h){var x=h??U().activeSection.item,R=To(G.sections,x),H=v(Oe,x)[0];if(!(H==null||G.slideMoving||R.slides.length<2)){var ae=R.activeSlide,ue=u==="left"?ae.prev():ae.next();if(!ue){if(!I().loopHorizontal)return;ue=u==="left"?rt(R.slides):R.slides[0]}j({slideMoving:!c.test.isTesting}),vr(H,ue.item,u)}}function Wo(u){Ru("left",u)}function Xo(u){Ru("right",u)}function Yo(u){var h=U().sections.filter(function(R){return R.anchor===u})[0];if(!h){var x=typeof u<"u"?u-1:0;h=U().sections[x]}return h}function Cu(u){u!=null&&vr(oe(u,Oe),u)}function qo(u,h){var x=Yo(u);if(x!=null){var R=xm(h,x);(!x.anchor||x.anchor!==G.lastScrolledDestiny)&&!_(x.item,je)?gr(x,function(){Cu(R)}):Cu(R)}}function xm(u,h){var x=h.slides.filter(function(R){return R.anchor===u})[0];return x==null&&(u=typeof u<"u"?u:0,x=h.slides[u]),x?x.item:null}c.moveTo=ys;function ys(u,h){var x=Yo(u);typeof h<"u"?qo(u,h):x!=null&&gr(x)}var ba,jo,Mr;V.on(z.bindEvents,Mm);function Mm(){Ae("blur",Tm),Le("keydown",Lu),Le("keyup",Pu),V.on(z.onDestroy,Em),V.on(z.afterSlideLoads,Am),V.on(z.afterSectionLoads,wm)}function Em(){clearTimeout(jo),He("keydown",Lu),He("keyup",Pu)}function Lu(u){clearTimeout(jo);var h=u.keyCode,x=[37,39].indexOf(h)>-1,R=I().autoScrolling||I().fitToSection||x;h===9?bm(u):!J()&&I().keyboardScrolling&&R&&(ba=u.ctrlKey,jo=setTimeout(function(){ym(u)},0))}function ym(u){var h=u.shiftKey,x=n.activeElement,R=Ze(x,"video")||Ze(x,"audio"),H={up:Fe.isScrolled("up",U().activeSection.item),down:Fe.isScrolled("down",U().activeSection.item)},ae=[37,39].indexOf(u.keyCode)>-1;if(Pm(u),!(!G.canScroll&&!ae))switch(j({scrollTrigger:"keydown"}),u.keyCode){case 38:case 33:Ft().k.up&&H.up?G.isBeyondFullpage?V.emit(z.onKeyDown,{e:u}):xr():Fe.focusScrollable();break;case 32:if(h&&Ft().k.up&&!R&&H.up){xr();break}case 40:case 34:if(Ft().k.down&&H.down){if(G.isBeyondFullpage)return;(u.keyCode!==32||!R)&&xs()}else Fe.focusScrollable();break;case 36:Ft().k.up&&ys(1);break;case 35:Ft().k.down&&ys(U().sections.length);break;case 37:Ft().k.left&&Wo();break;case 39:Ft().k.right&&Xo();break;default:return}}function Pu(u){G.isWindowFocused&&(ba=u.ctrlKey)}function Tm(){j({isWindowFocused:!1}),ba=!1}function bm(u){var h=u.shiftKey,x=n.activeElement,R=Ko(Fi(U().activeSection.item));function H(Kt){return de(Kt),R[0]?R[0].focus():null}if(!G.canScroll){de(u);return}if(!Cm(u)){x?oe(x,Ui+","+Ui+" "+ke)==null&&(x=H(u)):H(u);var ae=x==R[0],ue=x==R[R.length-1],ge=!h&&ue,Ge=h&&ae;if(Ge||ge){de(u);var at=Rm(Ge),ot=at?at.panel:null;if(ot){var St=ot.isSection?ot:ot.parent;V.emit(z.onScrollPageAndSlide,{sectionAnchor:St.index()+1,slideAnchor:ot.isSection?0:ot.index()}),Mr=at.itemToFocus,de(u)}}}}function Am(u){Du()}function wm(u){(!oe(Mr,Ue)||oe(Mr,ke))&&Du()}function Du(){Mr&&(Mr.focus(),Mr=null)}function Rm(u){var h=u?"prevPanel":"nextPanel",x=[],R,H=Kc(O()[h]());do x=Ko(H.item),x.length&&(R={panel:H,itemToFocus:x[u?x.length-1:0]}),H=Kc(H[h]());while(H&&x.length===0);return R}function Ko(u){return[].slice.call(v(l,u)).filter(function(h){return Te(h,"tabindex")!=="-1"&&h.offsetParent!==null})}function Cm(u){var h=Ko(n),x=h.indexOf(n.activeElement),R=u.shiftKey?x-1:x+1,H=h[R],ae=oe(H,Ue),ue=oe(H,jt);return!ae&&!ue}function Lm(u){var h=[40,38,32,33,34];return h.indexOf(u.keyCode)>-1&&!G.isBeyondFullpage}function Pm(u){Lm(u)&&!oe(u.target,dt)&&u.preventDefault()}function Dm(){return ba}var Iu=new Date().getTime(),Er=[];c.setMouseWheelScrolling=Zo;function Zo(u){u?(Im(),Um()):(Om(),Nm())}function Im(){var u="",h;t.addEventListener?h="addEventListener":(h="attachEvent",u="on");var x="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll",R=Eu();x=="DOMMouseScroll"?n[h](u+"MozMousePixelScroll",yr,R):n[h](u+x,yr,R)}function Um(){Xe().addEventListener("mousedown",Uu),Xe().addEventListener("mouseup",Ou)}function Om(){n.addEventListener?(He("mousewheel",yr,!1),He("wheel",yr,!1),He("MozMousePixelScroll",yr,!1)):n.detachEvent("onmousewheel",yr)}function Nm(){Xe().removeEventListener("mousedown",Uu),Xe().removeEventListener("mouseup",Ou)}function yr(u){var h=new Date().getTime(),x=_(v(Nt)[0],C),R=pm(Xe(),u);if(G.isUsingWheel||j({isGrabbing:!1,isUsingWheel:!0,touchDirection:"none"}),!Ft().m.down&&!Ft().m.up)return de(u),!1;if(R)return!0;if(R===!1)return de(u),!1;if(I().autoScrolling&&!Dm()&&!x){u=u||t.event;var H=u.wheelDelta||-u.deltaY||-u.detail,ae=Math.max(-1,Math.min(1,H)),ue=typeof u.wheelDeltaX<"u"||typeof u.deltaX<"u",ge=Math.abs(u.wheelDeltaX)<Math.abs(u.wheelDelta)||Math.abs(u.deltaX)<Math.abs(u.deltaY)||!ue,Ge=ae<0?"down":ae>0?"up":"none";Er.length>149&&Er.shift(),Er.push(Math.abs(H)),I().scrollBar&&de(u);var at=h-Iu;if(Iu=h,at>200&&(Er=[]),j({wheelDirection:Ge}),G.canScroll){var ot=_t(Er,10),St=_t(Er,70),Kt=ot>=St;Kt&&ge&&(j({scrollTrigger:"wheel"}),ae<0?ko("down"):ko("up"))}return!1}I().fitToSection&&j({activeAnimation:!1})}function Uu(u){u.which==2&&(_m(u.pageY),Xe().addEventListener("mousemove",bu))}function Ou(u){u.which==2&&Xe().removeEventListener("mousemove",bu)}function Ts(u){u?(Zo(!0),gm()):(Zo(!1),vm())}var $o=!0;V.on(z.bindEvents,Fm);function Fm(){I().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(u){Nu(u,!1)}),["mouseleave","touchend"].forEach(function(u){Nu(u,!0)})),V.on(z.onDestroy,Bm)}function Bm(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(u){He(u,Fu,!0)})}function Nu(u,h){document["fp_"+u]=h,Le(u,Fu,!0)}function Fu(u){var h=u.type,x=!1,R=h==="mouseleave"?u.toElement||u.relatedTarget:u.target;if(R==document||!R){Ts(!0);return}if(h==="touchend"&&($o=!1,setTimeout(function(){$o=!0},800)),!(h==="mouseenter"&&!$o)){var H=I().normalScrollElements.split(",");H.forEach(function(ae){if(!x){var ue=Ze(R,ae),ge=oe(R,ae);(ue||ge)&&(c.shared.isNormalScrollElement||Ts(!1),c.shared.isNormalScrollElement=!0,x=!0)}}),!x&&c.shared.isNormalScrollElement&&(Ts(!0),c.shared.isNormalScrollElement=!1)}}c.silentMoveTo=Aa;function Aa(u,h){ps(0,"internal"),ys(u,h),ps(dr().scrollingSpeed,"internal")}var Jo=m(),Bu=T(),Qo,el=!1,zu;c.reBuild=nl,V.on(z.bindEvents,zm);function zm(){tl(),Ae("resize",tl),V.on(z.onDestroy,Hm)}function Hm(){clearTimeout(Qo),clearTimeout(zu),mt("resize",tl)}function tl(){el||(I().autoScrolling&&!I().scrollBar||!I().fitToSection)&&Hu(m()),km(),el=!0,clearTimeout(Qo),Qo=setTimeout(function(){Gm(),el=!1},400)}function km(){if(i)for(var u=0;u<4;u++)zu=setTimeout(function(){window.requestAnimationFrame(function(){I().autoScrolling&&!I().scrollBar&&(j({isResizing:!0}),Aa(G.activeSection.index()+1),j({isResizing:!1}))})},200*u)}function Gm(){if(j({isResizing:!0}),Hu(""),!I().autoScrolling&&!G.isBeyondFullpage&&Wm(),V.emit(z.contentChanged),Zn(),uu(),i){var u=n.activeElement;if(!Ze(u,"textarea")&&!Ze(u,"input")&&!Ze(u,"select")){var h=m();Math.abs(h-Jo)>20*Math.max(Jo,h)/100&&(nl(!0),Jo=h)}}else Vm();j({isResizing:!1})}function nl(u){if(!_(Xe(),qe)){j({isResizing:!0,windowsHeight:m(),windowsWidth:T()});for(var h=U().sections,x=0;x<h.length;++x){var R=h[x],H=v(Oe,R.item)[0],ae=R.slides;ae.length>1&&vr(H,R.activeSlide.item)}I().scrollOverflow&&Fe.makeScrollable();var ue=U().activeSection.index();G.isBeyondFullpage||ue&&Aa(ue+1),j({isResizing:!1}),we(I().afterResize)&&u&&I().afterResize.call(Xe(),t.innerWidth,t.innerHeight),we(I().afterReBuild)&&!u&&I().afterReBuild.call(Xe()),W(Xe(),"afterRebuild")}}function Vm(){var u=m(),h=T();(G.windowsHeight!==u||Bu!==h)&&(j({windowsHeight:u}),Bu=h,nl(!0))}function Hu(u){var h=u===""?"":u+"px";U().sections.forEach(function(x){M(x.item,{height:h})})}function Wm(){if(!I().autoScrolling||I().scrollBar){var u=t.innerHeight*.01;n.documentElement.style.setProperty("--vh","".concat(u,"px"))}}function il(){var u,h,x=t.location.hash;if(x.length){var R=x.replace("#","").split("/"),H=x.indexOf("#/")>-1;u=H?"/"+R[1]:decodeURIComponent(R[0]);var ae=H?R[2]:R[1];ae&&ae.length&&(h=decodeURIComponent(ae))}return{section:u,slide:h}}c.setLockAnchors=qm,V.on(z.bindEvents,Xm);function Xm(){Ae("hashchange",ku),V.on(z.onDestroy,Ym)}function Ym(){mt("hashchange",ku)}function qm(u){I().lockAnchors=u}function ku(){if(!G.isScrolling&&!I().lockAnchors){var u=il(),h=u.section,x=u.slide,R=typeof G.lastScrolledDestiny>"u",H=typeof G.lastScrolledDestiny>"u"&&typeof x>"u"&&!G.slideMoving;h&&h.length&&(h&&h!==G.lastScrolledDestiny&&!R||H||!G.slideMoving&&G.lastScrolledSlide!=x)&&V.emit(z.onScrollPageAndSlide,{sectionAnchor:h,slideAnchor:x})}}V.on(z.bindEvents,jm);function jm(){Le("wheel",va.registerEvent,Eu()),V.on(z.scrollBeyondFullpage,fm),V.on(z.onKeyDown,hm)}V.on(z.bindEvents,Km);function Km(){V.on(z.onClickOrTouch,Zm)}function Zm(u){var h=u.target;oe(h,I().menu+" [data-menuanchor]")&&$m.call(h,u)}function $m(u){j({scrollTrigger:"menu"}),v(I().menu)[0]&&(I().lockAnchors||!I().anchors.length)&&(de(u),V.emit(z.onMenuClick,{anchor:Te(this,"data-menuanchor")}))}V.on(z.bindEvents,Jm);function Jm(){V.on(z.onClickOrTouch,Qm)}function Qm(u){var h=u.target;h&&oe(h,ne+" a")?Vp.call(h,u.e):Ze(h,se)?kp.call(h):(Ze(h,On)||oe(h,On)!=null)&&Cp.call(h,u.e)}var Gu=0,rl,sl;V.on(z.onDestroy,e_);function al(u){var h,x;if(!(G.isResizing||!U().activeSection)&&(rt(U().sections),!(U().isBeyondFullpage||U().isAboutToScrollToFullPage)&&(!I().autoScrolling||I().scrollBar))){var R=ve(),H=t_(R),ae=0,ue=R+m()/2,ge=Et.scrollHeight-m()===R,Ge=U().sections;if(j({scrollY:R}),ge)ae=Ge.length-1;else if(!R)ae=0;else for(var at=0;at<Ge.length;++at){var ot=Ge[at].item;ot.offsetTop<=ue&&(ae=at)}if(n_(H)&&(_(U().activeSection.item,Ct)||(q(U().activeSection.item,Ct),B(me(U().activeSection.item),Ct))),h=Ge[ae],x=h.item,!h.isActive){j({isScrolling:!0});var St=U().activeSection.item,Kt=U().activeSection.index()+1,bn=bo(U().activeSection,x),_n=h.anchor,bs=h.index()+1,Hi=h.activeSlide,hi,zn,$n={activeSection:St,sectionIndex:bs-1,anchorLink:_n,element:x,leavingSection:Kt,direction:bn,items:{origin:U().activeSection,destination:h}};Hi&&(zn=Hi.anchor,hi=Hi.index()),G.canScroll&&(q(x,je),B(me(x),je),we(I().beforeLeave)&&lu("beforeLeave",$n),we(I().onLeave)&&Bn("onLeave",$n),we(I().afterLoad)&&Bn("afterLoad",$n),wo(St),gs(x),ha(x),Po(_n,bs-1),I().anchors.length&&j({lastScrolledDestiny:_n}),Zn(),Ro(hi,zn,_n)),clearTimeout(rl),rl=setTimeout(function(){j({isScrolling:!1})},100)}I().fitToSection&&G.canScroll&&(clearTimeout(sl),sl=setTimeout(function(){var An=G.sections.filter(function(As){var ws=As.item.getBoundingClientRect();return Math.round(ws.bottom)===Math.round(m())||Math.round(ws.top)===0});An.length||cu()},I().fitToSectionDelay))}}function e_(){clearTimeout(rl),clearTimeout(sl)}function t_(u){var h=u>Gu?"down":"up";return Gu=u,j({previousDestTop:u}),h}function n_(u){var h=U().activeSection.item.offsetTop,x=h+m();return u=="up"?x>=ve()+m():h<=ve()}V.on(z.bindEvents,r_),V.on(z.onDestroy,i_);function i_(){mt("scroll",al)}function r_(){Ae("scroll",al),n.body.addEventListener("scroll",al),V.on(z.onScrollPageAndSlide,function(u){qo(u.sectionAnchor,u.slideAnchor)}),V.on(z.onMenuClick,function(u){ys(u.anchor,void 0)}),V.on(z.onScrollOverflowScrolled,function(u){var h=u.direction==="down"?xs:xr;h()}),V.on(z.scrollPage,function(u){gr(u.destination)})}c.getActiveSlide=a_,c.getScrollX=function(){return G.scrollX},V.on(z.bindEvents,s_);function s_(){V.on(z.onDestroy,rm),V.on(z.landscapeScroll,function(u){vr(u.slides,u.destination)}),V.on(z.moveSlideRight,function(u){Xo(u.section)}),V.on(z.moveSlideLeft,function(u){Wo(u.section)})}function a_(){return Ao(U().activeSection.activeSlide)}V.on(z.bindEvents,o_);function o_(){var u=I().credits.position||"right",h=["left","right"].indexOf(u)>-1?"".concat(u,": 0;"):"",x=`
        <div class="fp-watermark" style="`.concat(h,`">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(I().credits.label||"Made with fullPage.js",`
            </a>
        </div>
    `),R=rt(G.sections),H=!G.isValid||I().credits.enabled;R&&R.item&&H&&R.item.insertAdjacentHTML("beforeend",x)}(function(){V.on(z.onInitialise,function(){var ge,Ge,at;j({isValid:(I().licenseKey,ge=I().licenseKey,Ge=function(ot){var St=parseInt("514").toString(16);if(!ot||ot.length<29||ot.split(u[0]).length===4)return null;var Kt=["Each","for"][H()]().join(""),bn=ot[["split"]]("-"),_n=[];bn[Kt](function(hi,zn){if(zn<4){var $n=function(ws){var ll=ws[ws.length-1],__=["NaN","is"][H()]().join("");return window[__](ll)?ae(ll):function(g_){return g_-je.length}(ll)}(hi);_n.push($n);var An=ae(hi[$n]);if(zn===1){var As=["pa","dS","t","art"].join("");An=An.toString()[As](2,"0")}St+=An,zn!==0&&zn!==1||(St+="-")}});var bs=0,Hi="";return ot.split("-").forEach(function(hi,zn){if(zn<4){for(var $n=0,An=0;An<4;An++)An!==_n[zn]&&($n+=Math.abs(ae(hi[An])),isNaN(hi[An])||bs++);var As=ue($n);Hi+=As}}),Hi+=ue(bs),{v:new Date(St+"T00:00"),o:St.split("-")[2]===8*(je.length-2)+"",l:Hi}}(ge),at=function(ot){var St=R[H()]().join("");return ot&&St.indexOf(ot)===0&&ot.length===St.length}(ge),(Ge||at)&&(Ge&&x<=Ge.v&&Ge.l===ge.split(u[0])[4]||at||Ge.o)||!1)})});var u=["-"],h="2023-4-29".split("-"),x=new Date(h[0],h[1],h[2]),R=["se","licen","-","v3","l","gp"];function H(){return[["re","verse"].join("")][0]}function ae(ge){return ge?isNaN(ge)?ge.charCodeAt(0)-72:ge:""}function ue(ge){var Ge=72+ge;return Ge>90&&Ge<97&&(Ge+=15),String.fromCharCode(Ge).toUpperCase()}})(),c.setKeyboardScrolling=Vu;function Vu(u,h){typeof h<"u"?(h=h.replace(/ /g,"").split(","),h.forEach(function(x){da(u,x,"k")})):(da(u,"all","k"),I().keyboardScrolling=u)}function l_(u){var h=u.index();typeof I().anchors[h]<"u"&&u.isActive&&Po(I().anchors[h],h),I().menu&&I().css3&&oe(v(I().menu)[0],Se)!=null&&v(I().menu).forEach(function(x){Et.appendChild(x)})}function c_(){M(b(Xe(),"body"),{height:"100%",position:"relative"}),q(Xe(),N),q(ms,tt),j({windowsHeight:m()}),B(Xe(),qe),vu();for(var u=U().sectionsIncludingHidden,h=0;h<u.length;h++){var x=u[h],R=x.allSlidesItems,H=Te(x.item,"style");H&&x.item.setAttribute("data-fp-styles",H),du(x),l_(x),R.length>0&&Su(x)}I().fixedElements&&I().css3&&v(I().fixedElements).forEach(function(ae){Et.appendChild(ae)}),I().navigation&&ou(),Ap(),I().scrollOverflow&&Fe.makeScrollable()}c.shared.afterRenderActions=Wu;function Wu(){var u=U().activeSection,h=U().activeSection.item;q(h,Ct),gs(h),au(),ha(h),u_()&&we(I().afterLoad)&&Bn("afterLoad",{activeSection:h,element:h,direction:null,anchorLink:u.anchor,sectionIndex:u.index(),items:{origin:U().activeSection,destination:U().activeSection}}),we(I().afterRender)&&Bn("afterRender")}function u_(){var u=il(),h=Yo(u.section);return!u.section||!h||typeof h<"u"&&h.index()===w(Kp())}c.setAllowScrolling=ol;function ol(u,h){typeof h<"u"?(h=h.replace(/ /g,"").split(","),h.forEach(function(x){da(u,x,"m")})):da(u,"all","m")}function Xu(){var u=il(),h=u.section,x=u.slide;h?I().animateAnchor?qo(h,x):Aa(h,x):V.emit(z.onAfterRenderNoAnchor,null)}function f_(){mr(0),v("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Xe()).forEach(function(h){P(h,"src")}),v("img[data-srcset]").forEach(function(h){P(h,"srcset")}),Ce(v(ne+", "+pt+", "+Nn)),M(yo(U().sections),{height:"","background-color":"",padding:""}),M(yo(U().slides),{width:""}),M(Xe(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),M(ua,{overflow:"",height:""}),B(ms,tt),B(Et,he+" "+te),Et.className.split(/\s+/).forEach(function(h){h.indexOf(st)===0&&B(Et,h)}),yo(U().panels).forEach(function(h){I().scrollOverflow&&Fe.destroyWrapper(h),B(h,zt+" "+je+" "+Ct+" "+We);var x=Te(h,"data-fp-styles");x&&h.setAttribute("style",x),_(h,Ii)&&!gp()&&h.removeAttribute("data-anchor")}),Jc(Xe()),[fr,ht,Oe].forEach(function(h){v(h,Xe()).forEach(function(x){re(x)})}),M(Xe(),{"-webkit-transition":"none",transition:"none"}),B(Xe(),N),t.scrollTo(0,0);var u=[Ii,Ne,ft];u.forEach(function(h){B(v("."+h),h)})}c.destroy=d_;function h_(){Bo(),Zn(),I().scrollBar=I().scrollBar||I().hybrid,Yc(),c_(),ol(!0),Ts(!0),_r(I().autoScrolling,"internal"),uu(),iu(),n.readyState==="complete"&&Xu(),Ae("load",Xu),Wu(),Bo(),Zn()}function d_(u){_r(!1,"internal"),ol(!0),Ts(!1),Vu(!1),q(Xe(),qe),V.emit(z.onDestroy),u&&f_()}var p_=function(){return I()&&G.isValid||n.domain.indexOf("alvarotrigo.com")>-1};function Yu(){var u=I()["licenseKey"],h="font-size: 15px;background:yellow;";if(I().licenseKey.trim()===""?(d("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),d("error","https://github.com/alvarotrigo/fullPage.js#options")):p_()?u&&u.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",h),console.warn("%c https://alvarotrigo.com/fullPage/",h)):(d("error","Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"),d("error","https://alvarotrigo.com/fullPage/pricing")),_(ms,tt)){d("error","Fullpage.js can only be initialized once and you are doing it multiple times!");return}I().continuousVertical&&(I().loopTop||I().loopBottom)&&(I().continuousVertical=!1,d("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),I().scrollOverflow&&(I().scrollBar||!I().autoScrolling)&&d("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),I().continuousVertical&&(I().scrollBar||!I().autoScrolling)&&(I().continuousVertical=!1,d("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),f.forEach(function(x){I()[x]&&d("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+x)}),I().anchors.forEach(function(x){var R=[].slice.call(v("[name]")).filter(function(ue){return Te(ue,"name")&&Te(ue,"name").toLowerCase()==x.toLowerCase()}),H=[].slice.call(v("[id]")).filter(function(ue){return Te(ue,"id")&&Te(ue,"id").toLowerCase()==x.toLowerCase()});if(H.length||R.length){d("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var ae=H.length?"id":"name";(H.length||R.length)&&d("error",'"'+x+'" is is being used by another element `'+ae+"` property")}})}function qu(u,h){if(yp(),_(ms,tt)){Yu();return}return xp("touchWrapper",typeof u=="string"?v(u)[0]:u),Sp(h),vp(typeof u=="string"?v(u)[0]:u),V.emit(z.onInitialise),Yu(),m_(),Xe()&&(V.emit(z.beforeInit),h_(),V.emit(z.bindEvents)),t.fullpage_api}function m_(){c.getFullpageData=function(){return{options:I()}},c.version="4.0.20",c.test=Object.assign(c.test,{top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var u=[],h=0;h<v(I().sectionSelector,Xe()).length;h++)u.push("translate3d(0px, 0px, 0px)");return u}(),left:function(){for(var u=[],h=0;h<v(I().sectionSelector,Xe()).length;h++)u.push(0);return u}(),options:I(),setAutoScrolling:null}),c.shared=Object.assign(c.shared,{afterRenderActions:null,isNormalScrollElement:!1}),t.fullpage_api=c}return t.fp_easings=S(t.fp_easings,{easeInOutCubic:function(h,x,R,H){return(h/=H/2)<1?R/2*h*h*h+x:R/2*((h-=2)*h*h+2)+x}}),t.jQuery&&function(u,h){if(!u||!h){d("error","jQuery is required to use the jQuery fullpage adapter!");return}u.fn.fullpage=function(x){x=u.extend({},x,{$:u}),new h(this[0],x),Object.keys(c).forEach(function(R){I().$.fn.fullpage[R]=c[R]})}}(t.jQuery,qu),qu})})(zh);var S_=zh.exports;const x_=Bh(S_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="156",Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,ju=1,E_=2,Hh=1,y_=2,ri=3,Ri=0,en=1,oi=2,yi=0,jr=1,Ku=2,Zu=3,$u=4,T_=5,Vr=100,b_=101,A_=102,Ju=103,Qu=104,w_=200,R_=201,C_=202,L_=203,kh=204,Gh=205,P_=206,D_=207,I_=208,U_=209,O_=210,N_=0,F_=1,B_=2,Zl=3,z_=4,H_=5,k_=6,G_=7,xc=0,V_=1,W_=2,Ti=0,X_=1,Y_=2,q_=3,j_=4,K_=5,Vh=300,Qr=301,es=302,$l=303,Jl=304,ho=306,Ql=1e3,Dn=1001,ec=1002,Jt=1003,ef=1004,cl=1005,xn=1006,Z_=1007,Vs=1008,bi=1009,$_=1010,J_=1011,Mc=1012,Wh=1013,vi=1014,Si=1015,Ws=1016,Xh=1017,Yh=1018,$i=1020,Q_=1021,In=1023,eg=1024,tg=1025,Ji=1026,ts=1027,ng=1028,qh=1029,ig=1030,jh=1031,Kh=1033,ul=33776,fl=33777,hl=33778,dl=33779,tf=35840,nf=35841,rf=35842,sf=35843,rg=36196,af=37492,of=37496,lf=37808,cf=37809,uf=37810,ff=37811,hf=37812,df=37813,pf=37814,mf=37815,_f=37816,gf=37817,vf=37818,Sf=37819,xf=37820,Mf=37821,pl=36492,Ef=36494,yf=36495,sg=36283,Tf=36284,bf=36285,Af=36286,Zh=3e3,Qi=3001,ag=3200,og=3201,$h=0,lg=1,er="",gt="srgb",qn="srgb-linear",po="display-p3",ml=7680,cg=519,ug=512,fg=513,hg=514,dg=515,pg=516,mg=517,_g=518,gg=519,wf=35044,Rf="300 es",tc=1035,li=2e3,to=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cf=1234567;const Fs=Math.PI/180,Xs=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Wt(r,e,t){return Math.max(e,Math.min(t,r))}function Ec(r,e){return(r%e+e)%e}function vg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Sg(r,e,t){return r!==e?(t-r)/(e-r):0}function Bs(r,e,t){return(1-t)*r+t*e}function xg(r,e,t,n){return Bs(r,e,1-Math.exp(-t*n))}function Mg(r,e=1){return e-Math.abs(Ec(r,e*2)-e)}function Eg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Tg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bg(r,e){return r+Math.random()*(e-r)}function Ag(r){return r*(.5-Math.random())}function wg(r){r!==void 0&&(Cf=r);let e=Cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rg(r){return r*Fs}function Cg(r){return r*Xs}function nc(r){return(r&r-1)===0&&r!==0}function Lg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function no(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),f=o((e+n)/2),d=s((e-n)/2),p=o((e-n)/2),g=s((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":r.set(a*f,l*d,l*p,a*c);break;case"YZY":r.set(l*p,a*f,l*d,a*c);break;case"ZXZ":r.set(l*d,l*p,a*f,a*c);break;case"XZX":r.set(a*f,l*v,l*g,a*c);break;case"YXY":r.set(l*g,a*f,l*v,a*c);break;case"ZYZ":r.set(l*v,l*g,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dg={DEG2RAD:Fs,RAD2DEG:Xs,generateUUID:ls,clamp:Wt,euclideanModulo:Ec,mapLinear:vg,inverseLerp:Sg,lerp:Bs,damp:xg,pingpong:Mg,smoothstep:Eg,smootherstep:yg,randInt:Tg,randFloat:bg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:nc,ceilPowerOfTwo:Lg,floorPowerOfTwo:no,setQuaternionFromProperEuler:Pg,normalize:Zt,denormalize:Wr};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],d=n[7],p=n[2],g=n[5],v=n[8],S=i[0],_=i[3],m=i[6],T=i[1],M=i[4],y=i[7],A=i[2],D=i[5],w=i[8];return s[0]=o*S+a*T+l*A,s[3]=o*_+a*M+l*D,s[6]=o*m+a*y+l*w,s[1]=c*S+f*T+d*A,s[4]=c*_+f*M+d*D,s[7]=c*m+f*y+d*w,s[2]=p*S+g*T+v*A,s[5]=p*_+g*M+v*D,s[8]=p*m+g*y+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*s*f+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,p=a*l-f*s,g=c*s-o*l,v=t*d+n*p+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=d*S,e[1]=(i*c-f*n)*S,e[2]=(a*n-i*o)*S,e[3]=p*S,e[4]=(f*t-i*l)*S,e[5]=(i*s-a*t)*S,e[6]=g*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new $e;function Jh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ig(){const r=Ys("canvas");return r.style.display="block",r}const Lf={};function zs(r){r in Lf||(Lf[r]=!0,console.warn(r))}function Kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ug=new $e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Og=new $e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ng(r){return r.convertSRGBToLinear().applyMatrix3(Og)}function Fg(r){return r.applyMatrix3(Ug).convertLinearToSRGB()}const Bg={[qn]:r=>r,[gt]:r=>r.convertSRGBToLinear(),[po]:Ng},zg={[qn]:r=>r,[gt]:r=>r.convertLinearToSRGB(),[po]:Fg},wn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return qn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Bg[e],i=zg[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ar;class Qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=Ys("canvas")),Ar.width=e.width,Ar.height=e.height;const n=Ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kr(t[n]/255)*255):t[n]=Kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hg=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vl(i[o].image)):s.push(vl(i[o]))}else s=vl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function vl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kg=0;class tn extends cr{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Dn,i=Dn,s=xn,o=Vs,a=In,l=bi,c=tn.DEFAULT_ANISOTROPY,f=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=ls(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Qi?gt:er),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Qi:Zh}set encoding(e){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?gt:er}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Vh;tn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],g=l[5],v=l[9],S=l[2],_=l[6],m=l[10];if(Math.abs(f-p)<.01&&Math.abs(d-S)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+p)<.1&&Math.abs(d+S)<.1&&Math.abs(v+_)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(g+1)/2,A=(m+1)/2,D=(f+p)/4,w=(d+S)/4,F=(v+_)/4;return M>y&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=D/n,s=w/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=D/i,s=F/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=F/s),this.set(n,i,s,t),this}let T=Math.sqrt((_-v)*(_-v)+(d-S)*(d-S)+(p-f)*(p-f));return Math.abs(T)<.001&&(T=1),this.x=(_-v)/T,this.y=(d-S)/T,this.z=(p-f)/T,this.w=Math.acos((c+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gg extends cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?gt:er),this.texture=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends Gg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vg extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],f=n[i+2],d=n[i+3];const p=s[o+0],g=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=S;return}if(d!==S||l!==p||c!==g||f!==v){let _=1-a;const m=l*p+c*g+f*v+d*S,T=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),D=Math.atan2(A,m*T);_=Math.sin(_*D)/A,a=Math.sin(a*D)/A}const y=a*T;if(l=l*_+p*y,c=c*_+g*y,f=f*_+v*y,d=d*_+S*y,_===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],f=n[i+3],d=s[o],p=s[o+1],g=s[o+2],v=s[o+3];return e[t]=a*v+f*d+l*g-c*p,e[t+1]=l*v+f*p+c*d-a*g,e[t+2]=c*v+f*g+a*p-l*d,e[t+3]=f*v-a*d-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(i/2),d=a(s/2),p=l(n/2),g=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=p*f*d+c*g*v,this._y=c*g*d-p*f*v,this._z=c*f*v+p*g*d,this._w=c*f*d-p*g*v;break;case"YXZ":this._x=p*f*d+c*g*v,this._y=c*g*d-p*f*v,this._z=c*f*v-p*g*d,this._w=c*f*d+p*g*v;break;case"ZXY":this._x=p*f*d-c*g*v,this._y=c*g*d+p*f*v,this._z=c*f*v+p*g*d,this._w=c*f*d-p*g*v;break;case"ZYX":this._x=p*f*d-c*g*v,this._y=c*g*d+p*f*v,this._z=c*f*v-p*g*d,this._w=c*f*d+p*g*v;break;case"YZX":this._x=p*f*d+c*g*v,this._y=c*g*d+p*f*v,this._z=c*f*v-p*g*d,this._w=c*f*d-p*g*v;break;case"XZY":this._x=p*f*d-c*g*v,this._y=c*g*d-p*f*v,this._z=c*f*v+p*g*d,this._w=c*f*d+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],d=t[10],p=n+a+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-i)*g}else if(n>a&&n>d){const g=2*Math.sqrt(1+n-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-n-d);this._w=(s-c)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-n-a);this._w=(o-i)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+i*c-s*l,this._y=i*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-i*a,this._w=o*f-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-t)*f)/c,p=Math.sin(t*f)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,f=l*n+a*t-s*i,d=l*i+s*n-o*t,p=-s*t-o*n-a*i;return this.x=c*l+p*-s+f*-a-d*-o,this.y=f*l+p*-o+d*-s-c*-a,this.z=d*l+p*-a+c*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new k,Pf=new ar;class ea{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox),wr.applyMatrix4(e.matrixWorld),this.union(wr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Qn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),wa.subVectors(this.max,Rs),Rr.subVectors(e.a,Rs),Cr.subVectors(e.b,Rs),Lr.subVectors(e.c,Rs),di.subVectors(Cr,Rr),pi.subVectors(Lr,Cr),ki.subVectors(Rr,Lr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-ki.z,ki.y,di.z,0,-di.x,pi.z,0,-pi.x,ki.z,0,-ki.x,-di.y,di.x,0,-pi.y,pi.x,0,-ki.y,ki.x,0];return!xl(t,Rr,Cr,Lr,wa)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Rr,Cr,Lr,wa))?!1:(Ra.crossVectors(di,pi),t=[Ra.x,Ra.y,Ra.z],xl(t,Rr,Cr,Lr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new k,new k,new k,new k,new k,new k,new k,new k],Qn=new k,wr=new ea,Rr=new k,Cr=new k,Lr=new k,di=new k,pi=new k,ki=new k,Rs=new k,wa=new k,Ra=new k,Gi=new k;function xl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gi.fromArray(r,s);const a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),f=n.dot(Gi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Wg=new ea,Cs=new k,Ml=new k;class yc{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Ml)),this.expandByPoint(Cs.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new k,El=new k,Ca=new k,mi=new k,yl=new k,La=new k,Tl=new k;class nd{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){El.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(El);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ca),a=mi.dot(this.direction),l=-mi.dot(Ca),c=mi.lengthSq(),f=Math.abs(1-o*o);let d,p,g,v;if(f>0)if(d=o*l-a,p=o*a-l,v=s*f,d>=0)if(p>=-v)if(p<=v){const S=1/f;d*=S,p*=S,g=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(El).addScaledVector(Ca,p),g}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,s){yl.subVectors(t,e),La.subVectors(n,e),Tl.crossVectors(yl,La);let o=this.direction.dot(Tl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(mi,La));if(l<0)return null;const c=a*this.direction.dot(yl.cross(mi));if(c<0||l+c>o)return null;const f=-a*mi.dot(Tl);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,i,s,o,a,l,c,f,d,p,g,v,S,_){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,f,d,p,g,v,S,_)}set(e,t,n,i,s,o,a,l,c,f,d,p,g,v,S,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=d,m[14]=p,m[3]=g,m[7]=v,m[11]=S,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*f,g=o*d,v=a*f,S=a*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=g+v*c,t[5]=p-S*c,t[9]=-a*l,t[2]=S-p*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*f,g=l*d,v=c*f,S=c*d;t[0]=p+S*a,t[4]=v*a-g,t[8]=o*c,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=g*a-v,t[6]=S+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*f,g=l*d,v=c*f,S=c*d;t[0]=p-S*a,t[4]=-o*d,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*f,t[9]=S-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*f,g=o*d,v=a*f,S=a*d;t[0]=l*f,t[4]=v*c-g,t[8]=p*c+S,t[1]=l*d,t[5]=S*c+p,t[9]=g*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,v=a*l,S=a*c;t[0]=l*f,t[4]=S-p*d,t[8]=v*d+g,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=g*d+v,t[10]=p-S*d}else if(e.order==="XZY"){const p=o*l,g=o*c,v=a*l,S=a*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=p*d+S,t[5]=o*f,t[9]=g*d-v,t[2]=v*d-g,t[6]=a*f,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,Yg)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),_i.crossVectors(n,ln),_i.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),_i.crossVectors(n,ln)),_i.normalize(),Pa.crossVectors(ln,_i),i[0]=_i.x,i[4]=Pa.x,i[8]=ln.x,i[1]=_i.y,i[5]=Pa.y,i[9]=ln.y,i[2]=_i.z,i[6]=Pa.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],d=n[5],p=n[9],g=n[13],v=n[2],S=n[6],_=n[10],m=n[14],T=n[3],M=n[7],y=n[11],A=n[15],D=i[0],w=i[4],F=i[8],E=i[12],L=i[1],ie=i[5],q=i[9],B=i[13],K=i[2],X=i[6],le=i[10],Q=i[14],re=i[3],oe=i[7],ce=i[11],$=i[15];return s[0]=o*D+a*L+l*K+c*re,s[4]=o*w+a*ie+l*X+c*oe,s[8]=o*F+a*q+l*le+c*ce,s[12]=o*E+a*B+l*Q+c*$,s[1]=f*D+d*L+p*K+g*re,s[5]=f*w+d*ie+p*X+g*oe,s[9]=f*F+d*q+p*le+g*ce,s[13]=f*E+d*B+p*Q+g*$,s[2]=v*D+S*L+_*K+m*re,s[6]=v*w+S*ie+_*X+m*oe,s[10]=v*F+S*q+_*le+m*ce,s[14]=v*E+S*B+_*Q+m*$,s[3]=T*D+M*L+y*K+A*re,s[7]=T*w+M*ie+y*X+A*oe,s[11]=T*F+M*q+y*le+A*ce,s[15]=T*E+M*B+y*Q+A*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],p=e[10],g=e[14],v=e[3],S=e[7],_=e[11],m=e[15];return v*(+s*l*d-i*c*d-s*a*p+n*c*p+i*a*g-n*l*g)+S*(+t*l*g-t*c*p+s*o*p-i*o*g+i*c*f-s*l*f)+_*(+t*c*d-t*a*g-s*o*d+n*o*g+s*a*f-n*c*f)+m*(-i*a*f-t*l*d+t*a*p+i*o*d-n*o*p+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],p=e[10],g=e[11],v=e[12],S=e[13],_=e[14],m=e[15],T=d*_*c-S*p*c+S*l*g-a*_*g-d*l*m+a*p*m,M=v*p*c-f*_*c-v*l*g+o*_*g+f*l*m-o*p*m,y=f*S*c-v*d*c+v*a*g-o*S*g-f*a*m+o*d*m,A=v*d*l-f*S*l-v*a*p+o*S*p+f*a*_-o*d*_,D=t*T+n*M+i*y+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/D;return e[0]=T*w,e[1]=(S*p*s-d*_*s-S*i*g+n*_*g+d*i*m-n*p*m)*w,e[2]=(a*_*s-S*l*s+S*i*c-n*_*c-a*i*m+n*l*m)*w,e[3]=(d*l*s-a*p*s-d*i*c+n*p*c+a*i*g-n*l*g)*w,e[4]=M*w,e[5]=(f*_*s-v*p*s+v*i*g-t*_*g-f*i*m+t*p*m)*w,e[6]=(v*l*s-o*_*s-v*i*c+t*_*c+o*i*m-t*l*m)*w,e[7]=(o*p*s-f*l*s+f*i*c-t*p*c-o*i*g+t*l*g)*w,e[8]=y*w,e[9]=(v*d*s-f*S*s-v*n*g+t*S*g+f*n*m-t*d*m)*w,e[10]=(o*S*s-v*a*s+v*n*c-t*S*c-o*n*m+t*a*m)*w,e[11]=(f*a*s-o*d*s-f*n*c+t*d*c+o*n*g-t*a*g)*w,e[12]=A*w,e[13]=(f*S*i-v*d*i+v*n*p-t*S*p-f*n*_+t*d*_)*w,e[14]=(v*a*i-o*S*i-v*n*l+t*S*l+o*n*_-t*a*_)*w,e[15]=(o*d*i-f*a*i+f*n*l-t*d*l-o*n*p+t*a*p)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+n,f*l-i*o,0,c*l-i*a,f*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,d=a+a,p=s*c,g=s*f,v=s*d,S=o*f,_=o*d,m=a*d,T=l*c,M=l*f,y=l*d,A=n.x,D=n.y,w=n.z;return i[0]=(1-(S+m))*A,i[1]=(g+y)*A,i[2]=(v-M)*A,i[3]=0,i[4]=(g-y)*D,i[5]=(1-(p+m))*D,i[6]=(_+T)*D,i[7]=0,i[8]=(v+M)*w,i[9]=(_-T)*w,i[10]=(1-(p+S))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pr.set(i[0],i[1],i[2]).length();const o=Pr.set(i[4],i[5],i[6]).length(),a=Pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/s,f=1/o,d=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=li){const l=this.elements,c=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,v;if(a===li)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===to)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=li){const l=this.elements,c=1/(t-e),f=1/(n-i),d=1/(o-s),p=(t+e)*c,g=(n+i)*f;let v,S;if(a===li)v=(o+s)*d,S=-2*d;else if(a===to)v=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new k,Rn=new Rt,Xg=new k(0,0,0),Yg=new k(1,1,1),_i=new k,Pa=new k,ln=new k,Df=new Rt,If=new ar;class mo{constructor(e=0,t=0,n=0,i=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],f=i[9],d=i[2],p=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qg=0;const Uf=new k,Dr=new ar,ti=new Rt,Da=new k,Ls=new k,jg=new k,Kg=new ar,Of=new k(1,0,0),Nf=new k(0,1,0),Ff=new k(0,0,1),Zg={type:"added"},$g={type:"removed"};class nn extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new k,t=new mo,n=new ar,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Ff,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ls,Da,this.up):ti.lookAt(Da,Ls,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(ti),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),p=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nn.DEFAULT_UP=new k(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new k,ni=new k,bl=new k,ii=new k,Ir=new k,Ur=new k,Bf=new k,Al=new k,wl=new k,Rl=new k;let Ia=!1;class Pn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),ni.subVectors(n,t),bl.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ni),l=Cn.dot(bl),c=ni.dot(ni),f=ni.dot(bl),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const p=1/d,g=(c*l-a*f)*p,v=(o*f-a*l)*p;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,t,n,i,s,o,a,l){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ii),l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),ni.subVectors(e,t),Cn.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ir.subVectors(i,n),Ur.subVectors(s,n),Al.subVectors(e,n);const l=Ir.dot(Al),c=Ur.dot(Al);if(l<=0&&c<=0)return t.copy(n);wl.subVectors(e,i);const f=Ir.dot(wl),d=Ur.dot(wl);if(f>=0&&d<=f)return t.copy(i);const p=l*d-f*c;if(p<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Ir,o);Rl.subVectors(e,s);const g=Ir.dot(Rl),v=Ur.dot(Rl);if(v>=0&&g<=v)return t.copy(s);const S=g*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ur,a);const _=f*v-g*d;if(_<=0&&d-f>=0&&g-v>=0)return Bf.subVectors(s,i),a=(d-f)/(d-f+(g-v)),t.copy(i).addScaledVector(Bf,a);const m=1/(_+S+p);return o=S*m,a=p*m,t.copy(n).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jg=0;class ta extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=jr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Gh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Cl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=wn.workingColorSpace){return this.r=e,this.g=t,this.b=n,wn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=wn.workingColorSpace){if(e=Ec(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return wn.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return wn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Wt(Vt.r*255,0,255))*65536+Math.round(Wt(Vt.g*255,0,255))*256+Math.round(Wt(Vt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wn.workingColorSpace){wn.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=wn.workingColorSpace){return wn.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=gt){wn.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),Ln.h+=e,Ln.s+=t,Ln.l+=n,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ua);const n=Bs(Ln.h,Ua.h,t),i=Bs(Ln.s,Ua.s,t),s=Bs(Ln.l,Ua.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new lt;lt.NAMES=rd;class sd extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new k,Oa=new Ye;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wf,this.updateRange={offset:0,count:-1},this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ad extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class od extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xn extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qg=0;const gn=new Rt,Ll=new nn,Or=new k,cn=new ea,Ps=new ea,Ut=new k;class Pi extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?od:ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(cn.min,Ps.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,Ps.max),cn.expandByPoint(Ut)):(cn.expandByPoint(Ps.min),cn.expandByPoint(Ps.max))}cn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ut.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),Ut.add(Or)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let L=0;L<a;L++)c[L]=new k,f[L]=new k;const d=new k,p=new k,g=new k,v=new Ye,S=new Ye,_=new Ye,m=new k,T=new k;function M(L,ie,q){d.fromArray(i,L*3),p.fromArray(i,ie*3),g.fromArray(i,q*3),v.fromArray(o,L*2),S.fromArray(o,ie*2),_.fromArray(o,q*2),p.sub(d),g.sub(d),S.sub(v),_.sub(v);const B=1/(S.x*_.y-_.x*S.y);isFinite(B)&&(m.copy(p).multiplyScalar(_.y).addScaledVector(g,-S.y).multiplyScalar(B),T.copy(g).multiplyScalar(S.x).addScaledVector(p,-_.x).multiplyScalar(B),c[L].add(m),c[ie].add(m),c[q].add(m),f[L].add(T),f[ie].add(T),f[q].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,ie=y.length;L<ie;++L){const q=y[L],B=q.start,K=q.count;for(let X=B,le=B+K;X<le;X+=3)M(n[X+0],n[X+1],n[X+2])}const A=new k,D=new k,w=new k,F=new k;function E(L){w.fromArray(s,L*3),F.copy(w);const ie=c[L];A.copy(ie),A.sub(w.multiplyScalar(w.dot(ie))).normalize(),D.crossVectors(F,ie);const B=D.dot(f[L])<0?-1:1;l[L*4]=A.x,l[L*4+1]=A.y,l[L*4+2]=A.z,l[L*4+3]=B}for(let L=0,ie=y.length;L<ie;++L){const q=y[L],B=q.start,K=q.count;for(let X=B,le=B+K;X<le;X+=3)E(n[X+0]),E(n[X+1]),E(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,f=new k,d=new k;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),S=e.getX(p+1),_=e.getX(p+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,_),f.subVectors(o,s),d.subVectors(i,s),f.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,_),a.add(f),l.add(f),c.add(f),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),f.subVectors(o,s),d.subVectors(i,s),f.cross(d),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,p=new c.constructor(l.length*f);let g=0,v=0;for(let S=0,_=l.length;S<_;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*f;for(let m=0;m<f;m++)p[v++]=c[g++]}return new Wn(p,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const p=c[f],g=e(p,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,p=c.length;d<p;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let p=0,g=d.length;p<g;p++)f.push(d[p].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zf=new Rt,Vi=new nd,Na=new yc,Hf=new k,Nr=new k,Fr=new k,Br=new k,Pl=new k,Fa=new k,Ba=new Ye,za=new Ye,Ha=new Ye,kf=new k,Gf=new k,Vf=new k,ka=new k,Ga=new k;class Gn extends nn{constructor(e=new Pi,t=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Pl.fromBufferAttribute(d,e),o?Fa.addScaledVector(Pl,f):Fa.addScaledVector(Pl.sub(t),f))}t.add(Fa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(Na.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Na,Hf)===null||Vi.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(zf.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(zf),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=p.length;v<S;v++){const _=p[v],m=o[_.materialIndex],T=Math.max(_.start,g.start),M=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let y=T,A=M;y<A;y+=3){const D=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);i=Va(this,m,e,n,c,f,d,D,w,F),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let _=v,m=S;_<m;_+=3){const T=a.getX(_),M=a.getX(_+1),y=a.getX(_+2);i=Va(this,o,e,n,c,f,d,T,M,y),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=p.length;v<S;v++){const _=p[v],m=o[_.materialIndex],T=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=T,A=M;y<A;y+=3){const D=y,w=y+1,F=y+2;i=Va(this,m,e,n,c,f,d,D,w,F),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let _=v,m=S;_<m;_+=3){const T=_,M=_+1,y=_+2;i=Va(this,o,e,n,c,f,d,T,M,y),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function ev(r,e,t,n,i,s,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ri,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:r}}function Va(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Nr),r.getVertexPosition(l,Fr),r.getVertexPosition(c,Br);const f=ev(r,e,t,n,Nr,Fr,Br,ka);if(f){i&&(Ba.fromBufferAttribute(i,a),za.fromBufferAttribute(i,l),Ha.fromBufferAttribute(i,c),f.uv=Pn.getInterpolation(ka,Nr,Fr,Br,Ba,za,Ha,new Ye)),s&&(Ba.fromBufferAttribute(s,a),za.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),f.uv1=Pn.getInterpolation(ka,Nr,Fr,Br,Ba,za,Ha,new Ye),f.uv2=f.uv1),o&&(kf.fromBufferAttribute(o,a),Gf.fromBufferAttribute(o,l),Vf.fromBufferAttribute(o,c),f.normal=Pn.getInterpolation(ka,Nr,Fr,Br,kf,Gf,Vf,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};Pn.getNormal(Nr,Fr,Br,d.normal),f.face=d}return f}class na extends Pi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let p=0,g=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(f,3)),this.setAttribute("uv",new Xn(d,2));function v(S,_,m,T,M,y,A,D,w,F,E){const L=y/w,ie=A/F,q=y/2,B=A/2,K=D/2,X=w+1,le=F+1;let Q=0,re=0;const oe=new k;for(let ce=0;ce<le;ce++){const $=ce*ie-B;for(let ee=0;ee<X;ee++){const ve=ee*L-q;oe[S]=ve*T,oe[_]=$*M,oe[m]=K,c.push(oe.x,oe.y,oe.z),oe[S]=0,oe[_]=0,oe[m]=D>0?1:-1,f.push(oe.x,oe.y,oe.z),d.push(ee/w),d.push(1-ce/F),Q+=1}}for(let ce=0;ce<F;ce++)for(let $=0;$<w;$++){const ee=p+$+X*ce,ve=p+$+X*(ce+1),me=p+($+1)+X*(ce+1),de=p+($+1)+X*ce;l.push(ee,ve,de),l.push(ve,me,de),re+=6}a.addGroup(g,re,E),g+=re,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(r){const e={};for(let t=0;t<r.length;t++){const n=ns(r[t]);for(const i in n)e[i]=n[i]}return e}function tv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ld(r){return r.getRenderTarget()===null?r.outputColorSpace:qn}const nv={clone:ns,merge:$t};var iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends cd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Hr=1;class sv extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new fn(zr,Hr,e,t);i.layers=this.layers,this.add(i);const s=new fn(zr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new fn(zr,Hr,e,t);o.layers=this.layers,this.add(o);const a=new fn(zr,Hr,e,t);a.layers=this.layers,this.add(a);const l=new fn(zr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new fn(zr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,f=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ud extends tn{constructor(e,t,n,i,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,n,i,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class av extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?gt:er),this.texture=new ud(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new na(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:yi});s.uniforms.tEquirect.value=t;const o=new Gn(i,s),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=xn),new sv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Dl=new k,ov=new k,lv=new $e;class gi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dl.subVectors(n,t).cross(ov.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lv.getNormalMatrix(e),i=this.coplanarPoint(Dl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new yc,Wa=new k;class Tc{constructor(e=new gi,t=new gi,n=new gi,i=new gi,s=new gi,o=new gi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],f=i[5],d=i[6],p=i[7],g=i[8],v=i[9],S=i[10],_=i[11],m=i[12],T=i[13],M=i[14],y=i[15];if(n[0].setComponents(l-s,p-c,_-g,y-m).normalize(),n[1].setComponents(l+s,p+c,_+g,y+m).normalize(),n[2].setComponents(l+o,p+f,_+v,y+T).normalize(),n[3].setComponents(l-o,p-f,_-v,y-T).normalize(),n[4].setComponents(l-a,p-d,_-S,y-M).normalize(),t===li)n[5].setComponents(l+a,p+d,_+S,y+M).normalize();else if(t===to)n[5].setComponents(a,d,S,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wa.x=i.normal.x>0?e.max.x:e.min.x,Wa.y=i.normal.y>0?e.max.y:e.min.y,Wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cv(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,f){const d=c.array,p=c.usage,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,d,p),c.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,d){const p=f.array,g=f.updateRange;r.bindBuffer(d,c),g.count===-1?r.bufferSubData(d,0,p):(t?r.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):r.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(r.deleteBuffer(f.buffer),n.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,f)):d.version<c.version&&(s(d.buffer,c,f),d.version=c.version)}return{get:o,remove:a,update:l}}class bc extends Pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,f=l+1,d=e/a,p=t/l,g=[],v=[],S=[],_=[];for(let m=0;m<f;m++){const T=m*p-o;for(let M=0;M<c;M++){const y=M*d-s;v.push(y,-T,0),S.push(0,0,1),_.push(M/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){const M=T+c*m,y=T+c*(m+1),A=T+1+c*(m+1),D=T+1+c*m;g.push(M,y,D),g.push(y,A,D)}this.setIndex(g),this.setAttribute("position",new Xn(v,3)),this.setAttribute("normal",new Xn(S,3)),this.setAttribute("uv",new Xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ev=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",zv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,o0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,f0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_S=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:uv,alphahash_pars_fragment:fv,alphamap_fragment:hv,alphamap_pars_fragment:dv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:_v,aomap_pars_fragment:gv,begin_vertex:vv,beginnormal_vertex:Sv,bsdfs:xv,iridescence_fragment:Mv,bumpmap_pars_fragment:Ev,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:bv,clipping_planes_vertex:Av,color_fragment:wv,color_pars_fragment:Rv,color_pars_vertex:Cv,color_vertex:Lv,common:Pv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Uv,displacementmap_vertex:Ov,emissivemap_fragment:Nv,emissivemap_pars_fragment:Fv,colorspace_fragment:Bv,colorspace_pars_fragment:zv,envmap_fragment:Hv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Gv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:t0,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:Yv,fog_fragment:qv,fog_pars_fragment:jv,gradientmap_pars_fragment:Kv,lightmap_fragment:Zv,lightmap_pars_fragment:$v,lights_lambert_fragment:Jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:_0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:x0,morphcolor_vertex:M0,morphnormal_vertex:E0,morphtarget_pars_vertex:y0,morphtarget_vertex:T0,normal_fragment_begin:b0,normal_fragment_maps:A0,normal_pars_fragment:w0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:U0,opaque_fragment:O0,packing:N0,premultiplied_alpha_fragment:F0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:H0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:Y0,skinbase_vertex:q0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:eS,transmission_fragment:tS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:rS,uv_vertex:sS,worldpos_vertex:aS,background_vert:oS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:uS,cube_vert:fS,cube_frag:hS,depth_vert:dS,depth_frag:pS,distanceRGBA_vert:mS,distanceRGBA_frag:_S,equirect_vert:gS,equirect_frag:vS,linedashed_vert:SS,linedashed_frag:xS,meshbasic_vert:MS,meshbasic_frag:ES,meshlambert_vert:yS,meshlambert_frag:TS,meshmatcap_vert:bS,meshmatcap_frag:AS,meshnormal_vert:wS,meshnormal_frag:RS,meshphong_vert:CS,meshphong_frag:LS,meshphysical_vert:PS,meshphysical_frag:DS,meshtoon_vert:IS,meshtoon_frag:US,points_vert:OS,points_frag:NS,shadow_vert:FS,shadow_frag:BS,sprite_vert:zS,sprite_frag:HS},Ee={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Hn={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Hn.physical={uniforms:$t([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Xa={r:0,b:0,g:0};function kS(r,e,t,n,i,s,o){const a=new lt(0);let l=s===!0?0:1,c,f,d=null,p=0,g=null;function v(_,m){let T=!1,M=m.isScene===!0?m.background:null;M&&M.isTexture&&(M=(m.backgroundBlurriness>0?t:e).get(M)),M===null?S(a,l):M&&M.isColor&&(S(M,1),T=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ho)?(f===void 0&&(f=new Gn(new na(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ns(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=M.colorSpace!==gt,(d!==M||p!==M.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,d=M,p=M.version,g=r.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gn(new bc(2,2),new or({name:"BackgroundMaterial",uniforms:ns(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=M.colorSpace!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||g!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,g=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function S(_,m){_.getRGB(Xa,ld(r)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(_,m=1){a.set(_),l=m,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,S(a,l)},render:v}}function GS(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=_(null);let c=l,f=!1;function d(K,X,le,Q,re){let oe=!1;if(o){const ce=S(Q,le,X);c!==ce&&(c=ce,g(c.object)),oe=m(K,Q,le,re),oe&&T(K,Q,le,re)}else{const ce=X.wireframe===!0;(c.geometry!==Q.id||c.program!==le.id||c.wireframe!==ce)&&(c.geometry=Q.id,c.program=le.id,c.wireframe=ce,oe=!0)}re!==null&&t.update(re,r.ELEMENT_ARRAY_BUFFER),(oe||f)&&(f=!1,F(K,X,le,Q),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function p(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function g(K){return n.isWebGL2?r.bindVertexArray(K):s.bindVertexArrayOES(K)}function v(K){return n.isWebGL2?r.deleteVertexArray(K):s.deleteVertexArrayOES(K)}function S(K,X,le){const Q=le.wireframe===!0;let re=a[K.id];re===void 0&&(re={},a[K.id]=re);let oe=re[X.id];oe===void 0&&(oe={},re[X.id]=oe);let ce=oe[Q];return ce===void 0&&(ce=_(p()),oe[Q]=ce),ce}function _(K){const X=[],le=[],Q=[];for(let re=0;re<i;re++)X[re]=0,le[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:le,attributeDivisors:Q,object:K,attributes:{},index:null}}function m(K,X,le,Q){const re=c.attributes,oe=X.attributes;let ce=0;const $=le.getAttributes();for(const ee in $)if($[ee].location>=0){const me=re[ee];let de=oe[ee];if(de===void 0&&(ee==="instanceMatrix"&&K.instanceMatrix&&(de=K.instanceMatrix),ee==="instanceColor"&&K.instanceColor&&(de=K.instanceColor)),me===void 0||me.attribute!==de||de&&me.data!==de.data)return!0;ce++}return c.attributesNum!==ce||c.index!==Q}function T(K,X,le,Q){const re={},oe=X.attributes;let ce=0;const $=le.getAttributes();for(const ee in $)if($[ee].location>=0){let me=oe[ee];me===void 0&&(ee==="instanceMatrix"&&K.instanceMatrix&&(me=K.instanceMatrix),ee==="instanceColor"&&K.instanceColor&&(me=K.instanceColor));const de={};de.attribute=me,me&&me.data&&(de.data=me.data),re[ee]=de,ce++}c.attributes=re,c.attributesNum=ce,c.index=Q}function M(){const K=c.newAttributes;for(let X=0,le=K.length;X<le;X++)K[X]=0}function y(K){A(K,0)}function A(K,X){const le=c.newAttributes,Q=c.enabledAttributes,re=c.attributeDivisors;le[K]=1,Q[K]===0&&(r.enableVertexAttribArray(K),Q[K]=1),re[K]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](K,X),re[K]=X)}function D(){const K=c.newAttributes,X=c.enabledAttributes;for(let le=0,Q=X.length;le<Q;le++)X[le]!==K[le]&&(r.disableVertexAttribArray(le),X[le]=0)}function w(K,X,le,Q,re,oe,ce){ce===!0?r.vertexAttribIPointer(K,X,le,re,oe):r.vertexAttribPointer(K,X,le,Q,re,oe)}function F(K,X,le,Q){if(n.isWebGL2===!1&&(K.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const re=Q.attributes,oe=le.getAttributes(),ce=X.defaultAttributeValues;for(const $ in oe){const ee=oe[$];if(ee.location>=0){let ve=re[$];if(ve===void 0&&($==="instanceMatrix"&&K.instanceMatrix&&(ve=K.instanceMatrix),$==="instanceColor"&&K.instanceColor&&(ve=K.instanceColor)),ve!==void 0){const me=ve.normalized,de=ve.itemSize,Te=t.get(ve);if(Te===void 0)continue;const Le=Te.buffer,Ae=Te.type,He=Te.bytesPerElement,mt=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||ve.gpuType===Wh);if(ve.isInterleavedBufferAttribute){const we=ve.data,W=we.stride,Ze=ve.offset;if(we.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)A(ee.location+Re,we.meshPerAttribute);K.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Re=0;Re<ee.locationSize;Re++)y(ee.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Re=0;Re<ee.locationSize;Re++)w(ee.location+Re,de/ee.locationSize,Ae,me,W*He,(Ze+de/ee.locationSize*Re)*He,mt)}else{if(ve.isInstancedBufferAttribute){for(let we=0;we<ee.locationSize;we++)A(ee.location+we,ve.meshPerAttribute);K.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let we=0;we<ee.locationSize;we++)y(ee.location+we);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let we=0;we<ee.locationSize;we++)w(ee.location+we,de/ee.locationSize,Ae,me,de*He,de/ee.locationSize*we*He,mt)}}else if(ce!==void 0){const me=ce[$];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(ee.location,me);break;case 3:r.vertexAttrib3fv(ee.location,me);break;case 4:r.vertexAttrib4fv(ee.location,me);break;default:r.vertexAttrib1fv(ee.location,me)}}}}D()}function E(){q();for(const K in a){const X=a[K];for(const le in X){const Q=X[le];for(const re in Q)v(Q[re].object),delete Q[re];delete X[le]}delete a[K]}}function L(K){if(a[K.id]===void 0)return;const X=a[K.id];for(const le in X){const Q=X[le];for(const re in Q)v(Q[re].object),delete Q[re];delete X[le]}delete a[K.id]}function ie(K){for(const X in a){const le=a[X];if(le[K.id]===void 0)continue;const Q=le[K.id];for(const re in Q)v(Q[re].object),delete Q[re];delete le[K.id]}}function q(){B(),f=!0,c!==l&&(c=l,g(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:L,releaseStatesOfProgram:ie,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function VS(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,f){r.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,f,d),t.update(f,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function WS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,y=o||e.has("OES_texture_float"),A=M&&y,D=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:D}}function XS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new gi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||n!==0||i;return i=p,n=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=f(d,p,0)},this.setState=function(d,p,g){const v=d.clippingPlanes,S=d.clipIntersection,_=d.clipShadows,m=r.get(d);if(!i||v===null||v.length===0||s&&!_)s?f(null):c();else{const T=s?0:n,M=T*4;let y=m.clippingState||null;l.value=y,y=f(v,p,M,g);for(let A=0;A!==M;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,p,g,v){const S=d!==null?d.length:0;let _=null;if(S!==0){if(_=l.value,v!==!0||_===null){const m=g+S*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,y=g;M!==S;++M,y+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}function YS(r){let e=new WeakMap;function t(o,a){return a===$l?o.mapping=Qr:a===Jl&&(o.mapping=es),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===$l||a===Jl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new av(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qS extends cd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Wf=[.125,.215,.35,.446,.526,.582],Ki=20,Il=new qS,Xf=new lt;let Ul=null;const qi=(1+Math.sqrt(5))/2,kr=1/qi,Yf=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,qi,kr),new k(0,qi,-kr),new k(kr,0,qi),new k(-kr,0,qi),new k(qi,kr,0),new k(-qi,kr,0)];class qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ul=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ws,format:In,colorSpace:qn,depthBuffer:!1},i=jf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(s)),this._blurMaterial=KS(s,e,t)}return i}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,n,i){const a=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Xf),f.toneMapping=Ti,f.autoClear=!1;const g=new sd({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Gn(new na,g);let S=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,S=!0):(g.color.copy(Xf),S=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):T===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;Ya(i,T*M,m>2?M:0,M,M),f.setRenderTarget(i),S&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qr||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yf[(i-1)%Yf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Gn(this._lodPlanes[i],c),p=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),S=s/v,_=isFinite(s)?1+Math.floor(f*S):Ki;_>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ki}`);const m=[];let T=0;for(let w=0;w<Ki;++w){const F=w/S,E=Math.exp(-F*F/2);m.push(E),w===0?T+=E:w<_&&(T+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/T;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=v,p.mipInt.value=M-n;const y=this._sizeLods[i],A=3*y*(i>M-Xr?i-M+Xr:0),D=4*(this._cubeSize-y);Ya(t,A,D,3*y,2*y),l.setRenderTarget(t),l.render(d,Il)}}function jS(r){const e=[],t=[],n=[];let i=r;const s=r-Xr+1+Wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Xr?l=Wf[o-r+Xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,p=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,v=6,S=3,_=2,m=1,T=new Float32Array(S*v*g),M=new Float32Array(_*v*g),y=new Float32Array(m*v*g);for(let D=0;D<g;D++){const w=D%3*2/3-1,F=D>2?0:-1,E=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];T.set(E,S*v*D),M.set(p,_*v*D);const L=[D,D,D,D,D,D];y.set(L,m*v*D)}const A=new Pi;A.setAttribute("position",new Wn(T,S)),A.setAttribute("uv",new Wn(M,_)),A.setAttribute("faceIndex",new Wn(y,m)),e.push(A),i>Xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jf(r,e,t){const n=new sr(r,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function KS(r,e,t){const n=new Float32Array(Ki),i=new k(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Kf(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zf(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$l||l===Jl,f=l===Qr||l===es;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qf(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&i(d)){t===null&&(t=new qf(r));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $S(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function JS(r,e,t,n){const i={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const S=p.morphAttributes[v];for(let _=0,m=S.length;_<m;_++)e.remove(S[_])}p.removeEventListener("dispose",o),delete i[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const v in p)e.update(p[v],r.ARRAY_BUFFER);const g=d.morphAttributes;for(const v in g){const S=g[v];for(let _=0,m=S.length;_<m;_++)e.update(S[_],r.ARRAY_BUFFER)}}function c(d){const p=[],g=d.index,v=d.attributes.position;let S=0;if(g!==null){const T=g.array;S=g.version;for(let M=0,y=T.length;M<y;M+=3){const A=T[M+0],D=T[M+1],w=T[M+2];p.push(A,D,D,w,w,A)}}else if(v!==void 0){const T=v.array;S=v.version;for(let M=0,y=T.length/3-1;M<y;M+=3){const A=M+0,D=M+1,w=M+2;p.push(A,D,D,w,w,A)}}else return;const _=new(Jh(p)?od:ad)(p,1);_.version=S;const m=s.get(d);m&&e.remove(m),s.set(d,_)}function f(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function QS(r,e,t,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function f(p,g){r.drawElements(s,g,a,p*l),t.update(g,s,1)}function d(p,g,v){if(v===0)return;let S,_;if(i)S=r,_="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[_](s,g,a,p*l,v),t.update(g,s,v)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d}function ex(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tx(r,e){return r[0]-e[0]}function nx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ix(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let _=s.get(f);if(_===void 0||_.count!==S){let X=function(){B.dispose(),s.delete(f),f.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,D=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let E=0;M===!0&&(E=1),y===!0&&(E=2),A===!0&&(E=3);let L=f.attributes.position.count*E,ie=1;L>e.maxTextureSize&&(ie=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const q=new Float32Array(L*ie*4*S),B=new td(q,L,ie,S);B.type=Si,B.needsUpdate=!0;const K=E*4;for(let le=0;le<S;le++){const Q=D[le],re=w[le],oe=F[le],ce=L*ie*4*le;for(let $=0;$<Q.count;$++){const ee=$*K;M===!0&&(o.fromBufferAttribute(Q,$),q[ce+ee+0]=o.x,q[ce+ee+1]=o.y,q[ce+ee+2]=o.z,q[ce+ee+3]=0),y===!0&&(o.fromBufferAttribute(re,$),q[ce+ee+4]=o.x,q[ce+ee+5]=o.y,q[ce+ee+6]=o.z,q[ce+ee+7]=0),A===!0&&(o.fromBufferAttribute(oe,$),q[ce+ee+8]=o.x,q[ce+ee+9]=o.y,q[ce+ee+10]=o.z,q[ce+ee+11]=oe.itemSize===4?o.w:1)}}_={count:S,texture:B,size:new Ye(L,ie)},s.set(f,_),f.addEventListener("dispose",X)}let m=0;for(let M=0;M<p.length;M++)m+=p[M];const T=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const v=p===void 0?0:p.length;let S=n[f.id];if(S===void 0||S.length!==v){S=[];for(let y=0;y<v;y++)S[y]=[y,0];n[f.id]=S}for(let y=0;y<v;y++){const A=S[y];A[0]=y,A[1]=p[y]}S.sort(nx);for(let y=0;y<8;y++)y<v&&S[y][1]?(a[y][0]=S[y][0],a[y][1]=S[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(tx);const _=f.morphAttributes.position,m=f.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const A=a[y],D=A[0],w=A[1];D!==Number.MAX_SAFE_INTEGER&&w?(_&&f.getAttribute("morphTarget"+y)!==_[D]&&f.setAttribute("morphTarget"+y,_[D]),m&&f.getAttribute("morphNormal"+y)!==m[D]&&f.setAttribute("morphNormal"+y,m[D]),i[y]=w,T+=w):(_&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),m&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),i[y]=0)}const M=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function rx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,d=e.get(l,f);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hd=new tn,dd=new td,pd=new Vg,md=new ud,$f=[],Jf=[],Qf=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=$f[i];if(s===void 0&&(s=new Float32Array(i),$f[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=Jf[e];t===void 0&&(t=new Int32Array(e),Jf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function cx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;th.set(n),r.uniformMatrix2fv(this.addr,!1,th),It(t,n)}}function ux(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;eh.set(n),r.uniformMatrix3fv(this.addr,!1,eh),It(t,n)}}function fx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;Qf.set(n),r.uniformMatrix4fv(this.addr,!1,Qf),It(t,n)}}function hx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function _x(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||hd,i)}function Mx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pd,i)}function Ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||md,i)}function yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function Tx(r){switch(r){case 5126:return sx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return hx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return _x;case 36294:return gx;case 36295:return vx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return yx}}function bx(r,e){r.uniform1fv(this.addr,e)}function Ax(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function wx(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function Rx(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function Cx(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Lx(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Px(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dx(r,e){r.uniform1iv(this.addr,e)}function Ix(r,e){r.uniform2iv(this.addr,e)}function Ux(r,e){r.uniform3iv(this.addr,e)}function Ox(r,e){r.uniform4iv(this.addr,e)}function Nx(r,e){r.uniform1uiv(this.addr,e)}function Fx(r,e){r.uniform2uiv(this.addr,e)}function Bx(r,e){r.uniform3uiv(this.addr,e)}function zx(r,e){r.uniform4uiv(this.addr,e)}function Hx(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hd,s[o])}function kx(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pd,s[o])}function Gx(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||md,s[o])}function Vx(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dd,s[o])}function Wx(r){switch(r){case 5126:return bx;case 35664:return Ax;case 35665:return wx;case 35666:return Rx;case 35674:return Cx;case 35675:return Lx;case 35676:return Px;case 5124:case 35670:return Dx;case 35667:case 35671:return Ix;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 5125:return Nx;case 36294:return Fx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Tx(t.type)}}class Yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Wx(t.type)}}class qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function nh(r,e){r.seq.push(e),r.map[e.id]=e}function jx(r,e,t){const n=r.name,i=n.length;for(Ol.lastIndex=0;;){const s=Ol.exec(n),o=Ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){nh(t,c===void 0?new Xx(a,r,e):new Yx(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new qx(a),nh(t,d)),t=d}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);jx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ih(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Kx=0;function Zx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $x(r){switch(r){case qn:return["Linear","( value )"];case gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function rh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Zx(r.getShaderSource(e),o)}else return i}function Jx(r,e){const t=$x(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qx(r,e){let t;switch(e){case X_:t="Linear";break;case Y_:t="Reinhard";break;case q_:t="OptimizedCineon";break;case j_:t="ACESFilmic";break;case K_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function tM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Us(r){return r!==""}function sh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(r){return r.replace(iM,sM)}const rM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sM(r,e){let t=Ke[e];if(t===void 0){const n=rM.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(r){return r.replace(aM,oM)}function oM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function fM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case V_:e="ENVMAP_BLENDING_MIX";break;case W_:e="ENVMAP_BLENDING_ADD";break}return e}function hM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lM(t),c=cM(t),f=uM(t),d=fM(t),p=hM(t),g=t.isWebGL2?"":eM(t),v=tM(s),S=i.createProgram();let _,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Us).join(`
`),_.length>0&&(_+=`
`),m=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(_=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[g,lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=ic(o),o=sh(o,t),o=ah(o,t),a=ic(a),a=sh(a,t),a=ah(a,t),o=oh(o),a=oh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=T+_+o,y=T+m+a,A=ih(i,i.VERTEX_SHADER,M),D=ih(i,i.FRAGMENT_SHADER,y);if(i.attachShader(S,A),i.attachShader(S,D),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(S).trim(),L=i.getShaderInfoLog(A).trim(),ie=i.getShaderInfoLog(D).trim();let q=!0,B=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,S,A,D);else{const K=rh(i,A,"vertex"),X=rh(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+K+`
`+X)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(L===""||ie==="")&&(B=!1);B&&(this.diagnostics={runnable:q,programLog:E,vertexShader:{log:L,prefix:_},fragmentShader:{log:ie,prefix:m}})}i.deleteShader(A),i.deleteShader(D);let w;this.getUniforms=function(){return w===void 0&&(w=new Za(i,S)),w};let F;return this.getAttributes=function(){return F===void 0&&(F=nM(i,S)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kx++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=D,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _M(e),t.set(e,n)),n}}class _M{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function gM(r,e,t,n,i,s,o){const a=new id,l=new mM,c=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return E===0?"uv":`uv${E}`}function _(E,L,ie,q,B){const K=q.fog,X=B.geometry,le=E.isMeshStandardMaterial?q.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||le),re=Q&&Q.mapping===ho?Q.image.height:null,oe=v[E.type];E.precision!==null&&(g=i.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$=ce!==void 0?ce.length:0;let ee=0;X.morphAttributes.position!==void 0&&(ee=1),X.morphAttributes.normal!==void 0&&(ee=2),X.morphAttributes.color!==void 0&&(ee=3);let ve,me,de,Te;if(oe){const nt=Hn[oe];ve=nt.vertexShader,me=nt.fragmentShader}else ve=E.vertexShader,me=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const Le=r.getRenderTarget(),Ae=B.isInstancedMesh===!0,He=!!E.map,mt=!!E.matcap,we=!!Q,W=!!E.aoMap,Ze=!!E.lightMap,Re=!!E.bumpMap,Ie=!!E.normalMap,Ce=!!E.displacementMap,it=!!E.emissiveMap,Ve=!!E.metalnessMap,Be=!!E.roughnessMap,Qe=E.anisotropy>0,rt=E.clearcoat>0,_t=E.iridescence>0,P=E.sheen>0,b=E.transmission>0,J=Qe&&!!E.anisotropyMap,pe=rt&&!!E.clearcoatMap,fe=rt&&!!E.clearcoatNormalMap,V=rt&&!!E.clearcoatRoughnessMap,G=_t&&!!E.iridescenceMap,j=_t&&!!E.iridescenceThicknessMap,U=P&&!!E.sheenColorMap,O=P&&!!E.sheenRoughnessMap,z=!!E.specularMap,ye=!!E.specularColorMap,xe=!!E.specularIntensityMap,Me=b&&!!E.transmissionMap,ze=b&&!!E.thicknessMap,Je=!!E.gradientMap,N=!!E.alphaMap,Se=E.alphaTest>0,te=!!E.alphaHash,he=!!E.extensions,_e=!!X.attributes.uv1,qe=!!X.attributes.uv2,tt=!!X.attributes.uv3;let st=Ti;return E.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(st=r.toneMapping),{isWebGL2:f,shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:ve,fragmentShader:me,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Le===null?r.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:qn,map:He,matcap:mt,envMap:we,envMapMode:we&&Q.mapping,envMapCubeUVHeight:re,aoMap:W,lightMap:Ze,bumpMap:Re,normalMap:Ie,displacementMap:p&&Ce,emissiveMap:it,normalMapObjectSpace:Ie&&E.normalMapType===lg,normalMapTangentSpace:Ie&&E.normalMapType===$h,metalnessMap:Ve,roughnessMap:Be,anisotropy:Qe,anisotropyMap:J,clearcoat:rt,clearcoatMap:pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:V,iridescence:_t,iridescenceMap:G,iridescenceThicknessMap:j,sheen:P,sheenColorMap:U,sheenRoughnessMap:O,specularMap:z,specularColorMap:ye,specularIntensityMap:xe,transmission:b,transmissionMap:Me,thicknessMap:ze,gradientMap:Je,opaque:E.transparent===!1&&E.blending===jr,alphaMap:N,alphaTest:Se,alphaHash:te,combine:E.combine,mapUv:He&&S(E.map.channel),aoMapUv:W&&S(E.aoMap.channel),lightMapUv:Ze&&S(E.lightMap.channel),bumpMapUv:Re&&S(E.bumpMap.channel),normalMapUv:Ie&&S(E.normalMap.channel),displacementMapUv:Ce&&S(E.displacementMap.channel),emissiveMapUv:it&&S(E.emissiveMap.channel),metalnessMapUv:Ve&&S(E.metalnessMap.channel),roughnessMapUv:Be&&S(E.roughnessMap.channel),anisotropyMapUv:J&&S(E.anisotropyMap.channel),clearcoatMapUv:pe&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:j&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:U&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:O&&S(E.sheenRoughnessMap.channel),specularMapUv:z&&S(E.specularMap.channel),specularColorMapUv:ye&&S(E.specularColorMap.channel),specularIntensityMapUv:xe&&S(E.specularIntensityMap.channel),transmissionMapUv:Me&&S(E.transmissionMap.channel),thicknessMapUv:ze&&S(E.thicknessMap.channel),alphaMapUv:N&&S(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ie||Qe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:qe,vertexUv3s:tt,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(He||N),fog:!!K,useFog:E.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&ie.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,useLegacyLights:r._useLegacyLights,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&E.map.colorSpace===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oi,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:he&&E.extensions.derivatives===!0,extensionFragDepth:he&&E.extensions.fragDepth===!0,extensionDrawBuffers:he&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ie in E.defines)L.push(ie),L.push(E.defines[ie]);return E.isRawShaderMaterial===!1&&(T(L,E),M(L,E),L.push(r.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function T(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function M(E,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const L=v[E.type];let ie;if(L){const q=Hn[L];ie=nv.clone(q.uniforms)}else ie=E.uniforms;return ie}function A(E,L){let ie;for(let q=0,B=c.length;q<B;q++){const K=c[q];if(K.cacheKey===L){ie=K,++ie.usedTimes;break}}return ie===void 0&&(ie=new dM(r,L,E,s),c.push(ie)),ie}function D(E){if(--E.usedTimes===0){const L=c.indexOf(E);c[L]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function F(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:A,releaseProgram:D,releaseShaderCache:w,programs:c,dispose:F}}function vM(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function SM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ch(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,p,g,v,S,_){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:g,groupOrder:v,renderOrder:d.renderOrder,z:S,group:_},r[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=g,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=S,m.group=_),e++,m}function a(d,p,g,v,S,_){const m=o(d,p,g,v,S,_);g.transmission>0?n.push(m):g.transparent===!0?i.push(m):t.push(m)}function l(d,p,g,v,S,_){const m=o(d,p,g,v,S,_);g.transmission>0?n.unshift(m):g.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,p){t.length>1&&t.sort(d||SM),n.length>1&&n.sort(p||ch),i.length>1&&i.sort(p||ch)}function f(){for(let d=e,p=r.length;d<p;d++){const g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function xM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new uh,r.set(n,[o])):i>=s.length?(o=new uh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function MM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new lt};break;case"SpotLight":t={position:new k,direction:new k,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function EM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yM=0;function TM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bM(r,e){const t=new MM,n=EM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new k);const s=new k,o=new Rt,a=new Rt;function l(f,d){let p=0,g=0,v=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let S=0,_=0,m=0,T=0,M=0,y=0,A=0,D=0,w=0,F=0;f.sort(TM);const E=d===!0?Math.PI:1;for(let ie=0,q=f.length;ie<q;ie++){const B=f[ie],K=B.color,X=B.intensity,le=B.distance,Q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=K.r*X*E,g+=K.g*X*E,v+=K.b*X*E;else if(B.isLightProbe)for(let re=0;re<9;re++)i.probe[re].addScaledVector(B.sh.coefficients[re],X);else if(B.isDirectionalLight){const re=t.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity*E),B.castShadow){const oe=B.shadow,ce=n.get(B);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,i.directionalShadow[S]=ce,i.directionalShadowMap[S]=Q,i.directionalShadowMatrix[S]=B.shadow.matrix,y++}i.directional[S]=re,S++}else if(B.isSpotLight){const re=t.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy(K).multiplyScalar(X*E),re.distance=le,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,i.spot[m]=re;const oe=B.shadow;if(B.map&&(i.spotLightMap[w]=B.map,w++,oe.updateMatrices(B),B.castShadow&&F++),i.spotLightMatrix[m]=oe.matrix,B.castShadow){const ce=n.get(B);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,i.spotShadow[m]=ce,i.spotShadowMap[m]=Q,D++}m++}else if(B.isRectAreaLight){const re=t.get(B);re.color.copy(K).multiplyScalar(X),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),i.rectArea[T]=re,T++}else if(B.isPointLight){const re=t.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity*E),re.distance=B.distance,re.decay=B.decay,B.castShadow){const oe=B.shadow,ce=n.get(B);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,ce.shadowCameraNear=oe.camera.near,ce.shadowCameraFar=oe.camera.far,i.pointShadow[_]=ce,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=B.shadow.matrix,A++}i.point[_]=re,_++}else if(B.isHemisphereLight){const re=t.get(B);re.skyColor.copy(B.color).multiplyScalar(X*E),re.groundColor.copy(B.groundColor).multiplyScalar(X*E),i.hemi[M]=re,M++}}T>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=v;const L=i.hash;(L.directionalLength!==S||L.pointLength!==_||L.spotLength!==m||L.rectAreaLength!==T||L.hemiLength!==M||L.numDirectionalShadows!==y||L.numPointShadows!==A||L.numSpotShadows!==D||L.numSpotMaps!==w)&&(i.directional.length=S,i.spot.length=m,i.rectArea.length=T,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=D+w-F,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=F,L.directionalLength=S,L.pointLength=_,L.spotLength=m,L.rectAreaLength=T,L.hemiLength=M,L.numDirectionalShadows=y,L.numPointShadows=A,L.numSpotShadows=D,L.numSpotMaps=w,i.version=yM++)}function c(f,d){let p=0,g=0,v=0,S=0,_=0;const m=d.matrixWorldInverse;for(let T=0,M=f.length;T<M;T++){const y=f[T];if(y.isDirectionalLight){const A=i.directional[p];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(y.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),v++}else if(y.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){const A=i.point[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),g++}else if(y.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:l,setupView:c,state:i}}function fh(r,e){const t=new bM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function AM(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fh(r,e),t.set(s,[l])):o>=a.length?(l=new fh(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class wM extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RM extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PM(r,e,t){let n=new Tc;const i=new Ye,s=new Ye,o=new vt,a=new wM({depthPacking:og}),l=new RM,c={},f=t.maxTextureSize,d={[Ri]:en,[en]:Ri,[oi]:oi},p=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:CM,fragmentShader:LM}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new Pi;v.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gn(v,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let m=this.type;this.render=function(A,D,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const F=r.getRenderTarget(),E=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(yi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const q=m!==ri&&this.type===ri,B=m===ri&&this.type!==ri;for(let K=0,X=A.length;K<X;K++){const le=A[K],Q=le.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const re=Q.getFrameExtents();if(i.multiply(re),s.copy(Q.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/re.x),i.x=s.x*re.x,Q.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/re.y),i.y=s.y*re.y,Q.mapSize.y=s.y)),Q.map===null||q===!0||B===!0){const ce=this.type!==ri?{minFilter:Jt,magFilter:Jt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new sr(i.x,i.y,ce),Q.map.texture.name=le.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const oe=Q.getViewportCount();for(let ce=0;ce<oe;ce++){const $=Q.getViewport(ce);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),ie.viewport(o),Q.updateMatrices(le,ce),n=Q.getFrustum(),y(D,w,Q.camera,le,this.type)}Q.isPointLightShadow!==!0&&this.type===ri&&T(Q,w),Q.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(F,E,L)};function T(A,D){const w=e.update(S);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sr(i.x,i.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(D,null,w,p,S,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(D,null,w,g,S,null)}function M(A,D,w,F){let E=null;const L=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)E=L;else if(E=w.isPointLight===!0?l:a,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=E.uuid,q=D.uuid;let B=c[ie];B===void 0&&(B={},c[ie]=B);let K=B[q];K===void 0&&(K=E.clone(),B[q]=K),E=K}if(E.visible=D.visible,E.wireframe=D.wireframe,F===ri?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ie=r.properties.get(E);ie.light=w}return E}function y(A,D,w,F,E){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const q=e.update(A),B=A.material;if(Array.isArray(B)){const K=q.groups;for(let X=0,le=K.length;X<le;X++){const Q=K[X],re=B[Q.materialIndex];if(re&&re.visible){const oe=M(A,re,F,E);r.renderBufferDirect(w,null,q,oe,A,Q)}}}else if(B.visible){const K=M(A,B,F,E);r.renderBufferDirect(w,null,q,K,A,null)}}const ie=A.children;for(let q=0,B=ie.length;q<B;q++)y(ie[q],D,w,F,E)}}function DM(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const Se=new vt;let te=null;const he=new vt(0,0,0,0);return{setMask:function(_e){te!==_e&&!N&&(r.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){N=_e},setClear:function(_e,qe,tt,st,je){je===!0&&(_e*=st,qe*=st,tt*=st),Se.set(_e,qe,tt,st),he.equals(Se)===!1&&(r.clearColor(_e,qe,tt,st),he.copy(Se))},reset:function(){N=!1,te=null,he.set(-1,0,0,0)}}}function s(){let N=!1,Se=null,te=null,he=null;return{setTest:function(_e){_e?Le(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(_e){Se!==_e&&!N&&(r.depthMask(_e),Se=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case N_:r.depthFunc(r.NEVER);break;case F_:r.depthFunc(r.ALWAYS);break;case B_:r.depthFunc(r.LESS);break;case Zl:r.depthFunc(r.LEQUAL);break;case z_:r.depthFunc(r.EQUAL);break;case H_:r.depthFunc(r.GEQUAL);break;case k_:r.depthFunc(r.GREATER);break;case G_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=_e}},setLocked:function(_e){N=_e},setClear:function(_e){he!==_e&&(r.clearDepth(_e),he=_e)},reset:function(){N=!1,Se=null,te=null,he=null}}}function o(){let N=!1,Se=null,te=null,he=null,_e=null,qe=null,tt=null,st=null,je=null;return{setTest:function(nt){N||(nt?Le(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(nt){Se!==nt&&!N&&(r.stencilMask(nt),Se=nt)},setFunc:function(nt,Ct,Nt){(te!==nt||he!==Ct||_e!==Nt)&&(r.stencilFunc(nt,Ct,Nt),te=nt,he=Ct,_e=Nt)},setOp:function(nt,Ct,Nt){(qe!==nt||tt!==Ct||st!==Nt)&&(r.stencilOp(nt,Ct,Nt),qe=nt,tt=Ct,st=Nt)},setLocked:function(nt){N=nt},setClear:function(nt){je!==nt&&(r.clearStencil(nt),je=nt)},reset:function(){N=!1,Se=null,te=null,he=null,_e=null,qe=null,tt=null,st=null,je=null}}}const a=new i,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let p={},g={},v=new WeakMap,S=[],_=null,m=!1,T=null,M=null,y=null,A=null,D=null,w=null,F=null,E=!1,L=null,ie=null,q=null,B=null,K=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Q=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(re)[1]),le=Q>=1):re.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),le=Q>=2);let oe=null,ce={};const $=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),ve=new vt().fromArray($),me=new vt().fromArray(ee);function de(N,Se,te,he){const _e=new Uint8Array(4),qe=r.createTexture();r.bindTexture(N,qe),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<te;tt++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(Se+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return qe}const Te={};Te[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(r.DEPTH_TEST),l.setFunc(Zl),Ce(!1),it(ju),Le(r.CULL_FACE),Re(yi);function Le(N){p[N]!==!0&&(r.enable(N),p[N]=!0)}function Ae(N){p[N]!==!1&&(r.disable(N),p[N]=!1)}function He(N,Se){return g[N]!==Se?(r.bindFramebuffer(N,Se),g[N]=Se,n&&(N===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Se),N===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function mt(N,Se){let te=S,he=!1;if(N)if(te=v.get(Se),te===void 0&&(te=[],v.set(Se,te)),N.isWebGLMultipleRenderTargets){const _e=N.texture;if(te.length!==_e.length||te[0]!==r.COLOR_ATTACHMENT0){for(let qe=0,tt=_e.length;qe<tt;qe++)te[qe]=r.COLOR_ATTACHMENT0+qe;te.length=_e.length,he=!0}}else te[0]!==r.COLOR_ATTACHMENT0&&(te[0]=r.COLOR_ATTACHMENT0,he=!0);else te[0]!==r.BACK&&(te[0]=r.BACK,he=!0);he&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function we(N){return _!==N?(r.useProgram(N),_=N,!0):!1}const W={[Vr]:r.FUNC_ADD,[b_]:r.FUNC_SUBTRACT,[A_]:r.FUNC_REVERSE_SUBTRACT};if(n)W[Ju]=r.MIN,W[Qu]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(W[Ju]=N.MIN_EXT,W[Qu]=N.MAX_EXT)}const Ze={[w_]:r.ZERO,[R_]:r.ONE,[C_]:r.SRC_COLOR,[kh]:r.SRC_ALPHA,[O_]:r.SRC_ALPHA_SATURATE,[I_]:r.DST_COLOR,[P_]:r.DST_ALPHA,[L_]:r.ONE_MINUS_SRC_COLOR,[Gh]:r.ONE_MINUS_SRC_ALPHA,[U_]:r.ONE_MINUS_DST_COLOR,[D_]:r.ONE_MINUS_DST_ALPHA};function Re(N,Se,te,he,_e,qe,tt,st){if(N===yi){m===!0&&(Ae(r.BLEND),m=!1);return}if(m===!1&&(Le(r.BLEND),m=!0),N!==T_){if(N!==T||st!==E){if((M!==Vr||D!==Vr)&&(r.blendEquation(r.FUNC_ADD),M=Vr,D=Vr),st)switch(N){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ku:r.blendFunc(r.ONE,r.ONE);break;case Zu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $u:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ku:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $u:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,A=null,w=null,F=null,T=N,E=st}return}_e=_e||Se,qe=qe||te,tt=tt||he,(Se!==M||_e!==D)&&(r.blendEquationSeparate(W[Se],W[_e]),M=Se,D=_e),(te!==y||he!==A||qe!==w||tt!==F)&&(r.blendFuncSeparate(Ze[te],Ze[he],Ze[qe],Ze[tt]),y=te,A=he,w=qe,F=tt),T=N,E=!1}function Ie(N,Se){N.side===oi?Ae(r.CULL_FACE):Le(r.CULL_FACE);let te=N.side===en;Se&&(te=!te),Ce(te),N.blending===jr&&N.transparent===!1?Re(yi):Re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const he=N.stencilWrite;c.setTest(he),he&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Le(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function it(N){N!==M_?(Le(r.CULL_FACE),N!==ie&&(N===ju?r.cullFace(r.BACK):N===E_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),ie=N}function Ve(N){N!==q&&(le&&r.lineWidth(N),q=N)}function Be(N,Se,te){N?(Le(r.POLYGON_OFFSET_FILL),(B!==Se||K!==te)&&(r.polygonOffset(Se,te),B=Se,K=te)):Ae(r.POLYGON_OFFSET_FILL)}function Qe(N){N?Le(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function rt(N){N===void 0&&(N=r.TEXTURE0+X-1),oe!==N&&(r.activeTexture(N),oe=N)}function _t(N,Se,te){te===void 0&&(oe===null?te=r.TEXTURE0+X-1:te=oe);let he=ce[te];he===void 0&&(he={type:void 0,texture:void 0},ce[te]=he),(he.type!==N||he.texture!==Se)&&(oe!==te&&(r.activeTexture(te),oe=te),r.bindTexture(N,Se||Te[N]),he.type=N,he.texture=Se)}function P(){const N=ce[oe];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){ve.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function xe(N){me.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function Me(N,Se){let te=d.get(Se);te===void 0&&(te=new WeakMap,d.set(Se,te));let he=te.get(N);he===void 0&&(he=r.getUniformBlockIndex(Se,N.name),te.set(N,he))}function ze(N,Se){const he=d.get(Se).get(N);f.get(Se)!==he&&(r.uniformBlockBinding(Se,he,N.__bindingPointIndex),f.set(Se,he))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},oe=null,ce={},g={},v=new WeakMap,S=[],_=null,m=!1,T=null,M=null,y=null,A=null,D=null,w=null,F=null,E=!1,L=null,ie=null,q=null,B=null,K=null,ve.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Ae,bindFramebuffer:He,drawBuffers:mt,useProgram:we,setBlending:Re,setMaterial:Ie,setFlipSided:Ce,setCullFace:it,setLineWidth:Ve,setPolygonOffset:Be,setScissorTest:Qe,activeTexture:rt,bindTexture:_t,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:O,texImage3D:z,updateUBOMapping:Me,uniformBlockBinding:ze,texStorage2D:j,texStorage3D:U,texSubImage2D:pe,texSubImage3D:fe,compressedTexSubImage2D:V,compressedTexSubImage3D:G,scissor:ye,viewport:xe,reset:Je}}function IM(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let S;const _=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,b){return m?new OffscreenCanvas(P,b):Ys("canvas")}function M(P,b,J,pe){let fe=1;if((P.width>pe||P.height>pe)&&(fe=pe/Math.max(P.width,P.height)),fe<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const V=b?no:Math.floor,G=V(fe*P.width),j=V(fe*P.height);S===void 0&&(S=T(G,j));const U=J?T(G,j):S;return U.width=G,U.height=j,U.getContext("2d").drawImage(P,0,0,G,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+G+"x"+j+")."),U}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return nc(P.width)&&nc(P.height)}function A(P){return a?!1:P.wrapS!==Dn||P.wrapT!==Dn||P.minFilter!==Jt&&P.minFilter!==xn}function D(P,b){return P.generateMipmaps&&b&&P.minFilter!==Jt&&P.minFilter!==xn}function w(P){r.generateMipmap(P)}function F(P,b,J,pe,fe=!1){if(a===!1)return b;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let V=b;return b===r.RED&&(J===r.FLOAT&&(V=r.R32F),J===r.HALF_FLOAT&&(V=r.R16F),J===r.UNSIGNED_BYTE&&(V=r.R8)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(V=r.R8UI),J===r.UNSIGNED_SHORT&&(V=r.R16UI),J===r.UNSIGNED_INT&&(V=r.R32UI),J===r.BYTE&&(V=r.R8I),J===r.SHORT&&(V=r.R16I),J===r.INT&&(V=r.R32I)),b===r.RG&&(J===r.FLOAT&&(V=r.RG32F),J===r.HALF_FLOAT&&(V=r.RG16F),J===r.UNSIGNED_BYTE&&(V=r.RG8)),b===r.RGBA&&(J===r.FLOAT&&(V=r.RGBA32F),J===r.HALF_FLOAT&&(V=r.RGBA16F),J===r.UNSIGNED_BYTE&&(V=pe===gt&&fe===!1?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)),(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(P,b,J){return D(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){return P===Jt||P===ef||P===cl?r.NEAREST:r.LINEAR}function ie(P){const b=P.target;b.removeEventListener("dispose",ie),B(b),b.isVideoTexture&&v.delete(b)}function q(P){const b=P.target;b.removeEventListener("dispose",q),X(b)}function B(P){const b=n.get(P);if(b.__webglInit===void 0)return;const J=P.source,pe=_.get(J);if(pe){const fe=pe[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&K(P),Object.keys(pe).length===0&&_.delete(J)}n.remove(P)}function K(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const J=P.source,pe=_.get(J);delete pe[b.__cacheKey],o.memory.textures--}function X(P){const b=P.texture,J=n.get(P),pe=n.get(b);if(pe.__webglTexture!==void 0&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(J.__webglFramebuffer[fe]))for(let V=0;V<J.__webglFramebuffer[fe].length;V++)r.deleteFramebuffer(J.__webglFramebuffer[fe][V]);else r.deleteFramebuffer(J.__webglFramebuffer[fe]);J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer[fe])}else{if(Array.isArray(J.__webglFramebuffer))for(let fe=0;fe<J.__webglFramebuffer.length;fe++)r.deleteFramebuffer(J.__webglFramebuffer[fe]);else r.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&r.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let fe=0;fe<J.__webglColorRenderbuffer.length;fe++)J.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(J.__webglColorRenderbuffer[fe]);J.__webglDepthRenderbuffer&&r.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let fe=0,V=b.length;fe<V;fe++){const G=n.get(b[fe]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(b[fe])}n.remove(b),n.remove(P)}let le=0;function Q(){le=0}function re(){const P=le;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),le+=1,P}function oe(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ce(P,b){const J=n.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(J,P,b);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function $(P,b){const J=n.get(P);if(P.version>0&&J.__version!==P.version){He(J,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function ee(P,b){const J=n.get(P);if(P.version>0&&J.__version!==P.version){He(J,P,b);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function ve(P,b){const J=n.get(P);if(P.version>0&&J.__version!==P.version){mt(J,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const me={[Ql]:r.REPEAT,[Dn]:r.CLAMP_TO_EDGE,[ec]:r.MIRRORED_REPEAT},de={[Jt]:r.NEAREST,[ef]:r.NEAREST_MIPMAP_NEAREST,[cl]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[Z_]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},Te={[ug]:r.NEVER,[gg]:r.ALWAYS,[fg]:r.LESS,[dg]:r.LEQUAL,[hg]:r.EQUAL,[_g]:r.GEQUAL,[pg]:r.GREATER,[mg]:r.NOTEQUAL};function Le(P,b,J){if(J?(r.texParameteri(P,r.TEXTURE_WRAP_S,me[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,me[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,me[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,de[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,de[b.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==Dn||b.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,L(b.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,L(b.minFilter)),b.minFilter!==Jt&&b.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Jt||b.minFilter!==cl&&b.minFilter!==Vs||b.type===Si&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(P,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ae(P,b){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",ie));const pe=b.source;let fe=_.get(pe);fe===void 0&&(fe={},_.set(pe,fe));const V=oe(b);if(V!==P.__cacheKey){fe[V]===void 0&&(fe[V]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),fe[V].usedTimes++;const G=fe[P.__cacheKey];G!==void 0&&(fe[P.__cacheKey].usedTimes--,G.usedTimes===0&&K(b)),P.__cacheKey=V,P.__webglTexture=fe[V].texture}return J}function He(P,b,J){let pe=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=r.TEXTURE_3D);const fe=Ae(P,b),V=b.source;t.bindTexture(pe,P.__webglTexture,r.TEXTURE0+J);const G=n.get(V);if(V.version!==G.__version||fe===!0){t.activeTexture(r.TEXTURE0+J),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const j=A(b)&&y(b.image)===!1;let U=M(b.image,j,!1,f);U=_t(b,U);const O=y(U)||a,z=s.convert(b.format,b.colorSpace);let ye=s.convert(b.type),xe=F(b.internalFormat,z,ye,b.colorSpace,b.isVideoTexture);Le(pe,b,O);let Me;const ze=b.mipmaps,Je=a&&b.isVideoTexture!==!0,N=G.__version===void 0||fe===!0,Se=E(b,U,O);if(b.isDepthTexture)xe=r.DEPTH_COMPONENT,a?b.type===Si?xe=r.DEPTH_COMPONENT32F:b.type===vi?xe=r.DEPTH_COMPONENT24:b.type===$i?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:b.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ji&&xe===r.DEPTH_COMPONENT&&b.type!==Mc&&b.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=vi,ye=s.convert(b.type)),b.format===ts&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,b.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$i,ye=s.convert(b.type))),N&&(Je?t.texStorage2D(r.TEXTURE_2D,1,xe,U.width,U.height):t.texImage2D(r.TEXTURE_2D,0,xe,U.width,U.height,0,z,ye,null));else if(b.isDataTexture)if(ze.length>0&&O){Je&&N&&t.texStorage2D(r.TEXTURE_2D,Se,xe,ze[0].width,ze[0].height);for(let te=0,he=ze.length;te<he;te++)Me=ze[te],Je?t.texSubImage2D(r.TEXTURE_2D,te,0,0,Me.width,Me.height,z,ye,Me.data):t.texImage2D(r.TEXTURE_2D,te,xe,Me.width,Me.height,0,z,ye,Me.data);b.generateMipmaps=!1}else Je?(N&&t.texStorage2D(r.TEXTURE_2D,Se,xe,U.width,U.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,U.width,U.height,z,ye,U.data)):t.texImage2D(r.TEXTURE_2D,0,xe,U.width,U.height,0,z,ye,U.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&N&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,xe,ze[0].width,ze[0].height,U.depth);for(let te=0,he=ze.length;te<he;te++)Me=ze[te],b.format!==In?z!==null?Je?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,U.depth,z,Me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,xe,Me.width,Me.height,U.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,U.depth,z,ye,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,xe,Me.width,Me.height,U.depth,0,z,ye,Me.data)}else{Je&&N&&t.texStorage2D(r.TEXTURE_2D,Se,xe,ze[0].width,ze[0].height);for(let te=0,he=ze.length;te<he;te++)Me=ze[te],b.format!==In?z!==null?Je?t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,Me.width,Me.height,z,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,te,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(r.TEXTURE_2D,te,0,0,Me.width,Me.height,z,ye,Me.data):t.texImage2D(r.TEXTURE_2D,te,xe,Me.width,Me.height,0,z,ye,Me.data)}else if(b.isDataArrayTexture)Je?(N&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,xe,U.width,U.height,U.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,z,ye,U.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,U.width,U.height,U.depth,0,z,ye,U.data);else if(b.isData3DTexture)Je?(N&&t.texStorage3D(r.TEXTURE_3D,Se,xe,U.width,U.height,U.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,z,ye,U.data)):t.texImage3D(r.TEXTURE_3D,0,xe,U.width,U.height,U.depth,0,z,ye,U.data);else if(b.isFramebufferTexture){if(N)if(Je)t.texStorage2D(r.TEXTURE_2D,Se,xe,U.width,U.height);else{let te=U.width,he=U.height;for(let _e=0;_e<Se;_e++)t.texImage2D(r.TEXTURE_2D,_e,xe,te,he,0,z,ye,null),te>>=1,he>>=1}}else if(ze.length>0&&O){Je&&N&&t.texStorage2D(r.TEXTURE_2D,Se,xe,ze[0].width,ze[0].height);for(let te=0,he=ze.length;te<he;te++)Me=ze[te],Je?t.texSubImage2D(r.TEXTURE_2D,te,0,0,z,ye,Me):t.texImage2D(r.TEXTURE_2D,te,xe,z,ye,Me);b.generateMipmaps=!1}else Je?(N&&t.texStorage2D(r.TEXTURE_2D,Se,xe,U.width,U.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,z,ye,U)):t.texImage2D(r.TEXTURE_2D,0,xe,z,ye,U);D(b,O)&&w(pe),G.__version=V.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function mt(P,b,J){if(b.image.length!==6)return;const pe=Ae(P,b),fe=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+J);const V=n.get(fe);if(fe.version!==V.__version||pe===!0){t.activeTexture(r.TEXTURE0+J),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const G=b.isCompressedTexture||b.image[0].isCompressedTexture,j=b.image[0]&&b.image[0].isDataTexture,U=[];for(let te=0;te<6;te++)!G&&!j?U[te]=M(b.image[te],!1,!0,c):U[te]=j?b.image[te].image:b.image[te],U[te]=_t(b,U[te]);const O=U[0],z=y(O)||a,ye=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),Me=F(b.internalFormat,ye,xe,b.colorSpace),ze=a&&b.isVideoTexture!==!0,Je=V.__version===void 0||pe===!0;let N=E(b,O,z);Le(r.TEXTURE_CUBE_MAP,b,z);let Se;if(G){ze&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Me,O.width,O.height);for(let te=0;te<6;te++){Se=U[te].mipmaps;for(let he=0;he<Se.length;he++){const _e=Se[he];b.format!==In?ye!==null?ze?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,_e.width,_e.height,ye,xe,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Me,_e.width,_e.height,0,ye,xe,_e.data)}}}else{Se=b.mipmaps,ze&&Je&&(Se.length>0&&N++,t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Me,U[0].width,U[0].height));for(let te=0;te<6;te++)if(j){ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,U[te].width,U[te].height,ye,xe,U[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Me,U[te].width,U[te].height,0,ye,xe,U[te].data);for(let he=0;he<Se.length;he++){const qe=Se[he].image[te].image;ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,qe.width,qe.height,ye,xe,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Me,qe.width,qe.height,0,ye,xe,qe.data)}}else{ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye,xe,U[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Me,ye,xe,U[te]);for(let he=0;he<Se.length;he++){const _e=Se[he];ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,ye,xe,_e.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Me,ye,xe,_e.image[te])}}}D(b,z)&&w(r.TEXTURE_CUBE_MAP),V.__version=fe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function we(P,b,J,pe,fe,V){const G=s.convert(J.format,J.colorSpace),j=s.convert(J.type),U=F(J.internalFormat,G,j,J.colorSpace);if(!n.get(b).__hasExternalTextures){const z=Math.max(1,b.width>>V),ye=Math.max(1,b.height>>V);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,V,U,z,ye,b.depth,0,G,j,null):t.texImage2D(fe,V,U,z,ye,0,G,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Qe(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,fe,n.get(J).__webglTexture,0,Be(b)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,fe,n.get(J).__webglTexture,V),t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(P,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let pe=r.DEPTH_COMPONENT16;if(J||Qe(b)){const fe=b.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Si?pe=r.DEPTH_COMPONENT32F:fe.type===vi&&(pe=r.DEPTH_COMPONENT24));const V=Be(b);Qe(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V,pe,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,V,pe,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,pe,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const pe=Be(b);J&&Qe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,r.DEPTH24_STENCIL8,b.width,b.height):Qe(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const pe=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let fe=0;fe<pe.length;fe++){const V=pe[fe],G=s.convert(V.format,V.colorSpace),j=s.convert(V.type),U=F(V.internalFormat,G,j,V.colorSpace),O=Be(b);J&&Qe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,U,b.width,b.height):Qe(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,U,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,U,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const pe=n.get(b.depthTexture).__webglTexture,fe=Be(b);if(b.depthTexture.format===Ji)Qe(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0);else if(b.depthTexture.format===ts)Qe(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Re(P){const b=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ze(b.__webglFramebuffer,P)}else if(J){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]=r.createRenderbuffer(),W(b.__webglDepthbuffer[pe],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),W(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(P,b,J){const pe=n.get(P);b!==void 0&&we(pe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Re(P)}function Ce(P){const b=P.texture,J=n.get(P),pe=n.get(b);P.addEventListener("dispose",q),P.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=b.version,o.memory.textures++);const fe=P.isWebGLCubeRenderTarget===!0,V=P.isWebGLMultipleRenderTargets===!0,G=y(P)||a;if(fe){J.__webglFramebuffer=[];for(let j=0;j<6;j++)if(a&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[j]=[];for(let U=0;U<b.mipmaps.length;U++)J.__webglFramebuffer[j][U]=r.createFramebuffer()}else J.__webglFramebuffer[j]=r.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)J.__webglFramebuffer[j]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(V)if(i.drawBuffers){const j=P.texture;for(let U=0,O=j.length;U<O;U++){const z=n.get(j[U]);z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Qe(P)===!1){const j=V?b:[b];J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let U=0;U<j.length;U++){const O=j[U];J.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[U]);const z=s.convert(O.format,O.colorSpace),ye=s.convert(O.type),xe=F(O.internalFormat,z,ye,O.colorSpace,P.isXRRenderTarget===!0),Me=Be(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,xe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,J.__webglColorRenderbuffer[U])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),W(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Le(r.TEXTURE_CUBE_MAP,b,G);for(let j=0;j<6;j++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let U=0;U<b.mipmaps.length;U++)we(J.__webglFramebuffer[j][U],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,U);else we(J.__webglFramebuffer[j],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);D(b,G)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){const j=P.texture;for(let U=0,O=j.length;U<O;U++){const z=j[U],ye=n.get(z);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),Le(r.TEXTURE_2D,z,G),we(J.__webglFramebuffer,P,z,r.COLOR_ATTACHMENT0+U,r.TEXTURE_2D,0),D(z,G)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,pe.__webglTexture),Le(j,b,G),a&&b.mipmaps&&b.mipmaps.length>0)for(let U=0;U<b.mipmaps.length;U++)we(J.__webglFramebuffer[U],P,b,r.COLOR_ATTACHMENT0,j,U);else we(J.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,j,0);D(b,G)&&w(j),t.unbindTexture()}P.depthBuffer&&Re(P)}function it(P){const b=y(P)||a,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pe=0,fe=J.length;pe<fe;pe++){const V=J[pe];if(D(V,b)){const G=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,j=n.get(V).__webglTexture;t.bindTexture(G,j),w(G),t.unbindTexture()}}}function Ve(P){if(a&&P.samples>0&&Qe(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,pe=P.height;let fe=r.COLOR_BUFFER_BIT;const V=[],G=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=n.get(P),U=P.isWebGLMultipleRenderTargets===!0;if(U)for(let O=0;O<b.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,j.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let O=0;O<b.length;O++){V.push(r.COLOR_ATTACHMENT0+O),P.depthBuffer&&V.push(G);const z=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(z===!1&&(P.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),U&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,j.__webglColorRenderbuffer[O]),z===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[G]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[G])),U){const ye=n.get(b[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,J,pe,0,0,J,pe,fe,r.NEAREST),g&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),U)for(let O=0;O<b.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,j.__webglColorRenderbuffer[O]);const z=n.get(b[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,j.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function Be(P){return Math.min(d,P.samples)}function Qe(P){const b=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(P){const b=o.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function _t(P,b){const J=P.colorSpace,pe=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===tc||J!==qn&&J!==er&&(J===gt||J===po?a===!1?e.has("EXT_sRGB")===!0&&pe===In?(P.format=tc,P.minFilter=xn,P.generateMipmaps=!1):b=Qh.sRGBToLinear(b):(pe!==In||fe!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}this.allocateTextureUnit=re,this.resetTextureUnits=Q,this.setTexture2D=ce,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ve,this.rebindTextures=Ie,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Qe}const UM=0,Pt=1;function OM(r,e,t){const n=t.isWebGL2;function i(s,o=er){let a;const l=o===gt||o===po?Pt:UM;if(s===bi)return r.UNSIGNED_BYTE;if(s===Xh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$_)return r.BYTE;if(s===J_)return r.SHORT;if(s===Mc)return r.UNSIGNED_SHORT;if(s===Wh)return r.INT;if(s===vi)return r.UNSIGNED_INT;if(s===Si)return r.FLOAT;if(s===Ws)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Q_)return r.ALPHA;if(s===In)return r.RGBA;if(s===eg)return r.LUMINANCE;if(s===tg)return r.LUMINANCE_ALPHA;if(s===Ji)return r.DEPTH_COMPONENT;if(s===ts)return r.DEPTH_STENCIL;if(s===tc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ng)return r.RED;if(s===qh)return r.RED_INTEGER;if(s===ig)return r.RG;if(s===jh)return r.RG_INTEGER;if(s===Kh)return r.RGBA_INTEGER;if(s===ul||s===fl||s===hl||s===dl)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ul)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ul)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tf||s===nf||s===rf||s===sf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===tf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===af||s===of)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===af)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===of)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lf||s===cf||s===uf||s===ff||s===hf||s===df||s===pf||s===mf||s===_f||s===gf||s===vf||s===Sf||s===xf||s===Mf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ff)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===df)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_f)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mf)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pl||s===Ef||s===yf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pl)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ef)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sg||s===Tf||s===bf||s===Af)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Af)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$i?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class NM extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qa extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,n),m=this._getHandJoint(c,S);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=f.position.distanceTo(d.position),g=.02,v=.005;c.inputState.pinching&&p>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class BM extends tn{constructor(e,t,n,i,s,o,a,l,c,f){if(f=f!==void 0?f:Ji,f!==Ji&&f!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ji&&(n=vi),n===void 0&&f===ts&&(n=$i),super(null,i,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zM extends cr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,p=null,g=null,v=null;const S=t.getContextAttributes();let _=null,m=null;const T=[],M=[],y=new fn;y.layers.enable(1),y.viewport=new vt;const A=new fn;A.layers.enable(2),A.viewport=new vt;const D=[y,A],w=new NM;w.layers.enable(1),w.layers.enable(2);let F=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=T[$];return ee===void 0&&(ee=new Nl,T[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=T[$];return ee===void 0&&(ee=new Nl,T[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=T[$];return ee===void 0&&(ee=new Nl,T[$]=ee),ee.getHandSpace()};function L($){const ee=M.indexOf($.inputSource);if(ee===-1)return;const ve=T[ee];ve!==void 0&&(ve.update($.inputSource,$.frame,c||o),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function ie(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",ie),i.removeEventListener("inputsourceschange",q);for(let $=0;$<T.length;$++){const ee=M[$];ee!==null&&(M[$]=null,T[$].disconnect(ee))}F=null,E=null,e.setRenderTarget(_),g=null,p=null,d=null,i=null,m=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",q),S.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:g}),m=new sr(g.framebufferWidth,g.framebufferHeight,{format:In,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ee=null,ve=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?ts:Ji,ve=S.stencil?$i:vi);const de={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(i,t),p=d.createProjectionLayer(de),i.updateRenderState({layers:[p]}),m=new sr(p.textureWidth,p.textureHeight,{format:In,type:bi,depthTexture:new BM(p.textureWidth,p.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Te=e.properties.get(m);Te.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q($){for(let ee=0;ee<$.removed.length;ee++){const ve=$.removed[ee],me=M.indexOf(ve);me>=0&&(M[me]=null,T[me].disconnect(ve))}for(let ee=0;ee<$.added.length;ee++){const ve=$.added[ee];let me=M.indexOf(ve);if(me===-1){for(let Te=0;Te<T.length;Te++)if(Te>=M.length){M.push(ve),me=Te;break}else if(M[Te]===null){M[Te]=ve,me=Te;break}if(me===-1)break}const de=T[me];de&&de.connect(ve)}}const B=new k,K=new k;function X($,ee,ve){B.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const me=B.distanceTo(K),de=ee.projectionMatrix.elements,Te=ve.projectionMatrix.elements,Le=de[14]/(de[10]-1),Ae=de[14]/(de[10]+1),He=(de[9]+1)/de[5],mt=(de[9]-1)/de[5],we=(de[8]-1)/de[0],W=(Te[8]+1)/Te[0],Ze=Le*we,Re=Le*W,Ie=me/(-we+W),Ce=Ie*-we;ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(Ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const it=Le+Ie,Ve=Ae+Ie,Be=Ze-Ce,Qe=Re+(me-Ce),rt=He*Ae/Ve*it,_t=mt*Ae/Ve*it;$.projectionMatrix.makePerspective(Be,Qe,rt,_t,it,Ve),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function le($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;w.near=A.near=y.near=$.near,w.far=A.far=y.far=$.far,(F!==w.near||E!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,E=w.far);const ee=$.parent,ve=w.cameras;le(w,ee);for(let me=0;me<ve.length;me++)le(ve[me],ee);ve.length===2?X(w,y,A):w.projectionMatrix.copy(y.projectionMatrix),Q($,w,ee)};function Q($,ee,ve){ve===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)};let re=null;function oe($,ee){if(f=ee.getViewerPose(c||o),v=ee,f!==null){const ve=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let me=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let de=0;de<ve.length;de++){const Te=ve[de];let Le=null;if(g!==null)Le=g.getViewport(Te);else{const He=d.getViewSubImage(p,Te);Le=He.viewport,de===0&&(e.setRenderTargetTextures(m,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(m))}let Ae=D[de];Ae===void 0&&(Ae=new fn,Ae.layers.enable(de),Ae.viewport=new vt,D[de]=Ae),Ae.matrix.fromArray(Te.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Te.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),de===0&&(w.matrix.copy(Ae.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(Ae)}}for(let ve=0;ve<T.length;ve++){const me=M[ve],de=T[ve];me!==null&&de!==void 0&&de.update(me,ee,c||o)}re&&re($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const ce=new fd;ce.setAnimationLoop(oe),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}function HM(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,ld(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,T,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),f(_,m)):m.isMeshStandardMaterial?(s(_,m),p(_,m),m.isMeshPhysicalMaterial&&g(_,m,y)):m.isMeshMatcapMaterial?(s(_,m),v(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),S(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,T,M):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===en&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===en&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const T=e.get(m).envMap;if(T&&(_.envMap.value=T,_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;const M=r._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*M,t(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,T,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*T,_.scale.value=M*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function f(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function p(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),e.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function g(_,m,T){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,m){m.matcap&&(_.matcap.value=m.matcap)}function S(_,m){const T=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kM(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){const y=M.program;n.uniformBlockBinding(T,y)}function c(T,M){let y=i[T.id];y===void 0&&(v(T),y=f(T),i[T.id]=y,T.addEventListener("dispose",_));const A=M.program;n.updateUBOMapping(T,A);const D=e.render.frame;s[T.id]!==D&&(p(T),s[T.id]=D)}function f(T){const M=d();T.__bindingPointIndex=M;const y=r.createBuffer(),A=T.__size,D=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const M=i[T.id],y=T.uniforms,A=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let D=0,w=y.length;D<w;D++){const F=y[D];if(g(F,D,A)===!0){const E=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let q=0;q<L.length;q++){const B=L[q],K=S(B);typeof B=="number"?(F.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,E+ie,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=B.elements[0],F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=B.elements[0],F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=B.elements[0]):(B.toArray(F.__data,ie),ie+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,F.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(T,M,y){const A=T.value;if(y[M]===void 0){if(typeof A=="number")y[M]=A;else{const D=Array.isArray(A)?A:[A],w=[];for(let F=0;F<D.length;F++)w.push(D[F].clone());y[M]=w}return!0}else if(typeof A=="number"){if(y[M]!==A)return y[M]=A,!0}else{const D=Array.isArray(y[M])?y[M]:[y[M]],w=Array.isArray(A)?A:[A];for(let F=0;F<D.length;F++){const E=D[F];if(E.equals(w[F])===!1)return E.copy(w[F]),!0}}return!1}function v(T){const M=T.uniforms;let y=0;const A=16;let D=0;for(let w=0,F=M.length;w<F;w++){const E=M[w],L={boundary:0,storage:0},ie=Array.isArray(E.value)?E.value:[E.value];for(let q=0,B=ie.length;q<B;q++){const K=ie[q],X=S(K);L.boundary+=X.boundary,L.storage+=X.storage}if(E.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,w>0){D=y%A;const q=A-D;D!==0&&q-L.boundary<0&&(y+=A-D,E.__offset=y)}y+=L.storage}return D=y%A,D>0&&(y+=A-D),T.__size=y,T.__cache={},this}function S(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function _(T){const M=T.target;M.removeEventListener("dispose",_);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class _d{constructor(e={}){const{canvas:t=Ig(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),v=new Int32Array(4);let S=null,_=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const M=this;let y=!1,A=0,D=0,w=null,F=-1,E=null;const L=new vt,ie=new vt;let q=null;const B=new lt(0);let K=0,X=t.width,le=t.height,Q=1,re=null,oe=null;const ce=new vt(0,0,X,le),$=new vt(0,0,X,le);let ee=!1;const ve=new Tc;let me=!1,de=!1,Te=null;const Le=new Rt,Ae=new Ye,He=new k,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return w===null?Q:1}let W=n;function Ze(C,Y){for(let ne=0;ne<C.length;ne++){const Z=C[ne],se=t.getContext(Z,Y);if(se!==null)return se}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",he,!1),W===null){const Y=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Y.shift(),W=Ze(Y,C),W===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Re,Ie,Ce,it,Ve,Be,Qe,rt,_t,P,b,J,pe,fe,V,G,j,U,O,z,ye,xe,Me,ze;function Je(){Re=new $S(W),Ie=new WS(W,Re,e),Re.init(Ie),xe=new OM(W,Re,Ie),Ce=new DM(W,Re,Ie),it=new ex(W),Ve=new vM,Be=new IM(W,Re,Ce,Ve,Ie,xe,it),Qe=new YS(M),rt=new ZS(M),_t=new cv(W,Ie),Me=new GS(W,Re,_t,Ie),P=new JS(W,_t,it,Me),b=new rx(W,P,_t,it),O=new ix(W,Ie,Be),G=new XS(Ve),J=new gM(M,Qe,rt,Re,Ie,Me,G),pe=new HM(M,Ve),fe=new xM,V=new AM(Re,Ie),U=new kS(M,Qe,rt,Ce,b,p,l),j=new PM(M,b,Ie),ze=new kM(W,it,Ie,Ce),z=new VS(W,Re,it,Ie),ye=new QS(W,Re,it,Ie),it.programs=J.programs,M.capabilities=Ie,M.extensions=Re,M.properties=Ve,M.renderLists=fe,M.shadowMap=j,M.state=Ce,M.info=it}Je();const N=new zM(M,W);this.xr=N,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(X,le,!1))},this.getSize=function(C){return C.set(X,le)},this.setSize=function(C,Y,ne=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,le=Y,t.width=Math.floor(C*Q),t.height=Math.floor(Y*Q),ne===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(X*Q,le*Q).floor()},this.setDrawingBufferSize=function(C,Y,ne){X=C,le=Y,Q=ne,t.width=Math.floor(C*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ce)},this.setViewport=function(C,Y,ne,Z){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,Y,ne,Z),Ce.viewport(L.copy(ce).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,Y,ne,Z){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,Y,ne,Z),Ce.scissor(ie.copy($).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Ce.setScissorTest(ee=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor.apply(U,arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha.apply(U,arguments)},this.clear=function(C=!0,Y=!0,ne=!0){let Z=0;if(C){let se=!1;if(w!==null){const be=w.texture.format;se=be===Kh||be===jh||be===qh}if(se){const be=w.texture.type,Pe=be===bi||be===vi||be===Mc||be===$i||be===Xh||be===Yh,Ne=U.getClearColor(),Ue=U.getClearAlpha(),ke=Ne.r,De=Ne.g,Oe=Ne.b;Pe?(g[0]=ke,g[1]=De,g[2]=Oe,g[3]=Ue,W.clearBufferuiv(W.COLOR,0,g)):(v[0]=ke,v[1]=De,v[2]=Oe,v[3]=Ue,W.clearBufferiv(W.COLOR,0,v))}else Z|=W.COLOR_BUFFER_BIT}Y&&(Z|=W.DEPTH_BUFFER_BIT),ne&&(Z|=W.STENCIL_BUFFER_BIT),W.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),V.dispose(),Ve.dispose(),Qe.dispose(),rt.dispose(),b.dispose(),Me.dispose(),ze.dispose(),J.dispose(),N.dispose(),N.removeEventListener("sessionstart",nt),N.removeEventListener("sessionend",Ct),Te&&(Te.dispose(),Te=null),Nt.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=it.autoReset,Y=j.enabled,ne=j.autoUpdate,Z=j.needsUpdate,se=j.type;Je(),it.autoReset=C,j.enabled=Y,j.autoUpdate=ne,j.needsUpdate=Z,j.type=se}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _e(C){const Y=C.target;Y.removeEventListener("dispose",_e),qe(Y)}function qe(C){tt(C),Ve.remove(C)}function tt(C){const Y=Ve.get(C).programs;Y!==void 0&&(Y.forEach(function(ne){J.releaseProgram(ne)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ne,Z,se,be){Y===null&&(Y=mt);const Pe=se.isMesh&&se.matrixWorld.determinant()<0,Ne=xo(C,Y,ne,Z,se);Ce.setMaterial(Z,Pe);let Ue=ne.index,ke=1;if(Z.wireframe===!0){if(Ue=P.getWireframeAttribute(ne),Ue===void 0)return;ke=2}const De=ne.drawRange,Oe=ne.attributes.position;let ft=De.start*ke,ht=(De.start+De.count)*ke;be!==null&&(ft=Math.max(ft,be.start*ke),ht=Math.min(ht,(be.start+be.count)*ke)),Ue!==null?(ft=Math.max(ft,0),ht=Math.min(ht,Ue.count)):Oe!=null&&(ft=Math.max(ft,0),ht=Math.min(ht,Oe.count));const zt=ht-ft;if(zt<0||zt===1/0)return;Me.setup(se,Z,Ne,ne,Ue);let Ht,dt=z;if(Ue!==null&&(Ht=_t.get(Ue),dt=ye,dt.setIndex(Ht)),se.isMesh)Z.wireframe===!0?(Ce.setLineWidth(Z.wireframeLinewidth*we()),dt.setMode(W.LINES)):dt.setMode(W.TRIANGLES);else if(se.isLine){let We=Z.linewidth;We===void 0&&(We=1),Ce.setLineWidth(We*we()),se.isLineSegments?dt.setMode(W.LINES):se.isLineLoop?dt.setMode(W.LINE_LOOP):dt.setMode(W.LINE_STRIP)}else se.isPoints?dt.setMode(W.POINTS):se.isSprite&&dt.setMode(W.TRIANGLES);if(se.isInstancedMesh)dt.renderInstances(ft,zt,se.count);else if(ne.isInstancedBufferGeometry){const We=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,hr=Math.min(ne.instanceCount,We);dt.renderInstances(ft,zt,hr)}else dt.render(ft,zt)},this.compile=function(C,Y){function ne(Z,se,be){Z.transparent===!0&&Z.side===oi&&Z.forceSinglePass===!1?(Z.side=en,Z.needsUpdate=!0,fr(Z,se,be),Z.side=Ri,Z.needsUpdate=!0,fr(Z,se,be),Z.side=oi):fr(Z,se,be)}_=V.get(C),_.init(),T.push(_),C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(M._useLegacyLights),C.traverse(function(Z){const se=Z.material;if(se)if(Array.isArray(se))for(let be=0;be<se.length;be++){const Pe=se[be];ne(Pe,C,Z)}else ne(se,C,Z)}),T.pop(),_=null};let st=null;function je(C){st&&st(C)}function nt(){Nt.stop()}function Ct(){Nt.start()}const Nt=new fd;Nt.setAnimationLoop(je),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(C){st=C,N.setAnimationLoop(C),C===null?Nt.stop():Nt.start()},N.addEventListener("sessionstart",nt),N.addEventListener("sessionend",Ct),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(Y),Y=N.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,Y,w),_=V.get(C,T.length),_.init(),T.push(_),Le.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ve.setFromProjectionMatrix(Le),de=this.localClippingEnabled,me=G.init(this.clippingPlanes,de),S=fe.get(C,m.length),S.init(),m.push(S),ra(C,Y,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(re,oe),this.info.render.frame++,me===!0&&G.beginShadows();const ne=_.state.shadowsArray;if(j.render(ne,C,Y),me===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),U.render(S,C),_.setupLights(M._useLegacyLights),Y.isArrayCamera){const Z=Y.cameras;for(let se=0,be=Z.length;se<be;se++){const Pe=Z[se];Ii(S,C,Pe,Pe.viewport)}}else Ii(S,C,Y);w!==null&&(Be.updateMultisampleRenderTarget(w),Be.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(M,C,Y),Me.resetDefaultState(),F=-1,E=null,T.pop(),T.length>0?_=T[T.length-1]:_=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function ra(C,Y,ne,Z){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ve.intersectsSprite(C)){Z&&He.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Le);const Pe=b.update(C),Ne=C.material;Ne.visible&&S.push(C,Pe,Ne,ne,He.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ve.intersectsObject(C))){const Pe=b.update(C),Ne=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),He.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),He.copy(Pe.boundingSphere.center)),He.applyMatrix4(C.matrixWorld).applyMatrix4(Le)),Array.isArray(Ne)){const Ue=Pe.groups;for(let ke=0,De=Ue.length;ke<De;ke++){const Oe=Ue[ke],ft=Ne[Oe.materialIndex];ft&&ft.visible&&S.push(C,Pe,ft,ne,He.z,Oe)}}else Ne.visible&&S.push(C,Pe,Ne,ne,He.z,null)}}const be=C.children;for(let Pe=0,Ne=be.length;Pe<Ne;Pe++)ra(be[Pe],Y,ne,Z)}function Ii(C,Y,ne,Z){const se=C.opaque,be=C.transmissive,Pe=C.transparent;_.setupLightsView(ne),me===!0&&G.setGlobalState(M.clippingPlanes,ne),be.length>0&&jt(se,be,Y,ne),Z&&Ce.viewport(L.copy(Z)),se.length>0&&Ui(se,Y,ne),be.length>0&&Ui(be,Y,ne),Pe.length>0&&Ui(Pe,Y,ne),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function jt(C,Y,ne,Z){const se=Ie.isWebGL2;Te===null&&(Te=new sr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Ws:bi,minFilter:Vs,samples:se?4:0})),M.getDrawingBufferSize(Ae),se?Te.setSize(Ae.x,Ae.y):Te.setSize(no(Ae.x),no(Ae.y));const be=M.getRenderTarget();M.setRenderTarget(Te),M.getClearColor(B),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear();const Pe=M.toneMapping;M.toneMapping=Ti,Ui(C,ne,Z),Be.updateMultisampleRenderTarget(Te),Be.updateRenderTargetMipmap(Te);let Ne=!1;for(let Ue=0,ke=Y.length;Ue<ke;Ue++){const De=Y[Ue],Oe=De.object,ft=De.geometry,ht=De.material,zt=De.group;if(ht.side===oi&&Oe.layers.test(Z.layers)){const Ht=ht.side;ht.side=en,ht.needsUpdate=!0,sa(Oe,ne,Z,ft,ht,zt),ht.side=Ht,ht.needsUpdate=!0,Ne=!0}}Ne===!0&&(Be.updateMultisampleRenderTarget(Te),Be.updateRenderTargetMipmap(Te)),M.setRenderTarget(be),M.setClearColor(B,K),M.toneMapping=Pe}function Ui(C,Y,ne){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,be=C.length;se<be;se++){const Pe=C[se],Ne=Pe.object,Ue=Pe.geometry,ke=Z===null?Pe.material:Z,De=Pe.group;Ne.layers.test(ne.layers)&&sa(Ne,Y,ne,Ue,ke,De)}}function sa(C,Y,ne,Z,se,be){C.onBeforeRender(M,Y,ne,Z,se,be),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(M,Y,ne,Z,C,be),se.transparent===!0&&se.side===oi&&se.forceSinglePass===!1?(se.side=en,se.needsUpdate=!0,M.renderBufferDirect(ne,Y,Z,se,C,be),se.side=Ri,se.needsUpdate=!0,M.renderBufferDirect(ne,Y,Z,se,C,be),se.side=oi):M.renderBufferDirect(ne,Y,Z,se,C,be),C.onAfterRender(M,Y,ne,Z,se,be)}function fr(C,Y,ne){Y.isScene!==!0&&(Y=mt);const Z=Ve.get(C),se=_.state.lights,be=_.state.shadowsArray,Pe=se.state.version,Ne=J.getParameters(C,se.state,be,Y,ne),Ue=J.getProgramCacheKey(Ne);let ke=Z.programs;Z.environment=C.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(C.isMeshStandardMaterial?rt:Qe).get(C.envMap||Z.environment),ke===void 0&&(C.addEventListener("dispose",_e),ke=new Map,Z.programs=ke);let De=ke.get(Ue);if(De!==void 0){if(Z.currentProgram===De&&Z.lightsStateVersion===Pe)return us(C,Ne),De}else Ne.uniforms=J.getUniforms(C),C.onBuild(ne,Ne,M),C.onBeforeCompile(Ne,M),De=J.acquireProgram(Ne,Ue),ke.set(Ue,De),Z.uniforms=Ne.uniforms;const Oe=Z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=G.uniform),us(C,Ne),Z.needsLights=Mo(C),Z.lightsStateVersion=Pe,Z.needsLights&&(Oe.ambientLightColor.value=se.state.ambient,Oe.lightProbe.value=se.state.probe,Oe.directionalLights.value=se.state.directional,Oe.directionalLightShadows.value=se.state.directionalShadow,Oe.spotLights.value=se.state.spot,Oe.spotLightShadows.value=se.state.spotShadow,Oe.rectAreaLights.value=se.state.rectArea,Oe.ltc_1.value=se.state.rectAreaLTC1,Oe.ltc_2.value=se.state.rectAreaLTC2,Oe.pointLights.value=se.state.point,Oe.pointLightShadows.value=se.state.pointShadow,Oe.hemisphereLights.value=se.state.hemi,Oe.directionalShadowMap.value=se.state.directionalShadowMap,Oe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Oe.spotShadowMap.value=se.state.spotShadowMap,Oe.spotLightMatrix.value=se.state.spotLightMatrix,Oe.spotLightMap.value=se.state.spotLightMap,Oe.pointShadowMap.value=se.state.pointShadowMap,Oe.pointShadowMatrix.value=se.state.pointShadowMatrix);const ft=De.getUniforms(),ht=Za.seqWithValue(ft.seq,Oe);return Z.currentProgram=De,Z.uniformsList=ht,De}function us(C,Y){const ne=Ve.get(C);ne.outputColorSpace=Y.outputColorSpace,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function xo(C,Y,ne,Z,se){Y.isScene!==!0&&(Y=mt),Be.resetTextureUnits();const be=Y.fog,Pe=Z.isMeshStandardMaterial?Y.environment:null,Ne=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qn,Ue=(Z.isMeshStandardMaterial?rt:Qe).get(Z.envMap||Pe),ke=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,De=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!ne.morphAttributes.position,ft=!!ne.morphAttributes.normal,ht=!!ne.morphAttributes.color;let zt=Ti;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=M.toneMapping);const Ht=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,dt=Ht!==void 0?Ht.length:0,We=Ve.get(Z),hr=_.state.lights;if(me===!0&&(de===!0||C!==E)){const kt=C===E&&Z.id===F;G.setState(Z,C,kt)}let pt=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==hr.state.version||We.outputColorSpace!==Ne||se.isInstancedMesh&&We.instancing===!1||!se.isInstancedMesh&&We.instancing===!0||se.isSkinnedMesh&&We.skinning===!1||!se.isSkinnedMesh&&We.skinning===!0||se.isInstancedMesh&&We.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&We.instancingColor===!1&&se.instanceColor!==null||We.envMap!==Ue||Z.fog===!0&&We.fog!==be||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==G.numPlanes||We.numIntersection!==G.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==De||We.morphTargets!==Oe||We.morphNormals!==ft||We.morphColors!==ht||We.toneMapping!==zt||Ie.isWebGL2===!0&&We.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,We.__version=Z.version);let On=We.currentProgram;pt===!0&&(On=fr(Z,Y,se));let fs=!1,fi=!1,Nn=!1;const Lt=On.getUniforms(),Kn=We.uniforms;if(Ce.useProgram(On.program)&&(fs=!0,fi=!0,Nn=!0),Z.id!==F&&(F=Z.id,fi=!0),fs||E!==C){Lt.setValue(W,"projectionMatrix",C.projectionMatrix),Lt.setValue(W,"viewMatrix",C.matrixWorldInverse);const kt=Lt.map.cameraPosition;kt!==void 0&&kt.setValue(W,He.setFromMatrixPosition(C.matrixWorld)),Ie.logarithmicDepthBuffer&&Lt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,fi=!0,Nn=!0)}if(se.isSkinnedMesh){Lt.setOptional(W,se,"bindMatrix"),Lt.setOptional(W,se,"bindMatrixInverse");const kt=se.skeleton;kt&&(Ie.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Lt.setValue(W,"boneTexture",kt.boneTexture,Be),Lt.setValue(W,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oi=ne.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0&&Ie.isWebGL2===!0)&&O.update(se,ne,On),(fi||We.receiveShadow!==se.receiveShadow)&&(We.receiveShadow=se.receiveShadow,Lt.setValue(W,"receiveShadow",se.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Kn.envMap.value=Ue,Kn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),fi&&(Lt.setValue(W,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&aa(Kn,Nn),be&&Z.fog===!0&&pe.refreshFogUniforms(Kn,be),pe.refreshMaterialUniforms(Kn,Z,Q,le,Te),Za.upload(W,We.uniformsList,Kn,Be)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Za.upload(W,We.uniformsList,Kn,Be),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(W,"center",se.center),Lt.setValue(W,"modelViewMatrix",se.modelViewMatrix),Lt.setValue(W,"normalMatrix",se.normalMatrix),Lt.setValue(W,"modelMatrix",se.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const kt=Z.uniformsGroups;for(let hs=0,oa=kt.length;hs<oa;hs++)if(Ie.isWebGL2){const Ni=kt[hs];ze.update(Ni,On),ze.bind(Ni,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function aa(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Mo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,Y,ne){Ve.get(C.texture).__webglTexture=Y,Ve.get(C.depthTexture).__webglTexture=ne;const Z=Ve.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=ne===void 0,Z.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const ne=Ve.get(C);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ne=0){w=C,A=Y,D=ne;let Z=!0,se=null,be=!1,Pe=!1;if(C){const Ue=Ve.get(C);Ue.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(W.FRAMEBUFFER,null),Z=!1):Ue.__webglFramebuffer===void 0?Be.setupRenderTarget(C):Ue.__hasExternalTextures&&Be.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);const De=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(De[Y])?se=De[Y][ne]:se=De[Y],be=!0):Ie.isWebGL2&&C.samples>0&&Be.useMultisampledRTT(C)===!1?se=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(De)?se=De[ne]:se=De,L.copy(C.viewport),ie.copy(C.scissor),q=C.scissorTest}else L.copy(ce).multiplyScalar(Q).floor(),ie.copy($).multiplyScalar(Q).floor(),q=ee;if(Ce.bindFramebuffer(W.FRAMEBUFFER,se)&&Ie.drawBuffers&&Z&&Ce.drawBuffers(C,se),Ce.viewport(L),Ce.scissor(ie),Ce.setScissorTest(q),be){const Ue=Ve.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,ne)}else if(Pe){const Ue=Ve.get(C.texture),ke=Y||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ue.__webglTexture,ne||0,ke)}F=-1},this.readRenderTargetPixels=function(C,Y,ne,Z,se,be,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Ce.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const Ue=C.texture,ke=Ue.format,De=Ue.type;if(ke!==In&&xe.convert(ke)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===Ws&&(Re.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Re.has("EXT_color_buffer_float"));if(De!==bi&&xe.convert(De)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Si&&(Ie.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-Z&&ne>=0&&ne<=C.height-se&&W.readPixels(Y,ne,Z,se,xe.convert(ke),xe.convert(De),be)}finally{const Ue=w!==null?Ve.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,Y,ne=0){const Z=Math.pow(2,-ne),se=Math.floor(Y.image.width*Z),be=Math.floor(Y.image.height*Z);Be.setTexture2D(Y,0),W.copyTexSubImage2D(W.TEXTURE_2D,ne,0,0,C.x,C.y,se,be),Ce.unbindTexture()},this.copyTextureToTexture=function(C,Y,ne,Z=0){const se=Y.image.width,be=Y.image.height,Pe=xe.convert(ne.format),Ne=xe.convert(ne.type);Be.setTexture2D(ne,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ne.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ne.unpackAlignment),Y.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Z,C.x,C.y,se,be,Pe,Ne,Y.image.data):Y.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Z,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Pe,Y.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,Z,C.x,C.y,Pe,Ne,Y.image),Z===0&&ne.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,ne,Z,se=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Ue=xe.convert(Z.format),ke=xe.convert(Z.type);let De;if(Z.isData3DTexture)Be.setTexture3D(Z,0),De=W.TEXTURE_3D;else if(Z.isDataArrayTexture)Be.setTexture2DArray(Z,0),De=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const Oe=W.getParameter(W.UNPACK_ROW_LENGTH),ft=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ht=W.getParameter(W.UNPACK_SKIP_PIXELS),zt=W.getParameter(W.UNPACK_SKIP_ROWS),Ht=W.getParameter(W.UNPACK_SKIP_IMAGES),dt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,dt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,dt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,C.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,C.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?W.texSubImage3D(De,se,Y.x,Y.y,Y.z,be,Pe,Ne,Ue,ke,dt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(De,se,Y.x,Y.y,Y.z,be,Pe,Ne,Ue,dt.data)):W.texSubImage3D(De,se,Y.x,Y.y,Y.z,be,Pe,Ne,Ue,ke,dt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Oe),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ft),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ht),W.pixelStorei(W.UNPACK_SKIP_ROWS,zt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ht),se===0&&Z.generateMipmaps&&W.generateMipmap(De),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){A=0,D=0,w=null,Ce.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Qi:Zh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?gt:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class GM extends _d{}GM.prototype.isWebGL1Renderer=!0;class VM extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class io extends Pi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new k,p=new k,g=[],v=[],S=[],_=[];for(let m=0;m<=n;m++){const T=[],M=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const D=A/t;d.x=-e*Math.cos(i+D*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(i+D*s)*Math.sin(o+M*a),v.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),_.push(D+y,1-M),T.push(c++)}f.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){const M=f[m][T+1],y=f[m][T],A=f[m+1][T],D=f[m+1][T+1];(m!==0||o>0)&&g.push(M,y,D),(m!==n-1||l<Math.PI)&&g.push(y,A,D)}this.setIndex(g),this.setAttribute("position",new Xn(v,3)),this.setAttribute("normal",new Xn(S,3)),this.setAttribute("uv",new Xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hh extends ta{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const dh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class WM{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,p=c.length;d<p;d+=2){const g=c[d],v=c[d+1];if(g.global&&(g.lastIndex=0),g.test(f))return v}return null}}}const XM=new WM;class wc{constructor(e){this.manager=e!==void 0?e:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wc.DEFAULT_MATERIAL_NAME="__DEFAULT";class YM extends wc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=dh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ys("img");function l(){f(),dh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){f(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Fl extends wc{constructor(e){super(e)}load(e,t,n,i){const s=new tn,o=new YM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gd extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bl=new Rt,ph=new k,mh=new k;class qM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _h=new Rt,Ds=new k,zl=new k;class jM extends qM{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ds),zl.copy(n.position),zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zl),n.updateMatrixWorld(),i.makeTranslation(-Ds.x,-Ds.y,-Ds.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class KM extends gd{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ZM extends gd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const vh={type:"change"},Hl={type:"start"},Sh={type:"end"},ja=new nd,xh=new gi,$M=Math.cos(70*Dg.DEG2RAD);class JM extends cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",b),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vh),n.update(),s=i.NONE},this.update=function(){const O=new k,z=new ar().setFromUnitVectors(e.up,new k(0,1,0)),ye=z.clone().invert(),xe=new k,Me=new ar,ze=new k,Je=2*Math.PI;return function(Se=null){const te=n.object.position;O.copy(te).sub(n.target),O.applyQuaternion(z),a.setFromVector3(O),n.autoRotate&&s===i.NONE&&ie(E(Se)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let he=n.minAzimuthAngle,_e=n.maxAzimuthAngle;isFinite(he)&&isFinite(_e)&&(he<-Math.PI?he+=Je:he>Math.PI&&(he-=Je),_e<-Math.PI?_e+=Je:_e>Math.PI&&(_e-=Je),he<=_e?a.theta=Math.max(he,Math.min(_e,a.theta)):a.theta=a.theta>(he+_e)/2?Math.max(he,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=oe(a.radius):a.radius=oe(a.radius*c),O.setFromSpherical(a),O.applyQuaternion(ye),te.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let qe=!1;if(n.zoomToCursor&&D){let tt=null;if(n.object.isPerspectiveCamera){const st=O.length();tt=oe(st*c);const je=st-tt;n.object.position.addScaledVector(y,je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const st=new k(A.x,A.y,0);st.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=!0;const je=new k(A.x,A.y,0);je.unproject(n.object),n.object.position.sub(je).add(st),n.object.updateMatrixWorld(),tt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(ja.origin.copy(n.object.position),ja.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ja.direction))<$M?e.lookAt(n.target):(xh.setFromNormalAndCoplanarPoint(n.object.up,n.target),ja.intersectPlane(xh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=!0);return c=1,D=!1,qe||xe.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o||ze.distanceToSquared(n.target)>0?(n.dispatchEvent(vh),xe.copy(n.object.position),Me.copy(n.object.quaternion),ze.copy(n.target),qe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",fe),n.domElement.removeEventListener("pointerdown",Ve),n.domElement.removeEventListener("pointercancel",Qe),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Be),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",b),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new gh,l=new gh;let c=1;const f=new k,d=new Ye,p=new Ye,g=new Ye,v=new Ye,S=new Ye,_=new Ye,m=new Ye,T=new Ye,M=new Ye,y=new k,A=new Ye;let D=!1;const w=[],F={};function E(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function ie(O){l.theta-=O}function q(O){l.phi-=O}const B=function(){const O=new k;return function(ye,xe){O.setFromMatrixColumn(xe,0),O.multiplyScalar(-ye),f.add(O)}}(),K=function(){const O=new k;return function(ye,xe){n.screenSpacePanning===!0?O.setFromMatrixColumn(xe,1):(O.setFromMatrixColumn(xe,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(ye),f.add(O)}}(),X=function(){const O=new k;return function(ye,xe){const Me=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;O.copy(ze).sub(n.target);let Je=O.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ye*Je/Me.clientHeight,n.object.matrix),K(2*xe*Je/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ye*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),K(xe*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function le(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(O){if(!n.zoomToCursor)return;D=!0;const z=n.domElement.getBoundingClientRect(),ye=O.clientX-z.left,xe=O.clientY-z.top,Me=z.width,ze=z.height;A.x=ye/Me*2-1,A.y=-(xe/ze)*2+1,y.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function oe(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function ce(O){d.set(O.clientX,O.clientY)}function $(O){re(O),m.set(O.clientX,O.clientY)}function ee(O){v.set(O.clientX,O.clientY)}function ve(O){p.set(O.clientX,O.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;ie(2*Math.PI*g.x/z.clientHeight),q(2*Math.PI*g.y/z.clientHeight),d.copy(p),n.update()}function me(O){T.set(O.clientX,O.clientY),M.subVectors(T,m),M.y>0?le(L()):M.y<0&&Q(L()),m.copy(T),n.update()}function de(O){S.set(O.clientX,O.clientY),_.subVectors(S,v).multiplyScalar(n.panSpeed),X(_.x,_.y),v.copy(S),n.update()}function Te(O){re(O),O.deltaY<0?Q(L()):O.deltaY>0&&le(L()),n.update()}function Le(O){let z=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?ie(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?ie(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),z=!0;break}z&&(O.preventDefault(),n.update())}function Ae(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const O=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);d.set(O,z)}}function He(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const O=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);v.set(O,z)}}function mt(){const O=w[0].pageX-w[1].pageX,z=w[0].pageY-w[1].pageY,ye=Math.sqrt(O*O+z*z);m.set(0,ye)}function we(){n.enableZoom&&mt(),n.enablePan&&He()}function W(){n.enableZoom&&mt(),n.enableRotate&&Ae()}function Ze(O){if(w.length==1)p.set(O.pageX,O.pageY);else{const ye=U(O),xe=.5*(O.pageX+ye.x),Me=.5*(O.pageY+ye.y);p.set(xe,Me)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;ie(2*Math.PI*g.x/z.clientHeight),q(2*Math.PI*g.y/z.clientHeight),d.copy(p)}function Re(O){if(w.length===1)S.set(O.pageX,O.pageY);else{const z=U(O),ye=.5*(O.pageX+z.x),xe=.5*(O.pageY+z.y);S.set(ye,xe)}_.subVectors(S,v).multiplyScalar(n.panSpeed),X(_.x,_.y),v.copy(S)}function Ie(O){const z=U(O),ye=O.pageX-z.x,xe=O.pageY-z.y,Me=Math.sqrt(ye*ye+xe*xe);T.set(0,Me),M.set(0,Math.pow(T.y/m.y,n.zoomSpeed)),le(M.y),m.copy(T)}function Ce(O){n.enableZoom&&Ie(O),n.enablePan&&Re(O)}function it(O){n.enableZoom&&Ie(O),n.enableRotate&&Ze(O)}function Ve(O){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",Be),n.domElement.addEventListener("pointerup",Qe)),V(O),O.pointerType==="touch"?J(O):rt(O))}function Be(O){n.enabled!==!1&&(O.pointerType==="touch"?pe(O):_t(O))}function Qe(O){G(O),w.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",Be),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(Sh),s=i.NONE}function rt(O){let z;switch(O.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Tr.DOLLY:if(n.enableZoom===!1)return;$(O),s=i.DOLLY;break;case Tr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;ee(O),s=i.PAN}else{if(n.enableRotate===!1)return;ce(O),s=i.ROTATE}break;case Tr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;ce(O),s=i.ROTATE}else{if(n.enablePan===!1)return;ee(O),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Hl)}function _t(O){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ve(O);break;case i.DOLLY:if(n.enableZoom===!1)return;me(O);break;case i.PAN:if(n.enablePan===!1)return;de(O);break}}function P(O){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(O.preventDefault(),n.dispatchEvent(Hl),Te(O),n.dispatchEvent(Sh))}function b(O){n.enabled===!1||n.enablePan===!1||Le(O)}function J(O){switch(j(O),w.length){case 1:switch(n.touches.ONE){case br.ROTATE:if(n.enableRotate===!1)return;Ae(),s=i.TOUCH_ROTATE;break;case br.PAN:if(n.enablePan===!1)return;He(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case br.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),s=i.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Hl)}function pe(O){switch(j(O),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ze(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Re(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(O),n.update();break;default:s=i.NONE}}function fe(O){n.enabled!==!1&&O.preventDefault()}function V(O){w.push(O)}function G(O){delete F[O.pointerId];for(let z=0;z<w.length;z++)if(w[z].pointerId==O.pointerId){w.splice(z,1);return}}function j(O){let z=F[O.pointerId];z===void 0&&(z=new Ye,F[O.pointerId]=z),z.set(O.pageX,O.pageY)}function U(O){const z=O.pointerId===w[0].pointerId?w[1]:w[0];return F[z.pointerId]}n.domElement.addEventListener("contextmenu",fe),n.domElement.addEventListener("pointerdown",Ve),n.domElement.addEventListener("pointercancel",Qe),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const QM="/Portfolio/assets/earth-bump2k-min-397774e7.jpg",eE="/Portfolio/assets/earth-night2k-min-3e1e8ca3.jpg",tE="/Portfolio/assets/earth-cloud-transparent-35c46d8b.png";function nE(){let r=document.getElementById("earth-canvas"),e=r.getBoundingClientRect();const t=new VM,n=new fn(75,e.width/e.height,.1,1e4);n.lookAt(0,0,0),t.add(n),n.position.z=1;const i=new _d({antialias:!0});i.setSize(e.width,e.height),i.setPixelRatio(devicePixelRatio),i.autoClear=!1,r.appendChild(i.domElement);const s=new JM(n,i.domElement);s.enableZoom=!1;const o=new ZM(16777215,0),a=new KM(16777215,100);a.position.set(5,3,5),t.add(o,a);const l=new io(.6,32,32),c=new io(.62,32,32),f=new Fl().load(eE),d=new Fl().load(QM),p=new Fl().load(tE),g=new hh({map:f,bumpMap:d,bumpScale:.3}),v=new Gn(l,g);t.add(v);const S=new hh({map:p,transparent:!0}),_=new Gn(c,S);t.add(_),m();function m(){requestAnimationFrame(m),v.rotation.y+=.001,_.rotation.y+=.001,i.render(t,n)}}function si(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},is={duration:.5,overwrite:!1,delay:0},Rc,Yt,yt,Mn=1e8,ut=1/Mn,rc=Math.PI*2,iE=rc/4,rE=0,Sd=Math.sqrt,sE=Math.cos,aE=Math.sin,Ot=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},ci=function(e){return typeof e=="number"},Cc=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},rn=function(e){return e!==!1},Lc=function(){return typeof window<"u"},Ka=function(e){return Tt(e)||Ot(e)},xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qt=Array.isArray,sc=/(?:-?\.?\d|\.)+/gi,Md=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ed=/[+-]=-?[.\d]+/,yd=/[^,'"\[\]\s]+/gi,oE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,Sn,ac,Pc,pn={},ro={},Td,bd=function(e){return(ro=lr(e,pn))&&on},Dc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},so=function(e,t){return!t&&console.warn(e)},Ad=function(e,t){return e&&(pn[e]=t)&&ro&&(ro[e]=t)||pn},qs=function(){return 0},lE={suppressEvents:!0,isStart:!0,kill:!1},$a={suppressEvents:!0,kill:!1},cE={suppressEvents:!0},Ic={},Ai=[],oc={},wd,un={},Gl={},Mh=30,Ja=[],Uc="",Oc=function(e){var t=e[0],n,i;if(jn(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(t););n=Ja[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $d(e[i],n)))||e.splice(i,1);return e},tr=function(e){return e._gsap||Oc(En(e))[0]._gsap},Rd=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Cc(n)&&e.getAttribute&&e.getAttribute(t)||n},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Zr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},uE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ao=function(){var e=Ai.length,t=Ai.slice(0),n,i;for(oc={},Ai.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cd=function(e,t,n,i){Ai.length&&!Yt&&ao(),e.render(t,n,i||Yt&&t<0&&(e._initted||e._startAt)),Ai.length&&!Yt&&ao()},Ld=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yd).length<2?t:Ot(e)?e.trim():e},Pd=function(e){return e},Tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},lr=function(e,t){for(var n in t)e[n]=t[n];return e},Eh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=jn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},oo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Hs=function(e){var t=e.parent||xt,n=e.keyframes?fE(qt(e.keyframes)):Tn;if(rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Dd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},go=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},nr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},dE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lc=function(e,t,n,i){return e._startAt&&(Yt?e._startAt.revert($a):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},pE=function r(e){return!e||e._ts&&r(e.parent)},yh=function(e){return e._repeat?rs(e._tTime,e=e.duration()+e._rDelay)*e:0},rs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},lo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vo=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},So=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vo(e),n._dirty||nr(n,e)),e},Id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=lo(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),nr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},kn=function(e,t,n,i){return t.parent&&Ci(t),t._start=Bt((ci(n)?n:n||e!==xt?vn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dd(e,t,"_first","_last",e._sort?"_start":0),cc(t)||(e._recent=t),i||Id(e,t),e._ts<0&&So(e,e._tTime),e},Ud=function(e,t){return(pn.ScrollTrigger||Dc("scrollTrigger",t))&&pn.ScrollTrigger.create(t,e)},Od=function(e,t,n,i,s){if(Fc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wd!==hn.frame)return Ai.push(e),e._lazy=[s,i],1},mE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_E=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&mE(e)&&!(!e._initted&&cc(e))||(e._ts<0||e._dp._ts<0)&&!cc(e))?0:1,a=e._rDelay,l=0,c,f,d;if(a&&e._repeat&&(l=ia(0,e._tDur,t),f=rs(l,a),e._yoyo&&f&1&&(o=1-o),f!==rs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Yt||i||e._zTime===ut||!t&&e._zTime){if(!e._initted&&Od(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&lc(e,t,n,!0),e._onUpdate&&!n&&yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ci(e,1),!n&&!Yt&&(yn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ss=function(e,t,n,i){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&So(e,e._tTime=e._tDur*a),e.parent&&vo(e),n||nr(e.parent,e),e},Th=function(e){return e instanceof Qt?nr(e):ss(e,e._dur)},vE={_start:0,endTime:qs,totalDuration:qs},vn=function r(e,t,n){var i=e.labels,s=e._recent||vE,o=e.duration()>=Mn?s.endTime(!1):e._dur,a,l,c;return Ot(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(qt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ks=function(e,t,n){var i=ci(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;o.immediateRender=rn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wt(t[0],o,t[s+1])},Di=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Ot(e)||!(t=oE.exec(e))?"":t[1]},SE=function(e,t,n){return Di(n,function(i){return ia(e,t,i)})},uc=[].slice,Nd=function(e,t){return e&&jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==Sn},xE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ot(i)&&!t||Nd(i,1)?(s=n).push.apply(s,En(i)):n.push(i)})||n},En=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Ot(e)&&!n&&(ac||!as())?uc.call((t||Pc).querySelectorAll(e),0):qt(e)?xE(e,n):Nd(e)?uc.call(e,0):e?[e]:[]},fc=function(e){return e=En(e)[0]||so("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return En(t,n.querySelectorAll?n:n===e?so("Invalid scope")||Pc.createElement("div"):e)}},Fd=function(e){return e.sort(function(){return .5-Math.random()})},Bd=function(e){if(Tt(e))return e;var t=jn(e)?e:{each:e},n=ir(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,f=i,d=i;return Ot(i)?f=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(f=i[0],d=i[1]),function(p,g,v){var S=(v||t).length,_=o[S],m,T,M,y,A,D,w,F,E;if(!_){if(E=t.grid==="auto"?0:(t.grid||[1,Mn])[1],!E){for(w=-Mn;w<(w=v[E++].getBoundingClientRect().left)&&E<S;);E--}for(_=o[S]=[],m=l?Math.min(E,S)*f-.5:i%E,T=E===Mn?0:l?S*d/E-.5:i/E|0,w=0,F=Mn,D=0;D<S;D++)M=D%E-m,y=T-(D/E|0),_[D]=A=c?Math.abs(c==="y"?y:M):Sd(M*M+y*y),A>w&&(w=A),A<F&&(F=A);i==="random"&&Fd(_),_.max=w-F,_.min=F,_.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(E>S?S-1:c?c==="y"?S/E:E:Math.max(E,S/E))||0)*(i==="edges"?-1:1),_.b=S<0?s-S:s,_.u=Xt(t.amount||t.each)||0,n=n&&S<0?jd(n):n}return S=(_[p]-_.min)/_.max||0,Bt(_.b+(n?n(S):S)*_.v)+_.u}},hc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ci(n)?0:Xt(n))}},zd=function(e,t){var n=qt(e),i,s;return!n&&jn(e)&&(i=n=e.radius||Mn,e.values?(e=En(e.values),(s=!ci(e[0]))&&(i*=i)):e=hc(e.increment)),Di(t,n?Tt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Mn,f=0,d=e.length,p,g;d--;)s?(p=e[d].x-a,g=e[d].y-l,p=p*p+g*g):p=Math.abs(e[d]-a),p<c&&(c=p,f=d);return f=!i||c<=i?e[f]:o,s||f===o||ci(o)?f:f+Xt(o)}:hc(e))},Hd=function(e,t,n,i){return Di(qt(e)?!t:n===!0?!!(n=0):!i,function(){return qt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ME=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},EE=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},yE=function(e,t,n){return Gd(e,t,0,1,n)},kd=function(e,t,n){return Di(n,function(i){return e[~~t(i)]})},TE=function r(e,t,n){var i=t-e;return qt(e)?kd(e,r(0,e.length),t):Di(n,function(s){return(i+(s-e)%i)%i+e})},bE=function r(e,t,n){var i=t-e,s=i*2;return qt(e)?kd(e,r(0,e.length-1),t):Di(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},js=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?yd:sc),n+=e.substr(t,i-t)+Hd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Gd=function(e,t,n,i,s){var o=t-e,a=i-n;return Di(s,function(l){return n+((l-e)/o*a||0)})},AE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!s){var o=Ot(e),a={},l,c,f,d,p;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(qt(e)&&!qt(t)){for(f=[],d=e.length,p=d-2,c=1;c<d;c++)f.push(r(e[c-1],e[c]));d--,s=function(v){v*=d;var S=Math.min(p,~~v);return f[S](v-S)},n=t}else i||(e=lr(qt(e)?[]:{},e));if(!f){for(l in t)Nc.call(a,e,l,"get",t[l]);s=function(v){return Hc(v,a)||(o?e.p:e)}}}return Di(n,s)},bh=function(e,t,n){var i=e.labels,s=Mn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yn=function(e,t,n){var i=e.vars,s=i[t],o=yt,a=e._ctx,l,c,f;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ai.length&&ao(),a&&(yt=a),f=l?s.apply(c,l):s.call(c),yt=o,f},Os=function(e){return Ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&yn(e,"onInterrupt"),e},qr,Vd=[],Wd=function(e){if(Lc()&&e){e=!e.name&&e.default||e;var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qs,render:Hc,add:Nc,kill:GE,modifier:kE,rawVars:0},o={targetTest:0,get:0,getSetter:zc,aliases:{},register:0};if(as(),e!==i){if(un[t])return;Tn(i,Tn(oo(e,s),o)),lr(i.prototype,lr(s,oo(e,o))),un[i.prop=t]=i,e.targetTest&&(Ja.push(i),Ic[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ad(t,i),e.register&&e.register(on,i,an)}else e&&Vd.push(e)},ct=255,Ns={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Vl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},Xd=function(e,t,n){var i=e?ci(e)?[e>>16,e>>8&ct,e&ct]:0:Ns.black,s,o,a,l,c,f,d,p,g,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ns[e])i=Ns[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(sc),!t)l=+i[0]%360/360,c=+i[1]/100,f=+i[2]/100,o=f<=.5?f*(c+1):f+c-f*c,s=f*2-o,i.length>3&&(i[3]*=1),i[0]=Vl(l+1/3,s,o),i[1]=Vl(l,s,o),i[2]=Vl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Md),n&&i.length<4&&(i[3]=1),i}else i=e.match(sc)||Ns.transparent;i=i.map(Number)}return t&&!v&&(s=i[0]/ct,o=i[1]/ct,a=i[2]/ct,d=Math.max(s,o,a),p=Math.min(s,o,a),f=(d+p)/2,d===p?l=c=0:(g=d-p,c=f>.5?g/(2-d-p):g/(d+p),l=d===s?(o-a)/g+(o<a?6:0):d===o?(a-s)/g+2:(s-o)/g+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(e){var t=[],n=[],i=-1;return e.split(wi).forEach(function(s){var o=s.match(Yr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ah=function(e,t,n){var i="",s=(e+i).match(wi),o=t?"hsla(":"rgba(",a=0,l,c,f,d;if(!s)return e;if(s=s.map(function(p){return(p=Xd(p,t,1))&&o+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(f=Yd(e),l=n.c,l.join(i)!==f.c.join(i)))for(c=e.replace(wi,"1").split(Yr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!c)for(c=e.split(wi),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},wi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ns)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),wE=/hsl[a]?\(/,qd=function(e){var t=e.join(" "),n;if(wi.lastIndex=0,wi.test(t))return n=wE.test(t),e[1]=Ah(e[1],n),e[0]=Ah(e[0],n,Yd(e[1])),!0},Ks,hn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,f,d,p,g,v=function S(_){var m=r()-i,T=_===!0,M,y,A,D;if(m>e&&(n+=m-t),i+=m,A=i-n,M=A-o,(M>0||T)&&(D=++d.frame,p=A-d.time*1e3,d.time=A=A/1e3,o+=M+(M>=s?4:s-M),y=1),T||(l=c(S)),y)for(g=0;g<a.length;g++)a[g](A,p,D,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return p/(1e3/(_||60))},wake:function(){Td&&(!ac&&Lc()&&(Sn=ac=window,Pc=Sn.document||{},pn.gsap=on,(Sn.gsapVersions||(Sn.gsapVersions=[])).push(on.version),bd(ro||Sn.GreenSockGlobals||!Sn.gsap&&Sn||{}),f=Sn.requestAnimationFrame,Vd.forEach(Wd)),l&&d.sleep(),c=f||function(_){return setTimeout(_,o-d.time*1e3+1|0)},Ks=1,v(2))},sleep:function(){(f?Sn.cancelAnimationFrame:clearTimeout)(l),Ks=0,c=qs},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,m,T){var M=m?function(y,A,D,w){_(y,A,D,w),d.remove(M)}:_;return d.remove(_),a[T?"unshift":"push"](M),as(),M},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&g>=m&&g--},_listeners:a},d}(),as=function(){return!Ks&&hn.wake()},et={},RE=/^[\d.\-M][\d.\-,\s]/,CE=/["']/g,LE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(CE,"").trim():+c,i=l.substr(a+1).trim();return t},PE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},DE=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[LE(t[1])]:PE(e).split(",").map(Ld)):et._CE&&RE.test(e)?et._CE("",e):n},jd=function(e){return function(t){return 1-e(1-t)}},Kd=function r(e,t){for(var n=e._first,i;n;)n instanceof Qt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ir=function(e,t){return e&&(Tt(e)?e:et[e]||DE(e))||t},ur=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return sn(e,function(a){et[a]=pn[a]=s,et[o=a.toLowerCase()]=n;for(var l in s)et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[a+"."+l]=s[l]}),s},Zd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rc*(Math.asin(1/i)||0),a=function(f){return f===1?1:i*Math.pow(2,-10*f)*aE((f-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Zd(a);return s=rc/s,l.config=function(c,f){return r(e,c,f)},l},Xl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Zd(n);return i.config=function(s){return r(e,s)},i};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ur(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;ur("Elastic",Wl("in"),Wl("out"),Wl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ur("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ur("Circ",function(r){return-(Sd(1-r*r)-1)});ur("Sine",function(r){return r===1?1:-sE(r*iE)+1});ur("Back",Xl("in"),Xl("out"),Xl());et.SteppedEase=et.steps=pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ut;return function(a){return((i*ia(0,o,a)|0)+s)*n}}};is.ease=et["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uc+=r+","+r+"Params,"});var $d=function(e,t){this.id=rE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rd,this.set=t?t.getSetter:zc},Zs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ss(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),Ks||hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(as(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(So(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?rs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?lo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this._tDur,i),!0),vo(this),dE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&kn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cE);var i=Yt;return Yt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Th(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Th(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vn(this,n),rn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,rn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ut)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Tt(n)?n:Pd,a=function(){var c=i.then;i.then=null,Tt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Os(this)},r}();Tn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var Qt=function(r){vd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=rn(n.sortChildren),xt&&kn(n.parent||xt,si(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ud(si(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ks(0,arguments,this),this},t.from=function(i,s,o){return ks(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ks(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(i,s,vn(this,o),1),this},t.call=function(i,s,o){return kn(this,wt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,f){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=f,o.parent=this,new wt(i,o,vn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,f){return o.runBackwards=1,Hs(o).immediateRender=rn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,f)},t.staggerFromTo=function(i,s,o,a,l,c,f,d){return a.startAt=o,Hs(a).immediateRender=rn(a.immediateRender),this.staggerTo(i,s,a,l,c,f,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,f=i<=0?0:Bt(i),d=this._zTime<0!=i<0&&(this._initted||!c),p,g,v,S,_,m,T,M,y,A,D,w;if(this!==xt&&f>l&&i>=0&&(f=l),f!==this._tTime||o||d){if(a!==this._time&&c&&(f+=this._time-a,i+=this._time-a),p=f,y=this._start,M=this._ts,m=!M,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(p=Bt(f%_),f===l?(S=this._repeat,p=c):(S=~~(f/_),S&&S===f/_&&(p=c,S--),p>c&&(p=c)),A=rs(this._tTime,_),!a&&this._tTime&&A!==S&&this._tTime-A*_-this._dur<=0&&(A=S),D&&S&1&&(p=c-p,w=1),S!==A&&!this._lock){var F=D&&A&1,E=F===(D&&S&1);if(S<A&&(F=!F),a=F?0:f%c?c:f,this._lock=1,this.render(a||(w?0:Bt(S*_)),s,!c)._lock=0,this._tTime=f,!s&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=F?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Kd(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=gE(this,Bt(a),Bt(p)),T&&(f-=p-(p=T._start))),this._tTime=f,this._time=p,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&p&&!s&&!S&&(yn(this,"onStart"),this._tTime!==f))return this;if(p>=a&&i>=0)for(g=this._first;g;){if(v=g._next,(g._act||p>=g._start)&&g._ts&&T!==g){if(g.parent!==this)return this.render(i,s,o);if(g.render(g._ts>0?(p-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(p-g._start)*g._ts,s,o),p!==this._time||!this._ts&&!m){T=0,v&&(f+=this._zTime=-ut);break}}g=v}else{g=this._last;for(var L=i<0?i:p;g;){if(v=g._prev,(g._act||L<=g._end)&&g._ts&&T!==g){if(g.parent!==this)return this.render(i,s,o);if(g.render(g._ts>0?(L-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(L-g._start)*g._ts,s,o||Yt&&(g._initted||g._startAt)),p!==this._time||!this._ts&&!m){T=0,v&&(f+=this._zTime=L?-ut:ut);break}}g=v}}if(T&&!s&&(this.pause(),T.render(p>=a?0:-ut)._zTime=p>=a?1:-1,this._ts))return this._start=y,vo(this),this.render(i,s,o);this._onUpdate&&!s&&yn(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(f===l&&this._ts>0||!f&&this._ts<0)&&Ci(this,1),!s&&!(i<0&&!a)&&(f||a||!l)&&(yn(this,f===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ci(s)||(s=vn(this,s,i)),!(i instanceof Zs)){if(qt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ot(i))return this.addLabel(i,s);if(Tt(i))i=wt.delayedCall(0,i);else return this}return this!==i?kn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof wt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ot(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(go(this,i),i===this._recent&&(this._recent=this._last),nr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=vn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=wt.delayedCall(0,s||qs,o);return a.data="isPause",this._hasPause=1,kn(this,a,vn(this,i))},t.removePause=function(i){var s=this._first;for(i=vn(this,i);s;)s._start===i&&s.data==="isPause"&&Ci(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)xi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=En(i),l=this._first,c=ci(s),f;l;)l instanceof wt?uE(l._targets,a)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(f=l.getTweensOf(a,s)).length&&o.push.apply(o,f),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=vn(o,i),l=s,c=l.startAt,f=l.onStart,d=l.onStartParams,p=l.immediateRender,g,v=wt.to(o,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ut,onStart:function(){if(o.pause(),!g){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==_&&ss(v,_,0,1).render(v._time,!0,!0),g=1}f&&f.apply(v,d||[])}},s));return p?v.render(0):v},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Tn({startAt:{time:vn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bh(this,vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bh(this,vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return nr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),nr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Mn,c,f,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,kn(o,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(s-=f,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ss(o,o===xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(xt._ts&&(Cd(xt,lo(i,xt)),wd=hn.frame),hn.frame>=Mh){Mh+=dn.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&dn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(Zs);Tn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var IE=function(e,t,n,i,s,o,a){var l=new an(this._pt,e,t,0,1,ip,null,s),c=0,f=0,d,p,g,v,S,_,m,T;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=js(i)),o&&(T=[n,i],o(T,e,t),n=T[0],i=T[1]),p=n.match(kl)||[];d=kl.exec(i);)v=d[0],S=i.substring(c,d.index),g?g=(g+1)%5:S.substr(-5)==="rgba("&&(g=1),v!==p[f++]&&(_=parseFloat(p[f-1])||0,l._pt={_next:l._pt,p:S||f===1?S:",",s:_,c:v.charAt(1)==="="?Zr(_,v)-_:parseFloat(v)-_,m:g&&g<4?Math.round:0},c=kl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ed.test(i)||m)&&(l.e=0),this._pt=l,l},Nc=function(e,t,n,i,s,o,a,l,c,f){Tt(i)&&(i=i(s||0,e,o));var d=e[t],p=n!=="get"?n:Tt(d)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,g=Tt(d)?c?BE:tp:Bc,v;if(Ot(i)&&(~i.indexOf("random(")&&(i=js(i)),i.charAt(1)==="="&&(v=Zr(p,i)+(Xt(p)||0),(v||v===0)&&(i=v))),!f||p!==i||dc)return!isNaN(p*i)&&i!==""?(v=new an(this._pt,e,t,+p||0,i-(p||0),typeof d=="boolean"?HE:np,0,g),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&Dc(t,i),IE.call(this,e,t,p,i,g,l||dn.stringFilter,c))},UE=function(e,t,n,i,s){if(Tt(e)&&(e=Gs(e,s,t,n,i)),!jn(e)||e.style&&e.nodeType||qt(e)||xd(e))return Ot(e)?Gs(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Gs(e[a],s,t,n,i);return o},Jd=function(e,t,n,i,s,o){var a,l,c,f;if(un[e]&&(a=new un[e]).init(s,a.rawVars?t[e]:UE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new an(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==qr))for(c=n._ptLookup[n._targets.indexOf(s)],f=a._props.length;f--;)c[a._props[f]]=l;return a},xi,dc,Fc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,f=i.onUpdateParams,d=i.callbackScope,p=i.runBackwards,g=i.yoyoEase,v=i.keyframes,S=i.autoRevert,_=e._dur,m=e._startAt,T=e._targets,M=e.parent,y=M&&M.data==="nested"?M.vars.targets:T,A=e._overwrite==="auto"&&!Rc,D=e.timeline,w,F,E,L,ie,q,B,K,X,le,Q,re,oe;if(D&&(!v||!s)&&(s="none"),e._ease=ir(s,is.ease),e._yEase=g?jd(ir(g===!0?s:g,is.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!D&&!!i.runBackwards,!D||v&&!i.stagger){if(K=T[0]?tr(T[0]).harness:0,re=K&&i[K.prop],w=oo(i,Ic),m&&(m._zTime<0&&m.progress(1),t<0&&p&&a&&!S?m.render(-1,!0):m.revert(p&&_?$a:lE),m._lazy=0),o){if(Ci(e._startAt=wt.set(T,Tn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!m&&rn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:f,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!S)&&e._startAt.revert($a),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&_&&!m){if(t&&(a=!1),E=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&rn(l),immediateRender:a,stagger:0,parent:M},w),re&&(E[K.prop]=re),Ci(e._startAt=wt.set(T,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert($a):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&rn(l)||l&&!_,F=0;F<T.length;F++){if(ie=T[F],B=ie._gsap||Oc(T)[F]._gsap,e._ptLookup[F]=le={},oc[B.id]&&Ai.length&&ao(),Q=y===T?F:y.indexOf(ie),K&&(X=new K).init(ie,re||w,e,Q,y)!==!1&&(e._pt=L=new an(e._pt,ie,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(ce){le[ce]=L}),X.priority&&(q=1)),!K||re)for(E in w)un[E]&&(X=Jd(E,w,e,Q,ie,y))?X.priority&&(q=1):le[E]=L=Nc.call(e,ie,E,"get",w[E],Q,y,0,i.stringFilter);e._op&&e._op[F]&&e.kill(ie,e._op[F]),A&&e._pt&&(xi=e,xt.killTweensOf(ie,le,e.globalTime(t)),oe=!e.parent,xi=0),e._pt&&l&&(oc[B.id]=1)}q&&rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,v&&t<=0&&D.render(Mn,!0,!0)},OE=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return dc=1,e.vars[t]="+=0",Fc(e,a),dc=0,1;l.push(c)}for(p=l.length;p--;)f=l[p],c=f._pt||f,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,f.e&&(f.e=bt(n)+Xt(f.e)),f.b&&(f.b=c.s+Xt(f.b))},NE=function(e,t){var n=e[0]?tr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=lr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},FE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(qt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Gs=function(e,t,n,i,s){return Tt(e)?e.call(t,n,i,s):Ot(e)&&~e.indexOf("random(")?js(e):e},Qd=Uc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ep={};sn(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ep[r]=1});var wt=function(r){vd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Hs(i))||this;var l=a.vars,c=l.duration,f=l.delay,d=l.immediateRender,p=l.stagger,g=l.overwrite,v=l.keyframes,S=l.defaults,_=l.scrollTrigger,m=l.yoyoEase,T=i.parent||xt,M=(qt(n)||xd(n)?ci(n[0]):"length"in i)?[n]:En(n),y,A,D,w,F,E,L,ie;if(a._targets=M.length?Oc(M):so("GSAP target "+n+" not found. https://greensock.com",!dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=g,v||p||Ka(c)||Ka(f)){if(i=a.vars,y=a.timeline=new Qt({data:"nested",defaults:S||{},targets:T&&T.data==="nested"?T.vars.targets:M}),y.kill(),y.parent=y._dp=si(a),y._start=0,p||Ka(c)||Ka(f)){if(w=M.length,L=p&&Bd(p),jn(p))for(F in p)~Qd.indexOf(F)&&(ie||(ie={}),ie[F]=p[F]);for(A=0;A<w;A++)D=oo(i,ep),D.stagger=0,m&&(D.yoyoEase=m),ie&&lr(D,ie),E=M[A],D.duration=+Gs(c,si(a),A,E,M),D.delay=(+Gs(f,si(a),A,E,M)||0)-a._delay,!p&&w===1&&D.delay&&(a._delay=f=D.delay,a._start+=f,D.delay=0),y.to(E,D,L?L(A,E,M):0),y._ease=et.none;y.duration()?c=f=0:a.timeline=0}else if(v){Hs(Tn(y.vars.defaults,{ease:"none"})),y._ease=ir(v.ease||i.ease||"none");var q=0,B,K,X;if(qt(v))v.forEach(function(le){return y.to(M,le,">")}),y.duration();else{D={};for(F in v)F==="ease"||F==="easeEach"||FE(F,v[F],D,v.easeEach);for(F in D)for(B=D[F].sort(function(le,Q){return le.t-Q.t}),q=0,A=0;A<B.length;A++)K=B[A],X={ease:K.e,duration:(K.t-(A?B[A-1].t:0))/100*c},X[F]=K.v,y.to(M,X,q),q+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return g===!0&&!Rc&&(xi=si(a),xt.killTweensOf(M),xi=0),kn(T,si(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!v&&a._start===Bt(T._time)&&rn(d)&&pE(si(a))&&T.data!=="nested")&&(a._tTime=-ut,a.render(Math.max(0,-f)||0)),_&&Ud(si(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,f=i<0,d=i>l-ut&&!f?l:i<ut?0:i,p,g,v,S,_,m,T,M,y;if(!c)_E(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(p=d,M=this.timeline,this._repeat){if(S=c+this._rDelay,this._repeat<-1&&f)return this.totalTime(S*100+i,s,o);if(p=Bt(d%S),d===l?(v=this._repeat,p=c):(v=~~(d/S),v&&v===d/S&&(p=c,v--),p>c&&(p=c)),m=this._yoyo&&v&1,m&&(y=this._yEase,p=c-p),_=rs(this._tTime,S),p===a&&!o&&this._initted)return this._tTime=d,this;v!==_&&(M&&this._yEase&&Kd(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=o=1,this.render(Bt(S*v),!0).invalidate()._lock=0))}if(!this._initted){if(Od(this,f?i:p,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(y||this._ease)(p/c),this._from&&(this.ratio=T=1-T),p&&!a&&!s&&!v&&(yn(this,"onStart"),this._tTime!==d))return this;for(g=this._pt;g;)g.r(T,g.d),g=g._next;M&&M.render(i<0?i:!p&&m?-ut:M._dur*M._ease(p/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(f&&lc(this,i,s,o),yn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!s&&this.parent&&yn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&lc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ci(this,1),!s&&!(f&&!a)&&(d||a||m)&&(yn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){Ks||hn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Fc(this,l),c=this._ease(l/this._dur),OE(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(So(this,0),this.parent||Dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xi&&xi.vars.overwrite!==!0)._first||Os(this),this.parent&&o!==this.timeline.totalDuration()&&ss(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?En(i):a,c=this._ptLookup,f=this._pt,d,p,g,v,S,_,m;if((!s||s==="all")&&hE(a,l))return s==="all"&&(this._pt=0),Os(this);for(d=this._op=this._op||[],s!=="all"&&(Ot(s)&&(S={},sn(s,function(T){return S[T]=1}),s=S),s=NE(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){p=c[m],s==="all"?(d[m]=s,v=p,g={}):(g=d[m]=d[m]||{},v=s);for(S in v)_=p&&p[S],_&&((!("kill"in _.d)||_.d.kill(S)===!0)&&go(this,_,"_pt"),delete p[S]),g!=="all"&&(g[S]=1)}return this._initted&&!this._pt&&f&&Os(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ks(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ks(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return xt.killTweensOf(i,s,o)},e}(Zs);Tn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(r){wt[r]=function(){var e=new Qt,t=uc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bc=function(e,t,n){return e[t]=n},tp=function(e,t,n){return e[t](n)},BE=function(e,t,n,i){return e[t](i.fp,n)},zE=function(e,t,n){return e.setAttribute(t,n)},zc=function(e,t){return Tt(e[t])?tp:Cc(e[t])&&e.setAttribute?zE:Bc},np=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ip=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},GE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?go(this,t,"_pt"):t.dep||(n=1),t=i;return!n},VE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},an=function(){function r(t,n,i,s,o,a,l,c,f){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||np,this.d=l||this,this.set=c||Bc,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=VE,this.m=n,this.mt=s,this.tween=i},r}();sn(Uc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ic[r]=1});pn.TweenMax=pn.TweenLite=wt;pn.TimelineLite=pn.TimelineMax=Qt;xt=new Qt({sortChildren:!1,defaults:is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=qd;var rr=[],Qa={},WE=[],wh=0,XE=0,Yl=function(e){return(Qa[e]||WE).map(function(t){return t()})},pc=function(){var e=Date.now(),t=[];e-wh>2&&(Yl("matchMediaInit"),rr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Sn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),wh=e,Yl("matchMedia"))},sp=function(){function r(t,n){this.selector=n&&fc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=XE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Tt(n)&&(s=i,i=n,n=Tt);var o=this,a=function(){var c=yt,f=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=fc(s)),yt=o,d=i.apply(o,arguments),Tt(d)&&o._r.push(d),yt=c,o.selector=f,o.isReverted=!1,d};return o.last=a,n===Tt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof wt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=rr.length;a--;)rr[a].id===this.id&&rr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),YE=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){jn(n)||(n={matches:n});var o=new sp(0,s||this.scope),a=o.conditions={},l,c,f;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?f=1:(l=Sn.matchMedia(n[c]),l&&(rr.indexOf(o)<0&&rr.push(o),(a[c]=l.matches)&&(f=1),l.addListener?l.addListener(pc):l.addEventListener("change",pc)));return f&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),co={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Wd(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ot(e)&&(e=En(e)[0]);var s=tr(e||{}).get,o=n?Pd:Ld;return n==="native"&&(n=""),e&&(t?o((un[t]&&un[t].get||s)(e,t,n,i)):function(a,l,c){return o((un[a]&&un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=En(e),e.length>1){var i=e.map(function(f){return on.quickSetter(f,t,n)}),s=i.length;return function(f){for(var d=s;d--;)i[d](f)}}e=e[0]||{};var o=un[t],a=tr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(f){var d=new o;qr._pt=0,d.init(e,n?f+n:f,qr,0,[e]),d.render(1,d),qr._pt&&Hc(1,qr)}:a.set(e,l);return o?c:function(f){return c(e,l,n?f+n:f,a,1)}},quickTo:function(e,t,n){var i,s=on.to(e,lr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,f){return s.resetTo(t,l,c,f)};return o.tween=s,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ir(e.ease,is.ease)),Eh(is,e||{})},config:function(e){return Eh(dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!un[a]&&!pn[a]&&so(t+" effect requires "+a+" plugin.")}),Gl[t]=function(a,l,c){return n(En(a),Tn(l||{},s),c)},o&&(Qt.prototype[t]=function(a,l,c){return this.add(Gl[t](a,jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=ir(t)},parseEase:function(e,t){return arguments.length?ir(e,t):et},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,s;for(n.smoothChildTiming=rn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof wt&&i.vars.onComplete===i._targets[0]))&&kn(n,i,i._start-i._delay),i=s;return kn(xt,n,0),n},context:function(e,t){return e?new sp(e,t):yt},matchMedia:function(e){return new YE(e)},matchMediaRefresh:function(){return rr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pc()},addEventListener:function(e,t){var n=Qa[e]||(Qa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:TE,wrapYoyo:bE,distribute:Bd,random:Hd,snap:zd,normalize:yE,getUnit:Xt,clamp:SE,splitColor:Xd,toArray:En,selector:fc,mapRange:Gd,pipe:ME,unitize:EE,interpolate:AE,shuffle:Fd},install:bd,effects:Gl,ticker:hn,updateRoot:Qt.updateRoot,plugins:un,globalTimeline:xt,core:{PropTween:an,globals:Ad,Tween:wt,Timeline:Qt,Animation:Zs,getCache:tr,_removeLinkedListItem:go,reverting:function(){return Yt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return Rc=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return co[r]=wt[r]});hn.add(Qt.updateRoot);qr=co.to({},{duration:0});var qE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=qE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ql=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ot(s)&&(l={},sn(s,function(f){return l[f]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jE(a,s)}}}},on=co.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ql("roundProps",hc),ql("modifiers"),ql("snap",zd))||co;wt.version=Qt.version=on.version="3.12.2";Td=1;Lc()&&as();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rh,Mi,$r,kc,Zi,Ch,Gc,KE=function(){return typeof window<"u"},ui={},ji=180/Math.PI,Jr=Math.PI/180,Gr=Math.atan2,Lh=1e8,Vc=/([A-Z])/g,ZE=/(left|right|width|margin|padding|x)/i,$E=/[\s,\(]\S/,Vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ey=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},op=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ty=function(e,t,n){return e.style[t]=n},ny=function(e,t,n){return e.style.setProperty(t,n)},iy=function(e,t,n){return e._gsap[t]=n},ry=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},sy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ay=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Mt="transform",Un=Mt+"Origin",oy=function r(e,t){var n=this,i=this.target,s=i.style;if(e in ui&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ai(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ai(i,e);else return Vn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Mt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},lp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ly=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Vc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gc(),(!s||!s.isStart)&&!n[Mt]&&(lp(n),i.uncache=1)}},cp=function(e,t){var n={target:e,props:[],revert:ly,save:oy};return e._gsap||on.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},up,_c=function(e,t){var n=Mi.createElementNS?Mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mi.createElement(e);return n.style?n:Mi.createElement(e)},Yn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Vc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,os(t)||t,1)||""},Ph="O,Moz,ms,Ms,Webkit".split(","),os=function(e,t,n){var i=t||Zi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ph[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ph[o]:"")+e},gc=function(){KE()&&window.document&&(Rh=window,Mi=Rh.document,$r=Mi.documentElement,Zi=_c("div")||{style:{}},_c("div"),Mt=os(Mt),Un=Mt+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",up=!!os("perspective"),Gc=on.core.reverting,kc=1)},jl=function r(e){var t=_c("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if($r.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),$r.removeChild(t),this.style.cssText=s,o},Dh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fp=function(e){var t;try{t=e.getBBox()}catch{t=jl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===jl||(t=jl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Dh(e,["x","cx","x1"])||0,y:+Dh(e,["y","cy","y1"])||0,width:0,height:0}:t},hp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fp(e))},$s=function(e,t){if(t){var n=e.style;t in ui&&t!==Un&&(t=Mt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Vc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ei=function(e,t,n,i,s,o){var a=new an(e._pt,t,n,0,1,o?op:ap);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Ih={deg:1,rad:1,turn:1},cy={grid:1,flex:1},Li=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Zi.style,l=ZE.test(t),c=e.tagName.toLowerCase()==="svg",f=(c?"client":"offset")+(l?"Width":"Height"),d=100,p=i==="px",g=i==="%",v,S,_,m;return i===o||!s||Ih[i]||Ih[o]?s:(o!=="px"&&!p&&(s=r(e,t,n,"px")),m=e.getCTM&&hp(e),(g||o==="%")&&(ui[t]||~t.indexOf("adius"))?(v=m?e.getBBox()[l?"width":"height"]:e[f],bt(g?s/v*d:s/100*v)):(a[l?"width":"height"]=d+(p?o:i),S=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===Mi||!S.appendChild)&&(S=Mi.body),_=S._gsap,_&&g&&_.width&&l&&_.time===hn.time&&!_.uncache?bt(s/_.width*d):((g||o==="%")&&!cy[Yn(S,"display")]&&(a.position=Yn(e,"position")),S===e&&(a.position="static"),S.appendChild(Zi),v=Zi[f],S.removeChild(Zi),a.position="absolute",l&&g&&(_=tr(S),_.time=hn.time,_.width=S[f]),bt(p?v*s/d:v&&s?d/v*s:0))))},ai=function(e,t,n,i){var s;return kc||gc(),t in Vn&&t!=="transform"&&(t=Vn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ui[t]&&t!=="transform"?(s=Qs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fo(Yn(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=uo[t]&&uo[t](e,t,n)||Yn(e,t)||Rd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Li(e,t,s,n)+n:s},uy=function(e,t,n,i){if(!n||n==="none"){var s=os(t,e,1),o=s&&Yn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var a=new an(this._pt,e.style,t,0,1,ip),l=0,c=0,f,d,p,g,v,S,_,m,T,M,y,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Yn(e,t)||i,e.style[t]=n),f=[n,i],qd(f),n=f[0],i=f[1],p=n.match(Yr)||[],A=i.match(Yr)||[],A.length){for(;d=Yr.exec(i);)_=d[0],T=i.substring(l,d.index),v?v=(v+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(v=1),_!==(S=p[c++]||"")&&(g=parseFloat(S)||0,y=S.substr((g+"").length),_.charAt(1)==="="&&(_=Zr(g,_)+y),m=parseFloat(_),M=_.substr((m+"").length),l=Yr.lastIndex-M.length,M||(M=M||dn.units[t]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(g=Li(e,t,S,M)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:g,c:m-g,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?op:ap;return Ed.test(i)&&(a.e=0),this._pt=a,a},Uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Uh[n]||n,t[1]=Uh[i]||i,t.join(" ")},hy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ui[a]&&(l=1,a=a==="transformOrigin"?Un:Mt),$s(n,a);l&&($s(n,Mt),o&&(o.svg&&n.removeAttribute("transform"),Qs(n,1),o.uncache=1,lp(i)))}},uo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new an(e._pt,t,n,0,0,hy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Js=[1,0,0,1,0,0],dp={},pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Oh=function(e){var t=Yn(e,Mt);return pp(t)?Js:t.substr(7).match(Md).map(bt)},Wc=function(e,t){var n=e._gsap||tr(e),i=e.style,s=Oh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Js:s):(s===Js&&!e.offsetParent&&e!==$r&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,$r.appendChild(e)),s=Oh(e),l?i.display=l:$s(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):$r.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Wc(e,!0),c=a.xOrigin||0,f=a.yOrigin||0,d=a.xOffset||0,p=a.yOffset||0,g=l[0],v=l[1],S=l[2],_=l[3],m=l[4],T=l[5],M=t.split(" "),y=parseFloat(M[0])||0,A=parseFloat(M[1])||0,D,w,F,E;n?l!==Js&&(w=g*_-v*S)&&(F=y*(_/w)+A*(-S/w)+(S*T-_*m)/w,E=y*(-v/w)+A*(g/w)-(g*T-v*m)/w,y=F,A=E):(D=fp(e),y=D.x+(~M[0].indexOf("%")?y/100*D.width:y),A=D.y+(~(M[1]||M[0]).indexOf("%")?A/100*D.height:A)),i||i!==!1&&a.smooth?(m=y-c,T=A-f,a.xOffset=d+(m*g+T*S)-m,a.yOffset=p+(m*v+T*_)-T):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Un]="0px 0px",o&&(Ei(o,a,"xOrigin",c,y),Ei(o,a,"yOrigin",f,A),Ei(o,a,"xOffset",d,a.xOffset),Ei(o,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Qs=function(e,t){var n=e._gsap||new $d(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Yn(e,Un)||"0",f,d,p,g,v,S,_,m,T,M,y,A,D,w,F,E,L,ie,q,B,K,X,le,Q,re,oe,ce,$,ee,ve,me,de;return f=d=p=S=_=m=T=M=y=0,g=v=1,n.svg=!!(e.getCTM&&hp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),i.scale=i.rotate=i.translate="none"),w=Wc(e,n.svg),n.svg&&(n.uncache?(re=e.getBBox(),c=n.xOrigin-re.x+"px "+(n.yOrigin-re.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),vc(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,D=n.yOrigin||0,w!==Js&&(ie=w[0],q=w[1],B=w[2],K=w[3],f=X=w[4],d=le=w[5],w.length===6?(g=Math.sqrt(ie*ie+q*q),v=Math.sqrt(K*K+B*B),S=ie||q?Gr(q,ie)*ji:0,T=B||K?Gr(B,K)*ji+S:0,T&&(v*=Math.abs(Math.cos(T*Jr))),n.svg&&(f-=A-(A*ie+D*B),d-=D-(A*q+D*K))):(de=w[6],ve=w[7],ce=w[8],$=w[9],ee=w[10],me=w[11],f=w[12],d=w[13],p=w[14],F=Gr(de,ee),_=F*ji,F&&(E=Math.cos(-F),L=Math.sin(-F),Q=X*E+ce*L,re=le*E+$*L,oe=de*E+ee*L,ce=X*-L+ce*E,$=le*-L+$*E,ee=de*-L+ee*E,me=ve*-L+me*E,X=Q,le=re,de=oe),F=Gr(-B,ee),m=F*ji,F&&(E=Math.cos(-F),L=Math.sin(-F),Q=ie*E-ce*L,re=q*E-$*L,oe=B*E-ee*L,me=K*L+me*E,ie=Q,q=re,B=oe),F=Gr(q,ie),S=F*ji,F&&(E=Math.cos(F),L=Math.sin(F),Q=ie*E+q*L,re=X*E+le*L,q=q*E-ie*L,le=le*E-X*L,ie=Q,X=re),_&&Math.abs(_)+Math.abs(S)>359.9&&(_=S=0,m=180-m),g=bt(Math.sqrt(ie*ie+q*q+B*B)),v=bt(Math.sqrt(le*le+de*de)),F=Gr(X,le),T=Math.abs(F)>2e-4?F*ji:0,y=me?1/(me<0?-me:me):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pp(Yn(e,Mt)),Q&&e.setAttribute("transform",Q))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(g*=-1,T+=S<=0?180:-180,S+=S<=0?180:-180):(v*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=p+o,n.scaleX=bt(g),n.scaleY=bt(v),n.rotation=bt(S)+a,n.rotationX=bt(_)+a,n.rotationY=bt(m)+a,n.skewX=T+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Un]=fo(c)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?py:up?mp:dy,n.uncache=0,n},fo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kl=function(e,t,n){var i=Xt(t);return bt(parseFloat(t)+parseFloat(Li(e,"x",n+"px",i)))+i},dy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mp(e,t)},Xi="0deg",Is="0px",Yi=") ",mp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,f=n.rotationY,d=n.rotationX,p=n.skewX,g=n.skewY,v=n.scaleX,S=n.scaleY,_=n.transformPerspective,m=n.force3D,T=n.target,M=n.zOrigin,y="",A=m==="auto"&&e&&e!==1||m===!0;if(M&&(d!==Xi||f!==Xi)){var D=parseFloat(f)*Jr,w=Math.sin(D),F=Math.cos(D),E;D=parseFloat(d)*Jr,E=Math.cos(D),o=Kl(T,o,w*E*-M),a=Kl(T,a,-Math.sin(D)*-M),l=Kl(T,l,F*E*-M+M)}_!==Is&&(y+="perspective("+_+Yi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(A||o!==Is||a!==Is||l!==Is)&&(y+=l!==Is||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yi),c!==Xi&&(y+="rotate("+c+Yi),f!==Xi&&(y+="rotateY("+f+Yi),d!==Xi&&(y+="rotateX("+d+Yi),(p!==Xi||g!==Xi)&&(y+="skew("+p+", "+g+Yi),(v!==1||S!==1)&&(y+="scale("+v+", "+S+Yi),T.style[Mt]=y||"translate(0, 0)"},py=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,f=n.skewY,d=n.scaleX,p=n.scaleY,g=n.target,v=n.xOrigin,S=n.yOrigin,_=n.xOffset,m=n.yOffset,T=n.forceCSS,M=parseFloat(o),y=parseFloat(a),A,D,w,F,E;l=parseFloat(l),c=parseFloat(c),f=parseFloat(f),f&&(f=parseFloat(f),c+=f,l+=f),l||c?(l*=Jr,c*=Jr,A=Math.cos(l)*d,D=Math.sin(l)*d,w=Math.sin(l-c)*-p,F=Math.cos(l-c)*p,c&&(f*=Jr,E=Math.tan(c-f),E=Math.sqrt(1+E*E),w*=E,F*=E,f&&(E=Math.tan(f),E=Math.sqrt(1+E*E),A*=E,D*=E)),A=bt(A),D=bt(D),w=bt(w),F=bt(F)):(A=d,F=p,D=w=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Li(g,"x",o,"px"),y=Li(g,"y",a,"px")),(v||S||_||m)&&(M=bt(M+v-(v*A+S*w)+_),y=bt(y+S-(v*D+S*F)+m)),(i||s)&&(E=g.getBBox(),M=bt(M+i/100*E.width),y=bt(y+s/100*E.height)),E="matrix("+A+","+D+","+w+","+F+","+M+","+y+")",g.setAttribute("transform",E),T&&(g.style[Mt]=E)},my=function(e,t,n,i,s){var o=360,a=Ot(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ji:1),c=l-i,f=i+c+"deg",d,p;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Lh)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Lh)%o-~~(c/o)*o)),e._pt=p=new an(e._pt,t,n,i,c,JE),p.e=f,p.u="deg",e._props.push(n),p},Nh=function(e,t){for(var n in t)e[n]=t[n];return e},_y=function(e,t,n){var i=Nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,f,d,p,g,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Mt]=t,a=Qs(n,1),$s(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],o[Mt]=t,a=Qs(n,1),o[Mt]=c);for(l in ui)c=i[l],f=a[l],c!==f&&s.indexOf(l)<0&&(g=Xt(c),v=Xt(f),d=g!==v?Li(n,l,c,v):parseFloat(c),p=parseFloat(f),e._pt=new an(e._pt,a,l,d,p-d,mc),e._pt.u=v||0,e._props.push(l));Nh(a,i)};sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});uo[e>1?"border"+r:r]=function(a,l,c,f,d){var p,g;if(arguments.length<4)return p=o.map(function(v){return ai(a,v,c)}),g=p.join(" "),g.split(p[0]).length===5?p[0]:g;p=(f+"").split(" "),g={},o.forEach(function(v,S){return g[v]=p[S]=p[S]||p[(S-1)/2|0]}),a.init(l,g,d)}});var _p={name:"css",register:gc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,f,d,p,g,v,S,_,m,T,M,y,A,D,w,F;kc||gc(),this.styles=this.styles||cp(e),F=this.styles.props,this.tween=n;for(S in t)if(S!=="autoRound"&&(f=t[S],!(un[S]&&Jd(S,t,n,i,e,s)))){if(g=typeof f,v=uo[S],g==="function"&&(f=f.call(n,i,e,s),g=typeof f),g==="string"&&~f.indexOf("random(")&&(f=js(f)),v)v(this,e,S,f,n)&&(w=1);else if(S.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(S)+"").trim(),f+="",wi.lastIndex=0,wi.test(c)||(_=Xt(c),m=Xt(f)),m?_!==m&&(c=Li(e,S,c,m)+m):_&&(f+=_),this.add(a,"setProperty",c,f,i,s,0,0,S),o.push(S),F.push(S,0,a[S]);else if(g!=="undefined"){if(l&&S in l?(c=typeof l[S]=="function"?l[S].call(n,i,e,s):l[S],Ot(c)&&~c.indexOf("random(")&&(c=js(c)),Xt(c+"")||(c+=dn.units[S]||Xt(ai(e,S))||""),(c+"").charAt(1)==="="&&(c=ai(e,S))):c=ai(e,S),p=parseFloat(c),T=g==="string"&&f.charAt(1)==="="&&f.substr(0,2),T&&(f=f.substr(2)),d=parseFloat(f),S in Vn&&(S==="autoAlpha"&&(p===1&&ai(e,"visibility")==="hidden"&&d&&(p=0),F.push("visibility",0,a.visibility),Ei(this,a,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),S!=="scale"&&S!=="transform"&&(S=Vn[S],~S.indexOf(",")&&(S=S.split(",")[0]))),M=S in ui,M){if(this.styles.save(S),y||(A=e._gsap,A.renderTransform&&!t.parseTransform||Qs(e,t.parseTransform),D=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new an(this._pt,a,Mt,0,1,A.renderTransform,A,0,-1),y.dep=1),S==="scale")this._pt=new an(this._pt,A,"scaleY",A.scaleY,(T?Zr(A.scaleY,T+d):d)-A.scaleY||0,mc),this._pt.u=0,o.push("scaleY",S),S+="X";else if(S==="transformOrigin"){F.push(Un,0,a[Un]),f=fy(f),A.svg?vc(e,f,0,D,0,this):(m=parseFloat(f.split(" ")[2])||0,m!==A.zOrigin&&Ei(this,A,"zOrigin",A.zOrigin,m),Ei(this,a,S,fo(c),fo(f)));continue}else if(S==="svgOrigin"){vc(e,f,1,D,0,this);continue}else if(S in dp){my(this,A,S,p,T?Zr(p,T+f):f);continue}else if(S==="smoothOrigin"){Ei(this,A,"smooth",A.smooth,f);continue}else if(S==="force3D"){A[S]=f;continue}else if(S==="transform"){_y(this,f,e);continue}}else S in a||(S=os(S)||S);if(M||(d||d===0)&&(p||p===0)&&!$E.test(f)&&S in a)_=(c+"").substr((p+"").length),d||(d=0),m=Xt(f)||(S in dn.units?dn.units[S]:_),_!==m&&(p=Li(e,S,c,m)),this._pt=new an(this._pt,M?A:a,S,p,(T?Zr(p,T+d):d)-p,!M&&(m==="px"||S==="zIndex")&&t.autoRound!==!1?ey:mc),this._pt.u=m||0,_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=QE);else if(S in a)uy.call(this,e,S,c,T?T+f:f);else if(S in e)this.add(e,S,c||e[S],T?T+f:f,i,s);else if(S!=="parseTransform"){Dc(S,f);continue}M||(S in a?F.push(S,0,a[S]):F.push(S,1,c||e[S])),o.push(S)}}w&&rp(this)},render:function(e,t){if(t.tween._time||!Gc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ai,aliases:Vn,getSetter:function(e,t,n){var i=Vn[t];return i&&i.indexOf(",")<0&&(t=i),t in ui&&t!==Un&&(e._gsap.x||ai(e,"x"))?n&&Ch===n?t==="scale"?ry:iy:(Ch=n||{})&&(t==="scale"?sy:ay):e.style&&!Cc(e.style[t])?ty:~t.indexOf("-")?ny:zc(e,t)},core:{_removeProperty:$s,_getMatrix:Wc}};on.utils.checkPrefix=os;on.core.getStyleSaver=cp;(function(r,e,t,n){var i=sn(r+","+e+","+t,function(s){ui[s]=1});sn(e,function(s){dn.units[s]="deg",dp[s]=1}),Vn[i[13]]=r+","+e,sn(n,function(s){var o=s.split(":");Vn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){dn.units[r]="px"});on.registerPlugin(_p);var eo=on.registerPlugin(_p)||on;eo.core.Tween;class gy{constructor(e){return this.result=new Object,this.result.originalText=e.innerText,this.result.splitted=this.split(e),this.result.words=this.result.splitted.querySelectorAll(".SplitTextJS-wrapper"),this.result.chars=this.result.splitted.querySelectorAll(".SplitTextJS-char"),this.result.spaces=this.result.splitted.querySelectorAll(".SplitTextJS-spacer"),this.result}createSpan(e){let t=document.createElement("span");return t.style.display="inline-block",t.className=e,t}split(e){let t=new Array;const n=e.innerText.split(" ");let i=n.length;return n.map(s=>{const o=this.createSpan("SplitTextJS-wrapper");if(s.split(/(?!^)/).map(a=>{let l=this.createSpan("SplitTextJS-char");l.innerText=a,o.appendChild(l)}),i--,t.push(o),i>0){let a=this.createSpan("SplitTextJS-char SplitTextJS-spacer");a.innerHTML="&nbsp;",t.push(a)}}),e.innerHTML="",t.forEach(s=>{e.appendChild(s)}),e}}var vy=gy;const Fh=Bh(vy);function Sy(){const r=eo.utils.toArray(".hero-text"),e=eo.timeline({repeat:-1,yoyo:!1,delay:1}),t=document.getElementById("alternance"),n=new Fh(t);r.forEach(i=>{const s=new Fh(i);e.from(s.chars,{opacity:0,y:80,rotateX:-90,stagger:.02},"<").to(s.chars,{opacity:1,y:-80,rotateX:90,stagger:.02},"<1")}),eo.from(n.chars,{y:200,delay:3,stagger:{each:.03,from:"center",ease:"ease"}})}nE();new x_("#fullpage",{licenceKey:"OPEN-SOURCE-GPLV3-LICENSE",menu:"#menu",navigationTooltips:["home","about","skills","contact"],anchors:["home","about","skills","contact"],scollingSpeed:600});Sy();
