// Íconos de trazo simples (24x24) para cada herramienta.
export const ICONOS = {
  nota: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 16h5"/>',
  jadas: '<path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16l4-5"/><circle cx="12" cy="16" r="1.2"/>',
  dosis: '<rect x="3.5" y="9" width="17" height="6" rx="3" transform="rotate(-35 12 12)"/><path d="M9.8 8.5l4.4 7"/>',
  laboratorio: '<path d="M9 3h6"/><path d="M10 3v13a2 2 0 0 0 4 0V3"/><path d="M10 11h4"/>',
  criterios: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="M8.5 11l1.5 1.5 3-3"/><path d="M8.5 16.5l1.5 1.5 3-3"/>',
  corticoides: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 15l3-3 2 2 3-4"/>',
  familias: '<circle cx="8" cy="7" r="2.5"/><circle cx="16.5" cy="9" r="2"/><path d="M3.5 19a4.5 4.5 0 0 1 9 0"/><path d="M13 19a3.5 3.5 0 0 1 7 0"/>',
  vacunas: '<path d="M17 3l4 4"/><path d="M19 5l-9 9-3-3 9-9"/><path d="M7 11l-3 3 3 3 3-3"/><path d="M4 20l2-2"/>',
};

export function icono(nombre) {
  const trazo = ICONOS[nombre] ?? ICONOS.nota;
  return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${trazo}</svg>`;
}
