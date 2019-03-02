var fetch = require('node-fetch');

var url = "https://api-v3.mbta.com/vehicles?api_key=bf1594531a834f48b822988895125aa5&filter[route]=1&include=trip";

var getData = function(){
    fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json);})
}

setInterval(getData,15000);