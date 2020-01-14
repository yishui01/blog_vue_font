<template>
  <div>
    <el-cascader
      ref="cas"
      :options="options"
      v-model="selectedOptions"
      :change-on-select="full"
      style="width: 350px;"
      expand-trigger="hover"
      @change="handleChange"/>
  </div>
</template>

<script>
// 引入外部js文件
import areaJs from '../../utils/area'

export default {
  props: {
    initVal: {
      type: Array,
      default() {
        return []
      }
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: areaJs,
      selectedOptions: []
    }
  },
  watch: {
    initVal(newVal, oldVal) {
      // console.log('监听到了')
      this.selectedOptions = newVal
    }
  },
  created() {
    this.selectedOptions = this.initVal
    // console.log(areaJs)
  },
  methods: {
    handleChange(value) {
      this.$nextTick(function() {
        this.$emit('changePlace', { val: value, label: this.$refs['cas'].currentLabels })
      })
    }
  }
}
</script>
