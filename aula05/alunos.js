function matriculaAlunos(d1,d2,d3) {

    let alunosMatriculados = new Set([...d1,...d2,...d3]);
    console.log(`Alunos matriculados:`);
    console.log(alunosMatriculados);

    let D1 = new Set(d1);
    let D2 = new Set(d2);
    let D3 = new Set(d3);

    let D1menosD2 = new Set(Array.from(D1).filter(x => !D2.has(x)));
    let D1menosD3 = new Set( Array.from(D1menosD2).filter(x => !D3.has(x)) );

    console.log('Matriculados so em D1: ');
    console.log(D1menosD3);
    
    let interseccao = new Set(Array.from(D1).filter(x => D2.has(x)));
    console.log('Matriculados simultaneamente em D1 e D2:');
    console.log(interseccao);

}

let d1 = ['Carlos','Pedro','Enzo','Rafael'];
let d2 = ['Carlos','Pedro','Luiggi','Richard','Caetano'];
let d3 = ['Enzo','Luiggi','Anael','Igor'];

matriculaAlunos(d1, d2, d3);