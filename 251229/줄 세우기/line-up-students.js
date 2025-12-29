class Student {
    constructor(height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    const [h, w] = input[i].split(' ').map(Number);
    arr.push(new Student(h, w, i));
}

function compare(a, b) {
    if (a.height !== b.height) return b.height - a.height;
    if (a.weight !== b.weight) return b.weight - a.weight;
    return a.number - b.number;
}

arr.sort(compare);

arr.forEach(el => console.log(el.height, el.weight, el.number));