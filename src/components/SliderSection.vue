<template>
  <div class="">
    <div class="cover_slider owl-carousel owl-theme">
      <div class="cover_item" style="background: url('./static/img/bg/slider2-normal.png');">
        <div class="slider_content">
          <div class="slider-content-inner">
            <div class="container">
              <div class="slider-content-center">
                <h2 class="text-white">
                  The 2018 Singapore Symposium on Natural Language Processing
                </h2>
                <p class="cover-date">
                 <strong>
                    13 JULY 2018 - SUTD, Singapore.
                 </strong>
                </p>
                <a href="#registration" class="btn btn-primary btn-rounded">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cover_item" style="background: url('./static/img/bg/slider2-normal.png');">
        <div class="slider_content">
          <div class="slider-content-inner">
            <div class="container">
              <div class="slider-content-left">
                <h2 class="text-white">
                  The 2018 Singapore Symposium on Natural Language Processing
                </h2>
                <p class="cover-date">
                  <strong>
                    13 JULY 2018 - SUTD, Singapore.
                  </strong>
                </p>
                <a href="#registration" class=" btn btn-primary btn-rounded">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cover_nav">
      <ul class="cover_dots">
        <li class="active" data="0">
          <span>1</span>
        </li>
        <li data="1">
          <span>2</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'owl.carousel'

export default {
  name: 'SliderSection',
  data () {
    return {
    }
  },
  mounted () {
    $(window).load(function () {
      $('.loader').fadeOut('slow')
      $('.cover_slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        dots: true,
        nav: false,
        items: 1,
        animateOut: 'fadeOut',
        dotsContainer: '.cover_dots'
      })
    })
  }
}
</script>

<style scoped>

</style>
