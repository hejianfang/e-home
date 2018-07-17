<template>
  <div>
    <Header></Header>
    <Tupianup  @childsay="tochil"></Tupianup>
    <h1 id="baocun" @click="chuan">保存</h1>
    <div class="conent">
      <div id="aaa">
        <ul>
          <li><p>头像</p><img :src="info.img" v-if="info.img"></li>
          <li><p>姓名</p><input type="text" v-model="info.name"></li>
          <li><p>身份证</p>
            <p>{{info.userId}}</p></li>
          <li><p>家庭住址</p><input type="text" v-model="info.homeAddress"></li>
          <li><p>工作地址</p><input type="text" v-model="info.workAddress"></li>
          <li><p>民族</p><input type="text" v-model="info.nation"></li>
          <li><p>微信号</p><input type="text" v-model="info.weixin"></li>
          <li><p>qq号</p><input type="text" v-model="info.qq"></li>
          <li><p>性别</p>
            <div>
              <input type="radio" name="sex" value=1 v-model="info.sex">男
              <input type="radio" name="sex" value=0 v-model="info.sex">女
            </div>
          </li>
          <li><p>最高学历</p><input type="text" v-model="info.highestDeg"></li>
          <li><p>职称</p><input type="text" v-model="info.wage"></li>
          <li><p>薪资水平</p><input type="text"></li>
          <li><p>入党时间</p><input type="date" class="data"></li>
          <li><p>党费最后交纳时间</p><input type="date" class="data" v-model="info.lastTime"></li>
          <li><p>当前身份</p><select name="partyStatus" v-model="info.type">
            <option value="2" >党员</option>
            <option value="1" >预备党员</option>
            <option value="0" >积极分子</option>
          </select>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import Tupianup from '@/base/Tupianup.vue'
  import Header from '@/base/Header.vue'

  export default {
    name: "Myinfo",
    components: {Header, Tupianup},
    data() {
      return {
        info:{
          img:''
        },
      }
    },
    watch: {
      sex() {
        // console.log(this.sex);
      },
      type() {
        // console.log(this.type);
      }
    },
    methods: {
      chuan() {
        // console.log(this.info.img);
        this.$axios.post('update',
          this.info,
      ).then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            this.$router.push('/myinfo')
          }
        })
      },
      tochil(img){
        this.info.img=img
      },
      getUserInfo() {
        this.$axios.post("users",
          {}).then(res => {
          // console.log(res)
          if (res.data.code == 200) {
            this.info = res.data.data[0];
            // console.log(this.info);
          }
        })
      },
    },
    mounted() {
      this.getUserInfo();
    }
  }
</script>

<style scoped>
  #aaa ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px 10px;
  }

  #bbb {
    text-align: right;
  }

  #aaa ul li input, select {
    text-align: right;
    border: none;
    outline: none
  }
  #ccc {
    height: 48px;
    width: 160px;
    position: absolute;
    top: 60px;
    right: 10px;
    outline: none;
  }
  #baocun {
    color: #fff;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 999;
    font-size: 18px;
    font-weight: 500;
  }
   #aaa ul li img {
    height: 40px;
    width: 40px;
  }
</style>
