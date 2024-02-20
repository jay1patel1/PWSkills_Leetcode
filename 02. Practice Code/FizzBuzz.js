function fizzBuzz (start,end) {
    for (let index = start; index < end; index++) {
        if (index%3 === 0) {
            if (index%5 === 0 ) {
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if (index%5 === 0) {
            console.log("Buzz");
        } else {
            console.log(index);
        }
    }
}

fizzBuzz(0,100)