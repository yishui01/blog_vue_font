<template>
    <div class="contianer">
        <el-row>
            <el-col :span="4">
                <nav class="colorNav">
                    <ul class="colorUl">
                        <li class="sc-gqjmRU fXyiBz" color="#75878a" title="即各种颜色掺入黑色后的颜色"
                            style="border-top-color: rgb(117, 135, 138);">
                            <div class="line1">
                                <h2 class="name"><span class="seq">1</span><span class="txt">苍色</span></h2></div>
                            <div class="line2"><p class="hex">#75878a</p>
                                <div class="rgb"><i class="line r" percent="117"></i><i class="line g"
                                                                                        percent="135"></i><i
                                        class="line b" percent="138"></i></div>
                                <p class="pinyin">cāng sè</p></div>
                        </li>
                    </ul>
                </nav>
            </el-col>
            <el-col :span="16" style="position: relative;padding-bottom: 280px;">
                <myhead></myhead>
                <div>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive" class="slide"/>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive" class="slide"/>
                </div>
                <myfoot class="footer"></myfoot>
            </el-col>
            <el-col :span="4">
                <el-button @click="changeColor">changeColor</el-button>

            </el-col>
        </el-row>
        <div id="player" class="aplayer" style="width: 24%;"></div>
    </div>
</template>
<script>
    import myhead from '@/components/myhead'
    import myfoot from '@/components/myfoot'
    import 'aplayer/dist/APlayer.min.css';
    import APlayer from 'aplayer';

    export default {
        name: "app",
        components: {
            myhead,
            myfoot
        },
        mounted() {
            document.querySelector('body').setAttribute('style', 'background-color:#75878a;')
            // Since `APlayer2` and `APlayer3` are not the same, the `mutex` option is useless
            new APlayer({
                element: document.getElementById('player'),
                mutex: true,
                audio: [
                    {
                        title: '发如雪',
                        author: '周杰伦',
                        fixed:true,
                        mini:true,
                        url: 'https://img.smartnail.cn/music/mp3/faruxue.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
                    },
                    {
                        title: '夜曲',
                        author: '周杰伦',
                        fixed:true,
                        mini:true,
                        url: 'https://img.smartnail.cn/music/mp3/faruxue.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
                    },
                    {
                        title: '爱在西元前',
                        author: '周杰伦',
                        fixed:true,
                        mini:true,
                        url: 'https://img.smartnail.cn/music/mp3/aizaixiyuanqian.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',

                    },
                    {
                        title: '数码宝贝-Butter-Fly',
                        author: '和田光司',
                        fixed:true,
                        mini:true,
                        url: 'https://img.smartnail.cn/music/mp3/Butter-Fly.mp3',
                        pic: 'http://p1.music.126.net/o8ZfncjFF5frq8Q8iJJ9QQ==/2321069046256264.jpg?param=130y130',

                    },
                    {
                        title: '数码宝贝-Break-Up',
                        author: '宮崎歩',
                        fixed:true,
                        mini:true,
                        url: 'https://img.smartnail.cn/music/mp3/breakup.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000dKeQY0rbJ8T.jpg?max_age=2592000',

                    },

                ]
            })

        },
        methods: {
            changeColor() {
                document.querySelector('body').setAttribute('style', 'background-color:#395260;')
            }
        },
        data() {
            return {}
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-image: url('https://works.yangerxiao.com/chinese-colors/00746b7e611ff49d789bc56df95eba4b.png');
        transition: background-color 1.6s ease 0s;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }

    /***去掉滚动条但不影响滚动***/
    /**::-webkit-scrollbar {*/
    /*    display: none;*/
    /*}*/

    .footer {
        background: black;
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .slide {
        animation: slide 1s;
    }

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /******左边栏*****/
    .colorNav {
        position: relative;
        height: 100vh;
        width: 15.8rem;
        margin-right: 1.5rem;
        vertical-align: baseline;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        font: inherit;
        overflow-y: scroll;
    }

    .colorUl {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    .colorUl li {
        color: rgb(255, 255, 255);
        display: flex;
        height: 200px;
        border: 1px solid black;
        flex-direction: row;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        cursor: pointer;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        align-self: flex-start;
        border-top: 0.4rem solid;
        padding: 0.5rem 0.2rem 0.4rem;
        margin: 0.4rem;
        transition: all 0.5s ease 0s;
    }
</style>
