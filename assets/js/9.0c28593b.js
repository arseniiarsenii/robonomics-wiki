(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "5EhC":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"rB9j\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"EnZy\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ \"mRH6\");\n/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    items: {\n      type: Array,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      urlPath: null,\n      breadcrumbs: []\n    };\n  },\n  watch: {\n    \"$route.path\": function $routePath(current, old) {\n      this.breadcrumbs = [];\n      this.urlPath = '/' + this.$route.path.split('/')[1] + '/' + this.$route.path.split('/')[3];\n      this.getParentItem(this.items, this.urlPath);\n    }\n  },\n  computed: {\n    locale: function locale() {\n      return this.$store.state.locale;\n    }\n  },\n  methods: {\n    getParentItem: function getParentItem(root, link) {\n      var node = null;\n      var t = null;\n\n      for (var i = 0; i < root.length; i++) {\n        node = root[i];\n\n        if (node.link === link || node.link === link + '/' || node.items && (t = this.getParentItem(node.items, link))) {\n          console.log(node);\n\n          var _link = node.link ? this.$path(node.link, this.locale) : null;\n\n          var breadcrumb = {\n            id: Math.floor(Math.random() * 1000000),\n            title: node[\"title_\".concat(this.locale)] ? node[\"title_\".concat(this.locale)] : node[\"title_en\"],\n            link: _link\n          };\n          this.breadcrumbs.unshift(breadcrumb);\n          return node;\n        }\n      }\n\n      return null;\n    },\n    hascurrent: function hascurrent(a) {\n      var path = this.$route.matched[0].path + '/';\n      var contains = false;\n\n      for (var i = 0; i < a.length; i++) {\n        if (!a[i].items) {\n          if (this.$path(a[i].link, this.locale) == path) {\n            contains = true;\n          }\n        } else {\n          if (this.hascurrent(a[i].items)) {\n            contains = true;\n          }\n        }\n      }\n\n      return contains;\n    }\n  },\n  mounted: function mounted() {\n    this.urlPath = '/' + this.$route.path.split('/')[1] + '/' + this.$route.path.split('/')[3];\n    this.getParentItem(this.items, this.urlPath);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "7nfx":
/*!***********************************************************************************!*\
  !*** ./src/components/Breadcrumbs.vue?vue&type=template&id=605a1d3c&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_564eb8b5_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_605a1d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"564eb8b5-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=template&id=605a1d3c&scoped=true& */ \"JK/0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_564eb8b5_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_605a1d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_564eb8b5_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_605a1d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?");

/***/ }),

/***/ "BhG0":
/*!*************************************************************************************************!*\
  !*** ./src/components/Breadcrumbs.vue?vue&type=style&index=0&id=605a1d3c&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_605a1d3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=style&index=0&id=605a1d3c&scoped=true&lang=css& */ \"ncWI\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_605a1d3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_605a1d3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_605a1d3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_605a1d3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?");

/***/ }),

/***/ "HayW":
/*!*****************************************************************!*\
  !*** ./src/components/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=script&lang=js& */ \"5EhC\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?");

/***/ }),

/***/ "JK/0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"564eb8b5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumbs.vue?vue&type=template&id=605a1d3c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"breadcrumbs\"},[_c('ul',{staticClass:\"breadcrumbs__list\"},[_c('li',{staticClass:\"breadcrumbs__item\"},[_c('g-link',{staticClass:\"breadcrumbs__home-icon\",attrs:{\"to\":\"https://wiki.robonomics.network\"}},[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=robonomics%20logo!../assets/images/robonomics-logo-sign-sm.svg */ \"SaAS\"),\"alt\":\"robonomics logo\"}})],1),_c('div',{staticClass:\"breadcrumbs__divider\"})],1),_vm._l((_vm.breadcrumbs),function(breadcrumb,index){return _c('li',{key:breadcrumb.id,staticClass:\"breadcrumbs__item\"},[(breadcrumb.link)?_c('g-link',{staticClass:\"breadcrumbs__link\",attrs:{\"to\":breadcrumb.link}},[_vm._v(\"\\n        \"+_vm._s(breadcrumb.title)+\"\\n      \")]):_c('span',{staticClass:\"breadcrumbs__link\"},[_vm._v(_vm._s(breadcrumb.title))]),(index != _vm.breadcrumbs.length-1)?_c('div',{staticClass:\"breadcrumbs__divider\"}):_vm._e()],1)})],2)])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22564eb8b5-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "SaAS":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=robonomics%20logo!./src/assets/images/robonomics-logo-sign-sm.svg ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"type\":\"image\",\"mimeType\":\"image/svg+xml\",\"src\":\"/assets/static/robonomics-logo-sign-sm.0d639c8.cbcb396938b09b3bd224771b7be31104.svg\",\"size\":{\"width\":50,\"height\":44},\"sizes\":\"(max-width: 50px) 100vw, 50px\",\"srcset\":[\"/assets/static/robonomics-logo-sign-sm.0d639c8.cbcb396938b09b3bd224771b7be31104.svg 50w\"],\"dataUri\":\"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 50 44' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-09e2d8ba42c1685680267c4888ef9eb3'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-09e2d8ba42c1685680267c4888ef9eb3)' width='50' height='44' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHzElEQVRo3t1aC2wUVRTdCgVKS4l8DbQqWCFKhCoS8QNBwJYYUcCkKrEEAhFQCWliolUUQjEkFU2k4jexihGUAIqkUVNFsPKx8YfFohgo34L97q/tbnfb9Zz1DnkOOztD6WdnX3IzM2/fm333vvs5975xOLqxhUIh7TqgqanpRVwP%2b/1%2bJ694XsV%2bdVzcNDKkMN8XNAn0AagqEAh4eQUVS39f/Zx4E0amz%2bfb2Y4WUhqf0b%2bDvzviuYHBOR6PxxeK0KR/TrwLYL668RHkMD/eBfAAHF5dJBNAfyNuZ8cj06oTHN/W1vYJrgHdzrfBBH7FdUrcOUEdM8Nw/zTIp9cAt9t9Frez4l0D7gL9JHx/BXoctMTr9Ta2traybwOGXa/HDrZmXmnc/TVQdXr8ZtwvlDHsfytsB21tZ3BZHq8OkLtdIbu/CzRKfuotIOiY9ltGRka67bVAt/CBeP5YGDwHmoq%2bPsrYXqAiIEO3/E6o3Dtu1B/3z4POtLS0EPq%2bB%2bqvG5uQlZV1I67fipCOVFdXZ%2bCnBLszn5CTkzMKz%2bXC2A%2bgW43UG8/PwT/USJQoBA22pRkoXn8QaDUZam5udlG1TTTlZtD7lBRyg1O4TDMIp7aI%2bbyfghB3Tnb/w7Kysglmzg39D8NUamXOa6AMW4IjLPYm0EZy4XQ6CXMfsThvNGg9o2JDQwO1ZrFd/cBi7L5bdnId6DqjnYygOZnBYLBK5m7Ny8vLjPmwqGPgdtBOYeAoaKIVW1Z8R4qEQg98AYW4zk4x/yo8v%2bJyuTzUfmEk2cruqdGDkBjPZSJERpHxaWlpCTGpBcqCegHTc/d/k4WXoW/4FWjSC8iTzsEcKMw3QQNjPexRdT/1%2b/1Md//sCK7X7e4QqRey/QOaTCHH6u73x/2DoAtIarjgd9B3dRTQ47DoF3KBIf4SIXykhsVY2/1bQLtloSxuzDXw8Fac4MV7QOI03K9luoxw6pKyWUKPRwXdH/fB8zI4vhBATBD3eegbFKEeoM5hAjQGZAUc3QHStIAVpUkxFRZZ6wPtZakP9r9fYyra4vLz88fSTOgzopmGXIeCVjIs1tbWsp64NspmdHvjYUeR7I5XVL%2b/Bbvf4Ha76d2PlpeXz8zOzk40EoDcjwD9iJSZ/7O3oqJieo8JQLewBWQCqh8S8DPUxL6p%2btNAv4jQWB36DDTEZB7xxROgs3CK4dxCrSn0CPNwTCxnfdnU1MQF/S6mkGBiz9cQ3lKdlaKoRw5Fkkz8xmA8b5Npp0EzCgoKErtVC5SFpcqO1MuObLKQISaRUVCL7nAkCN%2bxW3VuUTRuEUtrMIUAwu0OLcfo9oxRsj3NM3%2bh1fSjCYBABtj%2bABnWlcVDgh1WRFJrHVPJdIIy1c/0GX39ulwAOkbSWegARA3U1NRwN58yiudKG8450Bb1YKhdd0S2X8MPJmZ0H8zvgMz5huX2btUA/Mk87ORxrdABGmcB5CxUqsKq%2bl8UQGNjI9XgbQxPiQaOiDBxvxRCaK2rq%2bP8ZzUt6BJ/oL6wpKQkXavjCz6friEzI%2bdVVVWVrqTHkZqqCXSmj1nQAmaLmhbsA93fJQKIEMvzEb/PS8wv0sJelPjNuv962PhZA7XXH5O3C0OpJuAoGVr4KMMiTJFTNzMV73Qh6HL0MUrpupJQVvtTAwH0BsjJlMwwZEUA0i5IhBloIlw6xF08bUL7A1gkRztP6HQB4JoIeh3EoM/S9WpV4gZzRkgG1xLlmwC9KTAqBAQojbcQFh%2bS5Ivta1aiu0L9qcaTQSclXG1DX4aJo%2brHQihAkkfmWBGAfswzPDs0AUeE4q/CLEMCrmgWKZ2tBTeA3mWlFoCFZe6lFpzUVCU9tsr8/8aBKVaW5pmFWB6rg75jeIXA91mtQV6OAObCvrQzfRYoR5hMobmskcSlwwKQVoT3DTPBGMwTFssRuwaoUjssAJ263Q36XDz0YVzutbAjC5Vkp/0ymI/kKE/QFCxo3ARtnVKTnNshAUQoWqyur6/nVlK8KzQnE%2bmlkumNkzDWmS1cFeb7o6w3SZKxOq%2bXETr0RrSSnNVUd4YcaLIdIgQ2mUvVnw7awtwdtKcT6JC8L4vvN4k6Awi4BBdUah9hWBaAbhA9/9aGhga%2b7Dic3yL1S85oBRKhPp1I2jtNQ3VpaelMfn4rm7ansLAw1bIQlBcluVwugooTYFwLe31j9XgqAlrdhByBCz8vH2WlXK4ZpCt2fJBgw4IT6hFmDUyXmKVE1k9tGGv5hSNHjmShYwnsyA/nxxe8pFVqYvJYylgLViK7bFEA1ZBLxht48lkAE4eUXHtqt1dbOqdmMZE%2bjOAI5nxE1WIj6aXm5uZOkm94QsH/XCmrLYkOmzasf6Z8kh8%2bVSouLr5HA0jqoKFygssPGPlZCrG7X2DsaIeNG9Z/LWg7v8aXJO608LkqnMYLelqAzT6lq9G1SoZ1mwaIGBZtRL0UM/gZ/PhV/sDvSZ45OuAk1gjIuASHQ3WC8onLMp7ygp60ES2XdW8EH%2b0GecYWB2L8LglzoSvA7XZpet4OOuDtN4unjzjI5/PVAFf/jXGVoKM2okqum%2buPIoBSasBs3BREEpfT6ayVrG6CfMtrNwr7N/BxwUAjXg6HPjl63s6PleEs6nCtBn3PUrMGIW0cBZIFBJGfauHvmPB757%2bBp7ICip/xLQAAAABJRU5ErkJggg==' /%3e%3c/svg%3e\"}\n\n//# sourceURL=webpack:///./src/assets/images/robonomics-logo-sign-sm.svg?./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=robonomics%2520logo");

/***/ }),

/***/ "ncWI":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumbs.vue?vue&type=style&index=0&id=605a1d3c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "tsY1":
/*!****************************************!*\
  !*** ./src/components/Breadcrumbs.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Breadcrumbs_vue_vue_type_template_id_605a1d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=template&id=605a1d3c&scoped=true& */ \"7nfx\");\n/* harmony import */ var _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=script&lang=js& */ \"HayW\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Breadcrumbs_vue_vue_type_style_index_0_id_605a1d3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=style&index=0&id=605a1d3c&scoped=true&lang=css& */ \"BhG0\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Breadcrumbs_vue_vue_type_template_id_605a1d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Breadcrumbs_vue_vue_type_template_id_605a1d3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"605a1d3c\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Breadcrumbs.vue?");

/***/ })

}]);