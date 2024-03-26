<template>
	<input 
		
        class="v-input"
        :class="{
            'v-input--wide': wide,
            'v-input--plain': plain,
            [`v-input--size-${size}`]: size,
            [`v-input--theme-${theme}`]: theme
        }"
        :disabled="false"
    />
    
</template>

<script setup>
	defineProps({
		theme: {
            type: String
        },
        size: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        wide: {
            type: Boolean
        },
        plain: {
            type: Boolean
        }
	});
</script>

<style>
	.v-input {
		border-radius: 30px;
		height: 19px;
		padding-left: 38px;
		z-index: 0;
	}

	.v-input--wide {
        display: block;
        width: 100%;
    }

	.v-input--size-normal {
        padding: 10px 20px 10px 38px;
    }

	.v-input--size-special {
        padding: 10px 20px 10px 20px;
		width: 200px;
    }

    .v-input--size-large {
        padding-top: 10px;
		padding-bottom: 10px;
		width: 423px;
    }

	.v-input:disabled {
        cursor: not-allowed;
        opacity: .6;
    }

	.v-input--theme-default {
        background-color: transparent;
		border: 1px solid black;

        color: black;
    }

	.v-input--theme-danger {
        background-color: red;
        border-color: red;

        color: #fff;
    }
</style>