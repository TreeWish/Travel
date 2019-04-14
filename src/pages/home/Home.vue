<template>
   <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>
       <home-recommend></home-recommend>
       <home-weekend></home-weekend>
   </div>

</template>

<script>
import HomeHeader from './compoents/Header'
import HomeSwiper from './compoents/Swiper'
import HomeIcons from './compoents/Icons'
import HomeRecommend from './compoents/Recommend'
import HomeWeekend from './compoents/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped>

</style>
