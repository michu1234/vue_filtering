<template>
<div class="filtering">
<label>Nazwa modelu</label>
<input type="text" v-model="phoneName" @input="findItem">
<label for="">Przekątna ekranu</label>
<input type="range">
<label for="">Pamięć RAM</label>
<input type="range">
<label for="">Pamięć wewnętrzna</label>
<input type="range">
<label for="">Pojemność baterii</label>
<input type="range">
<p>Rozdzielczość ekranu</p>
<input type="checkbox"><label for="">720x1440px</label>
<input type="checkbox"><label for="">720x1920px</label>
<input type="checkbox"><label for="">480x960px</label>
<input type="checkbox"><label for="">720x1440px</label>
<input type="checkbox"><label for="">720x1920px</label>
<input type="checkbox"><label for="">480x960px</label>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name: "Filtering",
        data() {
            return {
                phoneName: ''
            }
        },
        methods: {
            ...mapMutations([
                'findProduct'
            ]),
            findItem() {
                this.findProduct(this.phoneName);
            }
        }
    };
</script>

<style lang="sass" src="../assets/scss/main.scss">

</style>

