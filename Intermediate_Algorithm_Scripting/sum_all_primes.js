// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
	let acc = 0;
	// loop through all numbers up to and including the given one and 
	// check if they are primes. If so, sum them up
	for (let n = 2; n <= num; n++) {
		if (isPrime(n)) {
			acc += n;
		}
	}
	return acc;
}

function isPrime(v) {
	// check up until square root of v
	for (let i = 2; i <= Math.sqrt(Math.floor(v)); i++) {
		if (v % i === 0) {
			return false;
		}
	}
	return true;
}

sumPrimes(10);
sumPrimes(977);
