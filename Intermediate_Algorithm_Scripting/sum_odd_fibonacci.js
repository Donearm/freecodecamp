// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	let acc = [];
	const originalNum = num;
	let a = 1;
	let b = 0;
	let temp, total;

	if (num === 0 || num === 1) {
		return 1;
	}

	while (num > 0) {
		temp = a;
		a += b;
		b = temp;
		acc.push(a);
		num--;
	}
	
	// total is always off by 1, adding it at the end
	total = iterateSum(acc, originalNum) + 1;
	return total;
}

function iterateSum(arr, number) {
	let t = 0;
	for (let n = 0; n < arr.length; n++) {
		if (arr[n] % 2 !== 0) {
			if (arr[n] <= number) {
				t += arr[n];
			} else {
				return t;
			}
		}
	}
}


sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);
