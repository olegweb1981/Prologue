
//*region Shuffle
var filters = $('#filters');
var filterButtons = filters.find('button');
window.shuffleInstance = new window.Shuffle(document.getElementById('grid'), {
  itemSelector: '.item'
});
filters.on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  filterButtons.removeClass('text-dark font-weight-bold');
  filterButtons.addClass('text-body');
  $(this).addClass('text-dark font-weight-bold');
  $(this).removeClass('text-body');
  if (filterValue !== '*') {
    shuffleInstance.filter(filterValue);
  } else {
    shuffleInstance.filter();
  }
});

filters.on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  filterButtons.removeClass('text-dark font-weight-bold');
  filterButtons.addClass('text-body');
  $(this).addClass('text-dark font-weight-bold');
  $(this).removeClass('text-body');
    if (filterValue !== '*') {
    shuffleInstance.filter(filterValue);
  } else {
    shuffleInstance.filter();
  }
});


//*region LightBox
  baguetteBox.run('#grid');
  