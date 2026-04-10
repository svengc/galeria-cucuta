window.addEventListener("load", () => {
    const bannerText = document.querySelector("section p");

    bannerText.classList.remove("opacity-0", "translate-y-10");
    bannerText.classList.add("opacity-100", "translate-y-0");
});
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuP = document.getElementById("menuP");
const links = menu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("scale-95");
    menu.classList.toggle("pointer-events-none");
    menu.classList.toggle("backdrop-blur-sm");
    menu.classList.toggle("bg-black/70");

    // links.forEach(link => {
    //     link.classList.toggle("text-white");
    //     link.classList.toggle("text-black");
    // });

    if (menu.classList.contains("opacity-0")) {
        menuP.textContent = "Menú";
    } else {
        menuP.textContent = "";
        menuP.classList.add("animate-pulse");
    }
});
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const banner = document.querySelector("section");
const navContainer = document.getElementById("navContainer");
const navContents = document.getElementById("navContents");
const navIcons = document.querySelectorAll("#navContents svg");

window.addEventListener("scroll", () => {

    const bannerHeight = banner.offsetHeight;
    const scrollY = window.scrollY;

    let progress = scrollY / (bannerHeight / 2);

    if (progress > 1) progress = 1;

    if (progress) {
        navContainer.classList.add("py-0");
        navContainer.classList.remove("py-6");
    } else {
        navContainer.classList.add("py-6");
        navContainer.classList.remove("py-3");
    }

    // Reducir tamaño del navbar y logo
    const scale = 1 - (progress * 0.25);

    logo.style.transform = `scale(${scale})`;
    navIcons.forEach(icon => {
        icon.style.transform = `scale(${scale})`;
    });
    menuText.style.transform = `scale(${scale})`;
});


const productos = [
    {
        id: 1,
        nombre: "Banco Bambú Natural",
        precio: "$1,200,000",
        imagenes: [
            "../images/catalogo/card-venta1.jpg",
            "../images/catalogo/card-venta2.jpg",
            "../images/catalogo/card-venta3.jpg",
            "../images/catalogo/card-venta4.jpg"
        ],
        img_footer: "../images/bnFooter_infoCatalogo/banner-venta.jpg",
        descripcion: "Fabricado en bambú natural...",
        categoria: "Banco con almacenamiento",
        material: "Bambú natural + tapizado",
        estilo: "Nórdico / Orgánico",
        almacenamiento: "Estante inferior",
        garantia: "12 meses"
    },
    {
        id: 2,
        nombre: "Sofá moderno de 2 puestos azul",
        precio: "$1,500,000",
        imagenes: [
            "../images/catalogo/mueble-1.jpg",
            "../images/catalogo/mueble-2.jpg",
            "../images/catalogo/mueble-3.jpg",
            "../images/catalogo/mueble-4.jpg"
        ],
        img_footer: "../images/bnFooter_infoCatalogo/muebles.jpg",
        descripcion: "Sofá de dos puestos con diseño moderno y líneas limpias, tapizado en tela color azul suave. Ofrece comodidad y estilo, ideal para salas contemporáneas. Incluye cojines amplios y apoyabrazos acolchados que brindan mayor confort.",
        categoria: "Descanso e intimidad",
        material: "Estructura en madera con tapizado en tela y patas en madera",
        estilo: "Moderno / Contemporáneo / Minimalista",
        almacenamiento: "No incluye almacenamiento",
        garantia: "12 meses"
    },
    {
        id: 3,
        nombre: "Aparador de madera estilo nórdico",
        precio: "$1,800,000",
        imagenes: [
            "../images/catalogo/mesa-1.jpg",
            "../images/catalogo/mesa-2.jpg",
            "../images/catalogo/mesa-3.jpg",
            "../images/catalogo/mesa-4.jpg"
        ],
        img_footer: "../images/bnFooter_infoCatalogo/banner-silla.jpg",
        descripcion: "Aparador de diseño minimalista con acabado en madera natural. Cuenta con un cajón central y dos compartimentos laterales con puertas, ideal para organizar objetos del hogar mientras aporta un toque cálido y elegante al espacio.",
        categoria: "Descanso e intimidad",
        material: "Madera maciza (posiblemente roble o similar) con acabado natural",
        estilo: "Nórdico / Escandinavo / Minimalista",
        almacenamiento: "1 cajón central + 2 compartimentos con puertas laterales",
        garantia: "12 meses"
    },
    {
        id: 4,
        nombre: "Mesa redonda con sillas de ratán",
        precio: "$1,200,000",
        imagenes: [
            "../images/catalogo/comedor2-1.jpg",
            "../images/catalogo/comedor2-2.jpg",
            "../images/catalogo/comedor2-3.jpg",
            "../images/catalogo/comedor2-4.jpg"
        ],
        img_footer: "../images/bnFooter_infoCatalogo/banner-venta.jpg",
        descripcion: "Elegante mesa redonda de madera clara con base tipo pedestal, ideal para comedor o cocina. Incluye 4 sillas de ratán tejidas con cojines acolchados en tono azul claro, brindando comodidad y estilo moderno.",
        categoria: "Comedor & reuniones",
        material: "Madera maciza y ratán natural",
        estilo: "Costero / Escandinavo",
        almacenamiento: "No incluye almacenamiento adicional",
        garantia: "12 meses"
    },
    {
        id: 5,
        nombre: "Sofá moderno de 2 puestos azul",
        precio: "$1,500,000",
        imagenes: [
            "../images/catalogo/mueble-1.jpg",
            "../images/catalogo/mueble-2.jpg",
            "../images/catalogo/mueble-3.jpg",
            "../images/catalogo/mueble-4.jpg"
        ],
        img_footer: "../images/bnFooter_infoCatalogo/muebles.jpg",
        descripcion: "Sofá de dos puestos con diseño moderno y líneas limpias, tapizado en tela color azul suave. Ofrece comodidad y estilo, ideal para salas contemporáneas. Incluye cojines amplios y apoyabrazos acolchados que brindan mayor confort.",
        categoria: "Descanso e intimidad",
        material: "Estructura en madera con tapizado en tela y patas en madera",
        estilo: "Moderno / Contemporáneo / Minimalista",
        almacenamiento: "No incluye almacenamiento",
        garantia: "12 meses"
    },
    {
        id: 6,
        nombre: "Aparador de madera estilo nórdico",
        precio: "$1,800,000",
        imagenes: [
            "../images/catalogo/mesa-1.jpg",
            "../images/catalogo/mesa-2.jpg",
            "../images/catalogo/mesa-3.jpg",
            "../images/catalogo/mesa-4.jpg"
        ],
        img_footer: "../images/bnFooter_infoCatalogo/banner-silla.jpg",
        descripcion: "Aparador de diseño minimalista con acabado en madera natural. Cuenta con un cajón central y dos compartimentos laterales con puertas, ideal para organizar objetos del hogar mientras aporta un toque cálido y elegante al espacio.",
        categoria: "Descanso e intimidad",
        material: "Madera maciza (posiblemente roble o similar) con acabado natural",
        estilo: "Nórdico / Escandinavo / Minimalista",
        almacenamiento: "1 cajón central + 2 compartimentos con puertas laterales",
        garantia: "12 meses"
    }

];



document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || 1; // Por defecto 1

    const producto = productos.find(p => p.id == id);

    if (!producto) {
        document.body.innerHTML = "<h1>Producto no encontrado</h1>";
        return;
    }

    document.getElementById("nombreProducto").textContent = producto.nombre;
    document.getElementById("precioProducto").textContent = producto.precio;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("categoria").textContent = producto.categoria;
    document.getElementById("material").textContent = producto.material;
    document.getElementById("estilo").textContent = producto.estilo;
    document.getElementById("almacenamiento").textContent = producto.almacenamiento;
    document.getElementById("garantia").textContent = producto.garantia;
    
    const contenedor = document.getElementById("imagenes");

    contenedor.innerHTML = "";

    producto.imagenes.forEach(img => {
        const imagen = document.createElement("img");
        imagen.src = img;
        imagen.className = "w-full h-full object-cover rounded-xl";
        contenedor.appendChild(imagen);
    });

    const footerImg = document.querySelector("#img_footer img");

if (producto.img_footer && footerImg) {
    footerImg.src = producto.img_footer;
}

});