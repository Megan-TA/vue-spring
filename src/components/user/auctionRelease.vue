/*
 * 发布拍品
 * @Author: chen_huang
 * @Date: 2017-11-07 00:36:07
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-07 01:09:43
 */
<template>
    <div id="release">
        <dl class="release-dl">
            <dt></dt>
            <dd>
                <p class="release-list-title">拍品分类</p>
                <div class="releaslist-box">
                    <el-select placeholder="请选择">
                        <el-option>
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
                <p class="release-list-title">开拍时间</p>
                <div class="releaslist-box">
                    
                </div>
            </dd>
            <dd>
                <p class="release-list-title">结标时间</p>
                <div class="releaslist-box">
                    
                </div>
            </dd>
            <dd>
                <p class="release-list-title">拍品描述</p>
                <div class="releaslist-box">
                    
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
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }]
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