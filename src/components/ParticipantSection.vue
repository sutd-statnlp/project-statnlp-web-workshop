<template>
  <div class="container">
    <div class="section_title">
      <h3 class="title">
        Registered Participants Include
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
        },
        {
          link: 'https://www.agoda.com/',
          imgUrl: '/static/img/participants/agoda.png'
        },
        {
          link: 'https://www.cxagroup.com/',
          imgUrl: '/static/img/participants/cxa.png'
        },
        {
          link: 'https://www.panasonic.com/sg/',
          imgUrl: '/static/img/participants/panasonic.png'
        },
        {
          link: 'https://www.riotinto.com/',
          imgUrl: '/static/img/participants/rio.png'
        },
        {
          link: 'https://www.accenture.com/',
          imgUrl: '/static/img/participants/accenture.png'
        },
        {
          link: 'https://www.tech.gov.sg/',
          imgUrl: '/static/img/participants/govtech.png'
        },
        {
          link: 'http://www.agc.gov.sg/',
          imgUrl: '/static/img/participants/agc.png'
        },
        {
          link: 'https://www.aisingapore.org/',
          imgUrl: '/static/img/participants/ai.png'
        },
        {
          link: 'https://sg.carousell.com/',
          imgUrl: '/static/img/participants/carousell.png'
        },
        {
          link: 'https://www.cornell.edu/',
          imgUrl: '/static/img/participants/cornell.png'
        },
        {
          link: 'https://www2.deloitte.com/',
          imgUrl: '/static/img/participants/deloitte.png'
        },
        {
          link: 'https://www.dso.org.sg/',
          imgUrl: '/static/img/participants/dso.png'
        },
        {
          link: 'https://dsta.gov.sg/',
          imgUrl: '/static/img/participants/dsta.png'
        },
        {
          link: 'https://www.knorex.com/',
          imgUrl: '/static/img/participants/knorex.png'
        },
        {
          link: 'https://www.grab.com/',
          imgUrl: '/static/img/participants/grab.png'
        },
        {
          link: 'https://intelllex.com/',
          imgUrl: '/static/img/participants/intelllex.png'
        },
        {
          link: 'https://www.lazada.sg/',
          imgUrl: '/static/img/participants/lazada.png'
        },
        {
          link: 'https://www.mindef.gov.sg/',
          imgUrl: '/static/img/participants/mindef.png'
        },
        {
          link: 'https://www.moe.gov.sg/',
          imgUrl: '/static/img/participants/moe.png'
        },
        {
          link: 'http://www.mom.gov.sg/',
          imgUrl: '/static/img/participants/mom.png'
        },
        {
          link: 'http://www.msd-singapore.com/',
          imgUrl: '/static/img/participants/msd.png'
        },
        {
          link: 'http://www.nrf.gov.sg/',
          imgUrl: '/static/img/participants/nrf.png'
        },
        {
          link: 'https://nurture.ai/',
          imgUrl: '/static/img/participants/nuai.png'
        },
        {
          link: 'https://www.paypal.com/',
          imgUrl: '/static/img/participants/paypal.png'
        },
        {
          link: 'https://shopee.sg/',
          imgUrl: '/static/img/participants/shopee.png'
        },
        {
          link: 'https://www.singhealth.com.sg/',
          imgUrl: '/static/img/participants/singh.png'
        },
        {
          link: 'https://www.singhealth.com.sg/',
          imgUrl: '/static/img/participants/ste.png'
        },
        {
          link: 'http://www.taiger.com/',
          imgUrl: '/static/img/participants/taiger.png'
        },
        {
          link: 'https://www.ultimatesoftware.com/',
          imgUrl: '/static/img/participants/ultisoft.png'
        },
        {
          link: 'http://www.tsukuba.ac.jp/',
          imgUrl: '/static/img/participants/uot.png'
        },
        {
          link: 'https://www.jpmorgan.com/',
          imgUrl: '/static/img/participants/jpm.png'
        },
        {
          link: 'https://home.kpmg.com/',
          imgUrl: '/static/img/participants/kpmg.png'
        },
        {
          link: 'https://www.gic.com.sg/',
          imgUrl: '/static/img/participants/gic.png'
        },
        {
          link: 'https://www.imda.gov.sg/',
          imgUrl: '/static/img/participants/imda.png'
        },
        {
          link: 'https://www.thomsonreuters.com/',
          imgUrl: '/static/img/participants/thomson.png'
        },
        {
          link: 'https://generalassemb.ly/',
          imgUrl: '/static/img/participants/genass.png'
        },
        {
          link: 'https://www.ucl.ac.uk/',
          imgUrl: '/static/img/participants/ucl.png'
        },
        {
          link: 'http://www.univ-paris8.fr/',
          imgUrl: '/static/img/participants/univ8.png'
        },
        {
          link: 'http://www.wsg.gov.sg/',
          imgUrl: '/static/img/participants/wsg.png'
        },
        {
          link: 'https://www.wecashgroup.com/',
          imgUrl: '/static/img/participants/wecash.png'
        },
        {
          link: 'https://www.vodafone.com/',
          imgUrl: '/static/img/participants/voda.png'
        },
        {
          link: 'https://www.ura.gov.sg/',
          imgUrl: '/static/img/participants/ura.png'
        },
        {
          link: 'https://www.solvay.com/',
          imgUrl: '/static/img/participants/solvay.png'
        },
        {
          link: 'https://surbanajurong.com/',
          imgUrl: '/static/img/participants/surjur.png'
        },
        {
          link: 'http://www.tp.edu.sg/',
          imgUrl: '/static/img/participants/temapoly.png'
        },
        {
          link: 'http://www.suss.edu.sg/',
          imgUrl: '/static/img/participants/suss.png'
        },
        {
          link: 'https://brand.arizona.edu/',
          imgUrl: '/static/img/participants/arizona.png'
        },
        {
          link: 'http://en.uestc.edu.cn/',
          imgUrl: '/static/img/participants/uest.png'
        },
        {
          link: 'https://www.pwc.com/',
          imgUrl: '/static/img/participants/pwc.png'
        },
        {
          link: 'http://www.schroders.com/',
          imgUrl: '/static/img/participants/schroder.png'
        },
        {
          link: 'https://mila.quebec/en/',
          imgUrl: '/static/img/participants/mila.png'
        },
        {
          link: 'https://www.edb.gov.sg/',
          imgUrl: '/static/img/participants/edb.png'
        },
        {
          link: 'https://www.ubs.com/',
          imgUrl: '/static/img/participants/ubs.png'
        },
        {
          link: 'https://www.barclays.co.uk/',
          imgUrl: '/static/img/participants/barclays.png'
        },
        {
          link: 'http://dentsuaegisnetwork.com/',
          imgUrl: '/static/img/participants/denet.png'
        },
        {
          link: 'https://www.nju.edu.cn/',
          imgUrl: '/static/img/participants/nju.png'
        },
        {
          link: 'https://www.hpe.com/',
          imgUrl: '/static/img/participants/hpe.png'
        },
        {
          link: 'http://www.h2i.sg/',
          imgUrl: '/static/img/participants/h2i.png'
        },
        {
          link: 'https://www.joinef.com/',
          imgUrl: '/static/img/participants/joinef.png'
        },
        {
          link: 'http://www.publicisgroupe.com/',
          imgUrl: '/static/img/participants/publicgroup.png'
        },
        {
          link: 'http://www.jll.com.sg/',
          imgUrl: '/static/img/participants/jll.png'
        },
        {
          link: 'https://www.biofourmis.com/',
          imgUrl: '/static/img/participants/biofourmis.png'
        },
        {
          link: 'https://www.duke-nus.edu.sg/',
          imgUrl: '/static/img/participants/dukenus.png'
        },
        {
          link: 'https://www.groupm.com/',
          imgUrl: '/static/img/participants/groupm.png'
        },
        {
          link: 'https://www.expedia.com/',
          imgUrl: '/static/img/participants/expedia.png'
        },
        {
          link: 'https://www.northerntrust.com/',
          imgUrl: '/static/img/participants/northerntrust.png'
        },
        {
          link: 'https://www.csc.gov.sg/',
          imgUrl: '/static/img/participants/csc.png'
        }
      ]
    }
  },
  mounted () {
    $('#parti-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 480,
      autoplayHoverPause: false,
      autoplayTimeout: 2000,
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
