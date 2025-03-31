// 6가지의 요소 조작 메소드

// 1. push
// 배열의 맨 뒤에 새로운 요소룰 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);

console.log(arr1);

// 2. pop
// 배열의 맨 뒤애 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

console.log(popedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftItem = arr3.shift();
console.log(shiftItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메소드
let arr4 = [1, 2, 3];
const newLength = arr4.unshift(0);
console.log(newLength, arr4);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 배열의 끝까지 자를거면 생략 가능
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// 6. concat
// 두개의 서로 다릉 배열을 이어 붙여서 새로운 배열로 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);
console.log(concatArr);
