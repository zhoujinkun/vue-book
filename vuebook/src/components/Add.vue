<template>
  <div class="add">
    <MHeader :back="true">
      <span>添加</span>
    </MHeader>
    <ul>
      <li>
        <label for="bookName">书名</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </li>
      <li>
        <label for="bookPrice">价格</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice">
      </li>
      <li>
        <label for="bookDesc">封面</label>
        <input type="text" id="bookCover" v-model="book.bookCover">
      </li>
      <li>
        <label for="bookContent">内容简介</label>
        <textarea rows="10" cols="30" id="bookContent" v-model="book.bookContent"></textarea>
      </li>
      <li>
        <button @click="saveBook">保存</button>
      </li>
    </ul>
  </div>
</template>
<script>
import MHeader from "../base/MHeader";
import {addBook} from '../api/axios.js';
export default {
    data(){
        return{
            book:{}
        }
    },
    methods:{
        async saveBook(){
            let data = await addBook(this.book);
            if(data.bool == 1){
                //请求成功跳转到列表页
                this.$router.push('/list');
            }
        }
    },
    components: {
        MHeader
    }
};
</script>
<style lang="less" scoped>
.add{
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