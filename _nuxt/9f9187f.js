(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(t,e,n){var content=n(217);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("7abdbb3d",content,!0,{sourceMap:!1})},165:function(t,e,n){"use strict";var r=n(6),o=(n(31),{data:function(){return{secure:!0,checked:!1}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.isSecureContext?console.log("secure"):(console.log("not secure context detected"),t.secure=!1),t.checked=!0;case 2:case"end":return e.stop()}}),e)})))()}}),l=(n(216),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-100 min-h-screen"},[n("div",{staticClass:"relative top-0 z-10 w-full"},[n("div",{staticClass:"flex justify-center px-10 py-5"},[n("n-link",{staticClass:"mr-auto font-bold text-xl px-4 py-2",attrs:{to:"/"}},[t._v("DeBox")]),t._v(" "),n("div",{staticClass:"flex items-center ml-auto"},[n("n-link",{staticClass:"\n            rounded-full\n            font-bold\n            text-blue-500\n            px-4\n            py-2\n            transition\n            duration-300\n            ease-in-out\n            hover:bg-blue-500\n            hover:text-white\n            m-1\n          ",attrs:{to:"/faq"}},[t._v("How it works")]),t._v(" "),n("n-link",{staticClass:"\n            rounded-full\n            font-bold\n            text-blue-500\n            px-4\n            py-2\n            transition\n            duration-300\n            ease-in-out\n            hover:bg-blue-500\n            hover:text-white\n            m-1\n          ",attrs:{to:"/donate"}},[t._v("Donate")]),t._v(" "),n("a",{staticClass:"\n            px-4\n            py-2\n            m-1\n          ",attrs:{href:"https://github.com/farahats9",target:"_external"}},[n("GithubIcon",{})],1)],1)],1)]),t._v(" "),t.checked?n("div",{staticClass:"flex justify-center items-center flex-grow min-h-screen-80"},[t.secure||"faq"==t.$route.name?n("Nuxt"):n("Security")],1):n("div",{staticClass:"\n      md:py-12\n      px-4\n      sm:px-6\n      lg:px-8\n      relative\n      flex\n      items-center\n      justify-center\n      min-h-screen-80\n    "},[n("Spinner")],1),t._v(" "),n("div",{staticClass:"relative top-0 z-10 w-full"},[n("div",{staticClass:"flex justify-start px-10 py-5"},[n("p",{staticClass:"text-gray-400"},[t._v("v"+t._s(t.$config.clientVersion))])])])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{GithubIcon:n(219).default,Security:n(218).default,Spinner:n(173).default})},173:function(t,e,n){"use strict";n.r(e);var r=n(14),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"animate-spin h-20 w-20 text-blue-400",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"spinner",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}})])}),[],!1,null,null,null);e.default=component.exports},178:function(t,e,n){n(179),t.exports=n(180)},216:function(t,e,n){"use strict";n(158)},217:function(t,e,n){var r=n(62)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.page-enter-active,.page-leave-active{\n  transition:opacity .5s\n}\n.page-enter,.page-leave-to{\n  opacity:0\n}\n.min-h-screen-80{\n  min-height:83vh\n}\n.xmrbtn{\n  color:#f60;\n  border-color:#f60\n}\n.xmrbtn:hover{\n  background-color:#f60\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},218:function(t,e,n){"use strict";n.r(e);n(123);var r={data:function(){return{browserCheck:!1}},mounted:function(){this.browserCheck="https:"==window.location.protocol||window.location.hostname.endsWith(".localhost")||"localhost"==window.location.hostname}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n  "},[n("div",{staticClass:"text-center flex flex-col justify-center items-center"},[n("h1",{staticClass:"text-2xl font-semibold"},[t._v("Insecure context detected!")]),t._v(" "),t.browserCheck?n("p",[t._v("\n    Encryption may not be supported by your browser, please try using another\n    modern browser.\n  ")]):n("p",[t._v("\n    This web app needs either HTTPS or being hosted on localhost for\n    encryption to work.\n  ")])])])}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var r=n(14),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)",fill:"#1B1F23"}})])}),[],!1,null,null,null);e.default=component.exports}},[[178,22,6,23]]]);