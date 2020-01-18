<template>
  <div class="pdfForm">
    <form class="pdfForm__box">
      <div class="pdfForm__box--logo">
        <img svg-inline class="icon" src="../img/SVG/upload.svg" alt="example" />
      </div>
      <div class="pdfForm__box--heading">Table extract</div>
      <div class="pdfForm__box--field">
        <input type="file" class="file__input"/>
        <button class="file__buttom" type="button">CHOOSE A FILE</button>
        <span class="file__text">No file chosen yet</span>
      </div>
      <button class="pdfForm__button" type="submit">Extract</button>
    </form>
  </div>
</template>