<template>
  <el-dialog
    class="select-file"
    :title="'选择' + initType(type)"
    :visible.sync="visible"
    width="width"
    :before-close="handleClose"
    :append-to-body="true">
    <div class="content">
      <div class="right">
        <!-- 条件栏 -->
        <page-filter
          class="filter"
          :query.sync="filterInfo.query"
          :filter-list="filterInfo.list"
          :list-type-info="listTypeInfo"
          @handleClick="handleClick"
          @handleEvent="handleEvent"/>
        <!-- 表格 -->
        <page-table
          :listen-height="false"
          :refresh="tableInfo.refresh"
          :init-curpage="tableInfo.initCurpage"
          :data.sync="tableInfo.data"
          :api="getListApi"
          :query="filterInfo.query"
          :field-list="tableInfo.fieldList"
          :list-type-info="listTypeInfo"
          :handle="tableInfo.handle"
          @handleClick="handleClick"
          @handleEvent="handleEvent"/>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { getListApi } from '@/api/admin/file'
import PageFilter from '@/components/PageFilter'
import PageTable from '@/components/PageTable'
function initType (type) {
  switch (type) {
    case 1:
      return '文件'
    case 2:
      return '图片'
    case 3:
      return '音乐'
    case 4:
      return '视频'
  }
}
export default {
  name: 'SelectFile',
  components: {
    PageFilter,
    PageTable
  },
  // 注册v-model
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    // 文件类型，默认为图片
    type: {
      type: Number,
      default: 2
    },
    visible: {
      type: Boolean
    }
  },
  data () {
    return {
      getListApi,
      //getFileAllApi,
      // 相关列表
      listTypeInfo: {
        treeList: []
      },
      // 过滤相关配置
      filterInfo: {
        query: {
          name: '',
          suffix: '',
          f_id: '',
          type: this.type
        },
        list: [
          { type: 'input', label: initType(this.type) + '名称', value: 'name' },
          // {type: 'input', label: initType(this.type) + '类型', value: 'suffix'},
          { type: 'input', label: '文件标签', value: 'tag' },
          // {type: 'date', label: '创建时间', value: 'create_time'},
          { type: 'button', label: '搜索', btType: 'primary', icon: 'el-icon-search', event: 'search', show: true }
        ]
      },
      // 表格相关
      tableInfo: {
        refresh: 1,
        initTable: false,
        initCurpage: 1,
        pager: false,
        data: [],
        fieldList: [
          { label: initType(this.type), value: 'url', type: 'image', hidden: this.type !== 2 },
          { label: initType(this.type) + '名称', value: 'name' },
          { label: initType(this.type) + '标签', value: 'tag' }
        ],
        handle: {
          fixed: 'right',
          label: '操作',
          width: '100',
          btList: [
            { label: '选择', type: 'primary', icon: 'el-icon-ship', event: 'selectFile', show: true }
          ]
        }
      }
    }
  },
  watch: {
  },
  mounted () {
    // hack, 在table创建出来之后再去调用
    this.$nextTick(() => {
      this.getList()
    })
  },
  methods: {
    initType,
    // 获取列表
    getList () {
      this.tableInfo.refresh = Math.random()
    },
    // 按钮点击
    handleClick (event, data) {
      const tableInfo = this.tableInfo
      const dialogInfo = this.dialogInfo
      switch (event) {
      // 搜索
        case 'search':
        // 重置分页
          tableInfo.refresh = Math.random()
          break
        case 'selectFile':
        // 将选择的数据派发出去
          this.$emit('input', data.url)
          // 关闭弹窗
          this.handleClose()
          break
          // 弹窗点击关闭
        case 'close':
          dialogInfo.visible = false
          break
      }
    },
    // 触发事件
    handleEvent (event, data) {
      const tableInfo = this.tableInfo
      const filterInfo = this.filterInfo
      switch (event) {
      // 对表格获取到的数据做处理
        case 'list':
          if (!data) return
          data.forEach(item => {
            item.size = this.$fn.bytesToSize(item.size)
            item.create_time = this.$fn.switchTime(item.create_time, 'YYYY-MM-DD hh:mm:ss')
            item.update_time = this.$fn.switchTime(item.update_time, 'YYYY-MM-DD hh:mm:ss')
          })
          break
          // 左键点击的处理
        case 'leftClick':
          const obj = JSON.parse(JSON.stringify(data.data))
          // 重置分页
          tableInfo.initCurpage = Math.random()
          // 刷新列表
          tableInfo.refresh = Math.random()
          // 定义当前数据搜索范围
          filterInfo.query.f_id = obj.id
          break
      }
    },
    // 关闭弹窗前的回调
    handleClose (done) {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-file{
  .content{
    display: flex;
    .left, .right{
      height: 400px;
      overflow: auto;
    }
    .left{
      width: 180px;
    }
    .right{
      position: relative;
      margin-left: 10px;
      flex: 1;
      .filter{
        top: 0;
        position: sticky;
        z-index: 10;
        background: white;
      }
    }
  }
}
</style>
