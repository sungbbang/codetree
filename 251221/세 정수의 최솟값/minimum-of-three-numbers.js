const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(Number);

if (a <= b && a <= c) {
    console.log(a);
} else if (b <= a && b <= c) {
    console.log(b);
} else {
    console.log(c);
}