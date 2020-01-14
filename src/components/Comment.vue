<template>
    <div>
        <div v-for="(item) in comments" :key="item.id" class="commP" :class="{'commClick':showRyBox(item.id)}">
            <div class="avatarDiv" style="float: left;">
                <img class="avatarImg"
                     src="https://c.disquscdn.com/uploads/forums/533/4564/avatar92.jpg?1551538952">
            </div>
            <div class="contentDiv">
                <div class="c-head">
                    <span class="name">BABY熊</span>
                    <span class="point"></span>
                    <time class="time">2019-10-10 15:36</time>
                </div>
                <div v-html="item.content" class="commText"/>

                <btn2 style="float: right;" text="回复" @click.native="clickRepBtn(item.id)"/>
                <!--评论回复框-->
                <replybox :id="item.id" @submit='replyCom' v-if="showRyBox(item.id)"
                          style="clear: both;margin-top: 35px;"/>
                <!--子评论dfs-->
                <Comment @reply='replyCom' v-if="item.children && item.children.length>0"
                         :comments="item.children"></Comment>
            </div>
        </div>
    </div>
</template>

<script>
    import btn2 from '@/components/Btn2'
    import replybox from '@/components/Reply'

    export default {
        name: "Comment",
        components: {
            btn2,
            replybox
        },
        props: {
            comments: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            replyCom(obj) {
                this.$emit('reply', obj)
            },
            showRyBox(id) {
                return id == this.$store.state.repId
            },
            clickRepBtn(id) {
                if (id == this.$store.state.repId) {
                    this.$store.commit('REPCLICK', -1)
                } else {
                    this.$store.commit('REPCLICK', id)
                }
            }
        }
    }
</script>

<style scoped>
    @-webkit-keyframes coma {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }


    .c-head {
        line-height: 1;
        font-size: 14px;
        margin-bottom: 3px;
    }

    .c-head .name {
        color: #076dd0;
        font-weight: 700;
    }

    .c-head .point {
        line-height: 1.4;
        margin: 0 2px;
    }

    .c-head .point::after {
        color: #c2c6cc;
        content: "·";
        font-weight: 700;
    }

    .c-head .time {
        font-size: 12px;
        color: #656c7a;
    }

    .contentDiv {
        margin-left: 80px;
        padding-top: 5px;
        text-align: left;
        padding-bottom: 6px;
    }

    .commText {
        font-size: 15px;
        line-height: 1.5;
        word-wrap: break-word;
        overflow: hidden;
        color: #555;
    }

    .commP {
        transition: .3s;
        text-align: left;
        padding: 10px 3px 20px;
        border-radius: 5px;
        clear: both;
        -webkit-animation: coma 1s ease-in-out;
        animation: coma 1s ease-in-out;
    }

    .commP:hover {
        background: #f5f5f5;
    }

    .commClick {
        background: #f5f5f5;
    }

    .avatarImg {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }


</style>
