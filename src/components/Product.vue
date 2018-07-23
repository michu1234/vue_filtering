<template>
    <div class="product">
        <div>
            <img src="http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Mobile-Phone-icon.png" alt="">
        </div>
        <div class="product__wrapper">
            <h2>{{productInfo.name}}</h2>
            <ul class="product__features">
                <li v-if="productInfo.screen">{{productInfo.screen | addUnit('"')}}</li>
                <li v-if="productInfo.ram">{{productInfo.ram | addUnit(' MB')}}</li>
                <li v-if="productInfo.battery">{{productInfo.battery | addUnit(' mAh')}}</li>
                <li v-if="productInfo.display">{{productInfo.display | addUnit('px')}}</li>
                <li v-if="productInfo.android">{{productInfo.android}}</li>
                <li v-if="productInfo.storage">{{productInfo.storage | addUnit(' GB')}}</li>
            </ul>

        </div>
    </div>
</template>

<script>
import {mixin} from '../mixin.js'
    export default {
        props: {
            productInfo: Object
        },
        mixins: [mixin]
    }
</script>

<style lang="scss" src="../assets/scss/main.scss">
</style>
