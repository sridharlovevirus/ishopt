(window.webpackJsonp=window.webpackJsonp||[]).push([[39,40,50,62],{449:function(t,e,n){"use strict";n.r(e);var o={name:"PopOver",components:{},directives:{outsideClick:n(122).a},props:{title:{type:String,default:""},elemId:{type:String,default:""},layer:{type:Boolean,default:!1},outsideClickOn:{type:Boolean,default:!0}},computed:{isSmallerDevice:function(){return window.innerWidth<992},hasFooterSlot:function(){return!!this.$slots["pop-footer"]}},data:function(){return{hasLayer:this.layer}},methods:{outsideClickFn:function(){this.outsideClickOn&&this.closePopOver()},closePopOver:function(){this.$emit("close")}},mounted:function(){this.isSmallerDevice&&(this.hasLayer=!0),this.hasLayer&&document.body.classList.add("no-scroll")},destroyed:function(){document.body.classList.remove("no-scroll")}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pop-over",class:{"has-layer":t.hasLayer}},[e("div",{staticClass:"layer",attrs:{"data-ignore":t.elemId},on:{click:function(e){return e.preventDefault(),t.closePopOver.apply(null,arguments)}}}),t._v(" "),e("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:t.outsideClickFn,expression:"outsideClickFn"}],staticClass:"pop-over-inner",attrs:{id:t.elemId}},[e("div",{staticClass:"pop-heading flex sided plr-20 plr-sm-15 ptb-10 b-b pos-rel"},[t._t("heading",(function(){return[e("h5",{staticClass:"bold"},[t._v("\n          "+t._s(t.title)+"\n        ")])]})),t._v(" "),e("button",{staticClass:"right-btn close-btn pos-static no-shadow",attrs:{"aria-label":"submit"},on:{click:function(e){return e.preventDefault(),t.closePopOver.apply(null,arguments)}}},[e("i",{staticClass:"icon close-icon"})])],2),t._v(" "),e("div",{staticClass:"pop-over-content p-20 p-sm-15"},[t._t("content")],2),t._v(" "),t.hasFooterSlot?e("div",{staticClass:"pop-footer b-t plr-20 plr-sm-15 pt-10 pb-10"},[t._t("pop-footer")],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){"use strict";n.r(e);n(197),n(81);var o=n(471),r={name:"ImageSlider",data:function(){return{glide:null}},watch:{},props:{activeSlide:{type:Number,default:0},imageCount:{type:Number,default:0},perView:{type:Number,default:1},responsive:{type:Array,default:function(){return[1,1,1,1,1]}},gap:{type:Number,default:1},loop:{type:Boolean,default:!1},bullets:{type:Boolean,default:!1},autoplay:{type:Number,default:0},lazyImage:{type:Boolean,default:!1}},components:{},computed:{currentPerView:function(){var t,e;return null===(t=this.glide)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.perView}},mixins:[],methods:{sliderInit:function(){var t=this;this.glide=new o.a(this.$refs.glide,{startAt:this.activeSlide,perView:this.perView,autoplay:this.autoplay,gap:this.gap,perTouch:3,bound:!0,rewind:this.loop,breakpoints:{1200:{perView:this.responsive[0]},992:{perView:this.responsive[1]},768:{perView:this.responsive[2]},576:{perView:this.responsive[3],gap:10},360:{perView:this.responsive[4],gap:10}}}),this.bullets||this.$nextTick((function(){var e=t.currentPerView;t.glide.on("run.before",(function(t){t.steps=">"===t.direction?-e:e}))})),this.lazyImage&&this.$nextTick((function(){t.glide.on("run.before",(function(e){t.imageCount-1>=t.glide.index&&("="===e.direction?t.$emit("change",{index:e.steps-1,direction:1}):t.$emit("change",{index:t.glide.index,direction:">"===e.direction?1:-1}))}))})),this.glide.on("mount.after",(function(){setTimeout((function(){t.$emit("loaded",t.glide.index)}),50)})),this.$emit("glide",this.glide),this.glide.mount()}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.sliderInit()}))}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{ref:"glide",staticClass:"glide"},[t._t("bullet-area",(function(){return[t.bullets?e("ul",{staticClass:"glide-bullets",attrs:{"data-glide-el":"controls[nav]"}},t._l(t.imageCount,(function(t){return e("li",{key:t,attrs:{"data-glide-dir":"=".concat(t-1)}})})),0):t._e()]})),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[e("ul",{staticClass:"glide__slides"},[t._t("content")],2)])],2)}),[function(){var t=this._self._c;return t("div",{staticClass:"glide-nav",attrs:{"data-glide-el":"controls"}},[t("button",{staticClass:"prev-btn",attrs:{"aria-label":"prev","data-glide-dir":"<"}},[t("i",{staticClass:"m-0 icon arrow-left"})]),this._v(" "),t("button",{staticClass:"next-btn",attrs:{"aria-label":"next","data-glide-dir":">"}},[t("i",{staticClass:"m-0 icon arrow-right"})])])}],!1,null,null,null);e.default=component.exports},469:function(t,e,n){"use strict";n.r(e);n(22),n(19),n(23),n(6),n(28),n(20),n(29);var o=n(9),r=n(10);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={data:function(){return{}},props:{product:{type:Object}},components:{},mixins:[],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({currentURL:function(){var t=window.location.origin;return this.$route?t+this.$route.path:t},metaTitle:function(){return this.site_setting.meta_title},metaDescription:function(){return this.site_setting.meta_description},productTags:function(){var t,e;return null!==(t=null===(e=this.product)||void 0===e?void 0:e.tags)&&void 0!==t?t:""}},Object(r.c)("common",["site_setting"])),methods:{},mounted:function(){}},d=c,v=n(13),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex start mt-15 mt-sm social-share"},[e("span",{staticClass:"mr-10 color-lite hide-sm"},[t._v("\n  "+t._s(t.$t("socialShare.share"))+":\n")]),t._v(" "),e("ShareNetwork",{attrs:{network:"facebook",url:t.currentURL,title:t.metaTitle,description:t.metaDescription,quote:t.metaTitle,hashtags:t.productTags}},[e("i",{staticClass:"icon facebook-icon"}),t._v(" "),e("span",{staticClass:"hide block-sm"},[t._v("\n    "+t._s(t.$t("socialShare.facebook"))+"\n  ")])]),t._v(" "),e("ShareNetwork",{staticClass:"mlr-5",attrs:{network:"twitter",url:t.currentURL,title:t.metaTitle,description:t.metaDescription,quote:t.metaTitle,hashtags:t.productTags}},[e("i",{staticClass:"icon twitter-icon"}),t._v(" "),e("span",{staticClass:"hide block-sm"},[t._v("\n    "+t._s(t.$t("socialShare.twitter"))+"\n  ")])]),t._v(" "),e("ShareNetwork",{attrs:{network:"pinterest",url:t.currentURL,title:t.metaTitle,description:t.metaDescription,quote:t.metaTitle,hashtags:t.productTags}},[e("i",{staticClass:"icon pinterest-icon"}),t._v(" "),e("span",{staticClass:"hide block-sm"},[t._v("\n     "+t._s(t.$t("socialShare.pinterest"))+"\n  ")])])],1)}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n(42);e.a={data:function(){return{currentSlider:this.activeId||0,glide:null}},methods:{changed:function(t){var e=t.index,n=t.direction;if(e+n<0)return!1;var o=this,img=this.loadedImage(e+n);null==img||img.addEventListener("load",(function(){img.style.opacity=1})),null==img||img.addEventListener("error",(function(){img.style.opacity=1,img.src=null==o?void 0:o.getImageURL()}))},firstImgLoaded:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this,img=this.loadedImage(e);null==img||img.addEventListener("load",(function(){img.style.opacity=1,t.imgLoaded=!0})),null==img||img.addEventListener("error",(function(){img.style.opacity=1;var o=document.getElementById(t.generateElemId(e));null==o||o.setAttribute("src",null==n?void 0:n.getImageURL())}))},loadedImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.getElementById(this.generateElemId(t));return null==e||e.setAttribute("src",null==e?void 0:e.getAttribute("data-source")),e},generateElemId:function(t){return"".concat(this._uid,"--").concat(t)},loadImage:function(t){var e=this,n=document.getElementById(this.generateElemId(t)),o=(null==n?void 0:n.getAttribute("data-src"))||null;o&&(n.src=o,n.onload=function(){n.removeAttribute("data-src")},n.onerror=function(){n.src=e.imageURL()})},glideSlider:function(data){data.on("run",function(){this.loadImage(data.index),this.currentSlider=data.index}.bind(this))}}}},479:function(t,e,n){"use strict";n.r(e);n(197);var o=n(476),r=n(122),l=n(451),c=n(60),d=n(469),v=n(449),h=n(34),m={name:"ImagePopup",data:function(){return{sharePopOver:!1,scrollPosition:0}},components:{ImageSlider:l.default,LazyImage:c.default,SocialShare:d.default,PopOver:v.default},directives:{outsideClick:r.a},mixins:[h.a,o.a],props:{product:{type:Object},title:{type:String,default:""},activeId:{type:Number,default:1},imageList:{type:Array,default:function(){return[]}},noScroll:{type:Boolean,default:!0},stackedOnResponsive:{type:Boolean,default:!1}},computed:{imageCount:function(){return this.video?this.imageList.length+1:this.imageList.length},video:function(){var t;return(null===(t=this.product)||void 0===t?void 0:t.video)||""},videoThumb:function(){var t;return(null===(t=this.product)||void 0===t?void 0:t.video_thumb)||""},wishListed:function(){var t,e,n;return(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)&&(null===(n=this.product)||void 0===n?void 0:n.wishlisted)},isFavourited:function(){return this.wishListed?"heart-fill-icon":"heart-icon"}},methods:{closePopOver:function(){this.sharePopOver=!1},closePopup:function(){this.$emit("close-popup")}},mounted:function(){this.noScroll&&document.body.classList.add("no-scroll")},destroyed:function(){document.body.classList.remove("no-scroll")}},f=n(13),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-popup-wrapper",class:{stacked:t.stackedOnResponsive}},[t.sharePopOver?e("pop-over",{attrs:{title:t.$t("socialShare.share"),layer:!0,"elem-id":"social-pop-over"},on:{close:t.closePopOver},scopedSlots:t._u([{key:"content",fn:function(){return[e("social-share",{attrs:{product:t.product}})]},proxy:!0}],null,!1,1050117750)}):t._e(),t._v(" "),e("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:t.closePopup,expression:"closePopup"}],staticClass:"image-popup"},[t.stackedOnResponsive?[e("button",{staticClass:"left-btn fav-btn",attrs:{"aria-label":"Favourite"},on:{click:function(e){return e.preventDefault(),t.$emit("add-to-wishlist")}}},[e("i",{staticClass:"m-0 icon",class:t.isFavourited})]),t._v(" "),e("button",{staticClass:"right-btn share-btn",attrs:{"aria-label":"Share"},on:{click:function(e){t.sharePopOver=!t.sharePopOver}}},[e("i",{staticClass:"m-0 icon share-icon"})])]:t._e(),t._v(" "),e("button",{staticClass:"right-btn close-btn",attrs:{"aria-label":"submit"},on:{click:t.closePopup}},[e("i",{staticClass:"m-0 icon close-icon"})]),t._v(" "),e("image-slider",{staticClass:"slider-wrapper",attrs:{"active-slide":t.activeId,"image-count":t.imageCount,bullets:!0,"lazy-image":!0},on:{glide:t.glideSlider,change:t.changed,loaded:t.firstImgLoaded},scopedSlots:t._u([{key:"bullet-area",fn:function(){return[e("div",{staticClass:"thumb-wrapper"},[e("h5",{staticClass:"title mb-10"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"flex start wrap",attrs:{"data-glide-el":"controls[nav]"}},[t._l(t.imageList,(function(n,o){return e("lazy-image",{key:o,staticClass:"img-handler",class:{active:o===t.currentSlider},attrs:{"data-src":t.getThumbImageURL(n.image),"data-glide-dir":"=".concat(o),height:"50",width:"50"}})})),t._v(" "),t.videoThumb?e("div",{staticClass:"img-handler video-thumb",class:{active:t.imageList.length===t.currentSlider},attrs:{"data-glide-dir":"=".concat(t.imageList.length)}},[e("lazy-image",{attrs:{"data-src":t.getImageURL(t.videoThumb),height:"50",width:"50"}}),t._v(" "),e("span",{staticClass:"flex"},[e("i",{staticClass:"icon play-icon"})])],1):t._e()],2)])]},proxy:!0},{key:"content",fn:function(){return[t._l(t.imageList,(function(n,o){return e("li",{key:o},[e("div",{staticClass:"slider-content"},[e("div",{staticClass:"slider-content-inner"},[e("img",{staticClass:"full-dimen opacity-0",attrs:{id:t.generateElemId(o),"data-source":t.getImageURL(n.image),alt:"Product image",height:"100",width:"100"}})])])])})),t._v(" "),t.video?e("li",[e("div",{staticClass:"slider-content"},[e("div",{staticClass:"slider-content-inner"},[e("video",{attrs:{controls:"",autostart:0}},[e("source",{attrs:{src:t.getVideoURL(t.video),type:"video/mp4"}})])])])]):t._e()]},proxy:!0}])})],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialShare:n(469).default,PopOver:n(449).default,LazyImage:n(60).default,ImageSlider:n(451).default})}}]);