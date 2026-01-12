const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, b] = input[0].split(' ').map(Number);
const presents = [];

class Present {
    constructor(price, deliveryFee) {
        this.price = price;
        this.deliveryFee = deliveryFee;
    }
}

for (let i = 1; i <= n; i++) {
    const [p, s] = input[i].split(' ').map(Number);
    presents.push(new Present(p, s));
}

let ans = 0;
for (let i = 0; i < n; i++) {
    const present = presents[i];
    let total = present.price / 2 + present.deliveryFee;
    const arr = [total];
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        arr.push(presents[j].price + presents[j].deliveryFee);
    }
    arr.sort((a, b) => a - b);

    let cnt = 0;
    let sum = 0;
    for (let num of arr) {
        if (sum >= b) break;
        sum += num;
        cnt++;
    }
    if (sum > b) cnt--;

    ans = Math.max(ans, cnt);
}

console.log(ans);