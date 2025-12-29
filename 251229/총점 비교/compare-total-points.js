class Person {
    constructor(name, sub1, sub2, sub3) {
        this.name = name;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
        this.total = sub1 + sub2 + sub3
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    const [name, sub1, sub2, sub3] = input[i].split(' ');
    arr.push(new Person(name, Number(sub1), Number(sub2), Number(sub3)));
}

arr.sort((a, b) => a.total - b.total);
arr.forEach(el => console.log(el.name, el.sub1, el.sub2, el.sub3));