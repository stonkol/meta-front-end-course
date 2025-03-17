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
