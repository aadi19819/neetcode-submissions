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

        var newArray = new Array(nums.length + 1).fill().map(() => []);

        for (var [freq, value] of map) {
            newArray[value].push(freq);
        }
       // console.log(newArray);
        var result = [];
        for (var i = newArray.length - 1; i >= 0 && result.length < k; i--) {
            for (var num of newArray[i]) {
                    result.push(num)
                    if(result.length == k)
                    break;

            }
        }
        return result;
    }
}
/**class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
/**topKFrequent(nums, k) {
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
}*/
