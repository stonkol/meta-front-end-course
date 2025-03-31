function fib(n) {
  // Base cases
  if (n === 0) return 0; // Base case: Fibonacci(0)
  if (n === 1) return 1; // Base case: Fibonacci(1)

  // Recursive case
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(7));
console.log(fib(11));
