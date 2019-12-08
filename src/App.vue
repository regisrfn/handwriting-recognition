<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/Header'

export default {
  components:{
    appHeader:header
  }  
}
</script>

<style lang="scss">
@import '@/sass/main'
</style>
