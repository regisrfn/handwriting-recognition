<template>
  <div :class="['home', {rotate:isActiveClass}]">
    <div class="home__logo">
      <img class="home__logo--icon" svg-inline src="@/img/SVG/cloud-backup-up-arrow.svg" alt />
    </div>
    <div class="home__header">
      <h1>UPLOAD IMAGE</h1>
    </div>
    <form action="#" class="form">
      <div class="upload-btn-wrapper">
        <button class="btn">Choose a file</button>
        <input type="file" name="myfile" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: this.$store.state.rotateClass
    };
  },
  computed: {
    isActiveClass : function () {
      return this.$store.state.rotateClass
    }
  },
  created () {
    setTimeout( () => {
      return this.$store.commit('SET_CLASS',true)
    }, 100)
  }
};
</script>