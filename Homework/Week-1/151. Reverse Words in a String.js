/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let array = s.split (" ");
    const returnArray = [];

    for (let index = array.length; index > 0 ; index--) {
        if (array[index] !== " "); {
            returnArray.push(array[index]);
            returnArray.push(" ");
        }
        returnArray.pop;
    }
    console.log(returnArray);
};

reverseWords ("the sky is blue");
reverseWords ("  hello world  ");
reverseWords ("a good   example");