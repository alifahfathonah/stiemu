(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75696791"],{1105:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-toolbar",{attrs:{elevation:"2"}},[a("v-toolbar-title",[t._v("PROFIL DAN PERMISSION USER")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-icon",{on:{click:function(e){return e.stopPropagation(),t.exit(e)}}},[t._v(" mdi-close-thick ")])],1),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("USER ID:")]),a("v-card-subtitle",[t._v(" "+t._s(t.user.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("NOMOR HP:")]),a("v-card-subtitle",[t._v(" "+t._s(t.user.nomor_hp)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("USERNAME:")]),a("v-card-subtitle",[t._v(" "+t._s(t.user.username)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("THEME:")]),a("v-card-subtitle",[t._v(" "+t._s(t.user.theme)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("NAMA:")]),a("v-card-subtitle",[t._v(" "+t._s(t.user.name)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("ROLE:")]),a("v-card-subtitle",[t._v(" "+t._s(t.role_user)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("EMAIL:")]),a("v-card-subtitle",[t._v(" "+t._s(t.user.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[a("v-card",{staticClass:"mb-2",attrs:{flat:""}},[a("v-card-title",[t._v("CREATED/UPDATED:")]),a("v-card-subtitle",[t._v(" "+t._s(t.$date(t.user.created_at).format("DD/MM/YYYY HH:mm"))+" ~ "+t._s(t.$date(t.user.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(" FILTER ROLE DAN PENCARIAN PERMISSION ")]),a("v-card-text",[a("v-select",{attrs:{label:"ROLES",items:t.daftar_role},model:{value:t.role_name,callback:function(e){t.role_name=e},expression:"role_name"}}),a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{col:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{loading:t.datatableLoading,headers:t.headers,items:t.daftar_permissions,search:t.search,"item-key":"name","sort-by":"name","show-select":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.revoke(i)}}},[t._v(" mdi-delete ")])]}}]),model:{value:t.permissions_selected,callback:function(e){t.permissions_selected=e},expression:"permissions_selected"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.exit(e)}}},[t._v("KELUAR")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:t.btnLoading||!t.permissions_selected.length>0},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)},s=[],r=(a("a15b"),a("b0c0"),a("96cf"),a("1da1")),n={name:"UserPermissions",mounted:function(){this.role_name=this.role_default,this.initialize()},data:function(){return{btnLoading:!1,datatableLoading:!1,headers:[{text:"NAMA PERMISSION",value:"name"},{text:"GUARD",value:"guard_name"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",role_name:null,daftar_role:[],daftar_permissions:[],permissions_selected:[]}},props:{user:{type:Object,required:!0},role_default:{required:!0}},methods:{initialize:function(){var t=this;this.$ajax.get("/system/users/"+this.user.id+"/roles",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;t.daftar_role=a.roles}))},save:function(){var t=this;this.btnLoading=!0,this.$ajax.post("/system/users/storeuserpermissions",{user_id:this.user.id,chkpermission:this.permissions_selected},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){t.exit()})).catch((function(){t.btnLoading=!1}))},revoke:function(t){var e=this;this.btnLoading=!0,this.$ajax.post("/system/users/revokeuserpermissions",{user_id:this.user.id,name:t.name},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.exit()})).catch((function(){e.btnLoading=!1}))},exit:function(){this.$emit("closeUserPermissions")}},computed:{role_user:function(){return this.daftar_role.join(",").toUpperCase()}},watch:{role_name:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t){a.next=7;break}return e.datatableLoading=!0,a.next=4,e.$ajax.get("/system/setting/rolesbyname/"+e.role_name+"/permission",{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.daftar_permissions=a.permissions}));case 4:return a.next=6,e.$ajax.get("/system/users/"+e.user.id+"/permission",{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.permissions_selected=a.permissions}));case 6:e.datatableLoading=!1;case 7:case"end":return a.stop()}}),a)})))()}}},o=n,d=a("2877"),l=a("6544"),c=a.n(l),u=a("8336"),m=a("b0af"),v=a("99d9"),p=a("62ad"),h=a("a523"),f=a("8fea"),_=a("ce7e"),b=a("132d"),g=a("6b53"),S=a("0fd9"),x=a("b974"),E=a("2fa4"),k=a("8654"),I=a("71d9"),A=a("2a7f"),y=Object(d["a"])(o,i,s,!1,null,null,null);e["a"]=y.exports;c()(y,{VBtn:u["a"],VCard:m["a"],VCardActions:v["b"],VCardSubtitle:v["c"],VCardText:v["d"],VCardTitle:v["e"],VCol:p["a"],VContainer:h["a"],VDataTable:f["a"],VDivider:_["a"],VIcon:b["a"],VResponsive:g["a"],VRow:S["a"],VSelect:x["a"],VSpacer:E["a"],VTextField:k["a"],VToolbar:I["a"],VToolbarTitle:A["c"]})},d58d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SystemUserLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" USERS PMB ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" User dengan role PMB bertanggungjawab terhadap proses penerimaan mahasiswa baru. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_users,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR USERS PMB")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),t.$store.getters["auth/can"]("USER_STOREPERMISSIONS")?a("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"warning",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.syncPermission(e)}}},[t._v(" SYNC PERMISSION ")]):t._e(),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.showDialogTambahUserPMB(e)}}},[t._v(" TAMBAH ")]),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-subtitle",[t._v(" Bila program studi, tidak dipilih artinya user ini dapat mengakses seluruh data pmb. ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"NAMA USER",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),a("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),a("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}}),a("v-text-field",{attrs:{label:"USERNAME",outlined:"",rules:t.rule_user_username},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),a("v-text-field",{attrs:{label:"PASSWORD",type:"password",outlined:"",rules:t.rule_user_password},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),a("v-autocomplete",{attrs:{items:t.daftar_prodi,label:"PROGRAM STUDI","item-text":"text","item-value":"id",multiple:"","small-chips":"",outlined:""},model:{value:t.editedItem.prodi_id,callback:function(e){t.$set(t.editedItem,"prodi_id",e)},expression:"editedItem.prodi_id"}}),a("v-autocomplete",{attrs:{items:t.daftar_roles,label:"ROLES",multiple:"","small-chips":"",outlined:""},model:{value:t.editedItem.role_id,callback:function(e){t.$set(t.editedItem,"role_id",e)},expression:"editedItem.role_id"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogEdit,callback:function(e){t.dialogEdit=e},expression:"dialogEdit"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-subtitle",[t._v(" Bila program studi, tidak dipilih artinya user ini dapat mengakses seluruh data pmb ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"NAMA USER",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),a("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),a("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}}),a("v-text-field",{attrs:{label:"USERNAME",outlined:"",rules:t.rule_user_username},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),a("v-text-field",{attrs:{label:"PASSWORD",type:"password",outlined:"",rules:t.rule_user_passwordEdit},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),a("v-autocomplete",{attrs:{items:t.daftar_prodi,label:"PROGRAM STUDI","item-text":"text","item-value":"id",multiple:"","small-chips":"",outlined:""},model:{value:t.editedItem.prodi_id,callback:function(e){t.$set(t.editedItem,"prodi_id",e)},expression:"editedItem.prodi_id"}}),a("v-autocomplete",{attrs:{items:t.daftar_roles,label:"ROLES",multiple:"","small-chips":"",outlined:""},model:{value:t.editedItem.role_id,callback:function(e){t.$set(t.editedItem,"role_id",e)},expression:"editedItem.role_id"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1),t.dialogUserPermission?a("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:t.dialogUserPermission,callback:function(e){t.dialogUserPermission=e},expression:"dialogUserPermission"}},[a("UserPermissions",{attrs:{user:t.editedItem,role_default:"pmb"},on:{closeUserPermissions:t.closeUserPermissions}})],1):t._e()],1)]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.setPermission(i)}}},[t._v(" mdi-axis-arrow-lock ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"item.foto",fn:function(e){var i=e.item;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",{attrs:{src:t.$api.url+"/"+i.foto}})],1)]}},{key:"expanded-item",fn:function(e){var i=e.headers,s=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(s.id)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],r=(a("4160"),a("c975"),a("a434"),a("b0c0"),a("159b"),a("5530")),n=(a("96cf"),a("1da1")),o=a("2f62"),d=a("e0b6"),l=a("e477"),c=a("1105"),u={name:"UsersPMB",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"USER SISTEM",disabled:!1,href:"/system-users"},{text:"USERS PMB",disabled:!0,href:"#"}],this.initialize()},data:function(){return{role_id:0,datatableLoading:!1,btnLoading:!1,headers:[{text:"",value:"foto"},{text:"USERNAME",value:"username",sortable:!0},{text:"NAME",value:"name",sortable:!0},{text:"EMAIL",value:"email",sortable:!0},{text:"NOMOR HP",value:"nomor_hp",sortable:!0},{text:"AKSI",value:"actions",sortable:!1,width:100}],expanded:[],search:"",daftar_users:[],form_valid:!0,daftar_roles:[],dialog:!1,dialogEdit:!1,dialogUserPermission:!1,editedIndex:-1,daftar_prodi:[],editedItem:{id:0,username:"",password:"",name:"",email:"",nomor_hp:"",prodi_id:[],role_id:["pmb"],created_at:"",updated_at:""},defaultItem:{id:0,username:"",password:"",name:"",email:"",nomor_hp:"",prodi_id:[],role_id:["pmb"],created_at:"",updated_at:""},rule_user_name:[function(t){return!!t||"Mohon untuk di isi nama User !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama User hanya boleh string dan spasi"}],rule_user_email:[function(t){return!!t||"Mohon untuk di isi email User !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail harus benar"}],rule_user_nomorhp:[function(t){return!!t||"Nomor HP mohon untuk diisi !!!"},function(t){return/^\+[1-9]{1}[0-9]{1,14}$/.test(t)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}],rule_user_username:[function(t){return!!t||"Mohon untuk di isi username User !!!"},function(t){return/^[A-Za-z_]*$/.test(t)||"Username hanya boleh string dan underscore"}],rule_user_password:[function(t){return!!t||"Mohon untuk di isi password User !!!"},function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}],rule_user_passwordEdit:[function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/userspmb",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data;e.daftar_users=a.users,e.role_id=a.role.id,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},syncPermission:function(){var t=this;this.$root.$confirm.open("Konfirmasi Sinkronisasi","Sinkronisasi hanya untuk user dalam role pmb, bila user memiliki role lain akan terhapus permission-nya ?",{color:"warning",width:500}).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return t.btnLoading=!0,e.next=4,t.$ajax.post("/system/users/syncallpermissions",{role_name:"pmb"},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showDialogTambahUserPMB:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/system/setting/roles",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data,i=a.roles,s=[];i.forEach((function(t){"pmb"==t.name?s.push({text:t.name,disabled:!0}):"dosen"!=t.name&&"dosenwali"!=t.name||s.push({text:t.name,disabled:!1})})),e.daftar_roles=s,e.daftar_prodi=e.$store.getters["uiadmin/getDaftarProdi"],e.dialog=!0}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.editedIndex=this.daftar_users.indexOf(e),e.password="",this.editedItem=Object.assign({},e),this.daftar_prodi=this.$store.getters["uiadmin/getDaftarProdi"],t.next=6,this.$ajax.get("/system/users/"+e.id+"/prodi",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data,i=e.daftar_prodi,s=[];i.forEach((function(t){s.push(t.id)})),a.editedItem.prodi_id=s}));case 6:return t.next=8,this.$ajax.get("/system/setting/roles",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data,i=e.roles,s=[];i.forEach((function(t){"pmb"==t.name?s.push({text:t.name,disabled:!0}):"dosen"!=t.name&&"dosenwali"!=t.name||s.push({text:t.name,disabled:!1})})),a.daftar_roles=s}));case 8:return this.btnLoading=!0,t.next=11,this.$ajax.get("/system/users/"+e.id+"/roles",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;a.editedItem.role_id=e.roles,a.btnLoading=!1,a.dialogEdit=!0}));case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setPermission:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dialogUserPermission=!0,this.editedItem=e;case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.btnLoading=!1,this.dialog=!1,this.dialogEdit=!1,setTimeout((function(){t.$refs.frmdata.resetValidation(),t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},closeUserPermissions:function(){this.btnLoading=!1,this.dialogUserPermission=!1},save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.editedIndex>-1?this.$ajax.post("/system/userspmb/"+this.editedItem.id,{_method:"PUT",name:this.editedItem.name,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp,username:this.editedItem.username,password:this.editedItem.password,prodi_id:JSON.stringify(Object.assign({},this.editedItem.prodi_id)),role_id:JSON.stringify(Object.assign({},this.editedItem.role_id))},{headers:{Authorization:this.TOKEN}}).then((function(e){var a=e.data;Object.assign(t.daftar_users[t.editedIndex],a.user),t.close()})).catch((function(){t.btnLoading=!1})):this.$ajax.post("/system/userspmb/store",{name:this.editedItem.name,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp,username:this.editedItem.username,password:this.editedItem.password,prodi_id:JSON.stringify(Object.assign({},this.editedItem.prodi_id)),role_id:JSON.stringify(Object.assign({},this.editedItem.role_id))},{headers:{Authorization:this.TOKEN}}).then((function(e){var a=e.data;t.daftar_users.push(a.user),t.close()})).catch((function(){t.btnLoading=!1})))},deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus username "+t.username+" ?",{color:"red"}).then((function(a){a&&(e.btnLoading=!0,e.$ajax.post("/system/userspmb/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.TOKEN}}).then((function(){var a=e.daftar_users.indexOf(t);e.daftar_users.splice(a,1),e.btnLoading=!1})).catch((function(){e.btnLoading=!1})))}))}},computed:Object(r["a"])({formTitle:function(){return-1===this.editedIndex?"TAMBAH USER PMB":"EDIT USER PMB"}},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialog:function(t){t||this.close()},dialogEdit:function(t){t||this.close()}},components:{SystemUserLayout:d["a"],ModuleHeader:l["a"],UserPermissions:c["a"]}},m=u,v=a("2877"),p=a("6544"),h=a.n(p),f=a("0798"),_=a("c6a6"),b=a("8212"),g=a("2bc5"),S=a("8336"),x=a("b0af"),E=a("99d9"),k=a("62ad"),I=a("a523"),A=a("8fea"),y=a("169a"),T=a("ce7e"),C=a("4bd4"),R=a("132d"),w=a("adda"),O=a("0fd9"),P=a("2fa4"),$=a("8654"),L=a("71d9"),U=a("2a7f"),M=Object(v["a"])(m,i,s,!1,null,null,null);e["default"]=M.exports;h()(M,{VAlert:f["a"],VAutocomplete:_["a"],VAvatar:b["a"],VBreadcrumbs:g["a"],VBtn:S["a"],VCard:x["a"],VCardActions:E["b"],VCardSubtitle:E["c"],VCardText:E["d"],VCardTitle:E["e"],VCol:k["a"],VContainer:I["a"],VDataTable:A["a"],VDialog:y["a"],VDivider:T["a"],VForm:C["a"],VIcon:R["a"],VImg:w["a"],VRow:O["a"],VSpacer:P["a"],VTextField:$["a"],VToolbar:L["a"],VToolbarTitle:U["c"]})},e0b6:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),a("v-list-item",{attrs:{link:"",to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PROFIL USER ")])],1)],1),a("v-divider"),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?a("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-key")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?a("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-group")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?a("v-divider"):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PUSLAHTA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/puslahta"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PUSLAHTA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e(),"dosen"==t.dashboard?a("v-list-item",{attrs:{link:"",to:"/system-users/biodatadiridosen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e(),"mahasiswa"==t.dashboard?a("v-list-item",{attrs:{link:"",to:"/system-users/biodatadirimahasiswa"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e()],1)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(a("ac1f"),a("5319"),a("5530")),n=a("2f62"),o={name:"SystemUserLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=o,l=a("2877"),c=a("6544"),u=a.n(c),m=a("40dc"),v=a("5bc1"),p=a("8212"),h=a("ce7e"),f=a("132d"),_=a("adda"),b=a("8860"),g=a("da13"),S=a("8270"),x=a("5d23"),E=a("34c3"),k=a("f6c4"),I=a("e449"),A=a("f774"),y=a("2fa4"),T=a("afd9"),C=a("2a7f"),R=Object(l["a"])(d,i,s,!1,null,null,null);e["a"]=R.exports;u()(R,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:p["a"],VDivider:h["a"],VIcon:f["a"],VImg:_["a"],VList:b["a"],VListItem:g["a"],VListItemAvatar:S["a"],VListItemContent:x["g"],VListItemIcon:E["a"],VListItemSubtitle:x["j"],VListItemTitle:x["k"],VMain:k["a"],VMenu:I["a"],VNavigationDrawer:A["a"],VSpacer:y["a"],VSystemBar:T["a"],VToolbarTitle:C["c"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,o=a("2877"),d=a("6544"),l=a.n(d),c=a("62ad"),u=a("a523"),m=a("132d"),v=a("0fd9"),p=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=p.exports;l()(p,{VCol:c["a"],VContainer:u["a"],VIcon:m["a"],VRow:v["a"]})}}]);