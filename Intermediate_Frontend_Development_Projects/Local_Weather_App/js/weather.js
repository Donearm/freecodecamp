/* Check if browser supports geolocation */
if ("geolocation" in navigator) {
	$('.js-geolocation').show();
} else {
	$('.js-geolocation').hide();
}

function loadWeather(location, woeid) {
	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'c',
		success: function(weather) {
			html =
				'<p' + weather.temp + '&deg;' + weather.units.temp + '</p>';

			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html("<p>An error occurred</p>");
		}
	});
};


$(document).ready(function() {
	loadWeather('Krakow', '');
});
