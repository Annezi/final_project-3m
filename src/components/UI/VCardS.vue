<template>
	<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
		<div class="card-s-view">
			<div class="card-s-imgs">
				<img 
					class="isFavourite-s" 
					:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
					alt="Like false"
					@click="onClickFavorite"
				>
				<img class="card-s-img" :src="imageUrl" alt="Like false">
			</div>

			<div class="card-s-info">
				<div class="card-s-info_main">
					<div class="text-medium-title">{{ collection }}</div>
					<div class="text-medium-title price-form" >{{ price }} Р</div>
				</div>

				<div class="text-medium-subtitle">{{ description }}</div>
			</div>
		</div>
	</router-link>
</template>

<script setup>
	defineProps({
		id: String,
		imageUrl: String,
		collection: String,
		price: Number,
		description: String,
		isFavorite: Boolean,
		onClickFavorite: Function
	})
</script>


<style>
	.card-s-view {
		width: 312px;
		height: 382px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}

	.card-s-imgs {
		position: relative;
		width: 312px;
		height: 312px;
	}

	.isFavourite-s {
		position: absolute;
		margin-top: 24px;
		margin-left: 253px;
		width: 35px;
		height: 32px;
	}

	.card-s-img {
		width: 312px;
		height: 312px;
	}

	.card-s-info {
		height: 56px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-s-info_main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 312px;
	}
</style>