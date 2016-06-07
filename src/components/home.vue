<template>
    <div class="gallerys" transition="gallerys">
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
.gallerys {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    overflow: hidden;
}
.gallerys-transition {
  transition: all .3s ease;
}
.gallerys-enter, .gallerys-leave {
    height: 0;
    opacity: 0;
}
</style>