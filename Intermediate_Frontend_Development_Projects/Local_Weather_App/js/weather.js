/* Check if browser supports geolocation */
if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(showPosition);
} else {
	$("#weather").html("<p>Geolocation is not supported by this browser, sorry</p>");
}

function showPosition(position) {
	$("#weather").html(position.coords.latitude + " " + position.coords.longitude);
};
