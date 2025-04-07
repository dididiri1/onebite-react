function orderFood() {
  setTimeout(() => {
    const food = "치킨";
    callback(food);
  }, 3000);
}

function cooldwonFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 3000);
}

function freezedFood(food) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);
  cooldwonFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezedFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
