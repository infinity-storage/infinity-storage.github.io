(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{293:function(t,e,n){"use strict";n.r(e);var l={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked:function(){this.$emit("ok")},close:function(){this.$emit("close")}}},c=n(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-1000\n  "},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3"},[t.title?n("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[n("h3",{staticClass:"font-semibold text-lg"},[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"text-black close-modal",on:{click:t.close}},[t._v("✗")])]):t._e(),t._v(" "),n("div",{staticClass:"px-10 py-5"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),n("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white",on:{click:t.okClicked}},[t._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);