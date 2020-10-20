(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d5fbc8b"],{"4bd4":function(t,a,e){"use strict";e("4de4"),e("7db0"),e("4160"),e("caad"),e("07ac"),e("2532"),e("159b");var i=e("5530"),n=e("58df"),r=e("7e2b"),s=e("3206");a["a"]=Object(n["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(a.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"94df":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.hideleftnav,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("DMASTER-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/dmaster"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-floor-b")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD DATA MASTER")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-KELAS_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/kelas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-google-classroom")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KELAS ")])],1)],1):t._e(),e("v-subheader",[t._v("AKADEMIK")]),e("v-list-item",{attrs:{link:"",to:"/dmaster/jabatanakademik"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-chair-rolling")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JABATAN AKADEMIK ")])],1)],1),e("v-list-item",{attrs:{link:"",to:"/dmaster/jenjangstudi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-stairs-up")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JENJANG STUDI ")])],1)],1),e("v-list-item",{attrs:{link:"",to:"/dmaster/statusmahasiswa"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-vertical-lock")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" STATUS MAHASISWA ")])],1)],1),t.CAN_ACCESS("DMASTER-TA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/ta"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAHUN AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/dmaster/fakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/dmaster/programstudi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-assistant")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],r=(e("b0c0"),e("ac1f"),e("5319"),e("5530")),s=e("2f62"),o={name:"DataMasterLayout",props:{showrightsidebar:{type:Boolean,default:!0}},data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(s["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t},hideleftnav:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=o,l=e("2877"),u=e("6544"),c=e.n(u),m=e("40dc"),v=e("5bc1"),f=e("8212"),h=e("ce7e"),p=e("132d"),_=e("adda"),g=e("8860"),k=e("da13"),b=e("8270"),A=e("5d23"),x=e("34c3"),T=e("f6c4"),j=e("e449"),S=e("f774"),w=e("2fa4"),E=e("e0c7"),R=e("afd9"),C=e("2a7f"),O=Object(l["a"])(d,i,n,!1,null,null,null);a["a"]=O.exports;c()(O,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:f["a"],VDivider:h["a"],VIcon:p["a"],VImg:_["a"],VList:g["a"],VListItem:k["a"],VListItemAvatar:b["a"],VListItemContent:A["a"],VListItemIcon:x["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VMain:T["a"],VMenu:j["a"],VNavigationDrawer:S["a"],VSpacer:w["a"],VSubheader:E["a"],VSystemBar:R["a"],VToolbarTitle:C["a"]})},dfe7:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DataMasterLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-home-assistant ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" PROGRAM STUDI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk mengelola nama-nama program studi pada perguruan tinggi. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"nama_prodi","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR PROGRAM STUDI")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(a){return a.stopPropagation(),t.tambahItem(a)}}},[t._v("TAMBAH")]),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogfrm,callback:function(a){t.dialogfrm=a},expression:"dialogfrm"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",["universitas"==t.$store.getters["uifront/getBentukPT"]?e("v-select",{attrs:{label:"FAKULTAS",items:t.daftar_fakultas,"item-text":"nama_fakultas","item-value":"kode_fakultas",outlined:"",rules:t.rule_kode_fakultas},model:{value:t.formdata.kode_fakultas,callback:function(a){t.$set(t.formdata,"kode_fakultas",a)},expression:"formdata.kode_fakultas"}}):t._e(),e("v-text-field",{attrs:{label:"KODE PROGRAM STUDI",outlined:"",rules:t.rule_kode_prodi},model:{value:t.formdata.kode_prodi,callback:function(a){t.$set(t.formdata,"kode_prodi",a)},expression:"formdata.kode_prodi"}}),e("v-text-field",{attrs:{label:"NAMA PROGRAM STUDI",outlined:"",rules:t.rule_nama_prodi},model:{value:t.formdata.nama_prodi,callback:function(a){t.$set(t.formdata,"nama_prodi",a)},expression:"formdata.nama_prodi"}}),e("v-text-field",{attrs:{label:"NAMA SINGKAT PROGRAM STUDI",outlined:"",rules:t.rule_nama_prodi_alias},model:{value:t.formdata.nama_prodi_alias,callback:function(a){t.$set(t.formdata,"nama_prodi_alias",a)},expression:"formdata.nama_prodi_alias"}}),e("v-select",{attrs:{label:"JENJANG",items:t.daftar_jenjang,"item-text":"nama_jenjang","item-value":"kode_jenjang","return-object":"",outlined:"",rules:t.rule_kode_jenjang},model:{value:t.jenjang_studi,callback:function(a){t.jenjang_studi=a},expression:"jenjang_studi"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v("BATAL")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),e("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:t.dialogdetailitem,callback:function(a){t.dialogdetailitem=a},expression:"dialogdetailitem"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("DETAIL DATA")])]),e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("KODE PRODI :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.kode_prodi)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA PRODI :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.nama_prodi)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA SINGKAT PRODI :")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.nama_prodi_alias)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogdetailitem(a)}}},[t._v("KELUAR")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.viewItem(i)}}},[t._v(" mdi-eye ")]),e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),e("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(a){var i=a.headers,n=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("ID:")]),t._v(t._s(n.id)+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],r=(e("c975"),e("a434"),e("5530")),s=(e("96cf"),e("1da1")),o=e("2f62"),d=e("94df"),l=e("e477"),u={name:"ProgramStudi",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"DATA MASTER",disabled:!1,href:"#"},{text:"PROGRAM STUDI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],search:"",dialogfrm:!1,dialogdetailitem:!1,form_valid:!0,daftar_fakultas:[],daftar_jenjang:[],jenjang_studi:null,kode_prodi:"",formdata:{id:0,kode_fakultas:"",kode_prodi:"",nama_prodi:"",nama_prodi_alias:"",kode_jenjang:"",nama_jenjang:""},formdefault:{id:0,kode_fakultas:"",kode_prodi:"",nama_prodi:"",nama_prodi_alias:"",kode_jenjang:"",nama_jenjang:""},editedIndex:-1,rule_kode_fakultas:[function(t){return!!t||"Mohon fakultas untuk dipilih !!!"}],rule_kode_prodi:[function(t){return!!t||"Kode Program Studi mohon untuk diisi !!!"},function(t){return/^[1-9]{1}[0-9]{1,14}$/.test(t)||"Kode Program Studi hanya boleh angka"}],rule_nama_prodi:[function(t){return!!t||"Mohon Nama Program Studi untuk diisi !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Program Studi hanya boleh string dan spasi"}],rule_nama_prodi_alias:[function(t){return!!t||"Mohon Nama Singkat Program Studi untuk diisi !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Singkat Program Studi hanya boleh string dan spasi"}],rule_kode_jenjang:[function(t){return!!t||"Mohon Jenjang Studi untuk dipilih !!!"}]}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/datamaster/programstudi",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;a.datatable=e.prodi,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},tambahItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("universitas"!=this.$store.getters["uifront/getBentukPT"]){t.next=3;break}return t.next=3,this.$ajax.get("/datamaster/fakultas").then((function(t){var e=t.data;a.daftar_fakultas=e.fakultas}));case 3:return t.next=5,this.$ajax.get("/datamaster/programstudi/jenjangstudi").then((function(t){var e=t.data;a.daftar_jenjang=e.jenjangstudi}));case 5:this.dialogfrm=!0;case 6:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),viewItem:function(t){this.formdata=t,this.dialogdetailitem=!0},editItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.editedIndex=this.datatable.indexOf(a),this.formdata=Object.assign({},a),"universitas"!=this.$store.getters["uifront/getBentukPT"]){t.next=5;break}return t.next=5,this.$ajax.get("/datamaster/fakultas").then((function(t){var i=t.data;e.daftar_fakultas=i.fakultas,e.formdata.kode_fakultas=a.kode_fakultas}));case 5:return t.next=7,this.$ajax.get("/datamaster/programstudi/jenjangstudi").then((function(t){var a=t.data;e.daftar_jenjang=a.jenjangstudi}));case 7:this.jenjang_studi={kode_jenjang:a.kode_jenjang,nama_jenjang:a.nama_jenjang},this.dialogfrm=!0;case 9:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),save:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=9;break}if(this.btnLoading=!0,!(this.editedIndex>-1)){t.next=7;break}return t.next=5,this.$ajax.post("/datamaster/programstudi/"+this.formdata.id,{_method:"PUT",kode_fakultas:this.formdata.kode_fakultas,kode_prodi:this.formdata.kode_prodi,nama_prodi:this.formdata.nama_prodi,nama_prodi_alias:this.formdata.nama_prodi_alias,kode_jenjang:this.formdata.kode_jenjang,nama_jenjang:this.formdata.nama_jenjang},{headers:{Authorization:this.TOKEN}}).then((function(){a.initialize(),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 5:t.next=9;break;case 7:return t.next=9,this.$ajax.post("/datamaster/programstudi/store",{kode_fakultas:this.formdata.kode_fakultas,kode_prodi:this.formdata.kode_prodi,nama_prodi:this.formdata.nama_prodi,nama_prodi_alias:this.formdata.nama_prodi_alias,kode_jenjang:this.jenjang_studi.kode_jenjang,nama_jenjang:this.jenjang_studi.nama_jenjang},{headers:{Authorization:this.TOKEN}}).then((function(){a.initialize(),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 9:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data program studi dengan kode "+t.kode_prodi+" ?",{color:"red"}).then((function(e){e&&(a.btnLoading=!0,a.$ajax.post("/datamaster/programstudi/"+t.id,{_method:"DELETE"},{headers:{Authorization:a.TOKEN}}).then((function(){var e=a.datatable.indexOf(t);a.datatable.splice(e,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))},closedialogdetailitem:function(){var t=this;this.dialogdetailitem=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.$refs.frmdata.reset(),t.editedIndex=-1}),300)}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"}),{formTitle:function(){return-1===this.editedIndex?"TAMBAH DATA":"UBAH DATA"},headers:function(){return"universitas"==this.$store.getters["uifront/getBentukPT"]?[{text:"KODE PROGRAM STUDI",value:"kode_prodi",width:250},{text:"NAMA PROGRAM STUDI",value:"nama_prodi"},{text:"FAKULTAS",value:"nama_fakultas",width:200},{text:"JENJANG",value:"nama_jenjang",width:50},{text:"AKSI",value:"actions",sortable:!1,width:100}]:[{text:"KODE PROGRAM STUDI",value:"kode_prodi",width:250},{text:"NAMA PROGRAM STUDI",value:"nama_prodi"},{text:"JENJANG",value:"nama_jenjang",width:50},{text:"AKSI",value:"actions",sortable:!1,width:100}]}}),components:{DataMasterLayout:d["a"],ModuleHeader:l["a"]}},c=u,m=e("2877"),v=e("6544"),f=e.n(v),h=e("0798"),p=e("2bc5"),_=e("8336"),g=e("b0af"),k=e("99d9"),b=e("62ad"),A=e("a523"),x=e("8fea"),T=e("169a"),j=e("ce7e"),S=e("4bd4"),w=e("132d"),E=e("6b53"),R=e("0fd9"),C=e("b974"),O=e("2fa4"),I=e("8654"),y=e("71d9"),P=e("2a7f"),$=Object(m["a"])(c,i,n,!1,null,null,null);a["default"]=$.exports;f()($,{VAlert:h["a"],VBreadcrumbs:p["a"],VBtn:_["a"],VCard:g["a"],VCardActions:k["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VCol:b["a"],VContainer:A["a"],VDataTable:x["a"],VDialog:T["a"],VDivider:j["a"],VForm:S["a"],VIcon:w["a"],VResponsive:E["a"],VRow:R["a"],VSelect:C["a"],VSpacer:O["a"],VTextField:I["a"],VToolbar:y["a"],VToolbarTitle:P["a"]})}}]);