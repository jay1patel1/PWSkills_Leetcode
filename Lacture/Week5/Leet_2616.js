function find(arr,p) {

    let sArr = arr.sort ((a,b) => a-b);

    function findSpaceCount (val) {
        let count = 0

        for (let i = 0; i < sArr.length-1; i++) {
            if (sArr[i]-sArr[i+1]) {
                count ++;
            }
        }
    }

    function run () {

    }



}