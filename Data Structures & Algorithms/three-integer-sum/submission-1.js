class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        const seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;

            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    const key = `${nums[i]}, ${nums[left]}, ${nums[right]}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push([nums[i], nums[left], nums[right]]);
                    }
                    left++;
                    right--;
                }
            }
        }
        return result;
    }
}
