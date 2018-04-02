var quotes = [
  "The thought of every group is seen as arising out of its life conditions. Thus, it becomes the task of the sociological history of thought to analyse without regard for party biases all the factors in the actually existing social situation which may influence thought. This sociologically oriented history of ideas is destined to provide modern men with a revised view of the whole historical process. Karl Mannheim",
  "I believe in loyalty. When a woman reaches a certain age she likes, she should stick with it. Eva Gabor",
  "What evil is there in seeing a man possess a woman? Why, the beasts would be more free than we! It seems to me that that which is given us by nature for our own preservation ought to be worn round the neck as a pendant and in the hat for a medal. Pietro Aretino",
  "Once I moved about like the wind. Now I surrender to you and that is all. Geronimo"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quote").innerHTML = quotes[randomNumber];
}
