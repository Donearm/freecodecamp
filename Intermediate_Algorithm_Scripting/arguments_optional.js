// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// 
// var sumTwoAnd = addTogether(2);
// 
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.

function addTogether() {
	// check if we have less than 2 arguments
	if (arguments.length <= 1) {
		if (typeof arguments[0] !== 'number') {
			// if first and only argument is not a number, exit
			return undefined;
		}
		// if it is a number, save it in a variable and return a 
		// function asking for a second argument
		let a = arguments[0];
		return function(secondArg) {
		  if (typeof a !== 'number' || typeof secondArg !== 'number') {
			// if either argument is not a number, exit
			return undefined;
		  } else {
			// both arguments are numbers, return their sum
			return a + secondArg;
		  }
		}
	// we have already 2 or more arguments
	} else {
		for (let i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] !== 'number') {
				// as soon as one of the arguments is found not being a 
				// number, exit
				return undefined;
			}
		}
		// all arguments are numbers, return their sum
		return arguments[0] + arguments[1];
	}
	// general catch all
	return undefined;
}

addTogether(2,3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
addTogether(2)([3]);
