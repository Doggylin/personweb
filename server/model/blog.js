const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    'title' : String,
    'desc' : String,
    'tag' : String,
    'imgurl' : String,
    'time' : String,
    'viewnum' : Number || 0
    
})
blogSchema.index({index:1})
const blogM = mongoose.model('Blogmodel',blogSchema)
module.exports = blogM;