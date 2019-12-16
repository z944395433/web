<template>

    <!-- <span>登录页</span>
    <el-button @click="login">登录</el-button>-->
        <div class="loginbg">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>登录</span></div>
            <div class="loginForm">
              <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="账号" prop="pass">
                  <el-input  v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" :plain="true" >提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>

        </div>
</template>


<script>
  export default {
    name: "login",
    data() {
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.ruleForm.checkPass !== '') {
      //       this.$refs.ruleForm.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        // rules: {
        //   pass: [
        //     { validator: validatePass, trigger: 'blur' }
        //   ],
        //   checkPass: [
        //     { validator: validatePass2, trigger: 'blur' }
        //   ]
        // }
      };
    },
    methods: {
      submitForm(formName) {

        if (this.ruleForm.pass === 'admin' && this.ruleForm.checkPass === '123456') {
          this.open("success","登录成功")
          this.$router.push('/index')
          console.log(this.$router);
        } else {
          this.open('error','登录失败，账号或者密码错误')
        }
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     //this.$refs.
        //     return false;
        //   }
        // });
      },
      open(type1,message1){
        this.$message({
          showClose: true,
          message: message1,
          type: type1
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style >
  .loginbg{
    height: 100%;
    background: url(../../../static/image/loginBackground.jpg) center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-card {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -60%);
    width: 20%;
  }
  /*.loginForm {*/
  /*  padding: 10px;*/
  /*  position: absolute;*/
  /*  left:50%;*/
  /*  top:50%;*/
  /*  transform: translate(-50%, -50%);*/
  /*  box-shadow: 2px 2px 5px #bbb;*/
  /*}*/
</style>
