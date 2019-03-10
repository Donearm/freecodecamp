// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let r = /\s+|\_+/gi;
  let tempStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let newStr = tempStr.replace(r, '-');
  return newStr.toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
