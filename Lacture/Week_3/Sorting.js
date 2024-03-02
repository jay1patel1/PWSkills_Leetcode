function sortArray (array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array [j]) {
                [array[i],array[j]] = [array[j],array[i]];
            }
        }
    }

    console.log(array);
}

sortArray ([236,4563,7456,5345,45,556,587,455,334,314,56,57,4545,47,4534,342,336,65356,675,785])