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
                map.set(key, []);
            }
            map.get(key).push(str);
        }
        return Array.from(map.values());
    }
}

/*var groupAnagrams = function(strs) {
    var map = new Map();

    for (var str of strs) {
        var sorted = str.split("").sort().join("");*/
        //                 ↑ Empty string
        
       /** if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    
    return [...map.values()];
};

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));**\/\\
// [["act","cat"], ["opts","pots","tops","stop"], ["aht"]]*/
