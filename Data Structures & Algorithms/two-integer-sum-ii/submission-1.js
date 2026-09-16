class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var left = 0;

        var right = numbers.length - 1;

        while (left < right) {
            let sum = numbers[left] + numbers[right];

            if (sum < target) {
                left++;
                
            } else if (sum > target) {
                right--
            }
            else if(sum === target){


                return [left+1,right+1]
            }
        }
    }
}
