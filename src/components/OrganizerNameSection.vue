<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="progress_container">
                    <div class="single_progressbar" v-for="(item, index) in orgs.slice(0,Orgslength/2)" :key="index">
                        <div class="progress_text">
                            <span class="float-right">{{item.org}} - {{item.name}} <i class="ion-person"></i></span>
                            <span>&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="progress_container">
                    <div class="single_progressbar" v-for="(item, index) in orgs.slice(Orgslength/2,Orgslength)" :key="index">
                        <div class="progress_text">
                            <i class="ion-person"></i>
                            <span>{{item.name}}</span>
                            <span> - {{item.org}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
          name: 'Wei Lu',
          org: 'Singapore University of Technology and Design'
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
  computed: {
    Orgslength () {
      return this.orgs.length
    }
  }
}
</script>

<style scoped>

</style>
