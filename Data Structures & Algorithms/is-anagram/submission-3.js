class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var test = new Map();
        var newMap = new Map();
        for (var i = 0; i < s.length; i++) {
            test.set(s[i], (test.get(s[i]) || 0) + 1);
        }

        for (var i = 0; i < t.length; i++) {
            newMap.set(t[i], (newMap.get(t[i]) || 0) + 1);
        }

        for (var comp of test) {
            if (test.get(comp[0]) != newMap.get(comp[0])) {
                return false;
            }
        }
        for (var comp of newMap) {
            if (test.get(comp[0]) != newMap.get(comp[0])) {
                return false;
            }
        }
        return true;
    }
}
