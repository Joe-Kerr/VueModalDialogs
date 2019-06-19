const assert = require("assert");
const {installer} = require("../../src/index.js");
const dialogContainer = require("../../src/ui/dialogContainer.vue").default;

suite("Default namespace");

test("ui/dialogContainer.js: modalDialog", ()=>{
	assert.equal(dialogContainer.data().namespace, "modalDialog");
});

test("index.js/installer: modalDialog", ()=>{
	let namespace;
	const vuex = {dispatch: ()=>{}, registerModule: (ns,store)=>{namespace=ns;}}
	
	installer.install(null, {vuex});
	assert.equal(namespace, "modalDialog");
	
	delete dialogContainer.$_modalDialogs_namespace;
});
