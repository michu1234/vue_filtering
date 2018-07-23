<template>
  <div class="productlist">
    <filtering/>
    <listing/>
  </div>
</template>
<script>
  import Listing from '../components/Listing.vue';
  import Filtering from '../components/Filtering.vue';


  export default {
    name: 'ProductListing',
    components: {
      "listing": Listing,
      "filtering": Filtering
    }
  }
</script>

<style lang="scss" src="../assets/scss/main.scss">
</style>
