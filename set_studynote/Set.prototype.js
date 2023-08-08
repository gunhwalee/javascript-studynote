/*
set

Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

const setA = new Set([1, 3, 5]);
const setB = new Set([2, 4, 5]);

console.log(setA.intersection(setB));

Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

console.log(setA.union(setB));

Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

console.log(setA.difference(setB));

Set.prototype.isSuperset = function (subset) {
  return [...subset].every((value) => this.has(value));
};

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([2, 4]);

console.log(setC.isSuperset(setD));
console.log(setD.isSuperset(setC));
*/

/*
primitive vs object

let a = 5;
let b = a;
b += 2;
console.log(a, b);

const obj1 = { value: 3 };
const obj2 = obj1;
obj2.value += 1;
console.log(obj1, obj2);
*/

/*
const box = document.querySelector(".box");
const toggleBtn = document.querySelector(".toggle");

const toggle = (function () {
  let isShow = false;

  // ① 클로저를 반환
  return function () {
    box.style.display = isShow ? "block" : "none";
    // ③ 상태 변경
    isShow = !isShow;
  };
})();

// ② 이벤트 프로퍼티에 클로저를 할당
toggleBtn.onclick = toggle;

const increaseBtn = document.querySelector(".increase");
const pelement = document.querySelector(".count");

const increase = (function () {
  let count = 0;

  return function () {
    return ++count;
  };
})();

increaseBtn.onclick = function () {
  pelement.textContent = increase();
};

const div = document.querySelector(".event");

div.addEventListener("click", (event) => {
  console.log("target : ", event.target.innerText);
  console.log("current : ", event.currentTarget.innerText);
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.innerText);
  }
});
*/

/*
function a() {
  console.log(b);
  var b = "bbb";
  console.log(b);
  function b() {}
  console.log(b);
}

a();

function abc() {
  var x = 1;
  console.log("abc : ", x);
}
abc();
console.log("global : ", x);
*/
