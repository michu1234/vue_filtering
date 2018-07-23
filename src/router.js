import Vue from 'vue'
import Router from 'vue-router'
import ProductListing from './views/ProductListing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'ProductListing',
      component: ProductListing
    }
  ],
  mode: 'history'
})
