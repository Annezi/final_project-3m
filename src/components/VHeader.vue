<template>
	<div class="v-header">
		<div class="h-box">
			<div class="h-content-left">
				<v-sidebar/>
			</div>

			<div class="h-content-center">
				<div>
					<router-link to="/">
						<img src="@/assets/header_logo.svg" alt="logo">
					</router-link>
				</div>
			</div>
			
			<div class="h-content-text">
				<div>
					<div class="text-large-subtitle">Корзина</div>
				</div>
				<div>
					<div class="text-large-subtitle">Вход</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
	import VSidebar from '@/components/Menu/VSidebar.vue';
</script>

<style>
	.v-header {
		width: auto;
		height: 77px;
		background-color: #EFEFEF;
		margin-left: -60px;
		margin-right: -60px;
		display: flex;
		position: fixed;
		z-index: 1;
	}

	.h-content-center {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
		right: 60px;
	}

	.h-box {
		height: 77px;
		width: 1440px;
		margin-left: 60px;
		margin-right: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.h-content-text {
		display: flex;
		flex-direction: row;
		width: 191px;
		justify-content: space-between;
		margin-right: 60px;
	}
</style>