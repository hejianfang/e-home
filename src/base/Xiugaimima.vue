<template>
  <div>
    <Header></Header>
    <div class="conent">
      <form action="" @submit.prevent>
        <h1>旧密码 :</h1>
        <input type="password" v-model="pwd">
        <h1>新密码 :</h1>
        <input type="text" v-model="newPwd">
        <h1>确认密码 :</h1>
        <input type="text" v-model="suerpwd">
        <div id="xiugai5">
          <mt-button size="large" @click="yanzheng">确定</mt-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'
  export default {
    name: "Sixiang",
    components: {
      Header    },
    data(){
      return{
        pwd:'',
        newPwd:'',
        suerpwd:''
      }
    },
    methods:{
      yanzheng(){
        if(this.newPwd==this.suerpwd){
          this.getdata();
        }else{
          alert("两次输入的密码不一致")
        }
      },
      getdata(){
        this.$axios.post("changePwd",{
          pwd:this.pwd,
          newPwd:this.newPwd
        }).then(res=>{
          // console.log(res);
          alert(res.data.msg)
          this.$router.push("/login")
        })
      }
    }
  }
</script>
<style>
  #xiugai5  .mint-button--large {
    width: 101%;
    background-color: #e43228;
    color: white;
  }
</style>
<style scoped>
  form {
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
  }
  form h1{
    font-weight: 400;
    font-size: 18px;
  }
  form input {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-radius: 6px;
    border: 1px solid #888;
    font-size: 15px;
  }

</style>
