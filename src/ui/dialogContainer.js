import dialogConfirm from "./dialogConfirm.vue";
import dialogPrompt from "./dialogPrompt.vue";
import dialogAlert from "./dialogAlert.vue";

export default {
	name: "modal-dialog-container",
	computed: {
		activeModal() {			
			const state = this.$store.state[this.namespace];
			const map = state.dialogComponentMap;
			const active = state.opened;
			const modal = (active === null) ? null : map[active];
			
			if(typeof modal === "undefined") {
				throw new Error("An invalid modal dialog id was set in open-action: "+active);
			}
			
			return modal;
		},
		
		parameters() {
			return this.$store.state[this.namespace].parameters
		}
	},

	data() {
		return {
			namespace: "modalDialog"
		}
	},
	
	methods: {
		close(returnVal) {
			this.$store.dispatch(this.namespace+"/close", returnVal);
		}
	},
	
	created() {
		if(typeof this.$options.$_modalDialogs_namespace !== "undefined") {
			this.namespace = this.$options.$_modalDialogs_namespace;
		}
	},		
	
	install(userDialogs, baseDialog) {
		for(let i=0, ii=userDialogs.length; i<ii; i++) {
			const dialog = userDialogs[i];
						
			if(dialog.name in this.components) {
				throw new Error("Failed to install user dialogs: duplicate component name detected: "+dialog.name);
			}
			
			dialog.components = dialog.components || {};
			dialog.components[baseDialog.name] = baseDialog;
			this.components[dialog.name] = dialog;
		}
	},
	
	components: {"modal-dialog-confirm": dialogConfirm, "modal-dialog-prompt": dialogPrompt, "modal-dialog-alert": dialogAlert}
}