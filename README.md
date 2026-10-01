# Grupo Alfaro Landing

Sitio estático de presentación y carta digital para el grupo gastronómico Grupo Alfaro, con tres marcas: Migración, Mala Vida y La Gran Gallina.

## Objetivo

Mantener una presencia digital elegante, moderna y rápida para:

- vender la identidad del grupo,
- presentar cada restaurante,
- mostrar la carta por marca,
- dirigir a WhatsApp/Rappi y a la ubicación,
- facilitar cambios de menú y contenido sin framework ni backend.

## Stack actual

- HTML5 estático
- CSS customizado
- JavaScript vanilla
- Assets locales en `assets/`
- Despliegue estático en Render

## Estructura del proyecto

```text
.
├── index.html               # landing principal del grupo
├── migracion.html           # landing/carta de Migración
├── mala-vida.html           # landing/carta de Mala Vida
├── gallina.html             # landing/carta de La Gran Gallina
├── render.yaml              # configuración de despliegue
├── css/
│   └── style.css            # estilos globales del sitio
├── js/
│   ├── menu-data.js         # datos del menú por restaurante
│   └── menu-render.js       # render del menú dinámico
├── assets/
│   ├── logos/               # logos de cada marca
│   ├── collage-migracion/   # fotos de Migración
│   ├── collage-malavida/    # fotos de Mala Vida
│   ├── gallina.jpg          # logo de La Gran Gallina (en raíz si aplica)
│   └── ...
└── README.md                # documentación del proyecto
```

## Qué hace cada página

### 1) `index.html`

Página principal del grupo.

Incluye:
- hero con identidad visual cinematográfica,
- navegación entre marcas,
- presentaciones breves de cada restaurante,
- enlaces directos a cada carta.

Elementos clave:
- `#inicio`
- `#restaurantes`
- tarjetas con links a `migracion.html`, `mala-vida.html` y `gallina.html`

### 2) `migracion.html`

Versión de marca de Migración.

Tiene:
- encabezado propio,
- botones de reserva y Rappi,
- collage de fotos,
- mapa con Google Maps,
- zona principal de menú cargada por JS.

### 3) `mala-vida.html`

Versión de marca de Mala Vida.

Tiene:
- branding fast food,
- collage fotográfico del restaurante,
- CTA de WhatsApp y Rappi,
- menú renderizado dinámicamente.

### 4) `gallina.html`

Versión de marca de La Gran Gallina.

Tiene:
- enfoque típico y campesino,
- CTA de WhatsApp,
- collage con placeholders en algunas fotos,
- ubicación y menú dinámico.

## Sistema de menús

El sitio no usa backend ni CMS; la carta se mantiene en JavaScript.

### Archivo principal

`js/menu-data.js`

Aquí viven los objetos por restaurante:
- `migracion`
- `malavida`
- `gallina`

Cada restaurante tiene:
- `slug`
- `name`
- `tagline`
- `logo`
- `whatsapp`
- `ctaLabel`
- `categories[]`
- `items[]`

Cada item puede incluir:
- `name`
- `description`
- `price`
- `image` (opcional)

### Render

`js/menu-render.js` toma `data-restaurant` del `body` y dibuja la estructura del menú en `#menu-root`.

Esto permite que el contenido se mantenga centralizado y se edite desde un solo lugar.

## Estilos y identidad visual

`css/style.css` es la hoja de estilos central.

Incluye:
- variables de color por marca,
- tipografías externas de `Fontshare`,
- patrón de grano y luces cinematográficas,
- hero principal para la landing,
- estilos para páginas de restaurante,
- componentes de menú, CTA, collage, mapas y footer.

Colores clave:
- Migración: rojo / granate
- Mala Vida: morado / dorado
- Gallina: tierra / crema

## Archivos de contenido y actualización

### Cambiar textos e identidad del sitio
- `index.html`
- `css/style.css`

### Cambiar menú o precios
- `js/menu-data.js`

### Cambiar imágenes del restaurante
- `assets/logos/`
- `assets/collage-migracion/`
- `assets/collage-malavida/`
- agregar nuevas imágenes a la estructura del HTML por restaurante

### Cambiar enlaces de contacto / reserva / delivery
- en cada `*.html` se configuran los links de WhatsApp, Rappi o retorno al inicio

## Despliegue

El sitio está configurado como hosting estático desde Render.

Archivo:
- `render.yaml`

Configuración actual:
- `type: web`
- `runtime: static`
- `staticPublishPath: .`
- `pullRequestPreviewsEnabled: true`

## Recomendaciones de mantenimiento

### Actualización semanal
- revisar precios y disponibilidad,
- confirmar WhatsApp y links de delivery,
- comprobar que las imágenes carguen correctamente,
- validar los menús por restaurante.

### Actualización visual
- mantener la misma línea estética del branding,
- preferir imágenes de alta resolución y con estética uniforme,
- no duplicar contenido y mantener una estructura clara por marca.

### Revisión de contenido
- revisar meta descriptions,
- actualizar textos de promociones o cambios de marca,
- verificar que los enlaces de `index.html` siguen funcionando.

## Buenas prácticas para editar el proyecto

1. Cambia el contenido del menú desde `js/menu-data.js` en lugar de tocar el HTML del menú.
2. Mantén el orden fijo de marcas: Migración, Mala Vida, La Gran Gallina.
3. Para cambiar branding visual, usa variables en `:root` del CSS.
4. Cuando agregues una imagen nueva, usa `loading="lazy"` si es posible.
5. Revisa el sitio en navegador después de cada cambio de texto o estructura.

## Estado actual del proyecto

El proyecto ya está funcionando como landing estática con identidad visual sólida y estructura modular para presentación de restaurantes. La parte más sensible a mantener actualizada es la información de menú y enlaces de contacto, porque se centraliza en `js/menu-data.js` y en cada CTA del HTML.

## Siguiente paso recomendado

Si se quiere proseguir con una segunda etapa, conviene:
- migrar los textos a un CMS o JSON externo,
- automatizar actualización de precios,
- añadir SEO técnico y Open Graph,
- preparar versiones para móvil y tablets con chequeo visual más exhaustivo.
