const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../src/index.js").default;
const dialogContainer = require("../../src/ui/dialogContainer.vue").default;
const {cats4Vue} = require("cats4vue");

suite("modalDialogs/index.js");

const vuex = {dispatch: ()=>{}, registerModule: ()=>{}};
const Vue = {directive: ()=>{}, component: ()=>{}};

before(()=>{
	sinon.spy(cats4Vue, "configParser");
	sinon.spy(cats4Vue, "componentOptionsWriter");
	sinon.spy(cats4Vue, "renameComponent");
	sinon.spy(cats4Vue, "registerVuexModule");
});

after(()=>{
	cats4Vue.configParser.restore();
	cats4Vue.componentOptionsWriter.restore();
	cats4Vue.registerVuexModule.restore();
});

afterEach(()=>{
	delete dialogContainer.$_modalDialogs_namespace;
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

