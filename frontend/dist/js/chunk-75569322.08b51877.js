(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75569322"],{1105:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("USER PERMISSIONS")])]),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[s("v-card",[s("v-card-text",[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("ID :")]),s("v-card-text",[t._v(" "+t._s(t.user.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("NOMOR HP :")]),s("v-card-text",[t._v(" "+t._s(t.user.nomor_hp)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("USERNAME :")]),s("v-card-text",[t._v(" "+t._s(t.user.username)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("THEME :")]),s("v-card-text",[t._v(" "+t._s(t.user.theme)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("NAMA :")]),s("v-card-text",[t._v(" "+t._s(t.user.name)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("CREATED :")]),s("v-card-text",[t._v(" "+t._s(t.$date(t.user.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("EMAIL :")]),s("v-card-text",[t._v(" "+t._s(t.user.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("UPDATED :")]),s("v-card-text",[t._v(" "+t._s(t.$date(t.user.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-text",[s("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{col:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_permissions,search:t.search,"item-key":"name","sort-by":"name","show-select":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var i=e.item;return[s("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.revoke(i)}}},[t._v(" mdi-delete ")])]}}]),model:{value:t.permissions_selected,callback:function(e){t.permissions_selected=e},expression:"permissions_selected"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("KELUAR")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:t.btnLoading||!t.perm_selected.length>0},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)},a=[],n=(s("b0c0"),s("5530")),r=s("2f62"),o={name:"UserPermissions",data:function(){return{btnLoading:!1,headers:[{text:"NAMA PERMISSION",value:"name"},{text:"GUARD",value:"guard_name"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",perm_selected:[],perm_revoked:[]}},methods:{save:function(){var t=this;this.btnLoading=!0,this.$ajax.post("/system/users/storeuserpermissions",{user_id:this.user.id,chkpermission:this.permissions_selected},{headers:{Authorization:this.TOKEN}}).then((function(){t.close()})).catch((function(){t.btnLoading=!1}))},revoke:function(t){var e=this;this.btnLoading=!0,this.$ajax.post("/system/users/revokeuserpermissions",{user_id:this.user.id,name:t.name},{headers:{Authorization:this.TOKEN}}).then((function(){e.close()})).catch((function(){e.btnLoading=!1}))},close:function(){this.btnLoading=!1,this.permissions_selected=[],this.$emit("closeUserPermissions")}},props:{user:Object,daftarpermissions:Array,permissionsselected:Array},computed:Object(n["a"])({},Object(r["b"])("auth",{TOKEN:"Token"}),{daftar_permissions:function(){return this.daftarpermissions},permissions_selected:{get:function(){return this.perm_selected.length>0?this.perm_selected:this.permissionsselected},set:function(t){this.perm_selected=t}}})},d=o,l=s("2877"),c=s("6544"),u=s.n(c),m=s("8336"),v=s("b0af"),p=s("99d9"),h=s("62ad"),_=s("a523"),f=s("8fea"),b=s("132d"),g=s("6b53"),S=s("0fd9"),x=s("2fa4"),E=s("8654"),I=Object(l["a"])(d,i,a,!1,null,null,null);e["a"]=I.exports;u()(I,{VBtn:m["a"],VCard:v["a"],VCardActions:p["b"],VCardText:p["d"],VCardTitle:p["e"],VCol:h["a"],VContainer:_["a"],VDataTable:f["a"],VIcon:b["a"],VResponsive:g["a"],VRow:S["a"],VSpacer:x["a"],VTextField:E["a"]})},"9f67":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SystemUserLayout",[s("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" USERS DOSEN ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[s("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[s("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" User dengan role DOSEN bertanggungjawab terhadap proses pembelajaran mahasiswa. ")])]},proxy:!0}])}),s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-text",[s("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_users,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-toolbar-title",[t._v("DAFTAR USERS DOSEN")]),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-spacer"),t.$store.getters["auth/can"]("USER_STOREPERMISSIONS")?s("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"warning",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.syncPermission(e)}}},[t._v(" SYNC PERMISSION ")]):t._e(),s("v-btn",{staticClass:"mb-2",attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.showDialogTambahUserDosen(e)}}},[t._v(" TAMBAH ")]),s("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),s("v-card-text",[s("v-text-field",{attrs:{label:"NAMA DOSEN",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),s("v-text-field",{attrs:{label:"NIDN (NOMOR INDUK DOSEN NASIONAL)",outlined:""},model:{value:t.editedItem.nidn,callback:function(e){t.$set(t.editedItem,"nidn",e)},expression:"editedItem.nidn"}}),s("v-text-field",{attrs:{label:"NIPY (NOMOR INDUK PEGAWAI YAYASAN)",outlined:"",rules:t.rule_nipy},model:{value:t.editedItem.nipy,callback:function(e){t.$set(t.editedItem,"nipy",e)},expression:"editedItem.nipy"}}),s("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),s("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}}),s("v-text-field",{attrs:{label:"USERNAME",outlined:"",rules:t.rule_user_username},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),s("v-text-field",{attrs:{label:"PASSWORD",type:"password",outlined:"",rules:t.rule_user_password},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),s("v-switch",{attrs:{label:"SEBAGAI DOSEN WALI"},model:{value:t.editedItem.is_dw,callback:function(e){t.$set(t.editedItem,"is_dw",e)},expression:"editedItem.is_dw"}})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogEdit,callback:function(e){t.dialogEdit=e},expression:"dialogEdit"}},[s("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),s("v-card-text",[s("v-text-field",{attrs:{label:"NAMA DOSEN",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),s("v-text-field",{attrs:{label:"NIDN (NOMOR INDUK DOSEN NASIONAL)",outlined:""},model:{value:t.editedItem.nidn,callback:function(e){t.$set(t.editedItem,"nidn",e)},expression:"editedItem.nidn"}}),s("v-text-field",{attrs:{label:"NIPY (NOMOR INDUK PEGAWAI YAYASAN)",outlined:"",rules:t.rule_nipy},model:{value:t.editedItem.nipy,callback:function(e){t.$set(t.editedItem,"nipy",e)},expression:"editedItem.nipy"}}),s("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),s("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}}),s("v-text-field",{attrs:{label:"USERNAME",outlined:"",rules:t.rule_user_username},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),s("v-text-field",{attrs:{label:"PASSWORD",type:"password",outlined:"",rules:t.rule_user_passwordEdit},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),s("v-switch",{attrs:{label:"SEBAGAI DOSEN WALI"},model:{value:t.editedItem.is_dw,callback:function(e){t.$set(t.editedItem,"is_dw",e)},expression:"editedItem.is_dw"}})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:t.dialogUserPermission,callback:function(e){t.dialogUserPermission=e},expression:"dialogUserPermission"}},[s("UserPermissions",{attrs:{user:t.editedItem,daftarpermissions:t.daftar_permissions,permissionsselected:t.permissions_selected},on:{closeUserPermissions:t.closeUserPermissions}})],1)],1)]},proxy:!0},{key:"item.nidn",fn:function(e){var s=e.item;return[t._v(" "+t._s((s.nidn&&s.nidn.length>0)>0?s.nidn:"N.A")+" ")]}},{key:"item.is_dw",fn:function(e){var s=e.item;return[t._v(" "+t._s(0==s.is_dw?"BUKAN":"YA")+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return["dosen"==i.default_role?s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"primary",icon:"","x-small":"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.setPermission(i)}}},"v-btn",n,!1),a),[s("v-icon",[t._v("mdi-axis-arrow-lock")])],1)]}}],null,!0)},[s("span",[t._v("Setting Hak Akses")])]):t._e(),"dosen"==i.default_role?s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"primary",icon:"","x-small":"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},"v-btn",n,!1),a),[s("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!0)},[s("span",[t._v("Ubah data user dosen")])]):t._e(),"dosen"==i.default_role?s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"warning",icon:"","x-small":"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},"v-btn",n,!1),a),[s("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[s("span",[t._v("Hapus data user dosen")])]):t._e()]}},{key:"item.foto",fn:function(e){var i=e.item;return[s("v-avatar",{attrs:{size:"30"}},[s("v-img",{attrs:{src:t.$api.url+"/"+i.foto}})],1)]}},{key:"expanded-item",fn:function(e){var i=e.headers,a=e.item;return[s("td",{staticClass:"text-center",attrs:{colspan:i.length}},[s("v-col",{attrs:{cols:"12"}},[s("strong",[t._v("ID:")]),t._v(t._s(a.id)+" "),s("strong",[t._v("Email:")]),t._v(t._s(a.email)+" "),s("strong",[t._v("created_at:")]),t._v(t._s(t.$date(a.created_at).format("DD/MM/YYYY HH:mm"))+" "),s("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(a.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])}),s("p",{staticClass:"text--secondary"},[t._v("DW : Dosen Wali")])],1)],1)],1)],1)},a=[],n=(s("c975"),s("a434"),s("b0c0"),s("5530")),r=(s("96cf"),s("1da1")),o=s("2f62"),d=s("e0b6"),l=s("e477"),c=s("1105"),u={name:"UsersDosen",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"USER SISTEM",disabled:!1,href:"/system-users"},{text:"USERS DOSEN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{role_id:0,datatableLoading:!1,btnLoading:!1,headers:[{text:"",value:"foto"},{text:"USERNAME",value:"username",sortable:!0,width:150},{text:"NAMA DOSEN",value:"name",sortable:!0,width:250},{text:"NIDN",value:"nidn",sortable:!0},{text:"NIPY",value:"nipy",sortable:!0},{text:"NOMOR HP",value:"nomor_hp",sortable:!0},{text:"DW",value:"is_dw",sortable:!0},{text:"ROLE ASAL",value:"default_role",sortable:!0},{text:"AKSI",value:"actions",sortable:!1,width:120}],expanded:[],search:"",daftar_users:[],daftar_permissions:[],permissions_selected:[],form_valid:!0,dialog:!1,dialogEdit:!1,dialogUserPermission:!1,editedIndex:-1,editedItem:{id:0,username:"",password:"",name:"",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},defaultItem:{id:0,username:"",password:"",name:"",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},rule_user_name:[function(t){return!!t||"Mohon untuk di isi nama Dosen !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Dosen hanya boleh string dan spasi"}],rule_nidn:[function(t){return/^[0-9]+$/.test(t)||"NIDN hanya boleh angka"}],rule_nipy:[function(t){return/^[0-9]+$/.test(t)||"Nomor Induk Pegawai Yayasan (NIPY) hanya boleh angka"}],rule_user_email:[function(t){return!!t||"Mohon untuk di isi email User !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail harus benar"}],rule_user_nomorhp:[function(t){return!!t||"Nomor HP mohon untuk diisi !!!"},function(t){return/^\+[1-9]{1}[0-9]{1,14}$/.test(t)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}],rule_user_username:[function(t){return!!t||"Mohon untuk di isi username User !!!"},function(t){return/^[A-Za-z_]*$/.test(t)||"Username hanya boleh string dan underscore"}],rule_user_password:[function(t){return!!t||"Mohon untuk di isi password User !!!"},function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}],rule_user_passwordEdit:[function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}]}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/usersdosen",{headers:{Authorization:this.TOKEN}}).then((function(t){var s=t.data;e.daftar_users=s.users,e.role_id=s.role.id,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},showDialogTambahUserDosen:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dialog=!0;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.editedIndex=this.daftar_users.indexOf(e),e.password="",this.editedItem=Object.assign({},e),this.dialogEdit=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.btnLoading=!1,this.dialog=!1,this.dialogEdit=!1,setTimeout((function(){t.$refs.frmdata.resetValidation(),t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},closeUserPermissions:function(){this.btnLoading=!1,this.permissions_selected=[],this.dialogUserPermission=!1},save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.editedIndex>-1?this.$ajax.post("/system/usersdosen/"+this.editedItem.id,{_method:"PUT",name:this.editedItem.name,nidn:this.editedItem.nidn,nipy:this.editedItem.nipy,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp,username:this.editedItem.username,password:this.editedItem.password,is_dw:this.editedItem.is_dw},{headers:{Authorization:this.TOKEN}}).then((function(){t.initialize(),t.close()})).catch((function(){t.btnLoading=!1})):this.$ajax.post("/system/usersdosen/store",{name:this.editedItem.name,nidn:this.editedItem.nidn,nipy:this.editedItem.nipy,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp,username:this.editedItem.username,password:this.editedItem.password,is_dw:this.editedItem.is_dw},{headers:{Authorization:this.TOKEN}}).then((function(e){var s=e.data;t.daftar_users.push(s.user),t.close()})).catch((function(){t.btnLoading=!1})))},setPermission:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,this.$ajax.get("/system/setting/roles/"+this.role_id+"/permission",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;s.daftar_permissions=e.permissions})).catch((function(){s.btnLoading=!1})),t.next=4,this.$ajax.get("/system/users/"+e.id+"/permission",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;s.permissions_selected=e.permissions,s.btnLoading=!1})).catch((function(){s.btnLoading=!1}));case 4:this.dialogUserPermission=!0,this.editedItem=e;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),syncPermission:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/system/users/syncallpermissions",{role_name:"dosen"},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus username "+t.username+" ?",{color:"red"}).then((function(s){s&&(e.btnLoading=!0,e.$ajax.post("/system/usersdosen/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.TOKEN}}).then((function(){var s=e.daftar_users.indexOf(t);e.daftar_users.splice(s,1),e.btnLoading=!1})).catch((function(){e.btnLoading=!1})))}))}},computed:Object(n["a"])({formTitle:function(){return-1===this.editedIndex?"TAMBAH USER DOSEN":"EDIT USER DOSEN"}},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialog:function(t){t||this.close()},dialogEdit:function(t){t||this.close()}},components:{SystemUserLayout:d["a"],ModuleHeader:l["a"],UserPermissions:c["a"]}},m=u,v=s("2877"),p=s("6544"),h=s.n(p),_=s("0798"),f=s("8212"),b=s("2bc5"),g=s("8336"),S=s("b0af"),x=s("99d9"),E=s("62ad"),I=s("a523"),A=s("8fea"),k=s("169a"),y=s("ce7e"),w=s("4bd4"),N=s("132d"),T=s("adda"),O=s("0fd9"),C=s("2fa4"),R=s("b73d"),L=s("8654"),P=s("71d9"),U=s("2a7f"),D=s("3a2f"),M=Object(v["a"])(m,i,a,!1,null,null,null);e["default"]=M.exports;h()(M,{VAlert:_["a"],VAvatar:f["a"],VBreadcrumbs:b["a"],VBtn:g["a"],VCard:S["a"],VCardActions:x["b"],VCardText:x["d"],VCardTitle:x["e"],VCol:E["a"],VContainer:I["a"],VDataTable:A["a"],VDialog:k["a"],VDivider:y["a"],VForm:w["a"],VIcon:N["a"],VImg:T["a"],VRow:O["a"],VSpacer:C["a"],VSwitch:R["a"],VTextField:L["a"],VToolbar:P["a"],VToolbarTitle:U["c"],VTooltip:D["a"]})},e0b6:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[s("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),s("v-app-bar",{attrs:{app:""}},[s("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),s("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[s("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),s("v-spacer"),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-avatar",{attrs:{size:"30"}},[s("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[s("v-list",[s("v-list-item",[s("v-list-item-avatar",[s("v-img",{attrs:{src:t.photoUser}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),s("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),s("v-divider"),s("v-list-item",{attrs:{to:"/system-users/profil"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-title",[t._v("Profil")])],1),s("v-divider"),s("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-power")])],1),s("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),s("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",[s("v-list-item-avatar",[s("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),s("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),s("v-divider"),s("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?s("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),s("v-list-item",{attrs:{link:"",to:"/system-users/profil"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PROFIL ")])],1)],1),s("v-divider"),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?s("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account-key")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?s("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account-group")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?s("v-divider"):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PUSLAHTA_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/puslahta"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PUSLAHTA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e(),"dosen"==t.dashboard?s("v-list-item",{attrs:{link:"",to:"/system-users/biodatadiridosen"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e()],1)],1),s("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},a=[],n=(s("ac1f"),s("5319"),s("5530")),r=s("2f62"),o={name:"SystemUserLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=o,l=s("2877"),c=s("6544"),u=s.n(c),m=s("40dc"),v=s("5bc1"),p=s("8212"),h=s("ce7e"),_=s("132d"),f=s("adda"),b=s("8860"),g=s("da13"),S=s("8270"),x=s("5d23"),E=s("34c3"),I=s("f6c4"),A=s("e449"),k=s("f774"),y=s("2fa4"),w=s("afd9"),N=s("2a7f"),T=Object(l["a"])(d,i,a,!1,null,null,null);e["a"]=T.exports;u()(T,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:p["a"],VDivider:h["a"],VIcon:_["a"],VImg:f["a"],VList:b["a"],VListItem:g["a"],VListItemAvatar:S["a"],VListItemContent:x["g"],VListItemIcon:E["a"],VListItemSubtitle:x["j"],VListItemTitle:x["k"],VMain:I["a"],VMenu:A["a"],VNavigationDrawer:k["a"],VSpacer:y["a"],VSystemBar:w["a"],VToolbarTitle:N["c"]})},e477:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:t.isReportPage}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[s("h1",{staticClass:"subheading grey--text"},[s("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[s("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},a=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=n,o=s("2877"),d=s("6544"),l=s.n(d),c=s("62ad"),u=s("a523"),m=s("132d"),v=s("0fd9"),p=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=p.exports;l()(p,{VCol:c["a"],VContainer:u["a"],VIcon:m["a"],VRow:v["a"]})}}]);