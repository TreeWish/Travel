<template>
        <div class="list" ref="wrapper">
            <div>
                <div class="area">
                    <div class="title border-topbottom">当前城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button"> 西安</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button"> 西安</div>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button"> 西安</div>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom">A</div>
                    <div class="item-list">
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                        <div class="item border-bottom"> 啊拉尔</div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="stylus">
    .list{
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .border-topbottom :before{
        border-color: #ccc;
    }
    .border-topbottom :after{
        border-color: #ccc;
    }
    .border-bottom :before{
        border-color: #ccc;
    }
    .title{
        line-height: .54rem;
        background: #eee;
        padding-left: .2rem;
        color: #666;
        font-size: .26rem;
    }
    .button-list{
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;
    }
    .button-wrapper{
        float: left;
        width: 33.33%;
    }
    .button{
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border:.02rem solid #ccc;
        border-radius: .06rem;
    }
    .item{
        line-height: .72rem;
        padding-left: .2rem;
        border-bottom: .001rem solid #ccc ;
    }

</style>
