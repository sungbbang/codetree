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
const names = []
for (let i = 1; i <= n; i++) {
    const [name, bunji, region] = input[i].split(' ');
    people.push(new Person(name, bunji, region));
    names.push(name);
}

names.sort();
const idx = names.length - 1;

for (let i = 0; i < n; i++) {
    if (people[idx].name == people[i].name) {
        console.log(`name ${people[i].name}`);
        console.log(`addr ${people[i].bunji}`);
        console.log(`city ${people[i].region}`);
        break;
    }
}
