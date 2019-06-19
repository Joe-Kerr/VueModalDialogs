<template>
	<base-modal-dialog class="modal-dialog_confirm" :title="'Confirm'" :body="parameters" :buttons="{'Ok':ok, 'Cancel': cancel}" />
</template>

<script src="./dialogConfirm.js" />