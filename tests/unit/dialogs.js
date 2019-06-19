const assert = require("assert");
const sampleAlert = require("../../src/ui/dialogAlert.js").default;
const sampleConfirm = require("../../src/ui/dialogConfirm.js").default;
const samplePrompt = require("../../src/ui/dialogPrompt.js").default;

suite("modalDialogs/ui/*particular dialogs");

test("dialogConfirm.methods.ok calls close with true", ()=>{
	let returnVal;	
	const context = {close: (param)=>{returnVal=param} };
	
	sampleConfirm.methods.ok.call(context);
	
	assert.equal(returnVal, true);
});

test("dialogConfirm.methods.cancel calls close with false", ()=>{
	let returnVal;	
	const context = {close: (param)=>{returnVal=param} };
	
	sampleConfirm.methods.cancel.call(context);
	
	assert.equal(returnVal, false);
});


test("dialogPrompt.methods.ok calls close with value of input", ()=>{
	let returnVal;	
	const context = {close: (param)=>{returnVal=param}, input: 123 };
	
	samplePrompt.methods.ok.call(context);	
	assert.equal(returnVal, 123);	
	
	context.input = 456;
	samplePrompt.methods.ok.call(context);	
	assert.equal(returnVal, 456);
});

test("dialogPrompt.methods.cancel calls close with null", ()=>{
	let returnVal;	
	const context = {close: (param)=>{returnVal=param}};
	
	samplePrompt.methods.ok.call(context);	
	assert.equal(returnVal, null);	
});

test("dialogPrompt.created() sets optional parameters", ()=>{
	const context = {		
		placeholder: 123,
		text: 456
	};
	
	samplePrompt.created.call(context);
	assert.equal(context.placeholder, 123);
	assert.equal(context.text, 456);
	
	context.parameters = {placeholder: "abc"};
	samplePrompt.created.call(context);
	assert.equal(context.placeholder, "abc");
	assert.equal(context.text, 456);	
	
	context.parameters.text = "def";
	samplePrompt.created.call(context);
	assert.equal(context.placeholder, "abc");
	assert.equal(context.text, "def");	
});