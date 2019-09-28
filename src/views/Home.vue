<template>
    <div>
        <div class="content">
            <div class="article">
                <div class="imgDiv">
                    <img class="title_img" src="http://static.golang365.com/I6QEdUX4c40bfzyNoST55nBIPNJgFFhOhGAlDmud.png">
                </div>
                <div class="introDiv">
                    <div class="create_time">
                        <i class="el-icon-date tagIcon"></i>发布于 2019-01-21
                    </div>
                    <h1>Win32常见的数据类型</h1>
                    <div class="tag-box">
                        <span><i class="el-icon-price-tag tagIcon" style="vertical-align: middle;"></i></span>
                        <span class="tagSpan" >
                           C++
                        </span>
                    </div>
                    <div class="clickAndComm" >
                        <span><i class="el-icon-star-off tagIcon" ></i>7热度</span>
                        <span><i class="el-icon-s-comment tagIcon"></i>0条评论</span>
                    </div>
                </div>
                <div class="classifybox">
                    <div class="classify">工具</div>
                </div>
            </div>

            <div class="article">
                <div class="imgDiv">
                    <img class="title_img" src="http://static.golang365.com/I6QEdUX4c40bfzyNoST55nBIPNJgFFhOhGAlDmud.png">
                </div>
                <div class="introDiv">
                    ad
                </div>
                <div class="classifybox">
                    <div class="classify">工具</div>
                </div>
            </div>
            <div class="article">
                <div class="imgDiv">
                    <img class="title_img" src="http://static.golang365.com/I6QEdUX4c40bfzyNoST55nBIPNJgFFhOhGAlDmud.png">
                </div>
                <div class="introDiv">
                    ad
                </div>
                <div class="classifybox">
                    <div class="classify">工具</div>
                </div>
            </div>
            <div class="article">
                <div class="imgDiv">
                    <img class="title_img" src="http://static.golang365.com/I6QEdUX4c40bfzyNoST55nBIPNJgFFhOhGAlDmud.png">
                </div>
                <div class="introDiv">
                    <div class="create_time">
                        发布于 2019-01-21
                    </div>
                </div>
                <div class="classifybox">
                    <div class="classify">工具</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
    }
</script>

<style>
    *, :after, :before {
        box-sizing: border-box;
    }

    /****************************容器部分************************/
    .content {
        max-width: 940px;
        margin: 60px auto;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .article{
        position: relative;
        display: flex;
        height: 280px;
        cursor: pointer;
        background: white;
        border-radius: 10px;
        margin-bottom: 40px;
        font-size: 14px;
        -webkit-transform:translate3d( 0, 0, 0);
        transition: 0.3s;
    }
    .article:hover{
        box-shadow: -5px 5px 10px #707070;
        transform: scale(1.02) translate3d( 0, 0, 0);
    }

    /***********************这是每个article的选择器，单双切换***************************/
    .article:nth-child(3n), .article:nth-child(3n-1) {
        width: 47.5%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        height: auto;
    }

    .article:nth-child(3n) .title_img, .article:nth-child(3n-1) .title_img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;
    }

    .article:nth-child(3n) .introDiv, .article:nth-child(3n-1) .introDiv {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 220px;
        flex: 0 0 220px;
    }

    /************************头图部分*************************************/
    .imgDiv{
        height: 100%;
        width: 100%;
    }
    .title_img{
        width: 100%;
        height: 100%;
        border-radius:10px 0 0 10px;
        -o-object-fit: cover;
        object-fit: cover;
        mix-blend-mode: multiply;
    }

    /*******************以下为左上角类别套带样式*************/
    .article:nth-child(3n) .classify, .article:nth-child(3n-1) .classify {
        background: linear-gradient(30deg,#ee7752,#e73c7e);
    }

    .article:nth-child(3n) .classifybox:after,
    .article:nth-child(3n) .classifybox:before,
    .article:nth-child(3n-1) .classifybox:after,
    .article:nth-child(3n-1) .classifybox:before {
        border-color: #621b18;
    }

    .classifybox{
        position: absolute;
        left: -8px;
        top: -8px;
        width: 100px;
        height: 100px;
        overflow: hidden;
        z-index: 30;
    }
    .classifybox:after, .classifybox:before {
        position: absolute;
        z-index: -1;
        content: "";
        display: block;
        border: 4px solid #3d4852;
        border-top-color: transparent;
        border-left-color: transparent;
        border-color: #2779bd;
    }

    .classifybox:after {
        bottom: 0;
        left: 0;
    }

    .classifybox:before {
        top: 0;
        right: 0;
    }


    .classify{
        width: 220px;
        left: -70px;
        top: 25px;
        text-align: center;
        padding: 4px 15px;
        position: relative;
        color: #fff;
        font-weight: 600;
        background-image: -webkit-gradient(linear,left top,right top,from(#23a6d5),to(#23d5ab));
        background-image: linear-gradient(90deg,#23a6d5,#23d5ab);
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
        -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.1);
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    /********************以下为introDiv部分***************/
    .introDiv{
        flex: 0 0 500px;
        padding: 25px 40px;
        color: #34495e;
    }
    .introDiv h1{
        font-size: 30px;
        font-weight: 400;
        margin: 25px 0 25px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .create_time{
        text-align: right;
        margin-bottom: 5px;
    }
    .tag-box{
        margin-bottom: 5px;
    }
    .tagSpan{
        background-color: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;

        height: 24px;
        padding: 0 8px;
        line-height: 22px;
    }
    .tagIcon{
        margin-right: 5px;
        font-size: 18px;
    }

    .clickAndComm{
        line-height: 30px;
    }
    .clickAndComm span{
        margin-right: 30px;
    }
</style>
