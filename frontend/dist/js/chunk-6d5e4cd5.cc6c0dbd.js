(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d5e4cd5"],{"4bd4":function(t,a,e){"use strict";e("4de4"),e("7db0"),e("4160"),e("caad"),e("07ac"),e("2532"),e("159b");var i=e("5530"),n=e("58df"),s=e("7e2b"),r=e("3206");a["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(a.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"94df":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{staticClass:"brown darken-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"brown darken-4",attrs:{width:"300",dark:"",temporary:t.isReportPage,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("DMASTER-GROUP")?e("v-list-item",{attrs:{to:{path:"/dmaster"},link:"",color:"deep-orange darken-1"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-floor-b")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("MODULE DATA MASTER")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/dmaster/fakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/programstudi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-assistant")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-KELAS_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/kelas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-google-classroom")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KELAS ")])],1)],1):t._e()],1)],1),e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],s=(e("b0c0"),e("ac1f"),e("5319"),e("5530")),r=e("2f62"),o={name:"DataMasterLayout",data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t},isReportPage:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),c=e("6544"),u=e.n(c),f=e("40dc"),m=e("5bc1"),v=e("8212"),h=e("ce7e"),p=e("132d"),_=e("adda"),k=e("8860"),b=e("da13"),g=e("8270"),A=e("5d23"),T=e("34c3"),x=e("f6c4"),E=e("e449"),w=e("f774"),C=e("2fa4"),S=e("afd9"),L=e("2a7f"),V=Object(d["a"])(l,i,n,!1,null,null,null);a["a"]=V.exports;u()(V,{VAppBar:f["a"],VAppBarNavIcon:m["a"],VAvatar:v["a"],VDivider:h["a"],VIcon:p["a"],VImg:_["a"],VList:k["a"],VListItem:b["a"],VListItemAvatar:g["a"],VListItemContent:A["a"],VListItemIcon:T["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VMain:x["a"],VMenu:E["a"],VNavigationDrawer:w["a"],VSpacer:C["a"],VSystemBar:S["a"],VToolbarTitle:L["a"]})},aaec:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DataMasterLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-home ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" FAKULTAS ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk mengelola nama-nama fakultas pada perguruan tinggi ")])]},proxy:!0}])}),e("v-container",[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"kode_fakultas","sort-by":"kode_fakultas","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR FAKULTAS")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("TAMBAH")])]}}]),model:{value:t.dialogfrm,callback:function(a){t.dialogfrm=a},expression:"dialogfrm"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-text-field",{attrs:{label:"KODE FAKULTAS",filled:"",rules:t.rule_kode_fakultas},model:{value:t.formdata.kode_fakultas,callback:function(a){t.$set(t.formdata,"kode_fakultas",a)},expression:"formdata.kode_fakultas"}}),e("v-text-field",{attrs:{label:"NAMA FAKULTAS",filled:"",rules:t.rule_nama_fakultas},model:{value:t.formdata.nama_fakultas,callback:function(a){t.$set(t.formdata,"nama_fakultas",a)},expression:"formdata.nama_fakultas"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v("BATAL")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogdetailitem,callback:function(a){t.dialogdetailitem=a},expression:"dialogdetailitem"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("DETAIL DATA")])]),e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("KODE FAKULTAS :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.kode_fakultas)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA FAKULTAS :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.nama_fakultas)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogdetailitem(a)}}},[t._v("KELUAR")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.viewItem(i)}}},[t._v(" mdi-eye ")]),e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),e("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(a){var i=a.headers,n=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("ID:")]),t._v(t._s(n.kode_fakultas)+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],s=(e("c975"),e("a434"),e("5530")),r=(e("96cf"),e("1da1")),o=e("2f62"),l=e("94df"),d=e("e477"),c={name:"Fakultas",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"DATA MASTER",disabled:!1,href:"#"},{text:"FAKULTAS",disabled:!0,href:"#"}],this.initialize()},data:function(){return{btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE FAKULTAS",value:"kode_fakultas",width:150},{text:"NAMA FAKULTAS",value:"nama_fakultas"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",dialogfrm:!1,dialogdetailitem:!1,form_valid:!0,kode_fakultas:"",formdata:{kode_fakultas:"",nama_fakultas:""},formdefault:{kode_fakultas:"",nama_fakultas:""},editedIndex:-1,rule_kode_fakultas:[function(t){return!!t||"Kode Fakultas mohon untuk diisi !!!"},function(t){return/^[1-9]{1}[0-9]{1,14}$/.test(t)||"Kode Fakultas hanya boleh angka"}],rule_nama_fakultas:[function(t){return!!t||"Mohon Nama Fakultas untuk di isi !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Fakultas hanya boleh string dan spasi"}]}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/datamaster/fakultas",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;a.datatable=e.fakultas,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},viewItem:function(t){this.formdata=t,this.dialogdetailitem=!0},editItem:function(t){this.kode_fakultas=t.kode_fakultas,this.editedIndex=this.datatable.indexOf(t),this.formdata=Object.assign({},t),this.dialogfrm=!0},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=9;break}if(this.btnLoading=!0,!(this.editedIndex>-1)){t.next=7;break}return t.next=5,this.$ajax.post("/datamaster/fakultas/"+this.kode_fakultas,{_method:"PUT",kode_fakultas:this.formdata.kode_fakultas,nama_fakultas:this.formdata.nama_fakultas},{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;Object.assign(a.datatable[a.editedIndex],e.fakultas),a.closedialogfrm(),a.btnLoading=!1})).catch((function(){a.btnLoading=!1}));case 5:t.next=9;break;case 7:return t.next=9,this.$ajax.post("/datamaster/fakultas/store",{kode_fakultas:this.formdata.kode_fakultas,nama_fakultas:this.formdata.nama_fakultas},{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;a.datatable.push(e.fakultas),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 9:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data fakultas dengan kode "+t.kode_fakultas+" ?",{color:"red"}).then((function(e){e&&(a.btnLoading=!0,a.$ajax.post("/datamaster/fakultas/"+t.kode_fakultas,{_method:"DELETE"},{headers:{Authorization:a.TOKEN}}).then((function(){var e=a.datatable.indexOf(t);a.datatable.splice(e,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))},closedialogdetailitem:function(){var t=this;this.dialogdetailitem=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogfrm:function(){var t=this;this.dialogfrm=!1,this.$refs.frmdata.reset(),setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)}},computed:Object(s["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"}),{formTitle:function(){return-1===this.editedIndex?"TAMBAH DATA":"UBAH DATA"}}),components:{DataMasterLayout:l["a"],ModuleHeader:d["a"]}},u=c,f=e("2877"),m=e("6544"),v=e.n(m),h=e("0798"),p=e("2bc5"),_=e("8336"),k=e("b0af"),b=e("99d9"),g=e("62ad"),A=e("a523"),T=e("8fea"),x=e("169a"),E=e("ce7e"),w=e("4bd4"),C=e("132d"),S=e("6b53"),L=e("0fd9"),V=e("2fa4"),y=e("8654"),O=e("71d9"),R=e("2a7f"),$=Object(f["a"])(u,i,n,!1,null,null,null);a["default"]=$.exports;v()($,{VAlert:h["a"],VBreadcrumbs:p["a"],VBtn:_["a"],VCard:k["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCol:g["a"],VContainer:A["a"],VDataTable:T["a"],VDialog:x["a"],VDivider:E["a"],VForm:w["a"],VIcon:C["a"],VResponsive:S["a"],VRow:L["a"],VSpacer:V["a"],VTextField:y["a"],VToolbar:O["a"],VToolbarTitle:R["a"]})}}]);