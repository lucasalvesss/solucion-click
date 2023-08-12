document.addEventListener('DOMContentLoaded', function () {
  
  let div = document.getElementById('div');
  let boton = document.getElementById('button');

  
  boton.addEventListener('click', function (event) {
    alert('Hola desde el botón!');
    event.stopPropagation();
  });

  // Agregar evento clic al div
  div.addEventListener('click', function () {
    alert('Hola! Soy el div');
  });
});