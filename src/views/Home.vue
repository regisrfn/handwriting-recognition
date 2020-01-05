<template>
  <div :class="['home', {rotate:isActiveClass}]">
    <div class="home__logo">
      <img class="home__logo--icon" svg-inline src="@/img/SVG/cloud-backup-up-arrow.svg" alt />
    </div>
    <div class="home__header">
      <h1>UPLOAD IMAGE</h1>
    </div>
    <form v-on:submit.prevent="onUpload" class="form">
      <div class="upload-btn-wrapper">
        <button class="btn">Choose a file</button>
        <input type="file" @change="onFileChanged" />
      </div>
      <div>
        <button type="submit" class="btn" @click="onUpload">UPLOAD</button>
      </div>
    </form>
  </div>
</template>

<script>
import image_services from "@/services/image_upload/image_services";

export default {
  computed: {
    isActiveClass: function() {
      return this.$store.state.rotateClass;
    }
  },
  created() {
    setTimeout(() => {
      return this.$store.commit("SET_CLASS", true);
    }, 100);
  },
  beforeDestroy() {
    this.$store.commit("SET_CLASS", false);
  },
  methods: {
    onFileChanged(event) {
      const file = event.target.files[0];
      console.log(file);
    },
    onUpload() {
      image_services
        .getAllImages()
        .then(response => {
          const status = response.data;
          console.log(status);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>