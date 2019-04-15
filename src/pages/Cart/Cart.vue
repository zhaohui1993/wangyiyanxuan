<template>
    <div style="margin-left: 10px">
      <profileCarHeader>
        <span slot="middle" class="middle elseMiddle">购物车</span>//这个一定记得class是left哈因为样式就是
        <span slot="right" class="right">领卷</span>
      </profileCarHeader>
      <p class="ensure">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮费</span>
      </p>
      <div class="cart-img">
        <i class="iconfont icon-cart"></i>
      </div>
      <p class="addElse">去添加点什么</p>
      <button class="login">登陆</button>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <!--<el-time-select-->
        <!--v-model="value1"-->
        <!--:picker-options="{-->
        <!--start: '08:30',-->
        <!--step: '00:15',-->
        <!--end: '18:30'-->
      <!--}"-->
        <!--placeholder="选择时间">-->
      <!--</el-time-select>-->
      <!--<el-form-->
        <!--:model="ruleForm2"-->
        <!--status-icon :rules="rules2"-->
        <!--ref="ruleForm2"  class="demo-ruleForm"-->
        <!--label-position="left" label-width="100px"-->
        <!--&gt;-->

        <!--<el-form-item label="密码" prop="pass" class="formItem" >-->
          <!--<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="确认密码" prop="checkPass" class="formItem">-->
          <!--<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="年龄" prop="age" class="formItem">-->
          <!--<el-input v-model.number="ruleForm2.age" ></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="验证吗" prop="phone" class="yanzhengma">-->
          <!--<el-col :span="11">-->
          <!--<el-input v-model.number="ruleForm2.phone" autocomplete="off"></el-input>-->
          <!--</el-col>-->
          <!--<el-col :span="2">-->
            <!--&#45;&#45;-->
          <!--</el-col>-->
          <!--<el-col :span="11">-->
            <!--<el-input v-model.number="ruleForm2.phone" autocomplete="off"></el-input>-->
          <!--</el-col>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>-->
          <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    </div>
</template>

<script>
    export default {
      data () {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        }
        var validatePass = (rule, value, callback) => {
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(!reg.test(value)){
              callback(new Error('身份证输入不合法'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var validatePass3 = (rule, value, callback) => {
          var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          if (value === '') {
            callback(new Error('验证码不能为空'));
          } else if (!reg.test(value)) {
            callback(new Error('错误'));
          } else {
            callback();
          }
        };
        return {
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: '',
            phone: ''
          },
          rules2: {
            pass: [
              {required: true,validator: validatePass, trigger: 'blur'}
            ],
            checkPass: [
              {required: true,validator: validatePass2, trigger: 'blur'}
            ],
            age: [
              {required: true,validator: checkAge, trigger: 'blur'}
            ],
            phone: [
              {required: true,validator: validatePass3, trigger: 'blur'}
            ]
          },
          value1: '',

        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
              console.log('formName', formName)
            } else {
              console.log('error submit!!');
              console.log('formName', formName)
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .elseMiddle
    margin-left 300px
    font-size 34px
    font-weight bold
  .right
    color red
.ensure
  width 100%
  height 23px
  margin-top 30px
  display flex
  justify-content space-around
.cart-img
  width 246.344px
  height 246.344px
  margin 372px auto 0
  i
    font-size 230px

.addElse
  width 100%
  height 30px
  text-align center
  font-size 30px
.login
  display block
  margin 15px auto
  text-align center
  line-height 91.38px
  outline none
  width 476.8px
  height 91.38px
  background-color red
  color white
  font-weight bold
  font-size 40px
.formItem
  width 500px
.yanzhengma
  width 500px
</style>
