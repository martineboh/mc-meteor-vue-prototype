<template>
    <div class="w3-container">
        <div v-if="isMessage" class="w3-container w3-yellow">
            <p>{{pageMessage}}</p>
        </div>
        <ul class="nav nav-pills w3-lightgrey">
            <li class="mcBlockLink" style="display: block;">
                <h4>{{mcLabel.products}} &raquo;&raquo;</h4>
            </li>
            <li class="mcBoldLink"><a href="#" @click.prevent="listItem">{{mcLabel.ebay}}</a></li>
            <li class="mcBoldLink"><a href="#" @click.prevent="newItem">{{mcLabel.amazon}}</a></li>
            <li class="mcBoldLink"><a href="#" @click.prevent="productFeature">{{mcLabel.alibaba}}</a></li>
            <li class="mcBoldLink"><a href="#" @click.prevent="productFeature">{{mcLabel.clickbank}}</a></li>
        </ul>
        <div>
            <router-view class="w3-animate-left"></router-view>
        </div>
    </div>
</template>
<style>

</style>
<script>

    import { Session } from 'meteor/session';

    export default {
        name      : 'marketTrade',
        components: {},
        data(){
            return {
                mcLabel     : '',
                currentItems: '',
                isMessage   : false,
                pageMessage : '',
                isItem      : false,
            }
        },
        methods   : {
            listItem(){
                // reset currentItem
                this.isItem = false;
                Session.set( 'currentProductItem', '' );
                this.$router.push( { name: 'orderProductList' } );
            },
            newItem(){
                // reset currentItem
                this.isItem = false;
                Session.set( 'currentProductItem', '' );
                this.$router.push( { name: 'orderProductNew' } );
            },
            productFeature(){
                // reset currentItem
                this.isItem = false;
                Session.set( 'currentProductItem', '' );
                this.$router.push( { name: 'orderProductFeature' } );
            }
        },
        created(){
            this.mcLabel = this.$label;
        },
        updated(){
            // if update-item, set new tab label to Update
            if( Session.get('currentProductItem') ) {
                this.isItem = true;
            } else {
                this.isItem = false;
            }
        },
    }
</script>
