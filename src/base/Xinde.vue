<template>
  <div>
    <Header></Header>
    <div class="conent">
      <div class="item-img">
        <div class="wei" v-if="zhuangtai==1||zhuangtai==2">
          <img :src="img" alt="">
          <p>{{reason}}</p>
        </div>
        <img src="../assets/shenhezhong.png" alt="" v-if="zhuangtai==0">
        <img src="../assets/tongguo.png" alt="" v-if="zhuangtai==1">
        <img src="../assets/shibai.png" alt="" v-if="zhuangtai==2">
      </div>
      <p v-if="zhuangtai==0">正在审核中</p>
      <p v-if="zhuangtai==1">审核通过</p>
      <p v-if="zhuangtai==2">审核未通过</p>
      <div id="xiugai4">
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
        reason:'',
        userId:'',
        useId:''
      }
    },
    methods:{
      gedata() {
        this.$axios.get('getDiscuss').then(res => {
          // console.log(res);
          this.userId = res.data.data._id;
          // console.log(this.userId);
        })
      },
      geddata() {
        this.$axios.post('users').then(res => {
          // console.log(res);
          this.useId = res.data.data[0].userId;
          // console.log(this.useId);
        })
      },
      getdata(){
        // console.log(this.useId);
        // console.log(this.userId);
        this.$axios.post('getOther',{
          discussId: this.userId,
          otherUserId:this.useId
        }).then(res=>{
          // console.log(res);
          this.zhuangtai=res.data.data.state;
          this.img=res.data.data.pic;
          this.reason=res.data.data.reason
        })
      },
      close(){
        if(this.zhuangtai==0){
          this.$router.push('/zhangshang')
        }
      },
      closen(){
        this.$router.push('/tijiao1')
      }
    },
    mounted(){
      this.getdata();
      this. gedata();
      this. geddata();
    },
    watch:{
      userId(){
        this.getdata();
      },
      useId(){
        this.getdata();
      }
    }
  }
</script>
<style>
  #xiugai4  .mint-button--large {
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
