<template>
	<container class="f-box">
		<div>
			<img class="m-logo" src="@/assets/Heading-large.svg" alt="logo">
		</div>

		<div class="footer-content">
			<div class="f-main-line">
				<div class="f-social-media">
					<div>
						<img class="social-media" src="@/assets/whats app.svg" alt="wa">
					</div>
					<div>
						<img class="social-media" src="@/assets/tg.svg" alt="tg">
					</div>					
				</div>
				<div class="footer-pages">
					<div>
						<div class="f-pages-sort text-medium-subtitle">политика обработки данных</div>
						<div class="f-pages-sort text-medium-subtitle">гарантии и возврат</div>
						<div class="f-pages-sort text-medium-subtitle">доставка и оплата</div>
						<div class="f-pages-sort text-medium-subtitle">оферта</div>
					</div>
					<div>
						<div class="f-pages-sort text-medium-subtitle">размерная сетка</div>
						<div class="f-pages-sort text-medium-subtitle">уход за изделием</div>
						<div class="f-pages-sort text-medium-subtitle">faq</div>
					</div>
					<div>
						<div class="f-pages-sort text-medium-subtitle">о бренде</div>
						<div class="f-pages-sort text-medium-subtitle">вакансии</div>
						<div class="f-pages-sort text-medium-subtitle">связаться с нами</div>
					</div>
				</div>
			</div>
			<div class="rights">
				<div class="text-medium-subtitle">COPYRIGHT © 2024</div>
				<div class="rights-r">
					<div class="text-medium-subtitle">THING IN ITSELF</div>
					<div class="text-medium-subtitle">ALL RIGHTS RESERVED</div>
				</div>			
			</div>
		</div>
	</container>
</template>


<style>
	.f-box {
		width: 100%;
		height: 473px;
		display: flex;
		flex-direction: column;
		margin-top: 60px;
	}

	.f-main-line {
		display: flex;
		justify-content: space-between;
		margin-top: 34px;
		margin-left: 58px;
		margin-bottom: 60px;
	}

	.f-social-media {
		display: flex;
		justify-content: space-between;
		width: 78px;
	}

	.footer-pages {
		display: flex;
		justify-content: space-between;
		width: 872px;
	}

	.f-pages-sort {
		padding-bottom: 6px;
	}

	.rights {
		display: flex;
		flex-direction: row;
		margin-left: 58px;
		justify-content: space-between;
	}

	.rights-r {
		display: flex;
		justify-content: space-between;
		width: 872px;
	}
</style>