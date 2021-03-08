(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ScheduleConsultantComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ScheduleConsultantComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
      schedules: {},
      id: '',
      date: '',
      time: ''
    };
  },
  methods: {
    loadSchedule: function loadSchedule() {
      var _this = this;

      axios.get('api/user/schedule?api_token=' + window.token).then(function (response) {
        _this.schedules = response.data;
      });
    },
    btnCancel: function btnCancel(id, date, time) {
      $('#cancelModal').modal('show');
      this.id = id;
      this.date = date;
      this.time = time;
    },
    check: function check() {
      var current = new Date();
      var selectedDate = new Date(this.date);
      var validHour = current.getHours() + 2;

      if (current.getDate() == selectedDate.getDate() && validHour >= this.time) {
        this.$notify({
          group: 'notification',
          type: 'error',
          title: 'Cancelation not success',
          text: 'Please time must be at least 2 hours before.'
        });
      } else {
        this.cancelBooking();
      }
    },
    cancelBooking: function cancelBooking() {
      var _this2 = this;

      axios.get('api/user/cancelBooking?api_token=' + window.token + '&schedule_id=' + this.id).then(function (response) {
        $('#cancelModal').modal('hide');

        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Cancelation Success',
          text: 'Schedule has been cancel'
        });

        _this2.loadSchedule();
      });
    },
    btnDelete: function btnDelete(id) {
      var _this3 = this;

      axios.get('api/user/cancelDelete/' + id + '?api_token=' + window.token).then(function (response) {
        _this3.loadSchedule();
      });
    }
  },
  mounted: function mounted() {
    this.loadSchedule();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-header" }, [_vm._v("Schedule")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body position-relative" }, [
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                Object.keys(_vm.schedules).length == 0
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "5" } },
                        [_vm._v("No schedule")]
                      )
                    ])
                  : _vm._l(_vm.schedules, function(schedule, index) {
                      return _c(
                        "tr",
                        {
                          key: index,
                          class: schedule.status == "booked" ? "" : "bg-danger"
                        },
                        [
                          _c("td", [_vm._v(_vm._s(schedule.date))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(schedule.time) + ":00")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(schedule.mode))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _vm._l(schedule.consultant, function(
                                item,
                                index
                              ) {
                                return _c("span", { key: index }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.firstname) +
                                      " " +
                                      _vm._s(item.lastname) +
                                      "\n                            "
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm._l(schedule.appointment_user, function(
                                item,
                                index
                              ) {
                                return _c("span", { key: index }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.firstname) +
                                      " " +
                                      _vm._s(item.lastname) +
                                      "\n                            "
                                  )
                                ])
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          schedule.status == "booked"
                            ? _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/consult/user/" +
                                        schedule.appointment_user[0].api_token +
                                        "/" +
                                        schedule.id
                                    }
                                  },
                                  [_vm._m(1, true)]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-danger p-2",
                                    staticStyle: { cursor: "pointer" },
                                    on: {
                                      click: function($event) {
                                        return _vm.btnCancel(
                                          schedule.id,
                                          schedule.date,
                                          schedule.time
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("X Decline")]
                                )
                              ])
                            : _c("td", [
                                _vm._v(
                                  "\n                                Schedule has been canceled\n                                "
                                ),
                                _c(
                                  "button",
                                  {
                                    staticClass: "button-primary",
                                    on: {
                                      click: function($event) {
                                        return _vm.btnDelete(schedule.id)
                                      }
                                    }
                                  },
                                  [_vm._v("OK")]
                                )
                              ])
                        ]
                      )
                    })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "cancelModal",
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
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
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
                      on: { click: _vm.check }
                    },
                    [_vm._v("Cancel Schedule")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Time")]),
      _vm._v(" "),
      _c("th", [_vm._v("Mode")]),
      _vm._v(" "),
      _c("th", [_vm._v("Appointment To")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-success p-2" }, [
      _c("i", { staticClass: "fas fa-check-circle" }),
      _vm._v("Accept")
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
        [_vm._v("Schedule Cancelation")]
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", [
        _c("label", { attrs: { for: "" } }, [_vm._v("Reason for cancelation")]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: {
            placeholder: "Reason here...",
            name: "",
            id: "",
            cols: "30",
            rows: "5"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c("small", [
          _c(
            "span",
            { staticClass: "font-weight-bold text-danger font-italic" },
            [_vm._v("Note:")]
          ),
          _vm._v(
            "\n                        You can cancel schedule 2 hours before your meeting \n                    "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ScheduleConsultantComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ScheduleConsultantComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleConsultantComponent_vue_vue_type_template_id_a4e967e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0& */ "./resources/js/components/ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0&");
/* harmony import */ var _ScheduleConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleConsultantComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ScheduleConsultantComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScheduleConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScheduleConsultantComponent_vue_vue_type_template_id_a4e967e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScheduleConsultantComponent_vue_vue_type_template_id_a4e967e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ScheduleConsultantComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ScheduleConsultantComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ScheduleConsultantComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleConsultantComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ScheduleConsultantComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleConsultantComponent_vue_vue_type_template_id_a4e967e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ScheduleConsultantComponent.vue?vue&type=template&id=a4e967e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleConsultantComponent_vue_vue_type_template_id_a4e967e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleConsultantComponent_vue_vue_type_template_id_a4e967e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);