<template>
    <div class="fslide">
        <el-row class="header fixed-top" :class="{topC:topC == 1}">
            <el-col :xs="{span:24}" :sm="{offset:5,span:15}">
                <div class="navDiv pcDiv">
                    <span class="title" @click="$to('/')">
                        我看看不到
                    </span>
                    <span style="float: right;">
                        <span @click="$to(item.url)"
                              class="navItem"
                              v-for="(item, index) in nav" :key="index"
                              :class="{active:$route.path==item.url}">
                        {{item.name}}
                        </span>
                        <!-- <span class="loginSpan navItem" @click="showLogin">登录</span>-->
                     </span>
                </div>

                <!--手机菜单-->
                <el-collapse accordion class="phoneDiv" v-model="activeNames">
                    <div class="mTitle" @click="$to('/')">我看看不到
                    </div>
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div class="navBtn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </template>
                        <div class="mPanel">
                            <div @click="goUrl(item.url)" class="panelItem" v-for="(item, index) in nav" :key="index"
                                 :class="{active:$route.path==item.url}">
                                {{item.name}}
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>


        <!-----------------------------------------遮罩、弹框---------------------------------------------------->
        <div v-if="divVis" @click="hideLogin" class="mask"></div>

        <div v-show="divVis" class="loginDiv" :class="{showDia:winVis}">
            <div class="card" id="loginDiv" @mousedown="down" @mouseup="up">
                <div class="front">
                    <div style="width: 100%;text-align: center;">
                        <img src="../assets/login.png" draggable="false">
                    </div>
                    <div @click="loginClick" class="descText">
                        {{loginText}}
                    </div>
                </div>
                <div class="back">
                    <img src="../assets/hello.jpg" draggable="false" class="helloImg">
                    <div class="barP">
                        <div class="bar"></div>
                        <div class="barText">请选择快捷登录方式</div>
                        <div class="bar"></div>
                    </div>
                    <div>
                          <span class="iconSpan">
                              <div>
                                  <svg class="icon svg-icon" aria-hidden="true">
                                      <use xlink:href="#icon-github"></use>
                                  </svg>
                              </div>
                              <span class="ltxt">Github</span>
                          </span>
                        <span class="iconSpan">
                              <div>
                               <svg class="icon svg-icon" aria-hidden="true">
                                      <use xlink:href="#icon-QQ"></use>
                               </svg>
                               </div>
                              <span class="ltxt">QQ登录</span>
                          </span>
                        <span class="iconSpan">
                              <div>
                               <svg class="icon svg-icon" aria-hidden="true">
                                      <use xlink:href="#icon-weibo"></use>
                               </svg>
                               </div>
                              <span class="ltxt">微博登录</span>
                          </span>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import '../assets/myfont/iconfont.css'
    import '../assets/myfont/iconfont.js'


    export default {
        name: "myhead",
        data() {
            return {
                activeNames: '0',
                activeName: '1',
                topC: 0,
                divVis: false,
                winVis: false,
                lockScroll: false,
                loginText: '不信你翻转试试',
                step: 0,
                switch: false,
                startDeg: 0,
                startX: 0,
                textMap: [
                    '你以为这样就能翻转了吗？',
                    '别点了，我是不会翻的',
                    '大哥，谁告诉你翻转是靠点的',
                    '用手翻啊大哥',
                    '让我抽根烟压压惊',
                    '孩子别登了，快写作业去吧',
                ],
                nav: [
                    {name: '文章', url: '/'},
                    {name: '闲聊', url: '/chat'},
                    {name: '友链', url: '/link'},
                    //{name: '关于', url: '/about'},
                    {name: '留言', url: '/message'},
                ]
            }
        },
        mounted() {
            window.addEventListener('scroll', this.appScroll)
        },
        methods: {
            //导航栏背景变色
            // appScroll() {
            //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            //     if (scrollTop > 100) {
            //         this.topC = 1
            //     } else {
            //         this.topC = 0
            //     }
            // },
            goUrl(url) {
                this.activeNames = 0
                this.$to(url)
            },
            //登录弹出框时，禁止滚动
            showLogin() {
                this.divVis = true
                setTimeout(() => {
                    this.winVis = true  //这里要等divVis把元素显示出来后，再挂另一个class，trasition才会触发，一次性挂上去直接秒出不会动画
                }, 50)
                //阻止浏览器事件
                document.addEventListener('DOMMouseScroll', this.fixScroll, {passive: false});
                document.addEventListener('mousewheel', this.fixScroll, {passive: false});
            },
            hideLogin() {
                this.winVis = false
                setTimeout(() => {
                    this.divVis = false
                }, 120)
                document.removeEventListener('DOMMouseScroll', this.fixScroll, {passive: false});
                document.removeEventListener('mousewheel', this.fixScroll, {passive: false});

            },
            fixScroll(evt) {
                evt = evt || window.event;
                if (evt.preventDefault) {
                    // Firefox
                    evt.preventDefault();
                    evt.stopPropagation();
                } else {
                    // IE
                    evt.cancelBubble = true;
                    evt.returnValue = false;
                }
                return false;
            },

            //点击文字变化
            loginClick() {
                this.loginText = this.textMap[this.step]
                this.step++
            },
            //down、move、up为翻转逻辑
            down(event) {
                this.switch = true
                this.startX = event.clientX
                var element = event.currentTarget;
                element.style.transition = "0s";

                var text = element.style.transform
                var deg = text.match(/\d+/g)
                if (!deg) {
                    deg = 0
                } else {
                    deg = deg[0]
                }
                this.startDeg = deg

                document.addEventListener('mousemove', this.move, {passive: false});
                document.addEventListener('mouseup', this.up, {passive: false});

            },
            move(event) {
                if (this.switch) {
                    var element = document.getElementById('loginDiv')
                    var deg = event.clientX - this.startX
                    element.style.transform = "rotateY(" + (Number(this.startDeg) + deg) + "deg)";
                }
            },
            up() {
                this.switch = false
                document.removeEventListener('mousemove', this.move, {passive: false});
                document.removeEventListener('mouseup', this.up, {passive: false});
                var element = document.getElementById('loginDiv')
                element.style.transition = ".5s";

                var text = element.style.transform
                var deg = text.match(/[-]?\d+/g)
                if (!deg) {
                    deg = 0
                } else {
                    deg = deg[0]
                }
                deg = Number(deg)
                var diff = deg % 180
                if (diff < 0) {
                    if (diff <= -90) {
                        element.style.transform = "rotateY(" + (deg - 180 - diff) + "deg)";
                    } else {
                        element.style.transform = "rotateY(" + (deg - diff) + "deg)";
                    }
                } else {
                    if (diff >= 90) {
                        element.style.transform = "rotateY(" + (deg + 180 - diff) + "deg)";
                    } else {
                        element.style.transform = "rotateY(" + (deg - diff) + "deg)";
                    }
                }

            }
        }
    }
</script>

<style scoped>
    .topC {
        /*background: rgba(105, 142, 206, 1) !important;*/
        height: 52px !important;
    }

    .topC .navDiv {
        padding-top: 7px;
    }

    .navDiv {
        transition: 0.6s;
        padding-top: 12px;
    }

    .header {
        transition: 0.6s;
        height: 65px;
        padding-top: 10px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
        font-weight: 300;
        background-color: transparent;
        font-size: .875rem;
        color: #fff;
    }

    .fixed-top {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 500;
    }

    .title {
        cursor: pointer;
        padding: 12px 8px 18px;
        text-align: center;
        line-height: 13px;
        font-weight: bolder;
        font-size: 1.25rem;
        white-space: nowrap;
        border-radius: 3px;
    }

    .navItem {
        cursor: pointer;
        padding: 12px 20px;
        text-align: center;
        border-radius: 3px;
    }


    .title:hover, .navItem:hover {
        background-color: rgba(0, 0, 0, .1);
    }

    .active {
        /* background-color: yellow;*/
    }

    /******以下为遮罩弹框*********/
    .mask {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        opacity: .5;
        background: #000;
        left: 0;
        top: 0;
    }

    .descText {
        cursor: pointer;
        text-align: center;
        font-size: 30px;
        font-weight: 900;
    }

    .helloImg {
        box-shadow: 0 6px 6px -6px #828282;
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .barP {
        padding: 10px;
        margin-bottom: 20px;
    }

    .bar {
        display: inline-block;
        height: 1px;
        width: 90px;
        background: #f5f5f5;
    }

    .barText {
        display: inline-block;
        vertical-align: middle;
        margin: 5px 10px 0;
    }

    .ltxt {
        font-size: 12px;
        color: #666;
    }

    .iconSpan {
        display: inline-block;
        padding: 0 30px;
        opacity: .6;
        cursor: pointer;
    }

    .iconSpan:hover {
        opacity: 1;
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .svg-icon {
        /* 通过设置 font-size 来改变图标大小 */
        font-size: 55px;
        /* 图标和文字相邻时，垂直对齐 */
        vertical-align: -0.15em;
        /* 通过设置 color 来改变 SVG 的颜色/fill */
        fill: currentColor;
        /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
            normalize.css 中也包含这行 */
        overflow: hidden;
        margin-bottom: 7px;
    }


    .loginSpan {
        cursor: pointer;
    }

    .loginDiv {
        position: fixed;

        top: 20%;
        left: 40%;
        width: 400px;
        height: 525px;
        border-radius: 5px;
        text-align: center;
        perspective: 1000px;
        z-index: 1000;

        -webkit-transform: scale(.7);
        -moz-transform: scale(.7);
        -ms-transform: scale(.7);
        transform: scale(.7);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: transform .3s, opacity .3s;
        -moz-transition: transform .3s, opacity .3s;
        transition: transform .3s, opacity .3s;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    .showDia {
        visibility: visible;
        opacity: 1;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    .card {
        width: 100%;
        height: 100%;
        background-color: #fff;
        transition: 2s;
        transform-style: preserve-3d;
        border-radius: 5px;
    }

    .front,
    .back {
        background-color: #fff;
        width: 100%;
        height: 100%;
        transition: 1s;
        position: absolute;
        backface-visibility: hidden;
        border-radius: 5px;
    }

    .back {
        transform: rotateY(180deg);
    }

    .phoneDiv {
        display: none;
    }

    .phoneDiv span {
        background: #fff;
        margin: 4px 2.5px;
        display: table;
        width: 25px;
        height: 3px;
        border-radius: 18%;
    }

    .mPanel {
        z-index: 2000;
        background-image: url('https://file.wuxxin.com/testupload/3cfaa1b49f760f4dfc548ad683407335.jpg');
        background-size: cover;
        color: white;
        text-align: center;
    }

    .panelItem {
        padding: 10px;
        background: rgba(101, 157, 241, 0.8);
        font-size: 16px;
        font-weight: 800
    }

    .navBtn {
        background: #5587d2;
        position: absolute;
        right: 10px;
        top: 15px;
        border-radius: 5px;
        z-index: 999;
        padding: 6px 6px;
    }

    .mTitle {
        width: 100px;
        position: absolute;
        font-size: 18px;
        font-weight: 700;
        padding-left: 10px;
        padding-top: 10px;
        height: 50px;
    }

    @media screen and (max-width: 768px) {
        .pcDiv {
            display: none
        }

        .phoneDiv {
            display: block;
            width: 100%;

            top: 9px;
            z-index: 20;
            left: 20px
        }

    }

</style>
<style>
    .el-collapse-item {
        background: transparent !important;
        border: none;
    }

    .el-collapse-item__wrap {
        background: transparent !important;
        border: none;
    }

    .el-collapse-item__header {
        background: transparent !important;
        border: none;
    }

    .el-collapse {
        border: none;
    }
</style>
