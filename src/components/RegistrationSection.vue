<template>
  <div class="container">
    <div class="row justify-content-center">
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
        <form @submit.prevent="saveUser" v-if="!isRegisterd">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="contact_form">
              <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="Name" v-model="user.name" required>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" v-model="user.email" required>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="contact_form">
              <div class="form-group">
                <input type="text" class="form-control" name="affiliation" placeholder="Affiliation"  v-model="user.affiliation" required>
              </div>
              <div class="form-group">
                <select class="form-control" name="role" id="role" v-model="user.role" v-if="!isCustomRole" required>
                  <option value="" selected="selected" disabled="">Attend as </option>
                  <option>Faculty</option>
                  <option>Researcher</option>
                  <option>Industry</option>
                  <option>Government</option>
                  <option>UG Student</option>
                  <option>PG Student</option>
                  <option value="other">Others</option>
                </select>
              </div>
               <div class="form-group" id="formCustomRole" v-if="isCustomRole">
                  <input type="text" class="form-control" placeholder="Attend as " id="customRole" name="customRole"  v-model="user.customRole" :required="isCustomRole">
                </div>
            </div>
          </div>

        </div>
        <div id="location" class="row">
          <div class="col-12">
              <div class="form-group text-center">
                <label>
                  Would you agree to share your registration information with industry partners ?
                  <select name="agree" id="agree" v-model="user.agree" required="">
                    <option disabled="" selected="" value="">
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group text-center m-btns">
                <button type="submit" class="btn btn-rounded btn-primary">Register</button>
                <button type="button" class="btn btn-rounded btn-primary ml-2" @click="reset">Reset</button>
              </div>
            </div>
        </div>
        </form>
        <div class="row" v-if="isRegisterd">
          <div class="col-12 text-center">
            <h4 class="text-success">
              Registration is successful !
            </h4>
            <h5>
               We look forward to seeing you.
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
import DatabaseService from '@/services/DatabaseService'
export default {
  name: 'RegistrationSection',
  data () {
    return {
      user: {
        name: null,
        email: null,
        affiliation: null,
        role: '',
        customRole: null,
        agree: null
      },
      isRegisterd: false
    }
  },
  computed: {
    isCustomRole () {
      return this.user.role === 'other'
    }
  },
  methods: {
    reset () {
      this.user = {
        name: null,
        email: null,
        affiliation: null,
        role: '',
        customRole: null,
        agree: null
      }
    },
    saveUser () {
      DatabaseService.saveUser(this.user)
      this.isRegisterd = true
    }
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
