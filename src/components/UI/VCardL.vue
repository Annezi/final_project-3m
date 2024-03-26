<template>
	<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
		<div class="card-l-view">
			<div class="card-l-imgs">
				<img 
					class="isFavourite-l" 
					:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
					alt="Like false"
					@click="onClickFavorite"
				>
				<img class="card-l-img" :src="imageUrl" alt="Like false">
			</div>

			<div class="card-l-info">
				<div class="card-l-info_main">
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
	.card-l-view {
		width: 760px;
		height: 830px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}

	.card-l-imgs {
		position: relative;
		width: 760px;
		height: 760px;
	}

	.isFavourite-l {
		position: absolute;
		margin-top: 24px;
		margin-left: 701px;
		width: 35px;
		height: 32px;
	}

	.card-l-img {
		width: 760px;
		height: 760px;
	}

	.card-l-info {
		height: 56px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-l-info_main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 760px;
	}
</style>