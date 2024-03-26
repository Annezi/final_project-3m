<template>
		<v-layouts-default class="position">
			<div class="sc_main-banner">
				<div class="sc_banner-ls">
					<div class="sc_ban-line-1">
						<div class="text-large-title rotate-l color">каталог</div>
					</div>
					<div class="sc_ban-line-3">
						<div class="text-paragraph color">Позвольте себе вдохнуть весну через украшения из новой коллекции</div>
					</div>
				</div>
				<div class="sc_banner-bg"></div>			
			</div>	

			<div class="style-list">
				<v-special-list></v-special-list>
			</div>		
		</v-layouts-default>
</template>

<script setup>
	import VLayoutsDefault from '@/components/Layouts/VLayoutsDefault.vue'
	import VSpecialList from '@/components/VSpecialList.vue'
</script>

<style>

	.sc_main-banner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.sc_banner-ls {
		display: flex;
		flex-direction: column;
		height: 581px;
		justify-content: space-between;
		position: absolute;
	}

	.sc_ban-line-1 {
		display: flex;
		width: 100%;
		margin-left: 60px;
		justify-content: space-between;
	}

	.sc_ban-line-2 {
		display: flex;
		width: 100%;
		top: 44px;
	}

	.sc_ban-line-3 {
		display: flex;
		flex-direction: column;
		width: 202px;
		height: 82px;
		justify-content: space-between;
		margin-top: 531px;
		
	}
	.center {
		margin-right: 680px;
	}

	.color {
		color: white;
	}

	.sc_banner-bg {
		width: 120%;
		height: 748px;
		margin-left: -60px;
		margin-right: -60px;
		background-image: url(@/assets/sc_banner.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.style-list {
		margin-top: 60px;
	}
</style>