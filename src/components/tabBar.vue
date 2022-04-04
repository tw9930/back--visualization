<template >
    <div>
     
    <el-menu
      default-active="2"
     background-color=#1c232f
     text-color="#5852b5"
     >

      <el-menu-item  >
    <label>Elements</label>
     <span>
       NAVIGATION
     </span>

      </el-menu-item>
       <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      
    
       
      </el-menu>
    </div>
</template>
<style scoped>
.el-menu{
  width:100%;
}
</style>