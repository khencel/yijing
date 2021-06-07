(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinner_src_RiseLoader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinner/src/RiseLoader.vue */ "./node_modules/vue-spinner/src/RiseLoader.vue");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RiseLoader: vue_spinner_src_RiseLoader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      errors: {},
      isLoading: false,
      form: new Form({
        country: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        birth_date: '',
        birth_time: ''
      })
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      this.isLoading = true;
      axios.post('api/user/registration', this.form).then(function (response) {
        _this.isLoading = false;

        _this.$swal({
          icon: 'success',
          title: 'You are now registered',
          text: 'Please verify your account. Login to your email and click the validate account'
        }).then(function (result) {
          window.location = "/login";
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        _this.isLoading = false;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-spinner{\n    margin-top: 50px !important;\n    text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=template&id=9b1c6d7e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/RegisterComponent.vue?vue&type=template&id=9b1c6d7e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("notifications", {
        attrs: { group: "notification", position: "bottom right" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label",
            attrs: { for: "firstname" }
          },
          [_vm._v("First Name")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.firstname,
                expression: "form.firstname"
              }
            ],
            staticClass: "form-control",
            attrs: {
              id: "firstname",
              type: "text",
              required: "",
              autocomplete: "firstname",
              autofocus: ""
            },
            domProps: { value: _vm.form.firstname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "firstname", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.firstname
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: { textContent: _vm._s(_vm.errors.firstname[0]) }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label",
            attrs: { for: "lastname" }
          },
          [_vm._v("Last Name")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.lastname,
                expression: "form.lastname"
              }
            ],
            staticClass: "form-control",
            attrs: {
              id: "lastname",
              type: "text",
              required: "",
              autocomplete: "lastname",
              autofocus: ""
            },
            domProps: { value: _vm.form.lastname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "lastname", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.lastname
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: { textContent: _vm._s(_vm.errors.lastname[0]) }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          { staticClass: "col-md-4 col-form-label", attrs: { for: "name" } },
          [_vm._v("Date of Birth")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.birth_date,
                expression: "form.birth_date"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "date" },
            domProps: { value: _vm.form.birth_date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "birth_date", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          { staticClass: "col-md-4 col-form-label", attrs: { for: "name" } },
          [_vm._v("Time of Birth")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.birth_time,
                expression: "form.birth_time"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "time" },
            domProps: { value: _vm.form.birth_time },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "birth_time", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.birth_time
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: { textContent: _vm._s(_vm.errors.birth_time[0]) }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          { staticClass: "col-md-4 col-form-label", attrs: { for: "country" } },
          [_vm._v("Country")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c("country-select", {
              staticClass: "form-control",
              attrs: {
                countryName: true,
                country: _vm.form.country,
                topCountry: "US"
              },
              model: {
                value: _vm.form.country,
                callback: function($$v) {
                  _vm.$set(_vm.form, "country", $$v)
                },
                expression: "form.country"
              }
            }),
            _vm._v(" "),
            _vm.errors.country
              ? _c("span", {
                  staticClass: "text-danger font-italic",
                  domProps: { textContent: _vm._s(_vm.errors.country[0]) }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          { staticClass: "col-md-4 col-form-label ", attrs: { for: "email" } },
          [_vm._v("Email")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.email,
                expression: "form.email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              id: "email",
              type: "email",
              required: "",
              autocomplete: "email"
            },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.email
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: { textContent: _vm._s(_vm.errors.email[0]) }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label ",
            attrs: { for: "password" }
          },
          [_vm._v("Password")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password,
                expression: "form.password"
              }
            ],
            staticClass: "form-control",
            attrs: {
              id: "password",
              type: "password",
              required: "",
              autocomplete: "new-password"
            },
            domProps: { value: _vm.form.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.password
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: { textContent: _vm._s(_vm.errors.password[0]) }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label ",
            attrs: { for: "password-confirm" }
          },
          [_vm._v("Confirm Password")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password_confirmation,
                expression: "form.password_confirmation"
              }
            ],
            staticClass: "form-control",
            attrs: {
              id: "password-confirm",
              type: "password",
              required: "",
              autocomplete: "new-password"
            },
            domProps: { value: _vm.form.password_confirmation },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password_confirmation", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isLoading,
                expression: "isLoading"
              }
            ]
          },
          [_c("RiseLoader")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isLoading,
                expression: "!isLoading"
              }
            ]
          },
          [
            _c(
              "button",
              { staticClass: "button-success", on: { click: _vm.register } },
              [_vm._v("Register")]
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-right" }, [
      _c("small", [
        _vm._v(
          "Password must be at least 8 characters long, contain a number and an uppercase letter"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/RegisterComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/RegisterComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterComponent_vue_vue_type_template_id_9b1c6d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=template&id=9b1c6d7e& */ "./resources/js/components/user/RegisterComponent.vue?vue&type=template&id=9b1c6d7e&");
/* harmony import */ var _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterComponent_vue_vue_type_template_id_9b1c6d7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterComponent_vue_vue_type_template_id_9b1c6d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/RegisterComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/RegisterComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/RegisterComponent.vue?vue&type=template&id=9b1c6d7e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/RegisterComponent.vue?vue&type=template&id=9b1c6d7e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_9b1c6d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=template&id=9b1c6d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/RegisterComponent.vue?vue&type=template&id=9b1c6d7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_9b1c6d7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_9b1c6d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);