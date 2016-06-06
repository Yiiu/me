<template>
    <div class="show" transition="expand">
        <div class="content">
            <div class="left">
                aaasdfadf
            </div>
            <div class="right">
                aaasdfasdfasdf
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .show {
        margin-top: 30px;
        width: 100%;
        .content {
            width: 1000px;
            border-radius: 5px;
            background: #fff;
            margin: 0px auto;
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }/* 必需 */
    .expand-transition {
      transition: all .3s ease;
    }

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
      height: 0;
      opacity: 0;
    }

    @media screen and(max-width:1024px){
        .show .content {
            width: auto;
            margin: 0 30px;
        }
    }
    @media screen and(max-width:768px){
        .show .content {
            width: auto;
            margin: 0;
            border-radius: 0;
        }
    }
</style>