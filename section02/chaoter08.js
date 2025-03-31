// 5가지 요소 순화 및 탐색 메소드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});

const findIndex2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findIndex);

// 5. indexOf vs findIndex
// indexOf 메서드는 특정 값을 배열에서 찾을때 얕은 비교로만 진행하기 때문에 객체 값을 찾지 못하고
// 반변 findIndex 메서드는 콜백함수를 이용해서 우리가 작접 프로퍼티의 값을 기준으로 비교시킬 수가
// 있기 때문에 객체 값도 조건식만 잘 만들어 주면 쉽게 찾아낼 수 있다는 장점이 있다.
let objectArr = [{ name: "춘식이" }, { name: "홍길동" }];

console.log(objectArr.indexOf({ name: "홍길동" }));

console.log(objectArr.findIndex((item) => item.name === "홍길동"));

// 6. find
// findIndex와 유사함. 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소 자체를 반환
let arr5 = [{ name: "춘식이" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "홍길동");
