<template>
    <div class="contianer">
        <el-row>
            <el-col :span="4">
                <nav class="colorNav">
                    <ul class="colorUl">
                        <li class="curr sc-gqjmRU fXyiBz" color="#75878a" title="即各种颜色掺入黑色后的颜色"
                            style="border-top-color: rgb(117, 135, 138);">
                            <div class="line1">
                                <div class="cmyk">
                                    <i class="circle c">
                                        <div class="sc-gZMcBi fGWcKV">
                                            <div class="percent sc-iwsKbI eImMjg">
                                                <svg viewBox="0 0 36 36" class="circular-chart orange">
                                                    <path class="circle-bg"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                                    <path class="circle" stroke-dasharray="40, 100"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                          style="stroke: rgba(102, 87, 87, 0.96);"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </i>
                                    <i class="circle y">
                                        <div class="sc-gZMcBi fGWcKV">
                                            <div class="percent sc-iwsKbI eImMjg">
                                                <svg viewBox="0 0 36 36" class="circular-chart orange">
                                                    <path class="circle-bg"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                                    <path class="circle" stroke-dasharray="20, 100"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                          style="stroke: rgba(102, 87, 87, 0.96);"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </i>
                                    <i class="circle y">
                                        <div class="sc-gZMcBi fGWcKV">
                                            <div class="percent sc-iwsKbI eImMjg">
                                                <svg viewBox="0 0 36 36" class="circular-chart orange">
                                                    <path class="circle-bg"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                                    <path class="circle" stroke-dasharray="20, 100"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                          style="stroke: rgba(102, 87, 87, 0.96);"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </i>
                                    <i class="circle y">
                                        <div class="sc-gZMcBi fGWcKV">
                                            <div class="percent sc-iwsKbI eImMjg">
                                                <svg viewBox="0 0 36 36" class="circular-chart orange">
                                                    <path class="circle-bg"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                                    <path class="circle" stroke-dasharray="20, 100"
                                                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                          style="stroke: rgba(102, 87, 87, 0.96);"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </i>
                                </div>
                                <h2 class="name"><span class="seq">1</span><span class="txt">苍色</span></h2></div>
                            <div class="line2"><p class="hex">#75878a</p>
                                <div class="rgb">
                                    <i class="line r" percent="117"></i>
                                    <i class="line g" percent="135"></i>
                                    <i class="line b" percent="138"></i>
                                </div>
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
        <div id="player" class="aplayer" style="width: 20%;"></div>
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
                listFolded: true,
                fixed: true,
                audio: [
                    {
                        title: '发如雪',
                        author: '周杰伦',
                        fixed: true,
                        mini: true,
                        url: 'https://img.smartnail.cn/music/mp3/faruxue.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
                    },
                    {
                        title: '夜曲',
                        author: '周杰伦',
                        fixed: true,
                        mini: true,
                        url: 'https://img.smartnail.cn/music/mp3/faruxue.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
                    },
                    {
                        title: '爱在西元前',
                        author: '周杰伦',
                        fixed: true,
                        mini: true,
                        url: 'https://img.smartnail.cn/music/mp3/aizaixiyuanqian.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',

                    },
                    {
                        title: '数码宝贝-Butter-Fly',
                        author: '和田光司',
                        fixed: true,
                        mini: true,
                        url: 'https://img.smartnail.cn/music/mp3/Butter-Fly.mp3',
                        pic: 'http://p1.music.126.net/o8ZfncjFF5frq8Q8iJJ9QQ==/2321069046256264.jpg?param=130y130',

                    },
                    {
                        title: '数码宝贝-Break-Up',
                        author: '宮崎歩',
                        fixed: true,
                        mini: true,
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
    .fXyiBz.curr {
        box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 4px;
        text-shadow: black 0px 0px 10px;
    }

    .fXyiBz {
        color: rgb(255, 255, 255);
        display: flex;
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

    .fXyiBz .line1 .cmyk {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .fXyiBz .line1 .cmyk .circle:not(:last-child) {
        margin-bottom: 0.2rem;
    }

    .line2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bold;
        width: 100%;
        box-sizing: border-box;
    }

    .pinyin {
        text-transform: capitalize;
    }

    .fXyiBz .line1 {
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-bottom: 0.6rem;
        min-height: 6.4rem;
    }

    .fGWcKV {
        width: 1.6rem;
        height: 2.4rem;
        padding: 0;
        background: transparent;
    }

    .eImMjg {
        margin-bottom: 0.2rem;
        padding: 0;
    }

    .eImMjg.percent .circular-chart {
        min-width: unset;
        overflow: unset;
    }

    .eImMjg .circular-chart {
        display: block;
        max-width: 2.4rem;
    }

    .eImMjg.percent .circular-chart .circle-bg {
        stroke: none;
    }

    .eImMjg .circular-chart .circle-bg {
        fill: rgba(255, 255, 255, 0.8);
        stroke: rgb(238, 238, 238);
        stroke-width: 4.2;
    }

    .eImMjg.percent .circular-chart .circle {
        stroke-width: 8;
        stroke-linecap: butt;
    }

    .eImMjg .circular-chart .circle {
        fill: rgba(255, 255, 255, 0.6);
        stroke-width: 3.2;
        stroke-linecap: round;
        transition: all 1s ease-out 0s;
    }

    .fXyiBz .line1 .name {
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        align-self: flex-end;
        font-size: 1.2rem;
        font-weight: 800;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 100%;
    }

    /*h2 {*/
    /*    display: block;*/
    /*    font-size: 1.5em;*/
    /*    margin-block-start: 0.83em;*/
    /*    margin-block-end: 0.83em;*/
    /*    margin-inline-start: 0px;*/
    /*    margin-inline-end: 0px;*/
    /*    font-weight: bold;*/
    /*}*/
    .colorUl {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    .colorUl li {
        color: rgb(255, 255, 255);
        display: flex;
        height: 400px;
        width: 75px;
        border: 1px solid black;
        flex-direction: row;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        cursor: pointer;
        text-align: -webkit-match-parent;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        align-self: flex-start;
        border-top: 0.4rem solid;
        padding: 0.5rem 0.2rem 0.4rem;
        margin: 0.4rem;
        transition: all 0.5s ease 0s;

    }


    .fXyiBz .line2 .rgb {
        display: flex;
        flex-direction: column;
    }

    .fXyiBz .line2 .rgb .line.r {
        height: 150px;
        background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 45.8824%, rgba(255, 255, 255, 0.3) 45.8824%, rgba(255, 255, 255, 0.3) 100%);
    }
    .fXyiBz .line2 .rgb .line.g {
        background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 52.9412%, rgba(255, 255, 255, 0.3) 52.9412%, rgba(255, 255, 255, 0.3) 100%);
    }
    .fXyiBz .line2 .rgb .line.b {
        background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 54.1176%, rgba(255, 255, 255, 0.3) 54.1176%, rgba(255, 255, 255, 0.3) 100%);
    }
    .fXyiBz .line2 .rgb .line {
        width: 2px;
        height: 6rem;
        margin: 0px 1px;
    }



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


</style>
