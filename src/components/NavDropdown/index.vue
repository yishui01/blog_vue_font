<template>
  <div>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span style="display: inline-block;line-height: 50px;">{{ username }}<i class="el-icon-arrow-down el-icon--right"/></span>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item @click.native="handlePassword"><span>修改密码</span></el-dropdown-item>
        <el-dropdown-item v-if="platform === 'system' && role === 'admin' " @click.native="goHome"><span>返回系统</span></el-dropdown-item>
        <el-dropdown-item @click.native="logout"><span>退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!--新增界面-->
    <el-dialog :visible.sync="passwordFormVisible" title="修改密码" width="50%" top="5vh">
      <el-form ref="passwordFormData" :model="passwordFormData" :rules="passwordFormDataRules">
        <el-form-item label="原始密码" prop="old_password">
          <el-input v-model="passwordFormData.old_password" type="password" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="新密码" prop="new_password">
          <el-input v-model="passwordFormData.new_password" type="password" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="确认密码" prop="new_password_confirmation">
          <el-input v-model="passwordFormData.new_password_confirmation" type="password" auto-complete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          :loading="passwordLoading"
          type="primary"
          @click.native="addSubmit('passwordFormData')">提交</el-button>
        <el-button @click.native="cancelUpdate('passwordFormData')">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    username: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      default() {
        return 'home'
      }
    }
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.passwordFormData.new_password_confirmation !== '') {
          this.$refs.passwordFormData.validateField(
            'new_password_confirmation'
          )
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.passwordFormData.new_password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      avatar: 'https://avatars3.githubusercontent.com/u/20850040?s=460&v=4',
      menuShow: false,
      levelList: null,
      passwordLoading: false,
      passwordFormVisible: false,
      passwordFormData: {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      passwordFormDataRules: {
        old_password: [
          {
            required: true,
            message: '请输入原始密码',
            trigger: 'blur'
          }
        ],
        new_password: [
          {
            required: true,
            message: '请输入新密码',
            trigger: 'blur'
          },
          { validator: validatePass, trigger: 'blur' }
        ],
        new_password_confirmation: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    role() {
      return {}
    }
  },
  watch: {
    passwordFormVisible(val) {
      if (!val) {
        this.$refs['passwordFormData'].resetFields()
        this.$refs['passwordFormData'].clearValidate()
      }
    }
  },
  created() {
    // 登录添加键盘事件,注意,不能直接在焦点事件上添加回车
    const that = this
    document.onkeydown = function(e) {
      const key = window.event.keyCode
      if (key === 13) {
        if (that.passwordFormVisible) {
          that.addSubmit('passwordFormData')// 方法
        }
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$confirm('此操作将退出系统, 是否继续?', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        cancelButtonClass: 'btn-custom-cancel',
        type: 'warning'
      })
        .then(() => {
          this.$store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
        .catch(() => {

        })
    },
    // 显示修改密码界面
    handlePassword() {
      this.passwordFormVisible = true
      this.passwordFormData = {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
      }
    },
    addSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.passwordLoading = true
          const data = Object.assign({}, this.passwordFormData)
          data.adminId = this.$store.state.user.id
          this.$request({
            url: '/self_password',
            method: 'post',
            data: this.passwordFormData
          })
            .then(res => {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
              this.passwordLoading = false
              // 刷新表单
              this.passwordFormVisible = false
            })
            .catch(() => {
              this.passwordLoading = false
            })
        }
      })
    },
    cancelUpdate(formName) {
      this.passwordFormVisible = !this.passwordFormVisible
    },
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
  .btn-custom-cancel {
    float: right;
    margin-left: 10px;
  }
    .avatar-container {
        height: 40px;
        display: inline-block;
        cursor: pointer;
    }
</style>
