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
                    <img src="https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/smilies/yinxian.png">
                    这里是灌水的地方，请大家随意
                    <img src="https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/smilies/huaji.png">

                </h3>
                <reply @submit="addReply"/>
                <div class="commTop">
                    <span class="countsText">1716 Comments</span>
                </div>
                <div>
                    <comment @reply="childReply" :comments="comments"></comment>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import comment from '@/components/Comment'
    import reply from '@/components/Reply'
    import {transOwO} from "../../../utils/comment";

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
            //发表评论
            addReply(obj) {
                let arr = this.comments
                arr.unshift({id: (new Date()).getTime(), content: this.transCom(obj.content)})
                this.comments = arr
            },
            //评论回复
            childReply(obj) {
                let arr = this.comments
                this.comments = this.addChildReply(arr, obj)
            },
            addChildReply(comments, obj) {
                comments.forEach((item, index) => {
                    if (item.id == obj.pid) {
                        if (item.children) {
                            comments[index]['children'].push({
                                id: (new Date()).getTime(),
                                content: this.transCom(obj.content)
                            })
                        } else {
                            comments[index]['children'] = [{
                                id: (new Date()).getTime(),
                                content: this.transCom(obj.content)
                            }]
                        }
                        return
                    }
                    if (item.children) {
                        this.addChildReply(item.children, obj)
                    }
                })
                this.$store.commit('REPCLICK', -1) //关闭回复框
                return comments
            },
            //拉取评论列表
            getComment() {
                var data = [
                    {
                        id: '1', content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？' +
                            '2365858148，感激不尽呀~,感谢地心引力，让我碰到你', children: [
                            {
                                id: '4',
                                content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~,感谢地心引力，让我碰到你',
                                children: []
                            },
                            {
                                id: '5',
                                content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~',
                                children: []
                            },
                            {
                                id: '6',
                                content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~',
                                children: []
                            }
                        ]
                    },
                    {id: '2', content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~', children: []},
                    {
                        id: '3', content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~', children: [
                            {
                                id: '7',
                                content: '\':hehe:\' 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~,感谢地心引力，让我碰到你'
                            },
                            {
                                id: '8',
                                content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~',
                                children: []
                            },
                            {
                                id: '9',
                                content: ':hehe: 想加大群结果点错了申请了小群:han:，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~',
                                children: []
                            }
                        ]
                    }
                ]
                return this.transCom(data)
            },
            //循环替换评论中的字符串为表情
            transCom(data) {
                if (data instanceof Array) {
                    data.forEach((item, index) => {
                        data[index].content = transOwO(item.content, this.$owo)
                        //子评论dfs
                        if (item.children && item.children.length > 0) {
                            this.transCom(item.children)
                        }
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

    .countsText {
        color: #2a2e2e;
        font-size: 15px;
        font-weight: 700;
    }

    img {
        vertical-align: middle
    }

    .messageContent {
        width: 75%;
        margin-left: 5%;
        margin-top: 20px;
        margin-bottom: 100px;
    }

    .commentMain {
        margin: 0 auto;
        max-width: 940px;
        min-height: 800px;
        padding: 30px 10px 200px 10px;
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
