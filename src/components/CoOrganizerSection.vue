<template>
  <div class="container">
    <div class="section_title">
      <h3 class="title">
        Co-Organizers
      </h3>
    </div>
    <div id="or-carousel" class="brand_carousel owl-carousel">
      <div class="brand_item text-center">
        <a target="_blank" href="http://www.nus.edu.sg/">
          <img src="static/img/co-organizers/mini/co-nus-400x300.png" alt="brand">
        </a>
      </div>
      <div class="brand_item text-center">
        <a target="_blank" href="http://www.ntu.edu.sg/">
          <img src="static/img/co-organizers/mini/co-ntu-400x300.png" alt="brand">
        </a>
      </div>
      <div class="brand_item text-center">
        <a target="_blank" href="https://www.smu.edu.sg/">
          <img src="static/img/co-organizers/mini/co-smu-400x300.png" alt="brand">
        </a>
      </div>
      <div class="brand_item text-center">
        <a target="_blank" href="https://sutd.edu.sg/">
          <img src="static/img/co-organizers/mini/co-sutd-400x300.png" alt="brand">
        </a>
      </div>
      <div class="brand_item text-center">
        <a target="_blank" href="https://www.a-star.edu.sg/">
          <img src="static/img/co-organizers/mini/co-astar-400x300.png" alt="brand">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'owl.carousel'

export default {
  name: 'CoOrganizerSection',
  data () {
    return {
    }
  },
  mounted () {
    $('#or-carousel').owlCarousel({
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
          items: 4

        }
      },
      items: 4
    })
  }
}
</script>

<style scoped>

</style>
