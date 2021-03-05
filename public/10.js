(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AboutComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AboutComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editMode: false,
      errors: {},
      form: new Form({
        id: '',
        content_name: 'About Us',
        content: '',
        content_footer: ''
      })
    };
  },
  methods: {
    aboutUsUpdate: function aboutUsUpdate() {
      var _this = this;

      this.form.put('api/update/' + this.form.id + '?api_token=' + window.token, this.form).then(function (response) {
        _this.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update About Us',
          text: 'About us has been updated'
        });

        _this.loadContent();
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    },
    footerUpdate: function footerUpdate() {
      var _this2 = this;

      this.form.post('api/footer/management?api_token=' + window.token, this.form).then(function (response) {
        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update Footer Content',
          text: 'Footer content has been updated'
        });

        _this2.loadContent();
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    },
    loadContent: function loadContent() {
      var _this3 = this;

      axios.get('api/about/management?api_token=' + window.token).then(function (response) {
        _this3.form.content = response.data.content;
        _this3.form.id = response.data.id;
      });
    },
    loadFooterContent: function loadFooterContent() {
      var _this4 = this;

      axios.get('api/footerContent?api_token=' + window.token).then(function (response) {
        _this4.form.content_footer = response.data.content;
      });
    }
  },
  mounted: function mounted() {
    this.loadContent();
    this.loadFooterContent();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AboutComponent.vue?vue&type=template&id=5049bb1b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AboutComponent.vue?vue&type=template&id=5049bb1b& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("System")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "ul",
            {
              staticClass: "nav nav-tabs",
              attrs: { id: "myTab", role: "tablist" }
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      id: "about-tab",
                      "data-toggle": "tab",
                      href: "#about",
                      role: "tab",
                      "aria-controls": "about",
                      "aria-selected": "true"
                    },
                    on: {
                      click: function($event) {
                        _vm.form.content_name = "About Us"
                      }
                    }
                  },
                  [_vm._v("About us")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "profile-tab",
                      "data-toggle": "tab",
                      href: "#profile",
                      role: "tab",
                      "aria-controls": "profile",
                      "aria-selected": "false"
                    },
                    on: {
                      click: function($event) {
                        _vm.form.content_name = "footer"
                      }
                    }
                  },
                  [_vm._v("Footer")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-content", attrs: { id: "myTabContent" } },
            [
              _c(
                "div",
                {
                  staticClass: "tab-pane fade show active pt-2",
                  attrs: {
                    id: "about",
                    role: "tabpanel",
                    "aria-labelledby": "about-tab"
                  }
                },
                [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.content,
                        expression: "form.content"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      cols: "30",
                      rows: "5",
                      placeholder: "About us here..."
                    },
                    domProps: { value: _vm.form.content },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "content", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.content
                    ? _c("span", {
                        staticClass: "font-italic text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.content[0]) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button-success mt-2 float-right",
                      on: { click: _vm.aboutUsUpdate }
                    },
                    [_vm._v("Update")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane fade p-2",
                  attrs: {
                    id: "profile",
                    role: "tabpanel",
                    "aria-labelledby": "profile-tab"
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.content_footer,
                        expression: "form.content_footer"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Footer here..." },
                    domProps: { value: _vm.form.content_footer },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "content_footer",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.content_footer
                    ? _c("span", {
                        staticClass: "font-italic text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.errors.content_footer[0])
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button-success mt-2 float-right",
                      on: { click: _vm.footerUpdate }
                    },
                    [_vm._v("Update")]
                  )
                ]
              )
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AboutComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/AboutComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutComponent_vue_vue_type_template_id_5049bb1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutComponent.vue?vue&type=template&id=5049bb1b& */ "./resources/js/components/AboutComponent.vue?vue&type=template&id=5049bb1b&");
/* harmony import */ var _AboutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/AboutComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutComponent_vue_vue_type_template_id_5049bb1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutComponent_vue_vue_type_template_id_5049bb1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AboutComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AboutComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AboutComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AboutComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AboutComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AboutComponent.vue?vue&type=template&id=5049bb1b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AboutComponent.vue?vue&type=template&id=5049bb1b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutComponent_vue_vue_type_template_id_5049bb1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AboutComponent.vue?vue&type=template&id=5049bb1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AboutComponent.vue?vue&type=template&id=5049bb1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutComponent_vue_vue_type_template_id_5049bb1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutComponent_vue_vue_type_template_id_5049bb1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);