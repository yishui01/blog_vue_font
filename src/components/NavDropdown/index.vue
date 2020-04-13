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
      <el-form ref="passwordFormData" :model="passwordFormData" :rules="passwordFormDataRules" label-width="80px">
        <el-form-item label="原始密码" prop="old_pass">
          <el-input v-model="passwordFormData.old_pass" type="password" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="新密码" prop="new_pass">
          <el-input v-model="passwordFormData.new_pass" type="password" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="确认密码" prop="new_pass_confirmed">
          <el-input v-model="passwordFormData.new_pass_confirmed" type="password" auto-complete="off"/>
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
  import {updatePass} from '@/api/admin/user'
  import { mapGetters } from 'vuex'
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
        if (this.passwordFormData.new_pass_confirmed !== '') {
          this.$refs.passwordFormData.validateField(
            'new_pass_confirmed'
          )
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.passwordFormData.new_pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      updatePass,
      avatar: 'https://avatars3.githubusercontent.com/u/20850040?s=460&v=4',
      menuShow: false,
      levelList: null,
      passwordLoading: false,
      passwordFormVisible: false,
      passwordFormData: {
        old_pass: '',
        new_pass: '',
        new_pass_confirmed: ''
      },
      passwordFormDataRules: {
        old_pass: [
          {
            required: true,
            message: '请输入原始密码',
            trigger: 'blur'
          }
        ],
        new_pass: [
          {
            required: true,
            message: '请输入新密码',
            trigger: 'blur'
          },
          { validator: validatePass, trigger: 'blur' }
        ],
        new_pass_confirmed: [
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
    },
    ...mapGetters([
        'sidebar',
         'userInfo'
      ]),
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
            this.$router.push("/login")
            location.reload()
          })
        })
        .catch(() => {

        })
    },
    // 显示修改密码界面
    handlePassword() {
      this.passwordFormVisible = true
      this.passwordFormData = {
        old_pass: '',
        new_pass: '',
        new_pass_confirmed: '',
        sn:'',
      }
    },
    addSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.passwordLoading = true
          const data = Object.assign({}, this.passwordFormData)
          data.sn = this.userInfo.user.sn
          updatePass(data).then(res => {
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
