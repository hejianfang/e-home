<template>
  <div>
    <Header></Header>
    <div class="conent" >
      <div id="appp">
        <ul>
          <li v-for="key in keys" id="key-keys" @click="renyuan(key.userId)">
            <div id="span-name"><img :src="key.img">{{key.name}}</div>
            <div>{{key.blong}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/base/Header.vue"
  import { Toast } from  'mint-ui';
  export default {
    name: "newsDetails",
    components: {Header},
    data() {
      return {
        keys:[],
        id:'',
        disid:''
      }
    },
    methods: {
      getData() {
        let id = this.$route.query.newsId;
        this.$axios.post("ping",
          {
            blong: id
          }).then(res => {
          console.log(res);
          this.keys = res.data.data;
        })
      },
      gattt(){
        this.$axios.get('getDiscuss').then(res=>{
          // console.log(res);
          this.disid=res.data.data._id
        })
      },
      renyuan(val){
        this.$axios.post("getOther",
          {
            discussId: this.disid,
            otherUserId: val
          }).then(res => {
          console.log(res);
          if(res.data.code == 400){
            Toast(res.data.msg)
          }else{
            this.$router.push({path: '/geren00',query:{newsId:val}})
          }
        })
        // this.$router.push({path: '/geren00',query:{newsId:val}})
      }
    },
    created() {
      this.getData();
      this. gattt();
    }
  }
</script>

<style scoped>
  #appp img {
    width: 95%;
    height: auto;
    display: block;
    margin: 10px auto;
  }

  #appp h3 {
    text-align: center;
  }

  h5 {
    text-align: right;
  }

  #appp {
    text-indent: 2em;
    padding-right: 10px;
    padding-left: 10px;
  }
  #key-keys{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    flex-wrap: nowrap ;
  }
  #key-keys img{
    width: 30px;
    height: 30px;
    padding-right: 4px;
  }
  #span-name{
    display: flex;
    justify-content: left;
  }

</style>
