// API KEY
var apiToken = process.env.API_KEY

checkMeteo = () => {
	let cityName = document.getElementById("cityname").value;
  let apiToken = process.env.API_KEY
	fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiToken}`)
  	.then(
    	res => res.json()
    )
    .then(
   		res => {
      	let data = res.data;
        document.getElementById("result").value = data.aqi;
      }
    )
    .catch(
    	err => {
      	console.error(err);
      }
    )
};
// CHIAMATA FETCH

function callApi(latitude, longitude) {
   fetch(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${apiToken}`)
    .then(
      res => res.json()
    )
    .then(
      data => {
        document.getElementById("result").value = data.data.aqi;
        document.getElementById("result_city").value = data.data.city.name;

       }
    )
    catch(err) { console.log(err);
	       })

   
}
// GEOLOCAL.

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
  
        callApi(latitude, longitude);
      });
    }
}


const posiz = document.getElementById('posiz');


posiz.onclick = function() {
    getLocation();
}



// Carousel 

var words = [ 'We all can do something to save our planet.', 'Think about it.', 'It\'s not hard.'];
var counter = 0;
var word = document.getElementById("keep");
setInterval(update_carousel_words, 1300);
function update_carousel_words() {
  word.innerHTML = words[counter];
  counter++;

  if (counter >= words.length) {
    counter = 0;
  }
}

