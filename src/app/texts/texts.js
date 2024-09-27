const title = "Blacksoul";
const email = ""; // No se proporcionó email
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573118916959";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Blacksoul, nos especializamos en desafiar la norma con prendas que combinan estilo y actitud. Nuestras camisetas, chaquetas y busos están diseñados para quienes buscan una identidad única y auténtica.",
        description2: "Cada pieza en Blacksoul está hecha con materiales de alta calidad, asegurando comodidad y durabilidad. Si estás buscando un estilo que se salga de lo convencional, Blacksoul es tu marca ideal. ¡Desafía la norma, viste Blacksoul!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Desafía la norma, viste Blacksoul.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/Blacksoul.moda?mibextid=ZbWKwL", // Facebook proporcionado
        instagram: "https://www.instagram.com/blacksoul.moda?igsh=MWNxZm1xcjNvbDZrcw==", // Instagram proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
