// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//
// You can read about orbital periods on Wikipedia.
// 
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
//
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	arr.forEach(function(element) {
		let object = element.name;
		let altitude = element.avgAlt;
		// calculate the Orbital Period of current element
		let OP = orbitalPeriodOf(altitude, GM, earthRadius)
		// delete average altitude
		delete element.avgAlt;
		// add orbital period
		element.orbitalPeriod = OP;
	});
	return arr;
}

function orbitalPeriodOf(n, gm, r) {
	let a = 2 * Math.PI;
	return Math.round(a * Math.sqrt(Math.pow(n + r, 3) / gm))
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
