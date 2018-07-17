<template>
    <div>
      <Header></Header>
      <div class="conent">
        <ul>
          <li><p>请选择支付方式</p></li>
          <li @click="open"><div><img src="../assets/weixinicon.png" alt=""><span id="span1">微信</span></div>
            <div><i class="iconfont icon-jiantou"></i></div></li>
          <li @click="open1"><div><img src="../assets/36017001026362278.png" alt=""><span id="span2">支付宝</span></div>
            <div><i class="iconfont icon-jiantou"></i></div></li>
        </ul>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade">
          <img src="../assets/weixin11.png" v-if="wode">
          <img src="../assets/zhifubao1.png" v-if="wodd">
        </mt-popup>
      </div>
    </div>
</template>

<script>
  import Header from '@/base/Header.vue'
    export default {
        name: "Sixiang",
      components:{
        Header
      },
      data(){
          return{
            popupVisible:false,
            wode:false,
            wodd:false
          }
      },
      methods: {
        open() {
          this.popupVisible = true
          this.wode=true
          this.wodd=false
        },
        open1(){
          this.popupVisible = true
          this.wodd=true
          this.wode=false
        }
      }
  }
</script>

<style scoped>
ul li{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #888;
  position: relative;
}
  ul li img{
    height: 50px;
    width: 50px;
  }
 #span1,#span2{
    display: inline-block;
   position: absolute;
   left: 70px;
   top: 22px;
  }
.iconfont{
  font-size: 30px;
}
</style>
