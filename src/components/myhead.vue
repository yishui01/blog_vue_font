<template>
    <div>
        <el-row class="header">
            <el-col :span="13" :offset="5" class="headCol">
                <div style="display: flex;">
                    <img src="../assets/logo.png" class="logo" @click="$to('/')">
                    <div @click="$to(item.url)"
                         class="navItem"
                         v-for="(item, index) in nav" :key="index"
                         :class="{active:$route.path==item.url}">
                        {{item.name}}
                    </div>
                </div>
            </el-col>
            <el-col :span="2" class="headCol">
                <span class="loginSpan" @click="$to('/login')">登录</span>
                /
                <span class="loginSpan" @click="$to('/register')">注册</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "myhead",
        data() {
            return {
                nav: [
                    {name: '文章', url: '/', icon: 'ios-book'},
                    {name: '代码', url: '/blog', icon: 'ios-book'},
                    {name: '算法', url: '/algorithm', icon: 'logo-octocat'},
                    {name: '视频', url: '/video', icon: 'md-beer'},
                    {name: '友链', url: '/link', icon: 'md-beer'},
                    {name: '关于我', url: '/about', icon: 'md-beer'},
                    {name: '留言', url: '/message', icon: 'md-chatboxes'},
                ]
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 60px;
        padding-top: 9px;
    }

    .headCol {
        height: 42px;
        line-height: 42px;
    }

    .logo {
        width: 100px;
        height: 42px;
        margin-right: 10px;
        cursor: pointer;
    }

    .navItem {
        cursor: pointer;
        width: 100px;
        text-align: center;
    }

    .active {
        background-color: yellow;
    }

    .loginSpan {
        cursor: pointer;
    }
</style>