import { APPS, recorrido, relacionadas } from "./apps.js";
import { icono } from "./iconos.js";

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

document.getElementById("apps").innerHTML = APPS.map((a) => {
  const rel = relacionadas(a);
  return `<article class="app" id="app-${esc(a.id)}">
    <div class="app-cabecera"><span class="app-icono">${icono(a.icono)}</span><h3>${esc(a.nombre)}</h3></div>
    <p>${esc(a.descripcion)}</p>
    ${rel.length ? `<p class="rel">Se usa con: ${rel.map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nombre)}</a>`).join(" · ")}</p>` : ""}
    <a class="abrir" href="${esc(a.url)}" target="_blank" rel="noopener">Abrir</a>
  </article>`;
}).join("");

document.getElementById("recorrido").innerHTML = recorrido().map((p, i) =>
  `<li><span class="num">${i + 1}</span><a href="${esc(p.app.url)}" target="_blank" rel="noopener"><b>${esc(p.app.nombre)}</b><span>${esc(p.paso)}</span></a></li>`,
).join("");
