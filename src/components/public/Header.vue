<template>
<div id="header">
<div class="h_img">
  <img src="../../../static/img/logo.jpg" alt="">
</div>
<div class="h_content"></div>
<div class="h_right">
  <router-link to="/home">分类</router-link>
  <router-link to="/login">登录</router-link>
  <router-link to="/search">搜索</router-link>
</div>
</div>
</template>

<script>
    export default {
        name: "Header"

    }
</script>

<style scoped>
#header{
  width: 100%;
  height: 1.71875rem;
  line-height: 1.71875rem;
  display: flex;
  border-bottom:1px dashed #C5C5C5;
}
#header .h_img{
	margin-top: 10px;
	margin-bottom: 10px;
	width: 9.8125rem;
	height: 1.78125rem;
	flex: 1;
}
#header .h_content{
	flex: 1;
}
#header .h_right{
	flex: 1;
  display: flex;
  line-height: 1.71875rem;

}
#header .h_right a{
  flex: 1;
  font-size: 15px;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  color: #636363;
}
#header .h_right a.router-link-exact-active.router-link-active {
	color: #FF7200;
	border-bottom: 2px solid #FF7200;
  margin-bottom: 2px;
}
#header .h_img img{
	width: 100%;
	height: auto;
}
</style>
