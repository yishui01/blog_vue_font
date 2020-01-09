<template>
    <div class="messageContent">
        <div class="messageContainer">
            <div class="messageDiv">
                <img class="messageImg" src="https://yuncaioo.com/wp-content/themes/c7v5/img/headerbg.jpg">
                <p class="commTitle">
                    留言
                </p>
            </div>

            <!-- 评论 -->
            <div class="commentMain">
                <h3>
                    <img src="https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/smilies/huaji.png">
                    欢迎灌水，来者不拒(☆ω☆)
                    <img src="https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/smilies/yinxian.png">

                </h3>
                <reply @submit="addReply"/>
                <div class="commTop">
                    <span style="color: #2a2e2e;font-size:15px;font-weight: 700;">1716 Comments</span>
                </div>
                <div>
                    <comment v-for="(item) in comments" :key="item.id" :content="item.content"></comment>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import comment from '@/components/Comment'
    import reply from '@/components/Reply'
    import {transOwO} from "../utils/comment";

    export default {
        components: {
            comment,
            reply
        },

        data() {
            return {
                loading: true,
                comments: [],
                pageModel: {
                    page: 1,
                    all: 1,
                    sumCount: 100
                }
            }
        },
        computed: {},
        created() {
            this.comments = this.getComment()
        },
        methods: {
            addReply(content) {
                let arr = this.comments
                arr.unshift({id: (new Date()).getTime(), content: this.transCom(content)})
                this.comments = arr
            },
            getComment() {
                var data = [
                    {id: '1', content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~'},
                    {id: '2', content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~'},
                    {id: '3', content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~'}
                ]
                return this.transCom(data)
            },
            //循环替换data中的表情
            transCom(data) {
                if (data instanceof Array) {
                    data.forEach((item, index) => {
                        data[index].content = transOwO(item.content, this.$owo)
                    })
                } else {
                    data = transOwO(data, this.$owo)
                }
                return data
            }
        }
    }
</script>
<style scoped>

    img {
        vertical-align: middle
    }

    .messageContent {
        max-width: 100%;
        margin-top: 20px;
    }

    .commentMain {
        margin: 0 auto;
        max-width: 940px;
        min-height: 800px;
        padding: 30px 10px 50px 10px;
    }

    .commentMain h3 {
        font-weight: 500;
        text-align: center;
        font-size: 26px;
        padding: 15px 0;
    }

    a {
        text-decoration: none;
    }

    .messageContainer {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
    }

    .messageDiv {
        width: 100%;
        height: 400px;
        position: relative;
    }

    .messageImg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .commTitle {
        position: absolute;
        top: 35%;
        left: 45%;
        color: white;
        margin: 0;
        font-size: 56px;
        font-weight: 700;
    }

    .commTop {
        margin: 30px 0 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e7e9ee;
        text-align: left;
    }


</style>
