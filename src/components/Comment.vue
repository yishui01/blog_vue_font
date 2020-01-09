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
                <div v-html="content" class="commContent"
                     style="font-size: 15px; line-height: 1.5; word-wrap: break-word; overflow: hidden;color: #555;">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props:{
            content:{
                type:String,
                default:''
            }
        },
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
