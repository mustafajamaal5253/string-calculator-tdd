import { add } from '../src/stringCalculator.js';

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(add("1")).toBe(1);
  });
  
  test('should return sum for two comma separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should return sum when three comma separated numbers are passed', () => {
    expect(add("1,2,3")).toBe(6);
  });

  test('should handle new line between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiter pattern "//[delimiter]\\n[numbers]"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('should throw error when negative number is provided', () => {
    expect(() => add("-1")).toThrow("negatives not allowed: -1");
  });
});