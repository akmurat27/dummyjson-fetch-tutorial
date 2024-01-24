import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import CartsView from '@/views/CartsView.vue'
import UsersView from '@/views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product',
      name: 'product',
      component: ProductsView
    },{
      path: '/carts',
      name: 'carts',
      component: CartsView
    },{
      path: '/users',
      name: 'users',
      component: UsersView
    }
  ]
})

export default router
