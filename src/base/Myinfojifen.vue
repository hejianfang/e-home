<template>
  <div>
    <Header></Header>
    <div class="conent">
      <div id="a100">{{fen1+fen2}}</div>
      <img src="../assets/jifenbg.png" alt="" class="jifen">
      <ul>
        <li class="item-jifen" @click="jifenmingxi">
          <div><img src="../assets/jifenmingxiion.png" alt=""><span id="item-sss">积分明细</span></div>
          <div><i class="iconfont icon-jiantou"></i></div>
        </li>
        <li id="tushu"><p>积分规则</p><img src="../assets/wenhaoicon.png" alt=""></li>
        <li><p>登录APP</p>
          <p>{{fen1}}</p></li>
        <li><p>完善个人信息</p>
          <p>5</p></li>
        <li><p>查看积分</p>
          <p>5</p></li>
        <li><p>按时缴纳党费</p>
          <p>5</p></li>
        <li><p>查看通知</p>
          <p>{{fen2}}</p></li>
        <li><p>了解学院工作动态</p>
          <p>5</p></li>
        <li><p>上交思想汇报经审核通过</p>
          <p>5</p></li>
        <li><p>主动学习相关文件</p>
          <p>5</p></li>
        <li><p>认真撰写心得总结并上交，经审核通过</p>
          <p>5</p></li>
        <li><p>提交个人总结，并参与评议</p>
          <p>5</p></li>
        <li><p>积极参与互动</p>
          <p>5</p></li>
        <li><p>学习党建知识</p>
          <p>5</p></li>
        <li><p>学习党史</p>
          <p>5</p></li>
        <li><p>创先争优事迹</p>
          <p>5</p></li>
        <li><p>学党章，学习近平总书记系列讲话</p>
          <p>5</p></li>
        <li><p>用镜头记录两学一做过程中令人感动的人和事</p>
          <p>5</p></li>
        <li><p>关注并积极参与特色活动</p>
          <p>5</p></li>
        <li><p>制度化，常规化建设</p>
          <p>5</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'

  export default {
    name: "Sixiang",
    components: {
      Header
    },
    data() {
      return {
        arr: [],
        newarr: [],
        newsarr: [],
        fen1:'',
        fen2:''
      }
    },
    methods: {
      getdata() {
        this.$axios.post('score').then(res => {
          // console.log(res);
          this.arr = res.data.data;
          this.newarr = this.arr.filter(function (val) {
            return val.type == 1
          })
          this.newsarr = this.arr.filter(function (val) {
            return val.type == 2
          })
          this.fen1=(this.newarr.length)/10
          this.fen2=(this.newsarr.length)/10
          // console.log(this.fen1);
          // console.log(this.fen2);
        })
      },
      jifenmingxi() {
        this.$router.push('/jifenmingxi')
      }
    },
    mounted() {
      this.getdata();
    }
  }
</script>

<style scoped>
  .jifen {
    width: 100%;
    display: block;
  }
  ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
  }
ul li p{
  font-size: 14px;
  color: #aaa;
}
  #tushu {
    background-color: #eee;
  }
  #tushu p{
    color: #222;
  }
  .item-jifen {
    height: 40px;
    display: flex;
    line-height: 40px;
    position: relative;
  }
  #item-sss {
    display: inline-block;
    margin-left: 5px;
    position: absolute;
    top: 5px;
    left: 45px;
  }
  #a100{
    position: absolute;
    top: 115px;
    left: 0;
    right: 0;
   text-align: center;
    z-index: 998;
    color: white;
  }
</style>
