// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> string
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto('oi');
// imprimeTexto("outro texto");
imprimeTexto('outro texto');


//chamando uma função dentro de outra função
imprimeTexto(soma());

// três formas de escrever funções

function soma(){
  //outros códigos
  //vários console.log()
  //ATENÇÃO A LINHA DO RETURN TEM QUE SER A ULTIMA LINHA DO CODITO DEPOIS QUE ELA RETORNA O RESTO DA FUNÇÃO NÃO SERA EXECUTADA ==================================================
  return 2 + 2;
}

// console.log(soma())