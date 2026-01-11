const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, M, D, S] = input[0].split(' ').map(Number);

const whoEatCheeseWhen = [];
for (let i = 0; i < D; i++) {
    const [p, cheese, t] = input[i+1].split(' ').map(Number);
    whoEatCheeseWhen.push([p, cheese, t]);
}

const whoSickWhen = [];
for (let i = 0; i < S; i++) {
    const [p, t] = input[i+D+1].split(' ').map(Number);
    whoSickWhen.push([p, t]);
}

function getSickPerson(eat, sick) {
    let result = [];
    for (let [eatPerson, eatTime] of eat) {
        for (let [sickPerson, sickTime] of sick) {
            if (result.includes(eatPerson)) continue;

            if (eatPerson === sickPerson) {
                if (eatTime < sickTime) {
                    result.push(eatPerson);
                }
            } else {
                result.push(eatPerson);
            }
        }
    }
    return result;
}

let ans = 0;
// 치즈를 순회(치즈는 1번부터 시작)
for (let i = 1; i <= M; i++) {
    // 치즈 섭취 정보를 순회
    const whoEatCheese = [];
    for (let [person, cheese, time] of whoEatCheeseWhen) {
        if (cheese === i) {
            whoEatCheese.push([person, time]);
        }
    }

    ans = Math.max(ans, getSickPerson(whoEatCheese, whoSickWhen).length)
}

console.log(ans);