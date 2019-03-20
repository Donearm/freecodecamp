// Fill in the object constructor with the following methods below:

//    getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
	let fullName = firstAndLast;
	this.getFullName = function() {
		return fullName;
	};
	this.getFirstName = function() {
		return fullName.split(" ")[0];
	};
	this.getLastName = function() {
		return fullName.split(" ")[1];
	};
	this.setFirstName = function(n) {
		fullName = n + " " + fullName.split(" ")[1];
	}
	this.setLastName = function(n) {
		fullName = fullName.split(" ")[0] + " " + n;
	}
	this.setFullName = function(n) {
		let s = n.split(" ");
		fullName = s[0] + " " + s[1];
	}
	return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
Object.keys(bob).length;
bob instanceof Person;
bob.firstName;
bob.lastName;
bob.getFirstName();
bob.getLastName();
bob.getFullName();

bob.setFirstName("Haskell");
bob.getFullName();

bob.setLastName("Curry");
bob.getFullName();

bob.setFullName("Haskell Curry");
bob.getFullName();

bob.setFullName("Haskell Curry");
bob.getFirstName();

bob.setFullName("Haskell Curry");
bob.getLastName();
