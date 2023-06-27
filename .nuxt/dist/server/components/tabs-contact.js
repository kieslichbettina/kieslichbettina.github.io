exports.ids = [6];
exports.modules = {

/***/ 55:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGlkPSJpLWdpdGh1YiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzIgMCBDMTQgMCAwIDE0IDAgMzIgMCA1MyAxOSA2MiAyMiA2MiAyNCA2MiAyNCA2MSAyNCA2MCBMMjQgNTUgQzE3IDU3IDE0IDUzIDEzIDUwIDEzIDUwIDEzIDQ5IDExIDQ3IDEwIDQ2IDYgNDQgMTAgNDQgMTMgNDQgMTUgNDggMTUgNDggMTggNTIgMjIgNTEgMjQgNTAgMjQgNDggMjYgNDYgMjYgNDYgMTggNDUgMTIgNDIgMTIgMzEgMTIgMjcgMTMgMjQgMTUgMjIgMTUgMjIgMTMgMTggMTUgMTMgMTUgMTMgMjAgMTMgMjQgMTcgMjcgMTUgMzcgMTUgNDAgMTcgNDQgMTMgNDkgMTMgNDkgMTMgNTEgMjAgNDkgMjIgNDkgMjIgNTEgMjQgNTIgMjcgNTIgMzEgNTIgNDIgNDUgNDUgMzggNDYgMzkgNDcgNDAgNDkgNDAgNTIgTDQwIDYwIEM0MCA2MSA0MCA2MiA0MiA2MiA0NSA2MiA2NCA1MyA2NCAzMiA2NCAxNCA1MCAwIDMyIDAgWiIgLz4KPC9zdmc+"

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram.0feb951.svg";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/linkedin.e583fde.svg";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/twitter.a4444ef.svg";

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tabs/Contact.vue?vue&type=template&id=75e1062a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "page contactpage",
    class: {
      'active-page': _vm.isActive,
      'animate__animated animate__zoomIn': _vm.isActive
    }
  }, [_vm._ssrNode("<div class=\"page-wrapper\">", "</div>", [_c('PageHeader', {
    attrs: {
      "title": 'Get in touch',
      "secondaryTitle": 'contact'
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"contact col-12 col-lg-5 addr\">", "</div>", [_vm._ssrNode("<h3>REACH OUT!</h3> <p>\n          Lassen Sie uns in Kontakt treten. \n        \n        </p> "), _vm._ssrNode("<address>", "</address>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'map']
    }
  }), _vm._ssrNode(" <h5>Address Point</h5> <p>Neukoppel 3, 22415 Hamburg.</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<address>", "</address>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'envelope']
    }
  }), _vm._ssrNode(" <h5>Send a mail</h5> <p>kieslichbettina@gmail.com</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<address>", "</address>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'square-phone']
    }
  }), _vm._ssrNode(" <h5>Call</h5> <p>+49 170 2120 114</p>")], 2), _vm._ssrNode(" <ul><li><a href=\"https://www.linkedin.com/in/bettina-kieslich-6a9951187/\" target=\"_blank\"><img" + _vm._ssrAttr("src", _vm.linkedinLogo) + "></a></li> <li><a href=\"https://github.com/bettinakieslich\" target=\"_blank\"><img" + _vm._ssrAttr("src", _vm.gitHubLogo) + "></a></li></ul>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-lg-6\">", "</div>", [_vm._ssrNode("<form class=\"contactform\">", "</form>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-lg-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Enter Name\" name=\"name\" required=\"required\" aria-required=\"true\"" + _vm._ssrAttr("value", _vm.name) + "></div></div> <div class=\"col-12 col-lg-6\"><div class=\"form-group\"><input type=\"email\" placeholder=\"Enter Email\" name=\"email\" required=\"required\" aria-required=\"true\"" + _vm._ssrAttr("value", _vm.email) + "></div></div> <div class=\"col-12 col-lg-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Subject\" name=\"subject\" required=\"required\" aria-required=\"true\"" + _vm._ssrAttr("value", _vm.subject) + "></div></div> <div class=\"col-12\"><div class=\"form-group\"><textarea type placeholder=\"Type a message...\" rows=\"5\" name=\"message\" aria-required=\"true\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</textarea></div></div> "), _vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"button\">", "</button>", [_vm.isLoading ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<span>Loading...</span> "), _c('font-awesome-icon', {
    staticClass: "btn-icon spin",
    attrs: {
      "icon": ['fas', 'spinner']
    }
  })], 2) : _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<span class=\"btn-text\">Send Message</span> "), _c('font-awesome-icon', {
    staticClass: "btn-icon",
    attrs: {
      "icon": ['fas', 'paper-plane']
    }
  })], 2)])])], 2)])])], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tabs/Contact.vue?vue&type=template&id=75e1062a&

// EXTERNAL MODULE: ./components/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tabs/Contact.vue?vue&type=script&lang=js&

/* harmony default export */ var Contactvue_type_script_lang_js_ = ({
  name: "ContactPage",
  props: ["isActive"],
  components: {
    PageHeader: PageHeader["default"]
  },

  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      instagramLogo: __webpack_require__(56),
      twitterLogo: __webpack_require__(58),
      linkedinLogo: __webpack_require__(57),
      gitHubLogo: __webpack_require__(55)
    };
  },

  methods: {
    handleFormSubmit() {
      this.isLoading = true;
      fetch("https://formsubmit.co/ajax/kieslichbettina@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
      }).then(response => response.json()).then(data => {
        this.$swal("Thank You!", "I appreciate you taking the time to reach out!", "success");
        this.name = "";
        this.subject = "";
        this.message = "";
        this.email = "";
        this.isLoading = false;
      }).catch(error => {
        this.isLoading = false;
        this.$swal("Something went wrong!", "Please try again!", "error");
      });
    }

  }
});
// CONCATENATED MODULE: ./components/tabs/Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_Contactvue_type_script_lang_js_ = (Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/tabs/Contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tabs_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79607ead"
  
)

/* harmony default export */ var Contact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PageHeader: __webpack_require__(7).default})


/***/ })

};;
//# sourceMappingURL=tabs-contact.js.map