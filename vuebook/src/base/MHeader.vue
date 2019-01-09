<template>
    <div class="header">
        <slot></slot>
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" >
    .header{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:40px;
        text-align:center;
        background-color:salmon;
        line-height: 40px;
        font-weight:600;
        i{
            position:absolute;
            left:10px;
            font-size:20px;
            
        }
    }
</style>
