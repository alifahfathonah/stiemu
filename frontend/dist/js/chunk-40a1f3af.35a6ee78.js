(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a1f3af"],{"03f6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SystemConfigLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-page-layout-header ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" HEADER LAPORAN ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Mengatur halaman header untuk laporan ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{label:"HEADER 1",outlined:""},model:{value:t.formdata.header_1,callback:function(e){t.$set(t.formdata,"header_1",e)},expression:"formdata.header_1"}}),a("v-text-field",{attrs:{label:"HEADER 2",outlined:""},model:{value:t.formdata.header_2,callback:function(e){t.$set(t.formdata,"header_2",e)},expression:"formdata.header_2"}}),a("v-text-field",{attrs:{label:"HEADER 3",outlined:""},model:{value:t.formdata.header_3,callback:function(e){t.$set(t.formdata,"header_3",e)},expression:"formdata.header_3"}}),a("v-text-field",{attrs:{label:"HEADER 4",outlined:""},model:{value:t.formdata.header_5,callback:function(e){t.$set(t.formdata,"header_5",e)},expression:"formdata.header_5"}}),a("v-text-field",{attrs:{label:"HEADER ALAMAT INSTITUSI",outlined:""},model:{value:t.formdata.header_address,callback:function(e){t.$set(t.formdata,"header_address",e)},expression:"formdata.header_address"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},r=[],s=a("5530"),n=(a("96cf"),a("1da1")),o=a("2f62"),d=a("6135"),l=a("e477"),c={name:"HeaderLaporan",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"PERGURUAN TINGGI",disabled:!1,href:"#"},{text:"HEADER LAPORAN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{header_1:null,header_2:null,header_3:null,header_4:null,header_address:null}}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data,i=a.setting;e.formdata.header_1=i.HEADER_1,e.formdata.header_2=i.HEADER_2,e.formdata.header_3=i.HEADER_3,e.formdata.header_4=i.HEADER_4,e.formdata.header_address=i.HEADER_ADDRESS}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"Header Laporan",setting:JSON.stringify({701:this.formdata.header_1,702:this.formdata.header_2,703:this.formdata.header_3,704:this.formdata.header_4,705:this.formdata.header_address})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(s["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:d["a"],ModuleHeader:l["a"]}},u=c,h=a("2877"),v=a("6544"),m=a.n(v),f=a("0798"),p=a("2bc5"),_=a("8336"),b=a("b0af"),E=a("99d9"),A=a("62ad"),g=a("a523"),T=a("4bd4"),S=a("132d"),C=a("0fd9"),I=a("2fa4"),R=a("8654"),V=Object(h["a"])(u,i,r,!1,null,null,null);e["default"]=V.exports;m()(V,{VAlert:f["a"],VBreadcrumbs:p["a"],VBtn:_["a"],VCard:b["a"],VCardActions:E["a"],VCardText:E["c"],VCol:A["a"],VContainer:g["a"],VForm:T["a"],VIcon:S["a"],VRow:C["a"],VSpacer:I["a"],VTextField:R["a"]})},"0bc6":function(t,e,a){},"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),r=a("58df"),s=a("7e2b"),n=a("3206");e["a"]=Object(r["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},6135:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.hideleftnav,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),a("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),a("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-page-layout-header")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),a("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e()],1)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},r=[],s=(a("b0c0"),a("ac1f"),a("5319"),a("5530")),n=a("2f62"),o={name:"SystemConfigLayout",data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},hideleftnav:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=o,l=a("2877"),c=a("6544"),u=a.n(c),h=a("40dc"),v=a("5bc1"),m=a("8212"),f=a("ce7e"),p=a("132d"),_=a("adda"),b=a("8860"),E=a("da13"),A=a("8270"),g=a("5d23"),T=a("34c3"),S=a("f6c4"),C=a("e449"),I=a("f774"),R=a("2fa4"),V=a("e0c7"),y=a("afd9"),k=a("2a7f"),N=Object(l["a"])(d,i,r,!1,null,null,null);e["a"]=N.exports;u()(N,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VAvatar:m["a"],VDivider:f["a"],VIcon:p["a"],VImg:_["a"],VList:b["a"],VListItem:E["a"],VListItemAvatar:A["a"],VListItemContent:g["a"],VListItemIcon:T["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VMain:S["a"],VMenu:C["a"],VNavigationDrawer:I["a"],VSpacer:R["a"],VSubheader:V["a"],VSystemBar:y["a"],VToolbarTitle:k["a"]})},e0c7:function(t,e,a){"use strict";var i=a("5530"),r=(a("0bc6"),a("7560")),s=a("58df");e["a"]=Object(s["a"])(r["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(i["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);