// Configuración de imágenes de productos de Rob Allen Mexico
// Reemplaza las URLs de placeholder con las URLs reales de las imágenes

const PRODUCT_IMAGES = {
    spearguns: {
        carbonSeries: {
            carbonTimberline: {
                name: "Carbon Timberline",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 15999,
                badge: "bestseller"
            },
            carbonTimberlineRollergun: {
                name: "Carbon Timberline Rollergun",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 17999,
                badge: null
            },
            gtTriple: {
                name: "GT Triple",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 17999,
                badge: "new"
            },
            mahiTriple: {
                name: "Mahi Triple",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 14999,
                badge: null
            },
            blueWater: {
                name: "Blue Water",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 12999,
                badge: null
            },
            blueWaterRollergun: {
                name: "Blue Water Rollergun",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 13999,
                badge: null
            },
            digitalCamo: {
                name: "Digital Camo",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 13999,
                badge: null
            },
            digitalRollergun: {
                name: "Digital Rollergun",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 14999,
                badge: null
            },
            doradoCamo: {
                name: "Dorado Camo",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 16999,
                badge: null
            },
            doradoRollergun: {
                name: "Dorado Rollergun",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 17999,
                badge: null
            },
            dualCamo: {
                name: "Dual Camo",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 15999,
                badge: null
            },
            dualRollergun: {
                name: "Dual Rollergun",
                image: "https://www.roballenmexico.mx/wp-content/uploads/[AÑADIR_RUTA_IMAGEN].jpg", // TODO: Reemplazar con URL real
                price: 16999,
                badge: null
            }
        }
    }
};

// Función para obtener la URL de una imagen
function getProductImage(category, series, product) {
    return PRODUCT_IMAGES[category][series][product].image;
}

// Función para obtener todos los productos de una serie
function getProductsBySeries(category, series) {
    return Object.values(PRODUCT_IMAGES[category][series]);
}

