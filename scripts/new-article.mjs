import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const [, , rawTitle, rawSlug] = process.argv;

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " y ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

if (!rawTitle) {
  console.error('Uso: npm run new:article -- "Mazda RX-7 FD"');
  process.exit(1);
}

const slug = rawSlug ? slugify(rawSlug) : slugify(rawTitle);
const articlesDir = path.join(process.cwd(), "src", "content", "articulos");
const articlePath = path.join(articlesDir, `${slug}.md`);
const today = new Date().toISOString().slice(0, 10);

if (existsSync(articlePath)) {
  console.error(`Ya existe un articulo en ${articlePath}`);
  process.exit(1);
}

const template = `---
title: "${rawTitle}: titular editorial pendiente"
description: "Resumen en una frase: que coche es, por que importa y que va a aprender el lector."
pubDate: ${today}
car: "${rawTitle}"
category: "Guia de compra"
heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/REEMPLAZAR-CON-IMAGEN.jpg"
heroAlt: "${rawTitle} visto de tres cuartos"
years: "ANIO-ANIO"
verdict: "Veredicto claro en una frase: compra si tiene sentido, evita si no."
tags: ["Marca", "Modelo", "Guia de compra"]
gallery:
  - src: "https://commons.wikimedia.org/wiki/Special:FilePath/REEMPLAZAR-EXTERIOR.jpg"
    alt: "${rawTitle} exterior"
    caption: "Que debe mirar el lector en esta foto."
    credit: "Autor, licencia"
    source: "https://commons.wikimedia.org/wiki/File:REEMPLAZAR"
  - src: "https://commons.wikimedia.org/wiki/Special:FilePath/REEMPLAZAR-INTERIOR.jpg"
    alt: "${rawTitle} interior"
    caption: "Que cuenta el interior sobre uso, calidad o desgaste."
    credit: "Autor, licencia"
    source: "https://commons.wikimedia.org/wiki/File:REEMPLAZAR"
  - src: "https://commons.wikimedia.org/wiki/Special:FilePath/REEMPLAZAR-DETALLE.jpg"
    alt: "${rawTitle} detalle mecanico o carroceria"
    caption: "Detalle concreto relacionado con compra, version o problema tipico."
    credit: "Autor, licencia"
    source: "https://commons.wikimedia.org/wiki/File:REEMPLAZAR"
buyerNotes:
  - label: "Mirar primero"
    text: "Punto critico que hay que revisar antes de comprar."
  - label: "Version dulce"
    text: "Motor, acabado o configuracion mas recomendable."
  - label: "Bandera roja"
    text: "Senal clara para parar la compra o negociar fuerte."
sources:
  - title: "Fuente tecnica o historica principal"
    url: "https://example.com"
  - title: "Fuente de imagen exterior"
    url: "https://commons.wikimedia.org/wiki/File:REEMPLAZAR"
draft: true
---

El primer parrafo tiene que decir por que este coche merece estar en la revista. Sin Wikipedia con ruedas: una idea clara, un punto de vista y una razon para seguir leyendo.

## Por que importa

Contexto breve. Que trajo, que representa, por que la gente lo busca o por que esta infravalorado.

## Que lo hace especial

Sensaciones, diseno, planteamiento mecanico, posicion en el mercado y personalidad.

## Versiones que tienen sentido

Motores, anos, acabados y configuraciones recomendables. Si hay una version que evitar, decirlo aqui.

## Que mirar antes de comprar

Fallos conocidos, oxido, electronica, historial, modificaciones, coste de piezas y cosas que no perdonan.

## Lo bueno

Tres o cuatro ideas honestas. Nada de vender humo.

## Lo malo

Costes, defectos, edad, mercado inflado o expectativas falsas.

## Veredicto

Conclusion con criterio: para quien si, para quien no y cuanto sentido tiene hoy.
`;

await mkdir(articlesDir, { recursive: true });
await writeFile(articlePath, template, "utf8");

console.log(`Articulo creado: ${path.relative(process.cwd(), articlePath)}`);
console.log("Recuerda cambiar draft a false cuando este revisado.");
