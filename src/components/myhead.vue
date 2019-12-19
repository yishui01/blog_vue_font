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
                    <span class="loginSpan navItem" @click="$to('/login')">登录</span>
                     </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "myhead",
        data() {
            return {
                topC: 0,
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
        z-index: 1030;
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
</style>