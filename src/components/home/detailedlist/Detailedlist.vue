<template>
<div class="warp">
  <div class="header">
  <div class="left">
    <router-link to="/home"><i class="iconfont icon-iconfanhui"></i></router-link>
  </div>
  <div class="center"><h1>{{this.$router.history.current.query.name}}</h1></div>
  <div class="right">
    <i class="iconfont icon-yuyin"></i>
  </div>
  <div class="right2">
  	  <i class="iconfont icon-xt2"></i>
  </div>
  </div>
  <div class="nav">
    <p>5000米</p>
    <p>全部分类</p>
    <select @change="Ranking" v-model="val">
      <option value="综合排序">&nbsp;&nbsp;&nbsp;综合排序</option>
      <option value="价格排序">&nbsp;&nbsp;&nbsp;价格排序</option>
      <option value="评分排序">&nbsp;&nbsp;&nbsp;评分排序</option>
    </select>
    <p>更多筛选</p>
  </div>
  <div class="main">
    <pull-to :bottom-load-method="refresh">
    <div v-for="(val,index) in  list"  class="m_list">
      <div class="mleft">
        <h3><router-link :to="{ path: '/dlist', query: {id:val.id}}"  >{{val.name}}</router-link></h3>
        <div class="list">
           <div class="content">
             <span>{{val.address}}</span>
             <span>{{val.business_area}}</span>
             <span>{{val.adname}}</span>
           </div>
          <p><span><star :stars="val.biz_ext.rating"></star></span>人均消费：<span class="price">{{val.biz_ext.cost}}</span></p>
          <div class="tag">
          <span>餐饮类型：{{val.type}}</span></div>
        </div>
      </div>
      <div class="mright">
        <img v-lazy="val.photos[0].url" alt="">
      </div>
    </div>
    </pull-to>
  </div>
</div>
</template>

<script>
  import PullTo from 'vue-pull-to'
  import Star from "../../public/Start";
    export default {
        name: "Detailed",
        components: {Star,PullTo},
         data(){
          return{
            list:[],
            num:20,
            val:"综合排序"
          }
        },
        created(){
          // console.log(this.$router.history.current.query.name)
          window.localStorage.setItem("name",this.$router.history.current.query.name)
          this.getState()
        },
        methods:{
          refresh(loaded){
            this.num=this.num+10
            this.$http.get("http://restapi.amap.com/v3/place/text",{params:{
                key:"5a172710e7b7d1a0130535bee5377aa9",
                keywords:this.$router.history.current.query.name,
                city:"北京",
                offset:this.num,
                page:1,
                extensions:"all"
              }}).then((res)=>{
              // console.log(res.data.pois)
              this.list=res.data.pois
              this.Ranking()
            })
              loaded('done')
          },
          //数组排序方法，设置初始值val，然后通过v-model来获取下拉列表的onchange事件中的选中的option标签的内容来改变val，
          //然后通过if判断val的内容来进行数组的排序
          Ranking:function(){
            console.log(this.val)
            if(this.val==="综合排序"){
              this.getState()
            }else if(this.val==="价格排序"){
            this.list.sort(function (a, b) {
              return a.biz_ext.cost-b.biz_ext.cost
            })
            }else if(this.val==="评分排序"){
              this.list.sort(function (a, b) {
                return b.biz_ext.rating-a.biz_ext.rating
              })
            }
          },
          //封装获取数据的方法
          getState:function(){
            this.$http.get("http://restapi.amap.com/v3/place/text",{params:{
                key:"5a172710e7b7d1a0130535bee5377aa9",
                keywords:this.$router.history.current.query.name,
                city:"北京",
                offset:this.num,
                page:1,
                extensions:"all"
              }}).then((res)=>{
              // console.log(res.data.pois)
              this.list=res.data.pois
            })
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
.header .right{
	flex: 1;
	color: #4587F8;
}
.header .right2{
	flex: 1;
		color: #4587F8;
}
.nav{
	width: 100%;
	line-height: 1.5rem;
	border-bottom: 1px solid #D6D6D6;
  display: flex;
}
.nav select{
  flex: 1;
  border: none;
  outline: none;
  text-align: center;
  font-size: 14px;
}
.nav p{
  flex: 1;
  text-align: center;
  font-size: 14px;

}
.main{
  flex: 1;
  width: 100%;
  height: 18.96875rem;
  overflow: scroll;
}
.main .m_list{
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #D6D6D6;
  /*display: flex;*/
}
.main .m_list .mleft{
  margin:10px 10px;
  flex: 8;
  width: 65%;
  height: 2.5rem;
  float: left;
  line-height: 0.7rem;
}
.main .m_list .mleft .content{

  display: flex;
  text-align: center;
  margin-left: 35px;
}
.main .m_list .mleft .content span{
  width: 30%;
  display:block;
  line-height: 0.5rem;
}
.main .m_list .mleft .content span:first-child{

  max-width: 110px;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main .m_list .mleft h3{
  margin-left: 64px;
  max-width: 110px;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main .m_list .mleft p{
  display: flex;
}
.main .m_list .mleft .price{
  color: #c00c0c;
}
.main .m_list .mleft .price::before{
  content: "￥";
  color: #c00c0c;
}
.main .m_list .mright{
  margin:10px 10px;
  flex: 4;
  width: 24%;
  height: 2.5rem;
  float: left;
}
.main .m_list .mright img{
  width: 100%;
  height: 100%;
}
</style>
