import Vue from 'vue'
import Vuex from 'vuex'

import api from './services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: '',
    completeInfo: true,
    filteringMenu: true,
    dataLoaded: false
  },
  // getters: {
  //   filteredProducts(state) {
  //     let productsDisplayed = state.products;


  //     return productsDisplayed;
  //   }
  // },
  mutations: {
    FETCH_USERS(state, data) {
      state.products = data;
      state.dataLoaded = true;
      console.log(state.dataLoaded);
  },
    findProduct(state, name) {
      state.products.filter((d)=>{return d.name.includes(name)})
    },
    changeProductInfo(state, action) {
      state.completeInfo = action;
    },
    toggleSidebar(state) {
      state.filteringMenu =! state.filteringMenu;
    }
  },
  actions: {
    fetchProductsData({ commit }) {
      // eslint-disable-next-line no-console
      api.getProducts().then((d) => {commit("FETCH_USERS", d)}).catch(error => console.log(error));
    }
  }
})
