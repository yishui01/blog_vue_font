<template>
    <div class="app-container">
        <!-- 条件栏 -->
        <page-filter
                :query.sync="filterInfo.query"
                :filter-list="filterInfo.list"
                :list-type-info="listTypeInfo"
                @handleClick="handleClick"
                @handleEvent="handleEvent"
        />
        <!-- 表格 -->
        <page-table
                size="medium"
                :refresh="tableInfo.refresh"
                :init-curpage="tableInfo.initCurpage"
                :data.sync="tableInfo.data"
                :api="getListApi"
                :query="filterInfo.query"
                :field-list="tableInfo.fieldList"
                :list-type-info="listTypeInfo"
                :handle="tableInfo.handle"
                @handleClick="handleClick"
                @handleEvent="handleEvent" />

        <!-- 弹窗 -->
        <page-dialog
                :title="dialogInfo.title[dialogInfo.type]"
                :visible.sync="dialogInfo.visible"
                :width="dialogInfo.width"
                :bt-loading="dialogInfo.btLoading"
                :bt-list="dialogInfo.type === 'uploadFile' ? undefined : dialogInfo.btList"
                @handleClick="handleClick"
                @handleEvent="handleEvent">
            <Upload
                    v-if="dialogInfo.type === 'uploadFile' && dialogInfo.visible"
                    :upload-type="'file'"
                    @handleEvent="handleEvent"
            />
        </page-dialog>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {
        getListApi,
        createApi,
        deleteApi
    } from '@/api/admin/file'
    import PageFilter from '@/components/PageFilter'
    import PageTable from '@/components/PageTable'
    import PageDialog from '@/components/PageDialog'
    import Upload from '@/components/Upload'


    export default {
        components: {
            PageFilter,
            PageTable,
            PageDialog,
            Upload
        },
        data() {
            return {
                getListApi,
                createApi,
                deleteApi,
                dialogInfo: {
                    title: {
                        create: '添加目录',
                        update: '编辑目录',
                        uploadFile: '上传文件',
                        updateFile: '编辑文件'
                    },
                    visible: false,
                    type: '',
                    btLoading: false,
                    btList: [
                        { label: '关闭', type: '', icon: '', event: 'close', show: true },
                        { label: '保存', type: 'primary', icon: '', event: 'save', saveLoading: false, show: true }
                    ]
                },
                // 相关列表
                listTypeInfo: {},
                // 过滤相关配置
                filterInfo: {
                    query: {
                        create_user: '',
                        account: '',
                        name: ''
                    },
                    list: [
                        {type: 'input', label: '文件名', value: 'name'},
                        {type: 'input', label: '标签', value: 'tag'},
                        {
                            type: 'button',
                            label: '搜索',
                            btType: 'primary',
                            icon: 'el-icon-search',
                            event: 'search',
                            show: true
                        },
                        {
                            type: 'button',
                            label: '添加',
                            btType: 'primary',
                            icon: 'el-icon-plus',
                            event: 'uploadFile',
                            show: true
                        }
                    ]
                },
                // 表格相关
                tableInfo: {
                    refresh: 1,
                    initCurpage: 1,
                    data: [],
                    fieldList: [
                        {label: '预览', value: 'url', type: 'image',width:"150px"},
                        {label: '上传日期', value: 'create_time',width:"180px"},
                        {label: '文件名', value: 'name'},
                        {label: '外链', value: 'url',width:"550px"},
                        {label: '标签', value: 'tag',width:"150px"},
                    ],
                    handle: {
                        fixed: 'right',
                        label: '操作',
                        width: '280',
                        btList: [
                            {
                                label: '复制外链',
                                type: 'success',
                                icon: 'el-icon-document-copy',
                                event: 'copy',
                                loading: 'statusLoading',
                                show: true
                            },
                            {
                                label: '删除',
                                type: 'danger',
                                icon: 'el-icon-delete',
                                event: 'delete',
                                loading: 'deleteLoading',
                                show: true
                            }
                        ]
                    }
                },
            }
        },
        computed: {
            ...mapGetters([
                'theme',
                'userInfo',
                'dataPerms'
            ])
        },
        watch: {
            'dialogInfo.visible'(val) {
                if (!val) {
                    // 表单验证初始化
                    // 重置弹窗按钮loading
                    this.dialogInfo.btLoading = false
                }
            },
        },
        mounted() {
            this.getList()
        },
        methods: {
            // 获取列表
            getList() {
                this.tableInfo.refresh = Math.random()
            },
            // 得到placeholder的显示
            getPlaceholder(row) {
                let placeholder
                if (row.type === 'input' || row.type === 'textarea') {
                    placeholder = '请输入' + row.label
                } else if (row.type === 'select' || row.type === 'time' || row.type === 'date') {
                    placeholder = '请选择' + row.label
                } else {
                    placeholder = row.label
                }
                return placeholder
            },
            // 按钮点击
            handleClick(event, data) {
                const tableInfo = this.tableInfo
                const dialogInfo = this.dialogInfo
                switch (event) {
                    // 搜索
                    case 'search':
                        // 重置分页
                        tableInfo.initCurpage = Math.random()
                        tableInfo.refresh = Math.random()
                        break
                    // 创建
                    case 'uploadFile':
                        //上传
                        dialogInfo.type = event
                        dialogInfo.visible = true
                        break
                    // 删除
                    case 'delete':
                        data.deleteLoading = true
                        console.log(data)
                        this.$handleAPI(event, deleteApi, data.id).then(res => {
                            tableInfo.refresh = Math.random()
                            data.deleteLoading = false
                        }).catch(() => {
                            data.deleteLoading = false
                        })
                        break
                    // 弹窗点击关闭
                    case 'close':
                        dialogInfo.visible = false
                        break
                    // 弹窗点击保存
                    case 'copy':
                        this.$fn.copyData(data.url)
                        break
                }
            },
            // 触发事件
            handleEvent(event, data) {
                switch (event) {
                    // 对表格获取到的数据做处理
                    case 'list':
                        if (!data) return
                        data.forEach(item => {
                            this.$set(item, 'statusLoading', false) //用this.$set 给每个对象动态加个属性，这个属性会双向绑定，如果直接加则没有绑定效果
                            this.$set(item, 'deleteLoading', false)
                            item.create_time = this.$fn.switchTime(item.created_at, 'YYYY-MM-DD hh:mm:ss')
                        })
                        break;
                    case 'upload':
                        if (data) {
                            // 刷新列表
                            this.tableInfo.refresh = Math.random()
                            // 关闭弹窗
                            this.handleClick('close')
                        }
                        break
                }
            },
        }
    }
</script>

<style lang="scss">
    .slot-avatar {
        height: 40px;
        display: flex;
        align-items: center;

        img {
            padding-right: 10px;
        }
    }
</style>
