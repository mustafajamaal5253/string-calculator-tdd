// src/stringCalculator.js
export function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, numbersToSum } = parseInput(numbers);
  const nums = numbersToSum.split(delimiter)
    .map(num => parseInt(num));

  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

function parseInput(numbers) {
  if (!numbers.startsWith("//")) {
    return {
      delimiter: /[,\n]/,
      numbersToSum: numbers
    };
  }

  const firstNewLine = numbers.indexOf("\n");
  return {
    delimiter: numbers[2],
    numbersToSum: numbers.substring(firstNewLine + 1)
  };
}