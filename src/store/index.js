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
		set: mutations.setProps,
		
		addDialogs(state, dialogs) {
			for(let i=0, ii=dialogs.length; i<ii; i++) {
				const dialog = dialogs[i];
				
				if(dialog.name in state.dialogComponentMap) {
					throw new Error("Failed to install dialog to store: duplicate name detected: "+dialog.name);
				}
				
				state.dialogComponentMap[dialog.name] = dialog.component;
			}			
		}
	},	
	
	actions: {
		open(store, data) {
			if(store.state.opened !== null) {
				throw new Error("Tried to open a dialog but another dialog is still opened.");
			}
			store.commit("set", {parameters: data.parameters || null, opened: data.dialog});
			return new Promise((resolve) => {
				dialogResolve = resolve;
			})
		},
		
		close(store, data) {
			store.commit("set", {parameters: null, opened: null});
			dialogResolve(data);
			dialogResolve = null;
		},
		
		installUserDialogs(store, dialogs) {
			store.commit("addDialogs", dialogs);
		}
	}
};

export default store;