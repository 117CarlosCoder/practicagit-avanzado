let contador = 0;
const valorEl = document.getElementById('valor');
const btnInc = document.getElementById('btn-incrementar');
const btnDec = document.getElementById('btn-decrementar');

function actualizar() {
  valorEl.textContent = contador;
}

btnInc.addEventListener('click', () => {
  contador = contador * 5;
  actualizar();
});

btnDec.addEventListener('click', () => {
  contador--;
  actualizar();
});
