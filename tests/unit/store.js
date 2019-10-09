const assert = require("assert");
const sample = require("../../src/store/index.js").default;

suite("modalDialogs/store/index.js");

let originalState;
const commit = (cmd, data)=>{ sample.mutations[cmd](sample.state, data); };
const store = {state: sample.state, commit}

function resetState() {sample.state = JSON.parse(JSON.stringify(originalState));}

before(()=>{
	originalState = JSON.parse(JSON.stringify(sample.state));
});

after(()=>{
	resetState();
	originalState = null;
});

afterEach(()=>{
	resetState();
});

test("mutations.set uses correct function", ()=>{
	assert.equal(sample.mutations.set.name, "setProps");
});


test("actions.open sets 'opened' and optionally 'parameters' (default: null)", async ()=>{
	sample.actions.open(store, {dialog: "test"});	
	assert.equal(sample.state.opened, "test");
	assert.equal(sample.state.parameters, null);
	
	sample.actions.close(store);
	resetState();

	sample.actions.open(store, {dialog: "test", parameters: 123});	
	assert.equal(sample.state.opened, "test");
	assert.equal(sample.state.parameters, 123);
	
	sample.actions.close(store);
});

test("actions.open throws if another dialog has not been resolved yet", async ()=>{
	const state = {opened: "notNull"};
	
	assert.throws(()=>{ sample.actions.open({state}); }, {message: /another dialog/});
});


test("actions.close resets state", async ()=>{
	sample.actions.open(store, {dialog: "test", parameters: 123});	
	assert.notEqual(sample.state.opened, null);
	assert.notEqual(sample.state.parameters, null);
	
	sample.actions.close(store);	
	assert.equal(sample.state.opened, null);
	assert.equal(sample.state.parameters, null);	
});


test("actions.installUserDialogs writes user dialog infos to dialog map");

test("actions.installUserDialogs throws if duplicate dialog name");