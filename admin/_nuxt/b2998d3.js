(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{742:function(e,t,n){"use strict";n.r(t);var l=n(356),r=n(59),d={name:"brands",middleware:["auth"],data:function(){return{orderOptions:{created_at:{title:"Date"},name:{title:"Name"},email:{title:"Email"},replied:{title:"Replied"},viewed:{title:"Viewed"}}}},components:{ListPage:l.default},mixins:[r.a],computed:{},methods:{},mounted:function(){}},c=n(14),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list-page",{ref:"listPage",attrs:{"list-api":"getUserMessages","delete-api":"deleteUserMessage","route-name":"user-messages",name:"user message",gate:"message","add-button":!1,"order-options":e.orderOptions},scopedSlots:e._u([{key:"table",fn:function(t){var l=t.list;return[n("tr",{staticClass:"lite-bold"},[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Email")]),e._v(" "),n("th",[e._v("Replied")]),e._v(" "),n("th",[e._v("Created")]),e._v(" "),n("th",[e._v(" ")])]),e._v(" "),e._l(l,(function(t,l){return n("tr",{key:l},[n("td",[n("span",{staticClass:"mx-w-300x"},[e._v(e._s(t.name))])]),e._v(" "),n("td",[n("span",{staticClass:"mx-w-300x"},[e._v(e._s(t.email))])]),e._v(" "),n("td",{staticClass:"status",class:{active:1===parseInt(t.replied)}},[n("span",[e._v(e._s(e.getFeatured(t.replied)))])]),e._v(" "),n("td",[e._v(e._s(t.created))]),e._v(" "),n("td",[e.$can("message","view")?n("button",{staticClass:"lite-btn",on:{click:function(n){return n.preventDefault(),e.$refs.listPage.editItem(t.id)}}},[e._v("View")]):e._e(),e._v(" "),e.$can("message","delete")?n("button",{staticClass:"delete-btn lite-btn",on:{click:function(n){return n.preventDefault(),e.$refs.listPage.deleteItem(t.id)}}},[e._v("Delete")]):e._e()])])}))]}}])})}),[],!1,null,"450cd930",null);t.default=component.exports}}]);