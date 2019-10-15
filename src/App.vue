<template>
  <div class="wrapper">
    <!-- 顶部 -->
    <sys-header></sys-header>
    <!-- 左边 -->
    <sys-menu></sys-menu>
    <!-- 右边做成路由的形式 -->
    <div class="right-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import sysHeader from "./components/sysHeader";
    import sysMenu from "./components/sysMenu";

    export default {
        components: {
            sysHeader,
            sysMenu,
        }
    };
</script>

<style>
    @import url('./assets/css/index.css');
</style>
