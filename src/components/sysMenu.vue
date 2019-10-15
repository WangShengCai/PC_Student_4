<template>
    <div class="left-menu">
        <dl class='menu-list'>
            <dt>学生管理</dt>
            <router-link :to="{name: 'studentList'}" tag="dd">学生列表</router-link>
            <router-link :to="{path: '/addStudent'}" tag="dd">新增学生</router-link>
        </dl>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>