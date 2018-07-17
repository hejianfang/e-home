<template>
    <div>
      <Header></Header>
      <div class="conent">
        <div class="item-img">
          <div class="wei" v-if="zhuangtai==1||zhuangtai==2">
            <img :src="img" alt="">
            {{reason}}
          </div>
          <img src="../assets/shenhezhong.png" alt="" v-if="zhuangtai==0">
          <img src="../assets/tongguo.png" alt="" v-if="zhuangtai==1">
          <img src="../assets/shibai.png" alt="" v-if="zhuangtai==2">
        </div>
        <p v-if="zhuangtai==0">正在审核中</p>
        <p v-if="zhuangtai==1">审核通过</p>
        <p v-if="zhuangtai==2">审核未通过</p>
        <div id="xiugai">
          <mt-button size="large" @click="close" v-if="zhuangtai==0">关闭</mt-button>
          <mt-button size="large" @click="closen" v-if="zhuangtai==1||zhuangtai==2">再次提交</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '@/base/Header.vue'
    export default {
        name: "Sixiang",
      components:{Header},
      data(){
        return{
          zhuangtai:'',
          img:'',
          reason:''
        }
      },
      methods:{
          getdata(){
            this.$axios.post('thinks').then(res=>{
              // console.log(res);
              this.zhuangtai=res.data.data[0].state;
              this.img=res.data.data[0].img;
              this.reason=res.data.data[0].reason
            })
          },
        close(){
           if(this.zhuangtai==0){
             this.$router.push('/zhangshang')
           }
        },
        closen(){
            this.$router.push('/tijiao')
        }
      },
      mounted(){
          this.getdata();
      }
    }
</script>
<style>
  #xiugai .mint-button--large {
    width: 70%;
    background-color: #e43228;
    color: white;
    margin: 80px auto;
  }
</style>

<style scoped>
  .item-img{
    text-align: center;margin-top: 60px;
  }
  p{
    text-align: center;
  }
  .wei img{
    height: 200px;
   margin: 20px auto;
    width: 200px;
  }
</style>
