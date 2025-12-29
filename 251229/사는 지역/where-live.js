const fs = require('fs');

class Person {
    constructor(name, bunji, region) {
        this.name = name;
        this.bunji = bunji;
        this.region = region;
    }
}

const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const people = [];
for (let i = 1; i <= n; i++) {
    const [name, bunji, region] = input[i].split(' ');
    people.push(new Person(name, bunji, region));
}
people.sort((a, b) => a.name - b.name);

const ans = people[0];
console.log(`name ${ans.name}`);
console.log(`addr ${ans.bunji}`);
console.log(`city ${ans.region}`);