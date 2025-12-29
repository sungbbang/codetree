class Weather {
    constructor(date, day, weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let ans = new Weather('9999-99-99', '', '');
for (let i = 1; i <= n; i++) {
    const [date, day, weather] = input[i].split(' ');

    if (weather === 'Rain') {
        if (ans.date >= date) {
            ans = {...ans, date, day, weather};
        }
    }
}

console.log(`${ans.date} ${ans.day} ${ans.weather}`);