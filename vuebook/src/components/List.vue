<template>
    <div>
        <MHeader >
            <span>列表</span>
        </MHeader>
        <div class="mainContent" ref="scroll" @scroll="loadMore" >
            <ul>
                <router-link v-for="(item,index) in books" :key="index" :to="{name:'detail',params:{bid:item.bookId}}" tag="li">
                    <img :src="item.bookCover" alt="">
                    <div>
                        <h4>{{item.bookName}}</h4>
                        <b>{{item.bookPrice}}</b>
                        <p>{{item.bookContent}}</p>
                        <button @click.stop="remove(item.bookId)">删除</button>
                    </div>
                </router-link>
            </ul>
            <div class="more" @click="getMore">加载更多···</div>
        </div>
    </div>
</template>
<script>
import MHeader from '../base/MHeader';
import {loadBook,delBook} from '../api/axios.js';

export default {
    data(){
        return{
            books:[],
            index:0,
            hasMore:true,
            isLoading:false
        }
    },
    created(){
        this.allBooks();
    },
    mounted(){
        let scroll = this.$refs.scroll;
        let top = scroll.offsetTop;
        let distance = 0;
        let start =0;
        scroll.addEventListener("touchstart",(e)=>{
            //当该区域没有卷走或者 其距离顶部仍然是40像素的时候，才可以下拉刷新
            if(scroll.scrollTop != 0 || scroll.offsetTop != top) return;
            start = e.touches[0].pageY;
            
        },false)
        let move = (e)=>{
            let current = e.touches[0].pageY;
            distance = current - start;
            // console.log('distance'+distance);
            // console.log('start'+start);
            // console.log('current'+current);
            if(distance>0){
                if(distance<=40 ){
                    scroll.style.top = top + distance +'px';
                }else{
                    scroll.style.top = top + 40 +'px';
                }
            }
        }
        scroll.addEventListener('touchmove',move,false);
        let end = (e)=>{
            clearInterval(this.timer2);
            if(distance>0){
                
                this.timer2 = setInterval(()=>{
                    distance -= 5;
                    if(distance<=0){
                        clearInterval(this.timer2);
                        distance = 0;
                        // 获取数据
                        this.index = 0;
                        this.books = [];
                        this.allBooks();
                    }
                    scroll.style.top = top + distance +'px';
                },3)
            }
        }
        scroll.addEventListener('touchend',end,false);
    },
    methods:{
        loadMore(){
            //利用$refs操作dom
            // 利用setTimeout节流思想，解决滚动触发很多次事件，消耗性能
            //scrollTop 滚动高度 scrollHeight内容真实高度 clientHeight客户端高度
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                let {scrollTop,scrollHeight,clientHeight} = this.$refs.scroll;
                if(scrollTop+clientHeight+20>=scrollHeight){
                    //请求数据
                    this.getMore();
                }
            },30);
        },
        getMore(){
            this.allBooks();
        },
        async allBooks(){
            if(this.hasMore && !this.isLoading){
                //isLoading的作用在于当网络延迟很高时，点击几次加载更多不会发送很多次请求
                this.isLoading = true;
                let {hasMore,result} = await loadBook(this.index);
                // console.log(result);
                
                //每一次把之前请求的数据和现在的一起渲染出来
                this.books = [...this.books,...result];
                this.hasMore = hasMore;
                this.isLoading = false;
                this.index = this.books.length;
            }
        },
        async remove(id){
           let data = await delBook(id);//删除某本书
            // 删除前台数据
            if(data.bool == 1){
                this.books = this.books.filter(item=>item.bookId !== id);
            }
            
        }
    },
    components: {
        MHeader,
    }
}
</script>
<style lang="less" scoped>
    .mainContent {
        ul{
            display:flex;
            flex-wrap:wrap;
            li{
                display:flex;
                text-align: center;
                margin:5px 0;
                p{
                    height:44.5px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                b{
                    color:sandybrown;
                }
                button{
                    color:seashell;
                    border:none;
                    outline: none;
                    border-radius:8px;
                    width:80px;
                    height:30px;
                    font-size: 20px;
                    background-color:#f40;
                }
            }
        }
        .more{
            height:30px;
            line-height: 30px;
            text-align: center;
            background-color:salmon;
            font-size: 20px;
            color: aliceblue;
        }
    }
</style>