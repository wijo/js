var a = "Hello ";

var f = function (b) {
    if(b)
        var c = "JS";
    else
        var c = "World";
    var d = a + c;
    console.log(d);
};

f(true);
console.log(typeof b);
console.log(b);
