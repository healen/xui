(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef9923f6"],{"00b3":function(t,e,n){},"0145":function(t,e,n){"use strict";var i=n("00b3"),a=n.n(i);a.a},"362c":function(t,e,n){},3845:function(t,e,n){},"5d36":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"请看页面最下方"}},[n("x-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("x-tabbar-item",{attrs:{icon:"tableware"}},[t._v("点餐")]),n("x-tabbar-item",{attrs:{icon:"order"}},[t._v("订单")]),n("x-tabbar-item",{attrs:{icon:"discover",dot:""}},[t._v("发现")]),n("x-tabbar-item",{attrs:{icon:"me",info:"20"}},[t._v("我的")])],1)],1)],1)},a=[],o=n("e7ba"),c=n("d99e"),r={name:"index",components:{demoSection:o["a"],demoBlock:c["a"]},data:function(){return{active:0}}},s=r,l=(n("0145"),n("2877")),u=Object(l["a"])(s,i,a,!1,null,"72bb62e4",null);u.options.__file="index.vue";e["default"]=u.exports},"64f8":function(t,e,n){"use strict";var i=n("362c"),a=n.n(i);a.a},a651:function(t,e,n){"use strict";var i=n("3845"),a=n.n(i);a.a},d99e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},a=[],o={name:"demoBlock",props:{title:{type:String}}},c=o,r=(n("64f8"),n("2877")),s=Object(r["a"])(c,i,a,!1,null,"ce135a58",null);s.options.__file="demoBlock.vue";e["a"]=s.exports},e7ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},a=[],o={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("呵呵")}}},c=o,r=(n("a651"),n("2877")),s=Object(r["a"])(c,i,a,!1,null,"5a2affe6",null);s.options.__file="demoSection.vue";e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-ef9923f6.05692a77.js.map