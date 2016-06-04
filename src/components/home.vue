<template>
    <div class="home">
        <h1>&lt;html&gt;</h1>
        <button @click="btns">确认</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                btn:false
            }
        },
        methods: {
            btns: function(){
                this.btn = true;
            }
        },
    }
</script>
<style lang="less">
    @bg:"../../dist/img/bg.jpg";
    .home {
        transition: 0.3s all;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url(@bg) no-repeat bottom;
        background-size: cover;
        h1 {
            font-size:3em;
        }
    }

</style>