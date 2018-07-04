<template>
  <div class="container">
    <div class="section_title">
      <h3 class="title">
        Participants
      </h3>
    </div>
    <div id="parti-carousel" class="brand_carousel owl-carousel">
      <div class="brand_item text-center" v-for="(item, index) in participants" :key="index">
        <a target="_blank" :href="item.link">
          <img :src="item.imgUrl" alt="participant">
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
      participants: [
        {
          link: 'https://www.dbs.com',
          imgUrl: '/static/img/participants/dbs.png'
        }
      ]
    }
  },
  mounted () {
    $('#parti-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 450,
      autoplayHoverPause: false,
      autoplayTimeout: 4000,
      dots: false,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3

        },
        1000: {
          items: 5

        }
      },
      items: 5
    })
  }
}
</script>

<style scoped>

</style>
