(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],m=0,f=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"373f":function(e,t,n){"use strict";n("a68a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body",[e.isOnline?n("p",{attrs:{id:"p-internet"}},[e._v(" Online "),n("b-icon",{attrs:{icon:"bar-chart-fill",variant:"success"}})],1):e._e(),e.isOffline?n("p",{attrs:{id:"p-internet"}},[e._v(" Offline "),n("b-icon",{attrs:{icon:"bar-chart-fill",variant:"danger"}})],1):e._e(),n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/memes"}},[e._v("Memes")])],1),n("router-view")],1)])},a=[],i=n("2877"),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),l=u.exports,c=n("9483");Object(c["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Meme logo",src:n("622e")}}),r("HelloWorld",{attrs:{msg:"Classic memes images"}}),r("Greet")],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},d=[],v={name:"HelloWorld",props:{msg:String}},b=v,_=(n("373f"),Object(i["a"])(b,h,d,!1,null,"3146675a",null)),g=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"Enter name to"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("input",{attrs:{type:"button",value:"Get a greeting"},on:{click:e.getGreeting}})]),e.hasUserInput?n("p",[e._v(" Hey "+e._s(e.userName)+"! Continue to the "),n("router-link",{attrs:{to:"/memes"}},[e._v("Memes")]),e._v(" page to see more. ")],1):e._e()])},y=[],w={name:"Greet",data:function(){return{userName:null,hasUserInput:!1}},methods:{getGreeting:function(){null!==this.userName&&this.userName.length>0?this.hasUserInput=!0:this.hasUserInput=!1}}},j=w,O=Object(i["a"])(j,k,y,!1,null,null,null),x=O.exports,$={name:"Home",components:{HelloWorld:g,Greet:x}},N=$,M=Object(i["a"])(N,f,p,!1,null,null,null),C=M.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"memes"},[n("h1",[e._v("Classic meme templates")]),n("memesList",{attrs:{height:380,width:450}}),e._m(0)],1)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("Source "),n("a",{attrs:{href:"https://api.imgflip.com"}},[e._v("img flip")])])])}],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("Select the quantity of memes to be shown:")]),n("form",[n("b-form-input",{attrs:{id:"b-form",type:"range",min:"1",max:"100"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}},[e._v("$store.state.amount")]),n("br"),n("b-col",{attrs:{sm:"2",id:"numberInput"}},[n("b-form-input",{attrs:{type:"number",min:"1",max:"100",onkeydown:"false"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),n("b-button",{attrs:{id:"b-button",variant:"light",type:"button",size:"sm"},on:{click:function(t){return e.$store.commit("setAmount",e.amount)}}},[e._v("Render")])],1)],1),e.$store.state.amount>0?n("ul",e._l(e.memes.slice(0,e.$store.state.amount),(function(t){return n("li",{key:t.id},[n("br"),n("h2",[e._v(e._s(t.name))]),n("img",{attrs:{src:t.url,height:e.height,width:e.width}})])})),0):e._e()])},P=[],S=(n("a9e3"),{name:"Memes",props:{height:Number,width:Number},data:function(){return{memes:[],amount:null}},created:function(){this.fetchMemes()},computed:{get:function(){return this.$store.state.amount},set:function(e){return this.$store.commit("setAmount",e)}},methods:{fetchMemes:function(){var e=this,t=n("bc3a");t.get("https://api.imgflip.com/get_memes").then((function(t){e.memes=t.data.data.memes}))}}}),H=S,G=Object(i["a"])(H,A,P,!1,null,null,null),I=G.exports,U={name:"MemePage",components:{MemesList:I}},W=U,q=Object(i["a"])(W,E,J,!1,null,null,null),T=q.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[e._m(0),n("div",[n("h2",[e._v("Have you heard of Chuck Norris?")]),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{id:"b-button"},on:{click:e.fetchJoke}},[e._v("Click to get "),n("strong",[e._v("legit")]),e._v(" facts about Mr. Chuck Norris")]),e._m(1),n("b-modal",{attrs:{id:"modal-1",title:"Chuck Norris "}},[n("b-icon",{attrs:{icon:"emoji-laughing"}}),n("p",{staticClass:"my-4"},[e._v(" "+e._s(e.joke)+" ")])],1),null!==e.paramJoke&&e.paramJoke.total>0?n("p",{attrs:{id:"p-about"}},[e._v(" "+e._s(e.paramJoke.result[0].value)+" ")]):e._e()],1),e._m(2)])},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("About memes")]),n("br"),n("p",{attrs:{id:"p-about"}},[e._v(" A meme is a cultural item that is transmitted by repetition and replication in a manner analogous to the biological transmission of genes. "),n("br"),e._v("An item in the form of an image, video, phrase, etc., that is spread via the internet and often altered in a creative or humorous way. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Or type in a word in the addressfield after /about "),n("br"),e._v(' e.g. "/program". ')])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v(" Source "),n("a",{attrs:{href:"https://api.chucknorris.io/"}},[e._v("Chuck Norris")]),e._v(" & "),n("a",{attrs:{href:"https://sv.wikipedia.org/wiki/Meme"}},[e._v("Wikipedia")])])])}],z=(n("d3b7"),{data:function(){return{joke:null,paramJoke:null}},created:function(){this.fetchJoke(),this.fetchJokeParams()},methods:{fetchJoke:function(){var e=this;fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){e.joke=t.value}))},fetchJokeParams:function(){var e=this;fetch("https://api.chucknorris.io/jokes/search?query="+this.$route.params.param).then((function(e){return e.json()})).then((function(t){e.paramJoke=t}))}},watch:{$route:function(e,t){e!==t&&location.reload()}}}),B=z,R=Object(i["a"])(B,F,L,!1,null,null,null),D=R.exports;r["default"].use(m["a"]);var K=[{path:"/",name:"Home",component:C},{path:"/memes/",name:"Memes",component:T},{path:"/about/:param?",name:"About",component:D}],Q=new m["a"]({routes:K}),V=Q,X=n("2f62");r["default"].use(X["a"]);var Y=new X["a"].Store({state:{amount:10},mutations:{setAmount:function(e,t){e.amount=t}},actions:{},modules:{}}),Z=n("bf4e"),ee=n.n(Z),te=n("5f5b"),ne=n("b1e0");n("abe2");r["default"].use(te["a"]),r["default"].use(ne["a"]),r["default"].use(ee.a),r["default"].config.productionTip=!1,new r["default"]({router:V,store:Y,render:function(e){return e(l)}}).$mount("#app")},"622e":function(e,t,n){e.exports=n.p+"img/meme-logo.a12e99cf.png"},a68a:function(e,t,n){},abe2:function(e,t,n){}});
//# sourceMappingURL=app.3670e891.js.map