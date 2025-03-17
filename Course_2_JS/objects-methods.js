var car = {};
car.color = "red";
car.mileage = 9883;
console.log("car");

car.turnKey = function () {
  console.log("The engine is running.");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log("car");
car.turnKey();
car.lightsOn();
