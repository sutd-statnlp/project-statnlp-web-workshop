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
    <!--speaker section-->
    <section id="speakers" class="pt100">
      <SpeakerSection/>
    </section>
    <section class="pt60 pb60">
      <ProgrammeSection/>
    </section>
    <!--speaker section end -->
    <!--brands section -->
    <section id="organizers" class="bg-gray pt100 pb100">
      <CoOrganizerSection/>
    </section>
    <section class="pb100">
      <OrganizerNameSection/>
    </section>
     <section id="partners" class="bg-gray pt100 pb100">
      <PartnerSection/>
    </section>
    <!--brands section end-->
    <!--contact section -->
    <section id="registration" class="pt100 pb100">
      <RegistrationSection/>
    </section>
    <!--contact section end -->
    <section id="participants" class="bg-gray pt100 pb100">
      <ParticipantSection/>
    </section>
  </div>
</template>

<script>
import {WOW} from 'wowjs'
import OverviewSection from '@/components/OverviewSection'
import CountdownSection from '@/components/CountdownSection'
import PartnerSection from '@/components/PartnerSection'
import CoOrganizerSection from '@/components/CoOrganizerSection'
import RegistrationSection from '@/components/RegistrationSection'
import SliderSection from '@/components/SliderSection'
import SpeakerSection from '@/components/SpeakerSection'
import OrganizerNameSection from '@/components/OrganizerNameSection'
import ProgrammeSection from '@/components/ProgrammeSection'
import ParticipantSection from '@/components/ParticipantSection'

export default {
  components: {
    OverviewSection,
    CountdownSection,
    PartnerSection,
    RegistrationSection,
    SliderSection,
    CoOrganizerSection,
    SpeakerSection,
    OrganizerNameSection,
    ProgrammeSection,
    ParticipantSection
  },
  name: 'HomePage',
  data () {
    return {
    }
  },
  mounted () {
    this.initWow()
    this.initHeader()
  },
  methods: {
    initWow () {
      var wow = new WOW({
        animateClass: 'animated',
        offset: 10,
        mobile: true
      })
      wow.init()
    },
    initHeader () {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
          $('.header').removeClass('sticky_header')
        } else {
          $('.header').addClass('sticky_header')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
