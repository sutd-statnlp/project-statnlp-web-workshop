<template>
  <div class="m-header d-none d-md-block">
    <header class="header navbar fixed-top navbar-expand-md">
      <div class="container">
          <div class="collapse navbar-collapse flex-sm-row-reverse" id="headernav">
              <ul class=" nav navbar-nav menu">
                  <li class="nav-item">
                      <a class="nav-link " href="#overview">Overview</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link " href="#partners">Partners</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link " href="#registration">Registration</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link " href="#location">Location</a>
                  </li>
              </ul>
          </div>
      </div>
  </header>
  </div>
</template>

<script>
import SmoothScroll from 'smooth-scroll'
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  mounted () {
    SmoothScroll('a[href*="#"]', {
      speed: 500,
      offset: 0
    })
  }
}
</script>

<style scoped>

</style>
