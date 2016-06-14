<template>
    <div class="content">
        <div class="boxs" v-for=" data in test ">
            <div class="title">{{data.title}}</div>
            <div class="content">{{data.content}}</div>
            <div class="content">{{data.label}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            "test"
        ]
    }
</script>
<style lang="less">
    .show > .content .right > .content > {
        display: flex;
        justify-content: space-around;
        flex-wrap:wrap;
        flex-basis:200px;
        >.boxs {
             flex-basis: auto;
            flex-shrink:0;
            width: 150px;
            height: 150px;
            background: #ccc;
        }
    }
</style>