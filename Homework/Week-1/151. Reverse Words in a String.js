/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let array = s.split (" ");
    const returnArray = [];

    for (let index = array.length; index > 0 ; index--) {
        if (array[i] !== " "); {
            returnArray.push(array[i]);
            returnArray.push(" ");
        }
        returnArray.pop;
        
    }
};

reverseWords ("the sky is blue");
reverseWords ("  hello world  ");
reverseWords ("a good   example");