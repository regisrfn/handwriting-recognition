<template>
  <div id="app">
    <app-header></app-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
