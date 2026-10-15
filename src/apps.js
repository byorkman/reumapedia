// Lista de herramientas del portal. Cada app vive en su propio repositorio y su
// propio proyecto de Vercel: para agregar, cambiar o quitar una, alcanza con
// editar esta lista. Si se quita una app, las referencias a ella desde otras
// (relacionadas, recorrido) se ignoran solas.

export const APPS = [
  {
    id: "nota",
    nombre: "Nota de consulta",
    descripcion: "Arma la evolución o la primera consulta con el muñequito articular y la copia a la historia clínica.",
    url: "https://nota-consulta.vercel.app",
    repo: "https://github.com/byorkman/nota-consulta",
    icono: "nota",
    relacionadas: ["jadas", "dosis", "laboratorio", "vacunas"],
  },
  {
    id: "jadas",
    nombre: "Calculadora JADAS",
    descripcion: "Actividad de la AIJ: JADAS-10, 27 y 71 y sus versiones clínicas, con los puntos de corte.",
    url: "https://jadas-calculadora.vercel.app",
    repo: "https://github.com/byorkman/jadas-calculadora",
    icono: "jadas",
    relacionadas: ["nota"],
  },
  {
    id: "dosis",
    nombre: "Dosis",
    descripcion: "Dosis por peso y superficie corporal de las drogas más usadas en reumatología pediátrica.",
    url: "https://dosis-reumapediatria.vercel.app",
    repo: "https://github.com/byorkman/dosis-reumapediatria",
    icono: "dosis",
    relacionadas: ["laboratorio", "vacunas"],
  },
  {
    id: "laboratorio",
    nombre: "Control de laboratorio",
    descripcion: "Qué pedir antes de empezar cada medicación, cada cuánto controlar y qué valores alertan.",
    url: "https://control-laboratorio.vercel.app",
    repo: "https://github.com/byorkman/control-laboratorio",
    icono: "laboratorio",
    relacionadas: ["dosis", "vacunas"],
  },
  {
    id: "vacunas",
    nombre: "Vacunas en inmunosuprimidos",
    descripcion: "Qué vacunas se pueden dar antes, durante y después del tratamiento, y qué serologías pedir.",
    url: "https://vacunas-inmunosuprimidos.vercel.app",
    repo: "https://github.com/byorkman/vacunas-inmunosuprimidos",
    icono: "vacunas",
    relacionadas: ["dosis", "laboratorio"],
  },
];

// Orden sugerido durante una consulta.
export const RECORRIDO = [
  { app: "nota", paso: "Registrar la consulta y el examen articular" },
  { app: "jadas", paso: "Medir la actividad de la enfermedad" },
  { app: "dosis", paso: "Calcular la dosis si se inicia o ajusta un tratamiento" },
  { app: "laboratorio", paso: "Pedir los estudios basales y de control" },
  { app: "vacunas", paso: "Revisar las vacunas según la inmunosupresión" },
];

// Devuelve solo las apps relacionadas que siguen existiendo en la lista.
export function relacionadas(app, apps = APPS) {
  const porId = new Map(apps.map((a) => [a.id, a]));
  return (app.relacionadas ?? []).filter((id) => id !== app.id && porId.has(id)).map((id) => porId.get(id));
}

// Devuelve los pasos del recorrido cuyas apps siguen existiendo, con la app resuelta.
export function recorrido(pasos = RECORRIDO, apps = APPS) {
  const porId = new Map(apps.map((a) => [a.id, a]));
  return pasos.filter((p) => porId.has(p.app)).map((p) => ({ ...p, app: porId.get(p.app) }));
}
