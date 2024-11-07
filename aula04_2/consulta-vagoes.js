import { validate } from "bycontract";
import nReadlines from "n-readlines";


class Vagao {
    #id;
    #capCarga;
    #livre;


    constructor(id, capCarga) {
        validate(arguments, ["Number","Number"]);
        if (id <= 0 || capCarga <= 0) {
            throw new Error("Dados invalidas");
        }
        this.#id = id;
        this.#capCarga = capCarga;
        this.#livre = true;
    }


    get id() {
        return this.#id;
    }


    get capCarga() {
        return this.#capCarga;
    }


    get livre() {
        return this.#livre;
    }


    ocupa() {
        this.#livre = false;
    }


    libera() {
        this.#livre = true;
    }


    toString() {
        let str = `[Vagao: ${this.#id}, CapCarga: ${this.#capCarga}, Livre: ${(this.#livre) ? 'sim' : 'não'}]`;
        return str;
    }
}


class Garagem {
    #vagoes;

    constructor(nArq) {
        validate(nArq,"string");
        this.#vagoes = [];
        this.carregaDados(nArq);
    }

    carregaDados(nArq) {
        validate(nArq,"string");
        let arq = new nReadlines(nArq);
        let buf = "";
        let line = "";
        let dados = "";

        arq.next();
        while (buf = arq.next()) {
            line = buf.toString('utf8');
            dados = line.split(",");
            let id = Number(parseInt(dados[0]));
            let capCarga = Number(parseInt(dados[1]));
            let vagao = new Vagao(id,capCarga);
            this.#vagoes.push(vagao);
        }
    }

    get vagoes(){
        return this.#vagoes.values();
    }
}




let garagem = new Garagem("aula05/vagoes.csv");
let cont = 0;

for(let v of garagem.vagoes){
    if (v.capCarga === 5000){
        v.ocupa();
        cont++;
        if (cont === 4) break;
    }
}
// Exibe a lista dos vagoes
for(let v of garagem.vagoes){
    console.log(v.toString());
}
