const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');

class Spy {
    constructor(secretCode, meetingPoint, time) {
        this.secretCode = secretCode;
        this.meetingPoint = meetingPoint;
        this.time = time;
    }
}

const s = new Spy(s_code, m_point, time);

console.log(`secret code : ${s.secretCode}`);
console.log(`meeting point : ${s.meetingPoint}`);
console.log(`time : ${s.time}`);