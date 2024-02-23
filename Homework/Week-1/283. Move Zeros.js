function moveZeors (array) {
    let pointer_a = 0;
    let pointer_b = 0;

    while (pointer_b < array.length) {
        if (array[pointer_b] !== 0) {
            [array[pointer_a], array[pointer_b]] = [array[pointer_b], array[pointer_a]];
            pointer_a++
            pointer_b++
        } else if (array[pointer_b] === 0) {
            pointer_b++
        }
    }

    console.log(array);
    
}

moveZeors ([0,1,0,3,12]);