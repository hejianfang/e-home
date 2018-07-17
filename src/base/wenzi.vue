<template>
  <div>
    <form action="" class="publishForm" @submit.prevent>
      <div class="wenbebyu"><textarea v-model="tet"></textarea></div>
      <div class="button-assertive">
        <input type="button" value="发布" class="b1" @click="claa">
        <input type="button" value="取消" class="b1" @click="onClickMe">
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    name: "wenzi",
    data() {
      return {
        tet: '',
        somedata:false
      }
    },
    methods: {
      onClickMe(){
        this.$emit('childsay',this.somedata);
      },
      claa(){
        this.$emit('childsay',this.somedata);
        if(!this.tet){
          alert('输入不能为空')
        }else{this.$axios.post('cardAdd',{
          content:this.tet
        }).then(res=>{
          // console.log(res);
          this.$router.go(0)
        })}

      }
    },
    watch: {
      tet() {
        console.log(this.tet);
      }
    }
  }
</script>
<style scoped>
  div {
    background-color: aliceblue;
    position: fixed;
    bottom: 0;

  }
  textarea{
    width: 380px;
    height: 100px;
    border-radius: 6px;
    border: none;
    outline: none;
    margin: 8px;
  }

  .button-assertive {
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding: 8px 6px;
  }

  .b1 {
    color: white;
    background-color: red;
    width: 50px;
    height: 30px;
    border-radius: 7px;
  }

</style>
