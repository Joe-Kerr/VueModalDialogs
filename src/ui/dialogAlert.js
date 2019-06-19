import modalDialogBase from "./modalDialogBase.vue";

const component = {
	name: "modal-dialog-alert",

	props: ["parameters", "close"],

	components: {"base-modal-dialog": modalDialogBase}
};

export default component;