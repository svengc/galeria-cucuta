const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "backdrop-blur",
            "shadow-lg"
        );
    } else {
        navbar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "bg-[rgba(92,122,107,0.95)]",
            "backdrop-blur",
            "shadow-lg"
        );
    }
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
        menuP.textContent = "";
    } else {
        menuP.textContent = "";
    }



});

const cardProducts = [
    {
        id: 1,
        cardImagenes: [
            "../images/catalogo/card-venta3.jpg"
        ],
        title: "Banco Bambú Natural",
        paragraph: "Mueble de madera con almacenamiento y diseño nórdico elegante."
    },
    {
        id: 2,
        cardImagenes: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá moderno de 2 puestos azul",
        paragraph: "Sofá de 2 puestos azul, cómodo y de estilo moderno."
    },
    {
        id: 3,
        cardImagenes: [
            "../images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador de madera estilo nórdico",
        paragraph: "Aparador minimalista de madera con cajón y puertas laterales."
    },
    {
        id: 4,
        cardImagenes: [
            "../images/catalogo/comedor2-1.jpg"
        ],
        title: "Mesa redonda con sillas de ratán",
        paragraph: "Mueble de madera con almacenamiento y diseño nórdico elegante."
    },
    {
        id: 5,
        cardImagenes: [
            "../images/catalogo/mueble-1.jpg"
        ],
        title: "Sofá moderno de 2 puestos azul",
        paragraph: "Sofá de 2 puestos azul, cómodo y de estilo moderno."
    },
    {
        id: 6,
        cardImagenes: [
            "../images/catalogo/mesa-1.jpg"
        ],
        title: "Aparador de madera estilo nórdico",
        paragraph: "Aparador minimalista de madera con cajón y puertas laterales."
    }
    
];

document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cardsContainer");

    if (!cardsContainer) {
        console.error("No se encontró el contenedor cardsContainer");
        return;
    }

    
    cardProducts.forEach(product => {
        const link = document.createElement("a");
        link.href = `infoCardProduct.html?id=${product.id}`;
        link.classList.add(
            "relative", "w-full","h-60", "md:h-120", "rounded-lg", "overflow-hidden",
            "group", "hover:scale-105", "transition-transform", "duration-300", "block", "flex", "items-center", "justify-center"
        );

        // Fondo dinámico
        link.style.backgroundImage = `url(${product.cardImagenes[0]})`;
        link.style.backgroundSize = "cover";
        link.style.backgroundPosition = "center";
        link.style.backgroundRepeat = "no-repeat";

        // Overlay con efecto hover
        const overlay = document.createElement("div");
        overlay.classList.add(
            "absolute", "inset-0", "bg-black/70", "opacity-70",
            "md:opacity-0", "md:group-hover:opacity-100",
            "transition-opacity", "duration-300"
        );

        // Texto
        const textContainer = document.createElement("div");
        textContainer.className = "relative z-10 flex flex-col justify-end h-full text-center p-4 gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300";

        const title = document.createElement("h2");
        title.className = "text-title-alt font-cormorant font-bold tracking-wide text-xl md:text-4xl";
        title.textContent = product.title;

        const paragraph = document.createElement("p");
        paragraph.className = "text-form font-montserrat text-xs md:text-lg";
        paragraph.textContent = product.paragraph;

        textContainer.appendChild(title);
        textContainer.appendChild(paragraph);

        link.appendChild(overlay);
        link.appendChild(textContainer);

        cardsContainer.appendChild(link);
    });
});