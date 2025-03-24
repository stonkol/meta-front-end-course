// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var Bob_intern = new Worker(0, 10, "Bob", 21, 100);
  Bob_intern.goToWork();
  return Bob_intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var Alice_manager = new Worker(100, 30, "Alice", 30, 120);
  Alice_manager.goToWork();
  return Alice_manager;
}

// console.log(intern());
// Worker { name: 'Bob', age: 21, energy: 100, xp: 10, hourlyWage: 10 }

// console.log(manager());
// Worker { name: 'Alice', age: 30, energy: 120, xp: 110, hourlyWage: 30 }
