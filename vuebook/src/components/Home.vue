<template>
    <div>
        <MHeader :back="true">
            <span>首页</span>
        </MHeader>
        <div class="mainContent">
            <Loading v-if="loading"></Loading>
            <Swiper :sliders="sliders"></Swiper>
            <h3>热门图书</h3>
            <ul>
                <li v-for="(item,index) in hotBooks" :key="index">
                    <img :src="item.bookCover" :alt="item.bookName">
                    <span>{{item.bookName}}</span>
                    <p>{{item.bookPrice}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
//引入基础组件MHeader
import MHeader from '../base/MHeader';
// 引入swiper组件
import Swiper from '../base/Swiper';
//引入loading组件
import Loading from '../base/Loading';
//引入axios调用后台接口
import {getAll} from '../api/axios.js';
export default {
    data(){
        return{
            sliders:[],
            hotBooks:[],
            loading:true
        }
    },
    created(){
        this.getData();
    },
    components:{
        MHeader,
        Swiper,
        Loading
    },
    methods:{
        /* async getSwiper(){
            this.sliders = await getSwipers();
            // console.log(sliders);
        },
        async getHotBook(){
            this.hotBooks = await getHotBooks();
            console.log(this.hotBooks);
            //假设id越大的越热门
            // this.hotBooks=this.hotBooks.reverse().slice(0,6);
            // console.log(this.hotBooks);
        } */
        async getData(){
            let [sliders,hotBooks] = await getAll();
            this.sliders = sliders;
            this.hotBooks = hotBooks;
            // 轮播图和热门图书数据全部获取完毕
              this.loading = false;
        }
    }
}
</script>
<style lang="less" scoped>
    h3{
        text-align: center;
    }
    ul{
        display:flex;
        flex-wrap: wrap;
        li{
            width:50%;
            text-align:center;
            margin:5px 0;
            img{
                width:100%;
            }
        }
    }
    
    
</style>
