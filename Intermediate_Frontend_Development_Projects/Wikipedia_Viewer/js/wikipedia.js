
$(document).ready(function() {

	$("#submitbutton").click(function(event) {
		let search = $("input").serializeArray();
		console.log(search[0].value);
		$.ajax({
			type: "GET",
/*			url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?", */
			url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + encodeURIComponent(search[0].value) + "&callback=?",
			contentType: "application/json; charset=utf-8",
			async: false,
			dataType: "json",
			success: function (data, textStatus, jqXHR) {
				console.log(data);
				let wikibody = data.parse.text["*"];
				let wikititle = data.parse.title;
				let blurb = $('<div></div>').html(wikibody);
				console.log(url);

				// Point all href attributes to english Wikipedia's 
				// corresponding pages
				blurb.find("a").each(function() {
					let newUrl = $(this).attr('href').replace('/wiki', 'https://en.wikipedia.org/wiki');
					$(this).attr('href', newUrl);
				});

				// remove occasional cite errors
				blurb.find('.mw-ext-cite-error').remove();
				// remove any references
				blurb.find('sup').remove();

				$("#articletitle").html(wikititle);
				$("#article").html(blurb);
				console.log(data);
			},
		});
		event.preventDefault();
	});
});
