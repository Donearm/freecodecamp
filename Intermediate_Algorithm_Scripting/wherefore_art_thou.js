// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  // Only change code below this line
  let k = Object.keys(source);
  return collection.filter(function(obj) {
    for (let i = 0; i < k.length; i++) {
      if (!obj.hasOwnProperty(k[i]) || obj[k[i]] !== source[k[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
