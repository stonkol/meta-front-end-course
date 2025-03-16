# Course 2 JavaScript

- It is a powerful tool, even can create apps. JavaScript is a versatile language that can be used for both front-end and back-end development.

- It is so common than even maybe your coffee maker has JavaScript in it. Your car has JavaScript in it. Some people think that JS is not a serious language.

- It is a language that can be used for both front-end and back-end development.

- It can sometimes be inconsistent compared to other languages.

## Intro JS

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
while (condition) {
  // code to execute while condition is true
}
```

#### Do...While Loop

```js
do {
  // code to execute at least once, then continue while condition is true
} while (condition);
```

#### For...In Loop

```js
for (variable in object) {
  // code to execute for each property in object
}
```
