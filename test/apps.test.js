import { test } from "node:test";
import assert from "node:assert/strict";
import { APPS, RECORRIDO, recorrido, relacionadas } from "../src/apps.js";
import { ICONOS } from "../src/iconos.js";

test("cada app tiene datos completos, id único e ícono", () => {
  const ids = new Set();
  for (const a of APPS) {
    for (const campo of ["id", "nombre", "descripcion", "url"]) assert.ok(a[campo], `${a.id} sin ${campo}`);
    assert.match(a.url, /^https:\/\//);
    assert.ok(ICONOS[a.icono], `${a.id} con ícono desconocido`);
    assert.ok(!ids.has(a.id), `id repetido ${a.id}`);
    ids.add(a.id);
  }
});

test("las relaciones y el recorrido apuntan a apps existentes", () => {
  const ids = new Set(APPS.map((a) => a.id));
  for (const a of APPS) for (const r of a.relacionadas) assert.ok(ids.has(r), `${a.id} → ${r}`);
  for (const p of RECORRIDO) assert.ok(ids.has(p.app), p.app);
});

test("si se quita una app, las demás siguen funcionando sin ella", () => {
  const sinDosis = APPS.filter((a) => a.id !== "dosis");
  const lab = sinDosis.find((a) => a.id === "laboratorio");
  assert.deepEqual(relacionadas(lab, sinDosis).map((a) => a.id), ["vacunas"]);
  const pasos = recorrido(RECORRIDO, sinDosis);
  assert.equal(pasos.length, RECORRIDO.length - 1);
  assert.ok(pasos.every((p) => p.app.id !== "dosis"));
});
