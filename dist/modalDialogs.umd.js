(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["modalDialogs"] = factory();
	else
		root["modalDialogs"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "1809":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helper", function() { return helper; });
const helper = {
    verifyIndexAndContainer(state, indexName, containerName) {
        if(typeof state[indexName] !== "object") {
            throw new Error("Index with name "+indexName+" is not an object in state.");
        } 

        if(!(state[containerName] instanceof Array)) {
            throw new Error("Container with name "+containerName+" is not an array in state.");
        }
    }
}

/***/ }),

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
__webpack_require__.d(mutations_namespaceObject, "setPropsOnObjectFactory", function() { return setPropsOnObjectFactory; });
__webpack_require__.d(mutations_namespaceObject, "setArrayElPropsByIdFactory", function() { return setArrayElPropsByIdFactory; });
__webpack_require__.d(mutations_namespaceObject, "addArrayElementFactory", function() { return addArrayElementFactory; });
__webpack_require__.d(mutations_namespaceObject, "removeArrayElementByIdFactory", function() { return removeArrayElementByIdFactory; });
__webpack_require__.d(mutations_namespaceObject, "resetArrayFactory", function() { return resetArrayFactory; });
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

function isValidRootProperty(prop, throwInsteadOfReturn=false) {
	if(typeof prop !== "string") {
		if(throwInsteadOfReturn === true) {
			throw new Error("Tried to write a non-string property to the object root.");
		}
		return false;
	}
	
	//https://vuejs.org/v2/api/#Options-Data (left panel)
	const reserved = [
		"data", 
		"props", 
		"propsData", 
		"computed", 
		"methods", 
		"watch", 
		"el", 
		"template", 
		"render", 
		"renderError", 
		"beforeCreate", 
		"created", 
		"beforeMount", 
		"mounted", 
		"beforeUpdate", 
		"updated", 
		"activated", 
		"deactivated", 
		"beforeDestroy", 
		"destroyed", 
		"errorCaptured", 
		"directives", 
		"filters", 
		"components", 
		"parent", 
		"mixins", 
		"extends", 
		"provide", 
		"inject", 
		"name", 
		"delimiters", 
		"functional", 
		"model", 
		"inheritAttrs", 
		"comments"	
	];
	const check = (reserved.indexOf(prop) === -1);
	
	if(check === false && throwInsteadOfReturn === true) {
		throw new Error("Adding property to object root failed. '"+prop+"' is a reserved Vue property.");
	}
	
	return check;
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

function ensureVersion(Vue, minVersion, options={}) {
	if(!("version" in Vue)) {
		throw new Error("The version property is missing on the Vue instance.");
	}
	
	if(Vue.version.replace(/[0-9\.]/g, "").length > 0) {
		throw new Error("Vue version is not in a dot-separated format. Got: "+Vue.version);
	}
		
	if((""+minVersion).replace(/[0-9\.]/g, "").length > 0) {
		throw new Error("The required version is not in a dot-separated format. Got: "+Vue.version);
	}
	
	const vueVersion = Vue.version.split(".").map((subver)=>parseInt(subver));
	const reqVersion = minVersion.split(".").map((subver)=>parseInt(subver));
	const throwInsteadOfReturn = (options.throwInsteadOfReturn !== undefined) ? options.throwInsteadOfReturn : false;
	let result = true;
	
	//Below loop can return before recognising invalid number.
	reqVersion.forEach((subver)=>{
		if(typeof subver !== "number" || isNaN(subver)) {
			throw new Error("The required version is not in the format x, x.y or x.y.z. Got: "+minVersion);
		}
	});
	
	if(reqVersion.length > 3 || reqVersion.length < 1) {
		throw new Error("The required version is not in the format x, x.y or x.y.z. Got: "+minVersion);
	}
	
	for(let i=0, ii=reqVersion.length; i<ii; i++) {
		const actual = vueVersion[i];
		const expected = reqVersion[i];
		
		if(actual === expected) {
			continue;
		}
		
		result = (actual < expected) ? false : true;
		break;
	}
	
	if(result === false && throwInsteadOfReturn === true) {
		throw new Error("You do not have the required Vue version of "+minVersion+". You have: "+Vue.version);
	}
	
	return result;
}

const cats4Vue = {
	configParser, 
	isValidPrivateProperty, 
	isValidRootProperty,
	componentOptionsWriter, 
	renameComponent, 
	registerVuexModule,
	ensureVersion
};

/* harmony default export */ var src = (cats4Vue);
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/getters.js
const {helper} = __webpack_require__("1809");

function getArrayElWIdxById(container, index, noResult) {
	return (id) => {
		const idx = index[id];
		
		if(typeof idx !== "number") {
			return noResult;
		}

		return container[idx];
	}
}

/// Factory function that can be adapted to your Vuex state and that returns a getter function. The getter returns the element with the id provided from the state's container.
/// Assumes that you have on your state an array container and an index object holding id/array index pairs.
/// @function getArrayElWIdxByIdFactory
/// @param {object} settings - Configuration.
/// @param {string} [settings.container="container"] - The name of the container.
/// @param {string} [settings.index="index"] - The name of the index.
/// @param {var} [settings.noResult=null] - Return this value if id is not found.
/// @returns {var} - Returns null or a user provided value.
/// @example <caption>Using the factory function</caption>
/// { state: {nameOfContainer: [{id: 2, name: "element", data: 123}], nameOfIndex: {2:0}},
///    getters: {
///    getElementById: getArrayElWIdxByIdFactory({container: "nameOfContainer", index: "nameOfIndex"}),
/// }}
/// @example <caption>Using the getter</caption>
/// store.getters.getElementById(2);
const getArrayElWIdxByIdFactory = function getArrayElWIdxByIdFactory(settings={}) {
	const container = settings.container || "container";
	const index = settings.index || "index";
	const noResult = ("noResult" in settings) ? settings.noResult : null;
	
	return function generatedGetArrayElWIdxById(state) {
		helper.verifyIndexAndContainer(state, index, container);
		return getArrayElWIdxById(state[container], state[index], noResult);
	}
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/mutations.js
const {helper: mutations_helper} = __webpack_require__("1809");

/// The mutation sets a state property.
/// @function setPropVal
/// @throws Throws for undefined properties - after all valid properties have been set.
/// @example <caption>Using the factory function</caption>
/// { state: {propA: 1, propB: 2},
///    mutations: {
///    set: setPropVal
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("set", {prop: "propA", val: 3});
const setPropVal = function setPropVal(state, data) {	
	if(typeof data === "undefined" || !("prop" in data) || !("val" in data)) {
		throw new Error("Missing property on data parameter: provide 'prop' and 'val'.");
	}
	
	if(!(data.prop in state)) {
		throw new Error("Tried to set non-existing property: "+data.prop);
	}
	
	state[data.prop] = data.val;
}

/// Private function used by {@link setProps}, {@link setPropsOnObjectFactory}, {@link setArrayElPropsByIdFactory} to handle object (nested) and array property values.
/// @function setPropsHandleObject
/// @param {object} state - Vuex state object of mutation.
/// @param {object} data - Your data passed to the mutation.
/// @param {string} [data.arrOp=undefined] - The operation that should happen when a property value is an array. Available:<br>
/// - push: same as array.push<br>
/// - pop: same as array.pop<br>
/// - shift: same as array.shift<br>
/// - unshift: same as array.unshift<br>
/// - insert: value needs to be an object {value, element|index} where value is the actual value to insert and index or element the location to insert to<br>
/// - delete:  deletes value of array property<br>
/// @param {string} [data.objOp=undefined] - The operation that should happen when a property value is an object. Available: "recur" which sets object recursively.
/// @param {string} propName - Interal helper
/// @example
/// { state: {propA: 1, propB: {subPropC: 2, subPropD: 3}, propE: [1,2,3]},
///   mutations: { set: setProps
/// }
/// //...
/// store.commit("set", {propE: ["a", "b", "c"]} // replaces array of propE
/// store.commit("set", {propE: "four", arrOp: "push"}) // appends "four" to propE
/// store.commit("set", {propB: {subPropD: 4}, objOp: "recur"}) // sets subPropD to 4
/// store.commit("set", {propE: {value: 1.5, element: 2}, arrOp: "insert"}) // inserts 1.5 before 2 in propE array
function setPropsHandleObject(state, data, propName) {
	if(state[propName] instanceof Array && "arrOp" in data) {
		switch(data.arrOp) {
			case "push": 
				state[propName].push(data[propName]);
				break;
				
			case "unshift": 
				state[propName].unshift(data[propName]);			
				break;
				
			case "pop": 
				state[propName].pop();
				break;
				
			case "shift": 
				state[propName].shift();
				break;
				
			case "insert":
				const insertDetails = data[propName];
				const array = state[propName];
				
				if(typeof insertDetails !== "object") {
					throw new Error("Failed to insert: the property value must be an object with properties value and index or element.");
				}
				
				const {value, index, element} = insertDetails;
				
				if(typeof index !== "number" && element === undefined) {
					throw new Error("Failed to insert: either provide on the property value an index property (number) or an element to insert at.");
				}
				
				const i = (typeof index === "number") ? index : array.indexOf(element);
				if(i>-1) {
					array.splice(i, 0, value);
				}
				else {
					throw new Error("Failed to insert: the element property to insert at does not exist in the array.");
				}
				break;
				
			case "delete":
				const i2 = state[propName].indexOf(data[propName]);
				if(i2 > -1) {
					state[propName].splice(i2, 1);
				}
				else {
					throw new Error("Failed to delete: the element to delete does not exist in the array.");
				}
				break;

			
			default:
				throw new Error("Unknown array operation provided: "+data.arrOp);
			break;
		}
	}
	
	else if(data.objOp === "recur") {
		setProps(state[propName], data[propName]);
	}
	
	else {
		state[propName] = data[propName];
	}
}

/// The mutation sets state properties by key/val pairs on the data parameter. See {@link setPropsHandleObject} how object/array values can be handled.
/// @function setProps
/// @throws Throws for undefined properties - after all valid properties have been set.
/// @example <caption>Using the factory function</caption>
/// { state: {propA: 1, propB: 2},
///    mutations: {
///    set: setProps
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("set", {propA: 2, propB: 3});
const setProps = function setProps(state, data) {
	const err = [];
	for(const prop in data) {
		if(prop === "arrOp" || prop === "objOp") {continue};
		
		if(!(prop in state)) {
			err.push(prop);
			continue;
		}
		
		if(typeof state[prop] !== "object") {
			state[prop] = data[prop];
		}
		else {
			setPropsHandleObject(state, data, prop);
		}
	}

	if(err.length > 0) {
		throw new Error("Tried to set at least one non-existing property: "+err.join(","));
	}	
}

/// Factory function that can be adapted to your Vuex state and that returns a mutation function. The mutation sets the properties of an object on the state. See {@link setPropsHandleObject} how object/array values can be handled.
/// @function setPropsOnObjectFactory
/// @param {object} settings - Configuration.
/// @param {string} settings.object - The name of the object on the state.
/// @returns {function} - Returns a Vuex mutation function.
/// @example <caption>Using the factory function</caption>
/// { state: {someObject: {propA: 2, propB: 5}},
///    mutations: {
///    set: setPropsOnObjectFactory({object: "someObject"}),
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("set", {propA: 123, propB: 456});
const setPropsOnObjectFactory = function setPropsOnObjectFactory(settings={}) {
	const object = settings.object;
	
	if(object === undefined) {
		throw new Error("Missing mandatory settings parameter 'setting.object'");
	}
	
	return function generatedSetPropsOnObject(state, data) {
		if(!(object in state)) {
			throw new Error("The object with the name on the state does not exist: "+object);
		}
		
		setProps(state[object], data);
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
	delete props.id;
	
	setProps(el, props);
}

/// Factory function that can be adapted to your Vuex state and that returns a mutation function. The mutation sets the properties of an element within an array to the given values. See {@link setPropsHandleObject} how object/array values can be handled.
/// Assumes that you have on your state an array container and an index object holding id/array index pairs.
/// Assumes that the update data provided to the mutation have an id property.
/// @function setArrayElPropsByIdFactory
/// @param {object} settings - Configuration.
/// @param {string} [settings.container="container"] - The name of the container.
/// @param {string} [settings.index="index"] - The name of the index.
/// @returns {function} - Returns a Vuex mutation function.
/// @example <caption>Using the factory function</caption>
/// { state: {nameOfContainer: [{id: 2, name: "element", data: 123}], nameOfIndex: {2:0}},
///    mutations: {
///    set: setArrayElPropsByIdFactory({container: "nameOfContainer", index: "nameOfIndex"}),
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("set", {id: 2, name: "newName", data: 456});
const setArrayElPropsByIdFactory = function setArrayElPropsByIdFactory(settings={}) {
	const container = settings.container || "container";
	const index = settings.index || "index";
	
	return function generatedSetArrayElPropsById(state, data) {			
		mutations_helper.verifyIndexAndContainer(state, index, container);	
		setArrayElPropsById(state[container], state[index], data);
	}	
}

/// Factory function that can be adapted to your Vuex state and that returns a mutation function. The mutation adds an element to an array. 
/// Assumes that you have on your state an array container and an index object holding id/array index pairs.
/// Assumes that the element provided to the mutation has an id property.
/// @function addArrayElementFactory
/// @param {object} settings - Configuration.
/// @param {string} [settings.container="container"] - The name of the container.
/// @param {string} [settings.index="index"] - The name of the index.
/// @returns {function} - Returns a Vuex mutation function.
/// @example <caption>Using the factory function</caption>
/// { state: {nameOfContainer: [{id: 2, name: "element"}], nameOfIndex: {2:0}},
///    mutations: {
///    add: addArrayElementFactory({container: "nameOfContainer", index: "nameOfIndex"}),
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("add", {id: 3, name: "newElement"});
const addArrayElementFactory = function addArrayElementFactory(settings={}) {
	const container = settings.container || "container";
    const index = settings.index || "index";

    return function generatedAddArrayElement(state, data) {
        mutations_helper.verifyIndexAndContainer(state, index, container);	
		
		if(!("id" in data)) {
			throw new Error("Failed to add element because it has no id: "+JSON.stringify(data));
		}

		const newIdx = state[container].push(data) - 1;
        state[index][data.id] = newIdx;
    }
}

/// Factory function that can be adapted to your Vuex state and that returns a mutation function. The mutation removes an element from an array. 
/// Assumes that you have on your state an array container and an index object holding id/array index pairs.
/// @function removeArrayElementByIdFactory
/// @param {object} settings - Configuration.
/// @param {string} [settings.container="container"] - The name of the container.
/// @param {string} [settings.index="index"] - The name of the index.
/// @returns {function} - Returns a Vuex mutation function.
/// @example <caption>Using the factory function</caption>
/// { state: {nameOfContainer: [{id: 2, name: "element"}], nameOfIndex: {2:0}},
///    mutations: {
///    delete: removeArrayElementByIdFactory({container: "nameOfContainer", index: "nameOfIndex"}),
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("delete", {id: 2});
const removeArrayElementByIdFactory = function removeArrayElementByIdFactory(settings={}) {
	const container = settings.container || "container";
    const index = settings.index || "index";
    
    return function generatedRemoveArrayElementById(state, data) {
        mutations_helper.verifyIndexAndContainer(state, index, container);
		
		const id = data.id;
		const theContainer = state[container];
		const i = state[index][id];

        if(theContainer[i] === undefined) {
            throw new Error("Delete failed. Tried to remove id from undefined index: "+i);
        }

		theContainer.splice(i, 1);
		delete state[index][id];

		for(let r=i, rr=theContainer.length; r<rr; r++) {
			state[index][theContainer[r].id] = r;
		}
    }
}

function resetArrayFast(state, containerName, elements) {
	state[containerName] = elements;
}

function resetArrayPreserving(container, elements) {
	container.splice(0, container.length);
	container.push(...elements);
}

/// Factory function that can be adapted to your Vuex state and that returns a mutation function. The mutation empties or replaces the container array. 
/// Assumes that you have on your state an array container and an index object holding id/array index pairs.
/// Assumes that you do not use the index as reactive property.
/// @function resetArrayFactory
/// @param {object} settings - Configuration.
/// @param {string} [settings.container="container"] - The name of the container.
/// @param {string} [settings.index="index"] - The name of the index.
/// @param {bool} [settings.preserveReference=true] - Should the array be overridden (faster) or spliced (slower) to preserve references? Beware: overriding breaks reactivity.
/// @returns {function} - Returns a Vuex mutation function.
/// @example <caption>Using the factory function</caption>
/// { state: {nameOfContainer: [{id: 2, name: "element"}], nameOfIndex: {2:0}},
///    mutations: {
///    reset: resetArrayFactory({container: "nameOfContainer", index: "nameOfIndex"}),
/// }}
/// @example <caption>Using the mutation</caption>
/// store.commit("reset", {elements: [{id: 3, name: "replacement"}]); //replace
/// store.commit("reset"); //empty
const resetArrayFactory = function resetArrayFactory(settings={}) {
	const container = settings.container || "container";
	const index = settings.index || "index";
	const preserveReference = ("preserveReference" in settings) ? settings.preserveReference : true;
    
    return function generatedResetArray(state, data=[]) {
		mutations_helper.verifyIndexAndContainer(state, index, container);

		const theContainer = state[container];
		const elements = data.elements || [];

		(preserveReference) ? resetArrayPreserving(theContainer, elements) : resetArrayFast(state, container, elements);

		state[index] = {};
		for(let r=0, rr=theContainer.length; r<rr; r++) {
			state[index][theContainer[r].id] = r;
		}		
	}
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/actions.js
/// The factory returns simple 'passthrough' actions that only call mutations.
/// @function passThruActionsFactory
/// @param {(string|string[]|object)} names - A single name of an action/commit, an array of action/commit names or an object of action name/commit name pairs.
/// @returns {(function|object)} - Returns an action function (if param string) or an object of functions (if param object/array).
/// @example <caption>Using the factory function</caption>
/// { state: {propA: 1, propB: 2},
///    actions: {
///    anAction: passThruActionsFactory("doSth"),
///    ...passThruActionsFactory(["doA", "doB"]),
///    ...passThruActionsFactory({actionA: "commitB"})
/// }}
/// @example <caption>Equivalent - parameter string</caption>
/// passThruActionsFactory("doSth")
/// doSth(store, data, options) {store.commit("doSth", data, options);}
/// @example <caption>Equivalent - parameter array</caption>
/// passThruActionsFactory(["doA", "doB"])
/// doA(store, data, options) {store.commit("doA", data, options);},
/// doB(store, data, options) {store.commit("doB", data, options);}
/// @example <caption>Equivalent - parameter object</caption>
/// passThruActionsFactory({actionA: "commitA"})
/// actionA(store, data, options) {store.commit("commitA", data, options);}
const passThruActionsFactory = function passThruActionsFactory(names) {
	
	if(typeof names === "string") {
		return function generatedPassThruAction(store, data, options) {
			store.commit(names, data, options);
		}
	}
	
	if(names instanceof Array) {
		const obj = {};
		names.forEach((name)=>{			
			if(typeof name !== "string") {
				throw new Error("Expected element of array to be of type string. Got: "+typeof name);
			}
			obj[name] = function generatedPassThruAction(store, data, options) {
				store.commit(name, data, options);
			}			
		});
		return obj;
	}
	
	if(typeof names === "object") {
		for(const name in names) {
			const methodName = name;
			const commandName = names[name];			
			names[methodName] = function generatedPassThruAction(store, data, options) {
				store.commit(commandName, data, options);
			}
		}	
		return names;
	}
	
	throw new Error("Expected parameter to be of type string, object or array. Got: "+typeof names);
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/store.crudContainerFactory.js




let id = 1;

/// The factory returns a store module preset. The preset contains a container array intended to hold elements as well as associated CRUD functions.
/// Notice that keeping the default names of store components for non-namespaced containers will result in duplicate commit/dispatch calls. Make sure to provide unique names to non-namespaced modules.
/// @function crudContainerFactory
/// @param {object} settings - Configuration.
/// @param {string} [settings.container="container"] - The name of the container.
/// @param {string} [settings.index="index"] - The name of the index.
/// @param {string} [settings.adderName="add"] - The name of the action/mutation that adds an element.
/// @param {string} [settings.getterName="getById"] - The name of the action/mutation that gets an element.
/// @param {string} [settings.setterName="set"] - The name of the action/mutation that sets a property of an element.
/// @param {string} [settings.deleterName="delete"] - The name of the action/mutation that deletes an element.
/// @param {string} [settings.resetterName="reset"] - The name of the action/mutation that resets the element container.
/// @param {bool} [settings.namespaced=true] - Vuex "namespaced" property.
/// @param {object} settings.extend - A Vuex store object (state, getters, mutations and/or actions) that extends the CRUD container. 
/// @returns {object} - A Vuex store object. 
function crudContainerFactory(settings={}) {
    console.warn("Experimental. Do not use in production.");

    const namespaced = ("namespaced" in settings) ? settings.namespaced : true;

	const container = settings.container || "container";
    const index = settings.index || "index";
    const adderName = settings.adderName || "add";    
    const getterName = settings.getterName || "getById";    
    const setterName = settings.setterName || "set";  
    const deleterName = settings.deleterName || "delete"; 
    const resetterName = settings.resetterName || "reset";

    const incrementIdName = "incrementId"+id;
    const nextIdName = "nextId"+id;
    id++;
    
    const extend = settings.extend || {};

    const actionsMap = {};
    actionsMap[setterName] = setterName;
    actionsMap[deleterName] = deleterName;

    const store = {namespaced, state: {}, getters: {}, mutations: {}, actions: {}};

    store.state[container] = [];
    store.state[index] = {};
    store.state[nextIdName] = 1;

    store.getters[getterName] = getArrayElWIdxByIdFactory({container, index});

    store.mutations[adderName] = addArrayElementFactory({container, index});
    store.mutations[setterName] = setArrayElPropsByIdFactory({container, index});
    store.mutations[deleterName] = removeArrayElementByIdFactory({container, index});
    store.mutations[resetterName] = resetArrayFactory({container, index});
    store.mutations[incrementIdName] = function incrementId(state) {state[nextIdName]++;};

    store.actions = {...passThruActionsFactory(actionsMap)};
    store.actions[adderName] = function generatedAdderAction(store, element) {
        element.id = store.state[nextIdName];

        store.commit(adderName, element);
        store.commit(incrementIdName);

        //return store.getters.getElementById(element.id);
        return element;
    } 

    if("state" in extend) {Object.assign(store.state, extend.state);}
    if("getters" in extend) {Object.assign(store.getters, extend.getters);}
    if("mutations" in extend) {Object.assign(store.mutations, extend.mutations);}
    if("actions" in extend) {Object.assign(store.actions, extend.actions);}

    return store;
}
// CONCATENATED MODULE: ./projects/plugins/modalDialogs/node_modules/vuex-heman/src/index.js
/** 
* @file
* @name vuex-heman
* @author Joe Kerr
* @description A collection of Vuex helper methods. You can import individual functions, import sets of functions by category (getters, mutations, actions) or the entire package (vuexHeman). There are two types of helper functions: factories and normal function. Factories take in some setup data and return a function or a set of functions. Normal function can just be assigned. 
* @example
import {crudContainer} from "vuex-heman"; 
import {getters, mutations, actions} from "vuex-heman"; 
import {vuexHeman} from "vuex-heman"; 
*/








const getters = getters_namespaceObject;
const mutations = mutations_namespaceObject;
const actions = actions_namespaceObject;

const crudContainer = crudContainerFactory;

const {getArrayElWIdxByIdFactory: src_getArrayElWIdxByIdFactory} = getters_namespaceObject;
const {setPropVal: src_setPropVal, setProps: src_setProps, setArrayElPropsByIdFactory: src_setArrayElPropsByIdFactory, setPropsOnObjectFactory: src_setPropsOnObjectFactory, addArrayElementFactory: src_addArrayElementFactory, removeArrayElementByIdFactory: src_removeArrayElementByIdFactory, resetArrayFactory: src_resetArrayFactory} = mutations_namespaceObject;
const {passThruActionsFactory: src_passThruActionsFactory} = actions;

const vuexHeman = {
	getters, 
	mutations,
	actions,

	crudContainer
}

/* harmony default export */ var vuex_heman_src = (vuexHeman);





// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/store/index.js

var dialogResolve;
var store_store = {
  namespaced: true,
  state: {
    opened: null,
    parameters: null,
    dialogComponentMap: {
      confirm: "modal-dialog-confirm",
      alert: "modal-dialog-alert",
      prompt: "modal-dialog-prompt"
    }
  },
  mutations: {
    set: mutations.setProps,
    addDialogs: function addDialogs(state, dialogs) {
      for (var i = 0, ii = dialogs.length; i < ii; i++) {
        var dialog = dialogs[i];

        if (dialog.name in state.dialogComponentMap) {
          throw new Error("Failed to install dialog to store: duplicate name detected: " + dialog.name);
        }

        state.dialogComponentMap[dialog.name] = dialog.component;
      }
    }
  },
  actions: {
    open: function open(store, data) {
      if (store.state.opened !== null) {
        throw new Error("Tried to open a dialog but another dialog is still opened.");
      }

      store.commit("set", {
        parameters: data.parameters || null,
        opened: data.dialog
      });
      return new Promise(function (resolve) {
        dialogResolve = resolve;
      });
    },
    close: function close(store, data) {
      store.commit("set", {
        parameters: null,
        opened: null
      });
      dialogResolve(data);
      dialogResolve = null;
    },
    installUserDialogs: function installUserDialogs(store, dialogs) {
      store.commit("addDialogs", dialogs);
    }
  }
};
/* harmony default export */ var src_store = (store_store);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fe79d39a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogContainer.vue?vue&type=template&id=6e1d24ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.activeModal !== null)?_c(_vm.activeModal,{tag:"component",attrs:{"parameters":_vm.parameters,"close":_vm.close}}):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogContainer.vue?vue&type=template&id=6e1d24ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fe79d39a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogConfirm.vue?vue&type=template&id=1beb0493&
var dialogConfirmvue_type_template_id_1beb0493_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-modal-dialog',{staticClass:"modal-dialog_confirm",attrs:{"title":'Confirm',"body":_vm.parameters,"buttons":{'Ok':_vm.ok, 'Cancel': _vm.cancel}}})}
var dialogConfirmvue_type_template_id_1beb0493_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/dialogConfirm.vue?vue&type=template&id=1beb0493&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fe79d39a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/modalDialogBase.vue?vue&type=template&id=2d01ed1e&
var modalDialogBasevue_type_template_id_2d01ed1e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog_modal"},[_c('div',{staticClass:"modal-dialog_container"},[_c('div',{staticClass:"modal-dialog_header"},[_c('span',[_vm._t("header",[_vm._v(_vm._s(_vm.title))])],2)]),_c('div',{staticClass:"modal-dialog_body"},[_vm._t("body",[_c('p',[_vm._v(_vm._s(_vm.body))])])],2),_c('div',{staticClass:"modal-dialog_footer"},[_vm._t("footer",_vm._l((_vm.buttons),function(btn,name){return _c('button',{staticClass:"modal-dialog_buttons",attrs:{"id":'modal-dialog_buttons--'+name},on:{"click":btn}},[_vm._v(_vm._s(name))])}))],2)])])}
var modalDialogBasevue_type_template_id_2d01ed1e_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/modalDialogs/src/ui/modalDialogBase.vue?vue&type=template&id=2d01ed1e&

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
  modalDialogBasevue_type_template_id_2d01ed1e_render,
  modalDialogBasevue_type_template_id_2d01ed1e_staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fe79d39a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogPrompt.vue?vue&type=template&id=566f97cb&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fe79d39a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/modalDialogs/src/ui/dialogAlert.vue?vue&type=template&id=690d663c&
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
      var state = this.$store.state[this.namespace];
      var map = state.dialogComponentMap;
      var active = state.opened;
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
  install: function install(userDialogs, baseDialog) {
    for (var i = 0, ii = userDialogs.length; i < ii; i++) {
      var dialog = userDialogs[i];

      if (dialog.name in this.components) {
        throw new Error("Failed to install user dialogs: duplicate component name detected: " + dialog.name);
      }

      dialog.components = dialog.components || {};
      dialog.components[baseDialog.name] = baseDialog;
      this.components[dialog.name] = dialog;
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





function parseUserComponents(comps) {
  var result = {
    store: [],
    ui: []
  };
  var errorPrefix = "Failed to install user dialogs: ";

  for (var i = 0, ii = comps.length; i < ii; i++) {
    var comp = comps[i];

    if (!("name" in comp && "dialog" in comp)) {
      throw new Error(errorPrefix + "dialogs must have 'name' (name of dialog used in store calls) and 'dialog' (dialog component) properties.");
    }

    if (!("name" in comp.dialog)) {
      throw new Error(errorPrefix + "missing name property on user dialog. Make sure you provide a dialog compnent.");
    }

    result.store.push({
      name: comp.name,
      component: comp.dialog.name
    });
    result.ui.push(comp.dialog);
  }

  return result;
}

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
      },
      customDialogs: {
        type: "object",
        default: []
      }
    }),
        namespace = _cats4Vue$configParse.namespace,
        customDialogs = _cats4Vue$configParse.customDialogs,
        vuex = _cats4Vue$configParse.vuex;

    cats4Vue.componentOptionsWriter(dialogContainer, {
      $_modalDialogs_namespace: namespace
    });
    cats4Vue.registerVuexModule(vuex, namespace, src_store);

    if (!(customDialogs instanceof Array)) {
      throw new Error("Failed to install user dialogs: dialogs parameter not an Array");
    }

    if (customDialogs.length > 0) {
      var installTo = parseUserComponents(customDialogs);
      dialogContainer.install(installTo.ui, modalDialogBase);
      vuex.dispatch(namespace + "/installUserDialogs", installTo.store);
    }

    delete dialogContainer.install;
  }
};
/* harmony default export */ var modalDialogs_src = (installer);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport component */__webpack_require__.d(__webpack_exports__, "component", function() { return src_component; });
/* concated harmony reexport installer */__webpack_require__.d(__webpack_exports__, "installer", function() { return installer; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (modalDialogs_src);



/***/ })

/******/ });
});