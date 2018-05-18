<template>
    <div class="container">
         <div class="row justify-content-center pt80">
            <div class="col-md-3 col-12">
                <div class="price_box active">
                    <div class="price_header">
                        <h4>
                            <i class="ion-android-people"></i>
                        </h4>
                    </div>
                    <div class="price_header">
                      <h4 v-for="(item, index) in orgs.slice(0,Orgslength/4)" :key="index">
                       <a v-b-tooltip.hover :title="item.org">
                          <strong>{{item.name}}</strong>
                        </a>
                      </h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="price_box active">
                    <div class="price_header">
                        <h4>
                            <i class="ion-android-people"></i>
                        </h4>
                    </div>
                    <div class="price_header">
                      <h4 v-for="(item, index) in orgs.slice(Orgslength/4,Orgslength/2)" :key="index">
                        <a v-b-tooltip.hover :title="item.org">
                          <strong>{{item.name}}</strong>
                        </a>
                      </h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="price_box active">
                    <div class="price_header">
                        <h4>
                            <i class="ion-android-people"></i>
                        </h4>
                    </div>
                    <div class="price_header">
                      <h4 v-for="(item, index) in orgs.slice(Orgslength/2,Orgslength/2 + Orgslength/4)" :key="index">
                        <a v-b-tooltip.hover :title="item.org">
                          <strong>{{item.name}}</strong>
                        </a>
                      </h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12">
                <div class="price_box active">
                    <div class="price_header">
                        <h4>
                            <i class="ion-android-people"></i>
                        </h4>
                    </div>
                    <div class="price_header">
                      <h4 v-for="(item, index) in orgs.slice(Orgslength/2 + Orgslength/4,Orgslength)" :key="index">
                        <a v-b-tooltip.hover :title="item.org">
                          <strong>{{item.name}}</strong>
                        </a>
                      </h4>
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
          name: 'Wei Lu',
          org: 'Singapore University of Technology and Design'
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
  computed: {
    Orgslength () {
      return this.orgs.length
    }
  }
}
</script>

<style scoped>
</style>
