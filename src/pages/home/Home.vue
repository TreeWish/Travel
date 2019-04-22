<template>
   <div>
       <home-header></home-header>
       <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekend :list="weekendList"></home-weekend>
   </div>

</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from './compoents/Header'
import HomeSwiper from './compoents/Swiper'
import HomeIcons from './compoents/Icons'
import HomeRecommend from './compoents/Recommend'
import HomeWeekend from './compoents/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city' + this.city).then((res) => {
        res = res.data
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      })
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
