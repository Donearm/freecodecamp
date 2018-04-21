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
			$("#weather").html("<p>In " + json.name + " we have " + json.weather[0].description + "</p>");
			$("#temp").children("p").text("Temperature is " + tempC);
			$("#tempswitch").on('click', function() {
				toggleT = !toggleT;
				if (toggleT) {
					$("#temp").children("p").text("Temperature is " + tempF);
					//$("#tempswitch").text('F');
					$("#temp").children("a").text("F");
				} else {
					$("#temp").children("p").text("Temperature is " + tempC);
					$("#temp").children("a").text("C");
					//$("#tempswitch").text("C");
				}
			});
			$("#weathericon").html("<img src=\"" + json.weather[0].icon + "\">");
		});
};

