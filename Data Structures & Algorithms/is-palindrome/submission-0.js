class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        var clearString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
        var left = 0;
        var right = clearString.length - 1

        while (left < right) {
            if (clearString[left] != clearString[right]) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}
