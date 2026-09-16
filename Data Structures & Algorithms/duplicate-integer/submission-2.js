class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var map = new Map();

        for (var num of nums) {
            if (map.has(num)) {
                return true;
            }

            map.set(num, (map.get(num) || 0) + 1);
        }
        return false;
    }
}
