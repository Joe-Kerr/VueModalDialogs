const assert = require("assert");
const {mount, createLocalVue} = require("@vue/test-utils");
const Vuex = require("vuex").default;
const store = require("../../src/store/index.js").default;
const {installer, component} = require("../../src/index.js");

const storeBackup = JSON.parse(JSON.stringify(store.state));

suite("Integration tests");

after(()=>{
	store.state = storeBackup;
});

test("Open and resolve a custom dialog", async ()=>{
	const localVue = createLocalVue();
	localVue.use(Vuex);
	
	const backup = component.install;
	const store = new Vuex.Store({});
	const site = require("../fix/site.vue").default;
	const dialog = require("../fix/custom.vue").default;
	
	installer.install(localVue, {vuex: store, customDialogs: [{name: "custom", dialog}]});
	const wrapper = mount(site, {store, localVue});
	
	wrapper.find("button").trigger("click");
	assert.equal(wrapper.find("#dialogOpenContent").text(), "test123");
	
	wrapper.find("button").trigger("click");	
	await new Promise((r)=>{setTimeout(()=>{r()},1);});	
	assert.equal(wrapper.find("#dialogCloseResponse").text(), "test456");
	
	delete component.components["custom-dialog"];
	delete component.$_modalDialogs_namespace;
	component.install = backup;
});


test("Open a default dialog", ()=>{
	const localVue = createLocalVue();
	localVue.use(Vuex);
	
	const backup = component.install;
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
	component.install = backup;
});


test("actions.close resolves promise returned by actions.open with return value", async ()=>{
	const state = {opened: null, parameters: null};
	const commit = (name, data) => {store.mutations[name](state, data);};
	
	const result = store.actions.open({commit, state}, {dialog: "test"});
	
	store.actions.close({commit}, "returnVal");
	
	assert.equal(await result, "returnVal");
});