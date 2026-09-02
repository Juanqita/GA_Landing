// Datos de carta para los 3 restaurantes de Grupo Alfaro.
// Orden fijo en todo el sitio: Migración -> Mala Vida -> La Gran Gallina.
// Cada item admite un campo opcional "image" (ruta a foto del plato).
// Cuando no existe, la fila se muestra solo con texto (estado actual).

window.GRUPO_ALFARO_MENUS = {
  migracion: {
    slug: "migracion",
    name: "Migración",
    tagline: "De Japón a Perú",
    logo: "assets/logos/migracion.jpg",
    whatsapp: "https://wa.me/573000000000?text=Hola%2C%20quiero%20reservar%20en%20Migraci%C3%B3n",
    ctaLabel: "Reservar",
    categories: [
      {
        category: "Entradas",
        items: [
          { name: "Avocado de camarón", description: "Opción 1: Camarones salteados al ajillo, salsa ponzu, aguacate y alga nori crocante. Opción 2: Camarones salteados al ajillo, crema de leche, vino blanco, aguacate y alga nori crocante.", price: "$28.900" },
          { name: "Causa de panceta crocante", description: "Deliciosa causa peruana con panceta crocante, aguacate, cebolla morada, queso crema y huevo.", price: "$30.200" },
          { name: "Causa de pollo", description: "Puré de papa criolla, pollo, cebolla, maíz tierno, aguacate, huevo cocido, salsa de ají amarillo y crispa de zanahoria.", price: "$26.600" },
          { name: "Causa de chalaca", description: "Puré de papa criolla con atún en cubos, en salsa de mermelada de ajíes ahumados, huevo cocido, salsa de chalaca y ceviche, crispy de remolacha.", price: "$30.200" },
          { name: "Causa limeña", description: "Base de puré de papa criolla con pasta de ají amarillo relleno de atún, cebolla, tomate, aguacate, huevo cocido y cilantro.", price: "$28.900" },
          { name: "Papa a la huancaína", description: "Papas fritas, huevo cocido, aguacate y cremosa salsa huancaína.", price: "$21.900" },
          { name: "Tartar de atún", description: "Atún en cubos, marinado en salsa negra ahumada, aguacate y toques de cilantro.", price: "$32.800" },
          { name: "Explosión tempura", description: "Camarones apanados, bañados en una salsa de nikkei y zanahoria crispa.", price: "$38.600" },
          { name: "Nori tacos", description: "3 algas nori tempurizadas, arroz de sushi y aguacate con 3 ceviches de diferente sabor (camarón, coco, ají amarillo).", price: "$32.900" },
          { name: "Tiradito en crema rocoto", description: "Pescado blanco marinado, espejo de crema rocoto, aguacate y maíz desgranado, pimentón en cabello de ángel.", price: "$37.300" },
          { name: "Tiradito Nikkei", description: "Tiradito de pescado (salmón, tilapia y atún), en salsa de ají amarillo, ponzu y crema de rocoto.", price: "$37.300" },
          { name: "Ensalada de cangrejo", description: "Palmito de cangrejo en salsa dinamita con langostinos crocantes sobre una cama de crema de aguacate.", price: "$39.900" }
        ]
      },
      {
        category: "Ceviches",
        items: [
          { name: "Ceviche de panceta crocante", description: "Panceta crocante marinada en limón, ají dulce, cebolla morada, cilantro, queso crema, base de salsa de ají amarillo, acompañado de patacones.", price: "$34.900" },
          { name: "Ceviche de ají amarillo", description: "Pescado blanco marinado en limón, cebolla morada, cilantro, sal, pimienta, salsa de ají amarillo de base y quinoa crocante. (Plato picante)", price: "$35.200" },
          { name: "Ceviche criollo", description: "Pescado blanco y camarón marinado, ceviche de tomate y cebolla morada en plumas.", price: "$34.000" },
          { name: "Ceviche de camarón", description: "Pescado blanco y camarón marinado, maduro, maíz tierno, cebolla morada en plumas y mayonesa de la casa.", price: "$35.500" },
          { name: "Ceviche tradicional", description: "Pescado blanco marinado, cebolla morada, cilantro, ají amarillo, sal y pimienta.", price: "$31.200" },
          { name: "Ceviche de atún", description: "Atún cortado en cubos con salsa de mermelada de ají, mango, cebolla en plumas y brotes sobre crema de aguacates.", price: "$34.500" }
        ]
      },
      {
        category: "Platos fuertes",
        items: [
          { name: "Arroz Chaufa con cerdo crocante", description: "Arroz salteado con vegetales, pimentón, cebolla morada, arveja y raíz china, soya, aceite de ajonjolí, vinagre de sushi, acompañado de cerdo crocante bañado en salsa teriyaki.", price: "$34.900" },
          { name: "Arroz satori", description: "Arroz salteado con pimentón, cebolla larga, un toque de soya, aceite de ajonjolí, acompañado de ensalada fresca de pollo, cebolla morada, tomate cherry, cilantro y salsa sweet chilli. (Plato picante)", price: "$37.900" },
          { name: "Pollo saltado", description: "Pollo saltado con pimentón, cebolla morada, tomate chonto, salsa ponzu, vinagre de sushi y cilantro, acompañado de arroz basmati y papas francesas.", price: "$34.900" },
          { name: "Atún saltado", description: "Atún saltado con cebolla morada, tomate chonto, pimentón, cilantro, salsa ponzu y vinagre de sushi, acompañado de arroz cremoso con salsa de ají amarillo.", price: "$41.000" },
          { name: "Salmón del puerto", description: "Salmón a la plancha, con papa criolla, tomate cherry, crema de aguacate acompañado con salsa de maracuyá.", price: "$42.600" },
          { name: "Lomo en salsa rocoto", description: "Solomo de res de 200 gramos sellado a la plancha, bañado en nuestra salsa rocoto, acompañado de ensalada fresca y papa criolla. (Plato picante)", price: "$42.600" },
          { name: "Chifita casero", description: "Lomo de cerdo en cocción de 6 horas al horno, arroz basmati, ensalada de pepino y rábano encurtido, huevo cocido bañado con salsa agridulce.", price: "$32.300" },
          { name: "Salmón green", description: "Salmón a la plancha, zanahoria, zucchini verde y amarillo salteados, papa criolla, tomate cherry, acompañado con alioli de cilantro.", price: "$42.600" },
          { name: "Arroz chaufa", description: "Arroz frito con vegetales, tocineta, pollo, decorado con tortilla de huevo y camarón.", price: "$37.300" },
          { name: "Arroz cremoso de mariscos", description: "Arroz cremoso, ajo, perejil, crema de leche, camarón, anillos de calamar, palmito kanikama, cebolla morada, tomate chonto salteado con salsa de ají amarillo.", price: "$41.900" },
          { name: "Lomo saltado", description: "Solomo de res, saltado al wok con tomate, cebolla, salsa ponzu, acompañado de papa a la francesa y arroz basmati.", price: "$39.500" },
          { name: "Chilcano atigrado", description: "Ceviche con leche de tigre, papa criolla, maíz tierno, pasta de ají amarillo, pescado blanco y terminado con cilantro y maíz cancha.", price: "$33.400" }
        ]
      },
      {
        category: "Sushi",
        items: [
          { name: "Papu roll", description: "Palmito tempurizado, aguacate, ajonjolí, tartar de atún, cebollín y salsa explosión.", price: "$33.200" },
          { name: "Sushi beef", description: "Langostino crocante, cebolla crunch, sour cream, solomo de res y crema de aguacate.", price: "$32.600" },
          { name: "Sushi dulce tentación", description: "Tocineta crocante, zanahoria crispy, sour cream, láminas de plátano maduro, con nuestra jalea de guayaba.", price: "$27.900" },
          { name: "Tolly roll", description: "Pescado blanco, plátano maduro, queso crema, tartar de rábano y jengibre encurtido con una mayonesa japonesa y un toque de miel, decorado con maíz cancha crocante.", price: "$39.900" },
          { name: "Kraken roll", description: "Langostino crocante, palmito kanikama, mayo sweet chilli, salmón, chutney de mango, terminado con crispy de papa.", price: "$38.900" },
          { name: "Big roll", description: "Atún fresco, palmito kanikama, pepino, salmón fresco con salsa ponzu, camarón crocante con alioli de cilantro.", price: "$35.500" },
          { name: "Poki roll", description: "Tilapia ligeramente apanada, jengibre encurtido, aguacate y salsa ahumada.", price: "$34.000" },
          { name: "Salmón roll", description: "Salmón ligeramente apanado, aguacate kanikama y salsa explosión.", price: "$34.000" },
          { name: "Sushi charrón", description: "Maki, panceta de cerdo, aguacate, queso crema, bañado en nuestra salsa chalaca (salsa ceviche, tomate, cebolla, maíz tierno), terminado con quinoa crocante.", price: "$33.400" },
          { name: "Ceviche roll", description: "Aguacate, mayonesa japonesa, langostino apanado, láminas de pescado blanco, salsa de ceviche y maduritos.", price: "$32.300" },
          { name: "Sushi nikkei", description: "Queso crema, salmón fresco, atún fresco, aguacate, salsa dinamita y crispy de zanahoria.", price: "$33.200" },
          { name: "Pasión salmón", description: "Salmón en salsa de maracuyá y mayonesa japonesa, aguacate y palmito de cangrejo.", price: "$40.500" }
        ]
      },
      {
        category: "Sanguche",
        items: [
          { name: "Sanguche de panceta", description: "Panceta de cerdo crocante en cocción lenta, chalaca de ceviche (tomate, cebolla morada, maíz tierno), salsa explosión.", price: "$27.500" },
          { name: "Sanguche de pollo", description: "Pechuga de pollo a la plancha, cebolla morada, tomate chonto, aguacate, mayo sweet chilli.", price: "$26.300" },
          { name: "Sanguche de tilapia", description: "Pescado blanco ligeramente apanado, pepino, rábano encurtido, sour cream.", price: "$31.800" },
          { name: "Sanguche de lomo", description: "Solomo de res, tomate chonto, cebolla morada, aguacate, zumo de limón y mayonesa de ajo ahumado.", price: "$36.200" }
        ]
      },
      {
        category: "Cocktails",
        items: [
          { name: "Pisco sour", description: "Pisco, limón, azúcar, clara de huevo. Tradicional - Maracuyá - Frutos rojos.", price: "$30.000" }
        ]
      },
      {
        category: "Cervezas",
        items: [
          { name: "Heineken · Sol · Tres Cordilleras", description: "", price: "$12.000" }
        ]
      },
      {
        category: "Sodas",
        items: [
          { name: "Maracuyá · Frutos rojos", description: "", price: "$10.000" }
        ]
      },
      {
        category: "Limonadas y jugos",
        items: [
          { name: "Limonadas", description: "Nikkei - Natural - Cerezada - Coco - Mango biche.", price: "$10.000" },
          { name: "Jugos", description: "Mango.", price: "$7.000" }
        ]
      }
    ]
  },

  malavida: {
    slug: "mala-vida",
    name: "Mala Vida",
    tagline: "Fast food",
    logo: "assets/logos/mala-vida.jpg",
    whatsapp: "https://wa.me/573000000000?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Mala%20Vida",
    rappi: "https://www.rappi.com.co",
    ctaLabel: "Hacer pedido",
    categories: [
      {
        category: "Papitas",
        items: [
          { name: "Papitas con chorizo", description: "300 g de papa a la francesa, chorizo jugoso, queso costeño y salsa BBQ de mandarina.", price: "$15.000" },
          { name: "Papitas con pollo", description: "300 g de papa a la francesa, pollo jugoso, queso costeño y mayonesa de cilantro.", price: "$15.000" },
          { name: "Papitas con carne", description: "300 g de papa a la francesa, carne jugosa, queso costeño y sour cream.", price: "$15.000" },
          { name: "Papitas con cerdo", description: "300 g de papa a la francesa, cerdo jugoso, queso costeño y mayo sweet chili.", price: "$15.000" },
          { name: "Papitas huancaína", description: "300 g de papa a la francesa, huevo, aguacate y salsa huancaína cremosa.", price: "$15.000" }
        ]
      },
      {
        category: "El francés",
        items: [
          { name: "Francés de chorizo", description: "Taco francés cargado de chorizo jugoso, mozzarella derretido, salsa cheddar, papa a la francesa y mayonesa sweet chill.", price: "$18.000" },
          { name: "Francés de carne", description: "Taco francés cargado de res jugosa, mozzarella derretido, salsa cheddar, papa a la francesa y salsa de pimienta.", price: "$18.000" },
          { name: "Francés de pollo", description: "Taco francés cargado de pollo jugoso, mozzarella derretido, salsa cheddar, papa a la francesa y mayonesa de cilantro.", price: "$18.000" }
        ]
      },
      {
        category: "Hamburguesas",
        items: [
          { name: "Hamburguesa Mala Vida", description: "Pan brioche sellado en mantequilla, carne jugosa, queso mozzarella, piña asada, queso costeño asado, tocineta y mayonesa de ajo.", price: "$18.000" }
        ]
      },
      {
        category: "Pops",
        items: [
          { name: "Pop de pollo", description: "Pollito crujiente para pecar sin culpa.", price: "$15.000" },
          { name: "Pop de cerdo", description: "Cerdo crujiente para pecar sin culpa.", price: "$15.000" }
        ]
      },
      {
        category: "Bebidas",
        items: [
          { name: "Hatsu tea", description: "", price: "$8.000" },
          { name: "Gaseosas", description: "Canada Dry Ginger - Postobón Colombiana - Postobón Manzana.", price: "$5.000" },
          { name: "Aguas", description: "Agua con gas - Agua Hatsu.", price: "$5.000" },
          { name: "Bretaña", description: "", price: "$8.000" }
        ]
      }
    ]
  },

  gallina: {
    slug: "gallina",
    name: "La Gran Gallina",
    tagline: "& Típicos",
    logo: "assets/logos/gallina.jpg",
    whatsapp: "https://wa.me/573000000000?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20La%20Gran%20Gallina",
    ctaLabel: "Hacer pedido",
    categories: [
      {
        category: "Platos para compartir",
        items: [
          { name: "Gallina a la brasa x 4", description: "Gallina a la brasa dorada y jugosa, ideal para compartir entre cuatro personas.", price: "$138.000" },
          { name: "Media gallina a la brasa x 2", description: "Media gallina a la brasa de cocción lenta, perfecta para compartir entre dos personas.", price: "$69.000" },
          { name: "1/4 de gallina a la brasa", description: "Porción de gallina a la brasa dorada, jugosa y llena de sabor.", price: "$34.500" }
        ]
      },
      {
        category: "Carnes",
        items: [
          { name: "Sobrebarriga en salsa", description: "Tierna sobrebarriga de res cocida lentamente y bañada en salsa criolla de la casa.", price: "$45.000" },
          { name: "Lengua en salsa", description: "Lengua de res cocinada a fuego lento, servida en una tradicional salsa criolla.", price: "$38.000" },
          { name: "Costilla de res sudada", description: "Costilla de res cocida lentamente en salsa criolla hasta alcanzar una textura suave y jugosa.", price: "$38.000" },
          { name: "Chuleta de cerdo", description: "Chuleta de cerdo dorada y jugosa, acompañada de limón.", price: "$38.000" },
          { name: "Costillas de cerdo", description: "Costillas de cerdo tiernas y jugosas, cocinadas lentamente para resaltar su sabor.", price: "$45.000" },
          { name: "Churrasco con suero", description: "Corte de res a la parrilla acompañado de suero costeño.", price: "$45.000" }
        ]
      },
      {
        category: "Sopas y platos tradicionales",
        items: [
          { name: "Mondongo", description: "Tradicional sopa de mondongo preparada con verduras y especias.", price: "$34.900" },
          { name: "Ajiaco", description: "Sopa tradicional colombiana elaborada con pollo, papa y mazorca.", price: "$34.900" },
          { name: "Sancocho trifásico", description: "Sancocho tradicional preparado con res, cerdo y pollo, acompañado de sus guarniciones.", price: "$42.000" },
          { name: "Frijoles antioqueños", description: "Fríjoles cocidos lentamente con el auténtico sabor de la tradición antioqueña.", price: "$24.900" }
        ]
      },
      {
        category: "Pescados",
        items: [
          { name: "Mojarra", description: "Mojarra frita al punto, crujiente por fuera y jugosa por dentro.", price: "$45.000" },
          { name: "Trucha salsa satái", description: "Filete de trucha bañado en salsa satái de inspiración asiática.", price: "$38.000" }
        ]
      }
    ]
  }
};

// Orden fijo de exhibición en todo el sitio.
window.GRUPO_ALFARO_ORDER = ["migracion", "malavida", "gallina"];
