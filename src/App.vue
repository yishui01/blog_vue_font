<template>
    <div class="contianer">
        <el-row>
            <el-col :span="4">saf</el-col>
            <el-col :span="16" style="position: relative;padding-bottom: 280px;">
                <myhead></myhead>
                <div>
                    <router-view/>
                </div>
                <myfoot class="footer"></myfoot>
            </el-col>
            <el-col :span="4"> <el-button @click="changeColor">changeColor</el-button></el-col>
        </el-row>
    </div>
</template>
<script>
    import myhead from '@/components/myhead'
    import myfoot from '@/components/myfoot'
    export default {
        name: "app",
        components: {
            myhead,
            myfoot
        },
        mounted () {
           document.querySelector('body').setAttribute('style', 'background-color:#88ada6;')
        },
        methods:{
            changeColor(){
                document.querySelector('body').setAttribute('style', 'background-color:#395260;')
            }
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body {
        background-image: url('https://works.yangerxiao.com/chinese-colors/00746b7e611ff49d789bc56df95eba4b.png');
        transition: background-color 1.6s ease 0s;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
    /***去掉滚动条但不影响滚动***/
    body::-webkit-scrollbar {
        display: none;
    }
    .footer{
        background: black;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>
