// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

let varB = function funcB() {
  console.log("funcB");
};

varB();
// funcB ❌

// 2. 화살표 함수
let varC = () => {
  return 1;
};

let varD = (value) => value + 1;

let varF = (value) => {
  return value + 1;
};

console.log(varC());
console.log(varD(10));
console.log(varF(10));
