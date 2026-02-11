class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    empty() {
        return this.items.length > 0 ? 0 : 1;
    }

    top() {
        return this.items[this.items.length - 1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1);

const stack = new Stack();
for (let command of commands) {
    let [c, num] = command.split(' ');
    num = Number(num);

    if (c === 'push') {
        stack.push(num);
    } else if (c === 'pop') {
        console.log(stack.pop());
    } else if (c === 'size') {
        console.log(stack.size());
    } else if (c === 'empty') {
        console.log(stack.empty());
    } else if (c === 'top') {
        console.log(stack.top());
    }
}