class Agent {
    constructor(codeName = 0, score = 0) {
        this.codeName = codeName;
        this.score = score;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const agentList = [];
for (let i = 0; i < 5; i++) {
    const [codeName, score] = input[i].split(' ');
    agentList.push(new Agent(codeName, Number(score)));
}

let min = agentList[0];
for (let i = 0; i < 5; i++) {
    if (min.score >= agentList[i].score) {
        min = agentList[i];
    }
}

console.log(min.codeName, min.score);