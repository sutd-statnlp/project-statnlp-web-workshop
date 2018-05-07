<template>
  <div class="container">
    <div class="section_title">
      <h3 class="title">
        our partners
      </h3>
    </div>
    <div id="pa-carousel" class="brand_carousel owl-carousel">
      <div class="brand_item text-center">
        <a target="_blank" href="https://www.alibaba.com/">
          <img src="static/img/partners/p1.png" alt="brand">
        </a>
      </div>
      <div class="brand_item text-center">
        <a target="_blank" href="https://www.sginnovate.com/">
          <img src="static/img/partners/p2.png" alt="brand">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'owl.carousel'

export default {
  name: 'PartnerSection',
  data () {
    return {
    }
  },
  mounted () {
    $('#pa-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 450,
      autoplayHoverPause: false,
      dots: false,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2

        },
        1000: {
          items: 2

        }
      },
      items: 2
    })
  }
}
</script>

<style scoped>

</style>
