// Ejercicio 1:
// Nota: mi página tiene varios colores según el div, no es al body, como no quiero que se cambie eso, voy a hacer lo de los botones aplicados a una caja, que cambiará de color según el botón.

function changeColor(color) {
    var box = document.querySelector('.box');
    if (color === 'green') {
      box.style.backgroundColor = 'green';
    } else if (color === 'blue') {
      box.style.backgroundColor = 'blue';
    } else if (color === 'red') {
      box.style.backgroundColor = 'red';
    } else if (color === 'reset') {
      box.style.backgroundColor = '#556677';
    }
  }

 // Ejercicio 2:
 // Nota: Este ejercicio solo me funcionaba si tenia el script de js cargado despues del html

 const filterSelect = document.getElementById('filter-select');
 const cardLanguages = document.querySelectorAll('.card-languages span');
 
 filterSelect.addEventListener('change', (event) => {
   const selectedValue = event.target.value;
   cardLanguages.forEach((span) => {
     if (selectedValue === 'all') {
       span.style.display = 'inline-block';
     } else if (span.classList.contains(selectedValue)) {
       span.style.display = 'inline-block';
     } else {
       span.style.display = 'none';
     }
   });
 });