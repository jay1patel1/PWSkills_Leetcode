let countSmaller = function(nums) {

    const map = nums.map((val,index) => {
        let obj = {
            val: val,
            index: index
        }
        return obj;
    })

    const countSmallerArray = new Array(nums.length).fill(0)

    function merge (left,right) {
        let i = 0;
        let j = 0;
        const returnArray = [];

        while (i < left.length && j < right.length) {

            if (left[i].val > right[j].val) {
                countSmallerArray[left[i].index] += right.length - j;
            }

            if (left[i].val > right[j].val) {
                returnArray.push(left[i]);
                i++
            } else {
                returnArray.push(right[j]);
                j++
            }
        }

        while (i < left.length) {
            returnArray.push(left[i]);
            i++
        }
        
        while (j < right.length) {
            returnArray.push(right[j]);
            j++
        }

        return returnArray;
    }

    function helper(arr,start,end) {

        if (start === end) {
            return [arr[start]];
        }

        let mid = Math.floor((start+end)/2);

        let left = helper(arr,start,mid);
        let right = helper(arr,mid+1,end);

        return merge(left,right);
    }

    let a = helper(map,0,nums.length-1);
    console.log(countSmallerArray);
    // console.log(a);
    return countSmallerArray;
};

countSmaller([5,2,6,1]);
countSmaller([-1]);
countSmaller([-1,-1]);
countSmaller([1,9,7,8,5]);