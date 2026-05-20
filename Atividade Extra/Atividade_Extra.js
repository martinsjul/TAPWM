const pessoa1 = { nome: "Daniel", idade: 15, hobby: "Pintar" };

const pessoa2 = new Object();
pessoa2.nome = "Julia";
pessoa2.idade = 18;
pessoa2.hobby = "Ler";

function Pessoa3(nome, idade, hobby) {
  this.nome = nome;
  this.idade = idade;
  this.hobby = hobby;
}
const novaPessoa3 = new Pessoa3("Leandro", 16, "Jogar");

class Pessoa4 {
  constructor(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
  }
}
const novaPessoa4 = new Pessoa4("Bomfim", 19, "Música");

function apresentar(p1, p2, p3, p4) {
    console.log(`Olá, meu nome é ${p1.nome}, tenho ${p1.idade} anos e meu hobby é ${p1.hobby}`);
    console.log(`Olá, meu nome é ${p2.nome}, tenho ${p2.idade} anos e meu hobby é ${p2.hobby}`);
    console.log(`Olá, meu nome é ${p3.nome}, tenho ${p3.idade} anos e meu hobby é ${p3.hobby}`);
    console.log(`Olá, meu nome é ${p4.nome}, tenho ${p4.idade} anos e meu hobby é ${p4.hobby}`);
  
}

apresentar(pessoa1, pessoa2, novaPessoa3, novaPessoa4);