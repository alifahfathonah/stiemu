(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfc83b58"],{cba1:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AkademikLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-format-columns ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" KARTU RENCANA STUDI ")]},proxy:!0},Object.keys(t.datakrs).length?{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.semester_akademik))+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk melihat detail krs mahasiswa ")])]},proxy:!0}],null,!0)}),Object.keys(t.datakrs).length?e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("DATA KRS")])]),e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ID KRS:")]),e("v-card-subtitle",[t._v(" "+t._s(t.datakrs.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("SAH :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datakrs.sah)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NIM:")]),e("v-card-subtitle",[t._v(" "+t._s(t.datakrs.nim)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("JUMLAH MATKUL / SKS :")]),e("v-card-subtitle",[t._v(" "+t._s(t.jumlah_matkul)+" / "+t._s(t.jumlah_sks)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA MAHASISWA:")]),e("v-card-subtitle",[t._v(" "+t._s(t.datakrs.nama_mhs)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("CREATED / UPDATED :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.datakrs.created_at).format("DD/MM/YYYY HH:mm"))+" / "+t._s(t.$date(t.datakrs.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-title",[t._v(" DAFTAR PENYELENGGARAAN MATAKULIAH "),e("v-spacer")],1),e("v-card-text",[e("v-data-table",{attrs:{headers:t.headers,items:t.datatable,"item-key":"id","disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v(" Data matakuliah belum tersedia silahkan tambah ")]},proxy:!0}],null,!1,2003590328)})],1)],1)],1)],1)],1):t._e()],1)},s=[],r=(e("b64b"),e("96cf"),e("1da1")),n=e("e60c"),l=e("e477"),o={name:"PerkuliahanKRSDetail",created:function(){this.krs_id=this.$route.params.krsid,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"KRS",disabled:!1,href:"/akademik/perkuliahan/krs/daftar"},{text:"TAMBAH MATAKULIAH",disabled:!0,href:"#"}],this.fetchKRS()},data:function(){return{firstloading:!0,nama_prodi:null,tahun_akademik:null,semester_akademik:null,btnLoading:!1,krs_id:null,datakrs:{},jumlah_matkul:0,jumlah_sks:0,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE",value:"kmatkul",sortable:!0,width:120},{text:"NAMA MATAKULIAH",value:"nmatkul",sortable:!0},{text:"SKS",value:"sks",sortable:!1,width:120},{text:"SMT",value:"semester",sortable:!1,width:120}]}},methods:{fetchKRS:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax.get("/akademik/perkuliahan/krs/"+t.krs_id,{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;if(t.datakrs=e.krs,Object.keys(t.datakrs).length){var i=t.datakrs.kjur;t.nama_prodi=t.$store.getters["uiadmin/getProdiName"](i),t.tahun_akademik=t.datakrs.tahun,t.semester_akademik=t.datakrs.idsmt}}));case 2:if(!Object.keys(t.datakrs).length){a.next=6;break}return t.datatableLoading=!0,a.next=6,t.$ajax.post("/akademik/perkuliahan/penyelenggaraanmatakuliah",{prodi_id:t.datakrs.kjur,ta:t.datakrs.tahun,semester_akademik:t.datakrs.idsmt},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.datatable=e.penyelenggaraan,t.datatableLoading=!1})).catch((function(){t.datatableLoading=!1}));case 6:case"end":return a.stop()}}),a)})))()}},components:{AkademikLayout:n["a"],ModuleHeader:l["a"]}},c=o,d=e("2877"),v=e("6544"),m=e.n(v),u=e("0798"),A=e("2bc5"),h=e("b0af"),k=e("99d9"),_=e("62ad"),p=e("a523"),g=e("8fea"),b=e("132d"),f=e("6b53"),E=e("0fd9"),S=e("2fa4"),C=Object(d["a"])(c,i,s,!1,null,null,null);a["default"]=C.exports;m()(C,{VAlert:u["a"],VBreadcrumbs:A["a"],VCard:h["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VCol:_["a"],VContainer:p["a"],VDataTable:g["a"],VIcon:b["a"],VResponsive:f["a"],VRow:E["a"],VSpacer:S["a"]})},e60c:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.isReportPage,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/akademik"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD AKADEMIK")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN-WALI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-teach")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-MATAKULIAH_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-book")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1):t._e(),e("v-subheader",[t._v("DAFTAR ULANG")]),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mhsbelumpunyanim"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-book")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BELUM PUNYA NIM ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-book")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1):t._e(),e("v-subheader",[t._v("KEMAHASISWAAN")]),t.CAN_ACCESS("AKADEMIK-KEMAHASISWAAN-DAFTAR-MAHASISWA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/kemahasiswaan/daftarmahasiswa"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-book")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR MAHASISWA ")])],1)],1):t._e(),e("v-subheader",[t._v("PERKULIAHAN")]),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?e("v-list-group",{attrs:{group:"/akademik/perkuliahan/penyelenggaraan","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-floor-b")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("PENYELENGGARAAN")])],1)]},proxy:!0}],null,!1,2791626149)},[e("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",to:"/akademik/perkuliahan/penyelenggaraan/daftar",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-book")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",disabled:"",to:"/akademik/perkuliahan/penyelenggaraan/tambah"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",disabled:"",to:{path:"/akademik/perkuliahan/penyelenggaraan/"+t.paramid+"/dosenpengampu"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN PENGAMPU ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?e("v-list-group",{attrs:{group:"/akademik/perkuliahan/krs","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-format-columns")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("KRS")])],1)]},proxy:!0}],null,!1,2196385036)},[e("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",to:"/akademik/perkuliahan/krs/daftar",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_SHOW")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/detail"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DETAIL KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",disabled:"",to:"/akademik/perkuliahan/krs/tambah"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?e("v-list-item",{attrs:{link:"","active-class":"light-green lighten-1 white--text",disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/tambahmatkul"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e()],1)]):t._e()],1)],1),e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(e("b0c0"),e("ac1f"),e("5319"),e("5530")),n=e("2f62"),l={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t},isReportPage:function(){return"ReportFormBMurni"==this.$route.name},paramid:function(){var t="empty";switch(console.log(this.$route.name),this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break}return t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},o=l,c=e("2877"),d=e("6544"),v=e.n(d),m=e("40dc"),u=e("5bc1"),A=e("8212"),h=e("ce7e"),k=e("132d"),_=e("adda"),p=e("8860"),g=e("56b0"),b=e("da13"),f=e("8270"),E=e("5d23"),S=e("34c3"),C=e("f6c4"),R=e("e449"),K=e("f774"),T=e("2fa4"),N=e("e0c7"),w=e("afd9"),x=e("2a7f"),I=Object(c["a"])(o,i,s,!1,null,null,null);a["a"]=I.exports;v()(I,{VAppBar:m["a"],VAppBarNavIcon:u["a"],VAvatar:A["a"],VDivider:h["a"],VIcon:k["a"],VImg:_["a"],VList:p["a"],VListGroup:g["a"],VListItem:b["a"],VListItemAvatar:f["a"],VListItemContent:E["a"],VListItemIcon:S["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VMain:C["a"],VMenu:R["a"],VNavigationDrawer:K["a"],VSpacer:T["a"],VSubheader:N["a"],VSystemBar:w["a"],VToolbarTitle:x["a"]})}}]);