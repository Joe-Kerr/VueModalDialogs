const assert = require("assert");
const {mount, createLocalVue} = require("@vue/test-utils");

const store = require("../../src/store/index.js").default;
const {installer, component} = require("../../src/index.js");

const localVue = createLocalVue();
const Vuex = require("vuex").default;

localVue.use(Vuex);

suite("Integration tests");

test("Install -> 'open dialog' chain working", async ()=>{
	const store = new Vuex.Store({});
	installer.install(localVue, {vuex: store});
	
	const wrapper = mount({
		template: `
			<section>
				<modal-dialog-container />
			</section>			
		`,
		components: {"modal-dialog-container": component}
	}, {store, localVue});
	
	assert.ok(!wrapper.contains(".modal-dialog_container"));
	
	store.dispatch("modalDialog/open", {dialog: "alert", parameters: "check"});	
	assert.ok(wrapper.contains(".modal-dialog_container"));
	
	wrapper.find("button").trigger("click");
	assert.ok(!wrapper.contains(".modal-dialog_container"));
	
	delete component.$_modalDialogs_namespace;
});


test("actions.close resolves promise returned by actions.open with return value", async ()=>{
	const state = {opened: null, parameters: null};
	const commit = (name, data) => {store.mutations[name](state, data);};
	
	const result = store.actions.open({commit, state}, {dialog: "test"});
	
	store.actions.close({commit}, "returnVal");
	
	assert.equal(await result, "returnVal");
});