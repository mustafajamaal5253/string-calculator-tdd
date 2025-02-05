export function add(numbers) {
  if (numbers === "") return 0;

  // Split string on either commas or newlines using regex
  const nums = numbers.split(/[,\n]/);

  return nums.reduce((sum, num) => sum + parseInt(num), 0);
}