<template>
  <div id='warp'>
<el-container>
<el-aside width="280px">
<div class="nav-header">
<span class="text-center">
威视可视化
</span>
</div>
<tabBar/>
 </el-aside>
  <el-container>
    <el-header height="70px">

      
    </el-header>
    <el-main>Main</el-main>

  </el-container>
</el-container>
</div>
</template>
<script>
import tabBar from "./tabBar.vue"
export default {
   
   components:{
     tabBar
   }
}
</script>
<style scoped>
  .el-header{
    background-color: #B3C0D1;
    height: 70px;
  
 
  }
  
  .el-aside {
    
    margin: 0;
  overflow-x: hidden; 
  }
  
  .el-main {
    background-color: #303133;
  
  }
  .nav-header{
    height: 70px;
    background-color: #161c25;
    width:100%;
    color: #fff;
    font-size:24px;

  }
</style>
  
