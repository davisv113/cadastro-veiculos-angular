import{S as A,ca as J,da as G,ea as K,f as z,fa as b,ha as U,i as V,ja as W,sa as X,ua as Y}from"./chunk-A532XN6V.js";import{Ab as v,Ba as i,Ka as k,Ma as j,P as D,Q as E,Qa as d,Sa as N,Ta as o,V as Q,Xa as w,Z as g,_ as I,ab as l,bb as p,cb as B,db as M,eb as S,fb as y,ia as C,ib as _,ic as q,jb as R,kb as T,kc as O,lb as s,lc as P,mc as H,nb as m,nc as L,ob as u,sb as h,tb as x,zb as $}from"./chunk-DDPP3QMU.js";var ae=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,ie={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Z=(()=>{class e extends U{name="card";theme=ae;classes=ie;static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var oe=["header"],re=["title"],le=["subtitle"],ce=["content"],pe=["footer"],de=["*",[["p-header"]],[["p-footer"]]],se=["*","p-header","p-footer"];function me(e,r){e&1&&y(0)}function ue(e,r){if(e&1&&(l(0,"div",8),T(1,1),d(2,me,1,0,"ng-container",6),p()),e&2){let t=_();i(2),o("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function fe(e,r){if(e&1&&(M(0),h(1),S()),e&2){let t=_(2);i(),x(t.header)}}function _e(e,r){e&1&&y(0)}function ye(e,r){if(e&1&&(l(0,"div",9),d(1,fe,2,1,"ng-container",10)(2,_e,1,0,"ng-container",6),p()),e&2){let t=_();i(),o("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),i(),o("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function he(e,r){if(e&1&&(M(0),h(1),S()),e&2){let t=_(2);i(),x(t.subheader)}}function ge(e,r){e&1&&y(0)}function Te(e,r){if(e&1&&(l(0,"div",11),d(1,he,2,1,"ng-container",10)(2,ge,1,0,"ng-container",6),p()),e&2){let t=_();i(),o("ngIf",t.subheader&&!t._subtitleTemplate&&t.subtitleTemplate),i(),o("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ve(e,r){e&1&&y(0)}function be(e,r){e&1&&y(0)}function Ce(e,r){if(e&1&&(l(0,"div",12),T(1,2),d(2,be,1,0,"ng-container",6),p()),e&2){let t=_();i(2),o("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var F=(()=>{class e extends W{header;subheader;set style(t){A(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=k(null);_componentStyle=Q(Z);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-card"]],contentQueries:function(c,n,f){if(c&1&&(s(f,J,5),s(f,G,5),s(f,oe,4),s(f,re,4),s(f,le,4),s(f,ce,4),s(f,pe,4),s(f,K,4)),c&2){let a;m(a=u())&&(n.headerFacet=a.first),m(a=u())&&(n.footerFacet=a.first),m(a=u())&&(n.headerTemplate=a.first),m(a=u())&&(n.titleTemplate=a.first),m(a=u())&&(n.subtitleTemplate=a.first),m(a=u())&&(n.contentTemplate=a.first),m(a=u())&&(n.footerTemplate=a.first),m(a=u())&&(n.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},standalone:!0,features:[$([Z]),j,v],ngContentSelectors:se,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(c,n){c&1&&(R(de),l(0,"div",0),d(1,ue,3,1,"div",1),l(2,"div",2),d(3,ye,3,2,"div",3)(4,Te,3,2,"div",4),l(5,"div",5),T(6),d(7,ve,1,0,"ng-container",6),p(),d(8,Ce,3,1,"div",7),p()()),c&2&&(w(n.styleClass),o("ngClass","p-card p-component")("ngStyle",n._style()),N("data-pc-name","card"),i(),o("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),i(2),o("ngIf",n.header||n.titleTemplate||n._titleTemplate),i(),o("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),i(3),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),i(),o("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[L,q,O,H,P,b],encapsulation:2,changeDetection:0})}return e})(),ee=(()=>{class e{static \u0275fac=function(c){return new(c||e)};static \u0275mod=I({type:e});static \u0275inj=E({imports:[F,b,b]})}return e})();var te=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-home"]],standalone:!0,features:[v],decls:7,vars:0,consts:[[1,"home-container"],["header","Sistema de Ve\xEDculos","subheader","Angular 18 + PrimeNG",1,"home-card"],[1,"flex","gap-2","mt-3","justify-content-center"],["pButton","","label","Ir para Cadastro","routerLink","/cadastro"],["pButton","","label","Ver Lista","routerLink","/lista",1,"p-button-outlined"]],template:function(t,c){t&1&&(l(0,"div",0)(1,"p-card",1)(2,"p"),h(3," Bem-vindo ao sistema de controle de ve\xEDculos! Navegue pelas op\xE7\xF5es do menu para cadastrar ou visualizar os ve\xEDculos. "),p(),l(4,"div",2),B(5,"button",3)(6,"button",4),p()()())},dependencies:[ee,F,Y,X,V,z],styles:[".home-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:80vh;padding:1rem}.home-card[_ngcontent-%COMP%]{width:100%;max-width:500px;text-align:center}"]})};export{te as HomeComponent};
