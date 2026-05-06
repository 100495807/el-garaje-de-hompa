# El Garaje de Hompa

Revista diaria de coches con opinion personal, guias de compra y cultura automovilistica.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicacion

Cada articulo vive en `src/content/articulos/` como Markdown. La portada usa automaticamente el articulo publicado mas reciente.

```bash
npm run build
```

El repo incluye un workflow de GitHub Actions para publicar gratis en GitHub Pages desde la rama `master`.

Antes del primer despliegue, en GitHub hay que activar:

```text
Settings > Pages > Source > GitHub Actions
```

URL esperada:

```text
https://100495807.github.io/el-garaje-de-hompa/
```

## Nombre recomendado del repo

Usa `el-garaje-de-hompa` como nombre tecnico en GitHub. La marca visible de la revista es `El Garaje de Hompa`.
