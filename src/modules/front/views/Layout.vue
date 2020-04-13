<template>
    <div class="contianer allDiv" style="overflow: auto">
        <myhead></myhead>
        <el-row style="margin-top: 80px;">
            <div class="hQSjWe">
                <div class="sc-jzJRlG byuKKj ">
                    <span class="line sct">秋瑾 ·《菩萨蛮·寄女伴》</span>
                    <span class="line">「无边家国事 并入双蛾翠」</span>
                </div>
            </div>
            <el-col :span="16" :offset="4">
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

    export default {
        name: "Layout",
        components: {
            myhead,
            myfoot
        }
    }
</script>
<style scoped>
    *{
        //text-shadow: 0 1px #eee, 0 0 1px rgba(0,0,0,.2);
    }
    .allDiv {
        min-height: 1000px;
    }

    .footer {
        bottom: 0;
        width: 100%;
    }

    /**********左边栏***********/
    .hQSjWe {
        position: absolute;
        left: 6%;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px;
        box-sizing: border-box;
        width: 7rem;
        margin-top: 3.8rem;
        margin-right: 0.5rem;
        min-height: 18rem;
        border-radius: 6px;
        padding: 2rem 1rem 8rem;
        cursor: pointer;
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
        padding: 0.4rem;
        animation: 1s ease 0s 1 normal forwards running hbOYnO;
    }

    .byuKKj .line {
        color: inherit;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        letter-spacing: 0.4rem;
        font-size: 1.4rem;
        position: relative;
        top: 5px;
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
        height: 3.6rem;
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
