<template>
    <div class="show" transition="show">
        <div class="content">
            <div class="left">
                <div class="content">
                    <div class="label">
                        <a href="">全部</a>
                    </div>
                    <div class="label">
                        <a href="">Javascript</a>
                    </div>
                    <div class="label">
                        <a href="">Css</a>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="content">2</div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @fontColor: #757575;
    .show {
        margin-top: 30px;
        width: 100%;
        >.content {
            display: flex;
            flex-direction: row;
            width: 1000px;
            border-radius: 5px;
            background: #fff;
            margin: 0px auto;
            padding-top: 30px;
            padding-bottom: 30px;
        }
        >.content .left {
            flex: 1 1 auto;
            border-right: 2px solid #ccc;
            /*****************loabel****************/
            >.content {
                display: flex;
                flex-direction: column;
                margin-left: 30px;
                >.label{
                    font-size: 1.5rem;
                    a {
                        display: inline-block;
                        padding: 5px 0;
                        width: 100%;
                        border-right: 2px solid rgba(0,0,0,0);
                        color: @fontColor;
                        text-decoration: none;
                        transition: 0.3s border;
                    }
                    a:hover{
                        border-right: 2px solid #00a192;
                    }
                }
            }
        }
        >.content .right {
            flex: 5 0 auto;
            >.content {
                margin-left: 30px;
                margin-right: 30px;
            }
        }
    }
    /**************响应式***************/
    @media screen and(max-width:1024px){
        .show>.content {
            width: auto;
            margin: 0 30px;
        }
    }
    @media screen and(max-width:768px){
        .show>.content {
            flex-direction: column;
            width: auto;
            margin: 0;
            padding-top: 0;
            border-radius: 0;
            >.left{
                >.content {
                    margin-right:10px;
                    margin-left:10px;
                    justify-content: space-around;
                    flex-direction: row;
                    .label {

                    }
                }
            }
        }
    }
    /************过渡**************/
    .show-transition {
      transition: all .3s ease;
    }
    .show-enter, .show-leave {
      opacity: 0;
    }
</style>