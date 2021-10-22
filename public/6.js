(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{22:function(t,e,a){"use strict";a.r(e);var o={data:function(){return{oracle:{},cast:!1,diary:!1,alreadyCast:!1,question:!1,details:!1,rating_labels:[{rating:0,label:"Difficult"},{rating:1,label:"Below Average"},{rating:2,label:"Average"},{rating:3,label:"Above Average"},{rating:3.5,label:"Good"},{rating:4,label:"Good"},{rating:4.5,label:"Good"},{rating:5,label:"Excellent"}],form:new Form({oracle_text:[],question:"",details:"",date:(new Date).toDateString()})}},mounted:function(){},methods:{generate:function(){0==this.diary?this.castOnly():this.castAsDiary()},saveDiary:function(){var t=this;this.form.post("/api/oracle/store-oracle-text?api_token="+window.token).then((function(t){window.location="/diaries"})).catch((function(e){t.$notify({group:"notification",type:"error",title:"Invalid Input",text:"Oracle text, question and details are required"})}))},castOnly:function(){var t=this;4==Object.keys(this.form.oracle_text).length?this.form.post("/api/oracle/text?api_token="+window.token).then((function(e){t.oracle=e.data,t.cast=!0})).catch((function(e){t.$notify({group:"notification",type:"error",title:"Invalid Input",text:"Oracle text field must be character"})})):this.$notify({group:"notification",type:"error",title:"Invalid Input",text:"Oracle text, question and details are required"})},castAsDiary:function(){var t=this;4==Object.keys(this.form.oracle_text).length&&""!=this.form.question&&""!=this.form.details?this.form.post("/api/oracle/text?api_token="+window.token).then((function(e){t.alreadyCast=!0,t.question=!0,t.details=!0,t.oracle=e.data,t.cast=!0})).catch((function(e){t.$notify({group:"notification",type:"error",title:"Invalid Input",text:"Oracle text field must be character"})})):this.$notify({group:"notification",type:"error",title:"Invalid Input",text:"Oracle text, question and details are required"})}}},i=(a(43),a(0)),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 border p-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.oracle_text[0],expression:"form.oracle_text[0]"}],staticClass:"form-control num-size text-center text-capitalize",attrs:{readonly:t.alreadyCast,pattern:"[A-Za-z]{3}",maxlength:"1",type:"text"},domProps:{value:t.form.oracle_text[0]},on:{input:function(e){e.target.composing||t.$set(t.form.oracle_text,0,e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-3 border p-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.oracle_text[1],expression:"form.oracle_text[1]"}],staticClass:"form-control num-size text-center text-capitalize",attrs:{readonly:t.alreadyCast,pattern:"[A-Za-z]{3}",maxlength:"1",type:"text"},domProps:{value:t.form.oracle_text[1]},on:{input:function(e){e.target.composing||t.$set(t.form.oracle_text,1,e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-3 border p-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.oracle_text[2],expression:"form.oracle_text[2]"}],staticClass:"form-control num-size text-center text-capitalize",attrs:{readonly:t.alreadyCast,pattern:"[A-Za-z]{3}",maxlength:"1",type:"text"},domProps:{value:t.form.oracle_text[2]},on:{input:function(e){e.target.composing||t.$set(t.form.oracle_text,2,e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-3 border p-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.oracle_text[3],expression:"form.oracle_text[3]"}],staticClass:"form-control num-size text-center text-capitalize",attrs:{readonly:t.alreadyCast,pattern:"[A-Za-z]{3}",maxlength:"1",type:"text"},domProps:{value:t.form.oracle_text[3]},on:{input:function(e){e.target.composing||t.$set(t.form.oracle_text,3,e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-4"},[a("span",{staticClass:"numb-format font-weight-bold"},[t._v("\n                        "+t._s(t.oracle.number)+"\n                    ")])]),t._v(" "),a("div",{staticClass:"col-md-8 pt-3"},[a("img",{staticClass:"img-fluid",attrs:{src:null!=t.oracle.rating?"/img/rating/"+t.oracle.rating+".png":"",alt:""}})]),t._v(" "),a("div",{staticClass:"w-100 numb-format"},t._l(t.rating_labels,(function(e){return a("span",{directives:[{name:"show",rawName:"v-show",value:e.rating==t.oracle.rating,expression:"item.rating == oracle.rating"}],key:e.rating},[t._v("\n                        "+t._s(e.label)+"\n                    ")])})),0),t._v(" "),a("div",[a("p",{staticClass:"meaning-format"},[t._v("\n                        "+t._s(t.oracle.text)+"\n                    ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.cast||!t.diary,expression:"!cast || !diary"}],staticClass:"w-100 text-center mt-2"},[a("button",{staticClass:"btn button-success w-25",on:{click:t.generate}},[t._v("Submit")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.cast&&t.diary,expression:"cast && diary"}],staticClass:"w-100 text-center mt-2"},[a("button",{staticClass:"btn button-primary w-25",on:{click:t.saveDiary}},[t._v("Save Journal")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.diary,expression:"diary"}],staticClass:"col-md-4"},[t._m(0),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.question,expression:"form.question"}],staticClass:"form-control",attrs:{type:"text",readonly:t.question,placeholder:"Question here..."},domProps:{value:t.form.question},on:{input:function(e){e.target.composing||t.$set(t.form,"question",e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.details,expression:"form.details"}],staticClass:"form-control",attrs:{readonly:t.details,placeholder:"Details here...",name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.form.details},on:{input:function(e){e.target.composing||t.$set(t.form,"details",e.target.value)}}})])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("label",{attrs:{for:"question"}},[this._v("Question")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-2"},[e("label",{attrs:{for:"details"}},[this._v("Details")])])}],!1,null,"51fbcd66",null);e.default=r.exports},43:function(t,e,a){"use strict";var o=a(7);a.n(o).a},44:function(t,e,a){(e=t.exports=a(1)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);",""]),e.push([t.i,"\n.numb-format[data-v-51fbcd66]{\n    font-size: 60px;\n    color: #FF3A18;\n    font-family: 'Lobster', cursive;\n}\n.num-size[data-v-51fbcd66]{\n    font-size: 80px;\n}\n.meaning-format[data-v-51fbcd66]{\n    font-size: 19px;\n    font-family: 'Lobster', cursive;\n    color: gray;\n    text-indent: 50px;\n}\n",""])},7:function(t,e,a){var o=a(44);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(2)(o,i);o.locals&&(t.exports=o.locals)}}]);