import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        name: 'Home',
        path: '/', 
        component: () => import('@/pages/VMain.vue') 
    },
    { 
        name: 'Catalog',
        path: '/catalog', 
        component: () => import('@/pages/NCatalog.vue')
    },
	{ 
        name: 'SpecialCatalog',
        path: '/special', 
        component: () => import('@/pages/SCatalog.vue')
    },
    { 
        name: 'CardDetail',
        path: '/catalog/:key', 
        component: () => import('@/pages/DetailProduct.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(), 
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
		  return savedPosition
		} else {
		  return { top: 0 }
		}
	},
	routes
});
