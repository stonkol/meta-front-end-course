In JavaScript, the spread (...) and rest (...) operators are powerful tools for handling arrays and function arguments. These operators simplify the process of working with collections, making your code more concise and readable. This lab introduces practical applications of these operators through hands-on exercises.

## The spread operator

is used to expand elements of an array, object, or iterable into individual items. It’s represented by three dots (...). For arrays, it allows us to easily extract or spread values, making operations like splitting arrays or merging arrays simpler.

```js
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(remaining); // Output: [3, 4, 5]
```
