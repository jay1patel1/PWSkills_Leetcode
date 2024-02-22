/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false
    }

    const obj  = {}

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else if (obj[s[i]] !== undefined){
            obj[s[i]]++
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]] === undefined) {
            return false
        } else if (obj[t[i]] !== undefined) {
            obj[t[i]]--;
            if (obj[t[i]] === 0) {
                delete obj[t[i]];
            }
        }
    }

    return (Object.keys(obj).length === 0);
};

isAnagram("anagram","nagaram");
isAnagram("rat","car");
