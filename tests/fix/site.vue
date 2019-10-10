<template>
	<section>
		<modal-dialog-container />		
		<button id="isOpen" @click="open" v-if="isOpen">open</button>
		<span id="dialogCloseResponse">{{dialogCloseResponse}}</span>
	</section>
</template>

<script>
import {component} from "../../src/index.js";
export default {
	name: "site",
	components: {"modal-dialog-container": component},
	data() {return {isOpen: true, dialogCloseResponse: null}},
	methods: {
		async open() {
			this.isOpen = false;
			this.dialogCloseResponse = await this.$store.dispatch("modalDialog/open", {dialog: "custom", parameters: "test123"});
		}
	}
}
</script>