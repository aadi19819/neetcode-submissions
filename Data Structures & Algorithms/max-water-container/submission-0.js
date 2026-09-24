class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            let Area = 0;
            while (left < right) {
                let Area = (right - left) * Math.min(heights[left], heights[right]);
                maxArea = Math.max(maxArea, Area);

                if (heights[left] < heights[right]) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return maxArea;
    }
}
