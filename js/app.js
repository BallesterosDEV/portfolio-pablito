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
  // Nota: no me ha funcionado hasta que no he puesto el js script despues del body.
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

  // Ejercicio 3:
  // Nota: Lo he intentado como he podido, creo que no funciona como debería.

  const subjectInput = document.getElementById("subject");
const ccInput = document.getElementById("cc");
const bodyInput = document.getElementById("body");

const checkValidity = (input, pattern) => {
  if (pattern && !input.value.match(pattern)) {
    input.style.border = "2px solid red";
    const error = document.createElement("p");
    error.textContent = "El valor no es válido";
    error.style.color = "red";
    input.parentNode.insertBefore(error, input.nextSibling);
  } else if (input.value === "") {
    input.style.border = "2px solid red";
    const error = document.createElement("p");
    error.textContent = "Este campo es obligatorio";
    error.style.color = "red";
    input.parentNode.insertBefore(error, input.nextSibling);
  } else {
    input.style.border = "2px solid green";
    const error = input.nextSibling;
    if (error && error.textContent.includes("no es válido")) {
      error.remove();
    }
    if (error && error.textContent.includes("obligatorio")) {
      error.remove();
    }
  }
};

subjectInput.addEventListener("blur", () => {
  checkValidity(subjectInput);
});

ccInput.addEventListener("blur", () => {
  checkValidity(ccInput, ccInput.pattern);
});

bodyInput.addEventListener("blur", () => {
  checkValidity(bodyInput);
});