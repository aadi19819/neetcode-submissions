class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        const closeToOpen = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let char of s) {
            if (closeToOpen[char]) {
                if (arr.length > 0 && arr[arr.length - 1] === closeToOpen[char]) {
                    arr.pop();
                } else {
                    return false;
                }
            } else {
                arr.push(char);
            }
        }
        return arr.length === 0;
    }
}
