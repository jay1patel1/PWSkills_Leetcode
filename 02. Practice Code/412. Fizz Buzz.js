function fizzBuzz (n) {
    const array = []
    for (let index = 1; index < n+1; index++) {
        if (index%3 === 0) {
            if (index%5 === 0 ) {
                array.push("FizzBuzz");
            } else {
                array.push("Fizz");
            }
        } else if (index%5 === 0) {
            array.push("Buzz");
        } else {
            array.push(`${index}`);
        }
    }
    console.log(array)
    return array
}

fizzBuzz(3)