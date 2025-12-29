class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = [];
for (let i = 0; i < 5; i++) {
    const [name, height, weight] = input[i].split(' ');
    arr.push(new Person(name, Number(height), Number(weight)));
}

const sortedArrByName = [...arr].sort((a, b) =>
    a.name.localeCompare(b.name)
);

console.log('name');
sortedArrByName.forEach(el =>
    console.log(el.name, el.height, el.weight.toFixed(1))
);
console.log();

const sortedArrByHeight = [...arr].sort((a, b) =>
    b.height - a.height
);

console.log('height');
sortedArrByHeight.forEach(el =>
    console.log(el.name, el.height, el.weight.toFixed(1))
);
