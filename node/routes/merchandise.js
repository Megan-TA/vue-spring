/*
 * 商品路由
 * @Author: chen_huang
 * @Date: 2017-11-11 20:30:57
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-11-14 09:24:55
 */
const express = require('express')
const Merchandise = require('../model/merchandise')
const jwt = require('jsonwebtoken')
const settings = require('../settings')
const router = express.Router()
const $token = require('../model/middle_check_token/middle_check_token')

router.post('/auction/release', $token, (req, res) => {
    
})