webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},cDNt:function(t,e,n){"use strict";function o(t){return h._17(0,[(t()(),h._3(0,null,null,22,"div",[["class","container"]],null,null,null,null,null)),(t()(),h._16(null,["\n  "])),(t()(),h._3(0,null,null,19,"div",[["class","d-flex justify-content-center align-items-center row"]],null,null,null,null,null)),(t()(),h._16(null,["\n    "])),(t()(),h._3(0,null,null,16,"div",[["class","card"],["style","width: 400px"]],null,null,null,null,null)),(t()(),h._16(null,["\n      "])),(t()(),h._3(0,null,null,0,"img",[["alt","Iphone X"],["class","card-image-top"],["height","auto"],["src","https://cdn.macrumors.com/article-new/2017/10/iphone-x-silver.jpg"],["width","100%"]],null,null,null,null,null)),(t()(),h._16(null,["\n      "])),(t()(),h._3(0,null,null,11,"div",[["class","card-body"]],null,null,null,null,null)),(t()(),h._16(null,["\n        "])),(t()(),h._3(0,null,null,1,"div",[["class","card-title"]],null,null,null,null,null)),(t()(),h._16(null,["IPhone X"])),(t()(),h._16(null,["\n        "])),(t()(),h._3(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(t()(),h._16(null,["Our vision has always been to create an iPhone that is entirely screen. One so immersive the device itself disappears\n          into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X,\n          that vision is now a reality. Say hello to the future."])),(t()(),h._16(null,["\n        "])),(t()(),h._3(0,null,null,2,"button",[["angular-rave",""],["class","btn btn-primary"]],null,[[null,"close"],[null,"callback"],[null,"click"]],function(t,e,n){var o=!0,i=t.component;if("click"===e){o=!1!==h._14(t,17).buttonClick()&&o}if("close"===e){o=!1!==i.paymentCancel()&&o}if("callback"===e){o=!1!==i.paymentDone(n)&&o}return o},null,null)),h._1(16384,null,0,c,[],{PBFPubKey:[0,"PBFPubKey"],txref:[1,"txref"],payment_method:[2,"payment_method"],amount:[3,"amount"],currency:[4,"currency"],customer_email:[5,"customer_email"],customer_phone:[6,"customer_phone"],customer_firstname:[7,"customer_firstname"],customer_lastname:[8,"customer_lastname"],custom_title:[9,"custom_title"]},{callback:"callback"}),(t()(),h._16(null,["Get it for \u20a6510,000 only"])),(t()(),h._16(null,["\n      "])),(t()(),h._16(null,["\n    "])),(t()(),h._16(null,["\n  "])),(t()(),h._16(null,["\n"]))],function(t,e){t(e,17,0,"FLWPUBK-9eaca37f9eb70d3fe927bfda5e306e07-X",e.component.ref,"both",51e4,"NGN","mailexample@mail.com","0907477588","First Name","Last Name","iPhone X")},null)}function i(t){return h._17(0,[(t()(),h._3(0,null,null,1,"app-root",[],null,null,null,o,_)),h._1(49152,null,0,r,[],null,null)],null,null)}Object.defineProperty(e,"__esModule",{value:!0});var l={production:!0},s=function(){function t(){}return t}(),r=function(){function t(){this.title="app",this.paymentOptions={},this.paymentOptions.PBFPubKey="FLWPUBK-9eaca37f9eb70d3fe927bfda5e306e07-X",this.paymentOptions.customer_email="mailexample@mail.com",this.paymentOptions.customer_firstname="0907477588",this.paymentOptions.customer_lastname="ekene",this.paymentOptions.custom_description="payment for somehtons",this.paymentOptions.amount=5e5,this.paymentOptions.customer_phone="0902646464646",this.paymentOptions.txref="uisiusiduisui",this.generateRef()}return t.prototype.paymentDone=function(t){console.log(t),this.title="Payment Complete "+t},t.prototype.paymentCancel=function(){this.title="Payment Cancelled"},t.prototype.generateRef=function(){for(var t="abcdefghijklmnopqrstuvwxyz1234567890".split(""),e=12,n="";e;)n+=t[Math.ceil(Math.random()*t.length)],e--;this.ref=n},t.ctorParameters=function(){return[]},t}(),u=[""],a=n("/oeL"),c=function(){function t(){this.onclose=new a.m,this.callback=new a.m,this._raveOptions={}}return t.prototype.buttonClick=function(){this.pay()},t.prototype.pay=function(){if("function"!=typeof window.getpaidSetup)return console.error("Please verify that you imported rave's script into your index.html");if(this.raveOptions&&Object.keys(this.raveOptions).length>3){if(console.log("Options present"),!this.validateOptions())return;window.getpaidSetup(this.raveOptions)}else{if(console.log("Options absent"),!this.validateInput())return;this.insertRaveOptions(),window.getpaidSetup(this._raveOptions)}},t.prototype.insertRaveOptions=function(){var t=this;this.amount&&(this._raveOptions.amount=this.amount),this.PBFPubKey&&(this._raveOptions.PBFPubKey=this.PBFPubKey),this.payment_method&&(this._raveOptions.payment_method=this.payment_method),this.redirect_url&&(this._raveOptions.redirect_url=this.redirect_url),this.integrity_hash&&(this._raveOptions.integrity_hash=this.integrity_hash),this.pay_button_text&&(this._raveOptions.pay_button_text=this.pay_button_text),this.country&&(this._raveOptions.country=this.country),this.currency&&(this._raveOptions.currency=this.currency),this.custom_description&&(this._raveOptions.custom_description=this.custom_description),this.customer_email&&(this._raveOptions.customer_email=this.customer_email),this.custom_logo&&(this._raveOptions.custom_logo=this.custom_logo),this.custom_title&&(this._raveOptions.custom_title=this.custom_title),this.customer_firstname&&(this._raveOptions.customer_firstname=this.customer_firstname),this.customer_lastname&&(this._raveOptions.customer_lastname=this.customer_lastname),this.customer_phone&&(this._raveOptions.customer_phone=this.customer_phone),this.onclose&&(this._raveOptions.onclose=function(){return t.onclose.emit()}),this.callback&&(this._raveOptions.callback=function(e){return t.onclose.emit(e)})},t.prototype.validateOptions=function(){return this.raveOptions.PBFPubKey?this.raveOptions.customer_email||this.raveOptions.customer_phone?this.raveOptions.txref?this.amount?!!this.callback||console.error("You should attach to callback to verify your transaction"):console.error("Amount to charge is required"):console.error("A unique tranaction reference is required"):console.error("Customer email or phone number is required"):console.error("Merchant public key is required")},t.prototype.validateInput=function(){return this.PBFPubKey?this.customer_email||this.customer_phone?this.txref?this.amount?!!this.callback||console.error("You should attach to callback to verify your transaction"):console.error("Amount to charge is required"):console.error("A unique tranaction reference is required"):console.error("Customer email or phone number is required"):console.error("Merchant public key is required")},t.ctorParameters=function(){return[]},t}(),h=n("/oeL"),p=[u],_=h._0({encapsulation:0,styles:p,data:{}}),m=h.Y("app-root",r,i,{},{},[]),f=function(){function t(){}return t}(),y=n("/oeL"),d=n("qbdv"),v=n("fc+i"),b=y.Z(s,[r],function(t){return y._12([y._13(512,y.i,y.W,[[8,[m]],[3,y.i],y.x]),y._13(5120,y.v,y._11,[[3,y.v]]),y._13(4608,d.d,d.c,[y.v]),y._13(4608,y.h,y.h,[]),y._13(5120,y.a,y._4,[]),y._13(5120,y.t,y._9,[]),y._13(5120,y.u,y._10,[]),y._13(4608,v.b,v.s,[d.b]),y._13(6144,y.H,null,[v.b]),y._13(4608,v.e,v.f,[]),y._13(5120,v.c,function(t,e,n,o){return[new v.k(t),new v.o(e),new v.n(n,o)]},[d.b,d.b,d.b,v.e]),y._13(4608,v.d,v.d,[v.c,y.z]),y._13(135680,v.m,v.m,[d.b]),y._13(4608,v.l,v.l,[v.d,v.m]),y._13(6144,y.F,null,[v.l]),y._13(6144,v.p,null,[v.m]),y._13(4608,y.L,y.L,[y.z]),y._13(4608,v.g,v.g,[d.b]),y._13(4608,v.i,v.i,[d.b]),y._13(512,d.a,d.a,[]),y._13(1024,y.l,v.q,[]),y._13(1024,y.b,function(t,e){return[v.r(t,e)]},[[2,v.h],[2,y.y]]),y._13(512,y.c,y.c,[[2,y.b]]),y._13(131584,y._2,y._2,[y.z,y.X,y.r,y.l,y.i,y.c]),y._13(2048,y.e,null,[y._2]),y._13(512,y.d,y.d,[y.e]),y._13(512,v.a,v.a,[[3,v.a]]),y._13(512,f,f,[]),y._13(512,s,s,[])])}),O=n("/oeL"),g=n("fc+i");l.production&&Object(O.R)(),Object(g.j)().bootstrapModuleFactory(b)},gFIY:function(t,e){function n(t){return new Promise(function(e,n){n(new Error("Cannot find module '"+t+"'."))})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="gFIY"}},[0]);