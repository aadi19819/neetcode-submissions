class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        console.log(result);

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var result = [];

        var i = 0;
        while (i < str.length) {
            var position = str.indexOf("#", i);
            // console.log(position);
            var length = parseInt(str.substring(i, position));
            // console.log(length);

            result.push(str.substring(position + 1, length + 1 + position));
            //console.log(result);
            i = length + 1 + position;
        }
        return result;
    }
}
