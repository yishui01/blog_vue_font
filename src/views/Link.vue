<template>
    <div class="content">
        <div class="linkContainer">
            <div class="linkDiv">
                <img class="linkImg" src="https://app.smartnail.cn/lt/family.jpg">
            </div>
            <div class="banner">
                <div class="bg"></div>
            </div>
            <!-- 友情连接 -->
            <div class="main">
                <h3 style="display: inline-block">这里是一群可爱的小伙伴们，欢迎交换友链 ٩(ˊᗜˋ*)و </h3>
                <el-popover
                        style="position: relative;left: 50px"
                        placement="top-start"
                        title="希望添加友链的小伙伴按这个格式写在留言区，我都会看的～"
                        trigger="hover"
                        content="格式示例: 名称: 九歌 链接: https://xxx  头像: https://xxx 简介: 老夫写代码就是复制粘贴一把梭">
                    <el-link slot="reference" type="success">关于友链</el-link>
                </el-popover>
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12" :md="8" v-for="(item, index) in links" :key="index"
                            class="animate3 mycol">
                        <a :href="item.url" target="_blank" class="link-box animate3">
                            <div class="imgbox">
                                <img :src="item.img">
                            </div>
                            <div class="desc">
                                <h4>{{item.title}}</h4>
                                <p>{{item.desc}}</p>
                            </div>
                        </a>
                    </el-col>
                </el-row>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: true,
                links: [
                    {
                        url: 'http://www.golang365.com/#/link',
                        img: 'https://avatars1.githubusercontent.com/u/8437554?s=460&v=4',
                        title: '水墨寒',
                        desc: '90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。'
                    },
                    {
                        url: 'http://www.golang365.com/#/link',
                        img: 'https://avatars1.githubusercontent.com/u/8437554?s=460&v=4',
                        title: '水墨寒',
                        desc: '90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。'
                    },
                    {
                        url: 'http://www.golang365.com/#/link',
                        img: 'https://avatars1.githubusercontent.com/u/8437554?s=460&v=4',
                        title: '水墨寒',
                        desc: '90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。'
                    },
                    {
                        url: 'http://www.golang365.com/#/link',
                        img: 'https://avatars1.githubusercontent.com/u/8437554?s=460&v=4',
                        title: '水墨寒',
                        desc: '90后双鱼座普通逗比男青年，目前专注于前端与PHP技术的学习。'
                    }
                ],
                pageModel: {
                    page: 1,
                    all: 1,
                    sumCount: 100
                }
            }
        },
        computed: {},
        created() {
            this.getLink()
        },
        methods: {
            // 获取留言 all=1请求所有，不加的话请求的是有效期内的
            getLink() {

            }
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    .content {
        max-width: 100%;
        margin-top: 20px;
    }

    .main {
        margin: 0 auto;
        max-width: 940px;
        min-height: 800px;
        padding: 30px 10px 50px 10px;
    }

    .main h3 {
        font-weight: 500;
        text-align: center;
        font-size: 26px;
        padding: 15px 0;
    }

    a {
        text-decoration: none;
    }

    .animate3 {
        transition: transform .26s, -webkit-transform .26s;
    }

    .linkContainer {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
    }

    .linkDiv {
        width: 100%;
        height: 400px;
    }

    .linkImg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .link-box {
        text-align: left;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        height: 120px;
        border: 1px solid #dedede;
        background: #fff;
        padding: 8px 20px;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        z-index: 10;
        -webkit-box-shadow: 2px -5px 15px #e8e8e8;
        box-shadow: 2px -5px 15px #e8e8e8;
    }

    .link-box .imgbox {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }

    .link-box .imgbox img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .link-box .desc {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: hidden;
        color: #475558;
        font-size: 14px;
    }

    .link-box .desc h4 {
        margin: 5px 0;
    }

    .link-box .desc p {
        height: 62px;
    }

    .mycol {
        position: relative;
        margin: 20px 0;
    }

    .mycol:after, .mycol:before {
        content: "";
        display: inline-block;
        border: .5px solid #dedede;
        background: #fff;
        position: absolute;
        height: 5px;
    }

    .mycol:before {
        left: 14px;
        right: 14px;
        bottom: -4px;
        z-index: 9;
    }

    .mycol:after {
        right: 18px;
        left: 18px;
        bottom: -8px;
        -webkit-box-shadow: 2px 2px 10px #e4e4e4;
        box-shadow: 2px 2px 10px #e4e4e4;
    }

    .mycol:hover .link-box {
        -webkit-transform: translateY(15px);
        transform: translateY(15px);
        background: #ecf0f1;
    }

</style>
