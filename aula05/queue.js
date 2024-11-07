export class Queue {
    #pilha;

    constructor() {
        this.#pilha = [];
    }

    enqueue(valor) {
        this.#pilha.push(valor);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue empty!');
        }
        return this.#pilha.splice(0,1)[0];
    }

    isEmpty() {
        return this.size === 0;
    }

    get size() { 
        return this.#pilha.length 
    }

    get first() { 
        if (this.isEmpty()) {
            throw new Error('Queue empty!');
        }
        return this.#pilha[0];
    }

    get last() { 
        if (this.isEmpty()) {
            throw new Error('Queue empty!');
        }
        return this.#pilha[this.size-1];
    }
}

let s = new Queue;

s.enqueue(10);
s.enqueue(20);
s.enqueue(30);
s.enqueue(40);

while (!s.isEmpty()) {
    console.log(s.dequeue());
}