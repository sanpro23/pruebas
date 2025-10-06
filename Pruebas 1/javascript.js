document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;

  const saludo = `Hola ${nombre} ${apellido}`;
  document.getElementById('saludo').textContent = saludo;
});

