export function add(numbers) {
  if (numbers === "") return 0;
  
  const { delimiter, numbersToSum } = parseInput(numbers);
  const nums = numbersToSum.split(delimiter);
  return nums.reduce((sum, num) => sum + parseInt(num), 0);
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