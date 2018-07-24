<template>
  <div class="productlist">
    <img v-if="!dataLoaded" src="../assets/img/animation.gif" alt="">
    <div v-show="dataLoaded" class="productlist__sidebar">
      <transition name="slide">
        <filtering v-if="filteringMenu" />
      </transition>
      <div @click="toggleMenu" class="productlist__sidebar__button">⮘</div>
    </div>
    <div v-show="dataLoaded">
      <div class="productlist__controls">
        <img @click="changeView(false)" key="list" src="../assets/img/sun-icon.png" alt="">
        <img @click="changeView(true)" key="blocks" src="../assets/img/sun-icon.png" alt="">
      </div>
      <listing/>
    </div>
  </div>
</template>
<script>
  import Listing from '../components/Listing.vue';
  import Filtering from '../components/Filtering.vue';

  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'ProductListing',
    components: {
      "listing": Listing,
      "filtering": Filtering
    },
    computed: {
      ...mapState([
        'filteringMenu',
        'dataLoaded'
      ])
    },
    methods: {
      ...mapMutations([
        'changeProductInfo',
        'toggleSidebar'
      ]),
      changeView(action) {
        this.changeProductInfo(action);
      },
      toggleMenu() {
        this.toggleSidebar();
      }
    }
  }
</script>

<style lang="scss" src="../assets/scss/main.scss">
</style>
