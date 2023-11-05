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
      $('div.amenities > h4').html(' ');
    }
  });

  // get api status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    const res = JSON.parse(JSON.stringify(data));
    if (res.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  // Search for places
  function searchPlaces (amenityIds) {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      contentType: 'application/json',
      data: amenityIds,
      dataType: 'json',
      success: function (data) {
        $('section.places').empty();
        data.forEach(function (place) {
          $('section.places').append('<article><div class="title_box"><h2>' +
       place.name + '</h2><div class="price_by_night">$' + place.price_by_night +
       '</div></div><div class="information"><div class="max_guest">' +
       place.max_guest + '</div><div class="number_rooms">' +
       place.number_rooms + '</div><div class="number_bathrooms">' +
       place.number_bathrooms + '</div></div><div class="description">' +
       place.description + '</div></article>');
        });
      }
    });
  }
  searchPlaces('{}');

  $('section.filters > button').click(function () {
    const amenityIds = Object.keys(amenities).map(id => `"${id}"`);
    searchPlaces(`{"amenities" : [${amenityIds}]}`);
  });
});
