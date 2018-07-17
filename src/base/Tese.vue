<template>
  <div>
    <Header></Header>
    <div class="conent">
      <ul>
        <li v-for="item in conentr" @click="detil(item._id)">
          <div class="lileft">
            <img :src="item.img">
          </div>
          <div class="liright">
            <div class="lis"><h3>
              {{item.title}}
            </h3></div>
            <div class="lix">
              <div>{{item.createTime}}</div>
              <i class="iconfont icon-yanjing">{{item.count}}</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'
  export default {
    name: "Dangjian",
    components:{
      Header
    },data(){
      return{
        conentr:[]
      }
    },
    methods:{
      getData(){
        this.$axios.post("news",
          {
            type:7
          }).then(res=>{
          // console.log(res);
          this.conentr =res.data.data;
        })
      },
      detil(val){
        // console.log(val);
        this.$router.push({path: '/newsDetails',query:{newsId:val}})
      }
    },
    created(){
      this.getData();
    }
  }
</script>

<style scoped lang="less">
  .conent{
    padding-top: 50px;
  }
  li{
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 10px;
    .lis h3{
      color: #888;
    }
    .lileft img{
      flex: 1;
      width: 90px;
      height: 90px;
    }
    .liright{
      flex: 2;
      .lix{
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        color: #ccc;
      }
    }
  }
</style>
