import {mutations} from "vuex-heman";

let dialogResolve;

const store = {
	namespaced: true,
	
	state: {
		opened: null,
		parameters: null
	},
	
	mutations: {			
		set: mutations.setProps
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
		}
	}
};

export default store;