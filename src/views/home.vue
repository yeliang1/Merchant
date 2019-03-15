<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <div class="left-slider">
      <my-slider :isCollapse="isCollapse"></my-slider>
    </div>

    <div class="right-main">
      <my-header @collapseFun="handleCollapse"></my-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </div>
  </el-container>
</template>

<style scoped lang="scss">
  .el-container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    .left-slider {
      width: auto;
    }
    .right-main {
      flex: 1;
      position: relative;
      .el-main {
        height: 100%;
        overflow-y: auto;
      }
    }
  }
</style>
<script>
  import myHeader from '@/components/layout/header'
  import mySlider from '@/components/layout/slider'
  export default {
    data(){
      return {
        isCollapse: true
      }
    },
    methods: {
      handleCollapse(val){
        this.isCollapse = val;
      }
    },
    components: {
      myHeader, mySlider
    }
  };
</script>
