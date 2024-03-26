<template>
	<div class="card-list">
		<v-card
			v-for="item in items"
			:key="item.id"
			:id="item.id"
			:imageUrl="item.image"
			:collection="item.collectionName"
			:price="item.price"
			:description="item.title"
			:isFavorite="false"
		/>
	</div>
</template>

<script setup>
	import VCard from "@/components/UI/VCard.vue"

	defineProps ({
		items: Array
	})
</script>

<style>
	.card-list {
		display: grid;
  		grid-template-columns: repeat(3, 424px);
		grid-column-gap: 24px;
		grid-row-gap: 34px;
		justify-content: center;
		margin-top: 34px;
	}
</style>
