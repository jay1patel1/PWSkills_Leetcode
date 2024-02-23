/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let array = s.split (" ");
    let pointer_left_1 = 0;
    let pointer_right_1 = array.length-1;


    while (pointer_left_1 < pointer_right_1) {
        if (array[pointer_left_1] === '' && array[pointer_right_1] !== '') {
            [array[pointer_left_1],array[pointer_right_1]] = [array[pointer_right_1],array[pointer_left_1]]
            pointer_right_1--;
            pointer_left_1++;
        } else if (array[pointer_left_1] === '' && array[pointer_right_1] === '') {
            pointer_right_1--;
        } else if (array[pointer_left_1] !== '' && array[pointer_right_1] !== '') {
            [array[pointer_left_1],array[pointer_right_1]] = [array[pointer_right_1],array[pointer_left_1]]
            pointer_right_1--;
            pointer_left_1++;
        } else if (array[pointer_left_1] !== '' && array[pointer_right_1] === '') {
            pointer_right_1--;
        }
    }

    console.log();

    while (array[array.length-1] === '') {
        array.pop();
    }

    console.log (array.join(" "));
};

reverseWords ("the sky is blue");
reverseWords ("  hello world  ");
reverseWords ("a good   example");
reverseWords ("  The sky    is blue!  ");