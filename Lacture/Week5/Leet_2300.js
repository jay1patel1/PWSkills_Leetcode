function pairs (arr,arr2,su) {
    let returnarr = [];
    for (let i = 0; i < arr.length; i++) {
        let suc = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]*arr2[j] >= su) {
                suc++;
            }
        }
        returnarr.push(suc)
    }
    return returnarr;
}

