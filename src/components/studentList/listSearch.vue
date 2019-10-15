<template>
  <div class="search">
    <label for="search">关键字搜索：</label>
    <input type="text" id="search" maxlength="15" placeholder="请输入检索词！" v-model="keyWord" />
    <button class="btn" @click="handelSearch">搜 索</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyWord: '',
      }
    },
    methods: {
      handelSearch() {
        this.$store.commit('setKeyWord', this.keyWord);
        this.$store.dispatch('getStudentList', 1);
      }
    }
  };
</script>

<style>

</style>