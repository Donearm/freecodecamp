function destroyer(arr) {
	// Build an array from the arguments
	let args = Array.prototype.slice.call(arguments);
	arr = arr.filter(function(el) {
	  // filter arr by excluding those not included in args
	return !args.includes(el);
	})
	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
