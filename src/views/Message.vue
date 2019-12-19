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
                <h3>你想说些什么呢？就在这里回复吧~ ٩(ˊᗜˋ*)و </h3>
                <h3>欢迎灌水，来者不拒(☆ω☆)</h3>

                <div class="commTop">
                    <span style="color: #2a2e2e;font-size:15px;font-weight: 700;">1716 Comments</span>
                </div>
                <div>
                    <comment></comment>
                    <comment></comment>
                    <comment></comment>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import comment from '@/components/Comment'

    export default {
        components: {
            comment
        },
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
    .avatarImg {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }

    * {
        box-sizing: border-box;
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
