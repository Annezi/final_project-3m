<template>
	<v-layouts-default>
		<div class="action-back">
			<router-link to="/catalog" style="text-decoration: none; color: inherit;">
				<div class="text-medium-subtitle ">
					Назад
				</div>
			</router-link>
		</div>

		<v-detail-card></v-detail-card>
	
	</v-layouts-default>
</template>

<script setup>
	import VLayoutsDefault from '@/components/Layouts/VLayoutsDefault.vue'
	import VDetailCard from '@/components/VDetailCard.vue'
</script>

<style>

.action-back {
	display: flex;
	margin-top: 14px;
	margin-bottom: 8px;
}

</style>