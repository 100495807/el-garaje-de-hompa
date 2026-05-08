# Dominio propio

Opciones favoritas:

- `elgarajedehompa.com`
- `elgarajedehompa.es`

Recomendacion: comprar el `.com` si esta libre. Es mas flexible si la revista crece, y se puede redirigir el `.es` al `.com` mas adelante.

## Configuracion pendiente

No cambiar `astro.config.mjs` hasta tener el dominio comprado y configurado en GitHub Pages.

Cuando el dominio este listo:

1. En GitHub, ir a `Settings > Pages > Custom domain`.
2. Escribir el dominio elegido, por ejemplo `elgarajedehompa.com`.
3. Activar `Enforce HTTPS` cuando GitHub lo permita.
4. Configurar DNS en el proveedor del dominio.
5. Cambiar `astro.config.mjs`:

```js
site: "https://elgarajedehompa.com",
base: "/",
```

6. Revisar que enlaces, RSS, sitemap y canonical salen sin `/el-garaje-de-hompa`.
7. Hacer `npm run build`.

## DNS

Para un dominio raiz como `elgarajedehompa.com`, GitHub Pages usa registros tipo `A`, `ALIAS` o `ANAME`, segun el proveedor.

Para `www.elgarajedehompa.com`, normalmente se usa un `CNAME`.

Mi recomendacion practica es configurar ambos:

- `elgarajedehompa.com`
- `www.elgarajedehompa.com`

Y dejar que GitHub Pages redirija uno al otro.
