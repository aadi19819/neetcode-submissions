class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

          var newMap = new Map();
          for(var i = 0;i<nums.length;i++){

            var left = nums[i];
            var right = target - nums[i]
              

             if(!newMap.has(right)){
                 newMap.set(nums[i],i)


             }

             else{

                return [newMap.get(right),i];
             }
             







          }









    }
}
