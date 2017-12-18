/*
 * 申请发布
 * @Author: chen_huang
 * @Date: 2017-12-18 16:55:45
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-18 17:09:32
*/
<template>
    <div class="applyforB">
        <el-button @click='apply'>点我</el-button>
    </div>
</template>
<script>
import applyForBService from 'services/user/applyForB'
export default {
  props: [],
  data () {
    return {

    }
  },
  methods: {
      apply () {
          applyForBService
            .applyForB({})
            .then((res) => {
                this.$message({
                    message: res.result,
                    type: 'error'
                })
            })
            .catch((err) => {
                this.$message({
                    message: '申请提交失败',
                    type: 'error'
                })
                console.error(err)
            })
      }
  }
};
</script>
<style lang="stylus" scoped>

</style>