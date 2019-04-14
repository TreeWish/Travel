<template>
   <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>

   </div>

</template>

<script>
import HomeHeader from './compoents/Header'
import HomeSwiper from './compoents/Swiper'
import HomeIcons from './compoents/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
