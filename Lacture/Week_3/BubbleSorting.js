function bubbleSort(array) {
    
    let n = array.length;
    let isSorted = false;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if(array[j] > array[j+1]) {
                [array[j],array[j+1]] = [array[j+1],array[j]];
                isSorted = true;
            }
        }
    }
    console.log(array);
}

bubbleSort([236,4563,7456,5345,45,556,587,455,334,314,56,57,4545,47,4534,342,336,65356,675,785]);