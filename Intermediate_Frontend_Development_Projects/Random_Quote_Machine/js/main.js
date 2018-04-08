var colours = [
	"#B0171F",
	"#8B475D",
	"#EE30A7",
	"#8B4789",
	"#4B0082",
	"#0000EE",
	"#36648B",
	"#458B74",
	"#006400",
	"#9C661F",
	"#FF4500",
	"#8B2500",
	"#EE3B3B",
	"#8B0000"
]

var quotes = [
	"The thought of every group is seen as arising out of its life conditions. Thus, it becomes the task of the sociological history of thought to analyse without regard for party biases all the factors in the actually existing social situation which may influence thought. This sociologically oriented history of ideas is destined to provide modern men with a revised view of the whole historical process.<br>Karl Mannheim",
	"I believe in loyalty. When a woman reaches a certain age she likes, she should stick with it.<br>Eva Gabor",
	"What evil is there in seeing a man possess a woman? Why, the beasts would be more free than we! It seems to me that that which is given us by nature for our own preservation ought to be worn round the neck as a pendant and in the hat for a medal.<br>Pietro Aretino",
	"Once I moved about like the wind. Now I surrender to you and that is all.<br>Geronimo",
	"Never, ever go near power. Don't become friends with anyone who has real power. It's dangerous.<br>Stanley Kubrick",
	"I don't like doing interviews. There is always the problem of being misquoted or, what's even worse, of being quoted exactly.<br>Stanley Kubrick"
]

function newQuote() {
	let randomNumber = Math.floor(Math.random() * (quotes.length));
	let randColour = Math.floor(Math.random() * colours.length);
	let quoteblock = document.getElementById("quote");
	quoteblock.innerHTML = quotes[randomNumber];
	$("#quote-container").css("background-color", colours[randColour]);

}
