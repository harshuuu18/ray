(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6384:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});var n=r(3812),i=r(5893);function a(e){var s=e.data;return(0,i.jsxs)("div",{className:"CarouselDiv",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("img",{src:"/flash512r.png",alt:"",width:"32px"}),"  ","Flash Deals"]}),(0,i.jsx)("div",{className:"actualCarousel",children:s?s.map((function(e,s){var r=e.name,a=e.price,c=e.url,l=(e._id,e.mediaUrl);return(0,i.jsx)(n.Z,{name:r,price:a,src:l,url:"/product/".concat(c)},s)})):""})]})}},3812:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});var n=r(1664),i=r(5893);function a(e){var s=e.name,r=e.price,a=e.url,c=e.src;return(0,i.jsxs)("div",{className:"product",children:[(0,i.jsx)(n.default,{href:a||"/",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("div",{className:"PrImgCover",children:(0,i.jsx)("img",{src:c||"https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75",alt:""})}),(0,i.jsxs)("h4",{children:[" ",s," "]}),(0,i.jsxs)("section",{className:"price-tag",children:["\u20b9 ",r," "]})]})}),(0,i.jsx)("div",{className:"sale-bookmark",children:(0,i.jsx)("p",{children:"25% Off"})})]})}},3634:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return h}});var n=r(9008),i=(r(8853),r(6384)),a=r(5893);function c(){var e=function(){return(0,a.jsxs)("div",{className:"Carousel2-img",children:[(0,a.jsx)("img",{src:"/shop (1).png",alt:""}),(0,a.jsx)("h3",{children:"Vendor"})]})};return(0,a.jsxs)("div",{className:"Carousel2",children:[(0,a.jsx)("br",{}),(0,a.jsxs)("h2",{children:[(0,a.jsx)("img",{src:"/flash512r.png",alt:"",width:"32px"}),"  ","Top Vendors"]}),(0,a.jsxs)("div",{className:"Carousel2-inner",children:[(0,a.jsx)(e,{}),(0,a.jsx)(e,{}),(0,a.jsx)(e,{}),(0,a.jsx)(e,{})]})]})}var l=r(1664);function t(){return(0,a.jsxs)("div",{className:"newArrival",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)("img",{src:"/new512.png",alt:"",width:"32px"}),"  ","New Arrivals"]}),(0,a.jsxs)("div",{className:"newArrivalDiv",children:[(0,a.jsx)("div",{className:"newArrivalProduct",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"newArrivalProductIn"}),(0,a.jsx)("span",{children:"Hello"})]})})}),(0,a.jsx)("div",{className:"newArrivalProduct",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"newArrivalProductIn"}),(0,a.jsx)("span",{children:"Hello"})]})})}),(0,a.jsx)("div",{className:"newArrivalProduct",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"newArrivalProductIn"}),(0,a.jsx)("span",{children:"Hello"})]})})}),(0,a.jsx)("div",{className:"newArrivalProduct",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"newArrivalProductIn"}),(0,a.jsx)("span",{children:"Hello"})]})})}),(0,a.jsx)("div",{className:"newArrivalProduct",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"newArrivalProductIn"}),(0,a.jsx)("span",{children:"Hello"})]})})}),(0,a.jsx)("div",{className:"newArrivalProduct",children:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:"newArrivalProductIn"}),(0,a.jsx)("span",{children:"Hello"})]})})})]})]})}var d=r(7294);function o(e){var s=e.direction,r=e.moveSlide;return(0,a.jsx)("button",{onClick:r,className:"next"===s?"btn-slide next":"btn-slide prev",children:(0,a.jsx)("img",{src:"next"===s?"https://raw.githubusercontent.com/Ziratsu/Slider-React/8d20927f5b19d9261b49ae717fc7957e5d66080f/src/Components/Slider/icons/right-arrow.svg":"https://raw.githubusercontent.com/Ziratsu/Slider-React/8d20927f5b19d9261b49ae717fc7957e5d66080f/src/Components/Slider/icons/left-arrow.svg"})})}function u(e){var s=e.dataSlider,r=(0,d.useState)(1),n=r[0],i=r[1];return(0,a.jsxs)("div",{className:"container-slider",children:[s?s.map((function(e,s){return(0,a.jsx)("div",{className:n===s+1?"slide active-anim":"slide",children:(0,a.jsx)("img",{src:e.original})},s)})):"",(0,a.jsx)(o,{moveSlide:function(){n!==s.length?i(n+1):n===s.length&&i(1)},direction:"next"}),(0,a.jsx)(o,{moveSlide:function(){1!==n?i(n-1):1===n&&i(s.length)},direction:"prev"}),(0,a.jsx)("div",{className:"container-dots",children:Array.from({length:5}).map((function(e,s){return(0,a.jsx)("div",{onClick:function(){return function(e){i(e)}(s+1)},className:n===s+1?"dot active":"dot"},s)}))})]})}function h(){var e=(0,d.useState)([]),s=e[0],r=e[1];return(0,d.useEffect)((function(){fetch("/api/static/HomePage").then((function(e){e.json().then((function(e){r(e)}))})).catch((function(e){return console.log(e)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:"Best Online shopping store in India"}),(0,a.jsx)("meta",{name:"description",content:"Shop Quality products online form {Store Name} at best prices with fast delivery"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(u,{dataSlider:s.Banner}),(0,a.jsx)(t,{}),(0,a.jsx)(i.Z,{data:s.FlashDeal}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{}),(0,a.jsx)("br",{})]})}},8581:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3634)}])},9008:function(e,s,r){e.exports=r(639)}},function(e){e.O(0,[774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);