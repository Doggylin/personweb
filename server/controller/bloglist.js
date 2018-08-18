const blog = require('../model/blog')
const formidable = require('formidable')
const fs =  require('fs')
const path = require('path')
class bloghandle{
    constructor(){

    }
    async getlist(req,res,next){
        try {
            let result = await blog.find({})
            res.send(result)
        } catch (error) {
            res.send(error.message)
        }
        
    }
    addlist(req,res,next){
        const form = new formidable.IncomingForm()
        form.parse(req,async(err,fields,files)=>{
             if (err){
                res.send('解析异常') 
                return; 
             }
             console.log(files)
             const {title,desc,tag,imgurl} = fields
             try {
                 if (!title){
                     throw new Error('title为空')
                 }
                 if (!desc){
                    throw new Error('desc为空')
                }
                if (!tag){
                    throw new Error('tag为空')
                }
                if (!imgurl){
                    throw new Error('imgurl为空')
                }
                var curdate = new Date()
                form.uploadDir = path.normalize(__dirname + '/../temp/')
                var oldPath = files.htmlfile.path
                var newName = title + '.html'
                var newPath = path.normalize(__dirname + '/../articlefiles/'+newName)
                fs.rename(oldPath,newPath,(err)=>{
                    if (err){
                        console.log(err)
                        res.send('文件上传失败')
                        return
                    }
                })
                const new_blog = {
                    'title' : title,
                    'desc' : desc,
                    'tag' : tag,
                    'imgurl' : imgurl,
                    'time' : curdate.getFullYear() + '-' + (parseInt(curdate.getMonth())+1) + '-' + curdate.getDate(),
                    'viewnum' : 0
                }

                let result = await blog.create(new_blog)
                if (result){
                    console.log('添加成功',result)
                    res.send('已添加')
                }
             } catch (error) {
                 res.send(error.message)
             }
        })
    }
    getcontent(req,res,next){
        try {
            let title = req.params
            let rs = fs.createReadStream(__dirname + '/../articlefiles/'+ title['title'] +'.html')
            rs.on('error',()=>{
                res.send('没找到文章')
            })
            rs.pipe(res)
        } catch (error) {
            res.send(error.message)
        }
    }
}
module.exports = new bloghandle() 