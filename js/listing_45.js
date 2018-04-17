


// Reads the module file based on the passed name and creates
// dynamically a function which is immediately executed
function require(name) {
    var code = function(name){
        var req = new XMLHttpRequest();
        req.overrideMimeType("text/javascript");
        req.open("GET", "modules/" + name + ".js", false);
        req.send(null);
        return req.responseText;
    };

    var exports = {};
    code(exports);
    return exports;
}

//-----------------------------------------------------
var counter = require("counterService");
console.log(counter.increment()); // >> 1


// Example of a readFile for the browser
// -> Note that the file must be loaded synchronously
function readFile(name) {
    return function(exports) {var i = 0;
    exports.get = function() { return i; };
    exports.increment = function() { return ++i; };}
}

// Example of a readFile for node.js
// -> Note that the module fs is required; if you build your own
// module system, you have to rename your require function!
function readFile(name) {
    var fs = require("fs");
    var content = fs.readFileSync("modules/" + name + ".js");
    return content;
}
