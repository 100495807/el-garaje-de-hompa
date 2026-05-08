# El Garaje de Hompa

Una revista diaria de coches para leer con la cabeza fria y el corazon un poco revolucionado.

Aqui no se trata de repetir fichas tecnicas ni de hablar bien de cualquier coche por llevar un logo bonito en el capo. El Garaje de Hompa nace para mezclar opinion personal, cultura de motor y guias utiles para quien quiere comprar, entender o simplemente disfrutar un coche con criterio.

## La Idea

Cada dia, un coche.

Puede ser un clasico que ya empieza a subir, un deportivo moderno que todavia merece la pena, un usado que parece buena compra o una rareza que nadie esta mirando lo suficiente. El enfoque siempre es el mismo: contar que tiene de especial, que problemas puede esconder y si hoy sigue teniendo sentido.

## Promesa Editorial

- Opinion clara, sin reverencia automatica por las marcas.
- Datos utiles para comprar mejor.
- Contexto historico sin convertir cada articulo en una enciclopedia.
- Fallos comunes, versiones recomendables y puntos a revisar.
- Fotos y recursos usados con cuidado por licencias y atribucion.
- Textos asistidos por IA cuando haga falta, pero siempre con criterio editorial humano.

## Calendario

- Lunes: clasicos europeos.
- Martes: japoneses con culto.
- Miercoles: usados inteligentes.
- Jueves: novedades y coches actuales.
- Viernes: deportivos y versiones especiales.
- Sabado: guias de compra.
- Domingo: rarezas con encanto.

## Formato De Cada Articulo

Cada pieza deberia responder a estas preguntas:

- Por que importa este coche?
- Que version merece mas la pena?
- Que suele fallar?
- Cuanto sentido tiene comprarlo hoy?
- Para quien si y para quien no?
- Cual es el veredicto honesto?

## Publicacion

La revista se publica desde GitHub Pages:

```text
https://100495807.github.io/el-garaje-de-hompa/
```

Feed RSS:

```text
https://100495807.github.io/el-garaje-de-hompa/rss.xml
```

Los articulos viven en `src/content/articulos/` como archivos Markdown. La portada muestra automaticamente el articulo publicado mas reciente.

Para crear un borrador nuevo:

```bash
npm run new:article -- "Nombre del coche"
```

El flujo editorial completo esta en `docs/flujo-editorial.md`.

Notas utiles:

- Dominio propio: `docs/dominio.md`
- Estadisticas y SEO: `docs/estadisticas.md`

Para trabajar en local:

```bash
npm install
npm run dev
```

Para comprobar la web antes de publicar:

```bash
npm run build
```
