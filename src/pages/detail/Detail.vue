<template>
   <div>
       <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
       <detail-header></detail-header>
       <div class="content">
           <detail-list :list="list"></detail-list>
       </div>
   </div>
</template>

<script>
import DetailBanner from './compoents/Banner'
import DetailHeader from './compoents/Header'
import DetailList from './compoents/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }

  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="stylus">
    .content{
        height: 50rem;
    }

</style>
