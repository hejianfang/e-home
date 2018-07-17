<template>
    <div>
      <div>
        <mt-header title="掌上组织生活" fixed class="header-title">
          <mt-button icon="back" @click="huiqu" slot="left"></mt-button>
        </mt-header>
      </div>
      <div class="conent">
        <img src="../assets/timg.jpg">
      </div>
      <div class="conent-flex">
        <router-link to="/zhengzhi"><img src="../assets/icon1.png">
          <p>政治学习</p></router-link>
        <h3  @click="sixiang"><img src="../assets/icon2.png" >
        <p>思想汇报</p></h3>
        <h3 @click="tijiao1"><img src="../assets/icon3.png">
          <p>心得体会</p></h3>
        <h3 @click="minzhu"><img src="../assets/icon4.png">
          <p>民主评议</p></h3>
        <router-link to="/liudong"><img src="../assets/icon5.png">
          <p>流动党员找组织</p></router-link>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Zhangshang",
      data(){
        return{
          code:'',
          state:'',
          userId:'',
          useId:'',
          zhuangtai:''
        }
      },
      methods:{
          getdata(){
            this.$axios.post('users').then(res=>{
              this.code=res.data.code;
              this.useId = res.data.data[0].userId;
            })
          },
        sixiang(){
          if(this.code==200){
              this.$router.push('/tijiao')
            }else{
              this.$router.push('/login')
            }
          if(this.state==0||this.state==1||this.state==2){
            this.$router.push('/sixiang')
          }
        },
        gedataa() {
          this.$axios.get('getDiscuss').then(res => {
            // console.log(res);
            this.userId = res.data.data._id;
            // console.log(this.userId);
          })
        },
        getdataaa(){
           // console.log(this.useId);
          // console.log(this.userId);
          this.$axios.post('getOther',{
            discussId: this.userId,
            otherUserId:this.useId
          }).then(res=>{
            // console.log(res);
            this.zhuangtai=res.data.data.state;
          })
        },
        tijiao1(){
          if(this.code==200){
            this.$router.push('/tijiao1')
          }else{
            this.$router.push('/login')
          }
          if(this.zhuangtai==0||this.zhuangtai==1||this.zhuangtai==2){
            this.$router.push('/xinde')
          }
        },
        minzhu(){
          if(this.code==200){
            this.$router.push('/minzhu')
          }else{

          }
        }, gatt(){
          this.$axios.post('thinks').then(res=>{
            // console.log(res);
            this.state=res.data.data[0].state
          })
        },
        huiqu(){
          this.$router.push('/index')
        }
      },
      mounted(){
          this.getdata();
          this.gatt();
          this.gedataa();
          this.getdataaa();
      },
      watch:{
        userId(){
          this.getdataaa();
        },
        useId(){
          this.getdataaa();
        }
      }
    }
</script>

<style>

</style>
<style scoped>
.conent img{
  width: 100%;
  display: block;
}
  .conent-flex{
    display: flex;
    flex-wrap: wrap;
  }
  .conent-flex p{
    font-size: 15px;
    font-weight: 500;
    color: #666;
  }
.conent-flex a{
  width: 25%;
  margin: 10px;
  padding-left: 10px;
  text-align: center;
}
.conent-flex h3{
  width: 25%;
  margin: 10px;
  padding-left: 10px;
  text-align: center;
}
.conent-flex a img{
  width:70px;
  height:70px;
}
.conent-flex h3 img{
  width:70px;
  height:70px;
}
</style>
