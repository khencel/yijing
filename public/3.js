(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{44:function(t,e,n){"use strict";var s=n(8);n.n(s).a},45:function(t,e,n){(e=t.exports=n(2)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);",""]),e.push([t.i,"\n.dateFormat{\n    font-weight: bold;\n    font-family: 'Anton', sans-serif;\n    font-size: 35px;\n    color: white;\n    letter-spacing: 0.2em;\n}\n.hex-name{\n    font-family:'Anton', sans-serif;\n    color:black;\n}\n#test{\n    background-image: url('/img/universe.jpg');\n    background-position: center;\n    background-size: cover;\n    background-color: rgba( 0, 0, 0, 0.3);\n    background-blend-mode: overlay;\n    padding-top: 200px;\n}\n\n",""])},62:function(t,e,n){"use strict";n.r(e);function s(t){return t<10?"0"+t:t}var a=function(){return new Date},i=function(){return s(a().getSeconds())},o=function(){return s(a().getMinutes())},r=function(t){var e=a().getHours();return t&&e>12&&(e-=12),s(e)},c={name:"vue-digital-clock",props:["blink","displaySeconds","twelveHour"],data:function(){return{ticker:null,minutes:o(),hours:r(this.twelveHour),seconds:i(),amPm:a().getHours()>12?"pm":"am"}},created:function(){var t=this;this.ticker=setInterval((function(){t.minutes=o(),t.hours=r(t.twelveHour),t.seconds=i()}),1e3)},destroyed:function(){clearInterval(this.ticker)}};var l=function(t,e,n,s,a,i,o,r,c,l){"boolean"!=typeof o&&(c=r,r=o,o=!1);var d,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,a&&(u.functional=!0)),s&&(u._scopeId=s),i?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=o?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),d)if(u.functional){var m=u.render;u.render=function(t,e){return d.call(e),m(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return n},d=c;c.__file="/Users/yerbue01/workspace/vue-digital-clock/src/Clock.vue";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("time",{staticClass:"clock"},[n("span",{staticClass:"clock__hour"},[t._v(t._s(t.hours))]),n("span",{staticClass:"clock__colon",style:{visibility:t.blink&&t.seconds%2!=0?"hidden":"visible"}},[t._v(":")]),n("span",{staticClass:"clock__minutes"},[t._v(t._s(t.minutes))]),t.displaySeconds?n("span",{staticClass:"clock__colon",style:{visibility:t.blink&&t.seconds%2!=0?"hidden":"visible"}},[t._v(":")]):t._e(),t.displaySeconds?n("span",{staticClass:"clock__seconds"},[t._v(t._s(t.seconds))]):t._e(),t.twelveHour?n("span",{staticClass:"clock__ampm"},[t._v(t._s(t.amPm))]):t._e()])};u._withStripped=!0;var m={components:{DigitalClock:l({render:u,staticRenderFns:[]},void 0,d,void 0,!1,void 0,void 0,void 0)},data:function(){return{dailies:"",dailyHexName:"",meaning:"",poem:"",month:"",date:"",day:"",months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],current_date:new Date}},methods:{loadDailyHex:function(){var t=this;axios.post("https://qimen.jennelcheng.com/api/get-home-chart",{month:this.current_date.getMonth()+1,day:this.current_date.getDate(),year:this.current_date.getFullYear()}).then((function(e){axios.post("/api/user/hexagram",{element:e.data.day_chart.element.name,english:e.data.day_chart.english.name}).then((function(e){t.dailies=e.data.code,t.dailyHexName=e.data.name,t.meaning=e.data.meaning,t.poem=e.data.poem}))}))},showClock:function(){this.day=this.days[(new Date).getDay()],this.month=this.months[(new Date).getMonth()],this.date=(new Date).getDate()}},mounted:function(){this.showClock(),this.loadDailyHex()}},p=(n(44),n(0)),h=Object(p.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row justify-content-center",attrs:{id:"test"}},[n("div",{staticClass:"col-md-5"},[n("div",{staticClass:"row justify-content-center pb-5 mt-2 ml-5 mr-5"},[n("div",{staticClass:"col-xl-4 text-center p-3 mb-2 col-6",staticStyle:{"background-color":"rgba(255,255,255,0.8)","border-radius":"20px","box-shadow":"0px 2px 5px white"}},t._l(t.dailies,(function(e,s){return n("div",{key:s},[n("img",{directives:[{name:"show",rawName:"v-show",value:0==e,expression:"daily == 0"}],class:2==s?"mb-3":"",staticStyle:{width:"100%",height:"35px"},attrs:{src:"/img/brokenLine.png",alt:""}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:1==e,expression:"daily == 1"}],class:2==s?"mb-3":"",staticStyle:{width:"100%",height:"35px"},attrs:{src:"/img/solidLine.png",alt:""}})])})),0),t._v(" "),n("div",{staticClass:"col-xl-6 text-center mt-4"},[n("span",{staticClass:"hex-name glow",staticStyle:{"font-size":"50px",color:"white"}},[t._v(t._s(t.dailyHexName))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"dateFormat glow"},[t._v(t._s(t.day)+",")]),n("span",{staticClass:"dateFormat glow",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.month))]),n("span",{staticClass:"dateFormat glow ml-2",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.date))]),t._v(" "),n("br"),t._v(" "),n("DigitalClock",{staticClass:"dateFormat glow",staticStyle:{"font-size":"40px"},attrs:{twelveHour:"false",blink:!0}})],1)])]),t._v(" "),n("div",{staticClass:"col-md-5 text-white p-5"},[n("p",[n("strong",[t._v(t._s(t.dailyHexName))])]),t._v(" "),n("p",{staticClass:"poem-style"},[t._v("\r\n            "+t._s(t.poem)+"\r\n        ")])])])])}),[],!1,null,null,null);e.default=h.exports},8:function(t,e,n){var s=n(45);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(3)(s,a);s.locals&&(t.exports=s.locals)}}]);