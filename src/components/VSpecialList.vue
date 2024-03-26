<template>
	<div class="card-special_list">
		<div class="sl-first-line">
				<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
					<div class="card-view">
						<div class="card-imgs">
							<img 
								class="isFavourite" 
								:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
								alt="Like false"
								@click="onClickFavorite"
							>
							<img class="card-img" src="/c-img/special items/Rectangle-130.jpg" alt="Like false">
						</div>

						<div class="card-info">
							<div class="card-info_main">
								<div class="text-medium-title">FLOW BLOOM</div>
								<div class="text-medium-title price-form" >3 600 Р</div>
							</div>

							<div class="text-medium-subtitle">Массивные серьги из бисера</div>
						</div>
					</div>
				</router-link>
				<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
					<div class="card-view">
						<div class="card-imgs">
							<img 
								class="isFavourite" 
								:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
								alt="Like false"
								@click="onClickFavorite"
							>
							<img class="card-img" src="/c-img/special items/Rectangle-131.jpg" alt="Like false">
						</div>

						<div class="card-info">
							<div class="card-info_main">
								<div class="text-medium-title">FLOW BLOOM</div>
								<div class="text-medium-title price-form" >4500 Р</div>
							</div>

							<div class="text-medium-subtitle">Золотые серьги с жемчугом</div>
						</div>
					</div>
				</router-link>
				<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
					<div class="card-view">
						<div class="card-imgs">
							<img 
								class="isFavourite" 
								:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
								alt="Like false"
								@click="onClickFavorite"
							>
							<img class="card-img" src="/c-img/special items/Rectangle-132.jpg" alt="Like false">
						</div>

						<div class="card-info">
							<div class="card-info_main">
								<div class="text-medium-title">FLOW BLOOM</div>
								<div class="text-medium-title price-form" >3600 Р</div>
							</div>

							<div class="text-medium-subtitle">Массивные серьги из бисера</div>
						</div>
					</div>
				</router-link>
		</div>
		<div class="sl-second-line">
			<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
				<div class="card-s-view">
					<div class="card-s-imgs">
						<img 
							class="isFavourite-s" 
							:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
							alt="Like false"
							@click="onClickFavorite"
						>
						<img class="card-s-img" src="/c-img/special items/Rectangle-133.jpg" alt="Like false">
					</div>
					<div class="card-s-info">
						<div class="card-s-info_main">
							<div class="text-medium-title">FLOW BLOOM</div>
							<div class="text-medium-title price-form" >1600 Р</div>
						</div>
						<div class="text-medium-subtitle">Колье из бисера</div>
					</div>
				</div>
			</router-link>
			<router-link :to="`/catalog/${ id }`" style="text-decoration: none; color: inherit;">
				<div class="card-l-view">
					<div class="card-l-imgs">
						<img 
							class="isFavourite-l" 
							:src="!isFavorite ? '/Like-1.svg' : '/Like-2.svg' " 
							alt="Like false"
							@click="onClickFavorite"
						>
						<img class="card-l-img" src="/c-img/special items/Rectangle-134.jpg" alt="Like false">
					</div>

					<div class="card-l-info">
						<div class="card-l-info_main">
							<div class="text-medium-title">FLOW BLOOM</div>
							<div class="text-medium-title price-form" >3600 Р</div>
						</div>

						<div class="text-medium-subtitle">Массивные серьги из бисера</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script setup>
	import VCard from '@/components/UI/VCard.vue'
	import VCardS from '@/components/UI/VCardS.vue'
	import VCardL from '@/components/UI/VCardL.vue'
</script>

<style>
	.sl-first-line {
		display: grid;
  		grid-template-columns: repeat(3, 424px);
		grid-column-gap: 24px;
		grid-row-gap: 34px;
		justify-content: center;
		/* margin-top: 34px; */
	}

	.sl-second-line {
		display: grid;
  		grid-template-columns: 312px 760px;
		grid-column-gap: 248px;
		justify-content: center;
		margin-top: 34px;
	}
</style>