var a = ["blue", "red", , "black"];
console.log(a.length);
a['favorite'] = "pink";
console.log(a['favorite']);
console.log(a.length);

console.log();
for (var i = 0; i < a.length; i++) {
    console.log(i + " -> " + a[i]);
}
console.log();
a.forEach(function (item, index) {
    console.log(index + " -> " + item);
});

console.log();
for (var i in a) {
    console.log(i + " -> " + a[i]);
}
