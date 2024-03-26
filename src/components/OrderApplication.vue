<template>
  <div class="order-application">
		<div class="or-app-ls">
			<div class="or-app-title">
				<div class="text-large-title">Под заказ</div>
				<div class="text-large-subtitle">Особые украшения для особых случаев</div>
			</div>
			<div class="or-app-main">
				<div class="text-paragraph">
					Оставьте заявку и мы свяжемся с вами для уточнения эскиза и этапов работы над&nbsp;&nbsp;заказом
				</div>
				<div class="order-form">
					<v-input
						type="text"
						theme="default"
						size="normal"
						placeholder="Меня зовут..."
					/>
					<v-input 
						type="email"
						theme="default"
						size="normal"
						placeholder="E-mail"
					/>
					<v-button
						theme="colful"
						size="large"
					> Свяжитесь со мной 
					</v-button>
				</div>
			</div>
    	</div>
		<div class="or-app-rs"></div>
  </div>
</template>

<script setup>
	import VButton from "@/components/UI/VButton.vue";
	import VInput from "@/components/UI/VInput.vue";
</script>

<style>
	.order-application {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 599px;
		margin-top: 60px;
	}

	.or-app-ls {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		width: 423px;
	}

	.or-app-title {
		display: flex;
		flex-direction: column;
		height: 77px;
		justify-content: space-between;
	}

	.or-app-main {
		display: flex;
		flex-direction: column;
		height: 245px;
		justify-content: space-between;
	}

	.order-form {
		display: flex;
		flex-direction: column;
		height: 173px;
		justify-content: space-between;
	}

	.or-app-rs {
		width: 722px;
		height: 599px;
		background-image: url(@/assets/Rectangle-54.png);
	}
</style>