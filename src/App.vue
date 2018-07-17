<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <Tarbar v-if="isShow"></Tarbar>
  </div>
</template>
<script>
  import Tarbar from "./base/Tarbar.vue"
  export default {
    name: 'App',
    components: {Tarbar},
    computed: {
      isShow() {
        if (this.$route.name === 'index' || this.$route.name === 'mess' || this.$route.name === 'my') {
          return true
        }
        else {
          return false
        }
      }
    }
  }
</script>
<style>
  #app .lyl {
    height: 50px;
    background-color: #c50206;
  }

  #app .mint-header-title {
    font-size: 16px;
    font-weight: 300;
  }

  #app .header-title {
    height: 50px;
    background-color: #c50206;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .conent {
    padding-top: 50px;
  }
  .slide-fade-enter-active {
    transition: all .05s ease;
  }
  .slide-fade-leave-active {
    transition: all .05s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
