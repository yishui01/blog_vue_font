<template>
    <footer>
        <div class="foot-text">
            <a href="https://github.com/sweida" target="_blank" class="link">
<!--                <Icon type="logo-github" />-->
            </a>
            <p>本站已萌萌哒运行{{longTime}}</p>
            <p class="base">Crafted with <i class="iconfont lv-icon-aixin"></i> by
                <span>@zuiqiangqishao</span>&nbsp;&nbsp;base on
                <a class="green" href="https://github.com/zuiqiangqishao/blog-go-microservice" target="_blank">Go</a> +
                <a class="green" href="https://github.com/zuiqiangqishao/blog_vue_font" target="_blank">Vue</a>
            </p>
            <p>© 2018 - {{year}} &nbsp;我看看不到 &nbsp;&nbsp;<a href="http://www.beian.miit.gov.cn" target="_blank" style="color: #fff;text-decoration: none;">湘ICP备20006727号</a></p>
        </div>
    </footer>
</template>

<script>


    export default {
        data () {
            return {
                longTime: '',
                year: (new Date()).getFullYear()
            }
        },
        beforeMount() {
            setInterval(getRemainderTime, 1000)

            let that = this;
            function getRemainderTime (){
                let startTime = "2020-4-10"
                let s1 = new Date(startTime.replace(/-/g, "/")),
                    s2 = new Date(),
                    runTime = parseInt((s2.getTime() - s1.getTime()) / 1000);
                let day = Math.floor(runTime / 86400);
                runTime = runTime % 86400;
                let hour = Math.floor(runTime / 3600);
                runTime = runTime % 3600;
                let minute = Math.floor(runTime / 60);
                runTime = runTime % 60;
                let second = runTime;

                that.longTime = day+'天'+hour+'小时'+minute+'分'+second+'秒';
            }
            getRemainderTime();
        },
        methods: {

        }

    }
</script>

<style scoped lang="stylus">
footer
    position relative
    background: rgba(62,52,38,1);
    background: rgba(61,72,82,.5);
link
    color #fff
    i
        margin-bottom 15px
        font-size 28px
    i:hover
        color #929292

.foot-text
    line-height 30px
    position relative
    font-size 14px
    text-align: center;
    // background: #93a6ab;
    width: 100%;
    padding: 15px 0 20px;
    color: #fff;
    .base
        span, .green
            color #ffed4a
            font-size 16px
            margin 0 2px
.lv-icon-aixin
    color red
</style>

