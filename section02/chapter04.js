// 1. Spread 연산자
// -> Spread : 흙뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 뿌려주는 역할

// 1. 배열
let arr1 = [1, 2, 3];

let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
console.log(arr2);

let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

// 2. 갹체
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// -> Rest 변수의 이름은 아무거나 사용해도 상관없고 ...만 붙으면 됨.

function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
