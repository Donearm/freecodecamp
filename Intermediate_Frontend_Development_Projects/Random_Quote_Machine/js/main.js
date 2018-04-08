var colours = [
	"#B0171F",
	"#EEA2AD",
	"#EEA9B8",
	"#8B475D",
	"#FF3E96",
	"#EE30A7",
	"#DA70D6",
	"#8B4789",
	"#4B0082",
	"#0000EE",
	"#E6E6FA",
	"#CAE1FF",
	"#1E90FF",
	"#36648B",
	"#00C5CD",
	"#00CDCD",
	"#00C78C",
	"#458B74",
	"#43CD80",
	"#9BCD9B",
	"#006400",
	"#556B2F",
	"#ADFF2F",
	"#CDCDB4",
	"#FFFFE0",
	"#808069",
	"#FFF68F",
	"#EEE9BF",
	"#FFD700",
	"#FFC125",
	"#CD8500",
	"#FFE7BA",
	"#FFDEAD",
	"#9C661F",
	"#ED9121",
	"#FF6103",
	"#FF4500",
	"#8B2500",
	"#FF7256",
	"#FA8072",
	"#FFC1C1",
	"#F08080",
	"#EE3B3B",
	"#8B0000"
]

var quotes = [
  "The thought of every group is seen as arising out of its life conditions. Thus, it becomes the task of the sociological history of thought to analyse without regard for party biases all the factors in the actually existing social situation which may influence thought. This sociologically oriented history of ideas is destined to provide modern men with a revised view of the whole historical process. Karl Mannheim",
  "I believe in loyalty. When a woman reaches a certain age she likes, she should stick with it. Eva Gabor",
  "What evil is there in seeing a man possess a woman? Why, the beasts would be more free than we! It seems to me that that which is given us by nature for our own preservation ought to be worn round the neck as a pendant and in the hat for a medal. Pietro Aretino",
	"Once I moved about like the wind. Now I surrender to you and that is all. Geronimo",
	"Never, ever go near power. Don't become friends with anyone who has real power. It's dangerous. Stanley Kubrick",
	"I don't like doing interviews. There is always the problem of being misquoted or, what's even worse, of being quoted exactly. Stanley Kubrick"
]

function newQuote() {
	let randomNumber = Math.floor(Math.random() * (quotes.length));
	let randColour = Math.floor(Math.random() * colours.length);
	let quoteblock = document.getElementById("quote");
	quoteblock.innerHTML = quotes[randomNumber];
	quoteblock.css("background-color", randColour[randColour]);
}
