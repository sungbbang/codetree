const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const people = []
for (let i = 1; i <= n; i++) {
    const [name, height, weight] = input[i].split(' ');
    people.push(new Person(name, Number(height), Number(weight)));
}

people.sort((a, b) => a.height - b.height);

people.forEach(person => {
    console.log(`${person.name} ${person.height} ${person.weight}`);
})