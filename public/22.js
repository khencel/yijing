(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ConsultantComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ConsultantComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: ['id'],
  data: function data() {
    return {
      available: false,
      time: [{
        time: "8:00am",
        value: '8'
      }, {
        time: "9:00am",
        value: '9'
      }, {
        time: "10:00am",
        value: '10'
      }, {
        time: "11:00am",
        value: '11'
      }, {
        time: "12:00pm",
        value: '12'
      }, {
        time: "1:00pm",
        value: '13'
      }, {
        time: "2:00pm",
        value: '14'
      }, {
        time: "3:00pm",
        value: '15'
      }, {
        time: "4:00pm",
        value: '16'
      }, {
        time: "5:00pm",
        value: '17'
      }, {
        time: "6:00pm",
        value: '18'
      }, {
        time: "7:00pm",
        value: '19'
      }, {
        time: "8:00pm",
        value: '20'
      }, {
        time: "9:00pm",
        value: '21'
      }, {
        time: "10:00pm",
        value: '22'
      }],
      price: 9.99,
      currentDate: '',
      errors: {},
      form: new Form({
        id: this.id,
        mode: '',
        date: '',
        time: ''
      })
    };
  },
  mounted: function mounted() {
    this.paypal();
    this.getCurrentDate();
  },
  methods: {
    check: function check() {
      var current = new Date();
      var selectedDate = new Date(document.getElementById('select-date').value);
      var validHour = current.getHours() + 2;

      if (current.getDate() == selectedDate.getDate() && validHour >= this.form.time) {
        this.$notify({
          group: 'notification',
          type: 'error',
          title: 'Invalid Time',
          text: 'Please time must be 2 hours before.'
        });
      } else {
        this.approveTime();
      }
    },
    approveTime: function approveTime() {
      var _this = this;

      axios.post('/api/user/check?api_token=' + window.token, this.form).then(function (response) {
        _this.errors = [];

        if (response.data == 0) {
          _this.available = false;

          _this.$notify({
            group: 'notification',
            type: 'error',
            title: 'Schedule',
            text: 'Schedule not available'
          });
        } else {
          _this.available = true;

          _this.$notify({
            group: 'notification',
            type: 'success',
            title: 'Schedule',
            text: 'Schedule Available, Book Now'
          });
        }
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    },
    bookNow: function bookNow() {
      var _this2 = this;

      axios.post('/api/user/bookNow?api_token=' + window.token, this.form).then(function (response) {
        _this2.errors = [];

        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Schedule',
          text: 'Your Schedule has been booked'
        });

        window.location = "/schedule";
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    },
    getCurrentDate: function getCurrentDate() {
      var date = new Date();
      var y = date.getFullYear();
      var d = date.getDate();
      var m = date.getMonth() + 1;

      if (m < 10) {
        m = "0" + m;
      }

      this.currentDate = y + "-" + m + "-" + d;
    },
    btnPayment: function btnPayment() {
      $('#consultanPaymentModal').modal('show');
    },
    paypal: function (_paypal) {
      function paypal() {
        return _paypal.apply(this, arguments);
      }

      paypal.toString = function () {
        return _paypal.toString();
      };

      return paypal;
    }(function () {
      var _this3 = this;

      paypal.Buttons({
        createOrder: function createOrder(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this3.price
              }
            }]
          });
        },
        onApprove: function () {
          var _onApprove = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, actions) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this3.bookNow();

                    return _context.abrupt("return", actions.order.capture().then(function (details) {// alert('Transaction completed by ' + details.payer.name.given_name);
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onApprove(_x, _x2) {
            return _onApprove.apply(this, arguments);
          }

          return onApprove;
        }()
      }).render('#paypal-button-container');
    })
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ConsultantComponent.vue?vue&type=template&id=d61b6eae&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/ConsultantComponent.vue?vue&type=template&id=d61b6eae& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "mt-2" }, [
        _c("hr"),
        _vm._v(" "),
        _c("label", { attrs: { for: "mode" } }, [_vm._v("Mode:")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.mode,
                expression: "form.mode"
              }
            ],
            staticClass: "form-control",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.form,
                  "mode",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "", disabled: "", hidden: "" } }, [
              _vm._v("Select Mode")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "Online Meeting" } }, [
              _vm._v("Online Meeting")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "Face to Face" } }, [
              _vm._v("Face to Face")
            ])
          ]
        ),
        _vm._v(" "),
        _vm.errors.mode
          ? _c("span", {
              staticClass: "font-italic text-danger",
              domProps: { textContent: _vm._s(_vm.errors.mode[0]) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-2" }, [
        _c("label", { attrs: { for: "date" } }, [_vm._v("Date:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.date,
              expression: "form.date"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "date", id: "select-date", min: _vm.currentDate },
          domProps: { value: _vm.form.date },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "date", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.date
          ? _c("span", {
              staticClass: "font-italic text-danger",
              domProps: { textContent: _vm._s(_vm.errors.date[0]) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-2" }, [
        _c("label", { attrs: { for: "time" } }, [_vm._v("Time:")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.time,
                expression: "form.time"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "", id: "" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.form,
                  "time",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "", disabled: "", hidden: "" } }, [
              _vm._v("Select Time")
            ]),
            _vm._v(" "),
            _vm._l(_vm.time, function(item, index) {
              return _c(
                "option",
                { key: index, domProps: { value: item.value } },
                [
                  _vm._v(
                    "\r\n                " +
                      _vm._s(item.time) +
                      "\r\n            "
                  )
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm.errors.time
          ? _c("span", {
              staticClass: "font-italic text-danger",
              domProps: { textContent: _vm._s(_vm.errors.time[0]) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5 text-right" }, [
        _c(
          "button",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.available,
                expression: "!available"
              }
            ],
            staticClass: "btn btn-primary",
            on: { click: _vm.check }
          },
          [_vm._v("Check if Available")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.available,
                expression: "available"
              }
            ],
            staticClass: "btn btn-success",
            on: { click: _vm.btnPayment }
          },
          [_vm._v("Book Now")]
        )
      ]),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "consultanPaymentModal",
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
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [_vm._v("Schedule Payment")]
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
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { attrs: { id: "paypal-button-container" } })
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
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/ConsultantComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/user/ConsultantComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsultantComponent_vue_vue_type_template_id_d61b6eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsultantComponent.vue?vue&type=template&id=d61b6eae& */ "./resources/js/components/user/ConsultantComponent.vue?vue&type=template&id=d61b6eae&");
/* harmony import */ var _ConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsultantComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/ConsultantComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConsultantComponent_vue_vue_type_template_id_d61b6eae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConsultantComponent_vue_vue_type_template_id_d61b6eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/ConsultantComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/ConsultantComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/user/ConsultantComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsultantComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ConsultantComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsultantComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/ConsultantComponent.vue?vue&type=template&id=d61b6eae&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/user/ConsultantComponent.vue?vue&type=template&id=d61b6eae& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsultantComponent_vue_vue_type_template_id_d61b6eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsultantComponent.vue?vue&type=template&id=d61b6eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/ConsultantComponent.vue?vue&type=template&id=d61b6eae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsultantComponent_vue_vue_type_template_id_d61b6eae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsultantComponent_vue_vue_type_template_id_d61b6eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);