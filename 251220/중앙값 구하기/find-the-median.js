const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

// a가 가장 클 때
if (a >= b && a >= c) {
    if (b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
// b가 가장 클 때
else if (b >= a && b >= c) {
    if (a >= c) {
        console.log(a);
    } else {
        console.log(c);
    }
}
// c가 가장 클 때
else if (c >= a && c >= b) {
    if (a >= b) {
        console.log(a);
    } else {
        console.log(b);
    }
}