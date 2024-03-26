<template>
	<div class="detail-card">
		<div class="detail-card-ls">
			<div class="gallery-large--1"></div>
			<div class="gallery-small">
				<div class="gallery-small--1"></div>
				<div class="gallery-small--2"></div>
			</div>
			<div class="gallery-large--2"></div>
		</div>
		<div class="detail-card-rs">
			<div>
				<div class="card--info">
					<div class="card--info_main">
						<div class="text-medium-title">ELPH Shine</div>
						<div class="text-medium-title price-form" >6800 Р</div>
					</div>

					<div class="text-medium-subtitle">Эльфийское свадебное кольцо</div>
				</div>
				<div class="card--info_description">
					<div class="text-paragraph">Кольцо из серии ELPH Shine вдохновлено магией и эльфийскими мотивами </div>
				</div>

				<div class="card--options">
					<div class="size--info">
						<div class="text-medium-subtitle">Размер</div>
						<div class="text-medium-subtitle">Размерная сетка</div>
					</div>
					<div class="card--selection">
						<select name="Sort" id="" class="filter-sort card-options">
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>					
						</select>
					</div>
					<v-button
						theme="colful"
						size="max"
					> Добавить в корзину 
					</v-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import VButton from "@/components/UI/VButton.vue"
</script>

<style>
	.detail-card {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 2012px;
	}
	.detail-card-ls {
		display: flex;
		flex-direction: column;
		margin-left: -60px;
		width: 721px;
	}

	.detail-card-rs {
		display: flex;
		flex-direction: column;
		margin-left: 732px;
		width: 46.5%;
		position: fixed;
		left: 0;
	}

	.gallery-small {
		display: flex;
		flex-direction: row;
	}

	.gallery-large--1 {
		width: 721px;
		height: 748px;
		background-image: url(@/assets/img/Rectangle-84.jpg);
	}

	.gallery-small--1 {
		width: 362px;
		height: 516px;
		background-image: url(@/assets/img/Rectangle-61.jpg);
	}

	.gallery-small--2 {
		width: 362px;
		height: 516px;
		background-image: url(@/assets/img/Rectangle-85.jpg);
	}

	.gallery-large--2 {
		width: 721px;
		height: 748px;
		background-image: url(@/assets/img/Rectangle-86.jpg);
	}

	.card--info {
		display: flex;
		flex-direction: column;
		height: 56px;
		justify-content: space-between;
		width: 100%;
	}

	.card--info_main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.card--info_description {
		margin-top: 172px;
	}

	.card--options {
		margin-top: 34px;
	}

	.size--info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.card-options {
		width: 100%;
		margin-top: 14px;
		margin-bottom: 24px;
	}

</style>