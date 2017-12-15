<template>
  <el-button type="primary" @click='test11'>test</el-button>
</template>
<script>
import axios from 'axios'
export default {
    props: [],
    data () {
        return {

        }
    },

    methods: {
        test11 () {
            axios.get('/api/order/test')
              .then((res) => {
                  console.log(res.data)
                  location.href = res.data.url
              })
        }
    }
}
</script>
<style lang="stylus">

</style>