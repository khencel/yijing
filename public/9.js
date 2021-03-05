(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/homeUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinner_src_RiseLoader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinner/src/RiseLoader.vue */ "./node_modules/vue-spinner/src/RiseLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    RiseLoader: vue_spinner_src_RiseLoader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      isActive: false,
      type: '',
      results: '',
      transforms: '',
      name: '',
      meaning: '',
      transformName: '',
      transformMeaning: '',
      gen_luck: '',
      health: '',
      relationships: '',
      career_wealth: '',
      expectant_mothers: '',
      examinations: '',
      lost_property: '',
      missing_persons: '',
      travel: '',
      legal_matters: '',
      weather: '',
      overall_forecast: '',
      subscriber: false,
      isCast: false,
      focus: null,
      original_gua: null,
      trigram: {}
    };
  },
  methods: {
    btnCastType: function btnCastType(castType) {
      this.isCast = false;
      this.results = "";
      this.transforms = "";
      this.name = "";
      this.transformName = "";
      this.transformMeaning = "";
      this.subscriber = false;

      if (castType == "hex") {
        this.type = "Hexagram";
      } else {
        this.type = "Trigram";
      }
    },
    btnCast: function btnCast() {
      var _this = this;

      this.results = "";
      this.name = "";
      this.meaning = "", this.transforms = "";
      this.transformName = "";
      this.isLoading = true;
      this.subscriber = false;

      if (this.type == "Hexagram") {
        axios.get('/api/user/cast?api_token=' + window.token).then(function (response) {
          _this.subscriber = true;

          if (response.data.user == null) {
            _this.subscriber = false;
            _this.results = response.data.hexagram[0].code.split("");
            _this.name = response.data.hexagram[0].name;
            _this.meaning = response.data.hexagram[0].meaning;
            _this.isLoading = false;
            _this.isCast = true;
          } else {
            var getRandomInt = function getRandomInt(max) {
              return Math.floor(Math.random() * Math.floor(max));
            };

            _this.isCast = true;
            _this.subscriber = true;
            var hex = response.data.hexagram[0].code.split("");
            var focus = getRandomInt(6);

            if (focus == 0) {
              focus = 1;
            }

            if (hex[focus - 1] == 1) {
              hex[focus - 1] = 3;
            } else {
              hex[focus - 1] = 4;
            }

            _this.focus = focus;
            _this.name = response.data.hexagram[0].name;
            _this.meaning = response.data.hexagram[0].meaning;
            _this.results = hex;
            _this.original_gua = response.data.hexagram[0].id;
            var hexTransform = response.data.hexagram[0].code.split("");

            if (hexTransform[focus - 1] == 0) {
              hexTransform[focus - 1] = "1";
            } else {
              hexTransform[focus - 1] = "0";
            }

            _this.transforms = hexTransform;

            _this.getTransformname();

            _this.isLoading = false;
          }
        });
      }

      if (this.type == "Trigram") {
        this.isLoading = true;
        axios.get('api/user/trigram?api_token=' + window.token).then(function (response) {
          _this.results = response.data.code.split("");
          _this.name = response.data.name;
          _this.trigram = response.data;
          _this.isLoading = false;
          _this.isCast = true;
        });
      }

      if (this.type == "") {
        this.type = "Please Select at least one";
        this.isLoading = false;
      }
    },
    // btnSubscribe(){
    //     axios.get('/api/user/subscribe?api_token='+window.token)
    //     .then(response => {
    //     });
    // },
    getTransformname: function getTransformname() {
      var _this2 = this;

      axios.post('api/user/transform/name?api_token=' + window.token, {
        transformName: this.transforms,
        focus: this.focus,
        gua: this.original_gua
      }).then(function (response) {
        console.log(response.data);
        _this2.transformName = response.data.name.name;
        _this2.transformMeaning = response.data.meaning.yao_text;
        _this2.gen_luck = response.data.meaning.gen_luck;
        _this2.health = response.data.meaning.health;
        _this2.relationships = response.data.meaning.relationships;
        _this2.career_wealth = response.data.meaning.career_wealth;
        _this2.expectant_mothers = response.data.meaning.expectant_mothers;
        _this2.examinations = response.data.meaning.examinations;
        _this2.lost_property = response.data.meaning.lost_property;
        _this2.missing_persons = response.data.meaning.missing_persons;
        _this2.travel = response.data.meaning.travel;
        _this2.legal_matters = response.data.meaning.legal_matters;
        _this2.weather = response.data.meaning.weather;
        _this2.overall_forecast = response.data.meaning.overall_forecast;
      });
    },
    btnSubscribe: function btnSubscribe() {
      $('#paymentModal').modal('show');
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
      paypal.Buttons({
        createOrder: function createOrder(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '69.99'
              }
            }]
          });
        },
        onApprove: function onApprove(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            // alert('Transaction completed by ' + details.payer.name.given_name);
            axios.get('api/user/payment?api_token=' + window.token).then(function (response) {
              $('#paymentModal').modal('hide');
              window.location = "/home";
            });
          });
        }
      }).render('#paypal-button-container'); //This function displays Smart Payment Buttons on your web page.
    })
  },
  mounted: function mounted() {
    this.paypal();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-spinner[data-v-3003fbd3]{\n        text-align: center;\n}\n.font-format[data-v-3003fbd3]{\n        font-family: 'Lobster', cursive;\n}\n@media only screen and (max-width: 750px) {\n.hex-img[data-v-3003fbd3]{\n        margin-bottom: 5px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=template&id=3003fbd3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/homeUser.vue?vue&type=template&id=3003fbd3&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "text-center mt-2" }, [
      _c("span", { staticClass: "font-format" }, [
        _c("h1", [_vm._v(_vm._s(_vm.type))])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isLoading,
            expression: "isLoading"
          }
        ],
        staticStyle: { height: "300px" }
      },
      [_c("span", [_c("RiseLoader")], 1)]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-md-3 col-9" },
        [
          _vm._l(_vm.results, function(result, index) {
            return _c("div", { key: index, staticClass: "text-center" }, [
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: result == 1,
                    expression: "result == 1"
                  }
                ],
                class: index == 2 ? "mb-4 w-100 hex-img" : "mb-1 w-100 hex-img",
                staticStyle: { height: "50px" },
                attrs: { src: "img/solidLine.png", alt: "" }
              }),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: result == 0,
                    expression: "result == 0"
                  }
                ],
                class: index == 2 ? "mb-4 w-100" : "mb-1 w-100",
                staticStyle: { height: "50px" },
                attrs: { src: "img/brokenLine.png", alt: "" }
              }),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: result == 4,
                    expression: "result == 4"
                  }
                ],
                class: index == 2 ? "mb-4 w-100" : "mb-1 w-100",
                staticStyle: { height: "50px" },
                attrs: { src: "img/brokenCircle.png", alt: "" }
              }),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: result == 3,
                    expression: "result == 3"
                  }
                ],
                class: index == 2 ? "mb-4 w-100" : "mb-1 w-100",
                staticStyle: { height: "50px" },
                attrs: { src: "img/solidLinefocus.png", alt: "" }
              })
            ])
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("h1", [_vm._v(_vm._s(_vm.name))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.meaning))])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.subscriber && _vm.isCast && !_vm.isLoading,
              expression: "subscriber && isCast && !isLoading"
            }
          ],
          staticClass: "col-md-1 p-0 position-relative col-4",
          staticStyle: { "max-height": "350px" }
        },
        [
          _c(
            "div",
            {
              staticClass: " position-absolute",
              staticStyle: {
                height: "100px",
                top: "50%",
                "margin-top": "-50px"
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "d-sm-none d-md-block d-none mx-auto",
                  staticStyle: { width: "100%" },
                  attrs: { viewBox: "0 0 24 24" }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d: "M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "d-block d-none d-sm-block d-md-none mx-auto",
              staticStyle: { width: "60%" },
              attrs: { viewBox: "0 0 24 24" }
            },
            [
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d: "M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.subscriber && _vm.isCast && _vm.type != "Trigram",
              expression: "subscriber && isCast && type != 'Trigram'"
            }
          ],
          staticClass: "col-md-3 col-9 text-center"
        },
        [
          _c("div", { staticClass: "mt-4" }, [
            _c("h1", [_vm._v(_vm._s(_vm.transformName))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.transformMeaning))])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isCast && !_vm.isLoading && _vm.type != "Trigram",
              expression: "isCast && !isLoading && type != 'Trigram'"
            }
          ],
          staticClass: "col-md-1 p-0 position-relative col-4",
          staticStyle: { "max-height": "350px" }
        },
        [
          _c(
            "div",
            {
              staticClass: " position-absolute",
              staticStyle: {
                height: "100px",
                top: "50%",
                "margin-top": "-50px"
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "d-sm-none d-md-block d-none mx-auto",
                  staticStyle: { width: "100%" },
                  attrs: { viewBox: "0 0 24 24" }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d: "M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "d-block d-none d-sm-block d-md-none mx-auto",
              staticStyle: { width: "60%" },
              attrs: { viewBox: "0 0 24 24" }
            },
            [
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d: "M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.subscriber && _vm.type != "Trigram",
              expression: "subscriber && type != 'Trigram'"
            }
          ],
          staticClass: "col-md-3 col-9"
        },
        _vm._l(_vm.transforms, function(transform, index) {
          return _c("div", { key: index, staticClass: "text-center" }, [
            _c("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: transform == 1,
                  expression: "transform == 1"
                }
              ],
              class: index == 2 ? "mb-4 w-100" : "mb-1 w-100",
              staticStyle: { height: "50px" },
              attrs: { src: "img/solidLine.png", alt: "" }
            }),
            _vm._v(" "),
            _c("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: transform == 0,
                  expression: "transform == 0"
                }
              ],
              class: index == 2 ? "mb-4 w-100" : "mb-1 w-100",
              staticStyle: { height: "50px" },
              attrs: { src: "img/brokenLine.png", alt: "" }
            })
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.isCast &&
                !_vm.subscriber &&
                !_vm.isLoading &&
                _vm.type != "Trigram",
              expression:
                "isCast && !subscriber && !isLoading && type != 'Trigram'"
            }
          ],
          staticClass: "col-md-3 col-9 text-center position-relative"
        },
        [
          _vm._l(6, function(item, index) {
            return _c("div", { key: item, staticClass: "text-center" }, [
              _c("img", {
                class: index == 2 ? "mb-4 w-100" : "mb-1 w-100",
                staticStyle: { height: "50px", opacity: "0.1" },
                attrs: { src: "img/solidLine.png", alt: "" }
              })
            ])
          }),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "button-primary mt-2 mb-5",
                on: { click: _vm.btnSubscribe }
              },
              [_vm._v("SUBSCRIBE NOW")]
            )
          ])
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.type == "Trigram" && _vm.isCast == true,
            expression: "type == 'Trigram' && isCast == true"
          }
        ]
      },
      [
        _c("table", { staticClass: "table table-hover table-bordered" }, [
          _c("tbody", [
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Nature")]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.nature_trigram, function(item, index) {
                  return _c("span", { key: index }, [
                    _vm._v(
                      "\r\n                            " +
                        _vm._s(item.nature_id) +
                        ",\r\n                        "
                    )
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Element")
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\r\n                        " +
                    _vm._s(_vm.trigram.element) +
                    "\r\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Number")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\r\n                        " +
                    _vm._s(_vm.trigram.number) +
                    "\r\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("People")]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.tri_people, function(item, index) {
                  return _c(
                    "span",
                    { key: index, staticClass: "badge badge-success p-1 mr-1" },
                    [
                      _vm._v(
                        "\r\n                            " +
                          _vm._s(item.people_id) +
                          "\r\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Body Part")
              ]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.tri_body_part, function(item, index) {
                  return _c(
                    "span",
                    { key: index, staticClass: "badge badge-success p-1 mr-1" },
                    [
                      _vm._v(
                        "\r\n                            " +
                          _vm._s(item.body_part_id) +
                          "\r\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Animal")]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.tri_animal, function(item, index) {
                  return _c(
                    "span",
                    { key: index, staticClass: "badge badge-success p-1 mr-1" },
                    [
                      _vm._v(
                        "\r\n                            " +
                          _vm._s(item.animal_id) +
                          "\r\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Sickness")
              ]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.tri_sickness, function(item, index) {
                  return _c(
                    "span",
                    { key: index, staticClass: "badge badge-success p-1 mr-1" },
                    [
                      _vm._v(
                        "\r\n                            " +
                          _vm._s(item.sickness_id) +
                          "\r\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Color")]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.tri_color, function(item, index) {
                  return _c(
                    "span",
                    { key: index, staticClass: "badge badge-success p-1 mr-1" },
                    [
                      _vm._v(
                        "\r\n                            " +
                          _vm._s(item.color_id) +
                          "\r\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Shape")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\r\n                        " +
                    _vm._s(_vm.trigram.shape) +
                    "\r\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Deity")]),
              _vm._v(" "),
              _c(
                "td",
                _vm._l(_vm.trigram.tri_deity, function(item, index) {
                  return _c(
                    "span",
                    { key: index, staticClass: "badge badge-success p-1 mr-1" },
                    [
                      _vm._v(
                        "\r\n                            " +
                          _vm._s(item.deity_id) +
                          "\r\n                        "
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Door")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\r\n                        " +
                    _vm._s(_vm.trigram.door) +
                    "\r\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Star")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\r\n                        " +
                    _vm._s(_vm.trigram.star) +
                    "\r\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Direction")
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\r\n                        " +
                    _vm._s(_vm.trigram.direction) +
                    "\r\n                    "
                )
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isCast && !_vm.isLoading && _vm.type != "Trigram",
            expression: "isCast && !isLoading && type != 'Trigram'"
          }
        ]
      },
      [
        _c("table", { staticClass: "table table-hover table-bordered" }, [
          _c("tbody", [
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("General Luck")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.gen_luck))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Health")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.health))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Relationships")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.relationships))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Career & Wealth")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.career_wealth))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Expectant Mothers")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.expectant_mothers))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Examinations")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.examinations))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Lost Property")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.lost_property))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Missing Persons")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.missing_persons))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [_vm._v("Travel")]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.travel))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Legal Matters")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.legal_matters))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Weather")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.weather))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "font-weight-bold" }, [
                _vm._v("Overall Forecast")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.overall_forecast))])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "text-center p-2" }, [
      _c(
        "div",
        {
          staticClass:
            "font-format border-2 m-auto background-primary text-white p-3",
          staticStyle: {
            "border-radius": "50%",
            cursor: "pointer",
            width: "80px",
            border: "solid 1px"
          },
          on: { click: _vm.btnCast }
        },
        [_vm._v("Cast Now")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 text-center" }, [
        _c(
          "button",
          {
            class:
              _vm.type != "Trigram"
                ? "button-success font-format w-50"
                : "button-success font-format w-50 bg-dark",
            on: {
              click: function($event) {
                return _vm.btnCastType("tri")
              }
            }
          },
          [_vm._v("Trigrams")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 text-center" }, [
        _c(
          "button",
          {
            class:
              _vm.type != "Hexagram"
                ? "button-success font-format w-50"
                : "button-success font-format w-50 bg-dark",
            on: {
              click: function($event) {
                return _vm.btnCastType("hex")
              }
            }
          },
          [_vm._v("Hexagrams")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm._m(4)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-3" }, [
        _c("img", {
          staticClass: "img-fluid",
          attrs: { src: "img/Home_logo.png", alt: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          height: "200px",
          position: "absolute",
          top: "30%",
          bottom: "0",
          left: "50%",
          "-ms-transform": "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)"
        }
      },
      [
        _c("img", {
          staticStyle: { width: "100%" },
          attrs: { src: "img/password.png", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "mt-5", staticStyle: { "font-size": "30px" } },
      [
        _c("p", [
          _vm._v(
            "\r\n            “If you need further assistance regarding the result of your Yijing Divination please book a consult with us and one of our consultants will be glad to help further”\r\n        "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("a", { staticClass: "btn btn-success", attrs: { href: "/book" } }, [
        _vm._v("SCHEDULE A CONSULT")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "paymentModal",
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
                  [_vm._v("Payment")]
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
                _c("div", { staticClass: " p-2" }, [
                  _c("h3", [_vm._v("Premium")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "p-2" }, [
                  _c("ul", [
                    _c("li", [_vm._v("Personalized Divination Diary")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Professional Hexagram Transformation")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Oracle Number Divination")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Oracle Text Divination")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Plumblossom Divination")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-2" }, [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("$")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "font-weight-bold",
                      staticStyle: { "font-size": "25px" }
                    },
                    [_vm._v("69.99/")]
                  ),
                  _vm._v(" "),
                  _c("span", [_c("strong", [_vm._v("year")])])
                ]),
                _vm._v(" "),
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

/***/ "./resources/js/components/user/homeUser.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/user/homeUser.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeUser_vue_vue_type_template_id_3003fbd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeUser.vue?vue&type=template&id=3003fbd3&scoped=true& */ "./resources/js/components/user/homeUser.vue?vue&type=template&id=3003fbd3&scoped=true&");
/* harmony import */ var _homeUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeUser.vue?vue&type=script&lang=js& */ "./resources/js/components/user/homeUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css& */ "./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _homeUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeUser_vue_vue_type_template_id_3003fbd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeUser_vue_vue_type_template_id_3003fbd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3003fbd3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/homeUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/homeUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/user/homeUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=style&index=0&id=3003fbd3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_style_index_0_id_3003fbd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/user/homeUser.vue?vue&type=template&id=3003fbd3&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/user/homeUser.vue?vue&type=template&id=3003fbd3&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_template_id_3003fbd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeUser.vue?vue&type=template&id=3003fbd3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/homeUser.vue?vue&type=template&id=3003fbd3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_template_id_3003fbd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeUser_vue_vue_type_template_id_3003fbd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);