// 1. 콜백 내부에서 외부 데이터 사용
const fruits = ["apple", "banana", "peach"];
const $ul = document.createElement("ul");

const alertFruit = function (fruit) {
  return function () {
    alert("your choice is " + fruit);
  };
};

fruits.forEach(function (fruit) {
  const $li = document.createElement("li");
  $li.innerText = fruit;
  $li.addEventListener("click", alertFruit(fruit));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[1]);

// 2. 정보 은닉
const car = {
  fuel: Math.ceil(Math.random() * 10 + 10),
  power: Math.ceil(Math.random() * 3 + 2),
  moved: 0,
  run: function () {
    const km = Math.ceil(Math.random() * 6);
    const wastedFuel = km / this.power;

    if (this.fuel < wastedFuel) {
      console.log("이동 불가");
      return;
    }

    this.fuel -= wastedFuel;
    this.moved += km;
    console.log(km + "km 이동 (총 " + this.moved + "km)");
  },
};

car.run();
car.fuel = 10000; // 무작위로 정해지는 변수를 수정할 수 있음.

const createCar = function () {
  let fuel = Math.ceil(Math.random() * 10 + 10);
  const power = Math.ceil(Math.random() * 3 + 2);
  let moved = 0;

  return {
    get moved() {
      return moved;
    },

    run: function () {
      const km = Math.ceil(Math.random() * 6);
      const wastedFuel = km / power;

      if (this.fuel < wastedFuel) {
        console.log("이동 불가");
        return;
      }

      fuel -= wastedFuel;
      moved += km;
      console.log(km + "km 이동 (총 " + this.moved + "km). 남은 연료: " + fuel);
    },
  };
};

const newCar = createCar();

// run과 게터를 사용한 moved 변수 외에는 접근이 불가능함.
newCar.run();
console.log(newCar.moved);
console.log(newCar.fuel);
console.log(newCar.power);

// 3. 부분 적용 함수
const add = function () {
  let result = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    result += arguments[i];
  }

  return result;
};

const addPartial = add.bind(null, 1, 2, 3, 4, 5); // bind의 경우 this 값을 변경해야 하므로 제약이 존재함.
console.log(addPartial(6, 7, 8, 9));

const partial = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];

  if (typeof func !== "function") {
    throw new Error("첫 번째 인자가 함수가 아닙니다.");
  }

  return function () {
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    const restArgs = Array.prototype.slice.call(arguments);
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add2 = function () {
  let result = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    result += arguments[i];
  }

  return result;
};

const addPartial2 = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial2(6, 7, 8, 9));

// 4. 커링 함수
const curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

const getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));
console.log(getMaxWith10(25));
