const productos = [
  {
    id: 1,
    nombre: "Bruschetta",
    categoria: "Entradas",
    descripcion: "Pan tostado con tomate, ajo, albahaca y aceite de oliva.",
    precio: 280,
    imagen: "img/bruschetta.svg",
    destacado: false
  },
  {
    id: 2,
    nombre: "Caprese",
    categoria: "Entradas",
    descripcion: "Tomate, mozzarella fresca y albahaca con un toque de aceite.",
    precio: 320,
    imagen: "img/caprese.svg",
    destacado: false
  },
  {
    id: 3,
    nombre: "Focaccia",
    categoria: "Entradas",
    descripcion: "Pan italiano horneado con romero y sal gruesa.",
    precio: 250,
    imagen: "img/focaccia.svg",
    destacado: false
  },
  {
    id: 4,
    nombre: "Pasta Carbonara",
    categoria: "Pastas",
    descripcion: "Spaghetti con huevo, queso pecorino y panceta.",
    precio: 620,
    imagen: "img/carbonara.svg",
    destacado: true
  },
  {
    id: 5,
    nombre: "Pasta Bolognesa",
    categoria: "Pastas",
    descripcion: "Pasta con ragú de res cocinado a fuego lento.",
    precio: 590,
    imagen: "img/bolognesa.svg",
    destacado: false
  },
  {
    id: 6,
    nombre: "Fettuccine Alfredo",
    categoria: "Pastas",
    descripcion: "Fettuccine en salsa cremosa de mantequilla y parmesano.",
    precio: 610,
    imagen: "img/alfredo.svg",
    destacado: false
  },
  {
    id: 7,
    nombre: "Lasagna",
    categoria: "Pastas",
    descripcion: "Capas de pasta, ragú, bechamel y queso gratinado.",
    precio: 680,
    imagen: "img/lasagna.svg",
    destacado: true
  },
  {
    id: 8,
    nombre: "Pizza Margherita",
    categoria: "Pizzas",
    descripcion: "Pizza clásica con tomate, mozzarella y albahaca.",
    precio: 550,
    imagen: "img/margherita.svg",
    destacado: true
  },
  {
    id: 9,
    nombre: "Pizza Pepperoni",
    categoria: "Pizzas",
    descripcion: "Salsa de tomate, mozzarella y pepperoni horneado.",
    precio: 620,
    imagen: "img/pepperoni.svg",
    destacado: false
  },
  {
    id: 10,
    nombre: "Pizza Cuatro Quesos",
    categoria: "Pizzas",
    descripcion: "Mezcla de mozzarella, parmesano, gorgonzola y provolone.",
    precio: 680,
    imagen: "img/cuatro-quesos.svg",
    destacado: false
  },
  {
    id: 11,
    nombre: "Pizza Prosciutto y Rúcula",
    categoria: "Pizzas",
    descripcion: "Jamón crudo, rúcula fresca y lascas de parmesano.",
    precio: 750,
    imagen: "img/prosciutto.svg",
    destacado: false
  },
  {
    id: 12,
    nombre: "Tiramisú",
    categoria: "Postres",
    descripcion: "Postre de café, mascarpone y cacao.",
    precio: 320,
    imagen: "img/tiramisu.svg",
    destacado: true
  },
  {
    id: 13,
    nombre: "Panna Cotta",
    categoria: "Postres",
    descripcion: "Crema italiana suave con coulis de frutos rojos.",
    precio: 280,
    imagen: "img/panna-cotta.svg",
    destacado: false
  },
  {
    id: 14,
    nombre: "Cannoli",
    categoria: "Postres",
    descripcion: "Barquillo crocante relleno de ricotta dulce.",
    precio: 300,
    imagen: "img/cannoli.svg",
    destacado: false
  },
  {
    id: 15,
    nombre: "Limonada",
    categoria: "Bebidas",
    descripcion: "Limonada natural, fresca y ligeramente dulce.",
    precio: 150,
    imagen: "img/limonada.svg",
    destacado: false
  },
  {
    id: 16,
    nombre: "Agua",
    categoria: "Bebidas",
    descripcion: "Botella de agua natural.",
    precio: 80,
    imagen: "img/agua.svg",
    destacado: false
  },
  {
    id: 17,
    nombre: "Refresco",
    categoria: "Bebidas",
    descripcion: "Refresco de cola o naranja, a elección.",
    precio: 120,
    imagen: "img/refresco.svg",
    destacado: false
  },
  {
    id: 18,
    nombre: "Café",
    categoria: "Bebidas",
    descripcion: "Espresso italiano servido en taza pequeña.",
    precio: 140,
    imagen: "img/cafe.svg",
    destacado: false
  }
];

let carrito = [];
let categoriaActual = "Todos";

function formatearPrecio(valor) {
  return "RD$" + valor;
}

function buscarProducto(id) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      return productos[i];
    }
  }
  return null;
}

function crearTarjeta(producto) {
  return (
    '<article class="tarjeta">' +
      '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
      '<div class="tarjeta-cuerpo">' +
        "<h3>" + producto.nombre + "</h3>" +
        "<p>" + producto.descripcion + "</p>" +
        '<p class="precio">' + formatearPrecio(producto.precio) + "</p>" +
        '<button class="boton boton-principal" type="button" data-agregar="' + producto.id + '">Agregar al carrito</button>' +
      "</div>" +
    "</article>"
  );
}

function mostrarProductos(lista) {
  const contenedor = document.getElementById("lista-productos");
  let html = "";

  for (let i = 0; i < lista.length; i++) {
    html += crearTarjeta(lista[i]);
  }

  contenedor.innerHTML = html;
}

function mostrarDestacados() {
  const contenedor = document.getElementById("lista-destacados");
  let html = "";

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].destacado) {
      html += crearTarjeta(productos[i]);
    }
  }

  contenedor.innerHTML = html;
}

function filtrarProductos(categoria) {
  categoriaActual = categoria;
  const botones = document.querySelectorAll(".boton-filtro");

  for (let i = 0; i < botones.length; i++) {
    if (botones[i].getAttribute("data-categoria") === categoria) {
      botones[i].classList.add("activo");
    } else {
      botones[i].classList.remove("activo");
    }
  }

  if (categoria === "Todos") {
    mostrarProductos(productos);
    return;
  }

  const filtrados = [];
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria) {
      filtrados.push(productos[i]);
    }
  }

  mostrarProductos(filtrados);
}

function agregarAlCarrito(id) {
  const producto = buscarProducto(id);
  if (!producto) {
    return;
  }

  let encontrado = null;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === id) {
      encontrado = carrito[i];
    }
  }

  if (encontrado) {
    encontrado.cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
  }

  actualizarCarrito();
  abrirCarrito();
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad;
  }
  return total;
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total-carrito");
  const contador = document.getElementById("contador-carrito");
  let html = "";
  let unidades = 0;

  if (carrito.length === 0) {
    lista.innerHTML = '<p class="vacio">Tu carrito está vacío.</p>';
    total.textContent = formatearPrecio(0);
    contador.textContent = "0";
    return;
  }

  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    const subtotal = item.precio * item.cantidad;
    unidades += item.cantidad;
    html +=
      '<div class="item-carrito">' +
        "<div>" +
          "<strong>" + item.nombre + "</strong>" +
          "<p>Cantidad: " + item.cantidad + "</p>" +
        "</div>" +
        "<div>" +
          "<p>" + formatearPrecio(item.precio) + "</p>" +
          "<p>Subtotal: " + formatearPrecio(subtotal) + "</p>" +
        "</div>" +
      "</div>";
  }

  lista.innerHTML = html;
  total.textContent = formatearPrecio(calcularTotal());
  contador.textContent = String(unidades);
}

function abrirCarrito() {
  document.getElementById("panel-carrito").classList.add("abierto");
  document.getElementById("fondo-carrito").classList.add("visible");
}

function cerrarCarrito() {
  document.getElementById("panel-carrito").classList.remove("abierto");
  document.getElementById("fondo-carrito").classList.remove("visible");
}

function prepararEventos() {
  const botonNavegacion = document.querySelector(".boton-navegacion");
  const navegacion = document.getElementById("navegacion");

  botonNavegacion.addEventListener("click", function () {
    const abierta = navegacion.classList.toggle("abierta");
    botonNavegacion.setAttribute("aria-expanded", abierta ? "true" : "false");
  });

  const enlaces = navegacion.querySelectorAll("a");
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function () {
      navegacion.classList.remove("abierta");
      botonNavegacion.setAttribute("aria-expanded", "false");
    });
  }

  const filtros = document.querySelectorAll(".boton-filtro");
  for (let i = 0; i < filtros.length; i++) {
    filtros[i].addEventListener("click", function () {
      filtrarProductos(this.getAttribute("data-categoria"));
    });
  }

  document.body.addEventListener("click", function (evento) {
    const boton = evento.target.closest("[data-agregar]");
    if (boton) {
      agregarAlCarrito(Number(boton.getAttribute("data-agregar")));
    }
  });

  document.querySelector(".boton-carrito").addEventListener("click", abrirCarrito);
  document.querySelector(".boton-cerrar").addEventListener("click", cerrarCarrito);
  document.getElementById("fondo-carrito").addEventListener("click", cerrarCarrito);
}

mostrarDestacados();
mostrarProductos(productos);
actualizarCarrito();
prepararEventos();
