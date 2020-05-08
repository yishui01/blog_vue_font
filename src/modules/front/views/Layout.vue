<template>
    <div class="contianer allDiv" style="overflow: hidden">
        <myhead></myhead>
        <el-row style="margin-top: 80px;min-height: 1000px;">
            <el-col :sm="{span:2,offset:2}" :xs="0">
                <div class="hQSjWe" @click="changePoems">
                    <transition name="fade">
                        <div class="sc-jzJRlG byuKKj"  v-show="showPoems" >
                            <span class="line sct"> {{author}}·《{{title}}》</span>
                            <span class="line">「{{pharagraphs}}」</span>
                        </div>
                    </transition>
                </div>
            </el-col>
            <el-col :sm="20" :xs="24">
                <div>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive" class="slide"/>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive" class="slide"/>
                </div>
            </el-col>
        </el-row>
        <myfoot class="footer"></myfoot>
    </div>
</template>

<script>
    import myhead from '@/components/myhead'
    import myfoot from '@/components/myfoot'
    import {getPoems} from "../../../api/home/poems";

    export default {
        name: "Layout",
        components: {
            myhead,
            myfoot
        },
        created(){
            this.changePoems()
        },
        data() {
            return {
                showPoems:false,
                pharagraphs: "无边家国事 并入双蛾翠",
                author: "秋瑾",
                title: "菩萨蛮·寄女伴"
            }
        },
        methods: {
            changePoems() {
                getPoems().then((res) => {
                    var poems = res.data
                    if (poems.Paragraphs[0].length > 30) {
                        this.changePoems()
                        return
                    }
                    this.showPoems = false
                    setTimeout(()=>{
                        this.author = poems.Author
                        this.title = poems.Title
                        this.pharagraphs = poems.Paragraphs[0]
                    },200)

                    setTimeout(()=>{
                        this.showPoems = true
                    },200)

                })
            }
        }
    }
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
    /** {*/
    /* text-shadow: 0 1 px #eee, 0 0 1 px rgba(0, 0, 0, .2);*/
    /*}*/

    .allDiv {
        min-height: 1000px;
    }

    .footer {
        bottom: 0;
        width: 100%;
    }

    /**********左边栏***********/
    .hQSjWe {
        background: rgba(255, 255, 255, 0.1);
        left: 6%;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px;
        box-sizing: border-box;
        width: 7rem;
        margin-top: 1.8rem;
        margin-right: 0.5rem;
        min-height: 200px;
        border-radius: 6px;
        padding: 1.5rem .5rem 6rem;
        cursor: pointer;
        transition: 1s;
    }
    .hQSjWe > h2 {
        text-transform: capitalize;
        font-size: 0.6rem;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        position: absolute;
        right: 0.2rem;
        top: 0.4rem;
        color: inherit;
    }

    .byuKKj {
        color: rgb(255, 255, 240);
        line-height: 1.4rem;
        margin-top: 1rem;
        text-shadow: rgba(33, 33, 33, 0.6) 0 0 4px;
        font-weight: bold;
        padding: 0.4rem;
        animation: 1s ease 0s 1 normal forwards running hbOYnO;
    }

    .byuKKj .line {
        color: inherit;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        letter-spacing: 0.4rem;
        font-size: 1.6rem;
        position: relative;
        top: 5px;
        margin-left: 5px;
    }

    .byuKKj .sct {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.2rem;
        position: relative;
        top: -9px;
        margin-right: 7px;
    }

    /*************右侧底部******************/
    .rdiZx .colorSet {
        position: fixed;
        bottom: 1rem;
        right: 3rem;
        z-index: 999;
        padding: 0 1.7rem;
        color: white;
    }

    .dhAXtJ ul {
        display: flex;
        position: relative;
    }

    .dhAXtJ ul > li {
        margin-right: -2.6rem;
    }

    .dhAXtJ.expand ul li {
        margin-right: 0.35rem;
    }


    .dhAXtJ ul > li {
        cursor: pointer;
        box-shadow: black 0px 0px 0.8rem;
        width: 3.6rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 800;
        transition: all 0.6s ease 0s;
        border-radius: 50%;
    }

    .dhAXtJ.expand .btn {
        transform: translateY(-50%) rotateZ(180deg);
    }

    .dhAXtJ .btn {
        color: white;
        cursor: pointer;
        position: absolute;
        right: -1.6rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3.6rem;
        height: 3.6rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        font-size: 1.2rem;
        box-shadow: black 1px -1px 6px;
        background: rgb(51, 51, 51);
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        border-radius: 50%;
        transition: all 0.6s ease 0s;
    }

    .dhAXtJ ul > li.selected {
        transform: translateY(-1.6rem);
    }


    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        overflow: auto;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #e6e6e6;
        min-height: 25px;
        min-width: 25px;
        border: 1px solid #e0e0e0;
    }

    ::-webkit-scrollbar-track {
        background-color: #f7f7f7;
        border: 1px solid #efefef;
    }


</style>
