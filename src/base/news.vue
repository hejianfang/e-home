<template>
  <div>
    <Header></Header>
    <div class="conent" >
      <div id="appp" v-for="item in conentr">
        <h3>{{item.title}}</h3>
        <h5>{{item.createTime}}</h5>
        <div v-text="item.content">
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
        conentr: []
      }
    },
    methods: {
      getData() {
        let id = this.$route.query.newsId;
        // console.log(id);
        this.$axios.post("notices",
          {
            id: id
          }).then(res => {
          // console.log(res);
          this.conentr = res.data.data;
        })
      }
    },
    created() {
      this.getData();
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
</style>
