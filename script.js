const btnVoltar = document.querySelector("#voltar");
const btnClear = document.querySelector("#limpar-visor");
const somar = document.querySelector("#igual");
const buttons = [...document.querySelectorAll('.numeros')];
const operar = [...document.querySelectorAll('.operadores')];
function inserir(num) {
   document.querySelector('#visor').value += num;
}

buttons.map((button) => {
   button.addEventListener('click', (el) => {
      let visor = document.querySelector('#visor');
      const valor = button.textContent;
      if (visor.value.length == '1') {
         visor.value = " ";
         inserir(valor);
      }
      else {
         inserir(valor);
      }

   });
});

operar.map((oper) => {
   oper.addEventListener('click', (event) => {
      const valor = oper.value;
      inserir(valor);
   });
});


btnVoltar.addEventListener('click', () => {
   let visor = document.querySelector('#visor').value;
   document.querySelector("#visor").value = visor.substring(0, visor.length - 1);
   if (visor.length <= '2') {
      document.querySelector('#visor').value = "0";
   }
});

btnClear.addEventListener('click', () => {
   document.querySelector('#visor').value = "0";
});

somar.addEventListener('click', () => {
   let visor = document.querySelector('#visor').value;
   let str = visor.replace(/x/g, "*").replace(/÷/g, "/");
   let res = eval(str);

   if (visor) {
      document.querySelector('#visor').value = res;
   }
   else {
      document.querySelector('#visor').value = 'valores não definido...'
   }
});

let input = document.querySelector('#visor');
input.value = '0';



// input.addEventListener('input', function() {
//   if (this.value.length === 2 && this.value.startsWith('0')) {
//     // Se o valor começa com '0' e o usuário digitou um segundo caractere,
//     // remova o '0'.
//     this.value = this.value[1];
//   } else if (this.value.length === 0) {
//     // Se o usuário apagou todo o texto, adicione um '0'.
//     this.value = '0';
//   }
// });