(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{F4UR:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginPageModule",(function(){return d}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),b=e("tyNb"),l=e("mrSG"),a=e("lGQG"),c=e("fXoL");const s=[{path:"",component:(()=>{class n{constructor(n,t,e){this.authService=n,this.alertCtrl=t,this.router=e}ngOnInit(){}login(){"rangelo@appint.com"===this.email?this.router.navigateByUrl("/nav-page"):this.showAlert()}showAlert(){return Object(l.a)(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Login Warning",message:"This feature is under development thank you for registering on the new TimeTracker",buttons:["OK"]});yield n.present()}))}}return n.\u0275fac=function(t){return new(t||n)(c.Kb(a.a),c.Kb(r.a),c.Kb(b.g))},n.\u0275cmp=c.Eb({type:n,selectors:[["app-login"]],decls:21,vars:2,consts:[["slot","start"],["fixed",""],["col-6","","col-md-4","","col-lg-3",""],["lines","full"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["type","submit","color","danger","expand","block",3,"click"]],template:function(n,t){1&n&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar"),c.Nb(2,"ion-buttons",0),c.Lb(3,"ion-back-button"),c.Mb(),c.Nb(4,"ion-title"),c.cc(5,"Log In"),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"ion-content"),c.Nb(7,"ion-grid",1),c.Nb(8,"ion-card",2),c.Nb(9,"ion-item",3),c.Nb(10,"ion-label",4),c.cc(11,"Username / Email"),c.Mb(),c.Nb(12,"ion-input",5),c.Ub("ngModelChange",(function(n){return t.email=n})),c.Mb(),c.Mb(),c.Nb(13,"ion-item",3),c.Nb(14,"ion-label",4),c.cc(15,"Password"),c.Mb(),c.Nb(16,"ion-input",6),c.Ub("ngModelChange",(function(n){return t.password=n})),c.Mb(),c.Mb(),c.Nb(17,"ion-row"),c.Nb(18,"ion-col"),c.Nb(19,"ion-button",7),c.Ub("click",(function(){return t.login()})),c.cc(20,"Sign In"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&n&&(c.Ab(12),c.Yb("ngModel",t.email),c.Ab(4),c.Yb("ngModel",t.password))},directives:[r.k,r.w,r.f,r.c,r.d,r.v,r.i,r.j,r.g,r.m,r.n,r.l,r.B,i.c,i.d,r.t,r.h,r.e],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({factory:function(t){return new(t||n)},imports:[[b.j.forChild(s)],b.j]}),n})(),d=(()=>{class n{}return n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({factory:function(t){return new(t||n)},imports:[[o.b,i.a,r.x,u]]}),n})()}}]);