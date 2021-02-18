class producto {
  constructor(nombre, talle, precio, imagen, stock) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = precio;
    this.imagen = imagen;
    this.stock = stock;
    this.cantidad = 1
  }
}

let baseDeDatos = [];
let carrito = [];
//elementos HTML
const btnVaciarCarrito = document.getElementById("btn-vaciar-carrito")

//Eventos
btnVaciarCarrito.addEventListener("click", vaciarCarrito)

let producto1 = new producto(
  "Remera sucundum",
  "Large",
  3000,
  "https://cdn.shopify.com/s/files/1/0036/4409/6627/products/hormigaremerablancawater_c316dfd3-008e-4801-accd-7f8aa5b2226c_1024x1024.png?v=1535038372",
  3
);

let producto2 = new producto(
  "Jean No Age",
  "Large",
  2900,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Y5UVofswJ8oJ-DxBXt0UU1NOPQqH9o_0Uw&usqp=CAU",
  3
);
let producto3 = new producto(
  "Campera traviesa",
  "Medium",
  5000,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHIxpuzGq1zmNyzDBvi5ArG5L10t_SowMSA&usqp=CAU",
  3
);
let producto4 = new producto(
  "Vestido dulce",
  "Small",
  2500,
  "https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/original/original--b2bb-b7887f8e9d88el-estilo-de-inspirate-en-las-modelos-de-los-90-mango2-11865681-1-esl-es-mango-jpg.jpg",
  3
);
let producto5 = new producto(
  "Pollera 90s",
  "Medium",
  1900,
  "https://viac.com.ar/wp-content/uploads/2020/03/Pollera-escosesa1-300x450.jpg",
  3
);
let producto6 = new producto(
  "Remera itaran",
  "Large",
  2000,
  "https://http2.mlstatic.com/D_NQ_NP_835230-MLA43474709669_092020-O.jpg",
  3
);

baseDeDatos.push(producto1);
baseDeDatos.push(producto2);
baseDeDatos.push(producto3);
baseDeDatos.push(producto4);
baseDeDatos.push(producto5);
baseDeDatos.push(producto6);

let aux = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
  if (baseDeDatos[i].stock > 0)
    aux += `

 <div  class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
      <a href="#"><img class= "card-img-top imagenes" src=${baseDeDatos[i].imagen} alt=""></a>
         <div  class="card-body">
          <h4 class="card-title">
           <a href="#">${baseDeDatos[i].nombre}</a> 
          </h4>
          <h5>${baseDeDatos[i].precio}</h5>
          
          <button  onclick="agregarAlCarrito(baseDeDatos[${i}])">Agregar al carrito</button>
         </div>
       <div class="card-footer">
           <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
       </div>
    </div>  
   

  
 `; 
}
document.getElementById("productos").innerHTML = aux;

// Json

let carritoStorage = localStorage.getItem("carrito")
if (carritoStorage !=null) {
  console.log("entro a la validacion")

  let valoresDelCarrito = JSON.parse(carritoStorage );
  carrito = valoresDelCarrito;
  actulizarCarritoHTML()
}

function agregarAlCarrito(producto) {
  let productoCarrito = null
  //buscamos si el carrito existe

  for (let i = 0; i < carrito.length; i++) {
  if(carrito[i].nombre == producto.nombre){
    productoCarrito = carrito [i]
  }
  }
  if(carrito.length== 0 || productoCarrito == null){
    carrito.push(producto)
  }else if( productoCarrito !=null){
    productoCarrito.cantidad++
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actulizarCarritoHTML()
}



















function borrarUnProducto() {
  const nuevoCarrito = [];
  for (let i = 0; i < carrito.length; i++) {
    if (i != 1) {
      nuevocarrito.push(carrito[i]);
    }
  }
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  carrito = nuevoCarrito;
  actulizarCarritoHTML()
}


function vaciarCarrito(){
  carrito=[]
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actulizarCarritoHTML()
}






function actulizarCarritoHTML(){
  const $btnPrecioTotal = document.getElementById("precio-total")
  const $listaProducto =document.getElementById("lista-productos")
  let precioTotal = 0;
  let listaProducto = ""
  for (let i = 0; i < carrito.length; i++) {

    //lista producto
    listaProducto += `
    <div class="dropdown-item">
      nombre: ${carrito[i].nombre}
      <br>
      <span>precio: $${carrito[i].precio}</span>
      <span>cantidad: x${carrito[i].cantidad}</span>
    </div>
    <hr>`

    //precio total
    precioTotal += carrito[i].precio * carrito[i].cantidad;
  }
  $btnPrecioTotal.innerHTML = precioTotal;
  // operador ternario
  // $listaProducto.innerHTML = (listaProducto == "") ? "No hay productos" : listaProducto
  // $listaProducto.innerHTML = "No hay productos"
  // $listaProducto.innerHTML = listaProducto
  if(listaProducto == ""){
    $listaProducto.html = "No hay productos";  
  }else{
    $listaProducto.innerHTML = listaProducto;
  }
}

    
// function compra(){
//   let nombre = $("#input-nombre").val();
//   let apellido = $("#input-apellido").val();
//   let edad = $("#input-edad").val();

//   if(edad>=18){
//       $("#parrafo-estadodecompra").html("COMPRA ACEPTADA");
//   }else{
//       $("#parrafo-estadodecompra").html("COMPRA DENEGADA");
//   }
// }


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

























