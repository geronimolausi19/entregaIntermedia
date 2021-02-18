
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


function saludar(){
    let nombre = $("#nombre").val()
   
    let edad = $("#edad").val()
    
 if(edad <=18){
     alert("Bienvenido " + nombre + " " + ", eres menor de edad, cualquier compra que hagas tiene que estar autorizada por un mayor")
 }else {
     alert("Bienvenido " + nombre)
 }
}