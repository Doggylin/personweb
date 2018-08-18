$.ajax({
    type:'get',
    url:'http://18.217.137.92:3000/webapi/list',
    async:true,
    jsonp:'jsoncallback',
    success:function(data){
        var trx = ""
        $.each(data,(i,item)=>{
            
            let img = '<li><span class="blogpic"><a href="#"><img src="' + item.imgurl + '"alt="img">'
            let title = '</a></span><h3 class="blogtitle"><a href="./detai.html?title='+item.title+'">' + item.title + '</a></h3>'
            let des = '<div class="bloginfo"><p>' + item.desc + '</p></div>'
            let tag = '<div class="bottom_bar"><span class="lm"><a href="" title="tag" target="_blank" class="classname">' + item.tag + '</a></span>'
            let time = '<span class="dtime">' + item.time + '</span>'
            let viewnum = '<span class="viewnum">浏览（<a href="">' + item.viewnum + '</a>）</span>'
            let readmore = '<span class="readmore"><a href="./webapi/getcontent'+item.title+'">阅读原文</a></span></div></li>'
            trx += img + title + des + tag + time + viewnum + readmore

        })
        $('.blogs').html(trx)
    },error:function(err){
        console.log("请求出错了")
    }    
})
function addNewArticle(){

    $('.addNewArticleView').animate({
        top:'332px'
    })
}
function closeSelf(){
    $('.addNewArticleView').animate({
        top:'-400px'
    })
}


