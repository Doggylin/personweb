const express = require('express')
const router =  express.Router()
const bloghandle = require('../controller/bloglist')


router.get('/list',bloghandle.getlist)
router.post('/addlist',bloghandle.addlist)
router.get('/getcontent:title',bloghandle.getcontent)
module.exports = router;