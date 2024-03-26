<template>
    <div class="sidebar">
		<div class="burger"
			:class="{ 'active' : isBurgerActive }"
			@click="openSidebarPanel"
		>
			<button type="button" class="burger-button" title="Menu">
				<span class="burger-bar burger-bar--1"></span>
				<span class="burger-bar burger-bar--2"></span>
				<span class="burger-bar burger-bar--3"></span>
			</button>
		</div>

		<transition name="slide">
			<div v-if="isPanelOpen" class="sidebar-plate">
				<div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"/>
				
				<div class="sidebar-panel">
						<div class="sidebar-panel-nav">
							<div class="burger-close"
								:class="{ 'active' : isBurgerActive }"
								@click="closeSidebarPanel"
							>
								<div>
									<button type="button" class="burger-button" title="Menu">
										<span class="bb-bar-close bb-bar-close--1"></span>
										<span class="bb-bar-close bb-bar-close--3"></span>
									</button>
								</div>
							</div>
							<div>
								<div class="text-large-title-w">SPECIAL DROP</div>
								<div class="sp-nav-subtitles">
									<router-link to="/special" style="text-decoration: none; color: inherit;">
										<div class="text-large-title-w">feat SUR</div>
									</router-link>
									<div class="text-large-title-w">feat Голубая лагуна</div>
								</div>
									<router-link to="/catalog" style="text-decoration: none; color: inherit;">
										<div class="text-large-title-w">Основной каталог</div>
									</router-link>
								<div class="text-large-title-w">Украшения под заказ</div>
							</div>
						</div>
				</div>
			</div>
		</transition>
    </div>
</template>

<script setup>
	import { ref } from 'vue';

	const isPanelOpen = ref(false);

	function openSidebarPanel () {
		isPanelOpen.value = true;
	}

	function closeSidebarPanel () {
		isPanelOpen.value = false;
	}
</script>

<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

	.sidebar-plate {
		display: flex;
		flex-direction: column;
		align-items: center;
        overflow-y: auto;
        background-color: #4B5742;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 484px;
	}

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
        overflow-y: auto;
        background-color: #4B5742;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 484px;
    }

	.sidebar-slot {
		display: flex;
	}

	.hidden {
        visibility: hidden;
    }

	.main-nav {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0.8rem;
	}

	.sidebar-panel-nav {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 402px;
		justify-content: space-between;
		margin-top: 18px;
	}

	.sp-nav-subtitles {
		display: flex;
		flex-direction: column;
		height: 96px;
		justify-content: space-between;
		margin-left: 34px;
	}

    button {
        cursor: pointer;
		position: relative;
		z-index: 2;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }
	
	.burger-close {
		display: flex;
		width: 100%;
		flex-direction: row-reverse;
		align-content: left;
	}
    .burger-button {
        position: relative;
        height: 30px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: #130f40;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 2px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

	.bb-bar-close {
		background-color: #ffff;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 2px;
        width: auto;
        margin-top: -1px;
	}

	.bb-bar-close--1 {
        transform: rotate(45deg)
	}

	.bb-bar-close--3 {
        transform: rotate(-45deg)
	}

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(6px);
    }

    .burger.active .burger-button {
        transform: rotate(-180deg);
    }

    .burger.active .burger-bar {
        background-color: #fff;
    }

    .burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    .burger.active .burger-bar--2 {
        opacity: 0;
    }

    .burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }
</style>