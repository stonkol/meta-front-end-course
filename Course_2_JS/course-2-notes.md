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
