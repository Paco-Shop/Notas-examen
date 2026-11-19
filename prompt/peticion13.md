Petición 13. Siguiendo las reglas del Prompt Maestro, créame
`app/favoritas/page.tsx`.
Es prácticamente igual que app/page.tsx, pero:
- Usa `obtenerNotasFavoritas()` de '@/lib/notas' en lugar de obtenerNotas().
- El título es "Favoritas".
- NO incluye el formulario de creación.
- Los textos del estado vacío son: título "Sin favoritas" y subtítulo
 "Marca una nota con la estrella para verla aquí".
- No olvides `export const dynamic = 'force-dynamic'` ni el metadata con el
 título "Favoritas".
