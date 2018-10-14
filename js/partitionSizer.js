  $(document).ready(function(e){
    $( document ).on( 'click', '.bs-dropdown-to-select-group .dropdown-menu li', function( event ) {
      var $target = $( event.currentTarget );
    $target.closest('.bs-dropdown-to-select-group')
      .find('[data-bind="bs-drp-sel-value"]').val($target.attr('data-value'))
      .end()
      .children('.dropdown-toggle').dropdown('toggle');
    $target.closest('.bs-dropdown-to-select-group')
        .find('[data-bind="bs-drp-sel-label"]').text($target.context.textContent);
    return false;
  });
});