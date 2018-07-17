<template>
  <div class="content">
        <div class="header">
          <div class="header-left">
           <img src="../assets/logo.png">
          </div>
          <router-link to="/login" v-if="no"> 登录 </router-link>
      </div>
    <div class="wrapi">
      <div class="slider">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in sliders" :key="item._id">
            <router-link :to="{path: '/newsDetails',query: {newsId: item.newsId}}" class="slider-wrap">
              <div class="wrap">
                <img :src="item.img" id="tu">
                <h1  id="desc">
                  {{item.title}}
                </h1>
              </div>
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="zhong">
        <router-link to="/xingongxinwen">
          <img src="../assets/head-img/drawable-hdpi/icon_01@2x.png">
          <p>信工新闻眼</p></router-link>
        <router-link to="/zhangshang">
          <img src="../assets/head-img/drawable-hdpi/icon_03@2x.png">
          <p>掌上组织生活</p></router-link>
        <h4 @click="hudong">
          <img src="../assets/head-img/drawable-hdpi/icon_05@2x.png">
          <p>党员云互动</p></h4>
        <router-link to="/dangjian">
          <img src="../assets/head-img/drawable-hdpi/icon_04@2x.png">
          <p>党建一点通</p></router-link>
        <router-link to="/dangyuan">
          <img src="../assets/head-img/drawable-hdpi/icon_06@2x.png">
          <p>党员亮身份</p></router-link>
        <router-link to="/dangshi">
          <img src="../assets/head-img/drawable-hdpi/icon_02@2x.png">
          <p>党史上的今天</p></router-link>
      </div>
      <div id="tu2">
        <img src="../assets/head-img/drawable-hdpi/banner01@2x.png">
      </div>
      <div class="shouyefoot">
        <div class="foot">
          <div class="left"></div>
          <div class="right">
            <div class="raw">
              <router-link to="/suoxue"></router-link>
              <router-link to="/suopai"></router-link>
            </div>
            <div class="raw">
              <router-link to="/zhidu"></router-link>
              <router-link to="/tese"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "index",
      data() {
        return {
          sliders: [],
          no:'true',
          code:''
        }
      },
      created() {
        this.getSlider();
        this.yes();
      },
      methods:{
        getSlider() {
          this.$axios.post("lunBo").then(res => {
            this.sliders = res.data.data;
          })
        },
        hudong(){
          if(this.code == 200){
            this.$router.push('/hudong')
          }else{
            this.$router.push('/login')
          }
        },
        yes(){
          this.$axios.post("users").then(res=>{
              if(res.data.ret){
                this.no=false;
                this.code=res.data.code
              }
          })
        }
      }
    }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 667px;
  }

.header{
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 998;
  background: #c50206;
  justify-content: space-between;
  line-height: 57px;
  position: fixed;
}
  .header img{
    display: block;
    width: 140px;
    height: 30px;
    padding:13px 0 0 20px;
  }
  .header a{
    display: inline-block;
    color: white;
    font-size: 18px;
    padding: 0 10px;
  }
  .wrapi{
padding-top: 50px;
  }
  .slider{
    height: 170px;
  }
  .zhong{
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    font-weight: 100;
    background: url("../assets/head-img/drawable-hdpi/bt_bg@2x.png");
  }
  .zhong p{
    font-size: 14px;
    color: #777;
    font-weight: 500;
  }
  .zhong a{
    width: 33%;
    margin:5px 0;
    color: #666;
  }
  .zhong h4{
    width: 33%;
    margin:5px 0;
    color: #666;
  }
.zhong a img{
  display: block;
  margin: 0 auto;
  padding-bottom: 3px;
}
  .zhong h4 img{
    display: block;
    margin: 0 auto;
    padding-bottom: 3px;
  }
  #tu{
    display: block;
    width: 100%;
    height: 170px;
    position: relative;
  }
  #desc{
    opacity: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    font-weight: 200;
    background: rgba(0,0,0,0.3);
    width: 100%;
    color: white;
  }
  #tu2 img{
    width: 100%;
    height: 95px;
    display: block;
  }
  .foot{
    display: flex;
    height: 214px;
    background:url("../assets/head-img/drawable-hdpi/channelType@2x.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  .foot .left{
    flex: 1;
  }
  .foot .right{
    flex: 2;
  }
  .raw{
    height: 82px;
    display: flex;
  }
  .raw a{
    flex: 1;
    height: 100%;
  }
</style>
