function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

console.log(returnFalse() && returnFalse());

console.log(returnFalse() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = erson && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "홍길동" });
