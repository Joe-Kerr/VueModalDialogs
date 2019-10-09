import {mutations} from "vuex-heman";

let dialogResolve;

const store = {
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
		set: mutations.setPropVal
	},	
	
	actions: {
		set(store, data) {
			store.commit("set", data);
		},
		
		open(store, data) {
			if(store.state.opened !== null) {
				throw new Error("Tried to open a dialog but another dialog is still opened.");
			}
			
			store.commit("set", {prop: "parameters", val: data.parameters || null});
			store.commit("set", {prop: "opened", val: data.dialog});
			return new Promise((resolve) => {
				dialogResolve = resolve;
			})
		},
		
		close(store, data) {
			store.commit("set", {prop: "parameters", val: null});
			store.commit("set", {prop: "opened", val: null});
			dialogResolve(data);
			dialogResolve = null;
		},
		
		installUserDialogs(store, dialogs) {
			for(let i=0, ii=dialogs.length; i<ii; i++) {
				const dialog = dialogs[i];
				
				if( !("name" in dialog && "component" in dialog) ) {
					throw new Error("Failed to install dialog to store: dialogs must have 'name' (name of dialog) and 'component' (name of component) property.");
				}
				
				if(dialog.name in store.state.dialogComponentMap) {
					throw new Error("Failed to install dialog to store: duplicate name detected: "+dialog.name);
				}
				
				const data = {};
				data[dialog.name] = dialog.component;
				
				store.commit("set", {dialogComponentMap: data});
			}
		}
	}
};

export default store;