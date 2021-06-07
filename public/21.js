(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-management/UserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-management/UserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      users: {},
      errors: {},
      roles: {},
      userType: '',
      filterUser: [],
      is_subsciber: '',
      form: new Form({
        id: '',
        firstname: '',
        lastname: '',
        country: '',
        role: []
      })
    };
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      axios.get('/api/admin/user?api_token=' + window.token).then(function (response) {
        _this.users = response.data;
      });
    },
    modalUser: function modalUser(id) {
      var _this2 = this;

      this.editMode = true;
      this.form.role = [];
      axios.get('/api/admin/show/' + id + "?api_token=" + window.token).then(function (response) {
        _this2.form.id = response.data.user.id;
        _this2.form.firstname = response.data.user.firstname;
        _this2.form.lastname = response.data.user.lastname;
        _this2.form.country = response.data.user.country;
        _this2.roles = response.data.role;

        if (response.data.user.is_subscriber != null) {
          _this2.is_subsciber = true;
        } else {
          _this2.is_subsciber = false;
        }

        response.data.user.roles.forEach(function (element) {
          _this2.form.role.push(element.id);
        });
        $('#userModal').modal('show');
      });
    },
    btnUpdate: function btnUpdate() {
      var _this3 = this;

      axios.put('/api/admin/update/' + this.form.id + '?api_token=' + window.token, this.form).then(function (response) {
        _this3.form.role = [];

        _this3.loadUser();

        $('#userModal').modal('hide');

        _this3.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update User',
          text: 'User record has been updated'
        });
      })["catch"](function (error) {
        _this3.errors = error.response.data.errors;
      });
    },
    btnDelete: function btnDelete() {
      var _this4 = this;

      axios.get('/api/admin/delete/' + this.form.id + '?api_token=' + window.token).then(function (response) {
        _this4.loadUser();

        $('#userModal').modal('hide');

        _this4.$notify({
          group: 'notification',
          type: 'error',
          title: 'Delete User',
          text: 'User has been deleted'
        });
      });
    },
    addUserModal: function addUserModal() {
      var _this5 = this;

      this.errors = [];
      this.editMode = false;
      this.form.role = [];
      this.form.firstname = "", this.form.lastname = "", this.form.country = "";
      axios.get('/api/admin/role/?api_token=' + window.token).then(function (response) {
        _this5.roles = response.data;
      });
      $('#userModal').modal('show');
    },
    addUser: function addUser() {
      var _this6 = this;

      axios.post('/api/admin/store?api_token=' + window.token, this.form).then(function (response) {
        _this6.loadUser();

        $('#userModal').modal('hide');

        _this6.$notify({
          group: 'notification',
          type: 'success',
          title: 'Add User',
          text: 'New User has been Created'
        });
      })["catch"](function (error) {
        _this6.errors = error.response.data.errors;
      });
    },
    filter: function filter() {
      var _this7 = this;

      this.filterUser = [];

      if (this.userType == "all") {
        this.loadUser();
      } else {
        axios.post('/api/admin/user/type?api_token=' + window.token, {
          type: this.userType
        }).then(function (response) {
          _this7.users = response.data;
          response.data.forEach(function (element) {
            _this7.filterUser.push(element.user);
          });
          _this7.users = _this7.filterUser;
        });
      }
    },
    isBan: function isBan(id, status) {
      var _this8 = this;

      this.$swal({
        title: 'Are you sure?',
        text: status == 0 ? "You want to deactivate this user" : "You want to activate this user",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: status == 0 ? 'Yes, deactivate this user!' : 'Yes, activate this user!'
      }).then(function (result) {
        if (result.value) {
          _this8.$swal(status == 0 ? 'Deactivated!' : 'Activated', status == 0 ? 'This user has been Deactivated.' : 'This user has been Activated', 'success');
        }
      });
    },
    btnSubscribe: function btnSubscribe() {
      var _this9 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "You want to change status this user",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(function (result) {
        if (result.value) {
          _this9.userStatusChange();
        }
      });
    },
    userStatusChange: function userStatusChange() {
      var _this10 = this;

      axios.get('/api/user/change-status/' + this.form.id + '/?api_token=' + window.token).then(function (res) {
        $('#userModal').modal('hide');

        _this10.$swal("Status Change Success");

        _this10.loadUser();
      });
    }
  },
  mounted: function mounted() {
    this.loadUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-management/UserComponent.vue?vue&type=template&id=9d4773e6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-management/UserComponent.vue?vue&type=template&id=9d4773e6& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row justify-content-end" }, [
          _c("div", { staticClass: "col-md-3 " }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userType,
                    expression: "userType"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "", id: "" },
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.userType = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.filter
                  ]
                }
              },
              [
                _c(
                  "option",
                  { attrs: { value: "", disabled: "", hidden: "" } },
                  [_vm._v("Select User Type")]
                ),
                _vm._v(" "),
                _c("option", { attrs: { value: "all" } }, [_vm._v("All")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "user" } }, [_vm._v("User")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "admin" } }, [_vm._v("Admin")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "consultant" } }, [
                  _vm._v("Consultant")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button-success mr-2",
              on: { click: _vm.addUserModal }
            },
            [_vm._v("Add User")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card" },
      [
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users, function(user) {
                return _c("tr", { key: user.id }, [
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticStyle: { cursor: "pointer" },
                        on: {
                          click: function($event) {
                            return _vm.isBan(user.id, user.isBan)
                          }
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticStyle: { width: "24px", height: "24px" },
                            attrs: {
                              viewBox: "0 0 24 24",
                              title: "deactivated"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: user.isBan == 0 ? "green" : "red",
                                d:
                                  "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.firstname))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.lastname))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.country))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(user.roles, function(item, index) {
                      return _c(
                        "span",
                        { key: index, staticClass: "badge badge-success mr-2" },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.name) +
                              "\n                            "
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("td", {
                    class: user.is_subscriber ? "text-success" : "text-danger",
                    domProps: {
                      textContent: _vm._s(
                        user.is_subscriber ? "Subscriber" : "Not Subscriber"
                      )
                    }
                  }),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button-primary",
                        on: {
                          click: function($event) {
                            return _vm.modalUser(user.id)
                          }
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticStyle: { width: "20px", height: "20px" },
                            attrs: { viewBox: "0 0 24 24" }
                          },
                          [
                            _c("path", {
                              attrs: {
                                fill: "currentColor",
                                d:
                                  "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                              }
                            })
                          ]
                        ),
                        _vm._v(
                          "\n                                View\n                            "
                        )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c("notifications", {
          attrs: { group: "notification", position: "bottom right" }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "userModal",
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
                    _c("h5", {
                      staticClass: "modal-title",
                      attrs: { id: "exampleModalLabel" },
                      domProps: {
                        textContent: _vm._s(
                          _vm.editMode ? "Edit User" : "Add User"
                        )
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.editMode,
                            expression: "!editMode"
                          }
                        ]
                      },
                      [
                        _c("label", { attrs: { for: "firstname" } }, [
                          _vm._v("Email Address")
                        ]),
                        _vm._v(" "),
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
                          attrs: { type: "email" },
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
                              staticClass: "font-italic text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.email[0])
                              }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", {}, [
                      _c("label", { attrs: { for: "firstname" } }, [
                        _vm._v("First Name")
                      ]),
                      _vm._v(" "),
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
                        attrs: { type: "text" },
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
                            staticClass: "font-italic text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.errors.firstname[0])
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-1" }, [
                      _c("label", { attrs: { for: "lastname" } }, [
                        _vm._v("Last Name")
                      ]),
                      _vm._v(" "),
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
                        attrs: { type: "text" },
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
                            staticClass: "font-italic text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.errors.lastname[0])
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-1" },
                      [
                        _c("label", { attrs: { for: "address" } }, [
                          _vm._v("Country")
                        ]),
                        _vm._v(" "),
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
                              staticClass: "font-italic text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.country[0])
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-1" },
                      [
                        _c("label", { attrs: { for: "role" } }, [
                          _vm._v("Role")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.roles, function(role) {
                          return _c("div", { key: role.is }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.role,
                                  expression: "form.role"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: role.id,
                                checked: Array.isArray(_vm.form.role)
                                  ? _vm._i(_vm.form.role, role.id) > -1
                                  : _vm.form.role
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.form.role,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = role.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.form,
                                          "role",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.form,
                                          "role",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.form, "role", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(
                              _vm._s(role.name) +
                                "\n                            "
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-1" }, [
                    _c("button", {
                      staticClass: "btn w-100",
                      class: _vm.is_subsciber ? "btn-danger" : "btn-success",
                      domProps: {
                        textContent: _vm._s(
                          _vm.is_subsciber
                            ? "Unsubscibe this User"
                            : "Subscribe this User"
                        )
                      },
                      on: { click: _vm.btnSubscribe }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.form.id != 1 && _vm.editMode,
                            expression: "form.id != 1 && editMode"
                          }
                        ],
                        staticClass: "btn btn-secondary mr-auto",
                        attrs: { type: "button", "data-dismiss": "modal" },
                        on: { click: _vm.btnDelete }
                      },
                      [_vm._v("Delete")]
                    ),
                    _vm._v(" "),
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
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.form.is_admin != 1 && _vm.editMode,
                            expression: "form.is_admin != 1 && editMode"
                          }
                        ],
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.btnUpdate }
                      },
                      [_vm._v("Save changes")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.editMode,
                            expression: "!editMode"
                          }
                        ],
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.addUser }
                      },
                      [_vm._v("Add User")]
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Is Active")]),
        _vm._v(" "),
        _c("th", [_vm._v("First Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user-management/UserComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/user-management/UserComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserComponent_vue_vue_type_template_id_9d4773e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=template&id=9d4773e6& */ "./resources/js/components/user-management/UserComponent.vue?vue&type=template&id=9d4773e6&");
/* harmony import */ var _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user-management/UserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserComponent_vue_vue_type_template_id_9d4773e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserComponent_vue_vue_type_template_id_9d4773e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-management/UserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-management/UserComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user-management/UserComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-management/UserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-management/UserComponent.vue?vue&type=template&id=9d4773e6&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/user-management/UserComponent.vue?vue&type=template&id=9d4773e6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_9d4773e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserComponent.vue?vue&type=template&id=9d4773e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-management/UserComponent.vue?vue&type=template&id=9d4773e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_9d4773e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_9d4773e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);