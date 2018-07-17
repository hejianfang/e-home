<template>
  <div class="conentr">
    <div class="head">
      <h3>我的党建</h3>
    </div>
    <div class="denglu">
      <img :src="img" v-if="img">
      <p>
        <router-link to="/login">{{name}}</router-link>
      </p>
    </div>
    <div class="foot">
      <p  @click="dian1"><img src="../assets/gerenxinxi.png">
        <span>个人信息</span><img src="../assets/xingzhuang-7-kaobei-5.png" class="icon">
      </p>
      <p @click="dian2" ><img src="../assets/lianghuajifenicon.png">
        <span>个人量化积分</span><img src="../assets/xingzhuang-7-kaobei-5.png" class="icon">
      </p>
      <p @click="dian3"><img src="../assets/xiugaimimaicon.png">
        <span>修改密码</span><img src="../assets/xingzhuang-7-kaobei-5.png" class="icon">
      </p>
      <p @click="dian4"><img src="../assets/icon3.png">
        <span>党费缴纳</span><img src="../assets/xingzhuang-7-kaobei-5.png" class="icon">
      </p>
      <div id="xiugai8">
        <button size="large" v-if="code == 200"  @click="esist">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1945953527,290927443&fm=27&gp=0.jpg',
        name:'你还没有登录，请登录',
        exist:'',
        code:''
      }
    },
    methods:{
      getdata(){
        this.$axios.post("users",{}).then(res=>{
          this.code=res.data.code
          if (res.data.code == 200){
          this.img=res.data.data[0].img;
          this.name=res.data.data[0].name;
          }
        })
      },
      dian1(){
        if(this.code == 200){
          this.$router.push('/myinfo')
        }else{
          this.$router.push('/login')
        }
      },
    dian2(){
      if(this.code == 200){
        this.$router.push('/myinfojifen')
      }else{
        this.$router.push('/login')
      }
    },
  dian3(){
    if(this.code == 200){
      this.$router.push('/xiugaimima')
    }else{
      this.$router.push('/login')
    }
  },
  dian4(){
    if(this.code == 200){
      this.$router.push('/dangfei')
    }else{
      this.$router.push('/login')
    }
  },
      esist(){
        this.$axios.post("loginout").then(res=>{
          console.log(res);
        })
        alert("退出成功")
        this.$router.push('login')
      }
    },
    created(){
      this.getdata();
    }
  }
</script>

<style>
  #xiugai8{
    width: 100%;
    text-align: center;
  }
  #xiugai8  button {
    width: 60%;
    background-color: #e43228;
    color: white;
    height: 40px;
    margin: 40px  0  0;
    border-radius: 6px;
  }
</style>
<style scoped>
  .conentr {
    width: 100%;
  }
  .head {
    width: 100%;
    height: 57px;
    background-color: #c50206;
    line-height: 57px;
    text-align: center;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
  }

  .denglu {
    width: 100%;
    height: 139px;
    background-color: #c50206;
    text-align: center;
    font-size: 12px;
    font-weight: 100;
    padding-top: 56px;
  }

  .denglu p a {
    color: white;
    text-align: center;
  }

  .denglu img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 40px;
    text-align: center;
  }

  .foot {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
  }

  .foot p {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    position: relative;
    padding: 8px 0;
    height: 30px;
    line-height: 30px;
    color: #666;
  }

  .foot p img {
    width: 30px;
    height: 30px;
    padding: 0 7px;
  }

  .foot p .icon {
    height: 10px;
    width: 10px;
    position: absolute;
    top: 20px;
    right: 5px;
    color: #a3a3a3;
  }
</style>
