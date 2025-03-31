// Task 1
// In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an object's own properties.
// Create a function called `logDairy`. Within it, console log each of the items in the dairy array, using the for...of loop.
// After you create this function, call it as `logDairy()` to see the output on the console.

function logDairy() {
  const dairy = [
    "cheese",
    "sour cream",
    "milk",
    "yogurt",
    "ice cream",
    "milkshake",
  ];
  for (var item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2
// Create a function called `birdCan`, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as `birdCan()` to see the output on the console.
// Remember, you need to console log both the key and the value of each of the bird object's properties.

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const prop in bird) {
    if (Object.prototype.hasOwnProperty.call(bird, prop))
      console.log(`${prop}: ${bird[prop]}`);
  }
}
birdCan();

// Task 3
// Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.

function animalCan() {
  for (let bird_animal in bird) {
    console.log(bird_animal + ": " + bird[bird_animal]);
  }
}

animalCan();
