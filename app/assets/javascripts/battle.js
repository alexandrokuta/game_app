$(function() {
  $(window).click(function(e) {
    position : {
      x: e.pageX,
      y: e.pageY
    }
    return App.battle.attack(position);
  })
})
