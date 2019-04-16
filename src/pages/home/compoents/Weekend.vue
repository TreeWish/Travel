<template>
    <div >
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">

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
  props: {
    list: Array
  }

}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/mixins.styl";
    .recommend-title{
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item-img{
        width: 100%;
    }
    .item-img-wapper{
        overflow: hidden;
        height: 37.09%;
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
