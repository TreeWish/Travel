<template>
        <div class="list" ref="wrapper">
            <div>
                <div class="area">
                    <div class="title border-topbottom">当前城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">{{this.currentCity}}</div>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom" >热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                            <div class="button" @click="handleCityClick(item.name)"> {{item.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                    <div class="title border-topbottom">{{key}}</div>
                    <div class="item-list">
                        <div class="item " v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
                            {{innerItem.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('./')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
    }
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
