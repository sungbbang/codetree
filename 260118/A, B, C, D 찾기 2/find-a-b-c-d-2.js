const fs = require("fs");
const numbers = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function isEqual(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function find() {
    for (let a = 1; a <= 40; a++) {
        for (let b = a; b <= 40; b++) {
            for (let c = b; c <= 40; c++) {
                for (let d = c; d <= 40; d++) {
                    const arr = [a, b, c, d,
                                a+b, b+c, c+d, d+a, a+c, b+d,
                                a+b+c, a+b+d, a+c+d, b+c+d, a+b+c+d
                                ];
                    if (isEqual(arr, numbers)) {
                        return [a, b, c, d];
                    }
                }
            }
        }
    }
}

const [a, b, c, d] = find();
console.log(a, b, c, d);