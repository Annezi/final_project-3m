<template>
	<div>
		<v-layouts-home-page>
			<div>
				<img class="m-logo" src="@/assets/Heading-large.svg" alt="logo">
			</div>

			<div class="main-banner">
				<div class="banner-ls">
					<img src="@/assets/banner-1.png" alt="banner">
					<div class="text-large-title text-on-banner">Российский бренд уникальных украшений из металла, бисера и натуральных камней</div>
					<div class="on-banner"><img src="@/assets/Arrow 1.svg" alt="arrow"></div>
				</div>

				<div class="banner-rs">
					<div class="text-rs">
						<div class="text-large-subtitle">hand made украшения</div>
						<div class="text-large-title rotate-r">коллекция 2024</div>
					</div>
					<div class="pic-rs">
						<div class="mini-banner-rs">
							<div>
								<router-link to="/catalog">
									<v-button class="but-on-pic"
										theme="default"
										size="special"
										>
										Каталог
									</v-button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="stroke">
				<div class="stroke-style"></div>
			</div>

			<div class="special-info">
				<div class="si-info">
					<div class="text-large-title">Коллекция FLOW BLOOM</div>
					<div class="text-large-subtitle">Новая весенняя коллекция, вдохновленная цветами, ягодами и массивными элементами</div>
				</div>
				<div>
					<v-special-list></v-special-list>
				</div>
				<div class="button-align">
					<div>
						<router-link to="/special">
							<v-button
								theme="default"
								size="special"
							> Полная коллекция
							</v-button>
						</router-link>
					</div>
				</div>
			</div>

			<div class="order-app">
				<order-application></order-application>
			</div>
		</v-layouts-home-page>
	</div>
</template>

<script setup>
	import VLayoutsHomePage from '@/components/Layouts/VLayoutsHomePage.vue'
	import VButton from '@/components/UI/VButton.vue'
	import VSpecialList from '@/components/VSpecialList.vue'
	import OrderApplication from '@/components/OrderApplication.vue'
</script>

<style>
	.main-banner {
		display: flex;
		justify-content: space-between;
		margin-top: 60px;
	}

	.banner-ls {
		position: relative;
		margin-left: -60px;
	}

	.banner-rs {
		position: relative;
		width: 648px;
		height: 748px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.text-rs {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 648px;
		margin-top: 18px;
	}

	.pic-rs {
		display: flex;
		flex-direction: row-reverse;
		margin-bottom: 16px;
	}

	.text-on-banner {
		position: absolute;
		width: 538px;
		height: 117px;
		left: 95px;
		top: 506px;
	}

	.on-banner {
		position: absolute;
		top: 657px;
		left: 382px;
	}

	.mini-banner-rs {
		width: 312px;
		height: 374px;
		background-image: url(@/assets/banner-2.png);
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.but-on-pic {
		color: #fff;
		border-color: #fff;
	}

	.stroke {
		height: 1px;
		width: 100%;
		margin-top: -5px;
		background-color: #A7A7A7;
	}

	.special-info {
		display: flex;
		flex-direction: column;
		height: 1732px;
		justify-content: space-between;
		margin-top: 60px;
	}

	.si-info {
		display: flex;
		height: 87px;
		justify-content: space-between;
		flex-direction: column;
	}

	.button-align {
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
</style>
