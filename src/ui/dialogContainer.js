import dialogConfirm from "./dialogConfirm.vue";
import dialogPrompt from "./dialogPrompt.vue";
import dialogAlert from "./dialogAlert.vue";

export default {
	name: "modal-dialog-container",
	computed: {
		activeModal() {			
			const map = {
				confirm: "modal-dialog-confirm",
				alert: "modal-dialog-alert",
				prompt: "modal-dialog-prompt"
			};
			const active = this.$store.state[this.namespace].opened;
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
	
	install(userDialogs) {
		const errorPrefix = "Failed to install user dialogs: ";
		if(!(userDialogs instanceof Array)) {
			throw new Error(errorPrefix+"dialogs parameter not an Array");
		}
		
		for(let i=0, ii=userDialogs.length; i<ii; i++) {
			const dialog = userDialogs[i];
			
			if(!("name" in dialog)) {
				throw new Error(errorPrefix+"missing name property on user dialog. Make sure you provide a dialog compnent.");
			}
			
			if(dialog.name in this.components) {
				throw new Error(errorPrefix+"duplicate component name detected: "+dialog.name);
			}
			
			this.components[dialog.name] = dialog;
		}
	},
	
	components: {"modal-dialog-confirm": dialogConfirm, "modal-dialog-prompt": dialogPrompt, "modal-dialog-alert": dialogAlert}
}