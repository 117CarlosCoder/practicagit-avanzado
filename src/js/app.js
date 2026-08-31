let contador = 0;
const valorEl = document.getElementById('valor');
const btnInc = document.getElementById('btn-incrementar');
const btnDec = document.getElementById('btn-decrementar');

function actualizar() {
  valorEl.textContent = contador;
}

btnInc.addEventListener('click', () => {
  if (contador >= 0) {
    contador++;
    actualizar();
  } else {
    alert("El contador no puede ser negativo");
  }
});

btnDec.addEventListener('click', () => {
  if (contador <= 0) {
    alert("El contador no puede ser negativo");
  } else {
    contador--;
    actualizar();
  }
});
