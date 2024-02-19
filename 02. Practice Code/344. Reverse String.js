function reverseString (string) {
    let value = string.split("");
    let pointer_a = 0;
    let pointer_b = string.length

    console.log(pointer_a,pointer_b); 

    while (pointer_a <= pointer_b) {
        let tempValue = value[pointer_a];
        value[pointer_a] = value[pointer_b];
        value[pointer_b] = tempValue;
        pointer_a++;
        pointer_b--;
        console.log(value);
    }

    console.log(value);
}

reverseString ("string")