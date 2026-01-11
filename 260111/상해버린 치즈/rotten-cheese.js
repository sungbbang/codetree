const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, M, D, S] = input[0].split(' ').map(Number);

const whoEatWhen = [];
for (let i = 0; i < D; i++) {
    const [p, cheese, t] = input[i+1].split(' ').map(Number);
    whoEatWhen.push([p, cheese, t]);
}

const whoSickWhen = [];
for (let i = 0; i < S; i++) {
    const [p, t] = input[i+D+1].split(' ').map(Number);
    whoSickWhen.push([p, t]);
}

function isStale(cheeseId) {
    for (let [sickPerson, sickTime] of whoSickWhen) {
        let alreadySick = true;
        for (let [eatPerson, cheese, eatTime] of whoEatWhen) {
            if (cheese === cheeseId && eatPerson === sickPerson && eatTime < sickTime) {
                alreadySick = false;
                break;
            }
        }
        if (alreadySick) {
            return false;
        }
    }
    return true;
}

let ans = 0;
for (let i = 1; i <= M; i++) {
    // 치즈가 상했으면
    if (isStale(i)) {
        const atePeople = [];
        for (let j = 0; j < D; j++) {
            if (whoEatWhen[j][1] !== i) continue;
            if (atePeople.includes(whoEatWhen[j][0])) continue;
            
            atePeople.push(whoEatWhen[j][0]);
        }
        ans = Math.max(ans, atePeople.length);  
    }
}

console.log(ans);