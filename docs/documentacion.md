# Documentación Técnica — Sitio Web Zenial

**Versión:** 1.0.0 | **Fecha:** Mayo 2025 | **Desarrollado por:** Equipo de Desarrollo Web

---

## 1. Introducción

Este documento describe el diseño, arquitectura y funcionamiento del sitio web corporativo de **Zenial S.A.S.**, empresa agroindustrial colombiana dedicada al cultivo de maíz y la producción de harina de alta calidad.

El sitio web ha sido desarrollado como un proyecto de representación corporativa completo, multi-página, con diseño moderno, responsivo y orientado a generar confianza y capturar leads comerciales.

---

## 2. Objetivo del Sistema

El sitio web tiene los siguientes objetivos funcionales:

| Objetivo | Descripción |
|----------|-------------|
| **Presencia Digital** | Representar la identidad corporativa de Zenial en internet |
| **Catálogo de Productos** | Mostrar la línea completa de harinas con fichas técnicas |
| **Generación de Leads** | Capturar contactos comerciales mediante formulario |
| **Educación del Mercado** | Explicar el proceso productivo para generar confianza |
| **Posicionamiento SEO** | Estructura semántica optimizada para motores de búsqueda |

---

## 3. Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **HTML5** | Estándar actual | Estructura semántica de todas las páginas |
| **CSS3** | Estándar actual | Estilos, Grid, Flexbox, animaciones, variables |
| **JavaScript** | ES2022 (Vanilla) | Interactividad: navbar, animaciones, formulario, FAQ |
| **Google Fonts** | CDN | Tipografías: Playfair Display, Inter, Outfit |
| **IntersectionObserver API** | Nativa | Animaciones de revelado al hacer scroll |

> **Sin dependencias externas**: El proyecto no requiere Node.js, frameworks ni librerías de terceros (excepto Google Fonts por CDN). Se puede abrir directamente con cualquier navegador moderno.

---

## 4. Arquitectura del Sitio

### Modelo de Navegación

```
Zenial Website (Multi-Page Application)
│
├── index.html          → Punto de entrada principal
├── nosotros.html       → Información corporativa
├── productos.html      → Catálogo de productos
├── proceso.html        → Proceso productivo
└── contacto.html       → Formulario de contacto
```

### Flujo de Usuario Principal

```
Inicio (Hero) → Conocer Empresa → Ver Productos → Proceso → Contacto/Cotización
```

### Componentes Compartidos

Cada página incluye:
- **Navbar** fija con efecto glass al hacer scroll
- **Footer** con 4 columnas: marca, navegación, productos, contacto
- **Script `main.js`** con interactividad global

---

## 5. Estructura de Carpetas

```
zenial/
├── index.html              ← Página de Inicio
├── nosotros.html           ← Historia, Misión, Visión, Valores
├── productos.html          ← Catálogo de Productos
├── proceso.html            ← Proceso Productivo
├── contacto.html           ← Formulario de Contacto
│
├── css/
│   └── styles.css          ← Sistema de diseño global (600+ líneas)
│
├── js/
│   └── main.js             ← JavaScript principal (~120 líneas)
│
├── assets/
│   ├── logo.png            ← Logo oficial de Zenial (reemplazar)
│   └── images/
│       ├── hero_banner.png         ← Campos de maíz al atardecer
│       └── planta_procesadora.png  ← Interior planta industrial
│
└── docs/
    └── documentacion.md    ← Este archivo
```

---

## 6. Descripción de Cada Página

### 6.1 `index.html` — Inicio
**Propósito:** Primera impresión. Captura atención y dirige al usuario.

**Secciones:**
1. **Hero** — Imagen de fondo de campos de maíz, headline principal, 2 CTA y estadísticas animadas
2. **¿Quiénes Somos?** — Resumen de la empresa con imagen y lista de atributos clave
3. **Estadísticas** — Contadores animados: 15.000 ha, 200 T/día, 500 aliados, 20 años
4. **Productos Destacados** — 3 cards de los productos principales
5. **Proceso Preview** — 4 pasos del proceso con iconos
6. **Certificaciones** — Strip horizontal con 5 certificaciones
7. **CTA Final** — Llamado a la acción para cotizar

**Funcionalidades JS:**
- Scroll counter animation para estadísticas
- Hero content fade-in al cargar
- Reveal animations al hacer scroll

---

### 6.2 `nosotros.html` — Nosotros
**Propósito:** Construir credibilidad y presentar la identidad corporativa.

**Secciones:**
1. **Historia** — Timeline vertical con 5 hitos desde 2005 hasta 2025
2. **Misión y Visión** — Cards glassmorphism sobre fondo verde
3. **Valores** — Grid de 6 valores con íconos y descripción
4. **Equipo Directivo** — 3 perfiles del liderazgo de la empresa

---

### 6.3 `productos.html` — Productos
**Propósito:** Catálogo interactivo de la línea de harinas.

**Secciones:**
1. **Filtros** — 5 botones de filtrado por categoría (JS nativo)
2. **Grid de Productos** — 6 tarjetas con: nombre, descripción, atributos técnicos, usos, CTA
3. **Calidad** — Métricas de control de calidad
4. **CTA** — Solicitud de cotización personalizada

**Productos incluidos:**
- Harina Precocida Blanca
- Harina Precocida Amarilla
- Harina Integral de Maíz
- Masa Nixtamalizada
- Grits de Maíz Industrial
- Harina Fina para Pastelería

---

### 6.4 `proceso.html` — Proceso
**Propósito:** Generar confianza mostrando el proceso productivo transparente.

**Secciones:**
1. **Flujo Resumen** — 7 pasos horizontales sobre fondo oscuro
2. **Etapas Detalladas** — 5 bloques alternados (texto + imagen) con puntos destacados
3. **Tecnología** — 6 cards de tecnologías innovadoras
4. **Sostenibilidad** — 4 compromisos ambientales

---

### 6.5 `contacto.html` — Contacto
**Propósito:** Capturar leads y facilitar comunicación comercial.

**Secciones:**
1. **Info de Contacto** — Card con dirección, teléfonos, email, horarios y redes
2. **Formulario** — 6 campos con validación JS completa
3. **Mapa** — Placeholder de ubicación geográfica
4. **Horarios** — 3 cards de disponibilidad
5. **FAQ** — 6 preguntas frecuentes con accordion interactivo

---

## 7. Sistema de Diseño (CSS)

### Paleta de Colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-primary` | `#E8A020` | Dorado maíz — acentos, CTAs |
| `--color-secondary` | `#2D6A4F` | Verde campo — buttons, detalles |
| `--color-dark` | `#1B4332` | Verde oscuro — navbar, footer |
| `--color-accent` | `#F4A261` | Ámbar cálido — gradientes |
| `--color-light` | `#FFF8EC` | Crema — fondos de sección |
| `--color-text` | `#2C3E50` | Gris carbón — texto principal |

### Tipografía

| Familia | Uso |
|---------|-----|
| `Playfair Display` | Headings (h1–h5) |
| `Inter` | Body text |
| `Outfit` | Labels, navbar, badges |

### Breakpoints Responsive

| Tamaño | Breakpoint | Comportamiento |
|--------|-----------|----------------|
| Desktop | > 1024px | Grid completo, navbar horizontal |
| Tablet | 768–1024px | Grid 2 columnas, footer 2 col |
| Mobile | < 768px | Stack vertical, hamburger menu |
| Small | < 480px | Tipografía reducida, 1 columna |

---

## 8. Instrucciones de Instalación y Uso

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge — últimas 2 versiones)
- Conexión a internet (solo para cargar Google Fonts)
- No requiere servidor ni instalación de dependencias

### Pasos para ejecutar localmente

1. **Descargar/clonar** la carpeta `zenial/` en tu equipo
2. **Agregar el logo** de la empresa en `assets/logo.png`
3. **Abrir** `index.html` con doble clic o con Live Server (VS Code)
4. Navegar entre las páginas usando el menú de navegación

### Agregar el Logo de Zenial

```
Ruta esperada: zenial/assets/logo.png
Formato recomendado: PNG con fondo transparente
Tamaño sugerido: 200×80 px mínimo (mayor resolución es mejor)
```

Si no hay logo, el código mostrará el nombre "Zenial" en tipografía como fallback.

### Publicar en Hosting

Para publicar en un servidor web:
1. Subir toda la carpeta `zenial/` a la raíz del hosting via FTP/SFTP
2. El archivo `index.html` debe estar en la raíz
3. No se requiere configuración de servidor (sitio estático puro)

Compatible con: GitHub Pages, Netlify, Vercel (sitio estático), cPanel, cualquier hosting compartido.

---

## 9. Funcionalidades JavaScript

| Función | Descripción |
|---------|-------------|
| **Navbar scroll** | Cambia opacidad y padding al hacer scroll > 50px |
| **Hamburger menu** | Menú móvil con animación y bloqueo de scroll |
| **Active link** | Detecta la página actual y marca el enlace como activo |
| **Reveal animations** | IntersectionObserver activa clases CSS al entrar al viewport |
| **Counter animation** | Anima contadores numéricos con easing cúbico |
| **Formulario** | Validación de campos requeridos, email, feedback visual |
| **FAQ accordion** | Toggle de respuestas con animación CSS max-height |
| **Filtro de productos** | Muestra/oculta productos según categoría seleccionada |

---

## 10. Contenido Corporativo

### Misión
> "En Zenial, transformamos la generosidad de la tierra en alimentos que nutren familias. Cultivamos maíz con responsabilidad ambiental y lo procesamos con tecnología de vanguardia para ofrecer harinas de la más alta calidad, contribuyendo a la seguridad alimentaria de nuestra región."

### Visión
> "Ser la empresa agroindustrial líder en Latinoamérica en la producción y procesamiento de maíz, reconocida por su innovación tecnológica, compromiso sostenible y excelencia en la calidad de sus productos para el año 2035."

### Jingle Publicitario
> *"Del corazón del campo,*
> *con el calor del sol,*
> *Zenial te da lo mejor,*
> *harina con sabor.*
> *Tradición en tus manos,*
> *calidad en tu hogar,*
> *Zenial — del campo a tu mesa,*
> *sin igual."*

---

## 11. Posibles Mejoras Futuras

| Mejora | Prioridad | Descripción |
|--------|-----------|-------------|
| **Backend de formulario** | Alta | Integrar con servicio como EmailJS, Formspree o backend propio |
| **Blog / Noticias** | Media | Sección de artículos sobre agroindustria y nutrición |
| **Tienda en línea** | Media | Carrito para compras directas al consumidor final |
| **Mapa real** | Baja | Integrar Google Maps API o OpenStreetMap |
| **Multilingual** | Media | Versión en inglés para exportación |
| **CMS headless** | Alta | Gestión de contenido sin editar código (Sanity, Contentful) |
| **Analytics** | Alta | Integrar Google Analytics 4 o Plausible |
| **PWA** | Baja | Soporte offline y app-like experience |
| **Chatbot** | Media | Widget de chat para atención inmediata |
| **Certificados digitales** | Alta | Descargar fichas técnicas PDF de cada producto |

---

## 12. Créditos y Licencias

- **Tipografías**: Google Fonts (Open Font License)
- **Íconos**: Emoji nativos del sistema operativo (sin licencia requerida)
- **Imágenes**: Generadas con IA (Gemini Image Generation) — propiedad de Zenial S.A.S.
- **Código**: Desarrollado a medida para Zenial S.A.S. — todos los derechos reservados

---

*Documento generado el 5 de mayo de 2025. Para actualizaciones contactar al equipo de desarrollo.*
