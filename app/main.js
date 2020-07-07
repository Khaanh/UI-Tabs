$('.js-tabsSwitch').on('click', function(e) {
  let id = $(this).attr('href')
  $(this).closest('.tabs').siblings('.holder-content').find('.tabcontent').removeClass('is-opened')
  $(this).addClass('is-active').siblings('.js-tabsSwitch').removeClass('is-active')
  $('#' + id).addClass('is-opened')
  e.preventDefault();
})