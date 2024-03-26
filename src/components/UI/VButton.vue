<template>
	<button 
        class="v-button"
        :class="{
            'v-button--wide': wide,
            'v-button--plain': plain,
            [`v-button--size-${size}`]: size,
            [`v-button--theme-${theme}`]: theme
        }"
        :disabled="disabled"
    >
        <div class="text-button">
			<slot/>
		</div>
    </button>
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
	.v-button {
		border-radius: 30px;
		z-index: 0;
	}

	.v-button--wide {
        display: block;
        width: 100%;
    }

	.v-button--size-normal {
        padding: 10px 20px 10px 20px;
    }

	.v-button--size-special {
        padding: 10px 20px 10px 20px;
		width: 200px;
    }

    .v-button--size-large {
        padding-top: 10px;
		padding-bottom: 10px;
		width: 423px;
    }

	.v-button--size-max {
        padding-top: 10px;
		padding-bottom: 10px;
		width: 100%;
    }

	.v-button:disabled {
        cursor: not-allowed;
        opacity: .6;
    }

	.v-button--theme-default {
        background-color: transparent;
		border: 1px solid black;

        color: black;
    }

	.v-button--theme-colful {
        background-color: #212B18;

        color: white;
    }

	.v-button--theme-tag {
        background-color: transparent;
		border: 1px solid #A7A7A7;

        color: black;
    }

	.v-button--theme-danger {
        background-color: red;
        border-color: red;

        color: #fff;
    }
</style>