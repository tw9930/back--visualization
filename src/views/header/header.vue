<template >
    <div class=" header-wrap">
        <el-dropdown trigger="click" placement="top">
         <el-button type="primary" size="mini" class="header-btn">
          level
          </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
        </el-dropdown-menu>
   </el-dropdown>

  <div class="header-right" >

     <el-button  size=" medium"> <i  class="el-icon-search"></i></el-button>
      <div>用户中心</div>
  </div>


    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header-wrap{
display: flex; 
padding: 0 30px;
align-items: center;
}
.header-btn{
  display: flex;
  justify-content:flex-start;
color: #5852b5;
height: 40px;
background-color:#e3e1fc;
font-size: 20px;
}
.header-wrap .header-right{
  flex:1;
  display: flex;
  justify-content: flex-end;
  color:red;
}
</style>