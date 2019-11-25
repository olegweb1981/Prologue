
//*region Shuffle
var filters = $('.filters');
var filterButtons = filters.find('button');

window.shuffleInstance = new window.Shuffle(document.getElementById('grid'), {
  itemSelector: '.item'
});

filters.on('click', 'button', function() {

 /* filterButtons.removeClass('text-dark font-weight-bold');
  filterButtons.addClass('text-body');
  $(this).addClass('text-dark font-weight-bold');
  $(this).removeClass('text-body');
  */
  
  $('button').on('click', function () {
    $('button').removeClass('active');
    $(this).addClass('active');
}) 

  var filterValue = $(this).attr('data-filter');

  if (filterValue !== '*') {
    shuffleInstance.filter(filterValue);
  } else {
    shuffleInstance.filter();
  }
});

 baguetteBox.run('#grid');

// toggle .active class
$('.nav-item').on('click', function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
})  

//Slow ScrolL 
function slowScroll(id) {
  var offset = 0
  $('html, body').animate ({
    scrollTop: $(id).offset ().top - offset
  }, 1000);
  return false;
}