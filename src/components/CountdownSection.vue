<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10">
        <div class="countdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'jquery-countdown'
export default {
  name: 'Countdown',
  data () {
    return {
    }
  },
  mounted () {
    $('.countdown').countdown('2018/07/13', function (event) {
      $(this).html(event.strftime('<div>%-w <span>Weeks</span></div>  <div>%-d <span>Days</span></div>  <div>%-H<span>Hours</span></div> <div>%-M<span>Minutes</span></div> <div>%-S<span>Seconds</span></div>'))
    })
  }
}
</script>

<style scoped>

</style>
