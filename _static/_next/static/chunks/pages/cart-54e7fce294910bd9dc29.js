(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{9099:function(e,t,n){"use strict";function r(e){var t=e._id,n=e.name,r=e.url,a=e.mediaUrl,i=e.price,s=e.vendor;if(localStorage.getItem("items")){var c=JSON.parse(localStorage.getItem("items")),l=c.find((function(e){return e._id===t}));if(l){var u=c.indexOf(l),o=c[u].quantity;c[u].quantity=o+1}else c.push({_id:t,name:n,url:r,mediaUrl:a,price:i,vendor:s,quantity:1});localStorage.setItem("items",JSON.stringify(c))}}n.d(t,{Z:function(){return r}})},5347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(2982),a=n(282),i=n(9008),s=n(1664),c=n(7294),l=n(9099);var u=n(1163),o=n(5893);function d(){var e=(0,c.useState)([]),t=e[0],n=e[1],d=(0,c.useState)([]),m=d[0],h=d[1],f=(0,c.useState)(""),v=f[0],x=f[1],p=(0,c.useState)(""),j=p[0],g=p[1],S=(0,c.useState)(""),N=S[0],y=S[1],_=(0,c.useState)(""),C=_[0],I=_[1],k=(0,c.useState)(""),O=k[0],b=k[1],w=(0,c.useState)(""),D=w[0],q=w[1],J=(0,c.useState)(""),V=(J[0],J[1],(0,u.useRouter)()),B=[];(0,c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("items")),t=JSON.parse(localStorage.getItem("user"));if(n(e),t){h(t);var r=t.address;r&&(x(r.street),g(r.pin),y(r.city),I(r.state))}}),[]);var E=function(){var e=JSON.parse(localStorage.getItem("items"));n(e)},Z=function(e){var t=e.mediaUrl,n=e.name,r=e.price,i=e.quantity,c=e.url,u=e._id;e.vendor;return(0,o.jsxs)("div",{className:"cartDiv1in",children:[(0,o.jsx)("div",{className:"cartImg",children:(0,o.jsx)("div",{className:"cartActualImg",style:{backgroundImage:"url(".concat(t,")")}})}),(0,o.jsxs)("div",{className:"cartDetails",children:[(0,o.jsxs)("h3",{children:[" ",(0,o.jsx)(s.default,{href:"/product/".concat(c),children:(0,o.jsx)("a",{children:n})})," "]}),(0,o.jsxs)("div",{className:"cartDetailsWBtn",children:[(0,o.jsxs)("div",{className:"cartValue",children:[(0,o.jsxs)("span",{children:["$",r," x ",i]}),(0,o.jsxs)("span",{className:"redBold",children:["$",parseInt(r*i)," "]})]}),(0,o.jsxs)("div",{className:"cartButton",children:[(0,o.jsx)(a.Z,{className:"cartButtonv2",onClick:function(){!function(e){var t=e._id;if(localStorage.getItem("items")){var n=JSON.parse(localStorage.getItem("items")),r=n.find((function(e){return e._id===t}));if(r){var a=n.indexOf(r),i=n[a].quantity;1===i?n.splice(a,1):n[a].quantity=i-1,localStorage.setItem("items",JSON.stringify(n))}}}({_id:u}),E()},children:"-"}),(0,o.jsx)("span",{children:i}),(0,o.jsx)(a.Z,{className:"cartButtonv2",onClick:function(){(0,l.Z)({_id:u}),E()},children:"+"})]})]})]})]})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Cart"}),(0,o.jsx)("meta",{name:"description",content:"Shop Quality products online form {Store Name} at best prices with fast delivery"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("div",{className:"cartDiv",children:[(0,o.jsx)("div",{className:"cartDiv1",children:0===t.length?(0,o.jsx)("h1",{children:"Your Cart is empty !"}):t.map((function(e){var t=e.mediaUrl,n=e.name,r=e.price,a=e.quantity,i=e.url,s=e._id;return B.push(parseInt(r*a)),(0,o.jsx)(Z,{mediaUrl:t,name:n,price:r,quantity:a,url:i,_id:s},s)}))}),(0,o.jsxs)("div",{className:"cartDiv2",children:[(0,o.jsxs)("div",{className:"cartTotal",children:[(0,o.jsx)("span",{children:"Total:"}),(0,o.jsxs)("main",{children:["$",B.reduce((function(e,t){return e+t}),0)," "]})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"cartComment",children:[(0,o.jsx)("p",{children:"Add note"}),(0,o.jsx)("br",{}),(0,o.jsx)("textarea",{name:"comment",id:"",value:O,onChange:function(e){return b(e.target.value)}}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"Voucher"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",placeholder:"Voucher..",value:D,onChange:function(e){return q(e.target.value)}}),(0,o.jsx)("br",{}),(0,o.jsx)(a.Z,{id:"VoucherBtn",children:"Add Voucher"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"cartComment",children:[(0,o.jsx)("p",{children:"Address"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",placeholder:"Street name",value:v,onChange:function(e){return x(e.target.value)}}),(0,o.jsx)("input",{type:"text",placeholder:"Pin code",defaultValue:j,onChange:function(e){return g(e.target.value)}}),(0,o.jsx)("input",{type:"text",placeholder:"City",defaultValue:N,onChange:function(e){return y(e.target.value)}}),(0,o.jsx)("input",{type:"text",placeholder:"State",defaultValue:C,onChange:function(e){return I(e.target.value)}}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)(a.Z,{id:"CheckoutBtn",onClick:function(e){!function(){var e=[];(0,r.Z)(new Map(t.map((function(e){return[e.vendor,e]}))).values()).map((function(e){return e.vendor})).forEach((function(n,r){var a=t.filter((function(e){return e.vendor===n})),i=Date.now()+r;e.push({items:a,vendor:n,id:i,status:"Placed"})}));var n=new Date,a=Date.now()+Math.floor(1881*Math.random()),i=n.toString(),s=n.toLocaleDateString(),c=B.reduce((function(e,t){return e+t}),0);if(0==m.length)V.push("/login");else{var l={cart:e,time:i,payment:"Pending",comment:O,voucher:D,amount:c,orderid:a,address:{street:v,pin:j,city:N,state:C},totalitems:t.length,delivered:!1,date:s};localStorage.setItem("temperory-cart",JSON.stringify(l)),V.push("/checkout")}}()},children:[" ","Checkout"," "]})]})]})]})]})}},4701:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return n(5347)}])},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=4701,e(e.s=t);var t}));var t=e.O();_N_E=t}]);