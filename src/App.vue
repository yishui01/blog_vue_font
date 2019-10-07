<template>
    <div class="contianer">
        <el-row class="n">
            <el-col :span="4">
                <nav class="colorNav">
                    <ul class="colorUl">
                        <li @click="checkLi(index)" v-for="(item,index) in colorList" :key="index"
                            class="sc-gqjmRU fXyiBz" :class="{curr:checkLiIndex == index}"
                            color="#75878a"
                            title="即各种颜色掺入黑色后的颜色"
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
            <el-col :span="3" :offset="1">
                <hgroup class="sc-cSHVUG hQSjWe" style="color: rgb(233, 241, 246);"><h1>苍色</h1>
                    <div class="sc-fjdhpX eNDZOk">
                        <svg t="1568172188297" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2640" width="32" height="32">
                            <path d="M512 910.933333l-61.866667-56.106667c-219.733333-199.466667-364.8-331.093333-364.8-492.16 0-131.626667 103.04-234.666667 234.666667-234.666667 74.24 0 145.493333 34.56 192 88.96 46.506667-54.4 117.76-88.96 192-88.96 131.626667 0 234.666667 103.04 234.666667 234.666667 0 161.066667-145.066667 292.693333-364.8 492.16l-61.866667 56.106667z"
                                  p-id="2641" fill="#fff"></path>
                        </svg>
                    </div>
                    <h2>cāng sè</h2>
                    <div class="sc-jzJRlG byuKKj"><h2>秋瑾 ·《菩萨蛮·寄女伴》</h2>
                        <p class="line">「无边家国事 并入双蛾翠」</p></div>
                </hgroup>
            </el-col>
        </el-row>
        <div id="player" class="aplayer" style="width: 20%;"></div>

        <div class="rdiZx">
            <aside class="colorSet">
                <div class="sets sc-dnqmqq dhAXtJ" :class="{expand:expandBottom}">
                    <ul>
                        <li
                                @click="checkCircle(index)"
                                :key="index" v-for="(item, index) in circleList"
                                :class="{selected:checkCircleIndex == index}"
                                :style='{background:item.rgb}'>{{item.name}}
                        </li>
                    </ul>
                    <button class="btn" style="outline: none;" @click="toggleBottomCircle">巜</button>
                </div>
            </aside>
        </div>

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
        watch: {
            checkLiIndex(newVal) {
                document.querySelector('body').setAttribute('style', 'background-color:' + this.colorList[newVal].background + ';')
            }
        },
        methods: {
            checkLi(index) {
                this.checkLiIndex = index
            },
            checkCircle(index) {
                this.checkCircleIndex = index
            },
            toggleBottomCircle() {
                this.expandBottom = !this.expandBottom
            }
        },
        data() {
            return {
                checkLiIndex: 0,
                checkCircleIndex: 0,
                expandBottom: false,
                colorList: [
                    {background: "white"},
                    {background: "gray"},
                    {background: "lightgray"},
                    {background: "black"},
                    {background: "lightblue"},
                    {background: "lightblue"},
                    {background: "lightblue"},
                    {background: "lightblue"},
                    {background: "lightblue"},
                ],
                circleList: [
                    {rgb: "rgb(255, 179, 167)", name: "红"},
                    {rgb: "rgb(10, 163, 68)", name: "绿"},
                    {rgb: "rgb(68, 206, 246)", name: "蓝"},
                    {rgb: "rgb(117, 135, 138)", name: "苍"},
                    {rgb: "rgb(210, 240, 244)", name: "水"},
                    {rgb: "rgb(240, 240, 244)", name: "灰白"},
                    {rgb: "rgb(0, 0, 0)", name: "黑"},
                    {rgb: "rgb(234, 205, 118)", name: "金银"},
                ]
            }
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .fade_y-enter-active, .fade_y-leave-active {
        transition: 1s;
    }

    .fade_y-enter, .fade_y-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(5px);
    }

    .fXyiBz.curr {
        box-shadow: rgba(0, 0, 0, 0.6) 0 0 4px;
        text-shadow: black 0 0 10px;
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
        font-weight: bold;
        width: 100%;
        margin-top: 5px;
        box-sizing: border-box;
        font-size: 14px;
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
        height: 350px;
        width: 65px;
        box-sizing: border-box;
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

    .fXyiBz .line2 .rgb .line {
        width: 2px;
        height: 9rem;
        margin: 0px 1px;
    }

    .fXyiBz .line2 .rgb .line.r {
        background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 45.8824%, rgba(255, 255, 255, 0.3) 45.8824%, rgba(255, 255, 255, 0.3) 100%);
    }

    .fXyiBz .line2 .rgb .line.g {
        background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 52.9412%, rgba(255, 255, 255, 0.3) 52.9412%, rgba(255, 255, 255, 0.3) 100%);
    }

    .fXyiBz .line2 .rgb .line.b {
        background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 54.1176%, rgba(255, 255, 255, 0.3) 54.1176%, rgba(255, 255, 255, 0.3) 100%);
    }

    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    body {
        background-image: url('https://works.yangerxiao.com/chinese-colors/00746b7e611ff49d789bc56df95eba4b.png');
        transition: background-color 1.6s ease 0s;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }

    /**去掉滚动条但不影响滚动**/
    .colorNav::-webkit-scrollbar {
        display: none;
    }

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
        width: 100%;
        padding-top: 20px;
        box-sizing: border-box;
        padding-left: 1.5rem;
        vertical-align: baseline;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        font: inherit;
        overflow-y: scroll;
    }


    /**********右边栏***********/
    .hQSjWe {
        color: rgb(51, 51, 51);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 8px;
        position: relative;
        width: 6rem;
        height: 550px;
        cursor: default;
        margin-top: 8rem;
        margin-right: 0.5rem;
        min-height: 18rem;
        border-radius: 6px;
        padding: 1rem 0.8rem;
    }

    .hQSjWe > h1 {
        color: inherit;
        font-size: 3.2rem;
        letter-spacing: -0.5rem;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        font-family: TChinese, SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi, "Microsoft YaHei";
        transition: transform 0.4s ease-in 0s;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
    }

    .eNDZOk {
        position: absolute;
        top: 4px;
        left: 4px;
        cursor: pointer;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
    }

    .hQSjWe > h1:hover {
        transform: scale(1.1);
    }

    .hQSjWe > h2 {
        text-transform: capitalize;
        font-size: 0.6rem;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        position: absolute;
        right: 0.2rem;
        top: 0.4rem;
        color: inherit;
    }

    .byuKKj {
        color: rgb(255, 255, 235);
        display: flex;
        line-height: 1.4rem;
        margin-top: 1rem;
        text-shadow: rgba(33, 33, 33, 0.6) 0px 0px 4px;
        padding: 0.4rem;
        animation: 1s ease 0s 1 normal forwards running hbOYnO;
    }

    .byuKKj > h2 {
        color: inherit;
        font-size: 0.8rem;
        letter-spacing: 0.15rem;
        align-self: flex-end;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        margin-right: 0.3rem;
    }

    .byuKKj .line {
        color: inherit;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        letter-spacing: 0.4rem;
        font-size: 16px;
        font-weight: bold;
        position: relative;
        top: 5px;
    }


    /*************右侧底部******************/
    .rdiZx .colorSet {
        position: fixed;
        bottom: 1rem;
        right: 3rem;
        z-index: 999;
        padding: 0px 1.7rem;
        color: white;
    }

    .dhAXtJ ul {
        display: flex;
        position: relative;
    }

    .dhAXtJ ul > li {
        margin-right: -2.6rem;
    }

    .dhAXtJ.expand ul li {
        margin-right: 0.35rem;
    }


    .dhAXtJ ul > li {
        cursor: pointer;
        box-shadow: black 0px 0px 0.8rem;
        width: 3.6rem;
        height: 3.6rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 800;
        transition: all 0.6s ease 0s;
        border-radius: 50%;
    }

    .dhAXtJ.expand .btn {
        transform: translateY(-50%) rotateZ(180deg);
    }

    .dhAXtJ .btn {
        color: white;
        cursor: pointer;
        position: absolute;
        right: -1.6rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3.6rem;
        height: 3.6rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 1.2rem;
        box-shadow: black 1px -1px 6px;
        background: rgb(51, 51, 51);
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        border-radius: 50%;
        transition: all 0.6s ease 0s;
    }

    .dhAXtJ ul > li.selected {
        transform: translateY(-1.6rem);
    }


</style>
