$(document).ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    const names = Object.values(amenities);
    if (names.length > 0) {
      $('div.amenities > h4').text(names.join(', '));
    } else {
      $('div.amenities > h4').html(' ');
    }
  });
});

$.get('http://192.168.33.10:5001/api/v1/status/', function (data) {
  const res = JSON.parse(JSON.stringify(data));
  if (res.status === 'OK') {
    console.log('ok');
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
