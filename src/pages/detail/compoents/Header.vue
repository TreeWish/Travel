<template>
    <div>
        <router-link  tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-icon">&#xe624;</div></router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            查看详情
            <router-link to="/">
                <div class="iconfont back-fixed-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () { // 通过绑定style 使用 opacity 控制渐隐渐现效果
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { // keep -alive 带的生命周期函数
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/varibles.styl";
    .header-abs{
        position: absolute;
        top: .2rem;
        left: .2rem;
        height: .8rem;
        line-height: .8rem;
        width: .8rem;
        border-radius: .4rem;
        background: rgba(0,0,0,0.8);
    }
    .back-icon{
        color: #fff;
        font-size: .6rem;
    }
    .header-fixed{
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: $headerHeight;
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background: $bgColor;
        font-size: .32rem;
    }
    .back-fixed-icon{
        position: absolute;
        width: .64rem;
        text-align: center;
        font-size: .4rem;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        color: #fff;
    }

</style>
