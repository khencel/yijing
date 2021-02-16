(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{42:function(t,o,s){"use strict";var a=s(7);s.n(a).a},43:function(t,o,s){(t.exports=s(2)(!1)).push([t.i,"\n.v-spinner{\n    margin-top: 50px !important;\n    text-align: right;\n}\n",""])},50:function(t,o,s){"use strict";s.r(o);var a=s(4),r=s(10);Vue.use(r.a);var e={components:{RiseLoader:a.a},data:function(){return{errors:{},isLoading:!1,form:new Form({country:"",firstname:"",lastname:"",email:"",password:"",password_confirmation:"",birth_date:"",birth_time:""})}},methods:{register:function(){var t=this;this.isLoading=!0,axios.post("api/user/registration",this.form).then((function(o){t.isLoading=!1,t.$swal({icon:"success",title:"You are now registered",text:"Please verify your account. Login to your email and click the validate account"}).then((function(t){window.location="/login"}))})).catch((function(o){t.errors=o.response.data.errors,t.isLoading=!1}))}},mounted:function(){}},i=(s(42),s(0)),n=Object(i.a)(e,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"firstname"}},[t._v("First Name")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],staticClass:"form-control",attrs:{id:"firstname",type:"text",required:"",autocomplete:"firstname",autofocus:""},domProps:{value:t.form.firstname},on:{input:function(o){o.target.composing||t.$set(t.form,"firstname",o.target.value)}}}),t._v(" "),t.errors.firstname?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.firstname[0])}}):t._e()])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"lastname"}},[t._v("Last Name")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],staticClass:"form-control",attrs:{id:"lastname",type:"text",required:"",autocomplete:"lastname",autofocus:""},domProps:{value:t.form.lastname},on:{input:function(o){o.target.composing||t.$set(t.form,"lastname",o.target.value)}}}),t._v(" "),t.errors.lastname?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.lastname[0])}}):t._e()])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"name"}},[t._v("Date of Birth")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.birth_date,expression:"form.birth_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.birth_date},on:{input:function(o){o.target.composing||t.$set(t.form,"birth_date",o.target.value)}}}),t._v(" "),t.errors.birth_date?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.birth_date[0])}}):t._e()])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"name"}},[t._v("Time of Birth")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.birth_time,expression:"form.birth_time"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:t.form.birth_time},on:{input:function(o){o.target.composing||t.$set(t.form,"birth_time",o.target.value)}}}),t._v(" "),t.errors.birth_time?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.birth_time[0])}}):t._e()])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"country"}},[t._v("Country")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("country-select",{staticClass:"form-control",attrs:{countryName:!0,country:t.form.country,topCountry:"US"},model:{value:t.form.country,callback:function(o){t.$set(t.form,"country",o)},expression:"form.country"}}),t._v(" "),t.errors.country?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.country[0])}}):t._e()],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label ",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",required:"",autocomplete:"email"},domProps:{value:t.form.email},on:{input:function(o){o.target.composing||t.$set(t.form,"email",o.target.value)}}}),t._v(" "),t.errors.email?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.email[0])}}):t._e()])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label ",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",required:"",autocomplete:"new-password"},domProps:{value:t.form.password},on:{input:function(o){o.target.composing||t.$set(t.form,"password",o.target.value)}}}),t._v(" "),t.errors.password?s("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.password[0])}}):t._e()])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label ",attrs:{for:"password-confirm"}},[t._v("Confirm Password")]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{id:"password-confirm",type:"password",required:"",autocomplete:"new-password"},domProps:{value:t.form.password_confirmation},on:{input:function(o){o.target.composing||t.$set(t.form,"password_confirmation",o.target.value)}}})])]),t._v(" "),s("div",{staticClass:"text-right"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]},[s("RiseLoader")],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[s("button",{staticClass:"button-success",on:{click:t.register}},[t._v("Register")])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"text-right"},[o("small",[this._v("Password must be at least 8 characters long, contain a number and an uppercase letter")])])}],!1,null,null,null);o.default=n.exports},7:function(t,o,s){var a=s(43);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(3)(a,r);a.locals&&(t.exports=a.locals)}}]);