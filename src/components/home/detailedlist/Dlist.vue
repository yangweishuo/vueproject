<template>
<div class="warp">
  <div class="header">
    <div class="left">
      <router-link :to="{ path: '/detailedlist', query: {name:this.listname}}"><i class="iconfont icon-iconfanhui"></i></router-link>
    </div>
    <div class="center"><h1 v-if="this.list[0]">{{this.list[0].name}}</h1></div>
    <div class="right">
      <i class="iconfont icon-yuyin"></i>
    </div>
    <div class="right2">
      <i class="iconfont icon-xt2"></i>
    </div>


  </div>
  <div class="d_main">
    <div class="banner">
      <img v-if="this.list[0]" v-lazy="this.list[0].photos[0].url" alt="">
    </div>
    <div class="title">
      <h1 v-if="this.list[0]">{{this.list[0].name}}</h1>
      <p>
        <span v-if="this.list[0]"><star :stars="this.list[0].biz_ext.rating"></star></span>
        人均消费：<span class="price" v-if="this.list[0]">{{this.list[0].biz_ext.cost}}</span>
      </p>
      <P v-if="this.list[0]">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;餐饮类型：{{this.list[0].type}}
      </P>
    </div>
    <div class="list_img">
      <div class="img_list" v-if="this.list[0]">
        <img v-lazy="this.list[0].photos[0].url" alt="">
      </div>
      <div class="img_list" v-if="this.list[0]">
        <img v-lazy="this.list[0].photos[1].url" alt="">
      </div>
      <div class="img_list" v-if="this.list[0]">
        <img v-lazy="this.list[0].photos[2].url" alt="">
      </div>
    </div>
    <div class="min_content">
      <h1>特色推荐</h1>
      <p v-if="this.list[0]" class="contents">{{this.list[0].tag}}</p>
    </div>
  </div>

</div>
</template>

<script>
    import Star from "../../public/Start";
    export default {
        name: "Dlist",
      components: {Star},
      data(){
        return{
          list:[],
          listname:""
        }
      },
      created(){
        console.log(this.$router.history.current.query.id)
        var name=window.localStorage.getItem("name")
        this.listname=name
        console.log(name)
        this.$http.get("https://restapi.amap.com/v3/place/detail",{params:{
            id:this.$router.history.current.query.id,
            output:"JSON",
            key:"5a172710e7b7d1a0130535bee5377aa9"
          }}).then((res)=>{
          console.log(res.data.pois)
          this.list=res.data.pois
        })

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
  .header .right{
    flex: 1;
    color: #4587F8;
  }
  .header .right2{
    flex: 1;
    color: #4587F8;
  }
  .d_main{
    flex: 1;
    width: 100%;
    height: 19rem;
    overflow-y: scroll;
  }
  .banner{
    width: 100%;
    height: 8.9875rem;
  }
  .banner img{
  	width: 100%;
  	height: auto;
  }
  .title{
  	width: 100%;
  	height: 3.87rem;
    background: #4288FF;
    color: #fff;
  }
  .title h1{
    width: 100%;
    line-height: 1.5rem;
    font-size: 20px;
  }
  .title p{
    margin-left: 39px;
    width: 87%;
    display: flex;
    line-height: 0.6rem;
    text-align: center;
  }
  .title p span{
    line-height: 0.5rem;
  }
  .price{
    color: #fff;
  }
  .price::before{
    content: "￥";
    color: #fff;
  }
  .list_img{
    display: flex;
    width: 100%;
     	height: 4rem;
  }
   .list_img div{
   	margin: 10px;
   	flex: 1;
   	width: 100%;
   	height: 3.5625rem;
   }
    .list_img div img{
   	width: 100%;
   	height: 100%;
   }
  .min_content{
    width: 100%;
    height: 2rem;
  }
  .min_content h1{
    width: 100%;
    height: 1rem;
    font-size: 20px;
    text-align: left;
    padding-left: 10px;
  }
  .contents{
    margin-left: 10px;
    width: 96%;
    font-size: 17px;
  }
</style>
