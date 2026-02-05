# Nicolás Jofre - Portafolio Profesional

Sitio web de portafolio minimalista y de alta gama para el diseñador gráfico Nicolás Jofre.

## 📁 Estructura del Proyecto

```
portfolio-nicolas-jofre/
├── index.html          # Página principal
├── js/
│   └── portfolio.js    # Lógica del portafolio y datos
├── assets/             # Imágenes y recursos estáticos
├── README.md           # Este archivo
└── nicolas-jofre-signature.png  # Logo/firma (añadir aquí)
```

## 🚀 Características

- ✅ **Diseño Minimalista:** Inspirado en estudios de diseño de alta gama (Estudio Loft, Benjamin Monge, Cid Fotos)
- ✅ **Grid Masonry:** Layout dinámico para el portafolio
- ✅ **Filtrado Dinámico:** Categorías: Branding, Logo Design, Fotografía
- ✅ **Responsive Design:** Optimizado para móvil, tablet y desktop
- ✅ **Modo Oscuro/Claro:** Adaptable según las preferencias del sistema
- ✅ **Navegación Fluida:** Scroll suave entre secciones
- ✅ **Animaciones:** Transiciones sutiles y profesionales
- ✅ **Placeholder Images:** Imágenes de alta calidad de Unsplash

## 📦 Stack Tecnológico

- **HTML5:** Estructura semántica
- **Tailwind CSS:** Estilos vía CDN
- **JavaScript (Vanilla):** Sin frameworks, optimizado para velocidad
- **Google Fonts:** Inter y Playfair Display

## 🎨 Personalización

### Logo/Firma
Coloca tu archivo de firma `nicolas-jofre-signature.png` en la raíz del proyecto. Si el archivo no existe, el sitio mostrará el nombre en texto.

### Imágenes del Portafolio
Las imágenes actuales son placeholders de Unsplash. Para usar tus propias imágenes:

1. Coloca tus imágenes en la carpeta `assets/`
2. Edita `js/portfolio.js`
3. Reemplaza las URLs de Unsplash con tus rutas locales, ejemplo:
   ```javascript
   image: "assets/tu-imagen.jpg",
   ```

### Datos de Contacto
Edita los datos de contacto en `index.html`, sección `<section id="contacto">`:
- Email
- Teléfono
- Ubicación
- Redes sociales (URLs)

### Colores
El tema usa colores neutros (stone tones). Para personalizar:
- Busca clases `stone-*` en `index.html`
- Reemplaza con tu paleta de colores preferida

## 📝 Editar el Portafolio

Para añadir o modificar trabajos, edita `js/portfolio.js`:

```javascript
const portfolioItems = [
    {
        id: 1,
        title: "Nombre del Proyecto",
        category: "branding", // branding, logo, photography
        image: "ruta/a/tu-imagen.jpg",
        description: "Descripción breve del proyecto",
        height: "h-80" // h-64, h-72, h-80, h-88, h-96
    },
    // ... más items
];
```

### Alturas disponibles para el Masonry:
- `h-64`: 16rem (256px)
- `h-72`: 18rem (288px)
- `h-80`: 20rem (320px)
- `h-88`: 22rem (352px)
- `h-96`: 24rem (384px)

### Categorías disponibles:
- `branding`: Identidad de marca
- `logo`: Diseño de logotipos
- `photography`: Fotografía

## 🌐 Despliegue

### Opción 1: GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages desde Settings → Pages
4. El sitio estará disponible en `https://tu-usuario.github.io/portfolio-nicolas-jofre/`

### Opción 2: Netlify / Vercel
1. Arrastra la carpeta `portfolio-nicolas-jofre` al dashboard
2. El sitio se despliega automáticamente

### Opción 3: Hosting tradicional
1. Sube todos los archivos via FTP
2. Asegúrate de mantener la estructura de carpetas

## 🔧 Optimizaciones

- Imágenes cargadas con `loading="lazy"`
- CSS optimizado vía Tailwind CDN
- JavaScript sin dependencias externas
- Animaciones con CSS transitions para mejor performance
- Scroll suave nativo del navegador

## 📱 Responsivo

El sitio está optimizado para:
- 📱 Móvil: < 640px
- 📱 Tablet: 640px - 1024px
- 💻 Desktop: > 1024px

## 🎯 Próximas Mejoras (Opcionales)

- [ ] Formulario de contacto funcional
- [ ] Lightbox para ver imágenes en pantalla completa
- [ ] Página de caso de estudio individual
- [ ] Blog o sección de noticias
- [ ] Integración con Instagram API
- [ ] Buscador de proyectos
- [ ] Modo de alto contraste

## 💡 Tips de Diseño

- La tipografía Playfair Display aporta elegancia y sofisticación
- Inter es ideal para UI y legibilidad
- El color neutro (stone) deja que las imágenes sean las protagonistas
- El espaciado generoso crea una sensación de lujo y calidad

## 📄 Licencia

Este proyecto es de uso personal y comercial para Nicolás Jofre.

---

**Desarrollado con ❤️ para Nicolás Jofre**
