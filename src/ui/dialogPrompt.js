import modalDialogBase from "./modalDialogBase.vue";

const component = {
	name: "modal-dialog-prompt",
	props: ["parameters", "close"],
	data() {
		return { 
			input: "",
			text: "",
			placeholder: ""
		};
	},
	
	methods: {
		
		ok() {
			this.close(this.input);
		},
		
		cancel() {
			this.close(null);
		}
	},
	
	created() {
		if(typeof this.parameters !== "undefined") {
			if(typeof this.parameters.text !== "undefined") {
				this.text = this.parameters.text;
			}
			
			if(typeof this.parameters.placeholder !== "undefined") {
				this.placeholder = this.parameters.placeholder;
			}
		}		
	},
	
	components: {"base-modal-dialog": modalDialogBase}
};

export default component;