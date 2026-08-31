class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var map = new Map();

        for (var i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        var newArray = Array.from(map.entries());
        //console.log(newArray);
        var sorted = newArray.sort((a, b) => b[1] - a[1]);
        var result = [];
        for (var i = 0; i < k; i++) {
            result.push(sorted[i][0]);
        }
        return result;
    }
}
