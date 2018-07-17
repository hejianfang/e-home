<template>
  <div>
    <div>
      <mt-header title="个人信息" fixed class="header-title" >
        <mt-button icon="back" @click="huiqu" slot="left"></mt-button>
        <mt-button @click="bianji" slot="right">编辑</mt-button>
      </mt-header>
    </div>
    <div class="conent">
      <ul v-for="item in info">
        <li><p>头像</p><img :src="item.img"></li>
        <li><p>姓名</p><h6>{{item.name}}</h6></li>
        <li><p>身份证</p><h6>{{item.userId}}</h6></li>
        <li><p>家庭住址</p><h6>{{item.homeAddress}}</h6></li>
        <li><p>工作地址</p><h6>{{item.workAddress}}</h6></li>
        <li><p>民族</p><h6>{{item.nation}}</h6></li>
        <li><p>微信号</p><h6>{{ item.weixin}}</h6></li>
        <li><p>qq号</p><h6>{{item.qq}}</h6></li>
        <li v-if="xingbie"><p>性别</p><h6>男</h6></li>
        <li v-if="xingb"><p>性别</p><h6>女</h6></li>
        <li><p>最高学历</p><h6>{{item.highestDeg}}</h6></li>
        <li><p>职称</p><h6>{{item.wage}}</h6></li>
        <li><p>薪资水平</p><h6></h6></li>
        <li><p>入党时间</p><h6></h6></li>
        <li><p>党费最后交纳时间</p><h6>{{item.lastTime}}</h6></li>
        <li><p>当前身份</p><h6>{{type}}</h6></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Myinfo",
    data() {
      return {
        info: [],
        xingbie: false,
        xingb: false,
        type:'0'
      }
    },
    methods: {
      getUserInfo() {
        this.$axios.post("users",
          {}).then(res => {
          // console.log(res)
          if (res.data.code == 200) {
            this.info = res.data.data
            this.type=res.data.data[0].type
            let abc = res.data.data[0].sex
            // console.log(abc);
            if (abc == 1) {
              this.xingbie = true
            }
            if (abc == 0) {
              this.xingb = true
            }
            if(this.type==2){
              this.type="党员"
            }if(this.type==1){
              this.type="预备党员"
            }if(this.type==0){
              this.type="积极分子"
            }
          }
        })
      },
      bianji() {
        this.$router.push("/myinfoxiugai")
      },
      huiqu(){
        this.$router.push("/my")
      }
    },
    mounted() {
      this.getUserInfo();
    }
  }
</script>

<style scoped>
  ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px 10px;
  }

  ul li img {
    height: 40px;
    width: 40px;
  }
</style>
