<!-- 分页组件 -->
<template>
    <div v-show="!listInfo.loading"
            class="pagination-container">
        <el-pagination
                background
                :current-page.sync="listInfo.page_num"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="total"
                @current-change="handleCurrentChange"/>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
          total:{  // 总条数
              type:Number,
              default:0
          },
          pageSize :{
              type:Number,
              default:20
          }
        },
        data(){
            return {
                listInfo: {
                    loading: false, // 加载动画
                    page_sizes: [5, 10, 20, 50, 100], // 分页数量列表
                    page_num: 1, // 当前页
                }
            }
        },
        methods:{
            handleCurrentChange (val) {
                this.listInfo.page_num = val // 当前页
                this.$emit("pageClick",this.listInfo.page_num)
            },
        }
    }
</script>

<style>
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
        margin: 0 5px;
        color: #606266;
        min-width: 50px !important;
        line-height: 50px;
        height: 50px;
        border-radius: 50% !important;
        background: white !important;
        font-size: 16px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #409EFF !important;
        color: #FFF;
    }
    .el-pagination.is-background .el-pager li:hover{
        background: #409EFF !important;
        color: white !important;
    }

</style>