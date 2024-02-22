/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let array = s.split (" ");
    const returnArray = [];
    let pointer = array.length-1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== " ") {

            returnArray[pointer] = returnArray.push(array[i])

            if (pointer !== 0){
                returnArray.push(" ")
            }

        }
    }

    returnArray.pop()
    console.log(returnArray)
};

reverseWords ("the sky is blue");
reverseWords ("  hello world  ");
reverseWords ("a good   example");