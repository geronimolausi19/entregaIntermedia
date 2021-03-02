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
  "http://d26lpennugtm8s.cloudfront.net/stores/064/882/products/1-remera_certified_estampados_mockup_charly-mas-spinetta1-f91a6d232b8864bc2d16032233908692-640-0.jpg",
  3
);

let producto2 = new producto(
  "Jean No Age",
  "Large",
  2900,
  "https://http2.mlstatic.com/D_NQ_NP_630522-MLA32412185495_102019-W.jpg",
  3
);
let producto3 = new producto(
  "Campera traviesa",
  "Medium",
  5000,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGn6W8upcmhGQt6AOue21qewyA-Hs-8BrvsA&usqp=CAU",
  3
);
let producto4 = new producto(
  "Vestido dulce",
  "Small",
  2500,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QML_tyv2c-L5pdcvZfLXYFQPU3QQ1m71eg&usqp=CAU",
  3
);
let producto5 = new producto(
  "Pollera 90s",
  "Medium",
  1900,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThshmQfKmNcCJPna83CyhxLjWO-VToySXNTA&usqp=CAU",
  3
);
let producto6 = new producto(
  "Remera itaran",
  "Large",
  2000,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5FIS5ZMCzPC4LobowEMsK-R4LmtIpUFLDA&usqp=CAU",
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

 <div  class="col-lg-4 col-md-6 mb-4 ">
      <div class="card h-100 cards ">
      <a href="#"><img class= "card-img-top imagenes " src=${baseDeDatos[i].imagen} alt=""></a>
         <div  class="card-body">
          <h4 class="card-title ">
           <a href="#">${baseDeDatos[i].nombre}</a> 
          </h4>
          <h5>${baseDeDatos[i].precio}</h5>
          
          <button  onclick="agregarAlCarrito(baseDeDatos[${i}])">Agregar al carrito</button>
         </div>
       <div class="card-footer colorblack">
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









//materialdesing









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

    






$.get(
  "https://usig.buenosaires.gob.ar/#servicios",
  function(pepe, estado){
    console.log(estado)
    console.log(pepe)
    baseDeDatos = valores
  }
)






let rigth = new pushbar({
  blur:true,
  overlay:true  


  
});












