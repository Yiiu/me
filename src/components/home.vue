<template>
    <gallery :data="gall"></gallery>
</template>
<script>
    import gallery from "../view/gallery";
    export default {
        data(){
            return {
                btn:false,
                gall:[
                    "./dist/img/1.jpg",
                    "./dist/img/2.jpg",
                    "./dist/img/3.jpg"
                ]
            }
        },
        methods: {
            btns: function(){
                this.btn = true;
            }
        },
        components: {
            gallery: gallery
        }
    }
</script>
<style lang="less">
</style>