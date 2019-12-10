<template>
  <div id="app" class="container">
    <app-header></app-header>
    <div class="content">
      <app-sidebar></app-sidebar>
      <router-view />
    </div>
  </div>
</template>

<script>
import header from "@/components/Header";
import sidebar from "@/components/sidebar";

export default {
  components: {
    appHeader: header,
    appSidebar: sidebar
  }
};
</script>

<style lang="scss">
@import "@/sass/main";
</style>
