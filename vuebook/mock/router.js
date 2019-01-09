//路由渲染
const express = require('express');
const router = express.Router();
const service = require('./service');

//提供swiper的信息
router.get('/swipers',service.allSwipers);
// 热门图书
router.get('/hotbooks',service.hotBooks);
// 所有图书
router.get('/allbooks',service.allBooks);
//删除图书
router.delete('/allbooks/:id',service.delBook);
//获取一本书
router.get('/allbooks/:id',service.getOneBook);
//更新一本书
router.put('/allbooks/:id',service.updateBook);
//添加一本书
router.post('/allbooks',service.addBook);
//按需加载4本书
router.get('/page/:index',service.loadBook);
module.exports = router; 