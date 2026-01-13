const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x, y] = input[0].split(' ').map(Number);

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

let ans = 0;
for (let i = x; i <= y; i++) {
    if (isPalindrome(String(i))) ans++;
}

console.log(ans);