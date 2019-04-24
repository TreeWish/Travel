<template>
   <div>
       <detail-banner></detail-banner>
       <detail-header></detail-header>
       <div class="content"></div>
   </div>
</template>

<script>
import DetailBanner from './compoents/Banner'
import DetailHeader from './compoents/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped lang="stylus">
    .content{
        height: 50rem;
    }

</style>
