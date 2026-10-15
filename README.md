# ReumaPedia

Portal que reúne las herramientas de reumatología pediátrica. Cada herramienta es un sitio aparte, con su propio repositorio y su propio proyecto en Vercel; el portal solo las enlaza.

**No guarda ni envía datos.**

## Agregar, cambiar o quitar una herramienta

Todo está en [`src/apps.js`](src/apps.js):

- `APPS`: nombre, descripción, dirección y herramientas relacionadas de cada una.
- `RECORRIDO`: el orden sugerido durante una consulta.

Si se quita una herramienta de la lista, las referencias a ella desde las demás se ignoran solas, así que nada más se rompe. Las herramientas no dependen del portal: se pueden actualizar o borrar por separado.

## Probar

```
npm test
```

Para verla en el navegador, servir la carpeta con cualquier servidor estático (por ejemplo `python3 -m http.server`) y abrir `http://localhost:8000`.

## Publicar en Vercel

Importar el repositorio con Framework Preset **Other**, sin comando de build.
