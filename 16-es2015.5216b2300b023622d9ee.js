(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{F4UR:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginPageModule",(function(){return d}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),b=e("tyNb"),c=e("mrSG"),l=e("lGQG"),s=e("fXoL");const a=[{path:"",component:(()=>{class n{constructor(n,t,e){this.authService=n,this.alertCtrl=t,this.router=e}ngOnInit(){}login(){this.showAlert()}showAlert(){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Login Warning",message:"This feature is under development thank you for registering on the new TimeTracker",buttons:["OK"]});yield n.present()}))}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(l.a),s.Kb(r.a),s.Kb(b.g))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-login"]],decls:21,vars:2,consts:[["slot","start"],["fixed",""],["col-6","","col-md-4","","col-lg-3",""],["lines","full"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["type","submit","color","danger","expand","block",3,"click"]],template:function(n,t){1&n&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",0),s.Lb(3,"ion-back-button"),s.Mb(),s.Nb(4,"ion-title"),s.cc(5,"Log In"),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-content"),s.Nb(7,"ion-grid",1),s.Nb(8,"ion-card",2),s.Nb(9,"ion-item",3),s.Nb(10,"ion-label",4),s.cc(11,"Username / Email"),s.Mb(),s.Nb(12,"ion-input",5),s.Ub("ngModelChange",(function(n){return t.email=n})),s.Mb(),s.Mb(),s.Nb(13,"ion-item",3),s.Nb(14,"ion-label",4),s.cc(15,"Password"),s.Mb(),s.Nb(16,"ion-input",6),s.Ub("ngModelChange",(function(n){return t.password=n})),s.Mb(),s.Mb(),s.Nb(17,"ion-row"),s.Nb(18,"ion-col"),s.Nb(19,"ion-button",7),s.Ub("click",(function(){return t.login()})),s.cc(20,"Sign In"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&n&&(s.Ab(12),s.Yb("ngModel",t.email),s.Ab(4),s.Yb("ngModel",t.password))},directives:[r.k,r.w,r.f,r.c,r.d,r.v,r.i,r.j,r.g,r.m,r.n,r.l,r.B,i.c,i.d,r.t,r.h,r.e],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[b.j.forChild(a)],b.j]}),n})(),d=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[o.b,i.a,r.x,u]]}),n})()}}]);