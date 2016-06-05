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
                    "http://yu7er.qiniudn.com/3.jpg",
                    "http://yu7er.qiniudn.com/2.jpg",
                    "http://yu7er.qiniudn.com/1.jpg"
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