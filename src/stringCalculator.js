export function add(numbers) {
  if (numbers === "") return 0;
  
  const { delimiter, numbersToCalculate } = getDelimiterAndNumbers(numbers);
  const numArray = splitAndParseNumbers(numbersToCalculate, delimiter);
  validateNegatives(numArray);
  
  return numArray.reduce((sum, num) => sum + num, 0);
}

function getDelimiterAndNumbers(input) {
  if (!input.startsWith("//")) {
    return {
      delimiter: /[,\n]/,
      numbersToCalculate: input
    };
  }
  
  return {
    delimiter: input[2],
    numbersToCalculate: input.substring(input.indexOf("\n") + 1)
  };
}

function splitAndParseNumbers(str, delimiter) {
  return str.split(delimiter).map(num => parseInt(num));
}

function validateNegatives(numbers) {
  const negatives = numbers.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }
}