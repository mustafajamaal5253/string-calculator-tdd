export function add(numbers) {
  if (numbers === "") return 0;

  // Regex for comma/newline splits 
  let delimiter = /[,\n]/;
  let numbersToSum = numbers;

  if (numbers.startsWith("//")) {
    const firstNewLine = numbers.indexOf("\n");
    delimiter = numbers[2]; // Get the custom delimiter
    numbersToSum = numbers.substring(firstNewLine + 1);
  }

  const nums = numbersToSum.split(delimiter);
  return nums.reduce((sum, num) => sum + parseInt(num), 0);
}