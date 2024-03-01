/*
 * Author: Daniel Pellegrino
 * Author URI: https://danieljpellegrino.com
 * Description: This file contains all of the custom JavaScript for TJS Designs' website.
 * 
 * LICENSE: MIT
 */

$(document).ready(function () {
  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });

  $('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
  });
});
