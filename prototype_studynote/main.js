var Constructor = function (name) {
  this.name = name;
};

Constructor.prototype.method1 = function () {};
Constructor.prototype.property1 = "Constructor Prototype Property";

var instance = new Constructor("Instance");
console.dir(Constructor);
console.dir(instance);

var arr = [1, 2];
Array.prototype.constructor === Array;
arr.__proto__.constructor === Array;
arr.constructor === Array;

var arr2 = new arr.constructor(3, 4);
console.log(arr2);

// method override
var Person = function (name) {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};

var iu = new Person("지금");
iu.getName = function () {
  return "바로 " + this.name;
};
console.log(iu.getName());
console.log(iu.__proto__.getName.call(iu));

// prototype chain
console.dir({ a: 1 });

var bob = {
  name: "bob",
  age: 31,
};

console.log(bob.__proto__ === Object.prototype);
console.log(bob.constructor === Object);
console.log(bob.__proto__.constructor === Object.prototype.constructor);
console.log(Object.prototype.constructor === Object);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.constructor);
