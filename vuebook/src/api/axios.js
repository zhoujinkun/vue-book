import axios from 'axios';
const qs = require('querystring');
//配置默认访问路径
axios.defaults.baseURL = 'http://localhost:3000/';

// 设置拦截器   即在then和catch之前对response进行处理
axios.interceptors.response.use((res)=>{
    return res.data
})

//获取轮播图的图片
export let getSwipers = ()=>{
    // 返回promise实例
    return axios.get('/swipers');
}
// 获取热门图书信息
export let getHotBooks = ()=>{
    return axios.get('/hotbooks');
}
export let getAll = () => {
    return axios.all([getSwipers(),getHotBooks()]);
}
//获取所有图书
export let getAllBooks = ()=>{
    return axios.get('/allbooks');
}
//按需加载
export let loadBook = (index)=>{
    return axios.get(`/page/${index}`);
}
//删除图书
export let delBook = (id)=>{
    return axios.delete(`/allbooks/${id}`);
}

//获取一本书
export let getOneBook = (id)=>{
    return axios.get(`/allbooks/${id}`);
}

//更新一本书
export let updateBook = (id,data)=>{
     data = qs.stringify(data);
    return axios.put(`/allbooks/${id}`,data);
}

//添加一本书
export let addBook = (data)=>{
    data = qs.stringify(data);
    return axios.post(`/allbooks`,data);
}