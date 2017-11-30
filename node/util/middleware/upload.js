/*
 * 封装上传图片控件
 * @Author: chen_huang
 * @Date: 2017-11-21 19:32:42
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-30 18:00:22
*/
let multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads/')
    },
    filename: (req, file, cb) => {
        let fileFormat = file.originalname.split('.')[1]
        let imageName = file.fieldname + '-' + Date.now() + '.' + fileFormat
        cb(null, imageName)
        req.imgName = file.originalname.split('.')[0]
        req.imgUrl = '/images/uploads/' + imageName
    }
})
let upload = multer({storage: storage})
module.exports = upload

