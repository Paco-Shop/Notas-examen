Petición 10. Siguiendo las reglas del Prompt Maestro, créame `app/page.tsx`:
la página principal, que lo ensambla todo.
- Es un Server Component async. NO lleva 'use client'.
- Exporta `export const dynamic = 'force-dynamic'` (regla 2).
- Obtiene las notas con `obtenerNotas()` de '@/lib/notas'.
- Muestra:
 1. Una cabecera con el título "Mis notas" y, debajo, el número de notas
 ("3 notas" / "1 nota" / "Ninguna nota todavía", con el plural correcto).
 2. El FormularioNota de '@/components/inicio/FormularioNota'.
 3. El ListaNotas de '@/components/ListaNotas' con las notas, pasándole los
 textos del estado vacío.
- Centrado, con un ancho máximo tipo max-w-4xl, padding horizontal para que no
 se pegue a los bordes en móvil y buen espaciado vertical. Colores solo de la
 paleta (regla 14).
Recuérdame por qué hace falta el `export const dynamic = 'force-dynamic'`.