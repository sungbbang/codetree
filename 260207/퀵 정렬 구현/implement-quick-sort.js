const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr).join(' '));