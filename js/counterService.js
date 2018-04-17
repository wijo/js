// The module is run in its own lexical scope
// -> exports is an empty object passed to the module
var i = 0;
exports.get = function() { return i; };
exports.increment = function() { return ++i; };
