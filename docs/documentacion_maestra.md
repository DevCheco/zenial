# Documentación Maestra — Plataforma Web Zenial

**Versión:** 1.1.0 | **Fecha:** Mayo 2026 | **Desarrollado por:** Equipo de Desarrollo Web

---

## 1. Introducción y Resumen Ejecutivo

Este documento describe el diseño, arquitectura y funcionamiento del sitio web corporativo de **Zenial S.A.S.**, empresa agroindustrial colombiana dedicada al cultivo de maíz y la producción de harina de alta calidad.

El proyecto se finalizó como una plataforma de representación corporativa completa, con diseño moderno, responsivo y orientado a generar confianza y capturar leads comerciales. Se construyó utilizando tecnologías web estándar sin dependencias de frameworks externos, garantizando tiempos de carga ultrarrápidos, alta compatibilidad y mantenibilidad a largo plazo.

---

## 2. Arquitectura Tecnológica

El proyecto se basa en una arquitectura **Static Site Generation (SSG) / Multi-Page Application (MPA)**.

### Tecnologías Base
- **Estructura Semántica:** `HTML5` (Implementación de etiquetas como `<section>`, `<nav>`, `<header>`, `<footer>` para mejor SEO y accesibilidad).
- **Estilos y Layout:** `CSS3` (Uso intensivo de CSS Variables para theming, Flexbox y CSS Grid para diseño responsivo sin frameworks).
- **Interactividad Global:** `JavaScript Vanilla (ES6+)` modularizado en un único archivo (`main.js`).

> **Sin dependencias externas**: El proyecto no requiere Node.js, frameworks ni librerías de terceros (excepto Google Fonts por CDN). Se puede abrir directamente con cualquier navegador moderno.

---

## 3. Estructura de Directorios

```text
zenial/
├── index.html              ← Landing page (Hero, Video comercial, Destacados)
├── nosotros.html           ← Identidad corporativa, Historia y Equipo
├── productos.html          ← Catálogo con sistema de filtrado dinámico
├── proceso.html            ← Explicación interactiva de etapas productivas
├── contacto.html           ← Formulario validado y FAQ
│
├── css/
│   └── styles.css          ← Core Design System (Tokens, Componentes)
│
├── js/
│   └── main.js             ← Interacciones, observadores y validaciones
│
├── assets/
│   ├── logo.png            ← Logo oficial de Zenial
│   ├── video/              ← Multimedia (Ej. Raíces_a_tu_Mesa.mp4)
│   └── images/             ← Imágenes generadas y optimizadas (.webp)
│
└── docs/
    └── documentacion_maestra.md  ← Este manual técnico unificado
```

---

## 4. Descripción de Componentes y Páginas

### 4.1 `index.html` — Inicio
**Propósito:** Primera impresión. Captura atención y dirige al usuario.
- **Hero:** Headline principal, CTA y estadísticas animadas.
- **Video Comercial:** Uso de *Media Fragments* HTML5 (`#t=0,26`) para reproducir dinámicamente solo los primeros 26 segundos del video institucional.
- **¿Quiénes Somos?:** Resumen de la empresa con lista de atributos.
- **Estadísticas:** Contadores dinámicos (15K+ ha, 200T/día, 500+ aliados).

### 4.2 `nosotros.html` — Nosotros
**Propósito:** Construir credibilidad y presentar la identidad corporativa.
- **Historia:** Timeline vertical con 5 hitos desde 2005.
- **Misión y Visión:** Tarjetas con efecto *glassmorphism*.
- **Equipo Directivo:** Perfiles del liderazgo de la empresa.

### 4.3 `productos.html` — Productos
**Propósito:** Catálogo interactivo de la línea de harinas.
- **Filtros en Memoria:** Botones de filtrado por categoría (JS nativo) sin peticiones a servidor (0ms latency).
- **Tarjetas:** Harina Precocida Blanca, Amarilla, Integral, Masa Nixtamalizada, Grits Industrial, Harina para Pastelería.

### 4.4 `proceso.html` — Proceso Productivo
**Propósito:** Transparencia y confianza en la cadena de valor.
- **Flujo Resumen:** 7 pasos horizontales infográficos.
- **Sostenibilidad:** Compromisos ambientales y economía circular.

### 4.5 `contacto.html` — Contacto
**Propósito:** Capturar leads y facilitar comunicación.
- **Formulario Validado:** Validación nativa y JS (sintaxis de correo, campos vacíos) con interceptor de envío.
- **FAQ:** Preguntas frecuentes con acordeón interactivo CSS/JS.

---

## 5. Diseño e Interfaces (CSS / UI)

### Paleta de Colores
| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-primary` | `#E8A020` | Dorado maíz — acentos, botones CTA |
| `--color-secondary` | `#2D6A4F` | Verde campo — botones secundarios, detalles |
| `--color-dark` | `#1B4332` | Verde oscuro — fondos de sección, navbars |

### Técnicas de Diseño Implementadas
- **CSS Variables (Tokens de Diseño):** Permiten alterar todo el branding desde la cabecera del CSS.
- **Glassmorphism:** Uso de `backdrop-filter: blur(10px)` para interfaces premium.
- **Responsive Design Automático:** Transición fluida de 4 columnas (Desktop) a 1 columna (Móvil) usando Media Queries (`max-width: 1024px` y `768px`).

---

## 6. Lógica, Interactividad y Rendimiento

El desempeño del sistema ha sido optimizado con los siguientes enfoques técnicos:

1. **Intersection Observer API:** La animación de revelado de elementos (`reveal`, `reveal-left`, etc.) se hace de forma nativa cuando entran al *viewport*, sin saturar el hilo principal.
2. **Carga Diferida de Assets (Lazy Loading):** Se aplica `loading="lazy"` a casi todas las imágenes (`.webp`) para ahorrar ancho de banda inicial, exceptuando la zona *above the fold* (Hero y Logo).
3. **Formato WebP:** Se convirtieron todos los assets a `.webp`, reduciendo su peso drásticamente en comparación con `.png`.
4. **Seguridad Total:** Al ser Static Site Generation, no existen inyecciones SQL ni exposición de vulnerabilidades backend.

---

## 7. Contenido Corporativo Identitario

### Misión
> "En Zenial, transformamos la generosidad de la tierra en alimentos que nutren familias. Cultivamos maíz con responsabilidad ambiental y lo procesamos con tecnología de vanguardia."

### Visión
> "Ser la empresa agroindustrial líder en Latinoamérica en la producción y procesamiento de maíz para el año 2035, proyectando presencia en 10 países."

### Jingle / Eslogan
> *"Del corazón del campo, con el calor del sol, Zenial te da lo mejor, harina con sabor."*

---

## 8. Instrucciones de Despliegue (Producción)

El sitio es **100% estático**. Para publicar en un entorno web:
1. Subir el contenido de la carpeta `zenial/` a la raíz de cualquier proveedor (GitHub Pages, Netlify, Vercel, cPanel o AWS S3).
2. Asegurar que el archivo `index.html` resida en la ruta principal.
3. No requiere instalación de bases de datos ni servidores node.

### Próximos Pasos (Recomendaciones)
- **Minificación:** Reducir `styles.css` a `styles.min.css`.
- **CDN:** Alojar el video corporativo en Cloudflare/S3 si aumenta mucho el tráfico.
- **Backend de Contacto:** Enlazar el formulario simulado actual con un servicio tipo EmailJS, Formspree o un webhook propio.
- **Analytics:** Configurar Google Analytics (GA4) o Plausible para medir interacciones.

---
*© 2026 Zenial S.A.S. Todos los derechos reservados. Informe unificado generado por el Equipo de Desarrollo.*
