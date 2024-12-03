import { describe, expect, it } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

describe('max', () => {
  it('should return the first arg if it is grater', () => {
    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(2);
  });

  // or

  it('should return the first arg if it is grater', () => {
    expect(max(2, 1)).toBe(2);
  });

  //---------------------------
  it('should return the second arg if it is grater', () => {
    expect(max(1, 2)).toBe(2);
  });

  //---------------------------
  it('should return the first arg if args are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe('fizzBuzz', () => {
  it('should be fizzBuzz , if args divisible by 3 and 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
  it('should be fizz', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
  });
  it('should be Buzz', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('should be that character as input', () => {
    const result = fizzBuzz(2);
    expect(result).toBe('2');
  });
});

describe('calculate average', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it('should calculate the average of an array with a two element', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it('should calculate the average of an array with a three element', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return NaN if its not number', () => {
    expect(factorial('3')).NaN;
  });
  it('should return 1 if arg is 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('should return 1 if arg is 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('should return 6 if arg is 3', () => {
    expect(factorial(3)).toBe(6);
  });
  it('should return undefined if arg is NEGATIVE number', () => {
    expect(factorial(-3)).toBeUndefined();
  });
});
