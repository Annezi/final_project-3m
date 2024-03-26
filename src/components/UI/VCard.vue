<template>
	<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
		<div class="card-view">
			<div class="card-imgs">
				<img 
					class="isFavourite" 
					:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
					alt="Like false"
					@click="onClickFavorite"
				>
				<img class="card-img" :src="imageUrl" alt="Like false">
			</div>

			<div class="card-info">
				<div class="card-info_main">
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
	
	// function priceForm () {
	// 	const price = document.getElementsByClassName("price-form")

	// 	let newPrice = price.toLocalString('ru')
	// 	document.getElementsByClassName("price-form").innerHTML({ newPrice });
	// }

</script>


<style>
	.card-view {
		width: 424px;
		height: 674px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}

	.card-imgs {
		position: relative;
		width: 424px;
		height: 604px;
	}

	.isFavourite {
		position: absolute;
		margin-top: 24px;
		margin-left: 365px;
		width: 35px;
		height: 32px;
	}

	.card-img {
		width: 424px;
		height: 604px;
	}

	.card-info {
		height: 56px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-info_main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 424px;
	}
</style>