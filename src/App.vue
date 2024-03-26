<template>
<div id="app">
	<main>
		<router-view/>
	</main>
</div>
</template>

<script setup>

</script>

<style>
	html {
		margin: 0;
		margin-bottom: 60px;
		padding: 0;
		background-color: #EFEFEF;
	}
	body {
		margin: 0;
		margin-left: 60px;
		margin-right: 60px;
		margin-bottom: 60px;
		padding: 0;
		/* background-color: #EFEFEF; */
	}

	/* text */
	.text-large-title {
		color: #000;
		font-family: Cormorant SC;
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-large-title-w {
		color: #ffffff;
		font-family: Cormorant SC;
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-large-subtitle {
		color: #000;
		font-family: Cormorant SC;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-large-subtitle-w {
		color: #ffffff;
		font-family: Cormorant SC;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-medium-title {
		color: #000;
		font-family: Cormorant SC;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-medium-subtitle {
		color: #000;
		font-family: Cormorant SC;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-paragraph {
		color: #000;
		font-family: Cormorant SC;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.text-button {
		font-family: Cormorant SC;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: 0;
		padding: 0;
	}

	.rotate-l {
		transform: rotate(90deg);
		transform-origin: top left;
		display: flex;
		margin-left: -20px;
	}

	.rotate-r {
		transform: rotate(90deg) translate(260px, 0px);
		transform-origin: top right;
		display: flex;
		margin-right: -20px;
	}
	/* text end */

	.m-logo {
		margin-top: 34px;
		width: 100%;
		height: auto;
	}
</style>
