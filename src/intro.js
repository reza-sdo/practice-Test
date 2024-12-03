// Lesson: Writing your first tests
export function max(a, b) {
  // if (a > b) return a;
  // else if (b > a) return b;
  // return a;

  // this is for refactor faze to show how it's okay!
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum / numbers.length;
  // return numbers[0];
}

export function factorial(number) {
  if (typeof number !== 'number') return NaN;
  if (number < 0) return;
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
}
