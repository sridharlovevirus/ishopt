(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{729:function(t,e,l){"use strict";l.r(e);var n=l(59),o=l(356),c={name:"tax-rule",middleware:["auth"],data:function(){return{orderOptions:{created_at:{title:"Date"},title:{title:"Title"}}}},mixins:[n.a],components:{ListPage:o.default},computed:{},methods:{},mounted:function(){}},r=l(14),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("list-page",{ref:"listPage",attrs:{"list-api":"getProductCollections","delete-api":"deleteProductCollection","empty-store-variable":"allProductCollections","route-name":"product-collections",name:"product collection","order-options":t.orderOptions,gate:"product_collection"},scopedSlots:t._u([{key:"table",fn:function(e){var n=e.list;return[l("tr",{staticClass:"lite-bold"},[l("th",[t._v("Title")]),t._v(" "),l("th",[t._v("Status")]),t._v(" "),l("th",[t._v("Created")]),t._v(" "),l("th",[t._v(" ")])]),t._v(" "),t._l(n,(function(e,n){return l("tr",{key:n},[l("td",[l("nuxt-link",{staticClass:"link",attrs:{to:"/product-collections/"+e.id}},[l("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])])],1),t._v(" "),l("td",{staticClass:"status",class:{active:1==e.status}},[l("span",[t._v(t._s(t.getStatus(e.status)))])]),t._v(" "),l("td",[t._v(t._s(e.created))]),t._v(" "),l("td",[t.$can("product_collection","edit")?l("button",{staticClass:"lite-btn",on:{click:function(l){return l.preventDefault(),t.$refs.listPage.editItem(e.id)}}},[t._v("Edit")]):t._e(),t._v(" "),t.$can("product_collection","delete")?l("button",{staticClass:"delete-btn lite-btn",on:{click:function(l){return l.preventDefault(),t.$refs.listPage.deleteItem(e.id)}}},[t._v("Delete")]):t._e()])])}))]}}])})}),[],!1,null,"449d4839",null);e.default=component.exports}}]);