export class Deque {
    #pilha;

    constructor() {
        this.#pilha = [];
    }

    enqueue(valor) {
        this.#pilha.push(valor);
    }

    firstEnqueue(valor) {
        this.#pilha.unshift(valor);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Deque empty!');
        }
        return this.#pilha.splice(0,1)[0];
    }

    lastDequeue() {
        if (this.isEmpty()) {
            throw new Error('Deque empty!');
        }
        return this.#pilha.pop();
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