<template>
  <div>
   dashboard
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      res: {},
      villageList: [],
      checkVil: ''
    }
  },
  computed: {
  },
  created() {
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .dashboard {
        &-container {
            margin: 30px;
        }

        &-text {
            font-size: 30px;
            line-height: 46px;
        }
    }
</style>
