<template>
  <!-- 学生列表 -->
  <div class="student-list content content-active" id="student-list-menu">
    <!-- 搜索区域 -->
    <list-search></list-search>
    <!-- 表格区域 -->
    <list-table></list-table>
    <!-- 分页插件部分 -->
    <turn-page></turn-page>
    <!-- 遮罩层部分 -->
    <transition name="shengcai">
        <list-module v-if="showModule"></list-module>
    </transition>
  </div>
</template>

<script>
    import listSearch from "../components/studentList/listSearch";
    import listTable from "../components/studentList/listTable";
    import turnPage from "../components/studentList/turnPage";
    import listModule from "../components/studentList/listModule";
    import { mapState } from 'vuex'

    export default {
        components: {
            listSearch,
            listTable,
            turnPage,
            listModule
        },
        computed: {
            ...mapState(['showModule'])
        }
    };
</script>

<style>
    /* 
        .v-enter .v-enter-to(进入起始点)          .v-leave .v-leave-to(离开起始点)
        .v-enter-active .v-leave-active(正在进入离开)
    */
    .shengcai-enter{
        top:-100%;
        height:0;
    }
    .shengcai-enter-to{
        top:0;
        height:100%;
    }
    .shengcai-leave{
        top:0;
        height:100%;
    }
    .shengcai-leave-to{
        top:-100%;
        height:0;
    }
    .shengcai-enter-active, .shengcai-leave-active{
        transition:all .4s ease-in;
    }
</style>