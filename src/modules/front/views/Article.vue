<template>
    <div>
        <el-backtop :bottom="60"></el-backtop>

        <div v-show="isLoad" style="text-align: center;padding-left: 40%;padding-top: 100px;height: 1000px;">
            <load></load>
        </div>

        <div style="display: flex">
            <transition name="fade">
                <div class="detail" v-show="!isLoad">
                    <div class="title-box">
                        <h2>{{art.title}}</h2>
                        <div class="post-box">
                            <span><i class="el-icon-date"></i>
                                {{changeDate(art.created_at)}}
                            </span>
                            <span class="tag-box">
                                <i v-if="art.tags && art.tags.length > 0" class="el-icon-price-tag tagIcon"
                                   style="vertical-align: middle;margin-right: 5px;"></i>
                                <span v-for="(t) in art.tags" style="margin-right: 10px;">{{t}}</span>
                            </span>
                            <span><i class="el-icon-star-off"></i> {{art.view_count}} 热度</span>
                        </div>
                    </div>
                    <div class="articleContent" id="articleContent" v-html="marked(art.content)">
                        <!--                    <div class="giveLike">-->
                        <!--                        <i class="iconfont lv-icon-yijin13-zan"></i>-->
                        <!--                        <span>2</span>-->
                        <!--                    </div>-->
                        <!--                    <div class="nextBox">-->
                        <!--                        <p class="goArticle"><i class="ivu-icon ivu-icon-md-arrow-round-back"></i>-->
                        <!--                            <span>小程序mpvue框架开发时遇到的坑</span></p>-->
                        <!--                        <p class="goArticle"><span>无</span>-->
                        <!--                            <i class="ivu-icon ivu-icon-md-arrow-round-forward"></i>-->
                        <!--                        </p>-->
                        <!--                    </div>-->
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <aside class="cataParent" v-show="cataLoad">
                    <div :class="{'cataDiv':cataLoad,'catFixed':catFixed}">
                        <div class="slide cataTitle" @click="goTop(200)">
                            <span class="cataItem">文章目录</span>
                        </div>
                        <div class="slide" id="wrapper">
                        </div>
                    </div>
                </aside>
            </transition>
        </div>


        <!--        <div class="commentbox">-->
        <!--            <div class="comment-title"><p>评论 <span>「 1 」</span>-->
        <!--            </p></div>-->
        <!--            <div class="input-box">-->
        <!--                <div class="userbox">-->
        <!--                    <div class="user-img"><img-->
        <!--                            src="https://avatars.dicebear.com/v2/identicon/id-.svg"-->
        <!--                            alt=""><h4>游客</h4></div>-->
        <!--                </div>-->
        <!--                <div class="textbox">-->
        <!--                    <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type"><textarea-->
        <!--                            wrap="soft" autocomplete="off" spellcheck="false"-->
        <!--                            placeholder="说点什么。。支持markdown语法，尾部2个空格后回车才会换行，最长400个字" rows="2" maxlength="400"-->
        <!--                            class="ivu-input"-->
        <!--                            style="height: 94px; min-height: 94px; max-height: 178px; overflow-y: hidden;"></textarea>-->
        <!--                    </div>-->
        <!--                    <div class="submit-box">-->
        <!--                        <div class="ykname">-->
        <!--                            <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type"-->
        <!--                                 style="width: 150px;">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <i-->
        <!--                                    class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>-->
        <!--                                <input autocomplete="off" spellcheck="false" type="text" placeholder="游客可以选填昵称"-->
        <!--                                       class="ivu-input ivu-input-default"> &lt;!&ndash;&ndash;&gt;</div>-->
        <!--                        </div>-->
        <!--                        <el-button type="primary" plain autofocus="false">提交评论</el-button>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div>-->
        <!--                <div>-->
        <!--                    <div class="commentList">-->
        <!--                        <div class="user-ava"><img-->
        <!--                                src="https://avatars.dicebear.com/v2/identicon/id-null.svg"-->
        <!--                                alt=""></div>-->
        <!--                        <div class="comment-box animate03">-->
        <!--                            <div class="username"><span><i-->
        <!--                                    class="ivu-icon ivu-icon-md-person"></i>-->
        <!--                游客-->
        <!--                <em></em><span class="created"><i-->
        <!--                                        class="el-icon-time"></i>2019-09-05 22:44:15</span></span>-->
        <!--                            </div>-->
        <!--                            <div class="com_detail"><p>博客加载缓慢原因找到了吗？</p>-->
        <!--                            </div>-->
        <!--                            <div class="delete">-->
        <!--                                <div class="ivu-poptip ivu-poptip-confirm">-->
        <!--                                    <div class="ivu-poptip-rel"></div>-->
        <!--                                    <div class="ivu-poptip-popper"-->
        <!--                                         style="display: none; position: absolute; will-change: top, left; top: 18px; left: 0px;"-->
        <!--                                         x-placement="left">-->
        <!--                                        <div class="ivu-poptip-content">-->
        <!--                                            <div class="ivu-poptip-arrow"></div>-->
        <!--                                            <div class="ivu-poptip-inner">-->
        <!--                                                <div class="ivu-poptip-body"><i-->
        <!--                                                        class="ivu-icon ivu-icon-ios-help-circle"></i>-->
        <!--                                                    <div class="ivu-poptip-body-message">是否删除该评论?</div>-->
        <!--                                                </div>-->
        <!--                                                <div class="ivu-poptip-footer">-->
        <!--                                                    <button type="button" class="ivu-btn ivu-btn-text ivu-btn-small">-->
        <!--                                                        &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <span>取消</span></button>-->
        <!--                                                    <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-small">-->
        <!--                                                        &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <span>确定</span></button>-->
        <!--                                                </div>-->
        <!--                                            </div> &lt;!&ndash;&ndash;&gt;</div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>&lt;!&ndash;&ndash;&gt;</div>-->
        <!--            </div>-->
        <!--        </div>-->

    </div>
</template>

<script>

    import {getDetail} from "../../../api/home/article";
    import {dateTimeToDate} from "../../../utils/util";
    import marked from '@/common/js/marked'
    import Catalog from 'progress-catalog'
    import 'progress-catalog/src/progress-catalog.css'

    export default {
        name: "Article",
        data() {
            return {
                marked,
                isLoad: 1,
                cataLoad: 0,
                catFixed: 0,
                sn: "",
                art: {},
            }
        },
        created() {
            this.sn = this.$route.query.sn
            if (!this.sn) {
                this.$router.push("/")
                return
            }
            getDetail(this.sn).then((res) => {
                this.art = res.data
                document.title = this.art.title
                this.isLoad = 0
                setTimeout(() => {
                    new Catalog({
                        contentEl: 'articleContent',
                        linkActiveClass: 'cl-link-active', // active的目录项
                        catalogEl: `wrapper`,
                        topMargin: 0,
                        bottomMargin: 0,
                        linkClass: "cataItem",
                        activeHook: () => {
                        },
                        cool: false // 炫酷模式开关
                    })
                    //有字就
                    if (document.getElementsByClassName("cataItem").length > 1) { //文章目录div也是这个，所以是 > 1
                        this.cataLoad = 1
                    }
                }, 1000)
            })
        },
        mounted() {
        },
        methods: {
            changeDate(date){
                return dateTimeToDate(date)
            },
        }
    }
</script>

<style>
    .dplayer {
        display: block;
        border-radius: 5px;
        width: 100%;
        max-height: 800px;
    }

    .catFixed {
        position: fixed !important;
    }

    .cataDiv {
        padding: 10px 40px 10px 10px;
        position: fixed;
        border-radius: 5px;
        top: 109px;
        transition: 1s;
        margin-left: 20px;
        background: white;
    }

    .cataTitle {
        text-align: center;
        margin-bottom: 10px;
        font-size: 16px !important;
    }

    .cataItem {
        color: #666 !important;
        font-size: 14px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.8;
        font-family: "PingFang SC", "Microsoft YaHei", Lato, sans-serif;
        font-weight: 500;
    }

    .cataItem:hover {
        color: #fc6423 !important;
    }

</style>

<style scoped>
    /****************************容器部分************************/
    .detail {
        width: 70%;
        float: left;
        box-sizing: border-box;
        margin: 30px 0 50px 5%;
        padding: 50px 35px 20px;
        font-size: 16px;
        color: #444;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
    }

    .title-box {
        margin: 20px auto 40px;
        text-align: center;
    }

    .title-box h2 {
        color: #22292f;
        line-height: 1.15;
        margin-bottom: 30px;
    }

    .title-box .post-box {
        text-align: center;
        border-top: 1px solid #b8c2cc;
        background: #f8fafc;
        border-bottom: 1px solid #b8c2cc;
        padding: 7px 15px;
        font-weight: 600;
        color: #606f7b;
        font-family: auto;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        line-height: 28px;
    }

    .title-box .post-box > span {
        margin-right: 20px;
    }

    .articleContent {
        margin: 0;
        width: 100%;
        border-radius: 5px;
        overflow: auto;
        color: #666;
        font-weight: 500;
        font-size: 16px;
        font-variant-ligatures: no-common-ligatures;
        font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB","Microsoft Yahei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";
        word-break: normal;
        word-wrap: normal;
    }

    .articleContent img {
        max-width: 100%;
        display: block;
        margin: 3px 0 12px;
    }


    /*******************上一篇、下一篇*******************/
    .nextBox {
        border-top: 1px solid #dfe8ea;
        line-height: 26px;
        padding-top: 10px;
        margin-top: 45px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .nextBox .goArticle:nth-child(2) {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    .nextBox .goArticle:hover span {
        text-decoration: underline;
    }

    .nextBox .goArticle span {
        overflow: hidden;
        margin: 0 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .nextBox .goArticle:hover {
        color: #ff7b8d;
    }

    .nextBox .goArticle {
        width: 49%;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 18px;
    }

    .giveLike {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 25px auto;
        background: #f7576c;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
    }

    .giveLike i {
        font-size: 34px;
    }

    .iconfont {
        /*font-family: "iconfont" !important;*/
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /********************评论框************************/
    .commentbox {
        max-width: 1080px;
        background-color: white;
        margin: auto;
        padding: 50px 35px 20px;
        /* padding: 20px 0 40px;*/
    }

    .comment-title {
        font-size: 20px;
        margin: 10px 0 15px;
        border-left: 4px solid #f7576c;
        padding-left: 10px;
        line-height: 22px;
    }

    .comment-title span {
        font-size: 14px;
        margin-top: -6px;
        position: absolute;
    }

    .input-box {
        margin: 15px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .input-box .userbox {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .input-box .userbox .user-img {
        width: 60px;
        margin-right: 15px;
    }

    .input-box .userbox .user-img img {
        width: 100%;
        border-radius: 50%;
        -webkit-box-shadow: 3px 3px 11px #d6d6d6;
        box-shadow: 3px 3px 11px #d6d6d6;
    }

    .input-box .userbox .user-img h4 {
        line-height: 26px;
        font-size: 14px;
        text-align: center;
        color: #f7576c;
    }

    .higtlight h4 {
        padding: 8px 0 4px !important;
    }


    .input-box .textbox {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .ivu-input-wrapper {
        display: inline-block;
        width: 100%;
        position: relative;
        vertical-align: middle;
        line-height: normal;
    }

    .input-box .textbox textarea.ivu-input {
        resize: none;
    }

    textarea.ivu-input {
        max-width: 100%;
        height: auto;
        min-height: 32px;
        vertical-align: bottom;
        font-size: 14px;
    }

    .ivu-input {
        display: inline-block;
        width: 100%;
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 12px;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
    }


    .input-box .textbox .submit-box {
        margin-top: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    .input-box .textbox .submit-box .ykname {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .ivu-input-wrapper {
        display: inline-block;
        width: 100%;
        position: relative;
        vertical-align: middle;
        line-height: normal;
    }

    .ivu-input {
        display: inline-block;
        width: 100%;
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 12px;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
    }


    /*********评论***************/
    .commentList {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 14px;
        padding: 12px 0;
    }

    .commentList .user-ava {
        width: 60px;
        min-width: 60px;
        margin-right: 15px;
    }

    .commentList .user-ava img {
        width: 100%;
        border-radius: 50%;
        -webkit-box-shadow: 3px 3px 11px #d6d6d6;
        box-shadow: 3px 3px 11px #d6d6d6;
    }

    img {
        border-style: none;
    }

    .commentList .comment-box {
        position: relative;
        line-height: 22px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        min-height: 120px;
        border: 1px solid #ecf0f1;
        border-radius: 3px;
        width: 0;
        background: #fff;
    }

    .commentList .comment-box .username {
        line-height: 30px;
        font-weight: 700;
        color: #f7576c;
        background: #ecf0f1;
        padding: 6px 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .commentList .comment-box .username .created {
        margin-left: 10px;
        font-weight: 100;
        color: #7f8c8d;
    }

    .commentList .comment-box .com_detail {
        padding: 15px 25px;
        font-size: 16px;
    }

    .commentList .comment-box .delete {
        position: absolute;
        right: 10px;
        bottom: 7px;
        font-size: 20px;
        color: #657f86;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        .detail{
            width: 100%;
            margin: 0;
            padding: 20px 15px;
        }
    }
</style>

<style>
    .articleContent img{
        max-width: 100%;
    }
    .articleContent p {
        line-height: 30px !important;
    }
    .articleContent h2 {
        font-size: 1.5em;
        position: relative;
        padding-bottom: 10px;
        color: #111;
        margin: 20px 0;
    }
    .articleContent h2:before {
        content: "";
        width: 100%;
        border-bottom: 1px solid #eee;
        position: absolute;
        bottom: -1px;
        left: -20px;
    }
    .articleContent h2:after{
        -webkit-transition: all .35s;
        transition: all .35s;
        content: "";
        position: absolute;
        background: rgba(242,190,69,0.85);
        width: 1em;
        height: 5px;
        bottom: -3px;
        left: 0;
        border-radius: 6px;
        box-shadow: 0 2px 12px rgba(242,190,69,0.85);
    }
    .articleContent h2:hover:after {
        width: 2em;
    }
    .articleContent h1, .articleContent h2, .articleContent h3, .articleContent h4, .articleContent h5, .articleContent h6 {
        color: #111;
        margin: 20px 0;
    }
    .articleContent a {
        -webkit-transition: all .35s;
        transition: all .35s;
        color: #44cef6;
        text-decoration: none;
        position: relative;
        word-wrap: break-word;
    }
    .articleContent a:hover::after {
        left: 0;
        width: 100%;
    }
    .articleContent a::after {
        -webkit-transition: width .35s;
        transition: width .35s;
        content: "";
        right: 0;
        width: 0;
        bottom: -2px;
        position: absolute;
        border-bottom: 1px solid;
    }

    .articleContent code:not(.hljs):not(.highlight-chroma) {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        border-radius: 3px;
        font-family: mononoki,Consolas,"Liberation Mono",Menlo,Courier,monospace,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";
        word-break: break-word;
        background-size: 20px 20px;
        white-space: pre-wrap;
        background-color: rgba(27,31,35,0.05);
        border: 1px solid #d7dae2;
    }
    .articleContent li {
        line-height: 24px;
    }
</style>
