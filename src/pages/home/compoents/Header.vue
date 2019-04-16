<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
        </router-link>

    </div>

</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/varibles.styl";
    .header{
        display:flex;
        line-height:.86rem;
        background:$bgColor;
        color: #fff;
    }
    .back-icon{
        text-align: center;
        font-size: .4rem;
    }
    .header-left{
        width :.64rem;
        float: left;
    }
    .header-input{
        flex: 1;
        padding-left: .2rem;
        margin-top: .12rem;
        margin-left: .2rem;
        line-height: .64rem;
        height: .64rem;
        background: #fff;
        border-radius: .1rem;
        color: #ccc;
    }
    .header-right{
        width :1.24rem;
        float: right;
        text-align: center;
        color: #fff;
       }
    .arrow-icon{
        padding-left:-.04rem;
        font-size: .24rem;
    }

</style>
