<template>
  <div>
    <Header></Header>
    <div class="conent">
      <div class="item-img1">
        <ul>
          <li v-for="jifen in info">
            <div class="left">
              <h3>{{jifen.typeName}}</h3>
              <p>{{createTime}}</p>
            </div>
            <div class="ri"><p>{{jifen.score}}</p></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'

  export default {
    name: "Sixiang",
    components: {Header},
    data() {
      return {
        info: [],
        createTime: '',
      }
    },
    methods: {
      getdata() {
        this.$axios.post('score').then(res => {
          // console.log(res);
          this.info = res.data.data
          this.info.forEach((val) =>{
            // console.log(val);
            var time = val.createTime
            var newDate = new Date();
            newDate.setTime(time);
            this.createTime = newDate.toLocaleString()
          })
        })
      }
    },
    created() {
      this.getdata();
    }
  }
</script>

<style scoped>
  .item-img {
    text-align: center;
    margin-top: 60px;
  }

  p {
    text-align: center;
  }

  .mint-button--large {
    width: 70%;
    background-color: #e43228;
    color: white;
    margin: 80px auto;
  }

  .item-img1 li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .item-img1 li h3 {
    padding-bottom: 5px;
  }

  .ri p {
    color: red;
  }
</style>
