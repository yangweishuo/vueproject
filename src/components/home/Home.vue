<template>
    <div class="warp">
      <Header></Header>
      <div class="main">
        <div class="search">
          <input type="text" placeholder="请输入要搜索的内容" class="s_sousou">
        </div>
        <div class="minmain">
          <div class="m_left">
            <ul>
              <li v-for="val,index in listname" @click="btn(index)">{{val.tit}}</li>
            </ul>

          </div>
          <div class="m_right">
            <ul>
              <li v-for="val,index in list" @click="btn(index)">
               <div class="r_img"><img :src="val.img" alt=""></div>
                <div class="r_title"><router-link :to="{ path: '/detailedlist', query: { name: val.name }}">{{val.name}}</router-link></div>
               <div class="r_tit">{{val.datatype}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Header from "../public/Header";
    import axios from 'axios'
    export default {
      name: "Home",
      components: {Header},
      data(){
          return{
            listname:[],
            list:[],
            val:"常用"

          }
      },
      created(){
        var url="../../../static/js/list.json"
        axios(url).then((res)=>{
          console.log(res.data.type)
            this.listname=res.data.type
        })

      },
      methods:{
        btn(index){
          this.list=this.listname[index].datainfo
        }
      }

    }
</script>

<style scoped>
.search{
	width: 100%;
	line-height: 1rem;
	background: #F6F6F6;
   border-bottom: 1px solid #D5D5D5;
}
.search .s_sousou{
	width: 90%;
	height: 0.6rem;
	border: 1px solid #B9B9B9;
	border-radius: 17.5px;
	padding-left: 10px;
	outline: none;
  box-shadow: 0 0 1px 1px rgba(0,0,0,0.1) inset;
}
.minmain{
flex: 1;
display: flex;
 width: 100%;
  height:14rem;
  background: #F6F6F6;
}
.minmain .m_left{
  width: 100%;
  height:100%;
  flex: 4;
  background: #FFFFFF;


}
.minmain .m_left ul{
  width: 100%;
  height:100%;
   border-right:1px solid #636363 ;
   background: #fff;
}
.minmain .m_left li{
  width: 100%;
  line-height:1.35rem;
  border-bottom:1px solid #636363 ;
  font-size: 22px;
}
.minmain .m_right{
  flex: 8;
  width: 100%;
  height:14rem;
  overflow-y: scroll;
}
.minmain .m_right ul{
  width: 100%;
  height:14rem;
  border-right:1px solid #636363 ;
}
.minmain .m_right li{
  width: 100%;
  line-height:2.45rem;
  display: flex;
  border-bottom:1px solid #636363 ;
  font-size: 15px;
}
.minmain .m_right li .r_img{
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  flex: 1;
  width: 30%;
  height: 1.75rem;

}
.minmain .m_right li .r_img img{
	width: 100%;
	height: auto;
	margin: 0 auto;
}
.minmain .m_right li .r_title{
	flex: 1;
}
.minmain .m_right li .r_tit{
	flex: 1;
}
</style>
