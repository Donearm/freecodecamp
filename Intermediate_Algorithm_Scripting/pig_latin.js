// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
	let newStr = "";
	let vowelRgx = /[aeiou]/gi;
	let vowels = ["a", "e", "i", "o", "u"];
	for (let v = 0; v < vowels.length; v++) {
		if (str.startsWith(vowels[v])) {
			newStr = str + "way";
		}
	}
	
	if (str.match(vowelRgx) === null) {
		newStr = str + "ay";
	} else {
		newStr = str.replace(/([bcdfghjklmnpqrstvwxyz]+)(\w+)/, replacer);
	}
	return newStr;
}

function replacer(match, p1, p2) {
	return [p2, p1, "ay"].join("")
}
 
translatePigLatin("consonan");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("rythm");
