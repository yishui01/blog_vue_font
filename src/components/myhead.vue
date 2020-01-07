<template>
    <div>
        <el-row class="header fixed-top" :class="{topC:topC == 1}">
            <el-col :offset="5" :span="15">
                <div class="navDiv">
                    <span class="title" @click="$to('/')">
                        不要怂博客
                    </span>
                    <span style="float: right;">
                        <span @click="$to(item.url)"
                              class="navItem"
                              v-for="(item, index) in nav" :key="index"
                              :class="{active:$route.path==item.url}">
                        {{item.name}}
                        </span>
                    <span class="loginSpan navItem" @click="showLogin">登录</span>
                     </span>
                </div>
            </el-col>
        </el-row>

        <div v-if="dialogVisible"
             @click="hideLogin"
             style="width: 100%;
    height: 100%;
    position: fixed;
     z-index: 999;
    opacity: .5;
    background: #000;
    left: 0;
    top: 0;">
        </div>
        <div v-if="dialogVisible"
             id="loginDiv"
             class="loginDiv" :class="{g:dialogVisibles}">
            asdasdasddsa
        </div>

        <!--        <el-dialog-->
        <!--                title="第三方登录"-->
        <!--                :lock-scroll="lockScroll"-->
        <!--                :visible.sync="dialogVisible"-->
        <!--                width="30%">-->
        <!--            <div>-->
        <!--                <div style="-->
        <!--                        cursor: pointer;-->
        <!--                        margin-right: 20px;-->
        <!--                        display:inline-block;-->
        <!--                        border-radius: 5px;-->
        <!--                        text-align:center;color:white;padding:10px 10px;-->
        <!--                        width: 200px;background: #3d4852;">Github-->
        <!--                    登录-->
        <!--                </div>-->
        <!--                <div style="-->
        <!--                        cursor: pointer;-->
        <!--                        display:inline-block;-->
        <!--                        border-radius: 5px;-->
        <!--                        text-align:center;color:white;padding:10px 10px;-->
        <!--                        width: 200px;background: #3d4852;">Github-->
        <!--                    登录-->
        <!--                </div>-->
        <!--            </div>-->

        <!--        </el-dialog>-->
    </div>
</template>

<script>
    export default {
        name: "myhead",
        data() {
            return {
                topC: 0,
                dialogVisibles: false,
                dialogVisible: false,
                lockScroll: false,
                nav: [
                    {name: '文章', url: '/', icon: 'ios-book'},
                    {name: '视频', url: '/video', icon: 'md-beer'},
                    {name: '友链', url: '/link', icon: 'md-beer'},
                    {name: '关于我', url: '/about', icon: 'md-beer'},
                    {name: '留言', url: '/message', icon: 'md-chatboxes'},
                ]
            }
        },
        mounted() {
            window.addEventListener('scroll', this.appScroll)
        },
        methods: {
            showLogin() {
                this.dialogVisible = true
                //阻止浏览器事件
                document.addEventListener('DOMMouseScroll', this.fixScroll, {passive: false});
                document.addEventListener('mousewheel', this.fixScroll, {passive: false});
            },
            hideLogin() {
                this.dialogVisible = false
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
            appScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop > 100) {
                    this.topC = 1
                } else {
                    this.topC = 0
                }
            },
        }
    }
</script>

<style scoped>
    .topC {
        background: rgba(105, 142, 206, 1) !important;
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
        position: fixed;
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

    .loginSpan {
        cursor: pointer;
    }

    @keyframes mymove {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(2);
        }
    }

    @-webkit-keyframes mymove /* Safari 与 Chrome */
    {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(2);
        }
    }

    .loginDiv {
        position: fixed;
        z-index: 1000;
        opacity: 1;
        top: 20%;
        left: 40%;
        color: white;
        width: 200px;
        height: 300px;
        border: 1px solid white;
        transition: .5s;
        animation: mymove .3s;
        -webkit-animation: mymove .3s; /* Safari 和 Chrome */
    }

    .g {
        transform: rotate(50deg);
        width: 400px;
    }

</style>