<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="男"/>
          <el-radio label="女"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入内容" />
        <el-button :type="isNew ? 'warning' : 'info'" style="margin-top: 10px;" @click="sendSms">{{ smsText }}</el-button>
      </el-form-item>
      <el-form-item label="短信验证码" prop="code">
        <el-input v-model="form.code" placeholder="请输入短信验证码" />
      </el-form-item>
      <el-form-item label="楼宇" prop="build_id">
        <el-select v-model="form.build_id" placeholder="请选择楼宇" @change="handleChangeBuild">
          <el-option v-for="(item, index) in buildList" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="房间号" prop="room_id">
        <el-select v-model="form.room_id" placeholder="请选择房间">
          <el-option v-for="(item, index) in roomList" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <div style="display: inline-block;vertical-align: top;">
        <el-form-item label="人员头像" prop="images">
          <el-upload
            :file-list="form.images"
            :on-error="handleError"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-remove="handleBeforeRemove"
            :action="BASE_API+'/uploadimg'"
            :limit="maxUploadNum"
            :on-exceed="handleExceed"
            list-type="picture-card">
            <i class="el-icon-plus"/>
          </el-upload>
          <div>
            <div
              v-for="(item, index) in form.images"
              :key="index"
              style="display: inline-block;width: 150px;text-align: center;">
              <el-button type="primary" @click="rotate(index)">旋转</el-button>
            </div>
            <div style="display: inline-block;width: 150px;text-align: center;color:red;vertical-align: top">
              <div>* 图片大小不能超过20M</div>
            </div>
          </div>
        </el-form-item>

        <el-form-item label="身份证照片" prop="idcard">
          <el-upload
            :file-list="form.idcard"
            :on-error="handleError"
            :on-remove="handleRemove2"
            :on-success="handleSuccess2"
            :before-remove="handleBeforeRemove"
            :action="BASE_API+'/uploadimg'"
            :limit="maxUploadNum2"
            :on-exceed="handleExceed2"
            list-type="picture-card">
            <i class="el-icon-plus"/>
          </el-upload>
          <div>
            <div
              v-for="(item, index) in form.idcard"
              :key="index"
              style="display: inline-block;width: 150px;text-align: center;">
              <el-button type="primary" @click="rotate(index, 'idcard')">旋转</el-button>
            </div>
            <div style="display: inline-block;width: 150px;text-align: center;color:red;vertical-align: top">
              <div>* 图片大小不能超过20M</div>
            </div>
          </div>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button :loading="submitLoading" type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newText: '获取验证码',
      oldText: '重新发送',
      second: '60',
      isNew: true,
      submitLoading: false,
      dialogVisible: false,
      canSubmit: true,
      maxUploadNum: 1,
      maxUploadNum2: 2,
      buildList: [],
      roomList: [],
      form: {
        id: 0,
        username: '',
        gender: '',
        build_id: '',
        room_id: '',
        phone: '',
        images: [],
        idcard: [],
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        build_id: [
          { required: true, message: '请选择楼宇', trigger: 'blur' }
        ],
        images: [
          { required: true, message: '请上传人员头像', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    smsText() {
      if (this.isNew) {
        return '获取验证码'
      } else {
        return this.oldText + '（' + this.second + 's）'
      }
    }
  },
  created() {
    if (this.$route.query.token) {
      this.$request({
        url: '/people/font/build',
        method: 'post',
        data: { token: this.$route.query.token }
      }).then((res) => {
        this.buildList = res.data
      })
    }
  },
  methods: {
    sendSms() {
      if (!this.isNew) {
        return
      }
      var phone = this.form.phone
      var myreg = /^[1][0-9][0-9]{9}$/
      if (!myreg.test(phone)) {
        this.$message({
          type: 'error',
          message: '请输入有效的11位手机号码'
        })
        return
      }
      this.flushSmsText()
      var url, message
      url = '/people/font/sms'
      message = '短信发送成功'
      this.$request({
        url: url,
        method: 'post',
        data: { token: this.$route.query.token, phone: this.form.phone }
      }).then((res) => {
        this.$message({
          message: message,
          type: 'success'
        })
      }).catch((s) => {

      })
    },
    flushSmsText() {
      this.isNew = false
      setInterval(() => {
        if (this.second >= 1) {
          console.log(123)
          this.second--
        } else {
          console.log(456)
          this.isNew = true
          this.second = 60
        }
      }, 1000)
    },
    onSubmit() {
      if (this.canSubmit) {
        this.canSubmit = false
        setTimeout(() => {
          this.canSubmit = true
        }, 2000)
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.submitLoading = true
            var url, message
            url = '/people/font/submit'
            message = '提交成功'
            this.$request({
              url: url,
              method: 'post',
              data: { token: this.$route.query.token, ...this.form }
            }).then((res) => {
              this.$message({
                message: message,
                type: 'success'
              })
              // 隐藏表单
              this.onCancel()
              this.submitLoading = false
            }).catch((s) => {
              this.submitLoading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    onCancel() {
      this.$refs['form'].clearValidate()
      this.$refs['form'].resetFields()
      // this.form.username = ''
      // this.form.gender = ''
      // this.form.build_id = ''
      // this.form.room_id = ''
      // this.form.phone = ''
    },
    handleChangeBuild() {
      this.roomList = []
      console.log(this.form.build_id)
      this.buildList.forEach((v, k) => {
        if (v.id === this.form.build_id) {
          this.roomList = v.roomList
          return
        }
      })
    },
    // 上传成功
    handleSuccess(response, file, fileList) {
      this.form.images.push({ url: response.data })
    },
    handleSuccess2(response, file, fileList) {
      this.form.idcard.push({ url: response.data })
    },
    // 上传失败
    handleError(err, file, fileList) {
      var patt = /Error: (.*)/i
      var msg = String(err).match(patt)
      var errMsg = '图片上传失败，请检查大小和格式'
      if (Array.isArray(msg) && msg[1]) {
        var errRes = JSON.parse(msg[1])
        errMsg = errRes.msg
      }
      this.$message({
        type: 'error',
        message: errMsg
      })
    },
    handleBeforeRemove() {
      var res = confirm('此操作将删除该照片, 是否继续?')
      if (res) {
        return
      }
      return false
    },
    // 移除照片
    handleRemove(file, fileList) {
      this.form.images = fileList
    },
    handleExceed() {
      alert('最大上传数量为' + this.maxUploadNum + '张 ^_^')
    },
    // 移除照片
    handleRemove2(file, fileList) {
      this.form.idcard = fileList
    },
    handleExceed2() {
      alert('最大上传数量为' + this.maxUploadNum2 + '张 ^_^')
    },
    // 旋转照片
    rotate(index, flag = 'img') {
      var url = ''
      if (flag === 'idcard') {
        url = this.form.idcard[index].url
      } else {
        url = this.form.images[index].url
      }
      var end = '?imageMogr2/rotate/90'
      if (url.indexOf('?') !== -1) {
        var lastIndex = url.lastIndexOf('/')
        var oldRotate = parseInt(url.substr(lastIndex + 1))
        if (!isNaN(oldRotate)) {
          oldRotate += 90
          oldRotate = oldRotate % 360
          end = '?imageMogr2/rotate/' + oldRotate
          url = url.substr(0, url.indexOf('?'))
        }
      }
      url = url + end

      if (flag === 'idcard') {
        this.form.idcard[index].url = url
      } else {
        this.form.images[index].url = url
      }
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

