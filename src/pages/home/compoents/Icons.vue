<template>
    <div class="icons">
        <swiper  >
            <swiper-slide v-for="(page , index) of pages" :key="index">
                <div class="icon"  v-for="item of page"  :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src='item.imgUrl' alt="">
                    </div>
                    <p class="icon-text">{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '热门景点'
        },
        {
          id: '0002',
          text: '特别好玩的地方',
          imgUrl: '  http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'
        },
        {
          id: '0003',
          text: '本地必游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          id: '0004',
          text: '带孩子玩',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'
        },
        {
          id: '0005',
          text: '故宫',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
        },
        {
          id: '0006',
          text: '动植物园',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
        },
        {
          id: '0007',
          text: '自然风光',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png'
        },
        {
          id: '0008',
          text: '一日游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          id: '0009',
          text: '海洋馆',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
        padding-bottom: 56%;
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
        padding-bottom: 28%;

    }
    .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;

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
