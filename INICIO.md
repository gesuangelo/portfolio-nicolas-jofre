# 🚀 Guía de Inicio Rápido

¡Tu portafolio profesional está listo para ser personalizado y desplegado!

## ✅ Pasos Iniciales

### 1. Añadir tu Logo/Firma
Coloca tu archivo `nicolas-jofre-signature.png` en la carpeta raíz del proyecto.

**Ubicación:**
```
portfolio-nicolas-jofre/
└── nicolas-jofre-signature.png ← Colócalo aquí
```

Si no tienes el archivo aún, el sitio mostrará tu nombre en texto.

### 2. Probar el Sitio Web
Abre el archivo `index.html` en tu navegador:

**Windows:**
- Doble clic en `index.html`
- O arrástralo a tu navegador

**Mac:**
- Doble clic en `index.html`
- O abre con Chrome/Safari

### 3. Personalizar los Datos de Contacto
Edita el archivo `index.html` y busca la sección `<section id="contacto">` (línea ~130).

Cambia:
- Email: `hola@nicolasjofre.cl`
- Teléfono: `+56 9 XXXX XXXX`
- Ubicación: `Santiago, Chile`
- Redes sociales: Enlaces de Instagram, Behance, LinkedIn

### 4. Reemplazar las Imágenes del Portafolio
Opciones:

**A. Mantener los placeholders (mientras más)**  
Las imágenes de Unsplash son de alta calidad y funcionan bien como demo.

**B. Usar tus propias imágenes**
1. Coloca tus imágenes en la carpeta `assets/`
2. Edita `js/portfolio.js`
3. Cambia las URLs:
   ```javascript
   // Antes:
   image: "https://images.unsplash.com/...",
   
   // Después:
   image: "assets/tu-proyecto-1.jpg",
   ```

### 5. Añadir o Editar Proyectos
Edita `js/portfolio.js` y modifica el array `portfolioItems`.

Formato de cada proyecto:
```javascript
{
    id: 1,                              // ID único
    title: "Nombre del Proyecto",       // Título visible
    category: "branding",               // branding, logo, photography
    image: "assets/imagen.jpg",         // Ruta de la imagen
    description: "Descripción breve",    // Texto descriptivo
    height: "h-80"                      // h-64, h-72, h-80, h-88, h-96
},
```

### 6. Personalizar Colores (Opcional)
El sitio usa una paleta neutra (stone tones). Para cambiar:

**En index.html, reemplaza:**
- `bg-stone-50` → `bg-gray-50`, `bg-slate-50`, etc.
- `text-stone-900` → `text-gray-900`, etc.

**Clases de color disponibles:**
- `stone` (actual - neutro cálido)
- `gray` (gris neutro)
- `slate` (gris azulado)
- `zinc` (gris metálico)
- `neutral` (tonos neutros)

## 🌐 Desplegar al Internet

### Opción 1: GitHub Pages (Gratuito)
1. Ve a [github.com](https://github.com) y crea una cuenta
2. Crea un nuevo repositorio llamado `portfolio-nicolas-jofre`
3. Sube todos los archivos del proyecto
4. Ve a Settings → Pages → Branch: main → Save
5. Tu sitio estará en: `https://tu-usuario.github.io/portfolio-nicolas-jofre/`

### Opción 2: Netlify (Gratis y fácil)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `portfolio-nicolas-jofre` al dashboard
3. ¡Listo! Tienes una URL gratis en segundos

### Opción 3: Vercel (Gratis)
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de GitHub
3. O arrastra la carpeta directamente

## 📱 Enlace Personalizado

Para un dominio profesional como `nicolasjofre.cl`:

1. Compra el dominio en nic.cl u otro proveedor
2. En GitHub Pages / Netlify / Vercel:
   - Ve a Domain Settings
   - Añade tu dominio
  . Copia los DNS settings
3. En tu proveedor de dominio:
   - Edita los DNS según las instrucciones

## 🎨 Tips de Diseño

### Navegación Fluida
- El scroll suave ya está implementado
- La navegación móvil funciona perfectamente
- Los enlaces activos se resaltan automáticamente

### Animaciones
- Todas las animaciones son sutiles y profesionales
- Carga optimizada para móviles
- Transiciones suaves al cambiar categorías

### Performance
- Imágenes con lazy loading
- CSS optimizado
- JavaScript vanilla (sin frameworks pesados)

## 📝 Checklist Antes de Publicar

- [ ] Añadir logo/firma `nicolas-jofre-signature.png`
- [ ] Verificar datos de contacto correctos
- [ ] Reemplazar al menos algunas imágenes con trabajos reales
- [ ] Probar en móvil (emular en navegador: F12 → ícono móvil)
- [ ] Probar en tablet
- [ ] Probar en desktop
- [ ] Revisar ortografía
- [ ] Configurar dominio personal (opcional)

## 🔧 Solución de Problemas

**Las imágenes no cargan:**
- Verifica que las rutas sean correctas
- Asegúrate de usar `/` no `\` en las rutas

**El logo no aparece:**
- El archivo debe llamarse exactamente `nicolas-jofre-signature.png`
- Debe estar en la carpeta raíz del proyecto

**El sitio se ve mal en móvil:**
- Limpia el caché del navegador
- Verifica que no haya estilos personalizados que sobrescriban Tailwind

**Las animaciones son lentas:**
- Verifica tu conexión a internet
- Desactiva "Reducir movimiento" en sistema si está activo

## 📞 ¿Necesitas Ayuda?

Para más detalles, lee el archivo `README.md` completo.

---

**¡Tu portafolio profesional está listo para impresionar! 🎉**

Las imágenes de Unsplash son temporales. Reemplázalas con tus propios trabajos para mostrar tu verdadero talento.
