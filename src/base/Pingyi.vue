<template>
  <div>
    <Header></Header>
    <div class="conent">
      <div class="detil">
        <h3>{{title}}</h3>
        <p id="zzz" v-html="content"> </p>
      </div>
      <form action="" >
        <select name="partyStatus" id="sel" v-model="type">
          <option value="">请选择 </option>
          <option :value="vo.title"  v-for="vo in volvo" >{{vo.title}}</option>
        </select>
        <input type="button" value="下一步" id="xia" @click="next">
      </form>
    </div>
  </div>
</template>

<script>
  import Header from '@/base/Header.vue'
  export default {
    name: "Sixiang",
    components:{
      Header    },
    data(){
      return{
        title:'',
        content:'',
        volvo:[],
        type:''
      }
    },
    watch:{
      type(){console.log(this.type);
      }
    },
    methods:{
        getdata(){
          this.$axios.get('getDiscuss').then(res=>{
            // console.log(res);
            this.title=res.data.data.title;
            this.content=res.data.data.content
          })
        },
      getdat(){
        this.$axios.post('blong').then(res=>{
          // console.log(res);
          this.volvo=res.data.data
        })
      },
      next(){
        this.$router.push({path: '/canpingyiyuan',query:{newsId:this.type}})
      }
    },
    mounted(){
      this.getdat();
      this.getdata();
    }
  }
</script>

<style scoped>
  .detil{
    padding: 10px;
  }
  .detil h3{
    text-align: center;
  }
  #zzz{
    margin: 20px 0;
  }
  .detil p{
    margin: 4px 0;
  }
#sel{
  background-color: #e43228;
  color: white;
  width: 220px;
  height: 40px;
  margin: 50px auto;
  border-radius: 6px;
  margin-left: 20px;
}
  #xia{
    background-color: #e43228;
    color: white;
    height: 40px;
    width: 100px;
    border-radius: 6px;
  }

</style>
