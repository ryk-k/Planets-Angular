var planetArray = new Array();
var newPlanet;

class Planet {
  constructor(
    // id,
    planetName,
    planetColor,
    planetRadiusKM,
    distInMillionsKM,
    image
  ) {
    //   this.id = id;
    this.planetName = planetName;
    this.planetColor = planetColor;
    this.planetRadiusKM = planetRadiusKM;
    this.distInMillionsKM = distInMillionsKM;
    this.image = image;
  }
}

$(document).ready(() => {
  /*var JSONPlanet = */
  $.ajax({
    type: "GET",
    url: "data/planets.json",
    dataType: "json",
    error: (e) => {
      console.log(e);
    },
    success: parseJSON,
  });
  var count = 0;

  $("#btnplanet").click(() => {
    console.log(
      "New Planet added to your list: " + planetArray[count].planetName
    );

    addPlanet(planetArray[count]);

    localStorage.setItem("id", count);
    localStorage.setItem("planetName", planetArray[count].planetName);
    localStorage.setItem("planetColor", planetArray[count].planetColor);
    localStorage.setItem("planetRadiusKM", planetArray[count].planetRadiusKM);
    localStorage.setItem("distInMillionsKM", planetArray[count].distInMillionsKM);
    localStorage.setItem("image", planetArray[count].image);

    localStorage.setItem("planetArray", planetArray);

    if (count >= 7) {
      $("#btnplanet").prop("disabled", true);
    }

    count++;
  });

  //if this [count] is clicked then

  if (localStorage) console.log("localStorage is available");
  else console.log("localStorage not available");
});

/*
 */
function parseJSON(data) {
  console.log(data);

  for (let p of data.solarSystem.planets) {
    newPlanet = data.solarSystem.planets;

    newPlanet = new Planet(
      // p.id,
      p.planetName,
      p.planetColor,
      p.planetRadiusKM,
      p.distInMillionsKM,
      p.image
    );

    planetArray.push(newPlanet);

    //  localStorage.setItem("planetName", newPlanet.planetName);
  }
  // makeID(data);
}

/*

function makeID(data){
    for (var i = 0; i < planetArray.length; i++) {
        $("#otherList").append(`<li li-id='${i}'>${planetArray[i].planetName}</li>`);
    }
}
*/

function addPlanet(newPlanet) {
  $("#outputList").append(
    "<li id='p" +
      newPlanet.planetName +
      "'><a href='/html/planetDetail.html'>" +
      newPlanet.planetName +
      " " +
      "<img src='images/" +
      newPlanet.image +
      "'></a></li"
  );

  
 
}
/** 
$(document).on("click", "#outputList >li", function (newPlanet) {
  localStorage.setItem("id", $(this).closest("li").attr("li-id"));
  localStorage.setItem("planetName", newPlanet.planetName);
  localStorage.setItem("planetRadiusKM", newPlanet.planetRadiusKM);
});

now click for new page code */
