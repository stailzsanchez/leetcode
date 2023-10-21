const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

console.log(containsDuplicate([1, 2, 3, 4, 5, 5]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 5]));
console.log(containsDuplicate([1, 2, 2, 3, 4, 5, 2]));
console.log(containsDuplicate([1, 2, 3, 4, 5]));
