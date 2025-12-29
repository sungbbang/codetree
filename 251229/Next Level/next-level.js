class User {
    constructor(id = 'codetree', level = 10) {
        this.id = id;
        this.level = level;
    }
}

const fs = require('fs');
const [id, level] = fs.readFileSync(0).toString().trim().split(' ');

const user1 = new User();
const user2 = new User(id, level);

console.log(`user ${user1.id} lv ${user1.level}`);
console.log(`user ${user2.id} lv ${user2.level}`);