const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let line = '';

    if (i % 2 === 0) {
        for (let j = n; j > 0; j--) {
            line += j;
        }
    } else {
        for (let j = 1; j <= n; j++) {
            line += j;
        } 
    }
    
    console.log(line);
}