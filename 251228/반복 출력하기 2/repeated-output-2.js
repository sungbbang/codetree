const fs = require('fs');
const n = Number(fs.readFileSync(0).toString())

function printHelloWorld(n) {
    if (n === 0) return;
    printHelloWorld(n - 1);
    console.log('HelloWorld');
}

printHelloWorld(n);