<template>
	<base-modal-dialog class="modal-dialog_annotations" :title="'Edit annotation'" :buttons="{'Test':test}">
		<div slot="body"><span id="dialogOpenContent">{{parameters}}</span></div>		
	</base-modal-dialog>
</template>

<script>
export default {
	name: "custom-dialog",
	props: ["parameters", "close"],
	methods: {
		test() {
			this.close("test456");
		}
	}
}
</script>