
import * as $ from 'jquery'

window.$ = $
window.jquery = $
window.jQuery = $

$(window).load(function () {
  $('.loader').fadeOut('slow')
})
