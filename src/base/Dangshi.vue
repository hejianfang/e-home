<template>
    <div id="dangshi">
      <Header></Header>
      <div class="conent">
        <ul>
          <li v-html="Dangshi" id="li">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Header from '@/base/Header.vue'
    export default {
        name: "Dangshi",
      components:{
        Header
      },
      data(){
          return{
            Dangshi:''
          }
      },
      methods:{
          getData(){
            this.$axios.get("getDate").then(res => {
              // console.log(res);
              this.Dangshi = res.data.data;
            })
          }
      },
      created(){
          this.getData();
      }
    }
</script>

<style scoped>
  #dangshi .conent{
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 1.5em;
  }
</style>
<style>
  #dangshi .conent h2{
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0;
  }
  #dangshi .conent p{
    text-indent:2em;
    font-size: 16px;
  }
</style>
