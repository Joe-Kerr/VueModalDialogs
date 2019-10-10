const assert = require("assert");
const sample = require("../../src/ui/modalDialogBase.vue").default;
const {mount, createLocalVue} = require("@vue/test-utils");

const localVue = createLocalVue();


suite("modalDialog/ui/modalDialogBase.js");

test("Component uses title-, body- and buttons-props", ()=>{
	
	const testComponent = {
		name: "te-st",
		template: `<modal-dialog-base title="testTitle" body="testBody" :buttons="{testButton: test}" />`,
		methods: {
			test(){}
		},
		components: {"modal-dialog-base": sample}
	};	
	const mounted = mount(testComponent);
	
	const title = mounted.find(".modal-dialog_header > span");
	const body = mounted.find(".modal-dialog_body > p");
	const button = mounted.find("button");
	
	assert.equal(title.text(), "testTitle");
	assert.equal(body.text(), "testBody");
	assert.equal(button.text(), "testButton");	
});

test("Component uses header-, body- and footer-slots", ()=>{
	const testComponent = {
		name: "te-st",
		template: `
			<modal-dialog-base>
				<div id="one" slot="header">oneContent</div>
				<div id="two" slot="body">twoContent</div>
				<div id="three" slot="footer">threeContent</div>
			</modal-dialog-base>`,
		components: {"modal-dialog-base": sample}
	};
	const mounted = mount(testComponent);	
	
	const header = mounted.find("#one").text();
	const body = mounted.find("#two").text();
	const footer = mounted.find("#three").text();
	
	assert.equal(header, "oneContent");
	assert.equal(body, "twoContent");
	assert.equal(footer, "threeContent");
});