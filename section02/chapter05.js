let o1 = { name: "홍길동" };
let o2 = o1;

o2.name = "김구라";

console.log("o1:" + JSON.stringify(o1));

console.log("o2:" + JSON.stringify(o2));
