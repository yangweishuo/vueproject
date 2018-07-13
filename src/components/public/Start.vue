<template>
<p>
  <span v-for="Class in starArr" :class="Class" ></span>
</p>
</template>

<script>
    export default {
        name: "Star",
        props:['stars'],
        created(){
          console.log("显示星星组件")
        },
        computed:{
          starArr(){
            var stars=[]
            //全星星的个数
            let onstar=parseInt(this.stars);
            // console.log(onstar)
            //是否有半星
            let haslfStars=Math.round(this.stars-onstar)?true:false
            for (var i=0;i<onstar;i++){
              stars.push('onstar')
            }
            if(haslfStars){
              stars.push('haldstar')
            }
            while (stars.length<5){
              stars.push('offstar')
            }
            return stars
          }
        }
    }
</script>

<style scoped>
  p{
    width: 80%;
    height: 0.5rem;
  }
  span{
    display: inline-block;
    width: 0.6rem;
    height: 0.5rem;
  }
.onstar{
  background: url("../../../static/img/xing/xing1.png") no-repeat center center;
}
.haldstar{
  background: url("../../../static/img/xing/xingsan.png") no-repeat center center;
}
.offstar{
  background: url("../../../static/img/xing/ximg2.png") no-repeat center center;
}
</style>
