export function add(numbers) {
  if (numbers === "") return 0;

  const nums = numbers.split(',');

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i]);
  }
  
  return sum;
}