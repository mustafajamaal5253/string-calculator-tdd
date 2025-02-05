// src/stringCalculator.js
export function add(numbers) {
  if (numbers === "") return 0;
  
  let numbersToCalculate = numbers;
  let delimiter = ',';
  
  // custom delimiter check
  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbersToCalculate = numbers.substring(numbers.indexOf("\n") + 1);
  }
  
  // Split string and convert to numbers
  let nums = [];
  if (delimiter === ',') {
    nums = numbersToCalculate.split(/[,\n]/);
  } else {
    nums = numbersToCalculate.split(delimiter);
  }
  
  // Convert strings to numbers
  let numArray = [];
  for (let i = 0; i < nums.length; i++) {
    numArray.push(parseInt(nums[i]));
  }
  
  // Check for negatives
  let negativeNums = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < 0) {
      negativeNums.push(numArray[i]);
    }
  }
  
  if (negativeNums.length > 0) {
    throw new Error("negatives not allowed: " + negativeNums.join(','));
  }
  
  // Calculate sum
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  
  return sum;
}