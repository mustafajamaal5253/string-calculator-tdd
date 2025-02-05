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
});