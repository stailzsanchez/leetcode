var productExceptSelf = function (nums) {
  // Value to increment per each index
  let carry = 1;
  // Array to return all the product values
  const output = Array(nums.length).fill(1);
  // Add products to output array starting at the front
  for (let i = 0; i < nums.length; i++) {
    output[i] *= carry;
    carry *= nums[i];

    console.log(`carry ${carry} arr ${output}`);
  }
  // Reset carry
  console.log("-------------------");
  carry = 1;
  // Add products to output array starting at the back
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= carry;
    carry *= nums[i];
    console.log(`carry ${carry} arr ${output}`);
  }
  return output;
};
console.log(productExceptSelf([1, 2, 3, 4]));
