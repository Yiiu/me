<template>
    <header class="nav"
    :class="$route.name == 'Home'?'index':'or'"
    >
        <div class="content">
            <ul>
                <li>
                    <a v-link="{ path:'/' }">首页</a>
                </li>
                <li>
                    <a v-link="{ path:'/show' }">展示</a>
                </li>
                <li>
                    <a href="">阿三</a>
                </li>
            </ul>
        </div>
    </header>
</template>
<style lang="less">
    @color: #38B8F2;
    header.nav {
        transition: 
            border .5s cubic-bezier(0.46, 0.03, 0.52, 0.96), 
            background 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96), 
            opacity .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        z-index: 999;
        width: 100%;
        height: 80px;
        .content {
            width:1024px;
            margin: 0 auto;
            ul {
                float: right;
                li {
                    float: left;
                    margin:0;
                    display: block;
                    min-width:70px;
                    height: 75px;
                    text-align: center;
                    a {
                        transition: 0.3s ease all;
                        display: block;
                        height: 100%;
                        width: 100%;
                        text-decoration: none;
                        line-height: 80px;
                        font-size:2em;
                        color: #757575;
                    }
                }
            }
        }
    }
    header.or {
        background: #fff;
        .content ul li a:hover {
            color: #38B8F2;
            border-bottom: 5px solid #38B8F2;
        }
        .content ul li a {
            color: #757575;
            border-bottom: 5px solid #fff;
        }
    }
    header.index {
        width: 100%;
        height: 80px;
        position: fixed;
        top:0;
        left:0;
        background:
            linear-gradient(
                rgba(0,0,0,0.7),
                rgba(0,0,0,0.4),
                rgba(0,0,0,0.1),
                rgba(0,0,0,0)
            );
        .content ul li a {
            text-shadow: 0 0 5px #000;
            color: #fff;
        }
        .content ul li a:hover {
            text-shadow: 0 0 15px #000;
        }
    }
    @media screen and(max-width:1024px){
        header.nav .content {
            width: 768px;
        }
    }
    @media screen and(max-width:768px){
        header.nav .content {
            width: auto;
        }
        header.nav .content ul {
            float:none;
            width: 210px;
            height:75px;
            margin: 0 auto;
        }
    }
    </style>