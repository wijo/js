var incrementer = function (init) {
    var c = Number(init);
    return function(){
        return c = c + 1;
    };
};

var f = incrementer(12);
console.log(f());
console.log(f());

var g = incrementer("6");
console.log(g());
console.log(f());
