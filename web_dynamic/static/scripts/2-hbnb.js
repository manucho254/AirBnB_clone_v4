$.get("http://0.0.0.0:5001/api/v1/status/", function(data){
  const res = JSON.parse(JSON.stringify(data));
  if (res["status"] === "OK") {
      addClass("available");
  }else {
      removeClass("available");
  }
});
