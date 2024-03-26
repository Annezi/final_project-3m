<template>
	<div class="layout">
		<v-header/>

		<main class="layout_main">
			<slot/>
		</main>

		<v-footer/>
	</div>
</template>

<script setup>
	import VHeader from '@/components/VHeader.vue'
	import VFooter from '@/components/VFooter.vue'
</script>

<style>
	.layout {
		display: flex;
		flex-direction: column;
}

	.layout_main {
		margin-top: 77px;
}
</style>