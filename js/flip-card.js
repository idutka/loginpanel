var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('signup').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);
  document.getElementById('signin').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);

};

window.addEventListener('DOMContentLoaded', init, false);