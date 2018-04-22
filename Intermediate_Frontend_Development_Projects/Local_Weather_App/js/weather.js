/* Check if browser supports geolocation */
if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(showPosition);
} else {
	$("#weather").html("<p>Geolocation is not supported by this browser, sorry</p>");
}

function celsiusToF(temp) {
	let fTemp = Math.floor(temp * 9 / 5 + 32);
	return fTemp;
}

function fahrenheitToC(temp) {
	let cTemp = Math.floor(temp * 1.8 + 32);
	return cTemp;
}

function showPosition(position) {
	fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			let tempC = json.main.temp;
			let tempF = celsiusToF(tempC);
			let toggleT = false;
			$("#weather").html("<h2>In</h2> <h1>" + json.name + "</h1> <h2>we have</h2> <h1>" + json.weather[0].description + "</h1>");
			$("#temp").children("h2").text("Temperature is " + tempC);
			$("#tempswitch").on('click', function() {
				toggleT = !toggleT;
				if (toggleT) {
					$("#temp").children("h2").text("Temperature is " + tempF);
					$("#temp").children("a").text("°F");
				} else {
					$("#temp").children("h2").text("Temperature is " + tempC);
					$("#temp").children("a").text("°C");
				}
			});
			$("#weathericon").html("<img src=\"" + json.weather[0].icon + "\">");
		});
};

