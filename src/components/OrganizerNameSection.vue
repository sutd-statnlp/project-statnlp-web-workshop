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
        {
          name: 'Wei Lu',
          org: 'Singapore University of Technology and Design'
        },
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
</style>
