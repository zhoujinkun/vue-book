<template>
    <div>
        <MHeader :back="true">
            <span>详情</span>
        </MHeader>
        <div class="detail">
            <ul>
                <li>
                    <img :src="book.bookCover" alt="">
                </li>
                <li>
                    <label for="bookName">书名:</label>
                    <input type="text" id="bookName" v-model="book.bookName">
                </li>
                <li>
                    <label for="bookPrice">价格:</label>
                    <input type="text" id="bookPrice" v-model="book.bookPrice">
                </li>
                <li>
                    <label for="bookNameContent">详情:</label>
                    <textarea id="bookContent" v-model="book.bookContent" cols="30" rows="10"></textarea>
                </li>
                <li>
                    <button @click="save(book.bookId)">保存</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MHeader from '../base/MHeader';
import {getOneBook, updateBook} from '../api/axios.js';
export default {
    data(){
        return{
            book:{}
        }
    },
    created(){
        this.getBook();
    },
    methods:{
        async getBook(){
            
            this.book = await getOneBook(this.bid);
            //假如是空对象，跳转到列表页
            if(!this.book.bookId){
                this.$router.push('/list');
            }
        },
        async save(id){
            //后端接口返回的数据
           let data = await updateBook(id,this.book);
        //    console.log(typeof JSON.stringify(this.book));
        //    console.log(this.book);
            // 跳转到列表页
           if(data.bool == 1){
               this.$router.push('/list');
           }
        }
    },
    computed: {
      bid(){
          return this.$route.params.bid;
      }  
    },
    components:{
        MHeader
    }
}
</script>
<style lang="less" scoped>
    .detail{
        position:absolute;
        top:40px;
        left:0;
        bottom:0;
        right:0;
        background-color: #fff;
        z-index: 999;
        ul{
            text-align: center;
            li{
                margin:10px 0;
                input,textarea{
                    font-size: 18px;
                    border:none;
                    text-align: center;
                    vertical-align: top;
                }
                #bookContent{
                    text-align: left;
                    padding-top:5px;
                }
                label{
                    font-size: 20px;
                    font-weight:800;
                }
                button{
                    outline: none;
                    border:none;
                    border-radius:8px;
                    width:80px;
                    background-color: lightblue;
                    color:tomato;
                    height:30px;
                    font-size:20px;
                }
            }
        }
    }
</style>
