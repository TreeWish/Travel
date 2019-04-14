<template>
    <div >
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">

                <div class="item-img-wapper">
                    <img class="item-img" :src='item.imgUrl'>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>

                </div>

            </li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
        title: '西安必打卡',
        desc: '寻长安梦，开启穿越的圆梦之旅'
      }, {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg',
        title: '探寻文化古都',
        desc: '一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大'
      }, {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/30/67d5e62ca78a29.jpg_r_640x214_9dfb4295.jpg',
        title: '西安花花世界',
        desc: '月落星驰又一春，不负人间看花人'
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
    .item-img{
        width: 100%;
        padding: .1rem;
    }
    .item-img-wapper{
        overflow: hidden;
        height: 33.9%;

    }
    .item-info{
        padding: .1rem;
    }
    .item-title{
        line-height: .48rem;
        font-size: .32rem;
    ellipsis();
    }
    .item-desc{
        line-height: .4rem;
        color: #ccc;
    ellipsis();
    }
</style>
