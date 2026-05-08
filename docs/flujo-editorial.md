# Flujo editorial

El objetivo es que un articulo nuevo salga con estructura de revista, fotos correctas y criterio de compra sin tardar una tarde entera.

## Crear un borrador

```bash
npm run new:article -- "Nombre del coche"
```

Ejemplo:

```bash
npm run new:article -- "Honda S2000 AP1"
```

El comando crea un Markdown en `src/content/articulos/` con `draft: true`. Mientras siga en borrador, Astro no lo muestra en portada, archivo ni RSS.

## Checklist de 30 minutos

1. Elegir el coche y definir el angulo.
2. Buscar 3-4 fotos correctas con licencia clara.
3. Rellenar ficha: anos, categoria, veredicto, tags y notas de compra.
4. Escribir el texto siguiendo la plantilla.
5. Revisar que las imagenes son del coche correcto.
6. Cambiar `draft: true` a `draft: false`.
7. Ejecutar `npm run build`.

## Estructura recomendada

- Primer parrafo con opinion y motivo para leer.
- Por que importa.
- Que lo hace especial.
- Versiones que tienen sentido.
- Que mirar antes de comprar.
- Lo bueno.
- Lo malo.
- Veredicto.

## Regla visual

Cada articulo deberia tener como minimo:

- Hero correcto del coche.
- Foto exterior.
- Foto interior.
- Foto de detalle, version, motor o punto de compra.
- Pie de foto con una idea util, no solo descripcion.
- Credito y enlace de fuente.

## Regla de tono

La voz tiene que sonar a garaje con criterio: clara, personal y util. Si una frase podria estar en una nota de prensa de la marca, hay que reescribirla.
