<template>
    <div>
        <navs></navs>
        <router-view></router-view>
    </div>
</template>
<script>
    import navs from "./nav";

    export default {
        components: {
            navs
        }
    }
</script>
<style lang="less">
    * {
        padding: 0;
        margin: 0;
    }
    body {
        font-size:1em;
        background: #ececec;
    }
</style>