// function call vs method
var obj1 = {
  outer: function () {
    console.log("outer!", this);

    var innerFunc = function () {
      console.log("inner!", this);
    };

    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};

obj1.outer();

// arrow function
var arrow = {
  outer: function () {
    console.log(this);

    var innerFunc = () => {
      console.log("arrow", this);
    };

    innerFunc();
  },
};

arrow.outer();

// callback function
setTimeout(function () {
  console.log(this);
}, 3000);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x);
});

document.body.innerHTML += "<button id='a'>클릭</button>";
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e);
});

// contructor function
var Cat = function (name, age) {
  this.bark = "Meow";
  this.name = name;
  this.age = age;
};

var choco = new Cat("초코", 7);
var nabi = new Cat("나비", 5);
console.log(choco, nabi);

// Explict this

var explictFunc = function (a, b, c) {
  console.log(this.a, a, b, c);
};
var obj3 = {
  a: 2,

  method: explictFunc,
};

explictFunc.call({ a: 1 }, 4, 5, 6);
explictFunc.apply({ a: 1 }, [4, 5, 6]);
obj3.method.call({ a: 10 }, 4, 5, 6);
var bindFunc = explictFunc.bind({ a: "bind" }, 7);
bindFunc(8, 9);
bindFunc("b", "c");

// call/apply example for contructor
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
  console.log(this);
}

function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
  console.log(this);
}

var by = new Student("보영", "female", "단국대");
var bs = new Employee("봉순", "female", "vanilla");
