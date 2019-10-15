<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody class="tbody">
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex == '0' ? '男' : '女' }}</td>
        <td>{{ item.email }}</td>
        <td>{{ new Date().getFullYear() - item.birth }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button class="btn edit" v-on:click="edit(item)">编辑</button>
          <button class="btn del" @click="delStudent(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  created() {
    this.$store.dispatch('getStudentList', 1);
  },
  methods: {
      ...mapMutations(['changeModule','setEditStudent']),
      edit(item) {
          // 展示隐藏遮罩层
          this.changeModule(true);
          // 表单回填
          this.setEditStudent(item);
      },
      delStudent(sNo) {
        const flag = window.confirm('确定要删除吗？');
        if(flag) {
          this.$store.dispatch('delStudent', sNo);
        }
      }
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  }
};
</script>

<style>
</style>