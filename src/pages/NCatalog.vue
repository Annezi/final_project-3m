<template>
	<div>
		<v-layouts-default>
			<div class="c_main-banner">
				<div class="c_banner-rs">
					<div class="c_ban-line-1">
						<div class="text-large-title rotate-l">каталог</div>
						<div class="text-large-subtitle">постоянная коллекция</div>
					</div>
					<div class="c_ban-line-2">
						<div class="text-paragraph">Постоянная коллекция украшений, которая отобразит ваш внутренний мир.</div>
						<div class="text-paragraph">Мы&nbsp;обновляем каталог каждые пол года, чтобы вы&nbsp;всегда смогли найти и&nbsp;прикоснуться к&nbsp;нашему миру</div>
					</div>
					<div class="c_ban-line-3">
						<div class="text-medium-subtitle">не нашли то, что искали?</div>
						<v-button 
							theme="default"
							size="normal"
							@click="onSubmit"
						>
							Изготовить под заказ
						</v-button>
					</div>
				</div>

				<div class="c-banner-ls">
					<img src="@/assets/Catalog-banner-1.jpg" alt="banner">
				</div>
			</div>

			<div class="sort-plate">
				<div class="filters">
					<div class="custom-select">
						<select name="price" id="" class="filter-options">
							<option value="1">Цена</option>
						</select>
					</div>

					<div class="custom-select">
						<select @change="onChangeFiltCol" name="collection" id="" class="filter-options">
							<option value="">Все коллекции</option>
							<option value="Coquet Hearts">Coquet Hearts</option>
							<option value="SILVER BAY">SILVER BAY</option>
							<option value="Wave Vibes">Wave Vibes</option>
							<option value="Summer Beach">Summer Beach</option>
							<option value="ELPH Shine">ELPH Shine</option>
						</select>
					</div>

					<div class="custom-select">
						<select name="material" id="" class="filter-options">
							<option value="0">Все материалы</option>
							<option value="1">Серебро</option>
							<option value="2">Золото</option>
							<option value="3">Бисер</option>
							<option value="4">Камни</option>
						</select>
					</div>

					<div class="custom-select">
						<select @change="onChangeFiltType" name="type" id="" class="filter-options">
							<option value="">Все украшения</option>
							<option value="1">Кольца</option>
							<option value="2">Серьги</option>
							<option value="3">Ожерелья</option>
							<option value="4">Браслеты</option>
							<option value="5">Заколки</option>
						</select>
					</div>
				</div>

				<div>
					<select @change="onChangeSelect" name="Sort" id="" class="filter-sort">
						<option value="">Сортировка: По умолчанию</option>
						<option value="price">Сортировка: Цены по возрастанию</option>
						<option value="-price">Сортировка: Цены по убыванию</option>					
					</select>
				</div>				
			</div>

			<slot></slot>

			<v-card-list :items="items" />
		</v-layouts-default>
	</div>
</template>

<script setup>
	import { onMounted, ref, reactive, watch } from 'vue'
	import axios from 'axios'

	import VButton from '@/components/UI/VButton.vue'
	import VLayoutsDefault from '@/components/Layouts/VLayoutsDefault.vue'
	import VCardList from "@/components/VCardList.vue"

	const filters = reactive({
		sortBy: '',
		filtByCol: '',
		filtByType: ''
	})

	const items = ref([]);

	const onChangeSelect = (event) => {
		filters.sortBy = event.target.value
	}

	const onChangeFiltCol = (event) => {
		filters.filtByCol = event.target.value
	}

	const onChangeFiltType = (event) => {
		filters.filtByType = event.target.value
	}

	const fetchItems = async () => {
		try {
			const params = {
				sortBy: filters.sortBy
			}

			if (filters.filtByCol) {
				params.collectionName = filters.filtByCol
			}

			if (filters.filtByType) {
				params.categoryId = filters.filtByType
			}

			const { data } = await axios.get(`https://d8acf419ce7dcdcb.mokky.dev/items`, {
				params
			})
			items.value = data;
		} catch (err) {
			console.log(err)
		}
	}

	onMounted(fetchItems)

	watch(filters, fetchItems);

</script>

<style>

	.c_main-banner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.c_banner-rs {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 688px;
		width: 648px;
		margin-top: 18px;
	}

	.c_ban-line-1 {
		display: flex;
		width: 648px;
		margin-left: 60px;
		justify-content: space-between;
	}

	.c_ban-line-2 {
		display: flex;
		flex-direction: column;
		width: 424px;
		height: 134px;
		justify-content: space-between;
	}

	.c_ban-line-3 {
		display: flex;
		flex-direction: column;
		width: 202px;
		height: 82px;
		justify-content: space-between;
		
	}

	.c-banner-ls {
		margin-right: -60px;
	}

	.sort-plate {
		display: flex;
		justify-content: space-between;
		margin-top: 34px;

	}

	.custom-select {
		position: relative;
	}



	.filters {
		display: flex;
		padding-right: 20px;
	}

	.filter-options {
		border: 1px transparent;
		padding: 10px 48px 10px 20px;
		background-color: transparent;
		cursor: pointer;
	}

	.filter-sort {
		border: 1px solid black;
		padding: 10px 48px 10px 20px;
		background-color: transparent;
		border-radius: 30px;
		cursor: pointer;
	}
</style>