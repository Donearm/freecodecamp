/* Check if browser supports geolocation */
if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(showPosition);
} else {
	$("#weather").html("<p>Geolocation is not supported by this browser, sorry</p>");
}

async function fetchWeather(lati, long) {
	const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lati}&lon=${long}`;
	const fetchResult = fetch(URL);
	const response = await fetchResult;
	const jsonData = await response.json();
	return jsonData;
}

function showPosition(position) {
	let weather = fetchWeather(Math.floor(position.coords.latitude), Math.floor(position.coords.longitude));
	console.log(weather);

	$("#weather").html(position.coords.latitude + " " + position.coords.longitude);
};
