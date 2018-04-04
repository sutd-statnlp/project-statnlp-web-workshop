<template>
  <div class="m-home">
    <!--cover section slider -->
    <section id="home" class="home-cover">
      <SliderSection/>
    </section>
    <!--cover section slider end -->
    <!--event info -->
    <section id="overview" class="pt100 pb100">
      <OverviewSection/>
    </section>
    <!--event info end -->

    <!--event countdown -->
    <section id="time" class="bg-img pt70 pb70" style="background-image: url('./static/img/bg/bg-ov.png');">
        <div class="overlay_dark"></div>
        <CountdownSection/>
    </section>
    <!--event count down end-->
    <!--brands section -->
    <section id="partners" class="bg-gray pt100 pb100">
      <PartnerSection/>
    </section>
    <!--brands section end-->
    <!--contact section -->
    <section id="registration" class="pt100 pb100">
      <RegistrationSection/>
    </section>
    <!--contact section end -->
  </div>
</template>

<script>
import OverviewSection from '@/components/OverviewSection'
import CountdownSection from '@/components/CountdownSection'
import PartnerSection from '@/components/PartnerSection'
import RegistrationSection from '@/components/RegistrationSection'
import SliderSection from '@/components/SliderSection'
export default {
  components: {
    OverviewSection,
    CountdownSection,
    PartnerSection,
    RegistrationSection,
    SliderSection
  },
  name: 'HomePage',
  data () {
    return {
    }
  },
  mounted () {
    let js = document.createElement('script')
    js.setAttribute('src', './static/js/main.js')
    document.head.appendChild(js)
  }
}
</script>

<style scoped>

</style>
