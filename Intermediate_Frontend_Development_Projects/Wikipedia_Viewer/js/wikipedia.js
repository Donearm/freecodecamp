$(document).ready(function() {

	$.ajax({
		type: "GET",
		url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
		contentType: "application/json; charset=utf-8",
		async: false,
		dataType: "json",
		success: function (data, textStatus, jqXHR) {
			let wikibody = data.parse.text["*"];
			let wikititle = data.parse.title;
			$("#articletitle").html(wikititle);
			$("#article").html(wikibody);
			console.log(wikititle);
		},
	});
});
