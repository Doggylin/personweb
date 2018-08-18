const express = require('express')
const config = require('./config/default')
const router = require('./router/index')
const db = require('./dbs/db')
const app = express()
app.use(express.static('./web'))

router.index(app)
app.listen(config.port)