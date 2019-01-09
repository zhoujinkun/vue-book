const sm = require('./sqlModule');

exports.allSwipers =(req,res)=>{
    let sql = 'select * from swiper';
    let data = null;
    sm.sqlModule(sql,data,(result)=>{
        res.json(result);
    })
}

exports.hotBooks = (req,res)=>{
    let sql = 'select * from hotbooks';
    let data = null;
    sm.sqlModule(sql,data,(result)=>{
        res.json(result);
    })
}
exports.allBooks = (req,res)=>{
    let sql = 'select * from hotbooks';
    let data = null;
    sm.sqlModule(sql,data,(result)=>{
        res.json(result);
    })
}

exports.delBook = (req,res)=>{
    let id = req.params.id;
    console.log(id);
    let sql = 'delete from hotbooks where bookId=?'; //数据库用的bookId
    let data = [id];
    sm.sqlModule(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.send({bool:1});
        }else {
            res.send({bool:-1});
        }
    })
}

exports.getOneBook = (req,res)=>{
    let id = req.params.id;
    let sql = 'select * from hotbooks where bookId=?';
    let data = [id];
    sm.sqlModule(sql,data,(result)=>{
        res.json(result[0]);
    })
}

exports.updateBook = (req,res)=>{
    let info = req.body;
    // console.log(info);
    let sql = 'update hotbooks set bookCover=?,bookName=?,bookContent=?,bookPrice=? where bookId=?';
    let data = [info.bookCover,info.bookName,info.bookContent,info.bookPrice,info.bookId];
    sm.sqlModule(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.send({bool:1});
        }else {
            res.send({bool:-1});
        }
    })
}

exports.addBook = (req,res)=>{
    let info = req.body;
    let sql = 'insert into hotbooks set?';
    let data = info;
    sm.sqlModule(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.send({bool:1});
        }else {
            res.send({bool:-1});
        }
    })
}

exports.loadBook = (req,res)=>{
    let index = parseInt(req.params.index) || 0;
    let hasMore = true;
    let pageSize = 4;
    let sql = 'select * from hotbooks ';
    let data = null;
    sm.sqlModule(sql,data,(result)=>{
        let books = result.reverse().slice(index,index+pageSize);
        if(result.length<=index+pageSize){
            hasMore = false;
        }
        res.json({hasMore,result:books});
    })
}