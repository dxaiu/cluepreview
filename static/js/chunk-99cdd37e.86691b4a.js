(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99cdd37e"],{"1b90":function(e,t,n){"use strict";n("3c42")},"3c42":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[n("h3",{staticClass:"title"},[e._v("数据管理系统")]),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[n("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?n("span",[e._v("登 录 中...")]):n("span",[e._v("登 录")])])],1)],1)],1)},o=[],r={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}]},loading:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},s=r,l=(n("1b90"),n("2877")),a=Object(l["a"])(s,i,o,!1,null,null,null);t["default"]=a.exports}}]);