<template>
  <div class="warp">
    <div class="main">
      <div class="header">
        <div class="left">
          <router-link to="/home"><i class="iconfont icon-iconfanhui"></i></router-link>
        </div>
        <div class="center"><h1>登录</h1></div>
      </div>
      <div class="lmian">
        <div class="login-main">
          <form class="form-horizontal">
            <div class="form-group">
              <div class="col-sm-8">
                <input type="text" ref="name" class="form-control"  placeholder="手机号">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8">
                <input type="password" ref="pwd" class="form-control"  placeholder="密码">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8 inptext">
                <button type="button" class="btn btn-danger btn-lg btn-block" @click="add">登录</button>
              </div>
            </div>
          </form>
        </div>
        <div class="login-base">
          <div class="login-base-le">
            <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
            <span>忘记密码</span>
          </div>
          <router-link to="/register">
            <div class="login-base-ri">
              <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
              <span>快速注冊</span>
            </div>
          </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data () {
        return {
          visibility: false,
          list:[]
        }
      },
      methods: {
        add: function () {
          var user = this.$refs.name.value
          var pwd = this.$refs.pwd.value
          var  obj=window.localStorage.getItem("obj")
          var message=JSON.parse(obj)
          console.log(message)
          console.log(user, pwd,pwd,message.ped)
          //判断用户名是否为空
          if (user == "") {
            this.$alert("用户名不能为空")
            return
          } else
            // 用户名重复性检测
            if (user == message.username) {
              //判断密码是否为空
            if (pwd == "") {
              this.$alert("密码不能为空")
              return
            } else
            //密码重复性检测
              if (pwd == message.pwd) {
              var url = `http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f&cellphone=${user}&passwrod=${pwd}`;
              this.$http.post(url).then((res) => {
                console.log(res)
                if (res.data.status == "0") {
                  this.$toast("登陆成功")
                  location.href = "/#/home"
                  return
                }
              })
            } else {
              this.$toast("输入密码不正确请重新输入")
              this.$refs.pwd.value=""
              return
            }
          } else {
            this.$alert("用户名不存在，请注册")
            return
          }
        }
      }
    }
</script>

<style scoped>
  .h1, h1 {
    line-height: 1.5rem;
  }
  .header{
    width: 100%;
    line-height: 1.5rem;
    display: flex;
    border-bottom: 1px solid #D6D6D6;
  }
  .header .left{
    flex: 1;
  }
  .header .center{
    flex: 9;
    font-size: 20px;
    font-weight: normal;
  }
  .heder .center h1{
    line-height: 1.5rem;
  }
  .form-control {
    display: block;
    width: 97%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .lmian{
    flex: 1;
  }
  .col-sm-8 {
    position: relative;
    min-height: 1px;
    /* padding-right: 15px; */
    /* padding-left: 15px; */
  }
  .btn-block {
    width: 90%;
    margin-left: 5%;
  }
  .login-base {
    width: 90%;
    height: 0.5rem;
    margin-left: 5%;
    overflow: hidden;
  }
  .login-base-le {
    float: left;
    font-size: 0.2rem;
    color: #666666;
  }
  .login-base-ri {
    float: right;
    font-size: 0.2rem;
    color: #666666;
  }
  .form-horizontal .form-group {
    margin: 27px;
  }
</style>
