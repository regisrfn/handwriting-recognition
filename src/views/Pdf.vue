<template>
  <div class="pdfForm">
    <form class="pdfForm__box" v-on:submit.prevent="submit">
      <div class="pdfForm__box--logo">
        <img svg-inline class="icon" src="../img/SVG/upload.svg" alt="example" />
      </div>
      <div class="pdfForm__box--heading">Table extract</div>
      <div class="pdfForm__box--field">
        <input type="file" ref="file__input" @change="onFileChanged" />
        <button class="btn" type="button" @click="chooseFile">CHOOSE A FILE</button>
        <span>{{msg}}</span>
      </div>
      <button class="btn" type="submit">Extract</button>
    </form>
  </div>
</template>

<script>
import * as types from "../store/types";
export default {
  data() {
    return {
      selectedFile: null,
      msg: "No file chosen yet"
    };
  },
  methods: {
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "file.zip") //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    chooseFile() {
      this.$refs.file__input.click();
    },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      this.msg = this.selectedFile.name;
    },
    submit() {
      var formData = new FormData();
      formData.append("image", this.selectedFile);
      this.$store.dispatch(types.TEXT_EXTRACT, formData)
        .then(response => this.forceFileDownload(response))
    }
  }
};
</script>