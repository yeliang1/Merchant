<template>
  <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
    <div :class="isCollapse ? 'logo min-logo' : 'logo'">
      <img src="@/assets/logo.png" alt=""/>
    </div>

    <el-menu class="el-menu" unique-opened router @open="handleOpen" @close="handleClose" collapse-transition
             :collapse="isCollapse">
      <el-submenu v-for="(route, index) in Routers" :key="index" :index="route.name">
        <template slot="title"><i :class="route.meta.icon"></i><span slot="title">{{route.meta.name}}</span></template>
        <el-menu-item v-for="(cRoute, cIndex) in route.children" :key="cIndex" :index="cRoute.name" :route="cRoute">
          <template slot="title">
            <i :class="cRoute.meta.icon"></i>
            <span slot="title">{{cRoute.meta.name}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
  .el-aside {
    height: 100%;
    overflow-y: auto;
    color: #333;
    .logo {
      width: 200px;
      transition: width 0.5s linear;
      img {
        width: 100%;
      }
    }
    .min-logo {
      width: 64px;
      transition: width 0.3s;
    }
    .el-menu:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-menu--collapse {
      .is-active {
        i.iconfont {
          font-size: 25px;
          color: red;
        }
      }
    }
  }
</style>

<script>
  import sliderPath from '@/router/sliderPath';

  export default {
    props: ['isCollapse'],
    data() {
      return {
        Routers: sliderPath
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
