class config{
    constructor(){
        this.port = '3000'
        this.host = 'localhost'
        this.dburl = 'mongodb://localhost:27017/personerweb'
    }
}
module.exports = new config()