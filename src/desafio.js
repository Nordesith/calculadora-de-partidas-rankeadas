let vitorias = parseInt(Math.random() * 120 + 1);
let derrotas = parseInt(Math.random() * 120 + 1);

function calculaSaldo(vitorias,derrotas){
    let saldo = vitorias - derrotas;
    if (saldo < 0 ){
      saldo = 0;
    }
    return saldo;
}

let saldoVitorias = calculaSaldo(vitorias, derrotas);

function classificaRank(saldoVitorias){
  let rank = [
      { saldo: 10, ranking: "Ferro" },
      { saldo: 20, ranking: "Bronze" },
      { saldo: 50, ranking: "Prata" },
      { saldo: 80, ranking: "Ouro" },
      { saldo: 90, ranking: "Diamante" },
      { saldo: 100, ranking: "Lendário" },
      { saldo: Infinity, ranking: "Imortal" }
  ];

  let ranking = "";

  for (let i = 0; i < rank.length; i++) {
      if (saldoVitorias <= rank[i].saldo) {
          ranking = rank[i].ranking;
          break;
      }
  }
  return ranking;
}

let ranking = classificaRank(saldoVitorias);

console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${ranking}.`);