<template>
    <div>
        <doc-detail></doc-detail>
    </div>
</template>
<style>

</style>
<script>
    import DocDetail from './DocDetail.vue';

    export default{
        name      : 'docNew',
        data(){
            return{
            }
        },
        components:{
            docDetail: DocDetail
        },
    }
</script>
