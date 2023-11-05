$.get('http://192.168.33.10:5001/api/v1/status/', function (data) {
  const res = JSON.parse(JSON.stringify(data));
  if (res.status === 'OK') {
    console.log('ok');
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
