<template>
  <div>
    <Header></Header>
    <div class="conent">
      <div id="apppp">
        <h3>个人总结</h3>
        <div><img :src="pic" alt=""></div>
        <div class="foe">
            <form @submit.prevent>
              <div>
                <input id="item1" type="radio" name="item" value="0" v-model="sex">
                <label for="item1"></label>
                <span>优</span>
              </div>
              <div>
                <input id="item2" type="radio" name="item" value="1" v-model="sex">
                <label for="item2"></label>
                <span>良</span>
              </div>
              <div>
                <input id="item3" type="radio" name="item" value="2" v-model="sex">
                <label for="item3"></label>
                <span>中</span>
              </div>
              <div>
                <input id="item4" type="radio" name="item" value="3" v-model="sex">
                <label for="item4"></label>
                <span>差</span>
              </div>
              <input type="submit" value="提交" id="in" @click="pingyi">
            </form>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import Header from "@/base/Header.vue"

  export default {
    name: "newsDetails",
    components: {Header},

    data() {
      return {
        cid: '',
        sex: '',
        nid:'',
        pic:''
      }
    },
    methods: {
      gat() {
        this.$axios.get('getDiscuss').then(res => {
          this.cid = res.data.data._id
        })
        this.getData();
      },
      getData() {
        let id = this.$route.query.newsId;
        this.$axios.post("getOther",
          {
            discussId: this.cid,
            otherUserId: id
          }).then(res => {
           console.log(res);
          this.nid=res.data.data._id;
          this.pic=res.data.data.pic
          console.log(this.nid);
        })
      },
      pingyi(){
        this.$axios.post('addSummary',{
          id:this.nid,
          content:this.sex
        }).then(res=>{
          // console.log(res);
          confirm(res.data.msg)
          this.$router.push('/minzhu')
        })
      }
    },
    watch: {
      cid(){
        this.getData();
      }
    },
    created() {
      this. gat();
    }
  }
</script>

<style scoped>
  #apppp img {
    width: 95%;
    height: 300px;
    display: block;
    margin: 10px auto;
  }

  #apppp h3 {
    text-align: center;
  }

  h5 {
    text-align: right;
  }

  #apppp {
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;
  }

  #in {
    height: 30px;
    color: #f00;
    border: 1px solid #f00;
    border-radius: 4px;
    margin-left: 20px;
    padding: 0 6px;
    margin-top: 10px;
  }

  #apppp form {
    display: flex;
    justify-content: space-around;
    background-color: #eee;
    height: 50px;
    line-height: 50px;
    margin-top: 50px;
  }
  #apppp .foe form div {
    position: relative;
  }

  #apppp .foe form input[type="radio"] {
    width: 20px;
    height: 20px;
    opacity: 0;
  }

  #apppp .foe form label {
    position: absolute;
    left: 1px;
    top: 14px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
  }
  #apppp .foe form input:checked+label {
    background-color: #fe6d32;
    border: 1px solid #fe6d32;
  }

  #apppp  .foe form input:checked+label::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    transform: rotate(45deg)
  }
</style>
