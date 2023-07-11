// script.js

function incrementarCantidad(inputId) {
  var input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
}

function decrementarCantidad(inputId) {
  var input = document.getElementById(inputId);
  var valor = parseInt(input.value);
  if (valor > 1) {
    input.value = valor - 1;
  }
}

function comprarChocolate(chocolate) {
  var cantidadInputId = 'cantidad-' + chocolate.replace(/ /g, "-");
  var cantidad = document.getElementById(cantidadInputId).value;
  
  var enlaceWhatsApp = 'https://api.whatsapp.com/send?phone=+51925566082&text=¡Hola! Quisiera comprar ' + cantidad + ' chocolate(s) de ' + chocolate;
  enlaceWhatsApp = encodeURI(enlaceWhatsApp);
  
  window.location.href = enlaceWhatsApp;
}


