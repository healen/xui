(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b06cd89"],{"16a6":function(t,e,n){"use strict";var i=n("c21d"),o=n.n(i);o.a},"362c":function(t,e,n){},3845:function(t,e,n){},"64f8":function(t,e,n){"use strict";var i=n("362c"),o=n.n(i);o.a},"9a10":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("x-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(t){return n("x-cell",{key:t,attrs:{title:t}})}))],1)],1)},o=[],a=n("e7ba"),l=n("d99e"),c={name:"index",components:{demoSection:a["a"],demoBlock:l["a"]},data:function(){return{list:[],loading:!1,finished:!1}},methods:{onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<10;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)}}},s=c,r=(n("16a6"),n("2877")),u=Object(r["a"])(s,i,o,!1,null,"78031dbe",null);u.options.__file="index.vue";e["default"]=u.exports},a651:function(t,e,n){"use strict";var i=n("3845"),o=n.n(i);o.a},c21d:function(t,e,n){},d99e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},o=[],a={name:"demoBlock",props:{title:{type:String}}},l=a,c=(n("64f8"),n("2877")),s=Object(c["a"])(l,i,o,!1,null,"ce135a58",null);s.options.__file="demoBlock.vue";e["a"]=s.exports},e7ba:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},o=[],a={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("呵呵")}}},l=a,c=(n("a651"),n("2877")),s=Object(c["a"])(l,i,o,!1,null,"5a2affe6",null);s.options.__file="demoSection.vue";e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-6b06cd89.a7190073.js.map