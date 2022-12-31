/**
 *
 */
var planetName, planetColor, image;
var id;
var planetArray = new Array();

$(document).ready(() => {
//planetArray = JSON.parse(localStorage.getItem("planetArray"));
 

  
  id = parseInt(localStorage.getItem("id"));
  planetName = localStorage.getItem("planetName");
  planetColor = localStorage.getItem("planetColor");
  planetRadiusKM = localStorage.getItem("planetRadiusKM");
  distInMillionsKM = localStorage.getItem("distInMillionsKM");
  image = localStorage.getItem("image");

  $("#id").html(id);
  $("#planetName").html(planetName);
 $("#planetColor").html(planetColor);
 $("#planetRadiusKM").html(planetRadiusKM);
 $("#distInMillionsKM").html(distInMillionsKM.fromSun);
  $("#bck").css("background-image", `url(/images/${image})`);

  //////////////////////////////

  //
});
