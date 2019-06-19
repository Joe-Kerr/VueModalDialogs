export default {
	name: "base-modal-dialog",
	props: ["title", "body", "buttons"],
	methods: {
		ok() {
			console.log("Ok method from base modal.")
		}	
	}
};