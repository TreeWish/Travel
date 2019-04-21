<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li v-for="item of list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
                <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return this.list
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
    @import "../../../assets/styles/varibles.styl";
    .search{
        height: .72rem;
        padding: 0 .1rem;
        background: $bgColor;
    }
    .search-input{
        box-sizing: border-box;
        width: 100%;
        height: .62rem;
        line-height: .62rem;
        padding: 0 .1rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
    }
    .search-content{
        z-index: 1;
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        left: 0;
        background: #eee
    }
    .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        background: #fff;
        color: #666;
        border-bottom: .001rem solid #ccc ;
    }

</style>
