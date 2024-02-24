/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {

    if (num1 === '0' || num2 === '0') return '0';

    const n1 = num1.split("").map((n)=>parseInt(n));
    const n2 = num2.split("").map((n)=>parseInt(n));

    let ra = Array(n1.length+n2.length).fill (0);

    let pn1 = n1.length - 1;
    let pn2 = n2.length - 1;
    let pra = ra.length -1;

    let factor = 0;

    let cr = 0

    while (pn1 >= 0) {
        while (pn2 >= 0) {
            let product;
            product = (n1[pn1] * n2[pn2]) + cr + ra[pra];

            let addValue = product % 10;
            cr = Math.floor(product/10);

            // Final
            ra[pra] = addValue;
            pra--
            pn2--
        }
        ra[pra] = cr;
        factor++;
        pra = ra.length-(1+factor);
        pn2 = n2.length - 1;
        pn1--;
        cr = 0
    }

    let removeZero = ra.findIndex(element => element != 0);
    let returnArray = ra.slice(removeZero);

    console.log(returnArray.join(""));

};

multiply ("2","3");
multiply ("123","456");
multiply ("9","99");
multiply ("9133","0");