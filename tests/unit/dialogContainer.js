const assert = require("assert");
const sample = require("../../src/ui/dialogContainer.js").default;

suite("modalDialogs/ui/dialogContainer.js");

test("computed.activeModal returns correct component or null", ()=>{
	const context = {
		$store: {state: {NS: {opened: null}}},
		namespace: "NS"
	};
	const possible = ["confirm", "alert", "prompt"];
	
	assert.equal(sample.computed.activeModal.call(context), null);
	
	possible.forEach((dialog)=>{
		context.$store.state.NS.opened = dialog;
		const component = sample.computed.activeModal.call(context);
		
		assert.equal(typeof sample.components[component], "object");
	});
});

test("computed.activeModal throws if invalid store state", ()=>{
	const context = {
		$store: {state: {NS: {opened: "bollocks"}}},
		namespace: "NS"
	};	
	
	assert.throws(()=>{ sample.computed.activeModal.call(context); }, {message: /invalid modal dialog/});
});

test("computed.parameters returns store state", ()=>{
	const context = {$store: {state: {NS: {parameters: 123}}}, namespace: "NS"};
	assert.equal(sample.computed.parameters.call(context), 123);
});

test("methods.close dispatches to store with parameter", ()=>{
	let command, param;
	let count = 0;
	const context = {
		$store: {dispatch: (c,p)=>{command = c; param = p; count++;}},
		namespace: "NS"
	};
	
	sample.methods.close.call(context, "p");
	
	assert.equal(command, "NS/close");
	assert.equal(param, "p");
});

test("created overrides namespace if on $options", ()=>{
	const context = {namespace: "123", $options: {}, menu: 1};
	
	sample.created.call(context);	
	assert.equal(context.namespace, "123");
	
	context.$options.$_modalDialogs_namespace = "456";
	sample.created.call(context);	
	assert.equal(context.namespace, "456");
});