<template>
  <div class="pdfForm">
    <form class="pdfForm__box">
      <div class="pdfForm__box--logo">
        <img svg-inline class="icon" src="../img/SVG/upload.svg" alt="example" />
      </div>
      <div class="pdfForm__box--heading">Table extract</div>
      <div class="pdfForm__box--field">
        <input type="file" ref="file__input" @change="onFileChanged">
        <button class="btn" type="button" @click="chooseFile">CHOOSE A FILE</button>
        <span>{{msg}}</span>
      </div>
      <button class="btn" type="submit">Extract</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      msg: "No file chosen yet"
    };
  },
  methods: {
    chooseFile() {
      this.$refs.file__input.click();
    },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      this.msg = this.selectedFile.name;
    }
  }
};
</script>