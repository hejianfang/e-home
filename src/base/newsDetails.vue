<template>
  <div>
    <Header></Header>
    <div class="conent" >
      <div id="appp" v-for="item in conentr">
        <h3>{{item.title}}</h3>
        <h5>{{item.createTime}}</h5>
        <div v-html="item.content" class="nnn">
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
        this.$axios.post("getOne",
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

<style>
  #appp .nnn img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
<style scoped>
  h5 {
    text-align: right;
  }
  #appp {
    padding-right: 10px;
    padding-left: 10px;
  }
  #appp .nnn{
    line-height: 1.7em;
  }
</style>
