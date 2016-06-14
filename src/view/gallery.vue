<template>
    <div class="gallery" v-el:box>
        <div class="box">
            <div  v-el:cont class="content" 
                v-bind:class="{'move':down}"
                @mousedown="_down"
                @mousemove="_move"
                @mouseup="_up"
                @touchstart="_down"
                @touchmove="_move"
                @touchend="_up"
                @touchcancel="_up"
    >
                <div v-for="s in data" class="img" 
                    style="
                    background:url('{{s}}') no-repeat bottom;
                    background-size: cover;
                ">
                    
                </div>
            </div>
            <div class="btn">
                <ul>
                    <li 
                    v-for="s in data" 
                    key="{{$index}}" 
                    :class="
                         $index==i?'on':'' 
                    "
                    @click="btn($index)">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                navBtn:true,
                down:false,
                move:false,
                up:true,
                x:null,                 // 当前所在位置
                windowX:null,    // 应该在的位置
                screenX:null,  // 鼠标按下记录鼠标的x轴
                i:0                 // 计数
            }
        },
        props:{
            data:Array
        },
        methods: {
            _down:function(){
                // 记录鼠标位置
                this.down = true;
                var screenX = window.event.screenX;
                if(event.targetTouches){
                    var touch = event.targetTouches[0];
                    screenX = window.event.screenX || touch.screenX;
                }
                this.screenX = screenX;
            },
            _move:function(){
                if(this.down){
                    var screenX = window.event.screenX;
                    if(event.targetTouches){
                        var touch = event.targetTouches[0];
                        screenX = window.event.screenX || touch.screenX;
                    }
                    var x = this.screenX-screenX;
                    this.$els.cont.style.webkitTransition = "";
                    if(this.screenX>screenX){
                        this.x = this.windowX+x;
                        this.$els.cont.style.webkitTransform = 
                            "translate3d(-"+(this.windowX+x) +"px, 0px, 0px)";
                    }
                    if(this.screenX<screenX){
                        this.x = this.windowX+x;
                        this.$els.cont.style.webkitTransform = 
                            "translate3d("+(-this.windowX-x) +"px, 0px, 0px)";
                    }
                }
                this.move = true;
            },
            _up:function(){
                this.trans()
                this.down = false;
            },
            // 计算cont的位置
            trans:function(){
                let width = document.documentElement.clientWidth;
                let w = document.documentElement.clientWidth;
                let x = this.x-this.windowX;
                if(x>=0){
                    if(x>width/2&&this.i!=this.data.length-1){
                        this.i++;
                    }
                }else {
                    if(-x>width/2&&this.i!=0){
                        this.i--;
                    }
                }
                this.do()
            },
            do:function(){
                let width = document.documentElement.clientWidth;
                this.$els.cont.style.webkitTransition = 
                    "all 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96)";
                this.windowX = this.i*width;
                this.$els.cont.style.webkitTransform = 
                    "translate3d(-"+(this.windowX) +"px, 0px, 0px)";
            },
            // 获取浏览器的长宽
            _window:function(){
                if(!document.getElementsByClassName("gallery")[0]){
                    return
                }else {
                    let that = this;
                    let img = this.$els.cont.getElementsByClassName("img");
                    let width = document.body.offsetWidth;
                    let height = document.documentElement.clientHeight;
                    let widths = this.$els.box.style.width;
                    this.$els.cont.style.width = width*img.length+ "px";
                    for(var i =0 ;i<img.length;i++){
                        img[i].style.width = width +"px";
                        img[i].style.height = height +"px";
                    }
                    window.onresize=function(){
                        that._window()
                    }
                    this.do()
                }
            },
            btn:function(index){
                this.i = index;
                this.do()
            }
        },
        ready:function(){
            this._window()
        }
    }
</script>
<style lang="less">
    .gallery{
            position: relative;
            width: 100%;
            height: 100%;
        overflow: hidden;
        .move{
            cursor:move;
            transition: 
                all 0s ;
        }
        .box {
            overflow: hidden;
            .content {
                position: absolute;
                height: 100%;
                h1 {
                    font-size:3em;
                }
                .img {
                    float:left;
                    position: relative;
                    background-position: bottom;
                    background-size: cover;
                }
            }
            .btn{
                display: inline-block;
                position: fixed;
                left:50%;
                margin-left: -45px;
                bottom:0;
                width:90px;
                height:50px;
                ul {
                    li.on:before {
                        transform: scale(1);
                    }
                    li:before {
                        transition:all  0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
                        transform: scale(0);
                        display: block;
                        content:"";
                        width:10px;
                        height:10px;
                        margin: 4px auto 0 auto;
                        border-radius:10px;
                        background: #fff;
                    }
                    li {
                        cursor: pointer;
                        transition: 0.5s all;
                        margin:4px;
                        list-style-type: none;
                        float:left;
                        width: 18px;
                        height: 18px;
                        border-radius: 18px;
                        border: 2px solid #fff;
                        box-shadow: 0 0 15px #000;
                    }
                }
            }
        }
    }
</style>