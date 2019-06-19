<template>
	<base-modal-dialog class="modal-dialog_prompt" :title="'Enter'" :buttons="{'Ok':ok, 'Cancel': cancel}">

		<div slot="body">
			<p v-if="text !== ''">{{text}}</p>
			<textarea class="modal-dialog_textarea" :placeholder="placeholder" v-model="input"></textarea>
		</div>		
	</base-modal-dialog>
</template>

<script src="./dialogPrompt.js" />