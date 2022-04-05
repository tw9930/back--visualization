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

      
      <div>
      <Header/>
      </div>
     
      
    </el-header>
    <el-main>Main</el-main>

  </el-container>
</el-container>
</div>
</template>
<script>
import tabBar from "./tabBar.vue"
import Header from "../views/header/header.vue"
export default {
   
   components:{
     tabBar,
     Header
   }
}
</script>
<style scoped>
  .el-header{
    background-color: #B3C0D1;
    display:flex;
    align-items: center;
 
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
  
