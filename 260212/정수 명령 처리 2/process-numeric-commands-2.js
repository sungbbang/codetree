class Queue {
    constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);
    }

    pop() {
        return this.q.shift();
    }

    size() {
        return this.q.length;
    }

    empty() {
        return this.size() === 0 ? 1 : 0;
    }

    front() {
        return this.q[0];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const queue = new Queue();
for (let i = 1; i <= n; i++) {
    let [c, num] = input[i].split(' ');
    num = Number(num);

    if (c === 'push') {
        queue.push(num);
    } else if (c === 'pop') {
        console.log(queue.pop());
    } else if (c === 'size') {
        console.log(queue.size());
    } else if (c === 'empty') {
        console.log(queue.empty());
    } else if (c === 'front') {
        console.log(queue.front());
    }
}