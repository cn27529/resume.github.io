(function(t){function e(e){for(var n,c,i=e[0],l=e[1],s=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var l=o[c];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"93155fca"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var s=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}r[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0adc":function(t,e,o){},"278c":function(t,e,o){},"50e2":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header",{attrs:{subject:t.subject}}),o("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v(t._s(t.subject))]),o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)},i=[],l={name:"Header",props:{subject:String}},s=l,d=(o("fd8f"),o("2877")),u=Object(d["a"])(s,c,i,!1,null,"0517e8f8",null),p=u.exports,f={name:"App",components:{Header:p},data(){return{subject:"Todo List"}}},m=f,h=(o("034f"),Object(d["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=(o("e6cf"),o("8c4f")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],_=(o("e260"),o("ddb0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",t._l(t.todos,(function(e,n){return o("li",{key:n},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)])}),j=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed},on:{click:t.markComplete}},[o("p",[o("input",{attrs:{type:"checkbox",name:""},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])])},w=[],O={name:"TodoItem",props:["todo"],methods:{markComplete(){this.todo.completed=!this.todo.completed}}},x=O,k=(o("7877"),Object(d["a"])(x,T,w,!1,null,"4f2b4c1e",null)),C=k.exports,P={name:"Todos",components:{TodoItem:C},props:["todos"]},$=P,A=(o("f244"),Object(d["a"])($,_,j,!1,null,"6dff8035",null)),E=A.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},H=[],L={name:"AddTodo",data(){return{title:""}},methods:{addTodo(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},M=L,I=(o("79b7"),Object(d["a"])(M,S,H,!1,null,"01a00cfe",null)),J=I.exports,q=o("bc3a"),z=o.n(q),D={name:"Home",components:{Todos:E,AddTodo:J},data(){return{subject:"Todo List",todos:[{id:1,title:"台灣捐千萬片口罩助防疫 這些國家拿得到",content:"",completed:!1},{id:2,title:"靠人民自律 瑞典「軟防疫」能堵疫情?",content:"",completed:!0},{id:3,title:"2020/04/01 連假前夕抱股意願弱 台股失守9700點",content:"",completed:!1}]}},methods:{deleteTodo(t){console.log("deleteTodo",t);var e="https://jsonplaceholder.typicode.com/todos/".concat(t),o={Authorization:null,"Content-Type":"application/json"},n={headers:o};z.a.delete(e,n).then(e=>{console.log("res",e),this.todos=this.todos.filter(e=>e.id!==t)}).catch(t=>console.log(t))},addTodo(t){console.log("addTodo",t);var{title:e,completed:o}=t;z.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:o}).then(t=>{console.log("res",t),this.todos=[...this.todos,t.data]}).catch(t=>console.log(t))}},created(){z.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(t=>{console.log("res",t),this.todos=t.data}).catch(t=>console.log(t))}},N=D,X=(o("cccb"),Object(d["a"])(N,g,y,!1,null,null,null)),B=X.exports;n["a"].use(b["a"]);var F=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:()=>o.e("about").then(o.bind(null,"f820"))}],G=new b["a"]({routes:F}),K=G;n["a"].config.productionTip=!1,new n["a"]({router:K,render:t=>t(v)}).$mount("#app")},"5ced":function(t,e,o){},6031:function(t,e,o){},7877:function(t,e,o){"use strict";var n=o("50e2"),r=o.n(n);r.a},"79b7":function(t,e,o){"use strict";var n=o("278c"),r=o.n(n);r.a},"85ec":function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a},f244:function(t,e,o){"use strict";var n=o("0adc"),r=o.n(n);r.a},fd8f:function(t,e,o){"use strict";var n=o("6031"),r=o.n(n);r.a}});
//# sourceMappingURL=app.e91e3481.js.map