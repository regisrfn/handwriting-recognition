<template>
  <div class="pdfForm">
    <form class="pdfForm__box">
      <div class="pdfForm__box--logo">
        <img svg-inline class="icon" src="../img/SVG/upload.svg" alt="example" />
      </div>
      <div class="pdfForm__box--heading">Table extract</div>
      <div class="pdfForm__box--field">
        <input type="file" class="file__input" ref="file__input" @change="onFileChanged" />
        <button class="file__buttom" type="button" @click="chooseFile">CHOOSE A FILE</button>
        <span class="file__text">{{msg}}</span>
      </div>
      <button class="pdfForm__button" type="submit">Extract</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFile:null,
            msg: 'No file chosen yet'
        }
    },
    methods:{
        chooseFile(){
            this.$refs.file__input.click()
        },
        onFileChanged(event){
            this.selectedFile = event.target.files[0]
            this.msg = this.selectedFile.name 
        }
    }
}
</script>