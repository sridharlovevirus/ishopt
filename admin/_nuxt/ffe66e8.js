(window.webpackJsonp=window.webpackJsonp||[]).push([[30,15,16,17,21],{343:function(e,t,r){"use strict";r.r(t);var n={name:"AjaxButton",components:{Spinner:r(44).default},props:{color:{type:String,default:"white"},text:{type:String,default:"Submit"},onlyIcon:{type:String,default:null},loadingText:{type:String,default:"Getting Response"},fetchingData:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"Submit"}},computed:{buttonText:function(){return this.fetchingData?this.loadingText:this.text},disable:function(){return this.fetchingData}},methods:{btnClicked:function(){"Submit"!==this.type&&this.$emit("clicked")}}},o=(r(350),r(14)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"ajax-btn",attrs:{disabled:e.disable||e.disabled,type:e.type},on:{"&click":function(t){return e.btnClicked.apply(null,arguments)}}},[e.fetchingData?r("spinner",{class:{"mr-15":!e.onlyIcon},attrs:{color:e.color}}):e._e(),e._v(" "),e.onlyIcon&&!e.fetchingData?r("i",{staticClass:"icon",class:e.onlyIcon}):e._e(),e._v(" "),e.onlyIcon?e._e():r("span",[e._v("\n    "+e._s(e.buttonText)+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(44).default})},344:function(e,t,r){"use strict";r.r(t);r(21),r(61),r(81);var n=r(60),o={name:"Dropdown",data:function(){return{optionsData:this.options,searched:"",dropdownOpen:!1,hasLayer:this.layer,selectedKeyData:""}},mounted:function(){this.selectedKeyData=this.selectedKey,this.processSelected(this.options)},watch:{options:function(e){this.processSelected(e)},selectedKey:function(e){this.selectedKeyData=e},searched:function(e){this.doSearch(e)}},props:{disabled:{type:Boolean,default:!1},defaultNull:{type:Boolean,default:!1},positionFixed:{type:Boolean,default:!0},options:{type:Object,default:function(){return{0:{title:"--------------"}}}},selectedKey:{default:function(){return Object.keys(this.options)[0]}},keyName:{type:String,default:"title"},searching:{type:Boolean,default:!1},layer:{type:Boolean,default:!1}},directives:{outsideClick:n.a},computed:{currentId:function(){return"dropdown-".concat(this._uid)},isSmallerDevice:function(){return window.innerWidth<=768},opt:function(){var e;return null!==(e=this.optionsData)&&void 0!==e?e:null},currentKey:function(){return this.selectedKeyData&&this.options[this.selectedKeyData]?this.selectedKeyData:Object.keys(this.optionsData)[0]},selectedValue:function(){return this.opt&&this.opt[this.currentKey]&&this.opt[this.currentKey][this.keyName]?this.opt[this.currentKey][this.keyName]:"--------------"}},methods:{processSelected:function(e){this.selectedKey||this.defaultNull?!this.selectedKey&&this.defaultNull?(e[0]={title:"--------------"},this.selectedKeyData="0"):this.defaultNull&&(e[0]={title:"--------------"}):(this.selectedKeyData=Object.keys(e)[0],this.$emit("clicked",{key:this.selectedKeyData,value:e[0]})),this.optionsData=e},doSearch:function(e){this.optionsData={};var object=this.options;for(var t in object)object[t][this.keyName].toLowerCase().includes(e.toLowerCase())&&(this.opt[t]=object[t])},openDropdown:function(){var e=this;if(this.disabled)return!1;this.isSmallerDevice&&(this.hasLayer=!0),this.hasLayer&&this.positionFixed&&document.body.classList.add("no-scroll"),this.dropdownOpen=!this.dropdownOpen,this.$emit("value",this.dropdownOpen),this.searching&&this.dropdownOpen&&this.$nextTick((function(){e.$refs.searcBox.focus()}))},closeDropdown:function(){this.positionFixed&&document.body.classList.remove("no-scroll"),this.dropdownOpen=!1,this.$emit("value",this.dropdownOpen)},clicked:function(e,t){this.closeDropdown(),this.searched="",("0"!==e&&this.currentKey!==e||this.defaultNull&&this.currentKey!==e)&&(this.selectedKeyData=e,this.$emit("clicked",{key:e,value:t}))}}},l=(r(353),r(14)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom-dropdown",class:{open:e.dropdownOpen}},[r("span",{class:{disabled:e.disabled},attrs:{"data-ignore":e.currentId},on:{click:function(t){return t.preventDefault(),e.openDropdown.apply(null,arguments)}}},[e._v("\n    "+e._s(e.selectedValue)+"\n    "),r("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":e.dropdownOpen},{"arrow-down":!e.dropdownOpen}]})]),e._v(" "),e.dropdownOpen?r("div",{staticClass:"dropdown-wrapper"},[e.hasLayer?r("div",{staticClass:"layer",attrs:{"data-ignore":e.currentId},on:{click:e.closeDropdown}}):e._e(),e._v(" "),r("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.closeDropdown,expression:"closeDropdown"}],staticClass:"dropdown-inner",attrs:{id:e.currentId}},[e.searching?r("input",{directives:[{name:"model",rawName:"v-model",value:e.searched,expression:"searched"}],ref:"searcBox",attrs:{type:"text"},domProps:{value:e.searched},on:{input:function(t){t.target.composing||(e.searched=t.target.value)}}}):e._e(),e._v(" "),r("ul",e._l(e.opt,(function(data,t){return r("li",{key:t,class:{active:""+e.selectedKeyData==""+t},on:{click:function(r){return r.preventDefault(),e.clicked(t,data)}}},[e._v("\n          "+e._s(data[e.keyName])+"\n        ")])})),0)])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},345:function(e,t,r){var content=r(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("91a8990a",content,!0,{sourceMap:!1})},346:function(e,t,r){"use strict";r.r(t);r(21),r(20),r(22),r(8),r(27),r(17),r(28);var n=r(6),o=r(11);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[e._v("Following error occurred")]),e._v(" "),e._l(e.errorData,(function(t,n){return r("li",{key:n},[e._v("\n    "+e._s(t)+"\n  ")])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},347:function(e,t,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("178af679",content,!0,{sourceMap:!1})},350:function(e,t,r){"use strict";r(345)},351:function(e,t,r){var n=r(51)(!1);n.push([e.i,".ajax-btn{display:flex;justify-content:center;align-items:center}button:disabled,button[disabled]{opacity:.6;cursor:no-drop}",""]),e.exports=n},352:function(e,t,r){"use strict";r(29),r(40);t.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,passwordLength:6,maxImageSize:1,maxVideoSize:2,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.size>1024*t*1024?"File size must be less than ".concat(t,"MB"):r&&!this.allowedImageExtensions.exec(e.name)?"Invalid File Type":r||this.allowedVideoExtensions.exec(e.name)?null:"Invalid File Type"},isValidEmail:function(e){return this.reg.test(e)},isValidLength:function(e){return e&&e.length>=this.passwordLength||!1}}}},353:function(e,t,r){"use strict";r(347)},354:function(e,t,r){var n=r(51)(!1);n.push([e.i,".dropdown-inner::-webkit-scrollbar-track{background-color:rgba(0,0,0,.1);background-color:#eee}.dropdown-inner::-webkit-scrollbar{width:8px}.dropdown-inner::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.15);border-radius:40px}.custom-dropdown+button>.undo-icon{opacity:.8;transform:scale(.8)}.custom-dropdown{position:relative;display:inline-block;line-height:0}.custom-dropdown .layer{z-index:1}.custom-dropdown span{display:flex;align-items:center;justify-content:space-between;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 15px 0 20px;height:42px;line-height:42px;background:linear-gradient(180deg,#f7f8fa,#e7e9ec);border:1px solid #bbb;border-radius:5px;font-size:.95em;min-width:80px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .1s}.custom-dropdown span i{opacity:.5;margin-left:10px}.custom-dropdown span:hover:not(.disabled){background:#f6f4f4!important}.custom-dropdown span:active:not(.disabled){box-shadow:0 0 2px 1px #4285f4}.custom-dropdown .dropdown-inner{position:absolute;top:100%;left:0;min-width:200px;background:#fff;padding:7.5px 5px;border-radius:5px;box-shadow:0 2px 10px rgba(0,0,0,.1);z-index:2;max-height:400px;overflow:auto}.custom-dropdown .dropdown-inner>input{padding:0 10px;border:1px solid #ddd;margin-bottom:5px}.custom-dropdown .dropdown-inner ul{max-height:340px}.custom-dropdown .dropdown-inner ul li{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:block;padding:7.5px 20px;transition:all .1s;margin:0}.custom-dropdown .dropdown-inner ul li:hover{background:#eee}.custom-dropdown .dropdown-inner ul .active{background:#f6f6f7}.right-dropdown.custom-dropdown .dropdown-inner{left:auto;right:0}.open span{box-shadow:0 0 1px 1px #4285f4}@media only screen and (max-width:992px){.custom-dropdown .dropdown-wrapper{left:auto;right:0}}@media only screen and (max-width:768px){.custom-dropdown .dropdown-wrapper{position:fixed;top:0;left:0!important;right:0!important;bottom:0;z-index:10}.custom-dropdown .dropdown-wrapper .layer{top:0;display:block}.custom-dropdown .dropdown-wrapper .dropdown-inner{top:50%;left:50%;transform:translate(-50%,-50%)}.custom-dropdown .dropdown-wrapper ul{max-height:60vh}.custom-dropdown .dropdown-wrapper ul li{padding:7.5px 15px}}@media only screen and (max-width:576px){.custom-dropdown span{padding:0 10px 0 15px}}",""]),e.exports=n},629:function(e,t,r){"use strict";r.r(t);r(21),r(20),r(22),r(8),r(27),r(17),r(28);var n=r(3),o=r(6),l=(r(83),r(23),r(343)),c=(r(352),r(44)),d=r(346),f=r(59),m=r(11),h=r(344);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w={name:"MediaStorageSetting",data:function(){return{gettingData:!1,updating:!1,loading:!1,hasError:!1,result:{mediaStorage:null}}},props:{},mixins:[f.a],components:{Dropdown:h.default,AjaxButton:l.default,Spinner:c.default,ErrorFormatter:d.default},computed:{},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({changeMediaStorage:function(data){this.result.mediaStorage=data.key},fetchingData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.getRequest({api:"mediaStorageFind"});case 4:(data=t.sent)&&(e.result=data),e.loading=!1,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",e.$nuxt.error(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.result.mediaStorage){t.next=15;break}return e.updating=!0,t.prev=2,t.next=5,e.setRequest({params:e.result,api:"mediaStorageAction"});case 5:(data=t.sent)&&(e.result=data,setTimeout((function(){window.location.reload()}),1e3)),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.updating=!1,t.next=16;break;case 15:e.hasError=!0;case 16:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},Object(m.b)("common",["setRequest","getRequest"])),created:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchingData();case 2:case"end":return t.stop()}}),t)})))()}},y=w,x=r(14),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.updateData.apply(null,arguments)}}},[e.loading?r("div",{staticClass:"spinner-wrapper"},[r("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),r("div",{staticClass:"input-wrapper "},[r("div",{staticClass:"input-wrapper"},[r("label",{staticClass:"mr-15"},[e._v("\n        Media Storage\n      ")]),e._v(" "),r("dropdown",{staticClass:"mr-10",attrs:{options:e.mediaStorages,"selected-key":e.result.mediaStorage},on:{clicked:e.changeMediaStorage}})],1),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n        Thumb Prefix\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.thumbPrefix,expression:"result.thumbPrefix"}],attrs:{type:"text",placeholder:"eg. thumb-"},domProps:{value:e.result.thumbPrefix},on:{input:function(t){t.target.composing||e.$set(e.result,"thumbPrefix",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n        Default Image\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.defaultImage,expression:"result.defaultImage"}],attrs:{type:"text",placeholder:"eg. default-image.webp"},domProps:{value:e.result.defaultImage},on:{input:function(t){t.target.composing||e.$set(e.result,"defaultImage",t.target.value)}}})]),e._v(" "),"URL"===e.result.mediaStorage?r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n        CDN Url\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.cdnUrl,expression:"result.cdnUrl"}],attrs:{type:"text",placeholder:"CDN Url"},domProps:{value:e.result.cdnUrl},on:{input:function(t){t.target.composing||e.$set(e.result,"cdnUrl",t.target.value)}}})]):"GCS"===e.result.mediaStorage?[r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n          CDN Url\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.cdnUrl,expression:"result.cdnUrl"}],attrs:{type:"text",placeholder:"CDN Url"},domProps:{value:e.result.cdnUrl},on:{input:function(t){t.target.composing||e.$set(e.result,"cdnUrl",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n          Google Cloud Project ID\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcProjectId,expression:"result.gcProjectId"}],attrs:{type:"password",placeholder:"Google Cloud Project ID"},domProps:{value:e.result.gcProjectId},on:{input:function(t){t.target.composing||e.$set(e.result,"gcProjectId",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n          Google Cloud Storage Bucket\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcStorageBucket,expression:"result.gcStorageBucket"}],attrs:{type:"password",placeholder:"Google Cloud Storage Bucket"},domProps:{value:e.result.gcStorageBucket},on:{input:function(t){t.target.composing||e.$set(e.result,"gcStorageBucket",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n          Google Cloud Storage Path Prefix\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcStoragePathPrefix,expression:"result.gcStoragePathPrefix"}],attrs:{type:"password",placeholder:"Google Cloud Storage Path Prefix"},domProps:{value:e.result.gcStoragePathPrefix},on:{input:function(t){t.target.composing||e.$set(e.result,"gcStoragePathPrefix",t.target.value)}}})])]:e._e()],2),e._v(" "),r("div",{staticClass:"oflow-hidden"},[e.$can("setting","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":e.updating}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(44).default,Dropdown:r(344).default,AjaxButton:r(343).default})}}]);