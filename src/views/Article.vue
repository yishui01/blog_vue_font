<template>
    <div>
        <div v-show="isLoad" style="text-align: center;padding-left: 45%;padding-top: 100px;">
            <load></load>
        </div>
        <transition name="fade">
            <div class="detail" v-show="!isLoad">
                <div class="title-box">
                    <h1>如何用postman传复杂的数据类型</h1>
                    <div class="post-box">
                        <div><i class="iconfont lv-icon-kalendar"></i>
                            2019/09/26
                        </div>
                        <div class="tag-box"><i class="iconfont lv-icon-biaoqian6"></i><span>postman</span></div>
                        <div><i class="iconfont lv-icon-huore"></i>22热度</div>
                    </div>
                </div>
                <div class="articleContent">
                    <div><p>postman真的是非常非常强大，很多复杂的请求都是可以模拟的</p>
                        <h3 id="-postman-">用postman上传图片</h3>
                        <p>选择<code>Body</code>，再选择<code>form-data</code>，切换到<code>File</code>类型，就可以上传图片了，第一个标签填接受的图片的字段
                            <img src="http://static.golang365.com/pThDGaQejkXiX65TSth0YvoPyrthhiwV4wnB3QqY.png"
                                 alt="WX201909260947332x.png"></p>
                        <h3 id="-postman-">用postman提交带对象的参数</h3>
                        <p>比如请求参数这样的，<code>parameter</code>是个对象</p>
                        <pre><code class="lang-js hljs javascript">{
    <span class="hljs-string"><span class="hljs-string">"title"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"九节虾"</span></span>,
    <span class="hljs-string"><span class="hljs-string">"desc"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"这是九节虾啊啊"</span></span>,
    <span class="hljs-string"><span class="hljs-string">"price"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">2100</span></span>,
    <span class="hljs-string"><span class="hljs-string">"vipprice"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">1900</span></span>,
    <span class="hljs-string"><span class="hljs-string">"stock"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">100</span></span>,
    <span class="hljs-string"><span class="hljs-string">"detail"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"这是详情啊啊"</span></span>,
    <span class="hljs-string"><span class="hljs-string">"parameter"</span></span>: {
        <span class="hljs-string"><span class="hljs-string">"g"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">500</span></span>,
        <span class="hljs-string"><span class="hljs-string">"k"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">233</span></span>
    },
    <span class="hljs-string"><span class="hljs-string">"classify"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"生鲜"</span></span>
}
</code></pre>
                        <p>选择<code>Body</code>，再选择<code>raw</code>，选择<code>json</code>格式，<code>Headers</code>设置为<code>Content-Type:application/json</code>
                            <img src="http://static.golang365.com/9sQP4COsB2XdTPwR7A5gluQgWsXJpyNiG43ZZv2U.png"
                                 alt="WX201909261017222x.png"></p>
                        <h3 id="-">提交带数组的参数</h3>
                        <p>比如参数带数组的，如<code>banners</code>，可以用上面的方式，也可以用<code>form-data</code></p>
                        <pre><code class="hljs json">{
    <span class="hljs-attr"><span class="hljs-attr">"title"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"九节虾"</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"desc"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"这是九节虾啊啊"</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"price"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">2100</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"vipprice"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">1900</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"stock"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">100</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"detail"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"这是详情啊啊"</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"banners"</span></span>: [
        {
            <span class="hljs-attr"><span class="hljs-attr">"url"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"/asdfa"</span></span>,
            <span class="hljs-attr"><span class="hljs-attr">"id"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">1</span></span>
        }, {
            <span class="hljs-attr"><span class="hljs-attr">"url"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"/dddssd"</span></span>,
            <span class="hljs-attr"><span class="hljs-attr">"id"</span></span>: <span class="hljs-number"><span
                                    class="hljs-number">2</span></span>
        }
    ],
    <span class="hljs-attr"><span class="hljs-attr">"classify"</span></span>: <span class="hljs-string"><span
                                    class="hljs-string">"生鲜"</span></span>
}
</code></pre>
                        <p>选择<code>form-data</code>方式，
                            添加字段，<code>banners[0][url]</code>表示<code>banners</code>第一条数组的url字段
                            <img src="http://static.golang365.com/a3YSeUVTbLxSzfIlj9nPzFPusv8xGZ2rmu2opZFl.png"
                                 alt="WX201909261031422x.png">
                            <img src="http://static.golang365.com/PBUtN18PFyaV8cVsm0LMEuhhcYt1vghTQWbnL2qo.png"
                                 alt="WX201909261032012x.png"></p>
                    </div>
                    <div class="posmition"><p>文章版权所有：<a
                            href="https://github.com/sweida"
                            target="_black">sweida</a>，采用
                        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                           target="_black">知识共享署名-非商业性使用 4.0 国际许可协议</a> 进行许可。</p>
                        <p>欢迎分享，转载务必保留出处及原文链接
                            <a href="http://www.golang365.com/#/blog/82"
                               target="_blank">http://www.golang365.com/#/blog/82</a>
                        </p></div>
                    <div class="giveLike">
                        <i class="iconfont lv-icon-yijin13-zan"></i>
                        <span>2</span>
                    </div>
                    <div class="nextBox">
                        <p class="goArticle"><i class="ivu-icon ivu-icon-md-arrow-round-back"></i>
                            <span>小程序mpvue框架开发时遇到的坑</span></p>
                        <p class="goArticle"><span>无</span>
                            <i class="ivu-icon ivu-icon-md-arrow-round-forward"></i>
                        </p></div>
                </div>
            </div>
        </transition>
        <div class="commentbox">
            <div class="comment-title"><p>评论 <span>「 1 」</span>
            </p></div>
            <div class="input-box">
                <div class="userbox">
                    <div class="user-img"><img
                            src="https://avatars.dicebear.com/v2/identicon/id-.svg"
                            alt=""><h4>游客</h4></div>
                </div>
                <div class="textbox">
                    <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type"><textarea
                            wrap="soft" autocomplete="off" spellcheck="false"
                            placeholder="说点什么。。支持markdown语法，尾部2个空格后回车才会换行，最长400个字" rows="2" maxlength="400"
                            class="ivu-input"
                            style="height: 94px; min-height: 94px; max-height: 178px; overflow-y: hidden;"></textarea>
                    </div>
                    <div class="submit-box">
                        <div class="ykname">
                            <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type"
                                 style="width: 150px;"><!----> <!----> <i
                                    class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                                <input autocomplete="off" spellcheck="false" type="text" placeholder="游客可以选填昵称"
                                       class="ivu-input ivu-input-default"> <!----></div>
                        </div>
                        <el-button type="primary" plain autofocus="false">提交评论</el-button>
<!--                        <button type="button" class="ivu-btn ivu-btn-primary">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;-->
<!--                            <span><i class="ivu-icon ivu-icon-ios-create"></i>-->
<!--            -->
<!--          </span></button>-->
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class="commentList">
                        <div class="user-ava"><img
                                src="https://avatars.dicebear.com/v2/identicon/id-null.svg"
                                alt=""></div>
                        <div class="comment-box animate03">
                            <div class="username"><span><i
                                    class="ivu-icon ivu-icon-md-person"></i>
                游客
                <em></em><span class="created"><i
                                        class="el-icon-time"></i>2019-09-05 22:44:15</span></span>
                            </div>
                            <div class="com_detail"><p>博客加载缓慢原因找到了吗？</p>
                            </div>
                            <div class="delete">
                                <div class="ivu-poptip ivu-poptip-confirm">
                                    <div class="ivu-poptip-rel"></div>
                                    <div class="ivu-poptip-popper"
                                         style="display: none; position: absolute; will-change: top, left; top: 18px; left: 0px;"
                                         x-placement="left">
                                        <div class="ivu-poptip-content">
                                            <div class="ivu-poptip-arrow"></div>
                                            <div class="ivu-poptip-inner">
                                                <div class="ivu-poptip-body"><i
                                                        class="ivu-icon ivu-icon-ios-help-circle"></i>
                                                    <div class="ivu-poptip-body-message">是否删除该评论?</div>
                                                </div>
                                                <div class="ivu-poptip-footer">
                                                    <button type="button" class="ivu-btn ivu-btn-text ivu-btn-small">
                                                        <!----> <!----> <span>取消</span></button>
                                                    <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-small">
                                                        <!----> <!----> <span>确定</span></button>
                                                </div>
                                            </div> <!----></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!----></div>
            </div>
        </div>

    </div>
</template>

<script>
    import load from '@/components/RotateLoading'

    export default {
        name: "Article",
        components: {
            load
        },
        created() {
            setTimeout(() => {
                this.isLoad = 0
            }, 500)
        },
        data() {
            return {
                isLoad: 1
            }
        }
    }
</script>

<style scoped>
    /****************************容器部分************************/
    .detail {
        max-width: 1080px;
        margin: 30px auto 0;
        padding: 50px 50px 20px;
        font-size: 16px;
        color: #444;
        background: rgba(255, 255, 255);
    }

    .title-box {
        margin: 20px auto 40px;
    }

    .title-box h1 {
        font-size: 3em;
        padding: 0 0 50px;
        color: #22292f;
        line-height: 1.15;
        font-family: monospace;
    }

    .title-box .post-box {
        border-top: 1px solid #b8c2cc;
        background: #f8fafc;
        border-bottom: 1px solid #b8c2cc;
        padding: 7px 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-weight: 600;
        color: #606f7b;
        font-family: auto;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        line-height: 28px;
    }

    .title-box .post-box > div {
        margin-right: 20px;
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
    .commentbox{
        max-width: 1080px;
        background-color: white;
        margin: auto;
        padding: 50px 35px 20px;
       /* padding: 20px 0 40px;*/
    }
    .comment-title{
        font-size: 20px;
        margin: 10px 0 15px;
        border-left: 4px solid #f7576c;
        padding-left: 10px;
        line-height: 22px;
    }
    .comment-title span{
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
        padding: 8px 0 4px!important;
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
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
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
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
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

</style>