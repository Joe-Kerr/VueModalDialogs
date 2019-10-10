import {cats4Vue} from "cats4vue";

import store from "./store/index.js";
import ui from "./ui/dialogContainer.vue";
import baseDialog from "./ui/modalDialogBase.vue";

function parseUserComponents(comps) {
	const result = {store: [], ui: []};	
	const errorPrefix = "Failed to install user dialogs: ";	
	
	for(let i=0, ii=comps.length; i<ii; i++) {
		const comp = comps[i];
		
		if(!("name" in comp && "dialog" in comp)) {
			throw new Error(errorPrefix+"dialogs must have 'name' (name of dialog used in store calls) and 'dialog' (dialog component) properties.");
		}
		
		if(!("name" in comp.dialog)) {
			throw new Error(errorPrefix+"missing name property on user dialog. Make sure you provide a dialog compnent.");
		}
		
		result.store.push({name: comp.name, component: comp.dialog.name});
		result.ui.push(comp.dialog);
	}
	return result;
}

export const component = ui;

export const installer = {install: function(Vue, config) {
	const {namespace, customDialogs, vuex} = cats4Vue.configParser(config, {
		namespace: {type: "string", default: "modalDialog"}, 
		vuex: {type: null},
		customDialogs: {type: "object", default: []}
	});
	
	cats4Vue.componentOptionsWriter(ui, {$_modalDialogs_namespace: namespace});	
	cats4Vue.registerVuexModule(vuex, namespace, store);

	if(!(customDialogs instanceof Array)) {
		throw new Error("Failed to install user dialogs: dialogs parameter not an Array");
	}	
	
	if(customDialogs.length > 0) {
		const installTo = parseUserComponents(customDialogs);
		ui.install(installTo.ui, baseDialog);
		vuex.dispatch(namespace+"/installUserDialogs", installTo.store);
	}
	
	delete ui.install;
}};

export default installer;