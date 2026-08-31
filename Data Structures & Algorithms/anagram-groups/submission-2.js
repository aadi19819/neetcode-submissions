class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var map = new Map();

        for (var str of strs) {
            //console.log(str);
            var element = new Array(26).fill(0);

           // console.log(element);

            for (var char of str) {
                element[char.charCodeAt(0) - 97]++;
            }

            var key = element.join(",");
            if (!map.has(key)) {
                map.set(key, [str]);
            } else {
                map.get(key).push(str);
            }
        }
        return Array.from(map.values());
    }
}
