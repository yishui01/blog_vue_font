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
                :refresh="tableInfo.refresh"
                :init-curpage="tableInfo.initCurpage"
                :data.sync="tableInfo.data"
                :api="getListApi"
                :query="filterInfo.query"
                :field-list="tableInfo.fieldList"
                :list-type-info="listTypeInfo"
                :handle="tableInfo.handle"
                @handleClick="handleClick"
                @handleEvent="handleEvent">
            <!-- 自定义插槽显示标题-->
            <template v-slot:col-title="scope">
                <el-tooltip class="item" effect="dark" content="查看文章详细信息" placement="left">
                    <a :style="`color: ${theme}; padding: 0 20px;`" @click="handleClick('view', scope.row)">{{
                        scope.row.title }}</a>
                </el-tooltip>
            </template>

            <template v-slot:col-tags="scope">
                <el-tag size="small" v-if="tag!=''" v-for="tag in scope.row.tags" style="margin:0 5px;">
                    {{tag}}
                </el-tag>
            </template>


        </page-table>
        <!-- 弹窗 -->
        <page-dialog
                :title="dialogInfo.title[dialogInfo.type]"
                :visible.sync="dialogInfo.visible"
                :width="dialogInfo.width"
                :bt-loading="dialogInfo.btLoading"
                :bt-list="dialogInfo.type === 'view' ? undefined : dialogInfo.btList"
                @handleClick="handleClick"
                @handleEvent="handleEvent">
            <p class="title">{{ articleInfo.title }}</p>
            <div class="markdown" v-html="marked(articleInfo.content)"/>
            <!-- form -->
            <page-form
                    :ref-obj.sync="formInfo.ref"
                    :data="formInfo.data"
                    :field-list="formInfo.fieldList"
                    :rules="formInfo.rules"
                    :label-width="formInfo.labelWidth"
                    :list-type-info="listTypeInfo">
                <!-- 自定义插槽的使用 -->
                <template v-slot:form-img>
                    <div class="slot-icon">
                        <img
                                :src="formInfo.data.img"
                                style="height: 30px;"
                        >
                        <span v-if="dialogInfo.type === 'view' && !formInfo.data.img">暂未设置图标</span>
                        <el-button
                                v-if="dialogInfo.type !== 'view'"
                                v-waves
                                type="primary"
                                icon="el-icon-picture"
                                size="mini"
                                @click="handleClick('selectFile')"
                        >
                            {{ formInfo.data.img ? '更换图片' : '选择图片' }}
                        </el-button>
                    </div>
                </template>
                <template v-slot:form-content>
                    <div class="slot-wikipedia">

                        <mavon
                                v-if="dialogInfo.type !== 'view'"
                                :value.sync="formInfo.data.content"
                                placeholder="请编写文章内容..."/>
                        <div
                                v-else
                                class="markdown"
                                v-html="marked(formInfo.data.content || '目前还没有内容')"/>
                    </div>
                </template>
            </page-form>
        </page-dialog>
        <!-- 选择文件组件 -->
        <select-file
                v-if="selectFileInfo.visible"
                v-model="formInfo.data.img"
                :type="selectFileInfo.type"
                :visible.sync="selectFileInfo.visible"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getListApi, createApi, updateApi, deleteApi} from '@/api/admin/article'
    import {getListApi as getTagList} from '@/api/admin/tag'
    import marked from '@/common/js/marked'
    import PageFilter from '@/components/PageFilter'
    import PageTable from '@/components/PageTable'
    import PageDialog from '@/components/PageDialog'
    import PageForm from '@/components/PageForm'
    import Mavon from '@/components/MavonEditor'
    import SelectFile from '@/components/SelectFile'

    export default {
        components: {
            PageFilter,
            PageTable,
            PageDialog,
            PageForm,
            Mavon,
            SelectFile
        },
        data() {
            const checkContent = (rule, value, callback) => {
                if (this.formInfo.data.content.length == 0) {
                    callback(new Error("文章内容不能为空"))
                } else {
                    callback()
                }
            }
            return {
                getListApi,
                createApi,
                updateApi,
                deleteApi,
                marked,
                // 相关列表
                listTypeInfo: {
                    flagList: [
                        {key: '草稿', value: 0},
                        {key: '上线', value: 1},
                        {key: '下线', value: 2},
                    ],
                    typeList: [
                        {key: '原创', value: 1},
                        {key: '转载', value: 2},
                        {key: '翻译', value: 3}
                    ],
                    tagList: []
                },
                // 过滤相关配置
                filterInfo: {
                    query: {
                        title: '',
                        type: '',
                        status: ''
                    },
                    list: [
                        {type: 'input', label: '关键词', value: 'keyword'},
                        //{ type: 'select', label: '类型', value: 'type', list: 'typeList' },
                        {type: 'select', label: '状态', value: 'status', list: 'flagList'},
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
                            event: 'create',
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
                        {label: 'id', value: 'id'},
                        {label: '文章标题', value: 'title', type: 'slot', minWidth: 180},
                        {label: '标签', value: 'tags', type: 'slot', minWidth: 180},
                        //{ label: '状态', value: 'type', type: 'select', list: 'typeList', width: 100 },
                        // {label: '描述', value: 'wikipedia', minWidth: 160},
                        {label: '状态', value: 'status', width: 90, type: 'select', list: 'flagList'},
                        {label: '排序', value: 'ord', width: 90},
                        // { label: '创建人', value: 'create_user_name' },
                        {label: '点击次数', value: 'view_count'},
                        {label: '评论数', value: 'cm_count'},
                        {label: '点赞数', value: 'laud_count'},
                        {label: '更新时间', value: 'updated_at', width: 180}
                        // {label: '更新人', value: 'update_user_name'},
                        // {label: '更新时间', value: 'update_time', minWidth: 180}
                    ],
                    handle: {
                        fixed: 'right',
                        label: '操作',
                        width: '260',
                        btList: [
                            // { label: '查看', type: 'primary', icon: 'el-icon-browse', event: 'view', show: true },
                            {label: '编辑', type: 'primary', icon: 'el-icon-edit', event: 'update', show: true},
                            {label: '删除', type: 'danger', icon: 'el-icon-delete', event: 'delete', show: true}
                        ]
                    }
                },
                // 文章相关
                articleInfo: {},

                // 表单相关
                formInfo: {
                    ref: null,
                    data: {
                        id: 0, // *唯一ID
                        title: '', //标题
                        tags:'',
                        img: '', // 图标
                        ord: 0, // 排序
                        content: '', // 标签百科
                        status: 0 //
                        // create_user: '', // 创建人
                        // create_time: '', // 创建时间
                        // update_user: '', // 修改人
                        // update_time: '' // 修改时间
                    },
                    fieldList: [
                        {label: '标题', value: 'title', type: 'input', required: true},
                        {label: '标签', value: 'tags', type: 'select', list: "tagList",multiple:true,filterable:true},
                        {label: '排序', value: 'ord', type: 'input'},
                        {label: '状态', value: 'status', type: 'select', list: 'flagList', required: true},
                        {label: '图片', value: 'img', type: 'slot', className: 'el-form-block'},
                        {
                            label: '内容',
                            value: 'content',
                            type: 'slot',
                            className: 'el-form-block',
                            validator: checkContent
                        }
                    ],
                    rules: {},
                    labelWidth: '120px'
                },
                // 弹窗相关
                dialogInfo: {
                    width: '80%',
                    title: {
                        create: '添加',
                        update: '编辑',
                        view: '文章信息'
                    },
                    visible: false,
                    type: '',
                    btLoading: false,
                    btList: [
                        {label: '关闭', type: '', icon: '', event: 'close', show: true},
                        {label: '保存', type: 'primary', icon: '', event: 'save', saveLoading: false, show: true}
                    ]
                },
                // 选择文件组件相关参数
                selectFileInfo: {
                    type: 2,
                    visible: false,
                    value: ''
                }
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
                const formInfo = this.formInfo
                if (!val) {
                    // 表单验证初始化
                    if (formInfo.ref) {
                        formInfo.ref.resetFields()
                    }
                    this.resetForm()
                    // 重置弹窗按钮loading
                    this.dialogInfo.btLoading = false
                }
            }
        },
        mounted() {
            this.initList()
            this.initRules()
            this.getList()
        },
        methods: {
            initList() {
                const listTypeInfo = this.listTypeInfo
                getTagList().then(res => {
                    listTypeInfo.tagList = res.data.lists.map(item => {
                        return {
                            key: item.name,
                            value: item.id
                        }
                    })
                })
            },
            // 初始化验证
            initRules() {
                const formInfo = this.formInfo
                formInfo.rules = this.$initRules(formInfo.fieldList)
            },
            // 获取列表
            getList() {
                this.tableInfo.refresh = Math.random()
            },
            // 按钮点击
            handleClick(event, data) {
                const tableInfo = this.tableInfo
                const dialogInfo = this.dialogInfo
                const formInfo = this.formInfo

                switch (event) {
                    // 搜索
                    case 'search':
                        // 重置分页
                        tableInfo.initCurpage = Math.random()
                        tableInfo.refresh = Math.random()
                        break
                    // 创建
                    case 'create':
                        dialogInfo.type = event
                        dialogInfo.visible = true
                        break
                    // 查看和编辑
                    case 'view':
                    // falls through 告诉ESlint不检查这一行
                    case 'update':
                        dialogInfo.type = event
                        dialogInfo.visible = true
                        // 显示信息
                        for (const key in data) {
                            // 存在则赋值
                            if (key in formInfo.data) {
                                formInfo.data[key] = data[key]
                              if (key === "tags"){ //根据tag名字查找字典，将其转换为对应的id
                                var tagNameArr = data[key]
                                var tagIdArr = []
                                if (tagNameArr.length > 0){
                                  for (let i=0;i<tagNameArr.length;i++){
                                    for (let j=0;j<this.listTypeInfo.tagList.length;j++){
                                      if (this.listTypeInfo.tagList[j].key == tagNameArr[i]){
                                        tagIdArr.push(this.listTypeInfo.tagList[j].value)
                                        break
                                      }
                                    }
                                  }
                                }
                                formInfo.data[key] = tagIdArr
                              }
                            }
                        }
                        break
                    case 'save':
                        this.formInfo.ref.validate(valid => {
                            if (valid) {
                                let api;
                                const params = this.formInfo.data
                                const type = this.dialogInfo.type
                                if (type === 'create') {
                                    api = createApi
                                } else if (type === 'update') {
                                    api = updateApi
                                } else {
                                    return
                                }
                                params.tags = params.tags.join(",")
                                dialogInfo.btLoading = true
                                this.$handleAPI(type, api, params).then(res => {
                                    dialogInfo.visible = false
                                    tableInfo.refresh = Math.random()
                                    dialogInfo.btLoading = false
                                }).catch(e => {
                                    dialogInfo.btLoading = false
                                })
                            }
                        })
                        break
                    // 删除
                    case 'delete':
                        this.$handleAPI(event, deleteApi, data.id).then(res => {
                             tableInfo.refresh = Math.random()
                        })
                        break
                    // 弹窗点击关闭
                    case 'close':
                        dialogInfo.visible = false
                        break
                    case 'selectFile':
                        this.selectFileInfo.visible = true
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
                            this.$set(item, 'statusLoading', false)
                            item.created_at = this.$fn.switchTime(item.created_at * 1000, 'YYYY-MM-DD hh:mm:ss')
                            item.updated_at = this.$fn.switchTime(item.updated_at * 1000, 'YYYY-MM-DD hh:mm:ss')
                            item.tags = item.tags.split(",")
                        })
                        break
                }
            },
            // 初始化表单
            resetForm() {
                this.formInfo.data = {
                    id: 0, // *唯一ID
                    title: '', //标题
                    img: '', // 图标
                    tags: '',
                    ord: 0, // 排序
                    content: '', // 标签百科
                    status: '' //
                    // create_user: '', // 创建人
                    // create_time: '', // 创建时间
                    // update_user: '', // 修改人
                    // update_time: '' // 修改时间
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    a {
        cursor: pointer;
    }

    .title {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 40px;
        color: black;
    }

    .slot-icon {
        height: 40px;
        display: flex;
        align-items: center;

        img {
            padding-right: 10px;
        }
    }

    .slot-wikipedia {
    }

</style>
