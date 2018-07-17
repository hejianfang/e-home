<template>
    <div>
      <div>
        <mt-header title="民主评议" fixed class="header-title">
          <mt-button icon="back" @click="huiqu" slot="left"></mt-button>
        </mt-header>
      </div>
      <div class="conent">
        <div class="item-button">
          <mt-button size="large" @click="item1">个人总结</mt-button>
          <mt-button size="large" @click="item2">民主评议</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Minzhu",
      data(){
          return{
            zhuangtai:'',
            userId:'',
            useId:'',
          }
      },
      methods:{
        item1(){
          if(this.zhuangtai==1||this.zhuangtai==0||this.zhuangtai==2){
           this.$router.push('/zongjie')
          }else{
            this.$router.push('/tijiao2')
          }
        },
        getdata(){
          this.$axios.post('users').then(res=>{
            this.useId = res.data.data[0].userId;
          })
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
        item2(){
          this.$router.push("/pingyi")
        },  huiqu(){
          this.$router.push("/zhangshang")
        }
      },
      created(){
        this.getdata();
        this. gedataa();
        this. getdataaa();
      },
      watch:{
        userId(){
          this. getdataaa();
        },
        useId(){
          this. getdataaa();
        }
      }

    }
</script>
<style>
 .item-button .mint-button--large {
    width: 70%;
    background-color: #e43228;
    color: white;
    margin: 20px auto;
  }
</style>
<style scoped>
  .item-button{
    padding-top: 200px;
  }
</style>
