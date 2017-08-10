/*
 * @Author: chen_huang 
 * @Date: 2017-08-08 13:16:31 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-10 16:16:05
 */
<template>

    <div class="auction">
        <el-row>
            <el-col :span="8" v-for="(value, index) in dataList" :key="value" :offset="index % 2 !== 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                <img src="static/images/test.jpg" class="image">
                <div style="padding: 14px;">
                    <h4>{{ value. title }}</h4>
                    <p>起拍价：{{ value.startingPrice }}</p>
                    <p>当前价：{{ value.currentPrice }}</p>
                    <p>距离结束：{{ value.endTime }}</p>
                    <el-button type="warning">设置提醒</el-button>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>
<script>
export default {
  data () {
    return {
         currentDate: new Date(),
         dataList: [
             {
                 'title': '和田白玉飞黄腾达',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥10',
                 'currentPrice': '￥12',
                 'endTime': '1小时20分'
             },
             {
                 'title': '和田仔料观音',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥1666',
                 'currentPrice': '￥1999',
                 'endTime': '1小时20分'
             },
             {
                 'title': '和田白玉挂件佛',
                 'img': 'static/images/test.jpg',
                 'startingPrice': '￥50',
                 'currentPrice': '￥60',
                 'endTime': '1小时10分'
             }
         ]
    };
  }

};
</script>
<style lang="stylus" scoped>
</style>