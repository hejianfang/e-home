<template>
  <div>
    <Header></Header>
    <div class="conent" >
      <div id="apppi" >
        <ul>
          <li>
            <div class="lili">
              <div class="li-left">
                <img :src="info.userImg" alt="">
              </div>
              <div class="li-right">
                <p>{{info.userName}}</p>
                <p><i class="iconfont icon-shijian"></i><span>{{info.updatedAt}}</span></p>
              </div>
            </div>
            <div class="conn">{{info.content}}</div>
          </li>
          <li v-for="aaa in info1">
            <div class="lili">
              <div class="li-left">
                <img :src="aaa.userImg" alt="">
              </div>
              <div class="li-right">
                <p>{{aaa.userName}}</p>
                <p><i class="iconfont icon-shijian"></i><span>{{aaa.updatedAt}}</span></p>
              </div>
            </div>
            <div class="conn">{{aaa.content}}</div>
          </li>
        </ul>
        <div class="ping">
          <input type="text" placeholder="评论内容" id="pim" v-model="content">
          <input type="button" value="评论" id="pinglun" @click="pinglun">
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import Header from "@/base/Header.vue"
  export default {
    components: {Header},
    data(){
      return{
        info:{
        },
        info1:[],
        content:''
      }
    },
    methods: {
      getData() {
        let id = this.$route.query.newsId;
        this.$axios.post("carget",
          {
            id: id
          }).then(res => {
          // console.log(res);
          this.info=res.data.data[0]
        })
      },
      huode(){
        this.$axios.get('getReply',{
          parentId:this.info._id
        }).then(res=>{
          // console.log(res);
          this.info1=res.data.dt

        })
      },
      pinglun(){
        this.$axios.post('addReply',{
          parentId:this.info._id,
          toUserId:this.info.userId,
          content:this.content
        }).then(res=>{
          // console.log(res);
          this.$router.go(0)
        })
      }
    },
    created() {
      this.getData();
    },
    watch:{
      info(){
        this.huode();
      }
    }
  }
</script>

<style scoped>
  #apppi{
    background-color: #eee;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 50px;

  }
  #apppi ul li{
    background-color: white;
    margin: 10px;
  }
.li-left img{
  height: 40px;
  width: 40px;
  margin: 10px;
}
.li-right{
  margin-top: 10px;
}
  .lili{
    display: flex;
  }
  .conn{
    margin: 15px;
    padding-bottom: 20px;
  }
  .ping{
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: white;
    height: 50px;
  }
#pim{
  border-radius: 5px;
  border: 1px solid red;
  width: 305px;
  height: 30px;
 margin: 9px;
}
  #pinglun{
    height: 30px;
    margin: 9px;
    background-color: red;
    color: white;
    padding: 4px 3px;
  }
</style>
