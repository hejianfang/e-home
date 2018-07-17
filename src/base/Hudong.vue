<template>
  <div>
    <Header></Header>
    <wenzi v-if="qqq" @childsay="tochild"></wenzi>
    <div class="conent">
      <ul class="mui-table-view" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="10">
        <li v-for="a in com">
          <div class="da">
            <div class="left"><img :src="a.userImg" alt=""></div>
            <div class="dazhong">
              <div class="zhong">
                <h3>{{a.userName}}</h3>
                <div class="zx">
                  <i class="iconfont icon-shijian"></i>
                  <span>{{a.createdAt}}</span>
                  <i class="iconfont icon-laba"></i>
                  <span>公开</span>
                </div>
              </div>
              <div class="right"><span>党员互动</span></div>
            </div>
          </div>
          <div class="neirong">{{a.content}}</div>
          <div class="di" @click="huii(a._id)">
            <i class="iconfont icon-tubiao15"></i>
            <span>回复</span>
          </div>
        </li>
        <li class="more_loading" v-show="!queryLoading">
          <mt-spinner type="snake" color="#00ccff" :size="20" v-show="moreLoading&&!allLoaded"></mt-spinner>
          <span v-show="allLoaded">已全部加载</span>
        </li>
      </ul>
      <img src="../assets/fabubtn.png" id="fabuhui" @click="fabuhui" v-if="aas">
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'
  import wenzi from '@/base/wenzi.vue'

  export default {
    name: "Minzhu",
    components: {
      Header, wenzi
    },
    data() {
      return {
        qqq: false,
        aas: true,
        com:[],
        page:1,
        totalNum: 0,
        queryLoading: false,
        moreLoading: false,
        allLoaded: false,
      }
    },
    methods: {
      // getdata(){
      //   // let number=Number.MAX_VALUE;
      //   this.$axios.post('carget',{
      //     rows:5
      //   }).then(res=>{
      //      console.log(res);
      //     this.com=res.data.data
      //   })
      // },
      loadMore() {
        if(this.allLoaded){
          this.moreLoading = true;
          return;
        }
        if(this.queryLoading){
          return;
        }
        this.moreLoading = !this.queryLoading;
        this.$axios.post('carget',{
          page:this.page++,
          rows:6
        }).then(res=>{
          if(res.data.data){
            this.com = this.com.concat(res.data.data)
            this.allLoaded = (res.data.data.length==this.totalNum);
          }
          this.moreLoading = this.allLoaded;
        })
      },
      fabuhui() {
        this.qqq = true
        this.aas = false
      },
      huii(val){
        this.$router.push({path: '/huifu',query:{newsId:val}})
      },
      tochild(somedata) {
        this.qqq=somedata;
        this.aas=true
      }
    },
    // mounted(){
    //   this.getdata();
    // }
  }

</script>

<style scoped>
  ul li {
    padding: 10px;
  }

  .da {
    display: flex;
  }

  .dazhong {
    display: flex;
    justify-content: space-between;
  }

  .zhong {
    padding: 0 25px 0 8px;
  }

  .left img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .di {
    text-align: right;
  }

  .right span {
    color: red;
    border-radius: 10px;
    border: 1px solid red;
    padding: 2px 6px;
    font-size: 10px;
  }

  .neirong {
    font-size: 18px;
  }

  .zx {
    font-size: 10px;
  }

  #fabuhui {
    position: fixed;
    right: 5px;
    bottom: 30px;
  }
</style>
