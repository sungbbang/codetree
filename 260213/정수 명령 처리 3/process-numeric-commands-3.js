class Deque {
    constructor() {
        this.dq = [];
    }

    pushFront(x) {
        this.dq.unshift(x);
    }

    pushBack(x) {
        this.dq.push(x);
    }

    popFront() {
        return this.dq.shift();
    }

    popBack() {
        return this.dq.pop();
    }

    size() {
        return this.dq.length;
    }

    empty() {
        return this.size() === 0 ? 1 : 0;
    }

    front() {
        return this.dq[0];
    }

    back() {
        return this.dq[this.size() - 1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

const dq = new Deque();

for (let i = 1; i <= n; i++) {
    let [c, num] = input[i].split(' ');
    num = Number(num);

    if (c === 'push_front') {
        dq.pushFront(num);
    } else if (c === 'push_back') {
        dq.pushBack(num);
    } else if (c === 'pop_front') {
        console.log(dq.popFront());
    } else if (c === 'pop_back') {
        console.log(dq.popBack());
    } else if (c === 'size') {
        console.log(dq.size());
    } else if (c === 'empty') {
        console.log(dq.empty());
    } else if (c === 'front') {
        console.log(dq.front());
    } else if (c === 'back') {
        console.log(dq.back());
    }
}

