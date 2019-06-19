import modalDialogBase from "./modalDialogBase.vue";

const component = {
	name: "modal-dialog-confirm",

	props: ["parameters", "close"],

	methods: {
		ok() {
			this.close(true);
		},
		
		cancel() {
			this.close(false);
		}
	},
	
	components: {"base-modal-dialog": modalDialogBase}
};

export default component;