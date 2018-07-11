<template>
  <div class="container">
    <div class="row justify-content-center" id="location">
      <div class="col-md-4 col-12">
        <div class="contact_info">
          <h4>
            Registration
          </h4>
          <ul class="social_list d-none d-sm-block">
            <li>
              <a target="_blank" href="https://gitlab.com/sutd_nlp">
                <i class="ion-pull-request"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/sutd-statnlp/">
                <i class="ion-social-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://sutd.edu.sg/">
                <i class="ion-university"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.statnlp.org/">
                <i class="ion-ios-world"></i>
              </a>
            </li>
          </ul>

          <ul class="icon_list pt50 d-none d-sm-block">
            <li>
              <i class="ion-location"></i>
              <span>
                8 Somapah Road
                <br/> Singapore 487372
              </span>
            </li>
            <li>
              <i class="ion-planet"></i>
              <span>
                event.statnlp.org
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8 col-12">
        <div class="row">
          <div class="col-12 text-center">
            <h4 class="text-warning">
              Registration is now closed.
            </h4>
            <h5>
              If you have any questions, please send an email message to <br>
              <a href="mailto:ssnlp-organizers@googlegroups.com">
                <strong>ssnlp-organizers@googlegroups.com</strong>
              </a>
            </h5>
            <h5>
              Thank you !
            </h5>
          </div>
        </div>
      </div>
      <div class="col-12 mt10">
        <!--map -->
        <iframe  class="map" style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4-kmzdg82jERbE6ZRhhr5X0&key=AIzaSyBQBvZnbU-SJqBtYxawwh4hkEGhl8UML-I&zoom=16" allowfullscreen>
        </iframe>
        <!--map end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationSection',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
#role {
  height: 50px;
  border-radius: 0;
}
.m-btns button {
  width: 140px;
}
.form-control {
  border-radius: 4px;
  font-style: normal;
  font-size: 1em;
}
</style>
