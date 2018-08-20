const blog = require('./bloglist');
const home = require('./home');
exports.index = app =>{
    app.use('/webapi',blog)
    app.use('/',home)
}