<template>
	<div class="modal-dialog_modal">
		
		<div class="modal-dialog_container">
			<div class="modal-dialog_header">
				<span>
				<slot name="header">{{title}}</slot>
				</span>
			</div>
			
			<div class="modal-dialog_body">
				<slot name="body">
					<p>{{body}}</p>
				</slot>
			</div>
			
			
			<div class="modal-dialog_footer">
				<hr>
				<slot name="buttons">
					<button v-for="(btn, name) in buttons" v-on:click="btn">{{name}}</button>
				</slot>
			</div>
		</div>
		
	</div>
</template>


<style>
.modal-dialog_modal {
	position: fixed; 
	top: 0px;
	left: 0px;
	
	width: 100%; 
	height: 100%; 

	/* Thanks! https://stackoverflow.com/a/36559680 */	
	line-height: 100vh;        
	text-align: center;	
}


.modal-dialog_container {
	display: inline-block;
	vertical-align: middle;
	line-height: 100%;	
}

.modal-dialog_header {}

.modal-dialog_body {}

.modal-dialog_footer {}

.modal-dialog_alert {}

.modal-dialog_confirm {}

.modal-dialog_prompt {}

.modal-dialog_textarea {}
</style>


<script src="./modalDialogBase.js" />