var bob = {
    name: "Bob", // <prop-name>:<prop-value>
    age: 25
};
// Access properties (get/set)
console.log(bob.name); // >> Bob
bob.age = bob.age + 1;
bob.age++;
console.log(bob.age);
// Set a new property
bob.hairColor = "black";
console.log(bob.hairColor); // >> black
// Get a ’new’ property
console.log(bob.lastname); // >> undefined
// Put property name in quotes if it is not a valid variable name
var alice = {
    name: "Alice",
    1: "hello",
    'year of birth': 1991
};
// Access properties by dot-notation or bracket-notation
console.log(alice.name); // >> Alice
console.log(alice['name']); // >> Alice
console.log(alice['year of birth']); // >> 1991
console.log(alice['1']);
console.log(alice[1]);
alice['lastname'] = 'Wonderland';
console.log(alice.lastname);
