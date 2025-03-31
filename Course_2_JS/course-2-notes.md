# Course 2 JavaScript

- It is a powerful tool, even can create apps. JavaScript is a versatile language that can be used for both front-end and back-end development.

- It is so common than even maybe your coffee maker has JavaScript in it. Your car has JavaScript in it. Some people think that JS is not a serious language.

- It is a language that can be used for both front-end and back-end development.

- It can sometimes be inconsistent compared to other languages.

## 1. Module 1: Intro JS

### Variables

Use the console on the browser to test your code.

```js
"john"
var person;
var person = "John";
console.log("hello", person);
```

Don't need to write again var when assigne it a new parameter. because it already knows the type of variable.

### Data Types

JavaScript has several data types, including:

- **Strings**: A sequence of characters.
- **Numbers**: A numeric value.
- **Booleans**: A logical value that can be either true or false.
- **Arrays**: An ordered collection of values.
- **Objects**: A collection of key-value pairs.
- **BigInt**: A numeric value that can be larger than the maximum safe integer.
- **Undefined**: A variable that has not been assigned a value.
- **Null**: A variable that has been assigned a value of null.
- **Symbol**: A unique and immutable data type that can be used as an identifier for object properties.

### Operators

JavaScript has several operators, including:

- **Arithmetic Operators**: Used to perform arithmetic operations on numbers. `+`, `-`, `*`, `/`, `%`, `**`.
- **Comparison Operators**: Used to compare values. `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`.
- **Logical Operators**: Used to combine multiple conditions. `&&`, `||`, `!`.
- **Assignment Operators**: Used to assign values to variables. `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
- **Bitwise Operators**: Used to perform bitwise operations on numbers. `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- **String Operators**: Used to concatenate strings. `+`.
- **Type Operators**: Used to check the type of a value. `typeof`, `instanceof`.

### Conditional Statements

- **if**: Executes a block of code if a condition is true.
- **else**: Executes a block of code if a condition is false.
- **switch**: Executes a block of code based on the value of an expression.

#### If Statements

```js
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
}
```

#### Switch Statements

```js
var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Do something');
       break;
   case 'Friday':
       console.log('Do something');
       break;
   case 'Sunday':
       console.log('Do something');
       break;
}
```

### Loops

- **for**: Executes a block of code a specified number of times.
- **while**: Executes a block of code while a condition is true.
- **do...while**: Executes a block of code at least once, then continues to execute it while a condition is true.

#### For Loop

```js
for (initialization; condition; increment/decrement) {
  // code to execute in each iteration
}
```

#### While Loop

```js
var counter = 10;

while(counter > 0){
  console.log(counter)
  counter--;
}```

#### Do...While Loop

```js
do {
  // code to execute at least once, then continue while condition is true
} while (condition);
```

#### Nested Loops

```js
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```
```js
for (var year = 2023; year < 2025; year++) {
  console.log(year);
  for (var month = 1; month <= 12; month++) {
    console.log(month);
  }
}
```

### 2. Arrays, Objects, and Functions

#### 2.1 Functions

##### Example 1

```js
function giveMeKiwi(nm) {
  console.log(nm, ' kiwi');
}

giveMeKiwi(nm);
```
##### Example 2

Here are my arr items with a number in front of each item:

```js
// function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```

##### Example 3

Here are even add one or more conditions, such as:

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
```

### Objects

#### Brackets notation

Objects can also be created using the object literal syntax and the brackets notation.

```js
var person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(person['name']); // Output: John
console.log(person['age']); // Output: 30
console.log(person['city']); // Output: New York
```

#### Dot notation

Objects can also be created using the object literal syntax and the dot notation.

```js
var person = {};
person.name = 'John';
person.age = 30;
person.city = 'New York';

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// can both access and update properties on objects using either the dot notation or the brackets notation.

person["age"] = 31;
person.age = 32;
```

### Arrays are Objects

Arrays are objects in JavaScript. They have properties and methods just like objects. For example, the `length` property returns the number of elements in an array.

```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
console.log(colors.length); // Output: 7
```

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.
```js
colors.push('black'); // add item
colors.pop(); // remove last item
```

### Math object

Math object provides a set of mathematical functions and constants.

#### Number constants

```js
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045
console.log(Math.SQRT2); // Output: 1.4142135623730951
```

#### Rounding Methods

```js
console.log(Math.round(3.5)); // Output: 4
console.log(Math.floor(3.5)); // Output: 3
console.log(Math.ceil(3.5)); // Output: 4
console.log(Math.trunc(3.5)); // Output: 3 – trims the decimal, leaving only the integer
```
#### Arithmetic and calculus methods

```js
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.abs(-10)); // Output: 10
console.log(Math.log(10)); // Output: 2.302585092994046
```

#### Random

```js
console.log(Math.random()); // Output: a random number between 0 and 1
console.log(Math.random() * 10); // Output: a random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // Output: a random integer between 0 and 9
```

#### String

```js
'Hello, World!'.length; // Output: 13
console.log('Hello, World!'.toUpperCase(); // !
'Hello, World!'.toLowerCase(); // hello, world!
'Hello, World!'.charAt(0); // H
'Hello, World!'.indexOf('World'); //  7
'Hello, World!'.replace('World', 'Universe'); // Hello, Universe!
```

```js
"ho-ho-ho".indexOf('o'); // 1
"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```

> [!important] Remember
> Use the object literal syntax: {}.
> Use the array literal syntax: [].

### typeof

```js
typeof 42; // 'number'
typeof 'hello'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof null; // 'object'
typeof {}; // 'object'
typeof []; // 'object'
typeof function() {}; // 'function'
typeof h; // undefined (because h is not defined)
```

### 1.3 Bugs And Error

In JS you can use try catch blocks to handle errors.

#### 1.3.1 Try catch blocks

```js
try {
  throw new Error();
} catch (err) {
  console.log(err);
}
console.log('This line now runs.');
```

```js
try {
  console.log(a + b)
} catch (err) {
  console.log(err);
  console.log('An error occurred.');
  console.log('The error was saved in the error log.');
}
```

#### 1.3.2 Syntax, logical and runtime errors

- Here are some of the most common errors in JavaScript:

1. ReferenceError  `Uncaught ReferenceError: a is not defined`
2. SyntaxError `Uncaught SyntaxError: Unexpected token +`
3. TypeError `Uncaught TypeError: Cannot read properties of undefined (reading 'length')`
4. RangeError `Uncaught RangeError: Maximum call stack size exceeded`

- There are some other errors in JavaScript. These other errors include:

1. AggregateError `Uncaught AggregateError: Multiple errors`
2. Error `Uncaught Error: An error occurred`
3. InternalError `Uncaught InternalError: Internal error`
4. URIError `Uncaught URIError: URI malformed`

#### 1.3.3 Undefined, null and empty values

Undefined, null and empty values are all considered falsy values in JavaScript. This means that they will evaluate to false when used in a boolean context.

##### **Undefined**
is a primitive value that represents an *uninitialized* variable or a *missing property*.

```js
var noise;
console.log(noise); // undefined
```

##### **Null**
is a primitive value that represents the *absence of an object*.

```js
var letters = 'abc';
letters.match(/d/); // null
```

##### **Empty**
Empty values are values that **have no content**, such as an empty string or an empty array.

```js
var emptyArray = [];
console.log(emptyArray.length); // 0
console.log(emptyArray[0]); // undefined
```

> [!info] Best Practices
> always assign your variables with values when you declare them.

## Module 3 Functional Programming

Functional programming is a programming paradigm that emphasizes the use of functions as the primary building blocks of programs. It is based on the idea that functions are first-class citizens, meaning that they can be passed as arguments to other functions, returned as values from functions, and assigned to variables.

Functional programming is often used in conjunction with other programming paradigms, such as object-oriented programming, to create more modular and reusable code.

### 3.1 Return Values from Function

A function that returns a double of the number

```js
function double(num) {
  return num * 2;
}
```

A function that builds an object with a specific value
```js
function objectMaker(val){
  return{
    prop:val
  }
}
```

```js
objectMaker(20); //{prop: 20}
```

can even combine custom function calls as follow
```js
objectMaker( doubleIt(100) ); //{prop: 200}
```

### 3.2 Scope

Scope refers to the visibility and accessibility of variables within a program. In JavaScript, there are two types of scope: global scope and local scope.

Global scope refers to variables that are declared outside of any function or block. These variables are accessible from anywhere in the program.

Local scope refers to variables that are declared inside a function or block. These variables are only accessible within the function or block in which they are declared.

```js
var globalVar = 'I am global';

function myFunction() {
  var localVar = 'I am local';
  console.log(globalVar); // 'I am global'
  console.log(localVar); // 'I am local'
}

console.log(globalVar); // 'I am global'
console.log(localVar); // ReferenceError: localVar is not defined
```

### 3.3 The functional programming paradigm

There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.

#### 3.3.1 Functional programming (FP)

In FP, we use functions extensively and often work with immutable values. Immutability is a key principle, meaning variables are not modified after their initial assignment.

- When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.

- In functional programming, functions return new values and then use those values somewhere else in the code.

Another style is object-oriented programming (OOP).

#### 3.3.2 Object-oriented programming (OOP)

OOP is a programming paradigm that uses objects to represent real-world entities and their interactions. OOP emphasizes the use of classes and objects to organize code and promote code reuse.

- In OOP, objects are instances of classes, which define their properties and behaviors.

- OOP promotes code reuse through inheritance and polymorphism.

- OOP also supports encapsulation, which means that the internal state of an object is hidden from the outside world.

#### 3.3.3 First-class functions

It is often said that functions in JavaScript are “first-class citizens”. What does that mean? It means that a function in JavaScript is just another value that we can:

1. pass to other functions
2. save in a variable
3. return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different from a string or a number.

#### 3.3.4 Pure functions and side-effects

Pure functions are functions that always return the same output for the same input and have no side effects. Side effects are changes to the program state that are not reflected in the function's return value.

- Pure functions are easier to reason about and test because they do not depend on external state.
- Side effects can make code harder to reason about and test because they can change the program state in unexpected ways.
- To avoid side effects, we can use techniques like immutability and functional programming.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes:
1. changing variable values outside of the function itself, or even relying on outside variables
2. calling a Browser API (even the console itself!)
3. calling Math.random() since the value cannot be reliably repeated
4. calling Date.now() since the value cannot be reliably repeated

### 3.4 Scoping with var let and const

Scoping refers to the visibility of variables within a program. In JavaScript, variables can be scoped to a function, block, or module.

#### 3.4.1 diff

- Variables declared with `var` are function-scoped, meaning they are visible within the function they are declared in.
- Variables declared with `let` and `const` are block-scoped, meaning they are visible within the block they are declared in.
- Variables declared with `const` are immutable, meaning their value cannot be changed after they are declared. And need to be assigned when declaring it.

`let` and `const` are more strict and you cannot use them in your code before you declare them. You can redeclare them using the variable keyword like you can with `var`. Finally, they are scoped to the block, even within if statements and loops, like the far or while loops.

### 3.5 Object-Oriented Programming (OOP)

In programming, there is something known as the programming paradigms. You can think of this as a classification, a style or just a general way to write code. OOP revolves around the idea of organizing our programs using objects to group related data and functionality. This is in contrast to the functional programming approach, where the data used in the app needs to be kept separate from functions that operate on that data.

|     Feature       |     OOP Use Cases         |        FP Use Cases       |
|-------------------|---------------------------|---------------------------|
| **Modularity**    | Large-scale, complex systems |  Not a primary focus   |
| **Data Handling** | Mutable (changing state)  | Immutable(no side effects)|
| **Concurrency**   |    Less efficient         |     Highly efficient      |
| **Ease of Debugging** | Easier with encapsulated objects      | Easier with pure functions      |
| **Learning Curve** | Steeper due to concepts like inheritance | Simpler but requires a functional mindset |

- **Modularity:** OOP is better suited for large-scale systems due to its modular design, while FP doesn't focus on modularity as much.
- **Data Handling:** OOP allows for mutable data, whereas FP emphasizes immutability.
- **Concurrency:** FP is more efficient for concurrent tasks because it avoids shared state.
- **Ease of Debugging:** Both paradigms offer ease of debugging, but in different ways—OOP through encapsulation and FP through pure functions.
- **Learning Curve:** OOP has a steeper learning curve due to complex concepts like inheritance, while FP requires understanding functional concepts but is generally simpler.

#### 3.5.0 The Principles of OOP

The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism.

##### 3.5.0.1 Inheritance

Inheritance is a mechanism that allows a *class to inherit properties and methods from another class*. This promotes code reuse and helps to create a hierarchy of classes.

I'm modeling objects from the real world by constructing relationships between Animal, Mammal, and Elephant. Each of them is a separate class, a blueprint for specific object instances that can be constructed as needed.

To set up the inheritance relation between classes in JavaScript, I can use the `extends` keyword, as in:

```js
class Animal { /* ...class code here... */ };
class Mammal extends Animal { /* ...class code here... */ };
class Elephant extends Mammal { /* ...class code here... */ };
```

##### 3.5.0.2 Encapsulation

Encapsulation is the practice of *hiding the internal details* of an object and exposing only the necessary information through a well-defined interface. This helps to protect the integrity of the object and makes it easier to maintain and modify.
```js
"abc".toUpperCase();
```

##### 3.5.0.3 Abstraction

Abstraction is the process of *simplifying complex systems by breaking them down into smaller, more manageable components*. This helps to reduce complexity and makes it easier to understand and work with the system.

##### 3.5.0.4 Polymorphism

Polymorphism is the ability of an object to *take on many forms*. This allows objects of different classes to be treated as objects of a common superclass, making it *easier to write generic code* that can work with multiple types of objects.

A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

```js
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!";
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!";
    }
}

bicycle.bell(); // "Ring, ring! Watch out, please!"
door.bell();    // "Ring, ring! Come here, please!"
```

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for. Now, to make this code truly polymorphic, I will add another function declaration:

Declaring a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.
```js
function ringTheBell(thing) {
    console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"
```

###### Example of polymorphism using classes

The super keyword calls methods from the parent class. In the Eagle class, super.useWings() invokes the useWings() method from the Bird class, allowing the Eagle class to extend its behavior by adding "Barely flapping!" after calling the parent method.

The Penguin and Eagle sub-classes both inherit from the Bird super-class.

The Eagle sub-class inherits the useWings() method from the Bird class, but extends it with an additional console log. The Penguin sub-class doesn't inherit the useWings() method - instead, it has its own implementation, although the Penguin class itself does extend the Bird class.

```js
class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

#### 3.5.1 Example 1

```js
// with OOP approach, you create an object and store all data related to that object in it. Including variables, functions and output statements.

purchase1.shoesPrice; //100
purchase1.stateTax; //1.2

var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = purchase1.shoes + purchase1.stateTax;
    console.log('Total price:', calculation);
  }
};

// the advantge is that you can create as many objects as you want
var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = purchase2.shoes + purchase2.stateTax;
    console.log('Total price:', calculation);
  }
};
```
You can also use `.this` (this object)
```js
var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = this.shoes + this.stateTax;
    console.log('Total price:', calculation);
  }
};
```

#### 3.5.2 Example 2

##### FP version:

```js
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax){
  return shoes*tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);
```

##### OOP version

```js
var purchase1 ={
  shoes:100,
  stateTax: function(){
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log('Total price:', calculation);
  }
}
purchase1.totalPrice(); //100

var purchase2 ={
  shoes:50,
  stateTax: function(){
    var calculation = purchase2.shoes * purchase2.stateTax;
    console.log('Total price:', calculation);
  }
}
purchase1.totalPrice(); //50
```

then we can use `.this` (this object) method, it is an improvement over the code above so to reduce waste. Allowing to reude code.

```js
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = this.shoes + this.stateTax;
    console.log('Total price:', calculation);
  }
};
purchase1.totalPrice(); //100

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = this.shoes + this.stateTax;
    console.log('Total price:', calculation);
  }
};
purchase2.totalPrice(); //50
```

Although you are reusing existing code. You are repetiting the same method. thts when  making templates for objects comes in. In js one of the most elegant waysto efficiently build new objects by is by using classes.

### 3.6 Classes

Is a blue print to repetitive use to build new objects.

```js

//JavaScript does not require class names to be capitalized, but it is a widely accepted best practice to start class names with a capital letter and use PascalCase. This convention helps distinguish classes from other variables or functions in your code.
class Car {

  // each class should have a constructor method, where you can put as many parameters as you want. The role of the constructor function is to assign the passed in parameters to the future objects properties.
  constructor (color, speed) {
    this.color = color;
    this.speed = speed;
  }

  // After the constructor is defined, you add as many methods as you want. It's important to remember that you don't use the function keyword here.
  turboOn() {
    console.log("turbo is on");
  }
}

// create an instance of the class using the keyword `new` and optional arguments based on how the class is defined.
const car1 = new Car('red', 120);

// you can access the Car methods and properties.
car1.turboOn();
```

### 3.7 Constructor

#### 3.7.1 Using Constructor Functions

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructor functions are capitalized.

To use a constructor function, I must prepend it with the operator new.

#### 3.7.2 Objects Without Constructors

Running `new Math()` throws an `Uncaught TypeError`, informing us that *Math is not a constructor*.

Other built-in objects that don't have constructors, such as the Math object, don't need a constructor. They're just **static objects** whose properties and methods can be accessed directly, from the built-in object itself. In other words, there is no point in building an instance of the built-in Math object to be able to use its functionality.

For example, if I want to use the pow method of the Math object to calculate exponential values, there's no need to build an instance of the Math object to do so. To illustrate, to get the number 2 to the power of 5, I'd run:

```js
Math.pow(2,5); // --> 32
```

There's no need to build an instance of the Math object since nothing needs to be stored in that specific object's instance.

#### 3.7.3 Custom Constructor Functions

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
```
I've just built two instance objects of Icecream type.

The most common use case of new is to use it with one of the built-in object types.

### 3.7.4 Performance and Best Practices with Constructors

Note that using constructor functions on all built-in objects is sometimes not the best approach. This is especially true for object constructors of primitive types, namely: String, Number, and Boolean.

```js

let apple = new String("apple");
apple; // --> String {"apple"}

let pear = "pear";
pear; // --> "pear"
```
The `pear` variable is a string literal, that is, a primitive JavaScript value, which will always be more performant than the `apple` variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.

In other words, if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

#### 3.7.5 Alternative Patterns and Literals

##### 3.7.5.1 Object Creation: Use {} Instead of new Object()

Using {} (object literal syntax) is shorter, easier to read, and widely used in JavaScript. Both {} and new Object() create the same type of object, but {} is preferred for simplicity.
```js
// Preferred way
const user = {};

// Less common way
const user = new Object();
```

##### 3.7.5.2 Regular Expressions: Two Ways to Create Them

A Regular Expression (RegExp) is a tool to search for patterns in strings. For example, you can use it to find numbers, letters, or specific words.

1. Using the RegExp Constructor:
  - You can create a regular expression with new RegExp().
  - Example:
    ```javascript
    const regex = new RegExp("\\d"); // Matches any digit
    ```
2. Using Pattern Literal Syntax (/.../):
  - This is simpler and more commonly used.
  - Example:
    ```javascript
    const regex = /\d/; // Matches any digit
    ````

##### 3.7.5.3 Example of Regular Expressions in Action

Here’s how you can use a regular expression to find digits in a string:
```javascript
const str = "I have 2 apples.";

// /\d/ is the pattern literal that looks for any digit.
const regex = /\d/; // Pattern literal for a digit

// .match() checks the string against the pattern.
const result = str.match(regex); // Finds the first match
console.log(result); // Output: ["2"]
```

### 3.8 Inheritance

```js
var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true
}

// they use the bird object as a prototype
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings:", eagle1.hasWings); //eagle1 has wings: true
console.log("eagle1 can fly:", eagle1.canFly); //eagle1 can fly: true
console.log("eagle1 has feathers:", eagle1.hasFeathers); //eagle1 has feathers: true

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1);
console.log("penguin1 can fly:", penguin1.canFly);
//output: penguin1: { canFly: false }
```

The prototype is an object that can have properties to be shared by multiple other objects.

### 3.9 Creating classes

The `constructor` will be used to build properties on the future object instance of the `Train` class.

let's say that there are only two properties that each object instance of the `Train` class should have at the time it gets instantiated: `color` and `lightsOn`.

```js
class Train{
  // The constructor will be used to build properties on the future object instance of the Train class.
  constructor(color, lightsOn){
    this.color = color;
    this.lightsOn = lightsOn;
  }
}
```

#### 3.9.1 Building a Train

To actually build a new instance of the Train class, I need to use the following syntax:
```js
new Train()
```

You can continue building instances of the Train class. They are still separate objects even if you give them exactly the same properties.
```js
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
```

#### 3.9.2Creating methods

Now, there are four methods on your Train class:
toggleLights(), lightsStatus(),  getSelf() and getPrototype().

```js
class Train {
  constructor(color,lightsOn){
    this.color = color;
    this.lightOn = lightsOn;
  }
  toggleLights(){
    this.lightOn = !this.ligthOn;
  }
  lightsStatus(){
    console.log('Lights on?', this.lightOn);
  }
  getSelf(){
    console.log(this);
  }
  getPrototype(){
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
```

1. The `toggleLights` method uses the logical not operator, `!`. This operator will change the value stored in the `lightsOn` property of the future instance object of the Train class; hence the `!this.lightsOn`. And the `=` operator to its left means that it will get assigned to `this.lightsOn`, meaning that it will become the new value of the lightsOn property on that given instance object.
2. The `lightsStatus()` method on the Train class just reports the current status of the lightsOn variable of a given object instance.
3. The `getSelf()` method prints out the properties on the object instance it is called on.
4. The `getPrototype()` console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the `Train` class. To get the prototype, you'll be using JavaScript's built-in `Object.getPrototypeOf()` method, and passing it `this` - meaning, the object instance inside of which this method is invoked.

Now you can build a brand new train using this updated Train class:
`var train4 = new Train('red', false);`

```js
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}
```

#### 3.9.4 Subclassing

To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows:

```js
class HighSpeedTrain extends Train {
}
```

Now you can describe how the HighSpeedTrain works. Again, you can start by defining its constructor function:

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```
The super keyword is used to call the constructor of the super-class and initialize properties inherited from it in the sub-class. By using the super keyword in the constructor of the HighSpeedTrain class, I ensure that the properties of the Train super-class are properly initialized in the HighSpeedTrain sub-class.

#### 3.9.5 Changing methods of the super-class

imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class.

```js
toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
}
toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
}
```

#### 3.9.6 Combine Super Class and your own Methods

You've added this third line to show that you can combine the "borrowed" method code from the super-class with your own custom code in the sub-class.

Now you're ready to build some train objects.
```js
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
```

#### 3.9.7 Using class instance as another class's constructor's property

```js
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs)
//output -> 7-22

console.log(boxingGym.stationaryBike)
// output -> StationaryBike { position: 'right corner', gears: 8 }

console.log(boxingGym.treadmill)
// output -> Treadmill { position: 'left corner', modes: 5 }
```

This code allows me to instantiate a new instance object of the Gym class, and then when I inspect it, I get the following information:
1. the openHrs property is equal to "7-22" (that is, 7am to 10pm)
2. the stationaryBike property is an object of the StationaryBike type, containing two properties: position and gears
3. the treadmill property is an object of the Treadmill type, containing two properties: position and modes

### 3.10 Default Parameters

#### 3.10.1 Example 1

```js
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

noDefaultParams(); // Result: NaN
```

JavaScript doesn't throw an error but instead returns a `NaN` (Not a Number) because `number` is `undefined` by default.

Consider now, the following improvement, using default parameters:

```js
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams(); // Result: 100
```

Default params allow me to build a function that will run with default argument values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.

This example might highlight the reason sometimes weird error messages appear when some software is used - perhaps the developers just didn't have enough time to build it better.

#### 3.10.2 Example 2

```js
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
```

This approach improves the developer experience of my code, because I no longer have to worry about feeding the WithDefaultParameters class with all the arguments. For quick tests, this is great, because I no longer need to worry about passing the proper arguments.

Default parameters also make it easier to build inheritance hierarchies. For example, in subclass constructors, you can pass only the properties specific to the subclass, while still using the defaults from the superclass constructor. Additionally, this approach really shines when building inheritance hierarchies using classes, as it makes it possible to provide only the custom properties in the sub-class, while still accepting all the default parameters from the super-class constructor.

### 3.11 Designing an OO Program

            Animal
         /         \
       Cat        Bird
     /     \         \
HouseCat  Tiger    Parrot

There are two keywords that are essential for OOP with classes in JavaScript.

These keywords are extends and super.

#### 3.11.1 Coding the `Animal` Class

```js
class Animal {
  constructor(color ='yellow', energy = 100){
    this.color = color;
    this.energy = energy;

  }
  isActive(){
    if (this.energy>0){
      this.energy -= 20;
      console.log('Energy is decreasing, currently at:', this.energy);
    } else if(this.energy == 0){
      this.sleep();
    }
  }
  sleep(){
    this.energy +=20;
    console.log('Energy is increasing, currently at:', this.energy);
  }
  getColor(){
    console.log(this.color);
  }
}
```

#### 3.11.2 Coding the `Cat` and `Bird` Class

Each animal object, no matter which one it is, will share the properties of color and energy.

```js
class Cat extends Animal{
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = 1, color, energy){
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makesound(){
    console.log(this.sound);
  }
}
class Bird extends Animal{
  constructor(sound='gururu', canFly= true, color, energy){
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makesound(){
    console.log(this.sound);
  }
}
```

#### 3.11.3 Add HouseCat, Tiger, and Parrot.

```js
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    // makeSound method takes a parameter `option`
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        console.log(this.houseCatSound); // Always prints the HouseCat sound
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    // makeSound method takes a parameter `option`
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        console.log(this.tigerSound); // Always prints the Tiger sound
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    // makeSound method takes a parameter `option`
    makeSound(option) {
        if (option) {
            super.makeSound(); // Calls the parent class's makeSound if option is true
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!"); // If canTalk is true, it talks
        }
    }
}
```

1. In the HouseCat and Tiger classes, the makeSound() method requires a parameter (option) to determine whether to invoke the parent class’s makeSound() method. For example, passing true invokes the parent class's makeSound() method, while false does not.
2. Similarly, for the Parrot class, the makeSound() method also takes an option parameter, and the functionality changes based on whether the canTalk() property is true.

#### 3.11.4 Build Objects

Now that we've set up this entire inheritance structure, we can build various animal objects.

For example, I can build two parrots: one that can talk, and the other that can't.

```js
var polly = new Parrrot(true);
var fiji = new Parrot(false);

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100


var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180
```

and also a cat

```js
var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow
```

### 3.12 De-struturing

De-structuring is a way to extract values from arrays or objects into individual variables.

#### 3.12.1 Example: de-structuring PI

You only con de-structure something that already exists. For example PI in Math
```js
// output the PI out of Math
let {PI} = Math;
PI; // 3.141592653589793

let {pi} = Math;
pi; // undefined

PI === Math.PI; // true
PI === pi; // false


PI = 1;
PI === Math.PI; // false
PI === pi; // false
PI === 1; // true
```

### 3.13 `For of` loops and objects

To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:
```js
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop) // Uncaught TypeError: car is not iterable
}
```

Contrary to objects, arrays are iterable. For example:
```js
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color); // red  orange  yellow
}
```

#### 3.13.1 `for...of` loop iterates over the values

The for...of loop iterates over the values in an array (or other iterable objects like strings, sets, and maps). It provides an easy way to loop through each element, making the code cleaner and more readable.
Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.

##### How?

Before you can properly answer this question, you first need to review three built-in methods: Object.keys(), Object.values(), and Object.entries().

Once you use these methods to convert an object into an iterable form (like an array), you can then use the for...of loop to iterate over it.

#### 3.13.2 Built-in methods

##### A. `Object.keys()` method

It receives an object as its parameter:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // [ 'speed', 'color' ]
```

##### B. `Object.values()` method

It receives an object as its parameter:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.values(car2)); // [ 200, 'red' ]
```

##### C. `Object.entries()` method

It lists both the keys and the values:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.entries(car2)); // [ [ 'speed', 200 ], [ 'color', 'red' ] ]
```

##### D. dynamic key-value pairs

You can use the Object.keys(), Object.values(), and Object.entries() methods to dynamically create key-value pairs in an object. For example:
```js
const car2 = {
    speed: 200,
    color: "red"
}

const newKey = 'brand';
const newValue = 'Toyota';

car2[newKey] = newValue;

console.log(car2); // { speed: 200, color: 'red', brand: 'Toyota' }
```
<br>

#### 3.14 For-of loops and Objects

```js
const car = {
  engine: true,
  steering: true,
  speed: "slow"
}
const sportCar = Object.create(car);
sportsCar.spend = "fast";
console.log("The sportCar object:", sportsCar);

// for-in is unrealiable
for (prop in sportsCar){
  console.log(prop); // speed /n engine
}

// for-of is reliable. Do not output the inherited properties
for (prop of Object.keys(sportsCar)){
  console.log(prop + ": " + sportsCar[prop]); // speed: fast
}
```

### 3.15 Template literals examples

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
```js
'Hello, World!'
"Hello, World!"

//ES6 introduced the use of backtick characters as delimiters
`Hello, World!`
```

#### 3.15.1 Differences between a template and regular string

There are several ways in which a template string is different from a regular string.
First, it allows for variable interpolation:
```js
let greet = "Hello";
let place = "World";

console.log(`${greet} ${place} !`) //Hello World !
//display both variables using template literals
```

It allows programmers to embed variables directly in between the backticks, without the need to use the + operator and the single or double quotes to delimit string literals from variables. In other words, in ES5, the above example would have to be written as follows:
```js
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals
```

#### 3.15.2 Span multiple lines

Template strings can span multiple lines
```js
`Hello,
World
!
`
```

#### 3.15.2 perform arithmetic

the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation.
```js
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);
```

Some additional use cases of template literals are nested template literals and tagged templates.

#### 3.15.3 Working with template literals

```js
console.log(`${first} - and I got curious. ${second}`);
```
<br>

### 3.16 Data structures

#### 3.16.1 some Data Structures types
Arrays, objects, and functions are all examples of data structures in JavaScript. JS is more limited in data types. The most common data types are nthe you may encounter are Objects, Arrays, Maps, Sets.

##### A Arrays

Arrays are a collection of elements that can be accessed by their index. Arrays are mutable, meaning that their elements can be changed. It is normal to use loops to access the data.

##### B Objects

Now you may recall that an object is unaltered, noniterable collection of key-value pairs and you use objects when you need to store and later access a value under a key. Ex. you need to write object orientated, R00P code.

##### C Maps

It is like an array because it is iterable. Don't confuse with an object. With maps any value can be used as a key. With objects, keys can only be strings or symbols. With maps every key is unique and every value is associated with a key, they are made up of iterable key value pairs.


##### D Sets

Sets are a collection of unique values. Sets are mutable, meaning that their elements can be changed.

#### 3.16.2 Data Structures examples

##### A. The `forEach()` method

allows you to loop over each of their members.
```js
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//  0. kiwi
//  1. mango
//  2. apple
//  3. pear
```

Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
```js
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// 0. kiwi
// 1. mango
// 2. apple
// 3. pear
```

##### B. The `filter()` method

It filters your arrays based on a specific test.

```js
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
    console.log(result);
})

// [30,40,50]
```

##### C. The `map()` method

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.

```js
const nums = [0,10,20,30,40,50];
nums.map( function(num) {
    return num * 2;
    console.log(result);
})

// [0,20,40,60,80,100]
```

#### 3.16.3 Working with Objects in JavaScript

```js
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result) //['speed',100,'color','yellow']
```

#### 3.16.4 Working with Maps in JavaScript

A map can feel very similar to an object in JS. However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

```js
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
//Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
```

To get a specific value, you need to use the get() method.
`bestBoxers.get(1); // 'The Champion'`

#### 3.16.5 Working with Sets in JavaScript

The Set constructor can, for example, accept an array. This means that we can use it to quickly filter an array for unique members.
```js
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);

console.log(uniqueFruits); //{'apple', 'pear', 'plum'}
```

### 3.17 Spread and Rest Operator

#### 3.17.1 Spread Operator

The advantage is you don't have to list each member of the array. Syntax is also clearer.
```js
showItinerary(...top7);
```

### 3.17.2 Rest Operator

```js
const top7 =["the colosseum","the eiffel tower","the statue of liberty","the great wall of china","the taj mahal","the petra","the piazza venice"];

const [first, second, third, ...secondVisit] = top7;
// so now i extracted the constants into four variables. making an subarray
```

```js
function addTaxToPrices(taxRate, ...itemsBought){
  return itemsBOught.map(item => item * taxRate)
}

let shoppingCart = addTaxToPrices(1.1, 42, 59, 36);
//1.1 is the tax rate, while the next variables are the items bought.

console.log(shoppingCart); //[46.2, 64.9, 40.32]
```

#### 3.17.3 `push()` method

```js
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); // ['onion', 'parsley', 'carrot', 'beetroot'];
```

#### 3.17.4 Convert a string to an array using the spread operator

```js
const myName = 'John';
const myNameArray = [...myName];
console.log(myNameArray); // ['J', 'o', 'h', 'n']
```

#### 3.17.5 Join arrays and objects using the spread operator

```js
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate

console.log(fruitsAndBerries);
// ['apple', 'pear', 'plum', 'blueberry', 'strawberry'];
```

#### 3.17.6 Copy either an object or an array into a separate one

```js
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201;

console.log(car1.speed, car2.speed); //201, 200.
```

```js
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
```

### 3.18 Jasvascript Modules

CommonJS is a module system for Node.js that allows developers to break their code into separate files and reuse them in other files. It uses the `require()` function to import modules and the `module.exports` object to export modules.

### 3.19 DOM manipulation

1. You type the url on the browser
2. The browser fetch(save) the HTML and CSS files
3. The browser parses the HTML and CSS into a DOM tree
4. The browser renders the DOM tree on the screen
5. The browser executes the JavaScript code

#### 3.19.1 Elements tab
Used to interact with the DOM elements
Access throught the devtools in the browser
Provides interaction with the DOM elements with a GUI

#### 3.19.2 Console tab
Used to interact with the DOM elements
Access JS via the console tab
`document.body.innerText = "Hello World"`

#### 3.19.3 Sources tab
Used to interact with the DOM elements
Access throught the devtools in the browser
Provides interaction with the DOM elements with a GUI

### 3.20 JS Interactivity

Did you know that JavaScript's initial purpose was to provide interactivity in the browser? In other words, it was the "set of controls" that would allow web developers to control the behavior of the webpages and even the browsers that these webpages worked on.

Initially, in the late 1990s, there was plain JavaScript that had to be tweaked to suit individual browsers.

Then, by the mid-2000s, the jQuery library came out, with the idea of writing less code, but doing more with it. It "leveled the playing field" as it allowed developers to use a single code-base for various browsers.

This trend continued and many other frameworks such as React, Vue, Angular, D3, and more came along. Together with npm and Node.js, the JavaScript ecosystem is not slowing down.

Although CSS has developed significantly over the years, it is still JavaScript that allows users to:

1. Get their geolocation,
2. Interact with maps,
3. Play games in the browser,
4. Handle all kinds of user-triggered events, regardless of the device,
5. Verify form input before sending it to the backend of a webapp,
6. and more!

#### 3.20.1 JS Selector

You can use the console in the browser to access the DOM.
```js
document.querySelector('p')
// returns the first p element in the DOM:
// <p class="txt"> "this is the text in the p....." </p>

document.querySelectorAll('p')
// it return all the `p` elements in the DOM
// NodeList(2) [p.txt, p.txt]
// > 0: p.txt
// > 1: p.txt
// length: 2

document.getElementById('heading')
// this will get an element by its ID

document.getElementByClassName('txt')
```

#### 3.20.2 Event Handling

```js
document.addEventListener('click', function() {
  console.log('clicked');
});
```

```js
const target = document.querySelector('body');

function handleClick(){
  console.log('clicked the body')
}
target.addEventListener('click', handleClick)

function handleClickHeading('heading'){
  console.log('clicked the heading')
}
target.addEventListener('click', handleClickHeading)
```

#### 3.20.3  Web page content update

to capture user input you can use `prompt()`
```js
let answer = prompt('What is your name?');

// Once you have the user-provided input inside the answer variable, you can manipulate it any way you need to.
// For example, you can output the typed-in information on the screen, as an <h1> HTML element.
if (typeof(answer)) === 'string'){
  var h1 = documnet.createElement('h1')
  h1.innerText = answer;
  document.body.innerText = '';
  documnet.body.appendChild(h1);
}
```
This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not the most efficient approach, especially in more complex scenarios.

##### This is where `HTML forms` come in.

You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

You'll begin by coding out a "test solution" to the task at hand:
```js
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);
```

So, you're essentially doing the same thing that you did before, only this time you're also dynamically adding the `input` element, and you're setting its HTML `type` attribute to `text`. That way, when you start typing into it, the letters will be showing in the `h1` element above.

However, you're not there quite yet. At this point, the code above, when run on a live website, will add the h1 element with the text "Type into the input to make this text change", and an empty input form field under it.

##### update text content with the value of the input field

Now, the only thing that you still need to do to complete the code is to update the text content of the h1 element with the value you got from the input field.

```js
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
```
After this update, whatever you type into the input, after pressing the ENTER key, will be shown as the text inside the h1 element.

## 4. Node and NPM

### 4.1 Intro

Here you will learn about Node.js and Node Package Manager (npm). And you will explore how to install npm packages and how to work with package.json. Furthermore, you will learn about testing in JavaScript and you'll code a simple unit test in Jest.

#### 4.1.1 Use locally

```sh
# check if you have
node -v
npm -v

# execute js code
node app.js

# install node module
npm install lower-case
```

#### 4.1.2 Use an mpn module in your code

```js
import { lowerCase, localLowerCase} from "lower-case";
lowerCase("Word"); //output "word"
```

#### 4.1.3 Start a new project

To create a npm file `package.json` in a project run:
```sh
npm init
```
```json
{
  "name": "my-cool-package",
  "version": "1.0.0"
}
```

The `package.json` file holds all the instructions on all the node modules that are pulled from the npm repository of open source modules. There are about 11 million modules in the npm repository. It means that you can get thousands of hours worth of other developers' coding by running the npm install command and adding the package name.

Examples of libraries you can install include:
- React `npm i react`
- Webpack `npm i webpack`
- Bootstrap `npm i bootstrap-vue`
- Angular Core `npm i @angular/core`
- and more...

The `package.json` file updates when you install a new package. It keeps track of everything you need to have installed in your project. It makes it more portable.

For example, if you have built a project with a specific number of different node packages, they're all listed inside the package.json file. All you need to do is share this file with, for example, your co-workers. They can have the exact same setup on their machines simply by running the command npm install. This install command reads the contents of the package.json and installs all the necessary packages, also referred to as dependencies.

### What is testing?
