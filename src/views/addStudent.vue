<template>
    <!-- 新增学生 -->
    <div class="add-student content" id="add-student-menu">
      <form action id="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input type="text" name="name" id="name" v-model="user.name" ref="name" />
        </div>
        <div>
          <label for>性别</label>
          <input type="radio" name="sex" value="0" id="male" checked v-model="user.sex" ref="sex" />
          <label class="radio-label" for="male">男</label>
          <input type="radio" name="sex" value="1" id="female" v-model="user.sex" />
          <label class="radio-label" for="female">女</label>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" id="sNo" v-model="user.sNo" ref="sNo" />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" name="email" id="email" v-model="user.email" ref="email" />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" name="birth" id="birth" v-model="user.birth" ref="birth" />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" name="phone" id="phone" v-model="user.phone" ref="phone" />
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" name="address" id="address" v-model="user.address" ref="address" />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" @click.prevent="submit" />
          <input type="button" value="重置" class="btn" @click.prevent="reset" />
        </div>
      </form>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            name: '',
            sNo: '',
            sex: 0,
            birth: '',
            email: '',
            phone: '',
            address: ''
          }
        }
      },
      methods: {
        submit() {
          this.$api.addStudent(this.user).then(res => {
            if(res.data.status == 'success') {
              this.$toast({
                msg: res.data.msg,
                type: 'success',
              })
              this.$store.dispatch('getStudentList', 1).then( _ => {
                this.$router.push('/studentList');          // 回到首页
              })
            } else if( res.data.status == 'fail') {
              this.$toast({
                msg: res.data.msg,
                type: 'fail',
              })
            }
          },error => {
            console.log(error);
          })
        },
        reset() {
          for(let prop in this.$refs) {
            if(prop != 'sex') {             // 除了性别之外的
              this.$refs[prop].value = '';
            } else {                        // 单独处理性别
              this.$refs.sex.checked = true;
            }
          }
        }
      }
    };
</script>

<style>

</style>