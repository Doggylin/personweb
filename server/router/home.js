const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/',(req,res)=>{
    fs.createReadStream('./web/personnel.html').pipe(res)
})
module.exports = router