<template>
    <div>
      <Header></Header>
      <div class="conent">
        <ul>
          <li v-for="item in conentr" @click="detil(item._id)">
            <div class="li-img"><img :src="item.img">
            <p>{{item.title}}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Header from '@/base/Header.vue'
    export default {
        name: "Suopai",
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
              type:5
            }).then(res=>{
            // console.log(res);
            this.conentr =res.data.data;
          })
        },
        detil(val){
          console.log(val);
          this.$router.push({path: '/newsDetails',query:{newsId:val}})
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped lang="less">
ul{
  display: flex;
  flex-wrap: wrap;
  margin-left: 18px;
  padding-top: 10px;
  li{
    flex: 1;
  }
  img{
    width: 153px;
    height: 90px;
    padding: 12px 0 5px 10px;
  }
  p{
    padding:  0 12px;
  }
}
</style>
