<template>
<div class="content">
  <div class="head">
    <h3>通知早知道</h3>
  </div>
  <div class="wrap">
    <ul>
      <li v-for="item in mess" @click="detil(item._id)">
        <img src="../assets/iconfont_gonggaotongzhi.png">
      <div class="li-p"><h3>{{item.title}}</h3>
      <p id="chuanjianshijian">{{item.createTime}}</p></div></li>
    </ul>
    <h3 id="shuju">没有数据了</h3>
  </div>
</div>
</template>

<script>
    export default {
        name: "Mess",
      data(){
          return{
            mess:[]
          }
      },methods:{
          getdata(){
            this.$axios.post("notices").then(res=>{
              this.mess=res.data.data;
            })
          },
        detil(val){
          this.$router.push({path: '/news',query:{newsId:val}})
        }
      },
      created(){
          this.getdata();
      }
    }
</script>

<style scoped>

  .conent{
    width: 100%;
  }
  .wrap{
    padding-top: 50px;
  }
  .head {
    width: 100%;
    height: 50px;
    background: #c50206;
    line-height: 50px;
    text-align: center;
    color: white;
    position: fixed;
  }
  ul li{
    border-bottom: 1px solid #ccc;
    display: flex;
  }
  ul li .li-p{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #666;
  }
  ul li img{
    padding:20px;
  }
  #shuju{
    text-align: center;
    font-weight: 100;
    font-size: 14px;
    padding-top: 8px;
    color: #aaa;
  }
  #chuanjianshijian{
    color: #ccc;
  }
</style>
