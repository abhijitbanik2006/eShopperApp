(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{107:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c(6),a=c(8),r=c(7),o=c(0),i=c.n(o),l=c(37),u=c(24),p=c.n(u);var h={getProducts:function(){return p.a.get("/products.json")}},d=c(11),m=c(19),f=c(18),g=(c(38),c(20)),E=c(33),y=c(25),v=function(e){var t=e.pList,c=Object(o.useState)(t.slice(0,20)),n=Object(y.a)(c,2),s=n[0],a=n[1],r=Object(o.useState)(!1),u=Object(y.a)(r,2),p=u[0],h=u[1];function d(){window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||p||h(!0)}return Object(o.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]),Object(o.useEffect)((function(){p&&setTimeout((function(){a((function(e){return[].concat(Object(E.a)(e),Object(E.a)(t.slice(e.length,e.length+20)))})),h(!1)}),2e3)}),[p]),i.a.createElement("div",null,s.map((function(t){return i.a.createElement(l.a,{pData:t,code:e.code,exchange:e.exchange,key:t.productId,addedInCart:e.cartData.filter((function(e){return e.productId===t.productId})).length>0,btnClick:function(){!e.cartData.filter((function(e){return e.productId===t.productId})).length>0&&(t.productQty=1,e.addToCart(t)),e.history.push("/cart")}})})),i.a.createElement("div",null,p&&"Fetching more list items..."))},j=c(22),b=function(e){Object(a.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pList:[],currencyExchange:{}},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){this.getData(),this.getCurrencyExchange()}},{key:"getData",value:function(){var e=this;h.getProducts().then((function(t){console.log("success",t),e.setState({pList:t.data})})).catch((function(e){console.log("error",e)}))}},{key:"getCurrencyExchange",value:function(){var e=this;f.a.getCurrencyDetails().then((function(t){console.log("success",t),e.setState({currencyExchange:t.data.Exchange})})).catch((function(e){console.log("error",e)}))}},{key:"render",value:function(){return i.a.createElement("section",null,i.a.createElement("div",{class:"container"},i.a.createElement(g.a,null,i.a.createElement("script",{src:"Assets/js/price-range.js"}),i.a.createElement("script",{src:"Assets/js/jquery.prettyPhoto.js"}),i.a.createElement("script",{src:"Assets/js/main.js"}),i.a.createElement("link",{href:"Assets/css/price-range.css",rel:"stylesheet"}),i.a.createElement("link",{href:"Assets/css/animate.css",rel:"stylesheet"}),i.a.createElement("link",{href:"Assets/css/main.css",rel:"stylesheet"}),i.a.createElement("link",{href:"Assets/css/responsive.css",rel:"stylesheet"}),i.a.createElement("link",{rel:"shortcut icon",href:"Assets/images/ico/favicon.ico"}),i.a.createElement("link",{rel:"apple-touch-icon-precomposed",sizes:"144x144",href:"Assets/images/ico/apple-touch-icon-144-precomposed.png"}),i.a.createElement("link",{rel:"apple-touch-icon-precomposed",sizes:"114x114",href:"Assets/images/ico/apple-touch-icon-114-precomposed.png"}),i.a.createElement("link",{rel:"apple-touch-icon-precomposed",sizes:"72x72",href:"Assets/images/ico/apple-touch-icon-72-precomposed.png"}),i.a.createElement("link",{rel:"apple-touch-icon-precomposed",href:"Assets/images/ico/apple-touch-icon-57-precomposed.png"})),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-sm-3"},i.a.createElement(j.a,null)),i.a.createElement("div",{class:"col-sm-9 padding-right"},i.a.createElement("div",{class:"features_items"},i.a.createElement("h2",{class:"title text-center"},"Features Items"),null!=this.state.pList&&this.state.pList.length>0?i.a.createElement(v,{pList:this.state.pList,code:this.props.selectedCode,exchange:this.state.currencyExchange[this.props.selectedCode],cartData:this.props.cartData,addToCart:this.props.addToCart,history:this.props.history}):"")))))}}]),c}(i.a.Component);t.default=Object(d.b)((function(e){return{selectedCode:e.currency,cartData:e.cart}}),(function(e){return{addToCart:function(t){return e(m.a.addItem(t))}}}))(b)}}]);
//# sourceMappingURL=3.7e679501.chunk.js.map