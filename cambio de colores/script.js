function cambiarColor() {
    // Genera un color aleatorio en formato hexadecimal
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambia el color de fondo del body
    document.body.style.backgroundColor = colorAleatorio;
  }
  