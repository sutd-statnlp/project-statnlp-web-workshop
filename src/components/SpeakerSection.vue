<template>
    <div>
        <div class="container">
          <div class="section_title mb50">
              <h3 class="title">
                speakers
              </h3>
          </div>
        </div>
        <div class="row justify-content-center no-gutters">
            <div class="col-md-3 col-sm-6" v-for="(item, index) in speakers" :key="index">
                <div class="speaker_box">
                    <div class="speaker_img">
                        <a v-if="item.link" :href="item.link" target="_blank"><img :src="item.photoUrl" alt="speaker name"></a>
                        <img v-if="!item.link"  :src="item.photoUrl" alt="speaker name">
                        <div class="info_box">
                            <h5 class="name">{{item.name}}</h5>
                            <p class="position">{{item.org}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SpeakerSection',
  data () {
    return {
      speakers: [
        {
          name: 'Ido Dagan',
          org: 'Bar Ilan University',
          photoUrl: '/static/img/speakers/ido-dagan-min.png',
          link: 'http://u.cs.biu.ac.il/~dagan/'
        },
        {
          name: 'Noah Smith',
          org: 'University of Washington',
          photoUrl: '/static/img/speakers/noah-smith-min.png',
          link: 'https://homes.cs.washington.edu/~nasmith/'
        },
        {
          name: 'Jun\'ichi Tsujii',
          org: 'National Institute of AIST',
          photoUrl: '/static/img/speakers/junichi-min.png',
          link: 'https://en.wikipedia.org/wiki/Jun%27ichi_Tsujii'
        }
      ]
    }
  }
}
</script>

<style scoped>
.name {
  color: white !important;
}
.info_box {
  height: 56px;
}
</style>
