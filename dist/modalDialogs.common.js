module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "92e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDialogBase_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be89");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDialogBase_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDialogBase_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDialogBase_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be89":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, "getArrayElWIdxByIdFactory", function() { return getArrayElWIdxByIdFactory; });
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, "setPropVal", function() { return setPropVal; });
__webpack_require__.d(mutations_namespaceObject, "setProps", function() { return setProps; });
__webpack_require__.d(mutations_namespaceObject, "setArrayElPropsByIdFactory", function() { return setArrayElPropsByIdFactory; });
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "passThruActionsFactory", function() { return passThruActionsFactory; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/cats4vue/src/index.js
/*
Eg:
const defs = {
	prop: {
		type: "string", default: "NS", required: true
	}
};
*/
function configParser(config={}, defaults={}) {
	const result = {};
	for(const name in defaults) {
		const defProp = defaults[name];
		const actualProp = config[name];
		
		const defType = defProp.type;
		const actualType = typeof actualProp;
		
		const isRequired = defProp.required;
		const isProvided = name in config;
		
		if(typeof defType === "undefined") {throw new Error("type property on default is missing");}
		
		if(isRequired && !isProvided) {throw new Error("Config property '"+name+"' is required but not provided.");}
		
		if(isProvided && defType !== null && actualType !== defType) {throw new Error("Config property '"+name+"' must be of type '"+defType+"' but is of type '"+actualType+"'.");}
				
		result[name] = (isProvided) ? actualProp : defProp.default;
	}
	
	const mismatch = [];
	for(const name in config) {
		if(!(name in defaults)) {mismatch.push(name);}
	}
	if(mismatch.length > 0) {console.warn("The following config property was / properties were provided for which no defaults exist: "+mismatch.toString());}
	
	return result;
}

//https://vuejs.org/v2/style-guide/#Private-property-names-essential
function isValidPrivateProperty(prop) {
	return (prop[0] === "$") && (prop[1] === "_") && (prop.substring(2).indexOf("_") > -1);
}

function componentOptionsWriter(component, componentOptions) {
	for(const name in componentOptions) {
		if(name in component) {
			throw new Error("Tried to write property on component that already exists: "+name);
		}
		
		if(!isValidPrivateProperty(name)) {
			throw new Error("Private property names should be in the form of: $_namespace_propertyName. This is important especially for plugins in order to avoid name collisions. See also https://vuejs.org/v2/style-guide/#Private-property-names-essential");
		}

		component[name] = componentOptions[name];
	}
}

function renameComponent(component, name) {
	if(typeof name !== "string") {
		throw new Error("'name' parameter must be of type string. Got: "+typeof name);
	}
	
	if(typeof component !== "object" || !("name" in component)) {
		throw new Error("'component' parameter must be an object with the property name.");
	}
	
	component.name = name;
}

function registerVuexModule(vuex, namespace, vuexModule) {
	if(typeof namespace !== "string") {
		throw new Error("namespace parameter must be of type string.");
	}	
	
	if(typeof vuexModule !== "object") {
		throw new Error("module parameter must be of type object.");
	}
	
	const haveAtLeastOne = ["state", "getters", "mutations", "actions", "modules"];
	let hasHowMany = 0;
	haveAtLeastOne.forEach((prop)=>{
		if(vuexModule.hasOwnProperty(prop)) {hasHowMany++}
	});
	
	if(hasHowMany === 0) {
		throw new Error("Vuex module is of unexpected structure. Expected to see at least one of: "+haveAtLeastOne.toString(","));
	}
	
	if(typeof vuex === "undefined" || typeof vuex.dispatch === "undefined") {
		throw new Error(`Plugin ${namespace} requires vuex instance as config parameter: Vue.use(${namespace}, {vuex: instanceOfVuex}).`);
	}		
	
	vuex.registerModule(namespace, vuexModule);
}

const cats4Vue = {
	configParser, 
	isValidPrivateProperty, 
	componentOptionsWriter, 
	renameComponent, 
	registerVuexModule
};

/* harmony default export */ var src = (cats4Vue);
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/getters.js
function getArrayElWIdxById(container, index, noResult) {
	return (id) => {
		const idx = index[id];
		
		if(typeof idx !== "number") {
			return noResult;
		}

		return container[idx];
	}
}

const getArrayElWIdxByIdFactory = function getArrayElWIdxByIdFactory(settings={}) {
	const container = settings.container || "container";
	const index = settings.index || "index";
	const noResult = ("noResult" in settings) ? settings.noResult : null;
	
	return function generatedGetArrayElWIdxById(state) {

		if(typeof state[index] !== "object") {
			throw new Error("Name of index does not point to an object in state: "+index);
		} 
		
		if(typeof state[container] !== "object") {
			throw new Error("Name of container does not point to an object in state: "+container);
		} 	
		
		return getArrayElWIdxById(state[container], state[index], noResult);
	}
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/mutations.js
const setPropVal = function setPropVal(state, data) {	
	if(typeof data === "undefined" || !("prop" in data) || !("val" in data)) {
		throw new Error("Missing property on data parameter: provide 'prop' and 'val'.");
	}
	
	if(!(data.prop in state)) {
		throw new Error("Tried to set non-existing property: "+data.prop);
	}
	
	state[data.prop] = data.val;
}

const setProps = function setProps(state, data) {
	const err = [];
	for(const prop in data) {
		if(!(prop in state)) {
			err.push(prop);
			continue;
		}
		state[prop] = data[prop];
	}

	if(err.length > 0) {
		throw new Error("Tried to set at least one non-existing property: "+err.join(","));
	}	
}

function setArrayElPropsById(container, index, props) {
	const id = props.id;
	if(typeof id === "undefined") {
		throw new Error("Missing id on data parameter.");
	}
	
	const idx = index[id]
	if(typeof idx === "undefined") {
		throw new Error("Id not found in index while setting prop/s on element: "+JSON.stringify(props));
	}

	const el = container[idx];
	const err = [];
	delete props.id;
	
	for(const p in props) {
		if(p in el)  {
			el[p] = props[p];
		}
		else {
			err.push(p);
		}
	}
	
	if(err.length > 0) {
		throw new Error("Tried to set at least one non-existing property: "+err.toString(","));
	}
}

const setArrayElPropsByIdFactory = function setArrayElPropsByIdFactory(settings={}) {
	const container = settings.container || "container";
	const index = settings.index || "index";
	
	return function generatedSetArrayElPropsById(state, data) {	
		
		if(typeof state[index] !== "object") {
			throw new Error("Name of index does not point to an object in state: "+index);
		} 
		
		if(typeof state[container] !== "object") {
			throw new Error("Name of container does not point to an object in state: "+container);
		} 		
		
		setArrayElPropsById(state[container], state[index], data);
	}	
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/actions.js
function passThruAction(command, store, data) {store.commit(command, data);}

const passThruActionsFactory = function passThruActionsFactory(names) {
	
	if(typeof names === "string") {
		return function generatedPassThruAction(store, data) {
			passThruAction(names, store, data);
		}
	}
	
	if(names instanceof Array) {
		const obj = {};
		names.forEach((name)=>{			
			if(typeof name !== "string") {
				throw new Error("Expected element of array to be of type string. Got: "+typeof name);
			}
			obj[name] = function generatedPassThruAction(store, data) {
				passThruAction(name, store, data);
			}			
		});
		return obj;
	}
	
	if(typeof names === "object") {
		for(const name in names) {
			const methodName = name;
			const commandName = names[name];			
			names[methodName] = function generatedPassThruAction(store, data) {
				passThruAction(commandName, store, data);
			}
		}	
		return names;
	}
	
	throw new Error("Expected parameter to be of type string, object or array. Got: "+typeof names);
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/index.js




const getters = getters_namespaceObject;
const mutations = mutations_namespaceObject;
const actions = actions_namespaceObject;

const vuexHeman = {
	getters, 
	mutations,
	actions
}

/* harmony default export */ var vuex_heman_src = (vuexHeman);





// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/store/index.js

var dialogResolve;
var store = {
  namespaced: true,
  state: {
    opened: null,
    parameters: null
  },
  mutations: {
    set: mutations.setPropVal
  },
  actions: {
    set: function set(store, data) {
      store.commit("set", data);
    },
    open: function open(store, data) {
      if (store.state.opened !== null) {
        throw new Error("Tried to open a dialog but another dialog is still opened.");
      }

      store.commit("set", {
        prop: "parameters",
        val: data.parameters || null
      });
      store.commit("set", {
        prop: "opened",
        val: data.dialog
      });
      return new Promise(function (resolve) {
        dialogResolve = resolve;
      });
    },
    close: function close(store, data) {
      store.commit("set", {
        prop: "parameters",
        val: null
      });
      store.commit("set", {
        prop: "opened",
        val: null
      });
      dialogResolve(data);
      dialogResolve = null;
    }
  }
};
/* harmony default export */ var src_store = (store);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"255c8dc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogContainer.vue?vue&type=template&id=6e1d24ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.activeModal !== null)?_c(_vm.activeModal,{tag:"component",attrs:{"parameters":_vm.parameters,"close":_vm.close}}):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogContainer.vue?vue&type=template&id=6e1d24ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"255c8dc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogConfirm.vue?vue&type=template&id=1beb0493&
var dialogConfirmvue_type_template_id_1beb0493_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-modal-dialog',{staticClass:"modal-dialog_confirm",attrs:{"title":'Confirm',"body":_vm.parameters,"buttons":{'Ok':_vm.ok, 'Cancel': _vm.cancel}}})}
var dialogConfirmvue_type_template_id_1beb0493_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogConfirm.vue?vue&type=template&id=1beb0493&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"255c8dc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/modalDialogBase.vue?vue&type=template&id=85320286&
var modalDialogBasevue_type_template_id_85320286_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog_modal"},[_c('div',{staticClass:"modal-dialog_container"},[_c('div',{staticClass:"modal-dialog_header"},[_c('span',[_vm._t("header",[_vm._v(_vm._s(_vm.title))])],2)]),_c('div',{staticClass:"modal-dialog_body"},[_vm._t("body",[_c('p',[_vm._v(_vm._s(_vm.body))])])],2),_c('div',{staticClass:"modal-dialog_footer"},[_c('hr'),_vm._t("buttons",_vm._l((_vm.buttons),function(btn,name){return _c('button',{on:{"click":btn}},[_vm._v(_vm._s(name))])}))],2)])])}
var modalDialogBasevue_type_template_id_85320286_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/modalDialogBase.vue?vue&type=template&id=85320286&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./projects/plugins/modalDialogs/src/ui/modalDialogBase.js?vue&type=script&lang=js&
/* harmony default export */ var modalDialogBasevue_type_script_lang_js_ = ({
  name: "base-modal-dialog",
  props: ["title", "body", "buttons"],
  methods: {
    ok: function ok() {
      console.log("Ok method from base modal.");
    }
  }
});
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/modalDialogBase.js?vue&type=script&lang=js&
 /* harmony default export */ var ui_modalDialogBasevue_type_script_lang_js_ = (modalDialogBasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./projects/plugins/modalDialogs/src/ui/modalDialogBase.vue?vue&type=style&index=0&lang=css&
var modalDialogBasevue_type_style_index_0_lang_css_ = __webpack_require__("92e7");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/modalDialogBase.vue






/* normalize component */

var component = normalizeComponent(
  ui_modalDialogBasevue_type_script_lang_js_,
  modalDialogBasevue_type_template_id_85320286_render,
  modalDialogBasevue_type_template_id_85320286_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modalDialogBase = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./projects/plugins/modalDialogs/src/ui/dialogConfirm.js?vue&type=script&lang=js&

var dialogConfirmvue_type_script_lang_js_component = {
  name: "modal-dialog-confirm",
  props: ["parameters", "close"],
  methods: {
    ok: function ok() {
      this.close(true);
    },
    cancel: function cancel() {
      this.close(false);
    }
  },
  components: {
    "base-modal-dialog": modalDialogBase
  }
};
/* harmony default export */ var dialogConfirmvue_type_script_lang_js_ = (dialogConfirmvue_type_script_lang_js_component);
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogConfirm.js?vue&type=script&lang=js&
 /* harmony default export */ var ui_dialogConfirmvue_type_script_lang_js_ = (dialogConfirmvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogConfirm.vue





/* normalize component */

var dialogConfirm_component = normalizeComponent(
  ui_dialogConfirmvue_type_script_lang_js_,
  dialogConfirmvue_type_template_id_1beb0493_render,
  dialogConfirmvue_type_template_id_1beb0493_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialogConfirm = (dialogConfirm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"255c8dc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogPrompt.vue?vue&type=template&id=566f97cb&
var dialogPromptvue_type_template_id_566f97cb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-modal-dialog',{staticClass:"modal-dialog_prompt",attrs:{"title":'Enter',"buttons":{'Ok':_vm.ok, 'Cancel': _vm.cancel}}},[_c('div',{attrs:{"slot":"body"},slot:"body"},[(_vm.text !== '')?_c('p',[_vm._v(_vm._s(_vm.text))]):_vm._e(),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.input),expression:"input"}],staticClass:"modal-dialog_textarea",attrs:{"placeholder":_vm.placeholder},domProps:{"value":(_vm.input)},on:{"input":function($event){if($event.target.composing){ return; }_vm.input=$event.target.value}}})])])}
var dialogPromptvue_type_template_id_566f97cb_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogPrompt.vue?vue&type=template&id=566f97cb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./projects/plugins/modalDialogs/src/ui/dialogPrompt.js?vue&type=script&lang=js&

var dialogPromptvue_type_script_lang_js_component = {
  name: "modal-dialog-prompt",
  props: ["parameters", "close"],
  data: function data() {
    return {
      input: "",
      text: "",
      placeholder: ""
    };
  },
  methods: {
    ok: function ok() {
      this.close(this.input);
    },
    cancel: function cancel() {
      this.close(null);
    }
  },
  created: function created() {
    if (typeof this.parameters !== "undefined") {
      if (typeof this.parameters.text !== "undefined") {
        this.text = this.parameters.text;
      }

      if (typeof this.parameters.placeholder !== "undefined") {
        this.placeholder = this.parameters.placeholder;
      }
    }
  },
  components: {
    "base-modal-dialog": modalDialogBase
  }
};
/* harmony default export */ var dialogPromptvue_type_script_lang_js_ = (dialogPromptvue_type_script_lang_js_component);
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogPrompt.js?vue&type=script&lang=js&
 /* harmony default export */ var ui_dialogPromptvue_type_script_lang_js_ = (dialogPromptvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogPrompt.vue





/* normalize component */

var dialogPrompt_component = normalizeComponent(
  ui_dialogPromptvue_type_script_lang_js_,
  dialogPromptvue_type_template_id_566f97cb_render,
  dialogPromptvue_type_template_id_566f97cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialogPrompt = (dialogPrompt_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"255c8dc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogAlert.vue?vue&type=template&id=690d663c&
var dialogAlertvue_type_template_id_690d663c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-modal-dialog',{staticClass:"modal-dialog_alert",attrs:{"title":'Notice',"body":_vm.parameters,"buttons":{'Ok': _vm.close}}})}
var dialogAlertvue_type_template_id_690d663c_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogAlert.vue?vue&type=template&id=690d663c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./projects/plugins/modalDialogs/src/ui/dialogAlert.js?vue&type=script&lang=js&

var dialogAlertvue_type_script_lang_js_component = {
  name: "modal-dialog-alert",
  props: ["parameters", "close"],
  components: {
    "base-modal-dialog": modalDialogBase
  }
};
/* harmony default export */ var dialogAlertvue_type_script_lang_js_ = (dialogAlertvue_type_script_lang_js_component);
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogAlert.js?vue&type=script&lang=js&
 /* harmony default export */ var ui_dialogAlertvue_type_script_lang_js_ = (dialogAlertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogAlert.vue





/* normalize component */

var dialogAlert_component = normalizeComponent(
  ui_dialogAlertvue_type_script_lang_js_,
  dialogAlertvue_type_template_id_690d663c_render,
  dialogAlertvue_type_template_id_690d663c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialogAlert = (dialogAlert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./projects/plugins/modalDialogs/src/ui/dialogContainer.js?vue&type=script&lang=js&



/* harmony default export */ var dialogContainervue_type_script_lang_js_ = ({
  name: "modal-dialog-container",
  computed: {
    activeModal: function activeModal() {
      var map = {
        confirm: "modal-dialog-confirm",
        alert: "modal-dialog-alert",
        prompt: "modal-dialog-prompt"
      };
      var active = this.$store.state[this.namespace].opened;
      var modal = active === null ? null : map[active];

      if (typeof modal === "undefined") {
        throw new Error("An invalid modal dialog id was set in open-action: " + active);
      }

      return modal;
    },
    parameters: function parameters() {
      return this.$store.state[this.namespace].parameters;
    }
  },
  data: function data() {
    return {
      namespace: "modalDialog"
    };
  },
  methods: {
    close: function close(returnVal) {
      this.$store.dispatch(this.namespace + "/close", returnVal);
    }
  },
  created: function created() {
    if (typeof this.$options.$_modalDialogs_namespace !== "undefined") {
      this.namespace = this.$options.$_modalDialogs_namespace;
    }
  },
  components: {
    "modal-dialog-confirm": dialogConfirm,
    "modal-dialog-prompt": dialogPrompt,
    "modal-dialog-alert": dialogAlert
  }
});
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogContainer.js?vue&type=script&lang=js&
 /* harmony default export */ var ui_dialogContainervue_type_script_lang_js_ = (dialogContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogContainer.vue





/* normalize component */

var dialogContainer_component = normalizeComponent(
  ui_dialogContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialogContainer = (dialogContainer_component.exports);
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/index.js



var src_component = dialogContainer;
var installer = {
  install: function install(Vue, config) {
    var _cats4Vue$configParse = cats4Vue.configParser(config, {
      namespace: {
        type: "string",
        default: "modalDialog"
      },
      vuex: {
        type: null
      }
    }),
        namespace = _cats4Vue$configParse.namespace;

    cats4Vue.componentOptionsWriter(dialogContainer, {
      $_modalDialogs_namespace: namespace
    });
    cats4Vue.registerVuexModule(config.vuex, namespace, src_store);
  }
};
/* harmony default export */ var modalDialogs_src = (installer);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport component */__webpack_require__.d(__webpack_exports__, "component", function() { return src_component; });
/* concated harmony reexport installer */__webpack_require__.d(__webpack_exports__, "installer", function() { return installer; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (modalDialogs_src);



/***/ })

/******/ });