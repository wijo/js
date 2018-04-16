function Person(name, age) {
// Object property (public property)
    this.name = name;
// Local variable (private property)
    var yearOfBirth = new Date().getFullYear() - age;
    this.getAge = function () {
        return new Date().getFullYear() - yearOfBirth;
    }
}

Person.prototype.describe = function () {
// Access to name and getAge(), but no acces to yearOfBirth
    console.log(this.name + " is " + this.getAge() + " years old");
};
var bob = new Person("Bob", 25);
bob.do = function(){
    console.log(this.name + " " + this.getAge()  + " " + this.yearOfBirth)
};
bob.describe();
bob.do();
