const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input[0].split(" ").map(Number);

const total = arr.reduce((acc, curr) => acc + curr, 0);

let ans = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < 5; i++) {
    for (let j = i+1; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            for (let l = k+1; l < 5; l++) {
                if (k === i || k === j || l === i || l === j) {
                    continue;
                }

                const team1 = arr[i] + arr[j];
                const team2 = arr[k] + arr[l];
                const team3 = total - team1 - team2;

                if (team1 === team2) continue;
                if (team1 === team3) continue;
                if (team2 === team3) continue;
                
                const max = Math.max(team1, team2, team3);
                const min = Math.min(team1, team2, team3);

                ans = Math.min(ans, max-min);
            }
        }
    }
}

if (ans === Number.MAX_SAFE_INTEGER) {
    console.log(-1);
} else {
    console.log(ans);
}