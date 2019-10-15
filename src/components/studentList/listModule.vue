<template>
  <div class="dialog">
    <div class="mask" v-on:click="hide"></div>
    <div class="dialog-content">
      <!-- 编辑学生 -->
      <h2>编辑信息</h2>
      <form action id="edit-student-form">
        <div>
          <label for="name1">姓名</label>
          <input
            type="text"
            name="name"
            id="name1"
            :value="editStudent.name"
            @change="changeValue('name',$event.target.value)"
            ref="name"
          />
        </div>
        <div>
          <label>性别</label>
          <input
            type="radio"
            name="sex"
            value="0"
            id="male1"
            :checked="editStudent.sex == '0'"
            @change="changeValue('sex',$event.target.value)"
            ref="sex"
          />
          <label class="radio-label" for="male1">男</label>
          <input
            type="radio"
            name="sex"
            value="1"
            id="female1"
            :checked="editStudent.sex == '1'"
            @change="changeValue('sex',$event.target.value)"
          />
          <label class="radio-label" for="female1">女</label>
        </div>
        <div>
          <label for="sNo1">学号</label>
          <input
            type="text"
            name="sNo"
            id="sNo1"
            :value="editStudent.sNo"
            @change="changeValue('sNo',$event.target.value)"
            readonly
            ref="sNo"
          />
        </div>
        <div>
          <label for="email2">邮箱</label>
          <input
            type="text"
            name="email"
            id="email2"
            :value="editStudent.email"
            @change="changeValue('email',$event.target.value)"
            ref="email"
          />
        </div>
        <div>
          <label for="birth1">出生年</label>
          <input
            type="text"
            name="birth"
            id="birth1"
            :value="editStudent.birth"
            @change="changeValue('birth',$event.target.value)"
            ref="birth"
          />
        </div>
        <div>
          <label for="phone1">手机号</label>
          <input
            type="text"
            name="phone"
            id="phone1"
            :value="editStudent.phone"
            @change="changeValue('phone',$event.target.value)"
            ref="phone"
          />
        </div>
        <div>
          <label for="address1">住址</label>
          <input
            type="text"
            name="address"
            id="address1"
            :value="editStudent.address"
            @change="changeValue('address',$event.target.value)"
            ref="address"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" @click.prevent="submit" />
          <input type="button" value="重置" class="btn" @click.prevent="reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

  export default {
    data() {
      return {
        user: {}
      };
    },
    methods: {
      ...mapActions(["upDateStudent"]),
      // 点击隐藏遮罩层
      hide() {
        this.$store.commit("changeModule", false);
      },
      // 保存单项表格数据
      changeValue(key, value) {
        this.user[key] = value;
      },
      // 提交
      submit() {
        let user = Object.assign({}, this.editStudent, this.user);
        this.upDateStudent(user).then(
          res => {
            // res是一个对象，里面拥有两条信息，msg和type
            this.$toast(res);
          },
          error => {
            // error是一个对象，里面拥有两条信息，msg和type
            this.$toast(error);
          }
        );
      },
      // 重置
      reset() {
        for(let prop in this.$refs) {
          if(prop != 'sex') {       // 除了性别之外的
            this.user[prop] = this.$refs[prop].value = '';
          } else {                  // 处理性别的
            this.user.sex = 0;
            this.$refs.sex.checked = true;
          }
        }
      }
    },
    computed: {
      ...mapState(["editStudent"])
    }
  };
</script>

<style>
</style>