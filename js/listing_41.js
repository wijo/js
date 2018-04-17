// counter-service.js
//-----------------------------------------------------
var i = 0;

function get() {
    return i;
}

function increment() {
    return ++i;
}

//-----------------------------------------------------
console.log(increment()); // >> 1
console.log(increment()); // >> 2
console.log(get()); // >> 2
console.log(i); // >> 2
