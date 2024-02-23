/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let array = s.split (" ");
    let returnArray = [];

    // console.log(array)
    for (let i = array.length-1; i >= 0; i--) {
        if (array[i] !== '') {
            returnArray.push(array[i])
        }
    }

    console.log(returnArray.join(" "))

};

reverseWords ("the sky is blue");
reverseWords ("  hello world  ");
reverseWords ("a good   example");
reverseWords ("  The sky    is blue!  ");
reverseWords ("F R  I   E    N     D      S      ");