// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
function paintHtml(data){
  var yPosition = data.battle.position.y
  var xPosition = data.battle.position.x
  var attack_point = `<div class="paint" data-position=${xPosition}></div>`
  $('body').append(attack_point);
  $('.paint').css('top', yPosition);
  $('.paint').css('left', xPosition);
  $('.paint').css('width', '30px');
  $('.paint').css('height', '30px');
  $('.paint').css('background-color', 'black');
}
