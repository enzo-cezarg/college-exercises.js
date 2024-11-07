export class Stack {
    #pilha;

    constructor() {
        this.#pilha = [];
    }

    push(valor) {
        this.#pilha.push(valor);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack empty!');
        }
        return this.#pilha.pop();
    }

    isEmpty() {
        return this.size === 0;
    }

    get size() { 
        return this.#pilha.length 
    }

    get top() { 
        if (this.isEmpty()) {
            throw new Error('Stack empty!');
        }
        return this.#pilha[this.size-1];
    }
}

// Teste da Stack
let s = new Stack;

s.push(10);
s.push(20);
s.push(30);
s.push(40);

while (!s.isEmpty()) {
    console.log(s.pop());
}