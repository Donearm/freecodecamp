// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
	let acc = [];
	for (let c = 0; c < str.length; c++) {
		acc.push(convertToEntity(str[c]));
	}
	return acc.join("");
}

function convertToEntity(char) {
	switch (char) {
		case '&': return '&amp;';
		case '<': return '&lt;';
		case '>': return '&gt;';
		case '\"': return '&quot;';
		case "\'": return '&apos;';
		default: return char;
	}
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");
