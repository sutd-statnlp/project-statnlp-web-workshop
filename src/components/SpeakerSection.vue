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
                        <a :href="item.link" target="_blank"><img :src="item.photoUrl" alt="speaker name"></a>
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
          photoUrl: '/static/img/speakers/ido-dagan.png',
          link: 'http://u.cs.biu.ac.il/~dagan/'
        },
        {
          name: 'Noah Smith',
          org: 'University of Washington',
          photoUrl: '/static/img/speakers/noah-smith.png',
          link: 'https://homes.cs.washington.edu/~nasmith/'
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
</style>
