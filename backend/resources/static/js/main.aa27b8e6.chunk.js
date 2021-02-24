(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),l=a.n(c),i=(a(28),a(6)),o=a(7),u=a(9),s=a(8),m=(a(18),a(11)),d=a(3),h=a(35),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isOpen:!1},n.toggle=n.toggle.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(d.h,{color:"dark",dark:!0,expand:"md"},r.a.createElement(d.i,{tag:h.a,to:"/"},"The Warehouse"),r.a.createElement(d.j,{onClick:this.toggle}),r.a.createElement(d.c,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(d.e,{className:"ml-auto",navbar:!0},r.a.createElement(d.f,null,r.a.createElement(d.g,{tag:h.a,to:"/"},"Product's List")),r.a.createElement(d.f,null,r.a.createElement(d.g,{tag:h.a,to:"/articles"},"Article's List")))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={articles:[],isLoading:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("api/articles").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,articles:t.inventory})}))}},{key:"render",value:function(){var e=this.state,t=e.articles;if(e.isLoading)return r.a.createElement("p",null,"Loading...");var a=t.map((function(e){return r.a.createElement("tr",{key:e.art_id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.stock),r.a.createElement("td",null))}));return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(d.d,{fluid:!0},r.a.createElement("h3",null,"Articles List"),r.a.createElement(d.k,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Name"),r.a.createElement("th",{width:"20%"},"Stock"),r.a.createElement("th",{width:"60%"}))),r.a.createElement("tbody",null,a))))}}]),a}(n.Component),f=a(36),v=a(37),g=a(38),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={product:[],productdata:[],articles:[],isLoading:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});var t=0;fetch("api/articles").then((function(e){return e.json()})).then((function(t){e.setState({articles:t.inventory})})),fetch("api/getproducts").then((function(e){return e.json()})).then((function(a){var n=a.products;n.map((function(e){t+=1,e.id=t})),e.setState({isLoading:!1,product:n,productdata:a.products})}))}},{key:"remove",value:function(e){fetch("/api/updateproducts/".concat(e),{method:"delete",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){window.location.reload()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.product;if(t.isLoading)return r.a.createElement("p",null,"Loading...");a.map((function(t){var a="";t.contain_articles.map((function(t){e.state.articles.map((function(e){t.art_id==e.art_id&&(t.name=e.name)})),a=a+t.name+" : "+t.amount_of+", "})),t.contains=a})),console.log("product",a);var n=a.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.number),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.contains),r.a.createElement("td",null,r.a.createElement(d.b,null,r.a.createElement(d.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.name)}},"Delete"))),r.a.createElement("td",null))}));return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(d.d,{fluid:!0},r.a.createElement("h3",null,"Products List"),r.a.createElement(d.k,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Name"),r.a.createElement("th",{width:"10%"},"number"),r.a.createElement("th",{width:"20%"},"Contain Articles"),r.a.createElement("th",{width:"10%"},"Actions"),r.a.createElement("th",{width:"40%"}))),r.a.createElement("tbody",null,n))))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(g.a,{path:"/",exact:!0,component:b}),r.a.createElement(g.a,{path:"/articles",exact:!0,component:E})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32);l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.aa27b8e6.chunk.js.map