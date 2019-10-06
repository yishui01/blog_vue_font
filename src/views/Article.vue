<template>
    <div>
        <div v-show="isLoad" style="text-align: center;padding-left: 45%;padding-top: 100px;">
            <load></load>
        </div>
        <transition name="fade_y">
        <div class="detail"  v-show="!isLoad">
            <div class="title-box">
                <h1>如何用postman传复杂的数据类型</h1>
                <div class="post-box">
                    <div><i data-v-524742a0="" class="iconfont lv-icon-kalendar"></i>
                        2019/09/26
                    </div>
                    <div class="tag-box"><i class="iconfont lv-icon-biaoqian6"></i><span>postman</span></div>
                    <div><i class="iconfont lv-icon-huore"></i>22热度</div>
                </div>
            </div>

            <div class="articleContent">
                <div data-v-524742a0=""><p>postman真的是非常非常强大，很多复杂的请求都是可以模拟的</p>
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
                <div data-v-524742a0="" class="posmition"><p data-v-524742a0="">文章版权所有：<a data-v-524742a0=""
                                                                                          href="https://github.com/sweida"
                                                                                          target="_black">sweida</a>，采用
                    <a data-v-524742a0="" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                       target="_black">知识共享署名-非商业性使用 4.0 国际许可协议</a> 进行许可。</p>
                    <p data-v-524742a0="">欢迎分享，转载务必保留出处及原文链接 <a data-v-524742a0=""
                                                                href="http://www.golang365.com/#/blog/82"
                                                                target="_blank">http://www.golang365.com/#/blog/82</a>
                    </p></div>
                <div data-v-524742a0="" class="giveLike animate03"><i data-v-524742a0=""
                                                                      class="iconfont lv-icon-yijin13-zan"></i><span
                        data-v-524742a0="">2</span></div>
                <div data-v-524742a0="" class="nextBox"><p data-v-524742a0="" class="goArticle"><i data-v-524742a0=""
                                                                                                   class="ivu-icon ivu-icon-md-arrow-round-back"></i><span
                        data-v-524742a0="">小程序mpvue框架开发时遇到的坑</span></p>
                    <p data-v-524742a0="" class="goArticle"><span data-v-524742a0="">无</span><i data-v-524742a0=""
                                                                                                class="ivu-icon ivu-icon-md-arrow-round-forward"></i>
                    </p></div>
            </div>

        </div>
        </transition>
    </div>
</template>

<script>
    import load from '@/components/RotateLoading'
    export default {
        name: "Article",
        components:{
            load
        },
        created() {
            setTimeout(()=>{
                this.isLoad = 0
            },1000)
        },
        data(){
            return{
                isLoad:1
            }
        }
    }
</script>

<style scoped>
    /****************************容器部分************************/
    .detail {
        max-width: 990px;
        margin: 30px auto;
        padding: 50px 35px 20px;
        font-size: 16px;
        color: #444;
        background: rgba(255, 255, 255);
    }

    .title-box{
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


</style>