const qtdJogos = document.getElementById('qtdJogos');
const qtdNumeros = document.getElementById('qtdNumeros');
const btnGerar = document.getElementById('btnGerar');
const jogos = document.getElementById('jogos');

var num = [];
const q1 = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25];
const q2 = [6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30];
const q3 = [31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
const q4 = [36, 37, 38, 39, 40, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60];
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
let n = Math.floor(Math.random() * 60) + 1;
let jj = 0;

btnGerar.addEventListener('click', () => {
  if (qtdNumeros.value > 8) {
    alert('Quantidade de números inválida! Digite um número entre 6 e 8.');
    return;
  }
  jogos.innerHTML = '';
  for (let i = 0; i < qtdJogos.value; i++) {
    const jogo = document.createElement('div');
    jogo.classList.add('jogo');
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    jj = 0;
    while (jj < qtdNumeros.value) {
      n = Math.floor(Math.random() * 60) + 1;
      while (num.includes(n)) {
        n = Math.floor(Math.random() * 60) + 1;
      }
      if (q1.includes(n) && count1 < 2) {
        num.push(n);
        count1++;
        jj++;
      }
      if (q2.includes(n) && count2 < 2) {
        num.push(n);
        count2++;
        jj++;
      }
      if (q3.includes(n) && count3 < 2) {
        num.push(n);
        count3++;
        jj++;
      }
      if (q4.includes(n) && count4 < 2) {
        num.push(n);
        count4++;
        jj++;
      }
    }
    


    num.sort((a, b) => a - b);
    num.forEach(n => {
      const numero = document.createElement('span');
      numero.classList.add('numero');
      numero.textContent = n + ' ';
      jogo.appendChild(numero);
    });
    num = [];

    jogos.appendChild(jogo);
  }
});