(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{123:function(e,a,t){},124:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(94),t(26)),i=t(7),u=t(9),m=t(157),s=t(70),d=t.n(s),f=t(163);t(95);function p(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",{className:"menu"},r.a.createElement(f.a.div,{initial:"hidden",animate:t?"open":"hidden"},r.a.createElement(m.a,{"aria-controls":"menu","aria-haspopup":"true",onClick:function(){return n(!t)}},r.a.createElement(d.a,{id:"navIcon",fontSize:"large"})),r.a.createElement(f.a.div,{className:"menu",variants:{open:{opacity:1,y:0},hidden:{opacity:0,y:-700}}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"Home"},"Home")),r.a.createElement("li",null),r.a.createElement("li",null,r.a.createElement(o.b,{to:"preferences"},"Preferences")),r.a.createElement("li",null),r.a.createElement("li",null,r.a.createElement("a",{href:"/auth/logout"},"Logout"))))))}var E=t(54),g=t.n(E),h=t(71),v=t(45),b=Object(n.createContext)(),j=b.Provider;function y(e,a){switch(a.type){case"signin":return a.payload;case"signout":return null;default:return e}}function w(e){e.value;var a=Object(v.a)(e,["value"]),t=Object(n.useReducer)(y,[]),l=Object(u.a)(t,2),c=l[0],o=l[1];return r.a.createElement(j,Object.assign({value:[c,o]},a))}function O(){return Object(n.useContext)(b)}var x=t(20),N=t.n(x),$=(t(123),function(){return r.a.createElement(f.a.div,{className:"square",whileHover:{scale:1.1},whileTap:{scale:2.1}})}),k=t(84),C=t(159),S=Object(k.a)({palette:{primary:{main:"#D92B04"},secondary:{main:"#F25C05"},contrastThreshold:3,tonalOffset:.2}});var T=function(e){return r.a.createElement(C.a,{theme:S},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:e.onClick,type:e.type},e.label))},I=t(161),P=t(160),_=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(0)}}}}));function D(e){var a=_();return r.a.createElement("div",{className:a.root,align:"center"},r.a.createElement(I.a,{className:"container",maxWidth:"sm"},e.children))}t(124);var L=function(){var e=O(),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)(""),d=Object(u.a)(s,2),f=d[0],p=d[1],E=function(){var e=Object(h.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/auth");case 2:(a=e.sent)&&l({type:"signin",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),Object(n.useEffect)((function(){console.log(t)}),[t]),r.a.createElement(D,null,r.a.createElement($,null),r.a.createElement("h4",null,"The app that picks where to eat so you don't have to"),r.a.createElement("h5",null,"Saving marriages and friendships from food-related arguments one click at a time"),r.a.createElement("form",{action:"/auth/signin",method:"POST",id:"loginForm"},r.a.createElement("input",{id:"username",label:"username",name:"username",value:i,onChange:function(e){var a=e.target.value;return m(a)},placeholder:"username"}),r.a.createElement("input",{id:"password",label:"password",name:"password",value:f,onChange:function(e){var a=e.target.value;return p(a)},placeholder:"password"}),r.a.createElement(T,{type:"submit",label:"Login",id:"loginbtn"}),r.a.createElement("p",null,"Don't have an account? Make one!"),r.a.createElement(T,{label:"Create Account",id:"createbtn",onClick:function(e){e.preventDefault();var a={username:i,password:f};N.a.post("/auth/signup",a),m(""),p("")}}),r.a.createElement("div",{id:"googlelogin"},r.a.createElement("h2",null,"Login with Google"),r.a.createElement("a",{href:"/auth/google"},r.a.createElement("i",{className:"fab fa-google"})))),r.a.createElement("h2",null,"i don't care. you pick."))},R=t(51),A=t.n(R),B=t(165),M=t(164),W=t(56),F=function(e){var a=e.handleSubmit;return r.a.createElement(W.b,{initialValues:{$:"",$$:"",$$$:"",$$$$:""},onSubmit:function(e){console.log(e),a(e)}},(function(e){var a=e.handleChange;return r.a.createElement(W.a,null,r.a.createElement(B.a,{value:"1",control:r.a.createElement(M.a,{color:"primary"}),label:"$",labelPlacement:"end",name:"$",onChange:a}),r.a.createElement(B.a,{value:"2",control:r.a.createElement(M.a,{color:"primary"}),label:"$$",name:"$$",labelPlacement:"end",onChange:a}),r.a.createElement(B.a,{value:"3",control:r.a.createElement(M.a,{color:"primary"}),label:"$$$",name:"$$$",labelPlacement:"end",onChange:a}),r.a.createElement(B.a,{value:"4",control:r.a.createElement(M.a,{color:"primary"}),label:"$$$$",name:"$$$$",labelPlacement:"end",onChange:a}),r.a.createElement(T,{label:"Rando",type:"submit"}))}))},H=(t(128),t(74)),q=t.n(H),J=t(75),z=t.n(J),G=t(76),U=t.n(G),V=t(77),K=t.n(V),Q=t(78),X=t.n(Q),Y=t(79),Z=t.n(Y),ee=t(80),ae=t.n(ee),te=t(81),ne=t.n(te);var re,le=[q.a,z.a,U.a,K.a,X.a,Z.a,ae.a,ne.a];re=le,Math.floor(Math.random()*re.length);t(129);var ce=t(82),oe=t.n(ce),ie=t(83),ue=t.n(ie),me=(t(130),Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},image:{width:"100%",maxHeight:"365px",objectFit:"cover",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"}}}))),se=Object(k.a)({palette:{primary:{main:"#D92B04"},secondary:{main:"#4E9DA6"}}});function de(){var e=me(),a=Object(n.useState)(),t=Object(u.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)({}),i=Object(u.a)(o,2),s=i[0],d=i[1],f=Object(n.useState)([]),p=Object(u.a)(f,2),E=p[0],g=p[1];Object(n.useEffect)((function(){h()}),[]),Object(n.useEffect)((function(){v()}),[E]),Object(n.useEffect)((function(){if(s.categories){var e=s.categories;N.a.patch("/api/weights/decrement",e)}}),[s]);var h=function(){navigator.geolocation.getCurrentPosition((function(e){c({latitude:e.coords.latitude,longitude:e.coords.longitude})}))},v=function(){l?N.a.get("/api/restaurants/".concat(l.latitude,"/").concat(l.longitude,"?price=").concat(E)).then((function(e){d(e.data)})).catch((function(e){return console.log(e)})):console.log("cannot get coords")},b=function(e){var a=A.a.chain(e).map((function(e){return e})).filter((function(e){return e})).flatten().value();g(a)};console.log(s);var j=function(){for(var e=.5*Math.round(parseFloat(s.rating)/.5),a=[],t=1;t<6;t++){var n=r.a.createElement("i",{className:"fas fa-star fa-sm"}),l=r.a.createElement("i",{className:"fas fa-star-half-alt fa-sm"});e>t||e===t?a.push(n):t-e===.5&&a.push(l)}return a},y=function(){window.open("http://maps.google.com/?q=".concat(s.location.display_address),"_blank");var e=s.categories;N.a.patch("/api/weights/increment",e)},w=function(){var e=621371e-9*s.distance;return+(Math.round(e+"e+2")+"e-2")},O=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement("img",{className:e.image,src:s.image_url,alt:s.name}),r.a.createElement("h3",{id:"found"},"We found a(n) ",r.a.createElement("span",{id:"attention"},s.categories[0].title)," place for you!"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"resContext"},r.a.createElement("div",{className:"resInfo"},r.a.createElement("div",{className:"infoColumn",id:"price"},s.price),r.a.createElement("div",{className:"infoColumn",align:"right",id:"rating"},r.a.createElement(j,null))),r.a.createElement("div",{className:"resDetails"},r.a.createElement("div",{className:"detailColumnOne",align:"left"},r.a.createElement("p",{className:"label"},"name:"),r.a.createElement("p",{className:"label"},"phone:")),r.a.createElement("div",{className:"detailColumnTwo",align:"left"},r.a.createElement("p",{id:"resName"},s.name),r.a.createElement("div",{id:"row"},r.a.createElement("div",{id:"phone"},r.a.createElement("p",null,s.display_phone)),r.a.createElement("div",{id:"distance"},r.a.createElement("i",{className:"fas fa-map-marker-alt fa-sm"}),r.a.createElement("span",null,r.a.createElement(w,null)," miles")))))),r.a.createElement("hr",null),r.a.createElement("h3",{id:"good"},"Sounds ",r.a.createElement("span",{id:"attention"},"good"),", right?"),r.a.createElement("div",{align:"left"},r.a.createElement(C.a,{theme:se},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:y,startIcon:r.a.createElement(oe.a,null)},"Take me there!"),r.a.createElement(m.a,{id:"nopeBtn",variant:"contained",color:"secondary",onClick:v,startIcon:r.a.createElement(ue.a,null),ml:2},"Next!"))))},x=function(){return r.a.createElement("div",{className:"eats"},r.a.createElement("div",{className:"imgDiv"}),r.a.createElement(F,{handleSubmit:b}))};return r.a.createElement(D,null,Object.keys(s).length?r.a.createElement(O,null):r.a.createElement(x,null))}var fe=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),pe=function(){var e=fe();return r.a.createElement("div",null,r.a.createElement(D,null,r.a.createElement("h1",null,"Restaurant Name"),r.a.createElement("div",{className:"restaurantImage"},r.a.createElement("img",{src:"https://via.placeholder.com/300",alt:"restaurant"})),r.a.createElement("div",{className:"restaurantDetail"},r.a.createElement("h2",null,"Rating: "),r.a.createElement("h2",null,"Location: "),r.a.createElement("h2",null,"Phone: ")),r.a.createElement("div",{className:e.root},r.a.createElement(o.b,{to:"eats"},r.a.createElement(T,{label:"Nope"})),r.a.createElement("a",{href:"https://www.google.com/maps",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(T,{label:"Take Me There!"})))))},Ee=t(162),ge=function(){var e=r.a.useState(!0),a=Object(u.a)(e,2);a[0],a[1];return r.a.createElement(M.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"}})};t(131);function he(e){return r.a.createElement("li",null,e.value," ",r.a.createElement(ge,null))}var ve=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){var e,a;N.a.get("/api/preferences").then((function(t){e=t.data.filter((function(e){return 1===e.categoryType})),a=t.data.filter((function(e){return 2===e.categoryType})),console.log(e),console.log(a),l(e),m(a)}))}),[]),r.a.createElement(Ee.a,null,"Select one dietary preference:",r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(he,{key:e.categoryId,value:e.displayName})}))),"Cuisine choices:",r.a.createElement("ul",null,i.map((function(e){return r.a.createElement(he,{key:e.categoryId,value:e.displayName})}))))};var be=function(){return r.a.createElement("div",null,r.a.createElement(D,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Preferences")),r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(ve,null))))},je=(t(132),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 2021"))}),ye=function(e){var a=e.children,t=Object(v.a)(e,["children"]),n=O(),l=Object(u.a)(n,2),c=l[0];l[1];return console.log(c),r.a.createElement(i.b,Object.assign({},t,{render:function(e){var t=e.location;return Object.keys(c).length?a:r.a.createElement(i.a,{to:{pathname:"/",state:{from:t}}})}}))},we=(t(133),function(){return console.log(window.__INITIAL_STATE__),r.a.createElement(w,null,r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:L}),r.a.createElement(ye,{exact:!0,path:"/home"},r.a.createElement(de,null)),r.a.createElement(ye,{exact:!0,path:"/details"},r.a.createElement(pe,null)),r.a.createElement(ye,{exact:!0,path:"/preferences"},r.a.createElement(be,null)))),r.a.createElement(je,null))}),Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(we,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Oe?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):xe(e)}))}}()},74:function(e,a,t){e.exports=t.p+"static/media/1.f486b146.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/2.6a4cdeec.jpg"},76:function(e,a,t){e.exports=t.p+"static/media/3.ab029fb0.jpg"},77:function(e,a,t){e.exports=t.p+"static/media/4.0560536a.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/5.a76333ce.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/6.7b871db9.jpg"},80:function(e,a,t){e.exports=t.p+"static/media/7.52731735.jpg"},81:function(e,a,t){e.exports=t.p+"static/media/8.1e6e2017.jpg"},89:function(e,a,t){e.exports=t(134)},94:function(e,a,t){},95:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.b44f8a42.chunk.js.map