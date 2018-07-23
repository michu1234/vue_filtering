<template>
  <div class="listing">
    <div v-for="(p,index) in products" :key="index">
      <product :productInfo="p"/>
    </div>
  </div>
</template>

<script>
  import Product from './Product.vue';

  import {
    mapState,
    mapActions
  } from 'vuex';

  export default {
    name: 'Listing',
    components: {
      "product": Product
    },
    computed: {
      ...mapState([
      'products'
    ])
    },
    data() {
      return {}
    },
    mounted() {
      this.fetchProductsData();
    },
    methods: {
      ...mapActions([
        'fetchProductsData',
      ])
    }
  }
</script>

<style lang="scss" src="../assets/scss/main.scss">
</style>
