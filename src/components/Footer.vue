<template>
  <div class="">
    <div class="copyright_footer">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <p hidden><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                <p class="text-center">
                  Copyright &copy; {{year}} All rights reserved | SUTD StatNLP
                </p>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
