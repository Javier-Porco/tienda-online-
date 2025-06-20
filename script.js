let contador = 0;
let historial = [];

function actualizarContador() {
  document.getElementById("contador").textContent = contador;
}

function actualizarHistorial() {
  const lista = document.getElementById("historial");
  lista.innerHTML = "";
  historial.forEach((valor, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${valor}`;
    lista.appendChild(item);
  });
}

// Manejo de teclado
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    contador++;
    actualizarContador();
  }

  if (event.code === "KeyA") {
    historial.unshift(contador);
    if (historial.length > 100) historial.pop();
    contador = 0;
    actualizarContador();
    actualizarHistorial();
  }
});

document.addEventListener("click", function(event) {
  // Evitar que el clic en botones u otros elementos genere errores
  if (event.target.tagName !== "BUTTON" && event.target.id !== "historial") {
    contador++;
    actualizarContador();
  }
}, false);

// (opcional) soporte para pantallas táctiles puras
document.addEventListener("touchstart", function(event) {
  contador++;
  actualizarContador();
}, { passive: true });
