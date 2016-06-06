<template>
    <div class="gallerys" transition="expand">
        <gallery :data="gall"></gallery>
    </div>
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
.gallerys {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    overflow: hidden;
}
</style>