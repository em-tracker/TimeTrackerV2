function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{F4UR:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",(function(){return g}));var o,i,r,a=t("ofXK"),c=t("3Pt+"),s=t("TEn/"),l=t("tyNb"),b=t("mrSG"),u=t("lGQG"),f=t("fXoL"),d=[{path:"",component:(o=function(){function e(n,t,o){_classCallCheck(this,e),this.authService=n,this.alertCtrl=t,this.router=o}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){this.showAlert()}},{key:"showAlert",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({header:"Login Warning",message:"This feature is under development thank you for registering on the new TimeTracker",buttons:["OK"]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(f.Kb(u.a),f.Kb(s.a),f.Kb(l.g))},o.\u0275cmp=f.Eb({type:o,selectors:[["app-login"]],decls:21,vars:2,consts:[["slot","start"],["fixed",""],["col-6","","col-md-4","","col-lg-3",""],["lines","full"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["type","submit","color","danger","expand","block",3,"click"]],template:function(e,n){1&e&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-buttons",0),f.Lb(3,"ion-back-button"),f.Mb(),f.Nb(4,"ion-title"),f.cc(5,"Log In"),f.Mb(),f.Mb(),f.Mb(),f.Nb(6,"ion-content"),f.Nb(7,"ion-grid",1),f.Nb(8,"ion-card",2),f.Nb(9,"ion-item",3),f.Nb(10,"ion-label",4),f.cc(11,"Username / Email"),f.Mb(),f.Nb(12,"ion-input",5),f.Ub("ngModelChange",(function(e){return n.email=e})),f.Mb(),f.Mb(),f.Nb(13,"ion-item",3),f.Nb(14,"ion-label",4),f.cc(15,"Password"),f.Mb(),f.Nb(16,"ion-input",6),f.Ub("ngModelChange",(function(e){return n.password=e})),f.Mb(),f.Mb(),f.Nb(17,"ion-row"),f.Nb(18,"ion-col"),f.Nb(19,"ion-button",7),f.Ub("click",(function(){return n.login()})),f.cc(20,"Sign In"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&e&&(f.Ab(12),f.Yb("ngModel",n.email),f.Ab(4),f.Yb("ngModel",n.password))},directives:[s.k,s.w,s.f,s.c,s.d,s.v,s.i,s.j,s.g,s.m,s.n,s.l,s.B,c.c,c.d,s.t,s.h,s.e],styles:[""]}),o)}],p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=f.Ib({type:r}),r.\u0275inj=f.Hb({factory:function(e){return new(e||r)},imports:[[l.j.forChild(d)],l.j]}),r),g=((i=function e(){_classCallCheck(this,e)}).\u0275mod=f.Ib({type:i}),i.\u0275inj=f.Hb({factory:function(e){return new(e||i)},imports:[[a.b,c.a,s.x,p]]}),i)}}]);