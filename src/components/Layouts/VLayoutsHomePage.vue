<template>
	<div class="layout">
		<home-header/>

		<main class="layout_main">
			<slot/>
		</main>

		<v-footer/>
	</div>
</template>

<script setup>
	import HomeHeader from '@/components/HomeHeader.vue'
	import VFooter from '@/components/VFooter.vue'
</script>

<style>
	.layout {
		display: flex;
		flex-direction: column;
}

	.layout_main {
		margin-top: 111px;
}
</style>