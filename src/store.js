import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    showModule: false,      // 隐显遮罩层
    editStudent: {},        // 编辑学生
    list: [],               // 学生数据列表
    count: 0,               // 总数据量
    totalPage: 0,           // 总页数
    nowPage: 1,             // 当前页数
    keyWord: '',            // 关键字搜索
  },

  mutations: {
    // 展示隐藏遮罩层
    changeModule(state, bool) {
      state.showModule = bool;
    },
    // 表单回填
    setEditStudent(state, item) {
      state.editStudent = item;
    },
    // 获取总数据
    setCount(state, count) {
      state.count = count;
      state.totalPage = Math.ceil(count / 5);
    },
    // 获取总学生列表
    setList(state, list) {
      state.list = list;
    },
    // 点击页码跳转
    setNowPage(state, n) {
      if (n == "prev" && state.nowPage > 1) {                         //上一页
        state.nowPage--;
      } else if (n == 'next' && state.nowPage < state.totalPage) {   //下一页
        state.nowPage++;
      } else if (n != 'prev' && n != 'next') {                       //中间自由变换
        state.nowPage = n;
      }
    },
    // 设置搜索关键字
    setKeyWord(state, k) {
      state.keyWord = k;
    }
  },

  actions: {
    // 更新编辑之后的数据
    upDateStudent(context, student) {
      return api.upDateStudent(student).then((res) => {
        return new Promise((resolve, reject) => {
          if (res.data.status == 'success') {
            context.commit('changeModule', false);
            Object.assign(context.state.editStudent, student);
            resolve({
              type: 'success',
              msg: res.data.msg
            })
          } else {
            reject({
              type: 'fail',
              msg: res.data.msg
            })
          }
        })
      }, (error) => {
        console.log(error);
      })
    },
    // 获取学生列表
    getStudentList(context, page) {
      // 如果有page就重新设置，没有就用上次的保存的page
      if (page) {
        context.commit('setNowPage', page);
      }
      if (context.state.keyWord && context.state.keyWord != '' && context.state.keyWord != undefined && context.state.keyWord != null && context.state.keyWord != ' ' && context.state.keyWord != '  ') {
        return api.searchStudent(context.state.keyWord, context.state.nowPage).then(res => {
          context.commit('setList', res.data.data.searchList);
          context.commit('setCount', res.data.data.cont);
        }, error => {
          console.log(error);
        })
      } else {
        return api.turnPage(context.state.nowPage).then(data => {
          context.commit('setList', data.data.data.findByPage);
          context.commit('setCount', data.data.data.cont);
        }, error => {
          console.log(error);
        }
        )
      }
    },
    // 删除学生
    delStudent(context, sNo) {
      api.delStudent(sNo).then(res => {
        if (context.state.nowPage > Math.ceil((context.state.count - 1) / 5)) {
          context.dispatch('getStudentList', context.state.nowPage - 1);
        } else {
          context.dispatch('getStudentList');
        }
      })
    }
  }
  
})