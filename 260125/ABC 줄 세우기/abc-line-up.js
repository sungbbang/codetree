const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ");

let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-1-i; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            cnt++;
        }
    }
}

console.log(cnt);