// 1. Falsy한 값
// 결론적으로 undefined, nll 등등 이런 값들은 Falsy한 값으로써 조건문에서는 거짓으로 평가 된다.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// 2. Truuthy 한 값
// -> 7가지 Falsu 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("Truthy");
}

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("pserson의 값이 없음");
    return;
  }

  console.log(person.name);
}

let person = { name : "홍길동" };
printName(person);