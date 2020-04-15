<template>
    <div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
        <div id="player" class="aplayer"></div>
    </div>
</template>
<script>
    import 'aplayer/dist/APlayer.min.css';
    import APlayer from 'aplayer';
    import {getWebInfo} from "../../api/home/webinfo";

    export default {
        name: "app",
        created(){
            getWebInfo("music").then((res)=>{
                console.log(res)
            })
        },
        mounted() {
            //音乐播放器
            new APlayer({
                element: document.getElementById('player'),
                mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
                listFolded: true, //列表默认折叠
                fixed: true, //吸底模式
                audio: [
                    {
                        title: '发如雪',
                        author: '周杰伦',
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

    body {
        font-family: -apple-system, BlinkMacSystemFont, opensans, Optima, "Microsoft Yahei", sans-serif;
        background: #f5f5f5;
        min-height: 1000px;
        font-weight: 300;
        overflow-x: hidden;
        margin: 0;
        cursor: url(https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.1/static/images/pointer.cur), auto;
        background-image: url('../../assets/b.jpg');
        /*background-image: url(https://ae01.alicdn.com/kf/U8720aea1269b407990ade7c258ae0d8b8.jpg);*/
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }

    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        font-variant-ligatures: inherit;
        font-variant-caps: inherit;
        font-variant-numeric: inherit;
        font-variant-east-asian: inherit;
        font-stretch: inherit;
        line-height: inherit;
        font-family: inherit;
        margin: 0;
    }

    ul {
        list-style: none;
    }

    .slide {
        animation: slide 1s ease;
    }

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translate3d(0px,10px,0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0,0,0);
        }
    }

    .forceShow {
        animation: forceShow 1s ease;
    }

    @keyframes forceShow {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes reverseSlide {
        0% {
            opacity: 0;
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fslide{
        animation: reverseSlide 1s ease;
        -webkit-animation: reverseSlide 1s ease;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        overflow: auto;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #e6e6e6;
        min-height: 25px;
        min-width: 25px;
        border: 1px solid #e0e0e0;
    }

    ::-webkit-scrollbar-track {
        background-color: #f7f7f7;
        border: 1px solid #efefef;
    }

    iframe{
        width: 100%;
        height: 600px;
    }

</style>

<style lang="stylus">
    html, body, #app
        height 100%
        display flex
        flex-direction column
        margin 0
        padding 0
    section.content
        flex 1

    .ivu-back-top
        z-index 30 !important
    .top
        background: #b8297e
        color: #fff;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
    .top:hover
        background #64156e


</style>
