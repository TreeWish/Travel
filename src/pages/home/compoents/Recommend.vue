<template>
    <div >
        <div class="recommend-title">热门推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">

                    <img class="item-img" :src='item.imgUrl'>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-but">查看详细</button>
                </div>

            </li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
        title: '华清宫',
        desc: '长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_200x200_a0d48950.jpg',
        title: '秦始皇陵博物院（兵马俑）',
        desc: '世界第八大奇迹'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/51/512ff9f3a6e9b1a6a3.water.jpg_200x200_f7123f52.jpg',
        title: '华夏文旅海洋公园',
        desc: '长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
        title: '秦岭野生动物园',
        desc: '长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/3a/3a4a9641a8867671a3.img.png_200x200_9a235bb9.png',
        title: '西安城墙',
        desc: '长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/84/f696c67a8052bb60e6fc51b0f9ba7388.water.jpg_200x200_865e6045.jpg',
        title: '大明宫遗址公园',
        desc: '长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌长恨歌'
      }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/mixins.styl";
    .recommend-title{
        margin-top: .2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item{
        overflow: hidden;
        display: flex;
        height: 1.9rem;
    }
    .item-img{
        height: 1.7rem;
        width: 1.7rem;
        padding: .1rem;
    }
    .item-info{
        flex: 1;
        padding: .1rem;
        min-width: 0;
    }
    .item-title{
        line-height: .54rem;
        font-size: .32rem;
        ellipsis();
    }
    .item-desc{
        line-height: .4rem;
        color: #ccc;
        ellipsis();
    }
    .item-but{
        line-height: .44rem;
        margin-top: .30rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
    }
</style>
