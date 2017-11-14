/*
 * 发布拍品
 * @Author: chen_huang
 * @Date: 2017-11-07 00:36:07
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-14 01:11:25
 */
<template>
    <div id="release">
        <dl class="release-dl">
            <dt></dt>
            <dd>
                <p class="release-list-title">拍品分类</p>
                <div class="releaslist-box">
                    <el-select placeholder="请选择" v-model="value">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍品名称</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入拍品名称"></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">加价幅度</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入加价幅度"></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">邮费</p>
                <div class="releaslist-box">
                    <el-input placeholder="请输入加价幅度"></el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍卖时间</p>
                <div class="releaslist-box">
                    <el-date-picker
                        v-model="value6"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                
            </dd>
            <dd>
                <p class="release-list-title">拍品描述</p>
                <div class="releaslist-box">
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍品图片</p>
                <div class="releaslist-box">
                    
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props: [],
    data () {
        return {
            options: [{
                value: '选项1',
                label: 'test1'
            }, {
                value: '选项2',
                label: 'test2'
            }],
            value6: '',
            textarea: '',
            value: ''
        }
    }
}
</script>
<style lang="stylus" scoped>
    .release-dl
        dd
            display flex
            align-items center
            margin 0 0 20px 0
        .release-list-title
            width 80px
            font-size 16px
</style>