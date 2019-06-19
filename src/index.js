import {cats4Vue} from "cats4vue";

import store from "./store/index.js";
import ui from "./ui/dialogContainer.vue";

export const component = ui;

export const installer = {install: function(Vue, config) {
	const {namespace} = cats4Vue.configParser(config, {namespace: {type: "string", default: "modalDialog"}, vuex: {type: null}});
	cats4Vue.componentOptionsWriter(ui, {$_modalDialogs_namespace: namespace});
	
	cats4Vue.registerVuexModule(config.vuex, namespace, store);
}};

export default installer;