// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
	let result = [];
	for (let i = 0; i <= arr.length; i++) {
		if (func(arr[i])) {
			// If func returns true, take a copy of the original array 
			// from the current element till the end and break the for 
			// loop
			result = arr.slice(i);
			break
		}
	}

  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3], function(n) {return n > 0;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
