<template>
    <div class="container">
        <div class="row justify-content-center pt80">
            <div class="col-md-5 col-12">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(item, index) in orgs.slice(0, Orgslength/2)" :key="index">
                  <strong><i class="ion-person"></i> {{item.name}}</strong>
                  <br>
                  {{item.org}}
                </li>
              </ul>
            </div>
            <div class="col-md-5 col-12">
               <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(item, index) in orgs.slice(Orgslength/2, Orgslength)" :key="index">
                  <strong><i class="ion-person"></i> {{item.name}}</strong> <br>
                  {{item.org}}
                </li>
              </ul>
            </div>
        </div>
        <div class="row justify-content-center pt80">
            <div class="col-md-4 col-12">
                <div class="price_box active">
                    <div class="price_highlight">
                        General Chair
                    </div>
                   <div class="price_header">
                       <a target="_blank" href="https://istd.sutd.edu.sg/people/faculty/lu-wei">
                         <h5>Wei Lu, SUTD</h5>
                       </a>
                   </div>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="price_box active">
                    <div class="price_highlight">
                        Host
                    </div>
                    <div class="price_header">
                        <a target="_blank" href="https://istd.sutd.edu.sg/">
                         <h5>ISTD Pillar, SUTD</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="price_box active">
                    <div class="price_highlight">
                        Local Arrangement
                    </div>
                    <div class="price_header">
                        <a target="_blank" href="http://www.statnlp.org/">
                         <h5>SUTD StatNLP</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DataUtil from '@/utils/DataUtil'
export default {
  name: 'OrganizerNameSection',
  data () {
    return {
      orgs: [
        {
          name: 'Ai Ti Aw',
          org: 'Institute for Infocomm Research'
        },
        {
          name: 'Rafael Enrique Banchs',
          org: 'Institute for Infocomm Research'
        },
        {
          name: 'Francis Bond',
          org: 'Nanyang Technological University'
        },
        // {
        //   name: 'Wei Lu',
        //   org: 'Singapore University of Technology and Design'
        // },
        {
          name: 'Nancy Chen',
          org: 'Institute for Infocomm Research'
        },
        {
          name: 'Jing Jiang',
          org: 'Singapore Management University'
        },
        {
          name: 'Shafiq Joty',
          org: 'Nanyang Technological University'
        },
        {
          name: 'Min-Yen Kan',
          org: 'National University of Singapore'
        },
        {
          name: 'Haizhou Li',
          org: 'National University of Singapore'
        },
        {
          name: 'Hwee Tou Ng',
          org: 'National University of Singapore'
        },
        {
          name: 'Jian Su',
          org: 'Institute for Infocomm Research'
        },
        {
          name: 'Yue Zhang',
          org: 'Singapore University of Technology and Design'
        },
        {
          name: 'Bill Jun Lang',
          org: 'Lazada Group'
        }
      ]
    }
  },
  created () {
    DataUtil.sortAlphabeByName(this.orgs)
  },
  computed: {
    Orgslength () {
      return this.orgs.length
    }
  }
}
</script>

<style scoped>
.list-group-item strong {
  color: #1D67BD;
}
.price_box {
  padding-bottom: 50px;
}
</style>
