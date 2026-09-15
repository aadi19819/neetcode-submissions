class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLen = 0;
        let set = new Set(nums);

        for (let num of set) {
            if (!set.has(num - 1)) {
                let length = 1;

                while (set.has(num + length)) {
                    length++;
                }
                maxLen = Math.max(length,maxLen)
            }


        }
   
        return maxLen
    }
}
