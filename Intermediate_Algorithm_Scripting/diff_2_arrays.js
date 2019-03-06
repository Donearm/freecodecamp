// Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

function diffArray(arr1, arr2) {
  let bothArr = arr1.concat(arr2);
  return bothArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
