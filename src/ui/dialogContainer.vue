<template>
	<component v-if="activeModal !== null" :is="activeModal" :parameters="parameters" :close="close" />
</template>


<style>

</style>


<script src="./dialogContainer.js" />