<template>
  <div>
   <Header></Header>
    <div class="contiar">
      <div id="item-ss">
        <div class="item">
          <img src="../assets/logo.png">
        </div>
        <div class="xingong"></div>
        <form @submit.prevent>
          <div><input type="tel" placeholder="身份证号：" v-model="userId"></div>
          <div><input type="password" placeholder="密码：" v-model="pwd"></div>
          <div>
            <mt-button size="large" @click="login" id="loginn">登 录</mt-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'
  export default {
    name: "Login",
    components:{
      Header
    },
    data() {
      return {
        userId: '',
        pwd: ''
      }
    },
    methods: {
      login() {
        this.$axios.post("login", {
          userId: this.userId,
          pwd: this.pwd,
        }).then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            this.$router.push('/my');
          } else {
            alert(res.data.msg)
          }
        })
      },
      huiqu() {
        this.$router.go(-1)
      },
    }
  }
</script>
<style scoped>
  .contiar {
    background-color: #c50206;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 50px;
    overflow-y: auto;
  }

  #item-ss .item img {
    width: 60%;
    height: 50px;
    margin: 30px 30px 30px 65px;
  }

  #item-ss form {
    width: 80%;
    margin: 0 auto;
  }
  #item-ss #loginn {
    width: 101%;
    background-color: #e43228;
    color: white;
  }
  #item-ss form input {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-radius: 6px;
    border: 2px solid #ff0;
    background-color: #c50206;
    font-size: 15px;
    color: white;

  }

  input::-webkit-input-placeholder { /* WebKit browsers */

    color: #ccc;

  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */

    color: #ccc;

  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */

    color: #ccc;

  }

  input:-ms-input-placeholder { /* Internet Explorer 10+ */

    color: #ccc;
  }

</style>
