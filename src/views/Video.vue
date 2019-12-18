<template>
    <div style="padding-top: 50px;">
        <div class="articleDiv">
            <div class="titleDiv">
                <h2>2018 ChinaJoy 参展日记</h2>
                <div class="countDiv">
                    <span style="color: #00a7e0"><i class="el-icon-date"></i> 发表于 2018-08-10</span>
                    <span> · </span>
                    <span><i class="el-icon-star-on"></i> 7 热度</span>
                    <span style="color: #ff3f1a"> · </span>
                    <span style="color: #ff3f1a;cursor: pointer"><i class="el-icon-s-comment"></i> 0 评论</span>
                </div>
            </div>
            <div class="articleBody">
                <p>8月4日去了 ChinaJoy，人还是一如既往的多</p>

                <p>AC 娘真可爱，舔爆</p>

                <p>第二次拍 vlog，然后拍完懒得剪，还是 Freddy 帮我剪的，我在视频里真可爱</p>
            </div>
            <div class="dplayer"></div>
            <div class="btnDiv">
                <span class="readBtn">阅读全文 »</span>
            </div>
        </div>
        <div class="articleDiv">
            <div class="titleDiv">
                <h2>2018 ChinaJoy 参展日记</h2>
                <div class="countDiv">
                    <span style="color: #00a7e0">发表于 2018-08-10</span>
                    <span> · </span>
                    <span>7热度</span>
                    <span style="color: #ff3f1a"> · </span>
                    <span style="color: #ff3f1a">0评论</span>
                </div>
            </div>
            <div class="articleBody">
                <p>8月4日去了 ChinaJoy，人还是一如既往的多</p>

                <p>AC 娘真可爱，舔爆</p>

                <p>第二次拍 vlog，然后拍完懒得剪，还是 Freddy 帮我剪的，我在视频里真可爱</p>
            </div>
            <div class="dplayer"></div>
            <div class="btnDiv">
                <span class="readBtn">阅读全文 »</span>
            </div>
        </div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import flv from 'flv.js'
    import DPlayer from 'dplayer'

    export default {
        name: "Video",
        mounted() {
            var elements = document.getElementsByClassName('dplayer')
            for (let i = 0; i < elements.length; i++) {
                new DPlayer({
                    container: elements[i],
                    video: {
                        //url: 'http://lst.allove.com/uploads/uploads/video/2019/08/06/64a15b0aeb28d156bcfeaff6d799f962.mp4'
                        url: 'https://img.smartnail.cn/video/flv/pdd.flv',
                        type: 'customFlv',
                        customType: {
                            customFlv: function (video, player) {
                                const flvPlayer = flv.createPlayer({
                                    type: 'flv',
                                    url: video.src,
                                });
                                flvPlayer.attachMediaElement(video);
                                flvPlayer.load();
                            },
                        },
                    },
                });

            }

        }
    }
</script>

<style scoped>
    .articleDiv {
        max-width: 1080px;
        margin: 0 auto;
        margin-bottom: 50px;
        padding: 20px 45px 40px;
        box-sizing: border-box;
        background: white;
        text-align: center;
        border-radius: 5px;
        position: relative;
    }

    .titleDiv {
        margin: 10px 0 20px 0;
        text-align: center;
    }

    .titleDiv h2 {
        font-size: 26px;
        font-weight: 700;
        color: #444;
        cursor: pointer;
    }

    .countDiv {
        margin-top: 20px;
    }

    .countDiv span {
        margin-right: 10px;
        font-size: 12px;
    }

    .articleDiv {
        text-align: justify;
        font-size: 14px;
        line-height: 2;
    }

    p {
        margin: 0 0 20px 0;
    }

    .dplayer {
        border-radius: 5px;
        max-width: 100%;
        max-height: 800px;
    }


    .btnDiv {
        margin-top: 40px;
        text-align: center;
    }

    .readBtn {
        display: inline-block;
        padding: 0 20px;
        font-size: 14px;
        color: #555;
        background: #fff;
        border: 2px solid #555;
        text-decoration: none;
        border-radius: 2px;
        transition-property: background-color;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        line-height: 2;
        cursor: pointer;
    }

    .readBtn {
        background: #97dffd;
        color: #fff;
        font-size: 13px;
        padding: 1px 15px;
        border-radius: 5px;
        border: none;
    }

    .readBtn:hover {
        border-color: #47456d;
        color: #fff;
        background: #47456d;
    }

</style>