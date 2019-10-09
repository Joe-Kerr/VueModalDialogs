const assert = require("assert");
const sample = require("../../src/store/index.js").default;

suite("modalDialogs/store/index.js");

test("mutations.set uses correct function", ()=>{
	assert.equal(sample.mutations.set.name, "setPropVal");
});


test("actions.open sets 'opened' and optionally 'parameters' (default: null)", async ()=>{
	let calls = [];
	const state = {opened: null};
	const commit = (name, data) => {calls.push({name,data});};
	
	const resolve = (call)=>{
		sample.actions.close({commit: ()=>{}})
		return call;
	};
	
	await resolve(sample.actions.open({commit, state}, {dialog: "test", parameters: 123}));	
	assert.equal(calls.length, 2);
	assert.equal(calls[0].data.val, 123);
	assert.equal(calls[1].data.val, "test");

	calls = [];
	await resolve(sample.actions.open({commit, state}, {dialog: "test"}));
	assert.equal(calls[0].data.val, null);

});

test("actions.open throws if another dialog has not been resolved yet", async ()=>{
	const state = {opened: "notNull"};
	
	assert.throws(()=>{ sample.actions.open({state}); }, {message: /another dialog/});
});


test("actions.close resets state", async ()=>{
	const calls = [];
	const state = {opened: null};
	const commit = (name, data) => {calls.push({name,data});};	
	
	sample.actions.open({state, commit: ()=>{}}, {dialog: "test", parameters: 123});
	sample.actions.close({commit});
	
	assert.equal(calls.length, 2);
	assert.equal(calls[0].data.val, null);
	assert.equal(calls[1].data.val, null);	
});


test("actions.installUserDialogs writes user dialog infos to dialog map");

test("actions.installUserDialogs throws if duplicate dialog name");