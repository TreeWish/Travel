<template>
       <div class="wrapper">
           <swiper :options="swiperOption" >
                <swiper-slide v-for="item of swiperList" :key="item.id">
                    <img class="swiper-img"  :src="item.imgUrl" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>

           </swiper>
       </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1507/29/46d244176c9623.jpg_890x330_db953c72.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1508/b2/ed1db0c917e3a3.jpg_890x330_ac9dae24.jpg'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
    .wrapper >>>  .swiper-pagination-bullet-active{
        background: red ;
    }
    .wrapper{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;
        background: #eee;
    }
    .swiper-img{
        width: 100%;
    }

</style>
