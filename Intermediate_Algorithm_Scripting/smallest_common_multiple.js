// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
	return range(Math.min(...arr), Math.max(...arr)).reduce(lcm);
}

// make a range of all numbers between two
function range(a, b) {
	let r = [];
	for (let i = a; i <= b; i++) {
		r.push(i);
	}
	return r;
}

// Greatest common divisor calculator
function gcd(s, e) {
	while (e !== 0) {
		[s, e] = [e, s % e];
	}
	return s;
}

// Least common multiple calculator
function lcm(s, e) {
	return (s * e) / gcd(s, e)
}

smallestCommons([1,5]);
smallestCommons([5,1]);
smallestCommons([2, 10]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);
