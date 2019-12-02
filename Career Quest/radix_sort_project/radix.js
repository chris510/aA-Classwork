
const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}

input1 = [4, 9, 0, 23, 15, 100, 66, 41, 5, 10];
input2 = [0, 4, 5, 9, 10, 15, 23, 41, 66, 100];
input3 = [100, 66, 41, 23, 15, 10, 9, 5, 4, 0];

console.log(radixSort(input1));
console.log(radixSort(input2));
console.log(radixSort(input3));