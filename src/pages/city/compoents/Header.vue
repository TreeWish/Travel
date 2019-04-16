<template>
    <div class="header">
        城市选择
    <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/varibles.styl";
    .header{
        position: relative;
        overflow: hidden;
        height: .86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        background: $bgColor;
        font-size: .32rem;
    }
    .back-icon{
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
