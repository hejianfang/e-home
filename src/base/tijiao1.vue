<template>
  <div>
    <div>
      <mt-header title="心得总结" fixed class="header-title">
        <mt-button icon="back" @click="huiqu" slot="left"></mt-button>
      </mt-header>
    </div>
    <div class="conent">
      <div class="container">
        <label id="btn-wrap">
          <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input">
          <img :src="img" v-if="img">
          <i class="iconfont icon-jiahao" v-if="!img"></i>
        </label>
      </div>
      <div class="item-img">
      </div>
      <div id="xiugai2">
        <mt-button size="large" @click="tijiao">提交审核</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Sixiang",
  data() {
      return {
        token: '',
        img: "",
        userId: ''
      }
    },
    methods: {
      up($event) {
        // console.log($event)
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file", file);
        form.append("token", this.token);
        axios.post("https://upload-z1.qiniup.com", form, {
          headers: {"Content-Type": "multipart/form-data"}
        }).then(res => {
          // console.log(res)
          this.img = res.data.url;
        })
      },
      getToken() {
        this.$axios.get("upload").then(res => {
          // console.log(res);
          this.token = res.data.data;
        })
      },
      gedata() {
        this.$axios.get('getDiscuss').then(res => {
          // console.log(res);
          this.userId = res.data.data._id;
          // console.log(this.userId);
        })
      },
      tijiao() {
        this.$axios.post('summarizes', {
          pic: this.img,
          discussId: this.userId
        }).then(res => {
          // console.log(res);
          if(res.data.code == 400){
            alert(res.data.msg)
            this.$router.push('/zhangshang')
          }else{this.$router.push('/xinde')}
        })
      },
      huiqu() {
        this.$router.push('/zhangshang')
      }
    },
    created() {
      this.getToken();
      this.gedata();
    }
  }
</script>

<style>
  #xiugai2  .mint-button--large {
    width: 70%;
    background-color: #e43228;
    color: white;
    margin: 0 auto;
    margin-top: 300px;
  }
</style>
<style scoped>
  .item-img {
    text-align: center;
    margin-top: 60px;
  }
  #file-input {
    display: none;
  }

  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 4px;
    border: 1px dashed #bbb;
    margin: 10px;
  }

  #btn-wrap img {
    z-index: 998;
    height: 150px;
    width: 150px;
  }

  .icon-jiahao {
    font-size: 55px;
    color: #ccc;
  }
</style>
