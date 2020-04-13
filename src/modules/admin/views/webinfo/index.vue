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
            <!-- 自定义插槽显示状态 -->
            <template v-slot:col-status="scope">
                <i
                        :class="scope.row.status == 0 ? 'el-icon-check' : 'el-icon-close'"
                        :style="{color: scope.row.status == 0 ? '#67c23a' : '#f56c6c', fontSize: '20px'}"
                />
            </template>

            <!-- 自定义插槽状态按钮 -->
            <template v-slot:bt-status="scope">
                <el-button
                        v-if="scope.data.item.show && (!scope.data.item.ifRender || scope.data.item.ifRender(scope.data.row))"
                        v-waves
                        size="mini"
                        :type="scope.data.row.status - 1 >= 0 ? 'success' : 'danger'"
                        :icon="scope.data.item.icon"
                        :disabled="scope.data.item.disabled"
                        :loading="scope.data.row[scope.data.item.loading]"
                        @click="handleClick(scope.data.item.event, scope.data.row)"
                >
                    {{ scope.data.row.status - 1 >= 0 ? '启用' : '停用' }}
                </el-button>
            </template>
        </page-table>
        <!-- 弹窗 -->
        <page-dialog
                :title="dialogInfo.title[dialogInfo.type]"
                :visible.sync="dialogInfo.visible"
                :width="dialogInfo.width"
                :bt-loading="dialogInfo.btLoading"
                :bt-list="dialogInfo.btList"
                @handleClick="handleClick"
                @handleEvent="handleEvent"
        >
            <!-- form -->
            <page-form
                    v-if="dialogInfo.type !== 'userTransfer'"
                    :ref-obj.sync="formInfo.ref"
                    :data="formInfo.data"
                    :field-list="formInfo.fieldList"
                    :rules="formInfo.rules"
                    :label-width="formInfo.labelWidth"
                    :list-type-info="listTypeInfo"
                    @handleClick="handleClick"
                    @handleEvent="handleEvent"
            >
                <!-- 自定义插槽-选择头像 -->
                <template v-slot:form-avatar>
                    <div class="slot-avatar">
                        <img v-imgAlart
                                :src="formInfo.data.avatar"
                                style="height: 40px;"
                        >
                        <el-button
                                v-waves
                                type="primary"
                                icon="el-icon-picture"
                                size="mini"
                                @click="handleClick('selectFile')"
                        >
                            {{ formInfo.data.avatar ? '更换头像' : '选择头像' }}
                        </el-button>
                    </div>
                </template>
            </page-form>
            <!-- 用户转移 -->
            <div
                    v-else
                    class=""
            >
                是否将
                <span :style="`color: ${theme};`">{{ userTransferInfo.userName }}</span>
                创建的用户转移给
                <el-select
                        v-model="userTransferInfo.toUser"
                        class="filter-item"
                        placeholder="请选择一个用户"
                        filterable
                        clearable
                >
                    <el-option
                            v-for="item in listTypeInfo.userList.filter(item => !userTransferInfo.createUserList.includes(item.value) && item.value !== userTransferInfo.user)"
                            :key="item.id"
                            :label="item.key"
                            :value="item.value"
                    />
                </el-select>
            </div>
        </page-dialog>
        <!-- 选择文件组件 -->
        <select-file
                v-if="selectFileInfo.visible"
                v-model="formInfo.data.avatar"
                :type="selectFileInfo.type"
                :visible.sync="selectFileInfo.visible"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {
        getListApi,
        createApi,
        updateApi,
        deleteApi
    } from '@/api/admin/webinfo'
    import PageFilter from '@/components/PageFilter'
    import PageTable from '@/components/PageTable'
    import PageDialog from '@/components/PageDialog'
    import PageForm from '@/components/PageForm'
    import SelectFile from '@/components/SelectFile'

    export default {
        components: {
            PageFilter,
            PageTable,
            PageDialog,
            PageForm,
            SelectFile
        },
        data() {
            return {
                getListApi,
                createApi,
                updateApi,
                deleteApi,
                // 相关列表
                listTypeInfo: {
                    webkey: [
                        {key: '音乐(music)', value: "music"},
                        {key: '友链(friend)', value: "friend"},
                        {key: '背景图(backImg)', value: "backImg"},
                    ],
                    statusList: [
                        {key: '启用', value: 0},
                        {key: '停用', value: 1}
                    ],
                    userList: []
                },
                // 过滤相关配置
                filterInfo: {
                    query: {
                        web_key: '',
                        unique_val: '',
                        web_val: '',
                        status: ''
                    },
                    list: [
                        {type: 'select', label: 'key名', value: 'web_key', list: 'webkey',allowCreate:true},
                        {type: 'input', label: '唯一值', value: 'unique_val'},
                        {type: 'input', label: '配置值', value: 'web_val'},
                        {type: 'select', label: '状态', value: 'status', list: 'statusList'},
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
                        {label: 'ID', value: 'id',width:50},
                        // { label: 'sn', value: 'sn' },
                        {label: '配置名', value: 'web_key',list:'webkey'},
                        {label: '唯一值', value: 'unique_val'},
                        {label: '配置值', value: 'web_val'},
                        {label: '状态', value: 'status', width: 90, type: 'slot', list: 'statusList'},
                        {label: '排序', value: 'ord'},
                        //{label: '创建时间', value: 'created_at', width: 130},
                        {label: '更新时间', value: 'updated_at',width: 170}
                    ],
                    handle: {
                        fixed: 'right',
                        label: '操作',
                        width: '280',
                        btList: [
                            {
                                label: '启用',
                                type: 'success',
                                icon: 'el-icon-albb-process',
                                event: 'status',
                                loading: 'statusLoading',
                                show: true,
                                slot: true
                            },
                            {label: '编辑', type: '', icon: 'el-icon-edit', event: 'update', show: true},
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
                // 表单相关
                formInfo: {
                    ref: null,
                    data: {
                        id: 0, // *唯一ID
                        web_key: '', //
                        web_val: '', //
                        unique_val: '', // 唯一值
                        ord:  "0", // 排序
                        status: 0 // *状态: 0：启用，1：停用(默认为0)',
                        // create_user: '', // 创建人
                        // create_time: '', // 创建时间
                        // update_user: '', // 修改人
                        // update_time: '' // 修改时间
                    },
                    fieldList: [
                        {label: '配置名', value: 'web_key', type: 'select',list:"webkey", required: true,filterable:true,allowCreate:true,placeholder:"可选择也可手动输入"},
                        {label: '配置值', value: 'web_val', type: 'input', required: true},
                        {label: '唯一值', value: 'unique_val', type: 'input', placeholder:"用于判断该key下的值是否重复"},
                        {label: '排序', value: 'ord', type: 'input', required: true},
                       // {label: '头像', value: 'avatar', type: 'slot', className: 'el-form-block'},
                        {label: '状态', value: 'status', type: 'select', list: 'statusList', required: true}
                    ],
                    rules: {},
                    labelWidth: '120px'
                },
                // 弹窗相关
                dialogInfo: {
                    title: {
                        create: '添加',
                        update: '编辑',
                        userTransfer: '用户转移'
                    },
                    visible: false,
                    type: '',
                    btLoading: false,
                    btList: [
                        {label: '关闭', type: '', icon: '', event: 'close', show: true},
                        {label: '保存', type: 'primary', icon: '', event: 'save', saveLoading: false, show: true}
                    ]
                },
                // 用户转移相关信息
                userTransferInfo: {
                    user: '',
                    toUser: '',
                    createUserList: [],
                    userName: ''
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
                    // 重置转移相关信息
                    this.userTransferInfo = {
                        user: '',
                        toUser: '',
                        createUserList: [],
                        userName: ''
                    }
                }
            },
            'dialogInfo.type'(val) {
                const formInfo = this.formInfo
                switch (val) {
                    case 'create':
                        for (const item of formInfo.fieldList) {
                            if (item.value === 'username') {
                                item.type = 'input'
                            }
                        }
                        break
                    case 'update':
                        for (const item of formInfo.fieldList) {
                            if (item.value === 'username') {
                                item.type = 'tag'
                            }
                            if (item.value === 'password') {
                                item.placeholder = '不填则保持原有密码'
                            }
                        }
                        break
                }
            }
        },
        mounted() {
            this.initRules()
            this.getList()
        },
        methods: {
            // 初始化验证
            initRules() {
                const formInfo = this.formInfo
                formInfo.rules = this.$initRules(formInfo.fieldList)
            },
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
                const formInfo = this.formInfo
                console.log(event, data)
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
                    // 编辑
                    case 'update':
                        dialogInfo.type = event
                        dialogInfo.visible = true
                        // 显示信息
                        for (const key in data) {
                            // 存在则赋值
                            if (key in formInfo.data) {
                                formInfo.data[key] = data[key]
                            }
                        }
                        break
                    case 'status':
                        const params = {}
                        data.statusLoading = true
                        // 设置参数
                        for (const key in data) {
                            // 存在则赋值
                            if (key in formInfo.data) {
                                params[key] = data[key]
                            }
                        }
                        params.status = params.status - 1 >= 0 ? 0 : 1
                        this.$handleAPI('update', updateApi, params).then(res => {
                            data.statusLoading = false
                            data.status = params.status
                        }).catch(() => {
                            data.statusLoading = false
                        })
                        break
                    // 删除
                    case 'delete':
                        data.deleteLoading = true
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
                    case 'save':
                        // 保存用户（创建/删除）
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
                                if (params.unique_val == "") {
                                    params.unique_val = params.web_val
                                }
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
                    // 弹窗点击保存
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
                            this.$set(item, 'statusLoading', false) //用this.$set 给每个对象动态加个属性，这个属性会双向绑定，如果直接加则没有绑定效果
                            this.$set(item, 'deleteLoading', false)
                            item.created_at = this.$fn.switchTime(item.created_at*1000, 'YYYY-MM-DD hh:mm:ss')
                            item.updated_at = this.$fn.switchTime(item.updated_at*1000, 'YYYY-MM-DD hh:mm:ss')
                        })
                        break
                }
            },
            // 初始化表单
            resetForm() {
                this.formInfo.data = {
                    id: 0, // *唯一ID
                    web_key: '', //
                    web_val: '', //
                    unique_val: '', // 唯一值
                    ord:  "0", // 排序
                    status: 0 // *状态: 0：启用，1：停用(默认为0)',
                    // create_user: '', // 创建人
                    // create_time: '', // 创建时间
                    // update_user: '', // 修改人
                    // update_time: '' // 修改时间
                }
            }
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
