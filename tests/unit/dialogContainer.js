const assert = require("assert");
const sample = require("../../src/ui/dialogContainer.js").default;

suite("modalDialogs/ui/dialogContainer.js");

test("computed.activeModal returns correct component or null", ()=>{
	const dialogComponentMap = {
				confirm: "modal-dialog-confirm",
				alert: "modal-dialog-alert",
				prompt: "modal-dialog-prompt"			
	};	
	const context = {
		$store: {state: {NS: {opened: null, dialogComponentMap}}},
		namespace: "NS"
	};
	const possible = Object.keys(dialogComponentMap);//["confirm", "alert", "prompt"];
	
	assert.equal(sample.computed.activeModal.call(context), null);
	
	possible.forEach((dialog)=>{
		context.$store.state.NS.opened = dialog;
		const component = sample.computed.activeModal.call(context);
		
		assert.equal(typeof sample.components[component], "object");
	});
});

test("computed.activeModal throws if invalid store state", ()=>{
	const context = {
		$store: {state: {NS: {opened: "bollocks", dialogComponentMap: {}}}},
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

test("install writes user dialogs to components", ()=>{
	const context = {components: {}};
	const dialogs = [{name: "dialog1"}, {name: "dialog2"}];
	const baseDialog = {name: "base"};
	
	sample.install.call(context, dialogs, baseDialog);
	assert.deepEqual(context.components.dialog1, dialogs[0]);
	assert.deepEqual(context.components.dialog2, dialogs[1]);
	assert.equal(Object.keys(context.components).length, 2);
});

test("install preserves existing components object", ()=>{
	const context = {components: { existing: {name: "existing"} }};
	const dialogs = [{name: "dialog1"}];	
	const baseDialog = {name: "base"};
	
	sample.install.call(context, dialogs, baseDialog);
	assert.deepEqual(context.components.dialog1, dialogs[0]);
	assert.deepEqual(context.components.existing, {name: "existing"});
	assert.equal(Object.keys(context.components).length, 2);	
});

test("install writes baes dialog to user dialog components", ()=>{
	const context = {components: {}};
	const dialogs = [{name: "dialog1"}, {name: "dialog2"}];
	const baseDialog = {name: "base"};	
	
	sample.install.call(context, dialogs, baseDialog);
	assert.equal(dialogs[0].components.base, baseDialog);
	assert.equal(dialogs[1].components.base, baseDialog);
});

test("install preserves user dialog components object", ()=>{
	const context = {components: {}};
	const dialogs = [{name: "dialog1", components: {existing: {name: "existing-dialog"}}}];
	const baseDialog = {name: "base"};

	sample.install.call(context, dialogs, baseDialog);
	assert.deepEqual(dialogs[0].components, {existing: {name: "existing-dialog"}, base: {name: "base"}});
});

test("install throws if duplicate name of a user dialog", ()=>{
	const context = {components: { existing: {name: "existing"} }};
	const dialogs = [{name: "existing"}];	
	
	assert.throws(()=>{ sample.install.call(context, dialogs); }, {message: /duplicate component name /});	
});