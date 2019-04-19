<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './compoents/Header'
import CitySearch from './compoents/Search'
import CityList from './compoents/List'
import CityAlphabet from './compoents/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style scoped lang="stylus">

</style>
