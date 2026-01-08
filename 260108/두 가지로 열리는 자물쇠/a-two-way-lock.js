const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const first = input[1].split(' ').map(Number);
const second = input[2].split(' ').map(Number);

function inRange(num, x) {
    return Math.abs(num - x) <= 2 || n - Math.abs(num - x) <= 2;
}

const first_arr = [];
const second_arr = [];

for (let num of first) {
    const temp = [];
    for (let i = 1; i <= n; i++) {
        if (inRange(num, i)) {
            temp.push(i);
        }
    }
    first_arr.push(temp);
}

for (let num of second) {
    const temp = [];
    for (let i = 1; i <= n; i++) {
        if (inRange(num, i)) {
            temp.push(i);
        }
    }
    second_arr.push(temp);
}

const first_can = first_arr[0].length * first_arr[1].length * first_arr[2].length;
const second_can = second_arr[0].length * second_arr[1].length * second_arr[2].length;
let total = first_can + second_can;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (first_arr[0][i] === second_arr[0][j]) {
            for (let k = 0; k < 5; k++) {
                for (let l = 0; l < 5; l++) {
                    if (first_arr[1][k] === second_arr[1][l]) {
                        for (let m = 0; m < 5; m++) {
                            for (let n = 0; n < 5; n++) {
                                if (first_arr[2][m] === second_arr[2][n]) {
                                    total--;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(total)