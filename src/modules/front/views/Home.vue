<template>
    <div>
        <div class="content">
            <div class="article slide" v-for="(item) in artList" @click="$to('art',{sn:item.sn})">
                <div class="imgDiv forceShow" >
                    <img class="title_img" :src="item.img">
                </div>
                <div class="introDiv">
                    <div class="create_time">
                        <i class="el-icon-date tagIcon"></i>发布于 {{item.created_at}}
                    </div>
                    <h1>{{item.title}}</h1>
                    <div class="tag-box">
                        <span v-if="item.tags.length > 0"><i class="el-icon-price-tag tagIcon"
                                                             style="vertical-align: middle;"></i></span>
                        <span class="tagSpan" v-for="(t) in item.tags" v-if="t!=''">
                           {{t}}
                        </span>
                    </div>
                    <div class="clickAndComm">
                        <span><i class="el-icon-star-off tagIcon"></i> {{item.view_count}}热度</span>
                        <span><i class="el-icon-s-comment tagIcon"></i>{{item.cm_count}} 条评论</span>
                    </div>
                </div>
                <div class="classifybox">
                    <div class="classify">工具</div>
                </div>
            </div>
            <div class="paginate" v-show="artList.length > 0">
                <page :total="total" :pageSize="query.page_size" @pageClick="handlePage"/>
            </div>
        </div>


    </div>
</template>

<script>
    import {getArticle} from "../../../api/home/article";
    import page from "@/components/Pagination"
    export default {
        name: 'home',
        components:{
            page
        },
        data() {
            return {
                artList: [],
                total:0,
                query: { // 查询条件
                    page_num: 1, // 当前页
                    page_size: 2, // 每页条数
                }
            }
        },
        created() {

           this.getList()
        },
        mounted(){
        },
        methods: {
            getList(){
                getArticle(this.query).then((res) => {
                    this.artList = res.data.Lists
                    this.query.page_num = res.data.Page
                    this.query.page_size = res.data.PageSize
                    this.total = res.data.Total
                })
            },
            handlePage(val){
                this.query.page_num = val
                this.getList()
                this.$scrollTo(document.documentElement, 0, 200);
            }
        }
    }
</script>

<style scoped>
    *, :after, :before {
        box-sizing: border-box;
    }

    /****************************容器部分************************/
    .content {
        width: 70%;
        margin: 60px 5%;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .article {
        width: 100%;
        position: relative;
        display: flex;
        height: 280px;
        cursor: pointer;
        background: white;
        border-radius: 10px;
        margin-bottom: 40px;
        font-size: 12px;
        transition: 0.3s;
    }

    .article:hover {
        box-shadow: -5px 5px 10px #707070;
        transform: scale(1.02);
    }

    .paginate{
        width: 100%;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 100px;
    }

    /***********************这是每个article的选择器，单双切换***************************/
    /*.article:nth-child(3n), .article:nth-child(3n-1) {*/
    /*    width: 47.5%;*/
    /*    -webkit-box-orient: vertical;*/
    /*    -webkit-box-direction: normal;*/
    /*    -ms-flex-direction: column;*/
    /*    flex-direction: column;*/
    /*    height: auto;*/
    /*}*/

    /*.article:nth-child(3n) .title_img, .article:nth-child(3n-1) .title_img {*/
    /*    border-top-left-radius: 10px;*/
    /*    border-top-right-radius: 10px;*/
    /*    border-bottom-left-radius: 0;*/
    /*}*/

    /*.article:nth-child(3n) .introDiv, .article:nth-child(3n-1) .introDiv {*/
    /*    -webkit-box-flex: 0;*/
    /*    -ms-flex: 0 0 220px;*/
    /*    flex: 0 0 220px;*/
    /*}*/

    /************************头图部分*************************************/
    .imgDiv {
        width: 60%;
    }

    .title_img {
        width: 100%;
        height: 100%;
        border-radius: 10px 0 0 10px;
        -o-object-fit: cover;
        object-fit: cover;
        mix-blend-mode: multiply;
    }

    /*******************以下为左上角类别套带样式*************/
    .article:nth-child(3n) .classify, .article:nth-child(3n-1) .classify {
        background: linear-gradient(30deg, #ee7752, #e73c7e);
    }

    .article:nth-child(3n) .classifybox:after,
    .article:nth-child(3n) .classifybox:before,
    .article:nth-child(3n-1) .classifybox:after,
    .article:nth-child(3n-1) .classifybox:before {
        border-color: #621b18;
    }

    .classifybox {
        position: absolute;
        left: -8px;
        top: -8px;
        width: 100px;
        height: 100px;
        overflow: hidden;
        z-index: 30;
    }

    .classifybox:after, .classifybox:before {
        position: absolute;
        z-index: -1;
        content: "";
        display: block;
        border: 4px solid #3d4852;
        border-top-color: transparent;
        border-left-color: transparent;
        border-color: #2779bd;
    }

    .classifybox:after {
        bottom: 0;
        left: 0;
    }

    .classifybox:before {
        top: 0;
        right: 0;
    }


    .classify {
        width: 220px;
        left: -70px;
        top: 25px;
        text-align: center;
        padding: 4px 15px;
        position: relative;
        color: #fff;
        font-weight: 600;
        background-image: -webkit-gradient(linear, left top, right top, from(#23a6d5), to(#23d5ab));
        background-image: linear-gradient(90deg, #23a6d5, #23d5ab);
        text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
        box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    /********************以下为introDiv部分***************/
    .introDiv {
       width: 40%;
        padding: 25px 40px;
        color: #34495e;
    }

    .introDiv h1 {
        font-size: 24px;
        font-weight: 400;
        margin: 25px 0 25px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .create_time {
        text-align: right;
        margin-bottom: 5px;
    }

    .tag-box {
        margin-bottom: 5px;
    }

    .tagSpan {
        background-color: #fdf6ec;
        border-color: #faecd8;
        color: #e6a23c;
        display: inline-block;
        font-size: 12px;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;
        height: 20px;
        padding: 0 5px;
        line-height: 19px;
    }

    .tagIcon {
        margin-right: 5px;
        font-size: 14px;
    }

    .clickAndComm {
        line-height: 30px;
    }

    .clickAndComm span {
        margin-right: 30px;
    }
</style>
