# 🎥 INSTRUCCIONES PARA AGREGAR TU VIDEO

## Opción 1: Video Local (Recomendado)

1. **Coloca tu video** en la carpeta `videos/` que ya está creada
2. **Nombra el archivo** como `hero-video.mp4` (o cambia el nombre en index.html línea 217)
3. **Formatos soportados**: MP4, WebM, OGG
4. **Tamaño recomendado**: 
   - Resolución: 1920x1080 (Full HD) o 1280x720 (HD)
   - Duración: 10-30 segundos (se repetirá en loop)
   - Tamaño de archivo: Intenta mantenerlo bajo 5-10MB para mejor rendimiento

### Si tu video tiene otro nombre:
Edita `index.html` línea 217 y cambia:
```html
<source src="videos/hero-video.mp4" type="video/mp4">
```
Por el nombre de tu archivo:
```html
<source src="videos/TU_NOMBRE_AQUI.mp4" type="video/mp4">
```

---

## Opción 2: Servicios de Hosting Gratuito

Si prefieres hostear el video en línea:

### A) Cloudinary (Gratis hasta 25GB)
1. Ve a https://cloudinary.com
2. Crea cuenta gratuita
3. Sube tu video
4. Copia la URL y reemplaza en index.html

### B) Vimeo (Gratis)
1. Ve a https://vimeo.com
2. Sube tu video como "Unlisted" (no público)
3. Copia el link directo del video
4. Reemplaza en index.html

### C) YouTube (Gratis)
1. Sube a YouTube como "No listado"
2. Usa el URL de embed
3. Pero YouTube puede tener restricciones de autoplay

---

## Opción 3: Usar con Vercel/Netlify

Si despliegas en Vercel o Netlify, simplemente:
1. Coloca el video en la carpeta `videos/`
2. Haz commit y push
3. El video se servirá automáticamente desde `/videos/hero-video.mp4`

---

## Optimización del Video

Para mejor rendimiento:
- **Comprime el video** con herramientas como:
  - HandBrake (gratis): https://handbrake.fr
  - CloudConvert: https://cloudconvert.com
- **Configuración recomendada**:
  - Codec: H.264
  - Bitrate: 2-5 Mbps
  - Frame rate: 30 fps o menos

---

## Verificar que funciona

1. Abre `index.html` en tu navegador
2. El video debería reproducirse automáticamente en el fondo
3. Si no funciona, verifica:
   - Que el archivo existe en `videos/hero-video.mp4`
   - Que el nombre coincide exactamente (mayúsculas/minúsculas)
   - Que el formato es MP4

