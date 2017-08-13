/*
 * @Author: chen_huang 
 * @Date: 2017-08-12 10:19:44 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-08-13 21:36:10
 * 拍品描述
 */
<template>
    <div class="describe">
        <h3>拍品描述</h3>
        <p>{{ dataInfo.info }}</p>
        <img :src="item" alt="" v-for="item in dataInfo.imgList" :key="item">
    </div>
</template>
<script>
export default {
    props: [],
    data() {    
        return {
            dataInfo: {
                info: '真正天然和田籽料，真皮真仔，毛孔清晰可见，雕工传神，手感温润。喜欢的老师别错过哦 友情提示:【自然光拍摄,显示屏不同,色差难免.无理由退货,前提是请保持拍品原样,来回运费自理.感谢各位老师的理解和支持~!】',
                imgList: [
                    '//imgpai.cang.com/201707/24/20170724035423dwvv6avterzng2xd.jpg!s700',
                    '//imgpai.cang.com/201707/24/201707240354333cna8ecu5y76xxze.jpg!s700'
                ]
            }
        };
    }
};
</script>
<style lang="stylus">
    .describe
        padding 30px
</style>        