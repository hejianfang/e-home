<template>
    <div>
      <Header></Header>
      <div class="conent">
        <div class="map-wrap">
          <div id="bd"> </div>
        </div>

        </div>
      </div>
</template>

<script>
  import Header from '@/base/Header.vue'
  export default {
    components: {Header},
    data() {
      return {
        map: null,
        l1:'',
        h1:'',
        l2:'',
        h2:'',
        l3:'',
        h3:''
      }
    },
    methods: {
      initMap() {
        // console.log(this.l1);
        // console.log(this.h1);
        // console.log(this.l2);
        // console.log(this.h2);
        // console.log(this.l3);
        // console.log(this.h3);
        var mp =new BMap.Map('bd')
        mp.centerAndZoom(new BMap.Point(116.404269,39.924232),4);
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});
        var marker = new BMap.Marker(new BMap.Point(this.l1,this.h1));
        mp.addOverlay(marker);
        var label = new BMap.Label("北京",{offset:new BMap.Size(20,-10)});
        marker.setLabel(label);

        var marker1 = new BMap.Marker(new BMap.Point(this.l2,this.h2));
        mp.addOverlay(marker1);
        var label1 = new BMap.Label("黄淮学院",{offset:new BMap.Size(20,-10)});
        marker1.setLabel(label1);
        // var marker2 = new BMap.Marker(new BMap.Point(this.l3,this.h3));
        // mp.addOverlay(marker2);
        // var label = new BMap.Label("",{offset:new BMap.Size(20,-10)});
        // marker2.setLabel(label);
        var geolocationControl = new BMap.GeolocationControl();
        mp.addControl(geolocationControl);
        mp.addControl(top_right_navigation);
        mp.enableScrollWheelZoom(true);
        this.$axios.get('map').then(res=>{
          // console.log(res);
          this.l1=res.data.data[0].longitude;
          this.h1=res.data.data[0].latitude;
          this.l2=res.data.data[1].longitude;
          this.h2=res.data.data[1].latitude;
          this.l3=res.data.data[2].longitude;
          this.h3=res.data.data[2].latitude;
        })
      }
    },
    created(){
      this.$nextTick(()=>{
        this.initMap();
      })
    },
    watch:{
      l1(){
        this.initMap();
      }
    }
  }
</script>

<style scoped>
  .map-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #bd {
    height: 100%;
    width: 100%;
  }
</style>
