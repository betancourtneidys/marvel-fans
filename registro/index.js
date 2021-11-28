document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre-apellido').value;
  if(nombre.length == 0) {
    alert('Ingrese su nombre');
    return;
  }
  
  var password = document.getElementById('password').value;
  if (password.length < 6) {
    alert('La clave debe contener al menos 6 caracteres');
    return;
  }

  var email = document.getElementById('email').value;
  if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(email)){
    alert("La dirección de email " + email + " es correcta.");
   } else {
    alert("La dirección de email es incorrecta.");
   }
}

