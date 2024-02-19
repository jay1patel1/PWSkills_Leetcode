function reverseString (string) {
    let value = string.split("");
    let pointer_a = 0;
    let pointer_b = string.length

    while (pointer_a <= pointer_b) {
        let tempValue = value[pointer_a];
        value[pointer_a] = value[pointer_b];
        value[pointer_b] = tempValue;
        pointer_a++;
        pointer_b--;
    }

    value = value.join("")
    console.log(value);
    return value
}

reverseString ("string");