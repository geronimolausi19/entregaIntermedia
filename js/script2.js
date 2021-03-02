
// function compra(){
//   let nombre = $('#nombre');
//   let nombreUsuario = nombre.val();
//   let apellido = $('#apellido');
//   let apellidoUsuario = apellido.val();
//   if ($('#edad') >= 18){
//       alert('Bienvenido '+ nombreUsuario + '' + apellidoUsuario + '. Tu compra fue validada.')
//   } else {
//       alert('Sos menor de edad, tu compra no fue validada.')
//   }
// }


// function saludar(){
//     let nombre = $("#nombre").val()
   
//     let edad = $("#edad").val()
    
//  if(edad <=18){
//      alert("Bienvenido " + nombre + " " + ", eres menor de edad, cualquier compra que hagas tiene que estar autorizada por un mayor")
//  }else {
//      alert("Bienvenido " + nombre)
//  }
// }














let email = $("#email").val()


function ValidarContraseña(){
    let pass = $("#contraseña").val()

   return pass.length>8

}

function ValidarEmail (){
    let email = $("#email").val()
    let exprecionRegular = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    return exprecionRegular.test(email)
    
} 
























// ajax
// obtuvimos el boton
const $btnmostrarfoto = document.getElementById("mostrar-foto")
// creamos el evento
$btnmostrarfoto.addEventListener("click", traerfoto)
// funcion async para traer la data de jasom
async function traerfoto() {
    const fotos= await $.get("json/data.json")
    mostrarFotos(fotos)
  }

  function mostrarFotos (fotos){
    // obtuvimos el div, la base para rellenar
    const $listafotos = document.getElementById("lista-fotos")
    // cramos un acumalador y lupiamos a la variables fotos
    let contenidoHTML =" "   
    for(let i = 0;i<fotos.length;i++) {
        const foto = fotos[i]
        contenidoHTML+= tarjetaFoto(foto)
    } 
    $listafotos.innerHTML= contenidoHTML
  }
// tarjeta foto seria la estructura html en js
  function tarjetaFoto(foto){
      const tarjeta =`
      <!-- produto -->
      <div>
      <div class="foto">
          <img src="${foto.imagen}" alt="img-producto">
          
      </div>
    
    
      `
      return tarjeta
  }
    




















//input mdn

//http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
//https://codepen.io/avilamarco/pen/LYZExWx

// servidores
// https://github.com/public-apis/public-apis
//googleadsent
// https://picsum.photos/
// https://flexboxfroggy.com/#es
// https://repl.it/join/umcejfjp-avilamarco