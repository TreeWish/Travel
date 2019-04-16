<template>
    <div >
        <div class="recommend-title">热门推荐</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">

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
  props: {
    list: Array
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
