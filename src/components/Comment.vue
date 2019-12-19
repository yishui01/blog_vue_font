<template>
    <div>
        <div style="text-align: left;margin-bottom: 60px;clear: both;">
            <div class="avatarDiv" style="float: left;">
                <img class="avatarImg"
                     src="https://c.disquscdn.com/uploads/forums/533/4564/avatar92.jpg?1551538952">
            </div>
            <div class="bodyDiv"
                 style="margin-left: 80px;padding-top: 5px;text-align: left;">
                <div style="line-height: 1;font-size: 14px;margin-bottom: 3px;">
                    <span style="color:#076dd0;font-weight:700;">BABY熊</span>
                    <span class="dsqjs-bullet"></span>
                    <time style="font-size: 12px;color: #656c7a;">2019-10-10 15:36</time>
                </div>
                <div style="font-size: 15px; line-height: 1.5; word-wrap: break-word; overflow: hidden;color: #555;">
                    想加大群结果点错了申请了小群，我来是想问谁可以把我拉进大群吗？2365858148，感激不尽呀~
                    如果只有电报群，也请评论告诉我一下下~
                    另外我是以前的群员，只是举报风波让我迷了路。
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        data() {
            return {
                comm: [
                    1,
                    2
                ]
            }
        }
    }
</script>

<style scoped>
    .avatarImg {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }

    .dsqjs-bullet {
        line-height: 1.4;
        margin: 0 2px;
    }

    .dsqjs-bullet::after {
        color: #c2c6cc;
        content: "·";
        font-weight: 700;
    }
</style>