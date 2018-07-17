<template>
  <div>
    <mt-header v-if="$route.name!='index'" :title="title" fixed class="lyl">
      <mt-button icon="back" @click="$router.back()" slot="left"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default {
    props:{
      back:true,
    },
    name: "Header",
    computed: {
      title() {
        return this.$route.meta.title;
      }
    },

  }

</script>

<style>
</style>
