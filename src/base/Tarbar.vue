<template>
  <div class="tab">
    <router-link to="/index">
      <img src="../assets/head-img/drawable-hdpi/dang_red.png" v-if="$route.path=='/index'">
      <img src="../assets/head-img/drawable-hdpi/dang_grey.png" v-else="$route.path!=='/index'">
      首页
    </router-link>
    <router-link to="/mess" >
      <img src="../assets/head-img/drawable-hdpi/xiaoxi_red.png" v-if="$route.path=='/mess'">
      <img src="../assets/head-img/drawable-hdpi/xiaoxi_grey.png" v-else="$route.path!=='/mess'">
      通知早知道
    </router-link>
    <router-link to="/my" >
      <img src="../assets/head-img/drawable-hdpi/huiyuan_red.png" v-if="$route.path=='/my'">
      <img src="../assets/head-img/drawable-hdpi/huiyuan_grey.png" v-else="$route.path!=='/my'">
      我的党建
    </router-link>
  </div>
</template>

<script>
  export default  {
    name: "Tarbar",


  }
</script>

<style scoped>
.tab{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
}
  .tab a{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 4px;
    color: #666;
    font-size: 14px;
  }
  .tab a img{
    width: 17px;
    padding: 3px 0;
  }
a.router-link-active{
  color: red;
  border-top: 2px solid red;
}
</style>
