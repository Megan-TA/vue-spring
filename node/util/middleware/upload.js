/*
 * 封装上传图片控件
 * @Author: chen_huang
 * @Date: 2017-11-21 19:32:42
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-21 19:34:03
*/
let multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads/')
    },
    filename: (req, file, cb) => {
        let fileFormat = file.originalname.split('.')[1]
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat)
    }
})
let upload = multer({storage: storage})
module.exports = upload

