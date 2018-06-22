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
            <div class="col-md-2 col-sm-6" v-for="(item, index) in speakers" :key="index">
                <div class="speaker_box">
                    <div class="speaker_img">
                        <a v-if="item.link" :href="item.link" target="_blank"><img :src="item.photoUrl" alt="speaker name"></a>
                        <img v-if="!item.link"  :src="item.photoUrl" alt="speaker name">
                        <div class="info_box">
                            <h5 class="name">{{item.name}}</h5>
                            <p class="position">{{item.org}}<span v-if="item.country">, {{item.country}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-md-2 col-sm-6">
                <div class="speaker_box">
                    <div class="speaker_img">
                        <img src="/static/img/speakers/more-shadow-min.png" alt="speaker name">
                        <div class="info_box">
                            <h5 class="name">MORE...</h5>
                            <p class="position">TBA</p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import DataUtil from '@/utils/DataUtil'
export default {
  name: 'SpeakerSection',
  data () {
    return {
      speakers: [
        {
          name: 'Ido Dagan',
          org: 'Bar Ilan University',
          photoUrl: '/static/img/speakers/ido-dagan-min.png',
          link: 'http://u.cs.biu.ac.il/~dagan/',
          country: 'Israel'
        },
        {
          name: 'Noah Smith',
          org: 'University of Washington',
          photoUrl: '/static/img/speakers/noah-smith-min.png',
          link: 'https://homes.cs.washington.edu/~nasmith/',
          country: 'USA'
        },
        {
          name: 'Jun\'ichi Tsujii',
          org: 'National Institute of AIST',
          photoUrl: '/static/img/speakers/junichi-min.png',
          link: 'https://en.wikipedia.org/wiki/Jun%27ichi_Tsujii',
          country: 'Japan'
        },
        {
          name: 'Vincent Ng',
          org: 'University of Texas',
          photoUrl: '/static/img/speakers/vincent-min.png',
          link: 'http://www.hlt.utdallas.edu/~vince/',
          country: 'USA'
        },
        {
          name: 'Thang Luong',
          org: 'Google Brain',
          photoUrl: '/static/img/speakers/thang-luong-min.png',
          link: 'https://nlp.stanford.edu/~lmthang/',
          country: 'USA'
        },
        {
          name: 'Linlin Li',
          org: 'Alibaba',
          photoUrl: '/static/img/speakers/linlin-min.png',
          link: 'https://perso.limsi.fr/linlin/',
          country: 'China'
        }
      ]
    }
  },
  created () {
    DataUtil.sortAlphabeByName(this.speakers)
  }
}
</script>

<style scoped>
.name {
  color: white !important;
}
.info_box {
  height: 54px;
  padding-left: 8px !important;
  padding-right: 8px !important;
  bottom: 0px !important;
}
</style>
