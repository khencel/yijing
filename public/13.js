(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
      errors: {},
      announcements: {},
      form: new Form({
        subject: '',
        announcement: '',
        date: new Date().toDateString()
      })
    };
  },
  methods: {
    announcementModal: function announcementModal() {
      $('#announcementModal').modal('show');
    },
    index: function index() {
      var _this = this;

      axios.get('api/announcement?api_token=' + window.token).then(function (response) {
        _this.announcements = response.data;
      });
    },
    btnSave: function btnSave() {
      var _this2 = this;

      this.form.post('api/announcement?api_token=' + window.token).then(function (response) {
        $('#announcementModal').modal('hide');

        _this2.index();
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    this.index();
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=template&id=98c6ddce&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=template&id=98c6ddce& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card p-2" }, [
      _c(
        "button",
        {
          staticClass: "button-success w-25 ml-auto",
          on: { click: _vm.announcementModal }
        },
        [_vm._v("Create Announcement")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card p-2" }, [
      _c("table", { staticClass: "table table-hover " }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            Object.keys(_vm.announcements).length == 0
              ? _c("tr", [
                  _c(
                    "td",
                    { staticClass: "text-center", attrs: { colspan: "4" } },
                    [_vm._v("No Announcement...")]
                  )
                ])
              : _vm._l(_vm.announcements, function(announcement) {
                  return _c("tr", { key: announcement.id }, [
                    _c("td", [_vm._v(_vm._s(announcement.date))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(announcement.subject))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(announcement.announcement) +
                          "\n                    "
                      )
                    ])
                  ])
                })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "announcementModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Subject")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.subject,
                        expression: "form.subject"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Subject" },
                    domProps: { value: _vm.form.subject },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "subject", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.subject
                    ? _c("span", {
                        staticClass: "text-danger font-italic",
                        domProps: { textContent: _vm._s(_vm.errors.subject[0]) }
                      })
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Announcement")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.announcement,
                        expression: "form.announcement"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "",
                      cols: "30",
                      rows: "10",
                      placeholder: "Announcement here..."
                    },
                    domProps: { value: _vm.form.announcement },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "announcement", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.announcement
                    ? _c("span", {
                        staticClass: "text-danger font-italic",
                        domProps: {
                          textContent: _vm._s(_vm.errors.announcement[0])
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.btnSave }
                  },
                  [_vm._v("Publish")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Subject")]),
      _vm._v(" "),
      _c("th", [_vm._v("Announcement")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Announcement")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/announcement/AnnouncementComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/announcement/AnnouncementComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnnouncementComponent_vue_vue_type_template_id_98c6ddce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnouncementComponent.vue?vue&type=template&id=98c6ddce& */ "./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=template&id=98c6ddce&");
/* harmony import */ var _AnnouncementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnouncementComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnnouncementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnnouncementComponent_vue_vue_type_template_id_98c6ddce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnnouncementComponent_vue_vue_type_template_id_98c6ddce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/announcement/AnnouncementComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnouncementComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=template&id=98c6ddce&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=template&id=98c6ddce& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementComponent_vue_vue_type_template_id_98c6ddce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnouncementComponent.vue?vue&type=template&id=98c6ddce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/announcement/AnnouncementComponent.vue?vue&type=template&id=98c6ddce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementComponent_vue_vue_type_template_id_98c6ddce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementComponent_vue_vue_type_template_id_98c6ddce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);