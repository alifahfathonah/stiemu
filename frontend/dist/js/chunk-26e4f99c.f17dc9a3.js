(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26e4f99c"],{"4bd4":function(t,i,e){"use strict";e("4de4"),e("7db0"),e("4160"),e("caad"),e("07ac"),e("2532"),e("159b");var a=e("5530"),s=e("58df"),n=e("7e2b"),r=e("3206");i["a"]=Object(s["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var i=Object.values(t).includes(!0);this.$emit("input",!i)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var i=this,e=function(t){return t.$watch("hasError",(function(e){i.$set(i.errorBag,t._uid,e)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(i.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))})):a.valid=e(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var i=this.inputs.find((function(i){return i._uid===t._uid}));if(i){var e=this.watchers.find((function(t){return t._uid===i._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==i._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==i._uid})),this.$delete(this.errorBag,i._uid)}}},render:function(t){var i=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return i.$emit("submit",t)}}},this.$slots.default)}})},b746:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("SystemUserLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-google-circles-group ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" CAPTCHA ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Setting pengaman dari spammer menggunakan captcha ")])]},proxy:!0}])}),e("v-container",[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(i){t.form_valid=i},expression:"form_valid"}},[e("v-card",[e("v-card-title",[t._v(" Google Recaptcha ")]),e("v-card-text",[e("v-text-field",{attrs:{label:"SITE KEY",filled:"",rules:t.rule_site_key},model:{value:t.formdata.siteKey,callback:function(i){t.$set(t.formdata,"siteKey",i)},expression:"formdata.siteKey"}}),e("v-text-field",{attrs:{label:"PRIVATE KEY",filled:"",rules:t.rule_private_key},model:{value:t.formdata.privateKey,callback:function(i){t.$set(t.formdata,"privateKey",i)},expression:"formdata.privateKey"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(i){return i.stopPropagation(),t.save(i)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],n=e("5530"),r=(e("96cf"),e("1da1")),o=e("2f62"),c=e("e0b6"),l=e("e477"),u={name:"Captcha",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"SERVER",disabled:!1,href:"#"},{text:"CAPTCHA",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{siteKey:"",privateKey:""},rule_site_key:[function(t){return!!t||"Mohon untuk di isi site key !!!"}],rule_private_key:[function(t){return!!t||"Mohon untuk di isi private key !!!"}]}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data,a=e.setting;i.formdata.siteKey=a.CAPTCHA_SITE_KEY,i.formdata.privateKey=a.CAPTCHA_SITE_KEY}));case 3:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"captcha google",setting:JSON.stringify({901:this.formdata.siteKey,902:this.formdata.privateKey})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(n["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemUserLayout:c["a"],ModuleHeader:l["a"]}},d=u,v=e("2877"),m=e("6544"),f=e.n(m),h=e("0798"),p=e("2bc5"),_=e("8336"),g=e("b0af"),b=e("99d9"),E=e("62ad"),S=e("a523"),T=e("4bd4"),C=e("132d"),A=e("0fd9"),y=e("2fa4"),k=e("8654"),I=Object(v["a"])(d,a,s,!1,null,null,null);i["default"]=I.exports;f()(I,{VAlert:h["a"],VBreadcrumbs:p["a"],VBtn:_["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:E["a"],VContainer:S["a"],VForm:T["a"],VIcon:C["a"],VRow:A["a"],VSpacer:y["a"],VTextField:k["a"]})},e0b6:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-system-bar",{staticClass:"brown darken-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(i){i.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?e("v-menu",{attrs:{"close-on-content-click":!1,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("v-btn",t._g({attrs:{icon:""}},a),[e("v-icon",[t._v("mdi-cogs")])],1)]}}],null,!1,501191807)},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-cogs")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" KONFIGURASI SISTEM ")]),e("v-list-item-subtitle")],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("PERGURUAN TINGGI")])],1)],1),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?e("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-chevron-right")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),e("v-list-item",{staticClass:"teal lighten-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("USER")])],1)],1),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?e("v-list-item",{attrs:{link:"",to:"/system-setting/permissions"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-chevron-right")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?e("v-list-item",{attrs:{link:"",to:"/system-setting/roles"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-chevron-right")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),e("v-list-item",{staticClass:"teal lighten-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-server-network")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("SERVER")])],1)],1),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?e("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-chevron-right")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e()],1)],1):t._e(),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(i){return i.preventDefault(),t.logout(i)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),e("v-navigation-drawer",{staticClass:"brown darken-4",attrs:{width:"300",dark:"",temporary:t.isReportPage,app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(i){return i.stopPropagation(),t.toProfile(i)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?e("v-list-item",{attrs:{to:{path:"/system-users"},link:"",color:"deep-orange darken-1"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("MODULE USER SISTEM")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB")?e("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e()],1)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],n=(e("b0c0"),e("ac1f"),e("5319"),e("5530")),r=e("2f62"),o={name:"DataMasterLayout",data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,i=this.ATTRIBUTE_USER("foto");return t=""==i?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+i,t},isReportPage:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var i=this;t>=0?setTimeout((function(){i.loginTime=1==i.AUTHENTICATED?i.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},c=o,l=e("2877"),u=e("6544"),d=e.n(u),v=e("40dc"),m=e("5bc1"),f=e("8212"),h=e("8336"),p=e("ce7e"),_=e("132d"),g=e("adda"),b=e("8860"),E=e("da13"),S=e("8270"),T=e("5d23"),C=e("34c3"),A=e("f6c4"),y=e("e449"),k=e("f774"),I=e("2fa4"),V=e("afd9"),R=e("2a7f"),w=Object(l["a"])(c,a,s,!1,null,null,null);i["a"]=w.exports;d()(w,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:f["a"],VBtn:h["a"],VDivider:p["a"],VIcon:_["a"],VImg:g["a"],VList:b["a"],VListItem:E["a"],VListItemAvatar:S["a"],VListItemContent:T["a"],VListItemIcon:C["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMain:A["a"],VMenu:y["a"],VNavigationDrawer:k["a"],VSpacer:I["a"],VSystemBar:V["a"],VToolbarTitle:R["a"]})}}]);