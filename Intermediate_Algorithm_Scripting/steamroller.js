// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	let merged = [];
	merged = flattener(arr, merged);
	return merged;
}

function flattener(a, accumulator) {
	if (!a) {
		// if a doesn't exist, return an empty array
		return [];
	}
	for (let e = 0; e < a.length; e++) {
		if (a[e].constructor === Array) {
			accumulator.concat(flattener(a[e], accumulator));
		} else {
			accumulator.push(a[e]);
		}
	}
	return accumulator;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
