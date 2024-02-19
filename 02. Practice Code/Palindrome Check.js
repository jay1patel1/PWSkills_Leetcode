function palindromeCheck (string) {
    let pointer_a = 0;
    let pointer_b = string.length - 1

    while (string[pointer_a] <= string[pointer_b]) {
        if (string[pointer_a] == string[pointer_b]) {
            pointer_a++;
            pointer_b--;
        } else {
            return false
        }
    }
    return true
}