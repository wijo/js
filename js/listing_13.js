var f = function (b) {
    var c = 0;
    var g = function () {
        var d = 3;
        c = b * d + a;
    };
    g();
    return c;
};

var a = 12;
console.log("f: " + f(7));

var h = function () {
    var a = 14;
    return f(7);

};

console.log("h: "+h());
