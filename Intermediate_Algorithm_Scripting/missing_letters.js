// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	let newStr = undefined; // initialize a new string
	for (let i = 0; i < str.length; i++) {
		// check if the next char ASCII code - the current char ASCII 
		// code is larger than 1. That means there's a char skipped (it 
		// should equal to 2, basically)
		if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
			// extrapolate such letter from char ASCII code
			newStr = String.fromCharCode(str.charCodeAt(i)+1);
		}
	}
	return newStr;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
