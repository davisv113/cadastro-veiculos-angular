import{$ as k,$b as Co,Aa as $e,Ab as Et,B as yi,Ba as U,C as re,Ca as K,Cb as Ai,D as Vr,Da as oo,E as Mn,Ea as so,F as Mt,G as Si,Ga as ao,H as qr,Ha as ke,I as Gr,Ia as lo,J as Kr,K as lt,Ka as oe,L as Yr,La as Ii,Lb as Un,M as F,Ma as j,Mb as mo,N as L,Na as It,Nb as Pe,Oa as co,Ob as xi,P as v,Pa as _i,Pb as Di,Q as ct,Qa as Vt,Qb as Hn,R as Zr,Ra as uo,S as N,Sa as pt,Sb as ce,T as Ci,Ta as A,Tb as bo,U as E,Ua as po,Ub as R,V as h,Va as Ln,Vb as vo,W as wi,Wa as ho,Wb as Fe,X as Qr,Xa as se,Xb as yo,Y as De,Yb as Ue,Z as G,Zb as So,_ as ut,_b as Mi,a as g,aa as Me,ab as ae,ac as wo,b as H,ba as Jr,bb as le,bc as M,ca as Le,cb as wt,cc as Eo,d as Hr,da as vt,db as Nn,dc as He,e as jr,ea as yt,eb as $n,ec as Ro,f as mi,fb as fo,fc as To,g as bi,gc as je,h as z,ha as Xr,hb as kn,hc as Io,i as nt,ia as O,ib as ht,ic as _o,j as Dt,ja as to,jb as qt,k as W,ka as Ne,kb as Gt,kc as Oo,l as b,la as eo,lb as Kt,lc as Ao,m as Ae,ma as St,mc as xo,n as Br,na as Ct,nb as Yt,nc as Nt,o as zr,oa as Ei,ob as Zt,oc as Do,p as I,pa as Lt,pb as Oi,pc as jn,q as Dn,qa as Wt,qb as go,qc as Be,r as q,ra as no,rc as Mo,s as xe,sa as Ri,sb as Pn,sc as Lo,t as Wr,ta as io,tb as Fn,u as vi,ua as dt,wa as Ti,x as zt,y as ne,z as ie,za as ro,zb as Y}from"./chunk-DDPP3QMU.js";var $i=class extends wo{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ki=class t extends $i{static makeCurrent(){Co(new t)}onAndCancel(i,e,n){return i.addEventListener(e,n),()=>{i.removeEventListener(e,n)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=$a();return e==null?null:ka(e)}resetBaseElement(){ze=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Io(document.cookie,i)}},ze=null;function $a(){return ze=ze||document.querySelector("base"),ze?ze.getAttribute("href"):null}function ka(t){return new URL(t,document.baseURI).pathname}var Pa=(()=>{class t{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})(),Pi=new N(""),Po=(()=>{class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new L(5101,!1);return this._eventNameToPlugin.set(e,n),n}static{this.\u0275fac=function(n){return new(n||t)(E(Pi),E(Ct))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})(),Bn=class{constructor(i){this._doc=i}},Li="ng-app-id",Fo=(()=>{class t{constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Be(o),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(r=>r.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${Li}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(e,n){let r=this.styleRef;if(r.has(e)){let o=r.get(e);return o.usage+=n,o.usage}return r.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let r=this.styleNodesInDOM,o=r?.get(n);if(o?.parentNode===e)return r.delete(n),o.removeAttribute(Li),o;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=n,this.platformIsServer&&s.setAttribute(Li,this.appId),e.appendChild(s),s}}addStyleToHost(e,n){let r=this.getStyleElement(e,n),o=this.styleRef,s=o.get(n)?.elements;s?s.push(r):o.set(n,{elements:[r],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||t)(E(M),E(Ri),E(Ti,8),E(dt))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})(),Ni={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ui=/%COMP%/g,Uo="%COMP%",Fa=`_nghost-${Uo}`,Ua=`_ngcontent-${Uo}`,Ha=!0,ja=new N("",{providedIn:"root",factory:()=>Ha});function Ba(t){return Ua.replace(Ui,t)}function za(t){return Fa.replace(Ui,t)}function Ho(t,i){return i.map(e=>e.replace(Ui,t))}var No=(()=>{class t{constructor(e,n,r,o,s,l,a,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=l,this.ngZone=a,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=Be(l),this.defaultRenderer=new We(e,s,a,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===De.ShadowDom&&(n=H(g({},n),{encapsulation:De.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof zn?r.applyToHost(e):r instanceof Ve&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,l=this.ngZone,a=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(n.encapsulation){case De.Emulated:o=new zn(a,c,n,this.appId,u,s,l,d);break;case De.ShadowDom:return new Fi(a,c,e,n,s,l,this.nonce,d);default:o=new Ve(a,c,n,u,s,l,d);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||t)(E(Po),E(Fo),E(Ri),E(ja),E(M),E(dt),E(Ct),E(Ti))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})(),We=class{constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(i,e){return e?this.doc.createElementNS(Ni[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){($o(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&($o(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new L(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Ni[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Ni[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&($e.DashCase|$e.Important)?i.style.setProperty(e,n,r&$e.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&$e.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n){if(typeof i=="string"&&(i=Mi().getGlobalEventTarget(this.doc,i),!i))throw new Error(`Unsupported event target ${i} for event ${e}`);return this.eventManager.addEventListener(i,e,this.decoratePreventDefault(n))}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function $o(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Fi=class extends We{constructor(i,e,n,r,o,s,l,a){super(i,o,s,a),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Ho(r.id,r.styles);for(let u of c){let d=document.createElement("style");l&&d.setAttribute("nonce",l),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ve=class extends We{constructor(i,e,n,r,o,s,l,a){super(i,o,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=a?Ho(a,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},zn=class extends Ve{constructor(i,e,n,r,o,s,l,a){let c=r+"-"+n.id;super(i,e,n,o,s,l,a,c),this.contentAttr=Ba(c),this.hostAttr=za(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}},Wa=(()=>{class t extends Bn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}static{this.\u0275fac=function(n){return new(n||t)(E(M))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})(),ko=["alt","control","meta","shift"],Va={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qa={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ga=(()=>{class t extends Bn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r){let o=t.parseEventName(n),s=t.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Mi().onAndCancel(e,o.domEventName,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),s="code."),ko.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,n){let r=Va[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ko.forEach(s=>{if(s!==r){let l=qa[s];l(e)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(n){return new(n||t)(E(M))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})();function _d(t,i){return bo(g({rootComponent:t},Ka(i)))}function Ka(t){return{appProviders:[...Xa,...t?.providers??[]],platformProviders:Ja}}function Ya(){ki.makeCurrent()}function Za(){return new Ei}function Qa(){return no(document),document}var Ja=[{provide:dt,useValue:Do},{provide:io,useValue:Ya,multi:!0},{provide:M,useFactory:Qa,deps:[]}];var Xa=[{provide:Jr,useValue:"root"},{provide:Ei,useFactory:Za,deps:[]},{provide:Pi,useClass:Wa,multi:!0,deps:[M,Ct,dt]},{provide:Pi,useClass:Ga,multi:!0,deps:[M]},No,Fo,Po,{provide:ao,useExisting:No},{provide:Lo,useClass:Pa,deps:[]},[]];var jo=(()=>{class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(n){return new(n||t)(E(M))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var y="primary",an=Symbol("RouteTitle"),Wi=class{constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ge(t){return new Wi(t)}function nl(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(s[0]===":")r[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function il(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Rt(t[e],i[e]))return!1;return!0}function Rt(t,i){let e=t?Vi(t):void 0,n=i?Vi(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Xo(t[r],i[r]))return!1;return!0}function Vi(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Xo(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function ts(t){return t.length>0?t[t.length-1]:null}function Pt(t){return Br(t)?t:mo(t)?W(Promise.resolve(t)):b(t)}var rl={exact:ns,subset:is},es={exact:ol,subset:sl,ignored:()=>!0};function Bo(t,i,e){return rl[e.paths](t.root,i.root,e.matrixParams)&&es[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function ol(t,i){return Rt(t,i)}function ns(t,i,e){if(!Jt(t.segments,i.segments)||!qn(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!ns(t.children[n],i.children[n],e))return!1;return!0}function sl(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Xo(t[e],i[e]))}function is(t,i,e){return rs(t,i,i.segments,e)}function rs(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Jt(r,e)||i.hasChildren()||!qn(r,e,n))}else if(t.segments.length===e.length){if(!Jt(t.segments,e)||!qn(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!is(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Jt(t.segments,r)||!qn(t.segments,r,n)||!t.children[y]?!1:rs(t.children[y],i,o,n)}}function qn(t,i,e){return i.every((n,r)=>es[e](t[r].parameters,n.parameters))}var Ot=class{constructor(i=new C([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ge(this.queryParams),this._queryParamMap}toString(){return cl.serialize(this)}},C=class{constructor(i,e){this.segments=i,this.children=e,this.parent=null,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Gn(this)}},Qt=class{constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ge(this.parameters),this._parameterMap}toString(){return ss(this)}};function al(t,i){return Jt(t,i)&&t.every((e,n)=>Rt(e.parameters,i[n].parameters))}function Jt(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function ll(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===y&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==y&&(e=e.concat(i(r,n)))}),e}var ln=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:()=>new me,providedIn:"root"})}}return t})(),me=class{parse(i){let e=new Gi(i);return new Ot(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${qe(i.root,!0)}`,n=pl(i.queryParams),r=typeof i.fragment=="string"?`#${ul(i.fragment)}`:"";return`${e}${n}${r}`}},cl=new me;function Gn(t){return t.segments.map(i=>ss(i)).join("/")}function qe(t,i){if(!t.hasChildren())return Gn(t);if(i){let e=t.children[y]?qe(t.children[y],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==y&&n.push(`${r}:${qe(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=ll(t,(n,r)=>r===y?[qe(t.children[y],!1)]:[`${r}:${qe(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[y]!=null?`${Gn(t)}/${e[0]}`:`${Gn(t)}/(${e.join("//")})`}}function os(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wn(t){return os(t).replace(/%3B/gi,";")}function ul(t){return encodeURI(t)}function qi(t){return os(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Kn(t){return decodeURIComponent(t)}function zo(t){return Kn(t.replace(/\+/g,"%20"))}function ss(t){return`${qi(t.path)}${dl(t.parameters)}`}function dl(t){return Object.entries(t).map(([i,e])=>`;${qi(i)}=${qi(e)}`).join("")}function pl(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Wn(e)}=${Wn(r)}`).join("&"):`${Wn(e)}=${Wn(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var hl=/^[^\/()?;#]+/;function Hi(t){let i=t.match(hl);return i?i[0]:""}var fl=/^[^\/()?;=#]+/;function gl(t){let i=t.match(fl);return i?i[0]:""}var ml=/^[^=?&#]+/;function bl(t){let i=t.match(ml);return i?i[0]:""}var vl=/^[^&#]+/;function yl(t){let i=t.match(vl);return i?i[0]:""}var Gi=class{constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new C([],{}):new C([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[y]=new C(i,e)),n}parseSegment(){let i=Hi(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new L(4009,!1);return this.capture(i),new Qt(Kn(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=gl(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Hi(this.remaining);r&&(n=r,this.capture(n))}i[Kn(e)]=Kn(n)}parseQueryParam(i){let e=bl(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=yl(this.remaining);s&&(n=s,this.capture(n))}let r=zo(e),o=zo(n);if(i.hasOwnProperty(r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Hi(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new L(4010,!1);let o;n.indexOf(":")>-1?(o=n.slice(0,n.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=y);let s=this.parseChildren();e[o]=Object.keys(s).length===1?s[y]:new C([],s),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new L(4011,!1)}};function as(t){return t.segments.length>0?new C([],{[y]:t}):t}function ls(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=ls(r);if(n===y&&o.segments.length===0&&o.hasChildren())for(let[s,l]of Object.entries(o.children))i[s]=l;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new C(t.segments,i);return Sl(e)}function Sl(t){if(t.numberOfChildren===1&&t.children[y]){let i=t.children[y];return new C(t.segments.concat(i.segments),i.children)}return t}function Xt(t){return t instanceof Ot}function Cl(t,i,e=null,n=null){let r=cs(t);return us(r,i,e,n)}function cs(t){let i;function e(o){let s={};for(let a of o.children){let c=e(a);s[a.outlet]=c}let l=new C(o.url,s);return o===t&&(i=l),l}let n=e(t.root),r=as(n);return i??r}function us(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return ji(r,r,r,e,n);let o=wl(i);if(o.toRoot())return ji(r,r,new C([],{}),e,n);let s=El(o,r,t),l=s.processChildren?Ye(s.segmentGroup,s.index,o.commands):ps(s.segmentGroup,s.index,o.commands);return ji(r,s.segmentGroup,l,e,n)}function Yn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Je(t){return typeof t=="object"&&t!=null&&t.outlets}function ji(t,i,e,n,r){let o={};n&&Object.entries(n).forEach(([a,c])=>{o[a]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;t===i?s=e:s=ds(t,i,e);let l=as(ls(s));return new Ot(l,o,r)}function ds(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=ds(o,i,e)}),new C(t.segments,n)}var Zn=class{constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Yn(n[0]))throw new L(4003,!1);let r=n.find(Je);if(r&&r!==ts(n))throw new L(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function wl(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Zn(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([a,c])=>{l[a]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((l,a)=>{a==0&&l==="."||(a==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,o]},[]);return new Zn(e,i,n)}var pe=class{constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function El(t,i,e){if(t.isAbsolute)return new pe(i,!0,0);if(!e)return new pe(i,!1,NaN);if(e.parent===null)return new pe(e,!0,0);let n=Yn(t.commands[0])?0:1,r=e.segments.length-1+n;return Rl(e,r,t.numberOfDoubleDots)}function Rl(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new L(4005,!1);r=n.segments.length}return new pe(n,!1,r-o)}function Tl(t){return Je(t[0])?t[0].outlets:{[y]:t}}function ps(t,i,e){if(t??=new C([],{}),t.segments.length===0&&t.hasChildren())return Ye(t,i,e);let n=Il(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new C(t.segments.slice(0,n.pathIndex),{});return o.children[y]=new C(t.segments.slice(n.pathIndex),t.children),Ye(o,0,r)}else return n.match&&r.length===0?new C(t.segments,{}):n.match&&!t.hasChildren()?Ki(t,i,e):n.match?Ye(t,0,r):Ki(t,i,e)}function Ye(t,i,e){if(e.length===0)return new C(t.segments,{});{let n=Tl(e),r={};if(Object.keys(n).some(o=>o!==y)&&t.children[y]&&t.numberOfChildren===1&&t.children[y].segments.length===0){let o=Ye(t.children[y],i,e);return new C(t.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=ps(t.children[o],i,s))}),Object.entries(t.children).forEach(([o,s])=>{n[o]===void 0&&(r[o]=s)}),new C(t.segments,r)}}function Il(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let s=t.segments[r],l=e[n];if(Je(l))break;let a=`${l}`,c=n<e.length-1?e[n+1]:null;if(r>0&&a===void 0)break;if(a&&c&&typeof c=="object"&&c.outlets===void 0){if(!Vo(a,c,s))return o;n+=2}else{if(!Vo(a,{},s))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Ki(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Je(o)){let a=_l(o.outlets);return new C(n,a)}if(r===0&&Yn(e[0])){let a=t.segments[i];n.push(new Qt(a.path,Wo(e[0]))),r++;continue}let s=Je(o)?o.outlets[y]:`${o}`,l=r<e.length-1?e[r+1]:null;s&&l&&Yn(l)?(n.push(new Qt(s,Wo(l))),r+=2):(n.push(new Qt(s,{})),r++)}return new C(n,{})}function _l(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Ki(new C([],{}),0,n))}),i}function Wo(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Vo(t,i,e){return t==e.path&&Rt(i,e.parameters)}var Ze="imperative",$=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}($||{}),rt=class{constructor(i,e){this.id=i,this.url=e}},be=class extends rt{constructor(i,e,n="imperative",r=null){super(i,e),this.type=$.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},gt=class extends rt{constructor(i,e,n){super(i,e),this.urlAfterRedirects=n,this.type=$.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Q=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(Q||{}),Qn=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Qn||{}),_t=class extends rt{constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r,this.type=$.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},$t=class extends rt{constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r,this.type=$.NavigationSkipped}},Xe=class extends rt{constructor(i,e,n,r){super(i,e),this.error=n,this.target=r,this.type=$.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Jn=class extends rt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=$.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yi=class extends rt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=$.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zi=class extends rt{constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o,this.type=$.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Qi=class extends rt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=$.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ji=class extends rt{constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r,this.type=$.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xi=class{constructor(i){this.route=i,this.type=$.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},tr=class{constructor(i){this.route=i,this.type=$.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},er=class{constructor(i){this.snapshot=i,this.type=$.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nr=class{constructor(i){this.snapshot=i,this.type=$.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ir=class{constructor(i){this.snapshot=i,this.type=$.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rr=class{constructor(i){this.snapshot=i,this.type=$.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xn=class{constructor(i,e,n){this.routerEvent=i,this.position=e,this.anchor=n,this.type=$.Scroll}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},tn=class{},ve=class{constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Ol(t,i){return t.providers&&!t._injector&&(t._injector=_i(t.providers,i,`Route: ${t.path}`)),t._injector??i}function ft(t){return t.outlet||y}function Al(t,i){let e=t.filter(n=>ft(n)===i);return e.push(...t.filter(n=>ft(n)!==i)),e}function cn(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var or=class{get injector(){return cn(this.route?.snapshot)??this.rootInjector}set injector(i){}constructor(i){this.rootInjector=i,this.outlet=null,this.route=null,this.children=new un(this.rootInjector),this.attachRef=null}},un=(()=>{class t{constructor(e){this.rootInjector=e,this.contexts=new Map}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new or(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static{this.\u0275fac=function(n){return new(n||t)(E(Le))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ti=class{constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=sr(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=sr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ar(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ar(i,this._root).map(e=>e.value)}};function sr(t,i){if(t===i.value)return i;for(let e of i.children){let n=sr(t,e);if(n)return n}return null}function ar(t,i){if(t===i.value)return[i];for(let e of i.children){let n=ar(t,e);if(n.length)return n.unshift(i),n}return[]}var Z=class{constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function de(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var ei=class extends ti{constructor(i,e){super(i),this.snapshot=e,mr(this,i)}toString(){return this.snapshot.toString()}};function hs(t){let i=xl(t),e=new nt([new Qt("",{})]),n=new nt({}),r=new nt({}),o=new nt({}),s=new nt(""),l=new kt(e,n,o,s,r,y,t,i.root);return l.snapshot=i.root,new ei(new Z(l,[]),i)}function xl(t){let i={},e={},n={},r="",o=new he([],i,n,r,e,y,t,null,{});return new ii("",new Z(o,[]))}var kt=class{constructor(i,e,n,r,o,s,l,a){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=l,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(I(c=>c[an]))??b(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(I(i=>ge(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(I(i=>ge(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ni(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:g(g({},i.params),t.params),data:g(g({},i.data),t.data),resolve:g(g(g(g({},t.data),i.data),r?.data),t._resolvedData)}:n={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},r&&gs(r)&&(n.resolve[an]=r.title),n}var he=class{get title(){return this.data?.[an]}constructor(i,e,n,r,o,s,l,a,c){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=s,this.component=l,this.routeConfig=a,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ge(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ge(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},ii=class extends ti{constructor(i,e){super(e),this.url=i,mr(this,e)}toString(){return fs(this._root)}};function mr(t,i){i.value._routerState=t,i.children.forEach(e=>mr(t,e))}function fs(t){let i=t.children.length>0?` { ${t.children.map(fs).join(", ")} } `:"";return`${t.value}${i}`}function Bi(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Rt(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Rt(i.params,e.params)||t.paramsSubject.next(e.params),il(i.url,e.url)||t.urlSubject.next(e.url),Rt(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function lr(t,i){let e=Rt(t.params,i.params)&&al(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||lr(t.parent,i.parent))}function gs(t){return typeof t.title=="string"||t.title===null}var Dl=(()=>{class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=y,this.activateEvents=new St,this.deactivateEvents=new St,this.attachEvents=new St,this.detachEvents=new St,this.parentContexts=h(un),this.location=h(lo),this.changeDetector=h(ce),this.inputBinder=h(ai,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new L(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new L(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new L(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new L(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,a=new cr(e,l,r.injector);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=k({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[yt]})}}return t})(),cr=class t{__ngOutletInjector(i){return new t(this.route,this.childContexts,i)}constructor(i,e,n){this.route=i,this.childContexts=e,this.parent=n}get(i,e){return i===kt?this.route:i===un?this.childContexts:this.parent.get(i,e)}},ai=new N(""),qo=(()=>{class t{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Dn([n.queryParams,n.params,n.data]).pipe(lt(([o,s,l],a)=>(l=g(g(g({},o),s),l),a===0?b(l):Promise.resolve(l)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let s=So(n.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:l}of s.inputs)e.activatedComponentRef.setInput(l,o[l])});this.outletDataSubscriptions.set(e,r)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})();function Ml(t,i,e){let n=en(t,i._root,e?e._root:void 0);return new ei(n,i)}function en(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=Ll(t,i,e);return new Z(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(l=>en(t,l)),s}}let n=Nl(i.value),r=i.children.map(o=>en(t,o));return new Z(n,r)}}function Ll(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return en(t,n,r);return en(t,n)})}function Nl(t){return new kt(new nt(t.url),new nt(t.params),new nt(t.queryParams),new nt(t.fragment),new nt(t.data),t.outlet,t.component,t)}var nn=class{constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ms="ngNavigationCancelingError";function ri(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=Xt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=bs(!1,Q.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function bs(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ms]=!0,e.cancellationCode=i,e}function $l(t){return vs(t)&&Xt(t.url)}function vs(t){return!!t&&t[ms]}var kl=(t,i,e,n)=>I(r=>(new ur(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),ur=class{constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Bi(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=de(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],n),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=de(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=de(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=de(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new rr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new nr(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(Bi(r),r===o)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),Bi(l.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,n)}},oi=class{constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},fe=class{constructor(i,e){this.component=i,this.route=e}};function Pl(t,i,e){let n=t._root,r=i?i._root:null;return Ge(n,r,e,[n.value])}function Fl(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Se(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Zr(t)?t:i.get(t):n}function Ge(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=de(i);return t.children.forEach(s=>{Ul(s,o[s.value.outlet],e,n.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,l])=>Qe(l,e.getContext(s),r)),r}function Ul(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=i?i.value:null,l=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=Hl(s,o,o.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new oi(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ge(t,i,l?l.children:null,n,r):Ge(t,i,e,n,r),a&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new fe(l.outlet.component,s))}else s&&Qe(i,l,r),r.canActivateChecks.push(new oi(n)),o.component?Ge(t,null,l?l.children:null,n,r):Ge(t,null,e,n,r);return r}function Hl(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!Jt(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Jt(t.url,i.url)||!Rt(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!lr(t,i)||!Rt(t.queryParams,i.queryParams);case"paramsChange":default:return!lr(t,i)}}function Qe(t,i,e){let n=de(t),r=t.value;Object.entries(n).forEach(([o,s])=>{r.component?i?Qe(s,i.children.getContext(o),e):Qe(s,null,e):Qe(s,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new fe(i.outlet.component,r)):e.canDeactivateChecks.push(new fe(null,r)):e.canDeactivateChecks.push(new fe(null,r))}function dn(t){return typeof t=="function"}function jl(t){return typeof t=="boolean"}function Bl(t){return t&&dn(t.canLoad)}function zl(t){return t&&dn(t.canActivate)}function Wl(t){return t&&dn(t.canActivateChild)}function Vl(t){return t&&dn(t.canDeactivate)}function ql(t){return t&&dn(t.canMatch)}function ys(t){return t instanceof zr||t?.name==="EmptyError"}var Vn=Symbol("INITIAL_VALUE");function ye(){return lt(t=>Dn(t.map(i=>i.pipe(re(1),Kr(Vn)))).pipe(I(i=>{for(let e of i)if(e!==!0){if(e===Vn)return Vn;if(e===!1||Gl(e))return e}return!0}),zt(i=>i!==Vn),re(1)))}function Gl(t){return Xt(t)||t instanceof nn}function Kl(t,i){return q(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=e;return s.length===0&&o.length===0?b(H(g({},e),{guardsResult:!0})):Yl(s,n,r,t).pipe(q(l=>l&&jl(l)?Zl(n,o,t,i):b(l)),I(l=>H(g({},e),{guardsResult:l})))})}function Yl(t,i,e,n){return W(t).pipe(q(r=>ec(r.component,r.route,e,i,n)),Mt(r=>r!==!0,!0))}function Zl(t,i,e,n){return W(i).pipe(ie(r=>Wr(Jl(r.route.parent,n),Ql(r.route,n),tc(t,r.path,e),Xl(t,r.route,e))),Mt(r=>r!==!0,!0))}function Ql(t,i){return t!==null&&i&&i(new ir(t)),b(!0)}function Jl(t,i){return t!==null&&i&&i(new er(t)),b(!0)}function Xl(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return b(!0);let r=n.map(o=>vi(()=>{let s=cn(i)??e,l=Se(o,s),a=zl(l)?l.canActivate(i,t):vt(s,()=>l(i,t));return Pt(a).pipe(Mt())}));return b(r).pipe(ye())}function tc(t,i,e){let n=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(s=>Fl(s)).filter(s=>s!==null).map(s=>vi(()=>{let l=s.guards.map(a=>{let c=cn(s.node)??e,u=Se(a,c),d=Wl(u)?u.canActivateChild(n,t):vt(c,()=>u(n,t));return Pt(d).pipe(Mt())});return b(l).pipe(ye())}));return b(o).pipe(ye())}function ec(t,i,e,n,r){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return b(!0);let s=o.map(l=>{let a=cn(i)??r,c=Se(l,a),u=Vl(c)?c.canDeactivate(t,i,e,n):vt(a,()=>c(t,i,e,n));return Pt(u).pipe(Mt())});return b(s).pipe(ye())}function nc(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return b(!0);let o=r.map(s=>{let l=Se(s,t),a=Bl(l)?l.canLoad(i,e):vt(t,()=>l(i,e));return Pt(a)});return b(o).pipe(ye(),Ss(n))}function Ss(t){return jr(F(i=>{if(typeof i!="boolean")throw ri(t,i)}),I(i=>i===!0))}function ic(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return b(!0);let o=r.map(s=>{let l=Se(s,t),a=ql(l)?l.canMatch(i,e):vt(t,()=>l(i,e));return Pt(a)});return b(o).pipe(ye(),Ss(n))}var rn=class{constructor(i){this.segmentGroup=i||null}},on=class extends Error{constructor(i){super(),this.urlTree=i}};function ue(t){return Ae(new rn(t))}function rc(t){return Ae(new L(4e3,!1))}function oc(t){return Ae(bs(!1,Q.GuardRejected))}var dr=class{constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return b(n);if(r.numberOfChildren>1||!r.children[y])return rc(`${i.redirectTo}`);r=r.children[y]}}applyRedirectCommands(i,e,n,r,o){if(typeof e!="string"){let l=e,{queryParams:a,fragment:c,routeConfig:u,url:d,outlet:p,params:f,data:m,title:S}=r,w=vt(o,()=>l({params:f,data:m,queryParams:a,fragment:c,routeConfig:u,url:d,outlet:p,title:S}));if(w instanceof Ot)throw new on(w);e=w}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),i,n);if(e[0]==="/")throw new on(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Ot(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);n[r]=e[l]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),s={};return Object.entries(e.children).forEach(([l,a])=>{s[l]=this.createSegmentGroup(i,a,n,r)}),new C(o,s)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new L(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}},pr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function sc(t,i,e,n,r){let o=Cs(t,i,e);return o.matched?(n=Ol(i,n),ic(n,i,e,r).pipe(I(s=>s===!0?o:g({},pr)))):b(o)}function Cs(t,i,e){if(i.path==="**")return ac(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?g({},pr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||nl)(e,t,i);if(!r)return g({},pr);let o={};Object.entries(r.posParams??{}).forEach(([l,a])=>{o[l]=a.path});let s=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function ac(t){return{matched:!0,parameters:t.length>0?ts(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function Go(t,i,e,n){return e.length>0&&uc(t,e,n)?{segmentGroup:new C(i,cc(n,new C(e,t.children))),slicedSegments:[]}:e.length===0&&dc(t,e,n)?{segmentGroup:new C(t.segments,lc(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new C(t.segments,t.children),slicedSegments:e}}function lc(t,i,e,n){let r={};for(let o of e)if(li(t,i,o)&&!n[ft(o)]){let s=new C([],{});r[ft(o)]=s}return g(g({},n),r)}function cc(t,i){let e={};e[y]=i;for(let n of t)if(n.path===""&&ft(n)!==y){let r=new C([],{});e[ft(n)]=r}return e}function uc(t,i,e){return e.some(n=>li(t,i,n)&&ft(n)!==y)}function dc(t,i,e){return e.some(n=>li(t,i,n))}function li(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pc(t,i,e){return i.length===0&&!t.children[e]}var hr=class{};function hc(t,i,e,n,r,o,s="emptyOnly"){return new fr(t,i,e,n,r,s,o).recognize()}var fc=31,fr=class{constructor(i,e,n,r,o,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=l,this.applyRedirects=new dr(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(i){return new L(4002,`'${i.segmentGroup}'`)}recognize(){let i=Go(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(I(({children:e,rootSnapshot:n})=>{let r=new Z(n,e),o=new ii("",r),s=Cl(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(i){let e=new he([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),y,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,y,e).pipe(I(n=>({children:n,rootSnapshot:e})),ne(n=>{if(n instanceof on)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof rn?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,o){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,o):this.processSegment(i,e,n,n.segments,r,!0,o).pipe(I(s=>s instanceof Z?[s]:[]))}processChildren(i,e,n,r){let o=[];for(let s of Object.keys(n.children))s==="primary"?o.unshift(s):o.push(s);return W(o).pipe(ie(s=>{let l=n.children[s],a=Al(e,s);return this.processSegmentGroup(i,a,l,s,r)}),Gr((s,l)=>(s.push(...l),s)),yi(null),qr(),q(s=>{if(s===null)return ue(n);let l=ws(s);return gc(l),b(l)}))}processSegment(i,e,n,r,o,s,l){return W(e).pipe(ie(a=>this.processSegmentAgainstRoute(a._injector??i,e,a,n,r,o,s,l).pipe(ne(c=>{if(c instanceof rn)return b(null);throw c}))),Mt(a=>!!a),ne(a=>{if(ys(a))return pc(n,r,o)?b(new hr):ue(n);throw a}))}processSegmentAgainstRoute(i,e,n,r,o,s,l,a){return ft(n)!==s&&(s===y||!li(r,o,n))?ue(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,o,s,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,s,a):ue(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,s,l){let{matched:a,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:p}=Cs(e,r,o);if(!a)return ue(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>fc&&(this.allowRedirects=!1));let f=new he(o,c,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Ko(r),ft(r),r.component??r._loadedComponent??null,r,Yo(r)),m=ni(f,l,this.paramsInheritanceStrategy);f.params=Object.freeze(m.params),f.data=Object.freeze(m.data);let S=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,f,i);return this.applyRedirects.lineralizeSegments(r,S).pipe(q(w=>this.processSegment(i,n,e,w.concat(p),s,!1,l)))}matchSegmentAgainstRoute(i,e,n,r,o,s){let l=sc(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),l.pipe(lt(a=>a.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(lt(({routes:c})=>{let u=n._loadedInjector??i,{parameters:d,consumedSegments:p,remainingSegments:f}=a,m=new he(p,d,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Ko(n),ft(n),n.component??n._loadedComponent??null,n,Yo(n)),S=ni(m,s,this.paramsInheritanceStrategy);m.params=Object.freeze(S.params),m.data=Object.freeze(S.data);let{segmentGroup:w,slicedSegments:x}=Go(e,p,f,c);if(x.length===0&&w.hasChildren())return this.processChildren(u,c,w,m).pipe(I(et=>new Z(m,et)));if(c.length===0&&x.length===0)return b(new Z(m,[]));let D=ft(n)===o;return this.processSegment(u,c,w,x,D?y:o,!0,m).pipe(I(et=>new Z(m,et instanceof Z?[et]:[])))}))):ue(e)))}getChildConfig(i,e,n){return e.children?b({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?b({routes:e._loadedRoutes,injector:e._loadedInjector}):nc(i,e,n,this.urlSerializer).pipe(q(r=>r?this.configLoader.loadChildren(i,e).pipe(F(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):oc(e))):b({routes:[],injector:i})}};function gc(t){t.sort((i,e)=>i.value.outlet===y?-1:e.value.outlet===y?1:i.value.outlet.localeCompare(e.value.outlet))}function mc(t){let i=t.value.routeConfig;return i&&i.path===""}function ws(t){let i=[],e=new Set;for(let n of t){if(!mc(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=ws(n.children);i.push(new Z(n.value,r))}return i.filter(n=>!e.has(n))}function Ko(t){return t.data||{}}function Yo(t){return t.resolve||{}}function bc(t,i,e,n,r,o){return q(s=>hc(t,i,e,n,s.extractedUrl,r,o).pipe(I(({state:l,tree:a})=>H(g({},s),{targetSnapshot:l,urlAfterRedirects:a}))))}function vc(t,i){return q(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return b(e);let o=new Set(r.map(a=>a.route)),s=new Set;for(let a of o)if(!s.has(a))for(let c of Es(a))s.add(c);let l=0;return W(s).pipe(ie(a=>o.has(a)?yc(a,n,t,i):(a.data=ni(a,a.parent,t).resolve,b(void 0))),F(()=>l++),Si(1),q(a=>l===s.size?b(e):Dt))})}function Es(t){let i=t.children.map(e=>Es(e)).flat();return[t,...i]}function yc(t,i,e,n){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!gs(r)&&(o[an]=r.title),Sc(o,t,i,n).pipe(I(s=>(t._resolvedData=s,t.data=ni(t,t.parent,e).resolve,null)))}function Sc(t,i,e,n){let r=Vi(t);if(r.length===0)return b({});let o={};return W(r).pipe(q(s=>Cc(t[s],i,e,n).pipe(Mt(),F(l=>{if(l instanceof nn)throw ri(new me,l);o[s]=l}))),Si(1),Vr(o),ne(s=>ys(s)?Dt:Ae(s)))}function Cc(t,i,e,n){let r=cn(i)??n,o=Se(t,r),s=o.resolve?o.resolve(i,e):vt(r,()=>o(i,e));return Pt(s)}function zi(t){return lt(i=>{let e=t(i);return e?W(e).pipe(I(()=>i)):b(i)})}var Rs=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===y);return n}getResolvedTitleForRoute(e){return e.data[an]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:()=>h(wc),providedIn:"root"})}}return t})(),wc=(()=>{class t extends Rs{constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static{this.\u0275fac=function(n){return new(n||t)(E(jo))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),pn=new N("",{providedIn:"root",factory:()=>({})}),Ec=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=G({type:t,selectors:[["ng-component"]],standalone:!0,features:[Et],decls:1,vars:0,template:function(n,r){n&1&&wt(0,"router-outlet")},dependencies:[Dl],encapsulation:2})}}return t})();function br(t){let i=t.children&&t.children.map(br),e=i?H(g({},t),{children:i}):g({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==y&&(e.component=Ec),e}var sn=new N(""),vr=(()=>{class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=h(Hn)}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return b(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=Pt(e.loadComponent()).pipe(I(Ts),F(o=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=o}),Mn(()=>{this.componentLoaders.delete(e)})),r=new bi(n,()=>new z).pipe(mi());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return b({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=Rc(n,this.compiler,e,this.onLoadEndListener).pipe(Mn(()=>{this.childrenLoaders.delete(n)})),s=new bi(o,()=>new z).pipe(mi());return this.childrenLoaders.set(n,s),s}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Rc(t,i,e,n){return Pt(t.loadChildren()).pipe(I(Ts),q(r=>r instanceof co||Array.isArray(r)?b(r):W(i.compileModuleAsync(r))),I(r=>{n&&n(t);let o,s,l=!1;return Array.isArray(r)?(s=r,l=!0):(o=r.create(e).injector,s=o.get(sn,[],{optional:!0,self:!0}).flat()),{routes:s.map(br),injector:o}}))}function Tc(t){return t&&typeof t=="object"&&"default"in t}function Ts(t){return Tc(t)?t.default:t}var yr=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:()=>h(Ic),providedIn:"root"})}}return t})(),Ic=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Is=new N(""),_s=new N("");function _c(t,i,e){let n=t.get(_s),r=t.get(M);return t.get(Ct).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),l=r.startViewTransition(()=>(o(),Oc(t))),{onViewTransitionCreated:a}=n;return a&&vt(t,()=>a({transition:l,from:i,to:e})),s})}function Oc(t){return new Promise(i=>{uo({read:()=>setTimeout(i)},{injector:t})})}var Ac=new N(""),Sr=(()=>{class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new z,this.transitionAbortSubject=new z,this.configLoader=h(vr),this.environmentInjector=h(Le),this.urlSerializer=h(ln),this.rootContexts=h(un),this.location=h(je),this.inputBindingEnabled=h(ai,{optional:!0})!==null,this.titleStrategy=h(Rs),this.options=h(pn,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=h(yr),this.createViewTransition=h(Is,{optional:!0}),this.navigationErrorHandler=h(Ac,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>b(void 0),this.rootComponentType=null;let e=r=>this.events.next(new Xi(r)),n=r=>this.events.next(new tr(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(H(g(g({},this.transitions.value),e),{id:n}))}setupNavigations(e,n,r){return this.transitions=new nt({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Ze,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(zt(o=>o.id!==0),I(o=>H(g({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),lt(o=>{let s=!1,l=!1;return b(o).pipe(lt(a=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Q.SupersededByNewNavigation),Dt;this.currentTransition=o,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?H(g({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload"){let d="";return this.events.next(new $t(a.id,this.urlSerializer.serialize(a.rawUrl),d,Qn.IgnoredSameUrlNavigation)),a.resolve(!1),Dt}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return b(a).pipe(lt(d=>{let p=this.transitions?.getValue();return this.events.next(new be(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),p!==this.transitions?.getValue()?Dt:Promise.resolve(d)}),bc(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),F(d=>{o.targetSnapshot=d.targetSnapshot,o.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=H(g({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let p=new Jn(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(p)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:p,source:f,restoredState:m,extras:S}=a,w=new be(d,this.urlSerializer.serialize(p),f,m);this.events.next(w);let x=hs(this.rootComponentType).snapshot;return this.currentTransition=o=H(g({},a),{targetSnapshot:x,urlAfterRedirects:p,extras:H(g({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=p,b(o)}else{let d="";return this.events.next(new $t(a.id,this.urlSerializer.serialize(a.extractedUrl),d,Qn.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Dt}}),F(a=>{let c=new Yi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),I(a=>(this.currentTransition=o=H(g({},a),{guards:Pl(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),o)),Kl(this.environmentInjector,a=>this.events.next(a)),F(a=>{if(o.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw ri(this.urlSerializer,a.guardsResult);let c=new Zi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(c)}),zt(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",Q.GuardRejected),!1)),zi(a=>{if(a.guards.canActivateChecks.length)return b(a).pipe(F(c=>{let u=new Qi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),lt(c=>{let u=!1;return b(c).pipe(vc(this.paramsInheritanceStrategy,this.environmentInjector),F({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",Q.NoDataFromResolver)}}))}),F(c=>{let u=new Ji(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),zi(a=>{let c=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(F(p=>{u.component=p}),I(()=>{})));for(let p of u.children)d.push(...c(p));return d};return Dn(c(a.targetSnapshot.root)).pipe(yi(null),re(1))}),zi(()=>this.afterPreactivation()),lt(()=>{let{currentSnapshot:a,targetSnapshot:c}=o,u=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return u?W(u).pipe(I(()=>o)):b(o)}),I(a=>{let c=Ml(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=o=H(g({},a),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,o}),F(()=>{this.events.next(new tn)}),kl(this.rootContexts,e.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),re(1),F({next:a=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new gt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{s=!0}}),Yr(this.transitionAbortSubject.pipe(F(a=>{throw a}))),Mn(()=>{!s&&!l&&this.cancelNavigationTransition(o,"",Q.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),ne(a=>{if(l=!0,vs(a))this.events.next(new _t(o.id,this.urlSerializer.serialize(o.extractedUrl),a.message,a.cancellationCode)),$l(a)?this.events.next(new ve(a.url,a.navigationBehaviorOptions)):o.resolve(!1);else{let c=new Xe(o.id,this.urlSerializer.serialize(o.extractedUrl),a,o.targetSnapshot??void 0);try{let u=vt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof nn){let{message:d,cancellationCode:p}=ri(this.urlSerializer,u);this.events.next(new _t(o.id,this.urlSerializer.serialize(o.extractedUrl),d,p)),this.events.next(new ve(u.redirectTo,u.navigationBehaviorOptions))}else{this.events.next(c);let d=e.errorHandler(a);o.resolve(!!d)}}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return Dt}))}))}cancelNavigationTransition(e,n,r){let o=new _t(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function xc(t){return t!==Ze}var Dc=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:()=>h(Mc),providedIn:"root"})}}return t})(),gr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},Mc=(()=>{class t extends gr{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})()}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Os=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:()=>h(Lc),providedIn:"root"})}}return t})(),Lc=(()=>{class t extends Os{constructor(){super(...arguments),this.location=h(je),this.urlSerializer=h(ln),this.options=h(pn,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=h(yr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ot,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=hs(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&e(n.url,n.state)})}handleRouterEvent(e,n){if(e instanceof be)this.stateMemento=this.createStateMemento();else if(e instanceof $t)this.rawUrlTree=n.initialUrl;else if(e instanceof Jn){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??r,n)}}else e instanceof tn?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):e instanceof _t&&(e.code===Q.GuardRejected||e.code===Q.NoDataFromResolver)?this.restoreHistory(n):e instanceof Xe?this.restoreHistory(n,!0):e instanceof gt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let r=e instanceof Ot?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let o=this.browserPageId,s=g(g({},n.extras.state),this.generateNgRouterState(n.id,o));this.location.replaceState(r,"",s)}else{let o=g(g({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===e.finalUrl&&o===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})()}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ke=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(Ke||{});function As(t,i){t.events.pipe(zt(e=>e instanceof gt||e instanceof _t||e instanceof Xe||e instanceof $t),I(e=>e instanceof gt||e instanceof $t?Ke.COMPLETE:(e instanceof _t?e.code===Q.Redirect||e.code===Q.SupersededByNewNavigation:!1)?Ke.REDIRECTING:Ke.FAILED),zt(e=>e!==Ke.REDIRECTING),re(1)).subscribe(()=>{i()})}function Nc(t){throw t}var $c={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},kc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Tt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=h(Un),this.stateManager=h(Os),this.options=h(pn,{optional:!0})||{},this.pendingTasks=h(eo),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=h(Sr),this.urlSerializer=h(ln),this.location=h(je),this.urlHandlingStrategy=h(yr),this._events=new z,this.errorHandler=this.options.errorHandler||Nc,this.navigated=!1,this.routeReuseStrategy=h(Dc),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=h(sn,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!h(ai,{optional:!0}),this.eventsSubscription=new Hr,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof _t&&n.code!==Q.Redirect&&n.code!==Q.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof gt)this.navigated=!0;else if(n instanceof ve){let s=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),a=g({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||xc(r.source)},s);this.scheduleNavigation(l,Ze,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Fc(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ze,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",n)},0)})}navigateToSyncWithBrowser(e,n,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let a=g({},r);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(o.state=a)}let l=this.parseUrl(e);this.scheduleNavigation(l,n,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(br),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:l,preserveFragment:a}=n,c=a?this.currentUrlTree.fragment:s,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let p=r?r.snapshot:this.routerState.snapshot.root;d=cs(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),d=this.currentUrlTree.root}return us(d,e,u,c??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Xt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ze,null,n)}navigate(e,n={skipLocationChange:!1}){return Pc(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=g({},$c):n===!1?r=g({},kc):r=n,Xt(e))return Bo(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Bo(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,s){if(this.disposed)return Promise.resolve(!1);let l,a,c;s?(l=s.resolve,a=s.reject,c=s.promise):c=new Promise((d,p)=>{l=d,a=p});let u=this.pendingTasks.add();return As(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Pc(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new L(4008,!1)}function Fc(t){return!(t instanceof tn)&&!(t instanceof ve)}var Zo=(()=>{class t{constructor(e,n,r,o,s,l){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=l,this.href=null,this.onChanges=new z,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1,this.routerLinkInput=null;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a==="a"||a==="area",this.isAnchorElement?this.subscription=e.events.subscribe(c=>{c instanceof gt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Xt(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,s){let l=this.urlTree;if(l===null||this.isAnchorElement&&(e!==0||n||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let a={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,a),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:ro(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}get urlTree(){return this.routerLinkInput===null?null:Xt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static{this.\u0275fac=function(n){return new(n||t)(K(Tt),K(kt),to("tabindex"),K(ke),K(Wt),K(He))}}static{this.\u0275dir=k({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&kn("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&pt("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",R],skipLocationChange:[2,"skipLocationChange","skipLocationChange",R],replaceUrl:[2,"replaceUrl","replaceUrl",R],routerLink:"routerLink"},standalone:!0,features:[It,yt]})}}return t})(),qd=(()=>{class t{get isActive(){return this._isActive}constructor(e,n,r,o,s){this.router=e,this.element=n,this.renderer=r,this.cdr=o,this.link=s,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new St,this.routerEventsSubscription=e.events.subscribe(l=>{l instanceof gt&&this.update()})}ngAfterContentInit(){b(this.links.changes,b(null)).pipe(xe()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=W(e).pipe(xe()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Uc(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let o=r.urlTree;return o?e.isActive(o,n):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static{this.\u0275fac=function(n){return new(n||t)(K(Tt),K(Wt),K(ke),K(ce),K(Zo,8))}}static{this.\u0275dir=k({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,o){if(n&1&&Kt(o,Zo,5),n&2){let s;Yt(s=Zt())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[yt]})}}return t})();function Uc(t){return!!t.paths}var si=class{};var Hc=(()=>{class t{constructor(e,n,r,o,s){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(zt(e=>e instanceof gt),ie(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=_i(o.providers,e,`Route: ${o.path}`));let s=o._injector??e,l=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(l,o.children??o._loadedRoutes))}return W(r).pipe(xe())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(e,n):r=b(null);let o=r.pipe(q(s=>s===null?b(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??e,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(n);return W([o,s]).pipe(xe())}else return o})}static{this.\u0275fac=function(n){return new(n||t)(E(Tt),E(Hn),E(Le),E(si),E(vr))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),xs=new N(""),jc=(()=>{class t{constructor(e,n,r,o,s={}){this.urlSerializer=e,this.transitions=n,this.viewportScroller=r,this.zone=o,this.options=s,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof be?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof gt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof $t&&e.code===Qn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Xn&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Xn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static{this.\u0275fac=function(n){oo()}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})();function Gd(t,...i){return Me([{provide:sn,multi:!0,useValue:t},[],{provide:kt,useFactory:Ds,deps:[Tt]},{provide:xi,multi:!0,useFactory:Ms},i.map(e=>e.\u0275providers)])}function Ds(t){return t.routerState.root}function hn(t,i){return{\u0275kind:t,\u0275providers:i}}function Ms(){let t=h(Ne);return i=>{let e=t.get(Di);if(i!==e.components[0])return;let n=t.get(Tt),r=t.get(Ls);t.get(Cr)===1&&n.initialNavigation(),t.get(Ns,null,Ci.Optional)?.setUpPreloading(),t.get(xs,null,Ci.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ls=new N("",{factory:()=>new z}),Cr=new N("",{providedIn:"root",factory:()=>1});function Bc(){return hn(2,[{provide:Cr,useValue:0},{provide:Pe,multi:!0,deps:[Ne],useFactory:i=>{let e=i.get(Eo,Promise.resolve());return()=>e.then(()=>new Promise(n=>{let r=i.get(Tt),o=i.get(Ls);As(r,()=>{n(!0)}),i.get(Sr).afterPreactivation=()=>(n(!0),o.closed?b(void 0):o),r.initialNavigation()}))}}])}function zc(){return hn(3,[{provide:Pe,multi:!0,useFactory:()=>{let i=h(Tt);return()=>{i.setUpLocationChangeListener()}}},{provide:Cr,useValue:2}])}var Ns=new N("");function Wc(t){return hn(0,[{provide:Ns,useExisting:Hc},{provide:si,useExisting:t}])}function Vc(){return hn(8,[qo,{provide:ai,useExisting:qo}])}function qc(t){let i=[{provide:Is,useValue:_c},{provide:_s,useValue:g({skipNextTransition:!!t?.skipInitialTransition},t)}];return hn(9,i)}var Qo=new N("ROUTER_FORROOT_GUARD"),Gc=[je,{provide:ln,useClass:me},Tt,un,{provide:kt,useFactory:Ds,deps:[Tt]},vr,[]],Kd=(()=>{class t{constructor(e){}static forRoot(e,n){return{ngModule:t,providers:[Gc,[],{provide:sn,multi:!0,useValue:e},{provide:Qo,useFactory:Qc,deps:[[Tt,new wi,new Qr]]},{provide:pn,useValue:n||{}},n?.useHash?Yc():Zc(),Kc(),n?.preloadingStrategy?Wc(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?Jc(n):[],n?.bindToComponentInputs?Vc().\u0275providers:[],n?.enableViewTransitions?qc().\u0275providers:[],Xc()]}}static forChild(e){return{ngModule:t,providers:[{provide:sn,multi:!0,useValue:e}]}}static{this.\u0275fac=function(n){return new(n||t)(E(Qo,8))}}static{this.\u0275mod=ut({type:t})}static{this.\u0275inj=ct({})}}return t})();function Kc(){return{provide:xs,useFactory:()=>{let t=h(Mo),i=h(Ct),e=h(pn),n=h(Sr),r=h(ln);return e.scrollOffset&&t.setOffset(e.scrollOffset),new jc(r,n,t,i,e)}}}function Yc(){return{provide:He,useClass:To}}function Zc(){return{provide:He,useClass:Ro}}function Qc(t){return"guarded"}function Jc(t){return[t.initialNavigation==="disabled"?zc().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Bc().\u0275providers:[]]}var Jo=new N("");function Xc(){return[{provide:Jo,useFactory:Ms},{provide:xi,multi:!0,useExisting:Jo}]}function $s(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Ft(t,i){if(t&&i){let e=n=>{$s(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function tu(){return window.innerWidth-document.documentElement.offsetWidth}function Ce(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Jd(t="p-overflow-hidden"){let i=Ce(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,tu()+"px"),Ft(document.body,t)}function te(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Xd(t="p-overflow-hidden"){let i=Ce(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),te(document.body,t)}function ks(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Ps(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function eu(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function nu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function tp(t,i,e=!0){var n,r,o,s;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ks(t),a=l.height,c=l.width,u=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),f=nu(),m=eu(),S=Ps(),w,x,D="top";p.top+u+a>S.height?(w=p.top+f-a,D="bottom",w<0&&(w=f)):w=u+p.top+f,p.left+c>S.width?x=Math.max(0,p.left+m+d-c):x=p.left+m,t.style.top=w+"px",t.style.left=x+"px",t.style.transformOrigin=D,e&&(t.style.marginTop=D==="bottom"?`calc(${(r=(n=Ce(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Ce(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function ep(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Fs(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function np(t,i,e=!0){var n,r,o,s;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ks(t),a=i.offsetHeight,c=i.getBoundingClientRect(),u=Ps(),d,p,f="top";c.top+a+l.height>u.height?(d=-1*l.height,f="bottom",c.top+d<0&&(d=-1*c.top)):d=a,l.width>u.width?p=c.left*-1:c.left+l.width>u.width?p=(c.left+l.width-u.width)*-1:p=0,t.style.top=d+"px",t.style.left=p+"px",t.style.transformOrigin=f,e&&(t.style.marginTop=f==="bottom"?`calc(${(r=(n=Ce(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Ce(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function fn(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function wr(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),fn(i)?i:void 0}function ip(t,i){let e=wr(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Er(t,i={}){if(fn(t)){let e=(n,r)=>{var o,s;let l=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);a=d.length?a.concat(d.filter(p=>!!p)):a}}return a},l)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Er(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function rp(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function iu(t,i){return fn(t)?Array.from(t.querySelectorAll(i)):[]}function we(t,i){return fn(t)?t.matches(i)?t:t.querySelector(i):null}function op(t,i){t&&document.activeElement!==t&&t.focus(i)}function Us(t,i=""){let e=iu(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function sp(t,i){let e=Us(t,i);return e.length>0?e[0]:null}function Rr(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Hs(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function ap(t){var i;if(t){let e=(i=Hs(t))==null?void 0:i.childNodes,n=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1}function lp(t,i){let e=Us(t,i);return e.length>0?e[e.length-1]:null}function js(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Tr(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function cp(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function ru(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Hs(t))}function up(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let r=wr((o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t);return r?.nodeType===9||ru(r)?r:void 0}}function Ir(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function dp(t){return!!(t&&t.offsetParent!=null)}function pp(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Bs(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function hp(t,i){let e=wr(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function fp(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),o=r?parseFloat(r):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-o,c=t.scrollTop,u=t.clientHeight,d=Tr(i);a<0?t.scrollTop=c+a:a+d>u&&(t.scrollTop=c+a-u+d)}function zs(t,i="",e){fn(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Ws(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}function B(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function _r(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,l;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!_r(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let a=t instanceof Date,c=i instanceof Date;if(a!=c)return!1;if(a&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[o]))return!1;for(o=s;o--!==0;)if(l=p[o],!_r(t[l],i[l],e))return!1;return!0}function ou(t,i){return _r(t,i)}function qs(t){return!!(t&&t.constructor&&t.call&&t.apply)}function T(t){return!B(t)}function ci(t,i){if(!t||!i)return null;try{let e=t[i];if(T(e))return e}catch{}if(Object.keys(t).length){if(qs(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Or(t,i,e){return e?ci(t,e)===ci(i,e):ou(t,i)}function vp(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Or(t,e))return!0}return!1}function yp(t,i){let e=-1;if(T(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function At(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function ot(t,...i){return qs(t)?t(...i):t}function Ut(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Vs(t){return Ut(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function ui(t,i="",e={}){let n=Vs(i).split("."),r=n.shift();return r?At(t)?ui(ot(t[Object.keys(t).find(o=>Vs(o)===r)||""],e),n.join("."),e):void 0:ot(t,e)}function di(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Sp(t){return t instanceof Date&&t.constructor===Date}function Gs(t){return T(t)&&!isNaN(t)}function Cp(t=""){return T(t)&&t.length===1&&!!t.match(/\S| /)}function J(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function ee(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function X(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function pi(t){return Ut(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Ar(t){return Ut(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var hi={};function gn(t="pui_id_"){return hi.hasOwnProperty(t)||(hi[t]=0),hi[t]++,`${t}${hi[t]}`}function su(){let t=[],i=(s,l,a=999)=>{let c=r(s,l,a),u=c.value+(c.key===s?0:a)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(l=>l.value!==s)},n=(s,l)=>r(s,l).value,r=(s,l,a=0)=>[...t].reverse().find(c=>l?!0:c.key===s)||{key:s,value:a},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,l,a)=>{l&&(l.style.zIndex=String(i(s,!0,a)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Rp=su();var P=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Pp=(()=>{class t{static AND="and";static OR="or"}return t})(),Fp=(()=>{class t{filter(e,n,r,o,s){let l=[];if(e)for(let a of e)for(let c of n){let u=ci(a,c);if(this.filters[o](u,r,s)){l.push(a);break}}return l}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=X(n.toString()).toLocaleLowerCase(r);return X(e.toString()).toLocaleLowerCase(r).slice(0,o.length)===o},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=X(n.toString()).toLocaleLowerCase(r);return X(e.toString()).toLocaleLowerCase(r).indexOf(o)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=X(n.toString()).toLocaleLowerCase(r);return X(e.toString()).toLocaleLowerCase(r).indexOf(o)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=X(n.toString()).toLocaleLowerCase(r),s=X(e.toString()).toLocaleLowerCase(r);return s.indexOf(o,s.length-o.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:X(e.toString()).toLocaleLowerCase(r)==X(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:X(e.toString()).toLocaleLowerCase(r)!=X(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(Or(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Up=(()=>{class t{messageSource=new z;clearSource=new z;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Hp=(()=>{class t{clickSource=new z;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ks=["*"],jp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=G({type:t,selectors:[["p-header"]],ngContentSelectors:Ks,decls:1,vars:0,template:function(n,r){n&1&&(qt(),Gt(0))},encapsulation:2})}return t})(),Bp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=G({type:t,selectors:[["p-footer"]],ngContentSelectors:Ks,decls:1,vars:0,template:function(n,r){n&1&&(qt(),Gt(0))},encapsulation:2})}return t})(),Ys=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(K(so))};static \u0275dir=k({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),Ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ut({type:t});static \u0275inj=ct({imports:[Nt]})}return t})(),zp=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var au=Object.defineProperty,lu=Object.defineProperties,cu=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertySymbols,Js=Object.prototype.hasOwnProperty,Xs=Object.prototype.propertyIsEnumerable,Zs=(t,i,e)=>i in t?au(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,bt=(t,i)=>{for(var e in i||(i={}))Js.call(i,e)&&Zs(t,e,i[e]);if(gi)for(var e of gi(i))Xs.call(i,e)&&Zs(t,e,i[e]);return t},xr=(t,i)=>lu(t,cu(i)),xt=(t,i)=>{var e={};for(var n in t)Js.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&gi)for(var n of gi(t))i.indexOf(n)<0&&Xs.call(t,n)&&(e[n]=t[n]);return e};var uu=Ws(),st=uu;function Qs(t,i){di(t)?t.push(...i||[]):At(t)&&Object.assign(t,i)}function du(t){return At(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function pu(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Dr(t="",i=""){return pu(`${Ut(t,!1)&&Ut(i,!1)?`${t}-`:t}${i}`)}function ta(t="",i=""){return`--${Dr(t,i)}`}function hu(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function ea(t,i="",e="",n=[],r){if(Ut(t)){let o=/{([^}]*)}/g,s=t.trim();if(hu(s))return;if(J(s,o)){let l=s.replaceAll(o,u=>{let p=u.replace(/{|}/g,"").split(".").filter(f=>!n.some(m=>J(f,m)));return`var(${ta(e,pi(p.join("-")))}${T(r)?`, ${r}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return J(l.replace(c,"0"),a)?`calc(${l})`:l}return s}else if(Gs(t))return t}function fu(t,i,e){Ut(i,!1)&&t.push(`${i}:${e};`)}function Ee(t,i){return t?`${t}{${i}}`:""}var Re=(...t)=>gu(_.getTheme(),...t),gu=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=_.defaults||{},{prefix:s,transform:l}=t?.options||o||{},c=J(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||B(n)&&l==="strict"?_.getTokenValue(i):ea(c,void 0,s,[r.excludedKeyRegex],e)}return""};function mu(t,i={}){let e=_.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[p,f])=>{let m=J(p,o)?Dr(u):Dr(u,pi(p)),S=du(f);if(At(S)){let{variables:w,tokens:x}=s(S,m);Qs(d.tokens,x),Qs(d.variables,w)}else d.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),fu(d.variables,ta(m),ea(S,m,n,[o]));return d},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(t,n);return{value:l,tokens:a,declarations:l.join(""),css:Ee(r,l.join(""))}}var mt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return mu(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,l,a,c,u,d;let{preset:p,options:f}=i,m,S,w,x,D,et,at;if(T(p)&&f.transform!=="strict"){let{primitive:mn,semantic:bn,extend:vn}=p,Ie=bn||{},{colorScheme:yn}=Ie,Sn=xt(Ie,["colorScheme"]),Cn=vn||{},{colorScheme:wn}=Cn,_e=xt(Cn,["colorScheme"]),Oe=yn||{},{dark:En}=Oe,Rn=xt(Oe,["dark"]),Tn=wn||{},{dark:In}=Tn,_n=xt(Tn,["dark"]),On=T(mn)?this._toVariables({primitive:mn},f):{},An=T(Sn)?this._toVariables({semantic:Sn},f):{},xn=T(Rn)?this._toVariables({light:Rn},f):{},kr=T(En)?this._toVariables({dark:En},f):{},Pr=T(_e)?this._toVariables({semantic:_e},f):{},Fr=T(_n)?this._toVariables({light:_n},f):{},Ur=T(In)?this._toVariables({dark:In},f):{},[ga,ma]=[(o=On.declarations)!=null?o:"",On.tokens],[ba,va]=[(s=An.declarations)!=null?s:"",An.tokens||[]],[ya,Sa]=[(l=xn.declarations)!=null?l:"",xn.tokens||[]],[Ca,wa]=[(a=kr.declarations)!=null?a:"",kr.tokens||[]],[Ea,Ra]=[(c=Pr.declarations)!=null?c:"",Pr.tokens||[]],[Ta,Ia]=[(u=Fr.declarations)!=null?u:"",Fr.tokens||[]],[_a,Oa]=[(d=Ur.declarations)!=null?d:"",Ur.tokens||[]];m=this.transformCSS(t,ga,"light","variable",f,n,r),S=ma;let Aa=this.transformCSS(t,`${ba}${ya}`,"light","variable",f,n,r),xa=this.transformCSS(t,`${Ca}`,"dark","variable",f,n,r);w=`${Aa}${xa}`,x=[...new Set([...va,...Sa,...wa])];let Da=this.transformCSS(t,`${Ea}${Ta}color-scheme:light`,"light","variable",f,n,r),Ma=this.transformCSS(t,`${_a}color-scheme:dark`,"dark","variable",f,n,r);D=`${Da}${Ma}`,et=[...new Set([...Ra,...Ia,...Oa])],at=ot(p.css,{dt:Re})}return{primitive:{css:m,tokens:S},semantic:{css:w,tokens:x},global:{css:D,tokens:et},style:at}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var l,a,c;let u,d,p;if(T(i)&&e.transform!=="strict"){let f=t.replace("-directive",""),m=i,{colorScheme:S,extend:w,css:x}=m,D=xt(m,["colorScheme","extend","css"]),et=w||{},{colorScheme:at}=et,mn=xt(et,["colorScheme"]),bn=S||{},{dark:vn}=bn,Ie=xt(bn,["dark"]),yn=at||{},{dark:Sn}=yn,Cn=xt(yn,["dark"]),wn=T(D)?this._toVariables({[f]:bt(bt({},D),mn)},e):{},_e=T(Ie)?this._toVariables({[f]:bt(bt({},Ie),Cn)},e):{},Oe=T(vn)?this._toVariables({[f]:bt(bt({},vn),Sn)},e):{},[En,Rn]=[(l=wn.declarations)!=null?l:"",wn.tokens||[]],[Tn,In]=[(a=_e.declarations)!=null?a:"",_e.tokens||[]],[_n,On]=[(c=Oe.declarations)!=null?c:"",Oe.tokens||[]],An=this.transformCSS(f,`${En}${Tn}`,"light","variable",e,r,o,s),xn=this.transformCSS(f,_n,"dark","variable",e,r,o,s);u=`${An}${xn}`,d=[...new Set([...Rn,...In,...On])],p=ot(x,{dt:Re})}return{css:u,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:l}=i,a=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:a,options:l,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:l,options:a}=i,c=(o=l?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:a,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${ot(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),l=Object.entries(n).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(u?.css){let d=ee(u?.css),p=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${p}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let l={name:t,theme:i,params:e,set:r,defaults:o},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${ee(a)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let l=J(o,i.variable.excludedKeyRegex)?e:e?`${e}.${Ar(o)}`:Ar(o),a=n?`${n}.${o}`:o;At(s)?this.createTokens(s,i,l,a,r):(r[l]||(r[l]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(f=>f.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(f=>f.computed(f.scheme,u[f.scheme]))}}),r[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),J(s,d)){let m=s.trim().replaceAll(d,x=>{var D;let et=x.replace(/{|}/g,""),at=(D=r[et])==null?void 0:D.computed(c,u);return di(at)&&at.length===2?`light-dark(${at[0].value},${at[1].value})`:at?.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,w=/var\([^)]+\)/g;p=J(m.replace(w,"0"),S)?`calc(${m})`:m}return B(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),r},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(u=>!J(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,l=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let u=c,{colorScheme:d}=u,p=xt(u,["colorScheme"]);return a[d]=p,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Ee(T(i)?`${t}${i},${t} ${i}`:t,n):Ee(t,T(i)?Ee(i,n):n)},transformCSS(t,i,e,n,r={},o,s,l){if(T(i)){let{cssLayer:a}=r;if(n!=="style"){let c=this.getColorSchemeOption(r,s);i=e==="dark"?c.reduce((u,{type:d,selector:p})=>(T(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,l,d,i)),u),""):Ee(l??":root",i)}if(a){let c={name:"primeui",order:"primeui"};At(a)&&(c.name=ot(a.name,{name:t,type:n})),T(c.name)&&(i=Ee(`@layer ${c.name}`,i),o?.layerNames(c.name))}return i}return""}},_={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=xr(bt({},i),{options:bt(bt({},this.defaults.options),i.options)}),this._tokens=mt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),st.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=xr(bt({},this.theme),{preset:t}),this._tokens=mt.createTokens(t,this.defaults),this.clearLoadedStyleNames(),st.emit("preset:change",t),st.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=xr(bt({},this.theme),{options:t}),this.clearLoadedStyleNames(),st.emit("options:change",t),st.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return mt.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return mt.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return mt.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return mt.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return mt.getPreset(r)},getLayerOrderCSS(t=""){return mt.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return mt.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return mt.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return mt.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),st.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&st.emit("theme:load"))}};var bu=0,na=(()=>{class t{document=h(M);use(e,n={}){let r=!1,o=e,s=null,{immediate:l=!0,manual:a=!1,name:c=`style_${++bu}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:f=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){o=e,Er(s,{type:"text/css",media:d,nonce:p});let S=this.document.head;f&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),zs(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:u,name:c,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Te={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},vu=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,yu=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,V=(()=>{class t{name="base";useStyle=h(na);theme=vu;css=yu;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(ot(e,{dt:Re}));return o?this.useStyle.use(ee(o),g({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>_.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>_.getCommon(this.name,e);getComponentTheme=e=>_.getComponent(this.name,e);getDirectiveTheme=e=>_.getDirective(this.name,e);getPresetTheme=(e,n,r)=>_.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>_.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=ot(this.css,{dt:Re}),o=ee(`${r}${e}`),s=Object.entries(n).reduce((l,[a,c])=>l.push(`${a}="${c}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>_.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[_.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=ot(this.theme,{dt:Re}),l=ee(_.transformCSS(o,s)),a=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${a}>${l}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Su=(()=>{class t{theme=oe(void 0);isThemeChanged=!1;document=h(M);baseStyle=h(V);constructor(){Ue(()=>{st.on("theme:change",e=>{yo(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),Ue(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){_.clearLoadedStyleNames(),st.clear()}onThemeChange(e){_.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!_.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(e?.css,g({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,g({name:"global-variables"},s)),this.baseStyle.loadTheme(g({name:"global-style"},s),o),_.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n}=e||{};n&&this.theme.set(n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lr=(()=>{class t extends Su{ripple=oe(!1);platformId=h(dt);inputStyle=oe("outlined");inputVariant=oe("outlined");overlayOptions={};csp=oe({nonce:void 0});filterMatchModeOptions={text:[P.STARTS_WITH,P.CONTAINS,P.NOT_CONTAINS,P.ENDS_WITH,P.EQUALS,P.NOT_EQUALS],numeric:[P.EQUALS,P.NOT_EQUALS,P.LESS_THAN,P.LESS_THAN_OR_EQUAL_TO,P.GREATER_THAN,P.GREATER_THAN_OR_EQUAL_TO],date:[P.DATE_IS,P.DATE_IS_NOT,P.DATE_BEFORE,P.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new z;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=g(g({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,theme:s,overlayOptions:l,translation:a}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),l&&(this.overlayOptions=l),a&&this.setTranslation(a),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cu=new N("PRIME_NG_CONFIG");function Ch(...t){let i=t?.map(n=>({provide:Cu,useValue:n,multi:!1})),e={provide:Pe,useFactory:n=>()=>t?.forEach(r=>n.setConfig(r)),deps:[Lr],multi:!0};return Me([...i,e])}var ia=(()=>{class t extends V{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tt=(()=>{class t{document=h(M);platformId=h(dt);el=h(Wt);injector=h(Ne);cd=h(ce);renderer=h(ke);config=h(Lr);baseComponentStyle=h(ia);baseStyle=h(V);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=gn("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return ui(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Be(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{Te.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Te.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Te.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Te.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!_.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,g({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,g({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(g({name:"global-style"},this.styleOptions),o),_.setLoadedStyleName("common")}if(!_.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,g({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(g({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),_.setLoadedStyleName(this.componentStyle?.name)}if(!_.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,g({name:"layer-order",first:!0},this.styleOptions)),_.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,g({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Te.clearLoadedStyleNames(),st.on("theme:change",e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:g({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=k({type:t,inputs:{dt:"dt"},standalone:!0,features:[Y([ia,V]),yt]})}return t})();var Nr=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=D=>{if(D)return getComputedStyle(D).getPropertyValue("position")==="relative"?D:o(D.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),f=o(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,S;a.top+l+s.height>d.height?(m=a.top-f.top-s.height,e.style.transformOrigin="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-f.top,e.style.transformOrigin="top");let w=a.left+s.width-d.width,x=a.left-f.left;s.width>d.width?S=(a.left-f.left)*-1:w>0?S=x-w:S=a.left-f.left,e.style.top=m+"px",e.style.left=S+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,l=o.width,a=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),m,S;u.top+a+s>f.height?(m=u.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=a+u.top+d,e.style.transformOrigin="top"),u.left+l>f.width?S=Math.max(0,u.left+p+c-l):S=u.left+p,e.style.top=m+"px",e.style.left=S+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return o.test(a.getPropertyValue("overflow"))||o.test(a.getPropertyValue("overflowX"))||o.test(a.getPropertyValue("overflowY"))};for(let l of r){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let u of c){let d=this.findSingle(l,u);d&&s(d)&&n.push(d)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-l,d=e.scrollTop,p=e.clientHeight,f=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+f>p&&(e.scrollTop=d+u-p+f)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,l=o/s;let a=setInterval(()=>{r=r-l,r<=0&&(r=0,clearInterval(a)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,l=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?r(o,c):Object.entries(c).map(([p,f])=>o==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);a=d.length?a.concat(d.filter(p=>!!p)):a}}return a},l)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),ra=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Nr.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var oa=(()=>{class t extends tt{autofocus=!1;_autofocus=!1;focused=!1;platformId=h(dt);document=h(M);host=h(Wt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){jn(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Nr.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",R],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[It,j]})}return t})();var wu=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Eu={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":T(t.value)&&String(t.value).length===1,"p-badge-dot":B(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},sa=(()=>{class t extends V{name="badge";theme=wu;classes=Eu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var $r=(()=>{class t extends tt{styleClass=Lt();style=Lt();badgeSize=Lt();size=Lt();severity=Lt();value=Lt();badgeDisabled=Lt(!1,{transform:R});_componentStyle=h(sa);containerClass=Fe(()=>{let e="p-badge p-component";return T(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),B(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(ho(r.style()),se(r.containerClass()),po("display",r.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[Y([sa]),j,Et],decls:1,vars:1,template:function(n,r){n&1&&Pn(0),n&2&&Fn(r.value())},dependencies:[Nt,Ht],encapsulation:2,changeDetection:0})}return t})(),aa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ut({type:t});static \u0275inj=ct({imports:[$r,Ht,Ht]})}return t})();var Tu=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Iu=(()=>{class t extends V{name="baseicon";inlineStyles=Tu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var _u=["*"],la=(()=>{class t extends tt{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=B(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",R],styleClass:"styleClass"},standalone:!0,features:[Y([Iu]),It,j,Et],ngContentSelectors:_u,decls:1,vars:0,template:function(n,r){n&1&&(qt(),Gt(0))},encapsulation:2,changeDetection:0})}return t})();var ca=(()=>{class t extends la{pathId;ngOnInit(){this.pathId="url(#"+gn()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[j,Et],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Xr(),ae(0,"svg",0)(1,"g"),wt(2,"path",1),le(),ae(3,"defs")(4,"clipPath",2),wt(5,"rect",3),le()()()),n&2&&(se(r.getClassNames()),pt("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),U(),pt("clip-path",r.pathId),U(3),A("id",r.pathId))},encapsulation:2})}return t})();var Ou=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Au={root:"p-ink"},ua=(()=>{class t extends V{name="ripple";theme=Ou;classes=Au;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var da=(()=>{class t extends tt{zone=h(Ct);_componentStyle=h(ua);animationListener;mouseDownListener;timeout;constructor(){super(),Ue(()=>{jn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(te(n,"p-ink-active"),!Rr(n)&&!Ir(n)){let l=Math.max(Fs(this.el.nativeElement),Tr(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let r=js(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-Ir(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Rr(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),Ft(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&te(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&te(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),te(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Bs(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=k({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[Y([ua]),j]})}return t})();var xu=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Du={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Bt=(()=>{class t extends V{name="button";theme=xu;classes=Du;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Mu=["content"],Lu=["loading"],Nu=["icon"],$u=["*"],fa=t=>({class:t});function ku(t,i){t&1&&fo(0)}function Pu(t,i){if(t&1&&wt(0,"span",8),t&2){let e=ht(3);A("ngClass",e.iconClass()),pt("aria-hidden",!0)("data-pc-section","loadingicon")}}function Fu(t,i){if(t&1&&wt(0,"SpinnerIcon",9),t&2){let e=ht(3);A("styleClass",e.spinnerIconClass())("spin",!0),pt("aria-hidden",!0)("data-pc-section","loadingicon")}}function Uu(t,i){if(t&1&&(Nn(0),Vt(1,Pu,1,3,"span",6)(2,Fu,1,4,"SpinnerIcon",7),$n()),t&2){let e=ht(2);U(),A("ngIf",e.loadingIcon),U(),A("ngIf",!e.loadingIcon)}}function Hu(t,i){}function ju(t,i){if(t&1&&Vt(0,Hu,0,0,"ng-template",10),t&2){let e=ht(2);A("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Bu(t,i){if(t&1&&(Nn(0),Vt(1,Uu,3,2,"ng-container",2)(2,ju,1,1,null,5),$n()),t&2){let e=ht();U(),A("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),U(),A("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Ai(3,fa,e.iconClass()))}}function zu(t,i){if(t&1&&wt(0,"span",8),t&2){let e=ht(2);se(e.icon),A("ngClass",e.iconClass()),pt("data-pc-section","icon")}}function Wu(t,i){}function Vu(t,i){if(t&1&&Vt(0,Wu,0,0,"ng-template",10),t&2){let e=ht(2);A("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function qu(t,i){if(t&1&&(Nn(0),Vt(1,zu,1,4,"span",11)(2,Vu,1,1,null,5),$n()),t&2){let e=ht();U(),A("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),U(),A("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ai(3,fa,e.iconClass()))}}function Gu(t,i){if(t&1&&(ae(0,"span",12),Pn(1),le()),t&2){let e=ht();pt("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),U(),Fn(e.label)}}function Ku(t,i){if(t&1&&wt(0,"p-badge",13),t&2){let e=ht();A("value",e.badge)("severity",e.badgeSeverity)}}var jt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},pa=(()=>{class t extends tt{_componentStyle=h(Bt);static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ln("p-button-label",!0)},standalone:!0,features:[Y([Bt]),j]})}return t})(),ha=(()=>{class t extends tt{_componentStyle=h(Bt);static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ln("p-button-icon",!0)},standalone:!0,features:[Y([Bt]),j]})}return t})(),qf=(()=>{class t extends tt{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Ii(ha);labelSignal=Ii(pa);isIconOnly=Fe(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(jt);isTextButton=Fe(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=h(Bt);ngAfterViewInit(){super.ngAfterViewInit(),Ft(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}getStyleClass(){let e=[jt.button,jt.component];return this.icon&&!this.label&&B(this.htmlElement.textContent)&&e.push(jt.iconOnly),this.loading&&(e.push(jt.disabled,jt.loading),!this.icon&&this.label&&e.push(jt.labelOnly),this.icon&&!this.label&&!B(this.htmlElement.textContent)&&e.push(jt.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return B(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}createLabel(){if(!we(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!we(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Ft(n,r);let o=this.getIconClass();o&&Ft(n,o),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=we(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=we(this.htmlElement,".p-button-icon"),n=we(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,o){n&1&&(Oi(o,r.iconSignal,ha,5),Oi(o,r.labelSignal,pa,5)),n&2&&go(2)},hostVars:4,hostBindings:function(n,r){n&2&&Ln("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],outlined:[2,"outlined","outlined",R],size:"size",plain:[2,"plain","plain",R],fluid:[2,"fluid","fluid",R],label:"label",icon:"icon",buttonProps:"buttonProps"},standalone:!0,features:[Y([Bt]),It,j,yt]})}return t})(),Yu=(()=>{class t extends tt{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new St;onFocus=new St;onBlur=new St;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return B(this.fluid)?!!n:this.fluid}_componentStyle=h(Bt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=G({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&(Kt(o,Mu,5),Kt(o,Lu,5),Kt(o,Nu,5),Kt(o,Ys,4)),n&2){let s;Yt(s=Zt())&&(r.contentTemplate=s.first),Yt(s=Zt())&&(r.loadingIconTemplate=s.first),Yt(s=Zt())&&(r.iconTemplate=s.first),Yt(s=Zt())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",R],loading:[2,"loading","loading",R],loadingIcon:"loadingIcon",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],plain:[2,"plain","plain",R],severity:"severity",outlined:[2,"outlined","outlined",R],link:[2,"link","link",R],tabindex:[2,"tabindex","tabindex",vo],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",R],fluid:[2,"fluid","fluid",R],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[Y([Bt]),It,j,yt,Et],ngContentSelectors:$u,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(qt(),ae(0,"button",0),kn("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Gt(1),Vt(2,ku,1,0,"ng-container",1)(3,Bu,3,5,"ng-container",2)(4,qu,3,5,"ng-container",2)(5,Gu,2,3,"span",3)(6,Ku,1,2,"p-badge",4),le()),n&2&&(A("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),pt("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),U(2),A("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),U(),A("ngIf",r.loading),U(),A("ngIf",!r.loading),U(),A("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),U(),A("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[Nt,_o,Oo,xo,Ao,da,oa,ca,aa,$r,Ht],encapsulation:2,changeDetection:0})}return t})(),Gf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ut({type:t});static \u0275inj=ct({imports:[Nt,Yu,Ht,Ht]})}return t})();export{No as a,_d as b,kt as c,Dl as d,Tt as e,Zo as f,qd as g,Gd as h,Kd as i,$s as j,Ft as k,Jd as l,te as m,Xd as n,Ps as o,eu as p,nu as q,tp as r,ep as s,Fs as t,np as u,ip as v,rp as w,iu as x,we as y,op as z,Us as A,sp as B,Rr as C,ap as D,lp as E,Tr as F,cp as G,up as H,Ir as I,dp as J,pp as K,hp as L,fp as M,zs as N,B as O,ou as P,T as Q,ci as R,Or as S,vp as T,yp as U,ot as V,Sp as W,Cp as X,gn as Y,P as Z,Pp as _,Fp as $,Up as aa,Hp as ba,jp as ca,Bp as da,Ys as ea,Ht as fa,zp as ga,V as ha,Ch as ia,tt as ja,Nr as ka,ra as la,oa as ma,$r as na,aa as oa,la as pa,ca as qa,da as ra,qf as sa,Yu as ta,Gf as ua};
