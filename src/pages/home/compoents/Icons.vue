<template>
    <div class="icons">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="(page , index) of pages" :key="index">
                <div class="icon"  v-for="item of page"  :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src='item.imgUrl' alt="">
                    </div>
                    <p class="icon-text">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/mixins.styl";
    @import "../../../assets/styles/varibles.styl";
    .icons >>> .swiper-container
    {
        height: 0;
        padding-bottom: 54%;
    }
    .icons{
        margin-top: .1rem;
    }
    .icon{
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 27%;

    }
    .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .42rem;
        box-sizing: border-box;
        padding: .3rem;

    }
    .icon-img-content{
        display: block;
        margin: 0 auto;
        width: 100%;
    }
    .icon-text{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: #000000;
        ellipsis();
    }

</style>
