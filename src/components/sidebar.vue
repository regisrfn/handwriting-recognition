<template>
  <div class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item" v-for="(item, index) in side" :key="index">
        <router-link :to="item.name.toLowerCase()" class="side-nav__link">
          <span>{{item.span}}</span>
          <div class="side-nav__icon" v-html="item.icon"></div>
        </router-link>
      </li>
    </ul>
    <div class="legal">
      &copy;2019 by regis. All rights reserved
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      side: [
        {
          icon: '<img svg-inline src="@/img/SVG/writing.svg" alt="">',
          name: 'handrecognition',
          span: 'Handwriting'
        },
        {
          icon: '<img svg-inline src="@/img/SVG/pdf.svg" alt="">',
          name: 'pdfrecognition',
          span: 'PDF'
        }
      ]
    }
  }
}
</script>