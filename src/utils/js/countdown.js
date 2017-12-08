/*
 * 倒计时组件
 * @Author: chen_huang
 * @Date: 2017-12-06 16:36:59
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-12-07 11:26:00
*/
// const moment = require('moment')
class CountDown {
    constructor (config) {
        this.endTime = new Date(config.endTime)
        this.timer = null
        this.date = config.date
        this.start()
    }
    start () {
        if (this.endTime == '') {
            console.error('数据未渲染')
            return
        }
        if (this.endTime < new Date()) {
            console.log('已过期')
            return
        }
        if (!this.__started__) {
            this.__started__ = true
            this.timer = setInterval(
                this.countTime.bind(this),
            1000)
        } else {
            console.error('CountDown已启动')
        }
    }
    countTime () {
        let remainTime = this.endTime.getTime() - new Date().getTime()
        // 天
        let days = Math.floor(remainTime / (24 * 60 * 60 * 1000))
        // 时
        let level1 = remainTime % (24 * 60 * 60 * 1000)
        let hours = Math.floor(level1 / (60 * 60 * 1000))
        // 分
        let level2 = level1 % (60 * 60 * 1000)
        let minutes = Math.floor(level2 / (60 * 1000))
        // 秒
        let level3 = level2 % (60 * 1000)
        let seconds = Math.floor(level3 / 1000)

        if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            this.stop()
        }
        this.date = `${days}天${hours}时${minutes}分${seconds}秒`
        return this.date
    }
    stop () {
        clearInterval(this.timer)
        this.date = '已结束'
        return this.date
    }
}

module.exports = CountDown

