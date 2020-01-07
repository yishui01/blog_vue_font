<template>
    <div id="holder" class="contianer allDiv">
        <canvas id="canvas" width="1920" height="1060" style="position: fixed;"></canvas>
        <myhead></myhead>

        <div style="height: 80px;"></div>
        <el-row style="pointer-events: auto;">
            <hgroup class="hQSjWe">
                <div class="sc-jzJRlG byuKKj ">
                    <span class="line sct">秋瑾 ·《菩萨蛮·寄女伴》</span>
                    <span class="line">「无边家国事 并入双蛾翠」</span>
                </div>
            </hgroup>
            <el-col :span="16" :offset="4">
                <div>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive" class="slide"/>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive" class="slide"/>
                </div>
            </el-col>
        </el-row>
        <div id="player" class="aplayer" style="width: 20%;"></div>
        <myfoot class="footer"></myfoot>
    </div>
</template>
<script>
    import myhead from '@/components/myhead'
    import myfoot from '@/components/myfoot'
    import {wave, requestAnimationFrame} from './assets/js/wave';
    import 'aplayer/dist/APlayer.min.css';
    import APlayer from 'aplayer';

    export default {
        name: "app",
        components: {
            myhead,
            myfoot
        },
        data() {
            return {
                topC: 0,
                checkLiIndex: 0,
                checkCircleIndex: 0,
                expandBottom: false,
            }
        },
        mounted() {
            var settings = {
                image: 'https://app.smartnail.cn/test/a.jpeg',//image path
                //image: 'https://img.smartnail.cn/3c8d53da81cb39dbbad8b4d8d6160924aa1830e9.jpg',//image path
                //image: './assets/a.jpg',//image path
                dropRadius: 3,//radius of the ripple
                width: 800,//width
                height: 500,//height
                delay: 1,//if auto param === true. 1 === 1 second delay for animation
                auto: 0//if auto param === true, animation starts on it´s own
            }
            let cvs = document.getElementById("canvas")

            // cvs.width = document.body.clientWidth;
            // cvs.height = document.body.clientHeight;

            let w = new wave(cvs, settings)
            w.init()
            //document.getElementById('holder').addEventListener('click', function (e) {
            window.addEventListener('click', function (e) {
                var mouseX = e.clientX;
                var mouseY = e.clientY;
                w.disturb(mouseX, mouseY);

            });


            //on mousemove
            //document.getElementById('holder').addEventListener('mousemove', function (e) {
            window.addEventListener('mousemove', function (e) {
                var mouseX = e.clientX;
                var mouseY = e.clientY;
                w.disturb(mouseX, mouseY);

            });

            document.onkeydown = function (e) {
                var event = e || window.event || arguments.callee.caller.arguments[0];
                if (event && event.keyCode == 13) { // enter 键
                    w.disturb(200, 200);

                }
            }

            //document.querySelector('body').setAttribute('style', 'background-color:#75878a;')
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

    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    .allDiv {
        min-height: 1000px;
    }

    body {
        background-image: url('./assets/a.jpeg');
        /*background-image: url(https://ae01.alicdn.com/kf/U8720aea1269b407990ade7c258ae0d8b8.jpg);*/
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }

    .footer {
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

    /**********左边栏***********/
    .hQSjWe {
        position: absolute;
        left: 6%;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px;
        box-sizing: border-box;
        width: 7rem;
        margin-top: 3.8rem;
        margin-right: 0.5rem;
        min-height: 18rem;
        border-radius: 6px;
        padding: 2rem 1rem 8rem;
        cursor: pointer;
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
        color: rgb(255, 255, 240);
        line-height: 1.4rem;
        margin-top: 1rem;
        text-shadow: rgba(33, 33, 33, 0.6) 0px 0px 4px;
        padding: 0.4rem;
        animation: 1s ease 0s 1 normal forwards running hbOYnO;
    }

    .byuKKj .line {
        color: inherit;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        letter-spacing: 0.4rem;
        font-size: 1.4rem;
        position: relative;
        top: 5px;
    }

    .byuKKj .sct {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.2rem;
        position: relative;
        top: -9px;
        margin-right: 7px;
    }

    /*************右侧底部******************/
    .rdiZx .colorSet {
        position: fixed;
        bottom: 1rem;
        right: 3rem;
        z-index: 999;
        padding: 0 1.7rem;
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
