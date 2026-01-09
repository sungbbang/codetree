const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => a - b);

const team1Sum = arr[0] + arr[5];
const team2Sum = arr[1] + arr[4];
const team3Sum = arr[2] + arr[3];

const diff = Math.max(team1Sum, team2Sum, team3Sum) - Math.min(team1Sum, team2Sum, team3Sum);

console.log(diff);