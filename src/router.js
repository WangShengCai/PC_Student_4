import Vue from 'vue'
import Router from 'vue-router'

import addStudent from './views/addStudent'
import studentList from './views/studentList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/addStudent',
      name: 'addStudent',
      component: addStudent
    },
    {
      path: '/studentList',
      name: 'studentList',
      component: studentList
    },
    {
      path: '*',
      redirect: '/studentList'
    }
  ],
})
