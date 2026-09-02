class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var length = nums.length;
        let result = new Array(length);
        let prefix = new Array(length);
        let suffix = new Array(length);

        prefix[0] = 1;
        suffix[length - 1] = 1;

        for (var i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        for (var i = length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }

        for (var i = 0 ; i < nums.length; i++) {
            result[i] = prefix[i] * suffix[i];
        }
        return result
    }
}
