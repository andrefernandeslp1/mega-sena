const qtdJogos = document.getElementById('qtdJogos');
      const qtdNumeros = document.getElementById('qtdNumeros');
      const btnGerar = document.getElementById('btnGerar');
      const jogos = document.getElementById('jogos');

      // Função para gerar números aleatórios ordenados
      function gerarNumeros(qtdNumeros) {
        const numeros = [];
        while (numeros.length < qtdNumeros) {
          const numero = Math.floor(Math.random() * 60) + 1;
          if (numeros.indexOf(numero) === -1) {
            numeros.push(numero);
          }
        }
        return numeros.sort((a, b) => a - b);
      }

      btnGerar.addEventListener('click', () => {
        jogos.innerHTML = '';
        for (let i = 0; i < qtdJogos.value; i++) {
          const numeros = gerarNumeros(qtdNumeros.value);
          const div = document.createElement('div');
          div.classList.add('jogo');
          numeros.forEach(numero => {
            const span = document.createElement('span');
            span.classList.add('numero');
            span.innerHTML = numero;
            div.appendChild(span);
          });
          jogos.appendChild(div);
        }
      });