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
