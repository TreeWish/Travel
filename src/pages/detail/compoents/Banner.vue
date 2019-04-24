<template>
        <div>
            <div class="banner" @click="handleBannerClick">
                <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" >
                <div class="banner-info">
                    <div class="banner-title">
                        大连海洋世界
                    </div>
                    <div class="banner-number">
                        <span class="iconfont banner-icon">&#xe692;</span>
                        36
                    </div>
                </div>
            </div>
            <common-gallary :imgs="imgs"  v-show="showGallary" @close="handleGallaryClose"></common-gallary>
        </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img{
        width: 100%;
    }
    .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); //  Banner 底部渐变色
    }
    .banner-title{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
    }
    .banner-number{
        margin-top: .14rem;
        padding: 0 .4rem;
        height: .4rem;
        line-height: .4rem;
        border-radius: .2rem;
        background: rgba(0,0,0,0.8);
        font-size: .24rem;
    }
    .banner-icon{
        font-size: .24rem;
    }

</style>
