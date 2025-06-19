let contador = 0;
let historial = [];

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    contador++;
    document.getElementById("contador").textContent = contador;
  }

  if (event.code === "KeyA") {
    // Guardar valor y reiniciar
    historial.unshift(contador); // agrega al principio
    if (historial.length > 100) {
      historial.pop(); // elimina el más viejo
    }
    contador = 0;
    document.getElementById("contador").textContent = contador;

    // Mostrar historial
    const lista = document.getElementById("historial");
    lista.innerHTML = ""; // limpiar
    historial.forEach((valor, index) => {
      const item = document.createElement("li");
      item.textContent = `${index + 1}. ${valor}`;
      lista.appendChild(item);
    });
  }
});

