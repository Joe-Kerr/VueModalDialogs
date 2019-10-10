const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../src/index.js").default;
const dialogContainer = require("../../src/ui/dialogContainer.vue").default;
const {cats4Vue} = require("cats4vue");

suite("modalDialogs/index.js");

const vuex = {dispatch: new sinon.fake(), registerModule: ()=>{}};
const Vue = {directive: ()=>{}, component: ()=>{}};

let installBackup = dialogContainer.install;

before(()=>{
	sinon.spy(cats4Vue, "configParser");
	sinon.spy(cats4Vue, "componentOptionsWriter");
	sinon.spy(cats4Vue, "registerVuexModule");
});

after(()=>{
	cats4Vue.configParser.restore();
	cats4Vue.componentOptionsWriter.restore();
	cats4Vue.registerVuexModule.restore();
});

afterEach(()=>{
	delete dialogContainer.$_modalDialogs_namespace;
	dialogContainer.install = installBackup;	
	vuex.dispatch.resetHistory();
});

test("index.js provides expected exports", ()=>{
	assert.equal(typeof require("../../src/index.js").default, "object");
	assert.equal(typeof require("../../src/index.js").installer, "object");
	assert.equal(typeof require("../../src/index.js").component, "object");
});

test("installer calls all utility functions", ()=>{
	sample.install(Vue, {vuex});
	
	assert.equal(cats4Vue.configParser.callCount, 1);
	assert.equal(cats4Vue.componentOptionsWriter.callCount, 1);
	assert.equal(cats4Vue.registerVuexModule.callCount, 1);
});

test("installer writes namespace to component", ()=>{
	assert.ok(!dialogContainer.hasOwnProperty("$_modalDialogs_namespace"));
	
	sample.install(Vue, {namespace: "NS", vuex});
	assert.equal(dialogContainer.$_modalDialogs_namespace, "NS");	
});

test("installer calls sub installers", ()=>{
	const uiInstaller = {callCount: 0, args: null};
	dialogContainer.install = (a,b)=>{uiInstaller.callCount++; uiInstaller.args = [a,b];};
	
	sample.install(Vue, {namespace: "NS", vuex, customDialogs: [{name: "test", dialog: {name: "test-dialog"}}]});
	
	assert.equal(vuex.dispatch.callCount, 1);
	assert.equal(vuex.dispatch.lastCall.args[0], "NS/installUserDialogs");
	assert.deepEqual(vuex.dispatch.lastCall.args[1], [{name: "test", component: "test-dialog"}]);
	
	assert.equal(uiInstaller.callCount, 1);
	assert.deepEqual(uiInstaller.args[0], [{name: "test-dialog"}]);
	assert.equal(uiInstaller.args[1].name, "base-modal-dialog");
});

test("installer deletes install function from dialog container", ()=>{
	assert.ok("install" in dialogContainer);
	
	sample.install(Vue, {vuex});
	assert.ok( !("install" in dialogContainer) );
});

test("installer throws if user dialogs not an array", ()=>{
	assert.throws(()=>{ sample.install(Vue, {vuex, customDialogs: {name: "test"}}); }, {message: /not an Array/});
});

test("installer throws if any user dialog not provided as {name, dialog}", ()=>{
	assert.throws(()=>{ sample.install(Vue, {vuex, customDialogs: [{name: "test"}]}); }, {message: /dialogs must have/});
	delete dialogContainer.$_modalDialogs_namespace;
	assert.throws(()=>{ sample.install(Vue, {vuex, customDialogs: [{dialog: {name: "test-dialog"}}]}); }, {message: /dialogs must have/});
});

test("installer throws if name is missing from any user dialog component", ()=>{
	assert.throws(()=>{ sample.install(Vue, {vuex, customDialogs: [{name: "test", dialog: {anythingButName: "test"}}]}); }, {message: /missing name property/});
});