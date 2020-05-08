<template>
    <div>
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
                <btn1 />
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
            <div class="dplayer" style="width: 200px;height: 200px;"></div>
            <div class="btnDiv">
                <btn1 />
            </div>
        </div>
    </div>
</template>

<script>
    import btn1 from '@/components/Btn1'

    export default {
        name: "Chat",
        components:{
            btn1
        },
        getList(){

        },
    }
</script>

<style scoped>
    .articleDiv {
        width: 70%;
        margin-top: 50px;
        margin-left: 5%;
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
        width: 200px;
        height: 200px;
    }


    .btnDiv {
        margin-top: 40px;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        .articleDiv{
            width: 95%;
            margin: 10px;
            box-sizing: border-box;
        }
    }

</style>
