import {mutations} from "vuex-heman";

let dialogResolve;

const store = {
	namespaced: true,
	
	state: {
		opened: null,
		parameters: null
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
		}
	}
};

export default store;