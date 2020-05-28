<template>
    <div>
        <filter-loc></filter-loc>
        <filter-glo></filter-glo>
        <filter-ser></filter-ser>
        <filter-param></filter-param>
    </div>
</template>

<script>
import FilterLoc from '@/components/FilterLoc'
import FilterGlo from '@/components/FilterGlo'
import FilterSer from '@/components/FilterSer'
import FilterParam from '@/components/FilterParam'
export default {
    components:{
        FilterLoc,
        FilterGlo,
        FilterSer,
        FilterParam
    }
}
</script>

<style lang='less' scoped>

</style>