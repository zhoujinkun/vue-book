<template>
    <div class="footer">
        <router-link to="/home">
            <i class="icon iconfont icon-home2"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/list">
            <i class="icon iconfont icon-liebiao"></i>
            <span>列表</span>
        </router-link>
        <router-link to="/collect">
            <i class="icon iconfont icon-shoucangxuanzhong"></i>
            <span>收藏</span>
        </router-link>
        <router-link to="/add">
            <i class="icon iconfont icon-guanzhudianpu"></i>
            <span>添加</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .footer{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:40px;
        display:flex;
        a{
            display:flex;
            flex-direction: column;
            flex:1;
            align-items: center;
            justify-content: center;
            &.router-link-active {
                color:red;
                .iconfont{
                    font-size:20px;
                    color:red;
                }
            }
            
        }
        
    }
    
</style>
