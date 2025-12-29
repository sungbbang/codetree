const fs = require('fs');

class Product {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

const [name, code] = fs.readFileSync(0).toString().split(' ');

const product1 = new Product('codetree', 50);
const product2 = new Product(name, Number(code));

console.log(`product ${product1.code} is ${product1.name}`);
console.log(`product ${product2.code} is ${product2.name}`);